---
title: "Introduction to C#"
sidebar_position: 1
---

## What is C#?

C# (pronounced "C-sharp") is a modern, type-safe, object-oriented programming language developed by Microsoft. It was designed by Anders Hejlsberg and his team as part of the .NET initiative and was approved as a standard by ECMA and ISO.

Key characteristics of C#:

- **Type-safe**: The C# compiler ensures that operations are performed only on variables of appropriate types.
- **Object-oriented**: C# supports encapsulation, inheritance, and polymorphism.
- **Component-oriented**: C# provides features like properties, events, and attributes that make it ideal for building software components.
- **Modern**: C# continues to evolve with regular updates that introduce new features and improvements.
- **Versatile**: C# can be used to build a wide range of applications, from desktop to web to mobile to cloud services.

## Evolution of C# (Version History)

C# has evolved significantly since its initial release, with each version introducing new features and improvements:

| Version    | Year      | .NET Version   | Key Features                                                                                    |
| ---------- | --------- | -------------- | ----------------------------------------------------------------------------------------------- |
| C# 1.0     | 2002      | .NET 1.0       | First release with basic OOP features                                                           |
| C# 2.0     | 2005      | .NET 2.0       | Generics, nullable types, iterators, anonymous methods                                          |
| C# 3.0     | 2007      | .NET 3.5       | LINQ, lambda expressions, extension methods, anonymous types                                    |
| C# 4.0     | 2010      | .NET 4.0       | Dynamic binding, named/optional parameters, covariance/contravariance                           |
| C# 5.0     | 2012      | .NET 4.5       | Async/await pattern                                                                             |
| C# 6.0     | 2015      | .NET 4.6       | String interpolation, null-conditional operators, expression-bodied members                     |
| C# 7.0     | 2017      | .NET 4.7       | Tuples, pattern matching, local functions, ref returns                                          |
| C# 7.1-7.3 | 2017-2018 | .NET 4.7-4.7.2 | Async Main, default literal, tuple naming, ref locals/returns                                   |
| C# 8.0     | 2019      | .NET Core 3.0  | Nullable reference types, async streams, indices/ranges, switch expressions                     |
| C# 9.0     | 2020      | .NET 5         | Records, init-only properties, top-level statements, pattern matching enhancements              |
| C# 10.0    | 2021      | .NET 6         | Global using directives, file-scoped namespaces, record structs, interpolated string handlers   |
| C# 11.0    | 2022      | .NET 7         | Raw string literals, list patterns, required members, auto-default structs                      |
| C# 12.0    | 2023      | .NET 8         | Primary constructors, collection expressions, inline arrays, ref readonly parameters            |
| C# 13.0    | 2024      | .NET 9         | Params collections, ref struct interfaces, partial properties, field keyword (preview)          |
| C# 14.0    | 2025      | .NET 10        | Extension members, null-conditional assignment, field keyword, user-defined compound assignment |
| C# 15.0    | _Preview_ | .NET 11 (preview) | **Not yet released** (expected ~Nov 2026) — preview features: collection expression arguments, union types, closed hierarchies |

## C# and the .NET Platform

C# is closely tied to the .NET platform, which provides the runtime environment and libraries necessary for C# applications to run.

### Components of the .NET Platform:

1. **Common Language Runtime (CLR)**: The execution environment that manages memory, handles exceptions, and provides other services for running C# code.

2. **Base Class Library (BCL)**: A comprehensive collection of reusable types for common tasks such as string manipulation, data collection, database connectivity, and file I/O.

3. **Intermediate Language (IL)**: C# code is compiled into IL, which is then just-in-time (JIT) compiled to native code at runtime.

4. **Language Interoperability**: The .NET platform supports multiple languages (C#, F#, Visual Basic), allowing them to work together seamlessly.

### .NET Implementations:

- **.NET (formerly .NET Core)**: Cross-platform, open-source implementation for building apps that run on Windows, Linux, and macOS.
- **.NET Framework**: The original Windows-only implementation (now in maintenance mode).
- **Mono**: An open-source implementation of .NET for platforms where the official .NET runtime isn't available.
- **Xamarin**: An implementation for building mobile apps for iOS and Android.
- **.NET MAUI**: Multi-platform App UI for building cross-platform desktop and mobile apps.

### Key .NET Features:

- **Cross-platform**: Modern .NET runs on Windows, macOS, and Linux.
- **Open Source**: The .NET platform is open source and community-driven.
- **Performance**: .NET provides high-performance capabilities for demanding applications.
- **Microservices**: .NET is well-suited for building microservices architectures.
- **Cloud-Ready**: .NET integrates well with cloud platforms like Azure.

## Getting Started with C#

To start developing with C#, you'll need:

1. **Development Environment**: 
   - Visual Studio (Windows/Mac)
   - Visual Studio Code with C# extension (cross-platform)
   - JetBrains Rider (cross-platform)

2. **.NET SDK**: Download from [dotnet.microsoft.com](https://dotnet.microsoft.com/download)

3. **Basic Commands**:
   ```bash
   # Create a new console application
   dotnet new console -n MyFirstApp
   
   # Build the application
   dotnet build
   
   # Run the application
   dotnet run
   ```

4. **Hello World Example**:
   ```csharp
   // Using top-level statements (C# 9.0+)
   Console.WriteLine("Hello, World!");
   
   // Traditional approach
   namespace MyFirstApp
   {
       class Program
       {
           static void Main(string[] args)
           {
               Console.WriteLine("Hello, World!");
           }
       }
   }
   ```

## Resources for Learning C#

- [Microsoft Learn C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)
- [C# Language Specification](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/)
- [.NET API Browser](https://learn.microsoft.com/en-us/dotnet/api/)
- [C# Corner](https://www.c-sharpcorner.com/)
- [Stack Overflow C# Questions](https://stackoverflow.com/questions/tagged/c%23)
