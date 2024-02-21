# C# Cheat Sheet - ConstructG.com

**Version:** 1.0.1

**Framework Version:** .NET Core 3.1.9 or later.

**Language Version:** C# 8.0 or later.

## Table Of Contents (TOC)

- [C# Cheat Sheet](#c-cheat-sheet)
  - [About](#about)
  - [C# Introduction](#c-introduction)
    - [What is C#?](#what-is-c)
    - [What Is C# Used For?](#what-is-c-used-for)
  - [C# Keywords](#c-keywords)
    - [Reserved Keywords](#reserved-keywords)
    - [Contextual Keywords](#contextual-keywords)
  - [C# Special Characters](#c-special-characters)
  - [C# Preprocessor Directives](#c-preprocessor-directives)
  - [General Syntax](#general-syntax)
  - [Comments](#comments)
  - [C# Hello World Console Application](#c-hello-world-console-application)
  - [C# Variables](#c-variables)
  - [C# Naming Conventions](#c-naming-conventions)
    - [Terminology](#terminology)
    - [Summary Table](#summary-table)
  - [C# Data Types](#c-data-types)
    - [Value Types](#value-types)
      - [Simple Data Types](#simple-data-types)
        - [Bytes](#bytes)
        - [Unsigned Integers](#unsigned-integers)
        - [Signed Integers](#signed-integers)
        - [Floating-Point Types](#floating-point-types)
        - [Unicode Characters](#unicode-characters)
        - [Booleans](#booleans)
      - [Enum Types](#enum-types)
      - [Structure Types](#structure-types)
      - [Tuple Types](#tuple-types)
      - [Nullable Value Types](#nullable-value-types)
    - [Reference Types](#reference-types)
      - [Built-In Reference Types](#built-in-reference-types)
        - [Object Types](#object-types)
        - [String Types](#string-types)
        - [Delegate Types](#delegate-types)
      - [Interface Types](#interface-types)
      - [Nullable Reference Types](#nullable-reference-types)
      - [Array Types](#array-types)
        - [Array Of Simple Types](#array-of-simple-types)
        - [Jagged Arrays](#jagged-arrays)
        - [Array Properties & Methods](#array-properties--methods)
  - [Type Casting](#type-casting)
    - [Implicit Casting](#implicit-casting)
    - [Explicit Casting](#explicit-casting)
    - [Type Conversion Methods](#type-conversion-methods)
  - [Operators](#operators)
    - [Arithmetic Operators](#arithmetic-operators)
    - [Combined Assignment Operators](#combined-assignment-operators)
    - [Increment and Decrement Operators](#increment-and-decrement-operators)
    - [Comparison Operators](#comparison-operators)
    - [Logical Operators](#logical-operators)
    - [Bitwise Operators](#bitwise-operators)
    - [Operator Precedents](#operator-precedents)
  - [Statements](#statements)
    - [Conditions](#conditions)
      - [**```if```**...**```else if```**...**```else```**](#ifelse-ifelse)
      - [**```switch```** Case](#switch-case)
    - [Loops](#loops)
      - [**```while```** Loop](#while-loop)
      - [**```do```**...**```while```** Loop](#dowhile-loop)
      - [**```for```** Loop](#for-loop)
      - [**```foreach```** Loop](#foreach-loop)
    - [**```goto```** Statement](#goto-statement)
    - [**```return```** Statement](#return-statement)
    - [**```yield```** Statement](#yield-statement)
    - [**```checked```** and **```unchecked```** Statements](#checked-and-unchecked-statements)
    - [**```lock```** Statement](#lock-statement)
    - [**```using```** Statement](#using-statement)
    - [Exception Handling](#exception-handling)
  - [Classes & Objects](#classes--objects)
    - [Members](#members)
    - [Constructors](#constructors)
    - [The ```this``` Keyword](#the-this-keyword)
    - [Garbage Collector](#garbage-collector)
    - [Destructors / Finalizers](#destructors--finalizers)
  - [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
    - [Encapsulation / Access Levels](#encapsulation--access-levels)
    - [Inheritance](#inheritance)
    - [Polymorphism / Redefining Members](#polymorphism--redefining-members)
    - [Static](#static)
    - [Properties](#properties)
    - [Indexers](#indexers)
    - [Abstraction](#abstraction)
      - [Abstract Classes & Methods](#abstract-classes--methods)
      - [Interfaces](#interfaces)
    - [Namespaces](#namespaces)
    - [Operator Overloading](#operator-overloading)
  - [Delegates](#delegates)
    - [Anonymous Methods](#anonymous-methods)
    - [Lambda Expressions](#lambda-expressions)
  - [Events](#events)
  - [Generics](#generics)
  - [Generic Collections](#generic-collections)
    - [List](#list)
    - [SortedList](#sortedlist)
    - [BitArray](#bitarray)
    - [Stack](#stack)
    - [Queue](#queue)
    - [Dictionary](#dictionary)
    - [HashSet](#hashset)
  - [Constants](#constants)
    - [The ```const``` Keyword](#the-const-keyword)
    - [The ```readonly``` Keyword](#the-readonly-keyword)
  - [Asynchronous Methods](#asynchronous-methods)
  - [Working With Files](#working-with-files)
  - [Language-Integrated Query (LINQ)](#language-integrated-query-linq)
  - [Attributes](#attributes)
    - [Predefined Attributes](#predefined-attributes)
    - [Custom Attributes](#custom-attributes)
  - [Extension Methods](#extension-methods)
  - [References](#references)
  - [Credits](#credits)

---

## About

- The objective of this C# cheat sheet is to provide a general overview.
- The HTML version of this document is hosted on: https://constructg.com/csharp-cheat-sheet/
- The markdown file of this sheet is hosted on [GitHub](https://github.com/LabinatorSolutions/csharp-cheat-sheet).
- Contributions, bug fixes, additions, and improvements will be much appreciated.
- Prepared by [ConstructG.com](https://constructg.com/). ConstructG is an online game development academy.

## C# Introduction

### What is C#?

C# is pronounced "C-Sharp". It is an object-oriented programming language created by Microsoft that runs on the .NET Framework. C# has roots from the C family, and the language is close to other popular languages like C++ and Java.

### What Is C# Used For?

- Database applications
- Desktop applications
- Games
- Mobile applications
- Virtual Reality (VR) applications
- Web applications
- Web development
- Web services

**For Reference:**
https://en.wikipedia.org/wiki/C_Sharp_(programming_language)
https://docs.microsoft.com/en-us/dotnet/csharp/getting-started/

---

## C# Keywords

### Reserved Keywords

Keywords are predefined, reserved identifiers that have special meanings to the compiler.

- abstract
- as
- base
- bool
- breakbyte
- case
- catch
- char
- checked
- class
- const
- continue
- decimal
- default
- delegate
- do
- double
- else
- enum
- event
- explicit
- extern
- false
- finally
- fixed
- float
- for
- foreach
- goto
- if
- implicit
- in
- int
- interface
- internal
- is
- lock
- long
- namespace
- new
- null
- object
- operator
- out
- override
- params
- private
- protected
- public
- readonly
- ref
- return
- sbyte
- sealed
- short
- sizeof
- stackalloc
- static
- string
- struct
- switch
- this
- throw
- true
- try
- typeof
- uint
- ulong
- unchecked
- unsafe
- ushort
- using
- virtual
- void
- volatile
- while

### Contextual Keywords

A contextual keyword is used to provide a specific meaning in the code, but it is not a reserved word in C#. Some contextual keywords, such as partial and where, have special meanings in two or more contexts.

- add
- alias
- ascending
- async
- await
- by
- descending
- dynamic
- equals
- from
- get
- global
- group
- into
- join
- let
- nameof
- notnull
- on
- orderby
- partial (method)
- partial (type)
- remove
- select
- set
- unmanaged (generic type constraint)
- value
- var
- when (filter condition)
- where (generic type constraint)
- where (query clause)
- yield

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/

---

## C# Special Characters

Special characters are predefined, contextual characters that modify the program element (a literal string, an identifier, or an attribute name) to which they are prepended. C# supports the following special characters:

- **@**, the verbatim identifier character.
- **$**, the interpolated string character.

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/

---

## C# Preprocessor Directives

C# has the following preprocessor directives:

- \#if
- \#else
- \#elif
- \#endif
- \#define
- \#undef
- \#warning
- \#error
- \#line
- \#region
- \#endregion
- \#pragma
- \#pragma warning
- \#pragma checksum

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/preprocessor-directives/

---

## General Syntax

- Case sensitive.
- Code is typed inside code blocks **{}**
- Line termination is done using semicolon **;**

---

## Comments

- Single line comments are typed within two forward slashes:

```csharp
// Single Line Comment
```

- Multi-line comments are typed with a forward slash followed by an asterisk. It must be closed by an asterisk followed by a forward slash.

```csharp
/*
  This is a multi-line comment.
  This is the second line of the comment.
*/
```

---

## C# Hello World Console Application

```csharp
class Hello
{
    static void Main(string[] args)
    {
        System.Console.WriteLine("Hello World!");
    }
}
```

**Note:** C# source files typically have the file extension **.cs**

---

## C# Variables

**Syntax:**

```
<modifier> <datatype> <variablename> = <initialvalue>;
```

- Variables should start with underscore and cannot contain white spaces.
- It can contain numbers but should always start with a capital letter.
- It cannot contain any symbols (other than underscore).

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/variables

---

## C# Naming Conventions

### Terminology

There are following three terminologies are used to declare C# and .NET naming standards.

- **Camel Case (camelCase):** In this standard, the first letter of the word always in small letter and after that each word starts with a capital letter.
- **Pascal Case (PascalCase):** In this the first letter of every word is in capital letter.
- **Underscore Prefix (_underScore):** For underscore ( __ ), the word after _ use camelCase terminology.

### Summary Table

| Kind            | Rule            |
| --------------- | --------------- |
| Private Field   | _lowerCamelCase |
| Protected Field | UpperCamelCase  |
| Internal Field  | UpperCamelCase  |
| Constant        | UpperCamel Case |
| Property        | UpperCamelCase  |
| Method          | UpperCamelCase  |
| Class           | UpperCamelCase  |
| Interface       | IUpperCamelCase |
| Local Variable  | lowerCamelCase  |
| Parameter       | lowerCamelCase  |

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions
https://google.github.io/styleguide/csharp-style.html
https://www.dofactory.com/reference/csharp-coding-standards

---

## C# Data Types

### Value Types

**For Reference:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types

#### Simple Data Types

**For Reference:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types

##### Bytes

```csharp

byte myUnsignedByte = 8; // Size: 8 bits  | Range: 0 to 255
sbyte mySignedByte = -8; // Size: 8 bits  | Range: -128 to +127
```

##### Unsigned Integers

```csharp

ushort myUnsignedShort = 16; // Size: 16 bits  | Range: 0 to 65535
uint myUnsignedInt = 32; // Size: 32 bits  | Range: 0 to 2^32-1
ulong myUnsignedLong = 64; // Size: 64 bits  | Range: 0 to 2^64-1
```

##### Signed Integers

```csharp
short mySignedShort = 16; // Size: 16 bits  | Range: -32768 to +32767
int mySignedInt = 32; // Size: 32 bits  | Range: -2^31  to +2^31-1
long mySignedLong = -64; // Size: 64 bits  | Range: -2^63  to +2^63-1
```

##### Floating-Point Types

```csharp
float myFloat = 3.14F; // Size: 32 bits  | Range: 7 digits of precision
double myDouble = 3.14D; // Size: 64 bits  | Range: 15-16 digits of precision
decimal myDecimal = 3.14M; // Size: 128 bits | Range: 28-29 digits of precision
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types

##### Unicode Characters

```csharp
char myChar = 'a'; // Size: 16 bits  | Range: Unicode character
```

##### Booleans

```csharp
bool myBool = true; // Size: 4 bits   | Range: true or false
```

#### Enum Types

An enum type is a distinct value type with a set of named constants.

```csharp
using System;

enum Color
{
    Red,
    Green,
    Blue
}

class Test
{
    static void PrintColor(Color color)
    {
        switch (color)
        {
            case Color.Red:
                Console.WriteLine("Red");
                break;
            case Color.Green:
                Console.WriteLine("Green");
                break;
            case Color.Blue:
                Console.WriteLine("Blue");
                break;
            default:
                Console.WriteLine("Unknown color");
                break;
        }
    }

    static void Main(string[] args)
    {
        Color c = Color.Red;
        PrintColor(c);
        PrintColor(Color.Blue);
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum

#### Structure Types

Like classes, structs are data structures that can contain data members and function members, but unlike classes, structs are value types and do not require heap allocation. A variable of a struct type directly stores the data of the struct, whereas a variable of a class type stores a reference to a dynamically allocated object. Struct types do not support user-specified inheritance, and all struct types implicitly inherit from type object.

Structs are particularly useful for small data structures that have value semantics. Complex numbers, points in a coordinate system, or key-value pairs in a dictionary are all good examples of structs. The use of structs rather than classes for small data structures can make a large difference in the number of memory allocations an application performs.

```csharp
struct Point
{
    public int x, y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct

#### Tuple Types

Available in C# 7.0 and later, the tuples feature provides concise syntax to group multiple data elements in a lightweight data structure.

```csharp
(double, int) t1 = (4.5, 3);
Console.WriteLine($"Tuple with elements {t1.Item1} and {t1.Item2}."); // Output => Tuple with elements 4.5 and 3.

(double Sum, int Count) t2 = (4.5, 3);
Console.WriteLine($"Sum of {t2.Count} elements is {t2.Sum}."); // Output => Sum of 3 elements is 4.5.
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-tuples

#### Nullable Value Types

A nullable value type **```T?```** represents all values of its underlying value type **T** and an additional null value. For example, you can assign any of the following three values to a **```bool?```** variable: true, false, or null. An underlying value type **T** cannot be a nullable value type itself.

```csharp
int? b = 10;

if (b.HasValue)
{
    Console.WriteLine($"b is {b.Value}");
}

else
{
    Console.WriteLine("b does not have a value");
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-value-types

### Reference Types

#### Built-In Reference Types

##### Object Types

The object type is an alias for System.Object in .NET. In the unified type system of C#, all types, predefined and user-defined, reference types and value types, inherit directly or indirectly from System.Object. You can assign values of any type to variables of type object. Any object variable can be assigned to its default value using the literal null.

##### String Types

It is common to think of strings as arrays of characters. In reality, strings in C# are objects.
When you declare a string variable, you basically instantiate an object of type String.

```csharp
string fooString = "\"escape\" quotes and add \n (new lines) and \t (tabs)";
Console.WriteLine(fooString);

// You can access each character of the string with an indexer:
char charFromString = fooString[1]; // => 'e'

// Strings are immutable: you can't do fooString[1] = 'X';

// Compare strings with current culture, ignoring case
string.Compare(fooString, "x", StringComparison.CurrentCultureIgnoreCase);

// Formatting, based on sprintf
string fooFs = string.Format("Check Check, {0} {1}, {0} {1:0.0}", 1, 2);

// Dates & Formatting
DateTime fooDate = DateTime.Now;
Console.WriteLine(fooDate.ToString("hh:mm, dd MMM yyyy"));

// String Interpolation
string myName = "Jane Doe";
Console.WriteLine($"My name is: {myName}. It is great to be here!");

// String Builder
StringBuilder sb = new StringBuilder();
sb.Append("Hello ");
sb.AppendLine("World!");
Console.WriteLine(sb);

// Verbatim String
// You can use the @ symbol before a string literal to escape all characters in the string
string path = "C:\\Users\\User\\Desktop";
string verbatimPath = @"C:\Users\User\Desktop";
Console.WriteLine(path == verbatimPath);  // => true

// You can split a string over two lines with the @ symbol. To escape " use ""
string bazString = @"Here's some stuff
on a new line! ""Wow!"", the masses cried";

// Popular String Methods & Properties
string myText = "some text";

Console.WriteLine(myText.IndexOf('t')); // Outputs => 5

myText = myText.Insert(0, "This is ");
Console.WriteLine(myText); // Outputs => "This is some text"

myText = myText.Replace("This is", "Here is");
Console.WriteLine(myText); // Outputs => "Here is some text"

if(myText.Contains("some"))
Console.WriteLine("found"); // Outputs "found"

myText = myText.Remove(4);
Console.WriteLine(myText); // Outputs "Here"

myText = myText.Substring(2, 3);
Console.WriteLine(myText); // Outputs "re"
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/strings/

##### Delegate Types

A delegate type represents references to methods with a particular parameter list and return type. Delegates make it possible to treat methods as entities that can be assigned to variables and passed as parameters. Delegates are similar to the concept of function pointers found in some other languages, but unlike function pointers, delegates are object-oriented and type-safe.

```csharp
using System;

delegate double Function(double x);

class Multiplier
{
    double factor;

    public Multiplier(double factor)
    {
        this.factor = factor;
    }

    public double Multiply(double x)
    {
        return x * factor;
    }
}

class Test
{
    static double Square(double x)
    {
        return x * x;
    }

    static double[] Apply(double[] a, Function f)
    {
        double[] result = new double[a.Length];
        for (int i = 0; i < a.Length; i++)
        {
          result[i] = f(a[i]);
        }
        return result;
    }

    static void Main(string[] args)
    {
        double[] a = {0.0, 0.5, 1.0};
        double[] squares = Apply(a, Square);
        double[] sines = Apply(a, Math.Sin);

        Multiplier m = new Multiplier(2.0);
        double[] doubles =  Apply(a, m.Multiply);
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/

#### Interface Types

An interface defines a contract that can be implemented by classes and structs. An interface can contain methods, properties, events, and indexers. An interface does not provide implementations of the members it defines—it merely specifies the members that must be supplied by classes or structs that implement the interface. Interfaces may employ multiple inheritance.

```csharp
public interface IShape
{
  void Draw();
}
class Circle : IShape
{
    public void Draw()
    {
      Console.WriteLine("Circle Draw");
    }
}
static void Main(string[] args)
{
    IShape c = new Circle();
    c.Draw(); // Outputs "Circle Draw"
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface

#### Nullable Reference Types

Nullable reference types are available beginning with C# 8.0, in code that has opted in to a nullable aware context. Nullable reference types, the null static analysis warnings, and the null-forgiving operator are optional language features. All are turned off by default. A nullable context is controlled at the project level using build settings, or in code using pragmas.

```csharp
string notNull = "Hello";
string? nullable = default;
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types

#### Array Types

An array is a data structure that contains a number of variables that are accessed through computed indices. The variables contained in an array, also called the elements of the array, are all of the same type, and this type is called the element type of the array.

Array types are reference types, and the declaration of an array variable simply sets aside space for a reference to an array instance. Actual array instances are created dynamically at run-time using the new operator. The new operation specifies the length of the new array instance, which is then fixed for the lifetime of the instance. The indices of the elements of an array range from 0 to Length - 1. The new operator automatically initializes the elements of an array to their default value, which, for example, is zero for all numeric types and null for all reference types.

##### Array Of Simple Types

```csharp
int[] a1   = new int[10];        // One-Dimensional Array
int[,] a2  = new int[10, 5];     // Two-Dimensional Array
int[,,] a3 = new int[10, 5, 2];  // Three-Dimensional Array
```

##### Jagged Arrays

**Jagged Array:** is an array with elements of an array type.

**Syntax:**

```
data_type[][] name_of_array = new data_type[rows][]
```

**Example 1:**

```csharp
int[][] jaggedArray = new int[3][]; // Jagged Array
jaggedArray[0] = new int[10];
jaggedArray[1] = new int[5];
jaggedArray[2] = new int[20];
```

**Example 2:**

```csharp
int[][] anotherJaggedArray = new int[][] // Another way to declare Jagged Arrays
{
    new int[] {1,8,2,7,9},
    new int[] {2,4,6},
    new int[] {33,42}
};

int x = anotherJaggedArray[2][1];
Console.WriteLine(x); // Outputs => 42
```

##### Array Properties & Methods

The Array class in C# provides various properties and methods to work with arrays.

The Array class implements the **IEnumerable** interface, so you can **LINQ extension methods** such as Max(), Min(), Sum(), Average() and many others.

```csharp
using System;
using System.Linq;

public class Program
{
    public static void Main(string[] args)
    {
        int[] integersArray = new int[5]{80, 20, 35, 18, 9};

        Console.WriteLine(integersArray.Max());
        Console.WriteLine(integersArray.Min());
        Console.WriteLine(integersArray.Sum());
        Console.WriteLine(integersArray.Average());
    }
}
```

The **System.Array** class also includes methods for creating, manipulating, searching, and sorting arrays.

```csharp
using System;

public class Program
{
    public static void Main(string[] args)
    {
        int[] integersArray = {20, 9, 16, 50, 3};

        Console.WriteLine("Original Array:");
        foreach(int element in integersArray)
        {
            Console.WriteLine(element);
        }

        Console.WriteLine("Sorted Array:");
        Array.Sort(integersArray);
        foreach(int element in integersArray)
        {
            Console.WriteLine(element);
        }

        Console.WriteLine("Reversed Array:");
        Array.Reverse(integersArray);
        Array.ForEach<int>(integersArray, n => Console.WriteLine(n));

        Console.WriteLine(Array.BinarySearch(integersArray, 9));
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/
https://docs.microsoft.com/en-us/dotnet/api/system.array
https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable

---

## Type Casting

Type casting is when you assign a value of one data type to another type.

In C#, there are two types of casting:

**Implicit Casting (automatically)** - converting a smaller type to a larger type size

> char -> int -> long -> float -> double

**Explicit Casting (manually)** - converting a larger type to a smaller size type:

> double -> float -> long -> int -> char

### Implicit Casting

Implicit casting is done automatically when passing a smaller size type to a larger size type.

```csharp
int myInt = 9;
double myDouble = myInt;       // Automatic casting: int to double

Console.WriteLine(myInt);      // Outputs 9
Console.WriteLine(myDouble);   // Outputs 9
```

### Explicit Casting

Explicit casting must be done manually by placing the type in parentheses in front of the value.

```csharp
double myDouble = 9.78;
int myInt = (int) myDouble;    // Manual casting: double to int

Console.WriteLine(myDouble);   // Outputs 9.78
Console.WriteLine(myInt);      // Outputs 9
```

### Type Conversion Methods

It is also possible to convert data types explicitly by using built-in methods.

- ToBoolean
- ToByte
- ToChar
- ToDateTime
- ToDecimal
- ToDouble
- ToInt16
- ToInt32
- ToInt64
- ToSbyte
- ToSingle
- ToString
- ToType
- ToUInt16
- ToUInt32
- ToUInt64

```csharp
int myInt = 10;
double myDouble = 5.25;
bool myBool = true;

Console.WriteLine(Convert.ToString(myInt));    // convert int to string
Console.WriteLine(Convert.ToDouble(myInt));    // convert int to double
Console.WriteLine(Convert.ToInt32(myDouble));  // convert double to int
Console.WriteLine(Convert.ToString(myBool));   // convert bool to string
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions

---

## Operators

### Arithmetic Operators

```csharp
float myFloat = 0;

myFloat = 3 + 2; // Addition       => 5
myFloat = 3 - 2; // Subtraction    => 1
myFloat = 3 * 2; // Multiplication => 6
myFloat = 3 / 2; // Division       => 1
myFloat = 3 % 2; // Modulus        => 1

/*
    Notice that the division sign gives an incorrect result.
    This is because it operates on two integer values and will therefore round the result and return an integer.
    To get the correct value, one of the numbers needs to be converted into a floating-point number.
*/
myFloat = 3 / (float) 2; // 1.5
```

### Combined Assignment Operators

```csharp
float myFloat = 0;

myFloat += 2; // myNumber = myNumber + 2
myFloat -= 2; // myNumber = myNumber - 2
myFloat *= 2; // myNumber = myNumber * 2
myFloat /= 2; // myNumber = myNumber / 2
myFloat %= 2; // myNumber = myNumber % 2
```

### Increment and Decrement Operators

```csharp
int myCounter = 0;

Console.WriteLine(myCounter++); //Prints "0", _myCounter = 1. Post-Incrementation
Console.WriteLine(++myCounter); //Prints "2", _myCounter = 2. Pre-Incrementation
Console.WriteLine(myCounter--); //Prints "2", _myCounter = 1. Post-Decrementation
Console.WriteLine(--myCounter); //Prints "0", _myCounter = 0. Pre-Decrementation
```

### Comparison Operators

```csharp
Console.WriteLine($"3 == 2? {3 == 2}"); // => false
Console.WriteLine($"3 != 2? {3 != 2}"); // => true
Console.WriteLine($"3 > 2? {3 > 2}"); // => true
Console.WriteLine($"3 < 2? {3 < 2}"); // => false
Console.WriteLine($"2 <= 2? {2 <= 2}"); // => true
Console.WriteLine($"2 >= 2? {2 >= 2}"); // => true
```

### Logical Operators

```csharp
bool myBool;

myBool = (true && false); // Logical AND => (false)
myBool = (true || false); // Logical OR  => (true)
myBool = !(true); // Logical NOT => (false)

Console.WriteLine(myBool);
```

### Bitwise Operators

```csharp
int myInteger;

// The bitwise operators can manipulate individual bits inside an integer.

myInteger = 5 & 4; // and (0b101 & 0b100 = 0b100 = 4)
myInteger = 5 | 4; // or (0b101 | 0b100 = 0b101 = 5)
myInteger = 5 ^ 4; // xor (0b101 ^ 0b100 = 0b001 = 1)
myInteger = 4 << 1; // left shift (0b100 << 1 = 0b1000 = 8)
myInteger = 4 >> 1; // right shift (0b100 >> 1 = 0b10 = 2)
myInteger = ~ 4; // invert (~0b00000100 = 0b11111011 = -5)

// These bitwise operators have shorthand assignment operators, just like the arithmetic operators.

myInteger = 5;
myInteger &= 4; // and (0b101 & 0b100 = 0b100 = 4)

myInteger = 5;
myInteger |= 4; // or (0b101 | 0b100 = 0b101 = 5)

myInteger = 5;
myInteger ^= 4; // xor (0b101 ^ 0b100 = 0b001 = 1)

myInteger = 5;
myInteger <<= 1; // left shift (0b101 << 1 = 0b1010 = 10)

myInteger = 5;
myInteger >>= 1; // right shift (0b101 >> 1 = 0b10 = 2)
```

### Operator Precedents

```csharp
/*

- parentheses ()

- Postfix Increment and Decrement         ++, --
- Prefix Increment, Decrement and Unary   ++, --, +, -, !, ~

- Multiplicative                          *, /, %
- Additive                                +, -

- Shift                                   <<, >>
- Relational                              <, <=, >, >=
- Equality                                ==, !=

- Bitwise AND                             &
- Bitwise XOR                             ^
- Bitwise OR                              |

- Logical AND                             &&
- Logical OR                              ||

- Ternary                                 ? :
- Assignment                              =, +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=

*/
```

The higher the precedence of operator is, the higher it appears in the table.

To make things clearer, parentheses () can be used to specify which part of the expression will be evaluated first. Parentheses have the greatest precedence of all operators.

```csharp
int myInteger;

myInteger = 4 + 6 / 2;   // => 7
myInteger = (4 + 6) / 2; // => 5
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/

---

## Statements

### Conditions

#### **```if```**...**```else if```**...**```else```**
```csharp
int time = 22;

if (time < 10)
{
  Console.WriteLine("Good morning.");
}
else if (time < 20)
{
  Console.WriteLine("Good day.");
}
else
{
  Console.WriteLine("Good evening.");
}

// Ternary operators
// A simple if/else can be written as follows
// <condition> ? <true> : <false>
int toCompare = 17;
string isTrue = toCompare == 17 ? "True" : "False";
```

#### **```switch```** Case

```csharp
// A switch works with the byte, short, char, and int data types.
// It also works with enumerated types (discussed in Enum Types),
// the String class, and a few special classes that wrap
// primitive types: Character, Byte, Short, and Integer.
int month = 3;
string monthString;
switch (month)
{
    case 1:
        monthString = "January";
        break;
    case 2:
        monthString = "February";
        break;
    case 3:
        monthString = "March";
        break;
    // You can assign more than one case to an action
    // But you can't add an action without a break before another case
    // (if you want to do this, you would have to explicitly add a goto case x
    case 6:
    case 7:
    case 8:
        monthString = "Summer time!!";
        break;
    default:
        monthString = "Some other month";
        break;
}
```

### Loops

#### **```while```** Loop

```csharp

int fooWhile = 0;

while (fooWhile < 100)
{
    // Iterated 100 times, fooWhile 0->99
    fooWhile++;
}
```

#### **```do```**...**```while```** Loop

```csharp
// Do While Loop
int fooDoWhile = 0;

do
{
    // Start iteration 100 times, fooDoWhile 0->99
    if (false)
    {
        continue; // skip the current iteration
    }

    fooDoWhile++;

    if (fooDoWhile == 50)
    {
        break; // breaks from the loop completely
    }

} while (fooDoWhile < 100);
```

#### **```for```** Loop

```csharp
for (int fooFor = 0; fooFor < 10; fooFor++)
{
    // Iterated 10 times, fooFor 0->9
}
```

#### **```foreach```** Loop

```csharp
foreach (char character in "Hello World".ToCharArray())
{
    // Iterated over all the characters in the string
}
```

### **```goto```** Statement

```csharp
static void Main(string[] args) {
    int i = 0;
    goto check;

    loop:
    Console.WriteLine(args[i++]);

    check:
    if (i < args.Length)
    {
      goto loop;
    }
}
```

### **```return```** Statement

```csharp
static int Add(int a, int b)
{
    return a + b;
}

static void Main(string[] args)
{
    Console.WriteLine(Add(1, 2));
    return;
}
```

### **```yield```** Statement

```csharp
static IEnumerable<int> Range(int from, int to)
{
    for (int i = from; i < to; i++)
    {
        yield return i;
    }
    yield break;
}

static void Main(string[] args)
{
    foreach (int x in Range(-10,10))
    {
        Console.WriteLine(x);
    }
}
```

### **```checked```** and **```unchecked```** Statements

```csharp
static void Main(string[] args)
{
    int i = int.MaxValue;
    checked
    {
        Console.WriteLine(i + 1);        // Exception
    }
    unchecked
    {
        Console.WriteLine(i + 1);        // Overflow
    }
}
```

### **```lock```** Statement

```csharp
class Account
{
    decimal balance;
    public void Withdraw(decimal amount)
    {
        lock (this)
        {
            if (amount > balance)
            {
                throw new Exception("Insufficient funds");
            }
            balance -= amount;
        }
    }
}
```

### **```using```** Statement

```csharp
static void Main(string[] args)
{
    using (TextWriter w = File.CreateText("test.txt"))
    {
        w.WriteLine("Line one");
        w.WriteLine("Line two");
        w.WriteLine("Line three");
    }
}
```

### Exception Handling

```csharp
static double Divide(double x, double y)
{
    if (y == 0)
    {
      throw new DivideByZeroException();
    }
    return x / y;
}

static void Main(string[] args)
{
    try
    {
        if (args.Length != 2)
        {
            throw new Exception("Two numbers are required");
        }
        double x = double.Parse(args[0]);
        double y = double.Parse(args[1]);
        Console.WriteLine(Divide(x, y));
    }

    catch (Exception e)
    {
        Console.WriteLine(e.Message);
    }

    finally
    {
        Console.WriteLine("Terminating!");
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/statements

---

## Classes & Objects

Classes are the most fundamental of C#'s types. A class is a data structure that combines state (fields) and actions (methods and other function members) in a single unit. A class provides a definition for dynamically created instances of the class, also known as objects. Classes support inheritance and polymorphism, mechanisms whereby derived classes can extend and specialize base classes.

New classes are created using class declarations. A class declaration starts with a header that specifies the attributes and modifiers of the class, the name of the class, the base class (if given), and the interfaces implemented by the class. The header is followed by the class body, which consists of a list of member declarations written between the delimiters { and }.

You can find an example below that demonstrates a class with a constructor and destructor.

```csharp
using System;

namespace Example
{
  class Complex
  {
      private int realNum, imaginaryNum;

      // Defining the constructor
      public Complex()
      {
          realNum = 0;
          imaginaryNum = 0;
      }

      // SetValue method sets value of real and img
      public void SetValue(int r, int i)
      {
          realNum = r;
          imaginaryNum = i;
      }

      // DisplayValue displays values of real and img
      public void DisplayValue()
      {
          Console.WriteLine("Real = " + realNum);
          Console.WriteLine("Imaginary = " + imaginaryNum);
      }

      // Defining the destructor for class Complex
      ~Complex()
      {
          Console.WriteLine("Destructor was called");
      }

  }

  class Program
  {
      static void Main(string[] args)
      {
          // Creating an instance of class Complex C invokes constructor
          Complex myComplexNumber = new Complex();

          // Calling SetValue method using instance C Setting values of real to 2 and img to 3
          myComplexNumber.SetValue(2, 3);

          // Displaying values of real and imaginary parts
          myComplexNumber.DisplayValue();
      }
  }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/classes
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/objects

### Members

The members of a class are either static members or instance members. Static members belong to classes, and instance members belong to objects (instances of classes).

The following table provides an overview of the kinds of members a class can contain.

| Member       | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| Constants    | Constant values associated with the class                    |
| Fields       | Variables of the class                                       |
| Methods      | Computations and actions that can be performed by the class  |
| Properties   | Actions associated with reading and writing named properties of the class |
| Indexers     | Actions associated with indexing instances of the class like an array |
| Events       | Notifications that can be generated by the class             |
| Operators    | Conversions and expression operators supported by the class  |
| Constructors | Actions required to initialize instances of the class or the class itself |
| Destructors  | Actions to perform before instances of the class are permanently discarded |
| Types        | Nested types declared by the class                           |

### Constructors

Whenever a class or struct is created, its constructor is called. A class or struct may have multiple constructors that take different arguments. Constructors enable the programmer to set default values, limit instantiation, and write code that is flexible and easy to read.

**Note:** You can also chain and overload constructors when needed.

```csharp
class MyRectangle
{
    public int x, y;

    public MyRectangle(int width, int height) // Defining the constructor
    {
        x = width;
        y = height;
    }

    static void Main(string[] args)
    {
        MyRectangle r = new MyRectangle(20, 15);
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constructors

### The ```this``` Keyword

Inside the constructor, as well as in other methods belonging to the object, a special keyword called this can be used. This keyword is a reference to the current instance of the class. Suppose, for example, that the constructor’s parameters have the same names as the corresponding fields. The fields could then still be accessed by using the this keyword, even though they are overshadowed by the parameters.

```csharp
class MyRectangle
{
    public int x, y;

    public MyRectangle(int x, int y)
    {
        this.x = x; // Set field x to parameter x
        this.y = y; // Set field y to parameter y
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/this

### Garbage Collector

The .NET Framework has a garbage collector that periodically releases memory used by objects when they are no longer accessible. This frees the programmer from the often tedious and error-prone task of manual memory management.

An object will be eligible for destruction when there are no more references to it.

**Note:** Objects cannot be explicitly deallocated in C#.

```csharp
static void Main(string[] args)
{
    if (true)
    {
        int myNum = 0;
    }
    // Integer myNum becomes inaccessible here and will be destroyed.
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals

### Destructors / Finalizers

The destructor or finilizer is used to release any unmanaged resources allocated by the object. It is called automatically before an object is destroyed and cannot be called explicitly.

- A class can only have one destructor.
- Destructors cannot be called. They are invoked automatically.
- A destructor does not take modifiers or have parameters.
- The name of a destructor is exactly the same as the class prefixed with a tilde (```~```).

```csharp
class Message
{
    public Message() // Defining the construtor
    {
        Console.WriteLine("The constructor is called");
    }

    ~Message() // Defining the desctructor
    {
        Console.WriteLine("The destructor is called");
    }
}

static void Main(string[] args)
{
    Message myMessage = new Message();
}
```

**Note:** The .NET Framework garbage collector automatically manages the allocation and release of memory for objects. However, when a class uses unmanaged resources - such as network connections, files, and user interface components – a destructor should be used to free up those resources when they are no longer needed.

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/destructors

---

## Object-Oriented Programming (OOP)

C# is an object-oriented language. Four of the key techniques used in object-oriented programming are:

- **Abstraction** means hiding the unnecessary details from type consumers.
- **Encapsulation** means that a group of related properties, methods, and other members are treated as a single unit or object.
- **Inheritance** describes the ability to create new classes based on an existing class.
- **Polymorphism** means that you can have multiple classes that can be used interchangeably, even though each class implements the same properties or methods in different ways.

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/intro-to-csharp/object-oriented-programming

### Encapsulation / Access Levels

In programming, encapsulation means more than simply combining members together within a class; it also means restricting access to the inner workings of that class.
Encapsulation is implemented by using access modifiers. An access modifier defines the scope and visibility of a class member.

Each member of a class has an associated accessibility, which controls the regions of program text that are able to access the member. There are five possible forms of accessibility. These are summarized in the following tables.

| Access Modifier    | Meaning                                                      |
| ------------------ | ------------------------------------------------------------ |
| public             | Access not limited                                           |
| protected          | Access limited to this class or classes derived from this class |
| internal           | Access limited to this program                               |
| protected internal | Access limited to this program or classes derived from this class |
| private            | Access limited to this class                                 |

**Note:** When choosing an access level, it is generally best to use the most restrictive level possible.

| Accessibility | Meaning                                                      |
| ------------- | ------------------------------------------------------------ |
| Events        | Notifications that can be generated by the class             |
| Operators     | Conversions and expression operators supported by the class  |
| Constructors  | Actions required to initialize instances of the class or the class itself |
| Destructors   | Actions to perform before instances of the class are permanently discarded |
| Types         | Nested types declared by the class                           |

### Inheritance

Inheritance allows a class to acquire the members of another class. It allows to define a class based on another class. This makes creating and maintaining an application easy.

The class whose properties are inherited by another class is called the **Base class**.
The class which inherits the properties is called the **Derived class**.

**Note:** C# does not support multiple inheritance. However, you can use interfaces to implement multiple inheritance.

```csharp
using System;

namespace RectangleApplication
{
    class Rectangle
    {
        protected double length;
        protected double width;

        public Rectangle(double l, double w)
        {
            length = l;
            width = w;
        }

        public double GetArea()
        {
            return length * width;
        }

        public void Display()
        {
            Console.WriteLine($"Length: {length}");
            Console.WriteLine($"Width: {width}");
            Console.WriteLine($"Area: {GetArea()}");
        }
   }

    class Tabletop : Rectangle
    {
        private double cost;
        public Tabletop(double l, double w) : base(l, w) { }

        public double GetCost()
        {
            double cost;
            cost = GetArea() * 70;

            return cost;
        }

        public void Display()
        {
            base.Display();
            Console.WriteLine($"Cost: {GetCost()}");
        }
   }

    class ExecuteRectangle
    {
        static void Main(string[] args)
        {
            Tabletop myTabletop = new Tabletop(4.5, 8.5);
            myTabletop.Display();
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/inheritance
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/inheritance

### Polymorphism / Redefining Members

The word polymorphism means "having many forms". In C#, polymorphism means that a single method can have a number of different implementations. Typically, polymorphism occurs when there is a hierarchy of classes and they are related through inheritance from a common base class.

Polymorphism means that a call to a member method will cause a different implementation to be executed depending on the type of object that invokes the method.

```csharp
using System;

namespace SamplePolymorphism
{
    class Program
    {
        class Shape
        {
            // The "virtual" keyword is used below to allow the method to be overridden in a derived class.
            public virtual void Draw()
            {
                Console.WriteLine("The act of drawing!");
            }
        }

        class Circle : Shape
        {
            // The "override" modifier is required for modifying the virtual implementation of the inherited method.
            public override void Draw()
            {
                Console.WriteLine("Draw a circle");
            }
        }

        class Rectangle : Shape
        {
            public override void Draw()
            {
                Console.WriteLine("Draw a rectangle");
            }
        }

        static void Main(string[] args)
        {
            Shape myCircle = new Circle();
            myCircle.Draw();

            Shape myRectangle = new Rectangle();
            myRectangle.Draw();
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/polymorphism

### Static

Use the static modifier to declare a static member, which belongs to the type itself rather than to a specific object.

The static modifier can be used to declare static classes. In classes, interfaces, and structs, you may add the static modifier to fields, methods, properties, operators, events, and constructors.

**Note 1:** The static modifier can't be used with indexers or finalizers.
**Note 2:** An entire class can be declared as static.
**Note 3:** A static class can contain only static members.
**Note 4:** You cannot instantiate an object of a static class, as only one instance of the static class can exist in a program.

Beginning with C# 8.0, you can add the static modifier to a local function. A static local function can't capture local variables or instance state.

Beginning with C# 9.0, you can add the static modifier to a lambda expression or anonymous method. A static lambda or anonymous method can't capture local variables or instance state.

```csharp
using System;

namespace StaticDemonstration
{
    static class User
    {
        // Static Variables
        public static string name;
        public static string location;
        public static int age;

        // Static Method
        public static void Details()
        {
            Console.WriteLine($"The user details are: {name} - {age} - {location}");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Assigning values to public static variables:
            User.name = "Kayako Yamada";
            User.location = "Japan";
            User.age = 30;

            // Accessing public static variables:
            Console.WriteLine($"Name: {User.name}");
            Console.WriteLine($"Location: {User.location}");
            Console.WriteLine($"Age: {User.age}");

            // Calling a public static method:
            User.Details();
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/static
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/static-classes-and-static-class-members

### Properties

Properties in C# provide the ability to protect a field by reading and writing to it through special methods called **accessors**. They are generally declared as ```public``` with the same data type as the field they are going to protect, followed by the name of the property and a code block that defines the ```get``` and ```set``` accessors.

Properties allow developers to change the internal implementation of the property without breaking any programs that are using it.

**Note 1:** It is a good practice to encapsulate members of a class and provide access to them only through public methods. Properties provide a flexible mechanism to read, write, or compute the value of a private field.
**Note 2:** It is advised for the property name to be the same as the private field with a capital letter.
**Note 3:** Any accessor of a property can be omitted depending on the objective and design of the program.
**Note 4:** A property can also be private, so it can be called only from within the class.

```csharp
using System;

namespace PropertiesDemonstration
{
    class Person
    {
        private string name; // Private string that requires a property to access it from outside the class.
        private ushort age; // Private unsigned short that requires a property to access it from outside the class.

        public string Name // Property of type string.
        {
            get { return name; }
            set { name = value; }
            // "value" is a keyword, which represents the value we assign to a property using the set accessor.
        }

        public ushort Age // Property of type string.
        {
            get { return age; }

            set
            {
                if (value >= 18) // Validating the value before assigning it to the private member.
                {
                    age = value;
                }
            }
        }

        public string Title { get; set; }
        // Title is an auto-implemented property (Auto-Properties). It allows you to define the property without declaring the private field name separately. It is created by the property automatically. That allows a short declaration of private members.

        static void Main(string[] args)
        {
            Person teacher = new Person();

            teacher.Name = "James";
            teacher.Title = "Dr.";
            teacher.Age = 38;

            Console.WriteLine($"Welcome: {teacher.Title} {teacher.Name} {teacher.age}");
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/properties
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties

### Indexers

Indexers allow instances of a class or struct to be indexed just like arrays. The indexed value can be set or retrieved without explicitly specifying a type or instance member. Indexers resemble properties except that their accessors take parameters.

Declaration of an **indexer** is to some extent similar to a **property**. The difference is that **indexer** accessors require an **index**. Like a property, you use get and set accessors for defining an indexer. However, where properties return or set a specific data member, indexers return or set a particular value from the object instance.

**Note 1:** Indexers are defined with the ```this``` keyword.
**Note 2:** Usually, programmers use indexers when a class represents a list, collection, or an array of objects.

```csharp
using System;

namespace IndexerDemonstration
{
    class Program
    {
        class Clients
        {
            private string[] names = new string[10];

            public string this[int index]
            {
                get
                {
                    return names[index];
                }

                set
                {
                    names[index] = value;
                }
            }
        }

        static void Main(string[] args)
        {
            Clients myClients = new Clients();

            myClients[0] = "Jane";
            myClients[1] = "Oliver";
            myClients[2] = "Amy";

            Console.WriteLine(myClients[1]); // Oliver
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/indexers/

### Abstraction

#### Abstract Classes & Methods

Polymorphism is used when you have different derived classes with the same method, which has different implementations in each class. This behavior is achieved through ```virtual``` methods that are **overridden** in the derived classes.

In some situations there is no meaningful need for the ```virtual``` method to have a separate definition in the base class. These methods are defined using the ```abstract``` keyword and specify that the derived classes must define that method on their own.

The **abstract modifier** indicates that the thing being modified has a missing or incomplete implementation. The abstract modifier can be used with classes, methods, properties, indexers, and events.

Use the abstract modifier in a class declaration to indicate that a class is intended only to be a base class of other classes, not instantiated on its own. Members marked as abstract must be implemented by non-abstract classes that derive from the abstract class.

**Note:** You cannot create objects of a class containing an abstract method, which is why the class itself should be abstract.

```csharp
using System;

abstract class BaseClass // Abstract Class
{
    // Protected Integers
    protected int _x = 0;
    protected int _y = 0;

    // Public Abstract Method
    public abstract void IncrementValues();

    // Abstract Properties
    public abstract int X { get; }
    public abstract int Y { get; }
}

class DerivedClass : BaseClass
{
    public override void IncrementValues()
    {
        _x++;
        _y++;
    }

    public override int X   // Overriding Property
    {
        get
        {
            return _x;
        }
    }

    public override int Y   // Overriding Property
    {
        get
        {
            return _y;
        }
    }

    static void Main(string[] args)
    {
        var myObject = new DerivedClass();
        myObject.IncrementValues(); // Incrementing X & Y by one
        Console.WriteLine($"x = {myObject.X}, y = {myObject.Y}"); // x = 1, y = 1
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/abstract

#### Interfaces

An interface is a completely abstract class, which contains only abstract members. It is declared using the ```interface``` keyword.

When a class implements an interface, it must also implement, or define, all of its methods.

The term "**implementing an interface**"" is used (opposed to the term "inheriting from") to describe the process of creating a class based on an interface. The interface simply describes what a class should do. The class implementing the interface must define how to accomplish the behaviors.

A class can inherit from just one base class, but it can implement **multiple interfaces**. Therefore, by using interfaces you can include behavior from multiple sources in a class. To implement multiple interfaces, use a comma separated list of interfaces when creating the class.

**Note 1:** All members of the interface are by default abstract, so no need to use the abstract keyword.
**Note 2:** All members of an interface are always public, and no access modifiers can be applied to them.
**Note 3:** It is common to use the capital letter **I** as the starting letter for an interface name.
**Note 4:** Interfaces cannot contain fields (variables).

```csharp
using System;

namespace InterfacesDemonstration
{
    interface IInfo
    {
        void DoInform();
    }

    interface IVersion
    {
        void GetVersion();
    }

    interface ILog : IInfo, IVersion
    {
        void DoLog();
    }

    class DBConnect : ILog
    {
        public void DoInform()
        {
            Console.WriteLine("This is the DBConnect class");
        }

        public void GetVersion()
        {
            Console.WriteLine("Version 1.0.0");
        }

        public void DoLog()
        {
            Console.WriteLine("Logging");
        }

        public void Connect()
        {
            Console.WriteLine("Connecting to the database");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var db = new DBConnect();

            db.DoInform();
            db.GetVersion();
            db.DoLog();
            db.Connect();
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/interface

### Namespaces

**Namespaces** provide a way to group related top-level members into a hierarchy. They are also used to avoid naming conflicts. A top-level member, such as a class, that is not included in a namespace is said to belong to the **default namespace**. It can be moved to another namespace by being enclosed in a **namespace block**. You can use a namespace to organize code elements. You can define your own namespaces and use them in your program.

**Properties Of Namespaces:**

- They organize large code projects.
- They are delimited by using the ```.``` operator.
- The ```using``` keyword states that the program is using a given namespace.
- The global namespace is the "root" namespace: ```1global::System``` will always refer to the **.NET** System namespace.

**Note 1:** The naming convention for namespaces is the same as for classes, with each word initially capitalized.
**Note 2:** The **.NET Framework** uses namespaces to organize its classes.

```csharp
namespace NamespaceDemonstration
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/namespaces/

### Operator Overloading

**Operator overloading** allows operators to be **redefined** and used where one or both of the operands are of a certain class. When done correctly, this can simplify the code and make user-defined types as easy to use as the simple types.

Overloaded operators are methods with special names, where the keyword ```operator``` is followed by the **symbol** for the operator being defined. Similar to any other method, an overloaded operator has a return type and a parameter list.

```csharp
using System;

namespace OperatorOverloadDemonstration
{
    class Program
    {
        class Box
        {
            public int Height { get; set; }
            public int Width { get; set; }

            public Box(int h, int w) // The constructor of the class.
            {
                Height = h;
                Width = w;
            }

            public static Box operator+(Box a, Box b) // Overloading the + operator
            {
                int h = a.Height + b.Height;
                int w = a.Width + b.Width;

                Box result = new Box(h, w);
                return result;
            }
        }
        static void Main(string[] args)
        {
            Box b1 = new Box(14, 3);
            Box b2 = new Box(5, 7);
            Box b3 = b1 + b2;

            Console.WriteLine(b3.Height);
            Console.WriteLine(b3.Width);
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/operator-overloading

---

## Delegates

A **delegate** is a type used to reference a method. This allows methods to be assigned to variables and passed as arguments. The delegate’s declaration specifies the method signature to which objects of the delegate type can refer. Delegates are by convention named with each word initially capitalized, followed by Delegate at the end of the name.

In other words, the delegate is a reference type data type that defines the method signature. You can define variables of delegate, just like other data type, that can refer to any method with the same signature as the delegate.

**Note 1:** You can also pass delegates as parameters if needed.
**Note 2:** You can also define generic delegates in C#.
**Note 3:** In **.NET**, [```Func```](https://docs.microsoft.com/en-us/dotnet/api/system.func-1) and [```Action```](https://docs.microsoft.com/en-us/dotnet/api/system.action) types are built-in generic delegates that should be used for most common delegates instead of creating new custom ones.

There are three steps involved while working with delegates:

1. Declare a delegate
2. Set a target method
3. Invoke a delegate

**Delegate Syntax:**

```
[access modifier] delegate [return type] [delegate name]([parameters])
```

**Delegate Demonstration:**

```csharp
namespace DelegatesDemonstration
{
    public delegate int MyDelegate(int x, int y);

    public class Program
    {
        static int Sum(int x, int y)
        {
            return x + y;
        }

        public static void Main(string[] args)
        {
            // Simplified Syntax which was introduced in C# 2.0
            MyDelegate delegateObject = Sum;

            // Execute the delegate object using the Invoke keyword
            int result = delegateObject(12, 15);

            /* Alternative Syntax:

            MyDelegate delegateObject = new MyDelegate(Sum);
            int result = delegateObject.Invoke(12, 15);

            */

            System.Console.WriteLine(result);
        }
    }
}
```

**Multicast Delegate Demonstration:**

```csharp
using System;

public delegate void MyDelegate(string msg);

public class ClassA
{
    public static void MethodA(string message)
    {
        Console.WriteLine("Called ClassA.MethodA() with parameter: " + message);
    }
}

public class ClassB
{
    public static void MethodB(string message)
    {
        Console.WriteLine("Called ClassB.MethodB() with parameter: " + message);
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        MyDelegate del1 = ClassA.MethodA;
        MyDelegate del2 = ClassB.MethodB;

        MyDelegate del = del1 + del2;
        Console.WriteLine("After del1 + del2");
        del("Hello World");

        // Lambda expressions achieve the same goal as anonymous methods but with a concise syntax.
        MyDelegate del3 = (string msg) => Console.WriteLine("Called lambda expression: " + msg);
        del += del3;
        Console.WriteLine("After del1 + del2 + del3");
        del("Hello World");

        del = del - del2;
        Console.WriteLine("After del - del2");
        del("Hello World");

        del -= del1;
        Console.WriteLine("After del1 - del1");
        del("Hello World");
    }
}
```

**Generic Delegate Demonstration:**

```csharp
using System;

public delegate T GenericAdd<T>(T param1, T param2);

public class Program
{
    public static int Sum(int val1, int val2)
    {
        return val1 + val2;
    }

    public static string Concat(string str1, string str2)
    {
        return str1 + str2;
    }

    public static void Main(string[] args)
    {
        GenericAdd<int> mySum = Sum;
        Console.WriteLine(mySum(10, 20));

        GenericAdd<string> myConcat = Concat;
        Console.WriteLine(myConcat("Hello ", "World!"));
    }
}
```

**Built-in Delegates:**

C# provides some built-in delegates that are useful for common purposes. These provide a shorthand notation that virtually eliminates the need to declare delegate types.

**Examples:**

- **Action**: used with methods that don’t return a value and have no parameter list.
- **Action<>**: used with methods that at least have one argument and don’t return a value.
- **Func<>**: used with methods that return a value and may have a parameter list.
- **Predicate<>**: represents a method that takes one input parameter and returns a bool value on the basis of some criteria.

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/
https://docs.microsoft.com/en-us/dotnet/api/system.delegate

### Anonymous Methods

Anonymous methods are introduced in C# 2.0. They can be assigned to delegate objects. An anonymous method is specified by using the ```delegate``` keyword followed by a method parameter list and body. This can simplify the delegate’s instantiation since a separate method will not have to be defined in order to instantiate the delegate.

```csharp
delegate void MyDelegate(string str);

public class Program
{
    public static void Main(string[] args)
    {
        MyDelegate delegateObj = delegate(string s)
        {
            System.Console.WriteLine(s);
        };

        delegateObj.Invoke("Hello World!");

        /* Alternative Syntax:
        delegateObj("Hello World!");
        */
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/anonymous-functions

### Lambda Expressions

Lambda expressions were introduced in C# 3.0. They achieve the same goal as anonymous methods, but with a more concise
syntax. A lambda expression is written as a parameter list followed by the lambda operator (=>) and an expression.

```csharp
namespace LambdaDemonstration
{
    delegate int MyDelegate(int i);

    public class Program
    {
        public static void Main(string[] args)
        {
            // Anonymous Method
            MyDelegate delegateObj1 = delegate(int x) { return x * x; };

            // Lambda expression
            MyDelegate delegateObj2 = (int x) => x * x;

            System.Console.WriteLine(delegateObj1(5)); // 25
            System.Console.WriteLine(delegateObj2(5)); // 25
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions

---

## Events

Events enable a class or object to notify other classes or objects when something of interest occurs. The class that sends (or raises) the event is called the **publisher** and the classes that receive (or handle) the event are called **subscribers**.

Think of an event as an **encapsulated delegate**; It is dependent on the delegate. The delegate defines the signature for the event handler method of the subscriber class. It also avoids overwriting of a method reference by restricting the use of the assignment ```=``` operator.

**Events Declaration:**

- **Step 1:** Declare a delegate.
- **Step 2:** Declare a variable of the delegate with event keyword.

**Basic Demonstration:**

```csharp
namespace EventDemonstration
{
    public delegate string MyDelegate(string str); // Declare the delegate.

    public class EventClass
    {
        event MyDelegate MyEvent; // Declare a variable of the delegate with event keyword.

        public EventClass() // The constructor
        {
            // Register with an event
            MyEvent += WelcomeUser;

            /* Alternative Syntax:
            this.MyEvent += new MyDelegate(this.WelcomeUser);
            */
        }

        public string WelcomeUser(string username)
        {
            return "Welcome " + username;
        }

        public static void Main(string[] args)
        {
            EventClass myObject = new EventClass();
            System.Console.Write(myObject.MyEvent("Amy"));
        }
    }
}
```

**Notes:**

- An event is a wrapper around a delegate. It depends on the delegate.
- Use "event" keyword with delegate type variable to declare an event.
- Use built-in delegate ```EventHandler``` or ```EventHandler<TEventArgs>``` for common events.
- The publisher class raises an event, and the subscriber class registers for an event and provides the event-handler method.
- Name the method which raises an event prefixed with "**On**" with the event name.
- The signature of the handler method must match the delegate signature.
- Register with an event using the ```+=``` operator.
- Unsubscribe an event using the ```-=``` operator.
- Pass event data using ```EventHandler<TEventArgs>```.
- Derive **EventArgs** base class to create custom event data class.
- Events can be declared ```static```, ```virtual```, ```sealed```, and ```abstract```.
- An **Interface** can include the event as a member.
- Event handlers are invoked **synchronously** if there are multiple **subscribers**.

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/events/

---

## Generics

Generics introduce the concept of type parameters to .NET, which make it possible to design classes and methods that defer the specification of one or more types until the class or method is declared and instantiated by client code.

```csharp
using System;
using System.Collections.Generic;

namespace Example
{
    class Program
    {
        class Stack<T>
        {
            int index = 0;
            T[] innerArray = new T[100];

            public void Push(T item)
            {
                innerArray[index++] = item;
            }

            public T Pop()
            {
                return innerArray[--index];
            }

            public T Get(int k) { return innerArray[k]; }
        }

        static void Main(string[] args)
        {
          // Defining a stack of integers
            Stack<int> intStack = new Stack<int>();
            intStack.Push(1);
            intStack.Push(2);
            intStack.Push(3);
            Console.WriteLine(intStack.Get(1)); // Output => 2

            // Defining a stack of strings
            Stack<string> strStack = new Stack<string>();
          strStack.Push("Jane");
            strStack.Push("James");
            strStack.Push("John");
            Console.WriteLine(strStack.Get(0)); // Output => Jane
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/

---

## Generic Collections

A collection is used to group related objects. Unlike an array, it is dynamic and can also group objects. A collection can grow and shrink to accommodate any number of objects. Collection classes are organized into namespaces and contain built in methods for processing elements within the collection.

A collection organizes related data in a computer so that it can be used efficiently. Different kinds of collections are suited to different kinds of applications, and some are highly specialized to specific tasks.

A collection typically includes methods to add, remove, and count objects. The ```for``` statement and the ```foreach``` statement are used to iterate through collections. Since a collection is a class you must first declare an instance of the class before you can add elements to that collection.

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/standard/generics/collections

### List

A list is similar to an array, but the elements in a list can be inserted and removed dynamically. The C# generic collection ```List<T>``` class requires all elements be of the same type ```T```.

```csharp
using System;
using System.Collections.Generic;

namespace SampleList
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> liNumbers = new List<int>();

            liNumbers.Add(59);
            liNumbers.Add(72);
            liNumbers.Add(95);
            liNumbers.Add(5);
            liNumbers.Add(9);
            liNumbers.RemoveAt(1); // remove 72

            Console.Write("\nList: ");
            for (int x = 0; x < liNumbers.Count; x++)
            {
                Console.Write($"{liNumbers[x]} "); // 59  95  5  9
            }

            liNumbers.Sort();

            Console.Write("\nSorted: ");
            for (int x = 0; x < liNumbers.Count; x++)
            {
                Console.Write($"{liNumbers[x]} "); // 5  9  59  95
            }
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1

### SortedList

A sorted list is a collection of key/value pairs that are sorted by key. A key can be used to access its corresponding value in the sorted list.

The C# generic collection ```SortedList<K, V>``` class requires all element key/value pairs to be of the same type ```K```, ```V```. Duplicate keys are not permitted, which ensures that every key/value pair is unique.

```csharp
using System;
using System.Collections.Generic;

namespace SampleSortedList
{
    class Program
    {
        static void Main(string[] args)
        {
            SortedList<string, int> slMarks = new SortedList<string, int>();

            slMarks.Add("Jane", 70);
            slMarks.Add("Kate", 30);
            slMarks.Add("James", 90);
            slMarks.Remove("Kate");

            Console.WriteLine("Sorted List: ");
            foreach (string s in slMarks.Keys)
            {
                Console.WriteLine($"{s} : {slMarks[s]}");  // Jane: 70  James: 90
            }

            Console.WriteLine($"Count: {slMarks.Count}");  // 2
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.sortedlist-2

### BitArray

A bit array is a collection of bits. The value of a bit can be either 0 (off/false) or 1 (on/true). Bit arrays compactly store bits. Most commonly, they are used to represent a simple group of boolean flags or an ordered sequence of boolean values.

```csharp
using System;
using System.Collections;
using System.Collections.Generic;

namespace SampleBitArray
 {
    class Program
    {
        // Printing BitArray
        public static void PrintBarr(string name, BitArray ba)
        {
            Console.Write(name + " : ");

            for (int x = 0; x < ba.Length; x++)
            {
                Console.Write(ba.Get(x) + " ");
            }

            Console.WriteLine();
        }

        public static void Main(string[] args)
        {
            BitArray ba1 = new BitArray(4);
            BitArray ba2 = new BitArray(4);

            ba1.SetAll(true);
            ba2.SetAll(false);

            ba1.Set(2, false);
            ba2.Set(3, true);

            PrintBarr("ba1", ba1);
            PrintBarr("ba2", ba2);

            Console.WriteLine();
            PrintBarr("ba1 AND ba2", ba1.And(ba2));
            PrintBarr("NOT ba2", ba2.Not());
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/api/system.collections.bitarray

### Stack

A stack is a Last In, First Out (LIFO) collection of elements where the last element that goes into the stack will be the first element that comes out.

Inserting an element onto a stack is called pushing. Deleting an element from a stack is called popping. Pushing and popping can be performed only at the top of the stack.

Stacks can be used to create undo-redo functionalities, parsing expressions (infix to postfix/prefix conversion), and much more.

The C# generic collection ```Stack<T>``` class requires all elements to be of the same type ```T```.

```csharp
using System;
using System.Collections.Generic;

namespace SampleStack
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack<int> s = new Stack<int>();

            s.Push(59);
            s.Push(72);
            s.Push(65);

            Console.Write("Stack: ");
            foreach (int i in s)
            {
                Console.Write(i + " ");  // 65  72  59
            }

            Console.WriteLine($"\nCount: {s.Count}");  // 3
            Console.WriteLine($"Top: {s.Peek()}");  // 65
            Console.WriteLine($"Pop: {s.Pop()}");  // 65

            Console.Write("\nStack: ");
            foreach (int i in s)
            {
                Console.Write(i + " "); // 72 59
            }
            Console.WriteLine($"\nCount: {s.Count}"); // Count: 2
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.stack-1

### Queue

A queue is a First In, First Out (FIFO) collection of elements where the first element that goes into a queue is also the first element that comes out.

Inserting an element into a queue is referred to as Enqueue. Deleting an element from a queue is referred to as Dequeue. Queues are used whenever we need to manage objects in order starting with the first one in.

The C# generic collection ```Queue<T>``` class requires that all elements be of the same type ```T```.

```csharp
using System;
using System.Collections.Generic;

namespace SampleQueue
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int> q = new Queue<int>();

            q.Enqueue(5);
            q.Enqueue(10);
            q.Enqueue(15);

            Console.Write("Queue: ");
            foreach (int i in q)
            {
                Console.Write(i + " "); // 5 10 15
            }

            Console.WriteLine($"\nCount: {q.Count} \n");  // Count: 3
            Console.WriteLine($"Dequeue: {q.Dequeue()} \n"); // Dequeue: 5

            Console.Write("Queue: ");
            foreach (int i in q)
            {
                Console.Write(i + " "); // Queue: 10 15
            }
            Console.WriteLine($"\nCount: {q.Count}"); // Count: 2
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.queue-1

### Dictionary

A dictionary is a collection of unique key/value pairs where a key is used to access the corresponding value. Dictionaries are used in database indexing, cache implementations, and so on.

The C# generic collection ```Dictionary<K, V>``` class requires all key/value pairs be of the same type ```K```, ```V```. Duplicate keys are not permitted to ensure that every key/value pair is unique.

```csharp
using System;
using System.Collections.Generic;

namespace SampleDictionary
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, int> d = new Dictionary<string, int>();

            d.Add("Uno", 1);
            d.Add("Dos", 2);
            d.Add("Tres", 3);

            d.Remove("Tres"); // Remove key-value pair Tres, 3

            Console.WriteLine("Dictionary: ");
            foreach (string s in d.Keys)
            {
                Console.Write($"{s} : {d[s]} "); // Uno: 1 Dos: 2
            }
            Console.WriteLine($"\nCount: {d.Count}"); // Count: 2
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2

### HashSet

A hash set is a set of unique values where duplicates are not allowed.

C# includes the ```HashSet<T>``` class in the generic collections namespace. All ```HashSet<T>``` elements are required to be of the same type ```T```.

Hash sets are different from other collections because they are simply a set of values. They do not have index positions and elements cannot be ordered.

The ```HashSet<T>``` class provides high-performance set operations. HashSets allow fast lookup, addition, and removal of items, and can be used to implement either dynamic sets of items or lookup tables that allow finding an item by its key.

```csharp
using System;
using System.Collections.Generic;

namespace SampleHashSet
{
    class Program
    {
        static void Main(string[] args)
        {
            HashSet<int> hs = new HashSet<int>();

            hs.Add(5);
            hs.Add(10);
            hs.Add(15);
            hs.Add(20);

            Console.Write("HashSet: ");
            foreach (int i in hs)
            {
                Console.Write(i + " ");
            }
            Console.WriteLine($"\nCount: {hs.Count}"); // Count: 4

            HashSet<int> hs2 = new HashSet<int>();
            hs2.Add(15);
            hs2.Add(20);
            Console.WriteLine("{15, 20} is a subset of {5, 10, 15, 20} : " + hs2.IsSubsetOf(hs));
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1

---

## Constants

### The ```const``` Keyword

A variable in C# can be made into a compile-time constant by adding the ```const``` keyword before the data type. This modifier means that the variable cannot be changed and it must therefore be assigned a value at the same time as it is declared. Any attempts to assign a new value to the constant will result in a compile-time error.

```csharp
static void Main(string[] args)
{
    const double Pi = 3.14159265358979323846; // compile-time constant
}
```

**Note:** Constant fields cannot have the static modifier. They are implicitly static and are accessed in the same way as static fields.

### The ```readonly``` Keyword

Another variable modifier similar to ```const``` is ```readonly```. It creates a runtime constant. This modifier can be applied to fields, and like ```const```, it makes the field unchangeable.

**Note 1:** Unlike const, ```readonly``` can be applied to any data type.

**Note 2:** a ```readonly``` field cannot only be initialized when it is declared. It can also be assigned a value in the constructor.

**Note 3:** Since a ```readonly``` field is assigned at runtime, it can be assigned a dynamic value that is not known until runtime.

**Note 4:** You can also mark a method’s return value as ```readonly``` when returning a value type by reference with the ```ref``` modifier. This will disallow the caller from modifying the returned value, provided that the returned value is also assigned as a readonly reference and not just a copy.

```csharp
class MyClass
{
    readonly static int i;

    static ref readonly int GetValue()
    {
        return ref i;
    }

    static void Main(string[] args)
    {
        ref readonly int myValue = ref GetValue();
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/constants
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/const

---

## Asynchronous Methods

An asynchronous method is a method that can **return** before it has finished executing. Any method that performs a potentially long-running task, such as accessing a web resource or reading a file, can be made asynchronous to improve the responsiveness of the program.

The ```async``` and ```await``` keywords allow asynchronous methods to be written with a simple structure that is similar to synchronous (regular) methods. The ```async``` modifier specifies that the method is asynchronous and that it can therefore contain one or more ```await``` expressions. An ```await``` expression consists of the ```await``` keyword followed by an awaitable method call.

```csharp
class MyApp
{
    async void MyAsync()
    {
        System.Console.Write("A");
        await System.Threading.Tasks.Task.Delay(2000);
        System.Console.Write("C");
    }
}

static void Main(string[] args)
{
    new MyApp().MyAsync();
    System.Console.Write("B");

    // Outputs: ABC
    System.Console.ReadKey(); // Prevents the console program from exiting before the async method has finished.
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/async
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/

---

## Working With Files

The System.IO namespace has various classes that are used for performing numerous operations with files, such as creating and deleting files, reading from or writing to a file, closing a file, and more. The File class is one of them.

Popular methods of the File class:

- **AppendAllText()** : Appends text to the end of the file.
- **Create()**        : Creates a file in the specified location.
- **Delete()**        : Deletes the specified file.
- **Exists()**        : Determines whether the specified file exists.
- **Copy()**          : Copies a file to a new location.
- **Move()**          : Moves a specified file to a new location

```csharp
using System;
using System.IO;

namespace Example
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = "Working with files in C#";
            File.WriteAllText("example.txt", str);

            string txt = File.ReadAllText("example.txt");
            Console.WriteLine(txt);
        }
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/api/system.io.file

---

## Language-Integrated Query (LINQ)

Language-Integrated Query (LINQ) is the name for a set of technologies based on the integration of query capabilities directly into the C# language. Traditionally, queries against data are expressed as simple strings without type checking at compile time or IntelliSense support.

```csharp
class LINQQueryExpressions
{
    static void Main()
    {
        // Specify the data source.
        int[] scores = new int[] { 97, 92, 81, 60 };

        // Define the query expression.
        IEnumerable<int> scoreQuery =
            from score in scores
            where score > 80
            select score;

        // Execute the query.
        foreach (int i in scoreQuery)
        {
            Console.Write(i + " ");
        }
    }
}
// Output: 97 92 81
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/linq/
https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/working-with-linq
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/

---

## Attributes

An attribute is a declarative tag that is used to convey information to runtime about the behaviors of various elements like classes, methods, structures, enumerators, assemblies etc. in your program. You can add declarative information to a program by using an attribute. A declarative tag is depicted by square ([ ]) brackets placed above the element it is used for.

Attributes are used for adding metadata, such as compiler instruction and other information such as comments, description, methods and classes to a program.

There are two types of Attributes implementations provided by the .NET Framework are:

- Predefined Attributes
- Custom Attributes

### Predefined Attributes

Predefined attributes are those attributes that are a part of the .NET Framework Class Library and are supported by the C# compiler for a specific purpose.

A few popular predefined attributes that are derived from the ```System.Attribute``` base class are given as follows:

| Attribute                   | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| AttributeUsageAttribute     | Specifies the usage of a different attribute.                |
| CLSCompliantAttribute       | Shows if a particular code element complies with the Common Language Specification |
| ContextStaticAttribute      | Indicates if a static field value is unique for the specified context |
| FlagsAttribute              | Indicates if a static field value is unique for the specified context |
| LoaderOptimizationAttribute | Sets the optimization policy for the default loader in the main method |
| NonSerializedAttribute      | Signifies that the field of the serializable class should not be serialized |
| ObsoleteAttribute           | Marks the code elements that are obsolete i.e. not in use anymore |
| SerializableAttribute       | Signifies that the field of the serializable class can be serialized |
| ThreadStaticAttribute       | Indicates that there is a unique static field value for each thread |
| DllImportAttribute          | Indicates that the method is a static entry point as shown by the unmanaged DLL |

```csharp
// C# program to demonstrate CLSCompliantAttribute giving a warning message
using System;

// CLSCompliantAttribute applied to entire assembly
[assembly:CLSCompliant(true)]

public class GFG
{
  public uint z;
}

class GFG2
{
  public static void Main(string[] args)
  {
      Console.WriteLine("Demonstrating the CLSCompliantAttribute");
  }
}
```

### Custom Attributes

Custom attributes can be created in C# for attaching declarative information to methods, assemblies, properties, types, etc. in any way required. This increases the extensibility of the .NET framework.

```csharp
// C# program to demonstrate Custom Attributes
using System;

// AttributeUsage specifies the usage of InformationAttribute
[AttributeUsage(AttributeTargets.Class |
              AttributeTargets.Constructor |
                AttributeTargets.Method, AllowMultiple = true)]

// InformationAttribute is a custom attribute class that is derived from Attribute class
class InformationAttribute : Attribute
{
    public string InformationString{ get; set; }
}

// InformationAttribute is used in student class
[Information(InformationString = "Class")] public class student
{
    private int rollno;
    private string name;

    [Information(InformationString = "Constructor")] public student(int rollno, string name)
    {
        this.rollno = rollno;
        this.name = name;
    }

    [Information(InformationString = "Method")] public void display()
    {
        Console.WriteLine($"Roll Number: {rollno}");
        Console.WriteLine($"Name: {name}");
    }
}

public class GFG
{
    public static void Main(string[] args)
    {
        student s = new student(1001, "Jane Doe");
        s.display();
    }
}
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/

### Extension Methods

Extension methods enable you to "add" methods to existing types without creating a new derived type, recompiling, or otherwise modifying the original type. Extension methods are static methods, but they're called as if they were instance methods on the extended type. 

The following example shows an extension method defined for the System.String class:

```csharp
namespace ExtensionMethods
{
    public static class MyExtensions
    {
        public static int WordCount(this string str)
        {
            return str.Split(new char[] { ' ', '.', '?' },
                             StringSplitOptions.RemoveEmptyEntries).Length;
        }
    }
}
```

It can be called from an application by using this syntax:

```csharp
string s = "Hello Extension Methods";
int i = s.WordCount();
```

**Learn More:**
https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods

---

## References

**Official C# Documentation:**
https://docs.microsoft.com/en-us/dotnet/csharp/

**Official C# Language Reference:**
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/

**Official Unity User Manual:**
https://docs.unity3d.com/Manual/index.html

---

## Credits

**Prepared By:**

- [ConstructG.com](https://constructg.com)
- [Labinator.com](https://labinator.com)

**Based On:**

- This guide has used several examples and definitions from the [Microsoft's .NET documentation](https://docs.microsoft.com/en-us/dotnet/).
