---
title: "Core Language Fundamentals"
sidebar_position: 2
---

## Program Structure

A C# program consists of one or more files containing declarations in namespaces. These declarations define types (classes, structs, interfaces, etc.) that contain members (methods, properties, fields, etc.).

### Basic Structure

```csharp
// Namespace declaration
namespace MyApplication
{
    // Type declaration (class)
    public class Program
    {
        // Member declaration (method)
        public static void Main(string[] args)
        {
            // Statements
            Console.WriteLine("Hello, World!");
        }
    }
}
```

### File-Scoped Namespaces (C# 10+)

```csharp
// File-scoped namespace (no curly braces needed)
namespace MyApplication;

// Type declarations directly in the namespace
public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}
```

## Entry Points

Every C# application needs an entry point - the location where execution begins. C# provides two approaches for defining entry points.

### Traditional Main Method

The traditional approach uses a static method named `Main` inside a class or struct:

```csharp
namespace MyApplication
{
    class Program
    {
        // Entry point with void return type
        public static void Main(string[] args)
        {
            Console.WriteLine("Application started");
            
            // Access command-line arguments
            if (args.Length > 0)
            {
                Console.WriteLine($"First argument: {args[0]}");
            }
        }
        
        // Alternative: Entry point with int return type (for exit codes)
        // public static int Main(string[] args)
        // {
        //     // Return 0 for success, non-zero for error
        //     return 0;
        // }
        
        // Alternative: Entry point without parameters
        // public static void Main()
        // {
        //     // No access to command-line arguments
        // }
        
        // Alternative: Async entry point (C# 7.1+)
        // public static async Task Main(string[] args)
        // {
        //     await SomeAsyncMethod();
        // }
    }
}
```

### Top-Level Statements (C# 9+)

Modern C# allows you to write your program's code directly in a file without explicitly defining a class or Main method:

```csharp
// This is a complete C# program with top-level statements
Console.WriteLine("Hello from top-level statements!");

// Access command-line arguments via the args variable
if (args.Length > 0)
{
    Console.WriteLine($"First argument: {args[0]}");
}

// You can define methods and types after the top-level statements
void PrintMessage(string message)
{
    Console.WriteLine($"Message: {message}");
}

// Call the method
PrintMessage("Top-level statements make code simpler");

// Define a class
class Configuration
{
    public string Version { get; set; } = "1.0";
}

// Use the class
var config = new Configuration();
Console.WriteLine($"Version: {config.Version}");
```

**Important notes about top-level statements:**
- Only one file in your application can use top-level statements
- All top-level statements must precede any type or namespace declarations in the file
- The compiler automatically generates a class and Main method behind the scenes
- The `args` parameter is automatically available for command-line arguments

### File-Based Apps (C# 14+)

C# 14 introduces new preprocessor directives (`#:sdk`, `#:package`, and others) that let a single `.cs` file declare its own SDK and package references, so top-level statements can be run directly without a `.csproj` project file:

```csharp
#:sdk Microsoft.NET.Sdk
#:package Humanizer@2.14.1

Console.WriteLine(1337.ToWords());
```

Run it with `dotnet run app.cs`. This lowers the barrier for scripts and small tools; when a file-based app grows into something larger, `dotnet project convert` scaffolds a full project from it.

## Basic Syntax

### Statements and Expressions

- **Statement**: A complete command that performs an action. Statements end with a semicolon (`;`).
- **Expression**: A piece of code that evaluates to a value.

```csharp
// Assignment statement containing an expression (5 + 3)
int result = 5 + 3;

// Method call statement
Console.WriteLine(result);

// Declaration statement
string message;

// Expression statement (method call)
CalculateValue();

// Expression statement (increment)
counter++;
```

### Code Blocks and Scope

Code blocks are defined by curly braces `{}` and create a scope for variables:

```csharp
{
    // Start of a block
    int x = 10; // Variable x is only accessible within this block
    
    {
        // Nested block
        int y = 20; // Variable y is only accessible within this nested block
        Console.WriteLine(x); // Can access x from the outer block
    }
    
    // Console.WriteLine(y); // Error: y is not accessible here
} // End of block
// Console.WriteLine(x); // Error: x is not accessible here
```

### Identifiers

Identifiers are names for variables, methods, classes, etc.:

```csharp
// Valid identifiers
int age;
string firstName;
double _temperature;
bool isValid;
int MaxCount;

// Invalid identifiers
// int 1stPlace;    // Cannot start with a digit
// string class;    // Cannot use a keyword
// double my-value; // Cannot use hyphens

// Using a keyword as an identifier with @ prefix
string @class = "Computer Science";
int @int = 42;
```

### Keywords

C# has two types of keywords:

1. **Reserved keywords**: Cannot be used as identifiers without the `@` prefix.
2. **Contextual keywords**: Have special meaning only in specific contexts.

```csharp
// Some common reserved keywords
// abstract, as, base, bool, break, byte, case, catch, char, checked, class, const,
// continue, decimal, default, delegate, do, double, else, enum, event, explicit,
// extern, false, finally, fixed, float, for, foreach, goto, if, implicit, in, int,
// interface, internal, is, lock, long, namespace, new, null, object, operator, out,
// override, params, private, protected, public, readonly, ref, return, sbyte, sealed,
// short, sizeof, stackalloc, static, string, struct, switch, this, throw, true, try,
// typeof, uint, ulong, unchecked, unsafe, ushort, using, virtual, void, volatile, while

// Some contextual keywords
// add, and, alias, ascending, async, await, by, descending, dynamic, equals, from,
// get, global, group, init, into, join, let, nameof, not, notnull, on, or, orderby,
// partial, record, remove, required, select, set, unmanaged, value, var, when, where, yield
```

## Comments

Comments are used to document code and are ignored by the compiler.

### Single-Line Comments

```csharp
// This is a single-line comment
int x = 10; // This comment is at the end of a line
```

### Multi-Line Comments

```csharp
/* This is a multi-line comment
   that spans multiple lines
   and can be used for longer explanations */
int y = 20;
```

### XML Documentation Comments

XML documentation comments are used to generate documentation for your code:

```csharp
/// <summary>
/// Calculates the sum of two integers.
/// </summary>
/// <param name="a">The first integer.</param>
/// <param name="b">The second integer.</param>
/// <returns>The sum of the two integers.</returns>
/// <exception cref="OverflowException">Thrown when the sum is too large for an int.</exception>
/// <example>
/// <code>
/// int result = Add(5, 3); // Returns 8
/// </code>
/// </example>
public int Add(int a, int b)
{
    return a + b;
}
```

Common XML documentation tags:

| Tag           | Description                                          |
| ------------- | ---------------------------------------------------- |
| `<summary>`   | Provides a brief description of the type or member   |
| `<param>`     | Describes a parameter                                |
| `<returns>`   | Describes the return value                           |
| `<exception>` | Documents an exception that may be thrown            |
| `<remarks>`   | Provides additional information                      |
| `<example>`   | Provides an example of how to use the method or type |
| `<code>`      | Formats text as code                                 |
| `<see>`       | Creates a link to another type or member             |
| `<seealso>`   | Creates a "see also" link                            |
| `<value>`     | Describes a property                                 |
| `<typeparam>` | Describes a type parameter for a generic             |

## Using Directives

Using directives help manage namespaces and types, making code more readable and maintainable.

### Namespace Imports

```csharp
// Import a namespace to use its types without fully qualifying them
using System;
using System.Collections.Generic;
using System.Linq;

// Now you can use types from these namespaces directly
List<int> numbers = new List<int>();
DateTime now = DateTime.Now;
```

### Static Imports (C# 6+)

```csharp
// Import static members of a type
using static System.Math;
using static System.Console;

// Now you can use the static members directly
double result = Sqrt(16); // Instead of Math.Sqrt(16)
WriteLine("Hello"); // Instead of Console.WriteLine("Hello")
```

### Namespace Aliases

```csharp
// Create an alias for a namespace or type
using IO = System.IO;
using Text = System.Text;

// Use the alias
IO.FileInfo file = new IO.FileInfo("data.txt");
Text.StringBuilder sb = new Text.StringBuilder();
```

### Type Aliases (C# 12+)

```csharp
// Create an alias for a type, including complex types
using Point = (double X, double Y);
using UserInfo = Dictionary<string, string>;

// Use the alias
Point location = (3.5, 2.0);
UserInfo user = new UserInfo { ["Name"] = "John", ["Email"] = "john@example.com" };
```

### Global Using Directives (C# 10+)

Global using directives apply to all files in the project. They're typically placed in a dedicated file (e.g., `GlobalUsings.cs`):

```csharp
// These using directives apply to all files in the project
global using System;
global using System.Collections.Generic;
global using System.Linq;
global using System.Threading.Tasks;
```

### Implicit Usings (C# 10+)

In .NET 6+, you can enable implicit usings in your project file to automatically include common namespaces:

```xml
<PropertyGroup>
  <ImplicitUsings>enable</ImplicitUsings>
</PropertyGroup>
```

This automatically includes namespaces like `System`, `System.Collections.Generic`, `System.Linq`, etc., based on your project type.

## Semicolons and Statement Termination

In C#, statements are terminated with semicolons (`;`):

```csharp
int x = 10; // Semicolon terminates the statement
Console.WriteLine(x); // Another statement

// Multiple statements on one line (not recommended for readability)
int y = 20; Console.WriteLine(y);

// Statement blocks don't need semicolons
if (x > 5)
{
    Console.WriteLine("x is greater than 5");
} // No semicolon needed after the closing brace

// Exception: Expression-bodied members use semicolons
public int Square(int x) => x * x; // Semicolon required
```

## Resources

- [C# Language Reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/)
- [C# Programming Guide](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/)
- [C# Coding Conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
