---
title: "Structs and Records"
sidebar_position: 9
---

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
