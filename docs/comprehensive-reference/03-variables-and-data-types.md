---
title: "Variables and Data Types"
sidebar_position: 3
---

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
