---
title: "Collections"
sidebar_position: 12
---

C# provides a rich set of collection types for storing and manipulating groups of related objects.

## Arrays

Arrays are the most basic collection type in C#, providing a fixed-size, zero-indexed list of elements of the same type.

### Array Declaration and Initialization

```csharp
// Declaration and initialization
int[] numbers = new int[5];  // Array of 5 integers, all initialized to 0

// Declaration with initialization
string[] fruits = new string[] { "Apple", "Banana", "Cherry" };

// Shorthand initialization
char[] vowels = { 'a', 'e', 'i', 'o', 'u' };

// Initialization with specific values
int[] scores = new int[3] { 85, 92, 78 };

// Declaration and later initialization
double[] prices;
prices = new double[2];
prices[0] = 9.99;
prices[1] = 19.99;
```

### Accessing Array Elements

```csharp
// Accessing elements by index
int firstNumber = numbers[0];
string secondFruit = fruits[1];  // "Banana"

// Setting elements by index
numbers[2] = 42;
fruits[0] = "Apricot";

// Getting array length
int length = numbers.Length;  // 5

// Iterating through an array with for loop
for (int i = 0; i < fruits.Length; i++)
{
    Console.WriteLine(fruits[i]);
}

// Iterating with foreach loop
foreach (char vowel in vowels)
{
    Console.WriteLine(vowel);
}
```

### Multidimensional Arrays

```csharp
// 2D rectangular array
int[,] matrix = new int[3, 2];  // 3 rows, 2 columns
matrix[0, 0] = 1;
matrix[0, 1] = 2;
matrix[1, 0] = 3;
matrix[1, 1] = 4;
matrix[2, 0] = 5;
matrix[2, 1] = 6;

// 2D array initialization
int[,] grid = new int[,] {
    { 1, 2, 3 },
    { 4, 5, 6 }
};

// Getting dimensions
int rows = grid.GetLength(0);  // 2
int columns = grid.GetLength(1);  // 3

// Iterating through a 2D array
for (int i = 0; i < rows; i++)
{
    for (int j = 0; j < columns; j++)
    {
        Console.Write($"{grid[i, j]} ");
    }
    Console.WriteLine();
}

// 3D array
int[,,] cube = new int[2, 2, 2];
cube[0, 0, 0] = 1;
cube[1, 1, 1] = 8;
```

### Jagged Arrays (Arrays of Arrays)

```csharp
// Jagged array declaration
int[][] jaggedArray = new int[3][];

// Initializing the inner arrays
jaggedArray[0] = new int[] { 1, 2, 3 };
jaggedArray[1] = new int[] { 4, 5 };
jaggedArray[2] = new int[] { 6, 7, 8, 9 };

// Jagged array initialization
int[][] numbers = new int[][] {
    new int[] { 1, 2 },
    new int[] { 3, 4, 5 },
    new int[] { 6 }
};

// Accessing elements
int value = jaggedArray[1][0];  // 4

// Iterating through a jagged array
for (int i = 0; i < jaggedArray.Length; i++)
{
    for (int j = 0; j < jaggedArray[i].Length; j++)
    {
        Console.Write($"{jaggedArray[i][j]} ");
    }
    Console.WriteLine();
}
```

### Array Methods and Properties

```csharp
int[] numbers = { 4, 2, 8, 5, 1, 3, 9 };
string[] names = { "Alice", "Bob", "Charlie", "David" };

// Finding elements
int index = Array.IndexOf(numbers, 5);  // 3
int lastIndex = Array.LastIndexOf(names, "Bob");  // 1
bool exists = Array.Exists(numbers, n => n > 7);  // true
int found = Array.Find(numbers, n => n % 2 == 0);  // 4
int[] evenNumbers = Array.FindAll(numbers, n => n % 2 == 0);  // [4, 2, 8]

// Sorting and reversing
Array.Sort(numbers);  // [1, 2, 3, 4, 5, 8, 9]
Array.Reverse(names);  // ["David", "Charlie", "Bob", "Alice"]

// Resizing
Array.Resize(ref names, 6);  // Resize to length 6, new elements are null
names[4] = "Eve";
names[5] = "Frank";

// Copying
int[] numbersCopy = new int[numbers.Length];
Array.Copy(numbers, numbersCopy, numbers.Length);

// Creating a shallow copy
string[] namesCopy = (string[])names.Clone();

// Clearing elements
Array.Clear(numbers, 0, 2);  // Clear first 2 elements (set to default value)

// Binary search (array must be sorted)
Array.Sort(numbers);
int position = Array.BinarySearch(numbers, 5);  // Returns index if found

// Converting to other collections
List<int> numberList = new List<int>(numbers);
Queue<string> nameQueue = new Queue<string>(names);
```

## List<T>

List<T> is a dynamic array that can grow or shrink as needed.

### List Creation and Initialization

```csharp
// Creating an empty list
List<int> numbers = new List<int>();

// Creating with initial capacity
List<string> names = new List<string>(10);

// Creating with initial elements
List<double> prices = new List<double> { 9.99, 19.99, 29.99 };

// Creating from an existing collection
int[] array = { 1, 2, 3, 4, 5 };
List<int> numberList = new List<int>(array);
```

### Adding and Inserting Elements

```csharp
// Adding elements
numbers.Add(1);
numbers.Add(2);
numbers.Add(3);

// Adding multiple elements
numbers.AddRange(new[] { 4, 5, 6 });

// Inserting at specific position
numbers.Insert(0, 0);  // Insert 0 at index 0
numbers.InsertRange(4, new[] { 3, 4 });  // Insert multiple elements at index 4
```

### Accessing and Modifying Elements

```csharp
// Accessing by index
int first = numbers[0];
string lastName = names[names.Count - 1];

// Modifying elements
numbers[1] = 10;

// Getting count
int count = numbers.Count;

// Checking if element exists
bool contains = numbers.Contains(5);
bool hasLongName = names.Exists(name => name.Length > 5);

// Finding elements
int index = numbers.IndexOf(3);
int lastIndex = numbers.LastIndexOf(3);
int foundNumber = numbers.Find(n => n > 5);
List<int> foundNumbers = numbers.FindAll(n => n % 2 == 0);
```

### Removing Elements

```csharp
// Removing specific element
bool removed = numbers.Remove(3);  // Removes first occurrence of 3

// Removing at specific index
numbers.RemoveAt(0);  // Removes element at index 0

// Removing a range
numbers.RemoveRange(1, 2);  // Removes 2 elements starting at index 1

// Removing based on condition
int removedCount = numbers.RemoveAll(n => n > 10);

// Clearing the list
numbers.Clear();
```

### Sorting and Searching

```csharp
// Sorting
numbers.Sort();  // Ascending order
names.Sort((a, b) => b.CompareTo(a));  // Descending order using comparison

// Binary search (list must be sorted)
numbers.Sort();
int index = numbers.BinarySearch(5);

// Custom sorting with IComparer
names.Sort(StringComparer.OrdinalIgnoreCase);
```

### Converting to Other Collections

```csharp
// Converting to array
int[] array = numbers.ToArray();

// Converting to dictionary
Dictionary<int, string> dictionary = names
    .Select((name, index) => new { Index = index, Name = name })
    .ToDictionary(item => item.Index, item => item.Name);
```

## Dictionary<TKey, TValue>

Dictionary<TKey, TValue> stores key-value pairs for fast lookups by key.

### Dictionary Creation and Initialization

```csharp
// Creating an empty dictionary
Dictionary<string, int> ages = new Dictionary<string, int>();

// Creating with initial elements
Dictionary<int, string> employees = new Dictionary<int, string>
{
    { 101, "John Smith" },
    { 102, "Jane Doe" },
    { 103, "Bob Johnson" }
};

// Alternative initialization syntax (C# 6.0+)
Dictionary<string, bool> settings = new Dictionary<string, bool>
{
    ["DarkMode"] = true,
    ["Notifications"] = false,
    ["AutoSave"] = true
};
```

### Adding and Updating Elements

```csharp
// Adding elements
ages.Add("Alice", 30);
ages.Add("Bob", 25);

// Adding or updating with indexer
ages["Charlie"] = 35;  // Adds if key doesn't exist, updates if it does

// TryAdd (C# 7.0+)
bool added = ages.TryAdd("Alice", 31);  // Returns false, doesn't modify existing entry

// Adding multiple elements
Dictionary<string, int> moreAges = new Dictionary<string, int>
{
    { "David", 40 },
    { "Eve", 28 }
};

foreach (var pair in moreAges)
{
    ages[pair.Key] = pair.Value;
}
```

### Accessing Elements

```csharp
// Accessing by key
int aliceAge = ages["Alice"];  // Throws if key doesn't exist

// Safe access with TryGetValue
if (ages.TryGetValue("Frank", out int frankAge))
{
    Console.WriteLine($"Frank's age: {frankAge}");
}
else
{
    Console.WriteLine("Frank not found");
}

// Checking if key exists
bool hasKey = ages.ContainsKey("Bob");

// Checking if value exists
bool hasValue = ages.ContainsValue(25);
```

### Removing Elements

```csharp
// Removing by key
bool removed = ages.Remove("Bob");

// Removing by key and getting the value
bool removedWithValue = ages.Remove("Charlie", out int charlieAge);

// Clearing the dictionary
ages.Clear();
```

### Iterating Through a Dictionary

```csharp
// Iterating through key-value pairs
foreach (KeyValuePair<string, int> pair in ages)
{
    Console.WriteLine($"{pair.Key}: {pair.Value}");
}

// Using deconstruction (C# 7.0+)
foreach (var (name, age) in ages)
{
    Console.WriteLine($"{name}: {age}");
}

// Iterating through keys
foreach (string name in ages.Keys)
{
    Console.WriteLine(name);
}

// Iterating through values
foreach (int age in ages.Values)
{
    Console.WriteLine(age);
}
```

### Dictionary Properties and Methods

```csharp
// Getting count
int count = ages.Count;

// Getting all keys
ICollection<string> keys = ages.Keys;

// Getting all values
ICollection<int> values = ages.Values;

// Converting to list of KeyValuePair
List<KeyValuePair<string, int>> pairsList = ages.ToList();

// Converting to lookup
ILookup<int, string> ageLookup = ages
    .ToLookup(pair => pair.Value, pair => pair.Key);
```

## HashSet<T>

HashSet<T> is a collection of unique elements with fast lookup, insertion, and deletion.

### HashSet Creation and Initialization

```csharp
// Creating an empty HashSet
HashSet<int> numbers = new HashSet<int>();

// Creating with initial elements
HashSet<string> fruits = new HashSet<string> { "Apple", "Banana", "Cherry" };

// Creating from an existing collection
string[] fruitArray = { "Apple", "Banana", "Cherry", "Apple" };
HashSet<string> uniqueFruits = new HashSet<string>(fruitArray);  // Duplicates are automatically removed
```

### Adding and Removing Elements

```csharp
// Adding elements
bool added = numbers.Add(1);  // Returns true if added, false if already exists
numbers.Add(2);
numbers.Add(3);

// Adding multiple elements
numbers.UnionWith(new[] { 3, 4, 5 });  // Adds elements not already in the set

// Removing elements
bool removed = numbers.Remove(2);

// Removing elements that match a predicate
numbers.RemoveWhere(n => n % 2 == 0);

// Clearing the set
numbers.Clear();
```

### Checking for Elements

```csharp
// Checking if element exists
bool contains = fruits.Contains("Banana");  // true

// Checking if set is a subset of another set
HashSet<string> citrus = new HashSet<string> { "Lemon", "Orange" };
bool isSubset = citrus.IsSubsetOf(fruits);  // false

// Checking if set is a superset of another set
bool isSuperset = fruits.IsSupersetOf(citrus);  // false

// Checking if sets overlap
bool overlaps = fruits.Overlaps(citrus);  // false

// Checking if sets have the same elements
bool equals = fruits.SetEquals(uniqueFruits);  // true
```

### Set Operations

```csharp
HashSet<int> set1 = new HashSet<int> { 1, 2, 3, 4, 5 };
HashSet<int> set2 = new HashSet<int> { 4, 5, 6, 7, 8 };

// Union (elements in either set)
HashSet<int> union = new HashSet<int>(set1);
union.UnionWith(set2);  // { 1, 2, 3, 4, 5, 6, 7, 8 }

// Intersection (elements in both sets)
HashSet<int> intersection = new HashSet<int>(set1);
intersection.IntersectWith(set2);  // { 4, 5 }

// Difference (elements in first set but not in second)
HashSet<int> difference = new HashSet<int>(set1);
difference.ExceptWith(set2);  // { 1, 2, 3 }

// Symmetric difference (elements in either set but not in both)
HashSet<int> symmetricDifference = new HashSet<int>(set1);
symmetricDifference.SymmetricExceptWith(set2);  // { 1, 2, 3, 6, 7, 8 }
```

### Iterating Through a HashSet

```csharp
// Iterating with foreach
foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}

// Converting to other collections
List<string> fruitList = fruits.ToList();
string[] fruitArray = fruits.ToArray();
```

## Queue<T>

Queue<T> represents a first-in, first-out (FIFO) collection of elements.

### Queue Creation and Initialization

```csharp
// Creating an empty queue
Queue<string> messages = new Queue<string>();

// Creating with initial elements
Queue<int> numbers = new Queue<int>(new[] { 1, 2, 3, 4, 5 });
```

### Adding and Removing Elements

```csharp
// Adding elements (at the end)
messages.Enqueue("Message 1");
messages.Enqueue("Message 2");
messages.Enqueue("Message 3");

// Removing elements (from the front)
string firstMessage = messages.Dequeue();  // "Message 1"

// Peeking at the front element without removing
string nextMessage = messages.Peek();  // "Message 2"

// Clearing the queue
messages.Clear();
```

### Queue Properties and Methods

```csharp
// Checking if element exists
bool contains = numbers.Contains(3);  // true

// Getting count
int count = messages.Count;

// Converting to array
string[] messageArray = messages.ToArray();

// Iterating through a queue
foreach (int number in numbers)
{
    Console.WriteLine(number);
}
```

### Queue Usage Example

```csharp
// Processing queue example
Queue<string> printQueue = new Queue<string>();

// Add print jobs
printQueue.Enqueue("Document1.pdf");
printQueue.Enqueue("Image.jpg");
printQueue.Enqueue("Report.docx");

// Process print jobs
while (printQueue.Count > 0)
{
    string currentJob = printQueue.Dequeue();
    Console.WriteLine($"Printing: {currentJob}");
    // Process the job...
}
```

## Stack<T>

Stack<T> represents a last-in, first-out (LIFO) collection of elements.

### Stack Creation and Initialization

```csharp
// Creating an empty stack
Stack<int> numbers = new Stack<int>();

// Creating with initial elements
Stack<string> pages = new Stack<string>(new[] { "Page 1", "Page 2", "Page 3" });
```

### Adding and Removing Elements

```csharp
// Adding elements (to the top)
numbers.Push(1);
numbers.Push(2);
numbers.Push(3);  // Stack is now [3, 2, 1] with 3 at the top

// Removing elements (from the top)
int top = numbers.Pop();  // 3, stack is now [2, 1]

// Peeking at the top element without removing
int nextTop = numbers.Peek();  // 2

// Clearing the stack
numbers.Clear();
```

### Stack Properties and Methods

```csharp
// Checking if element exists
bool contains = pages.Contains("Page 2");  // true

// Getting count
int count = pages.Count;

// Converting to array
string[] pagesArray = pages.ToArray();  // Order: top to bottom

// Iterating through a stack
foreach (string page in pages)
{
    Console.WriteLine(page);  // Iterates from top to bottom
}
```

### Stack Usage Example

```csharp
// Undo/redo functionality example
Stack<string> undoStack = new Stack<string>();
Stack<string> redoStack = new Stack<string>();

// Perform actions
void PerformAction(string action)
{
    Console.WriteLine($"Performing: {action}");
    undoStack.Push(action);
    redoStack.Clear();  // Clear redo stack when new action is performed
}

// Undo last action
void Undo()
{
    if (undoStack.Count > 0)
    {
        string action = undoStack.Pop();
        Console.WriteLine($"Undoing: {action}");
        redoStack.Push(action);
    }
    else
    {
        Console.WriteLine("Nothing to undo");
    }
}

// Redo last undone action
void Redo()
{
    if (redoStack.Count > 0)
    {
        string action = redoStack.Pop();
        Console.WriteLine($"Redoing: {action}");
        undoStack.Push(action);
    }
    else
    {
        Console.WriteLine("Nothing to redo");
    }
}

// Usage
PerformAction("Add text");
PerformAction("Format text");
PerformAction("Add image");
Undo();  // Undo "Add image"
Undo();  // Undo "Format text"
Redo();  // Redo "Format text"
```

## LinkedList<T>

LinkedList<T> represents a doubly linked list where each node points to the next and previous nodes.

### LinkedList Creation and Initialization

```csharp
// Creating an empty linked list
LinkedList<int> numbers = new LinkedList<int>();

// Creating with initial elements
LinkedList<string> names = new LinkedList<string>(new[] { "Alice", "Bob", "Charlie" });
```

### Adding Elements

```csharp
// Adding at the beginning
LinkedListNode<int> firstNode = numbers.AddFirst(1);

// Adding at the end
LinkedListNode<int> lastNode = numbers.AddLast(3);

// Adding after a node
LinkedListNode<int> middleNode = numbers.AddAfter(firstNode, 2);

// Adding before a node
numbers.AddBefore(lastNode, 2);
```

### Accessing Elements

```csharp
// Accessing first and last elements
int first = numbers.First.Value;
int last = numbers.Last.Value;

// Traversing forward
LinkedListNode<int> current = numbers.First;
while (current != null)
{
    Console.WriteLine(current.Value);
    current = current.Next;
}

// Traversing backward
current = numbers.Last;
while (current != null)
{
    Console.WriteLine(current.Value);
    current = current.Previous;
}
```

### Removing Elements

```csharp
// Removing specific nodes
numbers.Remove(2);  // Removes first occurrence of 2
numbers.Remove(firstNode);  // Removes the specified node

// Removing from the beginning or end
numbers.RemoveFirst();
numbers.RemoveLast();

// Clearing the list
numbers.Clear();
```

### LinkedList Properties and Methods

```csharp
// Checking if element exists
bool contains = names.Contains("Bob");  // true

// Getting count
int count = names.Count;

// Finding nodes
LinkedListNode<string> bobNode = names.Find("Bob");
LinkedListNode<string> lastBob = names.FindLast("Bob");

// Converting to array
string[] namesArray = names.ToArray();
```

## SortedList<TKey, TValue>

SortedList<TKey, TValue> represents a collection of key-value pairs sorted by key.

### SortedList Creation and Initialization

```csharp
// Creating an empty sorted list
SortedList<string, int> scores = new SortedList<string, int>();

// Creating with initial elements
SortedList<int, string> ranks = new SortedList<int, string>
{
    { 3, "Bronze" },
    { 1, "Gold" },
    { 2, "Silver" }
};  // Will be sorted by key: 1, 2, 3
```

### Adding and Accessing Elements

```csharp
// Adding elements (automatically sorted by key)
scores.Add("Alice", 95);
scores.Add("Charlie", 85);
scores.Add("Bob", 90);  // Will be sorted as Alice, Bob, Charlie

// Accessing by key
int aliceScore = scores["Alice"];  // 95

// Accessing by index
string secondKey = scores.Keys[1];  // "Bob"
int secondValue = scores.Values[1];  // 90

// Safe access
if (scores.TryGetValue("David", out int davidScore))
{
    Console.WriteLine(davidScore);
}
```

### Removing Elements

```csharp
// Removing by key
scores.Remove("Bob");

// Removing by index
scores.RemoveAt(0);  // Removes the first key-value pair

// Clearing the list
scores.Clear();
```

### SortedList Properties and Methods

```csharp
// Getting count
int count = scores.Count;

// Checking if key exists
bool hasKey = scores.ContainsKey("Alice");

// Checking if value exists
bool hasValue = scores.ContainsValue(90);

// Getting index of a key
int index = scores.IndexOfKey("Bob");

// Getting index of a value
int valueIndex = scores.IndexOfValue(85);

// Getting keys and values
IList<string> keys = scores.Keys;
IList<int> values = scores.Values;
```

## Concurrent Collections

.NET provides thread-safe collection classes in the `System.Collections.Concurrent` namespace.

### ConcurrentDictionary<TKey, TValue>

```csharp
// Creating a concurrent dictionary
ConcurrentDictionary<string, int> concurrentDict = new ConcurrentDictionary<string, int>();

// Adding elements
concurrentDict.TryAdd("One", 1);
concurrentDict.TryAdd("Two", 2);

// Getting or adding atomically
int value = concurrentDict.GetOrAdd("Three", key => 3);

// Updating atomically
int newValue = concurrentDict.AddOrUpdate(
    "One",
    key => 10,  // Add function
    (key, oldValue) => oldValue * 10  // Update function
);

// Removing elements
concurrentDict.TryRemove("Two", out int removedValue);
```

### ConcurrentQueue<T>

```csharp
// Creating a concurrent queue
ConcurrentQueue<string> concurrentQueue = new ConcurrentQueue<string>();

// Adding elements
concurrentQueue.Enqueue("Item 1");
concurrentQueue.Enqueue("Item 2");

// Trying to remove elements
if (concurrentQueue.TryDequeue(out string item))
{
    Console.WriteLine($"Dequeued: {item}");
}

// Peeking without removing
if (concurrentQueue.TryPeek(out string peekedItem))
{
    Console.WriteLine($"Next item: {peekedItem}");
}
```

### ConcurrentStack<T>

```csharp
// Creating a concurrent stack
ConcurrentStack<int> concurrentStack = new ConcurrentStack<int>();

// Adding elements
concurrentStack.Push(1);
concurrentStack.Push(2);
concurrentStack.Push(3);

// Trying to remove elements
if (concurrentStack.TryPop(out int poppedItem))
{
    Console.WriteLine($"Popped: {poppedItem}");
}

// Peeking without removing
if (concurrentStack.TryPeek(out int peekedItem))
{
    Console.WriteLine($"Top item: {peekedItem}");
}

// Popping multiple items
int[] items = new int[2];
int popped = concurrentStack.TryPopRange(items, 0, 2);
Console.WriteLine($"Popped {popped} items");
```

### ConcurrentBag<T>

```csharp
// Creating a concurrent bag (unordered collection)
ConcurrentBag<string> concurrentBag = new ConcurrentBag<string>();

// Adding elements
concurrentBag.Add("Item 1");
concurrentBag.Add("Item 2");
concurrentBag.Add("Item 3");

// Trying to remove elements
if (concurrentBag.TryTake(out string takenItem))
{
    Console.WriteLine($"Taken: {takenItem}");  // Order not guaranteed
}

// Peeking without removing
if (concurrentBag.TryPeek(out string peekedItem))
{
    Console.WriteLine($"Peeked: {peekedItem}");  // Order not guaranteed
}
```

### BlockingCollection<T>

```csharp
// Creating a blocking collection with bounded capacity
BlockingCollection<int> blockingCollection = new BlockingCollection<int>(boundedCapacity: 5);

// Producer task
Task producer = Task.Run(() =>
{
    for (int i = 0; i < 10; i++)
    {
        blockingCollection.Add(i);  // Blocks if collection is full
        Console.WriteLine($"Produced: {i}");
        Thread.Sleep(100);
    }
    blockingCollection.CompleteAdding();  // Signal no more items will be added
});

// Consumer task
Task consumer = Task.Run(() =>
{
    foreach (int item in blockingCollection.GetConsumingEnumerable())
    {
        Console.WriteLine($"Consumed: {item}");
        Thread.Sleep(200);  // Consuming slower than producing
    }
});

// Wait for both tasks to complete
Task.WaitAll(producer, consumer);
```

## ImmutableCollections

.NET provides immutable collection classes in the `System.Collections.Immutable` namespace.

### ImmutableArray<T>

```csharp
// Creating an immutable array
ImmutableArray<int> immutableArray = ImmutableArray.Create(1, 2, 3, 4, 5);

// Creating from existing collection
int[] array = { 1, 2, 3 };
ImmutableArray<int> fromArray = ImmutableArray.CreateRange(array);

// Creating a builder for batch operations
ImmutableArray<string>.Builder builder = ImmutableArray.CreateBuilder<string>();
builder.Add("One");
builder.Add("Two");
builder.Add("Three");
ImmutableArray<string> builtArray = builder.ToImmutable();

// Non-destructive operations (return new instances)
ImmutableArray<int> added = immutableArray.Add(6);
ImmutableArray<int> removed = immutableArray.Remove(3);
ImmutableArray<int> replaced = immutableArray.Replace(2, 20);
```

### ImmutableList<T>

```csharp
// Creating an immutable list
ImmutableList<string> immutableList = ImmutableList.Create("A", "B", "C");

// Creating from existing collection
List<string> list = new List<string> { "X", "Y", "Z" };
ImmutableList<string> fromList = ImmutableList.CreateRange(list);

// Non-destructive operations
ImmutableList<string> added = immutableList.Add("D");
ImmutableList<string> inserted = immutableList.Insert(1, "AB");
ImmutableList<string> removed = immutableList.Remove("B");
ImmutableList<string> replaced = immutableList.Replace("C", "CC");
```

### ImmutableDictionary<TKey, TValue>

```csharp
// Creating an immutable dictionary
ImmutableDictionary<string, int> immutableDict = ImmutableDictionary.Create<string, int>()
    .Add("One", 1)
    .Add("Two", 2)
    .Add("Three", 3);

// Creating from existing dictionary
Dictionary<string, bool> dict = new Dictionary<string, bool>
{
    { "A", true },
    { "B", false }
};
ImmutableDictionary<string, bool> fromDict = ImmutableDictionary.CreateRange(dict);

// Non-destructive operations
ImmutableDictionary<string, int> added = immutableDict.Add("Four", 4);
ImmutableDictionary<string, int> removed = immutableDict.Remove("Two");
ImmutableDictionary<string, int> updated = immutableDict.SetItem("One", 10);
```

### ImmutableHashSet<T>

```csharp
// Creating an immutable hash set
ImmutableHashSet<int> immutableSet = ImmutableHashSet.Create(1, 2, 3, 4, 5);

// Creating from existing collection
HashSet<char> set = new HashSet<char> { 'a', 'b', 'c' };
ImmutableHashSet<char> fromSet = ImmutableHashSet.CreateRange(set);

// Non-destructive operations
ImmutableHashSet<int> added = immutableSet.Add(6);
ImmutableHashSet<int> removed = immutableSet.Remove(3);
ImmutableHashSet<int> union = immutableSet.Union(ImmutableHashSet.Create(5, 6, 7));
ImmutableHashSet<int> intersection = immutableSet.Intersect(ImmutableHashSet.Create(3, 4, 5, 6));
```

## Collection Interfaces

C# provides several interfaces for working with collections.

### IEnumerable<T> and IEnumerator<T>

```csharp
// Implementing IEnumerable<T>
public class CustomCollection<T> : IEnumerable<T>
{
    private List<T> _items = new List<T>();
    
    public void Add(T item)
    {
        _items.Add(item);
    }
    
    // Implement IEnumerable<T>
    public IEnumerator<T> GetEnumerator()
    {
        return _items.GetEnumerator();
    }
    
    // Implement IEnumerable (non-generic)
    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}

// Using the custom collection
CustomCollection<string> collection = new CustomCollection<string>();
collection.Add("One");
collection.Add("Two");

foreach (string item in collection)
{
    Console.WriteLine(item);
}
```

### ICollection<T>

```csharp
// Implementing ICollection<T>
public class CustomCollection<T> : ICollection<T>
{
    private List<T> _items = new List<T>();
    
    public int Count => _items.Count;
    public bool IsReadOnly => false;
    
    public void Add(T item)
    {
        _items.Add(item);
    }
    
    public void Clear()
    {
        _items.Clear();
    }
    
    public bool Contains(T item)
    {
        return _items.Contains(item);
    }
    
    public void CopyTo(T[] array, int arrayIndex)
    {
        _items.CopyTo(array, arrayIndex);
    }
    
    public bool Remove(T item)
    {
        return _items.Remove(item);
    }
    
    public IEnumerator<T> GetEnumerator()
    {
        return _items.GetEnumerator();
    }
    
    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
```

### IList<T>

```csharp
// Implementing IList<T>
public class CustomList<T> : IList<T>
{
    private List<T> _items = new List<T>();
    
    public T this[int index]
    {
        get { return _items[index]; }
        set { _items[index] = value; }
    }
    
    public int Count => _items.Count;
    public bool IsReadOnly => false;
    
    public void Add(T item)
    {
        _items.Add(item);
    }
    
    public void Clear()
    {
        _items.Clear();
    }
    
    public bool Contains(T item)
    {
        return _items.Contains(item);
    }
    
    public void CopyTo(T[] array, int arrayIndex)
    {
        _items.CopyTo(array, arrayIndex);
    }
    
    public int IndexOf(T item)
    {
        return _items.IndexOf(item);
    }
    
    public void Insert(int index, T item)
    {
        _items.Insert(index, item);
    }
    
    public bool Remove(T item)
    {
        return _items.Remove(item);
    }
    
    public void RemoveAt(int index)
    {
        _items.RemoveAt(index);
    }
    
    public IEnumerator<T> GetEnumerator()
    {
        return _items.GetEnumerator();
    }
    
    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
```

### IDictionary<TKey, TValue>

```csharp
// Implementing IDictionary<TKey, TValue>
public class CustomDictionary<TKey, TValue> : IDictionary<TKey, TValue>
{
    private Dictionary<TKey, TValue> _dictionary = new Dictionary<TKey, TValue>();
    
    public TValue this[TKey key]
    {
        get { return _dictionary[key]; }
        set { _dictionary[key] = value; }
    }
    
    public ICollection<TKey> Keys => _dictionary.Keys;
    public ICollection<TValue> Values => _dictionary.Values;
    public int Count => _dictionary.Count;
    public bool IsReadOnly => false;
    
    public void Add(TKey key, TValue value)
    {
        _dictionary.Add(key, value);
    }
    
    public void Add(KeyValuePair<TKey, TValue> item)
    {
        ((IDictionary<TKey, TValue>)_dictionary).Add(item);
    }
    
    public void Clear()
    {
        _dictionary.Clear();
    }
    
    public bool Contains(KeyValuePair<TKey, TValue> item)
    {
        return ((IDictionary<TKey, TValue>)_dictionary).Contains(item);
    }
    
    public bool ContainsKey(TKey key)
    {
        return _dictionary.ContainsKey(key);
    }
    
    public void CopyTo(KeyValuePair<TKey, TValue>[] array, int arrayIndex)
    {
        ((IDictionary<TKey, TValue>)_dictionary).CopyTo(array, arrayIndex);
    }
    
    public bool Remove(TKey key)
    {
        return _dictionary.Remove(key);
    }
    
    public bool Remove(KeyValuePair<TKey, TValue> item)
    {
        return ((IDictionary<TKey, TValue>)_dictionary).Remove(item);
    }
    
    public bool TryGetValue(TKey key, out TValue value)
    {
        return _dictionary.TryGetValue(key, out value);
    }
    
    public IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator()
    {
        return _dictionary.GetEnumerator();
    }
    
    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}
```

## Resources

- [C# Collections (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections)
- [Arrays (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/)
- [Generic Collections (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/collections/generic-collection-types)
- [Concurrent Collections (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/collections/thread-safe/)
- [Immutable Collections (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/collections/immutable-collections)
