---
title: "LINQ (Language Integrated Query)"
sidebar_position: 13
---

LINQ (Language Integrated Query) provides a consistent syntax for querying data from different sources, such as collections, databases, XML, and more.

## LINQ Basics

### LINQ Query Syntax

```csharp
// Sample data
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
List<string> names = new List<string> { "Alice", "Bob", "Charlie", "David", "Eve" };

// Basic query syntax
var evenNumbers = from num in numbers
                  where num % 2 == 0
                  select num;
// Result: { 2, 4, 6, 8, 10 }

// Query with ordering
var orderedNames = from name in names
                   orderby name.Length, name
                   select name;
// Result: { "Bob", "Eve", "Alice", "David", "Charlie" }

// Query with projection
var nameInfo = from name in names
               select new { Name = name, Length = name.Length };
// Result: { { Name = "Alice", Length = 5 }, { Name = "Bob", Length = 3 }, ... }

// Query with filtering and projection
var longNames = from name in names
                where name.Length > 4
                select name.ToUpper();
// Result: { "ALICE", "CHARLIE", "DAVID" }
```

### LINQ Method Syntax

```csharp
// Basic method syntax
var evenNumbers = numbers.Where(n => n % 2 == 0);
// Result: { 2, 4, 6, 8, 10 }

// Method with ordering
var orderedNames = names.OrderBy(n => n.Length).ThenBy(n => n);
// Result: { "Bob", "Eve", "Alice", "David", "Charlie" }

// Method with projection
var nameInfo = names.Select(n => new { Name = n, Length = n.Length });
// Result: { { Name = "Alice", Length = 5 }, { Name = "Bob", Length = 3 }, ... }

// Method with filtering and projection
var longNames = names.Where(n => n.Length > 4).Select(n => n.ToUpper());
// Result: { "ALICE", "CHARLIE", "DAVID" }

// Method chaining
var result = numbers
    .Where(n => n > 3)
    .OrderByDescending(n => n)
    .Select(n => n * 2);
// Result: { 20, 18, 16, 14, 12, 10, 8 }
```

### Mixing Query and Method Syntax

```csharp
// Mixing query and method syntax
var mixedQuery = (from n in numbers
                 where n % 2 == 0
                 select n)
                .OrderByDescending(n => n)
                .Take(3);
// Result: { 10, 8, 6 }

// Another mixed example
var mixedQuery2 = from n in numbers.Where(x => x > 5)
                  orderby n
                  select n * n;
// Result: { 36, 49, 64, 81, 100 }
```

## LINQ Operators

### Filtering Operators

```csharp
// Where - filters based on a predicate
var adults = people.Where(p => p.Age >= 18);

// OfType - filters based on type
var strings = mixedList.OfType<string>();

// Take - takes the first n elements
var firstThree = numbers.Take(3);  // { 1, 2, 3 }

// TakeLast - takes the last n elements (C# 8.0+)
var lastThree = numbers.TakeLast(3);  // { 8, 9, 10 }

// TakeWhile - takes elements while condition is true
var takeWhileSmall = numbers.TakeWhile(n => n < 5);  // { 1, 2, 3, 4 }

// Skip - skips the first n elements
var skipThree = numbers.Skip(3);  // { 4, 5, 6, 7, 8, 9, 10 }

// SkipLast - skips the last n elements (C# 8.0+)
var skipLastThree = numbers.SkipLast(3);  // { 1, 2, 3, 4, 5, 6, 7 }

// SkipWhile - skips elements while condition is true
var skipWhileSmall = numbers.SkipWhile(n => n < 5);  // { 5, 6, 7, 8, 9, 10 }

// Distinct - removes duplicates
var uniqueNumbers = new[] { 1, 2, 2, 3, 3, 3 }.Distinct();  // { 1, 2, 3 }

// DistinctBy - removes duplicates based on key (C# 9.0+)
var distinctByLength = names.DistinctBy(n => n.Length);
```

### Sorting Operators

```csharp
// OrderBy - sorts in ascending order
var ascending = numbers.OrderBy(n => n);

// OrderByDescending - sorts in descending order
var descending = numbers.OrderByDescending(n => n);

// ThenBy - secondary sort in ascending order
var sortedPeople = people
    .OrderBy(p => p.LastName)
    .ThenBy(p => p.FirstName);

// ThenByDescending - secondary sort in descending order
var sortedOrders = orders
    .OrderBy(o => o.Customer)
    .ThenByDescending(o => o.Total);

// Reverse - reverses the order of elements
var reversed = numbers.Reverse();  // { 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 }
```

### Projection Operators

```csharp
// Select - projects each element to a new form
var doubled = numbers.Select(n => n * 2);  // { 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 }

// Select with index
var indexed = names.Select((name, index) => $"{index + 1}. {name}");
// { "1. Alice", "2. Bob", "3. Charlie", "4. David", "5. Eve" }

// SelectMany - flattens nested collections
var nestedLists = new List<List<int>> {
    new List<int> { 1, 2 },
    new List<int> { 3, 4, 5 },
    new List<int> { 6 }
};
var flattened = nestedLists.SelectMany(list => list);  // { 1, 2, 3, 4, 5, 6 }

// SelectMany with projection
var sentences = new[] { "Hello world", "LINQ is great" };
var words = sentences.SelectMany(s => s.Split(' '));
// { "Hello", "world", "LINQ", "is", "great" }
```

### Joining Operators

```csharp
// Sample data
var customers = new List<Customer> {
    new Customer { Id = 1, Name = "Alice" },
    new Customer { Id = 2, Name = "Bob" },
    new Customer { Id = 3, Name = "Charlie" }
};

var orders = new List<Order> {
    new Order { Id = 101, CustomerId = 1, Amount = 100 },
    new Order { Id = 102, CustomerId = 1, Amount = 200 },
    new Order { Id = 103, CustomerId = 2, Amount = 300 },
    new Order { Id = 104, CustomerId = 4, Amount = 400 }  // No matching customer
};

// Join - inner join
var customerOrders = customers.Join(
    orders,
    customer => customer.Id,
    order => order.CustomerId,
    (customer, order) => new { CustomerName = customer.Name, OrderAmount = order.Amount }
);
// Result: { { CustomerName = "Alice", OrderAmount = 100 },
//           { CustomerName = "Alice", OrderAmount = 200 },
//           { CustomerName = "Bob", OrderAmount = 300 } }

// GroupJoin - group join
var customerOrderGroups = customers.GroupJoin(
    orders,
    customer => customer.Id,
    order => order.CustomerId,
    (customer, customerOrders) => new {
        CustomerName = customer.Name,
        Orders = customerOrders,
        TotalAmount = customerOrders.Sum(o => o.Amount)
    }
);
// Result: { { CustomerName = "Alice", Orders = [Order1, Order2], TotalAmount = 300 },
//           { CustomerName = "Bob", Orders = [Order3], TotalAmount = 300 },
//           { CustomerName = "Charlie", Orders = [], TotalAmount = 0 } }

// Left outer join (using GroupJoin and SelectMany)
var leftJoin = customers.GroupJoin(
    orders,
    customer => customer.Id,
    order => order.CustomerId,
    (customer, customerOrders) => new {
        customer,
        customerOrders
    })
    .SelectMany(
        x => x.customerOrders.DefaultIfEmpty(),
        (grouped, order) => new {
            CustomerName = grouped.customer.Name,
            OrderId = order?.Id,
            OrderAmount = order?.Amount ?? 0
        }
    );
// Result includes all customers, even those without orders
```

### Grouping Operators

```csharp
// Sample data
var products = new List<Product> {
    new Product { Category = "Electronics", Name = "Laptop", Price = 1200 },
    new Product { Category = "Electronics", Name = "Phone", Price = 800 },
    new Product { Category = "Books", Name = "C# Guide", Price = 50 },
    new Product { Category = "Books", Name = "Design Patterns", Price = 40 },
    new Product { Category = "Clothing", Name = "T-Shirt", Price = 20 }
};

// GroupBy - groups elements by key
var groupsByCategory = products.GroupBy(p => p.Category);
foreach (var group in groupsByCategory)
{
    Console.WriteLine($"Category: {group.Key}");
    foreach (var product in group)
    {
        Console.WriteLine($"  {product.Name}: ${product.Price}");
    }
}

// GroupBy with element selector
var pricesByCategory = products.GroupBy(
    p => p.Category,
    p => p.Price
);
// Result: { { Key = "Electronics", Values = [1200, 800] },
//           { Key = "Books", Values = [50, 40] },
//           { Key = "Clothing", Values = [20] } }

// GroupBy with result selector
var categoryStats = products.GroupBy(
    p => p.Category,
    (key, group) => new {
        Category = key,
        Count = group.Count(),
        Average = group.Average(p => p.Price),
        Min = group.Min(p => p.Price),
        Max = group.Max(p => p.Price)
    }
);
// Result: { { Category = "Electronics", Count = 2, Average = 1000, Min = 800, Max = 1200 },
//           { Category = "Books", Count = 2, Average = 45, Min = 40, Max = 50 },
//           { Category = "Clothing", Count = 1, Average = 20, Min = 20, Max = 20 } }

// ToLookup - creates a lookup (similar to GroupBy but eagerly evaluated)
var categoryLookup = products.ToLookup(p => p.Category);
var electronicsProducts = categoryLookup["Electronics"];  // All electronics products
```

### Set Operators

```csharp
// Sample data
int[] set1 = { 1, 2, 3, 4, 5 };
int[] set2 = { 4, 5, 6, 7, 8 };

// Distinct - removes duplicates
int[] withDuplicates = { 1, 1, 2, 2, 3 };
var distinct = withDuplicates.Distinct();  // { 1, 2, 3 }

// Union - combines sets, removing duplicates
var union = set1.Union(set2);  // { 1, 2, 3, 4, 5, 6, 7, 8 }

// Intersect - returns elements present in both sets
var intersection = set1.Intersect(set2);  // { 4, 5 }

// Except - returns elements from first set not in second set
var difference = set1.Except(set2);  // { 1, 2, 3 }

// Concat - combines sequences (doesn't remove duplicates)
var concatenated = set1.Concat(set2);  // { 1, 2, 3, 4, 5, 4, 5, 6, 7, 8 }

// SequenceEqual - checks if two sequences are equal
bool areEqual = set1.SequenceEqual(set2);  // false
bool areEqualSorted = set1.OrderBy(x => x).SequenceEqual(set1.OrderBy(x => x));  // true
```

### Aggregation Operators

```csharp
// Count - counts elements
int count = numbers.Count();  // 10
int evenCount = numbers.Count(n => n % 2 == 0);  // 5

// Sum - sums elements
int sum = numbers.Sum();  // 55
decimal orderTotal = orders.Sum(o => o.Amount);  // Sum of all order amounts

// Average - calculates average
double average = numbers.Average();  // 5.5
double avgPrice = products.Average(p => p.Price);  // Average product price

// Min/Max - finds minimum/maximum
int min = numbers.Min();  // 1
int max = numbers.Max();  // 10
decimal lowestPrice = products.Min(p => p.Price);  // 20
decimal highestPrice = products.Max(p => p.Price);  // 1200

// Aggregate - performs custom aggregation
int product = numbers.Aggregate((a, b) => a * b);  // 1*2*3*...*10 = 3628800
string combined = names.Aggregate((a, b) => a + ", " + b);  // "Alice, Bob, Charlie, David, Eve"

// Aggregate with seed value
string commaSeparated = names.Aggregate(
    "Names: ",  // Seed value
    (result, name) => result + name + ", ",
    result => result.TrimEnd(',', ' ')  // Result selector
);
// "Names: Alice, Bob, Charlie, David, Eve"
```

### Quantifier Operators

```csharp
// Any - checks if any element satisfies a condition
bool hasEven = numbers.Any(n => n % 2 == 0);  // true
bool hasNegative = numbers.Any(n => n < 0);  // false

// All - checks if all elements satisfy a condition
bool allPositive = numbers.All(n => n > 0);  // true
bool allEven = numbers.All(n => n % 2 == 0);  // false

// Contains - checks if sequence contains specific element
bool hasFive = numbers.Contains(5);  // true
bool hasTwenty = numbers.Contains(20);  // false
```

### Element Operators

```csharp
// First - returns first element (or first matching element)
int first = numbers.First();  // 1
int firstEven = numbers.First(n => n % 2 == 0);  // 2

// FirstOrDefault - returns first element or default if empty
int firstOrDefault = emptyList.FirstOrDefault();  // 0 (default for int)
int firstEvenOrDefault = numbers.FirstOrDefault(n => n > 100);  // 0 (no match)

// Last - returns last element (or last matching element)
int last = numbers.Last();  // 10
int lastEven = numbers.Last(n => n % 2 == 0);  // 10

// LastOrDefault - returns last element or default if empty
int lastOrDefault = emptyList.LastOrDefault();  // 0
int lastEvenOrDefault = numbers.LastOrDefault(n => n > 100);  // 0 (no match)

// Single - returns the only element (throws if not exactly one)
int single = new[] { 42 }.Single();  // 42
int singleEven = new[] { 1, 2, 3 }.Single(n => n % 2 == 0);  // 2

// SingleOrDefault - returns the only element or default
int singleOrDefault = new[] { 42 }.SingleOrDefault();  // 42
int singleEvenOrDefault = new[] { 1, 3, 5 }.SingleOrDefault(n => n % 2 == 0);  // 0 (no match)

// ElementAt - returns element at specific index
int third = numbers.ElementAt(2);  // 3 (zero-based index)

// ElementAtOrDefault - returns element at index or default
int beyondEnd = numbers.ElementAtOrDefault(20);  // 0 (beyond end of sequence)
```

### Generation Operators

```csharp
// Range - generates a sequence of integers
var range = Enumerable.Range(1, 5);  // { 1, 2, 3, 4, 5 }

// Repeat - generates a sequence with repeated value
var repeated = Enumerable.Repeat("Hello", 3);  // { "Hello", "Hello", "Hello" }

// Empty - creates an empty sequence
var empty = Enumerable.Empty<int>();  // { }

// DefaultIfEmpty - returns default value if sequence is empty
var defaultIfEmpty = empty.DefaultIfEmpty();  // { 0 }
var defaultIfEmpty2 = empty.DefaultIfEmpty(42);  // { 42 }
```

### Conversion Operators

```csharp
// ToArray - converts to array
int[] array = numbers.Where(n => n % 2 == 0).ToArray();

// ToList - converts to List<T>
List<string> list = names.Where(n => n.Length > 3).ToList();

// ToDictionary - converts to Dictionary<TKey, TValue>
Dictionary<int, string> dict = names.ToDictionary(
    name => name.Length,  // Key selector
    name => name.ToUpper()  // Element selector
);

// ToLookup - converts to ILookup<TKey, TElement>
ILookup<char, string> lookup = names.ToLookup(
    name => name[0],  // Key selector
    name => name.ToLower()  // Element selector
);

// Cast - casts elements to specified type
IEnumerable<string> strings = mixedList.Cast<string>();  // Throws if cast fails

// OfType - filters elements of specified type
IEnumerable<string> onlyStrings = mixedList.OfType<string>();  // No exception

// AsEnumerable - returns source as IEnumerable<T>
IEnumerable<int> asEnumerable = numbers.AsEnumerable();

// AsQueryable - returns source as IQueryable<T>
IQueryable<int> asQueryable = numbers.AsQueryable();
```

### Partitioning Operators

```csharp
// Take - takes first n elements
var first3 = numbers.Take(3);  // { 1, 2, 3 }

// TakeLast - takes last n elements
var last3 = numbers.TakeLast(3);  // { 8, 9, 10 }

// TakeWhile - takes elements while condition is true
var takeWhile = numbers.TakeWhile(n => n < 5);  // { 1, 2, 3, 4 }

// Skip - skips first n elements
var skip3 = numbers.Skip(3);  // { 4, 5, 6, 7, 8, 9, 10 }

// SkipLast - skips last n elements
var skipLast3 = numbers.SkipLast(3);  // { 1, 2, 3, 4, 5, 6, 7 }

// SkipWhile - skips elements while condition is true
var skipWhile = numbers.SkipWhile(n => n < 5);  // { 5, 6, 7, 8, 9, 10 }

// Chunk - splits sequence into chunks (C# 9.0+)
var chunks = numbers.Chunk(3);
// { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 }, { 10 } }
```

## LINQ to Objects vs LINQ to Entities

### LINQ to Objects

LINQ to Objects operates on in-memory collections that implement IEnumerable<T>.

```csharp
// LINQ to Objects example
var numbers = new List<int> { 1, 2, 3, 4, 5 };

// Query is executed immediately when iterated
var evenNumbers = numbers.Where(n => n % 2 == 0);

foreach (var num in evenNumbers)
{
    Console.WriteLine(num);  // 2, 4
}

// Adding to the original collection affects subsequent iterations
numbers.Add(6);
foreach (var num in evenNumbers)
{
    Console.WriteLine(num);  // 2, 4, 6
}
```

### LINQ to Entities (Entity Framework)

LINQ to Entities translates LINQ queries to SQL for execution against a database.

```csharp
// LINQ to Entities example
using (var context = new SchoolContext())
{
    // Query is not executed yet (deferred execution)
    var query = context.Students
        .Where(s => s.GradeLevel == 12)
        .OrderBy(s => s.LastName);
    
    // Query is executed when iterated
    foreach (var student in query)
    {
        Console.WriteLine($"{student.FirstName} {student.LastName}");
    }
    
    // Or when materialized with ToList(), ToArray(), etc.
    var seniors = query.ToList();
    
    // Some operations are not translatable to SQL
    // This would throw an exception:
    // var invalidQuery = context.Students.Where(s => CustomMethod(s.Name));
}
```

## Deferred vs Immediate Execution

### Deferred Execution

Most LINQ operators use deferred execution, meaning the query is not executed until the results are actually needed.

```csharp
// Deferred execution example
var numbers = new List<int> { 1, 2, 3, 4, 5 };
Console.WriteLine("Before query definition");

// Query is defined but not executed yet
var evenNumbers = numbers.Where(n => {
    Console.WriteLine($"Filtering {n}");
    return n % 2 == 0;
});

Console.WriteLine("After query definition, before iteration");

// Query is executed when iterated
foreach (var num in evenNumbers)
{
    Console.WriteLine($"Iteration: {num}");
}

Console.WriteLine("After first iteration");

// Query is re-executed on second iteration
foreach (var num in evenNumbers)
{
    Console.WriteLine($"Second iteration: {num}");
}

// Output:
// Before query definition
// After query definition, before iteration
// Filtering 1
// Filtering 2
// Iteration: 2
// Filtering 3
// Filtering 4
// Iteration: 4
// Filtering 5
// After first iteration
// Filtering 1
// Filtering 2
// Second iteration: 2
// Filtering 3
// Filtering 4
// Second iteration: 4
// Filtering 5
```

### Immediate Execution

Some LINQ operators force immediate execution of the query.

```csharp
// Immediate execution examples
var numbers = new List<int> { 1, 2, 3, 4, 5 };

// ToList() forces immediate execution
var evenList = numbers.Where(n => {
    Console.WriteLine($"Filtering for ToList: {n}");
    return n % 2 == 0;
}).ToList();

// Count() forces immediate execution
int count = numbers.Where(n => {
    Console.WriteLine($"Filtering for Count: {n}");
    return n % 2 == 0;
}).Count();

// Aggregate operators force immediate execution
int sum = numbers.Where(n => {
    Console.WriteLine($"Filtering for Sum: {n}");
    return n % 2 == 0;
}).Sum();

// Element operators force immediate execution
int first = numbers.Where(n => {
    Console.WriteLine($"Filtering for First: {n}");
    return n % 2 == 0;
}).First();

// Output:
// Filtering for ToList: 1
// Filtering for ToList: 2
// Filtering for ToList: 3
// Filtering for ToList: 4
// Filtering for ToList: 5
// Filtering for Count: 1
// Filtering for Count: 2
// Filtering for Count: 3
// Filtering for Count: 4
// Filtering for Count: 5
// Filtering for Sum: 1
// Filtering for Sum: 2
// Filtering for Sum: 3
// Filtering for Sum: 4
// Filtering for Sum: 5
// Filtering for First: 1
// Filtering for First: 2
```

## LINQ Query Optimization

### Avoiding Multiple Enumeration

```csharp
// Bad: Multiple enumeration
var query = numbers.Where(n => n % 2 == 0);
int count = query.Count();  // First enumeration
int sum = query.Sum();      // Second enumeration
int max = query.Max();      // Third enumeration

// Good: Materialize once and reuse
var evenNumbers = numbers.Where(n => n % 2 == 0).ToList();
count = evenNumbers.Count;  // No enumeration
sum = evenNumbers.Sum();    // Single enumeration
max = evenNumbers.Max();    // Single enumeration
```

### Filtering Early

```csharp
// Bad: Late filtering
var result = numbers
    .Select(n => ExpensiveComputation(n))
    .Where(n => n > 100);

// Good: Early filtering
var betterResult = numbers
    .Where(n => QuickCheck(n))  // Filter early with cheap check
    .Select(n => ExpensiveComputation(n))
    .Where(n => n > 100);
```

### Using Appropriate LINQ Methods

```csharp
// Bad: Using Where + First
var firstEven = numbers.Where(n => n % 2 == 0).First();

// Good: Using First with predicate
var firstEvenBetter = numbers.First(n => n % 2 == 0);

// Bad: Using Where + Any
bool hasEven = numbers.Where(n => n % 2 == 0).Any();

// Good: Using Any with predicate
bool hasEvenBetter = numbers.Any(n => n % 2 == 0);

// Bad: Using Where + Count
int evenCount = numbers.Where(n => n % 2 == 0).Count();

// Good: Using Count with predicate
int evenCountBetter = numbers.Count(n => n % 2 == 0);
```

## LINQ with Custom Objects

### Defining Custom Classes

```csharp
public class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
    public string City { get; set; }
}

public class Order
{
    public int Id { get; set; }
    public string Customer { get; set; }
    public decimal Total { get; set; }
    public DateTime OrderDate { get; set; }
}
```

### Querying Custom Objects

```csharp
// Sample data
List<Person> people = new List<Person>
{
    new Person { FirstName = "John", LastName = "Doe", Age = 30, City = "New York" },
    new Person { FirstName = "Jane", LastName = "Smith", Age = 25, City = "Boston" },
    new Person { FirstName = "Bob", LastName = "Johnson", Age = 45, City = "Chicago" },
    new Person { FirstName = "Alice", LastName = "Brown", Age = 22, City = "New York" },
    new Person { FirstName = "Charlie", LastName = "Davis", Age = 35, City = "Boston" }
};

// Basic filtering
var adults = people.Where(p => p.Age >= 18);

// Sorting
var byAge = people.OrderBy(p => p.Age);
var byLastThenFirst = people.OrderBy(p => p.LastName).ThenBy(p => p.FirstName);

// Projection to anonymous type
var nameAndAge = people.Select(p => new { Name = $"{p.FirstName} {p.LastName}", p.Age });

// Grouping
var byCity = people.GroupBy(p => p.City);
foreach (var group in byCity)
{
    Console.WriteLine($"City: {group.Key}");
    foreach (var person in group)
    {
        Console.WriteLine($"  {person.FirstName} {person.LastName}, {person.Age}");
    }
}

// Complex query
var result = people
    .Where(p => p.Age > 20)
    .OrderBy(p => p.LastName)
    .GroupBy(p => p.City)
    .Select(g => new {
        City = g.Key,
        Count = g.Count(),
        AverageAge = g.Average(p => p.Age),
        People = g.Select(p => $"{p.FirstName} {p.LastName}").ToList()
    });

foreach (var cityGroup in result)
{
    Console.WriteLine($"{cityGroup.City}: {cityGroup.Count} people, Avg age: {cityGroup.AverageAge:F1}");
    foreach (var name in cityGroup.People)
    {
        Console.WriteLine($"  {name}");
    }
}
```

## LINQ and Functional Programming

### Pure Functions

```csharp
// Pure function example
IEnumerable<int> PureDoublePositives(IEnumerable<int> numbers)
{
    return numbers
        .Where(n => n > 0)  // Filter positive numbers
        .Select(n => n * 2);  // Double each number
}

// Usage
var input = new[] { -2, -1, 0, 1, 2, 3 };
var result = PureDoublePositives(input);  // { 2, 4, 6 }
// Original input is unchanged
```

### Function Composition

```csharp
// Function composition with LINQ
Func<int, bool> isPositive = n => n > 0;
Func<int, bool> isEven = n => n % 2 == 0;
Func<int, int> square = n => n * n;

// Composing functions
var result = numbers
    .Where(isPositive)
    .Where(isEven)
    .Select(square);

// Equivalent to:
var result2 = numbers
    .Where(n => isPositive(n) && isEven(n))
    .Select(square);
```

### Higher-Order Functions

```csharp
// Higher-order function that returns a predicate
Func<int, Func<int, bool>> createDivisibleByPredicate = divisor => number => number % divisor == 0;

// Usage
var divisibleBy3 = createDivisibleByPredicate(3);
var numbersDiv3 = numbers.Where(divisibleBy3);  // Numbers divisible by 3

// Higher-order function that takes a function as parameter
IEnumerable<R> Map<T, R>(IEnumerable<T> source, Func<T, R> selector)
{
    return source.Select(selector);
}

// Usage
var doubled = Map(numbers, n => n * 2);
```

## Resources

- [LINQ (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)
- [LINQ Query Syntax (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/query-syntax-and-method-syntax-in-linq)
- [LINQ Standard Query Operators (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/standard-query-operators-overview)
- [LINQ to Entities (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ef/language-reference/linq-to-entities)
