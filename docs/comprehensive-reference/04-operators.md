---
title: "Operators"
sidebar_position: 4
---

Operators are special symbols that perform operations on one or more operands (variables or values) to produce a result.

## Arithmetic Operators

Arithmetic operators perform mathematical calculations.

| Operator | Name               | Example     | Result                                |
| -------- | ------------------ | ----------- | ------------------------------------- |
| `+`      | Addition           | `5 + 3`     | `8`                                   |
| `-`      | Subtraction        | `5 - 3`     | `2`                                   |
| `*`      | Multiplication     | `5 * 3`     | `15`                                  |
| `/`      | Division           | `5 / 3`     | `1` (integer division)                |
| `/`      | Division           | `5.0 / 3.0` | `1.6666...` (floating-point division) |
| `%`      | Modulo (Remainder) | `5 % 3`     | `2`                                   |

```csharp
int a = 10;
int b = 3;

int sum = a + b;        // 13
int difference = a - b; // 7
int product = a * b;    // 30
int quotient = a / b;   // 3 (integer division truncates the result)
int remainder = a % b;  // 1

// Division behavior depends on operand types
double c = 10.0;
double d = 3.0;
double result = c / d;  // 3.3333... (floating-point division)

// Integer division truncation can be surprising
int negativeResult = -5 / 2;  // -2, not -2.5
```

### Increment and Decrement Operators

| Operator | Name      | Effect               |
| -------- | --------- | -------------------- |
| `++`     | Increment | Increases value by 1 |
| `--`     | Decrement | Decreases value by 1 |

These operators can be used in prefix or postfix form:

```csharp
int x = 5;
int y;

// Prefix increment (increment, then use the value)
y = ++x;  // x is now 6, y is 6

// Postfix increment (use the value, then increment)
x = 5;    // Reset x
y = x++;  // x is now 6, but y is 5

// Prefix decrement
y = --x;  // x is now 5, y is 5

// Postfix decrement
y = x--;  // x is now 4, but y is 5
```

## Assignment Operators

Assignment operators assign values to variables.

| Operator | Name                            | Example               | Equivalent    |
| -------- | ------------------------------- | --------------------- | ------------- |
| `=`      | Simple assignment               | `x = 5`               | `x = 5`       |
| `+=`     | Addition assignment             | `x += 5`              | `x = x + 5`   |
| `-=`     | Subtraction assignment          | `x -= 5`              | `x = x - 5`   |
| `*=`     | Multiplication assignment       | `x *= 5`              | `x = x * 5`   |
| `/=`     | Division assignment             | `x /= 5`              | `x = x / 5`   |
| `%=`     | Modulo assignment               | `x %= 5`              | `x = x % 5`   |
| `&=`     | Bitwise AND assignment          | `x &= 5`              | `x = x & 5`   |
| `\|=`    | Bitwise OR assignment           | `x \|= 5`              | `x = x \| 5`  |
| `^=`     | Bitwise XOR assignment          | `x ^= 5`              | `x = x ^ 5`   |
| `<<=`    | Left shift assignment           | `x <<= 2`             | `x = x << 2`  |
| `>>=`    | Right shift assignment          | `x >>= 2`             | `x = x >> 2`  |
| `>>>=`   | Unsigned right shift assignment | `x >>>= 2`            | `x = x >>> 2` |

```csharp
int x = 10;
x += 5;  // x is now 15
x -= 3;  // x is now 12
x *= 2;  // x is now 24
x /= 6;  // x is now 4
x %= 3;  // x is now 1

// Compound assignments work with other types too
string message = "Hello";
message += " World";  // message is now "Hello World"
```

### User-Defined Compound Assignment (C# 14)

In C# 14, you can define custom implementations for compound assignment operators in your own types.

```csharp
public readonly struct Money
{
    public decimal Amount { get; }
    
    public Money(decimal amount) => Amount = amount;
    
    // Define the addition operator
    public static Money operator +(Money left, Money right) => 
        new Money(left.Amount + right.Amount);
        
    // Define the compound addition assignment operator (C# 14)
    public static Money operator +=(Money left, Money right) => 
        new Money(left.Amount + right.Amount * 0.9m); // 10% discount on additions!
}

// Usage
var wallet = new Money(100);
wallet += new Money(50); // Uses the custom += operator, applying the discount
Console.WriteLine(wallet.Amount); // Output: 145 (100 + 45)
```

## Comparison Operators

Comparison operators compare two values and return a boolean result (`true` or `false`).

| Operator | Name                     | Example  | Result  |
| -------- | ------------------------ | -------- | ------- |
| `==`     | Equal to                 | `5 == 5` | `true`  |
| `!=`     | Not equal to             | `5 != 3` | `true`  |
| `>`      | Greater than             | `5 > 3`  | `true`  |
| `<`      | Less than                | `5 < 3`  | `false` |
| `>=`     | Greater than or equal to | `5 >= 5` | `true`  |
| `<=`     | Less than or equal to    | `5 <= 3` | `false` |

```csharp
int a = 10;
int b = 20;

bool isEqual = (a == b);      // false
bool isNotEqual = (a != b);   // true
bool isGreater = (a > b);     // false
bool isLess = (a < b);        // true
bool isGreaterOrEqual = (a >= b); // false
bool isLessOrEqual = (a <= b);    // true

// String comparison
string s1 = "hello";
string s2 = "hello";
bool stringsEqual = (s1 == s2);  // true

// Reference equality vs. value equality
object obj1 = new object();
object obj2 = new object();
bool objectsEqual = (obj1 == obj2);  // false (different objects)

// For reference types, == checks reference equality by default
// unless the type overrides the == operator
```

## Logical Operators

Logical operators perform logical operations on boolean values.

| Operator | Name        | Example         | Result     |
| -------- | ----------- | --------------- | ---------- |
| `&&`     | Logical AND | `true && false` | `false`    |
| `\|\|`   | Logical OR  | `true \|\| false` | `true`     |
| `!`      | Logical NOT | `!true`         | `false`    |

```csharp
bool a = true;
bool b = false;

bool andResult = a && b;  // false (both must be true)
bool orResult = a || b;   // true (at least one must be true)
bool notResult = !a;      // false (inverts the value)

// Short-circuit evaluation
// In a && b, if a is false, b is not evaluated
// In a || b, if a is true, b is not evaluated

bool isValid = false;
bool isExpensive = CheckIfExpensive();  // This won't be called due to short-circuiting
if (isValid && isExpensive)
{
    // This block won't execute
}
```

### Logical Operators with Non-Boolean Operands (C# 11+)

C# 11 introduced the ability to use logical operators with non-boolean operands through the `INumber<T>` interface.

```csharp
// Works with numeric types that implement INumber<T>
int result1 = 5 & 3;  // Bitwise AND: 1 (0101 & 0011 = 0001)
int result2 = 5 | 3;  // Bitwise OR: 7 (0101 | 0011 = 0111)
int result3 = 5 ^ 3;  // Bitwise XOR: 6 (0101 ^ 0011 = 0110)
```

## Bitwise Operators

Bitwise operators perform operations on the binary representations of integer values.

| Operator | Name                 | Example    | Result                                |
| -------- | -------------------- | ---------- | ------------------------------------- |
| `&`      | Bitwise AND          | `5 & 3`    | `1` (0101 & 0011 = 0001)              |
| `\|`     | Bitwise OR           | `5 \| 3`   | `7` (0101 \| 0011 = 0111)             |
| `^`      | Bitwise XOR          | `5 ^ 3`    | `6` (0101 ^ 0011 = 0110)              |
| `~`      | Bitwise NOT          | `~5`       | `-6` (inverts all bits)               |
| `<<`     | Left shift           | `5 << 1`   | `10` (shifts bits left)               |
| `>>`     | Right shift          | `5 >> 1`   | `2` (shifts bits right)               |
| `>>>`    | Unsigned right shift | `5 >>> 1`  | `2` (shifts bits right, fills with 0) |

```csharp
int a = 5;  // 0101 in binary
int b = 3;  // 0011 in binary

int bitwiseAnd = a & b;   // 0001 = 1
int bitwiseOr = a | b;    // 0111 = 7
int bitwiseXor = a ^ b;   // 0110 = 6
int bitwiseNot = ~a;      // 1111...1010 = -6 (in two's complement)

int leftShift = a << 2;   // 0101 << 2 = 010100 = 20
int rightShift = a >> 1;  // 0101 >> 1 = 0010 = 2

// Unsigned right shift (C# 11+)
uint c = 0x80000000;  // Most significant bit is 1
uint unsignedRightShift = c >>> 1;  // 0x40000000
```

## Null-Related Operators

C# provides several operators for working safely with potentially null values.

### Null-Coalescing Operator (`??`)

Returns the left operand if it's not null, otherwise returns the right operand.

```csharp
string name = null;
string displayName = name ?? "Guest";  // "Guest"

// Can be chained
string firstName = null;
string middleName = null;
string lastName = "Smith";
string fullName = firstName ?? middleName ?? lastName ?? "Unknown";  // "Smith"
```

### Null-Coalescing Assignment Operator (`??=`) (C# 8+)

Assigns the right operand to the left operand only if the left operand is null.

```csharp
string name = null;
name ??= "Guest";  // name is now "Guest"

// Equivalent to:
// if (name == null)
//     name = "Guest";

// Another example
List<int> numbers = null;
numbers ??= new List<int>();  // Initialize only if null
numbers.Add(42);  // Safe to use now
```

### Null-Conditional Operator (`?.` and `?[]`)

Safely accesses members or elements of a potentially null object. Returns null if the object is null instead of throwing a `NullReferenceException`.

```csharp
// Without null-conditional operator
string length = null;
if (name != null)
{
    length = name.Length.ToString();
}

// With null-conditional operator
string length = name?.Length.ToString();  // null if name is null

// Chaining
int? charCount = customer?.Address?.Street?.Length;  // null if any part is null

// With indexers
int? firstItem = array?[0];  // null if array is null

// With method calls
string upperName = name?.ToUpper();  // null if name is null

// Combined with null-coalescing
int length = name?.Length ?? 0;  // 0 if name is null
```

### Null-Conditional Assignment Operator (`?.=`) (C# 14)

Allows assignment to occur conditionally when the receiver is non-null. If the receiver is null, the assignment is skipped entirely.

```csharp
public class User { public string? DisplayName { get; set; } }

void UpdateName(User? user, string newName)
{
    // Without the operator, you'd need to write:
    // if (user != null) user.DisplayName = newName;
    
    // With the operator, it's more concise:
    user?.DisplayName = newName; // Assignment only happens if user is not null
}

// Works with events too:
public class Button { public event Action? Clicked; }

void RegisterHandler(Button? button)
{
    // Safely add an event handler only if button is not null
    button?.Clicked += () => Console.WriteLine("Button was clicked!");
}
```

## Conditional Operator (Ternary Operator)

The conditional operator `?:` evaluates a boolean expression and returns one of two values depending on the result.

```csharp
// Syntax: condition ? true-value : false-value

int age = 20;
string message = (age >= 18) ? "Adult" : "Minor";  // "Adult"

// Can be nested (but may reduce readability)
int value = 15;
string description = (value < 0) ? "Negative" : 
                     (value == 0) ? "Zero" : "Positive";  // "Positive"

// Can be used in expressions
int a = 5;
int b = 3;
int max = (a > b) ? a : b;  // 5

// With null-conditional operator
string name = null;
int length = name?.Length ?? 0;  // 0 (name?.Length is null, so ?? returns 0)
```

## Type-Testing Operators

Type-testing operators check the type of an object.

### `is` Operator

Tests if an object is compatible with a given type.

```csharp
object obj = "Hello";

bool isString = obj is string;  // true
bool isInt = obj is int;        // false

// With pattern matching (C# 7+)
if (obj is string s)
{
    // s is a string variable containing the value of obj
    Console.WriteLine(s.Length);  // 5
}

// With negation (C# 9+)
if (obj is not int)
{
    Console.WriteLine("Not an integer");
}
```

### `as` Operator

Attempts to cast an object to a specified reference type, returning null if the cast fails.

```csharp
object obj = "Hello";

// Without 'as'
try
{
    string str = (string)obj;  // Throws InvalidCastException if obj is not a string
}
catch (InvalidCastException)
{
    // Handle exception
}

// With 'as'
string str = obj as string;  // Returns null if obj is not a string
if (str != null)
{
    Console.WriteLine(str.Length);  // 5
}

// Note: 'as' only works with reference types and nullable value types
// int i = obj as int;  // Error: Cannot use 'as' with value type 'int'
int? i = obj as int?;  // Works with nullable value types
```

### `typeof` Operator

Returns the `System.Type` object for a type.

```csharp
Type stringType = typeof(string);
Console.WriteLine(stringType.Name);  // "String"

// Useful for reflection
MethodInfo method = typeof(string).GetMethod("Substring", new[] { typeof(int), typeof(int) });

// With generics
Type listType = typeof(List<int>);
Type genericListType = typeof(List<>);  // Open generic type
```

## Nameof Operator (C# 6+)

The `nameof` operator returns the name of a variable, type, or member as a string constant.

```csharp
// With variables
string firstName = "John";
Console.WriteLine(nameof(firstName));  // "firstName"

// With properties
Console.WriteLine(nameof(Console.Title));  // "Title"

// With types
Console.WriteLine(nameof(DateTime));  // "DateTime"

// With methods
Console.WriteLine(nameof(Console.WriteLine));  // "WriteLine"

// With parameters
void Process(string fileName)
{
    if (string.IsNullOrEmpty(fileName))
    {
        throw new ArgumentNullException(nameof(fileName));
    }
}

// With unbound generic types (C# 14+)
Console.WriteLine(nameof(List<>));  // "List"
```

## Index and Range Operators (C# 8+)

### Index Operator (`^`)

The `^` operator creates an `Index` that counts from the end of a sequence.

```csharp
string[] names = { "Alice", "Bob", "Charlie", "David", "Eve" };

// From the start (0-based)
string first = names[0];  // "Alice"

// From the end (^1 means "1 from the end")
string last = names[^1];  // "Eve"
string secondLast = names[^2];  // "David"

// Can be stored in a variable
Index lastIndex = ^1;
string lastAgain = names[lastIndex];  // "Eve"
```

### Range Operator (`..`)

The `..` operator creates a `Range` that specifies a start and end for a range of elements.

```csharp
string[] names = { "Alice", "Bob", "Charlie", "David", "Eve" };

// Range from start to end
string[] allNames = names[0..5];  // All 5 names
string[] allNamesImplicit = names[..];  // All names

// Range with specific start and end
string[] middle = names[1..4];  // "Bob", "Charlie", "David"

// Range from start to specific end
string[] firstThree = names[..3];  // "Alice", "Bob", "Charlie"

// Range from specific start to end
string[] lastThree = names[2..];  // "Charlie", "David", "Eve"

// Using ^ operator in ranges
string[] lastTwo = names[^2..];  // "David", "Eve"
string[] middleThree = names[1..^1];  // "Bob", "Charlie", "David"

// Can be stored in variables
Index start = 1;
Index end = ^1;
Range middleRange = start..end;
string[] middleAgain = names[middleRange];  // "Bob", "Charlie", "David"
```

## Operator Precedence and Associativity

Operators have different precedence levels that determine the order of evaluation in an expression.

### Precedence (from highest to lowest)

1. Primary operators: `x.y`, `x?.y`, `x?[y]`, `f(x)`, `a[i]`, `x++`, `x--`, `new`, `typeof`, `checked`, `unchecked`, `default`, `nameof`, `sizeof`, `stackalloc`
2. Unary operators: `+x`, `-x`, `!x`, `~x`, `++x`, `--x`, `^x`, `(T)x`, `await`, `&x`, `*x`, `true`, `false`
3. Range operator: `x..y`
4. Multiplicative operators: `x * y`, `x / y`, `x % y`
5. Additive operators: `x + y`, `x - y`
6. Shift operators: `x << y`, `x >> y`, `x >>> y`
7. Relational operators: `x < y`, `x > y`, `x <= y`, `x >= y`, `is`, `as`
8. Equality operators: `x == y`, `x != y`
9. Logical AND operator: `x & y`
10. Logical XOR operator: `x ^ y`
11. Logical OR operator: `x | y`
12. Conditional AND operator: `x && y`
13. Conditional OR operator: `x || y`
14. Null-coalescing operator: `x ?? y`
15. Conditional operator: `x ? y : z`
16. Assignment and lambda operators: `x = y`, `x += y`, `x -= y`, etc., `=>`

### Associativity

When operators have the same precedence, associativity determines the order of evaluation:

- **Left-associative**: Most binary operators (e.g., `a + b + c` is evaluated as `(a + b) + c`)
- **Right-associative**: Assignment operators, conditional operator, null-coalescing operator (e.g., `a = b = c` is evaluated as `a = (b = c)`)

```csharp
// Example of precedence
int result = 2 + 3 * 4;  // 14, not 20, because * has higher precedence than +

// Example of associativity
int a, b, c;
a = b = c = 5;  // Right-associative: a = (b = (c = 5))

// Using parentheses to override precedence
int explicitResult = (2 + 3) * 4;  // 20
```

## Resources

- [C# Operators (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/)
- [Operator Precedence (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/#operator-precedence)
- [Null-Conditional Operators (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#null-conditional-operators--and-)
