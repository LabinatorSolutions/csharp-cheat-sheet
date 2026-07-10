---
title: "Enums and Flags"
sidebar_position: 10
---

An `enum` (enumeration) is a value type that defines a set of named integral constants. Enums make code more readable and self-documenting by replacing "magic numbers" with meaningful names, and they give the compiler a chance to catch invalid values at compile time.

## Basic Enum Declaration

```csharp
public enum DayOfWeek
{
    Sunday,    // 0
    Monday,    // 1
    Tuesday,   // 2
    Wednesday, // 3
    Thursday,  // 4
    Friday,    // 5
    Saturday   // 6
}

// Usage
DayOfWeek today = DayOfWeek.Wednesday;
Console.WriteLine(today);          // Output: Wednesday
Console.WriteLine((int)today);     // Output: 3
```

By default, the first member is assigned the value `0`, and each subsequent member is incremented by 1. You can override any or all of the values explicitly:

```csharp
public enum HttpStatusCode
{
    Ok = 200,
    Created = 201,
    NotFound = 404,
    InternalServerError = 500
}
```

### Underlying Type

Enums are backed by an integral numeric type — `int` by default, but any of `byte`, `sbyte`, `short`, `ushort`, `int`, `uint`, `long`, or `ulong` can be specified explicitly. Choosing a smaller type reduces memory footprint for large arrays of enum values.

```csharp
public enum Suit : byte
{
    Clubs,
    Diamonds,
    Hearts,
    Spades
}
```

## Converting Between Enums and Their Underlying Type

```csharp
// Enum to underlying type
int value = (int)DayOfWeek.Friday;   // 5

// Underlying type to enum (unchecked — no validation)
DayOfWeek day = (DayOfWeek)5;        // Friday

// String to enum, safely
if (Enum.TryParse<DayOfWeek>("Monday", out DayOfWeek parsed))
{
    Console.WriteLine(parsed); // Monday
}

// String to enum, case-insensitive
Enum.TryParse<DayOfWeek>("monday", ignoreCase: true, out DayOfWeek ciParsed);

// Enum to string
string name = DayOfWeek.Tuesday.ToString(); // "Tuesday"
```

`(DayOfWeek)5` compiles and runs even though `5` isn't a valid `DayOfWeek` member if you'd only defined 0-3 — enum casts are **not range-checked** by default. Use `Enum.IsDefined` when a value's validity actually matters (e.g. it arrived from user input, a database, or deserialized JSON):

```csharp
if (!Enum.IsDefined(typeof(DayOfWeek), inputValue))
{
    throw new ArgumentOutOfRangeException(nameof(inputValue));
}
```

## Reflecting Over Enum Members

```csharp
// All values
foreach (DayOfWeek day in Enum.GetValues<DayOfWeek>())
{
    Console.WriteLine(day);
}

// All names
foreach (string name in Enum.GetNames<DayOfWeek>())
{
    Console.WriteLine(name);
}
```

## Pattern Matching with Enums

Switch expressions (C# 8+) pair naturally with enums, and the compiler warns if a switch expression doesn't handle every member:

```csharp
string GetDayType(DayOfWeek day) => day switch
{
    DayOfWeek.Saturday or DayOfWeek.Sunday => "Weekend",
    _ => "Weekday"
};
```

## The `[Flags]` Attribute

By default, an enum represents a single value from a fixed set. When a variable needs to represent a *combination* of values simultaneously (e.g. file permissions, feature toggles), mark the enum with `[Flags]` and give each member a distinct power-of-two value so the bit patterns don't overlap:

```csharp
[Flags]
public enum FilePermissions
{
    None    = 0,
    Read    = 1 << 0, // 1
    Write   = 1 << 1, // 2
    Execute = 1 << 2, // 4
    Delete  = 1 << 3, // 8
    All     = Read | Write | Execute | Delete // 15
}
```

### Combining and Testing Flags

```csharp
// Combine with bitwise OR
FilePermissions perms = FilePermissions.Read | FilePermissions.Write;

// Add a flag
perms |= FilePermissions.Execute;

// Remove a flag
perms &= ~FilePermissions.Execute;

// Test for a single flag — fast, preferred for hot paths
bool canRead = (perms & FilePermissions.Read) == FilePermissions.Read;

// Test for a single flag — more readable, but boxes the enum (allocates) on every call
bool canWrite = perms.HasFlag(FilePermissions.Write);
```

`HasFlag` is convenient and safe for multi-bit flag values (it doesn't have the `== value` pitfall bitwise AND has when checking a combined flag), but it boxes both operands on every call. In performance-sensitive code — tight loops, hot paths — prefer the direct bitwise check.

`[Flags]` also changes how `ToString()` renders a combined value — instead of falling back to the raw integer, it prints the matching flag names joined by commas:

```csharp
Console.WriteLine(perms); // "Read, Write" instead of "3"
```

## Enum Methods via Extension Methods

Enums can't declare instance methods directly, but extension methods give them method-like syntax:

```csharp
public static class DayOfWeekExtensions
{
    public static bool IsWeekend(this DayOfWeek day) =>
        day is DayOfWeek.Saturday or DayOfWeek.Sunday;
}

// Usage
bool isWeekend = DayOfWeek.Saturday.IsWeekend(); // true
```

## Best Practices

- Give a `[Flags]` enum an explicit `None = 0` member — every flags enum has an implicit "nothing selected" state, and naming it makes intent clear.
- Assign explicit values to `[Flags]` members rather than relying on auto-increment — auto-increment produces sequential values (0, 1, 2, 3...) which don't form valid independent bit flags past the second member.
- Avoid enums for values that will keep growing indefinitely (e.g. a list of countries) — a lookup table or database-backed reference is usually a better fit.
- Don't use `Enum.IsDefined` in hot paths — it uses reflection internally and is relatively slow; validate once at the boundary (e.g. deserialization) rather than on every use.

## Resources

- [Enumeration Types (C# Reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/enum)
- [Enum Class (System Namespace)](https://learn.microsoft.com/en-us/dotnet/api/system.enum)
- [FlagsAttribute Class](https://learn.microsoft.com/en-us/dotnet/api/system.flagsattribute)
- [Design Guidelines for Flag Enums](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/enum)
