---
title: "Best Practices and Coding Conventions"
sidebar_position: 27
---

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
