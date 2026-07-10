---
title: "Classes and Objects"
sidebar_position: 8
---

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
