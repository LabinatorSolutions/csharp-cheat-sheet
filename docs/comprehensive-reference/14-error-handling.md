---
title: "Error Handling"
sidebar_position: 14
---

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
