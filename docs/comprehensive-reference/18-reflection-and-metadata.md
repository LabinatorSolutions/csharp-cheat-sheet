---
title: "Reflection and Metadata"
sidebar_position: 18
---

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
