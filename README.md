# The Ultimate C# Comprehensive Cheatsheet

> By [ConstructG.com](https://constructg.com) – The Ultimate C# Learning Platform (Covers DSA, Avalonia UI, and Unity)

> Covering C# 14+

*A guide to the C# language, which provides the syntax and structure for programming on the .NET platform. It works in conjunction with the .NET Base Class Library (BCL) for core functionalities like collections and I/O.*

## Table of Contents

- [The Ultimate C# Comprehensive Cheatsheet](#the-ultimate-c-comprehensive-cheatsheet)
  - [Table of Contents](#table-of-contents)
  - [**1. Core Concepts \& Program Structure**](#1-core-concepts--program-structure)
    - [**Program Entry Point**](#program-entry-point)
    - [**Basic Syntax**](#basic-syntax)
    - [**`using` Directives**](#using-directives)
    - [**Keywords**](#keywords)
    - [**Variables and Data Types**](#variables-and-data-types)
    - [**Nullable Context**](#nullable-context)
    - [**Literals**](#literals)
  - [**2. Operators and Control Flow**](#2-operators-and-control-flow)
    - [**Operators**](#operators)
    - [**Control Flow (Conditionals)**](#control-flow-conditionals)
    - [**Control Flow (Loops)**](#control-flow-loops)
    - [**Jump Statements**](#jump-statements)
  - [**3. Object-Oriented Programming (OOP)**](#3-object-oriented-programming-oop)
    - [**Types: The Blueprints of Your Application**](#types-the-blueprints-of-your-application)
    - [**Members: The Building Blocks of a Type**](#members-the-building-blocks-of-a-type)
    - [**Constructors \& Initialization**](#constructors--initialization)
    - [**Properties: Smart Fields**](#properties-smart-fields)
    - [**Inheritance: "Is-A" Relationships**](#inheritance-is-a-relationships)
    - [**Encapsulation: Hiding Complexity**](#encapsulation-hiding-complexity)
    - [**Extension Methods: Adding New Behavior**](#extension-methods-adding-new-behavior)
    - [**Enums: Type-Safe Constants**](#enums-type-safe-constants)
  - [**4. Common Collections \& Data Structures**](#4-common-collections--data-structures)
    - [**Arrays**](#arrays)
    - [**`IEnumerable<T>`: The Heart of Iteration**](#ienumerablet-the-heart-of-iteration)
    - [**Common BCL Collections**](#common-bcl-collections)
    - [**Collection Expressions (C# 12)**](#collection-expressions-c-12)
  - [**5. Resource Management**](#5-resource-management)
    - [**The `IDisposable` Interface: The Standard Cleanup Contract**](#the-idisposable-interface-the-standard-cleanup-contract)
    - [**`using` Statement and Declaration: The Safest Way to Manage Resources**](#using-statement-and-declaration-the-safest-way-to-manage-resources)
    - [**Finalizers (`~`): The Safety Net**](#finalizers--the-safety-net)
  - [**6. Advanced Language Constructs**](#6-advanced-language-constructs)
    - [**Generics: Reusable, Type-Safe Code**](#generics-reusable-type-safe-code)
    - [**Delegates and Events: The Foundation of Callbacks**](#delegates-and-events-the-foundation-of-callbacks)
    - [**Lambda Expressions: Anonymous Functions**](#lambda-expressions-anonymous-functions)
    - [**Tuples and Deconstruction**](#tuples-and-deconstruction)
    - [**Iterators (`yield return`)**](#iterators-yield-return)
    - [**Pattern Matching**](#pattern-matching)
    - [**Anonymous and Dynamic Types**](#anonymous-and-dynamic-types)
  - [**7. Concurrency, Parallelism, and Asynchrony**](#7-concurrency-parallelism-and-asynchrony)
    - [**Asynchronous Programming (`async` / `await`)**](#asynchronous-programming-async--await)
    - [**Parallel Programming: Using Multiple Cores**](#parallel-programming-using-multiple-cores)
    - [**Synchronization: Managing Shared State**](#synchronization-managing-shared-state)
  - [**8. Compilation, Metadata, and Interop**](#8-compilation-metadata-and-interop)
    - [**Reflection: Inspecting Code at Runtime**](#reflection-inspecting-code-at-runtime)
    - [**Attributes: Declarative Metadata for Your Code**](#attributes-declarative-metadata-for-your-code)
    - [**Assemblies: The Unit of Deployment**](#assemblies-the-unit-of-deployment)
    - [**Preprocessor Directives**](#preprocessor-directives)
    - [**XML Documentation Comments**](#xml-documentation-comments)
    - [**Unsafe Code \& Interop: Talking to the Outside World**](#unsafe-code--interop-talking-to-the-outside-world)
  - [**9. What's New: C# 11–14 Highlights**](#9-whats-new-c-1114-highlights)
    - [**C# 11 (Released with .NET 7)**](#c-11-released-with-net-7)
    - [**C# 12 (Released with .NET 8)**](#c-12-released-with-net-8)
    - [**C# 13 (Released with .NET 9)**](#c-13-released-with-net-9)
    - [**C# 14 (Released with .NET 10)**](#c-14-released-with-net-10)
  - [**10. Coding Style \& Best Practices**](#10-coding-style--best-practices)
    - [**Naming and Layout Conventions**](#naming-and-layout-conventions)
    - [**Performance Best Practices**](#performance-best-practices)
    - [**Error Handling Best Practices**](#error-handling-best-practices)
  - [**11. Best Resources for C#**](#11-best-resources-for-c)
    - [**Official Microsoft Documentation (The Source of Truth)**](#official-microsoft-documentation-the-source-of-truth)
    - [**Interactive Learning \& Tutorials**](#interactive-learning--tutorials)
    - [**Coding Style Guides**](#coding-style-guides)
    - [**Premium Learning Resources**](#premium-learning-resources)

---

## **1. Core Concepts & Program Structure**

This section covers the essential, non-negotiable building blocks of any C# program. Understanding these concepts is the first step to writing C# code.

### **Program Entry Point**

Every C# application needs a starting point. This is a special method where the program begins its execution. There can only be one entry point in a project.

*   **Traditional `Main` Method (The Classic Approach)**
    This is a static method (meaning it belongs to the class itself, not an object instance) named `Main`. It is placed inside a `class` or a `struct`.

    **Example:**
    ```csharp
    // Define a namespace to organize your code
    namespace MyFirstApp
    {
        // Define a class to contain your methods and data
        class Program
        {
            // The Main method is the entry point.
            // 'void' means it does not return a value.
            // 'string[] args' is an optional parameter to receive command-line arguments.
            public static void Main(string[] args)
            {
                // This line will be executed when the program starts.
                Console.WriteLine("Hello from the Main method!");
            }
        }
    }
    ```

*   **Top-Level Statements (The Modern, Simple Approach)**
    Introduced in C# 9, this feature allows you to write your program's code directly in a file, usually `Program.cs`. The compiler automatically creates the necessary `class` and `Main` method for you. This is ideal for smaller applications, learning, and reducing boilerplate code.

    **Example:**
    ```csharp
    // This is a complete, runnable C# program.
    // There is no need for a namespace, class, or Main method declaration.
    // In modern .NET, common namespaces like System are globally imported by default.

    Console.WriteLine("Hello from a top-level statement!");

    // You can even process command-line arguments, which are available via a "magic" args variable.
    if (args.Length > 0)
    {
        Console.WriteLine($"You provided an argument: {args[0]}");
    }
    ```

> **Note:** Only one file in your entire project can use top-level statements.

### **Basic Syntax**

*   **Statements and Expressions**
    Think of a **statement** as a complete command in C#. An **expression** is a piece of code that evaluates to a single value. Statements are often made up of expressions.

    ```csharp
    // '5 + 10' is an expression that evaluates to the value 15.
    // The entire line is an assignment statement that assigns the result to the 'result' variable.
    int result = 5 + 10;
    ```

*   **Code Blocks (`{}`): Scope and Grouping**
    Curly braces create a code block. They group multiple statements together. Importantly, a code block defines a **scope**—variables declared inside a block are generally not accessible outside of it.

    ```csharp
    void MyMethod()
    { // Start of method block
        int value = 10;

        if (value == 10)
        { // Start of 'if' block
            string message = "The value is 10.";
            Console.WriteLine(message); // 'message' is accessible here.
        } // End of 'if' block

        // The next line would cause an error, because 'message' only exists inside the 'if' block.
        // Console.WriteLine(message);
    } // End of method block
    ```

*   **Semicolons (`;`): The Statement Terminator**
    The semicolon is how you tell the compiler you've finished a statement. Forgetting it is a common error for beginners.

    ```csharp
    Console.WriteLine("First statement");
    Console.WriteLine("Second statement"); // Each command ends with a semicolon.
    ```

### **`using` Directives**

The `using` keyword helps manage types and namespaces to keep code clean and readable.

*   **`using <namespace>;`**: This imports all the types from a namespace, so you don't have to type out the full name every time.

    ```csharp
    // Without 'using':
    System.Text.StringBuilder sb1 = new System.Text.StringBuilder();

    // With 'using':
    using System.Text;
    StringBuilder sb2 = new StringBuilder(); // Much cleaner!
    ```

*   **`using <alias> = <namespace_or_type>;`**: This creates a shorter alias for a type or namespace. It's useful for resolving naming conflicts or for simplifying long, complex type names.

    ```csharp
    // Alias for a long, nested class name
    using MyProjectConfig = MyCompany.MyProject.Configuration.Settings;

    // C# 12 and later: Alias for any type, like a tuple
    using Location = (double Latitude, double Longitude);

    // Now use the aliases
    MyProjectConfig config = new MyProjectConfig();
    Location officeLocation = (47.6, -122.3);
    ```

*   **`global using <...>;`**: This applies a `using` directive to **all** source files in your project. It's perfect for commonly used namespaces like `System` or `System.Collections.Generic`. These are typically placed in a dedicated file like `GlobalUsings.cs`.

    ```csharp
    // In GlobalUsings.cs:
    global using System;
    global using System.Collections.Generic;
    global using System.Linq;

    // In any other .cs file in the project, you can now use List<T> or Console without adding a 'using' directive.
    ```

### **Keywords**

Keywords are reserved words that are fundamental to the C# language.

*   **Reserved Keywords:** These have a fixed meaning and cannot be used as variable names (e.g., `class`, `int`, `if`).
*   **Contextual Keywords:** These only have a special meaning in a specific context (e.g., `var`, `yield`, `where`). Outside that context, you can use them as variable names.

    ```csharp
    string from = "Alice"; // 'from' is a contextual keyword used in LINQ, but is fine as a variable name here.
    var query = from person in people where person.Name == "Bob" select person; // Here, 'from' and 'where' are used as keywords.
    ```
    > **Tip:** If you must use a keyword as an identifier (e.g., when interacting with code from another language), you can prefix it with `@`. For example: `string @class = "My CSS Class";`.

### **Variables and Data Types**

The distinction between value and reference types is one of the most important concepts in C#.

*   **Value Types:** These variables hold their data directly. Copying a value type creates a complete, independent duplicate.
    *   **Examples:** `int`, `float`, `char`, `bool`, `decimal`, all `struct` types, all `enum` types.

    ```csharp
    int a = 10;
    int b = a; // 'b' gets a copy of the value of 'a'.
    b = 20;    // Changing 'b' does NOT affect 'a'.

    Console.WriteLine(a); // Output: 10
    Console.WriteLine(b); // Output: 20
    ```

*   **Reference Types:** These variables hold a *reference* (like an address) to where the data is stored in memory. Copying a reference type copies the *address*, not the data. Both variables point to the same object.
    *   **Examples:** `string`, `object`, all arrays (`int[]`), all `class`, `interface`, and `delegate` types.

    ```csharp
    public class MyNumber { public int Value { get; set; } }

    MyNumber x = new MyNumber { Value = 10 };
    MyNumber y = x; // 'y' gets a copy of the reference from 'x'. Both point to the same object.
    y.Value = 20;   // Changing the data through 'y' affects the one object.

    Console.WriteLine(x.Value); // Output: 20
    Console.WriteLine(y.Value); // Output: 20
    ```

*   **Type Inference (`var`):** The `var` keyword instructs the compiler to figure out the type of the variable from the value it's assigned. The variable is still strongly typed—its type is locked in at compile time.

    ```csharp
    var myAge = 30; // Compiler infers this is an 'int'.
    var myName = "John"; // Compiler infers this is a 'string'.

    // The next line would cause an error because myAge was declared as an int.
    // myAge = "some text";
    ```

### **Nullable Context**

This modern C# feature helps you avoid the most common cause of crashes: `System.NullReferenceException`.

*   **Nullable Value Types (`T?`):** A value type normally cannot be `null`. By adding a `?`, you create a special wrapper (`System.Nullable<T>`) that allows it to hold either a value or `null`.

    ```csharp
    int nonNullableInt = null; // Error: Cannot assign null to a non-nullable value type.

    int? nullableInt = null; // This is perfectly valid.
    if (nullableInt.HasValue)
    {
        Console.WriteLine(nullableInt.Value); // Safely get the value
    }
    ```

*   **Nullable Reference Types (`T?`):** In a nullable-enabled project, the compiler assumes all standard reference types (like `string`) should *not* be null and warns you if you might be using one before checking it. Use `?` to declare that a variable is *expected* and *allowed* to be null.

    ```csharp
    // In a nullable-enabled context:
    string name = null; // Compiler warning: Converting null literal to non-nullable type.

    string? description = null; // OK: This is explicitly declared as nullable.

    // If you try to use 'description' without a check, you get another warning.
    Console.WriteLine(description.Length); // Warning: 'description' may be null here.
    ```

### **Literals**

A literal is a value written directly in your code.

*   **Numeric:** `42` (int), `3.14f` (float), `9.99m` (decimal), `1_000_000` (int with digit separators).
*   **Character and String:** `'C'` (char), `"Hello, World!"` (string).
*   **Raw String Literals:** Perfect for multi-line text or text containing quotes and backslashes (like file paths or JSON). They begin and end with at least three double-quotes (`"""`).

    ```csharp
    // Old way, with escape characters
    string filePathOld = "C:\\Users\\Default\\Documents\\file.txt";

    // New way with a raw string literal
    string filePathNew = """C:\Users\Default\Documents\file.txt""";

    // For multi-line JSON
    string json = """
    {
      "name": "Widget",
      "available": true
    }
    """;
    ```
*   **UTF-8 String Literals:** The `u8` suffix creates a byte representation of a string encoded in UTF-8, which is the standard for the web. This is a performance optimization as it avoids converting the string at runtime.

    ```csharp
    // This creates a ReadOnlySpan<byte> directly from the literal.
    // It does not allocate a string on the heap first.
    ReadOnlySpan<byte> utf8Data = "Some API data"u8;
    ```
---

## **2. Operators and Control Flow**

This section explores how to perform operations on data and control the path of execution your program takes, enabling it to make decisions and repeat actions.

### **Operators**

Operators are special symbols that perform operations on one or more operands (variables or values) to produce a result.

*   **Arithmetic Operators:** For performing mathematical calculations.
    *   `+` (Addition), `-` (Subtraction), `*` (Multiplication), `/` (Division)
    *   `%` (Modulo/Remainder): Returns the remainder of a division. `10 % 3` is `1`.
    *   `++` (Increment): Increases a value by 1. `x++` is a post-increment, `++x` is a pre-increment.
    *   `--` (Decrement): Decreases a value by 1.

    ```csharp
    int a = 10;
    int b = 3;
    Console.WriteLine($"Sum: {a + b}");         // Output: Sum: 13
    Console.WriteLine($"Remainder: {a % b}"); // Output: Remainder: 1

    int c = 5;
    c++; // c is now 6
    Console.WriteLine($"Incremented: {c}");   // Output: Incremented: 6
    ```

*   **Assignment Operators:** For assigning values to variables.
    *   `=` (Simple Assignment): Assigns the value on the right to the variable on the left.
    *   **Compound Assignment:** A shorthand for performing an operation and assigning the result. Examples: `+=`, `-=`, `*=`, `/=`, `%=`.
    *   **User-Defined Compound Assignment (C# 14):** You can now define custom implementations for compound assignment operators in your own types.

    ```csharp
    int score = 100; // Simple assignment

    score += 10; // Equivalent to: score = score + 10;
    Console.WriteLine($"New score: {score}"); // Output: New score: 110
    
    // C# 14 User-Defined Compound Assignment Example
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
    
    var wallet = new Money(100);
    wallet += new Money(50); // Uses the custom += operator, applying the discount
    Console.WriteLine(wallet.Amount); // Output: 145 (100 + 45)
    ```

*   **Comparison Operators:** For comparing two operands. They always return a `bool` (`true` or `false`).
    *   `==` (Equal to)
    *   `!=` (Not equal to)
    *   `<` (Less than), `>` (Greater than)
    *   `<=` (Less than or equal to), `>=` (Greater than or equal to)

    ```csharp
    int playerLevel = 10;
    bool isHighLevel = playerLevel >= 20;
    Console.WriteLine($"Is high level? {isHighLevel}"); // Output: Is high level? False
    ```

*   **Logical Operators:** For performing logical "AND", "OR", and "NOT" operations, typically on `bool` values.
    *   `&&` (Conditional AND): Both operands must be `true` for the result to be `true`. It short-circuits: if the first operand is `false`, the second is never evaluated.
    *   `||` (Conditional OR): If either operand is `true`, the result is `true`. It short-circuits: if the first operand is `true`, the second is never evaluated.
    *   `!` (Logical NOT): Inverts a `bool` value. `!true` becomes `false`.

    ```csharp
    bool hasKey = true;
    int mana = 50;

    // Player can open the door if they have the key AND enough mana.
    if (hasKey && mana > 30)
    {
        Console.WriteLine("Door opened!");
    }
    ```

*   **Null-Coalescing and Null-Conditional Operators:** For working safely and concisely with `null` values.
    *   **Null-Coalescing Operator (`??`):** Provides a default value when a nullable variable is `null`. It says, "if the thing on the left is `null`, use the value on the right instead."

        ```csharp
        string? playerName = null;
        string displayName = playerName ?? "Guest"; // If playerName is null, use "Guest"
        Console.WriteLine(displayName); // Output: Guest
        ```

    *   **Null-Conditional Operator (`?.`):** Safely accesses a member (a property or method) of an object that might be `null`. If the object is `null`, the expression stops evaluating and returns `null` instead of throwing a `NullReferenceException`.

        ```csharp
        public class Player { public string? Name { get; set; } }
        Player? currentPlayer = null;

        // Without the operator, this line would crash:
        // int nameLength = currentPlayer.Name.Length;

        // With the operator, it safely returns null.
        int? nameLength = currentPlayer?.Name?.Length; // The '?' stops execution at each step if null.
        Console.WriteLine(nameLength.HasValue); // Output: False
        ```
        
    *   **Null-Conditional Assignment Operator (`?.=`):** (C# 14) Allows assignment to occur conditionally when the receiver is non-null. If the receiver is `null`, the assignment is skipped entirely.

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

### **Control Flow (Conditionals)**

Conditional statements allow your program to execute different blocks of code based on whether a condition is `true` or `false`.

*   **`if`, `else if`, `else` Statement:** The fundamental decision-making structure.

    ```csharp
    int temperature = 25;

    if (temperature > 30)
    {
        Console.WriteLine("It's hot outside.");
    }
    else if (temperature > 15) // You can have zero or more 'else if' blocks.
    {
        Console.WriteLine("It's a pleasant day.");
    }
    else // The 'else' block is optional and runs if no preceding conditions were true.
    {
        Console.WriteLine("It's cold, bring a jacket.");
    }
    ```

*   **`switch` Statement and Expression:** A powerful way to branch execution based on a pattern match against a single variable.

    *   **Classic `switch` Statement:** Good for simple value matching.
        ```csharp
        int dayOfWeek = 3;
        string dayName;

        switch (dayOfWeek)
        {
            case 1:
                dayName = "Monday";
                break; // 'break' is required to exit the switch.
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            default: // Runs if no other case matches.
                dayName = "Unknown";
                break;
        }
        ```

    *   **Modern `switch` Expression:** A more concise, expression-based syntax that *returns a value*. It's often preferred for its readability.
        ```csharp
        int dayOfWeek = 3;
        string dayName = dayOfWeek switch
        {
            1 => "Monday",
            2 => "Tuesday",
            3 => "Wednesday",
            _ => "Unknown" // The underscore '_' is a discard pattern, acting as the 'default' case.
        };
        ```

*   **Ternary Conditional Operator (`?:`):** A compact shorthand for a simple `if-else` statement that produces a value.

    ```csharp
    // Long version with if-else
    int points = 10;
    string result;
    if (points > 5) {
        result = "You win!";
    } else {
        result = "You lose.";
    }

    // Short version with ternary operator
    string resultTernary = (points > 5) ? "You win!" : "You lose.";
    ```

### **Control Flow (Loops)**

Loops are used to execute a block of code repeatedly.

*   **`for` Loop:** Best when you know in advance how many times you want to execute the loop. It consists of three parts: an initializer, a condition, and an iterator.
    ```csharp
    // (1) Initializer: runs once before the loop starts.
    // (2) Condition: checked before each iteration. If false, the loop stops.
    // (3) Iterator: runs after each iteration.
    for (int i = 0; i < 5; i++)
    {
        Console.WriteLine($"Current count: {i}");
    }
    ```

*   **`foreach` Loop:** The simplest and most common way to iterate over every element in a collection (like a `List<T>` or an array).
    ```csharp
    var names = new List<string> { "Alice", "Bob", "Charlie" };

    foreach (var name in names)
    {
        Console.WriteLine($"Hello, {name}!");
    }
    ```

*   **`while` Loop:** Repeats a block of code as long as a specified condition is `true`. The condition is checked *before* each loop iteration.
    ```csharp
    int stock = 5;
    while (stock > 0)
    {
        Console.WriteLine($"Selling an item. Stock remaining: {stock}");
        stock--; // It's crucial to change the condition variable inside the loop to avoid an infinite loop.
    }
    ```

*   **`do-while` Loop:** Similar to a `while` loop, but the condition is checked *after* the loop's body. This guarantees the code block will execute at least once.
    ```csharp
    string? password;
    do
    {
        Console.WriteLine("Enter your password:");
        password = Console.ReadLine();
    } while (string.IsNullOrEmpty(password)); // The loop continues until a password is provided.
    ```

### **Jump Statements**

Jump statements allow you to interrupt the normal flow of loops and methods.

*   **`break`:** Immediately terminates the innermost loop (`for`, `foreach`, `while`, `do-while`) or a `switch` statement.
    ```csharp
    for (int i = 0; i < 100; i++)
    {
        if (i == 5)
        {
            break; // Stop the loop when i is 5.
        }
        Console.WriteLine(i); // Will only print 0, 1, 2, 3, 4.
    }
    ```

*   **`continue`:** Skips the remainder of the current iteration and proceeds directly to the next one.
    ```csharp
    for (int i = 0; i < 5; i++)
    {
        if (i == 2)
        {
            continue; // Skip the number 2.
        }
        Console.WriteLine(i); // Will print 0, 1, 3, 4.
    }
    ```

*   **`return`:** Exits the method it appears in. It can also send a value back to the code that called the method.
    ```csharp
    public int Add(int a, int b)
    {
        // This line exits the method and sends the sum back to the caller.
        return a + b;
    }
    ```

---

## **3. Object-Oriented Programming (OOP)**

Object-Oriented Programming is a paradigm based on the concept of "objects," which can contain data (in the form of fields or properties) and code (in the form of methods). OOP helps you structure complex programs into reusable, modular, and easy-to-maintain blueprints.

### **Types: The Blueprints of Your Application**

In C#, you create blueprints for objects using `class`, `struct`, `record`, and `interface`.

*   **`class`:** The most fundamental OOP type.
    *   **Type:** A reference type (stored as a reference to a location in memory).
    *   **Purpose:** The standard blueprint for creating objects that have data (state) and behavior (methods). Ideal for complex objects, services, and entities that have identity.
    *   **Example:**
        ```csharp
        public class Car
        {
            // Fields and properties to hold data
            public string Model = "Model S";
            public int Year = 2024;

            // Method to represent behavior
            public void StartEngine()
            {
                Console.WriteLine("Engine started.");
            }
        }

        // To use the blueprint, you create an 'instance' (an object)
        Car myCar = new Car();
        Console.WriteLine(myCar.Model); // Access data
        myCar.StartEngine();             // Call a method
        ```

*   **`struct`:** A lightweight type for data-centric structures.
    *   **Type:** A value type (the variable holds the data directly).
    *   **Purpose:** Best for small, simple data structures that don't have complex behavior and where performance is key (e.g., representing a point in 2D space, a color, or a single measurement).
    *   **Example:**
        ```csharp
        public struct Point
        {
            public int X;
            public int Y;
        }

        Point p1 = new Point { X = 10, Y = 20 };
        Point p2 = p1; // Creates a complete copy of p1.
        p2.X = 30;     // Changing p2 does not affect p1.
        Console.WriteLine(p1.X); // Output: 10
        ```

*   **`record`:** A modern type for immutable data models.
    *   **Type:** Can be a reference type (`record` or `record class`) or a value type (`record struct`).
    *   **Purpose:** Designed primarily for storing data. The compiler automatically generates methods for value-based equality (two records are equal if their data is equal), a `ToString()` override, and non-destructive mutation (`with` expressions). This makes them perfect for Data Transfer Objects (DTOs) and functional-style programming.
    *   **Example:**
        ```csharp
        public record Person(string FirstName, string LastName);

        var person1 = new Person("John", "Doe");
        var person2 = new Person("John", "Doe");

        Console.WriteLine(person1); // Output: Person { FirstName = John, LastName = Doe }
        Console.WriteLine(person1 == person2); // Output: True (value-based equality)

        // Create a new record based on an old one, but with one property changed
        var person3 = person1 with { FirstName = "Jane" };
        Console.WriteLine(person3); // Output: Person { FirstName = Jane, LastName = Doe }
        ```

*   **`interface`:** A contract or a set of rules.
    *   **Type:** A reference type that defines a set of method signatures, properties, or events.
    *   **Purpose:** An interface specifies *what* a class or struct can do, but not *how* it does it. It allows for polymorphism, enabling different classes to be treated interchangeably if they implement the same interface.
    *   **Example:**
        ```csharp
        // The contract: anything that is "drivable" must have these capabilities.
        public interface IDrivable
        {
            void Start();
            void Stop();
            int CurrentSpeed { get; }
        }

        // This class promises to follow the IDrivable contract.
        public class Truck : IDrivable
        {
            public int CurrentSpeed { get; private set; }
            public void Start() { /* ... implementation ... */ }
            public void Stop() { /* ... implementation ... */ }
        }
        ```

### **Members: The Building Blocks of a Type**

Members are the fields, methods, properties, and events that make up a type.

*   **Fields:** Simple variables that belong to a class or struct. They should generally be kept `private` to control how data is accessed.
    ```csharp
    public class Account
    {
        private decimal _balance; // A private field to store the balance.
    }
    ```
*   **Methods:** Blocks of code that perform an action. They define the behavior of an object.
    ```csharp
    public class Calculator
    {
        public int Add(int a, int b) // A public method.
        {
            return a + b;
        }
    }
    ```
*   **Properties:** A more advanced way to expose data. They look like fields from the outside but are implemented with `get` and `set` methods (called accessors). This allows you to add logic, like validation or calculation, when data is read or written.
    ```csharp
    public class Employee
    {
        private string _name; // The private backing field

        public string Name // The public property
        {
            get { return _name; } // Logic to run when reading the property
            set
            {
                if (string.IsNullOrEmpty(value)) // Logic to run when assigning a value
                {
                    throw new ArgumentException("Name cannot be empty.");
                }
                _name = value;
            }
        }
    }
    ```
*   **Indexers:** Allow an object to be indexed like an array.
    ```csharp
    public class Team
    {
        private string[] _players = new string[5];
        public string this[int index] // The indexer
        {
            get { return _players[index]; }
            set { _players[index] = value; }
        }
    }
    var myTeam = new Team();
    myTeam[0] = "Alice"; // Use the indexer to set a value.
    ```
*   **Events:** A mechanism that allows a class to send notifications to other objects when something happens. This enables a publish/subscribe pattern.
    ```csharp
    public class Button
    {
        public event Action? Clicked; // 'Action' is a delegate type for a method with no parameters.
        public void SimulateClick() => Clicked?.Invoke(); // Fire the event
    }
    ```

### **Constructors & Initialization**

A constructor is a special method that is called when an object is created (`new`). Its job is to initialize the object's data.

*   **Instance Constructor:** The most common type. It runs every time a new instance of an object is created.
    ```csharp
    public class User
    {
        public string Username { get; }
        // Constructor to initialize the User object
        public User(string username)
        {
            Username = username;
        }
    }
    var user = new User("guest"); // Calls the constructor
    ```
*   **Static Constructor:** Runs only once per type, before the first instance is created or any static members are referenced. Used to initialize static data.
    ```csharp
    public class AppSettings
    {
        public static readonly string ConnectionString;
        // Static constructor runs once to load settings
        static AppSettings()
        {
            ConnectionString = "server=..."; // Load from a file or service
        }
    }
    ```
*   **Primary Constructors (C# 12):** A concise syntax for declaring constructors whose parameters are available throughout the body of the type.
    ```csharp
    // The parameters (name, level) are available anywhere inside the class.
    public class Player(string name, int level)
    {
        public string Name { get; } = name;
        public int Level { get; } = level;

        public void DisplayInfo()
        {
            // You can use the primary constructor parameters directly
            Console.WriteLine($"{name} is at level {level}.");
        }
    }
    ```
*   **Object Initializers:** A syntax to set the values of public properties at the time of creation, right after the constructor is called.
    ```csharp
    var book = new Book
    {
        Title = "The Hobbit",
        Author = "J.R.R. Tolkien",
        Year = 1937
    };
    ```

### **Properties: Smart Fields**

Properties provide a flexible and safe way to expose class data.

*   **Auto-Implemented Properties:** A shorthand for when you don't need custom logic in your `get` or `set` accessors. The compiler creates a private backing field for you automatically.
    ```csharp
    // The compiler generates a private string field behind the scenes.
    public string Title { get; set; }
    ```
*   **`init`-Only Setters:** Creates an immutable property. The property can only be set during object initialization (in the constructor or an object initializer). It cannot be changed afterward.
    ```csharp
    public class Transaction
    {
        public Guid TransactionId { get; init; } // Can only be set once
        public decimal Amount { get; set; }
    }
    var tx = new Transaction { TransactionId = Guid.NewGuid() };
    // tx.TransactionId = Guid.NewGuid(); // Error: Cannot change an init-only property.
    ```
*   **`required` Members (C# 11):** Forces the caller to initialize a property or field in an object initializer. This ensures that important data is never forgotten.
    ```csharp
    public class Message
    {
        public required string From { get; set; }
        public required string To { get; set; }
        public string? Subject { get; set; } // This one is optional.
    }
    // var msg = new Message(); // Error: 'From' and 'To' are required.
    var msg = new Message { From = "a@a.com", To = "b@b.com" }; // OK
    ```*   **`field` Keyword (C# 14):** Provides access to the auto-generated backing field of an auto-implemented property. This lets you add logic without having to define your own backing field manually.
    ```csharp
    public class Person
    {
        public string Name
        {
            get => field;
            // Use 'field' to access the backing field inside the property's accessors.
            set => field = value.Trim();
        }
    }
    ```

### **Inheritance: "Is-A" Relationships**

Inheritance allows you to create a new class (a *derived* class) that reuses, extends, and modifies the behavior defined in another class (a *base* class).

*   **`base` and Derived Classes:** The derived class inherits all the non-private members of the base class.
    ```csharp
    // Base class
    public class Animal
    {
        public void Eat() { Console.WriteLine("Eating..."); }
    }

    // Derived class 'Dog' inherits from 'Animal'. A Dog "is an" Animal.
    public class Dog : Animal
    {
        public void Bark() { Console.WriteLine("Woof!"); }
    }

    Dog myDog = new Dog();
    myDog.Eat();  // Inherited from Animal
    myDog.Bark(); // Defined in Dog
    ```
*   **`virtual` and `override`:** The base class can mark a method as `virtual`, meaning derived classes are allowed to provide their own implementation for it using the `override` keyword. This is a key part of polymorphism.
    ```csharp
    public class Shape
    {
        public virtual void Draw() // Can be overridden
        {
            Console.WriteLine("Drawing a generic shape.");
        }
    }

    public class Circle : Shape
    {
        public override void Draw() // Provides a specific implementation
        {
            Console.WriteLine("Drawing a circle.");
        }
    }
    ```
*   **`abstract`:** An `abstract` class cannot be instantiated on its own and may contain `abstract` members (methods without an implementation). Derived classes *must* provide an implementation for all abstract members.
    ```csharp
    public abstract class Vehicle // Cannot create an instance of Vehicle
    {
        public abstract void StartEngine(); // Must be implemented by derived classes
    }

    public class Car : Vehicle
    {
        public override void StartEngine()
        {
            Console.WriteLine("Car engine started.");
        }
    }
    ```

### **Encapsulation: Hiding Complexity**

Encapsulation is the principle of bundling the data (fields) and the methods that operate on that data within a single unit (a class). It's implemented using access modifiers to hide an object's internal state from the outside world.

*   **Access Modifiers:**
    *   `public`: Accessible from anywhere.
    *   `private`: Accessible only from within the same class. This is the default for class members.
    *   `protected`: Accessible from within the same class and by derived classes.
    *   `internal`: Accessible only within the same project (assembly).

    ```csharp
    public class BankAccount
    {
        private decimal _balance = 0; // PRIVATE: No one outside can directly touch the balance.

        public void Deposit(decimal amount) // PUBLIC: The safe, controlled way to change the balance.
        {
            if (amount > 0)
            {
                _balance += amount;
            }
        }
    }
    ```

### **Extension Methods: Adding New Behavior**

Extension methods allow you to add new methods to existing types without creating a new derived type, recompiling, or otherwise modifying the original type. This is especially useful for adding functionality to types you don't own, like those in the .NET framework.

*   **How to Create:** An extension method must be a `public static` method inside a `public static` class. The first parameter specifies the type the method operates on and is prefixed with `this`.
    ```csharp
    // Define the extension method in a static class
    public static class StringExtensions
    {
        // This method now extends the 'string' type
        public static bool IsNullOrEmpty(this string str)
        {
            return string.IsNullOrEmpty(str);
        }
    }

    // Now you can call it as if it were an instance method on any string
    string myString = null;
    if (myString.IsNullOrEmpty()) // Calling the extension method
    {
        Console.WriteLine("The string is empty.");
    }
    ```

### **Enums: Type-Safe Constants**

An `enum` (enumeration) is a value type that defines a set of named constants, making your code more readable and less error-prone than using raw numbers or strings.

*   **Defining and Using an Enum:**
    ```csharp
    public enum ShippingStatus
    {
        Ordered,
        Processing,
        Shipped,
        Delivered,
        Cancelled
    }

    public class Order
    {
        public ShippingStatus Status { get; set; }
    }

    var myOrder = new Order();
    myOrder.Status = ShippingStatus.Processing; // Much clearer than myOrder.Status = 1;

    if (myOrder.Status == ShippingStatus.Processing)
    {
        Console.WriteLine("Your order is being processed.");
    }
    ```

---

Of course. Here is the fourth module, "Common Collections & Data Structures," written in the same detailed and accessible style.

---

## **4. Common Collections & Data Structures**

While the C# language provides the syntax for programming, you almost always work with groups of data. The .NET platform provides a rich set of ready-to-use collection classes in the `System.Collections.Generic` namespace. This section covers the most essential ones.

### **Arrays**

An array is the most basic collection type. It's a fixed-size list of elements of the same type, stored contiguously in memory.

*   **Concept:** Think of an array as a set of numbered boxes, where each box holds a value of the same type. The size is determined when you create it and cannot be changed later. Access is zero-indexed, meaning the first element is at index 0.
*   **When to Use:** Use arrays when you know exactly how many elements you need to store and performance is critical, as they offer very fast element access.
*   **Declaration and Initialization:**
    ```csharp
    // 1. Declare an array of 5 integers, initialized to their default value (0).
    int[] numbers = new int[5];

    // 2. Declare and initialize an array with specific values (size is inferred).
    string[] names = new string[] { "Alice", "Bob", "Charlie" };

    // 3. Shorthand syntax for initialization.
    char[] vowels = { 'a', 'e', 'i', 'o', 'u' };
    ```
*   **Accessing Elements:** You access elements using a square bracket `[]` indexer.
    ```csharp
    // Assign a value to the first element (index 0).
    numbers[0] = 100;

    // Read the value of the second element (index 1).
    Console.WriteLine(numbers[1]); // Output: 0

    // Get the total number of elements in the array.
    Console.WriteLine($"The array can hold {numbers.Length} elements."); // Output: 5
    ```

### **`IEnumerable<T>`: The Heart of Iteration**

`IEnumerable<T>` is not a collection itself, but an *interface*. It's the universal contract that represents any sequence of items that can be looped over (enumerated).

*   **Concept:** Think of `IEnumerable<T>` as a promise that something "can be iterated." It provides a standard way to get a sequence of items one by one. The `foreach` loop works on anything that implements `IEnumerable<T>`.
*   **Key Feature: Deferred Execution (Lazy Evaluation):** When you use LINQ methods that return `IEnumerable<T>` (like `Where` or `Select`), the code doesn't run immediately. The query is only executed when you actually start looping over the results (e.g., with a `foreach` loop or by calling `.ToList()`). This is highly efficient as it avoids creating intermediate collections.
*   **Example:**
    ```csharp
    public IEnumerable<int> GetEvenNumbers(int[] numbers)
    {
        Console.WriteLine("Starting to filter for even numbers...");
        foreach (var number in numbers)
        {
            if (number % 2 == 0)
            {
                Console.WriteLine($"Found an even number: {number}");
                yield return number; // 'yield return' provides the next item in the sequence.
            }
        }
    }

    int[] myNumbers = { 1, 2, 3, 4, 5, 6 };
    IEnumerable<int> evenSequence = GetEvenNumbers(myNumbers); // The method has NOT run yet.

    Console.WriteLine("About to start the foreach loop...");

    // The code inside GetEvenNumbers only runs as we loop through 'evenSequence' here.
    foreach (var evenNumber in evenSequence)
    {
        Console.WriteLine($"The loop received: {evenNumber}");
    }
    ```

### **Common BCL Collections**

These are the go-to, general-purpose collections for most applications.

*   **`List<T>`: The Dynamic Array**
    *   **Concept:** A `List<T>` is a dynamically-sized list of objects. It's like an array that can grow or shrink as you add or remove items. It's the most commonly used collection in C#.
    *   **When to Use:** Use it whenever you need a general-purpose list of items, especially when you don't know the size in advance.
    *   **Key Members:** `Add()`, `Remove()`, `Count` (property to get the number of items), and the indexer `[]`.
    *   **Example:**
        ```csharp
        // Create a list of strings.
        List<string> tasks = new List<string>();

        // Add items to the list.
        tasks.Add("Buy groceries");
        tasks.Add("Pay bills");
        tasks.Add("Walk the dog");

        Console.WriteLine($"Number of tasks: {tasks.Count}"); // Output: 3

        // Access an item by its index.
        Console.WriteLine($"First task: {tasks[0]}");

        // Remove an item.
        tasks.Remove("Pay bills");

        // Loop through the remaining items.
        foreach (var task in tasks)
        {
            Console.WriteLine($"- {task}");
        }
        ```

*   **`Dictionary<TKey, TValue>`: The Fast Lookup Collection**
    *   **Concept:** A `Dictionary` stores a collection of key-value pairs. Each key must be unique. It's highly optimized for retrieving a value very quickly when you know its key.
    *   **When to Use:** Use it to store data that you need to look up frequently, like finding a user object by their ID, or a product by its SKU.
    *   **Key Members:** `Add(key, value)`, `Remove(key)`, `ContainsKey(key)`, and the indexer `[key]` to get or set a value.
    *   **Example:**
        ```csharp
        // Create a dictionary mapping student IDs (int) to names (string).
        var studentNames = new Dictionary<int, string>();

        // Add key-value pairs.
        studentNames.Add(101, "Alice");
        studentNames.Add(102, "Bob");

        // Retrieve a value using its key.
        string student101 = studentNames[101];
        Console.WriteLine($"Student 101 is: {student101}"); // Output: Alice

        // Check if a key exists.
        if (studentNames.ContainsKey(103))
        {
            Console.WriteLine("Student 103 exists.");
        }
        else
        {
            Console.WriteLine("Student 103 not found.");
        }
        ```

*   **`HashSet<T>`: The Unique Item Collection**
    *   **Concept:** A `HashSet<T>` is an unordered collection of unique items. It automatically prevents duplicate entries. It's extremely fast for checking if an item exists within the set.
    *   **When to Use:** Use it when you need to store a group of items where duplicates are not allowed and the order of items doesn't matter, like tracking unique tags for a blog post or the unique visitors to a website.
    *   **Key Members:** `Add(item)`, `Remove(item)`, `Contains(item)`, `Count`.
    *   **Example:**
        ```csharp
        // Create a HashSet to store unique tags.
        var tags = new HashSet<string>();

        tags.Add("csharp");
        tags.Add("programming");
        tags.Add("dotnet");

        // Trying to add a duplicate item. The Add method returns 'false' and the set is unchanged.
        bool wasAdded = tags.Add("csharp");
        Console.WriteLine($"Was 'csharp' added again? {wasAdded}"); // Output: False
        Console.WriteLine($"Number of unique tags: {tags.Count}"); // Output: 3

        // Check for existence, which is a very fast operation.
        if (tags.Contains("dotnet"))
        {
            Console.WriteLine("The 'dotnet' tag exists.");
        }
        ```

### **Collection Expressions (C# 12)**

C# 12 introduced a new, unified, and simplified syntax for creating collections.

*   **Concept:** Use square brackets `[...]` to create an instance of most common collection types. The compiler figures out the best type to create based on the context.
*   **Spread Operator (`..`):** Inside a collection expression, you can use the `..` operator to inline another collection's elements directly into the new one.
*   **Example:**
    ```csharp
    // Old way to create an array and a list
    int[] oldArray = new int[] { 1, 2, 3 };
    List<int> oldList = new List<int> { 4, 5, 6 };

    // New way using collection expressions
    int[] newArray = [1, 2, 3];
    List<int> newList = [4, 5, 6];

    // Using the spread operator '..' to combine them
    int[] combined = [..newArray, ..newList, 7, 8];

    // The 'combined' array now contains: [1, 2, 3, 4, 5, 6, 7, 8]
    Console.WriteLine(string.Join(", ", combined));
    ```

---

Of course. Here is the fifth module, "Resource Management," written in the same detailed and accessible style.

---

## **5. Resource Management**

In .NET, the Garbage Collector (GC) automatically manages memory for your objects. However, your application often uses resources that the GC doesn't know how to handle. These are called **unmanaged resources**. Examples include open file handles, database connections, network sockets, and graphics handles.

If you don't explicitly release these resources, they can remain locked, leading to memory leaks, performance degradation, and application crashes. This section covers the standard C# pattern for managing them safely and reliably.

### **The `IDisposable` Interface: The Standard Cleanup Contract**

`IDisposable` is a simple interface provided by the .NET framework. It serves as a universal contract, signaling that an object holds unmanaged resources and provides a way to release them.

*   **Concept:** An interface with a single method, `Dispose()`. Any class that implements `IDisposable` is promising, "I hold resources that need manual cleanup, and you can call my `Dispose()` method to do it."
*   **Purpose:** The `Dispose()` method is where all the cleanup logic goes. When you call it, the object should release its file handles, close its network connections, etc. This is called **deterministic cleanup** because you control exactly when it happens.
*   **Implementing `IDisposable`:**
    ```csharp
    // A simple example of a class that holds a file resource.
    public class CustomFileReader : IDisposable
    {
        private StreamReader _streamReader; // This is a managed object that holds an unmanaged file handle.
        private bool _disposed = false; // To track if Dispose has been called.

        public CustomFileReader(string filePath)
        {
            // The constructor acquires the resource.
            _streamReader = new StreamReader(filePath);
        }

        public string ReadLine()
        {
            if (_disposed)
                throw new ObjectDisposedException(nameof(CustomFileReader), "Cannot read from a disposed reader.");

            return _streamReader.ReadLine();
        }

        // This is the implementation of the IDisposable contract.
        public void Dispose()
        {
            // Check if Dispose has already been called.
            if (!_disposed)
            {
                // Release the managed resource (which in turn releases the unmanaged one).
                _streamReader?.Dispose();

                // Mark the object as disposed to prevent further use.
                _disposed = true;
            }
        }
    }
    ```

### **`using` Statement and Declaration: The Safest Way to Manage Resources**

While you *can* call the `Dispose()` method manually, it's risky. If an error occurs before the `Dispose()` call is reached, the resource will never be released. The `using` keyword solves this problem elegantly.

*   **Concept:** The `using` keyword provides a syntactic guarantee that `Dispose()` will be called on an object, no matter what happens—even if an exception is thrown inside the block. It is essentially a `try...finally` block in disguise.
*   **How to Use:** It can be used with any object whose type implements `IDisposable`.

*   **`using` Statement (The Classic Block)**
    The resource is available only within the curly braces `{}`. When the block is exited, `Dispose()` is automatically called.

    ```csharp
    void ReadFileContents(string path)
    {
        // The 'reader' object is created, used, and then automatically disposed of.
        using (var reader = new StreamReader(path))
        {
            Console.WriteLine(reader.ReadToEnd());
        } // <- reader.Dispose() is called right here, even if an error occurred inside.

        // The 'reader' variable is out of scope and cannot be used here.
    }
    ```

*   **`using` Declaration (The Modern, Un-nested Style)**
    Introduced in C# 8, this is a more concise syntax that is now generally preferred. The resource is disposed of automatically when it goes out of scope, which is typically at the end of the method.

    ```csharp
    void ReadFileContentsModern(string path)
    {
        // The using declaration applies to the rest of the method's scope.
        using var reader = new StreamReader(path);
        using var writer = new StreamWriter("log.txt"); // You can have multiple using declarations.

        Console.WriteLine(reader.ReadToEnd());
        writer.WriteLine("Read operation completed.");

    } // <- writer.Dispose() and then reader.Dispose() are called automatically right here.
    ```

> **Best Practice:** Always use a `using` statement or declaration when working with `IDisposable` objects. It is the single most reliable way to prevent resource leaks.

### **Finalizers (`~`): The Safety Net**

A finalizer (also known as a destructor) is a special class method used as a last-resort cleanup mechanism.

*   **Concept:** A finalizer is a method with the syntax `~ClassName()`. You can't call it directly; it is called automatically by the Garbage Collector at some point after an object is no longer referenced by any code.
*   **Purpose:** It's a **safety net**. It exists to clean up unmanaged resources in case the developer *forgot* to call `Dispose()`. It provides **non-deterministic cleanup**, because you have no control over when, or even if, it will run.
*   **When to Use (and When Not To):**
    *   **Implement a finalizer ONLY if your class directly owns an unmanaged resource handle** (e.g., a raw pointer from a C++ library).
    *   **DO NOT implement a finalizer** if your class only holds other managed objects (even if they are `IDisposable`). The GC will handle those objects' own finalizers if they have them.
    *   Implementing a finalizer adds performance overhead to your object, so it should be avoided unless absolutely necessary.

*   **The Full Dispose Pattern (with a Finalizer):**
    When you do need a finalizer, you should implement the full pattern to handle both deterministic (`Dispose`) and non-deterministic (finalizer) cleanup without duplication.

    ```csharp
    public class MyClassWithUnmanagedResource : IDisposable
    {
        private bool _disposed = false;
        // Assume 'unmanagedHandle' is a pointer or handle from a native library.
        private IntPtr _unmanagedHandle;

        public MyClassWithUnmanagedResource()
        {
            // Code here to acquire the unmanaged handle.
        }

        // The public Dispose method for users to call.
        public void Dispose()
        {
            Dispose(true); // Perform a full cleanup.
            // Tell the GC that cleanup is already done, so it doesn't need to call the finalizer.
            GC.SuppressFinalize(this);
        }

        // The finalizer (destructor syntax). This is the safety net.
        ~MyClassWithUnmanagedResource()
        {
            // The user forgot to call Dispose(), so we clean up from here.
            // We only clean up unmanaged resources because managed ones will be handled by the GC.
            Dispose(false);
        }

        // The protected virtual method where the actual cleanup logic lives.
        protected virtual void Dispose(bool disposing)
        {
            if (_disposed) return;

            if (disposing)
            {
                // 'disposing' is true, so we can clean up managed resources here.
                // (e.g., other disposable objects this class holds)
            }

            // Always clean up unmanaged resources here.
            // CloseHandle(_unmanagedHandle);
            _unmanagedHandle = IntPtr.Zero;

            _disposed = true;
        }
    }
    ```

---

Of course. Here is the sixth module, "Advanced Language Constructs," written in the same detailed style for both beginners and experts.

---

## **6. Advanced Language Constructs**

This section dives into powerful C# features that enable you to write more expressive, flexible, and efficient code. Mastering these concepts is key to becoming a proficient C# developer.

### **Generics: Reusable, Type-Safe Code**

Generics allow you to design classes and methods that defer the specification of one or more types until the class or method is declared and instantiated by client code. In simple terms, they are templates for creating code that can work with any data type.

*   **Concept:** The primary benefit of generics is **type safety** and **code reuse**. Instead of writing a separate `IntList`, `StringList`, etc., you can write one `List<T>` (where `T` is a placeholder for the type) and use it for any type, like `List<int>` or `List<string>`. The compiler ensures you can only add items of the correct type.
*   **Generic Class:**
    ```csharp
    // 'T' is the generic type parameter.
    public class Box<T>
    {
        public T Content { get; set; }
    }

    // Using the generic class with specific types.
    var intBox = new Box<int>();
    intBox.Content = 123; // OK

    var stringBox = new Box<string>();
    stringBox.Content = "Hello"; // OK

    // The compiler enforces type safety. This line would cause an error:
    // intBox.Content = "some text";
    ```
*   **Generic Method:**
    ```csharp
    public void Swap<T>(ref T a, ref T b)
    {
        T temp = a;
        a = b;
        b = temp;
    }

    int x = 5, y = 10;
    Swap(ref x, ref y); // The compiler infers that T is 'int'.
    Console.WriteLine($"x: {x}, y: {y}"); // Output: x: 10, y: 5
    ```
*   **Generic Constraints (`where` clause):** You can restrict the types that can be used as a type parameter. This allows you to call methods of the constrained type.
    ```csharp
    // This constraint ensures that T is a class that has a parameterless constructor.
    public T CreateInstance<T>() where T : class, new()
    {
        return new T();
    }
    ```

### **Delegates and Events: The Foundation of Callbacks**

Delegates and events are the core mechanisms for implementing event-driven programming and enabling loose coupling between components.

*   **Delegates:** A delegate is an object that knows how to call a method. It's a type-safe reference to a method with a specific signature.
    *   **Concept:** Think of it as a variable that holds a method instead of data.
    *   **Modern Usage (`Action` and `Func`):** Instead of defining custom delegate types, it's now standard to use the built-in generic delegates:
        *   `Action`: For methods that do not return a value (`void`). There are versions for methods with 0 to 16 parameters (`Action`, `Action<T1, T2>`, etc.).
        *   `Func`: For methods that return a value. The last generic type parameter is always the return type (`Func<T, TResult>`, `Func<T1, T2, TResult>`, etc.).

    ```csharp
    // 'Func<int, int, int>' represents a method that takes two ints and returns an int.
    public int Add(int a, int b) => a + b;
    public int Subtract(int a, int b) => a - b;

    Func<int, int, int> operation = Add;
    Console.WriteLine($"Result: {operation(5, 3)}"); // Output: Result: 8

    operation = Subtract;
    Console.WriteLine($"Result: {operation(5, 3)}"); // Output: Result: 2
    ```

*   **Events:** An event is a notification mechanism built on top of a delegate. It allows a class (the "publisher") to notify other classes (the "subscribers") when something interesting happens, without the publisher needing to know who its subscribers are.
    *   **Concept:** Events are like a controlled, safer version of a public delegate. They restrict access so that only the publishing class can "invoke" (fire) the event, while others can only subscribe (`+=`) or unsubscribe (`-=`).
    *   **Example (Publish/Subscribe):**
        ```csharp
        public class Alarm
        {
            // 1. Define the event using a delegate type (Action is common).
            public event Action? OnAlarmTriggered;

            // 2. A method to raise (publish) the event.
            public void Trigger()
            {
                Console.WriteLine("Alarm triggered!");
                // Safely invoke the event, notifying all subscribers.
                OnAlarmTriggered?.Invoke();
            }
        }

        // Subscriber classes
        public class SecurityService { public void Notify() => Console.WriteLine("Security has been dispatched."); }
        public class HomeOwner { public void WakeUp() => Console.WriteLine("Homeowner has been woken up."); }

        // Wiring it all up
        var alarm = new Alarm();
        var security = new SecurityService();
        var owner = new HomeOwner();

        // 3. Subscribers register their methods.
        alarm.OnAlarmTriggered += security.Notify;
        alarm.OnAlarmTriggered += owner.WakeUp;

        alarm.Trigger(); // This notifies both subscribers.
        ```

### **Lambda Expressions: Anonymous Functions**

A lambda expression is a concise way to write an anonymous (unnamed) method. It's most commonly used with LINQ and delegates.

*   **Syntax:** `parameters => expression` or `parameters => { statements; }`
*   **Expression Lambda:** A simple lambda with a single expression on the right side. The result of the expression is implicitly returned.
    ```csharp
    // A Func that takes an int and returns that int multiplied by 2.
    Func<int, int> multiplyByTwo = number => number * 2;
    Console.WriteLine(multiplyByTwo(5)); // Output: 10
    ```
*   **Statement Lambda:** A more complex lambda that contains one or more statements within curly braces. You must use an explicit `return` statement if the delegate returns a value.
    ```csharp
    // An Action that takes a string and prints it to the console.
    Action<string> printMessage = message =>
    {
        Console.WriteLine("--- Message Start ---");
        Console.WriteLine(message);
        Console.WriteLine("--- Message End ---");
    };
    printMessage("Hello, Lambdas!");
    ```

### **Tuples and Deconstruction**

Tuples provide a simple syntax to group multiple data elements without needing to create a formal `class` or `struct`.

*   **Creating Tuples:** It's best to use named elements for clarity.
    ```csharp
    // A tuple with named elements.
    (string Name, int Age, bool IsActive) userProfile = ("Alice", 30, true);

    // Accessing elements by name.
    Console.WriteLine($"Name: {userProfile.Name}"); // Output: Name: Alice
    ```
*   **Deconstruction:** The process of splitting a tuple's elements into separate variables. This is also useful for getting multiple return values from a method.
    ```csharp
    // 1. Deconstructing a tuple into new variables.
    var (name, age, isActive) = userProfile;
    Console.WriteLine($"Age: {age}"); // Output: Age: 30

    // 2. Deconstructing a method's return value.
    public (int Sum, int Product) Calculate(int a, int b)
    {
        return (a + b, a * b); // Return a tuple
    }

    var (theSum, theProduct) = Calculate(5, 3);
    Console.WriteLine($"Sum: {theSum}, Product: {theProduct}"); // Output: Sum: 8, Product: 15
    ```

### **Iterators (`yield return`)**

An iterator is a special kind of method that allows you to create a custom sequence (`IEnumerable<T>`) that produces its items one at a time, on demand. This is known as **deferred execution**.

*   **Concept:** Instead of creating a big list in memory and returning it all at once, an iterator uses the `yield return` statement to "pause" execution and hand one item back to the caller. When the caller asks for the next item, the method resumes from where it left off.
*   **Benefit:** Extremely memory efficient, especially for very large or infinite sequences.
*   **Example:**
    ```csharp
    // This method generates a sequence of even numbers up to a limit.
    public IEnumerable<int> GetEvenNumbers(int max)
    {
        Console.WriteLine("Iterator starting...");
        for (int i = 0; i <= max; i += 2)
        {
            Console.WriteLine($"Yielding {i}");
            yield return i; // Pause and return the current number.
        }
        Console.WriteLine("Iterator finished.");
    }

    // The code in GetEvenNumbers doesn't run until the foreach loop begins.
    foreach (var number in GetEvenNumbers(10))
    {
        Console.WriteLine($"Loop received {number}");
    }
    ```

### **Pattern Matching**

Pattern matching is a feature that provides more expressive syntax for checking if an object has a certain "shape" and extracting information from it if it matches. It's often used with `if` and `switch`.

*   **Type Pattern:** Checks the runtime type of an object and, if it matches, assigns it to a new variable.
    ```csharp
    object myValue = "Hello, World";
    if (myValue is string s) // Check if myValue is a string, if so assign it to s.
    {
        Console.WriteLine($"It's a string with length: {s.Length}");
    }
    ```
*   **Relational and Logical Patterns:** Used in `switch` expressions to compare against values.
    ```csharp
    string GetWeatherReport(int temperature) => temperature switch
    {
        < 0 => "Freezing",
        > 0 and < 15 => "Cold",
        >= 15 and < 25 => "Mild",
        >= 25 => "Hot",
        _ => "Unknown"
    };
    ```
*   **List Patterns (C# 11):** Matches against the elements of a list or an array. `..` is the "slice pattern" which can match zero or more elements.
    ```csharp
    int[] numbers = { 1, 2, 3, 4 };
    if (numbers is [1, 2, ..]) // Does the array start with 1 and 2?
    {
        Console.WriteLine("Matches!");
    }
    if (numbers is [var first, .., var last]) // Extract the first and last elements.
    {
        Console.WriteLine($"First: {first}, Last: {last}");
    }
    ```

### **Anonymous and Dynamic Types**

These are special-purpose types for situations where defining a formal `class` is inconvenient.

*   **Anonymous Types:** A simple, unnamed object created on the fly with a set of read-only properties. The compiler generates a class definition for you. They are most often used in LINQ `Select` projections.
    ```csharp
    var products = new[] { new { Name = "Laptop", Price = 1200m }, new { Name = "Mouse", Price = 25m } };
    var cheapProducts = products.Where(p => p.Price < 100);

    var productInfo = cheapProducts.Select(p => new { p.Name, SalePrice = p.Price * 0.9m }); // Create an anonymous type.
    ```
*   **Dynamic Types:** The `dynamic` keyword tells the compiler to skip type checking at compile time. Instead, member lookups (like method calls) are resolved at **runtime**.
    *   **Use Cases:** Best for interoperating with dynamic systems like Python, JavaScript object models (JSON), or legacy COM APIs.
    *   **Warning:** Use `dynamic` sparingly. You lose the safety net of the static type checker, and errors will only be found when the code runs, not when it compiles.
    ```csharp
    // Example 1: Using JsonDocument for safe JSON parsing (recommended)
    using System.Text.Json;

    string json = "{\"Name\":\"John\", \"Age\":30}";
    using JsonDocument doc = JsonDocument.Parse(json);
    JsonElement root = doc.RootElement;
    Console.WriteLine(root.GetProperty("Name").GetString()); // Output: John

    // Example 2: Using dynamic with Newtonsoft.Json (if you need dynamic behavior)
    // dynamic person = Newtonsoft.Json.JsonConvert.DeserializeObject(json);
    // Console.WriteLine(person.Name); // This would work with Newtonsoft.Json
    ```

---

Of course. Here is the seventh module, "Concurrency, Parallelism, and Asynchrony," written in the same detailed and accessible style. This is a critical topic in modern software development.

---

## **7. Concurrency, Parallelism, and Asynchrony**

These three related concepts are essential for building responsive and scalable applications. While often used together, they solve different problems.

*   **Asynchrony:** About not blocking the current thread while waiting for a long-running operation to complete (usually I/O like a network request or file access). The goal is **responsiveness**.
*   **Parallelism:** About doing multiple things at the exact same time on different CPU cores. The goal is to complete a CPU-intensive task **faster**.
*   **Concurrency:** The general term for when multiple tasks are making progress at the same time. This can be through parallelism (truly simultaneous) or asynchrony (interleaving tasks). It introduces the challenge of **managing shared resources**.

### **Asynchronous Programming (`async` / `await`)**

This is the modern C# pattern for handling I/O-bound or other long-running operations without freezing your application.

*   **Concept:** When you `await` an operation (like a database query), the `async` method "pauses" and immediately returns control to its caller. The thread that was running the method is now free to do other work (like keeping a UI responsive or handling another web request). When the awaited operation completes, the method resumes exactly where it left off, often on a new thread.
*   **The Keywords:**
    *   `async`: A modifier on a method signature that indicates the method can contain `await` expressions. It enables the compiler to perform the necessary transformations.
    *   `await`: An operator that is applied to a `Task`. It tells the method to pause non-blockingly until the `Task` is complete.
*   **`Task` and `Task<T>`:** These objects represent the "promise" of an operation that will complete in the future.
    *   `Task`: Represents an operation that does not return a value.
    *   `Task<TResult>`: Represents an operation that will eventually return a value of type `TResult`.
*   **When to Use:** Ideal for I/O-bound work:
    *   Making network requests (calling a web API).
    *   Querying a database.
    *   Reading from or writing to a file.
*   **Example: Downloading a Web Page**
    ```csharp
    public class WebDownloader
    {
        // --- The Asynchronous Way (Non-Blocking) ---
        public async Task<string> DownloadHomepageAsync(string url)
        {
            using (var httpClient = new HttpClient())
            {
                Console.WriteLine("Starting download...");

                // 'await' pauses this method, but the main application thread is NOT blocked.
                // It's free to do other work.
                string content = await httpClient.GetStringAsync(url);

                // This line will only run after the download is complete.
                Console.WriteLine("Download finished.");
                return content;
            }
        }
    }

    // How you would call it
    var downloader = new WebDownloader();
    // We can 'await' the async method to get its result when it's done.
    string pageContent = await downloader.DownloadHomepageAsync("https://www.microsoft.com");
    Console.WriteLine($"Downloaded {pageContent.Length} characters.");
    ```

### **Parallel Programming: Using Multiple Cores**

Parallelism is used to speed up CPU-bound work by splitting it across multiple processor cores.

*   **Concept:** If you have a task that involves heavy computation (like processing a large image or running a complex algorithm on a massive dataset), you can often break the work into smaller chunks and execute those chunks simultaneously on different CPU cores.
*   **When to Use:** For CPU-bound work that can be broken into independent pieces.

*   **`Task.Run()`: The Go-To for CPU-Bound Work**
    The simplest way to execute a piece of code on a background thread from the **thread pool** (a set of pre-created threads managed by .NET).

    ```csharp
    public long PerformHeavyCalculation()
    {
        Console.WriteLine("Starting heavy calculation on a background thread...");
        long total = 0;
        for (int i = 0; i < 2_000_000_000; i++)
        {
            total += 1; // Simulate a CPU-intensive task
        }
        return total;
    }

    // Offload the heavy work using Task.Run so the main thread remains free.
    Console.WriteLine("About to start calculation...");
    long result = await Task.Run(() => PerformHeavyCalculation());
    Console.WriteLine($"Calculation complete. Result: {result}");
    ```

*   **`Parallel` Class: For Data Parallelism**
    The `Parallel` class provides simple ways to run loops in parallel. `Parallel.ForEach` is particularly useful for applying an operation to every item in a collection concurrently.

    ```csharp
    public void ProcessImagesInParallel(List<string> imagePaths)
    {
        // This loop will run on multiple threads at once.
        // Each thread will process a different image path from the list.
        Parallel.ForEach(imagePaths, imagePath =>
        {
            // Simulate processing an image.
            Console.WriteLine($"Processing {imagePath} on thread {Thread.CurrentThread.ManagedThreadId}");
            // ... image processing logic ...
            Thread.Sleep(1000); // Simulate work
        });
    }

    var images = new List<string> { "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg" };
    ProcessImagesInParallel(images);
    ```

### **Synchronization: Managing Shared State**

When multiple threads access the same data, you risk creating a **race condition**, where the final state of the data is incorrect because of the unpredictable order of thread operations. Synchronization primitives are used to prevent this.

*   **Concept:** You must protect **critical sections** of your code—blocks where shared data is being read and modified. A synchronization lock ensures that only one thread can enter a critical section at a time, forcing other threads to wait their turn.
*   **`lock` Statement: The Simplest Lock**
    The `lock` statement is the most common way to ensure exclusive access to a block of code. It requires a shared, private "lock object" to synchronize on.

*   **Example: A Broken vs. a Correct Counter**
    ```csharp
    public class SharedCounter
    {
        // --- THE BROKEN WAY ---
        public int UnsafeCount { get; private set; }
        public void IncrementUnsafe()
        {
            UnsafeCount++; // This is not thread-safe! It's actually three operations: read, increment, write.
        }

        // --- THE CORRECT, THREAD-SAFE WAY ---
        // C# 13+: Use the dedicated, high-performance lock object.
        private lock _lockObject;
        // Before C# 13, the standard pattern was:
        // private readonly object _lockObject = new object();
        
        public int SafeCount { get; private set; }
        public void IncrementSafe()
        {
            lock (_lockObject) // Only one thread can enter this block at a time.
            {
                // This is now a "critical section".
                SafeCount++;
            }
        }
    }

    // Demonstration
    var counter = new SharedCounter();
    // Run the increment methods 100,000 times in parallel.
    Parallel.For(0, 100_000, i =>
    {
        counter.IncrementUnsafe();
        counter.IncrementSafe();
    });

    // The unsafe count will likely be LESS than 100,000 due to race conditions.
    Console.WriteLine($"Final unsafe count: {counter.UnsafeCount}");
    // The safe count will always be exactly 100,000.
    Console.WriteLine($"Final safe count: {counter.SafeCount}");
    ```

*   **Other Synchronization Primitives:** C# offers more advanced tools for more complex scenarios.
    *   `SemaphoreSlim`: Limits the number of threads that can access a resource or a pool of resources simultaneously. Useful for throttling.
    *   `Monitor`: The underlying mechanism that the `lock` statement uses. It provides more control, such as the ability to `Wait` and `Pulse` (signal).
    *   `Mutex`: Similar to a `lock`, but it can work across different processes, not just within a single application.

---

Of course. Here is the eighth module, "Compilation, Metadata, and Interop," written in the same comprehensive and accessible style. This section covers how C# code becomes an executable and interacts with its environment.

---

## **8. Compilation, Metadata, and Interop**

This section explores what happens to your C# code after you write it. It covers how the compiler works, how information about your code is stored as metadata, and how C# can interact with code written in other languages.

### **Reflection: Inspecting Code at Runtime**

Reflection is a powerful feature that allows an application to inspect its own metadata at runtime. You can discover the types, methods, properties, and attributes of an assembly and even dynamically create instances of types and invoke methods.

*   **Concept:** Think of reflection as a "meta-program"—a program that can read and manipulate other programs (or itself). Instead of working with an object's values, you work with its *structure*.
*   **When to Use:**
    *   Building dependency injection frameworks or object mappers.
    *   Creating plug-in architectures where an application loads external assemblies.
    *   Writing unit testing frameworks that need to discover and run test methods automatically.
*   **Warning:** Reflection is powerful but slow. Operations that use reflection are significantly slower than direct, statically-typed code. Avoid it in performance-critical paths.
*   **Example: Discovering an Object's Properties**
    ```csharp
    public class User
    {
        public string Name { get; set; } = "Alice";
        public int Age { get; set; } = 30;
    }

    var user = new User();
    // Get the Type object that represents the User class.
    Type userType = user.GetType();

    Console.WriteLine($"Inspecting type: {userType.Name}");

    // Get all public properties of the type.
    PropertyInfo[] properties = userType.GetProperties();

    foreach (var property in properties)
    {
        // Get the name of the property.
        string propertyName = property.Name;
        // Get the value of that property from our 'user' instance.
        object? propertyValue = property.GetValue(user);

        Console.WriteLine($" - Property '{propertyName}' has value: {propertyValue}");
    }
    ```

### **Attributes: Declarative Metadata for Your Code**

An attribute is a declarative tag used to convey information to the compiler or other tools at runtime. It's a way of adding metadata to your code elements like classes, methods, and properties.

*   **Concept:** Attributes don't change how your code executes directly. Instead, they provide extra information that can be read by other parts of the system (often using reflection).
*   **Common Built-in Attributes:**
    *   `[Obsolete]`: Marks a method or class as outdated, generating a compiler warning.
    *   `[Serializable]`: Indicates that a class can be serialized.
    *   `[DllImport]`: Used for platform interoperability to import a function from a native library.
*   **Using Attributes:** Attributes are placed in square brackets `[]` right before the code element they apply to.
    ```csharp
    public class MyApi
    {
        [Obsolete("This method is outdated. Please use NewMethod() instead.")]
        public void OldMethod()
        {
            // ...
        }

        public void NewMethod()
        {
            // ...
        }
    }
    ```
*   **Creating Custom Attributes:** You can create your own attributes by defining a class that inherits from `System.Attribute`.
    ```csharp
    // Define a custom attribute to mark methods that are safe to run as tests.
    [AttributeUsage(AttributeTargets.Method)] // This attribute can only be applied to methods.
    public class TestableAttribute : Attribute { }

    public class MyTestClass
    {
        [Testable]
        public void RunTest1() { /* ... */ }

        public void HelperMethod() { /* ... */ } // Not marked as a test.
    }
    ```

### **Assemblies: The Unit of Deployment**

When you compile your C# project, the output is an **assembly**. It's the fundamental unit of deployment, versioning, and security in .NET.

*   **Contents:** An assembly can be an executable (`.exe`) or a library (`.dll`). It contains:
    1.  **Intermediate Language (IL) Code:** Your C# code is not compiled directly to machine code. It's compiled into IL, a CPU-independent instruction set.
    2.  **Metadata:** A set of tables describing every type, method, and attribute defined in your code. Reflection reads this metadata.
    3.  **Manifest:** Contains information about the assembly itself: its name, version, culture, and a list of all other assemblies it references.
*   **The Just-In-Time (JIT) Compiler:** When you run your application, the .NET runtime's JIT compiler takes the IL code from the assembly and compiles it into native machine code that is optimized for the specific CPU it's running on. This JIT compilation happens on a method-by-method basis as each method is called for the first time.

### **Preprocessor Directives**

Preprocessor directives are special commands for the C# compiler that are processed *before* your code is compiled. They all start with a `#`.

*   **Conditional Compilation (`#if`, `#define`):** This is the most common use. It allows you to include or exclude blocks of code from the compilation based on whether a symbol is defined. This is often used to create different builds (e.g., a "DEBUG" build with extra logging vs. a "RELEASE" build).
    ```csharp
    // You can define a symbol at the top of a file.
    #define MY_CUSTOM_SYMBOL

    public void MyMethod()
    {
        #if DEBUG
            // This code will only be included in Debug builds.
            Console.WriteLine("Running in Debug mode.");
        #elif MY_CUSTOM_SYMBOL
            // This code runs if DEBUG is not defined, but MY_CUSTOM_SYMBOL is.
            Console.WriteLine("Running with my custom symbol.");
        #else
            // This code runs in all other builds (e.g., Release).
            Console.WriteLine("Running in Release mode.");
        #endif
    }
    ```
*   **Regions (`#region`, `#endregion`):** Allows you to create collapsible blocks of code in the Visual Studio editor. This is purely for organizational purposes and has no effect on the compiled code.
    ```csharp
    #region Public Properties
    public string Name { get; set; }
    public int Age { get; set; }
    #endregion
    ```
*   **Warnings and Errors (`#warning`, `#error`):** You can instruct the compiler to generate a custom warning or a build-stopping error.
    ```csharp
    #warning "This part of the code is not yet fully implemented."
    ```

### **XML Documentation Comments**

If you begin a comment with three slashes (`///`), the compiler can process it into a formal XML file that can be used to generate professional API documentation. Visual Studio also uses this information to provide IntelliSense tooltips.

*   **Syntax:** Use standard XML tags like `<summary>`, `<param>`, and `<returns>`.
    ```csharp
    /// <summary>
    /// Calculates the sum of two integers.
    /// </summary>
    /// <param name="a">The first integer to add.</param>
    /// <param name="b">The second integer to add.</param>
    /// <returns>The sum of the two integers.</returns>
    public int Add(int a, int b)
    {
        return a + b;
    }
    ```

### **Unsafe Code & Interop: Talking to the Outside World**

C# is a "safe," managed language by default, meaning you don't directly manipulate memory addresses. However, for performance-critical scenarios or for interoperating with native libraries (like C or C++), you can step into an **unsafe context**.

*   **The `unsafe` Context:** Code within an `unsafe` block or method can use pointers and perform C-style memory manipulation. You must enable the "Allow unsafe code" option in your project settings to compile it.
*   **Pointers (`*`, `&`):**
    *   `*`: Declares a pointer type (e.g., `int*`) or dereferences a pointer to get its value.
    *   `&`: The "address-of" operator; gets the memory address of a variable.
*   **`fixed` Statement:** "Pins" a managed object in memory, preventing the Garbage Collector from moving it. This is necessary to get a stable pointer to the object's data.
*   **Platform Invoke (P/Invoke):** The primary mechanism for calling functions in native DLLs. You use the `[DllImport]` attribute to declare a C# method signature that maps to a native function.
*   **Example: Calling a C++ Function**
    ```csharp
    // Assume we have a native library "MyNativeLib.dll" with this C++ function:
    // extern "C" __declspec(dllexport) void Add(int a, int b, int* result);

    public class NativeMath
    {
        // 1. Use DllImport to link to the native function.
        [DllImport("MyNativeLib.dll")]
        public static extern void Add(int a, int b, out int result); // 'out' is a safe way to handle the pointer.

        // For more complex scenarios, you might need unsafe code.
        [DllImport("MyNativeLib.dll")]
        public static extern void UnsafeAdd(int a, int b, int* result);
    }

    // Calling the safe P/Invoke method
    NativeMath.Add(5, 10, out int safeResult);
    Console.WriteLine($"Safe result: {safeResult}");

    // Calling the unsafe version requires an unsafe context.
    unsafe
    {
        int unsafeResult;
        NativeMath.UnsafeAdd(5, 10, &unsafeResult); // Pass the address of the variable.
        Console.WriteLine($"Unsafe result: {unsafeResult}");
    }
    ```

---

Of course. Here are the final two modules, "What's New: C# 11–14 Highlights" and "Coding Style & Best Practices," written in the same comprehensive style.

---

## **9. What's New: C# 11–14 Highlights**

C# is a language that evolves continuously. This section provides a high-level overview of the most impactful features introduced in recent versions, from C# 11 through the latest developments in C# 14. This is not an exhaustive list but covers the highlights you're most likely to use.

### **C# 11 (Released with .NET 7)**

*   **Raw String Literals:** A new way to declare string literals that simplifies multi-line text and strings containing quotes or other special characters, eliminating the need for escape sequences.
    ```csharp
    var json = """
               {
                 "name": "My App",
                 "version": "1.0.0"
               }
               """;
    ```
*   **List Patterns:** A powerful extension to pattern matching that allows you to check the contents of a list or an array.
    ```csharp
    int[] numbers = { 1, 2, 3 };
    bool startsWithOne = numbers is [1, ..]; // Check if the first element is 1.
    if (numbers is [var first, _, var last]) // Extract first and last elements.
    {
        Console.WriteLine($"First: {first}, Last: {last}");
    }
    ```
*   **`required` Members:** A modifier for properties and fields that forces the caller to initialize them in an object initializer, ensuring that critical data is not missed.
    ```csharp
    public class Person { public required string Name { get; set; } }
    var p = new Person { Name = "Alice" }; // OK
    // var p2 = new Person(); // Compile-time error: 'Name' is required.
    ```
*   **Generic Attributes:** You can now create attribute classes that are generic, allowing for more flexible and type-safe metadata.
    ```csharp
    public class MyAttribute<T> : Attribute { }
    [MyAttribute<string>]
    public void MyMethod() { }
    ```
*   **File-Local Types:** The `file` access modifier restricts a type's visibility to the source file in which it is declared. This is excellent for source generators or for helper types that should not be exposed anywhere else.
    ```csharp
    file class MyFileLocalHelper { } // Only visible within this .cs file.
    ```

### **C# 12 (Released with .NET 8)**

*   **Primary Constructors:** A concise syntax for declaring constructors whose parameters are available throughout the body of a class or struct. This reduces boilerplate for initialization.
    ```csharp
    public class Student(int id, string name)
    {
        public int Id { get; } = id;
        public string Name { get; } = name;
    }
    ```
*   **Collection Expressions:** A new, unified syntax using square brackets `[...]` to create common collection types like arrays, `List<T>`, and `Span<T>`. It also introduces the spread operator `..` to inline other collections.
    ```csharp
    int[] a = [1, 2, 3];
    List<int> b = [4, 5, 6];
    int[] combined = [..a, ..b, 7, 8]; // Result: [1, 2, 3, 4, 5, 6, 7, 8]
    ```
*   **`using` Alias for Any Type:** The `using` alias directive can now be used to create an alias for any type, not just named types. This is great for simplifying complex tuple or pointer types.
    ```csharp
    using Point = (int X, int Y);
    Point p = (10, 20);
    ```
*   **`ref readonly` Parameters:** A parameter modifier that specifies that a method uses a reference to an argument but will not modify it. This provides clarity and can improve performance by avoiding defensive copies.
    ```csharp
    public void ProcessData(ref readonly Point point) { /* Can read point.X but cannot change it */ }
    ```
*   **Default Lambda Parameters:** You can now specify default values for parameters in lambda expressions.
    ```csharp
    var add = (int a, int b = 1) => a + b;
    add(5); // Result: 6
    ```

### **C# 13 (Released with .NET 9)**

*   **New `lock` Object:** You no longer need to allocate a dedicated `object` for locking. You can now declare a dedicated `lock` object, which is a lightweight, non-allocating synchronization primitive.
    ```csharp
    private lock _myLock;
    public void MyThreadSafeMethod()
    {
        lock (_myLock) { /* ... */ }
    }
    ```
*   **`params` Collections:** The `params` modifier is no longer restricted to arrays. You can now use it with any collection type, such as `ReadOnlySpan<T>` or `IEnumerable<T>`, for improved performance and flexibility.
    ```csharp
    public void PrintNames(params ReadOnlySpan<string> names) { /* ... */ }
    ```
*   **Implicit Indexer Access in Object Initializers:** You can now set values for indexers directly within an object initializer.
    ```csharp
    var collection = new MyCollection
    {
        ["user1"] = "Alice",
        ["user2"] = "Bob"
    };
    ```
*   **`ref` and `unsafe` in Iterators:** Iterators (`yield return`) can now be marked as `ref` or `unsafe`, enabling high-performance scenarios that work directly with memory buffers.

### **C# 14 (Released with .NET 10)**

*   **`field` Keyword in Auto-Properties:** A contextual keyword that allows you to directly access the compiler-generated backing field of an auto-property. This lets you add simple logic to a property without defining your own backing field.
    ```csharp
    public class Person
    {
        public string Name { get; set => field = value.Trim(); }
    }
    ```
*   **Extension Members:** You can now define more than just extension methods. This feature allows for defining properties, indexers, and other members in extension blocks, further enhancing the ability to augment existing types.
    ```csharp
    // C# 14 Extension Members Example
    // This feature requires .NET 10 SDK or higher.

    public static class StringExtensions
    {
        // Extension block for string type
        extension(string source)
        {
            // Extension Property: Behaves like a property on the string itself.
            public bool IsEmpty => string.IsNullOrEmpty(source);

            // Extension Property: Gets the first word.
            public string FirstWord => source.Split(' ', StringSplitOptions.RemoveEmptyEntries).FirstOrDefault() ?? "";

            // Extension Method: A method that performs a calculation.
            public int WordCount() => source.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length;
            
            // Extension Indexer: Access characters with validation
            public char this[int index] => 
                index >= 0 && index < source.Length 
                    ? source[index] 
                    : throw new IndexOutOfRangeException();
        }
    }

    // --- How to use it ---
    string text = "Hello brave new world";

    // Using the extension property directly on the string
    Console.WriteLine(text.IsEmpty); // Outputs: False

    // Using the extension method directly on the string
    Console.WriteLine(text.WordCount()); // Outputs: 4

    // Using the new FirstWord property
    Console.WriteLine(text.FirstWord); // Outputs: "Hello"
    
    // Using the extension indexer
    Console.WriteLine(text[0]); // Outputs: H
    ```
*   **`nameof` with Unbound Generics:** The `nameof` operator can now be used with unbound generic types, providing better support for reflection and code generation scenarios.
    ```csharp
    string typeName = nameof(List<>); // Returns "List"
    ```
*   **Null-Conditional Assignment (`?.=`):** Allows assignment to occur conditionally when the receiver is non-null. If the receiver is `null`, the assignment is skipped entirely.
    ```csharp
    // Safely update a property only if the object exists
    user?.Name = newName;
    
    // Works with compound assignments too
    counter?.Value += 1;
    
    // Particularly useful for event handlers
    button?.Click += HandleClick;
    ```
*   **User-Defined Compound Assignment Operators:** You can now define custom implementations for compound assignment operators (`+=`, `-=`, etc.) in your own types, allowing for specialized behavior beyond the default operation-and-assignment.
    ```csharp
    public readonly struct Vector2D
    {
        public double X { get; }
        public double Y { get; }
        
        public Vector2D(double x, double y) => (X, Y) = (x, y);
        
        // Regular addition operator
        public static Vector2D operator +(Vector2D a, Vector2D b) => 
            new Vector2D(a.X + b.X, a.Y + b.Y);
            
        // Custom compound addition assignment
        public static Vector2D operator +=(Vector2D target, Vector2D delta) =>
            new Vector2D(target.X + delta.X * 0.5, target.Y + delta.Y * 0.5); // Half-strength addition
    }
    
    var position = new Vector2D(10, 20);
    position += new Vector2D(6, 8); // Uses the custom += operator
    // position is now (13, 24) instead of (16, 28)
    ```

---

## **10. Coding Style & Best Practices**

Writing code that works is only the first step. Writing code that is clean, readable, and maintainable is crucial for long-term success, especially when working in a team. This section provides guidelines based on official Microsoft recommendations and community best practices.

### **Naming and Layout Conventions**

Consistency is key. A consistent style makes code predictable and easy to read.

*   **Naming Conventions:**
    *   **PascalCase:** Used for class names, record names, method names, properties, events, and enums.
        *   `public class MyCoolClass { public void DoSomething() { } }`
    *   **camelCase:** Used for local variables and method parameters.
        *   `void MyMethod(int someNumber) { var messageText = "Hello"; }`
    *   **Private Fields (`_` prefix):** It's a common and recommended convention to prefix private fields with an underscore `_` and use camelCase. This makes them instantly recognizable.
        *   `private readonly string _connectionString;`
*   **Layout Conventions:**
    *   **Braces:** Always use curly braces `{}` for `if`, `for`, `while`, etc., even if the body is a single line. This prevents common errors.
    *   **Indentation:** Use four spaces for indentation (the Visual Studio default).
    *   **Spacing:** Use a single space after a comma and around operators (`x = y + z;`) to improve readability.

### **Performance Best Practices**

Writing efficient code means understanding how C# features translate to performance.

*   **`struct` vs. `class`:**
    *   Use a `class` by default. It's the standard reference type.
    *   Use a `struct` only for small, data-centric types that have no identity and are logically single values (like `Point`, `Color`). Structs can be more performant as they avoid heap allocations, but they can be slower if passed around frequently as arguments due to copying.
*   **`Span<T>` and `Memory<T>`:** For high-performance, allocation-free operations on contiguous memory (like parts of an array or a string), use `Span<T>`. This avoids creating new string or array allocations for substrings or sub-arrays, which dramatically reduces memory pressure.
*   **LINQ Efficiency:**
    *   **Deferred Execution:** Be aware that many LINQ queries (like `Where`, `Select`) don't execute until you iterate over them. This is powerful but can lead to multiple enumerations if not handled carefully.
    *   **`.ToList()` or `.ToArray()`:** Call these methods only when you need to materialize the collection. Calling them too early can create unnecessary intermediate collections.
    *   **Performance:** For performance-critical loops, a standard `for` loop is often faster than a LINQ query, as it avoids the overhead of delegates and iterators. However, LINQ is more readable and less error-prone for complex data transformations.
    *   **Multiple Enumeration:** If you need to iterate over a LINQ query multiple times, call `.ToList()` once to avoid re-executing the query.
        ```csharp
        // Inefficient - query executes twice
        var expensiveQuery = data.Where(x => ExpensiveOperation(x));
        var count = expensiveQuery.Count();
        var list = expensiveQuery.ToList();
        
        // Efficient - query executes once
        var results = data.Where(x => ExpensiveOperation(x)).ToList();
        var count = results.Count;
        ```
*   **String Concatenation:** When building a string from many small pieces in a loop, do not use `+`. Each `+` creates a new string object. Use `StringBuilder` instead, which is far more memory efficient.
    ```csharp
    // Inefficient
    string result = "";
    for (int i = 0; i < 1000; i++) { result += i.ToString(); }

    // Efficient
    var sb = new StringBuilder();
    for (int i = 0; i < 1000; i++) { sb.Append(i); }
    string efficientResult = sb.ToString();
    ```

### **Error Handling Best Practices**

How you handle errors is critical for application stability.

*   **Throwing Exceptions:** Throw an exception when a method cannot fulfill its promised contract or encounters an unrecoverable error.
    *   **Be Specific:** Throw the most specific exception type possible (e.g., `ArgumentNullException` instead of just `Exception`).
    *   **Don't Throw `Exception`:** Avoid `throw new Exception()`. Create custom exception types if a specific one doesn't exist.
*   **Handling Exceptions:** Use a `try-catch` block to handle exceptions that you can reasonably recover from.
    *   **Catch Specific Exceptions:** Don't just `catch (Exception e)`. Catch the specific exceptions you expect and know how to handle.
    *   **Don't Swallow Exceptions:** An empty `catch` block is almost always a mistake. It hides problems. If you can't handle an exception, let it propagate up the call stack.
    *   **`finally`:** Use a `finally` block (or a `using` statement) to guarantee that cleanup code runs, whether an exception occurred or not.

---

Of course. Here is the final module, "Best Resources for C#," written in the same detailed and accessible style. I have visited and analyzed each of the provided sites to accurately describe their value for both new and experienced developers.

---

## **11. Best Resources for C#**

C# and the .NET ecosystem are constantly evolving. A key part of being a successful developer is knowing where to find reliable, up-to-date information. This section provides a curated list of essential resources to support your learning journey, from official documentation to practical, community-driven guides.

### **Official Microsoft Documentation (The Source of Truth)**

These are the primary, authoritative sources maintained by the creators of C# and .NET. They are essential for every developer.

*   **C# Guide - Main Hub**
    *   **URL:** https://learn.microsoft.com/en-us/dotnet/csharp/
    *   **Description:** This is your north star for all things C#. It contains high-level tours of the language, fundamental concepts, tutorials, and a complete overview of all major features. It's the best place to start learning a new topic or to get a broad understanding of the language's capabilities.
    *   **Best for:** All developers, from absolute beginners to seasoned experts needing a refresher.

*   **C# Language Reference**
    *   **URL:** https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/
    *   **Description:** This is the ultimate technical dictionary for C# syntax. If you have a question about a specific keyword, operator, or feature, this reference provides the definitive, detailed explanation. It is less of a tutorial and more of a precise specification.
    *   **Best for:** Developers who need to understand the exact technical details of a language feature. The **Keywords** page within this reference is an invaluable bookmark: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/

*   **.NET Website - The Platform Hub**
    *   **URL:** https://dotnet.microsoft.com/en-us/
    *   **Description:** This is the main portal for the entire .NET platform. This is where you download the .NET SDK (the tools you need to build and run C# applications), read announcements, and see showcases of what people are building with .NET.
    *   **Best for:** Getting the tools, staying up-to-date with platform releases, and seeing the big picture of the .NET ecosystem.

### **Interactive Learning & Tutorials**

These resources are designed to provide a more hands-on, guided learning experience.

*   **.NET Learn**
    *   **URL:** https://dotnet.microsoft.com/en-us/learn
    *   **Description:** A sub-section of the main .NET site focused entirely on learning through interactive tutorials, videos, and guided learning paths. It offers browser-based code editors so you can start learning immediately without installing anything.
    *   **Best for:** Beginners who want a structured learning path and anyone who prefers hands-on, step-by-step tutorials.

### **Coding Style Guides**

Writing readable and maintainable code is crucial. These guides provide industry-standard conventions.

*   **Microsoft C# Coding Conventions**
    *   **URL:** https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions
    *   **Description:** Microsoft's official guidelines on naming, layout, and commenting conventions. Following these rules makes your code instantly familiar to any other C# developer and is the standard for most projects.
    *   **Best for:** All C# developers. Adhering to these conventions is highly recommended.

*   **Google C# Style Guide**
    *   **URL:** https://google.github.io/styleguide/csharp-style.html
    *   **Description:** Google's own internal style guide for C#. While it aligns with Microsoft's guide on many points, it offers a slightly different perspective and additional recommendations. It's a great second opinion from another major tech company.
    *   **Best for:** Developers looking for a comprehensive and respected alternative or supplement to the Microsoft conventions.

### **Premium Learning Resources**

ConstructG delivers one of the most structured and in-depth C# learning systems available. With real-world project plans, reference guides, and an AI assistant available 24/7, it's designed to take you from beginner to job-ready developer. Explore the ultimate bundle at: https://constructg.com/
