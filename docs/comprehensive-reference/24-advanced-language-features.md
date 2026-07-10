---
title: "Advanced Language Features"
sidebar_position: 24
---

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
