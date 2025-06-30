# C# Comprehensive Reference

> By [ConstructG.com](https://constructg.com) – The Ultimate C# Learning Platform (Covers DSA, Avalonia UI, and Unity)

> Comprehensive guide covering all C# features through version 14

## Table of Contents

1. [Introduction to C#](#1-introduction-to-c)
2. [Core Language Fundamentals](#2-core-language-fundamentals)
3. [Variables and Data Types](#3-variables-and-data-types)
4. [Operators](#4-operators)
5. [Strings and Text Handling](#5-strings-and-text-handling)
6. [Control Flow](#6-control-flow)
7. [Methods and Functions](#7-methods-and-functions)
8. [Object-Oriented Programming](#8-object-oriented-programming)
9. [Structs and Records](#9-structs-and-records)
10. [Interfaces](#10-interfaces)
11. [Enums and Flags](#11-enums-and-flags)
12. [Collections and Data Structures](#12-collections-and-data-structures)
13. [Generics](#13-generics)
14. [Delegates and Events](#14-delegates-and-events)
15. [LINQ (Language Integrated Query)](#15-linq-language-integrated-query)
16. [Advanced Pattern Matching](#16-advanced-pattern-matching)
17. [Asynchronous Programming](#17-asynchronous-programming)
18. [Resource Management](#18-resource-management)
19. [Reflection and Metadata](#19-reflection-and-metadata)
20. [Interoperability](#20-interoperability)
21. [Code Organization](#21-code-organization)
22. [Advanced Language Features](#22-advanced-language-features)
23. [C# 11-14 Feature Highlights](#23-c-11-14-feature-highlights)
24. [Performance Optimization](#24-performance-optimization)
25. [Best Practices and Coding Conventions](#25-best-practices-and-coding-conventions)
26. [Tooling and Ecosystem](#26-tooling-and-ecosystem)
27. [Resources and Further Learning](#27-resources-and-further-learning)

# 1. Introduction to C#

## What is C#?

C# (pronounced "C-sharp") is a modern, type-safe, object-oriented programming language developed by Microsoft. It was designed by Anders Hejlsberg and his team as part of the .NET initiative and was approved as a standard by ECMA and ISO.

Key characteristics of C#:

- **Type-safe**: The C# compiler ensures that operations are performed only on variables of appropriate types.
- **Object-oriented**: C# supports encapsulation, inheritance, and polymorphism.
- **Component-oriented**: C# provides features like properties, events, and attributes that make it ideal for building software components.
- **Modern**: C# continues to evolve with regular updates that introduce new features and improvements.
- **Versatile**: C# can be used to build a wide range of applications, from desktop to web to mobile to cloud services.

## Evolution of C# (Version History)

C# has evolved significantly since its initial release, with each version introducing new features and improvements:

| Version    | Year      | .NET Version   | Key Features                                                                                    |
| ---------- | --------- | -------------- | ----------------------------------------------------------------------------------------------- |
| C# 1.0     | 2002      | .NET 1.0       | First release with basic OOP features                                                           |
| C# 2.0     | 2005      | .NET 2.0       | Generics, nullable types, iterators, anonymous methods                                          |
| C# 3.0     | 2007      | .NET 3.5       | LINQ, lambda expressions, extension methods, anonymous types                                    |
| C# 4.0     | 2010      | .NET 4.0       | Dynamic binding, named/optional parameters, covariance/contravariance                           |
| C# 5.0     | 2012      | .NET 4.5       | Async/await pattern                                                                             |
| C# 6.0     | 2015      | .NET 4.6       | String interpolation, null-conditional operators, expression-bodied members                     |
| C# 7.0     | 2017      | .NET 4.7       | Tuples, pattern matching, local functions, ref returns                                          |
| C# 7.1-7.3 | 2017-2018 | .NET 4.7-4.7.2 | Async Main, default literal, tuple naming, ref locals/returns                                   |
| C# 8.0     | 2019      | .NET Core 3.0  | Nullable reference types, async streams, indices/ranges, switch expressions                     |
| C# 9.0     | 2020      | .NET 5         | Records, init-only properties, top-level statements, pattern matching enhancements              |
| C# 10.0    | 2021      | .NET 6         | Global using directives, file-scoped namespaces, record structs, interpolated string handlers   |
| C# 11.0    | 2022      | .NET 7         | Raw string literals, list patterns, required members, auto-default structs                      |
| C# 12.0    | 2023      | .NET 8         | Primary constructors, collection expressions, inline arrays, ref readonly parameters            |
| C# 13.0    | 2024      | .NET 9         | Params collections, ref struct interfaces, partial properties, field keyword (preview)          |
| C# 14.0    | 2025      | .NET 10        | Extension members, null-conditional assignment, field keyword, user-defined compound assignment |

## C# and the .NET Platform

C# is closely tied to the .NET platform, which provides the runtime environment and libraries necessary for C# applications to run.

### Components of the .NET Platform:

1. **Common Language Runtime (CLR)**: The execution environment that manages memory, handles exceptions, and provides other services for running C# code.

2. **Base Class Library (BCL)**: A comprehensive collection of reusable types for common tasks such as string manipulation, data collection, database connectivity, and file I/O.

3. **Intermediate Language (IL)**: C# code is compiled into IL, which is then just-in-time (JIT) compiled to native code at runtime.

4. **Language Interoperability**: The .NET platform supports multiple languages (C#, F#, Visual Basic), allowing them to work together seamlessly.

### .NET Implementations:

- **.NET (formerly .NET Core)**: Cross-platform, open-source implementation for building apps that run on Windows, Linux, and macOS.
- **.NET Framework**: The original Windows-only implementation (now in maintenance mode).
- **Mono**: An open-source implementation of .NET for platforms where the official .NET runtime isn't available.
- **Xamarin**: An implementation for building mobile apps for iOS and Android.
- **.NET MAUI**: Multi-platform App UI for building cross-platform desktop and mobile apps.

### Key .NET Features:

- **Cross-platform**: Modern .NET runs on Windows, macOS, and Linux.
- **Open Source**: The .NET platform is open source and community-driven.
- **Performance**: .NET provides high-performance capabilities for demanding applications.
- **Microservices**: .NET is well-suited for building microservices architectures.
- **Cloud-Ready**: .NET integrates well with cloud platforms like Azure.

## Getting Started with C#

To start developing with C#, you'll need:

1. **Development Environment**: 
   - Visual Studio (Windows/Mac)
   - Visual Studio Code with C# extension (cross-platform)
   - JetBrains Rider (cross-platform)

2. **.NET SDK**: Download from [dotnet.microsoft.com](https://dotnet.microsoft.com/download)

3. **Basic Commands**:
   ```bash
   # Create a new console application
   dotnet new console -n MyFirstApp
   
   # Build the application
   dotnet build
   
   # Run the application
   dotnet run
   ```

4. **Hello World Example**:
   ```csharp
   // Using top-level statements (C# 9.0+)
   Console.WriteLine("Hello, World!");
   
   // Traditional approach
   namespace MyFirstApp
   {
       class Program
       {
           static void Main(string[] args)
           {
               Console.WriteLine("Hello, World!");
           }
       }
   }
   ```

## Resources for Learning C#

- [Microsoft Learn C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)
- [C# Language Specification](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/)
- [.NET API Browser](https://learn.microsoft.com/en-us/dotnet/api/)
- [C# Corner](https://www.c-sharpcorner.com/)
- [Stack Overflow C# Questions](https://stackoverflow.com/questions/tagged/c%23)

# 2. Core Language Fundamentals

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

# 3. Variables and Data Types

## Value Types vs Reference Types

One of the most fundamental concepts in C# is the distinction between value types and reference types.

### Value Types

- **Storage**: Stored directly on the stack (or inline in a containing type)
- **Assignment**: Copying a value type creates a complete, independent copy of the data
- **Examples**: All primitive numeric types, `bool`, `char`, `struct`, `enum`

```csharp
int a = 10;
int b = a; // 'b' gets a copy of the value of 'a'
b = 20;    // Changing 'b' does NOT affect 'a'

Console.WriteLine(a); // Output: 10
Console.WriteLine(b); // Output: 20
```

### Reference Types

- **Storage**: The reference (pointer) is stored on the stack, but the actual object is stored on the heap
- **Assignment**: Copying a reference type copies only the reference, not the data it points to
- **Examples**: `string`, `object`, arrays, `class`, `interface`, `delegate`, `record` (by default)

```csharp
public class Person
{
    public string Name { get; set; }
}

Person p1 = new Person { Name = "Alice" };
Person p2 = p1; // 'p2' references the same object as 'p1'
p2.Name = "Bob"; // Changing the object through 'p2' affects what 'p1' sees

Console.WriteLine(p1.Name); // Output: "Bob"
Console.WriteLine(p2.Name); // Output: "Bob"
```

## Primitive Types

C# provides a set of built-in primitive types that map directly to .NET types.

### Integer Types

| C# Type  | .NET Type | Size               | Range                                                   |
| -------- | --------- | ------------------ | ------------------------------------------------------- |
| `byte`   | Byte      | 8-bit unsigned     | 0 to 255                                                |
| `sbyte`  | SByte     | 8-bit signed       | -128 to 127                                             |
| `short`  | Int16     | 16-bit signed      | -32,768 to 32,767                                       |
| `ushort` | UInt16    | 16-bit unsigned    | 0 to 65,535                                             |
| `int`    | Int32     | 32-bit signed      | -2,147,483,648 to 2,147,483,647                         |
| `uint`   | UInt32    | 32-bit unsigned    | 0 to 4,294,967,295                                      |
| `long`   | Int64     | 64-bit signed      | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| `ulong`  | UInt64    | 64-bit unsigned    | 0 to 18,446,744,073,709,551,615                         |
| `nint`   | IntPtr    | Platform-dependent | Depends on platform (32-bit or 64-bit)                  |
| `nuint`  | UIntPtr   | Platform-dependent | Depends on platform (32-bit or 64-bit)                  |

```csharp
byte smallNumber = 255;
int regularNumber = 42;
long bigNumber = 9223372036854775807;

// Numeric literals
int decimalLiteral = 42;
int hexLiteral = 0x2A;      // Hexadecimal (base 16)
int binaryLiteral = 0b101010; // Binary (base 2)
int underscoreDigits = 1_000_000; // Digit separators for readability
```

### Floating-Point Types

| C# Type   | .NET Type | Size    | Precision            | Range                           |
| --------- | --------- | ------- | -------------------- | ------------------------------- |
| `float`   | Single    | 32-bit  | ~6-9 digits          | ±1.5 × 10^−45 to ±3.4 × 10^38   |
| `double`  | Double    | 64-bit  | ~15-17 digits        | ±5.0 × 10^−324 to ±1.7 × 10^308 |
| `decimal` | Decimal   | 128-bit | 28-29 decimal places | ±1.0 × 10^−28 to ±7.9 × 10^28   |

```csharp
float singlePrecision = 3.14f;  // Note the 'f' suffix
double doublePrecision = 3.14159265359;  // Default for floating-point literals
decimal highPrecision = 3.14159265359m;  // Note the 'm' suffix, ideal for financial calculations
```

### Other Primitive Types

| C# Type | .NET Type | Description                       |
| ------- | --------- | --------------------------------- |
| `bool`  | Boolean   | Represents true or false          |
| `char`  | Char      | A single 16-bit Unicode character |

```csharp
bool isValid = true;
char letter = 'A';
char unicodeChar = '\u0041';  // Unicode representation of 'A'
char escapeChar = '\n';  // Newline escape sequence
```

### Special Types

| C# Type   | .NET Type | Description                         |
| --------- | --------- | ----------------------------------- |
| `string`  | String    | A sequence of characters            |
| `object`  | Object    | The base type for all types in C#   |
| `dynamic` | Dynamic   | Bypasses compile-time type checking |

```csharp
string message = "Hello, World!";
object anyValue = 42;  // Can hold any type
dynamic dynamicValue = "test";  // Type checking at runtime
dynamicValue = 123;  // Can change type at runtime
```

## Type Inference (var)

The `var` keyword instructs the compiler to infer the type of a variable from its initializer expression.

```csharp
// The compiler infers these types automatically
var age = 30;           // int
var name = "John";      // string
var prices = new List<decimal>(); // List<decimal>
var tuple = (Id: 1, Name: "Item"); // (int Id, string Name)

// var must be initialized
// var uninitializedVar; // Error: Implicitly-typed variables must be initialized

// var is still strongly typed at compile time
// age = "thirty"; // Error: Cannot convert string to int
```

**When to use `var`**:
- When the type is obvious from the right side of the assignment
- With complex generic types to improve readability
- When the exact type isn't important to the code's readability

**When not to use `var`**:
- When the type isn't obvious from the initialization
- When you want to be explicit about the type for clarity

## Constants and Readonly

### Constants

Constants are values that cannot be changed after declaration and must be known at compile time.

```csharp
// Compile-time constants (must be primitive types or string)
const double Pi = 3.14159265359;
const string AppName = "MyApp";
const int MaxRetries = 3;

// Constants are implicitly static
// You can use them without creating an instance of the class
Console.WriteLine(Math.PI); // Using a constant from the Math class
```

### Readonly Fields

Readonly fields can only be assigned during declaration or in a constructor.

```csharp
public class Configuration
{
    // Can be assigned at declaration
    public readonly string AppName = "MyApp";
    
    // Or in a constructor
    public readonly DateTime StartTime;
    
    public Configuration()
    {
        StartTime = DateTime.Now;
    }
}

// Usage
var config = new Configuration();
Console.WriteLine(config.StartTime); // OK
// config.StartTime = DateTime.Now; // Error: Cannot assign to readonly field
```

### Static Readonly Fields

Combine `static` and `readonly` for values that should be shared across all instances but can't be determined at compile time.

```csharp
public class ApiClient
{
    // Initialized once at runtime, shared by all instances
    public static readonly HttpClient SharedClient = new HttpClient();
}
```

### Init-only Properties (C# 9+)

Properties with the `init` accessor can only be set during object initialization.

```csharp
public class User
{
    // Can only be set during initialization
    public string Id { get; init; } = Guid.NewGuid().ToString();
    public string Username { get; init; }
}

// Usage
var user = new User { Username = "john_doe" }; // OK
// user.Username = "jane_doe"; // Error: Init-only property
```

### Required Members (C# 11+)

The `required` modifier ensures that a property or field must be initialized during object creation.

```csharp
public class Customer
{
    // Must be initialized when creating a Customer
    public required string Name { get; set; }
    public required string Email { get; set; }
    public string? Phone { get; set; } // Optional
}

// Usage
var customer = new Customer
{
    Name = "Alice Smith",
    Email = "alice@example.com"
    // Phone is optional
};

// This would cause a compile-time error:
// var invalidCustomer = new Customer { Name = "Bob" };
// Error: Customer.Email is required
```

## Nullable Types

### Nullable Value Types

Value types normally cannot be `null`. By adding a `?`, you create a special wrapper (`System.Nullable<T>`) that allows a value type to hold either a value or `null`.

```csharp
// Nullable value types
int? nullableInt = null;
bool? nullableBool = null;
DateTime? nullableDate = null;

// Checking for null
if (nullableInt.HasValue)
{
    Console.WriteLine($"Value: {nullableInt.Value}");
}
else
{
    Console.WriteLine("No value");
}

// Null-coalescing operator (??) provides a default value
int definitelyInt = nullableInt ?? 0;

// Null-conditional operator (?.) safely accesses members
int? length = nullableString?.Length;
```

### Nullable Reference Types (C# 8+)

In a nullable-enabled context, reference types are non-nullable by default. Adding a `?` explicitly marks a reference type as nullable.

```csharp
#nullable enable // Enable nullable reference types

// Non-nullable reference type (cannot be null)
string nonNullableString = "Hello";
// nonNullableString = null; // Warning: Converting null literal to non-nullable type

// Nullable reference type (can be null)
string? nullableString = null; // OK

// The compiler warns about potential null reference exceptions
Console.WriteLine(nullableString.Length); // Warning: Possible null reference exception

// Null checking is required before use
if (nullableString != null)
{
    Console.WriteLine(nullableString.Length); // OK
}

// Or use the null-conditional operator
Console.WriteLine(nullableString?.Length);

#nullable disable // Disable nullable reference types
```

## Nullable Context

The nullable context determines how the compiler interprets reference types with respect to nullability.

### Project-wide Nullable Context

In your `.csproj` file:

```xml
<PropertyGroup>
  <Nullable>enable</Nullable>
</PropertyGroup>
```

Options:
- `disable`: Nullable reference types are not enabled (default for older projects)
- `enable`: Nullable reference types are enabled for the entire project
- `warnings`: Enable warnings but not errors
- `annotations`: Enable nullable annotations but not warnings

### File-level Nullable Context

```csharp
#nullable enable // Enable nullable reference types for this file
#nullable disable // Disable nullable reference types for this file
#nullable restore // Restore to project default

// You can also enable/disable warnings only
#nullable enable warnings
#nullable disable warnings
```

### Pragma-level Nullable Context

```csharp
#pragma warning disable nullable
// Code here won't generate nullable warnings
#pragma warning restore nullable
```

## Type Conversion and Casting

### Implicit Conversions

Implicit conversions happen automatically when there's no risk of data loss.

```csharp
int intValue = 42;
long longValue = intValue; // Implicit conversion from int to long

char charValue = 'A';
int asciiValue = charValue; // Implicit conversion from char to int

// Derived class to base class
Dog dog = new Dog();
Animal animal = dog; // Implicit conversion from Dog to Animal
```

### Explicit Conversions (Casting)

Explicit conversions require a cast operator and may result in data loss.

```csharp
double doubleValue = 42.5;
int intValue = (int)doubleValue; // Explicit conversion, loses the decimal part

// Base class to derived class (requires runtime check)
Animal animal = new Dog();
Dog dog = (Dog)animal; // Explicit conversion, throws if animal isn't a Dog

// Alternative using the as operator (returns null instead of throwing)
Dog? safeDog = animal as Dog;
if (safeDog != null)
{
    safeDog.Bark();
}
```

### Type Conversion Methods

```csharp
// Convert class methods
string numberString = "42";
int parsedInt = Convert.ToInt32(numberString);
double parsedDouble = Convert.ToDouble(numberString);

// Parse methods
int parsedInt2 = int.Parse(numberString);
double parsedDouble2 = double.Parse("42.5");

// TryParse methods (safer, doesn't throw exceptions)
if (int.TryParse(numberString, out int result))
{
    Console.WriteLine($"Parsed successfully: {result}");
}
else
{
    Console.WriteLine("Parsing failed");
}
```

### Boxing and Unboxing

Boxing is the process of converting a value type to a reference type (`object`). Unboxing is the reverse.

```csharp
// Boxing (value type to reference type)
int number = 42;
object boxed = number; // Boxing

// Unboxing (reference type back to value type)
int unboxed = (int)boxed; // Unboxing

// Boxing/unboxing has performance implications and should be avoided in performance-critical code
```

## Default Values

Every type in C# has a default value.

```csharp
// Default values for value types
int defaultInt = default; // 0
bool defaultBool = default; // false
char defaultChar = default; // '\0'
DateTime defaultDateTime = default; // 01/01/0001 00:00:00

// Default values for reference types
string defaultString = default; // null
object defaultObject = default; // null
List<int> defaultList = default; // null

// The default operator can be used with any type
var defaultValue = default(double); // 0.0
```

## Resources

- [Value Types (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types)
- [Reference Types (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types)
- [Nullable Reference Types (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references)
- [Type Conversion (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions)

# 4. Operators

Operators are special symbols that perform operations on one or more operands (variables or values) to produce a result.

## Arithmetic Operators

Arithmetic operators perform mathematical calculations.

| Operator | Name               | Example     | Result                                |
| -------- | ------------------ | ----------- | ------------------------------------- |
| `+`      | Addition           | `5 + 3`     | `8`                                   |
| `-`      | Subtraction        | `5 - 3`     | `2`                                   |
| `*`      | Multiplication     | `5 * 3`     | `15`                                  |
| `/`      | Division           | `5 / 3`     | `1` (integer division)                |
| `/`      | Division           | `5.0 / 3.0` | `1.6666...` (floating-point division) |
| `%`      | Modulo (Remainder) | `5 % 3`     | `2`                                   |

```csharp
int a = 10;
int b = 3;

int sum = a + b;        // 13
int difference = a - b; // 7
int product = a * b;    // 30
int quotient = a / b;   // 3 (integer division truncates the result)
int remainder = a % b;  // 1

// Division behavior depends on operand types
double c = 10.0;
double d = 3.0;
double result = c / d;  // 3.3333... (floating-point division)

// Integer division truncation can be surprising
int negativeResult = -5 / 2;  // -2, not -2.5
```

### Increment and Decrement Operators

| Operator | Name      | Effect               |
| -------- | --------- | -------------------- |
| `++`     | Increment | Increases value by 1 |
| `--`     | Decrement | Decreases value by 1 |

These operators can be used in prefix or postfix form:

```csharp
int x = 5;
int y;

// Prefix increment (increment, then use the value)
y = ++x;  // x is now 6, y is 6

// Postfix increment (use the value, then increment)
x = 5;    // Reset x
y = x++;  // x is now 6, but y is 5

// Prefix decrement
y = --x;  // x is now 5, y is 5

// Postfix decrement
y = x--;  // x is now 4, but y is 5
```

## Assignment Operators

Assignment operators assign values to variables.

| Operator | Name                            | Example               | Equivalent    |
| -------- | ------------------------------- | --------------------- | ------------- |
| `=`      | Simple assignment               | `x = 5`               | `x = 5`       |
| `+=`     | Addition assignment             | `x += 5`              | `x = x + 5`   |
| `-=`     | Subtraction assignment          | `x -= 5`              | `x = x - 5`   |
| `*=`     | Multiplication assignment       | `x *= 5`              | `x = x * 5`   |
| `/=`     | Division assignment             | `x /= 5`              | `x = x / 5`   |
| `%=`     | Modulo assignment               | `x %= 5`              | `x = x % 5`   |
| `&=`     | Bitwise AND assignment          | `x &= 5`              | `x = x & 5`   |
| `        | =`                              | Bitwise OR assignment | `x            | = 5` | `x = x | 5` |
| `^=`     | Bitwise XOR assignment          | `x ^= 5`              | `x = x ^ 5`   |
| `<<=`    | Left shift assignment           | `x <<= 2`             | `x = x << 2`  |
| `>>=`    | Right shift assignment          | `x >>= 2`             | `x = x >> 2`  |
| `>>>=`   | Unsigned right shift assignment | `x >>>= 2`            | `x = x >>> 2` |

```csharp
int x = 10;
x += 5;  // x is now 15
x -= 3;  // x is now 12
x *= 2;  // x is now 24
x /= 6;  // x is now 4
x %= 3;  // x is now 1

// Compound assignments work with other types too
string message = "Hello";
message += " World";  // message is now "Hello World"
```

### User-Defined Compound Assignment (C# 14)

In C# 14, you can define custom implementations for compound assignment operators in your own types.

```csharp
public readonly struct Money
{
    public decimal Amount { get; }
    
    public Money(decimal amount) => Amount = amount;
    
    // Define the addition operator
    public static Money operator +(Money left, Money right) => 
        new Money(left.Amount + right.Amount);
        
    // Define the compound addition assignment operator (C# 14)
    public static Money operator +=(Money left, Money right) => 
        new Money(left.Amount + right.Amount * 0.9m); // 10% discount on additions!
}

// Usage
var wallet = new Money(100);
wallet += new Money(50); // Uses the custom += operator, applying the discount
Console.WriteLine(wallet.Amount); // Output: 145 (100 + 45)
```

## Comparison Operators

Comparison operators compare two values and return a boolean result (`true` or `false`).

| Operator | Name                     | Example  | Result  |
| -------- | ------------------------ | -------- | ------- |
| `==`     | Equal to                 | `5 == 5` | `true`  |
| `!=`     | Not equal to             | `5 != 3` | `true`  |
| `>`      | Greater than             | `5 > 3`  | `true`  |
| `<`      | Less than                | `5 < 3`  | `false` |
| `>=`     | Greater than or equal to | `5 >= 5` | `true`  |
| `<=`     | Less than or equal to    | `5 <= 3` | `false` |

```csharp
int a = 10;
int b = 20;

bool isEqual = (a == b);      // false
bool isNotEqual = (a != b);   // true
bool isGreater = (a > b);     // false
bool isLess = (a < b);        // true
bool isGreaterOrEqual = (a >= b); // false
bool isLessOrEqual = (a <= b);    // true

// String comparison
string s1 = "hello";
string s2 = "hello";
bool stringsEqual = (s1 == s2);  // true

// Reference equality vs. value equality
object obj1 = new object();
object obj2 = new object();
bool objectsEqual = (obj1 == obj2);  // false (different objects)

// For reference types, == checks reference equality by default
// unless the type overrides the == operator
```

## Logical Operators

Logical operators perform logical operations on boolean values.

| Operator | Name        | Example         | Result     |
| -------- | ----------- | --------------- | ---------- |
| `&&`     | Logical AND | `true && false` | `false`    |
| `        |             | `               | Logical OR | `true |  | false` | `true` |
| `!`      | Logical NOT | `!true`         | `false`    |

```csharp
bool a = true;
bool b = false;

bool andResult = a && b;  // false (both must be true)
bool orResult = a || b;   // true (at least one must be true)
bool notResult = !a;      // false (inverts the value)

// Short-circuit evaluation
// In a && b, if a is false, b is not evaluated
// In a || b, if a is true, b is not evaluated

bool isValid = false;
bool isExpensive = CheckIfExpensive();  // This won't be called due to short-circuiting
if (isValid && isExpensive)
{
    // This block won't execute
}
```

### Logical Operators with Non-Boolean Operands (C# 11+)

C# 11 introduced the ability to use logical operators with non-boolean operands through the `INumber<T>` interface.

```csharp
// Works with numeric types that implement INumber<T>
int result1 = 5 & 3;  // Bitwise AND: 1 (0101 & 0011 = 0001)
int result2 = 5 | 3;  // Bitwise OR: 7 (0101 | 0011 = 0111)
int result3 = 5 ^ 3;  // Bitwise XOR: 6 (0101 ^ 0011 = 0110)
```

## Bitwise Operators

Bitwise operators perform operations on the binary representations of integer values.

| Operator | Name                 | Example    | Result                                |
| -------- | -------------------- | ---------- | ------------------------------------- |
| `&`      | Bitwise AND          | `5 & 3`    | `1` (0101 & 0011 = 0001)              |
| `        | `                    | Bitwise OR | `5                                    | 3` | `7` (0101 | 0011 = 0111) |
| `^`      | Bitwise XOR          | `5 ^ 3`    | `6` (0101 ^ 0011 = 0110)              |
| `~`      | Bitwise NOT          | `~5`       | `-6` (inverts all bits)               |
| `<<`     | Left shift           | `5 << 1`   | `10` (shifts bits left)               |
| `>>`     | Right shift          | `5 >> 1`   | `2` (shifts bits right)               |
| `>>>`    | Unsigned right shift | `5 >>> 1`  | `2` (shifts bits right, fills with 0) |

```csharp
int a = 5;  // 0101 in binary
int b = 3;  // 0011 in binary

int bitwiseAnd = a & b;   // 0001 = 1
int bitwiseOr = a | b;    // 0111 = 7
int bitwiseXor = a ^ b;   // 0110 = 6
int bitwiseNot = ~a;      // 1111...1010 = -6 (in two's complement)

int leftShift = a << 2;   // 0101 << 2 = 010100 = 20
int rightShift = a >> 1;  // 0101 >> 1 = 0010 = 2

// Unsigned right shift (C# 11+)
uint c = 0x80000000;  // Most significant bit is 1
uint unsignedRightShift = c >>> 1;  // 0x40000000
```

## Null-Related Operators

C# provides several operators for working safely with potentially null values.

### Null-Coalescing Operator (`??`)

Returns the left operand if it's not null, otherwise returns the right operand.

```csharp
string name = null;
string displayName = name ?? "Guest";  // "Guest"

// Can be chained
string firstName = null;
string middleName = null;
string lastName = "Smith";
string fullName = firstName ?? middleName ?? lastName ?? "Unknown";  // "Smith"
```

### Null-Coalescing Assignment Operator (`??=`) (C# 8+)

Assigns the right operand to the left operand only if the left operand is null.

```csharp
string name = null;
name ??= "Guest";  // name is now "Guest"

// Equivalent to:
// if (name == null)
//     name = "Guest";

// Another example
List<int> numbers = null;
numbers ??= new List<int>();  // Initialize only if null
numbers.Add(42);  // Safe to use now
```

### Null-Conditional Operator (`?.` and `?[]`)

Safely accesses members or elements of a potentially null object. Returns null if the object is null instead of throwing a `NullReferenceException`.

```csharp
// Without null-conditional operator
string length = null;
if (name != null)
{
    length = name.Length.ToString();
}

// With null-conditional operator
string length = name?.Length.ToString();  // null if name is null

// Chaining
int? charCount = customer?.Address?.Street?.Length;  // null if any part is null

// With indexers
int? firstItem = array?[0];  // null if array is null

// With method calls
string upperName = name?.ToUpper();  // null if name is null

// Combined with null-coalescing
int length = name?.Length ?? 0;  // 0 if name is null
```

### Null-Conditional Assignment Operator (`?.=`) (C# 14)

Allows assignment to occur conditionally when the receiver is non-null. If the receiver is null, the assignment is skipped entirely.

```csharp
public class User { public string? DisplayName { get; set; } }

void UpdateName(User? user, string newName)
{
    // Without the operator, you'd need to write:
    // if (user != null) user.DisplayName = newName;
    
    // With the operator, it's more concise:
    user?.DisplayName = newName; // Assignment only happens if user is not null
}

// Works with events too:
public class Button { public event Action? Clicked; }

void RegisterHandler(Button? button)
{
    // Safely add an event handler only if button is not null
    button?.Clicked += () => Console.WriteLine("Button was clicked!");
}
```

## Conditional Operator (Ternary Operator)

The conditional operator `?:` evaluates a boolean expression and returns one of two values depending on the result.

```csharp
// Syntax: condition ? true-value : false-value

int age = 20;
string message = (age >= 18) ? "Adult" : "Minor";  // "Adult"

// Can be nested (but may reduce readability)
int value = 15;
string description = (value < 0) ? "Negative" : 
                     (value == 0) ? "Zero" : "Positive";  // "Positive"

// Can be used in expressions
int a = 5;
int b = 3;
int max = (a > b) ? a : b;  // 5

// With null-conditional operator
string name = null;
int length = name?.Length ?? 0;  // 0 (name?.Length is null, so ?? returns 0)
```

## Type-Testing Operators

Type-testing operators check the type of an object.

### `is` Operator

Tests if an object is compatible with a given type.

```csharp
object obj = "Hello";

bool isString = obj is string;  // true
bool isInt = obj is int;        // false

// With pattern matching (C# 7+)
if (obj is string s)
{
    // s is a string variable containing the value of obj
    Console.WriteLine(s.Length);  // 5
}

// With negation (C# 9+)
if (obj is not int)
{
    Console.WriteLine("Not an integer");
}
```

### `as` Operator

Attempts to cast an object to a specified reference type, returning null if the cast fails.

```csharp
object obj = "Hello";

// Without 'as'
try
{
    string str = (string)obj;  // Throws InvalidCastException if obj is not a string
}
catch (InvalidCastException)
{
    // Handle exception
}

// With 'as'
string str = obj as string;  // Returns null if obj is not a string
if (str != null)
{
    Console.WriteLine(str.Length);  // 5
}

// Note: 'as' only works with reference types and nullable value types
// int i = obj as int;  // Error: Cannot use 'as' with value type 'int'
int? i = obj as int?;  // Works with nullable value types
```

### `typeof` Operator

Returns the `System.Type` object for a type.

```csharp
Type stringType = typeof(string);
Console.WriteLine(stringType.Name);  // "String"

// Useful for reflection
MethodInfo method = typeof(string).GetMethod("Substring", new[] { typeof(int), typeof(int) });

// With generics
Type listType = typeof(List<int>);
Type genericListType = typeof(List<>);  // Open generic type
```

## Nameof Operator (C# 6+)

The `nameof` operator returns the name of a variable, type, or member as a string constant.

```csharp
// With variables
string firstName = "John";
Console.WriteLine(nameof(firstName));  // "firstName"

// With properties
Console.WriteLine(nameof(Console.Title));  // "Title"

// With types
Console.WriteLine(nameof(DateTime));  // "DateTime"

// With methods
Console.WriteLine(nameof(Console.WriteLine));  // "WriteLine"

// With parameters
void Process(string fileName)
{
    if (string.IsNullOrEmpty(fileName))
    {
        throw new ArgumentNullException(nameof(fileName));
    }
}

// With unbound generic types (C# 14+)
Console.WriteLine(nameof(List<>));  // "List"
```

## Index and Range Operators (C# 8+)

### Index Operator (`^`)

The `^` operator creates an `Index` that counts from the end of a sequence.

```csharp
string[] names = { "Alice", "Bob", "Charlie", "David", "Eve" };

// From the start (0-based)
string first = names[0];  // "Alice"

// From the end (^1 means "1 from the end")
string last = names[^1];  // "Eve"
string secondLast = names[^2];  // "David"

// Can be stored in a variable
Index lastIndex = ^1;
string lastAgain = names[lastIndex];  // "Eve"
```

### Range Operator (`..`)

The `..` operator creates a `Range` that specifies a start and end for a range of elements.

```csharp
string[] names = { "Alice", "Bob", "Charlie", "David", "Eve" };

// Range from start to end
string[] allNames = names[0..5];  // All 5 names
string[] allNamesImplicit = names[..];  // All names

// Range with specific start and end
string[] middle = names[1..4];  // "Bob", "Charlie", "David"

// Range from start to specific end
string[] firstThree = names[..3];  // "Alice", "Bob", "Charlie"

// Range from specific start to end
string[] lastThree = names[2..];  // "Charlie", "David", "Eve"

// Using ^ operator in ranges
string[] lastTwo = names[^2..];  // "David", "Eve"
string[] middleThree = names[1..^1];  // "Bob", "Charlie", "David"

// Can be stored in variables
Index start = 1;
Index end = ^1;
Range middleRange = start..end;
string[] middleAgain = names[middleRange];  // "Bob", "Charlie", "David"
```

## Operator Precedence and Associativity

Operators have different precedence levels that determine the order of evaluation in an expression.

### Precedence (from highest to lowest)

1. Primary operators: `x.y`, `x?.y`, `x?[y]`, `f(x)`, `a[i]`, `x++`, `x--`, `new`, `typeof`, `checked`, `unchecked`, `default`, `nameof`, `sizeof`, `stackalloc`
2. Unary operators: `+x`, `-x`, `!x`, `~x`, `++x`, `--x`, `^x`, `(T)x`, `await`, `&x`, `*x`, `true`, `false`
3. Range operator: `x..y`
4. Multiplicative operators: `x * y`, `x / y`, `x % y`
5. Additive operators: `x + y`, `x - y`
6. Shift operators: `x << y`, `x >> y`, `x >>> y`
7. Relational operators: `x < y`, `x > y`, `x <= y`, `x >= y`, `is`, `as`
8. Equality operators: `x == y`, `x != y`
9. Logical AND operator: `x & y`
10. Logical XOR operator: `x ^ y`
11. Logical OR operator: `x | y`
12. Conditional AND operator: `x && y`
13. Conditional OR operator: `x || y`
14. Null-coalescing operator: `x ?? y`
15. Conditional operator: `x ? y : z`
16. Assignment and lambda operators: `x = y`, `x += y`, `x -= y`, etc., `=>`

### Associativity

When operators have the same precedence, associativity determines the order of evaluation:

- **Left-associative**: Most binary operators (e.g., `a + b + c` is evaluated as `(a + b) + c`)
- **Right-associative**: Assignment operators, conditional operator, null-coalescing operator (e.g., `a = b = c` is evaluated as `a = (b = c)`)

```csharp
// Example of precedence
int result = 2 + 3 * 4;  // 14, not 20, because * has higher precedence than +

// Example of associativity
int a, b, c;
a = b = c = 5;  // Right-associative: a = (b = (c = 5))

// Using parentheses to override precedence
int explicitResult = (2 + 3) * 4;  // 20
```

## Resources

- [C# Operators (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/)
- [Operator Precedence (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/#operator-precedence)
- [Null-Conditional Operators (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#null-conditional-operators--and-)

# 5. Strings and Text Handling

Strings in C# are immutable sequences of Unicode characters represented by the `string` type (an alias for `System.String`). C# offers a rich set of string manipulation features, from basic concatenation to advanced interpolation and raw string literals.

## String Creation and Basics

### String Declaration and Initialization

```csharp
// String declaration and initialization
string empty = "";                // Empty string
string nullString = null;         // Null string (no object)
string name = "John";             // String literal
string emptyString = string.Empty; // Preferred way to create an empty string

// String concatenation
string firstName = "John";
string lastName = "Doe";
string fullName = firstName + " " + lastName; // "John Doe"

// String constructor
char[] letters = { 'H', 'e', 'l', 'l', 'o' };
string greeting = new string(letters); // "Hello"
string repeated = new string('*', 10); // "**********"
```

### String Immutability

Strings in C# are immutable, meaning once created, their contents cannot be changed. Operations that appear to modify a string actually create a new string.

```csharp
string original = "Hello";
string modified = original.Replace('H', 'J'); // Creates a new string "Jello"

Console.WriteLine(original); // Still "Hello"
Console.WriteLine(modified); // "Jello"
```

## String Interpolation (C# 6+)

String interpolation provides a more readable and convenient syntax to format strings with expressions.

```csharp
// Basic string interpolation
string name = "Alice";
int age = 30;
string message = $"My name is {name} and I am {age} years old.";

// Expressions in interpolation
string result = $"5 + 3 = {5 + 3}";

// Format specifiers
decimal price = 123.45m;
string formattedPrice = $"Price: {price:C}"; // "Price: $123.45" (culture-specific)

// Alignment and formatting
int value = 42;
string aligned = $"{value,10}"; // Right-aligned in 10-character field
string formatted = $"{value:D6}"; // "000042"

// Multiple lines
string multiLine = $"Name: {name}\nAge: {age}";

// Escaping braces
string escaped = $"{{This is in braces}} but {name} is interpolated.";

// Conditional expressions
string status = $"Status: {(age >= 18 ? "Adult" : "Minor")}";

// Calling methods
string upper = $"Uppercase: {name.ToUpper()}";
```

### Common Format Specifiers

| Specifier  | Description        | Example       | Output          |
| ---------- | ------------------ | ------------- | --------------- |
| `C` or `c` | Currency           | `{123.45:C}`  | `$123.45`       |
| `D` or `d` | Decimal (integers) | `{42:D6}`     | `000042`        |
| `E` or `e` | Exponential        | `{1234.56:E}` | `1.234560E+003` |
| `F` or `f` | Fixed-point        | `{123.45:F1}` | `123.5`         |
| `G` or `g` | General            | `{1234.56:G}` | `1234.56`       |
| `N` or `n` | Number with commas | `{1234.56:N}` | `1,234.56`      |
| `P` or `p` | Percent            | `{0.1234:P}`  | `12.34%`        |
| `X` or `x` | Hexadecimal        | `{255:X}`     | `FF` or `ff`    |

## Verbatim Strings

Verbatim strings, prefixed with `@`, preserve all whitespace and escape sequences literally.

```csharp
// Without verbatim string (need to escape backslashes)
string path = "C:\\Program Files\\App\\Data.txt";

// With verbatim string (no need to escape backslashes)
string verbatimPath = @"C:\Program Files\App\Data.txt";

// Multiline verbatim string
string multiline = @"This is a
multiline string
that preserves all line breaks
and indentation.";

// Escaping double quotes in verbatim strings (use double double-quotes)
string quote = @"He said, ""Hello, world!""";

// Combining verbatim with interpolation
string verbatimInterpolated = $@"User: {name}
Path: {verbatimPath}";
```

## Raw String Literals (C# 11+)

Raw string literals, delimited by at least three double quotes (`"""`), provide an even more flexible way to include literal text, especially for multi-line content with quotes and special characters.

```csharp
// Basic raw string literal
string json = """
{
    "name": "John Doe",
    "age": 30,
    "isActive": true
}
""";

// Raw string with interpolation
string name = "Alice";
string age = "25";
string interpolatedJson = $"""
{
    "name": "{name}",
    "age": {age},
    "isActive": true
}
""";

// Controlling indentation with raw strings
string indentedCode = """
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
    """;

// Using more than three quotes for delimiter
string complexText = """"
This text contains """ triple quotes
without needing to escape them.
"""";

// Raw string literals can contain any characters without escaping
string regex = """
The regex pattern \d{3}-\d{2}-\d{4} matches a SSN.
""";
```

## String Methods and Properties

C# strings provide numerous methods for manipulation and inspection.

### Basic Properties

```csharp
string text = "Hello, World!";

int length = text.Length; // 13
bool isEmpty = string.IsNullOrEmpty(text); // false
bool isWhitespace = string.IsNullOrWhiteSpace(text); // false
```

### Searching and Comparing

```csharp
string text = "Hello, World!";

// Searching
bool contains = text.Contains("World"); // true
bool startsWith = text.StartsWith("Hello"); // true
bool endsWith = text.EndsWith("!"); // true

int indexOfWorld = text.IndexOf("World"); // 7
int lastIndexOfL = text.LastIndexOf("l"); // 10
int indexOfZ = text.IndexOf("Z"); // -1 (not found)

// Comparing
string a = "apple";
string b = "banana";
int comparison = string.Compare(a, b); // -1 (a comes before b)
bool equals = a.Equals(b); // false

// Case-insensitive comparison
bool equalsIgnoreCase = a.Equals("APPLE", StringComparison.OrdinalIgnoreCase); // true
bool containsIgnoreCase = text.Contains("world", StringComparison.OrdinalIgnoreCase); // true

// Different comparison types
StringComparison[] comparisons = {
    StringComparison.Ordinal,              // Fast, case-sensitive, culture-agnostic
    StringComparison.OrdinalIgnoreCase,    // Fast, case-insensitive, culture-agnostic
    StringComparison.CurrentCulture,       // Slow, case-sensitive, culture-sensitive
    StringComparison.CurrentCultureIgnoreCase, // Slow, case-insensitive, culture-sensitive
    StringComparison.InvariantCulture,     // Slow, case-sensitive, culture-invariant
    StringComparison.InvariantCultureIgnoreCase // Slow, case-insensitive, culture-invariant
};
```

### Modifying Strings

Remember that these methods don't modify the original string but return a new string.

```csharp
string text = "Hello, World!";

// Changing case
string upper = text.ToUpper(); // "HELLO, WORLD!"
string lower = text.ToLower(); // "hello, world!"
string upperInvariant = text.ToUpperInvariant(); // Culture-insensitive uppercase

// Trimming
string paddedText = "  Hello  ";
string trimmed = paddedText.Trim(); // "Hello"
string trimStart = paddedText.TrimStart(); // "Hello  "
string trimEnd = paddedText.TrimEnd(); // "  Hello"

// Specific characters to trim
string trimChars = "###Hello###".Trim('#'); // "Hello"

// Replacing
string replaced = text.Replace("Hello", "Hi"); // "Hi, World!"
string replacedChars = text.Replace('o', '0'); // "Hell0, W0rld!"

// Substring
string sub1 = text.Substring(7); // "World!"
string sub2 = text.Substring(7, 5); // "World"

// Inserting and removing
string inserted = text.Insert(5, " there"); // "Hello there, World!"
string removed = text.Remove(5, 7); // "Hello!"

// Padding
string padded = "Hello".PadLeft(10); // "     Hello"
string paddedChar = "Hello".PadRight(10, '*'); // "Hello*****"

// Joining strings
string[] words = { "Hello", "World" };
string joined = string.Join(", ", words); // "Hello, World"
string joined2 = string.Join(" | ", new[] { "A", "B", "C" }); // "A | B | C"
```

### Splitting Strings

```csharp
string text = "apple,banana,orange";

// Basic split
string[] fruits = text.Split(','); // ["apple", "banana", "orange"]

// Split with multiple delimiters
string data = "apple,banana;orange:grape";
string[] fruits2 = data.Split(new[] { ',', ';', ':' }); // ["apple", "banana", "orange", "grape"]

// Split with options
string line = "apple,,banana,,,orange";
string[] fruits3 = line.Split(',', StringSplitOptions.RemoveEmptyEntries); // ["apple", "banana", "orange"]

// Split with count
string longText = "one,two,three,four,five";
string[] parts = longText.Split(',', 3); // ["one", "two", "three,four,five"]

// Split lines
string multiline = "Line 1\r\nLine 2\nLine 3";
string[] lines = multiline.Split(new[] { "\r\n", "\n" }, StringSplitOptions.None);
```

## StringBuilder

For scenarios involving multiple string modifications, `StringBuilder` provides better performance than concatenating strings.

```csharp
using System.Text;

// Creating a StringBuilder
StringBuilder sb = new StringBuilder();
StringBuilder sb2 = new StringBuilder("Initial text");
StringBuilder sb3 = new StringBuilder(50); // With capacity

// Appending
sb.Append("Hello");
sb.Append(' ');
sb.Append("World");
sb.AppendLine("!"); // Adds a newline
sb.AppendLine("Next line");
sb.AppendFormat("The time is {0:t}", DateTime.Now);

// Inserting
sb.Insert(5, " there");

// Removing
sb.Remove(5, 6);

// Replacing
sb.Replace("World", "Universe");

// Getting the result
string result = sb.ToString();

// Performance example
StringBuilder builder = new StringBuilder();
for (int i = 0; i < 10000; i++)
{
    builder.Append(i.ToString());
    builder.Append(',');
}
string numbers = builder.ToString();
```

## String Formatting

The `string.Format` method provides a way to create formatted strings.

```csharp
// Basic formatting
string formatted = string.Format("Name: {0}, Age: {1}", "John", 30);

// Multiple occurrences of the same value
string repeated = string.Format("{0} {0} {0}", "Hip");

// Format specifiers
string formatted2 = string.Format("Price: {0:C}, Date: {1:d}", 123.45, DateTime.Now);

// Alignment
string aligned = string.Format("{0,10} | {1,-10}", "Right", "Left");

// Custom format for DateTime
DateTime date = new DateTime(2023, 12, 31);
string customDate = string.Format("Year: {0:yyyy}, Month: {0:MM}, Day: {0:dd}", date);

// Custom numeric format
double number = 1234.5678;
string customNumber = string.Format("{0:#,##0.00}", number); // "1,234.57"
```

## UTF-8 String Literals (C# 11+)

UTF-8 string literals create a byte representation of a string encoded in UTF-8, which is the standard for the web and many file formats.

```csharp
// UTF-8 string literal
ReadOnlySpan<byte> utf8Data = "Hello, World!"u8;

// This is more efficient than:
byte[] bytes = System.Text.Encoding.UTF8.GetBytes("Hello, World!");

// Useful for APIs that work with UTF-8 encoded data
using System.Text.Json;
ReadOnlySpan<byte> jsonUtf8 = """{"name":"John"}"""u8;
var document = JsonDocument.Parse(jsonUtf8);
```

## String Interpolation Handlers (C# 10+)

String interpolation handlers allow for custom processing of interpolated strings.

```csharp
// Using the built-in StringBuilder interpolation handler
var sb = new StringBuilder();
string name = "Alice";
int age = 30;

// This uses the handler to build the string without creating intermediate strings
sb.AppendFormat($"Name: {name}, Age: {age}");

// Custom interpolation handler example (simplified)
using System.Runtime.CompilerServices;

public static class LoggerExtensions
{
    public static void LogInformation(this ILogger logger, [InterpolatedStringHandlerArgument("logger")] LogInterpolatedStringHandler message)
    {
        if (message.IsEnabled)
        {
            logger.Log(LogLevel.Information, message.GetFormattedText());
        }
    }
}

// Usage
logger.LogInformation($"User {userId} logged in at {DateTime.Now}");
```

## Common String Operations

### Checking String Content

```csharp
// Check if string is null or empty
if (string.IsNullOrEmpty(text))
{
    // Handle empty string
}

// Check if string is null, empty, or whitespace
if (string.IsNullOrWhiteSpace(text))
{
    // Handle empty or whitespace string
}

// Check if string contains a substring
if (text.Contains("search", StringComparison.OrdinalIgnoreCase))
{
    // Contains the substring (case-insensitive)
}
```

### String Validation

```csharp
// Check if string is a valid number
bool isNumber = int.TryParse(text, out _);

// Check if string matches a pattern (using Regex)
using System.Text.RegularExpressions;
bool isEmail = Regex.IsMatch(text, @"^[^@\s]+@[^@\s]+\.[^@\s]+$");

// Check if string is a valid date
bool isDate = DateTime.TryParse(text, out _);
```

### String Transformation

```csharp
// Convert first letter to uppercase
string capitalize(string s) => string.IsNullOrEmpty(s) 
    ? s 
    : char.ToUpper(s[0]) + s.Substring(1);

// Truncate string with ellipsis
string truncate(string s, int maxLength) => s.Length <= maxLength 
    ? s 
    : s.Substring(0, maxLength - 3) + "...";

// Convert to title case
using System.Globalization;
string titleCase = CultureInfo.CurrentCulture.TextInfo.ToTitleCase("hello world");
```

## String Interning

String interning is a mechanism that stores only one copy of each unique string literal in the application.

```csharp
// These point to the same string in memory
string a = "Hello";
string b = "Hello";
Console.WriteLine(object.ReferenceEquals(a, b)); // true

// But these don't (unless optimized by the compiler)
string c = "Hel" + "lo";
string d = new string(new char[] { 'H', 'e', 'l', 'l', 'o' });
Console.WriteLine(object.ReferenceEquals(a, c)); // might be true (compiler optimization)
Console.WriteLine(object.ReferenceEquals(a, d)); // false

// Explicitly intern a string
string interned = string.Intern(d);
Console.WriteLine(object.ReferenceEquals(a, interned)); // true
```

## Resources

- [String Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.string)
- [String Interpolation (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated)
- [StringBuilder Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.text.stringbuilder)
- [Standard Numeric Format Strings (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
- [Custom Numeric Format Strings (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
- [Standard Date and Time Format Strings (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
- [Custom Date and Time Format Strings (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)

# 6. Control Flow

Control flow statements determine the order in which code is executed. C# provides a rich set of control flow constructs for conditional execution, loops, and branching.

## Conditional Statements

### if, else if, else

The `if` statement executes a block of code if a specified condition is true.

```csharp
int age = 25;

// Basic if statement
if (age >= 18)
{
    Console.WriteLine("You are an adult.");
}

// if-else statement
if (age >= 18)
{
    Console.WriteLine("You are an adult.");
}
else
{
    Console.WriteLine("You are a minor.");
}

// if-else if-else chain
if (age < 13)
{
    Console.WriteLine("Child");
}
else if (age < 18)
{
    Console.WriteLine("Teenager");
}
else if (age < 65)
{
    Console.WriteLine("Adult");
}
else
{
    Console.WriteLine("Senior");
}

// Nested if statements
if (age >= 18)
{
    if (age < 21)
    {
        Console.WriteLine("You are an adult, but cannot drink in the US.");
    }
    else
    {
        Console.WriteLine("You are an adult and can drink in the US.");
    }
}
```

### Conditional (Ternary) Operator

The conditional operator `?:` is a shorthand for the if-else statement.

```csharp
int age = 20;

// Ternary operator
string status = (age >= 18) ? "Adult" : "Minor";

// Equivalent if-else
string status2;
if (age >= 18)
{
    status2 = "Adult";
}
else
{
    status2 = "Minor";
}

// Nested ternary (use with caution for readability)
string category = (age < 13) ? "Child" : 
                  (age < 18) ? "Teenager" : 
                  (age < 65) ? "Adult" : "Senior";

// Ternary with expressions
int a = 5, b = 10;
int max = (a > b) ? a : b;  // 10
```

### switch Statement

The `switch` statement selects a statement list to execute based on a pattern match with a match expression.

```csharp
int day = 3;

// Basic switch on a value
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    case 4:
        Console.WriteLine("Thursday");
        break;
    case 5:
        Console.WriteLine("Friday");
        break;
    case 6:
    case 7:
        Console.WriteLine("Weekend");
        break;
    default:
        Console.WriteLine("Invalid day");
        break;
}

// Switch with pattern matching (C# 7+)
object obj = "Hello";

switch (obj)
{
    case int i:
        Console.WriteLine($"Integer: {i}");
        break;
    case string s:
        Console.WriteLine($"String: {s}");
        break;
    case bool b when b == true:  // Case with a when condition
        Console.WriteLine("True boolean");
        break;
    case null:
        Console.WriteLine("Null value");
        break;
    default:
        Console.WriteLine("Unknown type");
        break;
}

// Switch with ranges (C# 9+)
int score = 85;

switch (score)
{
    case >= 90:
        Console.WriteLine("A");
        break;
    case >= 80:
        Console.WriteLine("B");
        break;
    case >= 70:
        Console.WriteLine("C");
        break;
    case >= 60:
        Console.WriteLine("D");
        break;
    default:
        Console.WriteLine("F");
        break;
}
```

### switch Expression (C# 8+)

The `switch` expression is a more concise form of the switch statement that returns a value.

```csharp
int day = 3;

// Basic switch expression
string dayName = day switch
{
    1 => "Monday",
    2 => "Tuesday",
    3 => "Wednesday",
    4 => "Thursday",
    5 => "Friday",
    6 or 7 => "Weekend",
    _ => "Invalid day"  // Default case
};

// Switch expression with pattern matching
object obj = "Hello";

string typeDescription = obj switch
{
    int i => $"Integer: {i}",
    string s => $"String: {s}",
    bool b when b == true => "True boolean",
    null => "Null value",
    _ => "Unknown type"
};

// Switch expression with property patterns (C# 8+)
var person = new { Name = "John", Age = 25 };

string description = person switch
{
    { Name: "John", Age: 25 } => "John who is 25",
    { Name: "John" } => "John with any age",
    { Age: > 18 } => "Any adult",
    _ => "Unknown person"
};

// Switch expression with tuple patterns (C# 8+)
var point = (X: 5, Y: -2);

string quadrant = point switch
{
    (0, 0) => "Origin",
    (_, 0) => "X-axis",
    (0, _) => "Y-axis",
    (> 0, > 0) => "First quadrant",
    (< 0, > 0) => "Second quadrant",
    (< 0, < 0) => "Third quadrant",
    (> 0, < 0) => "Fourth quadrant",
    _ => "Unknown"
};
```

### Null-Coalescing Operator (`??`)

The null-coalescing operator `??` returns the left-hand operand if it isn't null; otherwise, it returns the right-hand operand.

```csharp
string name = null;
string displayName = name ?? "Guest";  // "Guest"

// Chaining null-coalescing operators
string firstName = null;
string middleName = null;
string lastName = "Smith";
string fullName = firstName ?? middleName ?? lastName ?? "Unknown";  // "Smith"
```

### Null-Coalescing Assignment Operator (`??=`) (C# 8+)

The null-coalescing assignment operator `??=` assigns the right-hand operand to the left-hand operand only if the left-hand operand is null.

```csharp
string name = null;
name ??= "Guest";  // name is now "Guest"

// Equivalent to:
// if (name == null)
//     name = "Guest";

// Useful for lazy initialization
List<int> numbers = null;
(numbers ??= new List<int>()).Add(5);  // Initialize and use in one line
Console.WriteLine(numbers.Count);  // 1
```

## Iteration Statements (Loops)

### for Loop

The `for` loop executes a block of code repeatedly until a specified condition evaluates to false.

```csharp
// Basic for loop
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);  // 0, 1, 2, 3, 4
}

// Multiple initialization and iterators
for (int i = 0, j = 10; i < j; i++, j--)
{
    Console.WriteLine($"i = {i}, j = {j}");  // i=0,j=10; i=1,j=9; i=2,j=8; i=3,j=7; i=4,j=6
}

// Omitting parts of the for statement
int k = 0;
for (; k < 5;)
{
    Console.WriteLine(k);
    k++;
}

// Infinite loop (use with caution)
// for (;;)
// {
//     // Code that runs forever (until break)
// }

// Nested for loops
for (int i = 0; i < 3; i++)
{
    for (int j = 0; j < 2; j++)
    {
        Console.WriteLine($"({i},{j})");
    }
}
```

### foreach Loop

The `foreach` loop iterates over elements in a collection.

```csharp
// foreach with array
string[] names = { "Alice", "Bob", "Charlie" };
foreach (string name in names)
{
    Console.WriteLine(name);
}

// foreach with List
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
foreach (int number in numbers)
{
    Console.WriteLine(number);
}

// foreach with Dictionary
Dictionary<string, int> ages = new Dictionary<string, int>
{
    { "Alice", 25 },
    { "Bob", 30 },
    { "Charlie", 35 }
};

foreach (KeyValuePair<string, int> pair in ages)
{
    Console.WriteLine($"{pair.Key} is {pair.Value} years old");
}

// Using deconstruction with foreach (C# 7+)
foreach (var (name, age) in ages)
{
    Console.WriteLine($"{name} is {age} years old");
}

// foreach with custom types that implement IEnumerable
foreach (var item in myCustomCollection)
{
    // Process item
}
```

### while Loop

The `while` loop executes a block of code as long as a specified condition is true.

```csharp
// Basic while loop
int i = 0;
while (i < 5)
{
    Console.WriteLine(i);  // 0, 1, 2, 3, 4
    i++;
}

// while with complex condition
string input = "";
while (input != "exit" && input != "quit")
{
    Console.Write("Enter command (type 'exit' to quit): ");
    input = Console.ReadLine().ToLower();
    // Process input
}

// Infinite loop with break
int j = 0;
while (true)
{
    Console.WriteLine(j);
    j++;
    if (j >= 5)
        break;
}
```

### do-while Loop

The `do-while` loop is similar to the while loop, except the condition is evaluated after the loop body executes, ensuring the loop body runs at least once.

```csharp
// Basic do-while loop
int i = 0;
do
{
    Console.WriteLine(i);  // 0, 1, 2, 3, 4
    i++;
} while (i < 5);

// do-while for input validation
string password;
do
{
    Console.Write("Enter a password (at least 6 characters): ");
    password = Console.ReadLine();
} while (password.Length < 6);

// do-while that always executes at least once
int j = 10;
do
{
    Console.WriteLine("This runs once even though the condition is false");
} while (j < 5);
```

## Jump Statements

### break Statement

The `break` statement terminates the closest enclosing loop or switch statement.

```csharp
// break in a for loop
for (int i = 0; i < 10; i++)
{
    if (i == 5)
        break;  // Exit the loop when i is 5
    Console.WriteLine(i);  // 0, 1, 2, 3, 4
}

// break in a while loop
int j = 0;
while (j < 10)
{
    if (j == 5)
        break;  // Exit the loop when j is 5
    Console.WriteLine(j);  // 0, 1, 2, 3, 4
    j++;
}

// break in a nested loop (only breaks out of the innermost loop)
for (int i = 0; i < 3; i++)
{
    for (int j = 0; j < 3; j++)
    {
        if (i == 1 && j == 1)
            break;  // Breaks out of the inner loop only
        Console.WriteLine($"({i},{j})");
    }
}

// break in a switch statement
int day = 3;
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;  // Exit the switch
    case 2:
        Console.WriteLine("Tuesday");
        break;  // Exit the switch
    default:
        Console.WriteLine("Other day");
        break;  // Exit the switch
}
```

### continue Statement

The `continue` statement skips the rest of the current iteration and proceeds to the next iteration of the loop.

```csharp
// continue in a for loop
for (int i = 0; i < 10; i++)
{
    if (i % 2 == 0)
        continue;  // Skip even numbers
    Console.WriteLine(i);  // 1, 3, 5, 7, 9
}

// continue in a while loop
int j = 0;
while (j < 10)
{
    j++;
    if (j % 2 == 0)
        continue;  // Skip even numbers
    Console.WriteLine(j);  // 1, 3, 5, 7, 9
}

// continue in a nested loop (only affects the innermost loop)
for (int i = 0; i < 3; i++)
{
    for (int j = 0; j < 3; j++)
    {
        if (j == 1)
            continue;  // Skip when j is 1
        Console.WriteLine($"({i},{j})");  // (0,0), (0,2), (1,0), (1,2), (2,0), (2,2)
    }
}
```

### return Statement

The `return` statement exits the current method and optionally returns a value.

```csharp
// return with a value
int Add(int a, int b)
{
    return a + b;  // Return the sum and exit the method
}

// Early return for validation
bool IsValidUsername(string username)
{
    if (string.IsNullOrEmpty(username))
        return false;  // Invalid: empty username
        
    if (username.Length < 3)
        return false;  // Invalid: too short
        
    if (username.Length > 20)
        return false;  // Invalid: too long
        
    // More validation...
    
    return true;  // Valid username
}

// return without a value (in a void method)
void ProcessData(int[] data)
{
    if (data == null || data.Length == 0)
        return;  // Exit the method early
        
    // Process the data...
}
```

### goto Statement

The `goto` statement transfers control to a labeled statement. While generally discouraged in modern programming, it can be useful in specific scenarios.

```csharp
// goto with a label
int i = 0;
start:  // Label
Console.WriteLine(i);
i++;
if (i < 5)
    goto start;  // Go back to the 'start' label

// goto in a nested loop (can break out of multiple loops)
for (int i = 0; i < 3; i++)
{
    for (int j = 0; j < 3; j++)
    {
        if (i == 1 && j == 1)
            goto exit;  // Exit both loops
        Console.WriteLine($"({i},{j})");
    }
}
exit:  // Label
Console.WriteLine("Exited loops");

// goto in a switch statement
int option = 2;
switch (option)
{
    case 1:
        Console.WriteLine("Option 1");
        goto case 3;  // Execute case 3 after this
    case 2:
        Console.WriteLine("Option 2");
        goto case 1;  // Execute case 1 after this
    case 3:
        Console.WriteLine("Option 3");
        break;
    default:
        Console.WriteLine("Default option");
        break;
}
// Output: "Option 2", "Option 1", "Option 3"
```

## Exception Handling

### try-catch-finally

The `try-catch-finally` statement handles exceptions that might occur during execution.

```csharp
// Basic try-catch
try
{
    int result = 10 / 0;  // This will throw a DivideByZeroException
    Console.WriteLine(result);  // This line won't execute
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"Error: {ex.Message}");  // "Error: Attempted to divide by zero."
}

// Multiple catch blocks
try
{
    string text = null;
    int length = text.Length;  // This will throw a NullReferenceException
}
catch (NullReferenceException ex)
{
    Console.WriteLine("Null reference error: " + ex.Message);
}
catch (ArgumentException ex)
{
    Console.WriteLine("Argument error: " + ex.Message);
}
catch (Exception ex)
{
    Console.WriteLine("General error: " + ex.Message);  // Catches any other exception
}

// try-catch-finally
try
{
    File.ReadAllText("nonexistent.txt");  // This will throw a FileNotFoundException
}
catch (FileNotFoundException ex)
{
    Console.WriteLine($"File not found: {ex.Message}");
}
finally
{
    Console.WriteLine("This always executes, whether an exception occurred or not");
    // Clean up resources, close files, etc.
}

// Nested try-catch
try
{
    try
    {
        int result = 10 / 0;
    }
    catch (ArithmeticException ex)
    {
        Console.WriteLine("Inner catch: " + ex.Message);
        throw;  // Re-throw the exception to the outer catch
    }
}
catch (Exception ex)
{
    Console.WriteLine("Outer catch: " + ex.Message);
}
```

### throw Statement

The `throw` statement throws an exception.

```csharp
// Throwing a predefined exception
void ProcessAge(int age)
{
    if (age < 0)
        throw new ArgumentException("Age cannot be negative");
        
    // Process age...
}

// Re-throwing an exception
try
{
    int result = 10 / 0;
}
catch (DivideByZeroException ex)
{
    Console.WriteLine("Logging the error: " + ex.Message);
    throw;  // Re-throw the same exception
}

// Throwing a new exception with the original as inner exception
try
{
    File.ReadAllText("config.txt");
}
catch (FileNotFoundException ex)
{
    throw new ApplicationException("Configuration error", ex);
}

// Creating and throwing a custom exception
public class CustomException : Exception
{
    public CustomException(string message) : base(message) { }
    public CustomException(string message, Exception inner) : base(message, inner) { }
}

void ProcessData(string data)
{
    if (string.IsNullOrEmpty(data))
        throw new CustomException("Data cannot be empty");
}
```

### Exception Filters (C# 6+)

Exception filters allow you to specify a condition for a catch block.

```csharp
// Basic exception filter
try
{
    ProcessFile("data.txt");
}
catch (IOException ex) when (ex.HResult == -2147024816)  // File not found
{
    Console.WriteLine("The file was not found");
}
catch (IOException ex) when (ex.HResult == -2147024864)  // Path not found
{
    Console.WriteLine("The path was not found");
}
catch (IOException ex)  // Any other IO exception
{
    Console.WriteLine("IO error: " + ex.Message);
}

// Exception filter with logging (without handling)
try
{
    // Some code that might throw
}
catch (Exception ex) when (LogException(ex))
{
    // This block never executes because LogException returns false
}

bool LogException(Exception ex)
{
    Console.WriteLine($"Exception logged: {ex.Message}");
    return false;  // Don't handle the exception, let it propagate
}

// Exception filter with complex conditions
try
{
    // Some code that might throw
}
catch (Exception ex) when (ex.Message.Contains("specific error") && DateTime.Now.DayOfWeek == DayOfWeek.Monday)
{
    Console.WriteLine("Specific error occurred on Monday");
}
```

## Pattern Matching (C# 7+)

Pattern matching allows you to test if an expression matches a certain pattern and extract information from it.

### Type Patterns

```csharp
// Type pattern with 'is'
object obj = "Hello";
if (obj is string s)
{
    Console.WriteLine($"String of length {s.Length}");  // Uses the extracted variable 's'
}

// Type pattern with 'switch'
switch (obj)
{
    case int i:
        Console.WriteLine($"Integer: {i}");
        break;
    case string s:
        Console.WriteLine($"String: {s}");
        break;
    case bool b:
        Console.WriteLine($"Boolean: {b}");
        break;
    case null:
        Console.WriteLine("Null value");
        break;
    default:
        Console.WriteLine("Unknown type");
        break;
}
```

### Constant Patterns

```csharp
// Constant pattern with 'is'
object value = 42;
if (value is 42)
{
    Console.WriteLine("Value is 42");
}

// Constant pattern with 'switch'
switch (value)
{
    case 0:
        Console.WriteLine("Zero");
        break;
    case 42:
        Console.WriteLine("The answer");
        break;
    case null:
        Console.WriteLine("Null");
        break;
    default:
        Console.WriteLine("Something else");
        break;
}
```

### Relational Patterns (C# 9+)

```csharp
// Relational patterns with 'is'
int age = 25;
if (age is >= 18 and < 65)
{
    Console.WriteLine("Working age adult");
}

// Relational patterns with 'switch'
string description = age switch
{
    < 0 => "Invalid age",
    0 => "Newborn",
    < 13 => "Child",
    < 18 => "Teenager",
    < 65 => "Adult",
    _ => "Senior"
};
```

### Logical Patterns (C# 9+)

```csharp
// 'and', 'or', and 'not' patterns
int value = 7;
if (value is > 0 and < 10 and not 5)
{
    Console.WriteLine("Single positive digit, not 5");
}

// Combined with other patterns
object obj = "Hello";
if (obj is string { Length: > 3 and < 10 })
{
    Console.WriteLine("String with length between 4 and 9");
}
```

### Property Patterns (C# 8+)

```csharp
// Simple property pattern
var person = new { Name = "John", Age = 25 };
if (person is { Age: >= 18 })
{
    Console.WriteLine("Adult");
}

// Nested property pattern
var order = new { Customer = new { Name = "Alice", IsVip = true }, Total = 100.0 };
if (order is { Customer: { IsVip: true }, Total: >= 50.0 })
{
    Console.WriteLine("VIP order with high value");
}

// Property pattern with switch expression
string description = person switch
{
    { Name: "John", Age: 25 } => "John who is 25",
    { Name: "John" } => "John with any age",
    { Age: >= 18 } => "Any adult",
    _ => "Unknown person"
};
```

### Tuple Patterns (C# 8+)

```csharp
// Tuple pattern with switch expression
var point = (X: 5, Y: -2);
string quadrant = point switch
{
    (0, 0) => "Origin",
    (_, 0) => "X-axis",
    (0, _) => "Y-axis",
    (> 0, > 0) => "First quadrant",
    (< 0, > 0) => "Second quadrant",
    (< 0, < 0) => "Third quadrant",
    (> 0, < 0) => "Fourth quadrant",
    _ => "Unknown"
};

// Tuple pattern with method parameters
string Classify(int x, int y) => (x, y) switch
{
    (0, 0) => "Origin",
    var (a, b) when a > 0 && b > 0 => "First quadrant",
    var (a, b) when a < 0 && b > 0 => "Second quadrant",
    var (a, b) when a < 0 && b < 0 => "Third quadrant",
    var (a, b) when a > 0 && b < 0 => "Fourth quadrant",
    _ => "On an axis"
};
```

### List Patterns (C# 11+)

```csharp
// List pattern with 'is'
int[] numbers = { 1, 2, 3 };
if (numbers is [1, 2, 3])
{
    Console.WriteLine("Exact match: [1, 2, 3]");
}

// List pattern with discard
if (numbers is [1, _, 3])
{
    Console.WriteLine("First element is 1, last is 3");
}

// List pattern with 'var'
if (numbers is [var first, _, var last])
{
    Console.WriteLine($"First: {first}, Last: {last}");
}

// List pattern with slice pattern
if (numbers is [1, .. var middle, 3])
{
    Console.WriteLine($"Middle: {string.Join(", ", middle)}");  // "2"
}

// List pattern with switch expression
string description = numbers switch
{
    [] => "Empty array",
    [var single] => $"Single element: {single}",
    [var first, var second] => $"Two elements: {first}, {second}",
    [1, 2, 3] => "Exactly [1, 2, 3]",
    [1, ..] => "Starts with 1",
    [.., 3] => "Ends with 3",
    _ => "Other array"
};
```

## Resources

- [C# Control Flow (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements)
- [C# Loops (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements)
- [C# Exception Handling (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/exception-handling-statements)
- [C# Pattern Matching (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/patterns)

# 7. Methods and Functions

Methods in C# are blocks of code that perform a specific task. They are the fundamental building blocks of code reuse and help organize code into logical units.

## Method Declaration and Invocation

### Basic Method Declaration

```csharp
// Method with no parameters and no return value (void)
void SayHello()
{
    Console.WriteLine("Hello, World!");
}

// Method with parameters and a return value
int Add(int a, int b)
{
    return a + b;
}

// Method with multiple parameters of different types
string FormatName(string firstName, string lastName, int age)
{
    return $"{firstName} {lastName}, Age: {age}";
}

// Method with local variables
double CalculateAverage(int[] numbers)
{
    int sum = 0;
    foreach (int number in numbers)
    {
        sum += number;
    }
    return (double)sum / numbers.Length;
}
```

### Method Invocation

```csharp
// Calling a method with no parameters
SayHello();  // Output: "Hello, World!"

// Calling a method with parameters
int sum = Add(5, 3);  // sum = 8

// Calling a method with named arguments (order doesn't matter)
string fullName = FormatName(lastName: "Doe", age: 30, firstName: "John");

// Calling a method with an array parameter
int[] scores = { 85, 90, 78, 92, 88 };
double average = CalculateAverage(scores);  // average = 86.6
```

## Method Parameters

### Parameter Modifiers

```csharp
// Regular parameters (passed by value)
void ModifyValue(int x)
{
    x = 10;  // Only modifies the local copy
}

// ref parameter (passed by reference)
void ModifyRef(ref int x)
{
    x = 10;  // Modifies the original variable
}

// out parameter (must be assigned in the method)
void GetValues(out int x, out int y)
{
    x = 10;  // Must assign a value to x
    y = 20;  // Must assign a value to y
}

// in parameter (read-only reference, C# 7.2+)
void ProcessReadOnly(in int x)
{
    // x = 10;  // Error: Cannot modify 'in' parameter
    Console.WriteLine(x);  // Can read the value
}

// Usage examples
int a = 5;
ModifyValue(a);
Console.WriteLine(a);  // Output: 5 (unchanged)

int b = 5;
ModifyRef(ref b);
Console.WriteLine(b);  // Output: 10 (modified)

GetValues(out int c, out int d);
Console.WriteLine($"c = {c}, d = {d}");  // Output: "c = 10, d = 20"

int e = 5;
ProcessReadOnly(in e);  // Passing by read-only reference
```

### Optional Parameters

```csharp
// Method with optional parameters (must have default values)
void DisplayMessage(string message, bool uppercase = false, int repeatCount = 1)
{
    for (int i = 0; i < repeatCount; i++)
    {
        Console.WriteLine(uppercase ? message.ToUpper() : message);
    }
}

// Calling with all parameters
DisplayMessage("Hello", true, 3);

// Calling with some optional parameters omitted
DisplayMessage("Hello", true);  // repeatCount uses default value 1
DisplayMessage("Hello");        // uppercase and repeatCount use default values

// Calling with named arguments (can skip optional parameters)
DisplayMessage(message: "Hello", repeatCount: 2);  // Skips uppercase parameter
```

### Params Array

```csharp
// Method with params array (must be the last parameter)
int Sum(params int[] numbers)
{
    int total = 0;
    foreach (int number in numbers)
    {
        total += number;
    }
    return total;
}

// Calling with individual arguments
int sum1 = Sum(1, 2, 3, 4, 5);  // sum1 = 15

// Calling with an array
int[] values = { 10, 20, 30 };
int sum2 = Sum(values);  // sum2 = 60

// Calling with no arguments
int sum3 = Sum();  // sum3 = 0

// Params with other parameters
string Concatenate(string separator, params string[] strings)
{
    return string.Join(separator, strings);
}

string result = Concatenate(", ", "apple", "banana", "orange");  // "apple, banana, orange"
```

### Parameter Validation

```csharp
// Validating parameters with guard clauses
void ProcessData(string data)
{
    // Guard clauses for parameter validation
    if (data == null)
        throw new ArgumentNullException(nameof(data));
        
    if (string.IsNullOrWhiteSpace(data))
        throw new ArgumentException("Data cannot be empty or whitespace.", nameof(data));
        
    // Process the data...
    Console.WriteLine($"Processing: {data}");
}

// Using pattern matching for validation (C# 10+)
void ProcessUser(User user)
{
    ArgumentNullException.ThrowIfNull(user);  // Throws if user is null
    ArgumentException.ThrowIfNullOrEmpty(user.Name);  // Throws if Name is null or empty
    
    // Process the user...
}
```

## Method Overloading

Method overloading allows multiple methods with the same name but different parameter lists.

```csharp
// Overloaded methods with different parameter counts
void Display(int value)
{
    Console.WriteLine($"Integer: {value}");
}

void Display(string text)
{
    Console.WriteLine($"String: {text}");
}

void Display(int value, string format)
{
    Console.WriteLine($"Formatted: {value.ToString(format)}");
}

// Calling overloaded methods
Display(42);           // Calls the first method
Display("Hello");      // Calls the second method
Display(42, "X");      // Calls the third method (formats as hex: "2A")

// Overloaded methods with different parameter types
double Calculate(double a, double b)
{
    return a + b;
}

string Calculate(string a, string b)
{
    return a + b;  // String concatenation
}

// Calling overloaded methods with different types
double result1 = Calculate(3.5, 2.5);  // result1 = 6.0
string result2 = Calculate("Hello, ", "World!");  // result2 = "Hello, World!"
```

## Return Types and Values

### Basic Return Types

```csharp
// Returning a value
int Add(int a, int b)
{
    return a + b;
}

// Returning a reference type
string GetGreeting(string name)
{
    return $"Hello, {name}!";
}

// Returning void (no value)
void LogMessage(string message)
{
    Console.WriteLine($"[LOG] {message}");
    // No return statement needed for void methods
}

// Multiple return statements
bool IsEven(int number)
{
    if (number % 2 == 0)
        return true;
    else
        return false;
}

// Early returns for validation
int Divide(int a, int b)
{
    if (b == 0)
        return 0;  // Early return to avoid division by zero
        
    return a / b;
}
```

### Returning Multiple Values

```csharp
// Using out parameters
void GetDimensions(string text, out int length, out int wordCount)
{
    length = text.Length;
    wordCount = text.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length;
}

// Using a tuple (C# 7+)
(int Length, int WordCount) GetDimensionsTuple(string text)
{
    int length = text.Length;
    int wordCount = text.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length;
    return (length, wordCount);
}

// Using a custom class or struct
public class TextStats
{
    public int Length { get; set; }
    public int WordCount { get; set; }
}

TextStats GetTextStats(string text)
{
    return new TextStats
    {
        Length = text.Length,
        WordCount = text.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length
    };
}

// Usage examples
string sample = "Hello, world!";

// Using out parameters
GetDimensions(sample, out int len1, out int words1);
Console.WriteLine($"Length: {len1}, Words: {words1}");

// Using a tuple
var stats = GetDimensionsTuple(sample);
Console.WriteLine($"Length: {stats.Length}, Words: {stats.WordCount}");
// Or with deconstruction:
var (len2, words2) = GetDimensionsTuple(sample);
Console.WriteLine($"Length: {len2}, Words: {words2}");

// Using a custom class
TextStats textStats = GetTextStats(sample);
Console.WriteLine($"Length: {textStats.Length}, Words: {textStats.WordCount}");
```

### Ref Returns and Locals (C# 7+)

```csharp
// Returning a reference to an array element
ref int FindLargest(int[] numbers)
{
    int largestIndex = 0;
    for (int i = 1; i < numbers.Length; i++)
    {
        if (numbers[i] > numbers[largestIndex])
            largestIndex = i;
    }
    return ref numbers[largestIndex];
}

// Usage
int[] values = { 3, 7, 1, 9, 4 };
ref int largest = ref FindLargest(values);
Console.WriteLine(largest);  // Output: 9

// Modifying the value through the reference
largest = 100;
Console.WriteLine(values[3]);  // Output: 100 (the array element was modified)
```

## Expression-Bodied Members (C# 6+)

Expression-bodied members provide a concise syntax for methods with a single expression.

```csharp
// Expression-bodied method (C# 6+)
int Add(int a, int b) => a + b;

// Expression-bodied void method (C# 7+)
void Greet(string name) => Console.WriteLine($"Hello, {name}!");

// Expression-bodied property (C# 6+)
public string FullName => $"{FirstName} {LastName}";

// Expression-bodied property with getter and setter (C# 7+)
private string _name;
public string Name
{
    get => _name;
    set => _name = value ?? "Unknown";
}

// Expression-bodied constructor (C# 7+)
public Person(string name) => Name = name;

// Expression-bodied finalizer/destructor (C# 7+)
~Person() => Console.WriteLine("Finalizer called");

// Expression-bodied indexer (C# 7+)
public string this[int index] => _items[index];
```

## Local Functions (C# 7+)

Local functions are methods defined inside other methods.

```csharp
// Method with a local function
int Factorial(int n)
{
    // Local function defined inside Factorial
    int CalculateFactorial(int number)
    {
        if (number <= 1)
            return 1;
        return number * CalculateFactorial(number - 1);
    }
    
    // Input validation in the outer method
    if (n < 0)
        throw new ArgumentException("Input must be non-negative", nameof(n));
        
    return CalculateFactorial(n);
}

// Local function that captures variables from the enclosing scope
void ProcessData(int[] data)
{
    int threshold = 10;
    
    // Local function that uses 'threshold' from the enclosing scope
    bool IsAboveThreshold(int value)
    {
        return value > threshold;
    }
    
    foreach (int value in data)
    {
        if (IsAboveThreshold(value))
        {
            Console.WriteLine($"{value} is above the threshold");
        }
    }
}

// Static local function (C# 8+) - cannot capture variables from the enclosing scope
void ProcessValues(int[] values)
{
    // Static local function
    static int Square(int x)
    {
        return x * x;
    }
    
    for (int i = 0; i < values.Length; i++)
    {
        values[i] = Square(values[i]);
    }
}
```

## Extension Methods

Extension methods allow you to add methods to existing types without modifying them.

```csharp
// Extension methods must be defined in a static class
public static class StringExtensions
{
    // Extension method for string (note the 'this' modifier on the first parameter)
    public static bool IsNullOrWhiteSpace(this string str)
    {
        return string.IsNullOrWhiteSpace(str);
    }
    
    // Extension method with additional parameters
    public static string Truncate(this string str, int maxLength)
    {
        if (str == null)
            return null;
            
        return str.Length <= maxLength ? str : str.Substring(0, maxLength) + "...";
    }
}

// Extension method for IEnumerable<T>
public static class EnumerableExtensions
{
    public static double Average<T>(this IEnumerable<T> source, Func<T, int> selector)
    {
        int sum = 0;
        int count = 0;
        
        foreach (T item in source)
        {
            sum += selector(item);
            count++;
        }
        
        return count > 0 ? (double)sum / count : 0;
    }
}

// Usage
string text = "   ";
bool isEmpty = text.IsNullOrWhiteSpace();  // Using the extension method

string longText = "This is a very long text that needs to be truncated";
string truncated = longText.Truncate(20);  // "This is a very long..."

List<Person> people = new List<Person>
{
    new Person { Name = "Alice", Age = 25 },
    new Person { Name = "Bob", Age = 30 },
    new Person { Name = "Charlie", Age = 35 }
};

double averageAge = people.Average(p => p.Age);  // Using the extension method
```

## Delegates and Function Types

Delegates are type-safe function pointers that can reference methods with compatible signatures.

### Delegate Declaration and Usage

```csharp
// Delegate declaration
public delegate int MathOperation(int a, int b);

// Methods that match the delegate signature
int Add(int a, int b) => a + b;
int Subtract(int a, int b) => a - b;
int Multiply(int a, int b) => a * b;

// Using delegates
void UseDelegates()
{
    // Assigning a method to a delegate
    MathOperation operation = Add;
    int result = operation(5, 3);  // result = 8
    
    // Changing the delegate to point to a different method
    operation = Multiply;
    result = operation(5, 3);  // result = 15
    
    // Creating a delegate with an anonymous method (C# 2.0+)
    MathOperation divide = delegate(int a, int b) { return b != 0 ? a / b : 0; };
    result = divide(10, 2);  // result = 5
    
    // Creating a delegate with a lambda expression (C# 3.0+)
    MathOperation power = (a, b) => (int)Math.Pow(a, b);
    result = power(2, 3);  // result = 8
}
```

### Built-in Delegate Types

```csharp
// Action delegates (for methods that return void)
Action sayHello = () => Console.WriteLine("Hello");
Action<string> greet = name => Console.WriteLine($"Hello, {name}!");
Action<string, int> introduce = (name, age) => Console.WriteLine($"I'm {name}, {age} years old");

// Func delegates (for methods that return a value)
Func<int, int, int> add = (a, b) => a + b;
Func<string, int> getLength = s => s?.Length ?? 0;
Func<double, double, double, double> average = (a, b, c) => (a + b + c) / 3;

// Predicate delegate (for methods that return bool)
Predicate<int> isEven = n => n % 2 == 0;
Predicate<string> isLongString = s => s?.Length > 10;

// Using the delegates
sayHello();  // Output: "Hello"
greet("John");  // Output: "Hello, John!"
introduce("Alice", 30);  // Output: "I'm Alice, 30 years old"

int sum = add(5, 3);  // sum = 8
int length = getLength("Hello");  // length = 5
double avg = average(10, 20, 30);  // avg = 20

bool even = isEven(4);  // even = true
bool isLong = isLongString("Hello, World!");  // isLong = true
```

### Multicast Delegates

```csharp
// Delegate for event handling
public delegate void LogEventHandler(string message);

// Methods that match the delegate signature
void ConsoleLogger(string message) => Console.WriteLine($"CONSOLE: {message}");
void FileLogger(string message) => File.AppendAllText("log.txt", $"{message}\n");
void DatabaseLogger(string message) => Console.WriteLine($"DB: {message}");

// Using multicast delegates
void UseMulticastDelegates()
{
    // Creating a multicast delegate
    LogEventHandler logger = ConsoleLogger;
    
    // Adding more methods to the invocation list
    logger += FileLogger;
    logger += DatabaseLogger;
    
    // Invoking the delegate calls all methods in the invocation list
    logger("System started");  // Logs to console, file, and database
    
    // Removing a method from the invocation list
    logger -= FileLogger;
    
    // Now only logs to console and database
    logger("Operation completed");
}
```

## Anonymous Methods and Lambda Expressions

### Anonymous Methods (C# 2.0+)

```csharp
// Anonymous method with a delegate
Func<int, int, int> add = delegate(int a, int b) { return a + b; };

// Anonymous method with no parameters
Action sayHello = delegate { Console.WriteLine("Hello!"); };

// Anonymous method with a block of code
Predicate<int> isEven = delegate(int n)
{
    // Can contain multiple statements
    if (n < 0)
        n = -n;  // Make positive
    return n % 2 == 0;
};

// Using anonymous methods
int sum = add(5, 3);  // sum = 8
sayHello();  // Output: "Hello!"
bool even = isEven(-4);  // even = true
```

### Lambda Expressions (C# 3.0+)

```csharp
// Expression lambda (single expression)
Func<int, int, int> add = (a, b) => a + b;

// Statement lambda (code block)
Func<int, int, int> divide = (a, b) =>
{
    if (b == 0)
        return 0;
    return a / b;
};

// Lambda with no parameters
Action sayHello = () => Console.WriteLine("Hello!");

// Lambda with a single parameter (parentheses optional)
Func<int, bool> isEven = n => n % 2 == 0;
Func<string, int> getLength = (s) => s?.Length ?? 0;

// Lambda capturing variables from the enclosing scope
int factor = 10;
Func<int, int> multiply = n => n * factor;

// Using lambda expressions
int sum = add(5, 3);  // sum = 8
int quotient = divide(10, 2);  // quotient = 5
sayHello();  // Output: "Hello!"
bool even = isEven(4);  // even = true
int length = getLength("Hello");  // length = 5
int product = multiply(5);  // product = 50 (5 * 10)
```

### Lambda Expressions with LINQ

```csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Using lambda with Where
var evenNumbers = numbers.Where(n => n % 2 == 0);

// Using lambda with Select
var squares = numbers.Select(n => n * n);

// Using lambda with multiple conditions
var filteredNumbers = numbers.Where(n => n > 3 && n < 8);

// Using lambda with complex projections
var numberInfo = numbers.Select(n => new
{
    Number = n,
    Square = n * n,
    IsEven = n % 2 == 0
});

// Using lambda with aggregation
int sum = numbers.Sum(n => n);
double average = numbers.Average(n => n);
int max = numbers.Max(n => n);
```

## Asynchronous Methods (async/await)

Asynchronous methods allow non-blocking execution of code that performs I/O operations or other potentially long-running tasks.

```csharp
// Asynchronous method that returns a Task
public async Task DoWorkAsync()
{
    Console.WriteLine("Starting work...");
    
    // Simulate asynchronous work
    await Task.Delay(1000);
    
    Console.WriteLine("Work completed");
}

// Asynchronous method that returns a Task<T>
public async Task<int> CalculateAsync(int a, int b)
{
    Console.WriteLine("Starting calculation...");
    
    // Simulate asynchronous calculation
    await Task.Delay(1000);
    
    return a + b;
}

// Asynchronous method with exception handling
public async Task<string> FetchDataAsync(string url)
{
    try
    {
        using (HttpClient client = new HttpClient())
        {
            // Asynchronously get the response
            string response = await client.GetStringAsync(url);
            return response;
        }
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"Error fetching data: {ex.Message}");
        return null;
    }
}

// Calling asynchronous methods
public async Task RunAsync()
{
    // Await the void Task
    await DoWorkAsync();
    
    // Await and get the result from Task<T>
    int result = await CalculateAsync(5, 3);
    Console.WriteLine($"Result: {result}");
    
    // Fetch data from a URL
    string data = await FetchDataAsync("https://api.example.com/data");
    Console.WriteLine($"Data length: {data?.Length ?? 0}");
}

// Running multiple asynchronous operations in parallel
public async Task RunParallelAsync()
{
    // Start multiple operations without awaiting immediately
    Task<int> task1 = CalculateAsync(5, 3);
    Task<int> task2 = CalculateAsync(10, 20);
    Task<int> task3 = CalculateAsync(7, 8);
    
    // Await all tasks to complete
    await Task.WhenAll(task1, task2, task3);
    
    // Get the results
    int result1 = task1.Result;
    int result2 = task2.Result;
    int result3 = task3.Result;
    
    Console.WriteLine($"Results: {result1}, {result2}, {result3}");
}
```

## Resources

- [C# Methods (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/methods)
- [C# Parameters (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/passing-parameters)
- [C# Extension Methods (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods)
- [C# Delegates (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/)
- [C# Lambda Expressions (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions)
- [C# Asynchronous Programming (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/)

# 8. Classes and Objects

Classes are the fundamental building blocks of object-oriented programming in C#. They encapsulate data (fields) and behavior (methods) into a single unit.

## Class Declaration and Instantiation

### Basic Class Declaration

```csharp
// Basic class declaration
public class Person
{
    // Fields (instance variables)
    private string _name;
    private int _age;
    
    // Properties
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }
    
    public int Age
    {
        get { return _age; }
        set { _age = value; }
    }
    
    // Constructor
    public Person(string name, int age)
    {
        _name = name;
        _age = age;
    }
    
    // Methods
    public void Introduce()
    {
        Console.WriteLine($"Hi, I'm {_name} and I'm {_age} years old.");
    }
    
    public bool IsAdult()
    {
        return _age >= 18;
    }
}
```

### Object Instantiation

```csharp
// Creating an object using the constructor
Person person1 = new Person("Alice", 30);

// Using object initializer syntax (C# 3.0+)
Person person2 = new Person("Bob", 25)
{
    // Additional property initialization
    Name = "Bob Smith"  // Updates the Name property after constructor
};

// Using var keyword (type inference)
var person3 = new Person("Charlie", 35);

// Using target-typed new expression (C# 9.0+)
Person person4 = new("David", 40);

// Accessing properties
string name = person1.Name;
int age = person1.Age;

// Setting properties
person1.Name = "Alice Smith";
person1.Age = 31;

// Calling methods
person1.Introduce();
bool isAdult = person1.IsAdult();
```

## Class Members

### Fields

Fields are variables declared within a class.

```csharp
public class Counter
{
    // Private field (instance variable)
    private int _count;
    
    // Public field (generally not recommended, use properties instead)
    public int MaxValue;
    
    // Static field (shared across all instances)
    public static int TotalCounters;
    
    // Readonly field (can only be assigned in declaration or constructor)
    public readonly string Id;
    
    // Const field (compile-time constant)
    public const int DefaultMaxValue = 100;
    
    // Static readonly field (runtime constant)
    public static readonly DateTime StartupTime = DateTime.Now;
    
    public Counter(string id)
    {
        Id = id;  // Readonly field can be set in constructor
        TotalCounters++;  // Increment static field
        MaxValue = DefaultMaxValue;  // Using const value
    }
}

// Usage
Counter c1 = new Counter("c1");
Counter c2 = new Counter("c2");

Console.WriteLine(Counter.TotalCounters);  // 2 (static field)
Console.WriteLine(Counter.DefaultMaxValue);  // 100 (const field)
Console.WriteLine(Counter.StartupTime);  // Time when the app started (static readonly)

c1.MaxValue = 200;  // Changing public field
// c1.Id = "new-id";  // Error: readonly field cannot be changed after initialization
```

### Properties

Properties provide a flexible mechanism to read, write, or compute the value of a private field.

```csharp
public class Temperature
{
    // Backing field
    private double _celsius;
    
    // Full property with custom getter and setter
    public double Celsius
    {
        get { return _celsius; }
        set { _celsius = value; }
    }
    
    // Property with validation
    public double Fahrenheit
    {
        get { return _celsius * 9 / 5 + 32; }
        set { _celsius = (value - 32) * 5 / 9; }
    }
    
    // Auto-implemented property (compiler generates backing field)
    public string Scale { get; set; } = "Metric";
    
    // Read-only property (no setter)
    public bool IsFreezing
    {
        get { return _celsius <= 0; }
    }
    
    // Expression-bodied property (C# 6+)
    public bool IsBoiling => _celsius >= 100;
    
    // Property with private setter
    public DateTime LastUpdated { get; private set; }
    
    // Static property
    public static double AbsoluteZero { get; } = -273.15;
    
    // Init-only property (C# 9+)
    public string Unit { get; init; } = "°C";
    
    public void Update(double celsius)
    {
        _celsius = celsius;
        LastUpdated = DateTime.Now;  // Can modify private setter from within the class
    }
}

// Usage
Temperature temp = new Temperature();
temp.Celsius = 25;
Console.WriteLine(temp.Fahrenheit);  // 77

temp.Scale = "Scientific";
// temp.Unit = "K";  // Error: Init-only property can only be set during initialization

Temperature temp2 = new Temperature { Celsius = 100, Unit = "K" };  // Init-only property set during initialization

Console.WriteLine(Temperature.AbsoluteZero);  // -273.15 (static property)
```

### Auto-Implemented Properties

```csharp
public class Product
{
    // Basic auto-implemented property
    public string Name { get; set; }
    
    // Auto-implemented property with default value (C# 6+)
    public decimal Price { get; set; } = 0.0m;
    
    // Read-only auto-implemented property
    public string SKU { get; }
    
    // Property with private setter
    public DateTime CreatedDate { get; private set; }
    
    // Init-only property (C# 9+)
    public string Category { get; init; }
    
    // Required property (C# 11+)
    public required string Id { get; set; }
    
    public Product(string sku)
    {
        SKU = sku;
        CreatedDate = DateTime.Now;
    }
}

// Usage
// Product p1 = new Product("ABC123");  // Error: Required property Id must be set

Product p2 = new Product("ABC123")
{
    Id = "P12345",
    Name = "Laptop",
    Price = 999.99m,
    Category = "Electronics"
};

// p2.Category = "Computers";  // Error: Init-only property cannot be changed after initialization
// p2.SKU = "XYZ789";  // Error: Read-only property cannot be changed
```

### Methods

Methods define the behavior of a class.

```csharp
public class Calculator
{
    // Instance method
    public int Add(int a, int b)
    {
        return a + b;
    }
    
    // Method with optional parameters
    public double Divide(double a, double b = 1.0)
    {
        if (b == 0)
            throw new DivideByZeroException();
        return a / b;
    }
    
    // Method with out parameter
    public bool TryParse(string input, out int result)
    {
        return int.TryParse(input, out result);
    }
    
    // Method with ref parameter
    public void Swap(ref int a, ref int b)
    {
        int temp = a;
        a = b;
        b = temp;
    }
    
    // Static method
    public static int Max(int a, int b)
    {
        return (a > b) ? a : b;
    }
    
    // Expression-bodied method (C# 6+)
    public int Multiply(int a, int b) => a * b;
    
    // Async method
    public async Task<string> FetchDataAsync(string url)
    {
        using (HttpClient client = new HttpClient())
        {
            return await client.GetStringAsync(url);
        }
    }
}

// Usage
Calculator calc = new Calculator();
int sum = calc.Add(5, 3);  // 8

double quotient = calc.Divide(10);  // 10.0 (uses default value for b)

calc.TryParse("42", out int number);  // number = 42

int x = 5, y = 10;
calc.Swap(ref x, ref y);  // x = 10, y = 5

int maximum = Calculator.Max(8, 12);  // 12 (static method)
```

### Constructors

Constructors initialize objects of a class.

```csharp
public class Car
{
    // Fields
    private string _make;
    private string _model;
    private int _year;
    
    // Default constructor (no parameters)
    public Car()
    {
        _make = "Unknown";
        _model = "Unknown";
        _year = DateTime.Now.Year;
        Console.WriteLine("Default constructor called");
    }
    
    // Parameterized constructor
    public Car(string make, string model, int year)
    {
        _make = make;
        _model = model;
        _year = year;
        Console.WriteLine("Parameterized constructor called");
    }
    
    // Constructor with optional parameters
    public Car(string make, string model, int year = 2023)
    {
        _make = make;
        _model = model;
        _year = year;
    }
    
    // Constructor chaining using 'this'
    public Car(string make) : this(make, "Unknown", DateTime.Now.Year)
    {
        Console.WriteLine("Single parameter constructor called");
    }
    
    // Static constructor (called once before any instance is created or static members are accessed)
    static Car()
    {
        Console.WriteLine("Static constructor called");
        // Initialize static fields/properties
    }
    
    // Properties
    public string Make { get => _make; set => _make = value; }
    public string Model { get => _model; set => _model = value; }
    public int Year { get => _year; set => _year = value; }
    
    // Method
    public string GetInfo() => $"{_year} {_make} {_model}";
}

// Usage
Car car1 = new Car();  // Default constructor
Car car2 = new Car("Toyota", "Camry", 2022);  // Parameterized constructor
Car car3 = new Car("Honda");  // Constructor with one parameter, chains to parameterized constructor
```

### Destructors/Finalizers

Destructors (also called finalizers) are used to perform cleanup operations before an object is garbage collected.

```csharp
public class ResourceHolder
{
    private IntPtr _handle;  // Unmanaged resource
    private bool _disposed = false;
    
    public ResourceHolder(IntPtr handle)
    {
        _handle = handle;
        Console.WriteLine("Resource acquired");
    }
    
    // Finalizer/Destructor
    ~ResourceHolder()
    {
        Dispose(false);
        Console.WriteLine("Finalizer called");
    }
    
    // Implement IDisposable pattern for deterministic cleanup
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);  // Prevent finalizer from running
    }
    
    protected virtual void Dispose(bool disposing)
    {
        if (!_disposed)
        {
            if (disposing)
            {
                // Dispose managed resources
            }
            
            // Dispose unmanaged resources
            if (_handle != IntPtr.Zero)
            {
                // CloseHandle(_handle);
                _handle = IntPtr.Zero;
                Console.WriteLine("Resource released");
            }
            
            _disposed = true;
        }
    }
}

// Usage
using (ResourceHolder resource = new ResourceHolder(new IntPtr(1234)))
{
    // Use the resource
}  // Dispose is called automatically at the end of the block
```

### Indexers

Indexers allow objects to be indexed like arrays.

```csharp
public class StringCollection
{
    private List<string> _items = new List<string>();
    
    // Basic indexer
    public string this[int index]
    {
        get
        {
            if (index < 0 || index >= _items.Count)
                throw new IndexOutOfRangeException();
            return _items[index];
        }
        set
        {
            if (index < 0 || index >= _items.Count)
                throw new IndexOutOfRangeException();
            _items[index] = value;
        }
    }
    
    // Overloaded indexer with string parameter
    public string this[string name]
    {
        get
        {
            return _items.FirstOrDefault(item => item.Equals(name, StringComparison.OrdinalIgnoreCase));
        }
    }
    
    // Method to add items
    public void Add(string item)
    {
        _items.Add(item);
    }
    
    // Property to get count
    public int Count => _items.Count;
}

// Usage
StringCollection fruits = new StringCollection();
fruits.Add("Apple");
fruits.Add("Banana");
fruits.Add("Orange");

string fruit = fruits[1];  // "Banana"
fruits[1] = "Mango";  // Changes "Banana" to "Mango"

string found = fruits["apple"];  // "Apple" (case-insensitive)
```

## Access Modifiers

Access modifiers control the accessibility of classes and their members.

```csharp
// Public class (accessible from any assembly)
public class PublicClass
{
    // Public member (accessible from any code)
    public void PublicMethod() { }
    
    // Private member (accessible only within the containing class)
    private void PrivateMethod() { }
    
    // Protected member (accessible within the containing class and derived classes)
    protected void ProtectedMethod() { }
    
    // Internal member (accessible within the containing assembly)
    internal void InternalMethod() { }
    
    // Protected internal member (accessible within the containing assembly or derived classes)
    protected internal void ProtectedInternalMethod() { }
    
    // Private protected member (C# 7.2+, accessible within the containing class or derived classes in the same assembly)
    private protected void PrivateProtectedMethod() { }
}

// Internal class (accessible only within the containing assembly)
internal class InternalClass
{
    // Members here...
}

// Class with no access modifier is internal by default
class DefaultClass
{
    // Members here...
}
```

## Static Classes and Members

Static classes and members belong to the class itself rather than to instances of the class.

```csharp
// Static class (cannot be instantiated)
public static class MathUtility
{
    // Static field
    public static double Pi = 3.14159;
    
    // Static property
    public static double E { get; } = 2.71828;
    
    // Static method
    public static double Square(double number)
    {
        return number * number;
    }
    
    // Static constructor (called once before any static member is accessed)
    static MathUtility()
    {
        Console.WriteLine("MathUtility initialized");
    }
}

// Regular class with static members
public class Counter
{
    // Instance field
    private int _count;
    
    // Static field (shared across all instances)
    private static int _totalCount;
    
    // Instance property
    public int Count
    {
        get { return _count; }
        set { _count = value; }
    }
    
    // Static property
    public static int TotalCount
    {
        get { return _totalCount; }
    }
    
    // Instance method
    public void Increment()
    {
        _count++;
        _totalCount++;
    }
    
    // Static method
    public static void Reset()
    {
        _totalCount = 0;
        // _count = 0;  // Error: Cannot access instance field from static method
    }
}

// Usage
double area = MathUtility.Pi * MathUtility.Square(5);  // Using static class

Counter c1 = new Counter();
Counter c2 = new Counter();

c1.Increment();  // c1.Count = 1, Counter.TotalCount = 1
c2.Increment();  // c2.Count = 1, Counter.TotalCount = 2
c1.Increment();  // c1.Count = 2, Counter.TotalCount = 3

Console.WriteLine(Counter.TotalCount);  // 3
Counter.Reset();  // Resets TotalCount to 0
```

## Inheritance

Inheritance allows a class to inherit fields, properties, and methods from another class.

```csharp
// Base class
public class Animal
{
    // Protected field (accessible in derived classes)
    protected string _name;
    
    // Public property
    public string Species { get; set; }
    
    // Constructor
    public Animal(string name, string species)
    {
        _name = name;
        Species = species;
    }
    
    // Virtual method (can be overridden in derived classes)
    public virtual void MakeSound()
    {
        Console.WriteLine("Animal makes a sound");
    }
    
    // Non-virtual method
    public void Sleep()
    {
        Console.WriteLine($"{_name} is sleeping");
    }
}

// Derived class
public class Dog : Animal
{
    // Additional property
    public string Breed { get; set; }
    
    // Constructor that calls the base class constructor
    public Dog(string name, string breed) : base(name, "Canine")
    {
        Breed = breed;
    }
    
    // Override the virtual method
    public override void MakeSound()
    {
        Console.WriteLine($"{_name} barks");
    }
    
    // New method specific to Dog
    public void Fetch()
    {
        Console.WriteLine($"{_name} is fetching");
    }
}

// Another derived class
public class Cat : Animal
{
    // Constructor
    public Cat(string name) : base(name, "Feline")
    {
    }
    
    // Override the virtual method
    public override void MakeSound()
    {
        Console.WriteLine($"{_name} meows");
    }
    
    // Method that hides the base class method (not recommended, use override instead)
    public new void Sleep()
    {
        Console.WriteLine($"{_name} is taking a cat nap");
    }
}

// Usage
Animal animal = new Animal("Generic Animal", "Unknown");
animal.MakeSound();  // "Animal makes a sound"

Dog dog = new Dog("Buddy", "Golden Retriever");
dog.MakeSound();  // "Buddy barks"
dog.Sleep();      // "Buddy is sleeping" (inherited from Animal)
dog.Fetch();      // "Buddy is fetching"

Cat cat = new Cat("Whiskers");
cat.MakeSound();  // "Whiskers meows"
cat.Sleep();      // "Whiskers is taking a cat nap"

// Polymorphism
Animal dogAsAnimal = new Dog("Rex", "German Shepherd");
dogAsAnimal.MakeSound();  // "Rex barks" (calls the overridden method)
dogAsAnimal.Sleep();      // "Rex is sleeping" (calls the base class method)
// dogAsAnimal.Fetch();   // Error: Animal doesn't have a Fetch method

Animal catAsAnimal = new Cat("Felix");
catAsAnimal.Sleep();      // "Felix is sleeping" (calls the base class method, not the hiding method)
```

### Abstract Classes and Methods

Abstract classes cannot be instantiated and may contain abstract methods that derived classes must implement.

```csharp
// Abstract base class
public abstract class Shape
{
    // Regular property
    public string Color { get; set; }
    
    // Constructor
    public Shape(string color)
    {
        Color = color;
    }
    
    // Abstract method (must be implemented by derived classes)
    public abstract double CalculateArea();
    
    // Virtual method (can be overridden, but has a default implementation)
    public virtual void Display()
    {
        Console.WriteLine($"A {Color} shape");
    }
    
    // Regular method
    public void SetColor(string color)
    {
        Color = color;
    }
}

// Concrete derived class
public class Circle : Shape
{
    public double Radius { get; set; }
    
    public Circle(double radius, string color) : base(color)
    {
        Radius = radius;
    }
    
    // Implementation of abstract method
    public override double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }
    
    // Override of virtual method
    public override void Display()
    {
        Console.WriteLine($"A {Color} circle with radius {Radius}");
    }
}

// Another concrete derived class
public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }
    
    public Rectangle(double width, double height, string color) : base(color)
    {
        Width = width;
        Height = height;
    }
    
    // Implementation of abstract method
    public override double CalculateArea()
    {
        return Width * Height;
    }
    
    // Override of virtual method
    public override void Display()
    {
        Console.WriteLine($"A {Color} rectangle with dimensions {Width}x{Height}");
    }
}

// Usage
// Shape shape = new Shape("Red");  // Error: Cannot create an instance of an abstract class

Circle circle = new Circle(5.0, "Blue");
Console.WriteLine($"Circle area: {circle.CalculateArea()}");  // ~78.54
circle.Display();  // "A Blue circle with radius 5"

Rectangle rectangle = new Rectangle(4.0, 6.0, "Green");
Console.WriteLine($"Rectangle area: {rectangle.CalculateArea()}");  // 24
rectangle.Display();  // "A Green rectangle with dimensions 4x6"

// Polymorphism with abstract base class
Shape shapeRef = circle;
Console.WriteLine($"Shape area: {shapeRef.CalculateArea()}");  // ~78.54 (calls Circle's implementation)
```

### Sealed Classes and Methods

Sealed classes cannot be inherited, and sealed methods cannot be overridden in derived classes.

```csharp
// Base class
public class Vehicle
{
    public virtual void Start()
    {
        Console.WriteLine("Vehicle starting");
    }
    
    public virtual void Stop()
    {
        Console.WriteLine("Vehicle stopping");
    }
}

// Derived class with a sealed method
public class Car : Vehicle
{
    // Sealed override method (cannot be overridden in derived classes)
    public sealed override void Start()
    {
        Console.WriteLine("Car starting");
    }
    
    public override void Stop()
    {
        Console.WriteLine("Car stopping");
    }
}

// Sealed class (cannot be inherited)
public sealed class ElectricCar : Car
{
    // Can override non-sealed methods
    public override void Stop()
    {
        Console.WriteLine("Electric car stopping");
    }
    
    // Cannot override sealed methods
    // public override void Start() { }  // Error: Cannot override sealed method
}

// Cannot derive from a sealed class
// public class LuxuryElectricCar : ElectricCar { }  // Error: Cannot inherit from sealed class
```

## Interfaces

Interfaces define a contract that implementing classes must follow.

```csharp
// Interface declaration
public interface IShape
{
    // Property signature (no implementation)
    double Area { get; }
    
    // Method signature (no implementation)
    void Draw();
    
    // Default interface method (C# 8.0+)
    void PrintInfo()
    {
        Console.WriteLine($"Shape with area: {Area}");
    }
}

// Another interface
public interface IColorable
{
    string Color { get; set; }
    void SetColor(string color);
}

// Class implementing a single interface
public class Circle : IShape
{
    public double Radius { get; set; }
    
    public Circle(double radius)
    {
        Radius = radius;
    }
    
    // Implementing the Area property
    public double Area => Math.PI * Radius * Radius;
    
    // Implementing the Draw method
    public void Draw()
    {
        Console.WriteLine($"Drawing a circle with radius {Radius}");
    }
}

// Class implementing multiple interfaces
public class Rectangle : IShape, IColorable
{
    public double Width { get; set; }
    public double Height { get; set; }
    public string Color { get; set; }
    
    public Rectangle(double width, double height, string color)
    {
        Width = width;
        Height = height;
        Color = color;
    }
    
    // Implementing IShape.Area
    public double Area => Width * Height;
    
    // Implementing IShape.Draw
    public void Draw()
    {
        Console.WriteLine($"Drawing a {Color} rectangle with dimensions {Width}x{Height}");
    }
    
    // Implementing IColorable.SetColor
    public void SetColor(string color)
    {
        Color = color;
    }
}

// Usage
Circle circle = new Circle(5.0);
circle.Draw();  // "Drawing a circle with radius 5"
Console.WriteLine($"Circle area: {circle.Area}");  // ~78.54
circle.PrintInfo();  // "Shape with area: 78.54" (default interface method)

Rectangle rectangle = new Rectangle(4.0, 6.0, "Blue");
rectangle.Draw();  // "Drawing a Blue rectangle with dimensions 4x6"
Console.WriteLine($"Rectangle area: {rectangle.Area}");  // 24
rectangle.SetColor("Red");  // Changes color to "Red"

// Using interfaces for polymorphism
IShape shape = circle;
shape.Draw();  // "Drawing a circle with radius 5"

IColorable colorable = rectangle;
colorable.SetColor("Green");  // Changes color to "Green"
```

### Interface Inheritance

Interfaces can inherit from other interfaces.

```csharp
// Base interface
public interface IEntity
{
    string Id { get; }
    DateTime CreatedDate { get; }
}

// Interface inheriting from another interface
public interface IAuditable : IEntity
{
    string CreatedBy { get; }
    DateTime? LastModifiedDate { get; }
    string LastModifiedBy { get; }
}

// Interface with multiple inheritance
public interface IFullAuditable : IAuditable, ISoftDelete
{
    bool IsActive { get; set; }
}

// Another interface
public interface ISoftDelete
{
    bool IsDeleted { get; set; }
    DateTime? DeletedDate { get; set; }
    string DeletedBy { get; set; }
}

// Class implementing an interface with inheritance
public class User : IAuditable
{
    public string Id { get; set; }  // From IEntity
    public DateTime CreatedDate { get; set; }  // From IEntity
    public string CreatedBy { get; set; }  // From IAuditable
    public DateTime? LastModifiedDate { get; set; }  // From IAuditable
    public string LastModifiedBy { get; set; }  // From IAuditable
    
    // Additional properties
    public string Username { get; set; }
    public string Email { get; set; }
}
```

### Explicit Interface Implementation

Explicit interface implementation allows a class to implement multiple interfaces that have members with the same name.

```csharp
// Two interfaces with a method of the same name
public interface IDrawable
{
    void Draw();
}

public interface IPrintable
{
    void Print();
    void Draw();  // Same name as IDrawable.Draw
}

// Class implementing both interfaces explicitly
public class Document : IDrawable, IPrintable
{
    // Explicit implementation of IDrawable.Draw
    void IDrawable.Draw()
    {
        Console.WriteLine("Drawing for display");
    }
    
    // Explicit implementation of IPrintable.Draw
    void IPrintable.Draw()
    {
        Console.WriteLine("Drawing for printing");
    }
    
    // Regular implementation of IPrintable.Print
    public void Print()
    {
        Console.WriteLine("Printing document");
    }
    
    // Class's own Draw method
    public void Draw()
    {
        Console.WriteLine("Drawing document (class method)");
    }
}

// Usage
Document doc = new Document();
doc.Draw();  // "Drawing document (class method)"
doc.Print();  // "Printing document"

// Accessing explicit interface implementations
((IDrawable)doc).Draw();  // "Drawing for display"
((IPrintable)doc).Draw();  // "Drawing for printing"

IDrawable drawable = doc;
drawable.Draw();  // "Drawing for display"

IPrintable printable = doc;
printable.Draw();  // "Drawing for printing"
printable.Print();  // "Printing document"
```

## Polymorphism

Polymorphism allows objects of different types to be treated as objects of a common base type.

```csharp
// Base class
public class Shape
{
    public virtual double CalculateArea()
    {
        return 0;
    }
    
    public virtual void Draw()
    {
        Console.WriteLine("Drawing a shape");
    }
}

// Derived classes
public class Circle : Shape
{
    public double Radius { get; set; }
    
    public Circle(double radius)
    {
        Radius = radius;
    }
    
    public override double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }
    
    public override void Draw()
    {
        Console.WriteLine($"Drawing a circle with radius {Radius}");
    }
}

public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }
    
    public Rectangle(double width, double height)
    {
        Width = width;
        Height = height;
    }
    
    public override double CalculateArea()
    {
        return Width * Height;
    }
    
    public override void Draw()
    {
        Console.WriteLine($"Drawing a rectangle with dimensions {Width}x{Height}");
    }
}

// Usage
Shape shape1 = new Circle(5.0);
Shape shape2 = new Rectangle(4.0, 6.0);

// Polymorphic behavior
shape1.Draw();  // "Drawing a circle with radius 5"
shape2.Draw();  // "Drawing a rectangle with dimensions 4x6"

Console.WriteLine($"Area of shape1: {shape1.CalculateArea()}");  // ~78.54
Console.WriteLine($"Area of shape2: {shape2.CalculateArea()}");  // 24

// List of different shapes treated as a common type
List<Shape> shapes = new List<Shape>
{
    new Circle(3.0),
    new Rectangle(2.0, 5.0),
    new Circle(4.0)
};

// Process all shapes polymorphically
foreach (Shape shape in shapes)
{
    shape.Draw();
    Console.WriteLine($"Area: {shape.CalculateArea()}");
}
```

## Encapsulation

Encapsulation is the bundling of data and methods that operate on that data within a single unit (class) and restricting access to some of the object's components.

```csharp
public class BankAccount
{
    // Private fields (encapsulated data)
    private string _accountNumber;
    private decimal _balance;
    private readonly List<string> _transactionHistory = new List<string>();
    
    // Constructor
    public BankAccount(string accountNumber, decimal initialDeposit)
    {
        if (string.IsNullOrWhiteSpace(accountNumber))
            throw new ArgumentException("Account number cannot be empty", nameof(accountNumber));
            
        if (initialDeposit < 0)
            throw new ArgumentException("Initial deposit cannot be negative", nameof(initialDeposit));
            
        _accountNumber = accountNumber;
        _balance = initialDeposit;
        RecordTransaction($"Initial deposit: {initialDeposit:C}");
    }
    
    // Public properties (controlled access to private fields)
    public string AccountNumber => _accountNumber;  // Read-only
    
    public decimal Balance => _balance;  // Read-only
    
    public IReadOnlyList<string> TransactionHistory => _transactionHistory.AsReadOnly();  // Read-only view
    
    // Public methods (controlled operations on private data)
    public void Deposit(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Deposit amount must be positive", nameof(amount));
            
        _balance += amount;
        RecordTransaction($"Deposit: {amount:C}");
    }
    
    public bool Withdraw(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Withdrawal amount must be positive", nameof(amount));
            
        if (amount > _balance)
        {
            RecordTransaction($"Withdrawal failed: Insufficient funds for {amount:C}");
            return false;
        }
        
        _balance -= amount;
        RecordTransaction($"Withdrawal: {amount:C}");
        return true;
    }
    
    // Private helper method
    private void RecordTransaction(string transaction)
    {
        _transactionHistory.Add($"{DateTime.Now}: {transaction}");
    }
}

// Usage
BankAccount account = new BankAccount("123456789", 1000);
Console.WriteLine($"Account: {account.AccountNumber}, Balance: {account.Balance:C}");

account.Deposit(500);
Console.WriteLine($"New balance: {account.Balance:C}");  // $1,500.00

bool withdrawalSuccess = account.Withdraw(2000);
Console.WriteLine($"Withdrawal successful: {withdrawalSuccess}");  // false
Console.WriteLine($"Balance after withdrawal attempt: {account.Balance:C}");  // Still $1,500.00

withdrawalSuccess = account.Withdraw(700);
Console.WriteLine($"Withdrawal successful: {withdrawalSuccess}");  // true
Console.WriteLine($"Balance after withdrawal: {account.Balance:C}");  // $800.00

// View transaction history
Console.WriteLine("Transaction History:");
foreach (string transaction in account.TransactionHistory)
{
    Console.WriteLine(transaction);
}

// Cannot modify private fields directly
// account._balance = 1000000;  // Error: _balance is inaccessible
// account.TransactionHistory.Add("Fraudulent transaction");  // Error: Cannot modify a read-only collection
```

## Object Initialization and Object Initializers

Object initializers provide a concise syntax to set properties during object creation.

```csharp
// Class with properties
public class Person
{
    // Auto-implemented properties
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
    public string Email { get; set; }
    
    // Default constructor
    public Person()
    {
    }
    
    // Parameterized constructor
    public Person(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }
    
    // Method
    public string GetFullName() => $"{FirstName} {LastName}";
}

// Usage
// Traditional way (without object initializer)
Person person1 = new Person();
person1.FirstName = "John";
person1.LastName = "Doe";
person1.Age = 30;
person1.Email = "john.doe@example.com";

// Using object initializer syntax
Person person2 = new Person
{
    FirstName = "Jane",
    LastName = "Smith",
    Age = 25,
    Email = "jane.smith@example.com"
};

// Using object initializer with constructor
Person person3 = new Person("Bob", "Johnson")
{
    Age = 40,
    Email = "bob.johnson@example.com"
};

// Collection initializers
List<Person> people = new List<Person>
{
    new Person { FirstName = "Alice", LastName = "Brown", Age = 35 },
    new Person { FirstName = "Charlie", LastName = "Davis", Age = 28 },
    new Person("David", "Wilson") { Age = 45 }
};

// Dictionary initializers
Dictionary<string, Person> personDict = new Dictionary<string, Person>
{
    ["employee1"] = new Person { FirstName = "Eve", LastName = "Taylor" },
    ["employee2"] = new Person { FirstName = "Frank", LastName = "Miller" }
};

// Anonymous types (C# 3.0+)
var anonymousPerson = new
{
    FirstName = "Grace",
    LastName = "Lee",
    Age = 32,
    Email = "grace.lee@example.com"
};

Console.WriteLine($"{anonymousPerson.FirstName} {anonymousPerson.LastName}, {anonymousPerson.Age}");
```

## Partial Classes and Methods

Partial classes allow splitting a class definition across multiple files.

```csharp
// File1.cs
public partial class Customer
{
    // Fields
    private string _name;
    private string _email;
    
    // Constructor
    public Customer(string name, string email)
    {
        _name = name;
        _email = email;
    }
    
    // Properties
    public string Name
    {
        get { return _name; }
        set { _name = value; }
    }
    
    public string Email
    {
        get { return _email; }
        set { _email = value; }
    }
    
    // Partial method declaration (must be implemented in another partial class)
    partial void OnNameChanged(string oldName, string newName);
    
    // Method that calls the partial method
    public void ChangeName(string newName)
    {
        string oldName = _name;
        _name = newName;
        OnNameChanged(oldName, newName);  // Will only execute if implemented
    }
}

// File2.cs
public partial class Customer
{
    // Additional fields
    private List<string> _orders = new List<string>();
    
    // Additional properties
    public IReadOnlyList<string> Orders => _orders.AsReadOnly();
    
    // Additional methods
    public void AddOrder(string orderNumber)
    {
        _orders.Add(orderNumber);
        Console.WriteLine($"Order {orderNumber} added for {_name}");
    }
    
    // Implementation of the partial method
    partial void OnNameChanged(string oldName, string newName)
    {
        Console.WriteLine($"Name changed from {oldName} to {newName}");
    }
}

// Usage
Customer customer = new Customer("John Doe", "john.doe@example.com");
customer.AddOrder("ORD-12345");
customer.ChangeName("John Smith");  // Triggers the OnNameChanged partial method
```

## Resources

- [C# Classes and Objects (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes)
- [C# Properties (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties)
- [C# Inheritance (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/inheritance)
- [C# Interfaces (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/interfaces)
- [C# Polymorphism (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/polymorphism)
- [C# Object Initializers (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/object-and-collection-initializers)

# 9. Structs and Records

## Structs

Structs are value types that can contain data members and function members, similar to classes but with some key differences.

### Basic Struct Declaration

```csharp
// Basic struct declaration
public struct Point
{
    // Fields
    private int _x;
    private int _y;
    
    // Properties
    public int X
    {
        get { return _x; }
        set { _x = value; }
    }
    
    public int Y
    {
        get { return _y; }
        set { _y = value; }
    }
    
    // Constructor
    public Point(int x, int y)
    {
        _x = x;
        _y = y;
    }
    
    // Method
    public double DistanceFromOrigin()
    {
        return Math.Sqrt(_x * _x + _y * _y);
    }
    
    // Override ToString method
    public override string ToString()
    {
        return $"({_x}, {_y})";
    }
}
```

### Struct Instantiation and Usage

```csharp
// Creating a struct using the constructor
Point p1 = new Point(3, 4);

// Creating a struct using object initializer
Point p2 = new Point { X = 5, Y = 12 };

// Default constructor (all fields initialized to default values)
Point p3 = new Point();
p3.X = 1;
p3.Y = 2;

// Using var keyword
var p4 = new Point(7, 8);

// Calling methods
double distance = p1.DistanceFromOrigin();  // 5.0
Console.WriteLine(p1.ToString());  // "(3, 4)"

// Structs are value types (copied by value)
Point p5 = p1;
p5.X = 10;
Console.WriteLine($"p1: {p1}");  // "p1: (3, 4)" - original unchanged
Console.WriteLine($"p5: {p5}");  // "p5: (10, 4)" - modified copy
```

### Readonly Structs (C# 7.2+)

```csharp
// Readonly struct (all members must be readonly)
public readonly struct Temperature
{
    // Readonly fields
    private readonly double _celsius;
    
    // Constructor
    public Temperature(double celsius)
    {
        _celsius = celsius;
    }
    
    // Readonly properties
    public double Celsius => _celsius;
    public double Fahrenheit => _celsius * 9 / 5 + 32;
    public double Kelvin => _celsius + 273.15;
    
    // Readonly methods
    public readonly override string ToString()
    {
        return $"{_celsius}°C";
    }
    
    // Readonly methods can't modify state
    // public void SetCelsius(double value) { _celsius = value; }  // Error: Can't modify readonly field
}

// Usage
Temperature temp = new Temperature(25);
Console.WriteLine(temp.Fahrenheit);  // 77
Console.WriteLine(temp);  // "25°C"
```

### Ref Structs (C# 7.2+)

```csharp
// Ref struct (can only be stored on the stack, not the heap)
public ref struct StackOnlyData
{
    public int Value;
    public Span<byte> Buffer;  // Span<T> is also a ref struct
    
    public StackOnlyData(int value, Span<byte> buffer)
    {
        Value = value;
        Buffer = buffer;
    }
}

// Usage
void ProcessData()
{
    Span<byte> buffer = stackalloc byte[100];  // Stack-allocated buffer
    
    StackOnlyData data = new StackOnlyData(42, buffer);
    data.Buffer[0] = 255;
    
    // Ref structs can't be:
    // - Used as field in a class or non-ref struct
    // - Boxed to object or dynamic
    // - Used in async methods
    // - Used in iterator methods
    // - Captured by lambda expressions
}
```

### Record Structs (C# 10+)

```csharp
// Record struct (value type with value-based equality)
public record struct Point3D(double X, double Y, double Z);

// Usage
Point3D p1 = new Point3D(1, 2, 3);
Point3D p2 = new Point3D(1, 2, 3);
Point3D p3 = new Point3D(4, 5, 6);

Console.WriteLine(p1 == p2);  // True (value-based equality)
Console.WriteLine(p1 == p3);  // False

// Deconstruction
var (x, y, z) = p1;
Console.WriteLine($"X: {x}, Y: {y}, Z: {z}");  // "X: 1, Y: 2, Z: 3"

// With-expression for non-destructive mutation
Point3D p4 = p1 with { Z = 10 };
Console.WriteLine(p4);  // Point3D { X = 1, Y = 2, Z = 10 }
```

### Readonly Record Structs (C# 10+)

```csharp
// Readonly record struct (immutable value type with value-based equality)
public readonly record struct Coordinate(double Latitude, double Longitude);

// Usage
Coordinate c1 = new Coordinate(40.7128, -74.0060);  // New York
Coordinate c2 = new Coordinate(40.7128, -74.0060);  // Same coordinates
Coordinate c3 = new Coordinate(34.0522, -118.2437);  // Los Angeles

Console.WriteLine(c1 == c2);  // True
Console.WriteLine(c1 == c3);  // False

// With-expression creates a new instance
Coordinate c4 = c1 with { Longitude = -73.9352 };
Console.WriteLine(c4);  // Coordinate { Latitude = 40.7128, Longitude = -73.9352 }
```

## Records (C# 9+)

Records are reference types designed for immutable data models with value-based equality semantics.

### Basic Record Declaration

```csharp
// Positional record (concise syntax)
public record Person(string FirstName, string LastName, int Age);

// Usage
Person person1 = new Person("John", "Doe", 30);
Person person2 = new Person("John", "Doe", 30);
Person person3 = new Person("Jane", "Smith", 25);

// Value-based equality
Console.WriteLine(person1 == person2);  // True (same property values)
Console.WriteLine(person1 == person3);  // False (different property values)

// ToString() is auto-implemented
Console.WriteLine(person1);  // Person { FirstName = John, LastName = Doe, Age = 30 }

// Deconstruction
var (firstName, lastName, age) = person1;
Console.WriteLine($"{firstName} {lastName}, {age}");  // "John Doe, 30"

// With-expression for non-destructive mutation
Person olderPerson = person1 with { Age = 31 };
Console.WriteLine(olderPerson);  // Person { FirstName = John, LastName = Doe, Age = 31 }
```

### Record with Additional Members

```csharp
// Record with additional members
public record Employee(string FirstName, string LastName, string Department, decimal Salary)
{
    // Additional property
    public string FullName => $"{FirstName} {LastName}";
    
    // Additional method
    public decimal CalculateAnnualSalary() => Salary * 12;
    
    // Custom constructor that calls the primary constructor
    public Employee(string firstName, string lastName) 
        : this(firstName, lastName, "General", 5000m)
    {
        Console.WriteLine("Employee created with default department and salary");
    }
    
    // Override ToString
    public override string ToString()
    {
        return $"{FullName} - {Department}";
    }
}

// Usage
Employee emp1 = new Employee("Alice", "Johnson", "Engineering", 8000m);
Console.WriteLine(emp1.FullName);  // "Alice Johnson"
Console.WriteLine(emp1.CalculateAnnualSalary());  // 96000

Employee emp2 = new Employee("Bob", "Smith");  // Uses custom constructor
Console.WriteLine(emp2);  // "Bob Smith - General"

// With-expression works with all properties
Employee promotedEmp = emp1 with { Department = "Engineering Management", Salary = 10000m };
```

### Record Inheritance

```csharp
// Base record
public record Person(string FirstName, string LastName);

// Derived record
public record Student(string FirstName, string LastName, string Major, double GPA) 
    : Person(FirstName, LastName);

// Another derived record
public record Teacher(string FirstName, string LastName, string Subject, int YearsOfExperience) 
    : Person(FirstName, LastName);

// Usage
Student student = new Student("Emma", "Davis", "Computer Science", 3.8);
Teacher teacher = new Teacher("Michael", "Wilson", "Mathematics", 15);

// Inheritance is considered in equality
Student student2 = new Student("Emma", "Davis", "Computer Science", 3.8);
Person person = new Person("Emma", "Davis");

Console.WriteLine(student == student2);  // True
Console.WriteLine(student == person);    // False (different types)

// With-expression with inheritance
Student transferStudent = student with { Major = "Data Science" };
Console.WriteLine(transferStudent);  // Student { FirstName = Emma, LastName = Davis, Major = Data Science, GPA = 3.8 }
```

### Record vs Class vs Struct

```csharp
// Class (reference type, reference equality)
public class PersonClass
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
    
    public PersonClass(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }
}

// Record (reference type, value equality)
public record PersonRecord(string FirstName, string LastName);

// Struct (value type, value equality)
public struct PersonStruct
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
}

// Record struct (value type, value equality with record features)
public record struct PersonRecordStruct(string FirstName, string LastName);

// Usage comparison
void CompareTypes()
{
    // Class instances
    var class1 = new PersonClass("John", "Doe");
    var class2 = new PersonClass("John", "Doe");
    Console.WriteLine(class1 == class2);  // False (reference equality)
    
    // Record instances
    var record1 = new PersonRecord("John", "Doe");
    var record2 = new PersonRecord("John", "Doe");
    Console.WriteLine(record1 == record2);  // True (value equality)
    
    // Struct instances
    var struct1 = new PersonStruct { FirstName = "John", LastName = "Doe" };
    var struct2 = new PersonStruct { FirstName = "John", LastName = "Doe" };
    Console.WriteLine(struct1.Equals(struct2));  // True (value equality)
    
    // Record struct instances
    var recordStruct1 = new PersonRecordStruct("John", "Doe");
    var recordStruct2 = new PersonRecordStruct("John", "Doe");
    Console.WriteLine(recordStruct1 == recordStruct2);  // True (value equality)
    
    // Mutation
    // class1.FirstName = "Jane";  // Error if init-only property
    // record1.FirstName = "Jane";  // Error (records are immutable)
    // struct1.FirstName = "Jane";  // Error if init-only property
    // recordStruct1.FirstName = "Jane";  // Error (record structs are immutable)
    
    // Non-destructive mutation
    var record3 = record1 with { FirstName = "Jane" };
    var recordStruct3 = recordStruct1 with { FirstName = "Jane" };
}
```

## Resources

- [C# Structs (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct)
- [C# Records (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)
- [C# Value Types (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types)
- [C# Reference Types (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types)

# 10. Generics

Generics allow you to define type-safe data structures and algorithms without committing to specific data types.

## Generic Classes and Interfaces

### Basic Generic Class

```csharp
// Generic class with one type parameter
public class Box<T>
{
    // Field of type T
    private T _value;
    
    // Constructor
    public Box(T value)
    {
        _value = value;
    }
    
    // Property
    public T Value
    {
        get { return _value; }
        set { _value = value; }
    }
    
    // Method that returns the type name
    public string GetTypeName()
    {
        return typeof(T).Name;
    }
}

// Usage
Box<int> intBox = new Box<int>(42);
Console.WriteLine(intBox.Value);  // 42
Console.WriteLine(intBox.GetTypeName());  // "Int32"

Box<string> stringBox = new Box<string>("Hello");
Console.WriteLine(stringBox.Value);  // "Hello"
Console.WriteLine(stringBox.GetTypeName());  // "String"

// Target-typed new (C# 9.0+)
Box<double> doubleBox = new(3.14);
```

### Generic Class with Multiple Type Parameters

```csharp
// Generic class with multiple type parameters
public class Pair<TFirst, TSecond>
{
    public TFirst First { get; set; }
    public TSecond Second { get; set; }
    
    public Pair(TFirst first, TSecond second)
    {
        First = first;
        Second = second;
    }
    
    public override string ToString()
    {
        return $"({First}, {Second})";
    }
}

// Usage
Pair<int, string> pair1 = new Pair<int, string>(1, "One");
Console.WriteLine(pair1);  // "(1, One)"

Pair<string, bool> pair2 = new Pair<string, bool>("Ready", true);
Console.WriteLine(pair2);  // "(Ready, True)"

// Using var with generics
var pair3 = new Pair<double, double>(3.14, 2.71);
```

### Generic Interface

```csharp
// Generic interface
public interface IRepository<T>
{
    T GetById(int id);
    IEnumerable<T> GetAll();
    void Add(T item);
    void Update(T item);
    void Delete(int id);
}

// Implementation for a specific type
public class CustomerRepository : IRepository<Customer>
{
    private List<Customer> _customers = new List<Customer>();
    
    public Customer GetById(int id)
    {
        return _customers.FirstOrDefault(c => c.Id == id);
    }
    
    public IEnumerable<Customer> GetAll()
    {
        return _customers;
    }
    
    public void Add(Customer item)
    {
        _customers.Add(item);
    }
    
    public void Update(Customer item)
    {
        var index = _customers.FindIndex(c => c.Id == item.Id);
        if (index >= 0)
            _customers[index] = item;
    }
    
    public void Delete(int id)
    {
        _customers.RemoveAll(c => c.Id == id);
    }
}

// Another implementation for a different type
public class ProductRepository : IRepository<Product>
{
    // Similar implementation for Product type
}
```

### Generic Interface with Multiple Type Parameters

```csharp
// Generic interface with multiple type parameters
public interface IConverter<TInput, TOutput>
{
    TOutput Convert(TInput input);
}

// Implementation
public class StringToIntConverter : IConverter<string, int>
{
    public int Convert(string input)
    {
        return int.Parse(input);
    }
}

public class DateTimeToStringConverter : IConverter<DateTime, string>
{
    public string Convert(DateTime input)
    {
        return input.ToString("yyyy-MM-dd");
    }
}

// Usage
IConverter<string, int> numberConverter = new StringToIntConverter();
int number = numberConverter.Convert("42");  // 42

IConverter<DateTime, string> dateConverter = new DateTimeToStringConverter();
string dateStr = dateConverter.Convert(DateTime.Now);  // "2023-07-25"
```

## Generic Methods

### Basic Generic Method

```csharp
// Class with generic methods
public class Utilities
{
    // Generic method with one type parameter
    public T[] CreateArray<T>(T item, int count)
    {
        T[] array = new T[count];
        for (int i = 0; i < count; i++)
        {
            array[i] = item;
        }
        return array;
    }
    
    // Generic method with type inference
    public void Swap<T>(ref T a, ref T b)
    {
        T temp = a;
        a = b;
        b = temp;
    }
    
    // Generic method with constraints
    public bool AreEqual<T>(T a, T b) where T : IEquatable<T>
    {
        return a.Equals(b);
    }
}

// Usage
Utilities utils = new Utilities();

// Explicit type parameter
string[] names = utils.CreateArray<string>("John", 3);
// ["John", "John", "John"]

// Type inference (compiler determines T is int)
int[] numbers = utils.CreateArray(42, 4);
// [42, 42, 42, 42]

// Swap values
int x = 5, y = 10;
utils.Swap(ref x, ref y);
Console.WriteLine($"x = {x}, y = {y}");  // "x = 10, y = 5"

// Using constrained method
bool equal = utils.AreEqual("hello", "hello");  // true
```

### Generic Method in Non-Generic Class

```csharp
// Non-generic class with generic methods
public class ArrayHelper
{
    // Generic method to find the first occurrence
    public int FindIndex<T>(T[] array, T item)
    {
        for (int i = 0; i < array.Length; i++)
        {
            if (EqualityComparer<T>.Default.Equals(array[i], item))
                return i;
        }
        return -1;
    }
    
    // Generic method with predicate
    public T Find<T>(T[] array, Predicate<T> predicate)
    {
        foreach (T item in array)
        {
            if (predicate(item))
                return item;
        }
        return default;
    }
    
    // Generic method that returns a generic collection
    public List<T> Filter<T>(T[] array, Func<T, bool> filter)
    {
        List<T> result = new List<T>();
        foreach (T item in array)
        {
            if (filter(item))
                result.Add(item);
        }
        return result;
    }
}

// Usage
ArrayHelper helper = new ArrayHelper();

string[] fruits = { "apple", "banana", "cherry", "date" };
int index = helper.FindIndex(fruits, "cherry");  // 2

int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
int firstEven = helper.Find(numbers, n => n % 2 == 0);  // 2

List<int> evenNumbers = helper.Filter(numbers, n => n % 2 == 0);
// [2, 4, 6, 8, 10]
```

### Extension Methods with Generics

```csharp
// Generic extension methods
public static class EnumerableExtensions
{
    // Extension method for any IEnumerable<T>
    public static T FirstOrDefault<T>(this IEnumerable<T> source, T defaultValue)
    {
        foreach (T item in source)
        {
            return item;
        }
        return defaultValue;
    }
    
    // Extension method with predicate
    public static bool Any<T>(this IEnumerable<T> source, Func<T, bool> predicate)
    {
        foreach (T item in source)
        {
            if (predicate(item))
                return true;
        }
        return false;
    }
    
    // Extension method that transforms elements
    public static IEnumerable<TResult> Select<T, TResult>(
        this IEnumerable<T> source, 
        Func<T, TResult> selector)
    {
        foreach (T item in source)
        {
            yield return selector(item);
        }
    }
}

// Usage
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };

// Using extension methods
int first = numbers.FirstOrDefault(-1);  // 1
bool hasEven = numbers.Any(n => n % 2 == 0);  // true

// Transforming elements
IEnumerable<string> numberStrings = numbers.Select(n => n.ToString());
// ["1", "2", "3", "4", "5"]
```

## Generic Constraints

Generic constraints limit the types that can be used as type arguments in a generic type or method.

### Type Constraints

```csharp
// Class constraint (T must be a class)
public class Repository<T> where T : class
{
    public void Save(T entity)
    {
        // Only reference types allowed
        Console.WriteLine($"Saving {entity}");
    }
}

// Struct constraint (T must be a value type)
public class ValueProcessor<T> where T : struct
{
    public T Process(T value)
    {
        // Only value types allowed
        Console.WriteLine($"Processing {value}");
        return value;
    }
}

// Interface constraint (T must implement an interface)
public class Sorter<T> where T : IComparable<T>
{
    public void Sort(T[] items)
    {
        Array.Sort(items);
    }
}

// Base class constraint (T must inherit from a specific class)
public class EntityValidator<T> where T : Entity
{
    public bool Validate(T entity)
    {
        return entity.IsValid();
    }
}

// Usage
Repository<Customer> customerRepo = new Repository<Customer>();
// Repository<int> intRepo = new Repository<int>();  // Error: int is not a class

ValueProcessor<int> intProcessor = new ValueProcessor<int>();
// ValueProcessor<string> stringProcessor = new ValueProcessor<string>();  // Error: string is not a struct

Sorter<string> stringSorter = new Sorter<string>();
// Sorter<object> objectSorter = new Sorter<object>();  // Error: object doesn't implement IComparable<object>

EntityValidator<User> userValidator = new EntityValidator<User>();
// EntityValidator<Customer> customerValidator = new EntityValidator<Customer>();  // Error: Customer doesn't inherit from Entity
```

### Multiple Constraints

```csharp
// Multiple constraints
public class DataProcessor<T> where T : class, ISerializable, new()
{
    // T must be a reference type, implement ISerializable, and have a parameterless constructor
    
    public T CreateAndProcess()
    {
        T item = new T();  // Requires new() constraint
        // Process the item
        return item;
    }
}

// Constraints on multiple type parameters
public class Converter<TInput, TOutput>
    where TInput : IConvertible
    where TOutput : IConvertible, new()
{
    public TOutput Convert(TInput input)
    {
        TOutput output = new TOutput();
        // Convert input to output
        return output;
    }
}
```

### Special Constraints

```csharp
// Unmanaged constraint (C# 7.3+)
public unsafe struct Buffer<T> where T : unmanaged
{
    // T must be an unmanaged type (primitive, enum, pointer, or struct of unmanaged types)
    private T* _pointer;
    private int _length;
    
    public Buffer(int length)
    {
        _length = length;
        _pointer = (T*)Marshal.AllocHGlobal(length * sizeof(T));
    }
    
    // Other methods...
}

// notnull constraint (C# 8.0+)
public class NonNullContainer<T> where T : notnull
{
    // T cannot be a nullable type
    private T _value;
    
    public NonNullContainer(T value)
    {
        _value = value ?? throw new ArgumentNullException(nameof(value));
    }
}

// default constraint (C# 7.1+)
public class DefaultValueProvider<T> where T : default
{
    // No specific constraint, just allows use of default(T)
    public T GetDefault()
    {
        return default(T);
    }
}
```

## Generic Type Inference

C# can often infer the type arguments for generic methods from the method arguments.

```csharp
public class TypeInference
{
    // Generic method
    public static void PrintPair<T, U>(T first, U second)
    {
        Console.WriteLine($"First: {first} ({typeof(T).Name}), Second: {second} ({typeof(U).Name})");
    }
    
    // Generic method with return type
    public static List<T> CreateList<T>(params T[] items)
    {
        return new List<T>(items);
    }
    
    // Method that uses type inference with constraints
    public static bool AreEqual<T>(T a, T b) where T : IEquatable<T>
    {
        return a.Equals(b);
    }
}

// Usage with type inference
TypeInference.PrintPair(42, "Hello");  // Compiler infers T as int, U as string
TypeInference.PrintPair("World", 3.14);  // Compiler infers T as string, U as double

// Type inference with return type
var numbers = TypeInference.CreateList(1, 2, 3, 4, 5);  // List<int>
var names = TypeInference.CreateList("Alice", "Bob", "Charlie");  // List<string>

// Type inference with constraints
bool equal = TypeInference.AreEqual("hello", "world");  // false
```

## Covariance and Contravariance

Covariance and contravariance enable implicit reference conversions for array types, delegate types, and generic type arguments.

### Covariance (out)

Covariance allows a method to return a more derived type than specified by the generic parameter.

```csharp
// Covariant interface (C# 4.0+)
public interface IProducer<out T>
{
    T Produce();
    // void Consume(T item);  // Error: Cannot use T as input parameter with 'out'
}

// Implementation
public class StringProducer : IProducer<string>
{
    public string Produce()
    {
        return "Hello, World!";
    }
}

// Usage with covariance
IProducer<string> stringProducer = new StringProducer();
IProducer<object> objectProducer = stringProducer;  // Covariance: IProducer<string> to IProducer<object>
object result = objectProducer.Produce();  // Returns a string, which is an object
```

### Contravariance (in)

Contravariance allows a method to accept parameters of a less derived type than specified by the generic parameter.

```csharp
// Contravariant interface (C# 4.0+)
public interface IConsumer<in T>
{
    void Consume(T item);
    // T Produce();  // Error: Cannot use T as return type with 'in'
}

// Implementation
public class ObjectConsumer : IConsumer<object>
{
    public void Consume(object item)
    {
        Console.WriteLine($"Consuming: {item}");
    }
}

// Usage with contravariance
IConsumer<object> objectConsumer = new ObjectConsumer();
IConsumer<string> stringConsumer = objectConsumer;  // Contravariance: IConsumer<object> to IConsumer<string>
stringConsumer.Consume("Hello");  // Passes a string to a method that accepts object
```

### Invariance

By default, generic type parameters are invariant, meaning there's no implicit conversion between different instantiations of the same generic type.

```csharp
// Invariant interface
public interface IContainer<T>
{
    T Value { get; set; }  // Both getter (out) and setter (in)
}

// Implementation
public class Container<T> : IContainer<T>
{
    public T Value { get; set; }
}

// Usage with invariance
IContainer<string> stringContainer = new Container<string>();
// IContainer<object> objectContainer = stringContainer;  // Error: Invariant
// IContainer<string> stringContainer2 = new Container<object>();  // Error: Invariant
```

### Covariance and Contravariance with Delegates

```csharp
// Delegate with covariant return type (out) and contravariant parameter type (in)
public delegate TResult Func<in T, out TResult>(T arg);

// Methods
public static string StringFromObject(object obj)
{
    return obj.ToString();
}

public static object ObjectFromString(string str)
{
    return str;
}

// Usage with delegates
Func<object, string> objectToString = StringFromObject;
Func<string, object> stringToObject = ObjectFromString;

// Covariance: string is more derived than object
Func<object, object> objectToObject = objectToString;  // Covariance in return type

// Contravariance: string is more derived than object
Func<string, string> stringToString = objectToString;  // Contravariance in parameter type

// Both covariance and contravariance
Func<string, object> stringToObject2 = objectToObject;  // Contravariance in parameter, covariance in return type
```

## Generic Collections

The .NET Framework provides several generic collection classes in the `System.Collections.Generic` namespace.

### List<T>

```csharp
// Creating a List<T>
List<int> numbers = new List<int>();
List<string> names = new List<string> { "Alice", "Bob", "Charlie" };

// Adding elements
numbers.Add(1);
numbers.AddRange(new[] { 2, 3, 4, 5 });

// Accessing elements
int first = numbers[0];  // 1
string lastName = names[names.Count - 1];  // "Charlie"

// Inserting elements
numbers.Insert(2, 10);  // Insert 10 at index 2
numbers.InsertRange(3, new[] { 11, 12 });

// Removing elements
numbers.Remove(3);  // Remove the first occurrence of 3
numbers.RemoveAt(0);  // Remove element at index 0
numbers.RemoveAll(n => n > 10);  // Remove all elements greater than 10
numbers.Clear();  // Remove all elements

// Searching
int index = names.IndexOf("Bob");  // 1
bool contains = names.Contains("David");  // false
string found = names.Find(n => n.StartsWith("A"));  // "Alice"
List<string> filtered = names.FindAll(n => n.Length > 3);  // ["Alice", "Charlie"]

// Sorting
numbers.Sort();  // Sort in ascending order
names.Sort((a, b) => b.CompareTo(a));  // Sort in descending order

// Converting to array
int[] numberArray = numbers.ToArray();
```

### Dictionary<TKey, TValue>

```csharp
// Creating a Dictionary<TKey, TValue>
Dictionary<string, int> ages = new Dictionary<string, int>();
Dictionary<int, string> idToName = new Dictionary<int, string>
{
    { 1, "Alice" },
    { 2, "Bob" },
    [3] = "Charlie"  // Alternative syntax (C# 6.0+)
};

// Adding elements
ages.Add("Alice", 30);
ages["Bob"] = 25;  // Add or update

// Accessing elements
int aliceAge = ages["Alice"];  // 30
// int davidAge = ages["David"];  // Throws KeyNotFoundException

// Safe access
if (ages.TryGetValue("David", out int davidAge))
{
    Console.WriteLine(davidAge);
}
else
{
    Console.WriteLine("David not found");
}

// Checking for keys
bool hasKey = ages.ContainsKey("Bob");  // true

// Removing elements
bool removed = ages.Remove("Bob");  // true
ages.Clear();  // Remove all elements

// Iterating
foreach (KeyValuePair<int, string> pair in idToName)
{
    Console.WriteLine($"ID: {pair.Key}, Name: {pair.Value}");
}

// Iterating keys and values separately
foreach (int id in idToName.Keys)
{
    Console.WriteLine($"ID: {id}");
}

foreach (string name in idToName.Values)
{
    Console.WriteLine($"Name: {name}");
}
```

### HashSet<T>

```csharp
// Creating a HashSet<T>
HashSet<int> set1 = new HashSet<int>();
HashSet<string> set2 = new HashSet<string> { "Apple", "Banana", "Cherry" };

// Adding elements
set1.Add(1);
set1.Add(2);
set1.Add(1);  // Duplicate, not added
bool added = set1.Add(3);  // true

// Checking for elements
bool contains = set2.Contains("Banana");  // true

// Removing elements
bool removed = set2.Remove("Banana");  // true
set1.Clear();  // Remove all elements

// Set operations
HashSet<int> a = new HashSet<int> { 1, 2, 3, 4, 5 };
HashSet<int> b = new HashSet<int> { 3, 4, 5, 6, 7 };

// Union (elements in either set)
a.UnionWith(b);  // a = { 1, 2, 3, 4, 5, 6, 7 }

// Intersection (elements in both sets)
HashSet<int> c = new HashSet<int> { 1, 2, 3, 4, 5 };
c.IntersectWith(b);  // c = { 3, 4, 5 }

// Difference (elements in first set but not in second)
HashSet<int> d = new HashSet<int> { 1, 2, 3, 4, 5 };
d.ExceptWith(b);  // d = { 1, 2 }

// Symmetric difference (elements in either set but not in both)
HashSet<int> e = new HashSet<int> { 1, 2, 3, 4, 5 };
e.SymmetricExceptWith(b);  // e = { 1, 2, 6, 7 }

// Subset/superset checks
bool isSubset = c.IsSubsetOf(a);  // true
bool isSuperset = a.IsSupersetOf(c);  // true
```

### Queue<T>

```csharp
// Creating a Queue<T>
Queue<string> queue = new Queue<string>();
Queue<int> numbers = new Queue<int>(new[] { 1, 2, 3 });

// Adding elements
queue.Enqueue("First");
queue.Enqueue("Second");
queue.Enqueue("Third");

// Examining elements
string peek = queue.Peek();  // "First" (doesn't remove)

// Removing elements
string first = queue.Dequeue();  // "First" (removes from queue)
queue.Clear();  // Remove all elements

// Checking
bool contains = numbers.Contains(2);  // true
int count = numbers.Count;  // 3

// Converting to array
int[] array = numbers.ToArray();  // Creates a copy

// Iterating
foreach (int number in numbers)
{
    Console.WriteLine(number);
}
```

### Stack<T>

```csharp
// Creating a Stack<T>
Stack<string> stack = new Stack<string>();
Stack<int> numbers = new Stack<int>(new[] { 1, 2, 3 });  // 3 will be on top

// Adding elements
stack.Push("First");
stack.Push("Second");
stack.Push("Third");  // "Third" is now on top

// Examining elements
string peek = stack.Peek();  // "Third" (doesn't remove)

// Removing elements
string top = stack.Pop();  // "Third" (removes from stack)
stack.Clear();  // Remove all elements

// Checking
bool contains = numbers.Contains(2);  // true
int count = numbers.Count;  // 3

// Converting to array
int[] array = numbers.ToArray();  // Order: 3, 2, 1

// Iterating
foreach (int number in numbers)
{
    Console.WriteLine(number);  // Order: 3, 2, 1
}
```

### LinkedList<T>

```csharp
// Creating a LinkedList<T>
LinkedList<string> linkedList = new LinkedList<string>();
LinkedList<int> numbers = new LinkedList<int>(new[] { 1, 2, 3 });

// Adding elements
LinkedListNode<string> firstNode = linkedList.AddFirst("First");
LinkedListNode<string> lastNode = linkedList.AddLast("Last");
linkedList.AddAfter(firstNode, "Middle");
linkedList.AddBefore(lastNode, "Before Last");

// Accessing elements
string first = linkedList.First.Value;  // "First"
string last = linkedList.Last.Value;  // "Last"

// Removing elements
linkedList.Remove("Middle");  // Remove by value
linkedList.Remove(firstNode);  // Remove by node
linkedList.RemoveFirst();  // Remove first node
linkedList.RemoveLast();  // Remove last node
linkedList.Clear();  // Remove all elements

// Checking
bool contains = numbers.Contains(2);  // true
int count = numbers.Count;  // 3

// Iterating
foreach (int number in numbers)
{
    Console.WriteLine(number);
}

// Iterating with nodes
LinkedListNode<int> node = numbers.First;
while (node != null)
{
    Console.WriteLine(node.Value);
    node = node.Next;
}
```

### SortedList<TKey, TValue>

```csharp
// Creating a SortedList<TKey, TValue>
SortedList<string, int> sortedAges = new SortedList<string, int>();
SortedList<int, string> sortedNames = new SortedList<int, string>
{
    { 3, "Charlie" },
    { 1, "Alice" },
    { 2, "Bob" }
};

// Adding elements (automatically sorted by key)
sortedAges.Add("Charlie", 30);
sortedAges.Add("Alice", 25);
sortedAges.Add("Bob", 35);
sortedAges["David"] = 28;  // Add or update

// Accessing elements
int aliceAge = sortedAges["Alice"];  // 25
string firstName = sortedNames[1];  // "Alice" (sorted by key)

// Accessing by index
string firstKey = sortedAges.Keys[0];  // "Alice" (keys are sorted)
int firstValue = sortedAges.Values[0];  // 25

// Removing elements
sortedAges.Remove("Bob");
sortedAges.RemoveAt(0);  // Remove by index

// Checking
bool containsKey = sortedAges.ContainsKey("Charlie");
bool containsValue = sortedAges.ContainsValue(28);

// Iterating (in sorted order by key)
foreach (KeyValuePair<string, int> pair in sortedAges)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

### SortedSet<T>

```csharp
// Creating a SortedSet<T>
SortedSet<int> sortedSet = new SortedSet<int>();
SortedSet<string> names = new SortedSet<string> { "Charlie", "Alice", "Bob" };

// Adding elements (automatically sorted)
sortedSet.Add(5);
sortedSet.Add(2);
sortedSet.Add(8);
sortedSet.Add(2);  // Duplicate, not added

// Accessing elements
int min = sortedSet.Min;  // 2
int max = sortedSet.Max;  // 8

// Getting views
SortedSet<int> subset = sortedSet.GetViewBetween(3, 7);  // Elements between 3 and 7 inclusive

// Removing elements
sortedSet.Remove(5);
sortedSet.RemoveWhere(n => n > 5);  // Remove all elements greater than 5

// Set operations (same as HashSet<T>)
SortedSet<int> a = new SortedSet<int> { 1, 2, 3, 4, 5 };
SortedSet<int> b = new SortedSet<int> { 3, 4, 5, 6, 7 };

a.UnionWith(b);  // a = { 1, 2, 3, 4, 5, 6, 7 } (sorted)

// Iterating (in sorted order)
foreach (string name in names)
{
    Console.WriteLine(name);  // "Alice", "Bob", "Charlie"
}
```

### ConcurrentDictionary<TKey, TValue>

```csharp
// Creating a thread-safe dictionary
ConcurrentDictionary<string, int> concurrentDict = new ConcurrentDictionary<string, int>();

// Adding elements
concurrentDict.TryAdd("One", 1);
concurrentDict.TryAdd("Two", 2);

// Adding or updating atomically
int newValue = concurrentDict.AddOrUpdate(
    "Three",
    key => 3,  // Add function if key doesn't exist
    (key, oldValue) => oldValue + 1  // Update function if key exists
);

// Getting or adding atomically
int value = concurrentDict.GetOrAdd("Four", key => 4);

// Updating atomically
bool updated = concurrentDict.TryUpdate("Two", 22, 2);  // Update if current value is 2

// Removing elements
bool removed = concurrentDict.TryRemove("One", out int removedValue);

// Thread-safe iteration
foreach (KeyValuePair<string, int> pair in concurrentDict)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

## Resources

- [C# Generics (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/)
- [Generic Collections (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/collections/generic-collection-types)
- [Covariance and Contravariance (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/covariance-contravariance/)
- [Generic Constraints (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters)

# 11. Collections

C# provides a rich set of collection types for storing and manipulating groups of related objects.

## Arrays

Arrays are the most basic collection type in C#, providing a fixed-size, zero-indexed list of elements of the same type.

### Array Declaration and Initialization

```csharp
// Declaration and initialization
int[] numbers = new int[5];  // Array of 5 integers, all initialized to 0

// Declaration with initialization
string[] fruits = new string[] { "Apple", "Banana", "Cherry" };

// Shorthand initialization
char[] vowels = { 'a', 'e', 'i', 'o', 'u' };

// Initialization with specific values
int[] scores = new int[3] { 85, 92, 78 };

// Declaration and later initialization
double[] prices;
prices = new double[2];
prices[0] = 9.99;
prices[1] = 19.99;
```

### Accessing Array Elements

```csharp
// Accessing elements by index
int firstNumber = numbers[0];
string secondFruit = fruits[1];  // "Banana"

// Setting elements by index
numbers[2] = 42;
fruits[0] = "Apricot";

// Getting array length
int length = numbers.Length;  // 5

// Iterating through an array with for loop
for (int i = 0; i < fruits.Length; i++)
{
    Console.WriteLine(fruits[i]);
}

// Iterating with foreach loop
foreach (char vowel in vowels)
{
    Console.WriteLine(vowel);
}
```

### Multidimensional Arrays

```csharp
// 2D rectangular array
int[,] matrix = new int[3, 2];  // 3 rows, 2 columns
matrix[0, 0] = 1;
matrix[0, 1] = 2;
matrix[1, 0] = 3;
matrix[1, 1] = 4;
matrix[2, 0] = 5;
matrix[2, 1] = 6;

// 2D array initialization
int[,] grid = new int[,] {
    { 1, 2, 3 },
    { 4, 5, 6 }
};

// Getting dimensions
int rows = grid.GetLength(0);  // 2
int columns = grid.GetLength(1);  // 3

// Iterating through a 2D array
for (int i = 0; i < rows; i++)
{
    for (int j = 0; j < columns; j++)
    {
        Console.Write($"{grid[i, j]} ");
    }
    Console.WriteLine();
}

// 3D array
int[,,] cube = new int[2, 2, 2];
cube[0, 0, 0] = 1;
cube[1, 1, 1] = 8;
```

### Jagged Arrays (Arrays of Arrays)

```csharp
// Jagged array declaration
int[][] jaggedArray = new int[3][];

// Initializing the inner arrays
jaggedArray[0] = new int[] { 1, 2, 3 };
jaggedArray[1] = new int[] { 4, 5 };
jaggedArray[2] = new int[] { 6, 7, 8, 9 };

// Jagged array initialization
int[][] numbers = new int[][] {
    new int[] { 1, 2 },
    new int[] { 3, 4, 5 },
    new int[] { 6 }
};

// Accessing elements
int value = jaggedArray[1][0];  // 4

// Iterating through a jagged array
for (int i = 0; i < jaggedArray.Length; i++)
{
    for (int j = 0; j < jaggedArray[i].Length; j++)
    {
        Console.Write($"{jaggedArray[i][j]} ");
    }
    Console.WriteLine();
}
```

### Array Methods and Properties

```csharp
int[] numbers = { 4, 2, 8, 5, 1, 3, 9 };
string[] names = { "Alice", "Bob", "Charlie", "David" };

// Finding elements
int index = Array.IndexOf(numbers, 5);  // 3
int lastIndex = Array.LastIndexOf(names, "Bob");  // 1
bool exists = Array.Exists(numbers, n => n > 7);  // true
int found = Array.Find(numbers, n => n % 2 == 0);  // 4
int[] evenNumbers = Array.FindAll(numbers, n => n % 2 == 0);  // [4, 2, 8]

// Sorting and reversing
Array.Sort(numbers);  // [1, 2, 3, 4, 5, 8, 9]
Array.Reverse(names);  // ["David", "Charlie", "Bob", "Alice"]

// Resizing
Array.Resize(ref names, 6);  // Resize to length 6, new elements are null
names[4] = "Eve";
names[5] = "Frank";

// Copying
int[] numbersCopy = new int[numbers.Length];
Array.Copy(numbers, numbersCopy, numbers.Length);

// Creating a shallow copy
string[] namesCopy = (string[])names.Clone();

// Clearing elements
Array.Clear(numbers, 0, 2);  // Clear first 2 elements (set to default value)

// Binary search (array must be sorted)
Array.Sort(numbers);
int position = Array.BinarySearch(numbers, 5);  // Returns index if found

// Converting to other collections
List<int> numberList = new List<int>(numbers);
Queue<string> nameQueue = new Queue<string>(names);
```

## List<T>

List<T> is a dynamic array that can grow or shrink as needed.

### List Creation and Initialization

```csharp
// Creating an empty list
List<int> numbers = new List<int>();

// Creating with initial capacity
List<string> names = new List<string>(10);

// Creating with initial elements
List<double> prices = new List<double> { 9.99, 19.99, 29.99 };

// Creating from an existing collection
int[] array = { 1, 2, 3, 4, 5 };
List<int> numberList = new List<int>(array);
```

### Adding and Inserting Elements

```csharp
// Adding elements
numbers.Add(1);
numbers.Add(2);
numbers.Add(3);

// Adding multiple elements
numbers.AddRange(new[] { 4, 5, 6 });

// Inserting at specific position
numbers.Insert(0, 0);  // Insert 0 at index 0
numbers.InsertRange(4, new[] { 3, 4 });  // Insert multiple elements at index 4
```

### Accessing and Modifying Elements

```csharp
// Accessing by index
int first = numbers[0];
string lastName = names[names.Count - 1];

// Modifying elements
numbers[1] = 10;

// Getting count
int count = numbers.Count;

// Checking if element exists
bool contains = numbers.Contains(5);
bool hasLongName = names.Exists(name => name.Length > 5);

// Finding elements
int index = numbers.IndexOf(3);
int lastIndex = numbers.LastIndexOf(3);
int foundNumber = numbers.Find(n => n > 5);
List<int> foundNumbers = numbers.FindAll(n => n % 2 == 0);
```

### Removing Elements

```csharp
// Removing specific element
bool removed = numbers.Remove(3);  // Removes first occurrence of 3

// Removing at specific index
numbers.RemoveAt(0);  // Removes element at index 0

// Removing a range
numbers.RemoveRange(1, 2);  // Removes 2 elements starting at index 1

// Removing based on condition
int removedCount = numbers.RemoveAll(n => n > 10);

// Clearing the list
numbers.Clear();
```

### Sorting and Searching

```csharp
// Sorting
numbers.Sort();  // Ascending order
names.Sort((a, b) => b.CompareTo(a));  // Descending order using comparison

// Binary search (list must be sorted)
numbers.Sort();
int index = numbers.BinarySearch(5);

// Custom sorting with IComparer
names.Sort(StringComparer.OrdinalIgnoreCase);
```

### Converting to Other Collections

```csharp
// Converting to array
int[] array = numbers.ToArray();

// Converting to dictionary
Dictionary<int, string> dictionary = names
    .Select((name, index) => new { Index = index, Name = name })
    .ToDictionary(item => item.Index, item => item.Name);
```

## Dictionary<TKey, TValue>

Dictionary<TKey, TValue> stores key-value pairs for fast lookups by key.

### Dictionary Creation and Initialization

```csharp
// Creating an empty dictionary
Dictionary<string, int> ages = new Dictionary<string, int>();

// Creating with initial elements
Dictionary<int, string> employees = new Dictionary<int, string>
{
    { 101, "John Smith" },
    { 102, "Jane Doe" },
    { 103, "Bob Johnson" }
};

// Alternative initialization syntax (C# 6.0+)
Dictionary<string, bool> settings = new Dictionary<string, bool>
{
    ["DarkMode"] = true,
    ["Notifications"] = false,
    ["AutoSave"] = true
};
```

### Adding and Updating Elements

```csharp
// Adding elements
ages.Add("Alice", 30);
ages.Add("Bob", 25);

// Adding or updating with indexer
ages["Charlie"] = 35;  // Adds if key doesn't exist, updates if it does

// TryAdd (C# 7.0+)
bool added = ages.TryAdd("Alice", 31);  // Returns false, doesn't modify existing entry

// Adding multiple elements
Dictionary<string, int> moreAges = new Dictionary<string, int>
{
    { "David", 40 },
    { "Eve", 28 }
};

foreach (var pair in moreAges)
{
    ages[pair.Key] = pair.Value;
}
```

### Accessing Elements

```csharp
// Accessing by key
int aliceAge = ages["Alice"];  // Throws if key doesn't exist

// Safe access with TryGetValue
if (ages.TryGetValue("Frank", out int frankAge))
{
    Console.WriteLine($"Frank's age: {frankAge}");
}
else
{
    Console.WriteLine("Frank not found");
}

// Checking if key exists
bool hasKey = ages.ContainsKey("Bob");

// Checking if value exists
bool hasValue = ages.ContainsValue(25);
```

### Removing Elements

```csharp
// Removing by key
bool removed = ages.Remove("Bob");

// Removing by key and getting the value
bool removedWithValue = ages.Remove("Charlie", out int charlieAge);

// Clearing the dictionary
ages.Clear();
```

### Iterating Through a Dictionary

```csharp
// Iterating through key-value pairs
foreach (KeyValuePair<string, int> pair in ages)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}

// Using deconstruction (C# 7.0+)
foreach (var (name, age) in ages)
{
    Console.WriteLine($"{name}: {age}");
}

// Iterating through keys
foreach (string name in ages.Keys)
{
    Console.WriteLine(name);
}

// Iterating through values
foreach (int age in ages.Values)
{
    Console.WriteLine(age);
}
```

### Dictionary Properties and Methods

```csharp
// Getting count
int count = ages.Count;

// Getting all keys
ICollection<string> keys = ages.Keys;

// Getting all values
ICollection<int> values = ages.Values;

// Converting to list of KeyValuePair
List<KeyValuePair<string, int>> pairsList = ages.ToList();

// Converting to lookup
ILookup<int, string> ageLookup = ages
    .ToLookup(pair => pair.Value, pair => pair.Key);
```

## HashSet<T>

HashSet<T> is a collection of unique elements with fast lookup, insertion, and deletion.

### HashSet Creation and Initialization

```csharp
// Creating an empty HashSet
HashSet<int> numbers = new HashSet<int>();

// Creating with initial elements
HashSet<string> fruits = new HashSet<string> { "Apple", "Banana", "Cherry" };

// Creating from an existing collection
string[] fruitArray = { "Apple", "Banana", "Cherry", "Apple" };
HashSet<string> uniqueFruits = new HashSet<string>(fruitArray);  // Duplicates are automatically removed
```

### Adding and Removing Elements

```csharp
// Adding elements
bool added = numbers.Add(1);  // Returns true if added, false if already exists
numbers.Add(2);
numbers.Add(3);

// Adding multiple elements
numbers.UnionWith(new[] { 3, 4, 5 });  // Adds elements not already in the set

// Removing elements
bool removed = numbers.Remove(2);

// Removing elements that match a predicate
numbers.RemoveWhere(n => n % 2 == 0);

// Clearing the set
numbers.Clear();
```

### Checking for Elements

```csharp
// Checking if element exists
bool contains = fruits.Contains("Banana");  // true

// Checking if set is a subset of another set
HashSet<string> citrus = new HashSet<string> { "Lemon", "Orange" };
bool isSubset = citrus.IsSubsetOf(fruits);  // false

// Checking if set is a superset of another set
bool isSuperset = fruits.IsSupersetOf(citrus);  // false

// Checking if sets overlap
bool overlaps = fruits.Overlaps(citrus);  // false

// Checking if sets have the same elements
bool equals = fruits.SetEquals(uniqueFruits);  // true
```

### Set Operations

```csharp
HashSet<int> set1 = new HashSet<int> { 1, 2, 3, 4, 5 };
HashSet<int> set2 = new HashSet<int> { 4, 5, 6, 7, 8 };

// Union (elements in either set)
HashSet<int> union = new HashSet<int>(set1);
union.UnionWith(set2);  // { 1, 2, 3, 4, 5, 6, 7, 8 }

// Intersection (elements in both sets)
HashSet<int> intersection = new HashSet<int>(set1);
intersection.IntersectWith(set2);  // { 4, 5 }

// Difference (elements in first set but not in second)
HashSet<int> difference = new HashSet<int>(set1);
difference.ExceptWith(set2);  // { 1, 2, 3 }

// Symmetric difference (elements in either set but not in both)
HashSet<int> symmetricDifference = new HashSet<int>(set1);
symmetricDifference.SymmetricExceptWith(set2);  // { 1, 2, 3, 6, 7, 8 }
```

### Iterating Through a HashSet

```csharp
// Iterating with foreach
foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}

// Converting to other collections
List<string> fruitList = fruits.ToList();
string[] fruitArray = fruits.ToArray();
```

## Queue<T>

Queue<T> represents a first-in, first-out (FIFO) collection of elements.

### Queue Creation and Initialization

```csharp
// Creating an empty queue
Queue<string> messages = new Queue<string>();

// Creating with initial elements
Queue<int> numbers = new Queue<int>(new[] { 1, 2, 3, 4, 5 });
```

### Adding and Removing Elements

```csharp
// Adding elements (at the end)
messages.Enqueue("Message 1");
messages.Enqueue("Message 2");
messages.Enqueue("Message 3");

// Removing elements (from the front)
string firstMessage = messages.Dequeue();  // "Message 1"

// Peeking at the front element without removing
string nextMessage = messages.Peek();  // "Message 2"

// Clearing the queue
messages.Clear();
```

### Queue Properties and Methods

```csharp
// Checking if element exists
bool contains = numbers.Contains(3);  // true

// Getting count
int count = messages.Count;

// Converting to array
string[] messageArray = messages.ToArray();

// Iterating through a queue
foreach (int number in numbers)
{
    Console.WriteLine(number);
}
```

### Queue Usage Example

```csharp
// Processing queue example
Queue<string> printQueue = new Queue<string>();

// Add print jobs
printQueue.Enqueue("Document1.pdf");
printQueue.Enqueue("Image.jpg");
printQueue.Enqueue("Report.docx");

// Process print jobs
while (printQueue.Count > 0)
{
    string currentJob = printQueue.Dequeue();
    Console.WriteLine($"Printing: {currentJob}");
    // Process the job...
}
```

## Stack<T>

Stack<T> represents a last-in, first-out (LIFO) collection of elements.

### Stack Creation and Initialization

```csharp
// Creating an empty stack
Stack<int> numbers = new Stack<int>();

// Creating with initial elements
Stack<string> pages = new Stack<string>(new[] { "Page 1", "Page 2", "Page 3" });
```

### Adding and Removing Elements

```csharp
// Adding elements (to the top)
numbers.Push(1);
numbers.Push(2);
numbers.Push(3);  // Stack is now [3, 2, 1] with 3 at the top

// Removing elements (from the top)
int top = numbers.Pop();  // 3, stack is now [2, 1]

// Peeking at the top element without removing
int nextTop = numbers.Peek();  // 2

// Clearing the stack
numbers.Clear();
```

### Stack Properties and Methods

```csharp
// Checking if element exists
bool contains = pages.Contains("Page 2");  // true

// Getting count
int count = pages.Count;

// Converting to array
string[] pagesArray = pages.ToArray();  // Order: top to bottom

// Iterating through a stack
foreach (string page in pages)
{
    Console.WriteLine(page);  // Iterates from top to bottom
}
```

### Stack Usage Example

```csharp
// Undo/redo functionality example
Stack<string> undoStack = new Stack<string>();
Stack<string> redoStack = new Stack<string>();

// Perform actions
void PerformAction(string action)
{
    Console.WriteLine($"Performing: {action}");
    undoStack.Push(action);
    redoStack.Clear();  // Clear redo stack when new action is performed
}

// Undo last action
void Undo()
{
    if (undoStack.Count > 0)
    {
        string action = undoStack.Pop();
        Console.WriteLine($"Undoing: {action}");
        redoStack.Push(action);
    }
    else
    {
        Console.WriteLine("Nothing to undo");
    }
}

// Redo last undone action
void Redo()
{
    if (redoStack.Count > 0)
    {
        string action = redoStack.Pop();
        Console.WriteLine($"Redoing: {action}");
        undoStack.Push(action);
    }
    else
    {
        Console.WriteLine("Nothing to redo");
    }
}

// Usage
PerformAction("Add text");
PerformAction("Format text");
PerformAction("Add image");
Undo();  // Undo "Add image"
Undo();  // Undo "Format text"
Redo();  // Redo "Format text"
```

## LinkedList<T>

LinkedList<T> represents a doubly linked list where each node points to the next and previous nodes.

### LinkedList Creation and Initialization

```csharp
// Creating an empty linked list
LinkedList<int> numbers = new LinkedList<int>();

// Creating with initial elements
LinkedList<string> names = new LinkedList<string>(new[] { "Alice", "Bob", "Charlie" });
```

### Adding Elements

```csharp
// Adding at the beginning
LinkedListNode<int> firstNode = numbers.AddFirst(1);

// Adding at the end
LinkedListNode<int> lastNode = numbers.AddLast(3);

// Adding after a node
LinkedListNode<int> middleNode = numbers.AddAfter(firstNode, 2);

// Adding before a node
numbers.AddBefore(lastNode, 2);
```

### Accessing Elements

```csharp
// Accessing first and last elements
int first = numbers.First.Value;
int last = numbers.Last.Value;

// Traversing forward
LinkedListNode<int> current = numbers.First;
while (current != null)
{
    Console.WriteLine(current.Value);
    current = current.Next;
}

// Traversing backward
current = numbers.Last;
while (current != null)
{
    Console.WriteLine(current.Value);
    current = current.Previous;
}
```

### Removing Elements

```csharp
// Removing specific nodes
numbers.Remove(2);  // Removes first occurrence of 2
numbers.Remove(firstNode);  // Removes the specified node

// Removing from the beginning or end
numbers.RemoveFirst();
numbers.RemoveLast();

// Clearing the list
numbers.Clear();
```

### LinkedList Properties and Methods

```csharp
// Checking if element exists
bool contains = names.Contains("Bob");  // true

// Getting count
int count = names.Count;

// Finding nodes
LinkedListNode<string> bobNode = names.Find("Bob");
LinkedListNode<string> lastBob = names.FindLast("Bob");

// Converting to array
string[] namesArray = names.ToArray();
```

## SortedList<TKey, TValue>

SortedList<TKey, TValue> represents a collection of key-value pairs sorted by key.

### SortedList Creation and Initialization

```csharp
// Creating an empty sorted list
SortedList<string, int> scores = new SortedList<string, int>();

// Creating with initial elements
SortedList<int, string> ranks = new SortedList<int, string>
{
    { 3, "Bronze" },
    { 1, "Gold" },
    { 2, "Silver" }
};  // Will be sorted by key: 1, 2, 3
```

### Adding and Accessing Elements

```csharp
// Adding elements (automatically sorted by key)
scores.Add("Alice", 95);
scores.Add("Charlie", 85);
scores.Add("Bob", 90);  // Will be sorted as Alice, Bob, Charlie

// Accessing by key
int aliceScore = scores["Alice"];  // 95

// Accessing by index
string secondKey = scores.Keys[1];  // "Bob"
int secondValue = scores.Values[1];  // 90

// Safe access
if (scores.TryGetValue("David", out int davidScore))
{
    Console.WriteLine(davidScore);
}
```

### Removing Elements

```csharp
// Removing by key
scores.Remove("Bob");

// Removing by index
scores.RemoveAt(0);  // Removes the first key-value pair

// Clearing the list
scores.Clear();
```

### SortedList Properties and Methods

```csharp
// Getting count
int count = scores.Count;

// Checking if key exists
bool hasKey = scores.ContainsKey("Alice");

// Checking if value exists
bool hasValue = scores.ContainsValue(90);

// Getting index of a key
int index = scores.IndexOfKey("Bob");

// Getting index of a value
int valueIndex = scores.IndexOfValue(85);

// Getting keys and values
IList<string> keys = scores.Keys;
IList<int> values = scores.Values;
```

## Concurrent Collections

.NET provides thread-safe collection classes in the `System.Collections.Concurrent` namespace.

### ConcurrentDictionary<TKey, TValue>

```csharp
// Creating a concurrent dictionary
ConcurrentDictionary<string, int> concurrentDict = new ConcurrentDictionary<string, int>();

// Adding elements
concurrentDict.TryAdd("One", 1);
concurrentDict.TryAdd("Two", 2);

// Getting or adding atomically
int value = concurrentDict.GetOrAdd("Three", key => 3);

// Updating atomically
int newValue = concurrentDict.AddOrUpdate(
    "One",
    key => 10,  // Add function
    (key, oldValue) => oldValue * 10  // Update function
);

// Removing elements
concurrentDict.TryRemove("Two", out int removedValue);
```

### ConcurrentQueue<T>

```csharp
// Creating a concurrent queue
ConcurrentQueue<string> concurrentQueue = new ConcurrentQueue<string>();

// Adding elements
concurrentQueue.Enqueue("Item 1");
concurrentQueue.Enqueue("Item 2");

// Trying to remove elements
if (concurrentQueue.TryDequeue(out string item))
{
    Console.WriteLine($"Dequeued: {item}");
}

// Peeking without removing
if (concurrentQueue.TryPeek(out string peekedItem))
{
    Console.WriteLine($"Next item: {peekedItem}");
}
```

### ConcurrentStack<T>

```csharp
// Creating a concurrent stack
ConcurrentStack<int> concurrentStack = new ConcurrentStack<int>();

// Adding elements
concurrentStack.Push(1);
concurrentStack.Push(2);
concurrentStack.Push(3);

// Trying to remove elements
if (concurrentStack.TryPop(out int poppedItem))
{
    Console.WriteLine($"Popped: {poppedItem}");
}

// Peeking without removing
if (concurrentStack.TryPeek(out int peekedItem))
{
    Console.WriteLine($"Top item: {peekedItem}");
}

// Popping multiple items
int[] items = new int[2];
int popped = concurrentStack.TryPopRange(items, 0, 2);
Console.WriteLine($"Popped {popped} items");
```

### ConcurrentBag<T>

```csharp
// Creating a concurrent bag (unordered collection)
ConcurrentBag<string> concurrentBag = new ConcurrentBag<string>();

// Adding elements
concurrentBag.Add("Item 1");
concurrentBag.Add("Item 2");
concurrentBag.Add("Item 3");

// Trying to remove elements
if (concurrentBag.TryTake(out string takenItem))
{
    Console.WriteLine($"Taken: {takenItem}");  // Order not guaranteed
}

// Peeking without removing
if (concurrentBag.TryPeek(out string peekedItem))
{
    Console.WriteLine($"Peeked: {peekedItem}");  // Order not guaranteed
}
```

### BlockingCollection<T>

```csharp
// Creating a blocking collection with bounded capacity
BlockingCollection<int> blockingCollection = new BlockingCollection<int>(boundedCapacity: 5);

// Producer task
Task producer = Task.Run(() =>
{
    for (int i = 0; i < 10; i++)
    {
        blockingCollection.Add(i);  // Blocks if collection is full
        Console.WriteLine($"Produced: {i}");
        Thread.Sleep(100);
    }
    blockingCollection.CompleteAdding();  // Signal no more items will be added
});

// Consumer task
Task consumer = Task.Run(() =>
{
    foreach (int item in blockingCollection.GetConsumingEnumerable())
    {
        Console.WriteLine($"Consumed: {item}");
        Thread.Sleep(200);  // Consuming slower than producing
    }
});

// Wait for both tasks to complete
Task.WaitAll(producer, consumer);
```

## ImmutableCollections

.NET provides immutable collection classes in the `System.Collections.Immutable` namespace.

### ImmutableArray<T>

```csharp
// Creating an immutable array
ImmutableArray<int> immutableArray = ImmutableArray.Create(1, 2, 3, 4, 5);

// Creating from existing collection
int[] array = { 1, 2, 3 };
ImmutableArray<int> fromArray = ImmutableArray.CreateRange(array);

// Creating a builder for batch operations
ImmutableArray<string>.Builder builder = ImmutableArray.CreateBuilder<string>();
builder.Add("One");
builder.Add("Two");
builder.Add("Three");
ImmutableArray<string> builtArray = builder.ToImmutable();

// Non-destructive operations (return new instances)
ImmutableArray<int> added = immutableArray.Add(6);
ImmutableArray<int> removed = immutableArray.Remove(3);
ImmutableArray<int> replaced = immutableArray.Replace(2, 20);
```

### ImmutableList<T>

```csharp
// Creating an immutable list
ImmutableList<string> immutableList = ImmutableList.Create("A", "B", "C");

// Creating from existing collection
List<string> list = new List<string> { "X", "Y", "Z" };
ImmutableList<string> fromList = ImmutableList.CreateRange(list);

// Non-destructive operations
ImmutableList<string> added = immutableList.Add("D");
ImmutableList<string> inserted = immutableList.Insert(1, "AB");
ImmutableList<string> removed = immutableList.Remove("B");
ImmutableList<string> replaced = immutableList.Replace("C", "CC");
```

### ImmutableDictionary<TKey, TValue>

```csharp
// Creating an immutable dictionary
ImmutableDictionary<string, int> immutableDict = ImmutableDictionary.Create<string, int>()
    .Add("One", 1)
    .Add("Two", 2)
    .Add("Three", 3);

// Creating from existing dictionary
Dictionary<string, bool> dict = new Dictionary<string, bool>
{
    { "A", true },
    { "B", false }
};
ImmutableDictionary<string, bool> fromDict = ImmutableDictionary.CreateRange(dict);

// Non-destructive operations
ImmutableDictionary<string, int> added = immutableDict.Add("Four", 4);
ImmutableDictionary<string, int> removed = immutableDict.Remove("Two");
ImmutableDictionary<string, int> updated = immutableDict.SetItem("One", 10);
```

### ImmutableHashSet<T>

```csharp
// Creating an immutable hash set
ImmutableHashSet<int> immutableSet = ImmutableHashSet.Create(1, 2, 3, 4, 5);

// Creating from existing collection
HashSet<char> set = new HashSet<char> { 'a', 'b', 'c' };
ImmutableHashSet<char> fromSet = ImmutableHashSet.CreateRange(set);

// Non-destructive operations
ImmutableHashSet<int> added = immutableSet.Add(6);
ImmutableHashSet<int> removed = immutableSet.Remove(3);
ImmutableHashSet<int> union = immutableSet.Union(ImmutableHashSet.Create(5, 6, 7));
ImmutableHashSet<int> intersection = immutableSet.Intersect(ImmutableHashSet.Create(3, 4, 5, 6));
```

## Collection Interfaces

C# provides several interfaces for working with collections.

### IEnumerable<T> and IEnumerator<T>

```csharp
// Implementing IEnumerable<T>
public class CustomCollection<T> : IEnumerable<T>
{
    private List<T> _items = new List<T>();
    
    public void Add(T item)
    {
        _items.Add(item);
    }
    
    // Implement IEnumerable<T>
    public IEnumerator<T> GetEnumerator()
    {
        return _items.GetEnumerator();
    }
    
    // Implement IEnumerable (non-generic)
    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}

// Using the custom collection
CustomCollection<string> collection = new CustomCollection<string>();
collection.Add("One");
collection.Add("Two");

foreach (string item in collection)
{
    Console.WriteLine(item);
}
```

### ICollection<T>

```csharp
// Implementing ICollection<T>
public class CustomCollection<T> : ICollection<T>
{
    private List<T> _items = new List<T>();
    
    public int Count => _items.Count;
    public bool IsReadOnly => false;
    
    public void Add(T item)
    {
        _items.Add(item);
    }
    
    public void Clear()
    {
        _items.Clear();
    }
    
    public bool Contains(T item)
    {
        return _items.Contains(item);
    }
    
    public void CopyTo(T[] array, int arrayIndex)
    {
        _items.CopyTo(array, arrayIndex);
    }
    
    public bool Remove(T item)
    {
        return _items.Remove(item);
    }
    
    public IEnumerator<T> GetEnumerator()
    {
        return _items.GetEnumerator();
    }
    
    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
```

### IList<T>

```csharp
// Implementing IList<T>
public class CustomList<T> : IList<T>
{
    private List<T> _items = new List<T>();
    
    public T this[int index]
    {
        get { return _items[index]; }
        set { _items[index] = value; }
    }
    
    public int Count => _items.Count;
    public bool IsReadOnly => false;
    
    public void Add(T item)
    {
        _items.Add(item);
    }
    
    public void Clear()
    {
        _items.Clear();
    }
    
    public bool Contains(T item)
    {
        return _items.Contains(item);
    }
    
    public void CopyTo(T[] array, int arrayIndex)
    {
        _items.CopyTo(array, arrayIndex);
    }
    
    public int IndexOf(T item)
    {
        return _items.IndexOf(item);
    }
    
    public void Insert(int index, T item)
    {
        _items.Insert(index, item);
    }
    
    public bool Remove(T item)
    {
        return _items.Remove(item);
    }
    
    public void RemoveAt(int index)
    {
        _items.RemoveAt(index);
    }
    
    public IEnumerator<T> GetEnumerator()
    {
        return _items.GetEnumerator();
    }
    
    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
```

### IDictionary<TKey, TValue>

```csharp
// Implementing IDictionary<TKey, TValue>
public class CustomDictionary<TKey, TValue> : IDictionary<TKey, TValue>
{
    private Dictionary<TKey, TValue> _dictionary = new Dictionary<TKey, TValue>();
    
    public TValue this[TKey key]
    {
        get { return _dictionary[key]; }
        set { _dictionary[key] = value; }
    }
    
    public ICollection<TKey> Keys => _dictionary.Keys;
    public ICollection<TValue> Values => _dictionary.Values;
    public int Count => _dictionary.Count;
    public bool IsReadOnly => false;
    
    public void Add(TKey key, TValue value)
    {
        _dictionary.Add(key, value);
    }
    
    public void Add(KeyValuePair<TKey, TValue> item)
    {
        ((IDictionary<TKey, TValue>)_dictionary).Add(item);
    }
    
    public void Clear()
    {
        _dictionary.Clear();
    }
    
    public bool Contains(KeyValuePair<TKey, TValue> item)
    {
        return ((IDictionary<TKey, TValue>)_dictionary).Contains(item);
    }
    
    public bool ContainsKey(TKey key)
    {
        return _dictionary.ContainsKey(key);
    }
    
    public void CopyTo(KeyValuePair<TKey, TValue>[] array, int arrayIndex)
    {
        ((IDictionary<TKey, TValue>)_dictionary).CopyTo(array, arrayIndex);
    }
    
    public bool Remove(TKey key)
    {
        return _dictionary.Remove(key);
    }
    
    public bool Remove(KeyValuePair<TKey, TValue> item)
    {
        return ((IDictionary<TKey, TValue>)_dictionary).Remove(item);
    }
    
    public bool TryGetValue(TKey key, out TValue value)
    {
        return _dictionary.TryGetValue(key, out value);
    }
    
    public IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator()
    {
        return _dictionary.GetEnumerator();
    }
    
    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
```

## Resources

- [C# Collections (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections)
- [Arrays (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/)
- [Generic Collections (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/collections/generic-collection-types)
- [Concurrent Collections (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/collections/thread-safe/)
- [Immutable Collections (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/collections/immutable-collections)

# 12. LINQ (Language Integrated Query)

LINQ (Language Integrated Query) provides a consistent syntax for querying data from different sources, such as collections, databases, XML, and more.

## LINQ Basics

### LINQ Query Syntax

```csharp
// Sample data
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
List<string> names = new List<string> { "Alice", "Bob", "Charlie", "David", "Eve" };

// Basic query syntax
var evenNumbers = from num in numbers
                  where num % 2 == 0
                  select num;
// Result: { 2, 4, 6, 8, 10 }

// Query with ordering
var orderedNames = from name in names
                   orderby name.Length, name
                   select name;
// Result: { "Bob", "Eve", "Alice", "David", "Charlie" }

// Query with projection
var nameInfo = from name in names
               select new { Name = name, Length = name.Length };
// Result: { { Name = "Alice", Length = 5 }, { Name = "Bob", Length = 3 }, ... }

// Query with filtering and projection
var longNames = from name in names
                where name.Length > 4
                select name.ToUpper();
// Result: { "ALICE", "CHARLIE", "DAVID" }
```

### LINQ Method Syntax

```csharp
// Basic method syntax
var evenNumbers = numbers.Where(n => n % 2 == 0);
// Result: { 2, 4, 6, 8, 10 }

// Method with ordering
var orderedNames = names.OrderBy(n => n.Length).ThenBy(n => n);
// Result: { "Bob", "Eve", "Alice", "David", "Charlie" }

// Method with projection
var nameInfo = names.Select(n => new { Name = n, Length = n.Length });
// Result: { { Name = "Alice", Length = 5 }, { Name = "Bob", Length = 3 }, ... }

// Method with filtering and projection
var longNames = names.Where(n => n.Length > 4).Select(n => n.ToUpper());
// Result: { "ALICE", "CHARLIE", "DAVID" }

// Method chaining
var result = numbers
    .Where(n => n > 3)
    .OrderByDescending(n => n)
    .Select(n => n * 2);
// Result: { 20, 18, 16, 14, 12, 10, 8 }
```

### Mixing Query and Method Syntax

```csharp
// Mixing query and method syntax
var mixedQuery = (from n in numbers
                 where n % 2 == 0
                 select n)
                .OrderByDescending(n => n)
                .Take(3);
// Result: { 10, 8, 6 }

// Another mixed example
var mixedQuery2 = from n in numbers.Where(x => x > 5)
                  orderby n
                  select n * n;
// Result: { 36, 49, 64, 81, 100 }
```

## LINQ Operators

### Filtering Operators

```csharp
// Where - filters based on a predicate
var adults = people.Where(p => p.Age >= 18);

// OfType - filters based on type
var strings = mixedList.OfType<string>();

// Take - takes the first n elements
var firstThree = numbers.Take(3);  // { 1, 2, 3 }

// TakeLast - takes the last n elements (C# 8.0+)
var lastThree = numbers.TakeLast(3);  // { 8, 9, 10 }

// TakeWhile - takes elements while condition is true
var takeWhileSmall = numbers.TakeWhile(n => n < 5);  // { 1, 2, 3, 4 }

// Skip - skips the first n elements
var skipThree = numbers.Skip(3);  // { 4, 5, 6, 7, 8, 9, 10 }

// SkipLast - skips the last n elements (C# 8.0+)
var skipLastThree = numbers.SkipLast(3);  // { 1, 2, 3, 4, 5, 6, 7 }

// SkipWhile - skips elements while condition is true
var skipWhileSmall = numbers.SkipWhile(n => n < 5);  // { 5, 6, 7, 8, 9, 10 }

// Distinct - removes duplicates
var uniqueNumbers = new[] { 1, 2, 2, 3, 3, 3 }.Distinct();  // { 1, 2, 3 }

// DistinctBy - removes duplicates based on key (C# 9.0+)
var distinctByLength = names.DistinctBy(n => n.Length);
```

### Sorting Operators

```csharp
// OrderBy - sorts in ascending order
var ascending = numbers.OrderBy(n => n);

// OrderByDescending - sorts in descending order
var descending = numbers.OrderByDescending(n => n);

// ThenBy - secondary sort in ascending order
var sortedPeople = people
    .OrderBy(p => p.LastName)
    .ThenBy(p => p.FirstName);

// ThenByDescending - secondary sort in descending order
var sortedOrders = orders
    .OrderBy(o => o.Customer)
    .ThenByDescending(o => o.Total);

// Reverse - reverses the order of elements
var reversed = numbers.Reverse();  // { 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 }
```

### Projection Operators

```csharp
// Select - projects each element to a new form
var doubled = numbers.Select(n => n * 2);  // { 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 }

// Select with index
var indexed = names.Select((name, index) => $"{index + 1}. {name}");
// { "1. Alice", "2. Bob", "3. Charlie", "4. David", "5. Eve" }

// SelectMany - flattens nested collections
var nestedLists = new List<List<int>> {
    new List<int> { 1, 2 },
    new List<int> { 3, 4, 5 },
    new List<int> { 6 }
};
var flattened = nestedLists.SelectMany(list => list);  // { 1, 2, 3, 4, 5, 6 }

// SelectMany with projection
var sentences = new[] { "Hello world", "LINQ is great" };
var words = sentences.SelectMany(s => s.Split(' '));
// { "Hello", "world", "LINQ", "is", "great" }
```

### Joining Operators

```csharp
// Sample data
var customers = new List<Customer> {
    new Customer { Id = 1, Name = "Alice" },
    new Customer { Id = 2, Name = "Bob" },
    new Customer { Id = 3, Name = "Charlie" }
};

var orders = new List<Order> {
    new Order { Id = 101, CustomerId = 1, Amount = 100 },
    new Order { Id = 102, CustomerId = 1, Amount = 200 },
    new Order { Id = 103, CustomerId = 2, Amount = 300 },
    new Order { Id = 104, CustomerId = 4, Amount = 400 }  // No matching customer
};

// Join - inner join
var customerOrders = customers.Join(
    orders,
    customer => customer.Id,
    order => order.CustomerId,
    (customer, order) => new { CustomerName = customer.Name, OrderAmount = order.Amount }
);
// Result: { { CustomerName = "Alice", OrderAmount = 100 },
//           { CustomerName = "Alice", OrderAmount = 200 },
//           { CustomerName = "Bob", OrderAmount = 300 } }

// GroupJoin - group join
var customerOrderGroups = customers.GroupJoin(
    orders,
    customer => customer.Id,
    order => order.CustomerId,
    (customer, customerOrders) => new {
        CustomerName = customer.Name,
        Orders = customerOrders,
        TotalAmount = customerOrders.Sum(o => o.Amount)
    }
);
// Result: { { CustomerName = "Alice", Orders = [Order1, Order2], TotalAmount = 300 },
//           { CustomerName = "Bob", Orders = [Order3], TotalAmount = 300 },
//           { CustomerName = "Charlie", Orders = [], TotalAmount = 0 } }

// Left outer join (using GroupJoin and SelectMany)
var leftJoin = customers.GroupJoin(
    orders,
    customer => customer.Id,
    order => order.CustomerId,
    (customer, customerOrders) => new {
        customer,
        customerOrders
    })
    .SelectMany(
        x => x.customerOrders.DefaultIfEmpty(),
        (grouped, order) => new {
            CustomerName = grouped.customer.Name,
            OrderId = order?.Id,
            OrderAmount = order?.Amount ?? 0
        }
    );
// Result includes all customers, even those without orders
```

### Grouping Operators

```csharp
// Sample data
var products = new List<Product> {
    new Product { Category = "Electronics", Name = "Laptop", Price = 1200 },
    new Product { Category = "Electronics", Name = "Phone", Price = 800 },
    new Product { Category = "Books", Name = "C# Guide", Price = 50 },
    new Product { Category = "Books", Name = "Design Patterns", Price = 40 },
    new Product { Category = "Clothing", Name = "T-Shirt", Price = 20 }
};

// GroupBy - groups elements by key
var groupsByCategory = products.GroupBy(p => p.Category);
foreach (var group in groupsByCategory)
{
    Console.WriteLine($"Category: {group.Key}");
    foreach (var product in group)
    {
        Console.WriteLine($"  {product.Name}: ${product.Price}");
    }
}

// GroupBy with element selector
var pricesByCategory = products.GroupBy(
    p => p.Category,
    p => p.Price
);
// Result: { { Key = "Electronics", Values = [1200, 800] },
//           { Key = "Books", Values = [50, 40] },
//           { Key = "Clothing", Values = [20] } }

// GroupBy with result selector
var categoryStats = products.GroupBy(
    p => p.Category,
    (key, group) => new {
        Category = key,
        Count = group.Count(),
        Average = group.Average(p => p.Price),
        Min = group.Min(p => p.Price),
        Max = group.Max(p => p.Price)
    }
);
// Result: { { Category = "Electronics", Count = 2, Average = 1000, Min = 800, Max = 1200 },
//           { Category = "Books", Count = 2, Average = 45, Min = 40, Max = 50 },
//           { Category = "Clothing", Count = 1, Average = 20, Min = 20, Max = 20 } }

// ToLookup - creates a lookup (similar to GroupBy but eagerly evaluated)
var categoryLookup = products.ToLookup(p => p.Category);
var electronicsProducts = categoryLookup["Electronics"];  // All electronics products
```

### Set Operators

```csharp
// Sample data
int[] set1 = { 1, 2, 3, 4, 5 };
int[] set2 = { 4, 5, 6, 7, 8 };

// Distinct - removes duplicates
int[] withDuplicates = { 1, 1, 2, 2, 3 };
var distinct = withDuplicates.Distinct();  // { 1, 2, 3 }

// Union - combines sets, removing duplicates
var union = set1.Union(set2);  // { 1, 2, 3, 4, 5, 6, 7, 8 }

// Intersect - returns elements present in both sets
var intersection = set1.Intersect(set2);  // { 4, 5 }

// Except - returns elements from first set not in second set
var difference = set1.Except(set2);  // { 1, 2, 3 }

// Concat - combines sequences (doesn't remove duplicates)
var concatenated = set1.Concat(set2);  // { 1, 2, 3, 4, 5, 4, 5, 6, 7, 8 }

// SequenceEqual - checks if two sequences are equal
bool areEqual = set1.SequenceEqual(set2);  // false
bool areEqualSorted = set1.OrderBy(x => x).SequenceEqual(set1.OrderBy(x => x));  // true
```

### Aggregation Operators

```csharp
// Count - counts elements
int count = numbers.Count();  // 10
int evenCount = numbers.Count(n => n % 2 == 0);  // 5

// Sum - sums elements
int sum = numbers.Sum();  // 55
decimal orderTotal = orders.Sum(o => o.Amount);  // Sum of all order amounts

// Average - calculates average
double average = numbers.Average();  // 5.5
double avgPrice = products.Average(p => p.Price);  // Average product price

// Min/Max - finds minimum/maximum
int min = numbers.Min();  // 1
int max = numbers.Max();  // 10
decimal lowestPrice = products.Min(p => p.Price);  // 20
decimal highestPrice = products.Max(p => p.Price);  // 1200

// Aggregate - performs custom aggregation
int product = numbers.Aggregate((a, b) => a * b);  // 1*2*3*...*10 = 3628800
string combined = names.Aggregate((a, b) => a + ", " + b);  // "Alice, Bob, Charlie, David, Eve"

// Aggregate with seed value
string commaSeparated = names.Aggregate(
    "Names: ",  // Seed value
    (result, name) => result + name + ", ",
    result => result.TrimEnd(',', ' ')  // Result selector
);
// "Names: Alice, Bob, Charlie, David, Eve"
```

### Quantifier Operators

```csharp
// Any - checks if any element satisfies a condition
bool hasEven = numbers.Any(n => n % 2 == 0);  // true
bool hasNegative = numbers.Any(n => n < 0);  // false

// All - checks if all elements satisfy a condition
bool allPositive = numbers.All(n => n > 0);  // true
bool allEven = numbers.All(n => n % 2 == 0);  // false

// Contains - checks if sequence contains specific element
bool hasFive = numbers.Contains(5);  // true
bool hasTwenty = numbers.Contains(20);  // false
```

### Element Operators

```csharp
// First - returns first element (or first matching element)
int first = numbers.First();  // 1
int firstEven = numbers.First(n => n % 2 == 0);  // 2

// FirstOrDefault - returns first element or default if empty
int firstOrDefault = emptyList.FirstOrDefault();  // 0 (default for int)
int firstEvenOrDefault = numbers.FirstOrDefault(n => n > 100);  // 0 (no match)

// Last - returns last element (or last matching element)
int last = numbers.Last();  // 10
int lastEven = numbers.Last(n => n % 2 == 0);  // 10

// LastOrDefault - returns last element or default if empty
int lastOrDefault = emptyList.LastOrDefault();  // 0
int lastEvenOrDefault = numbers.LastOrDefault(n => n > 100);  // 0 (no match)

// Single - returns the only element (throws if not exactly one)
int single = new[] { 42 }.Single();  // 42
int singleEven = new[] { 1, 2, 3 }.Single(n => n % 2 == 0);  // 2

// SingleOrDefault - returns the only element or default
int singleOrDefault = new[] { 42 }.SingleOrDefault();  // 42
int singleEvenOrDefault = new[] { 1, 3, 5 }.SingleOrDefault(n => n % 2 == 0);  // 0 (no match)

// ElementAt - returns element at specific index
int third = numbers.ElementAt(2);  // 3 (zero-based index)

// ElementAtOrDefault - returns element at index or default
int beyondEnd = numbers.ElementAtOrDefault(20);  // 0 (beyond end of sequence)
```

### Generation Operators

```csharp
// Range - generates a sequence of integers
var range = Enumerable.Range(1, 5);  // { 1, 2, 3, 4, 5 }

// Repeat - generates a sequence with repeated value
var repeated = Enumerable.Repeat("Hello", 3);  // { "Hello", "Hello", "Hello" }

// Empty - creates an empty sequence
var empty = Enumerable.Empty<int>();  // { }

// DefaultIfEmpty - returns default value if sequence is empty
var defaultIfEmpty = empty.DefaultIfEmpty();  // { 0 }
var defaultIfEmpty2 = empty.DefaultIfEmpty(42);  // { 42 }
```

### Conversion Operators

```csharp
// ToArray - converts to array
int[] array = numbers.Where(n => n % 2 == 0).ToArray();

// ToList - converts to List<T>
List<string> list = names.Where(n => n.Length > 3).ToList();

// ToDictionary - converts to Dictionary<TKey, TValue>
Dictionary<int, string> dict = names.ToDictionary(
    name => name.Length,  // Key selector
    name => name.ToUpper()  // Element selector
);

// ToLookup - converts to ILookup<TKey, TElement>
ILookup<char, string> lookup = names.ToLookup(
    name => name[0],  // Key selector
    name => name.ToLower()  // Element selector
);

// Cast - casts elements to specified type
IEnumerable<string> strings = mixedList.Cast<string>();  // Throws if cast fails

// OfType - filters elements of specified type
IEnumerable<string> onlyStrings = mixedList.OfType<string>();  // No exception

// AsEnumerable - returns source as IEnumerable<T>
IEnumerable<int> asEnumerable = numbers.AsEnumerable();

// AsQueryable - returns source as IQueryable<T>
IQueryable<int> asQueryable = numbers.AsQueryable();
```

### Partitioning Operators

```csharp
// Take - takes first n elements
var first3 = numbers.Take(3);  // { 1, 2, 3 }

// TakeLast - takes last n elements
var last3 = numbers.TakeLast(3);  // { 8, 9, 10 }

// TakeWhile - takes elements while condition is true
var takeWhile = numbers.TakeWhile(n => n < 5);  // { 1, 2, 3, 4 }

// Skip - skips first n elements
var skip3 = numbers.Skip(3);  // { 4, 5, 6, 7, 8, 9, 10 }

// SkipLast - skips last n elements
var skipLast3 = numbers.SkipLast(3);  // { 1, 2, 3, 4, 5, 6, 7 }

// SkipWhile - skips elements while condition is true
var skipWhile = numbers.SkipWhile(n => n < 5);  // { 5, 6, 7, 8, 9, 10 }

// Chunk - splits sequence into chunks (C# 9.0+)
var chunks = numbers.Chunk(3);
// { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 }, { 10 } }
```

## LINQ to Objects vs LINQ to Entities

### LINQ to Objects

LINQ to Objects operates on in-memory collections that implement IEnumerable<T>.

```csharp
// LINQ to Objects example
var numbers = new List<int> { 1, 2, 3, 4, 5 };

// Query is executed immediately when iterated
var evenNumbers = numbers.Where(n => n % 2 == 0);

foreach (var num in evenNumbers)
{
    Console.WriteLine(num);  // 2, 4
}

// Adding to the original collection affects subsequent iterations
numbers.Add(6);
foreach (var num in evenNumbers)
{
    Console.WriteLine(num);  // 2, 4, 6
}
```

### LINQ to Entities (Entity Framework)

LINQ to Entities translates LINQ queries to SQL for execution against a database.

```csharp
// LINQ to Entities example
using (var context = new SchoolContext())
{
    // Query is not executed yet (deferred execution)
    var query = context.Students
        .Where(s => s.GradeLevel == 12)
        .OrderBy(s => s.LastName);
    
    // Query is executed when iterated
    foreach (var student in query)
    {
        Console.WriteLine($"{student.FirstName} {student.LastName}");
    }
    
    // Or when materialized with ToList(), ToArray(), etc.
    var seniors = query.ToList();
    
    // Some operations are not translatable to SQL
    // This would throw an exception:
    // var invalidQuery = context.Students.Where(s => CustomMethod(s.Name));
}
```

## Deferred vs Immediate Execution

### Deferred Execution

Most LINQ operators use deferred execution, meaning the query is not executed until the results are actually needed.

```csharp
// Deferred execution example
var numbers = new List<int> { 1, 2, 3, 4, 5 };
Console.WriteLine("Before query definition");

// Query is defined but not executed yet
var evenNumbers = numbers.Where(n => {
    Console.WriteLine($"Filtering {n}");
    return n % 2 == 0;
});

Console.WriteLine("After query definition, before iteration");

// Query is executed when iterated
foreach (var num in evenNumbers)
{
    Console.WriteLine($"Iteration: {num}");
}

Console.WriteLine("After first iteration");

// Query is re-executed on second iteration
foreach (var num in evenNumbers)
{
    Console.WriteLine($"Second iteration: {num}");
}

// Output:
// Before query definition
// After query definition, before iteration
// Filtering 1
// Filtering 2
// Iteration: 2
// Filtering 3
// Filtering 4
// Iteration: 4
// Filtering 5
// After first iteration
// Filtering 1
// Filtering 2
// Second iteration: 2
// Filtering 3
// Filtering 4
// Second iteration: 4
// Filtering 5
```

### Immediate Execution

Some LINQ operators force immediate execution of the query.

```csharp
// Immediate execution examples
var numbers = new List<int> { 1, 2, 3, 4, 5 };

// ToList() forces immediate execution
var evenList = numbers.Where(n => {
    Console.WriteLine($"Filtering for ToList: {n}");
    return n % 2 == 0;
}).ToList();

// Count() forces immediate execution
int count = numbers.Where(n => {
    Console.WriteLine($"Filtering for Count: {n}");
    return n % 2 == 0;
}).Count();

// Aggregate operators force immediate execution
int sum = numbers.Where(n => {
    Console.WriteLine($"Filtering for Sum: {n}");
    return n % 2 == 0;
}).Sum();

// Element operators force immediate execution
int first = numbers.Where(n => {
    Console.WriteLine($"Filtering for First: {n}");
    return n % 2 == 0;
}).First();

// Output:
// Filtering for ToList: 1
// Filtering for ToList: 2
// Filtering for ToList: 3
// Filtering for ToList: 4
// Filtering for ToList: 5
// Filtering for Count: 1
// Filtering for Count: 2
// Filtering for Count: 3
// Filtering for Count: 4
// Filtering for Count: 5
// Filtering for Sum: 1
// Filtering for Sum: 2
// Filtering for Sum: 3
// Filtering for Sum: 4
// Filtering for Sum: 5
// Filtering for First: 1
// Filtering for First: 2
```

## LINQ Query Optimization

### Avoiding Multiple Enumeration

```csharp
// Bad: Multiple enumeration
var query = numbers.Where(n => n % 2 == 0);
int count = query.Count();  // First enumeration
int sum = query.Sum();      // Second enumeration
int max = query.Max();      // Third enumeration

// Good: Materialize once and reuse
var evenNumbers = numbers.Where(n => n % 2 == 0).ToList();
count = evenNumbers.Count;  // No enumeration
sum = evenNumbers.Sum();    // Single enumeration
max = evenNumbers.Max();    // Single enumeration
```

### Filtering Early

```csharp
// Bad: Late filtering
var result = numbers
    .Select(n => ExpensiveComputation(n))
    .Where(n => n > 100);

// Good: Early filtering
var betterResult = numbers
    .Where(n => QuickCheck(n))  // Filter early with cheap check
    .Select(n => ExpensiveComputation(n))
    .Where(n => n > 100);
```

### Using Appropriate LINQ Methods

```csharp
// Bad: Using Where + First
var firstEven = numbers.Where(n => n % 2 == 0).First();

// Good: Using First with predicate
var firstEvenBetter = numbers.First(n => n % 2 == 0);

// Bad: Using Where + Any
bool hasEven = numbers.Where(n => n % 2 == 0).Any();

// Good: Using Any with predicate
bool hasEvenBetter = numbers.Any(n => n % 2 == 0);

// Bad: Using Where + Count
int evenCount = numbers.Where(n => n % 2 == 0).Count();

// Good: Using Count with predicate
int evenCountBetter = numbers.Count(n => n % 2 == 0);
```

## LINQ with Custom Objects

### Defining Custom Classes

```csharp
public class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
    public string City { get; set; }
}

public class Order
{
    public int Id { get; set; }
    public string Customer { get; set; }
    public decimal Total { get; set; }
    public DateTime OrderDate { get; set; }
}
```

### Querying Custom Objects

```csharp
// Sample data
List<Person> people = new List<Person>
{
    new Person { FirstName = "John", LastName = "Doe", Age = 30, City = "New York" },
    new Person { FirstName = "Jane", LastName = "Smith", Age = 25, City = "Boston" },
    new Person { FirstName = "Bob", LastName = "Johnson", Age = 45, City = "Chicago" },
    new Person { FirstName = "Alice", LastName = "Brown", Age = 22, City = "New York" },
    new Person { FirstName = "Charlie", LastName = "Davis", Age = 35, City = "Boston" }
};

// Basic filtering
var adults = people.Where(p => p.Age >= 18);

// Sorting
var byAge = people.OrderBy(p => p.Age);
var byLastThenFirst = people.OrderBy(p => p.LastName).ThenBy(p => p.FirstName);

// Projection to anonymous type
var nameAndAge = people.Select(p => new { Name = $"{p.FirstName} {p.LastName}", p.Age });

// Grouping
var byCity = people.GroupBy(p => p.City);
foreach (var group in byCity)
{
    Console.WriteLine($"City: {group.Key}");
    foreach (var person in group)
    {
        Console.WriteLine($"  {person.FirstName} {person.LastName}, {person.Age}");
    }
}

// Complex query
var result = people
    .Where(p => p.Age > 20)
    .OrderBy(p => p.LastName)
    .GroupBy(p => p.City)
    .Select(g => new {
        City = g.Key,
        Count = g.Count(),
        AverageAge = g.Average(p => p.Age),
        People = g.Select(p => $"{p.FirstName} {p.LastName}").ToList()
    });

foreach (var cityGroup in result)
{
    Console.WriteLine($"{cityGroup.City}: {cityGroup.Count} people, Avg age: {cityGroup.AverageAge:F1}");
    foreach (var name in cityGroup.People)
    {
        Console.WriteLine($"  {name}");
    }
}
```

## LINQ and Functional Programming

### Pure Functions

```csharp
// Pure function example
IEnumerable<int> PureDoublePositives(IEnumerable<int> numbers)
{
    return numbers
        .Where(n => n > 0)  // Filter positive numbers
        .Select(n => n * 2);  // Double each number
}

// Usage
var input = new[] { -2, -1, 0, 1, 2, 3 };
var result = PureDoublePositives(input);  // { 2, 4, 6 }
// Original input is unchanged
```

### Function Composition

```csharp
// Function composition with LINQ
Func<int, bool> isPositive = n => n > 0;
Func<int, bool> isEven = n => n % 2 == 0;
Func<int, int> square = n => n * n;

// Composing functions
var result = numbers
    .Where(isPositive)
    .Where(isEven)
    .Select(square);

// Equivalent to:
var result2 = numbers
    .Where(n => isPositive(n) && isEven(n))
    .Select(square);
```

### Higher-Order Functions

```csharp
// Higher-order function that returns a predicate
Func<int, Func<int, bool>> createDivisibleByPredicate = divisor => number => number % divisor == 0;

// Usage
var divisibleBy3 = createDivisibleByPredicate(3);
var numbersDiv3 = numbers.Where(divisibleBy3);  // Numbers divisible by 3

// Higher-order function that takes a function as parameter
IEnumerable<R> Map<T, R>(IEnumerable<T> source, Func<T, R> selector)
{
    return source.Select(selector);
}

// Usage
var doubled = Map(numbers, n => n * 2);
```

## Resources

- [LINQ (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)
- [LINQ Query Syntax (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/query-syntax-and-method-syntax-in-linq)
- [LINQ Standard Query Operators (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/standard-query-operators-overview)
- [LINQ to Entities (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ef/language-reference/linq-to-entities)

# 13. Error Handling

Error handling is a critical aspect of writing robust C# applications. C# provides several mechanisms for handling errors and exceptional situations.

## Exception Basics

### Try-Catch-Finally

The try-catch-finally block is the fundamental construct for exception handling in C#.

```csharp
// Basic try-catch
try
{
    // Code that might throw an exception
    int result = 10 / 0;  // This will throw a DivideByZeroException
    Console.WriteLine($"Result: {result}");  // This line won't execute
}
catch (Exception ex)
{
    // Exception handling code
    Console.WriteLine($"An error occurred: {ex.Message}");
}

// Try-catch with specific exception types
try
{
    string input = "abc";
    int number = int.Parse(input);  // This will throw a FormatException
}
catch (FormatException ex)
{
    Console.WriteLine($"Invalid format: {ex.Message}");
}
catch (OverflowException ex)
{
    Console.WriteLine($"Number too large: {ex.Message}");
}
catch (Exception ex)  // Catch-all for any other exceptions
{
    Console.WriteLine($"Unexpected error: {ex.Message}");
}

// Try-catch-finally
try
{
    // Open a file
    StreamReader reader = new StreamReader("data.txt");
    string content = reader.ReadToEnd();
    // Process content...
}
catch (FileNotFoundException ex)
{
    Console.WriteLine($"File not found: {ex.Message}");
}
catch (IOException ex)
{
    Console.WriteLine($"I/O error: {ex.Message}");
}
finally
{
    // This code always executes, whether an exception occurred or not
    Console.WriteLine("Cleanup code");
    // Close resources, etc.
}
```

### Exception Filters (C# 6.0+)

Exception filters allow you to specify additional conditions for catching exceptions.

```csharp
try
{
    // Code that might throw an exception
    HttpClient client = new HttpClient();
    HttpResponseMessage response = await client.GetAsync("https://api.example.com/data");
    response.EnsureSuccessStatusCode();  // Throws if status code is not successful
}
catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
{
    Console.WriteLine("Resource not found (404)");
}
catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.Unauthorized)
{
    Console.WriteLine("Authentication required (401)");
}
catch (HttpRequestException ex)
{
    Console.WriteLine($"HTTP error: {ex.Message}");
}
```

### Nested Try-Catch Blocks

Try-catch blocks can be nested to handle exceptions at different levels.

```csharp
try
{
    // Outer try block
    Console.WriteLine("Outer try block");
    
    try
    {
        // Inner try block
        Console.WriteLine("Inner try block");
        throw new ArgumentException("Inner exception");
    }
    catch (ArgumentException ex)
    {
        // Handle inner exception
        Console.WriteLine($"Inner catch: {ex.Message}");
        
        // Optionally rethrow or throw a new exception
        throw new ApplicationException("Outer exception", ex);
    }
}
catch (Exception ex)
{
    // Handle outer exception
    Console.WriteLine($"Outer catch: {ex.Message}");
    
    // Access inner exception
    if (ex.InnerException != null)
    {
        Console.WriteLine($"Inner exception: {ex.InnerException.Message}");
    }
}
```

## Exception Types

### Common Exception Types

C# provides many built-in exception types for different error scenarios.

```csharp
// ArgumentException - Invalid argument
throw new ArgumentException("Invalid argument", "paramName");

// ArgumentNullException - Argument is null
throw new ArgumentNullException("paramName", "Parameter cannot be null");

// ArgumentOutOfRangeException - Argument is out of valid range
throw new ArgumentOutOfRangeException("age", "Age must be between 0 and 120");

// InvalidOperationException - Method call is invalid in the current state
throw new InvalidOperationException("Cannot perform operation in current state");

// NullReferenceException - Attempt to access a member on a null reference
// (Usually not thrown explicitly, but occurs during execution)
object obj = null;
// obj.ToString();  // This would throw NullReferenceException

// IndexOutOfRangeException - Array index is out of bounds
// (Usually not thrown explicitly, but occurs during execution)
int[] array = new int[3];
// int value = array[5];  // This would throw IndexOutOfRangeException

// FormatException - Input string is in incorrect format
throw new FormatException("Input string was not in the correct format");

// IOException - I/O error
throw new IOException("Error reading from file");

// FileNotFoundException - File not found
throw new FileNotFoundException("Could not find file", "data.txt");

// DirectoryNotFoundException - Directory not found
throw new DirectoryNotFoundException("Could not find directory");

// UnauthorizedAccessException - No permission to access resource
throw new UnauthorizedAccessException("Access to the file is denied");

// NotImplementedException - Method or operation not implemented
throw new NotImplementedException("This method is not implemented yet");

// NotSupportedException - Operation not supported
throw new NotSupportedException("This operation is not supported");
```

### Exception Hierarchy

Exceptions in C# form a hierarchy, with `System.Exception` as the base class.

```csharp
// Exception hierarchy example
try
{
    // Some code that might throw different exceptions
}
catch (ArgumentException ex)
{
    // Catches ArgumentException and its derived types
    // (ArgumentNullException, ArgumentOutOfRangeException, etc.)
}
catch (IOException ex)
{
    // Catches IOException and its derived types
    // (FileNotFoundException, DirectoryNotFoundException, etc.)
}
catch (SystemException ex)
{
    // Catches other system exceptions
}
catch (Exception ex)
{
    // Catches any exception not caught by previous catch blocks
}
```

### Custom Exceptions

You can create custom exception types for application-specific errors.

```csharp
// Custom exception class
public class UserNotFoundException : Exception
{
    public string Username { get; }
    
    // Constructor with message
    public UserNotFoundException(string message)
        : base(message)
    {
    }
    
    // Constructor with message and inner exception
    public UserNotFoundException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
    
    // Constructor with username and message
    public UserNotFoundException(string username, string message)
        : base(message)
    {
        Username = username;
    }
    
    // Constructor for serialization
    protected UserNotFoundException(SerializationInfo info, StreamingContext context)
        : base(info, context)
    {
        Username = info.GetString("Username");
    }
    
    // Override GetObjectData for serialization
    public override void GetObjectData(SerializationInfo info, StreamingContext context)
    {
        base.GetObjectData(info, context);
        info.AddValue("Username", Username);
    }
}

// Using the custom exception
try
{
    string username = "john_doe";
    // Some code that tries to find a user
    bool userExists = false;
    
    if (!userExists)
    {
        throw new UserNotFoundException(username, $"User '{username}' not found");
    }
}
catch (UserNotFoundException ex)
{
    Console.WriteLine($"Error: {ex.Message}");
    Console.WriteLine($"Username: {ex.Username}");
}
```

## Exception Properties and Methods

### Common Exception Properties

Exceptions provide properties that give information about the error.

```csharp
try
{
    // Code that throws an exception
    throw new ArgumentException("Invalid argument value", "paramName");
}
catch (Exception ex)
{
    // Message - Gets the error message
    Console.WriteLine($"Message: {ex.Message}");
    
    // StackTrace - Gets the call stack at the time the exception was thrown
    Console.WriteLine($"Stack Trace: {ex.StackTrace}");
    
    // Source - Gets or sets the name of the application or object that caused the error
    Console.WriteLine($"Source: {ex.Source}");
    
    // TargetSite - Gets the method that threw the exception
    Console.WriteLine($"Target Site: {ex.TargetSite}");
    
    // InnerException - Gets the exception that caused the current exception
    if (ex.InnerException != null)
    {
        Console.WriteLine($"Inner Exception: {ex.InnerException.Message}");
    }
    
    // HelpLink - Gets or sets a link to help file associated with the exception
    Console.WriteLine($"Help Link: {ex.HelpLink}");
    
    // Data - Gets a collection of key/value pairs that provide additional information
    ex.Data["TimeOccurred"] = DateTime.Now;
    foreach (DictionaryEntry entry in ex.Data)
    {
        Console.WriteLine($"Data: {entry.Key} = {entry.Value}");
    }
    
    // For specific exception types, additional properties may be available
    if (ex is ArgumentException argEx)
    {
        Console.WriteLine($"Parameter Name: {argEx.ParamName}");
    }
}
```

### Exception Methods

Exceptions also provide methods for handling and manipulating exception information.

```csharp
try
{
    // Code that throws an exception
    throw new InvalidOperationException("Operation failed");
}
catch (Exception ex)
{
    // ToString - Returns a string representation of the exception
    string exceptionString = ex.ToString();
    Console.WriteLine(exceptionString);
    
    // GetBaseException - Gets the root exception that caused the current exception
    Exception rootException = ex.GetBaseException();
    Console.WriteLine($"Root Exception: {rootException.Message}");
    
    // GetType - Gets the runtime type of the exception
    Type exceptionType = ex.GetType();
    Console.WriteLine($"Exception Type: {exceptionType.Name}");
}
```

## Throwing Exceptions

### Basic Exception Throwing

You can throw exceptions to signal error conditions in your code.

```csharp
// Throwing a basic exception
public void ProcessData(string data)
{
    if (string.IsNullOrEmpty(data))
    {
        throw new ArgumentException("Data cannot be null or empty", nameof(data));
    }
    
    // Process the data...
}

// Throwing an exception with inner exception
public void SaveData(string data)
{
    try
    {
        // Try to save data
        if (data.Length > 1000)
        {
            throw new ArgumentException("Data too large");
        }
    }
    catch (Exception ex)
    {
        // Wrap the original exception and throw a new one
        throw new ApplicationException("Failed to save data", ex);
    }
}
```

### Rethrowing Exceptions

You can rethrow exceptions to preserve the original stack trace.

```csharp
// Rethrowing the same exception
try
{
    // Some code that might throw
    int.Parse("abc");
}
catch (FormatException ex)
{
    // Log the exception
    Console.WriteLine($"Logging: {ex.Message}");
    
    // Rethrow the same exception (preserves the original stack trace)
    throw;
}

// Rethrowing with a new exception
try
{
    // Some code that might throw
    File.ReadAllText("missing.txt");
}
catch (FileNotFoundException ex)
{
    // Create a new exception with the original as inner exception
    throw new ApplicationException("Configuration file missing", ex);
}
```

### Exception Throwing Helpers (C# 10+)

C# 10 introduced helper methods for throwing common exceptions.

```csharp
// Using ArgumentNullException.ThrowIfNull
public void ProcessUser(User user)
{
    // Throws ArgumentNullException if user is null
    ArgumentNullException.ThrowIfNull(user);
    
    // Process the user...
}

// Using ArgumentException.ThrowIfNullOrEmpty
public void ProcessName(string name)
{
    // Throws ArgumentException if name is null or empty
    ArgumentException.ThrowIfNullOrEmpty(name);
    
    // Process the name...
}

// Using other helper methods
public void ProcessAge(int age)
{
    // Throws ArgumentOutOfRangeException if age is negative
    ArgumentOutOfRangeException.ThrowIfNegative(age);
    
    // Throws ArgumentOutOfRangeException if age is less than 18
    ArgumentOutOfRangeException.ThrowIfLessThan(age, 18);
    
    // Process the age...
}
```

## Exception Handling Patterns

### Try-Parse Pattern

The Try-Parse pattern is a common way to handle parsing without throwing exceptions.

```csharp
// Traditional approach (throws exception on failure)
public int ParseNumber(string input)
{
    return int.Parse(input);  // Throws FormatException if input is not a valid number
}

// Try-Parse pattern (returns success/failure)
public bool TryParseNumber(string input, out int result)
{
    return int.TryParse(input, out result);
}

// Using the Try-Parse pattern
string input = "abc";
if (int.TryParse(input, out int number))
{
    Console.WriteLine($"Parsed number: {number}");
}
else
{
    Console.WriteLine("Invalid number format");
}

// Try-Parse pattern with nullable return (C# 8.0+)
public int? ParseNumberOrNull(string input)
{
    if (int.TryParse(input, out int result))
    {
        return result;
    }
    return null;
}

// Using the nullable return pattern
int? result = ParseNumberOrNull("123");
if (result.HasValue)
{
    Console.WriteLine($"Parsed number: {result.Value}");
}
```

### Exception Handling with Using Statement

The `using` statement ensures that resources are properly disposed, even if an exception occurs.

```csharp
// Using statement with exception handling
public string ReadFileContent(string filePath)
{
    try
    {
        using (StreamReader reader = new StreamReader(filePath))
        {
            return reader.ReadToEnd();
        }
        // The StreamReader is automatically disposed when the using block exits,
        // even if an exception occurs
    }
    catch (FileNotFoundException)
    {
        Console.WriteLine("File not found");
        return string.Empty;
    }
    catch (IOException ex)
    {
        Console.WriteLine($"Error reading file: {ex.Message}");
        return string.Empty;
    }
}

// Using declaration (C# 8.0+)
public string ReadFileContentCSharp8(string filePath)
{
    try
    {
        using StreamReader reader = new StreamReader(filePath);
        return reader.ReadToEnd();
        // The StreamReader is disposed when the method exits
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error: {ex.Message}");
        return string.Empty;
    }
}
```

### Exception Handling with Async-Await

Exception handling works similarly with asynchronous code, but there are some considerations.

```csharp
// Async method with exception handling
public async Task<string> DownloadDataAsync(string url)
{
    try
    {
        using (HttpClient client = new HttpClient())
        {
            return await client.GetStringAsync(url);
        }
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"Error downloading data: {ex.Message}");
        return string.Empty;
    }
}

// Handling exceptions from multiple async operations
public async Task ProcessMultipleAsync()
{
    try
    {
        Task<string> task1 = DownloadDataAsync("https://api.example.com/data1");
        Task<string> task2 = DownloadDataAsync("https://api.example.com/data2");
        
        // Wait for both tasks to complete
        await Task.WhenAll(task1, task2);
        
        // Process results
        string data1 = await task1;
        string data2 = await task2;
        
        Console.WriteLine($"Data1 length: {data1.Length}, Data2 length: {data2.Length}");
    }
    catch (Exception ex)
    {
        // This will catch the first exception that occurs in any of the tasks
        Console.WriteLine($"Error: {ex.Message}");
    }
}

// Handling exceptions from multiple async operations with AggregateException
public async Task ProcessMultipleWithAggregateAsync()
{
    Task<string> task1 = DownloadDataAsync("https://api.example.com/data1");
    Task<string> task2 = DownloadDataAsync("https://api.example.com/data2");
    
    try
    {
        // Create an array of tasks
        Task[] tasks = { task1, task2 };
        
        // Wait for all tasks to complete, even if some fail
        Task.WaitAll(tasks);
    }
    catch (AggregateException ae)
    {
        // Handle all exceptions that occurred
        foreach (var ex in ae.InnerExceptions)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
    
    // Check individual task status
    if (task1.IsCompletedSuccessfully)
    {
        Console.WriteLine($"Task1 completed successfully: {task1.Result}");
    }
    
    if (task2.IsFaulted)
    {
        Console.WriteLine($"Task2 failed: {task2.Exception?.InnerException?.Message}");
    }
}
```

## Best Practices

### When to Use Exceptions

```csharp
// DO use exceptions for exceptional conditions, not for normal flow control
public int Divide(int a, int b)
{
    // Check for exceptional condition
    if (b == 0)
    {
        throw new DivideByZeroException("Cannot divide by zero");
    }
    
    return a / b;
}

// DON'T use exceptions for normal flow control
// Bad example:
public bool IsFileValid(string filePath)
{
    try
    {
        using (var file = File.OpenRead(filePath))
        {
            // Check file validity
            return true;
        }
    }
    catch (Exception)
    {
        return false;
    }
}

// Better approach:
public bool IsFileValid(string filePath)
{
    if (!File.Exists(filePath))
    {
        return false;
    }
    
    try
    {
        using (var file = File.OpenRead(filePath))
        {
            // Check file validity
            return true;
        }
    }
    catch (UnauthorizedAccessException)
    {
        return false;
    }
}
```

### Exception Handling Guidelines

```csharp
// DO catch specific exceptions
try
{
    // Code that might throw
}
catch (FileNotFoundException ex)
{
    // Handle file not found
}
catch (UnauthorizedAccessException ex)
{
    // Handle access denied
}
// Avoid catching Exception unless you have a good reason

// DO include exception details in logs
try
{
    // Code that might throw
}
catch (Exception ex)
{
    // Log the full exception details
    Logger.LogError(ex, "Error occurred while processing data");
    
    // Show a user-friendly message without technical details
    Console.WriteLine("An error occurred. Please try again later.");
}

// DO clean up resources in finally blocks
FileStream file = null;
try
{
    file = File.Open("data.txt", FileMode.Open);
    // Process file
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
finally
{
    // Clean up resources
    file?.Dispose();
}

// DO use using statements for disposable resources
try
{
    using (FileStream file = File.Open("data.txt", FileMode.Open))
    {
        // Process file
    }
    // File is automatically disposed here
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
```

### Creating Custom Exceptions

```csharp
// DO create custom exceptions for application-specific errors
public class OrderProcessingException : Exception
{
    public string OrderId { get; }
    
    public OrderProcessingException(string orderId, string message)
        : base(message)
    {
        OrderId = orderId;
    }
    
    public OrderProcessingException(string orderId, string message, Exception innerException)
        : base(message, innerException)
    {
        OrderId = orderId;
    }
}

// DO provide constructors that match the base Exception class
public class ConfigurationException : Exception
{
    // Default constructor
    public ConfigurationException()
        : base("A configuration error occurred")
    {
    }
    
    // Constructor with message
    public ConfigurationException(string message)
        : base(message)
    {
    }
    
    // Constructor with message and inner exception
    public ConfigurationException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
    
    // Constructor for serialization
    protected ConfigurationException(SerializationInfo info, StreamingContext context)
        : base(info, context)
    {
    }
}
```

### Exception Handling in Libraries

```csharp
// DO document exceptions that your library methods can throw
/// <summary>
/// Reads data from the specified file.
/// </summary>
/// <param name="filePath">The path to the file.</param>
/// <returns>The file contents as a string.</returns>
/// <exception cref="ArgumentNullException">Thrown when filePath is null.</exception>
/// <exception cref="FileNotFoundException">Thrown when the file does not exist.</exception>
/// <exception cref="IOException">Thrown when an I/O error occurs.</exception>
public string ReadFile(string filePath)
{
    if (filePath == null)
    {
        throw new ArgumentNullException(nameof(filePath));
    }
    
    if (!File.Exists(filePath))
    {
        throw new FileNotFoundException("The specified file was not found.", filePath);
    }
    
    return File.ReadAllText(filePath);
}

// DO wrap lower-level exceptions in more meaningful ones
public class DatabaseException : Exception
{
    public DatabaseException(string message)
        : base(message)
    {
    }
    
    public DatabaseException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}

public void SaveData(Data data)
{
    try
    {
        // Database operations
    }
    catch (SqlException ex)
    {
        // Wrap the SQL exception in a more meaningful one
        throw new DatabaseException("Failed to save data to the database", ex);
    }
}
```

## Resources

- [C# Exception Handling (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/)
- [Exception Handling Best Practices (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/exceptions/best-practices-for-exceptions)
- [Creating and Throwing Exceptions (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/exceptions/how-to-create-and-throw-exceptions)
- [Exception Handling in Async Methods (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/exceptions/handling-and-throwing-exceptions-in-async-methods)

# 14. File I/O

File I/O (Input/Output) operations are essential for reading from and writing to files in C#. The .NET Framework provides a rich set of classes for working with files and directories.

## File and Directory Operations

### File Class

The `File` class provides static methods for creating, copying, deleting, moving, and opening files.

```csharp
// Check if a file exists
bool exists = File.Exists("data.txt");

// Create a new file (overwrites if exists) and write text
File.WriteAllText("output.txt", "Hello, World!");

// Append text to a file (creates if doesn't exist)
File.AppendAllText("log.txt", $"{DateTime.Now}: Application started\n");

// Read all text from a file
string content = File.ReadAllText("data.txt");

// Read all lines from a file into a string array
string[] lines = File.ReadAllLines("data.txt");

// Write all lines to a file
File.WriteAllLines("output.txt", new[] { "Line 1", "Line 2", "Line 3" });

// Copy a file (overwrite if exists)
File.Copy("source.txt", "destination.txt", true);

// Move a file (rename)
File.Move("old.txt", "new.txt");

// Delete a file
File.Delete("temp.txt");

// Get file attributes
FileAttributes attributes = File.GetAttributes("data.txt");
bool isReadOnly = (attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly;

// Set file attributes
File.SetAttributes("data.txt", FileAttributes.ReadOnly);

// Get file creation, access, and modification times
DateTime created = File.GetCreationTime("data.txt");
DateTime accessed = File.GetLastAccessTime("data.txt");
DateTime modified = File.GetLastWriteTime("data.txt");

// Open a file and return a FileStream
using (FileStream fs = File.Open("data.txt", FileMode.Open, FileAccess.Read))
{
    // Use the FileStream...
}

// Create a StreamReader for a file
using (StreamReader reader = File.OpenText("data.txt"))
{
    // Use the StreamReader...
}

// Create a StreamWriter for a file
using (StreamWriter writer = File.CreateText("output.txt"))
{
    // Use the StreamWriter...
}
```

### Directory Class

The `Directory` class provides static methods for creating, moving, and enumerating through directories and subdirectories.

```csharp
// Check if a directory exists
bool exists = Directory.Exists("logs");

// Create a directory
Directory.CreateDirectory("logs");

// Get the current directory
string currentDir = Directory.GetCurrentDirectory();

// Get the parent directory
string parentDir = Directory.GetParent(currentDir).FullName;

// Get all files in a directory
string[] files = Directory.GetFiles("logs");

// Get files with a specific pattern
string[] textFiles = Directory.GetFiles("logs", "*.txt");

// Get files with a specific pattern, including subdirectories
string[] allTextFiles = Directory.GetFiles("logs", "*.txt", SearchOption.AllDirectories);

// Get all directories in a directory
string[] dirs = Directory.GetDirectories("data");

// Get directories with a specific pattern
string[] backupDirs = Directory.GetDirectories("data", "backup*");

// Get all subdirectories recursively
string[] allSubDirs = Directory.GetDirectories("data", "*", SearchOption.AllDirectories);

// Move a directory
Directory.Move("old_logs", "new_logs");

// Delete an empty directory
Directory.Delete("temp");

// Delete a directory and all its contents
Directory.Delete("temp", true);

// Get directory creation, access, and modification times
DateTime created = Directory.GetCreationTime("logs");
DateTime accessed = Directory.GetLastAccessTime("logs");
DateTime modified = Directory.GetLastWriteTime("logs");
```

### Path Class

The `Path` class provides methods for processing directory and file paths.

```csharp
// Combine path parts
string fullPath = Path.Combine("data", "users", "user1.txt");  // "data/users/user1.txt" or "data\users\user1.txt"

// Get the file name from a path
string fileName = Path.GetFileName("data/users/user1.txt");  // "user1.txt"

// Get the file name without extension
string fileNameWithoutExt = Path.GetFileNameWithoutExtension("data/users/user1.txt");  // "user1"

// Get the file extension
string extension = Path.GetExtension("data/users/user1.txt");  // ".txt"

// Get the directory name
string dirName = Path.GetDirectoryName("data/users/user1.txt");  // "data/users"

// Get the full path (resolves relative paths)
string absolutePath = Path.GetFullPath("../data/users/user1.txt");

// Get a temporary file name
string tempFile = Path.GetTempFileName();

// Get the temporary directory path
string tempDir = Path.GetTempPath();

// Get the root directory
string rootDir = Path.GetPathRoot("C:/data/users/user1.txt");  // "C:/"

// Check if a path has an extension
bool hasExtension = Path.HasExtension("data.txt");  // true

// Change the extension of a path
string newPath = Path.ChangeExtension("data.txt", ".csv");  // "data.csv"

// Get a random file name
string randomFileName = Path.GetRandomFileName();

// Get the directory separator character
char separator = Path.DirectorySeparatorChar;  // '/' on Unix, '\' on Windows

// Get the invalid characters for file names
char[] invalidChars = Path.GetInvalidFileNameChars();
```

### FileInfo and DirectoryInfo Classes

`FileInfo` and `DirectoryInfo` provide instance methods for working with files and directories.

```csharp
// Create a FileInfo object
FileInfo file = new FileInfo("data.txt");

// Check if the file exists
bool exists = file.Exists;

// Get file properties
string name = file.Name;
string directory = file.DirectoryName;
string fullPath = file.FullName;
long size = file.Length;
bool isReadOnly = file.IsReadOnly;
DateTime created = file.CreationTime;
DateTime modified = file.LastWriteTime;

// Create a new file
using (FileStream fs = file.Create())
{
    // Use the FileStream...
}

// Open a file for reading
using (FileStream fs = file.OpenRead())
{
    // Use the FileStream...
}

// Open a file for writing
using (FileStream fs = file.OpenWrite())
{
    // Use the FileStream...
}

// Create a StreamReader for the file
using (StreamReader reader = file.OpenText())
{
    // Use the StreamReader...
}

// Create a StreamWriter for the file
using (StreamWriter writer = file.CreateText())
{
    // Use the StreamWriter...
}

// Copy the file
FileInfo copy = file.CopyTo("copy.txt", true);

// Move/rename the file
file.MoveTo("new_name.txt");

// Delete the file
file.Delete();

// Create a DirectoryInfo object
DirectoryInfo dir = new DirectoryInfo("logs");

// Check if the directory exists
exists = dir.Exists;

// Get directory properties
name = dir.Name;
fullPath = dir.FullName;
DirectoryInfo parent = dir.Parent;
created = dir.CreationTime;

// Create the directory
dir.Create();

// Get files in the directory
FileInfo[] files = dir.GetFiles();

// Get files with a specific pattern
FileInfo[] textFiles = dir.GetFiles("*.txt");

// Get files with a specific pattern, including subdirectories
FileInfo[] allTextFiles = dir.GetFiles("*.txt", SearchOption.AllDirectories);

// Get subdirectories
DirectoryInfo[] subDirs = dir.GetDirectories();

// Get subdirectories with a specific pattern
DirectoryInfo[] backupDirs = dir.GetDirectories("backup*");

// Move/rename the directory
dir.MoveTo("new_logs");

// Delete the directory
dir.Delete();  // Fails if not empty
dir.Delete(true);  // Deletes all contents
```

## Reading and Writing Files

### StreamReader and StreamWriter

`StreamReader` and `StreamWriter` are used for reading from and writing to text files.

```csharp
// Reading a text file line by line
using (StreamReader reader = new StreamReader("data.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null)
    {
        Console.WriteLine(line);
    }
}

// Reading a text file all at once
using (StreamReader reader = new StreamReader("data.txt"))
{
    string content = reader.ReadToEnd();
    Console.WriteLine(content);
}

// Reading a specific number of characters
using (StreamReader reader = new StreamReader("data.txt"))
{
    char[] buffer = new char[1024];
    int charsRead = reader.Read(buffer, 0, buffer.Length);
    Console.WriteLine(new string(buffer, 0, charsRead));
}

// Writing to a text file
using (StreamWriter writer = new StreamWriter("output.txt"))
{
    writer.WriteLine("Line 1");
    writer.WriteLine("Line 2");
    writer.WriteLine("Line 3");
}

// Appending to a text file
using (StreamWriter writer = new StreamWriter("log.txt", true))
{
    writer.WriteLine($"{DateTime.Now}: Application started");
}

// Writing with specific encoding
using (StreamWriter writer = new StreamWriter("output.txt", false, Encoding.UTF8))
{
    writer.WriteLine("Text with UTF-8 encoding");
}

// Reading with specific encoding
using (StreamReader reader = new StreamReader("data.txt", Encoding.UTF8))
{
    string content = reader.ReadToEnd();
    Console.WriteLine(content);
}
```

### FileStream

`FileStream` provides a stream for reading from and writing to files.

```csharp
// Creating a file and writing bytes
using (FileStream fs = new FileStream("data.bin", FileMode.Create, FileAccess.Write))
{
    byte[] data = { 0x48, 0x65, 0x6C, 0x6C, 0x6F };  // "Hello" in ASCII
    fs.Write(data, 0, data.Length);
}

// Opening a file and reading bytes
using (FileStream fs = new FileStream("data.bin", FileMode.Open, FileAccess.Read))
{
    byte[] buffer = new byte[1024];
    int bytesRead = fs.Read(buffer, 0, buffer.Length);
    
    // Process the bytes...
    for (int i = 0; i < bytesRead; i++)
    {
        Console.Write($"{buffer[i]:X2} ");
    }
}

// Seeking to a specific position
using (FileStream fs = new FileStream("data.bin", FileMode.Open, FileAccess.ReadWrite))
{
    // Seek to the 10th byte
    fs.Seek(10, SeekOrigin.Begin);
    
    // Read from that position
    int byteValue = fs.ReadByte();
    
    // Seek to the end
    fs.Seek(0, SeekOrigin.End);
    
    // Append data
    byte[] data = { 0x21 };  // "!" in ASCII
    fs.Write(data, 0, data.Length);
    
    // Seek relative to current position
    fs.Seek(-5, SeekOrigin.Current);
}

// Using FileStream with different modes
using (FileStream fs = new FileStream("data.bin", FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read))
{
    // FileMode.OpenOrCreate - Opens if exists, creates if doesn't
    // FileAccess.ReadWrite - Allows reading and writing
    // FileShare.Read - Allows other processes to read the file while open
    
    // File operations...
}
```

### BinaryReader and BinaryWriter

`BinaryReader` and `BinaryWriter` are used for reading and writing primitive data types as binary values.

```csharp
// Writing binary data
using (FileStream fs = new FileStream("data.bin", FileMode.Create))
using (BinaryWriter writer = new BinaryWriter(fs))
{
    writer.Write(42);        // Write an int
    writer.Write(3.14159);   // Write a double
    writer.Write("Hello");   // Write a string
    writer.Write(true);      // Write a boolean
    writer.Write((byte)255); // Write a byte
}

// Reading binary data
using (FileStream fs = new FileStream("data.bin", FileMode.Open))
using (BinaryReader reader = new BinaryReader(fs))
{
    int intValue = reader.ReadInt32();
    double doubleValue = reader.ReadDouble();
    string stringValue = reader.ReadString();
    bool boolValue = reader.ReadBoolean();
    byte byteValue = reader.ReadByte();
    
    Console.WriteLine($"Int: {intValue}, Double: {doubleValue}, String: {stringValue}, Bool: {boolValue}, Byte: {byteValue}");
}

// Reading until end of file
using (FileStream fs = new FileStream("data.bin", FileMode.Open))
using (BinaryReader reader = new BinaryReader(fs))
{
    try
    {
        while (true)
        {
            byte value = reader.ReadByte();
            Console.Write($"{value:X2} ");
        }
    }
    catch (EndOfStreamException)
    {
        // Reached the end of the file
        Console.WriteLine("\nEnd of file reached.");
    }
}
```

### MemoryStream

`MemoryStream` provides a stream that uses memory as a backing store instead of a file.

```csharp
// Creating a MemoryStream and writing to it
using (MemoryStream ms = new MemoryStream())
{
    // Write data to the memory stream
    byte[] data = Encoding.UTF8.GetBytes("Hello, World!");
    ms.Write(data, 0, data.Length);
    
    // Reset the position to the beginning
    ms.Position = 0;
    
    // Read data from the memory stream
    byte[] buffer = new byte[ms.Length];
    ms.Read(buffer, 0, buffer.Length);
    
    // Convert bytes back to string
    string result = Encoding.UTF8.GetString(buffer);
    Console.WriteLine(result);  // "Hello, World!"
    
    // Get the bytes from the memory stream
    byte[] allBytes = ms.ToArray();
    
    // Write the memory stream to a file
    File.WriteAllBytes("output.bin", allBytes);
}

// Using MemoryStream as a temporary buffer
using (MemoryStream ms = new MemoryStream())
{
    // Create a writer that writes to the memory stream
    using (StreamWriter writer = new StreamWriter(ms, Encoding.UTF8, 1024, true))
    {
        writer.WriteLine("Line 1");
        writer.WriteLine("Line 2");
        writer.Flush();  // Ensure all data is written to the underlying stream
        
        // Get the current position
        long position = ms.Position;
        
        // Reset to beginning
        ms.Position = 0;
        
        // Create a reader that reads from the memory stream
        using (StreamReader reader = new StreamReader(ms, Encoding.UTF8, false, 1024, true))
        {
            string content = reader.ReadToEnd();
            Console.WriteLine(content);
        }
    }
}
```

## Asynchronous File I/O

### Async File Operations

The .NET Framework provides asynchronous versions of many file operations.

```csharp
// Async file reading
public async Task<string> ReadFileAsync(string filePath)
{
    using (StreamReader reader = new StreamReader(filePath))
    {
        return await reader.ReadToEndAsync();
    }
}

// Async file writing
public async Task WriteFileAsync(string filePath, string content)
{
    using (StreamWriter writer = new StreamWriter(filePath))
    {
        await writer.WriteAsync(content);
    }
}

// Async file copy
public async Task CopyFileAsync(string sourcePath, string destinationPath)
{
    using (FileStream sourceStream = new FileStream(sourcePath, FileMode.Open, FileAccess.Read))
    using (FileStream destinationStream = new FileStream(destinationPath, FileMode.Create, FileAccess.Write))
    {
        await sourceStream.CopyToAsync(destinationStream);
    }
}

// Using File class async methods
public async Task FileClassAsyncExample()
{
    // Read all text asynchronously
    string content = await File.ReadAllTextAsync("data.txt");
    
    // Read all lines asynchronously
    string[] lines = await File.ReadAllLinesAsync("data.txt");
    
    // Read all bytes asynchronously
    byte[] bytes = await File.ReadAllBytesAsync("data.bin");
    
    // Write all text asynchronously
    await File.WriteAllTextAsync("output.txt", "Hello, World!");
    
    // Write all lines asynchronously
    await File.WriteAllLinesAsync("output.txt", new[] { "Line 1", "Line 2", "Line 3" });
    
    // Write all bytes asynchronously
    await File.WriteAllBytesAsync("output.bin", new byte[] { 0x48, 0x65, 0x6C, 0x6C, 0x6F });
}

// Async file stream operations
public async Task FileStreamAsyncExample()
{
    using (FileStream fs = new FileStream("data.bin", FileMode.Open, FileAccess.Read))
    {
        byte[] buffer = new byte[1024];
        
        // Read asynchronously
        int bytesRead = await fs.ReadAsync(buffer, 0, buffer.Length);
        
        // Process the bytes...
    }
    
    using (FileStream fs = new FileStream("output.bin", FileMode.Create, FileAccess.Write))
    {
        byte[] data = { 0x48, 0x65, 0x6C, 0x6C, 0x6F };  // "Hello" in ASCII
        
        // Write asynchronously
        await fs.WriteAsync(data, 0, data.Length);
    }
}
```

### Async Stream Reading and Writing

```csharp
// Async stream reading line by line
public async Task ReadLinesAsync(string filePath)
{
    using (StreamReader reader = new StreamReader(filePath))
    {
        string line;
        while ((line = await reader.ReadLineAsync()) != null)
        {
            Console.WriteLine(line);
        }
    }
}

// Async stream writing
public async Task WriteLinesAsync(string filePath, IEnumerable<string> lines)
{
    using (StreamWriter writer = new StreamWriter(filePath))
    {
        foreach (string line in lines)
        {
            await writer.WriteLineAsync(line);
        }
    }
}

// Processing a large file asynchronously
public async Task ProcessLargeFileAsync(string filePath)
{
    using (StreamReader reader = new StreamReader(filePath))
    {
        // Buffer for reading chunks of text
        char[] buffer = new char[4096];
        int charsRead;
        
        while ((charsRead = await reader.ReadAsync(buffer, 0, buffer.Length)) > 0)
        {
            // Process the characters in the buffer
            string chunk = new string(buffer, 0, charsRead);
            // Do something with the chunk...
        }
    }
}
```

## File Compression

### Using System.IO.Compression

The `System.IO.Compression` namespace provides classes for compressing and decompressing files and streams.

```csharp
// Compress a file
public void CompressFile(string sourceFile, string compressedFile)
{
    using (FileStream sourceStream = new FileStream(sourceFile, FileMode.Open))
    using (FileStream targetStream = new FileStream(compressedFile, FileMode.Create))
    using (GZipStream compressionStream = new GZipStream(targetStream, CompressionMode.Compress))
    {
        sourceStream.CopyTo(compressionStream);
    }
}

// Decompress a file
public void DecompressFile(string compressedFile, string targetFile)
{
    using (FileStream sourceStream = new FileStream(compressedFile, FileMode.Open))
    using (GZipStream decompressionStream = new GZipStream(sourceStream, CompressionMode.Decompress))
    using (FileStream targetStream = new FileStream(targetFile, FileMode.Create))
    {
        decompressionStream.CopyTo(targetStream);
    }
}

// Compress a string
public byte[] CompressString(string text)
{
    byte[] inputBytes = Encoding.UTF8.GetBytes(text);
    
    using (MemoryStream outputStream = new MemoryStream())
    {
        using (GZipStream compressionStream = new GZipStream(outputStream, CompressionMode.Compress, true))
        {
            compressionStream.Write(inputBytes, 0, inputBytes.Length);
        }
        
        return outputStream.ToArray();
    }
}

// Decompress a byte array to a string
public string DecompressString(byte[] compressedData)
{
    using (MemoryStream inputStream = new MemoryStream(compressedData))
    using (GZipStream decompressionStream = new GZipStream(inputStream, CompressionMode.Decompress))
    using (StreamReader reader = new StreamReader(decompressionStream, Encoding.UTF8))
    {
        return reader.ReadToEnd();
    }
}
```

### Working with ZIP Files

```csharp
// Create a ZIP file
public void CreateZipFile(string sourceDirectory, string zipFilePath)
{
    ZipFile.CreateFromDirectory(sourceDirectory, zipFilePath);
}

// Extract a ZIP file
public void ExtractZipFile(string zipFilePath, string targetDirectory)
{
    ZipFile.ExtractToDirectory(zipFilePath, targetDirectory);
}

// Create a ZIP file with options
public void CreateZipFileWithOptions(string sourceDirectory, string zipFilePath)
{
    ZipFile.CreateFromDirectory(
        sourceDirectory,
        zipFilePath,
        CompressionLevel.Optimal,  // Compression level
        false,                     // Include base directory
        Encoding.UTF8              // Entry name encoding
    );
}

// Extract a ZIP file with encoding
public void ExtractZipFileWithEncoding(string zipFilePath, string targetDirectory)
{
    ZipFile.ExtractToDirectory(zipFilePath, targetDirectory, Encoding.UTF8);
}

// Working with ZIP archives
public void ManipulateZipArchive(string zipFilePath)
{
    using (ZipArchive archive = ZipFile.Open(zipFilePath, ZipArchiveMode.Update))
    {
        // Add a file to the archive
        ZipArchiveEntry entry = archive.CreateEntry("newfile.txt");
        using (StreamWriter writer = new StreamWriter(entry.Open()))
        {
            writer.WriteLine("This is a new file in the ZIP archive.");
        }
        
        // Extract a specific file
        ZipArchiveEntry existingEntry = archive.GetEntry("existingfile.txt");
        if (existingEntry != null)
        {
            existingEntry.ExtractToFile("extracted.txt", true);
        }
        
        // Delete an entry
        ZipArchiveEntry entryToDelete = archive.GetEntry("oldfile.txt");
        if (entryToDelete != null)
        {
            entryToDelete.Delete();
        }
        
        // List all entries
        foreach (ZipArchiveEntry archiveEntry in archive.Entries)
        {
            Console.WriteLine($"Name: {archiveEntry.Name}, Size: {archiveEntry.Length}, Modified: {archiveEntry.LastWriteTime}");
        }
    }
}
```

## File Watching

### FileSystemWatcher

The `FileSystemWatcher` class allows you to monitor a directory for changes to files and subdirectories.

```csharp
// Create a FileSystemWatcher
public void WatchDirectory(string path)
{
    // Create a new FileSystemWatcher
    using (FileSystemWatcher watcher = new FileSystemWatcher())
    {
        // Set the directory to watch
        watcher.Path = path;
        
        // Watch for changes in LastWrite time and file/directory name
        watcher.NotifyFilter = NotifyFilters.LastWrite
                             | NotifyFilters.FileName
                             | NotifyFilters.DirectoryName;
        
        // Only watch text files
        watcher.Filter = "*.txt";
        
        // Add event handlers
        watcher.Changed += OnChanged;
        watcher.Created += OnCreated;
        watcher.Deleted += OnDeleted;
        watcher.Renamed += OnRenamed;
        
        // Begin watching
        watcher.EnableRaisingEvents = true;
        
        // Wait for the user to quit the program
        Console.WriteLine("Press 'q' to quit the watcher.");
        while (Console.Read() != 'q') ;
    }
}

// Event handlers
private static void OnChanged(object sender, FileSystemEventArgs e)
{
    Console.WriteLine($"File: {e.FullPath} {e.ChangeType}");
}

private static void OnCreated(object sender, FileSystemEventArgs e)
{
    Console.WriteLine($"File: {e.FullPath} created");
}

private static void OnDeleted(object sender, FileSystemEventArgs e)
{
    Console.WriteLine($"File: {e.FullPath} deleted");
}

private static void OnRenamed(object sender, RenamedEventArgs e)
{
    Console.WriteLine($"File: {e.OldFullPath} renamed to {e.FullPath}");
}

// Watch subdirectories
public void WatchDirectoryWithSubdirectories(string path)
{
    using (FileSystemWatcher watcher = new FileSystemWatcher())
    {
        watcher.Path = path;
        watcher.IncludeSubdirectories = true;  // Watch subdirectories
        watcher.NotifyFilter = NotifyFilters.LastWrite | NotifyFilters.FileName | NotifyFilters.DirectoryName;
        
        // Event handlers...
        
        watcher.EnableRaisingEvents = true;
        
        // Wait for the user to quit the program
        Console.WriteLine("Press 'q' to quit the watcher.");
        while (Console.Read() != 'q') ;
    }
}
```

## File Security

### File Access Control

```csharp
// Get file security information
public void GetFileSecurity(string filePath)
{
    FileSecurity security = File.GetAccessControl(filePath);
    
    // Get the owner
    IdentityReference owner = security.GetOwner(typeof(NTAccount));
    Console.WriteLine($"Owner: {owner.Value}");
    
    // Get access rules
    AuthorizationRuleCollection rules = security.GetAccessRules(true, true, typeof(NTAccount));
    
    foreach (FileSystemAccessRule rule in rules)
    {
        Console.WriteLine($"Identity: {rule.IdentityReference.Value}");
        Console.WriteLine($"Access: {rule.FileSystemRights}");
        Console.WriteLine($"Type: {rule.AccessControlType}");
        Console.WriteLine();
    }
}

// Set file security
public void SetFileSecurity(string filePath)
{
    FileSecurity security = File.GetAccessControl(filePath);
    
    // Add a new access rule
    FileSystemAccessRule rule = new FileSystemAccessRule(
        "Everyone",  // Identity
        FileSystemRights.Read,  // Rights
        AccessControlType.Allow  // Allow or deny
    );
    
    security.AddAccessRule(rule);
    
    // Set the modified security
    File.SetAccessControl(filePath, security);
}

// Remove an access rule
public void RemoveAccessRule(string filePath, string identity)
{
    FileSecurity security = File.GetAccessControl(filePath);
    
    // Create a rule to remove
    FileSystemAccessRule rule = new FileSystemAccessRule(
        identity,
        FileSystemRights.FullControl,
        AccessControlType.Allow
    );
    
    // Remove the rule
    security.RemoveAccessRule(rule);
    
    // Set the modified security
    File.SetAccessControl(filePath, security);
}

// Change the owner
public void ChangeOwner(string filePath, string newOwner)
{
    FileSecurity security = File.GetAccessControl(filePath);
    
    // Set the new owner
    security.SetOwner(new NTAccount(newOwner));
    
    // Apply the changes
    File.SetAccessControl(filePath, security);
}
```

### Encrypted File System (EFS)

```csharp
// Encrypt a file
public void EncryptFile(string filePath)
{
    File.Encrypt(filePath);
}

// Decrypt a file
public void DecryptFile(string filePath)
{
    File.Decrypt(filePath);
}

// Check if a file is encrypted
public bool IsFileEncrypted(string filePath)
{
    FileAttributes attributes = File.GetAttributes(filePath);
    return (attributes & FileAttributes.Encrypted) == FileAttributes.Encrypted;
}
```

## Best Practices

### Error Handling

```csharp
// Proper error handling for file operations
public string ReadFileWithErrorHandling(string filePath)
{
    try
    {
        return File.ReadAllText(filePath);
    }
    catch (FileNotFoundException ex)
    {
        Console.WriteLine($"File not found: {ex.Message}");
        return string.Empty;
    }
    catch (DirectoryNotFoundException ex)
    {
        Console.WriteLine($"Directory not found: {ex.Message}");
        return string.Empty;
    }
    catch (IOException ex)
    {
        Console.WriteLine($"I/O error: {ex.Message}");
        return string.Empty;
    }
    catch (UnauthorizedAccessException ex)
    {
        Console.WriteLine($"Access denied: {ex.Message}");
        return string.Empty;
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Unexpected error: {ex.Message}");
        return string.Empty;
    }
}

// Using the using statement for proper resource disposal
public void WriteFileWithProperDisposal(string filePath, string content)
{
    try
    {
        using (StreamWriter writer = new StreamWriter(filePath))
        {
            writer.Write(content);
        }  // StreamWriter is automatically disposed here
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error writing to file: {ex.Message}");
    }
}
```

### Performance Considerations

```csharp
// Buffered reading for better performance
public void ReadLargeFileEfficiently(string filePath)
{
    const int BufferSize = 8192;  // 8KB buffer
    
    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.Read, BufferSize))
    using (BufferedStream bs = new BufferedStream(fs, BufferSize))
    using (StreamReader reader = new StreamReader(bs))
    {
        string line;
        while ((line = reader.ReadLine()) != null)
        {
            // Process the line...
        }
    }
}

// Using FileOptions for performance optimization
public void OptimizeFileAccess(string filePath)
{
    // Sequential access optimization
    using (FileStream fs = new FileStream(
        filePath,
        FileMode.Open,
        FileAccess.Read,
        FileShare.Read,
        4096,  // Buffer size
        FileOptions.SequentialScan))  // Optimize for sequential access
    {
        // Read the file...
    }
    
    // Random access optimization
    using (FileStream fs = new FileStream(
        filePath,
        FileMode.Open,
        FileAccess.Read,
        FileShare.Read,
        4096,
        FileOptions.RandomAccess))  // Optimize for random access
    {
        // Read the file...
    }
    
    // Asynchronous optimization
    using (FileStream fs = new FileStream(
        filePath,
        FileMode.Open,
        FileAccess.Read,
        FileShare.Read,
        4096,
        FileOptions.Asynchronous))  // Optimize for asynchronous access
    {
        // Read the file asynchronously...
    }
}

// Memory-mapped files for very large files
public void UseMemoryMappedFile(string filePath)
{
    using (MemoryMappedFile mmf = MemoryMappedFile.CreateFromFile(filePath, FileMode.Open))
    {
        // Access a portion of the file
        using (MemoryMappedViewAccessor accessor = mmf.CreateViewAccessor(0, 1024))  // First 1KB
        {
            // Read data
            byte value = accessor.ReadByte(0);
            
            // Write data
            accessor.Write(10, (byte)65);  // Write 'A' at offset 10
        }
        
        // Access the file as a stream
        using (MemoryMappedViewStream stream = mmf.CreateViewStream())
        {
            // Use the stream...
            byte[] buffer = new byte[100];
            stream.Read(buffer, 0, buffer.Length);
        }
    }
}
```

### File Path Handling

```csharp
// Safe file path handling
public string GetSafeFilePath(string basePath, string fileName)
{
    // Validate and sanitize the file name
    if (string.IsNullOrEmpty(fileName))
    {
        throw new ArgumentException("File name cannot be null or empty", nameof(fileName));
    }
    
    // Remove any invalid characters
    string safeFileName = string.Join("_", fileName.Split(Path.GetInvalidFileNameChars()));
    
    // Combine paths safely
    string fullPath = Path.Combine(basePath, safeFileName);
    
    // Ensure the resulting path is within the intended directory
    string normalizedPath = Path.GetFullPath(fullPath);
    string normalizedBasePath = Path.GetFullPath(basePath);
    
    if (!normalizedPath.StartsWith(normalizedBasePath))
    {
        throw new SecurityException("Attempted path traversal attack");
    }
    
    return fullPath;
}

// Creating a unique file name
public string GetUniqueFileName(string directory, string fileName)
{
    string fileNameOnly = Path.GetFileNameWithoutExtension(fileName);
    string extension = Path.GetExtension(fileName);
    string path = Path.Combine(directory, fileName);
    int count = 1;
    
    while (File.Exists(path))
    {
        string newFileName = $"{fileNameOnly}({count}){extension}";
        path = Path.Combine(directory, newFileName);
        count++;
    }
    
    return path;
}
```

## Resources

- [File and Stream I/O (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/io/)
- [File Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.io.file)
- [Directory Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.io.directory)
- [Path Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.io.path)
- [FileStream Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.io.filestream)
- [Asynchronous File I/O (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/io/asynchronous-file-i-o)

# 15. Asynchronous Programming

Asynchronous programming in C# allows you to write non-blocking code that can improve the responsiveness and scalability of your applications. The async/await pattern introduced in C# 5.0 makes asynchronous programming much more accessible.

## Async/Await Basics

### Async Methods

```csharp
// Basic async method that returns a Task
public async Task DoWorkAsync()
{
    Console.WriteLine("Starting work...");
    
    // Simulate asynchronous work with a delay
    await Task.Delay(1000);
    
    Console.WriteLine("Work completed");
}

// Async method that returns a Task<T>
public async Task<int> CalculateAsync(int a, int b)
{
    Console.WriteLine("Starting calculation...");
    
    // Simulate asynchronous calculation
    await Task.Delay(1000);
    
    return a + b;
}

// Async method with void return type (generally avoid except for event handlers)
public async void Button_Click(object sender, EventArgs e)
{
    try
    {
        await DoWorkAsync();
        MessageBox.Show("Operation completed successfully!");
    }
    catch (Exception ex)
    {
        // Exception handling is crucial in async void methods
        // as exceptions can't be caught by the caller
        MessageBox.Show($"Error: {ex.Message}");
    }
}

// Calling async methods
public async Task CallAsyncMethodsAsync()
{
    // Await the Task
    await DoWorkAsync();
    
    // Await and get the result from Task<T>
    int result = await CalculateAsync(5, 3);
    Console.WriteLine($"Result: {result}");
    
    // Call without await (fire and forget - generally avoid)
    // DoWorkAsync();  // This doesn't wait for completion
    
    // Store the task for later awaiting
    Task<int> calculationTask = CalculateAsync(10, 20);
    
    // Do other work...
    
    // Await the stored task
    int calculationResult = await calculationTask;
    Console.WriteLine($"Calculation result: {calculationResult}");
}
```

### Async Method Signatures

```csharp
// Recommended async method signatures
public async Task MethodAsync()
{
    await Task.Delay(100);
}

public async Task<int> MethodWithResultAsync()
{
    await Task.Delay(100);
    return 42;
}

// Async method in interface
public interface IDataService
{
    Task<Data> GetDataAsync(int id);
}

// Implementing the interface
public class DataService : IDataService
{
    public async Task<Data> GetDataAsync(int id)
    {
        // Implementation...
        await Task.Delay(100);
        return new Data { Id = id, Name = "Sample" };
    }
}

// Async method in abstract class
public abstract class BaseService
{
    public abstract Task<Data> GetDataAsync(int id);
    
    public async Task<List<Data>> GetAllDataAsync()
    {
        // Implementation...
        await Task.Delay(100);
        return new List<Data>();
    }
}

// Async lambda expressions
Func<Task> asyncAction = async () => 
{
    await Task.Delay(100);
    Console.WriteLine("Async lambda completed");
};

Func<int, Task<string>> asyncFunc = async (id) => 
{
    await Task.Delay(100);
    return $"Item {id}";
};
```

### Awaiting Tasks

```csharp
// Basic await
public async Task BasicAwaitAsync()
{
    Console.WriteLine("Before await");
    await Task.Delay(1000);
    Console.WriteLine("After await");  // Executes after the delay completes
}

// Awaiting a Task<T>
public async Task AwaitTaskWithResultAsync()
{
    Task<int> task = CalculateAsync(5, 3);
    
    // Do other work while the calculation is in progress...
    
    int result = await task;  // Waits for the task to complete and gets the result
    Console.WriteLine($"Result: {result}");
}

// Awaiting multiple tasks sequentially
public async Task SequentialAwaitsAsync()
{
    int result1 = await CalculateAsync(5, 3);
    int result2 = await CalculateAsync(10, 20);
    int sum = result1 + result2;
    
    Console.WriteLine($"Sum: {sum}");
}

// Awaiting multiple tasks in parallel
public async Task ParallelAwaitsAsync()
{
    // Start both tasks
    Task<int> task1 = CalculateAsync(5, 3);
    Task<int> task2 = CalculateAsync(10, 20);
    
    // Await both tasks to complete
    int result1 = await task1;
    int result2 = await task2;
    
    int sum = result1 + result2;
    Console.WriteLine($"Sum: {sum}");
}

// Using Task.WhenAll to await multiple tasks
public async Task WhenAllAsync()
{
    Task<int> task1 = CalculateAsync(5, 3);
    Task<int> task2 = CalculateAsync(10, 20);
    Task<int> task3 = CalculateAsync(7, 8);
    
    // Await all tasks to complete
    int[] results = await Task.WhenAll(task1, task2, task3);
    
    int sum = results.Sum();
    Console.WriteLine($"Sum: {sum}");
}

// Using Task.WhenAny to await the first completed task
public async Task WhenAnyAsync()
{
    Task<int> task1 = CalculateAsync(5, 3);
    Task<int> task2 = CalculateAsync(10, 20);
    
    // Await the first task to complete
    Task<int> completedTask = await Task.WhenAny(task1, task2);
    
    int firstResult = await completedTask;
    Console.WriteLine($"First result: {firstResult}");
    
    // Await the other task if needed
    if (completedTask == task1)
    {
        int secondResult = await task2;
        Console.WriteLine($"Second result: {secondResult}");
    }
    else
    {
        int secondResult = await task1;
        Console.WriteLine($"Second result: {secondResult}");
    }
}
```

### ConfigureAwait

```csharp
// Using ConfigureAwait(true) - default behavior
public async Task WithContextAsync()
{
    await Task.Delay(1000).ConfigureAwait(true);
    // Code here runs on the original synchronization context
    // (e.g., UI thread in a GUI application)
}

// Using ConfigureAwait(false) - optimization for library code
public async Task WithoutContextAsync()
{
    await Task.Delay(1000).ConfigureAwait(false);
    // Code here runs on any available thread from the thread pool
    // This can improve performance in library code
}

// Example in a library method
public async Task<string> LibraryMethodAsync()
{
    // Use ConfigureAwait(false) in library code to avoid forcing
    // continuation on the original context
    string data = await FetchDataAsync().ConfigureAwait(false);
    data = await ProcessDataAsync(data).ConfigureAwait(false);
    return data;
}

// Example in UI code
public async void Button_Click(object sender, EventArgs e)
{
    // In UI code, typically use the default ConfigureAwait(true)
    // to ensure UI updates happen on the UI thread
    string result = await LibraryMethodAsync();
    ResultTextBox.Text = result;  // This needs to run on the UI thread
}
```

## Task-based Asynchronous Pattern (TAP)

### Creating Tasks

```csharp
// Creating a completed task
Task completedTask = Task.CompletedTask;

// Creating a completed task with a result
Task<int> completedTaskWithResult = Task.FromResult(42);

// Creating a faulted task
Task<int> faultedTask = Task.FromException<int>(new InvalidOperationException("Task failed"));

// Creating a canceled task
Task<int> canceledTask = Task.FromCanceled<int>(new CancellationToken(true));

// Creating a task that runs a delegate
Task delegateTask = new Task(() => Console.WriteLine("Task running"));
delegateTask.Start();  // Must explicitly start the task

// Creating and starting a task in one step
Task startedTask = Task.Run(() => Console.WriteLine("Task running"));

// Creating a task with a result
Task<int> resultTask = Task.Run(() => 
{
    Console.WriteLine("Calculating...");
    return 42;
});

// Creating a task with Task.Factory
Task factoryTask = Task.Factory.StartNew(() => Console.WriteLine("Task running"));

// Creating a long-running task
Task longRunningTask = Task.Factory.StartNew(() => 
{
    // Long-running operation
    Thread.Sleep(5000);
}, TaskCreationOptions.LongRunning);
```

### Task Continuation

```csharp
// Basic continuation
public async Task BasicContinuationAsync()
{
    Task<int> task = Task.Run(() => 42);
    
    // Using ContinueWith
    Task<string> continuation = task.ContinueWith(t => 
    {
        int result = t.Result;
        return $"The result is {result}";
    });
    
    string message = await continuation;
    Console.WriteLine(message);
}

// Continuation with TaskContinuationOptions
public void ContinuationOptionsExample()
{
    Task<int> task = Task.Run(() => 42);
    
    // Continue only if the task completed successfully
    Task successContinuation = task.ContinueWith(t => 
    {
        Console.WriteLine($"Success: {t.Result}");
    }, TaskContinuationOptions.OnlyOnRanToCompletion);
    
    // Continue only if the task faulted
    Task failureContinuation = task.ContinueWith(t => 
    {
        Console.WriteLine($"Failure: {t.Exception.InnerException.Message}");
    }, TaskContinuationOptions.OnlyOnFaulted);
    
    // Continue only if the task was canceled
    Task canceledContinuation = task.ContinueWith(t => 
    {
        Console.WriteLine("Task was canceled");
    }, TaskContinuationOptions.OnlyOnCanceled);
}

// Multiple continuations
public void MultipleContinuations()
{
    Task<int> task = Task.Run(() => 42);
    
    // Multiple independent continuations
    Task continuation1 = task.ContinueWith(t => Console.WriteLine($"Continuation 1: {t.Result}"));
    Task continuation2 = task.ContinueWith(t => Console.WriteLine($"Continuation 2: {t.Result}"));
    
    // Chained continuations
    Task<int> firstContinuation = task.ContinueWith(t => t.Result * 2);
    Task<int> secondContinuation = firstContinuation.ContinueWith(t => t.Result + 10);
    Task<string> thirdContinuation = secondContinuation.ContinueWith(t => $"Final result: {t.Result}");
    
    Console.WriteLine(thirdContinuation.Result);  // Blocks until the result is available
}

// Async/await vs ContinueWith
public async Task AsyncAwaitVsContinueWithAsync()
{
    // Using async/await (generally preferred)
    Task<int> task = Task.Run(() => 42);
    int result = await task;
    string message = $"The result is {result}";
    Console.WriteLine(message);
    
    // Equivalent using ContinueWith
    Task<int> task2 = Task.Run(() => 42);
    Task<string> continuation = task2.ContinueWith(t => 
    {
        int res = t.Result;
        return $"The result is {res}";
    });
    string message2 = await continuation;
    Console.WriteLine(message2);
}
```

### Task Exceptions

```csharp
// Handling exceptions with async/await
public async Task HandleExceptionsWithAwaitAsync()
{
    try
    {
        await ThrowExceptionAsync();
    }
    catch (InvalidOperationException ex)
    {
        Console.WriteLine($"Caught exception: {ex.Message}");
    }
}

public async Task ThrowExceptionAsync()
{
    await Task.Delay(100);
    throw new InvalidOperationException("Something went wrong");
}

// Handling exceptions with ContinueWith
public void HandleExceptionsWithContinueWith()
{
    Task task = Task.Run(() => 
    {
        throw new InvalidOperationException("Something went wrong");
    });
    
    task.ContinueWith(t => 
    {
        if (t.IsFaulted)
        {
            Exception ex = t.Exception.InnerException;
            Console.WriteLine($"Caught exception: {ex.Message}");
        }
    });
}

// Handling AggregateException
public async Task HandleAggregateExceptionAsync()
{
    try
    {
        // Start multiple tasks
        Task task1 = Task.Run(() => { throw new InvalidOperationException("Error 1"); });
        Task task2 = Task.Run(() => { throw new ArgumentException("Error 2"); });
        
        // Wait for all tasks to complete
        await Task.WhenAll(task1, task2);
    }
    catch (AggregateException ex)
    {
        // This won't be reached with await, but would be with Task.Wait()
        foreach (var innerEx in ex.InnerExceptions)
        {
            Console.WriteLine($"Inner exception: {innerEx.Message}");
        }
    }
    catch (Exception ex)
    {
        // With await, only the first exception is thrown
        Console.WriteLine($"Caught exception: {ex.Message}");
    }
}

// Using Task.Wait() with exception handling
public void HandleExceptionsWithWait()
{
    Task task = Task.Run(() => 
    {
        throw new InvalidOperationException("Something went wrong");
    });
    
    try
    {
        task.Wait();  // Blocks until the task completes
    }
    catch (AggregateException ex)
    {
        // Task.Wait() wraps exceptions in AggregateException
        foreach (var innerEx in ex.InnerExceptions)
        {
            Console.WriteLine($"Inner exception: {innerEx.Message}");
        }
    }
}
```

## Asynchronous Streams (C# 8.0+)

### IAsyncEnumerable

```csharp
// Producing an asynchronous stream
public async IAsyncEnumerable<int> GenerateNumbersAsync()
{
    for (int i = 0; i < 10; i++)
    {
        // Simulate asynchronous work
        await Task.Delay(100);
        yield return i;
    }
}

// Consuming an asynchronous stream
public async Task ConsumeAsyncStreamAsync()
{
    await foreach (int number in GenerateNumbersAsync())
    {
        Console.WriteLine(number);
    }
}

// Filtering an asynchronous stream
public async Task FilterAsyncStreamAsync()
{
    await foreach (int number in GenerateNumbersAsync())
    {
        if (number % 2 == 0)
        {
            Console.WriteLine($"Even number: {number}");
        }
    }
}

// Using ConfigureAwait with async streams
public async Task ConfigureAwaitWithAsyncStreamAsync()
{
    await foreach (int number in GenerateNumbersAsync().ConfigureAwait(false))
    {
        // This code runs without capturing the original synchronization context
        Console.WriteLine(number);
    }
}

// Cancellation with async streams
public async Task CancellationWithAsyncStreamAsync(CancellationToken cancellationToken)
{
    try
    {
        await foreach (int number in GenerateNumbersAsync().WithCancellation(cancellationToken))
        {
            Console.WriteLine(number);
            
            // Check cancellation manually if needed
            cancellationToken.ThrowIfCancellationRequested();
        }
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("Operation was canceled");
    }
}

// Async stream with cancellation support
public async IAsyncEnumerable<int> GenerateNumbersWithCancellationAsync(
    [EnumeratorCancellation] CancellationToken cancellationToken = default)
{
    for (int i = 0; i < 10; i++)
    {
        // Check cancellation before each delay
        cancellationToken.ThrowIfCancellationRequested();
        
        // Simulate asynchronous work
        await Task.Delay(100, cancellationToken);
        yield return i;
    }
}
```

## Cancellation

### CancellationToken

```csharp
// Creating a CancellationToken
public async Task CancellationExampleAsync()
{
    // Create a CancellationTokenSource
    using (CancellationTokenSource cts = new CancellationTokenSource())
    {
        // Get the token
        CancellationToken token = cts.Token;
        
        // Start a task that can be canceled
        Task task = DoWorkAsync(token);
        
        // Simulate waiting for user input to cancel
        await Task.Delay(2000);
        
        // Cancel the operation
        cts.Cancel();
        
        try
        {
            // Wait for the task to complete or be canceled
            await task;
            Console.WriteLine("Task completed successfully");
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Task was canceled");
        }
    }
}

// Method that supports cancellation
public async Task DoWorkAsync(CancellationToken cancellationToken)
{
    for (int i = 0; i < 10; i++)
    {
        // Check if cancellation was requested
        cancellationToken.ThrowIfCancellationRequested();
        
        // Do some work
        Console.WriteLine($"Working... {i}");
        
        // Delay that also respects cancellation
        await Task.Delay(500, cancellationToken);
    }
}

// Cancellation with timeout
public async Task CancellationWithTimeoutAsync()
{
    using (CancellationTokenSource cts = new CancellationTokenSource(5000))  // 5-second timeout
    {
        try
        {
            await DoWorkAsync(cts.Token);
            Console.WriteLine("Task completed within timeout");
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Task was canceled due to timeout");
        }
    }
}

// Combining cancellation tokens
public async Task CombinedCancellationAsync()
{
    using (CancellationTokenSource cts1 = new CancellationTokenSource())
    using (CancellationTokenSource cts2 = new CancellationTokenSource())
    using (CancellationTokenSource linkedCts = CancellationTokenSource.CreateLinkedTokenSource(cts1.Token, cts2.Token))
    {
        // Start a task with the linked token
        Task task = DoWorkAsync(linkedCts.Token);
        
        // Cancel from either source
        await Task.Delay(2000);
        cts1.Cancel();  // This will also cancel the linked token
        
        try
        {
            await task;
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Task was canceled");
        }
    }
}

// Registering cancellation callbacks
public void CancellationCallbacks()
{
    using (CancellationTokenSource cts = new CancellationTokenSource())
    {
        CancellationToken token = cts.Token;
        
        // Register a callback that will be invoked when cancellation is requested
        token.Register(() => 
        {
            Console.WriteLine("Cancellation was requested");
            // Clean up resources, etc.
        });
        
        // Register multiple callbacks
        token.Register(() => Console.WriteLine("Callback 1"));
        token.Register(() => Console.WriteLine("Callback 2"));
        
        // Cancel and trigger the callbacks
        cts.Cancel();
    }
}
```

## Asynchronous Programming Patterns

### Task-based Asynchronous Pattern (TAP)

```csharp
// Modern TAP method
public Task<string> GetDataAsync(string url, CancellationToken cancellationToken = default)
{
    // Implementation using HttpClient
    using (HttpClient client = new HttpClient())
    {
        return client.GetStringAsync(url);
    }
}

// Calling a TAP method
public async Task CallTapMethodAsync()
{
    string data = await GetDataAsync("https://api.example.com/data");
    Console.WriteLine(data);
}
```

### Event-based Asynchronous Pattern (EAP)

```csharp
// Legacy EAP method (pre-async/await)
public void DownloadDataEap(string url)
{
    WebClient client = new WebClient();
    
    // Subscribe to the event
    client.DownloadStringCompleted += (sender, e) => 
    {
        if (e.Error != null)
        {
            Console.WriteLine($"Error: {e.Error.Message}");
        }
        else if (e.Cancelled)
        {
            Console.WriteLine("Download canceled");
        }
        else
        {
            Console.WriteLine($"Downloaded: {e.Result}");
        }
    };
    
    // Start the asynchronous operation
    client.DownloadStringAsync(new Uri(url));
}

// Converting EAP to TAP
public Task<string> DownloadDataAsync(string url)
{
    WebClient client = new WebClient();
    TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
    
    client.DownloadStringCompleted += (sender, e) => 
    {
        if (e.Error != null)
        {
            tcs.SetException(e.Error);
        }
        else if (e.Cancelled)
        {
            tcs.SetCanceled();
        }
        else
        {
            tcs.SetResult(e.Result);
        }
    };
    
    client.DownloadStringAsync(new Uri(url));
    
    return tcs.Task;
}
```

### Asynchronous Programming Model (APM)

```csharp
// Legacy APM method (pre-async/await)
public void ReadFileApm(string filePath)
{
    FileStream fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
    byte[] buffer = new byte[1024];
    
    // Begin the asynchronous operation
    fileStream.BeginRead(buffer, 0, buffer.Length, ar => 
    {
        try
        {
            // End the asynchronous operation
            int bytesRead = fileStream.EndRead(ar);
            Console.WriteLine($"Read {bytesRead} bytes");
            
            // Process the data...
            
            fileStream.Dispose();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
            fileStream.Dispose();
        }
    }, null);
}

// Converting APM to TAP
public Task<int> ReadFileAsync(string filePath)
{
    FileStream fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
    byte[] buffer = new byte[1024];
    
    return Task<int>.Factory.FromAsync(
        fileStream.BeginRead,
        fileStream.EndRead,
        buffer,
        0,
        buffer.Length,
        null);
}
```

## ValueTask and ValueTask<T> (C# 7.0+)

### Using ValueTask

```csharp
// Method that returns ValueTask<T>
public ValueTask<int> GetValueAsync(bool useCache)
{
    if (useCache && _cachedValue.HasValue)
    {
        // Return the cached value without creating a Task
        return new ValueTask<int>(_cachedValue.Value);
    }
    
    // Fall back to creating a Task
    return new ValueTask<int>(CalculateValueAsync());
}

private int? _cachedValue;
private async Task<int> CalculateValueAsync()
{
    await Task.Delay(100);
    int result = 42;
    _cachedValue = result;
    return result;
}

// Method that returns ValueTask
public ValueTask DoWorkAsync(bool skipWork)
{
    if (skipWork)
    {
        // Return a completed ValueTask without creating a Task
        return ValueTask.CompletedTask;
    }
    
    // Fall back to creating a Task
    return new ValueTask(DoActualWorkAsync());
}

private async Task DoActualWorkAsync()
{
    await Task.Delay(100);
    Console.WriteLine("Work completed");
}

// Awaiting ValueTask
public async Task UseValueTaskAsync()
{
    int value = await GetValueAsync(useCache: false);
    Console.WriteLine($"Value: {value}");
    
    await DoWorkAsync(skipWork: false);
}

// Important: ValueTask should only be awaited once
public async Task CorrectValueTaskUsageAsync()
{
    ValueTask<int> valueTask = GetValueAsync(useCache: false);
    
    // Correct: Await the ValueTask directly
    int result = await valueTask;
    
    // Incorrect: Awaiting the same ValueTask multiple times
    // int result1 = await valueTask;
    // int result2 = await valueTask;  // This may throw or return incorrect results
    
    // Incorrect: Storing and awaiting later in certain cases
    // if (condition)
    // {
    //     await valueTask;
    // }
    // else
    // {
    //     // Do something else, then...
    //     await valueTask;  // Problematic
    // }
}

// Converting ValueTask to Task if multiple awaits are needed
public async Task ConvertToTaskAsync()
{
    ValueTask<int> valueTask = GetValueAsync(useCache: false);
    
    // Convert to Task if you need to await multiple times
    Task<int> task = valueTask.AsTask();
    
    int result1 = await task;
    int result2 = await task;  // Safe with Task
}
```

## Parallel Programming

### Task Parallel Library (TPL)

```csharp
// Parallel.For
public void ParallelForExample()
{
    Parallel.For(0, 10, i => 
    {
        Console.WriteLine($"Processing item {i} on thread {Thread.CurrentThread.ManagedThreadId}");
        // Do work...
    });
}

// Parallel.ForEach
public void ParallelForEachExample()
{
    List<string> items = new List<string> { "Item1", "Item2", "Item3", "Item4", "Item5" };
    
    Parallel.ForEach(items, item => 
    {
        Console.WriteLine($"Processing {item} on thread {Thread.CurrentThread.ManagedThreadId}");
        // Do work...
    });
}

// Parallel.Invoke
public void ParallelInvokeExample()
{
    Parallel.Invoke(
        () => ProcessItem("Item1"),
        () => ProcessItem("Item2"),
        () => ProcessItem("Item3")
    );
}

private void ProcessItem(string item)
{
    Console.WriteLine($"Processing {item} on thread {Thread.CurrentThread.ManagedThreadId}");
    // Do work...
}

// Parallel with cancellation
public void ParallelWithCancellation()
{
    CancellationTokenSource cts = new CancellationTokenSource();
    
    try
    {
        Parallel.For(0, 1000, new ParallelOptions { CancellationToken = cts.Token }, i => 
        {
            if (i == 500)
            {
                cts.Cancel();  // Cancel when i reaches 500
            }
            
            Console.WriteLine($"Processing item {i}");
            Thread.Sleep(10);  // Simulate work
        });
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("Operation was canceled");
    }
}

// Parallel LINQ (PLINQ)
public void PlinqExample()
{
    int[] numbers = Enumerable.Range(1, 1000000).ToArray();
    
    // Sequential LINQ
    var evenNumbersSequential = numbers.Where(n => n % 2 == 0).ToList();
    
    // Parallel LINQ
    var evenNumbersParallel = numbers.AsParallel().Where(n => n % 2 == 0).ToList();
    
    // Controlling the degree of parallelism
    var result = numbers
        .AsParallel()
        .WithDegreeOfParallelism(Environment.ProcessorCount)
        .Where(n => n % 2 == 0)
        .ToList();
    
    // Preserving order
    var orderedResult = numbers
        .AsParallel()
        .AsOrdered()
        .Where(n => n % 2 == 0)
        .ToList();
    
    // Handling exceptions in PLINQ
    try
    {
        var results = numbers
            .AsParallel()
            .Where(n => 
            {
                if (n == 500000)
                {
                    throw new InvalidOperationException("Error processing item");
                }
                return n % 2 == 0;
            })
            .ToList();
    }
    catch (AggregateException ex)
    {
        foreach (var innerEx in ex.InnerExceptions)
        {
            Console.WriteLine($"Error: {innerEx.Message}");
        }
    }
}
```

## Best Practices

### Async Method Naming

```csharp
// DO use the Async suffix for async methods
public async Task<string> GetDataAsync()
{
    await Task.Delay(100);
    return "Data";
}

// DO use the Async suffix even when implementing an interface
public interface IDataService
{
    Task<string> GetDataAsync();
}

// DO use the Async suffix for overridden methods
public override async Task<string> GetDataAsync()
{
    await Task.Delay(100);
    return "Overridden data";
}

// DON'T use the Async suffix for synchronous methods that return Task
public Task<string> GetData()  // Not GetDataAsync
{
    return Task.FromResult("Data");
}
```

### Exception Handling

```csharp
// DO handle exceptions in async methods
public async Task HandleExceptionsAsync()
{
    try
    {
        await FetchDataAsync();
    }
    catch (HttpRequestException ex)
    {
        // Handle network errors
        Console.WriteLine($"Network error: {ex.Message}");
    }
    catch (JsonException ex)
    {
        // Handle parsing errors
        Console.WriteLine($"JSON parsing error: {ex.Message}");
    }
    catch (Exception ex)
    {
        // Handle other errors
        Console.WriteLine($"Unexpected error: {ex.Message}");
    }
}

// DON'T swallow exceptions without proper handling
public async Task DoNotSwallowExceptionsAsync()
{
    try
    {
        await FetchDataAsync();
    }
    catch (Exception)
    {
        // Bad: Swallowing the exception without handling or logging
    }
}

// DO use exception filters for logging without catching
public async Task LogWithoutCatchingAsync()
{
    try
    {
        await FetchDataAsync();
    }
    catch (Exception ex) when (LogException(ex))
    {
        // This block never executes
    }
}

private bool LogException(Exception ex)
{
    Console.WriteLine($"Exception: {ex.Message}");
    return false;  // Return false to allow the exception to continue propagating
}
```

### Async Void

```csharp
// DON'T use async void except for event handlers
public async void AsyncVoidMethod()  // Bad practice
{
    await Task.Delay(100);
    throw new Exception("This exception is unobservable");
}

// DO use async Task instead
public async Task AsyncTaskMethod()  // Good practice
{
    await Task.Delay(100);
    throw new Exception("This exception can be caught by the caller");
}

// DO use async void for event handlers
public async void Button_Click(object sender, EventArgs e)  // Acceptable
{
    try
    {
        await AsyncTaskMethod();
    }
    catch (Exception ex)
    {
        // Handle the exception
        MessageBox.Show($"Error: {ex.Message}");
    }
}

// DO wrap async void calls in try-catch
public void CallAsyncVoid()
{
    try
    {
        AsyncVoidMethod();  // Can't await this
    }
    catch (Exception ex)
    {
        // This won't catch exceptions from AsyncVoidMethod
        Console.WriteLine($"Error: {ex.Message}");
    }
}
```

### Cancellation

```csharp
// DO support cancellation in long-running async methods
public async Task<string> FetchDataWithCancellationAsync(CancellationToken cancellationToken = default)
{
    using (HttpClient client = new HttpClient())
    {
        return await client.GetStringAsync("https://api.example.com/data", cancellationToken);
    }
}

// DO make cancellation token parameters optional with a default value
public async Task ProcessDataAsync(string data, CancellationToken cancellationToken = default)
{
    // Process the data...
    await Task.Delay(100, cancellationToken);
}

// DO check cancellation regularly in compute-intensive operations
public async Task<int> ComputeIntensiveTaskAsync(CancellationToken cancellationToken)
{
    int result = 0;
    
    for (int i = 0; i < 1000000; i++)
    {
        // Check cancellation periodically
        if (i % 1000 == 0)
        {
            cancellationToken.ThrowIfCancellationRequested();
        }
        
        // Compute-intensive work...
        result += i;
    }
    
    return result;
}
```

### Async Main (C# 7.1+)

```csharp
// Entry point for console applications
public static async Task Main(string[] args)
{
    Console.WriteLine("Starting application...");
    
    try
    {
        await RunApplicationAsync();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Application error: {ex.Message}");
    }
    
    Console.WriteLine("Application completed");
}

private static async Task RunApplicationAsync()
{
    // Application logic...
    await Task.Delay(1000);
    Console.WriteLine("Application running...");
}
```

### Async Streams (C# 8.0+)

```csharp
// DO use async streams for asynchronous enumeration
public async IAsyncEnumerable<string> GetDataStreamAsync()
{
    for (int i = 0; i < 10; i++)
    {
        await Task.Delay(100);  // Simulate async work
        yield return $"Item {i}";
    }
}

// DO support cancellation in async streams
public async IAsyncEnumerable<string> GetDataStreamWithCancellationAsync(
    [EnumeratorCancellation] CancellationToken cancellationToken = default)
{
    for (int i = 0; i < 10; i++)
    {
        cancellationToken.ThrowIfCancellationRequested();
        await Task.Delay(100, cancellationToken);
        yield return $"Item {i}";
    }
}

// DO use await foreach to consume async streams
public async Task ConsumeAsyncStreamAsync()
{
    await foreach (var item in GetDataStreamAsync())
    {
        Console.WriteLine(item);
    }
}
```

## Resources

- [Asynchronous Programming (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/)
- [Task-based Asynchronous Pattern (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap)
- [Async/Await Best Practices (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/async)
- [Asynchronous Streams (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-8.0/async-streams)
- [Parallel Programming (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/)

# 16. Reflection and Metadata

Reflection in C# allows you to inspect and manipulate types, methods, fields, and other members at runtime. It's a powerful feature for creating dynamic and flexible applications, though it should be used judiciously due to performance considerations.

## Type Information

### Getting Type Information

```csharp
// Getting Type information
public void TypeInformation()
{
    // Get Type using typeof operator
    Type stringType = typeof(string);
    
    // Get Type from an instance
    string text = "Hello";
    Type instanceType = text.GetType();
    
    // Get Type by name
    Type typeByName = Type.GetType("System.String");
    
    // Get Type from a generic type definition
    Type listType = typeof(List<>);
    Type genericListType = typeof(List<string>);
    
    // Check if a type is a generic type
    bool isGeneric = genericListType.IsGenericType;  // true
    
    // Get the generic type definition
    Type genericDefinition = genericListType.GetGenericTypeDefinition();  // List<>
    
    // Get generic type arguments
    Type[] genericArgs = genericListType.GetGenericArguments();  // [string]
    
    // Basic type information
    Console.WriteLine($"Type name: {stringType.Name}");  // String
    Console.WriteLine($"Full name: {stringType.FullName}");  // System.String
    Console.WriteLine($"Namespace: {stringType.Namespace}");  // System
    Console.WriteLine($"Assembly: {stringType.Assembly.GetName().Name}");  // System.Private.CoreLib
    
    // Type characteristics
    Console.WriteLine($"Is class: {stringType.IsClass}");  // True
    Console.WriteLine($"Is interface: {stringType.IsInterface}");  // False
    Console.WriteLine($"Is abstract: {stringType.IsAbstract}");  // False
    Console.WriteLine($"Is sealed: {stringType.IsSealed}");  // True
    Console.WriteLine($"Is enum: {stringType.IsEnum}");  // False
    Console.WriteLine($"Is value type: {stringType.IsValueType}");  // False
    Console.WriteLine($"Is primitive: {stringType.IsPrimitive}");  // False
    Console.WriteLine($"Is array: {stringType.IsArray}");  // False
    
    // Base type and implemented interfaces
    Type baseType = stringType.BaseType;  // Object
    Type[] interfaces = stringType.GetInterfaces();  // IComparable, IEnumerable, etc.
}

// Type relationships
public void TypeRelationships()
{
    // Check if a type is assignable from another type
    bool isAssignable = typeof(IEnumerable).IsAssignableFrom(typeof(List<string>));  // true
    
    // Check if an object is an instance of a type
    object obj = "Hello";
    bool isInstance = typeof(string).IsInstanceOfType(obj);  // true
    
    // Check subclass relationship
    bool isSubclass = typeof(Exception).IsSubclassOf(typeof(object));  // true
    
    // Check if a type equals another type
    bool typesEqual = typeof(string) == typeof(int);  // false
}
```

### Type Hierarchy and Inheritance

```csharp
// Exploring type hierarchy
public void ExploreTypeHierarchy(Type type)
{
    Console.WriteLine($"Type: {type.FullName}");
    
    // Get base type
    Type baseType = type.BaseType;
    if (baseType != null)
    {
        Console.WriteLine($"Base type: {baseType.FullName}");
        ExploreTypeHierarchy(baseType);  // Recursive call
    }
}

// Get all derived types in an assembly
public IEnumerable<Type> GetDerivedTypes(Assembly assembly, Type baseType)
{
    return assembly.GetTypes()
        .Where(t => t != baseType && baseType.IsAssignableFrom(t));
}

// Example usage
public void TypeHierarchyExample()
{
    // Print the inheritance hierarchy of Exception
    ExploreTypeHierarchy(typeof(ArgumentException));
    
    // Get all types that derive from Exception in the current assembly
    var exceptionTypes = GetDerivedTypes(Assembly.GetExecutingAssembly(), typeof(Exception));
    foreach (var type in exceptionTypes)
    {
        Console.WriteLine($"Exception type: {type.FullName}");
    }
}
```

## Members and Metadata

### Accessing Members

```csharp
// Getting members of a type
public void GetTypeMembers()
{
    Type type = typeof(string);
    
    // Get all public members
    MemberInfo[] members = type.GetMembers();
    
    // Get all members (public, private, etc.)
    MemberInfo[] allMembers = type.GetMembers(BindingFlags.Public | 
                                             BindingFlags.NonPublic | 
                                             BindingFlags.Instance | 
                                             BindingFlags.Static);
    
    // Get specific member types
    MethodInfo[] methods = type.GetMethods();
    PropertyInfo[] properties = type.GetProperties();
    FieldInfo[] fields = type.GetFields();
    ConstructorInfo[] constructors = type.GetConstructors();
    EventInfo[] events = type.GetEvents();
    
    // Get a specific member by name
    MethodInfo method = type.GetMethod("Substring");
    PropertyInfo property = type.GetProperty("Length");
    
    // Get a method with specific parameters
    MethodInfo specificMethod = type.GetMethod("Substring", 
        new[] { typeof(int), typeof(int) });
    
    // Get a specific constructor
    ConstructorInfo constructor = type.GetConstructor(
        new[] { typeof(char), typeof(int) });
    
    // Display member information
    foreach (var member in members.Take(5))  // Just show first 5 for brevity
    {
        Console.WriteLine($"Member: {member.Name}, Type: {member.MemberType}");
    }
}

// Examining member details
public void ExamineMemberDetails()
{
    Type type = typeof(string);
    
    // Examine a method
    MethodInfo method = type.GetMethod("Substring", new[] { typeof(int), typeof(int) });
    
    Console.WriteLine($"Method: {method.Name}");
    Console.WriteLine($"Return type: {method.ReturnType.Name}");
    Console.WriteLine($"Is public: {method.IsPublic}");
    Console.WriteLine($"Is static: {method.IsStatic}");
    Console.WriteLine($"Is virtual: {method.IsVirtual}");
    
    // Examine parameters
    ParameterInfo[] parameters = method.GetParameters();
    foreach (var param in parameters)
    {
        Console.WriteLine($"Parameter: {param.Name}, Type: {param.ParameterType.Name}");
    }
    
    // Examine a property
    PropertyInfo property = type.GetProperty("Length");
    
    Console.WriteLine($"Property: {property.Name}");
    Console.WriteLine($"Type: {property.PropertyType.Name}");
    Console.WriteLine($"Can read: {property.CanRead}");
    Console.WriteLine($"Can write: {property.CanWrite}");
    
    // Get the getter and setter methods
    MethodInfo getter = property.GetGetMethod();
    MethodInfo setter = property.GetSetMethod();
}
```

### Attributes

```csharp
// Define a custom attribute
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
public class CustomAttribute : Attribute
{
    public string Description { get; }
    public int Priority { get; }
    
    public CustomAttribute(string description, int priority = 0)
    {
        Description = description;
        Priority = priority;
    }
}

// Apply the attribute
[Custom("This is a test class", Priority = 1)]
public class TestClass
{
    [Custom("This is a test method", Priority = 2)]
    public void TestMethod() { }
    
    [Custom("First description")]
    [Custom("Second description", Priority = 3)]
    public void MultipleAttributes() { }
}

// Reading attributes
public void ReadAttributes()
{
    Type type = typeof(TestClass);
    
    // Check if the type has a specific attribute
    bool hasAttribute = type.IsDefined(typeof(CustomAttribute), false);
    
    // Get a specific attribute
    CustomAttribute attribute = (CustomAttribute)type.GetCustomAttribute(typeof(CustomAttribute));
    
    if (attribute != null)
    {
        Console.WriteLine($"Description: {attribute.Description}, Priority: {attribute.Priority}");
    }
    
    // Get all attributes of a specific type
    CustomAttribute[] attributes = (CustomAttribute[])type.GetCustomAttributes(typeof(CustomAttribute), false);
    
    foreach (var attr in attributes)
    {
        Console.WriteLine($"Description: {attr.Description}, Priority: {attr.Priority}");
    }
    
    // Get attributes from a method
    MethodInfo method = type.GetMethod("MultipleAttributes");
    CustomAttribute[] methodAttributes = (CustomAttribute[])method.GetCustomAttributes(typeof(CustomAttribute), false);
    
    foreach (var attr in methodAttributes)
    {
        Console.WriteLine($"Method attribute - Description: {attr.Description}, Priority: {attr.Priority}");
    }
}

// Common built-in attributes
public void BuiltInAttributes()
{
    // Obsolete attribute
    [Obsolete("This method is obsolete. Use NewMethod instead.")]
    void OldMethod() { }
    
    // Conditional attribute
    [Conditional("DEBUG")]
    void DebugMethod() { }
    
    // CallerMemberName attribute
    void LogMethod([CallerMemberName] string memberName = "")
    {
        Console.WriteLine($"Called from: {memberName}");
    }
    
    // DebuggerDisplay attribute
    [DebuggerDisplay("Person: {FirstName} {LastName}")]
    class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
```

## Dynamic Invocation

### Creating Instances

```csharp
// Creating instances dynamically
public void CreateInstances()
{
    // Create an instance using Activator
    object stringInstance = Activator.CreateInstance(typeof(string), new object[] { "Hello" });
    Console.WriteLine(stringInstance);  // "Hello"
    
    // Create an instance of a generic type
    Type listType = typeof(List<>).MakeGenericType(typeof(int));
    object listInstance = Activator.CreateInstance(listType);
    
    // Create an instance with a non-public constructor
    BindingFlags flags = BindingFlags.Instance | BindingFlags.NonPublic;
    object instance = Activator.CreateInstance(typeof(MyClass), flags, null, new object[] { "secret" }, null);
    
    // Create an instance using a type name
    object objByName = Activator.CreateInstance("System.Text.StringBuilder", "Initial text");
    
    // Create an instance using constructor info
    Type type = typeof(StringBuilder);
    ConstructorInfo ctor = type.GetConstructor(new[] { typeof(string) });
    object sbInstance = ctor.Invoke(new object[] { "Constructor invoked" });
}

// Class with a private constructor
public class MyClass
{
    private string _value;
    
    private MyClass(string value)
    {
        _value = value;
    }
    
    public string GetValue() => _value;
}
```

### Invoking Methods

```csharp
// Invoking methods dynamically
public void InvokeMethods()
{
    // Get a method
    Type stringType = typeof(string);
    MethodInfo substringMethod = stringType.GetMethod("Substring", new[] { typeof(int), typeof(int) });
    
    // Create an instance
    string text = "Hello, World!";
    
    // Invoke the method
    object result = substringMethod.Invoke(text, new object[] { 7, 5 });
    Console.WriteLine(result);  // "World"
    
    // Invoke a static method
    Type mathType = typeof(Math);
    MethodInfo maxMethod = mathType.GetMethod("Max", new[] { typeof(int), typeof(int) });
    object maxResult = maxMethod.Invoke(null, new object[] { 10, 20 });
    Console.WriteLine(maxResult);  // 20
    
    // Invoke a generic method
    Type listType = typeof(List<int>);
    var list = new List<int> { 1, 2, 3 };
    MethodInfo containsMethod = listType.GetMethod("Contains");
    bool containsResult = (bool)containsMethod.Invoke(list, new object[] { 2 });
    Console.WriteLine(containsResult);  // true
    
    // Invoke a method with ref/out parameters
    Type intType = typeof(int);
    MethodInfo tryParseMethod = intType.GetMethod("TryParse", new[] { typeof(string), typeof(int).MakeByRefType() });
    
    object[] parameters = { "42", null };
    bool parseResult = (bool)tryParseMethod.Invoke(null, parameters);
    int parsedValue = (int)parameters[1];
    
    Console.WriteLine($"Parse result: {parseResult}, Value: {parsedValue}");
}
```

### Accessing Properties and Fields

```csharp
// Accessing properties and fields dynamically
public void AccessPropertiesAndFields()
{
    // Create an instance
    var person = new Person { Name = "John", Age = 30 };
    Type type = person.GetType();
    
    // Get and set a property
    PropertyInfo nameProperty = type.GetProperty("Name");
    string name = (string)nameProperty.GetValue(person);
    Console.WriteLine($"Name: {name}");
    
    nameProperty.SetValue(person, "Jane");
    Console.WriteLine($"New name: {person.Name}");
    
    // Get and set a field
    FieldInfo ageField = type.GetField("_age", BindingFlags.NonPublic | BindingFlags.Instance);
    int age = (int)ageField.GetValue(person);
    Console.WriteLine($"Age (field): {age}");
    
    ageField.SetValue(person, 25);
    Console.WriteLine($"New age: {person.Age}");
    
    // Access an indexed property
    var list = new List<string> { "One", "Two", "Three" };
    Type listType = list.GetType();
    PropertyInfo indexerProperty = listType.GetProperty("Item");
    
    string item = (string)indexerProperty.GetValue(list, new object[] { 1 });
    Console.WriteLine($"Item at index 1: {item}");
    
    indexerProperty.SetValue(list, "Modified", new object[] { 1 });
    Console.WriteLine($"Modified item: {list[1]}");
}

public class Person
{
    private int _age;
    
    public string Name { get; set; }
    
    public int Age
    {
        get => _age;
        set => _age = value;
    }
}
```

## Assembly Manipulation

### Loading Assemblies

```csharp
// Loading assemblies
public void LoadAssemblies()
{
    // Get the currently executing assembly
    Assembly currentAssembly = Assembly.GetExecutingAssembly();
    
    // Get the assembly that contains a specific type
    Assembly typeAssembly = typeof(string).Assembly;
    
    // Load an assembly by name
    Assembly namedAssembly = Assembly.Load("System.Text.Json");
    
    // Load an assembly from a file
    Assembly fileAssembly = Assembly.LoadFrom(@"C:\Path\To\MyAssembly.dll");
    
    // Load an assembly from a byte array
    byte[] assemblyBytes = File.ReadAllBytes(@"C:\Path\To\MyAssembly.dll");
    Assembly byteAssembly = Assembly.Load(assemblyBytes);
    
    // Get all loaded assemblies in the current application domain
    Assembly[] loadedAssemblies = AppDomain.CurrentDomain.GetAssemblies();
    
    // Display assembly information
    Console.WriteLine($"Assembly name: {currentAssembly.GetName().Name}");
    Console.WriteLine($"Assembly version: {currentAssembly.GetName().Version}");
    Console.WriteLine($"Assembly location: {currentAssembly.Location}");
}
```

### Exploring Assemblies

```csharp
// Exploring assembly contents
public void ExploreAssembly(Assembly assembly)
{
    // Get all types defined in the assembly
    Type[] types = assembly.GetTypes();
    
    Console.WriteLine($"Assembly: {assembly.GetName().Name}");
    Console.WriteLine($"Types count: {types.Length}");
    
    // Group types by namespace
    var typesByNamespace = types
        .GroupBy(t => t.Namespace ?? "<No Namespace>")
        .OrderBy(g => g.Key);
    
    foreach (var group in typesByNamespace)
    {
        Console.WriteLine($"Namespace: {group.Key}");
        
        foreach (var type in group.OrderBy(t => t.Name).Take(5))  // Show first 5 for brevity
        {
            Console.WriteLine($"  - {type.Name} ({GetTypeCategory(type)})");
        }
        
        if (group.Count() > 5)
        {
            Console.WriteLine($"  - ... and {group.Count() - 5} more");
        }
    }
    
    // Get assembly metadata
    Console.WriteLine("\nAssembly Metadata:");
    foreach (var attribute in assembly.GetCustomAttributes())
    {
        Console.WriteLine($"  - {attribute.GetType().Name}");
    }
}

private string GetTypeCategory(Type type)
{
    if (type.IsClass) return "class";
    if (type.IsInterface) return "interface";
    if (type.IsEnum) return "enum";
    if (type.IsValueType && !type.IsEnum) return "struct";
    if (type.IsGenericTypeDefinition) return "generic";
    return "other";
}

// Example usage
public void AssemblyExplorationExample()
{
    // Explore the System.Text.Json assembly
    Assembly jsonAssembly = Assembly.Load("System.Text.Json");
    ExploreAssembly(jsonAssembly);
    
    // Explore the current assembly
    ExploreAssembly(Assembly.GetExecutingAssembly());
}
```

## Emit and Dynamic Code Generation

### Dynamic Method Generation

```csharp
// Creating a dynamic method
public void CreateDynamicMethod()
{
    // Define a dynamic method that adds two integers
    DynamicMethod addMethod = new DynamicMethod(
        "Add",                  // Method name
        typeof(int),            // Return type
        new[] { typeof(int), typeof(int) },  // Parameter types
        typeof(Program).Module   // Module where the method will be defined
    );
    
    // Get an IL generator
    ILGenerator il = addMethod.GetILGenerator();
    
    // Generate IL code
    il.Emit(OpCodes.Ldarg_0);   // Load first argument
    il.Emit(OpCodes.Ldarg_1);   // Load second argument
    il.Emit(OpCodes.Add);       // Add them
    il.Emit(OpCodes.Ret);       // Return the result
    
    // Create a delegate for the method
    var addDelegate = (Func<int, int, int>)addMethod.CreateDelegate(typeof(Func<int, int, int>));
    
    // Invoke the dynamic method
    int result = addDelegate(10, 20);
    Console.WriteLine($"10 + 20 = {result}");
}
```

### Expression Trees

```csharp
// Working with expression trees
public void ExpressionTreeExamples()
{
    // Create an expression tree that represents the lambda: (x, y) => x + y
    ParameterExpression x = Expression.Parameter(typeof(int), "x");
    ParameterExpression y = Expression.Parameter(typeof(int), "y");
    BinaryExpression add = Expression.Add(x, y);
    
    Expression<Func<int, int, int>> addExpr = Expression.Lambda<Func<int, int, int>>(
        add,
        x, y
    );
    
    // Compile the expression tree into a delegate
    Func<int, int, int> addFunc = addExpr.Compile();
    
    // Invoke the delegate
    int result = addFunc(10, 20);
    Console.WriteLine($"10 + 20 = {result}");
    
    // Create a more complex expression tree
    // (x, y) => x * y + 5
    BinaryExpression multiply = Expression.Multiply(x, y);
    ConstantExpression constant = Expression.Constant(5, typeof(int));
    BinaryExpression addConstant = Expression.Add(multiply, constant);
    
    Expression<Func<int, int, int>> complexExpr = Expression.Lambda<Func<int, int, int>>(
        addConstant,
        x, y
    );
    
    // Compile and invoke
    Func<int, int, int> complexFunc = complexExpr.Compile();
    int complexResult = complexFunc(10, 20);
    Console.WriteLine($"10 * 20 + 5 = {complexResult}");
    
    // Analyzing an expression tree
    Console.WriteLine($"Expression: {complexExpr}");
    Console.WriteLine($"Node type: {complexExpr.Body.NodeType}");
    Console.WriteLine($"Return type: {complexExpr.ReturnType}");
    
    // Modifying an expression tree
    // Change (x * y + 5) to (x * y - 5)
    BinaryExpression subtract = Expression.Subtract(multiply, constant);
    Expression<Func<int, int, int>> modifiedExpr = Expression.Lambda<Func<int, int, int>>(
        subtract,
        x, y
    );
    
    Func<int, int, int> modifiedFunc = modifiedExpr.Compile();
    int modifiedResult = modifiedFunc(10, 20);
    Console.WriteLine($"10 * 20 - 5 = {modifiedResult}");
}
```

## Dynamic Language Runtime (DLR)

### Dynamic Type

```csharp
// Using the dynamic type
public void DynamicTypeExamples()
{
    // Create a dynamic object
    dynamic dynamicObj = new ExpandoObject();
    
    // Add properties dynamically
    dynamicObj.Name = "John";
    dynamicObj.Age = 30;
    
    // Call methods dynamically
    Console.WriteLine($"Name: {dynamicObj.Name}, Age: {dynamicObj.Age}");
    
    // Add a method dynamically
    ((IDictionary<string, object>)dynamicObj)["Greet"] = new Func<string>(() => $"Hello, {dynamicObj.Name}!");
    
    // Call the dynamic method
    Console.WriteLine(dynamicObj.Greet());
    
    // Dynamic dispatch
    ProcessObject("Hello");  // Calls the string overload
    ProcessObject(42);       // Calls the int overload
    ProcessObject(dynamicObj);  // Resolved at runtime
}

public void ProcessObject(string value)
{
    Console.WriteLine($"Processing string: {value}");
}

public void ProcessObject(int value)
{
    Console.WriteLine($"Processing int: {value}");
}

public void ProcessObject(dynamic value)
{
    Console.WriteLine($"Processing dynamic: {value.GetType().Name}");
}
```

### Custom Dynamic Objects

```csharp
// Creating a custom dynamic object
public class DynamicDictionary : DynamicObject
{
    private readonly Dictionary<string, object> _dictionary = new Dictionary<string, object>();
    
    // Override TryGetMember to handle property access
    public override bool TryGetMember(GetMemberBinder binder, out object result)
    {
        string name = binder.Name;
        return _dictionary.TryGetValue(name, out result);
    }
    
    // Override TrySetMember to handle property assignment
    public override bool TrySetMember(SetMemberBinder binder, out object result)
    {
        _dictionary[binder.Name] = result;
        return true;
    }
    
    // Override TryInvokeMember to handle method calls
    public override bool TryInvokeMember(InvokeMemberBinder binder, object[] args, out object result)
    {
        if (binder.Name == "Add" && args.Length == 2 && args[0] is string)
        {
            _dictionary[(string)args[0]] = args[1];
            result = null;
            return true;
        }
        
        return base.TryInvokeMember(binder, args, out result);
    }
    
    // Override TryConvert to handle type conversions
    public override bool TryConvert(ConvertBinder binder, out object result)
    {
        if (binder.Type == typeof(IDictionary<string, object>))
        {
            result = _dictionary;
            return true;
        }
        
        return base.TryConvert(binder, out result);
    }
}

// Using the custom dynamic object
public void CustomDynamicObjectExample()
{
    dynamic obj = new DynamicDictionary();
    
    // Set properties
    obj.Name = "John";
    obj.Age = 30;
    
    // Get properties
    Console.WriteLine($"Name: {obj.Name}, Age: {obj.Age}");
    
    // Call a method
    obj.Add("Location", "New York");
    Console.WriteLine($"Location: {obj.Location}");
    
    // Convert to dictionary
    IDictionary<string, object> dict = obj;
    foreach (var kvp in dict)
    {
        Console.WriteLine($"{kvp.Key}: {kvp.Value}");
    }
}
```

## Best Practices

### Performance Considerations

```csharp
// Performance considerations with reflection
public void ReflectionPerformance()
{
    // Slow: Using reflection for each call
    public void SlowMethod()
    {
        Type type = typeof(string);
        MethodInfo method = type.GetMethod("Substring", new[] { typeof(int), typeof(int) });
        
        for (int i = 0; i < 1000; i++)
        {
            string text = "Hello, World!";
            object result = method.Invoke(text, new object[] { 0, 5 });
        }
    }
    
    // Better: Cache the MethodInfo
    public void BetterMethod()
    {
        Type type = typeof(string);
        MethodInfo method = type.GetMethod("Substring", new[] { typeof(int), typeof(int) });
        
        for (int i = 0; i < 1000; i++)
        {
            string text = "Hello, World!";
            object result = method.Invoke(text, new object[] { 0, 5 });
        }
    }
    
    // Best: Create a delegate
    public void BestMethod()
    {
        Type type = typeof(string);
        MethodInfo method = type.GetMethod("Substring", new[] { typeof(int), typeof(int) });
        
        // Create a delegate once
        var substringDelegate = (Func<string, int, int, string>)Delegate.CreateDelegate(
            typeof(Func<string, int, int, string>),
            method
        );
        
        for (int i = 0; i < 1000; i++)
        {
            string text = "Hello, World!";
            string result = substringDelegate(text, 0, 5);
        }
    }
}

// Caching reflection information
public class ReflectionCache
{
    private static readonly Dictionary<Type, Dictionary<string, PropertyInfo>> PropertyCache = 
        new Dictionary<Type, Dictionary<string, PropertyInfo>>();
    
    public static PropertyInfo GetProperty(Type type, string propertyName)
    {
        // Check if the type is in the cache
        if (!PropertyCache.TryGetValue(type, out var properties))
        {
            // Add the type to the cache
            properties = new Dictionary<string, PropertyInfo>();
            PropertyCache[type] = properties;
            
            // Cache all properties of the type
            foreach (var prop in type.GetProperties())
            {
                properties[prop.Name] = prop;
            }
        }
        
        // Return the property from the cache
        return properties.TryGetValue(propertyName, out var property) ? property : null;
    }
}
```

### Security Considerations

```csharp
// Security considerations with reflection
public void ReflectionSecurity()
{
    // Restrict reflection access with ReflectionPermission
    try
    {
        // Request permission to use reflection
        PermissionSet permSet = new PermissionSet(PermissionState.None);
        permSet.AddPermission(new ReflectionPermission(ReflectionPermissionFlag.MemberAccess));
        permSet.Demand();
        
        // Reflection code here...
    }
    catch (SecurityException ex)
    {
        Console.WriteLine($"Security exception: {ex.Message}");
    }
    
    // Use the Assert method to temporarily elevate permissions
    try
    {
        ReflectionPermission permission = new ReflectionPermission(ReflectionPermissionFlag.MemberAccess);
        permission.Assert();
        
        // Reflection code here...
    }
    finally
    {
        // Revert the permission assertion
        CodeAccessPermission.RevertAssert();
    }
}

// Safely accessing private members
public void SafeReflection()
{
    // Consider using accessor methods instead of direct field access
    public class SafeAccessor
    {
        private readonly object _target;
        private readonly PropertyInfo _property;
        
        public SafeAccessor(object target, string propertyName)
        {
            _target = target;
            _property = target.GetType().GetProperty(propertyName, 
                BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance);
            
            if (_property == null)
            {
                throw new ArgumentException($"Property {propertyName} not found");
            }
        }
        
        public object GetValue()
        {
            return _property.GetValue(_target);
        }
        
        public void SetValue(object value)
        {
            if (!_property.CanWrite)
            {
                throw new InvalidOperationException("Property is read-only");
            }
            
            _property.SetValue(_target, value);
        }
    }
}
```

## Resources

- [Reflection in .NET (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/reflection)
- [Type Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.type)
- [Reflection and Generic Types (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/reflection-and-generic-types)
- [Dynamic Language Runtime Overview (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/reflection-and-codedom/dynamic-language-runtime-overview)
- [Expression Trees (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/expression-trees/)

# 17. Serialization

Serialization is the process of converting objects into a format that can be stored or transmitted, while deserialization is the reverse process. C# provides several serialization mechanisms for different formats and use cases.

## JSON Serialization

### System.Text.Json (Modern)

```csharp
// Basic JSON serialization with System.Text.Json
public void BasicJsonSerialization()
{
    // Create an object to serialize
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1),
        Address = new Address
        {
            Street = "123 Main St",
            City = "Anytown",
            ZipCode = "12345"
        },
        PhoneNumbers = new List<string> { "555-1234", "555-5678" }
    };
    
    // Serialize to JSON string
    string json = JsonSerializer.Serialize(person);
    Console.WriteLine(json);
    
    // Deserialize from JSON string
    Person deserializedPerson = JsonSerializer.Deserialize<Person>(json);
    Console.WriteLine($"Deserialized: {deserializedPerson.Name}");
    
    // Serialize to file
    File.WriteAllText("person.json", json);
    
    // Deserialize from file
    string fileJson = File.ReadAllText("person.json");
    Person fileDeserializedPerson = JsonSerializer.Deserialize<Person>(fileJson);
}

// Customizing JSON serialization
public void CustomJsonSerialization()
{
    var options = new JsonSerializerOptions
    {
        WriteIndented = true,                      // Pretty printing
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,  // camelCase property names
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,  // Skip null values
        Converters = { new JsonStringEnumConverter() }  // Serialize enums as strings
    };
    
    var person = new Person { Name = "Jane Doe", Status = UserStatus.Active };
    
    string json = JsonSerializer.Serialize(person, options);
    Console.WriteLine(json);
    
    // Deserialize with options
    Person deserializedPerson = JsonSerializer.Deserialize<Person>(json, options);
}

// Using JSON attributes
public class Person
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    [JsonPropertyName("email_address")]
    public string Email { get; set; }
    
    [JsonIgnore]
    public string Password { get; set; }
    
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public UserStatus Status { get; set; }
    
    [JsonInclude]
    public DateTime BirthDate { get; private set; }
    
    public Address Address { get; set; }
    
    public List<string> PhoneNumbers { get; set; }
}

public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
    public string ZipCode { get; set; }
}

public enum UserStatus
{
    Inactive,
    Active,
    Suspended
}

// Working with JSON documents
public void JsonDocumentExample()
{
    string json = @"{
        ""name"": ""John Doe"",
        ""age"": 30,
        ""address"": {
            ""street"": ""123 Main St"",
            ""city"": ""Anytown""
        },
        ""phoneNumbers"": [""555-1234"", ""555-5678""]
    }";
    
    // Parse the JSON document
    using (JsonDocument document = JsonDocument.Parse(json))
    {
        JsonElement root = document.RootElement;
        
        // Access properties
        string name = root.GetProperty("name").GetString();
        int age = root.GetProperty("age").GetInt32();
        
        // Access nested properties
        JsonElement address = root.GetProperty("address");
        string street = address.GetProperty("street").GetString();
        
        // Access array elements
        JsonElement phoneNumbers = root.GetProperty("phoneNumbers");
        string firstPhone = phoneNumbers[0].GetString();
        
        Console.WriteLine($"Name: {name}, Age: {age}");
        Console.WriteLine($"Street: {street}");
        Console.WriteLine($"First phone: {firstPhone}");
        
        // Check if a property exists
        bool hasEmail = root.TryGetProperty("email", out JsonElement email);
        
        // Enumerate array elements
        foreach (JsonElement phone in phoneNumbers.EnumerateArray())
        {
            Console.WriteLine($"Phone: {phone.GetString()}");
        }
        
        // Enumerate object properties
        foreach (JsonProperty property in root.EnumerateObject())
        {
            Console.WriteLine($"Property: {property.Name}, Type: {property.Value.ValueKind}");
        }
    }
}

// Creating JSON with Utf8JsonWriter
public void CreateJsonWithWriter()
{
    using (MemoryStream stream = new MemoryStream())
    {
        using (Utf8JsonWriter writer = new Utf8JsonWriter(stream, new JsonWriterOptions { Indented = true }))
        {
            writer.WriteStartObject();
            
            writer.WriteString("name", "John Doe");
            writer.WriteNumber("age", 30);
            
            writer.WriteStartObject("address");
            writer.WriteString("street", "123 Main St");
            writer.WriteString("city", "Anytown");
            writer.WriteEndObject();
            
            writer.WriteStartArray("phoneNumbers");
            writer.WriteStringValue("555-1234");
            writer.WriteStringValue("555-5678");
            writer.WriteEndArray();
            
            writer.WriteEndObject();
        }
        
        string json = Encoding.UTF8.GetString(stream.ToArray());
        Console.WriteLine(json);
    }
}

// Custom JSON converter
public class DateTimeConverter : JsonConverter<DateTime>
{
    public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        if (reader.TokenType != JsonTokenType.String)
        {
            throw new JsonException("Expected string value for DateTime");
        }
        
        string dateString = reader.GetString();
        return DateTime.Parse(dateString);
    }
    
    public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
    {
        writer.WriteStringValue(value.ToString("yyyy-MM-dd"));
    }
}

// Using the custom converter
public void UseCustomConverter()
{
    var options = new JsonSerializerOptions
    {
        WriteIndented = true,
        Converters = { new DateTimeConverter() }
    };
    
    var person = new Person { Name = "John", BirthDate = new DateTime(1980, 1, 1) };
    string json = JsonSerializer.Serialize(person, options);
    Console.WriteLine(json);
}
```

### Newtonsoft.Json (Json.NET)

```csharp
// Basic JSON serialization with Newtonsoft.Json
public void BasicNewtonsoftJsonSerialization()
{
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1)
    };
    
    // Serialize to JSON string
    string json = JsonConvert.SerializeObject(person);
    Console.WriteLine(json);
    
    // Deserialize from JSON string
    Person deserializedPerson = JsonConvert.DeserializeObject<Person>(json);
    Console.WriteLine($"Deserialized: {deserializedPerson.Name}");
    
    // Pretty print
    string prettyJson = JsonConvert.SerializeObject(person, Formatting.Indented);
    Console.WriteLine(prettyJson);
}

// Customizing Newtonsoft.Json serialization
public void CustomNewtonsoftJsonSerialization()
{
    var settings = new JsonSerializerSettings
    {
        Formatting = Formatting.Indented,
        NullValueHandling = NullValueHandling.Ignore,
        DefaultValueHandling = DefaultValueHandling.Ignore,
        ContractResolver = new CamelCasePropertyNamesContractResolver(),
        Converters = { new StringEnumConverter() }
    };
    
    var person = new Person { Name = "Jane Doe", Status = UserStatus.Active };
    
    string json = JsonConvert.SerializeObject(person, settings);
    Console.WriteLine(json);
    
    // Deserialize with settings
    Person deserializedPerson = JsonConvert.DeserializeObject<Person>(json, settings);
}

// Using Newtonsoft.Json attributes
public class PersonWithAttributes
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    [JsonProperty("email_address")]
    public string Email { get; set; }
    
    [JsonIgnore]
    public string Password { get; set; }
    
    [JsonConverter(typeof(StringEnumConverter))]
    public UserStatus Status { get; set; }
    
    [JsonProperty]
    public DateTime BirthDate { get; private set; }
    
    [JsonExtensionData]
    public Dictionary<string, JToken> AdditionalData { get; set; }
}

// Working with JObject and LINQ to JSON
public void LinqToJsonExample()
{
    string json = @"{
        ""name"": ""John Doe"",
        ""age"": 30,
        ""address"": {
            ""street"": ""123 Main St"",
            ""city"": ""Anytown""
        },
        ""phoneNumbers"": [""555-1234"", ""555-5678""]
    }";
    
    // Parse JSON to JObject
    JObject jObject = JObject.Parse(json);
    
    // Access properties
    string name = (string)jObject["name"];
    int age = (int)jObject["age"];
    
    // Access nested properties
    string street = (string)jObject["address"]["street"];
    
    // Access array elements
    string firstPhone = (string)jObject["phoneNumbers"][0];
    
    Console.WriteLine($"Name: {name}, Age: {age}");
    Console.WriteLine($"Street: {street}");
    Console.WriteLine($"First phone: {firstPhone}");
    
    // Modify properties
    jObject["age"] = 31;
    jObject["address"]["zipCode"] = "12345";
    
    // Add new properties
    jObject["email"] = "john.doe@example.com";
    
    // Remove properties
    jObject.Remove("phoneNumbers");
    
    // Convert back to JSON
    string modifiedJson = jObject.ToString();
    Console.WriteLine(modifiedJson);
    
    // Create a new JObject
    JObject newObject = new JObject
    {
        ["name"] = "Jane Doe",
        ["age"] = 28,
        ["address"] = new JObject
        {
            ["street"] = "456 Oak Ave",
            ["city"] = "Othertown"
        },
        ["phoneNumbers"] = new JArray("555-4321", "555-8765")
    };
    
    string newJson = newObject.ToString();
    Console.WriteLine(newJson);
}

// Custom JSON converter for Newtonsoft.Json
public class CustomDateTimeConverter : JsonConverter
{
    public override bool CanConvert(Type objectType)
    {
        return objectType == typeof(DateTime);
    }
    
    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
    {
        if (reader.TokenType != JsonToken.String)
        {
            throw new JsonSerializationException("Expected string value for DateTime");
        }
        
        string dateString = (string)reader.Value;
        return DateTime.Parse(dateString);
    }
    
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
    {
        writer.WriteValue(((DateTime)value).ToString("yyyy-MM-dd"));
    }
}
```

## XML Serialization

### XmlSerializer

```csharp
// Basic XML serialization
public void BasicXmlSerialization()
{
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1),
        Address = new Address
        {
            Street = "123 Main St",
            City = "Anytown",
            ZipCode = "12345"
        },
        PhoneNumbers = new List<string> { "555-1234", "555-5678" }
    };
    
    // Create XML serializer
    XmlSerializer serializer = new XmlSerializer(typeof(Person));
    
    // Serialize to string
    using (StringWriter writer = new StringWriter())
    {
        serializer.Serialize(writer, person);
        string xml = writer.ToString();
        Console.WriteLine(xml);
    }
    
    // Serialize to file
    using (FileStream fs = new FileStream("person.xml", FileMode.Create))
    {
        serializer.Serialize(fs, person);
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("person.xml", FileMode.Open))
    {
        Person deserializedPerson = (Person)serializer.Deserialize(fs);
        Console.WriteLine($"Deserialized: {deserializedPerson.Name}");
    }
}

// Using XML attributes
[XmlRoot("Person")]
public class PersonWithXmlAttributes
{
    [XmlAttribute("id")]
    public int Id { get; set; }
    
    [XmlElement("FullName")]
    public string Name { get; set; }
    
    [XmlElement("EmailAddress")]
    public string Email { get; set; }
    
    [XmlIgnore]
    public string Password { get; set; }
    
    [XmlElement("DOB")]
    public DateTime BirthDate { get; set; }
    
    [XmlElement("HomeAddress")]
    public Address Address { get; set; }
    
    [XmlArray("ContactNumbers")]
    [XmlArrayItem("Phone")]
    public List<string> PhoneNumbers { get; set; }
    
    [XmlElement(Order = 1)]
    public string FirstElement { get; set; }
    
    [XmlElement(Order = 2)]
    public string SecondElement { get; set; }
}

// Customizing XML serialization
public void CustomXmlSerialization()
{
    var person = new PersonWithXmlAttributes
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1),
        Address = new Address
        {
            Street = "123 Main St",
            City = "Anytown",
            ZipCode = "12345"
        },
        PhoneNumbers = new List<string> { "555-1234", "555-5678" },
        FirstElement = "First",
        SecondElement = "Second"
    };
    
    XmlSerializer serializer = new XmlSerializer(typeof(PersonWithXmlAttributes));
    
    // Set up XML writer settings
    XmlWriterSettings settings = new XmlWriterSettings
    {
        Indent = true,
        IndentChars = "    ",
        OmitXmlDeclaration = false,
        Encoding = Encoding.UTF8
    };
    
    // Serialize with custom settings
    using (StringWriter stringWriter = new StringWriter())
    using (XmlWriter xmlWriter = XmlWriter.Create(stringWriter, settings))
    {
        // Add XML namespaces
        XmlSerializerNamespaces namespaces = new XmlSerializerNamespaces();
        namespaces.Add("", "");  // Remove default namespace
        namespaces.Add("custom", "http://example.com/custom");
        
        serializer.Serialize(xmlWriter, person, namespaces);
        string xml = stringWriter.ToString();
        Console.WriteLine(xml);
    }
}

// Handling complex XML serialization
public void ComplexXmlSerialization()
{
    // Serializing a collection
    var people = new List<Person>
    {
        new Person { Id = 1, Name = "John Doe" },
        new Person { Id = 2, Name = "Jane Doe" }
    };
    
    XmlSerializer collectionSerializer = new XmlSerializer(typeof(List<Person>));
    
    using (StringWriter writer = new StringWriter())
    {
        collectionSerializer.Serialize(writer, people);
        string xml = writer.ToString();
        Console.WriteLine(xml);
    }
    
    // Serializing derived types
    XmlSerializer derivedSerializer = new XmlSerializer(
        typeof(Person),
        new Type[] { typeof(Employee), typeof(Customer) }
    );
    
    var employee = new Employee { Id = 1, Name = "John Doe", EmployeeId = "E12345" };
    
    using (StringWriter writer = new StringWriter())
    {
        derivedSerializer.Serialize(writer, employee);
        string xml = writer.ToString();
        Console.WriteLine(xml);
    }
}

// Derived classes for XML serialization
[XmlInclude(typeof(Employee))]
[XmlInclude(typeof(Customer))]
public class Person
{
    public int Id { get; set; }
    public string Name { get; set; }
    // Other properties...
}

public class Employee : Person
{
    public string EmployeeId { get; set; }
    public string Department { get; set; }
}

public class Customer : Person
{
    public string CustomerId { get; set; }
    public decimal CreditLimit { get; set; }
}
```

### System.Xml.Linq (LINQ to XML)

```csharp
// Creating XML with LINQ to XML
public void CreateXmlWithLinq()
{
    // Create an XML document
    XDocument document = new XDocument(
        new XDeclaration("1.0", "UTF-8", "yes"),
        new XComment("Person information"),
        new XElement("Person",
            new XAttribute("id", 1),
            new XElement("Name", "John Doe"),
            new XElement("Email", "john.doe@example.com"),
            new XElement("BirthDate", new DateTime(1980, 1, 1).ToString("yyyy-MM-dd")),
            new XElement("Address",
                new XElement("Street", "123 Main St"),
                new XElement("City", "Anytown"),
                new XElement("ZipCode", "12345")
            ),
            new XElement("PhoneNumbers",
                new XElement("Phone", "555-1234"),
                new XElement("Phone", "555-5678")
            )
        )
    );
    
    // Save to string
    string xml = document.ToString();
    Console.WriteLine(xml);
    
    // Save to file
    document.Save("person_linq.xml");
}

// Querying XML with LINQ to XML
public void QueryXmlWithLinq()
{
    // Load XML from file
    XDocument document = XDocument.Load("person_linq.xml");
    
    // Get the root element
    XElement person = document.Root;
    
    // Get element values
    string name = person.Element("Name").Value;
    string email = person.Element("Email").Value;
    
    Console.WriteLine($"Name: {name}, Email: {email}");
    
    // Get attribute value
    int id = (int)person.Attribute("id");
    Console.WriteLine($"ID: {id}");
    
    // Get nested element value
    string street = person.Element("Address").Element("Street").Value;
    Console.WriteLine($"Street: {street}");
    
    // Query with LINQ
    var phoneNumbers = from phone in person.Element("PhoneNumbers").Elements("Phone")
                      select phone.Value;
    
    Console.WriteLine("Phone numbers:");
    foreach (string phone in phoneNumbers)
    {
        Console.WriteLine($"  {phone}");
    }
    
    // Modify elements
    person.Element("Name").Value = "Jane Doe";
    
    // Add new elements
    person.Add(new XElement("Status", "Active"));
    
    // Remove elements
    person.Element("PhoneNumbers").Remove();
    
    // Save changes
    document.Save("person_modified.xml");
}

// Transforming XML with LINQ
public void TransformXmlWithLinq()
{
    XDocument document = XDocument.Load("person_linq.xml");
    
    // Transform to a new XML structure
    XDocument transformed = new XDocument(
        new XElement("Contact",
            new XElement("FullName", (string)document.Root.Element("Name")),
            new XElement("ContactInfo",
                new XElement("EmailAddress", (string)document.Root.Element("Email")),
                new XElement("PhoneNumbers",
                    from phone in document.Root.Element("PhoneNumbers").Elements("Phone")
                    select new XElement("Number", phone.Value)
                )
            ),
            new XElement("Location",
                new XElement("Address", (string)document.Root.Element("Address").Element("Street")),
                new XElement("City", (string)document.Root.Element("Address").Element("City")),
                new XElement("PostalCode", (string)document.Root.Element("Address").Element("ZipCode"))
            )
        )
    );
    
    Console.WriteLine(transformed.ToString());
}
```

## Binary Serialization

### BinaryFormatter (Legacy)

```csharp
// Note: BinaryFormatter is obsolete and not recommended for new code due to security issues
// Basic binary serialization
public void BasicBinarySerialization()
{
    // Create a serializable object
    [Serializable]
    public class SerializablePerson
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        
        [NonSerialized]
        private string _temporaryData;
        
        public SerializablePerson() { }
        
        public SerializablePerson(int id, string name, DateTime birthDate)
        {
            Id = id;
            Name = name;
            BirthDate = birthDate;
        }
    }
    
    var person = new SerializablePerson(1, "John Doe", new DateTime(1980, 1, 1));
    
    // Serialize to file
    using (FileStream fs = new FileStream("person.bin", FileMode.Create))
    {
        BinaryFormatter formatter = new BinaryFormatter();
        formatter.Serialize(fs, person);
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("person.bin", FileMode.Open))
    {
        BinaryFormatter formatter = new BinaryFormatter();
        SerializablePerson deserializedPerson = (SerializablePerson)formatter.Deserialize(fs);
        
        Console.WriteLine($"Deserialized: {deserializedPerson.Name}, Born: {deserializedPerson.BirthDate}");
    }
}

// Custom serialization with ISerializable
[Serializable]
public class CustomSerializablePerson : ISerializable
{
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime BirthDate { get; set; }
    
    // Standard constructor
    public CustomSerializablePerson(int id, string name, DateTime birthDate)
    {
        Id = id;
        Name = name;
        BirthDate = birthDate;
    }
    
    // Deserialization constructor
    protected CustomSerializablePerson(SerializationInfo info, StreamingContext context)
    {
        Id = info.GetInt32("PersonId");
        Name = info.GetString("FullName");
        BirthDate = info.GetDateTime("DOB");
    }
    
    // Serialization method
    public void GetObjectData(SerializationInfo info, StreamingContext context)
    {
        info.AddValue("PersonId", Id);
        info.AddValue("FullName", Name);
        info.AddValue("DOB", BirthDate);
    }
}
```

### Custom Binary Serialization

```csharp
// Custom binary serialization with BinaryReader/BinaryWriter
public void CustomBinarySerialization()
{
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1)
    };
    
    // Serialize to file
    using (FileStream fs = new FileStream("person_custom.bin", FileMode.Create))
    using (BinaryWriter writer = new BinaryWriter(fs))
    {
        // Write data in a specific order
        writer.Write(person.Id);
        writer.Write(person.Name);
        writer.Write(person.Email ?? string.Empty);
        writer.Write(person.BirthDate.Ticks);
        
        // Write a collection
        writer.Write(person.PhoneNumbers?.Count ?? 0);
        if (person.PhoneNumbers != null)
        {
            foreach (string phone in person.PhoneNumbers)
            {
                writer.Write(phone);
            }
        }
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("person_custom.bin", FileMode.Open))
    using (BinaryReader reader = new BinaryReader(fs))
    {
        Person deserializedPerson = new Person
        {
            Id = reader.ReadInt32(),
            Name = reader.ReadString(),
            Email = reader.ReadString(),
            BirthDate = new DateTime(reader.ReadInt64())
        };
        
        int phoneCount = reader.ReadInt32();
        if (phoneCount > 0)
        {
            deserializedPerson.PhoneNumbers = new List<string>();
            for (int i = 0; i < phoneCount; i++)
            {
                deserializedPerson.PhoneNumbers.Add(reader.ReadString());
            }
        }
        
        Console.WriteLine($"Deserialized: {deserializedPerson.Name}, Born: {deserializedPerson.BirthDate}");
    }
}
```

## Data Contract Serialization

### DataContractSerializer

```csharp
// Basic DataContractSerializer usage
public void BasicDataContractSerialization()
{
    // Define a data contract
    [DataContract(Name = "Person", Namespace = "http://example.com/person")]
    public class PersonWithDataContract
    {
        [DataMember(Name = "id", Order = 1)]
        public int Id { get; set; }
        
        [DataMember(Name = "name", Order = 2)]
        public string Name { get; set; }
        
        [DataMember(Name = "email", Order = 3, EmitDefaultValue = false)]
        public string Email { get; set; }
        
        [DataMember(Name = "birthDate", Order = 4)]
        public DateTime BirthDate { get; set; }
        
        [DataMember(Name = "address", Order = 5)]
        public AddressWithDataContract Address { get; set; }
        
        [DataMember(Name = "phoneNumbers", Order = 6)]
        public List<string> PhoneNumbers { get; set; }
        
        // This property won't be serialized
        public string Password { get; set; }
    }
    
    [DataContract(Name = "Address")]
    public class AddressWithDataContract
    {
        [DataMember(Name = "street")]
        public string Street { get; set; }
        
        [DataMember(Name = "city")]
        public string City { get; set; }
        
        [DataMember(Name = "zipCode")]
        public string ZipCode { get; set; }
    }
    
    var person = new PersonWithDataContract
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1),
        Address = new AddressWithDataContract
        {
            Street = "123 Main St",
            City = "Anytown",
            ZipCode = "12345"
        },
        PhoneNumbers = new List<string> { "555-1234", "555-5678" }
    };
    
    // Create serializer
    DataContractSerializer serializer = new DataContractSerializer(typeof(PersonWithDataContract));
    
    // Serialize to file
    using (FileStream fs = new FileStream("person_datacontract.xml", FileMode.Create))
    {
        serializer.WriteObject(fs, person);
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("person_datacontract.xml", FileMode.Open))
    {
        PersonWithDataContract deserializedPerson = 
            (PersonWithDataContract)serializer.ReadObject(fs);
        
        Console.WriteLine($"Deserialized: {deserializedPerson.Name}, Email: {deserializedPerson.Email}");
    }
}

// Handling known types
public void DataContractWithKnownTypes()
{
    [DataContract]
    [KnownType(typeof(EmployeeWithDataContract))]
    [KnownType(typeof(CustomerWithDataContract))]
    public class PersonWithDataContract
    {
        [DataMember]
        public int Id { get; set; }
        
        [DataMember]
        public string Name { get; set; }
    }
    
    [DataContract]
    public class EmployeeWithDataContract : PersonWithDataContract
    {
        [DataMember]
        public string EmployeeId { get; set; }
        
        [DataMember]
        public string Department { get; set; }
    }
    
    [DataContract]
    public class CustomerWithDataContract : PersonWithDataContract
    {
        [DataMember]
        public string CustomerId { get; set; }
        
        [DataMember]
        public decimal CreditLimit { get; set; }
    }
    
    var employee = new EmployeeWithDataContract
    {
        Id = 1,
        Name = "John Doe",
        EmployeeId = "E12345",
        Department = "IT"
    };
    
    // Create serializer with known types
    DataContractSerializer serializer = new DataContractSerializer(
        typeof(PersonWithDataContract),
        new Type[] { typeof(EmployeeWithDataContract), typeof(CustomerWithDataContract) }
    );
    
    // Serialize to file
    using (FileStream fs = new FileStream("employee_datacontract.xml", FileMode.Create))
    {
        serializer.WriteObject(fs, employee);
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("employee_datacontract.xml", FileMode.Open))
    {
        PersonWithDataContract deserializedPerson = 
            (PersonWithDataContract)serializer.ReadObject(fs);
        
        if (deserializedPerson is EmployeeWithDataContract emp)
        {
            Console.WriteLine($"Employee: {emp.Name}, ID: {emp.EmployeeId}, Dept: {emp.Department}");
        }
    }
}
```

### DataContractJsonSerializer

```csharp
// DataContractJsonSerializer usage
public void DataContractJsonSerialization()
{
    var person = new PersonWithDataContract
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1)
    };
    
    // Create serializer
    DataContractJsonSerializer serializer = new DataContractJsonSerializer(typeof(PersonWithDataContract));
    
    // Serialize to memory stream
    using (MemoryStream ms = new MemoryStream())
    {
        serializer.WriteObject(ms, person);
        ms.Position = 0;
        
        // Convert to string
        using (StreamReader reader = new StreamReader(ms))
        {
            string json = reader.ReadToEnd();
            Console.WriteLine(json);
        }
    }
    
    // Serialize to file
    using (FileStream fs = new FileStream("person_datacontract.json", FileMode.Create))
    {
        serializer.WriteObject(fs, person);
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("person_datacontract.json", FileMode.Open))
    {
        PersonWithDataContract deserializedPerson = 
            (PersonWithDataContract)serializer.ReadObject(fs);
        
        Console.WriteLine($"Deserialized: {deserializedPerson.Name}, Email: {deserializedPerson.Email}");
    }
}
```

## Protocol Buffers (protobuf)

### Using Google.Protobuf

```csharp
// Define a .proto file (person.proto)
/*
syntax = "proto3";

package tutorial;

message Person {
  int32 id = 1;
  string name = 2;
  string email = 3;
  
  enum PhoneType {
    MOBILE = 0;
    HOME = 1;
    WORK = 2;
  }
  
  message PhoneNumber {
    string number = 1;
    PhoneType type = 2;
  }
  
  repeated PhoneNumber phones = 4;
  
  message Address {
    string street = 1;
    string city = 2;
    string zip_code = 3;
  }
  
  Address address = 5;
}
*/

// Using the generated code
public void ProtobufSerialization()
{
    // Create a person
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com"
    };
    
    // Add phone numbers
    person.Phones.Add(new Person.Types.PhoneNumber
    {
        Number = "555-1234",
        Type = Person.Types.PhoneType.Home
    });
    
    person.Phones.Add(new Person.Types.PhoneNumber
    {
        Number = "555-5678",
        Type = Person.Types.PhoneType.Mobile
    });
    
    // Add address
    person.Address = new Person.Types.Address
    {
        Street = "123 Main St",
        City = "Anytown",
        ZipCode = "12345"
    };
    
    // Serialize to file
    using (FileStream output = File.Create("person.pb"))
    {
        person.WriteTo(output);
    }
    
    // Deserialize from file
    Person deserializedPerson;
    using (FileStream input = File.OpenRead("person.pb"))
    {
        deserializedPerson = Person.Parser.ParseFrom(input);
    }
    
    Console.WriteLine($"Deserialized: {deserializedPerson.Name}, Email: {deserializedPerson.Email}");
    Console.WriteLine($"Phone count: {deserializedPerson.Phones.Count}");
    Console.WriteLine($"Address: {deserializedPerson.Address.Street}, {deserializedPerson.Address.City}");
}
```

## Best Practices

### Choosing the Right Serialization Format

```csharp
// Serialization format comparison
public void SerializationComparison()
{
    /*
    Format Selection Guidelines:
    
    JSON:
    - Use for web APIs, configuration files, and cross-platform data exchange
    - Human-readable and widely supported
    - System.Text.Json for modern .NET applications
    - Newtonsoft.Json for more features and backward compatibility
    
    XML:
    - Use for document-oriented data, configuration files, and SOAP services
    - More verbose than JSON but supports namespaces and schemas
    - XmlSerializer for simple cases
    - LINQ to XML for more complex XML manipulation
    
    Binary:
    - Use for internal storage, caching, and when size and performance matter
    - Not human-readable but more compact and faster
    - Avoid BinaryFormatter due to security concerns
    - Consider custom binary serialization or Protocol Buffers
    
    Protocol Buffers:
    - Use for high-performance, cross-platform scenarios
    - Very compact binary format with schema evolution support
    - Requires code generation from .proto files
    - Good for microservices and gRPC
    
    DataContractSerializer:
    - Use for WCF services and when you need both XML and JSON formats
    - More control over serialization than XmlSerializer
    - Supports versioning and polymorphism
    */
    
    // Performance comparison example
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1),
        Address = new Address
        {
            Street = "123 Main St",
            City = "Anytown",
            ZipCode = "12345"
        },
        PhoneNumbers = new List<string> { "555-1234", "555-5678" }
    };
    
    // Measure JSON serialization
    Stopwatch jsonStopwatch = Stopwatch.StartNew();
    string json = JsonSerializer.Serialize(person);
    jsonStopwatch.Stop();
    
    // Measure XML serialization
    Stopwatch xmlStopwatch = Stopwatch.StartNew();
    XmlSerializer xmlSerializer = new XmlSerializer(typeof(Person));
    string xml;
    using (StringWriter writer = new StringWriter())
    {
        xmlSerializer.Serialize(writer, person);
        xml = writer.ToString();
    }
    xmlStopwatch.Stop();
    
    // Compare sizes
    Console.WriteLine($"JSON size: {Encoding.UTF8.GetByteCount(json)} bytes");
    Console.WriteLine($"XML size: {Encoding.UTF8.GetByteCount(xml)} bytes");
    
    // Compare times
    Console.WriteLine($"JSON time: {jsonStopwatch.ElapsedMilliseconds} ms");
    Console.WriteLine($"XML time: {xmlStopwatch.ElapsedMilliseconds} ms");
}
```

### Security Considerations

```csharp
// Security best practices
public void SerializationSecurity()
{
    // 1. Avoid BinaryFormatter
    // BinaryFormatter can deserialize arbitrary types and execute code
    // Use safer alternatives like System.Text.Json or custom binary serialization
    
    // 2. Validate input before deserialization
    public void SafeJsonDeserialization(string json)
    {
        // Validate that the JSON is well-formed
        try
        {
            using (JsonDocument doc = JsonDocument.Parse(json))
            {
                // Additional validation if needed
            }
        }
        catch (JsonException)
        {
            throw new ArgumentException("Invalid JSON format");
        }
        
        // Use a safe deserializer
        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true,
            MaxDepth = 10  // Prevent stack overflow from deeply nested objects
        };
        
        Person person = JsonSerializer.Deserialize<Person>(json, options);
        
        // Validate the deserialized object
        if (string.IsNullOrEmpty(person.Name))
        {
            throw new ArgumentException("Name is required");
        }
    }
    
    // 3. Use type constraints with generics
    public T Deserialize<T>(string json) where T : class, new()
    {
        return JsonSerializer.Deserialize<T>(json);
    }
    
    // 4. Implement ISerializable carefully
    [Serializable]
    public class SecureSerializable : ISerializable
    {
        private string _sensitiveData;
        
        public SecureSerializable(string sensitiveData)
        {
            _sensitiveData = sensitiveData;
        }
        
        protected SecureSerializable(SerializationInfo info, StreamingContext context)
        {
            // Validate data during deserialization
            string data = info.GetString("data");
            if (string.IsNullOrEmpty(data))
            {
                throw new SerializationException("Invalid data");
            }
            
            _sensitiveData = data;
        }
        
        public void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            // Only serialize what's necessary
            info.AddValue("data", _sensitiveData);
        }
    }
}
```

### Versioning and Compatibility

```csharp
// Handling versioning and compatibility
public void SerializationVersioning()
{
    // 1. Adding new properties (backward compatibility)
    [DataContract]
    public class PersonV1
    {
        [DataMember(Order = 1)]
        public int Id { get; set; }
        
        [DataMember(Order = 2)]
        public string Name { get; set; }
    }
    
    [DataContract]
    public class PersonV2
    {
        [DataMember(Order = 1)]
        public int Id { get; set; }
        
        [DataMember(Order = 2)]
        public string Name { get; set; }
        
        [DataMember(Order = 3, EmitDefaultValue = false)]
        public string Email { get; set; }  // New property
    }
    
    // 2. Renaming properties with JsonPropertyName
    [DataContract]
    public class PersonV3
    {
        [DataMember(Order = 1)]
        public int Id { get; set; }
        
        [DataMember(Order = 2)]
        [JsonPropertyName("name")]  // Keep the same JSON property name
        public string FullName { get; set; }  // Renamed from Name
        
        [DataMember(Order = 3, EmitDefaultValue = false)]
        public string Email { get; set; }
    }
    
    // 3. Using OnDeserializing and OnDeserialized callbacks
    [DataContract]
    public class VersionedPerson
    {
        [DataMember]
        public int Id { get; set; }
        
        [DataMember]
        public string Name { get; set; }
        
        [DataMember(EmitDefaultValue = false)]
        public string Email { get; set; }
        
        [DataMember]
        public int Version { get; set; } = 2;  // Current version
        
        private bool _isOldVersion;
        
        [OnDeserializing]
        private void OnDeserializing(StreamingContext context)
        {
            // Initialize defaults
            _isOldVersion = true;
            Email = null;
        }
        
        [OnDeserialized]
        private void OnDeserialized(StreamingContext context)
        {
            if (_isOldVersion && Version < 2)
            {
                // Handle migration from old version
                if (string.IsNullOrEmpty(Email))
                {
                    Email = $"{Name.ToLower().Replace(" ", ".")}@example.com";
                }
            }
        }
    }
    
    // 4. Using optional fields in Protocol Buffers
    // In .proto file:
    /*
    message Person {
      int32 id = 1;
      string name = 2;
      string email = 3;  // Optional in v1, required in v2
      
      // New in v2
      optional string phone = 4;
    }
    */
}
```

### Performance Optimization

```csharp
// Performance optimization techniques
public void SerializationPerformance()
{
    // 1. Reuse serializer instances
    public class JsonSerializerService
    {
        private static readonly JsonSerializerOptions _options = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };
        
        public string Serialize<T>(T obj)
        {
            return JsonSerializer.Serialize(obj, _options);
        }
        
        public T Deserialize<T>(string json)
        {
            return JsonSerializer.Deserialize<T>(json, _options);
        }
    }
    
    // 2. Use source generation for System.Text.Json
    [JsonSourceGenerationOptions(
        PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase,
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonSerializable(typeof(Person))]
    internal partial class PersonContext : JsonSerializerContext
    {
    }
    
    // Usage with source generation
    var person = new Person { Name = "John Doe" };
    string json = JsonSerializer.Serialize(person, PersonContext.Default.Person);
    Person deserializedPerson = JsonSerializer.Deserialize(json, PersonContext.Default.Person);
    
    // 3. Use streams instead of strings for large objects
    public void SerializeToStream<T>(T obj, Stream stream)
    {
        JsonSerializer.Serialize(stream, obj);
    }
    
    public T DeserializeFromStream<T>(Stream stream)
    {
        return JsonSerializer.Deserialize<T>(stream);
    }
    
    // 4. Use buffer pooling for large serialization operations
    public void SerializeWithBufferPooling<T>(T obj, Stream stream)
    {
        using (var bufferWriter = new ArrayPoolBufferWriter<byte>())
        {
            using (var writer = new Utf8JsonWriter(bufferWriter))
            {
                JsonSerializer.Serialize(writer, obj);
            }
            
            bufferWriter.WrittenMemory.Span.CopyTo(stream);
        }
    }
    
    // 5. Consider using Protocol Buffers for high-performance scenarios
    // Protocol Buffers are generally faster and produce smaller output
    // than JSON or XML serialization
}

// Custom buffer writer using array pooling
public class ArrayPoolBufferWriter<T> : IBufferWriter<T>, IDisposable
{
    private T[] _rentedBuffer;
    private int _written;
    
    public ArrayPoolBufferWriter(int initialCapacity = 1024)
    {
        _rentedBuffer = ArrayPool<T>.Shared.Rent(initialCapacity);
        _written = 0;
    }
    
    public Memory<T> WrittenMemory => _rentedBuffer.AsMemory(0, _written);
    
    public void Advance(int count)
    {
        _written += count;
    }
    
    public Memory<T> GetMemory(int sizeHint = 0)
    {
        EnsureCapacity(sizeHint);
        return _rentedBuffer.AsMemory(_written);
    }
    
    public Span<T> GetSpan(int sizeHint = 0)
    {
        EnsureCapacity(sizeHint);
        return _rentedBuffer.AsSpan(_written);
    }
    
    private void EnsureCapacity(int sizeHint)
    {
        if (sizeHint == 0)
            sizeHint = 1;
            
        if (_written + sizeHint > _rentedBuffer.Length)
        {
            int newSize = Math.Max(_rentedBuffer.Length * 2, _written + sizeHint);
            T[] newBuffer = ArrayPool<T>.Shared.Rent(newSize);
            
            Array.Copy(_rentedBuffer, newBuffer, _written);
            
            T[] toReturn = _rentedBuffer;
            _rentedBuffer = newBuffer;
            
            ArrayPool<T>.Shared.Return(toReturn);
        }
    }
    
    public void Dispose()
    {
        if (_rentedBuffer != null)
        {
            ArrayPool<T>.Shared.Return(_rentedBuffer);
            _rentedBuffer = null;
        }
    }
}
```

## Resources

- [System.Text.Json Overview (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-overview)
- [JSON Serialization in .NET (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/json-serialization)
- [XML Serialization in .NET (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/xml-serialization)
- [Data Contract Serialization (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/data-contract-serialization)
- [Protocol Buffers (Google Developers)](https://developers.google.com/protocol-buffers)

# 18. Regular Expressions

Regular expressions (regex) provide a powerful way to search, match, and manipulate text based on patterns. C# supports regular expressions through the `System.Text.RegularExpressions` namespace.

## Basic Regex Patterns

### Character Patterns

```csharp
// Basic character matching
public void BasicCharacterMatching()
{
    // Literal characters
    bool isMatch = Regex.IsMatch("Hello, World!", "Hello");  // true
    
    // Character classes
    bool hasDigit = Regex.IsMatch("abc123", "\\d");  // true - contains a digit
    bool hasLetter = Regex.IsMatch("123", "\\w");    // true - contains a word character
    bool hasWhitespace = Regex.IsMatch("a b", "\\s");  // true - contains whitespace
    
    // Negated character classes
    bool hasNonDigit = Regex.IsMatch("123", "\\D");  // false - no non-digits
    bool hasNonWord = Regex.IsMatch("abc", "\\W");   // false - no non-word characters
    bool hasNonSpace = Regex.IsMatch(" ", "\\S");    // false - no non-whitespace
    
    // Character sets
    bool hasVowel = Regex.IsMatch("hello", "[aeiou]");  // true - contains a vowel
    bool hasConsonant = Regex.IsMatch("hello", "[^aeiou]");  // true - contains a consonant
    
    // Ranges
    bool hasLowercase = Regex.IsMatch("Hello", "[a-z]");  // true
    bool hasUppercase = Regex.IsMatch("hello", "[A-Z]");  // false
    bool hasLetterOrDigit = Regex.IsMatch("hello123", "[a-zA-Z0-9]");  // true
    
    // Escape special characters
    bool hasParenthesis = Regex.IsMatch("(test)", "\\(");  // true
    bool hasDot = Regex.IsMatch("hello.world", "\\.");  // true
    
    // Unicode categories
    bool hasGreekLetter = Regex.IsMatch("α", "\\p{IsGreek}");  // true
    bool hasPunctuation = Regex.IsMatch("Hello!", "\\p{P}");  // true
}
```

### Quantifiers

```csharp
// Quantifiers for repetition
public void QuantifierExamples()
{
    // Zero or more (*)
    bool starMatch = Regex.IsMatch("aaa", "a*");  // true - 0 or more 'a's
    
    // One or more (+)
    bool plusMatch = Regex.IsMatch("aaa", "a+");  // true - 1 or more 'a's
    bool plusNoMatch = Regex.IsMatch("bbb", "a+");  // false - no 'a's
    
    // Zero or one (?)
    bool optionalMatch = Regex.IsMatch("color", "colou?r");  // true - matches "color" or "colour"
    
    // Exact count {n}
    bool exactMatch = Regex.IsMatch("aaa", "a{3}");  // true - exactly 3 'a's
    bool exactNoMatch = Regex.IsMatch("aa", "a{3}");  // false - not 3 'a's
    
    // Range count {n,m}
    bool rangeMatch = Regex.IsMatch("aaa", "a{2,4}");  // true - between 2 and 4 'a's
    
    // At least n {n,}
    bool atLeastMatch = Regex.IsMatch("aaaaa", "a{2,}");  // true - at least 2 'a's
    
    // Greedy vs. lazy quantifiers
    string greedyResult = Regex.Match("<div>Hello</div>", "<div>.*</div>").Value;
    // greedyResult = "<div>Hello</div>" - matches as much as possible
    
    string lazyResult = Regex.Match("<div>Hello</div><div>World</div>", "<div>.*?</div>").Value;
    // lazyResult = "<div>Hello</div>" - matches as little as possible
}
```

### Anchors and Boundaries

```csharp
// Anchors and boundaries
public void AnchorExamples()
{
    // Start of string (^)
    bool startsWithHello = Regex.IsMatch("Hello, World!", "^Hello");  // true
    bool startsWithWorld = Regex.IsMatch("Hello, World!", "^World");  // false
    
    // End of string ($)
    bool endsWithWorld = Regex.IsMatch("Hello, World!", "World!$");  // true
    bool endsWithHello = Regex.IsMatch("Hello, World!", "Hello$");  // false
    
    // Word boundary (\b)
    bool wholeWordThe = Regex.IsMatch("The theater", "\\bthe\\b");  // false - case sensitive
    bool wholeWordTheIgnoreCase = Regex.IsMatch("The theater", "\\bthe\\b", RegexOptions.IgnoreCase);  // true
    bool notWholeWord = Regex.IsMatch("theater", "\\bthe\\b");  // false - "the" is part of "theater"
    
    // Not a word boundary (\B)
    bool notBoundary = Regex.IsMatch("theater", "\\Bthe");  // true - "the" is inside "theater"
    
    // Start of line (^ with multiline)
    string multiline = "First line\nSecond line";
    bool firstLineOnly = Regex.IsMatch(multiline, "^First", RegexOptions.Multiline);  // true
    bool secondLineOnly = Regex.IsMatch(multiline, "^Second", RegexOptions.Multiline);  // true
    
    // End of line ($ with multiline)
    bool endsFirstLine = Regex.IsMatch(multiline, "line$", RegexOptions.Multiline);  // true
}
```

### Grouping and Alternation

```csharp
// Grouping and alternation
public void GroupingAndAlternation()
{
    // Grouping with parentheses
    bool groupMatch = Regex.IsMatch("abc abc", "(abc){2}");  // true - "abc" repeated twice
    
    // Alternation with pipe (|)
    bool eitherOr = Regex.IsMatch("cat", "cat|dog");  // true - matches "cat" or "dog"
    bool eitherOrNoMatch = Regex.IsMatch("bird", "cat|dog");  // false - neither "cat" nor "dog"
    
    // Grouping with alternation
    bool colorMatch = Regex.IsMatch("red", "(red|green|blue)");  // true
    
    // Optional group
    bool optionalGroup = Regex.IsMatch("filename.txt", "filename(\\.txt)?");  // true
    bool optionalGroupNoExt = Regex.IsMatch("filename", "filename(\\.txt)?");  // true
    
    // Nested groups
    bool nestedMatch = Regex.IsMatch("abcdef", "(ab(cd)ef)");  // true
    
    // Non-capturing group (?:...)
    Match captureMatch = Regex.Match("abcdef", "(ab(cd)ef)");
    string group0 = captureMatch.Groups[0].Value;  // "abcdef" - entire match
    string group1 = captureMatch.Groups[1].Value;  // "abcdef" - first capturing group
    string group2 = captureMatch.Groups[2].Value;  // "cd" - second capturing group
    
    Match nonCaptureMatch = Regex.Match("abcdef", "(?:ab(cd)ef)");
    string ncGroup0 = nonCaptureMatch.Groups[0].Value;  // "abcdef" - entire match
    string ncGroup1 = nonCaptureMatch.Groups[1].Value;  // "cd" - only capturing group
}
```

## Regex Operations

### Matching and Validation

```csharp
// Basic matching and validation
public void BasicMatching()
{
    // Check if a string matches a pattern
    bool isMatch = Regex.IsMatch("test@example.com", @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    Console.WriteLine($"Is valid email: {isMatch}");
    
    // Get the first match
    Match match = Regex.Match("The price is $23.45", @"\$\d+\.\d+");
    if (match.Success)
    {
        Console.WriteLine($"Found price: {match.Value}");  // "$23.45"
    }
    
    // Get all matches
    MatchCollection matches = Regex.Matches("The prices are $23.45, $19.99, and $5.00", @"\$\d+\.\d+");
    foreach (Match m in matches)
    {
        Console.WriteLine($"Found price: {m.Value}");
    }
    
    // Using regex options
    bool caseInsensitiveMatch = Regex.IsMatch("Hello", "hello", RegexOptions.IgnoreCase);  // true
    
    // Validate with timeout
    try
    {
        bool isValidWithTimeout = Regex.IsMatch(
            "test@example.com",
            @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
            RegexOptions.None,
            TimeSpan.FromMilliseconds(100)
        );
    }
    catch (RegexMatchTimeoutException ex)
    {
        Console.WriteLine($"Regex timed out: {ex.Message}");
    }
}

// Common validation patterns
public void ValidationPatterns()
{
    // Email validation
    string emailPattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
    bool isValidEmail = Regex.IsMatch("user@example.com", emailPattern);
    
    // URL validation
    string urlPattern = @"^(https?|ftp)://[^\s/$.?#].[^\s]*$";
    bool isValidUrl = Regex.IsMatch("https://www.example.com", urlPattern);
    
    // Phone number validation (US format)
    string phonePattern = @"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$";
    bool isValidPhone = Regex.IsMatch("(123) 456-7890", phonePattern);
    
    // Date validation (MM/DD/YYYY)
    string datePattern = @"^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}$";
    bool isValidDate = Regex.IsMatch("12/31/2023", datePattern);
    
    // Password strength validation
    // At least 8 characters, one uppercase, one lowercase, one digit, one special character
    string passwordPattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$";
    bool isStrongPassword = Regex.IsMatch("P@ssw0rd", passwordPattern);
    
    // IP address validation
    string ipPattern = @"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";
    bool isValidIp = Regex.IsMatch("192.168.1.1", ipPattern);
    
    // Zip code validation (US)
    string zipPattern = @"^\d{5}(?:[-\s]\d{4})?$";
    bool isValidZip = Regex.IsMatch("12345-6789", zipPattern);
}
```

### Capturing Groups

```csharp
// Working with capturing groups
public void CapturingGroups()
{
    // Basic capturing
    Match match = Regex.Match("John Smith", @"(\w+)\s(\w+)");
    if (match.Success)
    {
        string firstName = match.Groups[1].Value;  // "John"
        string lastName = match.Groups[2].Value;   // "Smith"
        Console.WriteLine($"First name: {firstName}, Last name: {lastName}");
    }
    
    // Named capturing groups
    Match namedMatch = Regex.Match("John Smith", @"(?<first>\w+)\s(?<last>\w+)");
    if (namedMatch.Success)
    {
        string firstName = namedMatch.Groups["first"].Value;  // "John"
        string lastName = namedMatch.Groups["last"].Value;    // "Smith"
        Console.WriteLine($"First name: {firstName}, Last name: {lastName}");
    }
    
    // Multiple captures of the same group
    Match repeatedMatch = Regex.Match("abc abc abc", @"(abc\s?)+");
    if (repeatedMatch.Success)
    {
        // Group 1 will contain only the last "abc" match
        string lastCapture = repeatedMatch.Groups[1].Value;  // "abc"
        
        // To get all captures of Group 1
        CaptureCollection captures = repeatedMatch.Groups[1].Captures;
        foreach (Capture capture in captures)
        {
            Console.WriteLine($"Capture: {capture.Value}");
        }
    }
    
    // Nested groups
    Match nestedMatch = Regex.Match("2023-05-15", @"(\d{4})-(\d{2})-(\d{2})");
    if (nestedMatch.Success)
    {
        string year = nestedMatch.Groups[1].Value;   // "2023"
        string month = nestedMatch.Groups[2].Value;  // "05"
        string day = nestedMatch.Groups[3].Value;    // "15"
        Console.WriteLine($"Date: {year}/{month}/{day}");
    }
    
    // Backreferences
    bool isPalindrome = Regex.IsMatch("radar", @"(\w)(\w)(\w)\2\1");  // true
    
    // Named backreferences
    bool isRepeated = Regex.IsMatch("abcabc", @"(?<chars>\w+)\k<chars>");  // true
}
```

### Search and Replace

```csharp
// Search and replace operations
public void SearchAndReplace()
{
    // Basic replacement
    string result = Regex.Replace("Hello, World!", "World", "Universe");
    Console.WriteLine(result);  // "Hello, Universe!"
    
    // Replace with pattern
    string formatted = Regex.Replace("2023-05-15", @"(\d{4})-(\d{2})-(\d{2})", "$2/$3/$1");
    Console.WriteLine(formatted);  // "05/15/2023"
    
    // Replace with named groups
    string namedFormatted = Regex.Replace(
        "2023-05-15",
        @"(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})",
        "${month}/${day}/${year}"
    );
    Console.WriteLine(namedFormatted);  // "05/15/2023"
    
    // Replace with a MatchEvaluator delegate
    string evaluated = Regex.Replace("1 + 2 = 3", @"\d+", match => 
    {
        int number = int.Parse(match.Value);
        return (number * 2).ToString();
    });
    Console.WriteLine(evaluated);  // "2 + 4 = 6"
    
    // Case conversion in replacement
    string caseConverted = Regex.Replace(
        "hello world",
        @"\b(\w)(\w+)\b",
        m => char.ToUpper(m.Groups[1].Value[0]) + m.Groups[2].Value
    );
    Console.WriteLine(caseConverted);  // "Hello World"
    
    // Replace all whitespace with a single space
    string normalized = Regex.Replace("This   has \t multiple  \n spaces", @"\s+", " ");
    Console.WriteLine(normalized);  // "This has multiple spaces"
    
    // Remove all non-alphanumeric characters
    string alphanumeric = Regex.Replace("Hello, World! 123", @"[^\w\s]", "");
    Console.WriteLine(alphanumeric);  // "Hello World 123"
}
```

### Splitting

```csharp
// Splitting strings with regex
public void RegexSplitting()
{
    // Split by whitespace
    string[] words = Regex.Split("This is a test", @"\s+");
    // ["This", "is", "a", "test"]
    
    // Split by multiple delimiters
    string[] parts = Regex.Split("apple,orange;banana|grape", @"[,;|]");
    // ["apple", "orange", "banana", "grape"]
    
    // Split but keep delimiters in the result
    string[] partsWithDelimiters = Regex.Split("apple,orange;banana", @"(,|;)");
    // ["apple", ",", "orange", ";", "banana"]
    
    // Split with a limit on the number of results
    string input = "one,two,three,four,five";
    string[] limitedParts = input.Split(new[] { ',' }, 3);
    // ["one", "two", "three,four,five"]
    
    // Split and remove empty entries
    string[] noEmptyParts = Regex.Split("word1,,word2,,,word3", ",")
        .Where(s => !string.IsNullOrEmpty(s))
        .ToArray();
    // ["word1", "word2", "word3"]
}
```

## Advanced Regex Features

### Lookahead and Lookbehind

```csharp
// Lookahead and lookbehind assertions
public void LookAroundAssertions()
{
    // Positive lookahead (?=...)
    // Match "apple" only if followed by "pie"
    MatchCollection applePies = Regex.Matches("apple pie, apple juice, apple tart", @"apple(?= pie)");
    foreach (Match m in applePies)
    {
        Console.WriteLine(m.Value);  // Outputs "apple" once
    }
    
    // Negative lookahead (?!...)
    // Match "apple" only if NOT followed by "pie"
    MatchCollection notPies = Regex.Matches("apple pie, apple juice, apple tart", @"apple(?! pie)");
    foreach (Match m in notPies)
    {
        Console.WriteLine(m.Value);  // Outputs "apple" twice (for juice and tart)
    }
    
    // Positive lookbehind (?<=...)
    // Match "123" only if preceded by "$"
    MatchCollection prices = Regex.Matches("$123, €123, 123", @"(?<=\$)\d+");
    foreach (Match m in prices)
    {
        Console.WriteLine(m.Value);  // Outputs "123" once
    }
    
    // Negative lookbehind (?<!...)
    // Match "123" only if NOT preceded by "$"
    MatchCollection notPrices = Regex.Matches("$123, €123, 123", @"(?<!\$)\d+");
    foreach (Match m in notPrices)
    {
        Console.WriteLine(m.Value);  // Outputs "123" twice (for €123 and 123)
    }
    
    // Combined lookaround
    // Match a word that has "a" before it and "s" after it
    MatchCollection surrounded = Regex.Matches("a cat s, a dog s, a bird", @"(?<=a )(\w+)(?= s)");
    foreach (Match m in surrounded)
    {
        Console.WriteLine(m.Value);  // Outputs "cat" and "dog"
    }
}
```

### Conditional Patterns

```csharp
// Conditional regex patterns
public void ConditionalPatterns()
{
    // If-then-else pattern: (?(condition)then|else)
    
    // If group 1 was captured, match "yes", otherwise match "no"
    Regex conditionalRegex = new Regex(@"(\d+)?(?(1)yes|no)");
    
    Match match1 = conditionalRegex.Match("123yes");
    Console.WriteLine(match1.Success);  // true
    
    Match match2 = conditionalRegex.Match("no");
    Console.WriteLine(match2.Success);  // true
    
    Match match3 = conditionalRegex.Match("123no");
    Console.WriteLine(match3.Success);  // false
    
    // Named condition
    Regex namedConditionalRegex = new Regex(@"(?<digits>\d+)?(?(digits)yes|no)");
    
    // Lookahead condition
    Regex lookaheadConditional = new Regex(@"(?((?=\d+$))yes|no)");
    
    Match match4 = lookaheadConditional.Match("123yes");
    Console.WriteLine(match4.Success);  // false
    
    Match match5 = lookaheadConditional.Match("yes123");
    Console.WriteLine(match5.Success);  // false
    
    Match match6 = lookaheadConditional.Match("123");
    Console.WriteLine(match6.Success);  // true (matches "yes" because the lookahead condition is true)
}
```

### Balancing Groups

```csharp
// Balancing groups for nested structures
public void BalancingGroups()
{
    // Match nested parentheses
    string nestedParens = "((a+b)*(c+d))";
    
    // This regex uses balancing groups to match nested parentheses
    string balancedParenRegex = @"
        \(                  # Match an opening parenthesis
        (
            (?<Open>\()     # Capture an opening parenthesis in 'Open' group
            |
            (?<-Open>\))    # Balance the 'Open' group by removing one capture for each closing parenthesis
            |
            [^()]           # Match any character that is not a parenthesis
        )*
        (?(Open)(?!))       # Assert that 'Open' group is empty (all parentheses are balanced)
        \)                  # Match a closing parenthesis
    ";
    
    Match balancedMatch = Regex.Match(
        nestedParens,
        balancedParenRegex,
        RegexOptions.IgnorePatternWhitespace
    );
    
    Console.WriteLine(balancedMatch.Value);  // "((a+b)*(c+d))"
    
    // Match nested HTML tags
    string htmlContent = "<div><p>Hello <span>world</span></p></div>";
    
    string balancedHtmlRegex = @"
        <(?<TagName>[a-zA-Z][a-zA-Z0-9]*)>  # Match opening tag and capture tag name
        (
            (?<Open><\k<TagName>>)          # Capture opening tag in 'Open' group
            |
            (?<-Open></\k<TagName>>)        # Balance 'Open' group with closing tag
            |
            (?!</?\k<TagName>>).            # Match any character that is not part of this tag
        )*
        (?(Open)(?!))                       # Assert that 'Open' group is empty
        </\k<TagName>>                      # Match closing tag
    ";
    
    Match htmlMatch = Regex.Match(
        htmlContent,
        balancedHtmlRegex,
        RegexOptions.IgnorePatternWhitespace | RegexOptions.Singleline
    );
    
    Console.WriteLine(htmlMatch.Value);  // "<div><p>Hello <span>world</span></p></div>"
}
```

### Atomic Grouping

```csharp
// Atomic grouping for efficiency
public void AtomicGrouping()
{
    // Regular grouping with backtracking
    Regex regularGroup = new Regex(@"(a+)a");
    Match regularMatch = regularGroup.Match("aaaa");
    Console.WriteLine(regularMatch.Success);  // true
    Console.WriteLine(regularMatch.Groups[1].Value);  // "aaa"
    
    // Atomic grouping (?>...) prevents backtracking
    Regex atomicGroup = new Regex(@"(?>a+)a");
    Match atomicMatch = atomicGroup.Match("aaaa");
    Console.WriteLine(atomicMatch.Success);  // false - the atomic group consumes all "a"s, leaving none for the final "a"
    
    // Example where atomic grouping improves performance
    string longText = new string('a', 10000) + "b";
    
    // Without atomic grouping - can be slow due to excessive backtracking
    Regex inefficientRegex = new Regex(@"a*b");
    
    // With atomic grouping - more efficient
    Regex efficientRegex = new Regex(@"(?>a*)b");
    
    // Measure performance
    Stopwatch sw1 = Stopwatch.StartNew();
    inefficientRegex.IsMatch(longText);
    sw1.Stop();
    
    Stopwatch sw2 = Stopwatch.StartNew();
    efficientRegex.IsMatch(longText);
    sw2.Stop();
    
    Console.WriteLine($"Without atomic grouping: {sw1.ElapsedMilliseconds}ms");
    Console.WriteLine($"With atomic grouping: {sw2.ElapsedMilliseconds}ms");
}
```

## Regex Options and Performance

### Regex Options

```csharp
// Using regex options
public void RegexOptions()
{
    // Case-insensitive matching
    bool ignoreCase = Regex.IsMatch("Hello", "hello", RegexOptions.IgnoreCase);  // true
    
    // Multiline mode - ^ and $ match start/end of line
    string multiline = "First line\nSecond line";
    bool multilineMatch = Regex.IsMatch(
        multiline,
        "^Second",
        RegexOptions.Multiline
    );  // true
    
    // Singleline mode - . matches any character including newlines
    bool singlelineMatch = Regex.IsMatch(
        "Line 1\nLine 2",
        "Line 1.Line 2",
        RegexOptions.Singleline
    );  // true
    
    // Ignore whitespace in pattern for better readability
    bool ignoreWhitespace = Regex.IsMatch(
        "abc123",
        @"
        abc     # Match 'abc'
        \d{3}   # Match 3 digits
        ",
        RegexOptions.IgnorePatternWhitespace
    );  // true
    
    // Explicit captures only
    Match explicitCapture = Regex.Match(
        "abc123",
        "(?<letters>[a-z]+)(?<digits>\\d+)",
        RegexOptions.ExplicitCapture
    );
    // Only named groups are captured, unnamed groups are non-capturing
    
    // Right-to-left matching
    Match rightToLeft = Regex.Match(
        "abc123def",
        "\\d+",
        RegexOptions.RightToLeft
    );
    Console.WriteLine(rightToLeft.Value);  // "123" - starts searching from the end
    
    // Compiled regex for better performance
    Regex compiledRegex = new Regex(
        @"\d+",
        RegexOptions.Compiled
    );
    
    // Combining options
    Regex combinedOptions = new Regex(
        @"hello",
        RegexOptions.IgnoreCase | RegexOptions.Compiled
    );
}
```

### Performance Optimization

```csharp
// Regex performance optimization
public void RegexPerformance()
{
    // 1. Reuse Regex objects
    // Bad: Creates a new Regex object for each call
    public bool IsValidEmail(string email)
    {
        return Regex.IsMatch(email, @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    }
    
    // Good: Reuse a static Regex object
    private static readonly Regex EmailRegex = new Regex(
        @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        RegexOptions.Compiled
    );
    
    public bool IsValidEmailOptimized(string email)
    {
        return EmailRegex.IsMatch(email);
    }
    
    // 2. Use RegexOptions.Compiled for frequently used patterns
    private static readonly Regex CompiledRegex = new Regex(
        @"\d+",
        RegexOptions.Compiled
    );
    
    // 3. Avoid catastrophic backtracking
    // Bad: Can cause excessive backtracking
    private static readonly Regex BadRegex = new Regex(@"(a+)+b");
    
    // Good: Rewritten to avoid backtracking issues
    private static readonly Regex GoodRegex = new Regex(@"a+b");
    
    // 4. Use atomic groups for efficiency
    private static readonly Regex AtomicRegex = new Regex(@"(?>a+)b");
    
    // 5. Use timeout to prevent regex denial of service (ReDoS)
    public bool IsMatchWithTimeout(string input, string pattern)
    {
        try
        {
            return Regex.IsMatch(
                input,
                pattern,
                RegexOptions.None,
                TimeSpan.FromMilliseconds(100)
            );
        }
        catch (RegexMatchTimeoutException)
        {
            Console.WriteLine("Regex timeout - possible ReDoS attack");
            return false;
        }
    }
    
    // 6. Use simpler alternatives when possible
    // Instead of regex for simple string operations
    public bool ContainsDigit(string input)
    {
        // Better than Regex.IsMatch(input, @"\d")
        return input.Any(char.IsDigit);
    }
    
    // 7. Limit backtracking with possessive quantifiers (not available in .NET)
    // In .NET, use atomic groups instead
    // (a+)b    - Standard quantifier with backtracking
    // (?>a+)b  - Atomic group (equivalent to possessive quantifier a++b)
}
```

### Regex Caching

```csharp
// Caching regex objects
public class RegexCache
{
    // Thread-safe cache of compiled regex objects
    private static readonly ConcurrentDictionary<string, Regex> Cache = new ConcurrentDictionary<string, Regex>();
    
    // Get a cached regex object
    public static Regex GetRegex(string pattern)
    {
        return Cache.GetOrAdd(pattern, p => new Regex(p, RegexOptions.Compiled));
    }
    
    // Get a cached regex object with options
    public static Regex GetRegex(string pattern, RegexOptions options)
    {
        string key = $"{pattern}|{options}";
        return Cache.GetOrAdd(key, _ => new Regex(pattern, options));
    }
    
    // Match with a cached regex
    public static bool IsMatch(string input, string pattern)
    {
        return GetRegex(pattern).IsMatch(input);
    }
    
    // Match with a cached regex and options
    public static bool IsMatch(string input, string pattern, RegexOptions options)
    {
        return GetRegex(pattern, options).IsMatch(input);
    }
    
    // Clear the cache
    public static void ClearCache()
    {
        Cache.Clear();
    }
}
```

## Common Regex Patterns

### String Validation

```csharp
// Common regex patterns for validation
public static class ValidationPatterns
{
    // Email address
    public static readonly Regex Email = new Regex(
        @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        RegexOptions.Compiled
    );
    
    // URL
    public static readonly Regex Url = new Regex(
        @"^(https?|ftp)://[^\s/$.?#].[^\s]*$",
        RegexOptions.Compiled
    );
    
    // Phone number (US format)
    public static readonly Regex PhoneUS = new Regex(
        @"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$",
        RegexOptions.Compiled
    );
    
    // Date (MM/DD/YYYY)
    public static readonly Regex DateMMDDYYYY = new Regex(
        @"^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}$",
        RegexOptions.Compiled
    );
    
    // Date (YYYY-MM-DD)
    public static readonly Regex DateISO = new Regex(
        @"^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$",
        RegexOptions.Compiled
    );
    
    // Time (HH:MM:SS)
    public static readonly Regex Time24Hour = new Regex(
        @"^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$",
        RegexOptions.Compiled
    );
    
    // IP address (IPv4)
    public static readonly Regex IPv4 = new Regex(
        @"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
        RegexOptions.Compiled
    );
    
    // ZIP code (US)
    public static readonly Regex ZipCodeUS = new Regex(
        @"^\d{5}(?:[-\s]\d{4})?$",
        RegexOptions.Compiled
    );
    
    // Social Security Number (US)
    public static readonly Regex SSN = new Regex(
        @"^\d{3}-\d{2}-\d{4}$",
        RegexOptions.Compiled
    );
    
    // Credit card number
    public static readonly Regex CreditCard = new Regex(
        @"^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$",
        RegexOptions.Compiled
    );
    
    // Strong password
    // At least 8 characters, one uppercase, one lowercase, one digit, one special character
    public static readonly Regex StrongPassword = new Regex(
        @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$",
        RegexOptions.Compiled
    );
    
    // Hexadecimal color code
    public static readonly Regex HexColor = new Regex(
        @"^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$",
        RegexOptions.Compiled
    );
    
    // ISBN-10 or ISBN-13
    public static readonly Regex ISBN = new Regex(
        @"^(?:ISBN(?:-1[03])?:? )?(?=[-0-9 ]{17}$|[-0-9X ]{13}$|[0-9X]{10}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?(?:[0-9]+[- ]?){2}[0-9X]$",
        RegexOptions.Compiled
    );
}
```

### Text Parsing

```csharp
// Common regex patterns for text parsing
public static class ParsingPatterns
{
    // Extract all URLs from text
    public static IEnumerable<string> ExtractUrls(string text)
    {
        var matches = Regex.Matches(
            text,
            @"(https?|ftp)://[^\s/$.?#].[^\s]*",
            RegexOptions.IgnoreCase
        );
        
        return matches.Cast<Match>().Select(m => m.Value);
    }
    
    // Extract all email addresses from text
    public static IEnumerable<string> ExtractEmails(string text)
    {
        var matches = Regex.Matches(
            text,
            @"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}",
            RegexOptions.IgnoreCase
        );
        
        return matches.Cast<Match>().Select(m => m.Value);
    }
    
    // Extract all hashtags from text
    public static IEnumerable<string> ExtractHashtags(string text)
    {
        var matches = Regex.Matches(
            text,
            @"#[a-zA-Z0-9_]+"
        );
        
        return matches.Cast<Match>().Select(m => m.Value);
    }
    
    // Extract all mentions from text
    public static IEnumerable<string> ExtractMentions(string text)
    {
        var matches = Regex.Matches(
            text,
            @"@[a-zA-Z0-9_]+"
        );
        
        return matches.Cast<Match>().Select(m => m.Value);
    }
    
    // Parse CSV line (handles quoted fields with commas)
    public static string[] ParseCsvLine(string line)
    {
        // This handles fields that may contain commas if they are quoted
        var matches = Regex.Matches(
            line,
            @"(?:^|,)(?:""([^""]*)""|([^,]*))"
        );
        
        return matches.Cast<Match>()
            .Select(m => {
                var value = m.Groups[1].Success ? m.Groups[1].Value : m.Groups[2].Value;
                return value.Trim();
            })
            .ToArray();
    }
    
    // Extract key-value pairs from text
    public static Dictionary<string, string> ExtractKeyValuePairs(string text)
    {
        var matches = Regex.Matches(
            text,
            @"(\w+)\s*[:=]\s*([^;]+)"
        );
        
        return matches.Cast<Match>()
            .ToDictionary(
                m => m.Groups[1].Value.Trim(),
                m => m.Groups[2].Value.Trim()
            );
    }
    
    // Extract all numbers from text
    public static IEnumerable<decimal> ExtractNumbers(string text)
    {
        var matches = Regex.Matches(
            text,
            @"[-+]?\d*\.?\d+"
        );
        
        return matches.Cast<Match>()
            .Select(m => decimal.Parse(m.Value, CultureInfo.InvariantCulture));
    }
    
    // Extract all dates from text
    public static IEnumerable<DateTime> ExtractDates(string text)
    {
        var matches = Regex.Matches(
            text,
            @"\b(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})\b"
        );
        
        return matches.Cast<Match>()
            .Select(m => {
                try {
                    int month = int.Parse(m.Groups[1].Value);
                    int day = int.Parse(m.Groups[2].Value);
                    int year = int.Parse(m.Groups[3].Value);
                    
                    // Handle 2-digit years
                    if (year < 100) {
                        year += year < 50 ? 2000 : 1900;
                    }
                    
                    return new DateTime(year, month, day);
                }
                catch {
                    // Skip invalid dates
                    return DateTime.MinValue;
                }
            })
            .Where(d => d != DateTime.MinValue);
    }
}
```

### Text Transformation

```csharp
// Common regex patterns for text transformation
public static class TransformationPatterns
{
    // Convert snake_case to camelCase
    public static string SnakeToCamelCase(string input)
    {
        return Regex.Replace(
            input,
            @"_(\w)",
            match => match.Groups[1].Value.ToUpper()
        );
    }
    
    // Convert snake_case to PascalCase
    public static string SnakeToPascalCase(string input)
    {
        string camelCase = SnakeToCamelCase(input);
        return char.ToUpper(camelCase[0]) + camelCase.Substring(1);
    }
    
    // Convert camelCase to snake_case
    public static string CamelToSnakeCase(string input)
    {
        return Regex.Replace(
            input,
            @"([a-z0-9])([A-Z])",
            "$1_$2"
        ).ToLower();
    }
    
    // Convert PascalCase to snake_case
    public static string PascalToSnakeCase(string input)
    {
        return Regex.Replace(
            input,
            @"([a-z0-9])([A-Z])",
            "$1_$2"
        ).ToLower();
    }
    
    // Capitalize first letter of each word
    public static string CapitalizeWords(string input)
    {
        return Regex.Replace(
            input,
            @"\b(\w)",
            match => match.Value.ToUpper()
        );
    }
    
    // Remove all HTML tags
    public static string StripHtml(string html)
    {
        return Regex.Replace(
            html,
            @"<[^>]+>",
            string.Empty
        );
    }
    
    // Normalize whitespace (replace multiple spaces with a single space)
    public static string NormalizeWhitespace(string input)
    {
        return Regex.Replace(
            input,
            @"\s+",
            " "
        ).Trim();
    }
    
    // Mask credit card number (show only last 4 digits)
    public static string MaskCreditCard(string cardNumber)
    {
        return Regex.Replace(
            cardNumber,
            @"(?<=\S)\S(?=\S{4})",
            "*"
        );
    }
    
    // Format phone number as (XXX) XXX-XXXX
    public static string FormatPhoneNumber(string phoneNumber)
    {
        string digitsOnly = Regex.Replace(phoneNumber, @"\D", "");
        
        return Regex.Replace(
            digitsOnly,
            @"(\d{3})(\d{3})(\d{4})",
            "($1) $2-$3"
        );
    }
    
    // Convert URLs to HTML links
    public static string LinkifyUrls(string text)
    {
        return Regex.Replace(
            text,
            @"(https?|ftp)://[^\s/$.?#].[^\s]*",
            match => $"<a href=\"{match.Value}\">{match.Value}</a>"
        );
    }
    
    // Slugify a string (convert to URL-friendly format)
    public static string Slugify(string input)
    {
        // Convert to lowercase
        string result = input.ToLower();
        
        // Remove accents
        result = Regex.Replace(
            result,
            @"[àáâäåãæçèéêëìíîïòóôõöøùúûüýÿ]",
            match => "aaaaaaaaceeeeiiiioooooouuuuyy"["àáâäåãæçèéêëìíîïòóôõöøùúûüýÿ".IndexOf(match.Value[0])]
            .ToString()
        );
        
        // Replace non-alphanumeric characters with hyphens
        result = Regex.Replace(result, @"[^a-z0-9]", "-");
        
        // Replace multiple hyphens with a single hyphen
        result = Regex.Replace(result, @"-+", "-");
        
        // Remove leading and trailing hyphens
        result = Regex.Replace(result, @"^-+|-+$", "");
        
        return result;
    }
}
```

## Resources

- [Regular Expressions in .NET (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions)
- [Regular Expression Language - Quick Reference (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference)
- [Regex Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex)
- [Best Practices for Regular Expressions in .NET (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/best-practices)
- [Regular Expression Options (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-options)

# 19. Networking

Networking in C# allows you to create applications that communicate over networks, from simple HTTP requests to complex client-server architectures. The .NET Framework provides a rich set of classes for various networking tasks.

## HTTP Client

### HttpClient Basics

```csharp
// Basic HTTP requests with HttpClient
public async Task HttpClientBasicsAsync()
{
    // Create an instance of HttpClient
    using (HttpClient client = new HttpClient())
    {
        // Set base address
        client.BaseAddress = new Uri("https://api.example.com/");
        
        // Set default headers
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Add("User-Agent", "My C# App");
        
        // GET request
        HttpResponseMessage response = await client.GetAsync("users");
        
        // Check if the request was successful
        if (response.IsSuccessStatusCode)
        {
            // Read response content as string
            string content = await response.Content.ReadAsStringAsync();
            Console.WriteLine(content);
            
            // Deserialize JSON response
            List<User> users = JsonSerializer.Deserialize<List<User>>(content);
            
            // Process the data
            foreach (var user in users)
            {
                Console.WriteLine($"User: {user.Name}, Email: {user.Email}");
            }
        }
        else
        {
            Console.WriteLine($"Error: {response.StatusCode}");
        }
    }
}

// User model for deserialization
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}
```

### HTTP Methods

```csharp
// Different HTTP methods with HttpClient
public async Task HttpMethodsAsync()
{
    using (HttpClient client = new HttpClient())
    {
        // POST request with JSON content
        var user = new User { Name = "John Doe", Email = "john@example.com" };
        string json = JsonSerializer.Serialize(user);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        HttpResponseMessage postResponse = await client.PostAsync("https://api.example.com/users", content);
        
        if (postResponse.IsSuccessStatusCode)
        {
            User createdUser = JsonSerializer.Deserialize<User>(
                await postResponse.Content.ReadAsStringAsync()
            );
            Console.WriteLine($"Created user with ID: {createdUser.Id}");
        }
        
        // PUT request
        user.Name = "John Smith";
        json = JsonSerializer.Serialize(user);
        content = new StringContent(json, Encoding.UTF8, "application/json");
        
        HttpResponseMessage putResponse = await client.PutAsync(
            $"https://api.example.com/users/{user.Id}",
            content
        );
        
        // PATCH request
        var patchContent = new StringContent(
            @"{""Name"": ""John Smith Jr.""}", 
            Encoding.UTF8, 
            "application/json"
        );
        
        var patchRequest = new HttpRequestMessage(
            new HttpMethod("PATCH"),
            $"https://api.example.com/users/{user.Id}"
        )
        {
            Content = patchContent
        };
        
        HttpResponseMessage patchResponse = await client.SendAsync(patchRequest);
        
        // DELETE request
        HttpResponseMessage deleteResponse = await client.DeleteAsync(
            $"https://api.example.com/users/{user.Id}"
        );
        
        // HEAD request
        var headRequest = new HttpRequestMessage(HttpMethod.Head, "https://api.example.com/users");
        HttpResponseMessage headResponse = await client.SendAsync(headRequest);
        
        // OPTIONS request
        var optionsRequest = new HttpRequestMessage(HttpMethod.Options, "https://api.example.com/users");
        HttpResponseMessage optionsResponse = await client.SendAsync(optionsRequest);
    }
}
```

### Request and Response Handling

```csharp
// Advanced request and response handling
public async Task RequestResponseHandlingAsync()
{
    // Create HttpClientHandler to customize the request pipeline
    var handler = new HttpClientHandler
    {
        AllowAutoRedirect = true,
        MaxAutomaticRedirections = 5,
        UseCookies = true,
        CookieContainer = new CookieContainer(),
        AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate
    };
    
    using (HttpClient client = new HttpClient(handler))
    {
        // Set timeout
        client.Timeout = TimeSpan.FromSeconds(30);
        
        // Create a request message
        var request = new HttpRequestMessage(HttpMethod.Get, "https://api.example.com/data");
        
        // Add headers to the request
        request.Headers.Add("X-API-Key", "your-api-key");
        request.Headers.Add("Accept-Language", "en-US");
        
        // Add query parameters
        var uriBuilder = new UriBuilder(request.RequestUri);
        var query = HttpUtility.ParseQueryString(uriBuilder.Query);
        query["page"] = "1";
        query["limit"] = "10";
        uriBuilder.Query = query.ToString();
        request.RequestUri = uriBuilder.Uri;
        
        // Send the request
        HttpResponseMessage response = await client.SendAsync(request);
        
        // Get response headers
        Console.WriteLine($"Content-Type: {response.Content.Headers.ContentType}");
        Console.WriteLine($"Content-Length: {response.Content.Headers.ContentLength}");
        
        // Get cookies from the response
        IEnumerable<Cookie> cookies = handler.CookieContainer.GetCookies(request.RequestUri)
            .Cast<Cookie>();
        
        foreach (var cookie in cookies)
        {
            Console.WriteLine($"Cookie: {cookie.Name} = {cookie.Value}");
        }
        
        // Read response content in different formats
        string textContent = await response.Content.ReadAsStringAsync();
        byte[] byteContent = await response.Content.ReadAsByteArrayAsync();
        Stream streamContent = await response.Content.ReadAsStreamAsync();
        
        // Handle different status codes
        switch ((int)response.StatusCode)
        {
            case 200:
                Console.WriteLine("Success!");
                break;
            case 401:
                Console.WriteLine("Unauthorized - check your credentials");
                break;
            case 404:
                Console.WriteLine("Resource not found");
                break;
            case >= 500:
                Console.WriteLine("Server error");
                break;
        }
    }
}
```

### Authentication

```csharp
// Authentication with HttpClient
public async Task AuthenticationExamplesAsync()
{
    // Basic authentication
    using (HttpClient client = new HttpClient())
    {
        string credentials = Convert.ToBase64String(
            Encoding.ASCII.GetBytes("username:password")
        );
        
        client.DefaultRequestHeaders.Authorization = 
            new AuthenticationHeaderValue("Basic", credentials);
        
        HttpResponseMessage response = await client.GetAsync("https://api.example.com/secure");
    }
    
    // Bearer token authentication (e.g., JWT)
    using (HttpClient client = new HttpClient())
    {
        client.DefaultRequestHeaders.Authorization = 
            new AuthenticationHeaderValue("Bearer", "your-jwt-token");
        
        HttpResponseMessage response = await client.GetAsync("https://api.example.com/secure");
    }
    
    // API key authentication
    using (HttpClient client = new HttpClient())
    {
        // In header
        client.DefaultRequestHeaders.Add("X-API-Key", "your-api-key");
        
        // Or in query string
        var uriBuilder = new UriBuilder("https://api.example.com/secure");
        var query = HttpUtility.ParseQueryString(uriBuilder.Query);
        query["api_key"] = "your-api-key";
        uriBuilder.Query = query.ToString();
        
        HttpResponseMessage response = await client.GetAsync(uriBuilder.Uri);
    }
    
    // OAuth 2.0 client credentials flow
    using (HttpClient client = new HttpClient())
    {
        // Request token
        var tokenRequest = new Dictionary<string, string>
        {
            ["grant_type"] = "client_credentials",
            ["client_id"] = "your-client-id",
            ["client_secret"] = "your-client-secret",
            ["scope"] = "read write"
        };
        
        var tokenContent = new FormUrlEncodedContent(tokenRequest);
        
        HttpResponseMessage tokenResponse = await client.PostAsync(
            "https://auth.example.com/token",
            tokenContent
        );
        
        if (tokenResponse.IsSuccessStatusCode)
        {
            string tokenJson = await tokenResponse.Content.ReadAsStringAsync();
            var tokenData = JsonSerializer.Deserialize<JsonElement>(tokenJson);
            string accessToken = tokenData.GetProperty("access_token").GetString();
            
            // Use the token
            client.DefaultRequestHeaders.Authorization = 
                new AuthenticationHeaderValue("Bearer", accessToken);
            
            HttpResponseMessage apiResponse = await client.GetAsync("https://api.example.com/secure");
        }
    }
}
```

### File Upload and Download

```csharp
// File upload and download with HttpClient
public async Task FileOperationsAsync()
{
    // File download
    using (HttpClient client = new HttpClient())
    {
        // Download file as byte array
        byte[] fileBytes = await client.GetByteArrayAsync("https://example.com/files/document.pdf");
        
        // Save to disk
        await File.WriteAllBytesAsync("document.pdf", fileBytes);
        
        // Download file as stream (more memory efficient for large files)
        using (Stream stream = await client.GetStreamAsync("https://example.com/files/large-file.zip"))
        using (FileStream fileStream = File.Create("large-file.zip"))
        {
            await stream.CopyToAsync(fileStream);
        }
        
        // Download with progress reporting
        HttpResponseMessage response = await client.GetAsync(
            "https://example.com/files/very-large-file.zip",
            HttpCompletionOption.ResponseHeadersRead  // Don't buffer the entire response
        );
        
        long? totalBytes = response.Content.Headers.ContentLength;
        using (Stream contentStream = await response.Content.ReadAsStreamAsync())
        using (FileStream fileStream = File.Create("very-large-file.zip"))
        {
            byte[] buffer = new byte[8192];
            long totalBytesRead = 0;
            int bytesRead;
            
            while ((bytesRead = await contentStream.ReadAsync(buffer, 0, buffer.Length)) > 0)
            {
                await fileStream.WriteAsync(buffer, 0, bytesRead);
                
                totalBytesRead += bytesRead;
                
                if (totalBytes.HasValue)
                {
                    double percentage = (double)totalBytesRead / totalBytes.Value * 100;
                    Console.WriteLine($"Downloaded {totalBytesRead} of {totalBytes} bytes ({percentage:F2}%)");
                }
            }
        }
    }
    
    // File upload
    using (HttpClient client = new HttpClient())
    {
        // Simple file upload
        byte[] fileBytes = File.ReadAllBytes("document.pdf");
        var content = new ByteArrayContent(fileBytes);
        content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");
        
        HttpResponseMessage response = await client.PostAsync(
            "https://example.com/upload",
            content
        );
        
        // Multipart form data upload
        using (var formData = new MultipartFormDataContent())
        {
            // Add file content
            var fileContent = new ByteArrayContent(File.ReadAllBytes("document.pdf"));
            fileContent.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");
            formData.Add(fileContent, "file", "document.pdf");
            
            // Add form fields
            formData.Add(new StringContent("File description"), "description");
            
            // Send the request
            response = await client.PostAsync("https://example.com/upload", formData);
        }
        
        // Upload with progress reporting
        var progressContent = new ProgressableStreamContent(
            File.OpenRead("large-file.zip"),
            8192,  // Buffer size
            (sent, total) => 
            {
                double percentage = (double)sent / total * 100;
                Console.WriteLine($"Uploaded {sent} of {total} bytes ({percentage:F2}%)");
            }
        );
        
        progressContent.Headers.ContentType = new MediaTypeHeaderValue("application/zip");
        
        response = await client.PostAsync("https://example.com/upload", progressContent);
    }
}

// Custom content for progress reporting
public class ProgressableStreamContent : StreamContent
{
    private readonly Stream _content;
    private readonly int _bufferSize;
    private readonly Action<long, long> _progress;
    
    public ProgressableStreamContent(Stream content, int bufferSize, Action<long, long> progress)
        : base(content, bufferSize)
    {
        _content = content;
        _bufferSize = bufferSize;
        _progress = progress;
    }
    
    protected override async Task SerializeToStreamAsync(Stream stream, TransportContext context)
    {
        var buffer = new byte[_bufferSize];
        long totalBytesRead = 0;
        long totalBytes = _content.Length;
        int bytesRead;
        
        _content.Position = 0;
        
        while ((bytesRead = await _content.ReadAsync(buffer, 0, buffer.Length)) > 0)
        {
            await stream.WriteAsync(buffer, 0, bytesRead);
            
            totalBytesRead += bytesRead;
            _progress?.Invoke(totalBytesRead, totalBytes);
        }
    }
}
```

### HttpClient Best Practices

```csharp
// HttpClient best practices
public class HttpClientBestPractices
{
    // 1. Reuse HttpClient instances
    // Bad: Creating a new HttpClient for each request
    public async Task BadPracticeAsync()
    {
        // This can lead to socket exhaustion
        using (var client = new HttpClient())
        {
            var response = await client.GetAsync("https://api.example.com");
        }
    }
    
    // Good: Reuse HttpClient instance
    private static readonly HttpClient SharedClient = new HttpClient();
    
    public async Task GoodPracticeAsync()
    {
        var response = await SharedClient.GetAsync("https://api.example.com");
    }
    
    // 2. Use HttpClientFactory in ASP.NET Core
    // In Startup.ConfigureServices:
    // services.AddHttpClient();
    
    // Inject IHttpClientFactory and use it:
    private readonly IHttpClientFactory _clientFactory;
    
    public HttpClientBestPractices(IHttpClientFactory clientFactory)
    {
        _clientFactory = clientFactory;
    }
    
    public async Task HttpClientFactoryExampleAsync()
    {
        var client = _clientFactory.CreateClient();
        var response = await client.GetAsync("https://api.example.com");
    }
    
    // 3. Named clients with HttpClientFactory
    // In Startup.ConfigureServices:
    // services.AddHttpClient("github", c =>
    // {
    //     c.BaseAddress = new Uri("https://api.github.com/");
    //     c.DefaultRequestHeaders.Add("Accept", "application/vnd.github.v3+json");
    //     c.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");
    // });
    
    public async Task NamedClientExampleAsync()
    {
        var client = _clientFactory.CreateClient("github");
        var response = await client.GetAsync("users/dotnet");
    }
    
    // 4. Typed clients with HttpClientFactory
    // In Startup.ConfigureServices:
    // services.AddHttpClient<GitHubService>();
    
    // 5. Use cancellation tokens
    public async Task CancellationExampleAsync(CancellationToken cancellationToken)
    {
        try
        {
            var response = await SharedClient.GetAsync(
                "https://api.example.com",
                cancellationToken
            );
        }
        catch (TaskCanceledException)
        {
            Console.WriteLine("Request was canceled");
        }
    }
    
    // 6. Handle transient errors with Polly
    // In Startup.ConfigureServices:
    // services.AddHttpClient("github")
    //     .AddTransientHttpErrorPolicy(p => 
    //         p.WaitAndRetryAsync(3, _ => TimeSpan.FromMilliseconds(600)));
}

// Typed client example
public class GitHubService
{
    private readonly HttpClient _httpClient;
    
    public GitHubService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri("https://api.github.com/");
        _httpClient.DefaultRequestHeaders.Add("Accept", "application/vnd.github.v3+json");
        _httpClient.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");
    }
    
    public async Task<IEnumerable<GitHubRepo>> GetReposAsync()
    {
        var response = await _httpClient.GetAsync("repositories");
        response.EnsureSuccessStatusCode();
        
        return await JsonSerializer.DeserializeAsync<IEnumerable<GitHubRepo>>(
            await response.Content.ReadAsStreamAsync()
        );
    }
}

public class GitHubRepo
{
    public long Id { get; set; }
    public string Name { get; set; }
    public string FullName { get; set; }
    public string HtmlUrl { get; set; }
}
```

## TCP/IP Networking

### TcpClient and TcpListener

```csharp
// TCP client example
public async Task TcpClientExampleAsync()
{
    using (TcpClient client = new TcpClient())
    {
        // Connect to the server
        await client.ConnectAsync("example.com", 8080);
        
        // Get the network stream
        using (NetworkStream stream = client.GetStream())
        {
            // Send data
            byte[] requestData = Encoding.ASCII.GetBytes("Hello, server!");
            await stream.WriteAsync(requestData, 0, requestData.Length);
            
            // Receive data
            byte[] buffer = new byte[1024];
            int bytesRead = await stream.ReadAsync(buffer, 0, buffer.Length);
            string response = Encoding.ASCII.GetString(buffer, 0, bytesRead);
            
            Console.WriteLine($"Received: {response}");
        }
    }
}

// TCP server example
public async Task TcpServerExampleAsync()
{
    // Create a TCP listener on localhost port 8080
    TcpListener listener = new TcpListener(IPAddress.Any, 8080);
    
    try
    {
        // Start listening for client connections
        listener.Start();
        Console.WriteLine("Server started. Waiting for connections...");
        
        while (true)
        {
            // Accept a client connection
            TcpClient client = await listener.AcceptTcpClientAsync();
            Console.WriteLine("Client connected!");
            
            // Handle the client connection in a separate task
            _ = HandleClientAsync(client);
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Server error: {ex.Message}");
    }
    finally
    {
        // Stop listening
        listener.Stop();
    }
}

private async Task HandleClientAsync(TcpClient client)
{
    try
    {
        using (client)
        using (NetworkStream stream = client.GetStream())
        {
            // Read data from the client
            byte[] buffer = new byte[1024];
            int bytesRead = await stream.ReadAsync(buffer, 0, buffer.Length);
            string request = Encoding.ASCII.GetString(buffer, 0, bytesRead);
            
            Console.WriteLine($"Received: {request}");
            
            // Process the request (in a real application)
            string response = $"Echo: {request}";
            
            // Send response back to the client
            byte[] responseData = Encoding.ASCII.GetBytes(response);
            await stream.WriteAsync(responseData, 0, responseData.Length);
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error handling client: {ex.Message}");
    }
}
```

### UdpClient

```csharp
// UDP client example
public async Task UdpClientExampleAsync()
{
    using (UdpClient client = new UdpClient())
    {
        // Send data to the server
        byte[] data = Encoding.ASCII.GetBytes("Hello, UDP server!");
        await client.SendAsync(data, data.Length, "example.com", 8080);
        
        // Receive response
        UdpReceiveResult result = await client.ReceiveAsync();
        string response = Encoding.ASCII.GetString(result.Buffer);
        
        Console.WriteLine($"Received: {response} from {result.RemoteEndPoint}");
    }
}

// UDP server example
public async Task UdpServerExampleAsync()
{
    // Create a UDP listener on port 8080
    using (UdpClient listener = new UdpClient(8080))
    {
        Console.WriteLine("UDP server started. Waiting for messages...");
        
        while (true)
        {
            try
            {
                // Receive data
                UdpReceiveResult result = await listener.ReceiveAsync();
                string message = Encoding.ASCII.GetString(result.Buffer);
                IPEndPoint clientEndPoint = result.RemoteEndPoint;
                
                Console.WriteLine($"Received: {message} from {clientEndPoint}");
                
                // Send response back to the client
                string response = $"Echo: {message}";
                byte[] responseData = Encoding.ASCII.GetBytes(response);
                await listener.SendAsync(responseData, responseData.Length, clientEndPoint);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}
```

### Socket Programming

```csharp
// Socket client example
public async Task SocketClientExampleAsync()
{
    // Create a TCP/IP socket
    using (Socket client = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp))
    {
        // Connect to the server
        await client.ConnectAsync("example.com", 8080);
        
        // Send data
        byte[] requestData = Encoding.ASCII.GetBytes("Hello from socket client!");
        await client.SendAsync(new ArraySegment<byte>(requestData), SocketFlags.None);
        
        // Receive data
        byte[] buffer = new byte[1024];
        int bytesRead = await client.ReceiveAsync(new ArraySegment<byte>(buffer), SocketFlags.None);
        string response = Encoding.ASCII.GetString(buffer, 0, bytesRead);
        
        Console.WriteLine($"Received: {response}");
    }
}

// Socket server example
public async Task SocketServerExampleAsync()
{
    // Create a TCP/IP socket
    using (Socket listener = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp))
    {
        // Bind the socket to the local endpoint
        IPEndPoint localEndPoint = new IPEndPoint(IPAddress.Any, 8080);
        listener.Bind(localEndPoint);
        
        // Listen for incoming connections
        listener.Listen(100);
        Console.WriteLine("Socket server started. Waiting for connections...");
        
        while (true)
        {
            // Accept a client connection
            Socket handler = await listener.AcceptAsync();
            
            // Handle the client connection in a separate task
            _ = HandleSocketClientAsync(handler);
        }
    }
}

private async Task HandleSocketClientAsync(Socket handler)
{
    try
    {
        using (handler)
        {
            // Receive data from the client
            byte[] buffer = new byte[1024];
            int bytesRead = await handler.ReceiveAsync(new ArraySegment<byte>(buffer), SocketFlags.None);
            string request = Encoding.ASCII.GetString(buffer, 0, bytesRead);
            
            Console.WriteLine($"Received: {request}");
            
            // Send response back to the client
            string response = $"Echo: {request}";
            byte[] responseData = Encoding.ASCII.GetBytes(response);
            await handler.SendAsync(new ArraySegment<byte>(responseData), SocketFlags.None);
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error handling socket client: {ex.Message}");
    }
}
```

### Asynchronous Socket Programming

```csharp
// Asynchronous socket server with SocketAsyncEventArgs
public class AsyncSocketServer
{
    private Socket _listener;
    private readonly int _port;
    private readonly int _maxConnections;
    private readonly Semaphore _maxConnectionsEnforcer;
    private readonly BufferManager _bufferManager;
    private readonly SocketAsyncEventArgsPool _readWritePool;
    
    public AsyncSocketServer(int port, int maxConnections)
    {
        _port = port;
        _maxConnections = maxConnections;
        _maxConnectionsEnforcer = new Semaphore(maxConnections, maxConnections);
        
        // Create a buffer manager to handle buffers for all socket operations
        int bufferSize = 1024;
        _bufferManager = new BufferManager(bufferSize * maxConnections, bufferSize);
        
        // Create a pool of SocketAsyncEventArgs objects for read/write operations
        _readWritePool = new SocketAsyncEventArgsPool(maxConnections);
        
        // Initialize the buffer manager and event args pool
        Init();
    }
    
    private void Init()
    {
        // Initialize the buffer manager
        _bufferManager.InitBuffer();
        
        // Preallocate SocketAsyncEventArgs objects
        for (int i = 0; i < _maxConnections; i++)
        {
            SocketAsyncEventArgs args = new SocketAsyncEventArgs();
            args.Completed += IO_Completed;
            
            // Assign a buffer from the buffer manager
            _bufferManager.SetBuffer(args);
            
            // Add to the pool
            _readWritePool.Push(args);
        }
    }
    
    public void Start()
    {
        // Create the listening socket
        _listener = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
        _listener.Bind(new IPEndPoint(IPAddress.Any, _port));
        _listener.Listen(_maxConnections);
        
        Console.WriteLine($"Server started on port {_port}");
        
        // Start accepting connections
        StartAccept(null);
    }
    
    private void StartAccept(SocketAsyncEventArgs acceptEventArg)
    {
        if (acceptEventArg == null)
        {
            acceptEventArg = new SocketAsyncEventArgs();
            acceptEventArg.Completed += AcceptCompleted;
        }
        else
        {
            // Clear the socket from the previous accept operation
            acceptEventArg.AcceptSocket = null;
        }
        
        // Block if we've reached the maximum number of connections
        _maxConnectionsEnforcer.WaitOne();
        
        // Accept the next connection
        bool willRaiseEvent = _listener.AcceptAsync(acceptEventArg);
        if (!willRaiseEvent)
        {
            ProcessAccept(acceptEventArg);
        }
    }
    
    private void AcceptCompleted(object sender, SocketAsyncEventArgs e)
    {
        ProcessAccept(e);
    }
    
    private void ProcessAccept(SocketAsyncEventArgs e)
    {
        if (e.SocketError == SocketError.Success)
        {
            // Get a SocketAsyncEventArgs from the pool for the new connection
            SocketAsyncEventArgs readEventArgs = _readWritePool.Pop();
            if (readEventArgs != null)
            {
                // Associate the socket with the SocketAsyncEventArgs
                readEventArgs.UserToken = e.AcceptSocket;
                
                // Begin receiving data
                bool willRaiseEvent = e.AcceptSocket.ReceiveAsync(readEventArgs);
                if (!willRaiseEvent)
                {
                    ProcessReceive(readEventArgs);
                }
            }
            else
            {
                // No SocketAsyncEventArgs available, close the socket
                e.AcceptSocket.Close();
                _maxConnectionsEnforcer.Release();
            }
        }
        
        // Accept the next connection
        StartAccept(e);
    }
    
    private void IO_Completed(object sender, SocketAsyncEventArgs e)
    {
        switch (e.LastOperation)
        {
            case SocketAsyncOperation.Receive:
                ProcessReceive(e);
                break;
            case SocketAsyncOperation.Send:
                ProcessSend(e);
                break;
            default:
                throw new ArgumentException("The last operation completed on the socket was not a receive or send");
        }
    }
    
    private void ProcessReceive(SocketAsyncEventArgs e)
    {
        Socket socket = (Socket)e.UserToken;
        
        if (e.SocketError == SocketError.Success && e.BytesTransferred > 0)
        {
            // Process the received data
            string receivedData = Encoding.ASCII.GetString(e.Buffer, e.Offset, e.BytesTransferred);
            Console.WriteLine($"Received: {receivedData}");
            
            // Prepare the response
            string response = $"Echo: {receivedData}";
            byte[] responseData = Encoding.ASCII.GetBytes(response);
            
            // Copy the response to the buffer
            Buffer.BlockCopy(responseData, 0, e.Buffer, e.Offset, responseData.Length);
            e.SetBuffer(e.Offset, responseData.Length);
            
            // Send the response
            bool willRaiseEvent = socket.SendAsync(e);
            if (!willRaiseEvent)
            {
                ProcessSend(e);
            }
        }
        else
        {
            CloseClientSocket(e);
        }
    }
    
    private void ProcessSend(SocketAsyncEventArgs e)
    {
        if (e.SocketError == SocketError.Success)
        {
            Socket socket = (Socket)e.UserToken;
            
            // Prepare to receive more data
            e.SetBuffer(e.Offset, _bufferManager.BufferSize);
            
            bool willRaiseEvent = socket.ReceiveAsync(e);
            if (!willRaiseEvent)
            {
                ProcessReceive(e);
            }
        }
        else
        {
            CloseClientSocket(e);
        }
    }
    
    private void CloseClientSocket(SocketAsyncEventArgs e)
    {
        Socket socket = (Socket)e.UserToken;
        
        try
        {
            socket.Shutdown(SocketShutdown.Both);
        }
        catch (Exception)
        {
            // The client has already closed the connection
        }
        
        socket.Close();
        
        // Release the SocketAsyncEventArgs back to the pool
        _readWritePool.Push(e);
        
        // Release the semaphore so another connection can be accepted
        _maxConnectionsEnforcer.Release();
    }
    
    public void Stop()
    {
        _listener.Close();
    }
}

// Helper classes for the async socket server
public class BufferManager
{
    private readonly int _numBytes;
    private readonly int _bufferSize;
    private byte[] _buffer;
    private Stack<int> _freeIndexPool;
    private int _currentIndex;
    
    public int BufferSize => _bufferSize;
    
    public BufferManager(int totalBytes, int bufferSize)
    {
        _numBytes = totalBytes;
        _bufferSize = bufferSize;
        _currentIndex = 0;
        _freeIndexPool = new Stack<int>();
    }
    
    public void InitBuffer()
    {
        _buffer = new byte[_numBytes];
    }
    
    public bool SetBuffer(SocketAsyncEventArgs args)
    {
        if (_freeIndexPool.Count > 0)
        {
            args.SetBuffer(_buffer, _freeIndexPool.Pop(), _bufferSize);
        }
        else
        {
            if ((_numBytes - _bufferSize) < _currentIndex)
            {
                return false;
            }
            
            args.SetBuffer(_buffer, _currentIndex, _bufferSize);
            _currentIndex += _bufferSize;
        }
        
        return true;
    }
    
    public void FreeBuffer(SocketAsyncEventArgs args)
    {
        _freeIndexPool.Push(args.Offset);
        args.SetBuffer(null, 0, 0);
    }
}

public class SocketAsyncEventArgsPool
{
    private readonly Stack<SocketAsyncEventArgs> _pool;
    
    public SocketAsyncEventArgsPool(int capacity)
    {
        _pool = new Stack<SocketAsyncEventArgs>(capacity);
    }
    
    public void Push(SocketAsyncEventArgs item)
    {
        if (item == null)
        {
            throw new ArgumentNullException(nameof(item));
        }
        
        lock (_pool)
        {
            _pool.Push(item);
        }
    }
    
    public SocketAsyncEventArgs Pop()
    {
        lock (_pool)
        {
            return _pool.Count > 0 ? _pool.Pop() : null;
        }
    }
}
```

## Web Sockets

### WebSocket Client

```csharp
// WebSocket client example
public async Task WebSocketClientExampleAsync()
{
    using (ClientWebSocket client = new ClientWebSocket())
    {
        // Connect to the WebSocket server
        Uri serverUri = new Uri("wss://echo.websocket.org");
        await client.ConnectAsync(serverUri, CancellationToken.None);
        
        Console.WriteLine("Connected to WebSocket server");
        
        // Send a message
        string message = "Hello, WebSocket server!";
        byte[] messageBytes = Encoding.UTF8.GetBytes(message);
        await client.SendAsync(
            new ArraySegment<byte>(messageBytes),
            WebSocketMessageType.Text,
            true,  // endOfMessage
            CancellationToken.None
        );
        
        Console.WriteLine($"Sent: {message}");
        
        // Receive the response
        byte[] buffer = new byte[1024];
        WebSocketReceiveResult result = await client.ReceiveAsync(
            new ArraySegment<byte>(buffer),
            CancellationToken.None
        );
        
        string response = Encoding.UTF8.GetString(buffer, 0, result.Count);
        Console.WriteLine($"Received: {response}");
        
        // Close the connection
        await client.CloseAsync(
            WebSocketCloseStatus.NormalClosure,
            "Closing",
            CancellationToken.None
        );
    }
}

// WebSocket client with continuous communication
public async Task WebSocketContinuousCommunicationAsync()
{
    using (ClientWebSocket client = new ClientWebSocket())
    {
        await client.ConnectAsync(new Uri("wss://echo.websocket.org"), CancellationToken.None);
        
        // Start a task to receive messages
        var receiveTask = ReceiveMessagesAsync(client);
        
        // Send messages
        for (int i = 0; i < 5; i++)
        {
            string message = $"Message {i}";
            byte[] messageBytes = Encoding.UTF8.GetBytes(message);
            
            await client.SendAsync(
                new ArraySegment<byte>(messageBytes),
                WebSocketMessageType.Text,
                true,
                CancellationToken.None
            );
            
            Console.WriteLine($"Sent: {message}");
            
            // Wait a bit before sending the next message
            await Task.Delay(1000);
        }
        
        // Close the connection
        await client.CloseAsync(
            WebSocketCloseStatus.NormalClosure,
            "Closing",
            CancellationToken.None
        );
        
        // Wait for the receive task to complete
        await receiveTask;
    }
}

private async Task ReceiveMessagesAsync(ClientWebSocket client)
{
    byte[] buffer = new byte[1024];
    
    try
    {
        while (client.State == WebSocketState.Open)
        {
            WebSocketReceiveResult result = await client.ReceiveAsync(
                new ArraySegment<byte>(buffer),
                CancellationToken.None
            );
            
            if (result.MessageType == WebSocketMessageType.Close)
            {
                await client.CloseAsync(
                    WebSocketCloseStatus.NormalClosure,
                    "Closing",
                    CancellationToken.None
                );
            }
            else
            {
                string message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                Console.WriteLine($"Received: {message}");
            }
        }
    }
    catch (WebSocketException ex)
    {
        Console.WriteLine($"WebSocket error: {ex.Message}");
    }
}
```

### WebSocket Server (ASP.NET Core)

```csharp
// WebSocket server in ASP.NET Core
// In Startup.cs:

// Configure method
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    // ...
    
    // Add WebSocket middleware
    app.UseWebSockets(new WebSocketOptions
    {
        KeepAliveInterval = TimeSpan.FromMinutes(2),
        ReceiveBufferSize = 4 * 1024  // 4KB
    });
    
    // Handle WebSocket requests
    app.Use(async (context, next) =>
    {
        if (context.Request.Path == "/ws")
        {
            if (context.WebSockets.IsWebSocketRequest)
            {
                WebSocket webSocket = await context.WebSockets.AcceptWebSocketAsync();
                await HandleWebSocketAsync(webSocket);
            }
            else
            {
                context.Response.StatusCode = 400;
            }
        }
        else
        {
            await next();
        }
    });
    
    // ...
}

private async Task HandleWebSocketAsync(WebSocket webSocket)
{
    byte[] buffer = new byte[1024];
    WebSocketReceiveResult result = await webSocket.ReceiveAsync(
        new ArraySegment<byte>(buffer),
        CancellationToken.None
    );
    
    while (!result.CloseStatus.HasValue)
    {
        // Process the received message
        string message = Encoding.UTF8.GetString(buffer, 0, result.Count);
        Console.WriteLine($"Received: {message}");
        
        // Echo the message back
        await webSocket.SendAsync(
            new ArraySegment<byte>(buffer, 0, result.Count),
            result.MessageType,
            result.EndOfMessage,
            CancellationToken.None
        );
        
        // Receive the next message
        result = await webSocket.ReceiveAsync(
            new ArraySegment<byte>(buffer),
            CancellationToken.None
        );
    }
    
    // Close the WebSocket connection
    await webSocket.CloseAsync(
        result.CloseStatus.Value,
        result.CloseStatusDescription,
        CancellationToken.None
    );
}
```

## DNS and Network Information

### DNS Resolution

```csharp
// DNS resolution examples
public async Task DnsExamplesAsync()
{
    // Get IP addresses for a hostname
    IPHostEntry hostEntry = await Dns.GetHostEntryAsync("www.example.com");
    
    Console.WriteLine($"Host name: {hostEntry.HostName}");
    Console.WriteLine("IP Addresses:");
    
    foreach (IPAddress address in hostEntry.AddressList)
    {
        Console.WriteLine($"  {address} (IPv{(address.AddressFamily == AddressFamily.InterNetwork ? "4" : "6")})");
    }
    
    // Get host name from IP address
    IPHostEntry ipEntry = await Dns.GetHostEntryAsync("8.8.8.8");
    Console.WriteLine($"Host name for 8.8.8.8: {ipEntry.HostName}");
    
    // Get IP addresses directly
    IPAddress[] addresses = await Dns.GetHostAddressesAsync("www.example.com");
    
    foreach (IPAddress address in addresses)
    {
        Console.WriteLine($"Address: {address}");
    }
    
    // Resolve a service using SRV records (requires external DNS library)
    // Example using DnsClient.NET:
    // var lookup = new LookupClient();
    // var result = await lookup.QueryAsync("_sip._tcp.example.com", QueryType.SRV);
    // var srvRecords = result.Answers.SrvRecords();
    
    // foreach (var srv in srvRecords)
    // {
    //     Console.WriteLine($"Service: {srv.Target}:{srv.Port} (Priority: {srv.Priority}, Weight: {srv.Weight})");
    // }
}
```

### Network Information

```csharp
// Network information examples
public void NetworkInformationExamples()
{
    // Get all network interfaces
    NetworkInterface[] interfaces = NetworkInterface.GetAllNetworkInterfaces();
    
    foreach (NetworkInterface ni in interfaces)
    {
        Console.WriteLine($"Name: {ni.Name}");
        Console.WriteLine($"Description: {ni.Description}");
        Console.WriteLine($"Type: {ni.NetworkInterfaceType}");
        Console.WriteLine($"Status: {ni.OperationalStatus}");
        Console.WriteLine($"Speed: {ni.Speed / 1000000} Mbps");
        Console.WriteLine($"MAC Address: {string.Join(":", ni.GetPhysicalAddress().GetAddressBytes().Select(b => b.ToString("X2")))}");
        
        // Get IP properties
        IPInterfaceProperties ipProps = ni.GetIPProperties();
        
        // Get unicast addresses (IPv4 and IPv6)
        Console.WriteLine("IP Addresses:");
        foreach (UnicastIPAddressInformation addr in ipProps.UnicastAddresses)
        {
            Console.WriteLine($"  {addr.Address} (Subnet mask: {addr.IPv4Mask})");
        }
        
        // Get gateway addresses
        Console.WriteLine("Gateways:");
        foreach (GatewayIPAddressInformation gateway in ipProps.GatewayAddresses)
        {
            Console.WriteLine($"  {gateway.Address}");
        }
        
        // Get DNS servers
        Console.WriteLine("DNS Servers:");
        foreach (IPAddress dns in ipProps.DnsAddresses)
        {
            Console.WriteLine($"  {dns}");
        }
        
        Console.WriteLine();
    }
    
    // Check if network is available
    bool networkAvailable = NetworkInterface.GetIsNetworkAvailable();
    Console.WriteLine($"Network available: {networkAvailable}");
    
    // Get IPv4 statistics
    NetworkInterface primaryInterface = interfaces.FirstOrDefault(ni => 
        ni.OperationalStatus == OperationalStatus.Up && 
        ni.NetworkInterfaceType != NetworkInterfaceType.Loopback);
    
    if (primaryInterface != null)
    {
        IPv4InterfaceStatistics stats = primaryInterface.GetIPv4Statistics();
        
        Console.WriteLine($"Bytes received: {stats.BytesReceived}");
        Console.WriteLine($"Bytes sent: {stats.BytesSent}");
        Console.WriteLine($"Incoming packets discarded: {stats.IncomingPacketsDiscarded}");
        Console.WriteLine($"Outgoing packets discarded: {stats.OutgoingPacketsDiscarded}");
    }
    
    // Ping a host
    using (Ping ping = new Ping())
    {
        PingReply reply = ping.Send("www.example.com");
        
        Console.WriteLine($"Ping status: {reply.Status}");
        if (reply.Status == IPStatus.Success)
        {
            Console.WriteLine($"Round-trip time: {reply.RoundtripTime} ms");
            Console.WriteLine($"TTL: {reply.Options.Ttl}");
        }
    }
}
```

## Network Security

### SSL/TLS

```csharp
// SSL/TLS examples
public async Task SslTlsExamplesAsync()
{
    // Create a TCP client
    using (TcpClient client = new TcpClient())
    {
        // Connect to the server
        await client.ConnectAsync("example.com", 443);
        
        // Create an SSL stream over the TCP connection
        using (SslStream sslStream = new SslStream(
            client.GetStream(),
            false,  // Don't leave the inner stream open
            ValidateServerCertificate,  // Certificate validation callback
            null    // Certificate selection callback
        ))
        {
            // Authenticate as a client (TLS handshake)
            await sslStream.AuthenticateAsClientAsync(
                "example.com",  // Target host name
                null,           // Client certificates
                SslProtocols.Tls12 | SslProtocols.Tls13,  // Allowed protocols
                false           // Don't check certificate revocation
            );
            
            // Check SSL/TLS details
            Console.WriteLine($"SSL/TLS Protocol: {sslStream.SslProtocol}");
            Console.WriteLine($"Cipher Algorithm: {sslStream.CipherAlgorithm}");
            Console.WriteLine($"Cipher Strength: {sslStream.CipherStrength}");
            Console.WriteLine($"Hash Algorithm: {sslStream.HashAlgorithm}");
            Console.WriteLine($"Hash Strength: {sslStream.HashStrength}");
            Console.WriteLine($"Key Exchange Algorithm: {sslStream.KeyExchangeAlgorithm}");
            Console.WriteLine($"Key Exchange Strength: {sslStream.KeyExchangeStrength}");
            
            // Get the server certificate
            X509Certificate remoteCertificate = sslStream.RemoteCertificate;
            Console.WriteLine($"Server certificate: {remoteCertificate.Subject}");
            Console.WriteLine($"Issued by: {remoteCertificate.Issuer}");
            Console.WriteLine($"Valid from: {remoteCertificate.GetEffectiveDateString()}");
            Console.WriteLine($"Valid until: {remoteCertificate.GetExpirationDateString()}");
            
            // Send a request (e.g., HTTP)
            string request = "GET / HTTP/1.1\r\nHost: example.com\r\nConnection: close\r\n\r\n";
            byte[] requestBytes = Encoding.ASCII.GetBytes(request);
            await sslStream.WriteAsync(requestBytes, 0, requestBytes.Length);
            
            // Read the response
            byte[] buffer = new byte[4096];
            int bytesRead = await sslStream.ReadAsync(buffer, 0, buffer.Length);
            string response = Encoding.ASCII.GetString(buffer, 0, bytesRead);
            
            Console.WriteLine("Response:");
            Console.WriteLine(response);
        }
    }
}

// Certificate validation callback
private bool ValidateServerCertificate(
    object sender,
    X509Certificate certificate,
    X509Chain chain,
    SslPolicyErrors sslPolicyErrors)
{
    // For production, you should implement proper certificate validation
    // This example just logs the errors and accepts the certificate
    
    if (sslPolicyErrors == SslPolicyErrors.None)
    {
        return true;  // Certificate is valid
    }
    
    Console.WriteLine($"Certificate error: {sslPolicyErrors}");
    
    // For testing purposes, you might want to accept the certificate anyway
    // In production, you should return false if there are errors
    return false;  // Reject the certificate
}

// SSL/TLS server example
public async Task SslTlsServerExampleAsync()
{
    // Create a TCP listener
    TcpListener listener = new TcpListener(IPAddress.Any, 8443);
    listener.Start();
    
    Console.WriteLine("SSL/TLS server started. Waiting for connections...");
    
    // Load the server certificate
    X509Certificate2 serverCertificate = new X509Certificate2(
        "server.pfx",  // Certificate file
        "password"     // Certificate password
    );
    
    while (true)
    {
        // Accept a client connection
        TcpClient client = await listener.AcceptTcpClientAsync();
        
        // Handle the client in a separate task
        _ = HandleSslClientAsync(client, serverCertificate);
    }
}

private async Task HandleSslClientAsync(TcpClient client, X509Certificate2 serverCertificate)
{
    try
    {
        using (client)
        {
            // Create an SSL stream over the TCP connection
            using (SslStream sslStream = new SslStream(
                client.GetStream(),
                false,
                null,  // No client certificate validation
                null
            ))
            {
                // Authenticate as a server (TLS handshake)
                await sslStream.AuthenticateAsServerAsync(
                    serverCertificate,
                    false,           // Don't require client certificate
                    SslProtocols.Tls12 | SslProtocols.Tls13,
                    false            // Don't check certificate revocation
                );
                
                // Read the client request
                byte[] buffer = new byte[4096];
                int bytesRead = await sslStream.ReadAsync(buffer, 0, buffer.Length);
                string request = Encoding.ASCII.GetString(buffer, 0, bytesRead);
                
                Console.WriteLine($"Received: {request}");
                
                // Send a response
                string response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: 13\r\n\r\nHello, World!";
                byte[] responseBytes = Encoding.ASCII.GetBytes(response);
                await sslStream.WriteAsync(responseBytes, 0, responseBytes.Length);
            }
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error handling SSL/TLS client: {ex.Message}");
    }
}
```

### Certificate Management

```csharp
// Certificate management examples
public void CertificateManagementExamples()
{
    // Load a certificate from a file
    X509Certificate2 cert = new X509Certificate2(
        "certificate.pfx",  // Certificate file
        "password"          // Certificate password
    );
    
    // Display certificate information
    Console.WriteLine($"Subject: {cert.Subject}");
    Console.WriteLine($"Issuer: {cert.Issuer}");
    Console.WriteLine($"Valid from: {cert.NotBefore}");
    Console.WriteLine($"Valid until: {cert.NotAfter}");
    Console.WriteLine($"Thumbprint: {cert.Thumbprint}");
    Console.WriteLine($"Serial number: {cert.SerialNumber}");
    Console.WriteLine($"Version: {cert.Version}");
    
    // Check if the certificate has a private key
    Console.WriteLine($"Has private key: {cert.HasPrivateKey}");
    
    // Access the certificate's public key
    RSA publicKey = cert.GetRSAPublicKey();
    if (publicKey != null)
    {
        Console.WriteLine($"Public key size: {publicKey.KeySize} bits");
    }
    
    // Access the certificate's private key (if available)
    if (cert.HasPrivateKey)
    {
        RSA privateKey = cert.GetRSAPrivateKey();
        if (privateKey != null)
        {
            Console.WriteLine($"Private key size: {privateKey.KeySize} bits");
        }
    }
    
    // Access certificate extensions
    foreach (X509Extension extension in cert.Extensions)
    {
        Console.WriteLine($"Extension: {extension.Oid.FriendlyName}");
    }
    
    // Access the certificate store
    using (X509Store store = new X509Store(StoreName.My, StoreLocation.CurrentUser))
    {
        // Open the store
        store.Open(OpenFlags.ReadOnly);
        
        // List all certificates in the store
        Console.WriteLine("Certificates in the personal store:");
        foreach (X509Certificate2 storeCert in store.Certificates)
        {
            Console.WriteLine($"  {storeCert.Subject} ({storeCert.Thumbprint})");
        }
        
        // Find a certificate by thumbprint
        string thumbprint = "1234567890ABCDEF1234567890ABCDEF12345678";
        X509Certificate2Collection foundCerts = store.Certificates.Find(
            X509FindType.FindByThumbprint,
            thumbprint,
            false  // Don't validate certificates
        );
        
        if (foundCerts.Count > 0)
        {
            Console.WriteLine($"Found certificate: {foundCerts[0].Subject}");
        }
        
        // Find certificates by subject name
        X509Certificate2Collection subjectCerts = store.Certificates.Find(
            X509FindType.FindBySubjectName,
            "example.com",
            false
        );
        
        Console.WriteLine($"Found {subjectCerts.Count} certificates for example.com");
    }
    
    // Create a certificate chain
    using (X509Chain chain = new X509Chain())
    {
        // Configure the chain
        chain.ChainPolicy.RevocationMode = X509RevocationMode.Online;
        chain.ChainPolicy.RevocationFlag = X509RevocationFlag.EntireChain;
        chain.ChainPolicy.VerificationFlags = X509VerificationFlags.NoFlag;
        
        // Build the chain for the certificate
        bool isValid = chain.Build(cert);
        
        Console.WriteLine($"Certificate chain is valid: {isValid}");
        
        // If the chain building failed, show the status of each element
        if (!isValid)
        {
            foreach (X509ChainElement element in chain.ChainElements)
            {
                Console.WriteLine($"Chain element: {element.Certificate.Subject}");
                
                foreach (X509ChainStatus status in element.ChainElementStatus)
                {
                    Console.WriteLine($"  Status: {status.Status}");
                    Console.WriteLine($"  Information: {status.StatusInformation}");
                }
            }
        }
    }
}
```

## Resources

- [HttpClient Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient)
- [TCP Client-Server Communication (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/network-programming/tcp-client-server)
- [UDP Client-Server Communication (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/network-programming/udp-client-server)
- [WebSockets in ASP.NET Core (Microsoft Docs)](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/websockets)
- [Network Programming in .NET (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/network-programming/)

# 20. Interoperability

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

# 21. Code Organization

Proper code organization is essential for maintainability, readability, and collaboration. C# provides several mechanisms to structure and organize your code effectively.

## Namespaces

Namespaces organize code into logical groups and prevent naming conflicts.

### Declaring Namespaces

```csharp
// Traditional namespace declaration
namespace MyCompany.MyProduct.Core
{
    public class Logger
    {
        // Class implementation
    }
}

// File-scoped namespace declaration (C# 10+)
namespace MyCompany.MyProduct.Services;

public class UserService
{
    // Class implementation
}
```

### Nested Namespaces

```csharp
namespace MyCompany.MyProduct
{
    // Types in the MyCompany.MyProduct namespace
    public class Product { }
    
    namespace Core
    {
        // Types in the MyCompany.MyProduct.Core namespace
        public class Engine { }
    }
    
    namespace UI
    {
        // Types in the MyCompany.MyProduct.UI namespace
        public class Window { }
    }
}
```

### Namespace Best Practices

- Use a hierarchical naming scheme (e.g., `CompanyName.ProductName.ComponentName`)
- Avoid using the same name for a namespace and a type within that namespace
- Keep namespaces focused on a specific functionality or component
- Use PascalCase for namespace names

## Using Directives

Using directives simplify code by eliminating the need to specify fully qualified type names.

### Basic Using Directives

```csharp
// Import namespaces
using System;
using System.Collections.Generic;
using System.Linq;

// Now you can use types from these namespaces without qualification
List<int> numbers = new List<int>();
DateTime now = DateTime.Now;
```

### Static Using Directives

```csharp
// Import static members
using static System.Math;
using static System.Console;

// Use static members directly
double result = Sqrt(16);
WriteLine("The square root of 16 is " + result);
```

### Using Aliases

```csharp
// Create aliases for namespaces or types
using Process = System.Diagnostics.Process;
using Text = System.Text;
using WinForm = System.Windows.Forms.Form;

// Use the aliases
Process currentProcess = Process.GetCurrentProcess();
Text.StringBuilder sb = new Text.StringBuilder();
```

### Global Using Directives (C# 10+)

Global using directives apply to all files in the project:

```csharp
// In a file like GlobalUsings.cs
global using System;
global using System.Collections.Generic;
global using System.Linq;
global using System.Threading.Tasks;
```

You can also enable implicit usings in your project file:

```xml
<PropertyGroup>
  <ImplicitUsings>enable</ImplicitUsings>
</PropertyGroup>
```

## File-Scoped Types (C# 11+)

File-scoped types are only visible within the file where they're declared:

```csharp
// This class is only visible within this file
file class Helper
{
    public static void DoSomething() { }
}

// Public class that can use the file-scoped Helper
public class PublicService
{
    public void Process()
    {
        // Can use Helper because it's in the same file
        Helper.DoSomething();
    }
}
```

File-scoped types are useful for:
- Implementation details that shouldn't be exposed
- Source generators that need to avoid naming conflicts
- Utility classes used only within a specific file

## Partial Types

Partial types allow splitting a class, struct, or interface definition across multiple files.

### Basic Partial Classes

```csharp
// In File1.cs
partial class Customer
{
    public string Name { get; set; }
    public string Email { get; set; }
    
    public void UpdateProfile() { /* ... */ }
}

// In File2.cs
partial class Customer
{
    public string Address { get; set; }
    public string Phone { get; set; }
    
    public void PlaceOrder() { /* ... */ }
}
```

### Partial Methods

Partial methods allow one part to declare a method that another part can optionally implement:

```csharp
// In GeneratedCode.cs (possibly auto-generated)
partial class Order
{
    // Declaration only - no implementation required
    partial void OnOrderProcessed(DateTime processedTime);
    
    public void Process()
    {
        // Business logic
        
        // Call the partial method - does nothing if not implemented
        OnOrderProcessed(DateTime.Now);
    }
}

// In UserCode.cs
partial class Order
{
    // Implementation of the partial method
    partial void OnOrderProcessed(DateTime processedTime)
    {
        Console.WriteLine($"Order processed at {processedTime}");
        // Custom logic here
    }
}
```

### Partial Properties and Indexers (C# 13+)

C# 13 introduced partial properties and indexers:

```csharp
// In File1.cs
partial class Document
{
    // Declare the property
    public partial string Title { get; }
    
    // Declare the indexer
    public partial string this[int index] { get; }
}

// In File2.cs
partial class Document
{
    // Implement the property
    public partial string Title => _title;
    
    // Implement the indexer
    public partial string this[int index] => _sections[index];
}
```

### Partial Events (C# 14+)

C# 14 introduced partial events:

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
    // Implement the event
    public partial event EventHandler<DataProcessedEventArgs> DataProcessed;
}
```

## Access Modifiers

Access modifiers control the visibility and accessibility of types and members.

### Type-Level Access Modifiers

```csharp
// Public - accessible from any assembly
public class PublicClass { }

// Internal - accessible only within the same assembly
internal class InternalClass { }

// File-scoped (C# 11+) - accessible only within the same file
file class FileClass { }

// Private (nested classes only) - accessible only within the containing type
public class Container
{
    private class PrivateNestedClass { }
}
```

### Member-Level Access Modifiers

```csharp
public class Example
{
    // Public - accessible from any code
    public int PublicField;
    
    // Private - accessible only within this class
    private int _privateField;
    
    // Protected - accessible within this class and derived classes
    protected int ProtectedField;
    
    // Internal - accessible within the same assembly
    internal int InternalField;
    
    // Protected Internal - accessible within the same assembly OR derived classes
    protected internal int ProtectedInternalField;
    
    // Private Protected (C# 7.2+) - accessible within the same assembly AND derived classes
    private protected int PrivateProtectedField;
}
```

### Access Modifier Best Practices

- Use the most restrictive access level that works for your needs
- Make fields private and expose them through properties if needed
- Use internal for types that should only be used within your assembly
- Use protected sparingly and only when inheritance is part of the design

## Internal vs Public

Choosing between `internal` and `public` is an important architectural decision:

- **Public**: Use for types and members that form your library's API
- **Internal**: Use for implementation details that should be hidden from consumers

```csharp
// Public API
public interface IUserService
{
    User GetUser(int id);
    void UpdateUser(User user);
}

// Internal implementation
internal class UserService : IUserService
{
    private readonly IUserRepository _repository;
    
    internal UserService(IUserRepository repository)
    {
        _repository = repository;
    }
    
    public User GetUser(int id) => _repository.GetById(id);
    
    public void UpdateUser(User user) => _repository.Update(user);
    
    // Internal helper methods
    internal void ValidateUser(User user) { /* ... */ }
}
```

### Making Internals Visible to Other Assemblies

You can selectively expose internal types to specific assemblies:

```csharp
// In AssemblyInfo.cs or any .cs file
[assembly: InternalsVisibleTo("MyCompany.MyProduct.Tests")]
[assembly: InternalsVisibleTo("MyCompany.MyProduct.DesignTime")]
```

## Resources

- [Namespaces (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace)
- [Using Directives (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-directive)
- [Access Modifiers (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/access-modifiers)
- [Partial Classes and Methods (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods)
- [File-Scoped Namespaces (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace#file-scoped-namespace-declaration)

# 22. Advanced Language Features

C# continues to evolve with powerful features that enhance productivity, code quality, and performance. This section covers advanced language features that may not fit neatly into other categories.

## Tuples and Deconstruction

Tuples provide a lightweight way to group multiple values without defining a specific type.

### Tuple Literals

```csharp
// Creating tuples
var person = ("John", 30);
(string Name, int Age) employee = ("Alice", 25);
(string Name, int Age, decimal Salary) manager = ("Bob", 40, 75000m);

// Accessing tuple elements
Console.WriteLine(person.Item1); // John
Console.WriteLine(employee.Name); // Alice
Console.WriteLine(manager.Salary); // 75000
```

### Named Tuple Elements

```csharp
// Explicit naming
var product = (Name: "Laptop", Price: 999.99m);
Console.WriteLine($"{product.Name}: ${product.Price}");

// Implicit naming from variables
string name = "Tablet";
decimal price = 499.99m;
var item = (name, price);
Console.WriteLine($"{item.name}: ${item.price}");
```

### Tuple Equality (C# 7.3+)

```csharp
var tuple1 = (Name: "John", Age: 30);
var tuple2 = (Name: "John", Age: 30);
var tuple3 = (Name: "Alice", Age: 25);

Console.WriteLine(tuple1 == tuple2); // True
Console.WriteLine(tuple1 == tuple3); // False
```

### Tuple Deconstruction

```csharp
// Basic deconstruction
var point = (10, 20);
var (x, y) = point;
Console.WriteLine($"X: {x}, Y: {y}");

// Deconstruction with existing variables
int width, height;
(width, height) = (1920, 1080);

// Partial deconstruction with discard
var person = ("John", "Doe", 30);
var (firstName, _, age) = person;
```

### Custom Deconstruction

You can add deconstruction support to your own types:

```csharp
public class Point
{
    public int X { get; }
    public int Y { get; }
    
    public Point(int x, int y) => (X, Y) = (x, y);
    
    // Deconstructor method
    public void Deconstruct(out int x, out int y) => (x, y) = (X, Y);
}

// Usage
var point = new Point(10, 20);
var (x, y) = point;
```

## Indices and Ranges (C# 8+)

Indices and ranges provide a concise syntax for accessing single elements or ranges of elements in a sequence.

### Index Operator

The `^` operator indicates an index from the end:

```csharp
string[] colors = { "red", "green", "blue", "yellow", "purple" };

// Access from start (0-based)
string first = colors[0]; // "red"

// Access from end (^1 means "1 from the end")
string last = colors[^1]; // "purple"
string secondLast = colors[^2]; // "yellow"

// Create Index objects
Index start = 0;
Index end = ^1;
string firstColor = colors[start]; // "red"
string lastColor = colors[end]; // "purple"
```

### Range Operator

The `..` operator creates a range:

```csharp
string[] colors = { "red", "green", "blue", "yellow", "purple" };

// Get a range (start is inclusive, end is exclusive)
string[] middle = colors[1..4]; // ["green", "blue", "yellow"]

// Ranges with open ends
string[] fromStart = colors[..3]; // ["red", "green", "blue"]
string[] toEnd = colors[2..]; // ["blue", "yellow", "purple"]

// Range from Index objects
Index start = 1;
Index end = ^1;
string[] subset = colors[start..end]; // ["green", "blue", "yellow"]

// Create a Range object
Range middleRange = 1..4;
string[] middleColors = colors[middleRange]; // ["green", "blue", "yellow"]

// Copy the entire array
string[] allColors = colors[..]; // ["red", "green", "blue", "yellow", "purple"]
```

### Custom Index and Range Support

You can add support for indices and ranges to your own types:

```csharp
public class MyCollection<T>
{
    private readonly T[] _items;
    
    public MyCollection(T[] items) => _items = items;
    
    // Index support
    public T this[Index index] => _items[index];
    
    // Range support
    public T[] this[Range range]
    {
        get
        {
            var (start, length) = range.GetOffsetAndLength(_items.Length);
            var result = new T[length];
            Array.Copy(_items, start, result, 0, length);
            return result;
        }
    }
}
```

## Nullable Reference Types (C# 8+)

Nullable reference types help prevent null reference exceptions by making nullability explicit in the type system.

### Enabling Nullable Reference Types

```csharp
// In a project file:
<PropertyGroup>
  <Nullable>enable</Nullable>
</PropertyGroup>

// Or at the file level:
#nullable enable
```

### Nullable and Non-Nullable References

```csharp
// Non-nullable reference type (can't be null)
string nonNullable = "Hello";
nonNullable = null; // Warning: Assignment of null to non-nullable reference

// Nullable reference type (can be null)
string? nullable = "Hello";
nullable = null; // OK

// Warning for possible null dereference
string? name = GetName();
int length = name.Length; // Warning: Possible null reference exception

// Null check to suppress warning
if (name != null)
{
    int length = name.Length; // OK
}

// Null-conditional operator
int? length = name?.Length;

// Null-forgiving operator (use with caution)
int length = name!.Length; // "Trust me, it's not null"
```

### Nullable Contexts

You can control nullable analysis with directives:

```csharp
#nullable enable // Enable nullable reference types
#nullable disable // Disable nullable reference types
#nullable restore // Restore to project setting

#nullable disable warnings // Keep annotations but disable warnings
#nullable enable warnings // Re-enable warnings

// Example
#nullable disable
public class LegacyCode
{
    // No nullable warnings here
}

#nullable enable
public class ModernCode
{
    // Nullable warnings active here
}
```

## Required Members (C# 11+)

Required members ensure that properties or fields are initialized during object creation.

```csharp
public class Person
{
    // These properties must be initialized when creating a Person
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    
    // Optional property
    public int? Age { get; set; }
}

// Usage
var person = new Person
{
    FirstName = "John", // Required
    LastName = "Doe"    // Required
    // Age is optional
};
```

### SetsRequiredMembers Attribute

```csharp
public class Person
{
    public required string FirstName { get; set; }
    public required string LastName { get; set; }
    
    // This constructor sets all required members
    [SetsRequiredMembers]
    public Person(string fullName)
    {
        var parts = fullName.Split(' ');
        FirstName = parts[0];
        LastName = parts[1];
    }
}

// Can now create without explicitly setting required properties
var person = new Person("John Doe");
```

## Init-only Properties (C# 9+)

Init-only properties can only be set during object initialization, making objects immutable after creation.

```csharp
public class ImmutablePerson
{
    // Can only be set during initialization
    public string FirstName { get; init; }
    public string LastName { get; init; }
    public DateTime DateOfBirth { get; init; }
    
    // Calculated property
    public int Age => DateTime.Now.Year - DateOfBirth.Year;
}

// Usage
var person = new ImmutablePerson
{
    FirstName = "John",
    LastName = "Doe",
    DateOfBirth = new DateTime(1990, 1, 1)
};

// Error: Init-only property can only be set in initializer
// person.FirstName = "Jane";
```

## Record Types (C# 9+)

Records are reference types designed for immutable data models with value-based equality.

### Record Classes

```csharp
// Basic record
public record Person(string FirstName, string LastName);

// Usage
var person1 = new Person("John", "Doe");
var person2 = new Person("John", "Doe");

// Value-based equality
Console.WriteLine(person1 == person2); // True
Console.WriteLine(person1.Equals(person2)); // True

// Built-in ToString
Console.WriteLine(person1); // Person { FirstName = John, LastName = Doe }

// Deconstruction
var (firstName, lastName) = person1;

// With-expression for non-destructive mutation
var person3 = person1 with { LastName = "Smith" };
```

### Record with Additional Members

```csharp
public record Employee(string Name, decimal Salary)
{
    // Additional properties
    public string Department { get; init; } = "General";
    public int YearsOfService { get; init; }
    
    // Methods
    public decimal CalculateBonus() => Salary * 0.1m * YearsOfService;
    
    // Custom deconstructor
    public void Deconstruct(out string name, out decimal salary, out string department)
    {
        name = Name;
        salary = Salary;
        department = Department;
    }
}
```

### Record Structs (C# 10+)

```csharp
// Value type record
public record struct Point(double X, double Y)
{
    // Additional members
    public double DistanceFromOrigin => Math.Sqrt(X * X + Y * Y);
}

// Usage
var p1 = new Point(3, 4);
var p2 = new Point(3, 4);

Console.WriteLine(p1 == p2); // True
Console.WriteLine(p1.DistanceFromOrigin); // 5
```

## Pattern Matching

Pattern matching allows for more expressive and concise code when testing and extracting values.

### Type Patterns

```csharp
object obj = "Hello, World!";

// Type pattern
if (obj is string message)
{
    Console.WriteLine(message.ToUpper());
}

// Switch expression with type patterns
string GetDescription(object obj) => obj switch
{
    string s => $"String of length {s.Length}",
    int i => $"Integer with value {i}",
    DateTime d => $"Date: {d.ToShortDateString()}",
    null => "Null value",
    _ => "Unknown type"
};
```

### Property Patterns

```csharp
// Property pattern
if (person is { Age: >= 18, IsActive: true })
{
    Console.WriteLine("Active adult user");
}

// Nested property patterns
if (order is { Customer: { IsVip: true }, TotalAmount: > 1000 })
{
    Console.WriteLine("VIP order with high value");
}

// Switch expression with property patterns
string GetShippingMethod(Order order) => order switch
{
    { TotalAmount: > 1000, Customer.IsVip: true } => "Express",
    { TotalAmount: > 500 } => "Priority",
    { Customer.IsVip: true } => "Standard+",
    _ => "Standard"
};
```

### Tuple Patterns

```csharp
// Tuple pattern
(int x, int y) = GetCoordinates();
string quadrant = (x, y) switch
{
    (> 0, > 0) => "First quadrant",
    (< 0, > 0) => "Second quadrant",
    (< 0, < 0) => "Third quadrant",
    (> 0, < 0) => "Fourth quadrant",
    (0, 0) => "Origin",
    (_, 0) => "X-axis",
    (0, _) => "Y-axis",
    _ => "Unknown"
};
```

### Logical Patterns

```csharp
// Logical patterns (and, or, not)
if (person is { Age: > 18 and < 65 })
{
    Console.WriteLine("Working age");
}

string GetCategory(Product product) => product switch
{
    { Price: > 1000 } or { IsLuxury: true } => "Premium",
    { InStock: false } => "Unavailable",
    { Category: "Books" or "Electronics" } and { Price: < 50 } => "Budget",
    _ => "Standard"
};
```

### List Patterns (C# 11+)

```csharp
// List patterns
int[] numbers = { 1, 2, 3, 4, 5 };

bool IsFirstThree = numbers is [1, 2, 3, ..]; // True
bool StartsWithOne = numbers is [1, ..]; // True
bool HasFiveElements = numbers is [_, _, _, _, _]; // True
bool EndsWithFive = numbers is [.., 5]; // True

// Switch expression with list patterns
string DescribeArray(int[] arr) => arr switch
{
    [] => "Empty array",
    [var single] => $"Single element: {single}",
    [var first, var second] => $"Two elements: {first}, {second}",
    [1, 2, 3] => "Array with exactly 1, 2, 3",
    [1, .., 5] => "Array starting with 1 and ending with 5",
    [> 0, > 0, .. ] => "Array starting with two positive numbers",
    _ => "Other array"
};
```

### Discard Patterns

```csharp
// Discard pattern (_)
string GetSign(int number) => number switch
{
    > 0 => "Positive",
    < 0 => "Negative",
    _ => "Zero"
};

// Var pattern with discard
if (dictionary.TryGetValue("key", out var _))
{
    Console.WriteLine("Key exists");
}
```

## Resources

- [Tuples (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples)
- [Indices and Ranges (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-8.0/ranges)
- [Nullable Reference Types (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references)
- [Required Members (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/required)
- [Records (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record)
- [Pattern Matching (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/patterns)

# 23. C# 11-14 Feature Highlights

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
    // Creates a backing field with the same name
    public string Name { get; set; } field;
    
    public void UpdateName(string newName)
    {
        // Direct access to the backing field
        if (field.Name != newName)
        {
            field.Name = newName;
            OnNameChanged();
        }
    }
    
    private void OnNameChanged() { }
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
    
    // With field keyword
    public int Count2
    {
        get => field.Count2;
        set
        {
            if (value < 0)
                throw new ArgumentException("Count cannot be negative");
            field.Count2 = value;
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

### Partial Events

Events can now be split across partial class declarations:

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
    // Implement the event
    public partial event EventHandler<DataProcessedEventArgs> DataProcessed;
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

## Resources

- [What's new in C# 11](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-11)
- [What's new in C# 12](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-12)
- [What's new in C# 13](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-13)
- [What's new in C# 14](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-14)
- [C# Language Versioning](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/configure-language-version)

# 24. Performance Optimization

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

# 25. Best Practices and Coding Conventions

Following consistent coding conventions and best practices makes your code more readable, maintainable, and less prone to bugs. This section covers the recommended practices for C# development.

## Naming Conventions

Consistent naming helps make your code more readable and predictable.

### General Naming Guidelines

- Use meaningful, descriptive names that convey intent
- Prefer clarity over brevity
- Avoid abbreviations and acronyms unless they're widely known
- Don't use Hungarian notation (e.g., `strName`, `intCount`)
- Don't use underscores, hyphens, or other non-alphanumeric characters (except for private fields)

### Pascal Case

Used for:
- Classes, structs, records, and interfaces
- Methods and properties
- Namespaces
- Public fields
- Enums and enum values

```csharp
public class CustomerService
{
    public void ProcessOrder(Order order) { }
    public decimal TotalRevenue { get; set; }
    public const int MaxRetryCount = 3;
}

public enum OrderStatus
{
    Pending,
    Processing,
    Completed,
    Cancelled
}
```

### Camel Case

Used for:
- Parameters
- Local variables
- Private and protected fields (optionally with underscore prefix)

```csharp
public void CalculateDiscount(decimal orderTotal, bool isPremiumCustomer)
{
    decimal discountRate = 0.1m;
    bool isEligible = orderTotal > 100 && isPremiumCustomer;
    // ...
}
```

### Underscore Prefix

Used for:
- Private fields (common convention)

```csharp
public class Customer
{
    private string _firstName;
    private string _lastName;
    
    public string FullName => $"{_firstName} {_lastName}";
}
```

### Interface Prefix

Interfaces should start with "I":

```csharp
public interface IRepository<T>
{
    T GetById(int id);
    void Save(T entity);
}

public interface ILoggable
{
    void Log(string message);
}
```

### Type Parameter Naming

Type parameters should use descriptive names or T as a prefix:

```csharp
// Single type parameter - use T
public class Cache<T>
{
    // ...
}

// Multiple type parameters - use descriptive names or T prefix
public class Dictionary<TKey, TValue>
{
    // ...
}

public class Converter<TInput, TOutput>
{
    // ...
}
```

## Code Organization

Organizing your code in a consistent way improves readability and maintainability.

### File Organization

- One public class per file (with exceptions for small, related classes)
- Filename should match the public class name
- Group related files in meaningful directories

### Class Member Ordering

A common ordering for class members:

1. Constant fields
2. Static fields
3. Private fields
4. Constructors
5. Properties
6. Methods
7. Nested types

```csharp
public class Customer
{
    // 1. Constants
    public const int MaxNameLength = 50;
    
    // 2. Static fields
    private static readonly Random _random = new Random();
    
    // 3. Private fields
    private readonly string _id;
    private string _firstName;
    private string _lastName;
    
    // 4. Constructors
    public Customer(string firstName, string lastName)
    {
        _id = GenerateId();
        _firstName = firstName;
        _lastName = lastName;
    }
    
    // 5. Properties
    public string Id => _id;
    public string FirstName
    {
        get => _firstName;
        set => _firstName = value?.Trim();
    }
    public string LastName
    {
        get => _lastName;
        set => _lastName = value?.Trim();
    }
    public string FullName => $"{FirstName} {LastName}";
    
    // 6. Methods
    public void UpdateName(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }
    
    private string GenerateId() => Guid.NewGuid().ToString("N");
    
    // 7. Nested types
    public enum CustomerType
    {
        Regular,
        Premium,
        VIP
    }
}
```

### Regions

Regions can be used to organize code, but use them sparingly:

```csharp
#region Private Fields
private readonly ILogger _logger;
private readonly IRepository<Customer> _repository;
private bool _isInitialized;
#endregion

#region Constructors
public CustomerService(ILogger logger, IRepository<Customer> repository)
{
    _logger = logger;
    _repository = repository;
}
#endregion

#region Public Methods
public Customer GetCustomer(int id)
{
    // ...
}
#endregion
```

## Error Handling

Proper error handling makes your code more robust and easier to debug.

### Exception Guidelines

- Use exceptions for exceptional conditions, not for normal control flow
- Catch specific exceptions rather than `Exception`
- Only catch exceptions you can handle meaningfully
- Always clean up resources in a `finally` block or use `using` statements
- Include meaningful information in exception messages

```csharp
public Customer GetCustomer(int id)
{
    if (id <= 0)
    {
        throw new ArgumentException("Customer ID must be positive", nameof(id));
    }
    
    try
    {
        return _repository.GetById(id);
    }
    catch (DatabaseException ex)
    {
        _logger.LogError(ex, $"Database error while retrieving customer {id}");
        throw new ServiceException($"Could not retrieve customer {id}", ex);
    }
    catch (TimeoutException ex)
    {
        _logger.LogWarning(ex, $"Timeout while retrieving customer {id}");
        throw new ServiceException("The operation timed out. Please try again.", ex);
    }
}
```

### Custom Exceptions

Create custom exceptions for specific error scenarios:

```csharp
public class CustomerNotFoundException : Exception
{
    public int CustomerId { get; }
    
    public CustomerNotFoundException(int customerId)
        : base($"Customer with ID {customerId} was not found")
    {
        CustomerId = customerId;
    }
    
    public CustomerNotFoundException(int customerId, Exception innerException)
        : base($"Customer with ID {customerId} was not found", innerException)
    {
        CustomerId = customerId;
    }
}
```

### Validation

Validate inputs early to prevent exceptions:

```csharp
public void ProcessOrder(Order order)
{
    // Validate inputs early
    if (order == null)
    {
        throw new ArgumentNullException(nameof(order));
    }
    
    if (string.IsNullOrEmpty(order.CustomerId))
    {
        throw new ArgumentException("Customer ID is required", nameof(order));
    }
    
    if (order.Items == null || order.Items.Count == 0)
    {
        throw new ArgumentException("Order must contain at least one item", nameof(order));
    }
    
    // Process the order...
}
```

## Security Considerations

Security should be a fundamental consideration in your code.

### Input Validation

Always validate user input:

```csharp
public void RegisterUser(string username, string password)
{
    // Validate username
    if (string.IsNullOrWhiteSpace(username))
    {
        throw new ArgumentException("Username cannot be empty", nameof(username));
    }
    
    if (username.Length < 3 || username.Length > 50)
    {
        throw new ArgumentException("Username must be between 3 and 50 characters", nameof(username));
    }
    
    // Validate password
    if (string.IsNullOrWhiteSpace(password))
    {
        throw new ArgumentException("Password cannot be empty", nameof(password));
    }
    
    if (password.Length < 8)
    {
        throw new ArgumentException("Password must be at least 8 characters", nameof(password));
    }
    
    // Check for common password patterns
    if (!PasswordMeetsComplexityRequirements(password))
    {
        throw new ArgumentException("Password does not meet complexity requirements", nameof(password));
    }
    
    // Register the user...
}
```

### Secure Data Handling

Handle sensitive data securely:

```csharp
// Use SecureString for sensitive data in memory
using System.Security;

public void SetPassword()
{
    SecureString password = new SecureString();
    
    Console.WriteLine("Enter password:");
    while (true)
    {
        ConsoleKeyInfo key = Console.ReadKey(true);
        if (key.Key == ConsoleKey.Enter)
            break;
        
        password.AppendChar(key.KeyChar);
        Console.Write("*");
    }
    
    // Use the password...
    
    // Dispose when done
    password.Dispose();
}

// Don't log sensitive information
public void ProcessPayment(CreditCard card)
{
    // Bad: Logging sensitive information
    _logger.LogInfo($"Processing payment for card: {card.Number}");
    
    // Good: Mask sensitive information
    _logger.LogInfo($"Processing payment for card: {MaskCardNumber(card.Number)}");
}

private string MaskCardNumber(string cardNumber)
{
    if (string.IsNullOrWhiteSpace(cardNumber) || cardNumber.Length < 4)
        return "****";
    
    return new string('*', cardNumber.Length - 4) + cardNumber.Substring(cardNumber.Length - 4);
}
```

### SQL Injection Prevention

Use parameterized queries to prevent SQL injection:

```csharp
// Bad: Vulnerable to SQL injection
public Customer FindByName(string name)
{
    string query = $"SELECT * FROM Customers WHERE Name = '{name}'";
    // Execute query...
}

// Good: Use parameterized queries
public Customer FindByName(string name)
{
    string query = "SELECT * FROM Customers WHERE Name = @Name";
    var parameters = new { Name = name };
    // Execute query with parameters...
}

// Better: Use an ORM like Entity Framework
public Customer FindByName(string name)
{
    return _dbContext.Customers.FirstOrDefault(c => c.Name == name);
}
```

## Performance Considerations

Write code that performs well from the start.

### Avoid Premature Optimization

- Write clear, maintainable code first
- Measure performance before optimizing
- Focus on optimizing the parts that matter (hot paths)

### Common Performance Tips

```csharp
// Use StringBuilder for string concatenation in loops
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++)
{
    sb.Append(i).Append(", ");
}
string result = sb.ToString();

// Use collection with appropriate capacity
List<Customer> customers = new List<Customer>(expectedCount);

// Use proper collection types for the operation
Dictionary<string, Customer> customerLookup = new Dictionary<string, Customer>();

// Avoid unnecessary boxing/unboxing
int number = 42;
object boxed = number; // Boxing
int unboxed = (int)boxed; // Unboxing

// Use value types for small, immutable data
readonly struct Point
{
    public readonly double X;
    public readonly double Y;
    
    public Point(double x, double y) => (X, Y) = (x, y);
}

// Cache expensive operations
private readonly ConcurrentDictionary<string, object> _cache = new ConcurrentDictionary<string, object>();

public object GetData(string key)
{
    return _cache.GetOrAdd(key, k => ExpensiveOperation(k));
}
```

## Documentation

Good documentation helps others (and future you) understand your code.

### XML Documentation

Use XML documentation comments for public APIs:

```csharp
/// <summary>
/// Represents a customer in the system.
/// </summary>
public class Customer
{
    /// <summary>
    /// Gets or sets the customer's unique identifier.
    /// </summary>
    public string Id { get; set; }
    
    /// <summary>
    /// Gets or sets the customer's full name.
    /// </summary>
    public string Name { get; set; }
    
    /// <summary>
    /// Creates a new order for this customer.
    /// </summary>
    /// <param name="items">The items to include in the order.</param>
    /// <param name="shippingAddress">The address to ship the order to.</param>
    /// <returns>The newly created order.</returns>
    /// <exception cref="ArgumentNullException">Thrown when <paramref name="items"/> or <paramref name="shippingAddress"/> is null.</exception>
    /// <exception cref="InvalidOperationException">Thrown when the customer account is inactive.</exception>
    public Order CreateOrder(IEnumerable<OrderItem> items, Address shippingAddress)
    {
        // Implementation...
    }
}
```

### Code Comments

Use comments to explain "why" rather than "what":

```csharp
// Bad: Explains what the code does (obvious from the code itself)
// Increment the counter
counter++;

// Good: Explains why the code does something
// Increment the retry counter to ensure we don't exceed the maximum retry limit
retryCount++;

// Good: Explains complex algorithms or business rules
// Apply the Luhn algorithm to validate the credit card number
// Step 1: Double every second digit from right to left
// Step 2: Sum the digits of the doubled values and the undoubled digits
// Step 3: Check if the sum is divisible by 10
bool isValid = ValidateCreditCardNumber(cardNumber);
```

### Self-Documenting Code

Write code that is self-explanatory:

```csharp
// Less readable
if (p && !q && r)
{
    // ...
}

// More readable
bool isActive = user.Status == UserStatus.Active;
bool hasExpiredPassword = user.PasswordExpiryDate < DateTime.Now;
bool hasRequiredRole = user.Roles.Contains(requiredRole);

if (isActive && !hasExpiredPassword && hasRequiredRole)
{
    // ...
}
```

## SOLID Principles

SOLID principles help you write more maintainable and flexible code.

### Single Responsibility Principle (SRP)

A class should have only one reason to change:

```csharp
// Bad: Class has multiple responsibilities
public class User
{
    public string Username { get; set; }
    public string PasswordHash { get; set; }
    
    public bool ValidatePassword(string password)
    {
        // Password validation logic...
    }
    
    public void SaveToDatabase()
    {
        // Database logic...
    }
    
    public string GenerateReport()
    {
        // Reporting logic...
    }
}

// Good: Separate responsibilities
public class User
{
    public string Username { get; set; }
    public string PasswordHash { get; set; }
}

public class PasswordService
{
    public bool ValidatePassword(User user, string password)
    {
        // Password validation logic...
    }
}

public class UserRepository
{
    public void Save(User user)
    {
        // Database logic...
    }
}

public class UserReportGenerator
{
    public string GenerateReport(User user)
    {
        // Reporting logic...
    }
}
```

### Open/Closed Principle (OCP)

Software entities should be open for extension but closed for modification:

```csharp
// Bad: Need to modify class to add new payment methods
public class PaymentProcessor
{
    public void ProcessPayment(decimal amount, string paymentMethod)
    {
        if (paymentMethod == "CreditCard")
        {
            // Process credit card payment
        }
        else if (paymentMethod == "PayPal")
        {
            // Process PayPal payment
        }
        // Need to modify this class to add new payment methods
    }
}

// Good: Open for extension
public interface IPaymentMethod
{
    void ProcessPayment(decimal amount);
}

public class CreditCardPayment : IPaymentMethod
{
    public void ProcessPayment(decimal amount)
    {
        // Process credit card payment
    }
}

public class PayPalPayment : IPaymentMethod
{
    public void ProcessPayment(decimal amount)
    {
        // Process PayPal payment
    }
}

// Can add new payment methods without modifying this class
public class PaymentProcessor
{
    public void ProcessPayment(decimal amount, IPaymentMethod paymentMethod)
    {
        paymentMethod.ProcessPayment(amount);
    }
}
```

### Liskov Substitution Principle (LSP)

Subtypes must be substitutable for their base types:

```csharp
// Bad: Square violates LSP for Rectangle
public class Rectangle
{
    public virtual int Width { get; set; }
    public virtual int Height { get; set; }
    
    public int Area => Width * Height;
}

public class Square : Rectangle
{
    private int _size;
    
    public override int Width
    {
        get => _size;
        set
        {
            _size = value;
            // Violates LSP by changing behavior of base class
            base.Height = value;
        }
    }
    
    public override int Height
    {
        get => _size;
        set
        {
            _size = value;
            // Violates LSP by changing behavior of base class
            base.Width = value;
        }
    }
}

// Good: Use composition instead of inheritance
public interface IShape
{
    int Area { get; }
}

public class Rectangle : IShape
{
    public int Width { get; set; }
    public int Height { get; set; }
    
    public int Area => Width * Height;
}

public class Square : IShape
{
    public int Size { get; set; }
    
    public int Area => Size * Size;
}
```

### Interface Segregation Principle (ISP)

Clients should not be forced to depend on interfaces they don't use:

```csharp
// Bad: Fat interface forces classes to implement methods they don't need
public interface IWorker
{
    void Work();
    void Eat();
    void Sleep();
}

// Good: Segregated interfaces
public interface IWorkable
{
    void Work();
}

public interface IEatable
{
    void Eat();
}

public interface ISleepable
{
    void Sleep();
}

// Classes implement only what they need
public class Human : IWorkable, IEatable, ISleepable
{
    public void Work() { /* ... */ }
    public void Eat() { /* ... */ }
    public void Sleep() { /* ... */ }
}

public class Robot : IWorkable
{
    public void Work() { /* ... */ }
    // Doesn't need to eat or sleep
}
```

### Dependency Inversion Principle (DIP)

High-level modules should not depend on low-level modules. Both should depend on abstractions:

```csharp
// Bad: High-level module depends on low-level module
public class NotificationService
{
    private readonly EmailSender _emailSender;
    
    public NotificationService()
    {
        _emailSender = new EmailSender();
    }
    
    public void Notify(string message)
    {
        _emailSender.SendEmail("user@example.com", message);
    }
}

// Good: Both depend on abstraction
public interface IMessageSender
{
    void SendMessage(string recipient, string message);
}

public class EmailSender : IMessageSender
{
    public void SendMessage(string recipient, string message)
    {
        // Send email
    }
}

public class SMSSender : IMessageSender
{
    public void SendMessage(string recipient, string message)
    {
        // Send SMS
    }
}

public class NotificationService
{
    private readonly IMessageSender _messageSender;
    
    // Dependency is injected
    public NotificationService(IMessageSender messageSender)
    {
        _messageSender = messageSender;
    }
    
    public void Notify(string recipient, string message)
    {
        _messageSender.SendMessage(recipient, message);
    }
}
```

## Resources

- [C# Coding Conventions (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
- [Framework Design Guidelines (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/)
- [SOLID Principles (Microsoft Learn)](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles#solid-principles)
- [C# Style Guide (Google)](https://google.github.io/styleguide/csharp-style.html)
- [Security Best Practices (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/security/security-best-practices)

# 26. Tooling and Ecosystem

The .NET ecosystem provides a rich set of tools and libraries to help you develop, test, and deploy C# applications. This section covers the essential tools and components of the .NET ecosystem.

## .NET CLI

The .NET Command Line Interface (CLI) is a cross-platform tool for developing, building, running, and publishing .NET applications.

### Basic Commands

```bash
# Create a new console application
dotnet new console -n MyApp

# Create a new web API project
dotnet new webapi -n MyApi

# Create a new class library
dotnet new classlib -n MyLibrary

# Build a project or solution
dotnet build

# Run a project
dotnet run

# Run with specific configuration
dotnet run --configuration Release

# Run with specific framework
dotnet run --framework net8.0

# Publish the application
dotnet publish -c Release
```

### Project Management

```bash
# Add a reference to another project
dotnet add reference ../MyLibrary/MyLibrary.csproj

# Add a NuGet package
dotnet add package Newtonsoft.Json

# Add a specific version of a package
dotnet add package Microsoft.EntityFrameworkCore --version 8.0.0

# Remove a package
dotnet remove package Newtonsoft.Json

# List project references
dotnet list reference

# List NuGet packages
dotnet list package
```

### Solution Management

```bash
# Create a new solution
dotnet new sln -n MySolution

# Add projects to a solution
dotnet sln add MyApp/MyApp.csproj MyLibrary/MyLibrary.csproj

# Remove a project from a solution
dotnet sln remove MyApp/MyApp.csproj

# List projects in a solution
dotnet sln list
```

### Testing

```bash
# Run tests
dotnet test

# Run tests with filter
dotnet test --filter "Category=Unit"

# Run tests with test results output
dotnet test --logger "trx;LogFileName=results.trx"

# Run tests with code coverage
dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=cobertura
```

### Tools

```bash
# Install a global tool
dotnet tool install -g dotnet-ef

# Update a global tool
dotnet tool update -g dotnet-ef

# Uninstall a global tool
dotnet tool uninstall -g dotnet-ef

# List installed global tools
dotnet tool list -g

# Install a local tool
dotnet tool install dotnet-reportgenerator-globaltool
```

## NuGet Package Management

NuGet is the package manager for .NET, allowing you to share and consume code packages.

### Package Management with CLI

```bash
# Restore packages
dotnet restore

# Add a package
dotnet add package Serilog

# Add a package with specific version
dotnet add package Microsoft.Extensions.Logging --version 8.0.0

# Add a package from a specific source
dotnet add package MyPackage --source https://mypackagesource/v3/index.json

# Remove a package
dotnet remove package Serilog
```

### Package Management with NuGet.Config

Create a `NuGet.Config` file to configure package sources:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <clear />
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
    <add key="MyCompany" value="https://packages.mycompany.com/nuget/v3/index.json" />
  </packageSources>
  <packageSourceCredentials>
    <MyCompany>
      <add key="Username" value="username" />
      <add key="ClearTextPassword" value="password" />
    </MyCompany>
  </packageSourceCredentials>
</configuration>
```

### Creating NuGet Packages

```bash
# Create a NuGet package
dotnet pack -c Release

# Create a NuGet package with specific version
dotnet pack -c Release /p:Version=1.0.1

# Push a package to NuGet.org
dotnet nuget push bin/Release/MyPackage.1.0.0.nupkg --api-key YOUR_API_KEY --source https://api.nuget.org/v3/index.json

# Push a package to a private feed
dotnet nuget push bin/Release/MyPackage.1.0.0.nupkg --source https://packages.mycompany.com/nuget/v3/index.json
```

## Testing Frameworks

.NET provides several testing frameworks to help you write and run tests.

### xUnit

xUnit is a popular testing framework for .NET:

```csharp
using Xunit;

public class CalculatorTests
{
    [Fact]
    public void Add_TwoNumbers_ReturnsSum()
    {
        // Arrange
        var calculator = new Calculator();
        
        // Act
        int result = calculator.Add(2, 3);
        
        // Assert
        Assert.Equal(5, result);
    }
    
    [Theory]
    [InlineData(1, 1, 2)]
    [InlineData(5, 3, 8)]
    [InlineData(-1, 1, 0)]
    public void Add_MultipleTestCases_ReturnsSum(int a, int b, int expected)
    {
        var calculator = new Calculator();
        int result = calculator.Add(a, b);
        Assert.Equal(expected, result);
    }
}
```

### NUnit

NUnit is another popular testing framework:

```csharp
using NUnit.Framework;

[TestFixture]
public class CalculatorTests
{
    [Test]
    public void Add_TwoNumbers_ReturnsSum()
    {
        // Arrange
        var calculator = new Calculator();
        
        // Act
        int result = calculator.Add(2, 3);
        
        // Assert
        Assert.AreEqual(5, result);
    }
    
    [TestCase(1, 1, 2)]
    [TestCase(5, 3, 8)]
    [TestCase(-1, 1, 0)]
    public void Add_MultipleTestCases_ReturnsSum(int a, int b, int expected)
    {
        var calculator = new Calculator();
        int result = calculator.Add(a, b);
        Assert.AreEqual(expected, result);
    }
}
```

### MSTest

MSTest is Microsoft's testing framework:

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class CalculatorTests
{
    [TestMethod]
    public void Add_TwoNumbers_ReturnsSum()
    {
        // Arrange
        var calculator = new Calculator();
        
        // Act
        int result = calculator.Add(2, 3);
        
        // Assert
        Assert.AreEqual(5, result);
    }
    
    [DataTestMethod]
    [DataRow(1, 1, 2)]
    [DataRow(5, 3, 8)]
    [DataRow(-1, 1, 0)]
    public void Add_MultipleTestCases_ReturnsSum(int a, int b, int expected)
    {
        var calculator = new Calculator();
        int result = calculator.Add(a, b);
        Assert.AreEqual(expected, result);
    }
}
```

### Mocking Frameworks

Mocking frameworks help you create mock objects for testing:

#### Moq

```csharp
using Moq;
using Xunit;

public class OrderServiceTests
{
    [Fact]
    public void PlaceOrder_ValidOrder_ReturnsOrderId()
    {
        // Arrange
        var mockRepository = new Mock<IOrderRepository>();
        mockRepository.Setup(repo => repo.Save(It.IsAny<Order>()))
                     .Returns(42);
        
        var service = new OrderService(mockRepository.Object);
        var order = new Order { /* ... */ };
        
        // Act
        int orderId = service.PlaceOrder(order);
        
        // Assert
        Assert.Equal(42, orderId);
        mockRepository.Verify(repo => repo.Save(order), Times.Once);
    }
}
```

#### NSubstitute

```csharp
using NSubstitute;
using Xunit;

public class OrderServiceTests
{
    [Fact]
    public void PlaceOrder_ValidOrder_ReturnsOrderId()
    {
        // Arrange
        var repository = Substitute.For<IOrderRepository>();
        repository.Save(Arg.Any<Order>()).Returns(42);
        
        var service = new OrderService(repository);
        var order = new Order { /* ... */ };
        
        // Act
        int orderId = service.PlaceOrder(order);
        
        // Assert
        Assert.Equal(42, orderId);
        repository.Received(1).Save(order);
    }
}
```

## Common Libraries

The .NET ecosystem includes many popular libraries for various tasks.

### Web Development

- **ASP.NET Core**: Framework for building web apps and APIs
- **Blazor**: Framework for building interactive web UIs using C#
- **Minimal APIs**: Lightweight approach to building HTTP APIs
- **SignalR**: Real-time web functionality for apps
- **Swagger/OpenAPI**: API documentation and testing

### Data Access

- **Entity Framework Core**: ORM for database access
- **Dapper**: Lightweight ORM for high performance
- **MongoDB.Driver**: MongoDB client library
- **StackExchange.Redis**: Redis client library
- **Npgsql**: PostgreSQL client library

### Logging and Monitoring

- **Serilog**: Structured logging library
- **NLog**: Flexible logging platform
- **Microsoft.Extensions.Logging**: Logging abstractions
- **OpenTelemetry**: Observability framework
- **Application Insights**: Azure monitoring service

### Serialization

- **System.Text.Json**: Built-in JSON serialization
- **Newtonsoft.Json**: Popular JSON framework
- **MessagePack**: Binary serialization format
- **Protobuf-net**: Protocol Buffers serialization

### Dependency Injection

- **Microsoft.Extensions.DependencyInjection**: Built-in DI container
- **Autofac**: IoC container
- **Lamar**: Fast IoC container
- **SimpleInjector**: DI container focused on simplicity

### Authentication and Authorization

- **Microsoft.AspNetCore.Authentication**: Authentication middleware
- **IdentityServer**: OpenID Connect and OAuth 2.0 framework
- **Auth0.NET**: Auth0 integration
- **Microsoft.Identity.Web**: Microsoft identity platform integration

### Testing

- **xUnit**: Testing framework
- **NUnit**: Testing framework
- **MSTest**: Microsoft's testing framework
- **Moq**: Mocking framework
- **NSubstitute**: Mocking framework
- **FluentAssertions**: Fluent assertions library
- **Bogus**: Fake data generator

### Utility Libraries

- **Polly**: Resilience and transient-fault-handling library
- **Humanizer**: String manipulation and human-friendly text
- **AutoMapper**: Object-to-object mapping
- **FluentValidation**: Validation library
- **MediatR**: Mediator pattern implementation
- **Scrutor**: Assembly scanning and decoration extensions for DI

## Build Systems

Build systems automate the process of compiling, testing, and packaging your code.

### MSBuild

MSBuild is the build system used by Visual Studio and the .NET CLI:

```xml
<!-- Directory.Build.props -->
<Project>
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <LangVersion>latest</LangVersion>
  </PropertyGroup>
  
  <ItemGroup>
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.8.0" />
    <PackageReference Include="xunit" Version="2.6.1" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.5.3" />
  </ItemGroup>
</Project>
```

### CAKE (C# Make)

CAKE is a cross-platform build automation system with a C# DSL:

```csharp
// build.cake
var target = Argument("target", "Default");
var configuration = Argument("configuration", "Release");

Task("Clean")
    .Does(() =>
    {
        CleanDirectories("./src/**/bin");
        CleanDirectories("./src/**/obj");
    });

Task("Restore")
    .IsDependentOn("Clean")
    .Does(() =>
    {
        DotNetRestore("./MySolution.sln");
    });

Task("Build")
    .IsDependentOn("Restore")
    .Does(() =>
    {
        DotNetBuild("./MySolution.sln", new DotNetBuildSettings
        {
            Configuration = configuration,
            NoRestore = true
        });
    });

Task("Test")
    .IsDependentOn("Build")
    .Does(() =>
    {
        DotNetTest("./MySolution.sln", new DotNetTestSettings
        {
            Configuration = configuration,
            NoRestore = true,
            NoBuild = true
        });
    });

Task("Default")
    .IsDependentOn("Test");

RunTarget(target);
```

### GitHub Actions

GitHub Actions allows you to automate your build, test, and deployment pipeline:

```yaml
# .github/workflows/build.yml
name: Build and Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: 8.0.x
        
    - name: Restore dependencies
      run: dotnet restore
      
    - name: Build
      run: dotnet build --no-restore --configuration Release
      
    - name: Test
      run: dotnet test --no-build --configuration Release --verbosity normal
```

### Azure DevOps Pipelines

Azure DevOps Pipelines provides CI/CD capabilities:

```yaml
# azure-pipelines.yml
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'

steps:
- task: UseDotNet@2
  inputs:
    packageType: 'sdk'
    version: '8.0.x'
    
- task: DotNetCoreCLI@2
  displayName: 'Restore'
  inputs:
    command: 'restore'
    projects: '**/*.csproj'
    
- task: DotNetCoreCLI@2
  displayName: 'Build'
  inputs:
    command: 'build'
    projects: '**/*.csproj'
    arguments: '--configuration $(buildConfiguration) --no-restore'
    
- task: DotNetCoreCLI@2
  displayName: 'Test'
  inputs:
    command: 'test'
    projects: '**/*Tests.csproj'
    arguments: '--configuration $(buildConfiguration) --no-build'
```

## Deployment Options

.NET applications can be deployed in various ways.

### Self-Contained Deployment

Package your application with the .NET runtime:

```bash
# Create a self-contained deployment for Windows
dotnet publish -c Release -r win-x64 --self-contained

# Create a self-contained deployment for Linux
dotnet publish -c Release -r linux-x64 --self-contained

# Create a self-contained deployment for macOS
dotnet publish -c Release -r osx-x64 --self-contained
```

### Framework-Dependent Deployment

Package your application without the .NET runtime:

```bash
# Create a framework-dependent deployment
dotnet publish -c Release
```

### Docker Containers

Deploy your application as a Docker container:

```dockerfile
# Dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MyApp.csproj", "./"]
RUN dotnet restore "MyApp.csproj"
COPY . .
RUN dotnet build "MyApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MyApp.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]
```

Build and run the Docker container:

```bash
# Build the Docker image
docker build -t myapp .

# Run the Docker container
docker run -p 8080:80 myapp
```

### Cloud Deployment

Deploy your application to cloud platforms:

#### Azure App Service

```bash
# Deploy to Azure App Service
az webapp up --name MyWebApp --resource-group MyResourceGroup --sku F1
```

#### AWS Elastic Beanstalk

```bash
# Deploy to AWS Elastic Beanstalk
eb init -p .NET -r us-east-1 MyApp
eb create MyApp-env
```

#### Kubernetes

```yaml
# kubernetes-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 80
```

Deploy to Kubernetes:

```bash
# Apply the Kubernetes deployment
kubectl apply -f kubernetes-deployment.yaml
```

## Resources

- [.NET CLI Documentation](https://learn.microsoft.com/en-us/dotnet/core/tools/)
- [NuGet Documentation](https://learn.microsoft.com/en-us/nuget/)
- [xUnit Documentation](https://xunit.net/docs/getting-started/netcore/cmdline)
- [Entity Framework Core Documentation](https://learn.microsoft.com/en-us/ef/core/)
- [ASP.NET Core Documentation](https://learn.microsoft.com/en-us/aspnet/core/)
- [Docker with .NET](https://learn.microsoft.com/en-us/dotnet/core/docker/introduction)
- [GitHub Actions for .NET](https://learn.microsoft.com/en-us/dotnet/devops/github-actions-overview)

# 27. Resources and Further Learning

This section provides a curated list of high-quality resources to deepen your understanding of C# and the .NET ecosystem. Whether you're a beginner or an experienced developer, these resources will help you continue your learning journey.

## Official Documentation

Microsoft's official documentation is the most authoritative and up-to-date source of information about C# and .NET.

### C# Documentation

- [C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/) - Comprehensive documentation covering all aspects of the C# language
- [C# Language Reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/) - Detailed reference for C# syntax, keywords, and features
- [C# Programming Guide](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/) - Conceptual and practical guidance on C# programming
- [C# Language Specification](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/) - The formal specification of the C# language

### .NET Documentation

- [.NET Documentation](https://learn.microsoft.com/en-us/dotnet/) - Comprehensive documentation for the .NET platform
- [.NET API Browser](https://learn.microsoft.com/en-us/dotnet/api/) - Search and browse the .NET API reference documentation
- [.NET Architecture Guides](https://learn.microsoft.com/en-us/dotnet/architecture/) - Guidance on building modern, scalable applications
- [.NET Application Architecture](https://dotnet.microsoft.com/en-us/learn/dotnet/architecture-guides) - Reference architectures and patterns for .NET applications

## Interactive Learning & Tutorials

Interactive learning platforms provide hands-on experience and structured learning paths.

### Microsoft Learn

- [C# Learning Path](https://learn.microsoft.com/en-us/training/paths/csharp-first-steps/) - Free, interactive tutorials for beginners
- [Build .NET Applications](https://learn.microsoft.com/en-us/training/paths/build-dotnet-applications-csharp/) - Learn to build applications with C# and .NET
- [ASP.NET Core Learning Path](https://learn.microsoft.com/en-us/training/paths/build-web-apps-aspnet-core/) - Learn web development with ASP.NET Core

### Interactive Tutorials

- [Try .NET](https://try.dot.net/) - Interactive browser-based C# tutorials
- [LINQPad](https://www.linqpad.net/) - Interactive C# scratchpad for testing code and learning LINQ
- [.NET Fiddle](https://dotnetfiddle.net/) - Online C# compiler and code editor
- [Exercism C# Track](https://exercism.org/tracks/csharp) - Free coding exercises with mentorship

## Books

Books provide in-depth knowledge and comprehensive coverage of C# and .NET topics.

### For Beginners

- **"C# 12 and .NET 8 – Modern Cross-Platform Development"** by Mark J. Price - Comprehensive introduction to C# and .NET
- **"Head First C#"** by Andrew Stellman and Jennifer Greene - Beginner-friendly introduction with visual learning approach
- **"The C# Player's Guide"** by RB Whitaker - Beginner-friendly guide with exercises and challenges

### For Intermediate/Advanced Developers

- **"C# in Depth"** by Jon Skeet - Deep dive into C# language features and evolution
- **"Concurrency in C# Cookbook"** by Stephen Cleary - Patterns for asynchronous and parallel programming
- **"Pro .NET Memory Management"** by Konrad Kokosa - In-depth guide to memory management in .NET
- **"ASP.NET Core in Action"** by Andrew Lock - Comprehensive guide to ASP.NET Core
- **"Entity Framework Core in Action"** by Jon P Smith - Practical guide to EF Core

### Reference Books

- **"CLR via C#"** by Jeffrey Richter - Deep dive into the Common Language Runtime
- **"Pro .NET Benchmarking"** by Andrey Akinshin - Guide to performance measurement and optimization
- **"C# 12.0 in a Nutshell"** by Joseph Albahari and Eric Johannsen - Comprehensive reference for C# and .NET

## Online Courses

Video courses provide structured learning with visual demonstrations.

### Free Courses

- [Microsoft's C# 101](https://www.youtube.com/playlist?list=PLdo4fOcmZ0oVxKLQCHpiUWun7vlJJvUiN) - Video series for beginners
- [.NET Core 101](https://www.youtube.com/playlist?list=PLdo4fOcmZ0oWoazjhXQzBKMrFuArxpW80) - Introduction to .NET Core
- [ASP.NET Core 101](https://www.youtube.com/playlist?list=PLdo4fOcmZ0oW8nviYduHq7bmKode-p8Wy) - Introduction to ASP.NET Core

### Paid Courses

- [Pluralsight](https://www.pluralsight.com/paths/csharp) - Comprehensive C# learning paths
- [LinkedIn Learning](https://www.linkedin.com/learning/topics/c-sharp) - Various C# and .NET courses
- [Udemy](https://www.udemy.com/topic/c-sharp/) - Wide range of C# courses for all levels
- [Coursera](https://www.coursera.org/courses?query=c%23) - University-backed C# and .NET courses

## Community Resources

Community resources provide real-world insights, discussions, and support.

### Forums and Q&A Sites

- [Stack Overflow](https://stackoverflow.com/questions/tagged/c%23) - Q&A site with extensive C# discussions
- [Reddit r/csharp](https://www.reddit.com/r/csharp/) - Community discussions and news
- [.NET Community Standups](https://dotnet.microsoft.com/en-us/live) - Regular updates from the .NET team

### Blogs

- [.NET Blog](https://devblogs.microsoft.com/dotnet/) - Official Microsoft .NET blog
- [Scott Hanselman's Blog](https://www.hanselman.com/blog/) - Popular blog covering C# and .NET
- [Andrew Lock's .NET Escapades](https://andrewlock.net/) - In-depth ASP.NET Core articles
- [Steve Gordon's Blog](https://www.stevejgordon.co.uk/) - Performance and ASP.NET Core topics
- [Khalid Abuhakmeh's Blog](https://khalidabuhakmeh.com/) - Practical C# and .NET tips

### Podcasts

- [.NET Rocks!](https://www.dotnetrocks.com/) - Long-running podcast covering all things .NET
- [The .NET Core Podcast](https://dotnetcore.show/) - Focused on .NET Core topics
- [No Dogma Podcast](https://nodogmapodcast.bryanhogan.net/) - Discussions on C# and software development

## Open Source Projects

Studying open source projects is an excellent way to learn best practices and see real-world code.

### Microsoft Projects

- [.NET Runtime](https://github.com/dotnet/runtime) - The .NET runtime, libraries, and shared host
- [ASP.NET Core](https://github.com/dotnet/aspnetcore) - ASP.NET Core framework
- [Entity Framework Core](https://github.com/dotnet/efcore) - Entity Framework Core ORM
- [Roslyn](https://github.com/dotnet/roslyn) - The C# compiler platform

### Community Projects

- [Dapper](https://github.com/DapperLib/Dapper) - Simple object mapper for .NET
- [AutoMapper](https://github.com/AutoMapper/AutoMapper) - Object-to-object mapping library
- [Polly](https://github.com/App-vNext/Polly) - Resilience and transient-fault-handling library
- [MediatR](https://github.com/jbogard/MediatR) - Simple mediator implementation
- [FluentValidation](https://github.com/FluentValidation/FluentValidation) - Validation library

## Coding Style Guides

Style guides help you write clean, consistent, and maintainable code.

- [Microsoft C# Coding Conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions) - Official Microsoft coding conventions
- [.NET Runtime Coding Guidelines](https://github.com/dotnet/runtime/blob/main/docs/coding-guidelines/coding-style.md) - Guidelines used by the .NET team
- [Google C# Style Guide](https://google.github.io/styleguide/csharp-style.html) - Google's C# style guide
- [StyleCop](https://github.com/DotNetAnalyzers/StyleCopAnalyzers) - Code style enforcement tool

## Tools and Extensions

These tools enhance your C# development experience.

### IDEs and Editors

- [Visual Studio](https://visualstudio.microsoft.com/) - Full-featured IDE for Windows and Mac
- [Visual Studio Code](https://code.visualstudio.com/) with [C# Extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) - Lightweight, cross-platform editor
- [JetBrains Rider](https://www.jetbrains.com/rider/) - Cross-platform .NET IDE

### Productivity Tools

- [ReSharper](https://www.jetbrains.com/resharper/) - Visual Studio extension for code quality and productivity
- [OzCode](https://oz-code.com/) - Advanced debugging tools for Visual Studio
- [LINQPad](https://www.linqpad.net/) - Scratchpad for C# and LINQ experimentation
- [Snoop](https://github.com/snoopwpf/snoopwpf) - WPF debugging and inspection tool

### Analysis Tools

- [BenchmarkDotNet](https://benchmarkdotnet.org/) - Powerful .NET benchmarking library
- [NDepend](https://www.ndepend.com/) - Static analysis tool for .NET
- [SonarQube](https://www.sonarqube.org/) - Code quality and security analysis
- [dotMemory](https://www.jetbrains.com/dotmemory/) - .NET memory profiler

## Conferences and Events

Conferences provide opportunities to learn from experts and connect with the community.

- [.NET Conf](https://www.dotnetconf.net/) - Free, online conference for .NET developers
- [Microsoft Build](https://build.microsoft.com/) - Microsoft's annual developer conference
- [NDC Conferences](https://ndcconferences.com/) - Developer conferences held worldwide
- [DotNext](https://dotnext.ru/en/) - .NET conference in Europe

## Staying Current

Resources to help you stay up-to-date with C# and .NET developments.

- [.NET Blog](https://devblogs.microsoft.com/dotnet/) - Official announcements and updates
- [This Week in .NET](https://www.thisdot.co/blog/?filter=.NET) - Weekly newsletter with .NET news
- [C# Digest](https://csharpdigest.net/) - Weekly newsletter with C# articles
- [Awesome .NET](https://github.com/quozd/awesome-dotnet) - Curated list of .NET libraries and resources

## Career Development

Resources to help you advance your career as a C# developer.

- [.NET Foundation](https://dotnetfoundation.org/) - Non-profit organization supporting .NET ecosystem
- [Microsoft Learn Certifications](https://learn.microsoft.com/en-us/certifications/) - Official Microsoft certifications
- [GitHub Learning Lab](https://lab.github.com/) - Interactive courses on GitHub
- [Exercism C# Mentorship](https://exercism.org/tracks/csharp/mentoring) - Get feedback on your C# code

## Resources for Specific Domains

Resources for specialized areas of C# development.

### Game Development

- [Unity Learn](https://learn.unity.com/) - Official Unity tutorials (C# is the primary language)
- [Godot with C#](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/index.html) - Using C# with Godot engine
- [MonoGame Documentation](https://docs.monogame.net/) - Open-source game framework

### Mobile Development

- [.NET MAUI Documentation](https://learn.microsoft.com/en-us/dotnet/maui/) - Multi-platform App UI framework
- [Xamarin Documentation](https://learn.microsoft.com/en-us/xamarin/) - Mobile app development framework

### Desktop Development

- [WPF Documentation](https://learn.microsoft.com/en-us/dotnet/desktop/wpf/) - Windows Presentation Foundation
- [Windows Forms Documentation](https://learn.microsoft.com/en-us/dotnet/desktop/winforms/) - Windows Forms
- [Avalonia UI Documentation](https://docs.avaloniaui.net/) - Cross-platform UI framework

### Cloud Development

- [Azure for .NET Developers](https://learn.microsoft.com/en-us/dotnet/azure/) - Using .NET with Azure
- [AWS with .NET](https://aws.amazon.com/developer/language/net/) - Using .NET with AWS
- [Google Cloud for .NET](https://cloud.google.com/dotnet) - Using .NET with Google Cloud

## Conclusion

The C# and .NET ecosystem continues to evolve rapidly, with new features and improvements being added regularly. By leveraging these resources, you can stay current with the latest developments and continue to grow as a C# developer.

Remember that the best way to learn is by doing. Combine theoretical knowledge from these resources with practical experience by building your own projects, contributing to open source, and solving real-world problems.

---

## **Premium Learning Resources**

ConstructG delivers one of the most structured and in-depth C# learning systems available. With real-world project plans, reference guides, and an AI assistant available 24/7, it's designed to take you from beginner to job-ready developer. Explore the ultimate bundle at: https://constructg.com/
