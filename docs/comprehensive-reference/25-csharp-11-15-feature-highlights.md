---
title: "C# 11-15 Feature Highlights"
sidebar_position: 25
---

C# continues to evolve with each new version, introducing features that make the language more expressive, safer, and more performant. This section highlights the key features introduced in C# versions 11 through 14.

## C# 11 Features

C# 11 was released in 2022 with .NET 7 and introduced several important features.

### Raw String Literals

Raw string literals allow you to write strings with preserved whitespace, newlines, and quotes without escape sequences:

```csharp
// Basic raw string literal (minimum 3 quotes)
string json = """
{
    "name": "John Doe",
    "age": 30,
    "isActive": true
}
""";

// With interpolation ($ before the quotes)
string name = "Alice";
int age = 25;
string jsonWithVars = $"""
{
    "name": "{name}",
    "age": {age},
    "isActive": true
}
""";

// Multiple $ characters for escaping braces in interpolation
int x = 10;
int y = 20;
string coordinates = $$"""
The point is at {{{x}}, {{y}}}
""";
// Output: The point is at {10, 20}
```

### List Patterns

List patterns allow you to match against sequences (arrays, lists, etc.):

```csharp
int[] numbers = { 1, 2, 3, 4, 5 };

// Check if array starts with 1, 2, 3
if (numbers is [1, 2, 3, ..])
{
    Console.WriteLine("Starts with 1, 2, 3");
}

// Check if array ends with 5
if (numbers is [.., 5])
{
    Console.WriteLine("Ends with 5");
}

// Check specific elements with patterns
if (numbers is [> 0, > 0, > 0, ..])
{
    Console.WriteLine("First three elements are positive");
}

// Use in switch expressions
string Describe(int[] arr) => arr switch
{
    [] => "Empty array",
    [var single] => $"Single element: {single}",
    [1, 2, var third, ..] => $"Starts with 1, 2, then {third}",
    [.., var last] when last > 0 => $"Ends with positive number: {last}",
    _ => "Other array"
};
```

### Required Members

Required members ensure properties or fields are initialized during object creation:

```csharp
public class Person
{
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    public int? Age { get; set; } // Optional
}

// Must initialize required members
var person = new Person
{
    FirstName = "John", // Required
    LastName = "Doe"    // Required
};
```

### Auto-Default Structs

In C# 11, struct constructors automatically initialize fields to their default values:

```csharp
struct Point
{
    public int X;
    public int Y;
    
    // Before C# 11, you had to initialize all fields
    // Now, Y is automatically initialized to 0
    public Point(int x)
    {
        X = x;
        // Y is automatically set to 0
    }
}
```

### File-Local Types

The `file` access modifier restricts a type's visibility to the file where it's declared:

```csharp
// Only visible in this file
file class Helper
{
    public static void DoSomething() { }
}

// Public class that can use the file-local Helper
public class Service
{
    public void Process()
    {
        Helper.DoSomething(); // Can use Helper here
    }
}
```

### UTF-8 String Literals

UTF-8 string literals create UTF-8 encoded byte arrays directly:

```csharp
// UTF-8 string literal
ReadOnlySpan<byte> utf8 = "Hello, world"u8;

// Compare with traditional approach
byte[] traditional = Encoding.UTF8.GetBytes("Hello, world");
```

### Generic Math Support

C# 11 introduced static virtual members in interfaces, enabling generic math operations:

```csharp
// Generic method that works with any numeric type
public static T Add<T>(T a, T b) where T : IAdditionOperators<T, T, T>
{
    return a + b;
}

// Usage
int sum1 = Add(5, 10); // 15
double sum2 = Add(3.14, 2.72); // 5.86
```

### Generic Attributes

Generic attributes allow you to create more type-safe attributes:

```csharp
// Generic attribute
public class TypeAttribute<T> : Attribute
{
    public Type ParamType => typeof(T);
}

// Usage
[TypeAttribute<string>]
public void ProcessString() { }

[TypeAttribute<int>]
public void ProcessInt() { }
```

### Extended `nameof` Scope

The `nameof` operator can now be used in more contexts, including attribute arguments:

```csharp
public void Method([NotNull] string parameter)
{
    // Before C# 11, this wouldn't work in attributes
    [CallerArgumentExpression(nameof(parameter))]
    void ValidateParameter() { }
}
```

## C# 12 Features

C# 12 was released in 2023 with .NET 8 and introduced several important features.

### Primary Constructors for Classes and Structs

Primary constructors, previously limited to records, are now available for all classes and structs:

```csharp
// Class with primary constructor
public class Person(string firstName, string lastName)
{
    // Primary constructor parameters are in scope throughout the class
    public string FullName => $"{firstName} {lastName}";
    
    // Methods can use primary constructor parameters
    public string GetInitials() => $"{firstName[0]}.{lastName[0]}.";
}

// Usage
var person = new Person("John", "Doe");
Console.WriteLine(person.FullName); // "John Doe"
```

### Collection Expressions

Collection expressions provide a concise syntax for creating and combining collections:

```csharp
// Create arrays
int[] numbers = [1, 2, 3, 4, 5];
string[] names = ["Alice", "Bob", "Charlie"];

// Create lists
List<int> numberList = [1, 2, 3, 4, 5];

// Create spans
Span<char> chars = ['a', 'b', 'c', 'd'];

// Spread operator
int[] first = [1, 2, 3];
int[] second = [4, 5, 6];
int[] combined = [..first, ..second]; // [1, 2, 3, 4, 5, 6]

// Create 2D arrays
int[][] matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

### Inline Arrays

Inline arrays provide a way to create fixed-size arrays within a struct:

```csharp
[System.Runtime.CompilerServices.InlineArray(10)]
public struct Buffer
{
    private int _element0;
}

// Usage
var buffer = new Buffer();
for (int i = 0; i < 10; i++)
{
    buffer[i] = i * i;
}

foreach (var value in buffer)
{
    Console.WriteLine(value);
}
```

### `ref readonly` Parameters

The `ref readonly` parameter modifier allows passing references without allowing modification:

```csharp
// Pass by reference but prevent modification
public void Process(ref readonly LargeStruct data)
{
    // Can read data but can't modify it
    Console.WriteLine(data.Value);
    
    // Error: Cannot modify a ref readonly parameter
    // data.Value = 42;
}

// Usage
var large = new LargeStruct();
Process(ref large); // Efficient - no copy, but safe from modification
```

### Alias Any Type

You can now create aliases for any type, including complex types:

```csharp
// Alias for a tuple type
using Point = (double X, double Y);

// Alias for a generic type
using StringList = System.Collections.Generic.List<string>;

// Alias for an array type
using Matrix = double[,];

// Usage
Point p = (3.0, 4.0);
StringList names = ["Alice", "Bob"];
Matrix m = new double[2, 2];
```

### Optional Parameters in Lambda Expressions

Lambda expressions now support optional parameters:

```csharp
// Lambda with optional parameter
var greet = (string name, string title = "Mr.") => $"Hello, {title} {name}";

// Usage
Console.WriteLine(greet("Smith")); // "Hello, Mr. Smith"
Console.WriteLine(greet("Johnson", "Dr.")); // "Hello, Dr. Johnson"
```

## C# 13 Features

C# 13 was released in 2024 with .NET 9 and introduced several important features.

### Params Collections

The `params` modifier now works with any collection type, not just arrays:

```csharp
// Works with any collection type that implements IEnumerable<T>
public void ProcessItems<T>(params List<T> items)
{
    foreach (var item in items)
    {
        Console.WriteLine(item);
    }
}

// Usage
ProcessItems(new List<int> { 1, 2, 3 }, new List<int> { 4, 5, 6 });
```

### Ref Struct Interfaces

Ref structs can now implement interfaces:

```csharp
// Interface
public interface IProcessor
{
    void Process(Span<int> data);
}

// Ref struct implementing interface
ref struct FastProcessor : IProcessor
{
    public void Process(Span<int> data)
    {
        for (int i = 0; i < data.Length; i++)
        {
            data[i] *= 2;
        }
    }
}

// Usage
Span<int> numbers = stackalloc int[5] { 1, 2, 3, 4, 5 };
IProcessor processor = new FastProcessor();
processor.Process(numbers);
```

### Partial Properties and Indexers

Properties and indexers can now be split across partial class declarations:

```csharp
// In File1.cs
partial class Document
{
    private string _title;
    public partial string Title { get; }
}

// In File2.cs
partial class Document
{
    public partial string Title => _title;
}
```

### Field Keyword (Preview)

The `field` keyword provides a way to create auto-implemented properties with direct field access:

```csharp
public class Person
{
    // 'field' refers to the compiler-synthesized backing field —
    // no explicit backing field needs to be declared
    public string Name
    {
        get;
        set => field = value ?? throw new ArgumentNullException(nameof(value));
    }
}
```

### Overload Resolution Priority

C# 13 improved overload resolution for methods with similar signatures:

```csharp
// Before C# 13, this could be ambiguous in some cases
void Process(in int value) { }
void Process(ref int value) { }

// C# 13 has clearer rules for resolving these overloads
int x = 10;
Process(in x);  // Calls the 'in' version
Process(ref x); // Calls the 'ref' version
```

### New Escape Sequence (`\e`)

C# 13 adds `\e` as a character literal escape sequence for the ESCAPE character (`U+001B`). Previously you had to use a Unicode escape sequence, or the error-prone `\x1b` (which could swallow following hex digits into the escape):

```csharp
char escapeChar = '\e'; // U+001B, ESCAPE

// Common use: ANSI escape codes for colored console output
Console.WriteLine($"\e[31mThis text is red\e[0m");
```

### Method Group Natural Type Improvements

The compiler now prunes inapplicable candidate methods (wrong arity, unsatisfied constraints) scope-by-scope when determining a method group's natural type, instead of building the full candidate set across all scopes up front. This more closely matches normal overload resolution and can change which natural type (if any) a method group has in edge cases involving overloaded generic methods:

```csharp
class Repository
{
    public void Save(int id) { }
    public void Save<T>(T item) where T : class { }
}

var repo = new Repository();
// The compiler only considers applicable overloads at each scope when
// inferring a natural delegate type for the method group below.
Action<int> saveAction = repo.Save;
```

### `ref struct` as a Generic Type Argument (`allows ref struct`)

A generic type parameter can opt in to accepting `ref struct` types (like `Span<T>`) via the `allows ref struct` constraint. Without it, `ref struct` types still cannot be used as type arguments:

```csharp
// The 'allows ref struct' anti-constraint lets T be a ref struct, such as Span<int>
void ProcessValue<T>(T value) where T : allows ref struct
{
    // Because T might be a ref struct, it can't be boxed, used in async
    // methods, or captured by lambdas/local functions here.
    Console.WriteLine(value?.ToString() ?? "ref struct value");
}

Span<int> numbers = stackalloc int[] { 1, 2, 3 };
ProcessValue(numbers); // Works because of 'allows ref struct'
```

## C# 14 Features

C# 14 was released in 2025 with .NET 10 and introduced several important features.

### Extension Members

Extension members now include properties, events, and operators, not just methods:

```csharp
// Extension properties
public static class StringExtensions
{
    // Extension property
    public static int WordCount(this string str) => 
        string.IsNullOrWhiteSpace(str) ? 0 : str.Split().Length;
    
    // Extension operator
    public static string operator +(this string str, int count) =>
        string.Concat(Enumerable.Repeat(str, count));
}

// Usage
string text = "Hello, world!";
Console.WriteLine(text.WordCount); // 2
Console.WriteLine("Hi" + 3); // "HiHiHi"
```

### Null-Conditional Assignment

The null-conditional assignment operator (`??=`) now works with properties and fields:

```csharp
// Before C# 14
if (person.Address == null)
{
    person.Address = new Address();
}

// With C# 14
person.Address ??= new Address();
```

### Field Keyword

The `field` keyword is now fully supported for accessing backing fields:

```csharp
public class Counter
{
    private int _count;
    
    public int Count
    {
        get => _count;
        set
        {
            if (value < 0)
                throw new ArgumentException("Count cannot be negative");
            _count = value;
        }
    }
    
    // With field keyword - no explicit backing field needed
    public int Count2
    {
        get => field;
        set
        {
            if (value < 0)
                throw new ArgumentException("Count cannot be negative");
            field = value;
        }
    }
}
```

### User-Defined Compound Assignment

You can now define custom compound assignment operators:

```csharp
public readonly struct Money
{
    public decimal Amount { get; }
    public string Currency { get; }
    
    public Money(decimal amount, string currency)
    {
        Amount = amount;
        Currency = currency;
    }
    
    // Define addition operator
    public static Money operator +(Money left, Money right)
    {
        if (left.Currency != right.Currency)
            throw new InvalidOperationException("Currencies must match");
        
        return new Money(left.Amount + right.Amount, left.Currency);
    }
    
    // Define compound assignment operator
    public static Money operator +=(Money left, Money right) => left + right;
}

// Usage
Money wallet = new Money(100, "USD");
wallet += new Money(50, "USD"); // wallet now contains 150 USD
```

### Partial Events and Constructors

Events and instance constructors can now be split across partial class declarations, following the same declaring/implementing pattern as partial methods (see [Partial Events and Constructors](/docs/comprehensive-reference/code-organization#partial-events-and-constructors-c-14) in the Code Organization chapter for the full rules):

```csharp
// In File1.cs
partial class DataProcessor
{
    // Declare the event
    public partial event EventHandler<DataProcessedEventArgs> DataProcessed;
    
    protected virtual void OnDataProcessed(DataProcessedEventArgs e)
    {
        DataProcessed?.Invoke(this, e);
    }
}

// In File2.cs
partial class DataProcessor
{
    // Implement the event (implementing declaration needs add/remove accessors)
    public partial event EventHandler<DataProcessedEventArgs> DataProcessed
    {
        add => _handler += value;
        remove => _handler -= value;
    }
}

// Partial constructors follow the same pattern:
// In File1.cs - defining declaration
partial class DataProcessor
{
    public partial DataProcessor(string sourceName);
}

// In File2.cs - implementing declaration
partial class DataProcessor
{
    private readonly string _sourceName;

    public partial DataProcessor(string sourceName)
    {
        _sourceName = sourceName;
    }
}
```

### Implicit Span Conversions

More implicit conversions between array types and `Span<T>` or `ReadOnlySpan<T>`:

```csharp
// C# 14 adds more implicit conversions
void ProcessData(Span<byte> data) { }

// These now work without explicit conversion
byte[] array = new byte[100];
ProcessData(array); // Implicit conversion from array to Span<T>

ReadOnlySpan<byte> readOnly = array; // Implicit conversion
```

### Modifiers on Simple Lambda Parameters

You can now add parameter modifiers (`scoped`, `ref`, `in`, `out`, `ref readonly`) to lambda parameters without also specifying an explicit type:

```csharp
delegate bool TryParse<T>(string text, out T result);

// C# 14: modifier without an explicit parameter type
TryParse<int> parse = (text, out result) => int.TryParse(text, out result);

// Before C# 14, adding a modifier required explicit types on every parameter:
TryParse<int> parseOld = (string text, out int result) => int.TryParse(text, out result);
```

The `params` modifier still requires an explicitly typed parameter list.

### File-Based Apps Preprocessor Directives

C# 14 adds new preprocessor directives so a single `.cs` file can declare its own SDK and NuGet package references, enabling `dotnet run app.cs` without a project file:

```csharp
#:sdk Microsoft.NET.Sdk
#:package Humanizer@2.14.1

Console.WriteLine(1337.ToWords());
```

Run it directly with `dotnet run app.cs` - no `.csproj` needed. This is intended for scripts, prototypes, and small tools; `dotnet project convert` can turn a file-based app into a full project later.

### `nameof` with Unbound Generic Types

C# 14 also lets `nameof` accept an unbound generic type, e.g. `nameof(List<>)` evaluates to `"List"`. See [Nameof Operator](/docs/comprehensive-reference/operators#nameof-operator-c-6) in the Operators chapter for the full example.

## C# 15 Features (Preview — Not Yet Released)

**C# 15 has not shipped.** It is expected to release with .NET 11 around November 2026, and as of this writing it is only available as a preview via the .NET 11 preview SDK or Visual Studio 2026 Insiders. The features below are documented by Microsoft's official "What's new in C# 15" preview page, but are subject to change before final release — treat all syntax here as provisional, not something you can rely on in shipping code yet.

### Collection Expression Arguments (Preview)

You can pass arguments to the underlying collection's constructor or factory method by using a `with(...)` element as the first element in a collection expression. This feature enables you to specify capacity, comparers, or other constructor parameters directly within the collection expression syntax.

```csharp
// Pass capacity argument to List<T> constructor
string[] values = ["one", "two", "three"];
List<string> names = [with(capacity: values.Length * 2), .. values];

// Pass comparer argument to HashSet<T> constructor
HashSet<string> set = [with(StringComparer.OrdinalIgnoreCase), "Hello", "HELLO", "hello"];
```

### Union Types (Preview)

A `union` declares that a value is exactly one of a fixed set of case types, with the compiler enforcing exhaustive `switch` matching:

```csharp
public record class Cat(string Name);
public record class Dog(string Name);
public record class Bird(string Name);

public union Pet(Cat, Dog, Bird);

Pet pet = new Dog("Rex");
string name = pet switch
{
    Dog d => d.Name,
    Cat c => c.Name,
    Bird b => b.Name,
};
```

### Closed Hierarchies (Preview)

The `closed` modifier fixes a class's set of direct descendants at compile time (within the declaring assembly), enabling exhaustive `switch` checks without a `default` arm:

```csharp
public closed record class GateState;
public record class Closed : GateState;
public record class Open(float Percent) : GateState;

string Describe(GateState state) => state switch
{
    Closed => "closed",
    Open(var percent) => $"{percent}% open",
    // No warning: every direct descendant of 'GateState' is handled.
};
```

### Memory Safety (Preview)

C# 15 begins a multi-release effort to tie `unsafe` requirements to the operations that actually touch unmanaged memory rather than to the mere existence of pointer types. Under the `preview` language version, pointer declarations, `&`, `fixed`, `stackalloc`-to-pointer conversions, and `sizeof` on unmanaged types no longer require an `unsafe` context on their own.

## Resources

- [What's new in C# 11](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-11)
- [What's new in C# 12](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-12)
- [What's new in C# 13](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-13)
- [What's new in C# 14](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-14)
- [What's new in C# 15](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-15)
- [C# Language Versioning](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/configure-language-version)
