---
title: "Control Flow"
sidebar_position: 6
---

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
