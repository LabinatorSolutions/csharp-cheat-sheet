---
title: "Strings and Text Handling"
sidebar_position: 5
---

Strings in C# are immutable sequences of Unicode characters represented by the `string` type (an alias for `System.String`). C# offers a rich set of string manipulation features, from basic concatenation to advanced interpolation and raw string literals.

## String Creation and Basics

### String Declaration and Initialization

```csharp
// String declaration and initialization
string empty = "";                // Empty string
string nullString = null;         // Null string (no object)
string name = "John";             // String literal
string emptyString = string.Empty; // Preferred way to create an empty string

// String concatenation
string firstName = "John";
string lastName = "Doe";
string fullName = firstName + " " + lastName; // "John Doe"

// String constructor
char[] letters = { 'H', 'e', 'l', 'l', 'o' };
string greeting = new string(letters); // "Hello"
string repeated = new string('*', 10); // "**********"
```

### String Immutability

Strings in C# are immutable, meaning once created, their contents cannot be changed. Operations that appear to modify a string actually create a new string.

```csharp
string original = "Hello";
string modified = original.Replace('H', 'J'); // Creates a new string "Jello"

Console.WriteLine(original); // Still "Hello"
Console.WriteLine(modified); // "Jello"
```

## String Interpolation (C# 6+)

String interpolation provides a more readable and convenient syntax to format strings with expressions.

```csharp
// Basic string interpolation
string name = "Alice";
int age = 30;
string message = $"My name is {name} and I am {age} years old.";

// Expressions in interpolation
string result = $"5 + 3 = {5 + 3}";

// Format specifiers
decimal price = 123.45m;
string formattedPrice = $"Price: {price:C}"; // "Price: $123.45" (culture-specific)

// Alignment and formatting
int value = 42;
string aligned = $"{value,10}"; // Right-aligned in 10-character field
string formatted = $"{value:D6}"; // "000042"

// Multiple lines
string multiLine = $"Name: {name}\nAge: {age}";

// Escaping braces
string escaped = $"{{This is in braces}} but {name} is interpolated.";

// Conditional expressions
string status = $"Status: {(age >= 18 ? "Adult" : "Minor")}";

// Calling methods
string upper = $"Uppercase: {name.ToUpper()}";
```

### Common Format Specifiers

| Specifier  | Description        | Example       | Output          |
| ---------- | ------------------ | ------------- | --------------- |
| `C` or `c` | Currency           | `{123.45:C}`  | `$123.45`       |
| `D` or `d` | Decimal (integers) | `{42:D6}`     | `000042`        |
| `E` or `e` | Exponential        | `{1234.56:E}` | `1.234560E+003` |
| `F` or `f` | Fixed-point        | `{123.45:F1}` | `123.5`         |
| `G` or `g` | General            | `{1234.56:G}` | `1234.56`       |
| `N` or `n` | Number with commas | `{1234.56:N}` | `1,234.56`      |
| `P` or `p` | Percent            | `{0.1234:P}`  | `12.34%`        |
| `X` or `x` | Hexadecimal        | `{255:X}`     | `FF` or `ff`    |

## Verbatim Strings

Verbatim strings, prefixed with `@`, preserve all whitespace and escape sequences literally.

```csharp
// Without verbatim string (need to escape backslashes)
string path = "C:\\Program Files\\App\\Data.txt";

// With verbatim string (no need to escape backslashes)
string verbatimPath = @"C:\Program Files\App\Data.txt";

// Multiline verbatim string
string multiline = @"This is a
multiline string
that preserves all line breaks
and indentation.";

// Escaping double quotes in verbatim strings (use double double-quotes)
string quote = @"He said, ""Hello, world!""";

// Combining verbatim with interpolation
string verbatimInterpolated = $@"User: {name}
Path: {verbatimPath}";
```

## Raw String Literals (C# 11+)

Raw string literals, delimited by at least three double quotes (`"""`), provide an even more flexible way to include literal text, especially for multi-line content with quotes and special characters.

```csharp
// Basic raw string literal
string json = """
{
    "name": "John Doe",
    "age": 30,
    "isActive": true
}
""";

// Raw string with interpolation
string name = "Alice";
string age = "25";
string interpolatedJson = $"""
{
    "name": "{name}",
    "age": {age},
    "isActive": true
}
""";

// Controlling indentation with raw strings
string indentedCode = """
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
    """;

// Using more than three quotes for delimiter
string complexText = """"
This text contains """ triple quotes
without needing to escape them.
"""";

// Raw string literals can contain any characters without escaping
string regex = """
The regex pattern \d{3}-\d{2}-\d{4} matches a SSN.
""";
```

## String Methods and Properties

C# strings provide numerous methods for manipulation and inspection.

### Basic Properties

```csharp
string text = "Hello, World!";

int length = text.Length; // 13
bool isEmpty = string.IsNullOrEmpty(text); // false
bool isWhitespace = string.IsNullOrWhiteSpace(text); // false
```

### Searching and Comparing

```csharp
string text = "Hello, World!";

// Searching
bool contains = text.Contains("World"); // true
bool startsWith = text.StartsWith("Hello"); // true
bool endsWith = text.EndsWith("!"); // true

int indexOfWorld = text.IndexOf("World"); // 7
int lastIndexOfL = text.LastIndexOf("l"); // 10
int indexOfZ = text.IndexOf("Z"); // -1 (not found)

// Comparing
string a = "apple";
string b = "banana";
int comparison = string.Compare(a, b); // -1 (a comes before b)
bool equals = a.Equals(b); // false

// Case-insensitive comparison
bool equalsIgnoreCase = a.Equals("APPLE", StringComparison.OrdinalIgnoreCase); // true
bool containsIgnoreCase = text.Contains("world", StringComparison.OrdinalIgnoreCase); // true

// Different comparison types
StringComparison[] comparisons = {
    StringComparison.Ordinal,              // Fast, case-sensitive, culture-agnostic
    StringComparison.OrdinalIgnoreCase,    // Fast, case-insensitive, culture-agnostic
    StringComparison.CurrentCulture,       // Slow, case-sensitive, culture-sensitive
    StringComparison.CurrentCultureIgnoreCase, // Slow, case-insensitive, culture-sensitive
    StringComparison.InvariantCulture,     // Slow, case-sensitive, culture-invariant
    StringComparison.InvariantCultureIgnoreCase // Slow, case-insensitive, culture-invariant
};
```

### Modifying Strings

Remember that these methods don't modify the original string but return a new string.

```csharp
string text = "Hello, World!";

// Changing case
string upper = text.ToUpper(); // "HELLO, WORLD!"
string lower = text.ToLower(); // "hello, world!"
string upperInvariant = text.ToUpperInvariant(); // Culture-insensitive uppercase

// Trimming
string paddedText = "  Hello  ";
string trimmed = paddedText.Trim(); // "Hello"
string trimStart = paddedText.TrimStart(); // "Hello  "
string trimEnd = paddedText.TrimEnd(); // "  Hello"

// Specific characters to trim
string trimChars = "###Hello###".Trim('#'); // "Hello"

// Replacing
string replaced = text.Replace("Hello", "Hi"); // "Hi, World!"
string replacedChars = text.Replace('o', '0'); // "Hell0, W0rld!"

// Substring
string sub1 = text.Substring(7); // "World!"
string sub2 = text.Substring(7, 5); // "World"

// Inserting and removing
string inserted = text.Insert(5, " there"); // "Hello there, World!"
string removed = text.Remove(5, 7); // "Hello!"

// Padding
string padded = "Hello".PadLeft(10); // "     Hello"
string paddedChar = "Hello".PadRight(10, '*'); // "Hello*****"

// Joining strings
string[] words = { "Hello", "World" };
string joined = string.Join(", ", words); // "Hello, World"
string joined2 = string.Join(" | ", new[] { "A", "B", "C" }); // "A | B | C"
```

### Splitting Strings

```csharp
string text = "apple,banana,orange";

// Basic split
string[] fruits = text.Split(','); // ["apple", "banana", "orange"]

// Split with multiple delimiters
string data = "apple,banana;orange:grape";
string[] fruits2 = data.Split(new[] { ',', ';', ':' }); // ["apple", "banana", "orange", "grape"]

// Split with options
string line = "apple,,banana,,,orange";
string[] fruits3 = line.Split(',', StringSplitOptions.RemoveEmptyEntries); // ["apple", "banana", "orange"]

// Split with count
string longText = "one,two,three,four,five";
string[] parts = longText.Split(',', 3); // ["one", "two", "three,four,five"]

// Split lines
string multiline = "Line 1\r\nLine 2\nLine 3";
string[] lines = multiline.Split(new[] { "\r\n", "\n" }, StringSplitOptions.None);
```

## StringBuilder

For scenarios involving multiple string modifications, `StringBuilder` provides better performance than concatenating strings.

```csharp
using System.Text;

// Creating a StringBuilder
StringBuilder sb = new StringBuilder();
StringBuilder sb2 = new StringBuilder("Initial text");
StringBuilder sb3 = new StringBuilder(50); // With capacity

// Appending
sb.Append("Hello");
sb.Append(' ');
sb.Append("World");
sb.AppendLine("!"); // Adds a newline
sb.AppendLine("Next line");
sb.AppendFormat("The time is {0:t}", DateTime.Now);

// Inserting
sb.Insert(5, " there");

// Removing
sb.Remove(5, 6);

// Replacing
sb.Replace("World", "Universe");

// Getting the result
string result = sb.ToString();

// Performance example
StringBuilder builder = new StringBuilder();
for (int i = 0; i < 10000; i++)
{
    builder.Append(i.ToString());
    builder.Append(',');
}
string numbers = builder.ToString();
```

## String Formatting

The `string.Format` method provides a way to create formatted strings.

```csharp
// Basic formatting
string formatted = string.Format("Name: {0}, Age: {1}", "John", 30);

// Multiple occurrences of the same value
string repeated = string.Format("{0} {0} {0}", "Hip");

// Format specifiers
string formatted2 = string.Format("Price: {0:C}, Date: {1:d}", 123.45, DateTime.Now);

// Alignment
string aligned = string.Format("{0,10} | {1,-10}", "Right", "Left");

// Custom format for DateTime
DateTime date = new DateTime(2023, 12, 31);
string customDate = string.Format("Year: {0:yyyy}, Month: {0:MM}, Day: {0:dd}", date);

// Custom numeric format
double number = 1234.5678;
string customNumber = string.Format("{0:#,##0.00}", number); // "1,234.57"
```

## UTF-8 String Literals (C# 11+)

UTF-8 string literals create a byte representation of a string encoded in UTF-8, which is the standard for the web and many file formats.

```csharp
// UTF-8 string literal
ReadOnlySpan<byte> utf8Data = "Hello, World!"u8;

// This is more efficient than:
byte[] bytes = System.Text.Encoding.UTF8.GetBytes("Hello, World!");

// Useful for APIs that work with UTF-8 encoded data
using System.Text.Json;
ReadOnlySpan<byte> jsonUtf8 = """{"name":"John"}"""u8;
var document = JsonDocument.Parse(jsonUtf8);
```

## String Interpolation Handlers (C# 10+)

String interpolation handlers allow for custom processing of interpolated strings.

```csharp
// Using the built-in StringBuilder interpolation handler
var sb = new StringBuilder();
string name = "Alice";
int age = 30;

// This uses the handler to build the string without creating intermediate strings
sb.AppendFormat($"Name: {name}, Age: {age}");

// Custom interpolation handler example (simplified)
using System.Runtime.CompilerServices;

public static class LoggerExtensions
{
    public static void LogInformation(this ILogger logger, [InterpolatedStringHandlerArgument("logger")] LogInterpolatedStringHandler message)
    {
        if (message.IsEnabled)
        {
            logger.Log(LogLevel.Information, message.GetFormattedText());
        }
    }
}

// Usage
logger.LogInformation($"User {userId} logged in at {DateTime.Now}");
```

## Common String Operations

### Checking String Content

```csharp
// Check if string is null or empty
if (string.IsNullOrEmpty(text))
{
    // Handle empty string
}

// Check if string is null, empty, or whitespace
if (string.IsNullOrWhiteSpace(text))
{
    // Handle empty or whitespace string
}

// Check if string contains a substring
if (text.Contains("search", StringComparison.OrdinalIgnoreCase))
{
    // Contains the substring (case-insensitive)
}
```

### String Validation

```csharp
// Check if string is a valid number
bool isNumber = int.TryParse(text, out _);

// Check if string matches a pattern (using Regex)
using System.Text.RegularExpressions;
bool isEmail = Regex.IsMatch(text, @"^[^@\s]+@[^@\s]+\.[^@\s]+$");

// Check if string is a valid date
bool isDate = DateTime.TryParse(text, out _);
```

### String Transformation

```csharp
// Convert first letter to uppercase
string capitalize(string s) => string.IsNullOrEmpty(s) 
    ? s 
    : char.ToUpper(s[0]) + s.Substring(1);

// Truncate string with ellipsis
string truncate(string s, int maxLength) => s.Length <= maxLength 
    ? s 
    : s.Substring(0, maxLength - 3) + "...";

// Convert to title case
using System.Globalization;
string titleCase = CultureInfo.CurrentCulture.TextInfo.ToTitleCase("hello world");
```

## String Interning

String interning is a mechanism that stores only one copy of each unique string literal in the application.

```csharp
// These point to the same string in memory
string a = "Hello";
string b = "Hello";
Console.WriteLine(object.ReferenceEquals(a, b)); // true

// But these don't (unless optimized by the compiler)
string c = "Hel" + "lo";
string d = new string(new char[] { 'H', 'e', 'l', 'l', 'o' });
Console.WriteLine(object.ReferenceEquals(a, c)); // might be true (compiler optimization)
Console.WriteLine(object.ReferenceEquals(a, d)); // false

// Explicitly intern a string
string interned = string.Intern(d);
Console.WriteLine(object.ReferenceEquals(a, interned)); // true
```

## Resources

- [String Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.string)
- [String Interpolation (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated)
- [StringBuilder Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.text.stringbuilder)
- [Standard Numeric Format Strings (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings)
- [Custom Numeric Format Strings (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings)
- [Standard Date and Time Format Strings (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings)
- [Custom Date and Time Format Strings (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings)
