---
title: "Interoperability"
sidebar_position: 22
---

Interoperability allows C# code to interact with code written in other languages or platforms. This is essential when working with legacy systems, platform-specific APIs, or non-.NET libraries.

## P/Invoke (Platform Invocation Services)

P/Invoke enables C# code to call functions in unmanaged DLLs, such as the Windows API or custom C/C++ libraries.

```csharp
using System;
using System.Runtime.InteropServices;

class Program
{
    // Import the MessageBox function from user32.dll
    [DllImport("user32.dll", CharSet = CharSet.Unicode)]
    static extern int MessageBox(IntPtr hWnd, string text, string caption, uint type);

    static void Main()
    {
        // Call the unmanaged function
        MessageBox(IntPtr.Zero, "Hello from P/Invoke!", "P/Invoke Example", 0);
    }
}
```

### DllImport Attributes

The `DllImport` attribute has several parameters to control how the function is imported:

```csharp
[DllImport("mydll.dll",
    EntryPoint = "ActualFunctionName",    // Specify the actual name if different
    CharSet = CharSet.Unicode,            // Character set for strings
    SetLastError = true,                  // Capture GetLastError information
    CallingConvention = CallingConvention.Cdecl, // Calling convention
    ExactSpelling = true,                 // Don't look for alternate spellings
    PreserveSig = true)]                  // Preserve the function signature
static extern int MyFunction(string param);
```

### Marshaling Data

Marshaling is the process of converting data between managed and unmanaged code:

```csharp
// Marshaling strings
[DllImport("kernel32.dll", CharSet = CharSet.Unicode)]
static extern IntPtr GetModuleHandle(string moduleName);

// Marshaling structures
[StructLayout(LayoutKind.Sequential)]
struct POINT
{
    public int X;
    public int Y;
}

[DllImport("user32.dll")]
static extern bool GetCursorPos(out POINT lpPoint);

// Using marshaled structures
POINT pt;
if (GetCursorPos(out pt))
{
    Console.WriteLine($"Cursor position: ({pt.X}, {pt.Y})");
}

// Marshaling arrays
[DllImport("kernel32.dll")]
static extern bool ReadProcessMemory(
    IntPtr hProcess,
    IntPtr lpBaseAddress,
    [Out] byte[] lpBuffer,
    int dwSize,
    out IntPtr lpNumberOfBytesRead);
```

### Handling Callbacks

You can pass managed delegates to unmanaged code as function pointers:

```csharp
// Define a delegate that matches the callback signature
delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);

// Import the function that takes a callback
[DllImport("user32.dll")]
static extern bool EnumWindows(EnumWindowsProc enumProc, IntPtr lParam);

// Implement the callback
static bool EnumWindowsCallback(IntPtr hWnd, IntPtr lParam)
{
    int length = GetWindowTextLength(hWnd);
    if (length > 0)
    {
        StringBuilder sb = new StringBuilder(length + 1);
        GetWindowText(hWnd, sb, sb.Capacity);
        Console.WriteLine($"Window handle: {hWnd}, Title: {sb}");
    }
    return true; // Continue enumeration
}

// Supporting functions
[DllImport("user32.dll")]
static extern int GetWindowTextLength(IntPtr hWnd);

[DllImport("user32.dll", CharSet = CharSet.Unicode)]
static extern int GetWindowText(IntPtr hWnd, StringBuilder lpString, int nMaxCount);

// Use the callback
EnumWindows(EnumWindowsCallback, IntPtr.Zero);
```

## COM Interoperability

Component Object Model (COM) is a Microsoft technology for component software. C# can interact with COM components through COM Interop.

### Using COM Components

```csharp
// Reference the COM library in your project
// Add a reference to Microsoft.Office.Interop.Excel

using Microsoft.Office.Interop.Excel;
using System.Runtime.InteropServices;

class Program
{
    static void Main()
    {
        // Create a new Excel application
        Application excel = new Application();
        excel.Visible = true;

        // Add a new workbook
        Workbook workbook = excel.Workbooks.Add();
        Worksheet worksheet = workbook.Worksheets[1];

        // Add some data
        worksheet.Cells[1, 1] = "Hello";
        worksheet.Cells[1, 2] = "World";

        // Clean up (important with COM objects)
        Marshal.ReleaseComObject(worksheet);
        Marshal.ReleaseComObject(workbook);
        excel.Quit();
        Marshal.ReleaseComObject(excel);
    }
}
```

### Creating COM-Visible Components

You can expose your C# classes to COM clients:

```csharp
using System;
using System.Runtime.InteropServices;

// Make the assembly COM-visible
[assembly: ComVisible(true)]

// Define a COM interface
[Guid("12345678-1234-1234-1234-123456789012")]
[InterfaceType(ComInterfaceType.InterfaceIsDual)]
public interface IMyComInterface
{
    void DoSomething(string input);
    string GetResult();
}

// Implement the interface in a COM-visible class
[Guid("87654321-4321-4321-4321-210987654321")]
[ClassInterface(ClassInterfaceType.None)]
[ProgId("MyCSharpLib.MyComClass")]
public class MyComClass : IMyComInterface
{
    private string result;

    public void DoSomething(string input)
    {
        result = $"Processed: {input}";
    }

    public string GetResult()
    {
        return result;
    }
}
```

## Unsafe Code and Pointers

C# allows direct memory manipulation through unsafe code blocks and pointers.

### Unsafe Context

```csharp
// Enable unsafe code in project settings or use /unsafe compiler option

unsafe
{
    // Unsafe code can use pointers
    int x = 10;
    int* ptr = &x; // Get the address of x
    
    Console.WriteLine($"Value of x: {x}");
    Console.WriteLine($"Address of x: {(long)ptr:X}");
    Console.WriteLine($"Value at address: {*ptr}"); // Dereference
    
    // Modify through pointer
    *ptr = 20;
    Console.WriteLine($"New value of x: {x}");
}
```

### Fixed Statement

The `fixed` statement prevents the garbage collector from relocating a variable:

```csharp
unsafe
{
    int[] numbers = { 1, 2, 3, 4, 5 };
    
    // Pin the array in memory
    fixed (int* ptr = numbers)
    {
        // Access array elements through pointer arithmetic
        for (int i = 0; i < numbers.Length; i++)
        {
            Console.WriteLine($"Element {i}: {*(ptr + i)}");
            
            // Modify elements
            *(ptr + i) *= 2;
        }
    }
    
    // Array is modified
    Console.WriteLine(string.Join(", ", numbers)); // 2, 4, 6, 8, 10
}
```

### Pointer Operations

```csharp
unsafe
{
    int x = 10;
    int* ptr = &x;
    
    // Pointer arithmetic
    int* ptr2 = ptr + 1; // Points to the next int-sized memory block
    
    // Pointer comparison
    bool areEqual = ptr == ptr2; // false
    
    // Pointer casting
    byte* bytePtr = (byte*)ptr;
    
    // Pointer to pointer
    int** ptrToPtr = &ptr;
    
    // Void pointer (can point to any type)
    void* voidPtr = ptr;
    
    // Must cast back to use
    int* backToIntPtr = (int*)voidPtr;
}
```

### Stackalloc

Allocate memory on the stack (faster but limited size):

```csharp
unsafe
{
    // Allocate 10 integers on the stack
    int* buffer = stackalloc int[10];
    
    // Initialize and use
    for (int i = 0; i < 10; i++)
    {
        buffer[i] = i * i;
        Console.WriteLine(buffer[i]);
    }
    
    // No need to free - automatically cleaned up when method exits
}

// Safer stackalloc with Span (C# 7.2+)
Span<int> safeBuffer = stackalloc int[10];
for (int i = 0; i < safeBuffer.Length; i++)
{
    safeBuffer[i] = i * i;
}
```

### Function Pointers (C# 9+)

```csharp
unsafe
{
    // Declare a function pointer type
    delegate*<int, int, int> functionPtr;
    
    // Assign a method address
    functionPtr = &Add;
    
    // Call through the function pointer
    int result = functionPtr(5, 3);
    Console.WriteLine($"Result: {result}"); // 8
}

// Target method
static int Add(int a, int b) => a + b;
```

## Marshaling

Marshaling controls how data is transformed when crossing managed/unmanaged boundaries.

### Custom Marshaling

```csharp
// Custom marshaling for strings
[DllImport("user32.dll", CharSet = CharSet.Auto)]
static extern int MessageBox(
    IntPtr hWnd,
    [MarshalAs(UnmanagedType.LPTStr)] string text,
    [MarshalAs(UnmanagedType.LPTStr)] string caption,
    uint type);

// Custom marshaling for arrays
[DllImport("kernel32.dll")]
static extern bool WriteFile(
    IntPtr hFile,
    [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 2)] byte[] lpBuffer,
    int nNumberOfBytesToWrite,
    out int lpNumberOfBytesWritten,
    IntPtr lpOverlapped);

// Custom marshaling for booleans
[DllImport("some.dll")]
static extern void SetFlag(
    [MarshalAs(UnmanagedType.Bool)] bool flag);

// Custom marshaling for structures
[StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
struct SYSTEMTIME
{
    public ushort wYear;
    public ushort wMonth;
    public ushort wDayOfWeek;
    public ushort wDay;
    public ushort wHour;
    public ushort wMinute;
    public ushort wSecond;
    public ushort wMilliseconds;
}

[DllImport("kernel32.dll")]
static extern void GetSystemTime(out SYSTEMTIME lpSystemTime);
```

### Blittable Types

Blittable types have the same memory representation in managed and unmanaged code:

- `byte`, `sbyte`, `short`, `ushort`, `int`, `uint`, `long`, `ulong`, `float`, `double`
- One-dimensional arrays of blittable types
- Structures containing only blittable types

Non-blittable types require marshaling:
- `bool`, `char`, `string`, `decimal`
- Arrays of non-blittable types
- Classes and interfaces

## Resources

- [P/Invoke (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/native-interop/pinvoke)
- [COM Interop (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/native-interop/cominterop)
- [Unsafe Code (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/unsafe-code)
- [Marshaling (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/interop/marshaling-data-with-platform-invoke)
- [P/Invoke.net Wiki](https://www.pinvoke.net/) - Community-maintained P/Invoke signatures
