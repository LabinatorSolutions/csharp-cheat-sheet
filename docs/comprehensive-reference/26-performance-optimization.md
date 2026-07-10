---
title: "Performance Optimization"
sidebar_position: 26
---

Performance optimization is crucial for creating responsive, efficient applications. C# provides several features and techniques to help you write high-performance code.

## Span<T> and Memory<T>

`Span<T>` and `Memory<T>` are powerful types for working with contiguous memory without allocations.

### Span<T>

`Span<T>` is a ref struct that provides a type-safe view over contiguous memory:

```csharp
// Create a Span from an array
int[] array = { 1, 2, 3, 4, 5 };
Span<int> span = array;

// Create a Span from a part of an array
Span<int> slice = array.AsSpan(1, 3); // [2, 3, 4]

// Create a Span on the stack
Span<byte> stackSpan = stackalloc byte[100];

// Create a Span from a string
ReadOnlySpan<char> nameSpan = "John Doe".AsSpan();

// Modify through a Span
for (int i = 0; i < span.Length; i++)
{
    span[i] *= 2;
}

// Pass to methods without allocations
ProcessData(array.AsSpan());
```

### Memory<T>

`Memory<T>` is similar to `Span<T>` but can be stored in fields and used across async boundaries:

```csharp
// Create Memory from an array
int[] array = { 1, 2, 3, 4, 5 };
Memory<int> memory = array;

// Create a slice
Memory<int> slice = memory.Slice(1, 3);

// Convert to Span when needed
Span<int> span = memory.Span;

// Use in async methods
async Task ProcessAsync(Memory<byte> buffer)
{
    // Can pass Memory<T> across await points
    await WriteToStreamAsync(buffer);
    
    // Convert to Span when needed for direct access
    Span<byte> span = buffer.Span;
    span[0] = 42;
}
```

### String Operations with Spans

Using spans for string operations can significantly reduce allocations:

```csharp
// Traditional string operations (allocates multiple strings)
string input = "Hello, World!";
bool traditional = input.Substring(0, 5).ToLower().Equals("hello");

// Span-based operations (zero allocations)
ReadOnlySpan<char> inputSpan = input.AsSpan();
bool spanBased = inputSpan.Slice(0, 5).Equals("hello".AsSpan(), StringComparison.OrdinalIgnoreCase);

// Parsing without allocations
ReadOnlySpan<char> numberText = "12345".AsSpan();
if (int.TryParse(numberText, out int number))
{
    Console.WriteLine(number);
}
```

## Ref Returns and Locals

Ref returns and locals allow you to return and store references to values rather than copies.

### Ref Returns

```csharp
public ref int FindValue(int[] array, int value)
{
    for (int i = 0; i < array.Length; i++)
    {
        if (array[i] == value)
        {
            return ref array[i]; // Return a reference to the element
        }
    }
    
    throw new ArgumentException("Value not found", nameof(value));
}

// Usage
int[] numbers = { 1, 2, 3, 4, 5 };
ref int found = ref FindValue(numbers, 3);
found = 30; // Modifies the original array
Console.WriteLine(string.Join(", ", numbers)); // 1, 2, 30, 4, 5
```

### Ref Locals

```csharp
int[] array = { 1, 2, 3 };
ref int refLocal = ref array[1]; // Reference to array[1]
refLocal = 20; // Modifies array[1]
Console.WriteLine(array[1]); // 20
```

### Ref Readonly Returns

Return a reference that can't be modified:

```csharp
public ref readonly int GetLargestValue(int[] array)
{
    int maxIndex = 0;
    for (int i = 1; i < array.Length; i++)
    {
        if (array[i] > array[maxIndex])
        {
            maxIndex = i;
        }
    }
    
    return ref array[maxIndex]; // Return a readonly reference
}

// Usage
int[] numbers = { 5, 10, 3, 7 };
ref readonly int largest = ref GetLargestValue(numbers);
Console.WriteLine(largest); // 10

// Error: Cannot modify a readonly reference
// largest = 20;
```

## Stackalloc

The `stackalloc` keyword allocates memory on the stack rather than the heap, which can be faster for small, short-lived buffers:

```csharp
// Allocate an array of 100 integers on the stack
Span<int> stackInts = stackalloc int[100];

// Initialize the array
for (int i = 0; i < stackInts.Length; i++)
{
    stackInts[i] = i;
}

// Conditional stackalloc (C# 7.2+)
Span<byte> buffer = size <= 1024 ? stackalloc byte[size] : new byte[size];

// Stackalloc with initialization (C# 7.3+)
Span<int> values = stackalloc int[] { 1, 2, 3, 4, 5 };
```

> **Warning**: Stack memory is limited. Using `stackalloc` with large sizes can cause a `StackOverflowException`.

## Unsafe Code

Unsafe code gives you direct access to memory through pointers, which can be useful for performance-critical operations:

```csharp
// Enable unsafe code in project settings or use /unsafe compiler option
unsafe
{
    // Declare a pointer
    int* ptr;
    
    // Create an array
    int[] array = { 1, 2, 3, 4, 5 };
    
    // Pin the array and get a pointer to it
    fixed (int* p = array)
    {
        ptr = p;
        
        // Access elements through the pointer
        Console.WriteLine(*ptr); // 1
        Console.WriteLine(*(ptr + 1)); // 2
        
        // Modify elements
        *ptr = 10;
        *(ptr + 1) = 20;
    }
    
    Console.WriteLine(string.Join(", ", array)); // 10, 20, 3, 4, 5
}
```

### Pointer Arithmetic

```csharp
unsafe
{
    int[] array = { 1, 2, 3, 4, 5 };
    
    fixed (int* p = array)
    {
        int* current = p;
        int* end = p + array.Length;
        
        // Iterate using pointer arithmetic
        while (current < end)
        {
            *current *= 2;
            current++;
        }
    }
    
    Console.WriteLine(string.Join(", ", array)); // 2, 4, 6, 8, 10
}
```

## Benchmarking

Proper benchmarking is essential for performance optimization. The BenchmarkDotNet library is the standard tool for .NET benchmarking:

```csharp
// Install BenchmarkDotNet NuGet package
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;

[MemoryDiagnoser] // Track memory allocations
public class StringBenchmarks
{
    private const string Text = "Hello, World!";
    private static readonly char[] Separators = { ' ', ',' };
    
    [Benchmark(Baseline = true)]
    public string[] SplitTraditional()
    {
        return Text.Split(Separators);
    }
    
    [Benchmark]
    public ReadOnlySpan<char> SplitSpan()
    {
        ReadOnlySpan<char> span = Text.AsSpan();
        int commaIndex = span.IndexOf(',');
        return span.Slice(0, commaIndex);
    }
}

// Run the benchmarks
BenchmarkRunner.Run<StringBenchmarks>();
```

## Memory Pooling

Memory pooling reduces garbage collection pressure by reusing memory buffers:

```csharp
using System.Buffers;

// Get a buffer from the shared pool
byte[] buffer = ArrayPool<byte>.Shared.Rent(1024);

try
{
    // Use the buffer
    FillBuffer(buffer);
    ProcessBuffer(buffer);
}
finally
{
    // Return the buffer to the pool when done
    ArrayPool<byte>.Shared.Return(buffer);
}

// Custom pool for specific sizes
ArrayPool<int> customPool = ArrayPool<int>.Create(maxArrayLength: 1024, maxArraysPerBucket: 50);
int[] customBuffer = customPool.Rent(100);
// ...
customPool.Return(customBuffer);
```

### Object Pooling

For custom objects, you can use `ObjectPool<T>`:

```csharp
using Microsoft.Extensions.ObjectPool;

// Create a pool
ObjectPool<StringBuilder> pool = new DefaultObjectPool<StringBuilder>(
    new DefaultPooledObjectPolicy<StringBuilder>());

// Get an object from the pool
StringBuilder sb = pool.Get();

try
{
    // Use the object
    sb.Append("Hello, World!");
    Console.WriteLine(sb.ToString());
}
finally
{
    // Clear the object before returning it
    sb.Clear();
    
    // Return the object to the pool
    pool.Return(sb);
}
```

## Struct Layout

Controlling struct layout can improve performance, especially when interoperating with unmanaged code:

```csharp
// Sequential layout (fields are laid out in the order they appear)
[StructLayout(LayoutKind.Sequential)]
struct SequentialStruct
{
    public int X;
    public double Y;
    public bool Z;
}

// Explicit layout (you specify the exact position of each field)
[StructLayout(LayoutKind.Explicit)]
struct ExplicitStruct
{
    [FieldOffset(0)] public int X;
    [FieldOffset(4)] public double Y;
    [FieldOffset(12)] public bool Z;
}

// Auto layout (compiler decides the layout for best performance)
[StructLayout(LayoutKind.Auto)]
struct AutoStruct
{
    public int X;
    public double Y;
    public bool Z;
}
```

### Struct Packing

Control the alignment of struct fields:

```csharp
// Pack the struct with 1-byte alignment
[StructLayout(LayoutKind.Sequential, Pack = 1)]
struct PackedStruct
{
    public byte A;
    public int B;  // Starts at offset 1, not 4
    public short C; // Starts at offset 5, not 6
}
```

### Readonly Structs

Mark structs as readonly to prevent defensive copies:

```csharp
// Compiler knows this struct is immutable
readonly struct Point
{
    public readonly double X;
    public readonly double Y;
    
    public Point(double x, double y)
    {
        X = x;
        Y = y;
    }
    
    // No defensive copies needed when calling this method
    public readonly double DistanceFromOrigin() => Math.Sqrt(X * X + Y * Y);
}
```

## Performance Best Practices

### Avoid Unnecessary Allocations

```csharp
// Bad: Creates a new string for each iteration
for (int i = 0; i < 1000; i++)
{
    string message = $"Processing item {i}";
    Log(message);
}

// Better: Reuse a StringBuilder
var sb = new StringBuilder();
for (int i = 0; i < 1000; i++)
{
    sb.Clear();
    sb.Append("Processing item ").Append(i);
    Log(sb.ToString());
}

// Best: Use string interpolation handler (C# 10+)
for (int i = 0; i < 1000; i++)
{
    Log($"Processing item {i}");
}
```

### Use Value Types Appropriately

```csharp
// Good use of struct (small, immutable value type)
readonly struct Point3D
{
    public readonly double X;
    public readonly double Y;
    public readonly double Z;
    
    public Point3D(double x, double y, double z)
    {
        X = x;
        Y = y;
        Z = z;
    }
}

// Bad use of struct (large or mutable)
struct LargeData
{
    public byte[] Buffer; // Reference type inside a value type
    public int[] Values; // Another reference type
    
    // Mutable struct with methods that modify state
    public void Update() { /* ... */ }
}
```

### Optimize LINQ Queries

```csharp
var numbers = Enumerable.Range(1, 1000).ToList();

// Bad: Multiple iterations
var result1 = numbers.Where(n => n % 2 == 0)
                    .OrderBy(n => n)
                    .Select(n => n * 2)
                    .ToList();

// Better: Use a single iteration with a custom method
var result2 = numbers.ToList();
ProcessInPlace(result2);

void ProcessInPlace(List<int> items)
{
    for (int i = items.Count - 1; i >= 0; i--)
    {
        if (items[i] % 2 != 0)
        {
            items.RemoveAt(i);
        }
        else
        {
            items[i] *= 2;
        }
    }
    items.Sort();
}
```

### Use Appropriate Collection Types

```csharp
// For frequent lookups by key
Dictionary<string, User> usersByName = new Dictionary<string, User>();

// For ordered data with binary search
SortedList<int, string> sortedItems = new SortedList<int, string>();

// For unique items with fast lookup
HashSet<string> uniqueNames = new HashSet<string>();

// For frequent insertions/removals at both ends
LinkedList<int> linkedList = new LinkedList<int>();

// For concurrent access
ConcurrentDictionary<string, int> concurrentCounts = new ConcurrentDictionary<string, int>();
```

## Resources

- [Performance Best Practices (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/core/performance/performance-best-practices)
- [Span<T> (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.span-1)
- [Memory<T> (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.memory-1)
- [Unsafe Code (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/unsafe-code)
- [BenchmarkDotNet](https://benchmarkdotnet.org/)
- [ArrayPool<T> (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.buffers.arraypool-1)
