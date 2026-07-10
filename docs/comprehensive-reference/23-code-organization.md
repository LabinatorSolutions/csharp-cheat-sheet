---
title: "Code Organization"
sidebar_position: 23
---

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

### Partial Events and Constructors (C# 14+)

C# 14 introduced partial events and partial instance constructors. Each must have exactly one *defining declaration* and one *implementing declaration*.

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
    // Implement the event (must include add/remove accessors)
    public partial event EventHandler<DataProcessedEventArgs> DataProcessed
    {
        add => _handler += value;
        remove => _handler -= value;
    }
}
```

Partial constructors follow the same declaring/implementing pattern. Only the implementing declaration may include a `this()` or `base()` constructor initializer, and only one partial declaration of the type may use primary constructor syntax:

```csharp
// In File1.cs - defining declaration
public partial class Widget
{
    public partial Widget(string name);
}

// In File2.cs - implementing declaration
public partial class Widget
{
    private readonly string _name;

    public partial Widget(string name)
    {
        _name = name;
    }
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
