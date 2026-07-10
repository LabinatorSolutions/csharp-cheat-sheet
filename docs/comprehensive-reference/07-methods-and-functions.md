---
title: "Methods and Functions"
sidebar_position: 7
---

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
