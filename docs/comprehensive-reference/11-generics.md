---
title: "Generics"
sidebar_position: 11
---

Generics allow you to define type-safe data structures and algorithms without committing to specific data types.

## Generic Classes and Interfaces

### Basic Generic Class

```csharp
// Generic class with one type parameter
public class Box<T>
{
    // Field of type T
    private T _value;
    
    // Constructor
    public Box(T value)
    {
        _value = value;
    }
    
    // Property
    public T Value
    {
        get { return _value; }
        set { _value = value; }
    }
    
    // Method that returns the type name
    public string GetTypeName()
    {
        return typeof(T).Name;
    }
}

// Usage
Box<int> intBox = new Box<int>(42);
Console.WriteLine(intBox.Value);  // 42
Console.WriteLine(intBox.GetTypeName());  // "Int32"

Box<string> stringBox = new Box<string>("Hello");
Console.WriteLine(stringBox.Value);  // "Hello"
Console.WriteLine(stringBox.GetTypeName());  // "String"

// Target-typed new (C# 9.0+)
Box<double> doubleBox = new(3.14);
```

### Generic Class with Multiple Type Parameters

```csharp
// Generic class with multiple type parameters
public class Pair<TFirst, TSecond>
{
    public TFirst First { get; set; }
    public TSecond Second { get; set; }
    
    public Pair(TFirst first, TSecond second)
    {
        First = first;
        Second = second;
    }
    
    public override string ToString()
    {
        return $"({First}, {Second})";
    }
}

// Usage
Pair<int, string> pair1 = new Pair<int, string>(1, "One");
Console.WriteLine(pair1);  // "(1, One)"

Pair<string, bool> pair2 = new Pair<string, bool>("Ready", true);
Console.WriteLine(pair2);  // "(Ready, True)"

// Using var with generics
var pair3 = new Pair<double, double>(3.14, 2.71);
```

### Generic Interface

```csharp
// Generic interface
public interface IRepository<T>
{
    T GetById(int id);
    IEnumerable<T> GetAll();
    void Add(T item);
    void Update(T item);
    void Delete(int id);
}

// Implementation for a specific type
public class CustomerRepository : IRepository<Customer>
{
    private List<Customer> _customers = new List<Customer>();
    
    public Customer GetById(int id)
    {
        return _customers.FirstOrDefault(c => c.Id == id);
    }
    
    public IEnumerable<Customer> GetAll()
    {
        return _customers;
    }
    
    public void Add(Customer item)
    {
        _customers.Add(item);
    }
    
    public void Update(Customer item)
    {
        var index = _customers.FindIndex(c => c.Id == item.Id);
        if (index >= 0)
            _customers[index] = item;
    }
    
    public void Delete(int id)
    {
        _customers.RemoveAll(c => c.Id == id);
    }
}

// Another implementation for a different type
public class ProductRepository : IRepository<Product>
{
    // Similar implementation for Product type
}
```

### Generic Interface with Multiple Type Parameters

```csharp
// Generic interface with multiple type parameters
public interface IConverter<TInput, TOutput>
{
    TOutput Convert(TInput input);
}

// Implementation
public class StringToIntConverter : IConverter<string, int>
{
    public int Convert(string input)
    {
        return int.Parse(input);
    }
}

public class DateTimeToStringConverter : IConverter<DateTime, string>
{
    public string Convert(DateTime input)
    {
        return input.ToString("yyyy-MM-dd");
    }
}

// Usage
IConverter<string, int> numberConverter = new StringToIntConverter();
int number = numberConverter.Convert("42");  // 42

IConverter<DateTime, string> dateConverter = new DateTimeToStringConverter();
string dateStr = dateConverter.Convert(DateTime.Now);  // "2023-07-25"
```

## Generic Methods

### Basic Generic Method

```csharp
// Class with generic methods
public class Utilities
{
    // Generic method with one type parameter
    public T[] CreateArray<T>(T item, int count)
    {
        T[] array = new T[count];
        for (int i = 0; i < count; i++)
        {
            array[i] = item;
        }
        return array;
    }
    
    // Generic method with type inference
    public void Swap<T>(ref T a, ref T b)
    {
        T temp = a;
        a = b;
        b = temp;
    }
    
    // Generic method with constraints
    public bool AreEqual<T>(T a, T b) where T : IEquatable<T>
    {
        return a.Equals(b);
    }
}

// Usage
Utilities utils = new Utilities();

// Explicit type parameter
string[] names = utils.CreateArray<string>("John", 3);
// ["John", "John", "John"]

// Type inference (compiler determines T is int)
int[] numbers = utils.CreateArray(42, 4);
// [42, 42, 42, 42]

// Swap values
int x = 5, y = 10;
utils.Swap(ref x, ref y);
Console.WriteLine($"x = {x}, y = {y}");  // "x = 10, y = 5"

// Using constrained method
bool equal = utils.AreEqual("hello", "hello");  // true
```

### Generic Method in Non-Generic Class

```csharp
// Non-generic class with generic methods
public class ArrayHelper
{
    // Generic method to find the first occurrence
    public int FindIndex<T>(T[] array, T item)
    {
        for (int i = 0; i < array.Length; i++)
        {
            if (EqualityComparer<T>.Default.Equals(array[i], item))
                return i;
        }
        return -1;
    }
    
    // Generic method with predicate
    public T Find<T>(T[] array, Predicate<T> predicate)
    {
        foreach (T item in array)
        {
            if (predicate(item))
                return item;
        }
        return default;
    }
    
    // Generic method that returns a generic collection
    public List<T> Filter<T>(T[] array, Func<T, bool> filter)
    {
        List<T> result = new List<T>();
        foreach (T item in array)
        {
            if (filter(item))
                result.Add(item);
        }
        return result;
    }
}

// Usage
ArrayHelper helper = new ArrayHelper();

string[] fruits = { "apple", "banana", "cherry", "date" };
int index = helper.FindIndex(fruits, "cherry");  // 2

int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
int firstEven = helper.Find(numbers, n => n % 2 == 0);  // 2

List<int> evenNumbers = helper.Filter(numbers, n => n % 2 == 0);
// [2, 4, 6, 8, 10]
```

### Extension Methods with Generics

```csharp
// Generic extension methods
public static class EnumerableExtensions
{
    // Extension method for any IEnumerable<T>
    public static T FirstOrDefault<T>(this IEnumerable<T> source, T defaultValue)
    {
        foreach (T item in source)
        {
            return item;
        }
        return defaultValue;
    }
    
    // Extension method with predicate
    public static bool Any<T>(this IEnumerable<T> source, Func<T, bool> predicate)
    {
        foreach (T item in source)
        {
            if (predicate(item))
                return true;
        }
        return false;
    }
    
    // Extension method that transforms elements
    public static IEnumerable<TResult> Select<T, TResult>(
        this IEnumerable<T> source, 
        Func<T, TResult> selector)
    {
        foreach (T item in source)
        {
            yield return selector(item);
        }
    }
}

// Usage
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };

// Using extension methods
int first = numbers.FirstOrDefault(-1);  // 1
bool hasEven = numbers.Any(n => n % 2 == 0);  // true

// Transforming elements
IEnumerable<string> numberStrings = numbers.Select(n => n.ToString());
// ["1", "2", "3", "4", "5"]
```

## Generic Constraints

Generic constraints limit the types that can be used as type arguments in a generic type or method.

### Type Constraints

```csharp
// Class constraint (T must be a class)
public class Repository<T> where T : class
{
    public void Save(T entity)
    {
        // Only reference types allowed
        Console.WriteLine($"Saving {entity}");
    }
}

// Struct constraint (T must be a value type)
public class ValueProcessor<T> where T : struct
{
    public T Process(T value)
    {
        // Only value types allowed
        Console.WriteLine($"Processing {value}");
        return value;
    }
}

// Interface constraint (T must implement an interface)
public class Sorter<T> where T : IComparable<T>
{
    public void Sort(T[] items)
    {
        Array.Sort(items);
    }
}

// Base class constraint (T must inherit from a specific class)
public class EntityValidator<T> where T : Entity
{
    public bool Validate(T entity)
    {
        return entity.IsValid();
    }
}

// Usage
Repository<Customer> customerRepo = new Repository<Customer>();
// Repository<int> intRepo = new Repository<int>();  // Error: int is not a class

ValueProcessor<int> intProcessor = new ValueProcessor<int>();
// ValueProcessor<string> stringProcessor = new ValueProcessor<string>();  // Error: string is not a struct

Sorter<string> stringSorter = new Sorter<string>();
// Sorter<object> objectSorter = new Sorter<object>();  // Error: object doesn't implement IComparable<object>

EntityValidator<User> userValidator = new EntityValidator<User>();
// EntityValidator<Customer> customerValidator = new EntityValidator<Customer>();  // Error: Customer doesn't inherit from Entity
```

### Multiple Constraints

```csharp
// Multiple constraints
public class DataProcessor<T> where T : class, ISerializable, new()
{
    // T must be a reference type, implement ISerializable, and have a parameterless constructor
    
    public T CreateAndProcess()
    {
        T item = new T();  // Requires new() constraint
        // Process the item
        return item;
    }
}

// Constraints on multiple type parameters
public class Converter<TInput, TOutput>
    where TInput : IConvertible
    where TOutput : IConvertible, new()
{
    public TOutput Convert(TInput input)
    {
        TOutput output = new TOutput();
        // Convert input to output
        return output;
    }
}
```

### Special Constraints

```csharp
// Unmanaged constraint (C# 7.3+)
public unsafe struct Buffer<T> where T : unmanaged
{
    // T must be an unmanaged type (primitive, enum, pointer, or struct of unmanaged types)
    private T* _pointer;
    private int _length;
    
    public Buffer(int length)
    {
        _length = length;
        _pointer = (T*)Marshal.AllocHGlobal(length * sizeof(T));
    }
    
    // Other methods...
}

// notnull constraint (C# 8.0+)
public class NonNullContainer<T> where T : notnull
{
    // T cannot be a nullable type
    private T _value;
    
    public NonNullContainer(T value)
    {
        _value = value ?? throw new ArgumentNullException(nameof(value));
    }
}

// default constraint (C# 7.1+)
public class DefaultValueProvider<T> where T : default
{
    // No specific constraint, just allows use of default(T)
    public T GetDefault()
    {
        return default(T);
    }
}
```

## Generic Type Inference

C# can often infer the type arguments for generic methods from the method arguments.

```csharp
public class TypeInference
{
    // Generic method
    public static void PrintPair<T, U>(T first, U second)
    {
        Console.WriteLine($"First: {first} ({typeof(T).Name}), Second: {second} ({typeof(U).Name})");
    }
    
    // Generic method with return type
    public static List<T> CreateList<T>(params T[] items)
    {
        return new List<T>(items);
    }
    
    // Method that uses type inference with constraints
    public static bool AreEqual<T>(T a, T b) where T : IEquatable<T>
    {
        return a.Equals(b);
    }
}

// Usage with type inference
TypeInference.PrintPair(42, "Hello");  // Compiler infers T as int, U as string
TypeInference.PrintPair("World", 3.14);  // Compiler infers T as string, U as double

// Type inference with return type
var numbers = TypeInference.CreateList(1, 2, 3, 4, 5);  // List<int>
var names = TypeInference.CreateList("Alice", "Bob", "Charlie");  // List<string>

// Type inference with constraints
bool equal = TypeInference.AreEqual("hello", "world");  // false
```

## Covariance and Contravariance

Covariance and contravariance enable implicit reference conversions for array types, delegate types, and generic type arguments.

### Covariance (out)

Covariance allows a method to return a more derived type than specified by the generic parameter.

```csharp
// Covariant interface (C# 4.0+)
public interface IProducer<out T>
{
    T Produce();
    // void Consume(T item);  // Error: Cannot use T as input parameter with 'out'
}

// Implementation
public class StringProducer : IProducer<string>
{
    public string Produce()
    {
        return "Hello, World!";
    }
}

// Usage with covariance
IProducer<string> stringProducer = new StringProducer();
IProducer<object> objectProducer = stringProducer;  // Covariance: IProducer<string> to IProducer<object>
object result = objectProducer.Produce();  // Returns a string, which is an object
```

### Contravariance (in)

Contravariance allows a method to accept parameters of a less derived type than specified by the generic parameter.

```csharp
// Contravariant interface (C# 4.0+)
public interface IConsumer<in T>
{
    void Consume(T item);
    // T Produce();  // Error: Cannot use T as return type with 'in'
}

// Implementation
public class ObjectConsumer : IConsumer<object>
{
    public void Consume(object item)
    {
        Console.WriteLine($"Consuming: {item}");
    }
}

// Usage with contravariance
IConsumer<object> objectConsumer = new ObjectConsumer();
IConsumer<string> stringConsumer = objectConsumer;  // Contravariance: IConsumer<object> to IConsumer<string>
stringConsumer.Consume("Hello");  // Passes a string to a method that accepts object
```

### Invariance

By default, generic type parameters are invariant, meaning there's no implicit conversion between different instantiations of the same generic type.

```csharp
// Invariant interface
public interface IContainer<T>
{
    T Value { get; set; }  // Both getter (out) and setter (in)
}

// Implementation
public class Container<T> : IContainer<T>
{
    public T Value { get; set; }
}

// Usage with invariance
IContainer<string> stringContainer = new Container<string>();
// IContainer<object> objectContainer = stringContainer;  // Error: Invariant
// IContainer<string> stringContainer2 = new Container<object>();  // Error: Invariant
```

### Covariance and Contravariance with Delegates

```csharp
// Delegate with covariant return type (out) and contravariant parameter type (in)
public delegate TResult Func<in T, out TResult>(T arg);

// Methods
public static string StringFromObject(object obj)
{
    return obj.ToString();
}

public static object ObjectFromString(string str)
{
    return str;
}

// Usage with delegates
Func<object, string> objectToString = StringFromObject;
Func<string, object> stringToObject = ObjectFromString;

// Covariance: string is more derived than object
Func<object, object> objectToObject = objectToString;  // Covariance in return type

// Contravariance: string is more derived than object
Func<string, string> stringToString = objectToString;  // Contravariance in parameter type

// Both covariance and contravariance
Func<string, object> stringToObject2 = objectToObject;  // Contravariance in parameter, covariance in return type
```

## Generic Collections

The .NET Framework provides several generic collection classes in the `System.Collections.Generic` namespace.

### List<T>

```csharp
// Creating a List<T>
List<int> numbers = new List<int>();
List<string> names = new List<string> { "Alice", "Bob", "Charlie" };

// Adding elements
numbers.Add(1);
numbers.AddRange(new[] { 2, 3, 4, 5 });

// Accessing elements
int first = numbers[0];  // 1
string lastName = names[names.Count - 1];  // "Charlie"

// Inserting elements
numbers.Insert(2, 10);  // Insert 10 at index 2
numbers.InsertRange(3, new[] { 11, 12 });

// Removing elements
numbers.Remove(3);  // Remove the first occurrence of 3
numbers.RemoveAt(0);  // Remove element at index 0
numbers.RemoveAll(n => n > 10);  // Remove all elements greater than 10
numbers.Clear();  // Remove all elements

// Searching
int index = names.IndexOf("Bob");  // 1
bool contains = names.Contains("David");  // false
string found = names.Find(n => n.StartsWith("A"));  // "Alice"
List<string> filtered = names.FindAll(n => n.Length > 3);  // ["Alice", "Charlie"]

// Sorting
numbers.Sort();  // Sort in ascending order
names.Sort((a, b) => b.CompareTo(a));  // Sort in descending order

// Converting to array
int[] numberArray = numbers.ToArray();
```

### Dictionary<TKey, TValue>

```csharp
// Creating a Dictionary<TKey, TValue>
Dictionary<string, int> ages = new Dictionary<string, int>();
Dictionary<int, string> idToName = new Dictionary<int, string>
{
    { 1, "Alice" },
    { 2, "Bob" },
    [3] = "Charlie"  // Alternative syntax (C# 6.0+)
};

// Adding elements
ages.Add("Alice", 30);
ages["Bob"] = 25;  // Add or update

// Accessing elements
int aliceAge = ages["Alice"];  // 30
// int davidAge = ages["David"];  // Throws KeyNotFoundException

// Safe access
if (ages.TryGetValue("David", out int davidAge))
{
    Console.WriteLine(davidAge);
}
else
{
    Console.WriteLine("David not found");
}

// Checking for keys
bool hasKey = ages.ContainsKey("Bob");  // true

// Removing elements
bool removed = ages.Remove("Bob");  // true
ages.Clear();  // Remove all elements

// Iterating
foreach (KeyValuePair<int, string> pair in idToName)
{
    Console.WriteLine($"ID: {pair.Key}, Name: {pair.Value}");
}

// Iterating keys and values separately
foreach (int id in idToName.Keys)
{
    Console.WriteLine($"ID: {id}");
}

foreach (string name in idToName.Values)
{
    Console.WriteLine($"Name: {name}");
}
```

### HashSet<T>

```csharp
// Creating a HashSet<T>
HashSet<int> set1 = new HashSet<int>();
HashSet<string> set2 = new HashSet<string> { "Apple", "Banana", "Cherry" };

// Adding elements
set1.Add(1);
set1.Add(2);
set1.Add(1);  // Duplicate, not added
bool added = set1.Add(3);  // true

// Checking for elements
bool contains = set2.Contains("Banana");  // true

// Removing elements
bool removed = set2.Remove("Banana");  // true
set1.Clear();  // Remove all elements

// Set operations
HashSet<int> a = new HashSet<int> { 1, 2, 3, 4, 5 };
HashSet<int> b = new HashSet<int> { 3, 4, 5, 6, 7 };

// Union (elements in either set)
a.UnionWith(b);  // a = { 1, 2, 3, 4, 5, 6, 7 }

// Intersection (elements in both sets)
HashSet<int> c = new HashSet<int> { 1, 2, 3, 4, 5 };
c.IntersectWith(b);  // c = { 3, 4, 5 }

// Difference (elements in first set but not in second)
HashSet<int> d = new HashSet<int> { 1, 2, 3, 4, 5 };
d.ExceptWith(b);  // d = { 1, 2 }

// Symmetric difference (elements in either set but not in both)
HashSet<int> e = new HashSet<int> { 1, 2, 3, 4, 5 };
e.SymmetricExceptWith(b);  // e = { 1, 2, 6, 7 }

// Subset/superset checks
bool isSubset = c.IsSubsetOf(a);  // true
bool isSuperset = a.IsSupersetOf(c);  // true
```

### Queue<T>

```csharp
// Creating a Queue<T>
Queue<string> queue = new Queue<string>();
Queue<int> numbers = new Queue<int>(new[] { 1, 2, 3 });

// Adding elements
queue.Enqueue("First");
queue.Enqueue("Second");
queue.Enqueue("Third");

// Examining elements
string peek = queue.Peek();  // "First" (doesn't remove)

// Removing elements
string first = queue.Dequeue();  // "First" (removes from queue)
queue.Clear();  // Remove all elements

// Checking
bool contains = numbers.Contains(2);  // true
int count = numbers.Count;  // 3

// Converting to array
int[] array = numbers.ToArray();  // Creates a copy

// Iterating
foreach (int number in numbers)
{
    Console.WriteLine(number);
}
```

### Stack<T>

```csharp
// Creating a Stack<T>
Stack<string> stack = new Stack<string>();
Stack<int> numbers = new Stack<int>(new[] { 1, 2, 3 });  // 3 will be on top

// Adding elements
stack.Push("First");
stack.Push("Second");
stack.Push("Third");  // "Third" is now on top

// Examining elements
string peek = stack.Peek();  // "Third" (doesn't remove)

// Removing elements
string top = stack.Pop();  // "Third" (removes from stack)
stack.Clear();  // Remove all elements

// Checking
bool contains = numbers.Contains(2);  // true
int count = numbers.Count;  // 3

// Converting to array
int[] array = numbers.ToArray();  // Order: 3, 2, 1

// Iterating
foreach (int number in numbers)
{
    Console.WriteLine(number);  // Order: 3, 2, 1
}
```

### LinkedList<T>

```csharp
// Creating a LinkedList<T>
LinkedList<string> linkedList = new LinkedList<string>();
LinkedList<int> numbers = new LinkedList<int>(new[] { 1, 2, 3 });

// Adding elements
LinkedListNode<string> firstNode = linkedList.AddFirst("First");
LinkedListNode<string> lastNode = linkedList.AddLast("Last");
linkedList.AddAfter(firstNode, "Middle");
linkedList.AddBefore(lastNode, "Before Last");

// Accessing elements
string first = linkedList.First.Value;  // "First"
string last = linkedList.Last.Value;  // "Last"

// Removing elements
linkedList.Remove("Middle");  // Remove by value
linkedList.Remove(firstNode);  // Remove by node
linkedList.RemoveFirst();  // Remove first node
linkedList.RemoveLast();  // Remove last node
linkedList.Clear();  // Remove all elements

// Checking
bool contains = numbers.Contains(2);  // true
int count = numbers.Count;  // 3

// Iterating
foreach (int number in numbers)
{
    Console.WriteLine(number);
}

// Iterating with nodes
LinkedListNode<int> node = numbers.First;
while (node != null)
{
    Console.WriteLine(node.Value);
    node = node.Next;
}
```

### SortedList<TKey, TValue>

```csharp
// Creating a SortedList<TKey, TValue>
SortedList<string, int> sortedAges = new SortedList<string, int>();
SortedList<int, string> sortedNames = new SortedList<int, string>
{
    { 3, "Charlie" },
    { 1, "Alice" },
    { 2, "Bob" }
};

// Adding elements (automatically sorted by key)
sortedAges.Add("Charlie", 30);
sortedAges.Add("Alice", 25);
sortedAges.Add("Bob", 35);
sortedAges["David"] = 28;  // Add or update

// Accessing elements
int aliceAge = sortedAges["Alice"];  // 25
string firstName = sortedNames[1];  // "Alice" (sorted by key)

// Accessing by index
string firstKey = sortedAges.Keys[0];  // "Alice" (keys are sorted)
int firstValue = sortedAges.Values[0];  // 25

// Removing elements
sortedAges.Remove("Bob");
sortedAges.RemoveAt(0);  // Remove by index

// Checking
bool containsKey = sortedAges.ContainsKey("Charlie");
bool containsValue = sortedAges.ContainsValue(28);

// Iterating (in sorted order by key)
foreach (KeyValuePair<string, int> pair in sortedAges)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

### SortedSet<T>

```csharp
// Creating a SortedSet<T>
SortedSet<int> sortedSet = new SortedSet<int>();
SortedSet<string> names = new SortedSet<string> { "Charlie", "Alice", "Bob" };

// Adding elements (automatically sorted)
sortedSet.Add(5);
sortedSet.Add(2);
sortedSet.Add(8);
sortedSet.Add(2);  // Duplicate, not added

// Accessing elements
int min = sortedSet.Min;  // 2
int max = sortedSet.Max;  // 8

// Getting views
SortedSet<int> subset = sortedSet.GetViewBetween(3, 7);  // Elements between 3 and 7 inclusive

// Removing elements
sortedSet.Remove(5);
sortedSet.RemoveWhere(n => n > 5);  // Remove all elements greater than 5

// Set operations (same as HashSet<T>)
SortedSet<int> a = new SortedSet<int> { 1, 2, 3, 4, 5 };
SortedSet<int> b = new SortedSet<int> { 3, 4, 5, 6, 7 };

a.UnionWith(b);  // a = { 1, 2, 3, 4, 5, 6, 7 } (sorted)

// Iterating (in sorted order)
foreach (string name in names)
{
    Console.WriteLine(name);  // "Alice", "Bob", "Charlie"
}
```

### ConcurrentDictionary<TKey, TValue>

```csharp
// Creating a thread-safe dictionary
ConcurrentDictionary<string, int> concurrentDict = new ConcurrentDictionary<string, int>();

// Adding elements
concurrentDict.TryAdd("One", 1);
concurrentDict.TryAdd("Two", 2);

// Adding or updating atomically
int newValue = concurrentDict.AddOrUpdate(
    "Three",
    key => 3,  // Add function if key doesn't exist
    (key, oldValue) => oldValue + 1  // Update function if key exists
);

// Getting or adding atomically
int value = concurrentDict.GetOrAdd("Four", key => 4);

// Updating atomically
bool updated = concurrentDict.TryUpdate("Two", 22, 2);  // Update if current value is 2

// Removing elements
bool removed = concurrentDict.TryRemove("One", out int removedValue);

// Thread-safe iteration
foreach (KeyValuePair<string, int> pair in concurrentDict)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}
```

## Resources

- [C# Generics (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/)
- [Generic Collections (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/collections/generic-collection-types)
- [Covariance and Contravariance (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/covariance-contravariance/)
- [Generic Constraints (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/constraints-on-type-parameters)
