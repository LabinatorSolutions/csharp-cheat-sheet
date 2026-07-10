---
title: "Regular Expressions"
sidebar_position: 20
---

Regular expressions (regex) provide a powerful way to search, match, and manipulate text based on patterns. C# supports regular expressions through the `System.Text.RegularExpressions` namespace.

## Basic Regex Patterns

### Character Patterns

```csharp
// Basic character matching
public void BasicCharacterMatching()
{
    // Literal characters
    bool isMatch = Regex.IsMatch("Hello, World!", "Hello");  // true
    
    // Character classes
    bool hasDigit = Regex.IsMatch("abc123", "\\d");  // true - contains a digit
    bool hasLetter = Regex.IsMatch("123", "\\w");    // true - contains a word character
    bool hasWhitespace = Regex.IsMatch("a b", "\\s");  // true - contains whitespace
    
    // Negated character classes
    bool hasNonDigit = Regex.IsMatch("123", "\\D");  // false - no non-digits
    bool hasNonWord = Regex.IsMatch("abc", "\\W");   // false - no non-word characters
    bool hasNonSpace = Regex.IsMatch(" ", "\\S");    // false - no non-whitespace
    
    // Character sets
    bool hasVowel = Regex.IsMatch("hello", "[aeiou]");  // true - contains a vowel
    bool hasConsonant = Regex.IsMatch("hello", "[^aeiou]");  // true - contains a consonant
    
    // Ranges
    bool hasLowercase = Regex.IsMatch("Hello", "[a-z]");  // true
    bool hasUppercase = Regex.IsMatch("hello", "[A-Z]");  // false
    bool hasLetterOrDigit = Regex.IsMatch("hello123", "[a-zA-Z0-9]");  // true
    
    // Escape special characters
    bool hasParenthesis = Regex.IsMatch("(test)", "\\(");  // true
    bool hasDot = Regex.IsMatch("hello.world", "\\.");  // true
    
    // Unicode categories
    bool hasGreekLetter = Regex.IsMatch("α", "\\p{IsGreek}");  // true
    bool hasPunctuation = Regex.IsMatch("Hello!", "\\p{P}");  // true
}
```

### Quantifiers

```csharp
// Quantifiers for repetition
public void QuantifierExamples()
{
    // Zero or more (*)
    bool starMatch = Regex.IsMatch("aaa", "a*");  // true - 0 or more 'a's
    
    // One or more (+)
    bool plusMatch = Regex.IsMatch("aaa", "a+");  // true - 1 or more 'a's
    bool plusNoMatch = Regex.IsMatch("bbb", "a+");  // false - no 'a's
    
    // Zero or one (?)
    bool optionalMatch = Regex.IsMatch("color", "colou?r");  // true - matches "color" or "colour"
    
    // Exact count {n}
    bool exactMatch = Regex.IsMatch("aaa", "a{3}");  // true - exactly 3 'a's
    bool exactNoMatch = Regex.IsMatch("aa", "a{3}");  // false - not 3 'a's
    
    // Range count {n,m}
    bool rangeMatch = Regex.IsMatch("aaa", "a{2,4}");  // true - between 2 and 4 'a's
    
    // At least n {n,}
    bool atLeastMatch = Regex.IsMatch("aaaaa", "a{2,}");  // true - at least 2 'a's
    
    // Greedy vs. lazy quantifiers
    string greedyResult = Regex.Match("<div>Hello</div>", "<div>.*</div>").Value;
    // greedyResult = "<div>Hello</div>" - matches as much as possible
    
    string lazyResult = Regex.Match("<div>Hello</div><div>World</div>", "<div>.*?</div>").Value;
    // lazyResult = "<div>Hello</div>" - matches as little as possible
}
```

### Anchors and Boundaries

```csharp
// Anchors and boundaries
public void AnchorExamples()
{
    // Start of string (^)
    bool startsWithHello = Regex.IsMatch("Hello, World!", "^Hello");  // true
    bool startsWithWorld = Regex.IsMatch("Hello, World!", "^World");  // false
    
    // End of string ($)
    bool endsWithWorld = Regex.IsMatch("Hello, World!", "World!$");  // true
    bool endsWithHello = Regex.IsMatch("Hello, World!", "Hello$");  // false
    
    // Word boundary (\b)
    bool wholeWordThe = Regex.IsMatch("The theater", "\\bthe\\b");  // false - case sensitive
    bool wholeWordTheIgnoreCase = Regex.IsMatch("The theater", "\\bthe\\b", RegexOptions.IgnoreCase);  // true
    bool notWholeWord = Regex.IsMatch("theater", "\\bthe\\b");  // false - "the" is part of "theater"
    
    // Not a word boundary (\B)
    bool notBoundary = Regex.IsMatch("theater", "\\Bthe");  // true - "the" is inside "theater"
    
    // Start of line (^ with multiline)
    string multiline = "First line\nSecond line";
    bool firstLineOnly = Regex.IsMatch(multiline, "^First", RegexOptions.Multiline);  // true
    bool secondLineOnly = Regex.IsMatch(multiline, "^Second", RegexOptions.Multiline);  // true
    
    // End of line ($ with multiline)
    bool endsFirstLine = Regex.IsMatch(multiline, "line$", RegexOptions.Multiline);  // true
}
```

### Grouping and Alternation

```csharp
// Grouping and alternation
public void GroupingAndAlternation()
{
    // Grouping with parentheses
    bool groupMatch = Regex.IsMatch("abc abc", "(abc){2}");  // true - "abc" repeated twice
    
    // Alternation with pipe (|)
    bool eitherOr = Regex.IsMatch("cat", "cat|dog");  // true - matches "cat" or "dog"
    bool eitherOrNoMatch = Regex.IsMatch("bird", "cat|dog");  // false - neither "cat" nor "dog"
    
    // Grouping with alternation
    bool colorMatch = Regex.IsMatch("red", "(red|green|blue)");  // true
    
    // Optional group
    bool optionalGroup = Regex.IsMatch("filename.txt", "filename(\\.txt)?");  // true
    bool optionalGroupNoExt = Regex.IsMatch("filename", "filename(\\.txt)?");  // true
    
    // Nested groups
    bool nestedMatch = Regex.IsMatch("abcdef", "(ab(cd)ef)");  // true
    
    // Non-capturing group (?:...)
    Match captureMatch = Regex.Match("abcdef", "(ab(cd)ef)");
    string group0 = captureMatch.Groups[0].Value;  // "abcdef" - entire match
    string group1 = captureMatch.Groups[1].Value;  // "abcdef" - first capturing group
    string group2 = captureMatch.Groups[2].Value;  // "cd" - second capturing group
    
    Match nonCaptureMatch = Regex.Match("abcdef", "(?:ab(cd)ef)");
    string ncGroup0 = nonCaptureMatch.Groups[0].Value;  // "abcdef" - entire match
    string ncGroup1 = nonCaptureMatch.Groups[1].Value;  // "cd" - only capturing group
}
```

## Regex Operations

### Matching and Validation

```csharp
// Basic matching and validation
public void BasicMatching()
{
    // Check if a string matches a pattern
    bool isMatch = Regex.IsMatch("test@example.com", @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    Console.WriteLine($"Is valid email: {isMatch}");
    
    // Get the first match
    Match match = Regex.Match("The price is $23.45", @"\$\d+\.\d+");
    if (match.Success)
    {
        Console.WriteLine($"Found price: {match.Value}");  // "$23.45"
    }
    
    // Get all matches
    MatchCollection matches = Regex.Matches("The prices are $23.45, $19.99, and $5.00", @"\$\d+\.\d+");
    foreach (Match m in matches)
    {
        Console.WriteLine($"Found price: {m.Value}");
    }
    
    // Using regex options
    bool caseInsensitiveMatch = Regex.IsMatch("Hello", "hello", RegexOptions.IgnoreCase);  // true
    
    // Validate with timeout
    try
    {
        bool isValidWithTimeout = Regex.IsMatch(
            "test@example.com",
            @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
            RegexOptions.None,
            TimeSpan.FromMilliseconds(100)
        );
    }
    catch (RegexMatchTimeoutException ex)
    {
        Console.WriteLine($"Regex timed out: {ex.Message}");
    }
}

// Common validation patterns
public void ValidationPatterns()
{
    // Email validation
    string emailPattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
    bool isValidEmail = Regex.IsMatch("user@example.com", emailPattern);
    
    // URL validation
    string urlPattern = @"^(https?|ftp)://[^\s/$.?#].[^\s]*$";
    bool isValidUrl = Regex.IsMatch("https://www.example.com", urlPattern);
    
    // Phone number validation (US format)
    string phonePattern = @"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$";
    bool isValidPhone = Regex.IsMatch("(123) 456-7890", phonePattern);
    
    // Date validation (MM/DD/YYYY)
    string datePattern = @"^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}$";
    bool isValidDate = Regex.IsMatch("12/31/2023", datePattern);
    
    // Password strength validation
    // At least 8 characters, one uppercase, one lowercase, one digit, one special character
    string passwordPattern = @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$";
    bool isStrongPassword = Regex.IsMatch("P@ssw0rd", passwordPattern);
    
    // IP address validation
    string ipPattern = @"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";
    bool isValidIp = Regex.IsMatch("192.168.1.1", ipPattern);
    
    // Zip code validation (US)
    string zipPattern = @"^\d{5}(?:[-\s]\d{4})?$";
    bool isValidZip = Regex.IsMatch("12345-6789", zipPattern);
}
```

### Capturing Groups

```csharp
// Working with capturing groups
public void CapturingGroups()
{
    // Basic capturing
    Match match = Regex.Match("John Smith", @"(\w+)\s(\w+)");
    if (match.Success)
    {
        string firstName = match.Groups[1].Value;  // "John"
        string lastName = match.Groups[2].Value;   // "Smith"
        Console.WriteLine($"First name: {firstName}, Last name: {lastName}");
    }
    
    // Named capturing groups
    Match namedMatch = Regex.Match("John Smith", @"(?<first>\w+)\s(?<last>\w+)");
    if (namedMatch.Success)
    {
        string firstName = namedMatch.Groups["first"].Value;  // "John"
        string lastName = namedMatch.Groups["last"].Value;    // "Smith"
        Console.WriteLine($"First name: {firstName}, Last name: {lastName}");
    }
    
    // Multiple captures of the same group
    Match repeatedMatch = Regex.Match("abc abc abc", @"(abc\s?)+");
    if (repeatedMatch.Success)
    {
        // Group 1 will contain only the last "abc" match
        string lastCapture = repeatedMatch.Groups[1].Value;  // "abc"
        
        // To get all captures of Group 1
        CaptureCollection captures = repeatedMatch.Groups[1].Captures;
        foreach (Capture capture in captures)
        {
            Console.WriteLine($"Capture: {capture.Value}");
        }
    }
    
    // Nested groups
    Match nestedMatch = Regex.Match("2023-05-15", @"(\d{4})-(\d{2})-(\d{2})");
    if (nestedMatch.Success)
    {
        string year = nestedMatch.Groups[1].Value;   // "2023"
        string month = nestedMatch.Groups[2].Value;  // "05"
        string day = nestedMatch.Groups[3].Value;    // "15"
        Console.WriteLine($"Date: {year}/{month}/{day}");
    }
    
    // Backreferences
    bool isPalindrome = Regex.IsMatch("radar", @"(\w)(\w)(\w)\2\1");  // true
    
    // Named backreferences
    bool isRepeated = Regex.IsMatch("abcabc", @"(?<chars>\w+)\k<chars>");  // true
}
```

### Search and Replace

```csharp
// Search and replace operations
public void SearchAndReplace()
{
    // Basic replacement
    string result = Regex.Replace("Hello, World!", "World", "Universe");
    Console.WriteLine(result);  // "Hello, Universe!"
    
    // Replace with pattern
    string formatted = Regex.Replace("2023-05-15", @"(\d{4})-(\d{2})-(\d{2})", "$2/$3/$1");
    Console.WriteLine(formatted);  // "05/15/2023"
    
    // Replace with named groups
    string namedFormatted = Regex.Replace(
        "2023-05-15",
        @"(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})",
        "${month}/${day}/${year}"
    );
    Console.WriteLine(namedFormatted);  // "05/15/2023"
    
    // Replace with a MatchEvaluator delegate
    string evaluated = Regex.Replace("1 + 2 = 3", @"\d+", match => 
    {
        int number = int.Parse(match.Value);
        return (number * 2).ToString();
    });
    Console.WriteLine(evaluated);  // "2 + 4 = 6"
    
    // Case conversion in replacement
    string caseConverted = Regex.Replace(
        "hello world",
        @"\b(\w)(\w+)\b",
        m => char.ToUpper(m.Groups[1].Value[0]) + m.Groups[2].Value
    );
    Console.WriteLine(caseConverted);  // "Hello World"
    
    // Replace all whitespace with a single space
    string normalized = Regex.Replace("This   has \t multiple  \n spaces", @"\s+", " ");
    Console.WriteLine(normalized);  // "This has multiple spaces"
    
    // Remove all non-alphanumeric characters
    string alphanumeric = Regex.Replace("Hello, World! 123", @"[^\w\s]", "");
    Console.WriteLine(alphanumeric);  // "Hello World 123"
}
```

### Splitting

```csharp
// Splitting strings with regex
public void RegexSplitting()
{
    // Split by whitespace
    string[] words = Regex.Split("This is a test", @"\s+");
    // ["This", "is", "a", "test"]
    
    // Split by multiple delimiters
    string[] parts = Regex.Split("apple,orange;banana|grape", @"[,;|]");
    // ["apple", "orange", "banana", "grape"]
    
    // Split but keep delimiters in the result
    string[] partsWithDelimiters = Regex.Split("apple,orange;banana", @"(,|;)");
    // ["apple", ",", "orange", ";", "banana"]
    
    // Split with a limit on the number of results
    string input = "one,two,three,four,five";
    string[] limitedParts = input.Split(new[] { ',' }, 3);
    // ["one", "two", "three,four,five"]
    
    // Split and remove empty entries
    string[] noEmptyParts = Regex.Split("word1,,word2,,,word3", ",")
        .Where(s => !string.IsNullOrEmpty(s))
        .ToArray();
    // ["word1", "word2", "word3"]
}
```

## Advanced Regex Features

### Lookahead and Lookbehind

```csharp
// Lookahead and lookbehind assertions
public void LookAroundAssertions()
{
    // Positive lookahead (?=...)
    // Match "apple" only if followed by "pie"
    MatchCollection applePies = Regex.Matches("apple pie, apple juice, apple tart", @"apple(?= pie)");
    foreach (Match m in applePies)
    {
        Console.WriteLine(m.Value);  // Outputs "apple" once
    }
    
    // Negative lookahead (?!...)
    // Match "apple" only if NOT followed by "pie"
    MatchCollection notPies = Regex.Matches("apple pie, apple juice, apple tart", @"apple(?! pie)");
    foreach (Match m in notPies)
    {
        Console.WriteLine(m.Value);  // Outputs "apple" twice (for juice and tart)
    }
    
    // Positive lookbehind (?<=...)
    // Match "123" only if preceded by "$"
    MatchCollection prices = Regex.Matches("$123, €123, 123", @"(?<=\$)\d+");
    foreach (Match m in prices)
    {
        Console.WriteLine(m.Value);  // Outputs "123" once
    }
    
    // Negative lookbehind (?<!...)
    // Match "123" only if NOT preceded by "$"
    MatchCollection notPrices = Regex.Matches("$123, €123, 123", @"(?<!\$)\d+");
    foreach (Match m in notPrices)
    {
        Console.WriteLine(m.Value);  // Outputs "123" twice (for €123 and 123)
    }
    
    // Combined lookaround
    // Match a word that has "a" before it and "s" after it
    MatchCollection surrounded = Regex.Matches("a cat s, a dog s, a bird", @"(?<=a )(\w+)(?= s)");
    foreach (Match m in surrounded)
    {
        Console.WriteLine(m.Value);  // Outputs "cat" and "dog"
    }
}
```

### Conditional Patterns

```csharp
// Conditional regex patterns
public void ConditionalPatterns()
{
    // If-then-else pattern: (?(condition)then|else)
    
    // If group 1 was captured, match "yes", otherwise match "no"
    Regex conditionalRegex = new Regex(@"(\d+)?(?(1)yes|no)");
    
    Match match1 = conditionalRegex.Match("123yes");
    Console.WriteLine(match1.Success);  // true
    
    Match match2 = conditionalRegex.Match("no");
    Console.WriteLine(match2.Success);  // true
    
    Match match3 = conditionalRegex.Match("123no");
    Console.WriteLine(match3.Success);  // false
    
    // Named condition
    Regex namedConditionalRegex = new Regex(@"(?<digits>\d+)?(?(digits)yes|no)");
    
    // Lookahead condition
    Regex lookaheadConditional = new Regex(@"(?((?=\d+$))yes|no)");
    
    Match match4 = lookaheadConditional.Match("123yes");
    Console.WriteLine(match4.Success);  // false
    
    Match match5 = lookaheadConditional.Match("yes123");
    Console.WriteLine(match5.Success);  // false
    
    Match match6 = lookaheadConditional.Match("123");
    Console.WriteLine(match6.Success);  // true (matches "yes" because the lookahead condition is true)
}
```

### Balancing Groups

```csharp
// Balancing groups for nested structures
public void BalancingGroups()
{
    // Match nested parentheses
    string nestedParens = "((a+b)*(c+d))";
    
    // This regex uses balancing groups to match nested parentheses
    string balancedParenRegex = @"
        \(                  # Match an opening parenthesis
        (
            (?<Open>\()     # Capture an opening parenthesis in 'Open' group
            |
            (?<-Open>\))    # Balance the 'Open' group by removing one capture for each closing parenthesis
            |
            [^()]           # Match any character that is not a parenthesis
        )*
        (?(Open)(?!))       # Assert that 'Open' group is empty (all parentheses are balanced)
        \)                  # Match a closing parenthesis
    ";
    
    Match balancedMatch = Regex.Match(
        nestedParens,
        balancedParenRegex,
        RegexOptions.IgnorePatternWhitespace
    );
    
    Console.WriteLine(balancedMatch.Value);  // "((a+b)*(c+d))"
    
    // Match nested HTML tags
    string htmlContent = "<div><p>Hello <span>world</span></p></div>";
    
    string balancedHtmlRegex = @"
        <(?<TagName>[a-zA-Z][a-zA-Z0-9]*)>  # Match opening tag and capture tag name
        (
            (?<Open><\k<TagName>>)          # Capture opening tag in 'Open' group
            |
            (?<-Open></\k<TagName>>)        # Balance 'Open' group with closing tag
            |
            (?!</?\k<TagName>>).            # Match any character that is not part of this tag
        )*
        (?(Open)(?!))                       # Assert that 'Open' group is empty
        </\k<TagName>>                      # Match closing tag
    ";
    
    Match htmlMatch = Regex.Match(
        htmlContent,
        balancedHtmlRegex,
        RegexOptions.IgnorePatternWhitespace | RegexOptions.Singleline
    );
    
    Console.WriteLine(htmlMatch.Value);  // "<div><p>Hello <span>world</span></p></div>"
}
```

### Atomic Grouping

```csharp
// Atomic grouping for efficiency
public void AtomicGrouping()
{
    // Regular grouping with backtracking
    Regex regularGroup = new Regex(@"(a+)a");
    Match regularMatch = regularGroup.Match("aaaa");
    Console.WriteLine(regularMatch.Success);  // true
    Console.WriteLine(regularMatch.Groups[1].Value);  // "aaa"
    
    // Atomic grouping (?>...) prevents backtracking
    Regex atomicGroup = new Regex(@"(?>a+)a");
    Match atomicMatch = atomicGroup.Match("aaaa");
    Console.WriteLine(atomicMatch.Success);  // false - the atomic group consumes all "a"s, leaving none for the final "a"
    
    // Example where atomic grouping improves performance
    string longText = new string('a', 10000) + "b";
    
    // Without atomic grouping - can be slow due to excessive backtracking
    Regex inefficientRegex = new Regex(@"a*b");
    
    // With atomic grouping - more efficient
    Regex efficientRegex = new Regex(@"(?>a*)b");
    
    // Measure performance
    Stopwatch sw1 = Stopwatch.StartNew();
    inefficientRegex.IsMatch(longText);
    sw1.Stop();
    
    Stopwatch sw2 = Stopwatch.StartNew();
    efficientRegex.IsMatch(longText);
    sw2.Stop();
    
    Console.WriteLine($"Without atomic grouping: {sw1.ElapsedMilliseconds}ms");
    Console.WriteLine($"With atomic grouping: {sw2.ElapsedMilliseconds}ms");
}
```

## Regex Options and Performance

### Regex Options

```csharp
// Using regex options
public void RegexOptions()
{
    // Case-insensitive matching
    bool ignoreCase = Regex.IsMatch("Hello", "hello", RegexOptions.IgnoreCase);  // true
    
    // Multiline mode - ^ and $ match start/end of line
    string multiline = "First line\nSecond line";
    bool multilineMatch = Regex.IsMatch(
        multiline,
        "^Second",
        RegexOptions.Multiline
    );  // true
    
    // Singleline mode - . matches any character including newlines
    bool singlelineMatch = Regex.IsMatch(
        "Line 1\nLine 2",
        "Line 1.Line 2",
        RegexOptions.Singleline
    );  // true
    
    // Ignore whitespace in pattern for better readability
    bool ignoreWhitespace = Regex.IsMatch(
        "abc123",
        @"
        abc     # Match 'abc'
        \d{3}   # Match 3 digits
        ",
        RegexOptions.IgnorePatternWhitespace
    );  // true
    
    // Explicit captures only
    Match explicitCapture = Regex.Match(
        "abc123",
        "(?<letters>[a-z]+)(?<digits>\\d+)",
        RegexOptions.ExplicitCapture
    );
    // Only named groups are captured, unnamed groups are non-capturing
    
    // Right-to-left matching
    Match rightToLeft = Regex.Match(
        "abc123def",
        "\\d+",
        RegexOptions.RightToLeft
    );
    Console.WriteLine(rightToLeft.Value);  // "123" - starts searching from the end
    
    // Compiled regex for better performance
    Regex compiledRegex = new Regex(
        @"\d+",
        RegexOptions.Compiled
    );
    
    // Combining options
    Regex combinedOptions = new Regex(
        @"hello",
        RegexOptions.IgnoreCase | RegexOptions.Compiled
    );
}
```

### Performance Optimization

```csharp
// Regex performance optimization
public void RegexPerformance()
{
    // 1. Reuse Regex objects
    // Bad: Creates a new Regex object for each call
    public bool IsValidEmail(string email)
    {
        return Regex.IsMatch(email, @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    }
    
    // Good: Reuse a static Regex object
    private static readonly Regex EmailRegex = new Regex(
        @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        RegexOptions.Compiled
    );
    
    public bool IsValidEmailOptimized(string email)
    {
        return EmailRegex.IsMatch(email);
    }
    
    // 2. Use RegexOptions.Compiled for frequently used patterns
    private static readonly Regex CompiledRegex = new Regex(
        @"\d+",
        RegexOptions.Compiled
    );
    
    // 3. Avoid catastrophic backtracking
    // Bad: Can cause excessive backtracking
    private static readonly Regex BadRegex = new Regex(@"(a+)+b");
    
    // Good: Rewritten to avoid backtracking issues
    private static readonly Regex GoodRegex = new Regex(@"a+b");
    
    // 4. Use atomic groups for efficiency
    private static readonly Regex AtomicRegex = new Regex(@"(?>a+)b");
    
    // 5. Use timeout to prevent regex denial of service (ReDoS)
    public bool IsMatchWithTimeout(string input, string pattern)
    {
        try
        {
            return Regex.IsMatch(
                input,
                pattern,
                RegexOptions.None,
                TimeSpan.FromMilliseconds(100)
            );
        }
        catch (RegexMatchTimeoutException)
        {
            Console.WriteLine("Regex timeout - possible ReDoS attack");
            return false;
        }
    }
    
    // 6. Use simpler alternatives when possible
    // Instead of regex for simple string operations
    public bool ContainsDigit(string input)
    {
        // Better than Regex.IsMatch(input, @"\d")
        return input.Any(char.IsDigit);
    }
    
    // 7. Limit backtracking with possessive quantifiers (not available in .NET)
    // In .NET, use atomic groups instead
    // (a+)b    - Standard quantifier with backtracking
    // (?>a+)b  - Atomic group (equivalent to possessive quantifier a++b)
}
```

### Regex Caching

```csharp
// Caching regex objects
public class RegexCache
{
    // Thread-safe cache of compiled regex objects
    private static readonly ConcurrentDictionary<string, Regex> Cache = new ConcurrentDictionary<string, Regex>();
    
    // Get a cached regex object
    public static Regex GetRegex(string pattern)
    {
        return Cache.GetOrAdd(pattern, p => new Regex(p, RegexOptions.Compiled));
    }
    
    // Get a cached regex object with options
    public static Regex GetRegex(string pattern, RegexOptions options)
    {
        string key = $"{pattern}|{options}";
        return Cache.GetOrAdd(key, _ => new Regex(pattern, options));
    }
    
    // Match with a cached regex
    public static bool IsMatch(string input, string pattern)
    {
        return GetRegex(pattern).IsMatch(input);
    }
    
    // Match with a cached regex and options
    public static bool IsMatch(string input, string pattern, RegexOptions options)
    {
        return GetRegex(pattern, options).IsMatch(input);
    }
    
    // Clear the cache
    public static void ClearCache()
    {
        Cache.Clear();
    }
}
```

## Common Regex Patterns

### String Validation

```csharp
// Common regex patterns for validation
public static class ValidationPatterns
{
    // Email address
    public static readonly Regex Email = new Regex(
        @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
        RegexOptions.Compiled
    );
    
    // URL
    public static readonly Regex Url = new Regex(
        @"^(https?|ftp)://[^\s/$.?#].[^\s]*$",
        RegexOptions.Compiled
    );
    
    // Phone number (US format)
    public static readonly Regex PhoneUS = new Regex(
        @"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$",
        RegexOptions.Compiled
    );
    
    // Date (MM/DD/YYYY)
    public static readonly Regex DateMMDDYYYY = new Regex(
        @"^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\d{4}$",
        RegexOptions.Compiled
    );
    
    // Date (YYYY-MM-DD)
    public static readonly Regex DateISO = new Regex(
        @"^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$",
        RegexOptions.Compiled
    );
    
    // Time (HH:MM:SS)
    public static readonly Regex Time24Hour = new Regex(
        @"^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$",
        RegexOptions.Compiled
    );
    
    // IP address (IPv4)
    public static readonly Regex IPv4 = new Regex(
        @"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
        RegexOptions.Compiled
    );
    
    // ZIP code (US)
    public static readonly Regex ZipCodeUS = new Regex(
        @"^\d{5}(?:[-\s]\d{4})?$",
        RegexOptions.Compiled
    );
    
    // Social Security Number (US)
    public static readonly Regex SSN = new Regex(
        @"^\d{3}-\d{2}-\d{4}$",
        RegexOptions.Compiled
    );
    
    // Credit card number
    public static readonly Regex CreditCard = new Regex(
        @"^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$",
        RegexOptions.Compiled
    );
    
    // Strong password
    // At least 8 characters, one uppercase, one lowercase, one digit, one special character
    public static readonly Regex StrongPassword = new Regex(
        @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$",
        RegexOptions.Compiled
    );
    
    // Hexadecimal color code
    public static readonly Regex HexColor = new Regex(
        @"^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$",
        RegexOptions.Compiled
    );
    
    // ISBN-10 or ISBN-13
    public static readonly Regex ISBN = new Regex(
        @"^(?:ISBN(?:-1[03])?:? )?(?=[-0-9 ]{17}$|[-0-9X ]{13}$|[0-9X]{10}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?(?:[0-9]+[- ]?){2}[0-9X]$",
        RegexOptions.Compiled
    );
}
```

### Text Parsing

```csharp
// Common regex patterns for text parsing
public static class ParsingPatterns
{
    // Extract all URLs from text
    public static IEnumerable<string> ExtractUrls(string text)
    {
        var matches = Regex.Matches(
            text,
            @"(https?|ftp)://[^\s/$.?#].[^\s]*",
            RegexOptions.IgnoreCase
        );
        
        return matches.Cast<Match>().Select(m => m.Value);
    }
    
    // Extract all email addresses from text
    public static IEnumerable<string> ExtractEmails(string text)
    {
        var matches = Regex.Matches(
            text,
            @"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}",
            RegexOptions.IgnoreCase
        );
        
        return matches.Cast<Match>().Select(m => m.Value);
    }
    
    // Extract all hashtags from text
    public static IEnumerable<string> ExtractHashtags(string text)
    {
        var matches = Regex.Matches(
            text,
            @"#[a-zA-Z0-9_]+"
        );
        
        return matches.Cast<Match>().Select(m => m.Value);
    }
    
    // Extract all mentions from text
    public static IEnumerable<string> ExtractMentions(string text)
    {
        var matches = Regex.Matches(
            text,
            @"@[a-zA-Z0-9_]+"
        );
        
        return matches.Cast<Match>().Select(m => m.Value);
    }
    
    // Parse CSV line (handles quoted fields with commas)
    public static string[] ParseCsvLine(string line)
    {
        // This handles fields that may contain commas if they are quoted
        var matches = Regex.Matches(
            line,
            @"(?:^|,)(?:""([^""]*)""|([^,]*))"
        );
        
        return matches.Cast<Match>()
            .Select(m => {
                var value = m.Groups[1].Success ? m.Groups[1].Value : m.Groups[2].Value;
                return value.Trim();
            })
            .ToArray();
    }
    
    // Extract key-value pairs from text
    public static Dictionary<string, string> ExtractKeyValuePairs(string text)
    {
        var matches = Regex.Matches(
            text,
            @"(\w+)\s*[:=]\s*([^;]+)"
        );
        
        return matches.Cast<Match>()
            .ToDictionary(
                m => m.Groups[1].Value.Trim(),
                m => m.Groups[2].Value.Trim()
            );
    }
    
    // Extract all numbers from text
    public static IEnumerable<decimal> ExtractNumbers(string text)
    {
        var matches = Regex.Matches(
            text,
            @"[-+]?\d*\.?\d+"
        );
        
        return matches.Cast<Match>()
            .Select(m => decimal.Parse(m.Value, CultureInfo.InvariantCulture));
    }
    
    // Extract all dates from text
    public static IEnumerable<DateTime> ExtractDates(string text)
    {
        var matches = Regex.Matches(
            text,
            @"\b(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})\b"
        );
        
        return matches.Cast<Match>()
            .Select(m => {
                try {
                    int month = int.Parse(m.Groups[1].Value);
                    int day = int.Parse(m.Groups[2].Value);
                    int year = int.Parse(m.Groups[3].Value);
                    
                    // Handle 2-digit years
                    if (year < 100) {
                        year += year < 50 ? 2000 : 1900;
                    }
                    
                    return new DateTime(year, month, day);
                }
                catch {
                    // Skip invalid dates
                    return DateTime.MinValue;
                }
            })
            .Where(d => d != DateTime.MinValue);
    }
}
```

### Text Transformation

```csharp
// Common regex patterns for text transformation
public static class TransformationPatterns
{
    // Convert snake_case to camelCase
    public static string SnakeToCamelCase(string input)
    {
        return Regex.Replace(
            input,
            @"_(\w)",
            match => match.Groups[1].Value.ToUpper()
        );
    }
    
    // Convert snake_case to PascalCase
    public static string SnakeToPascalCase(string input)
    {
        string camelCase = SnakeToCamelCase(input);
        return char.ToUpper(camelCase[0]) + camelCase.Substring(1);
    }
    
    // Convert camelCase to snake_case
    public static string CamelToSnakeCase(string input)
    {
        return Regex.Replace(
            input,
            @"([a-z0-9])([A-Z])",
            "$1_$2"
        ).ToLower();
    }
    
    // Convert PascalCase to snake_case
    public static string PascalToSnakeCase(string input)
    {
        return Regex.Replace(
            input,
            @"([a-z0-9])([A-Z])",
            "$1_$2"
        ).ToLower();
    }
    
    // Capitalize first letter of each word
    public static string CapitalizeWords(string input)
    {
        return Regex.Replace(
            input,
            @"\b(\w)",
            match => match.Value.ToUpper()
        );
    }
    
    // Remove all HTML tags
    public static string StripHtml(string html)
    {
        return Regex.Replace(
            html,
            @"<[^>]+>",
            string.Empty
        );
    }
    
    // Normalize whitespace (replace multiple spaces with a single space)
    public static string NormalizeWhitespace(string input)
    {
        return Regex.Replace(
            input,
            @"\s+",
            " "
        ).Trim();
    }
    
    // Mask credit card number (show only last 4 digits)
    public static string MaskCreditCard(string cardNumber)
    {
        return Regex.Replace(
            cardNumber,
            @"(?<=\S)\S(?=\S{4})",
            "*"
        );
    }
    
    // Format phone number as (XXX) XXX-XXXX
    public static string FormatPhoneNumber(string phoneNumber)
    {
        string digitsOnly = Regex.Replace(phoneNumber, @"\D", "");
        
        return Regex.Replace(
            digitsOnly,
            @"(\d{3})(\d{3})(\d{4})",
            "($1) $2-$3"
        );
    }
    
    // Convert URLs to HTML links
    public static string LinkifyUrls(string text)
    {
        return Regex.Replace(
            text,
            @"(https?|ftp)://[^\s/$.?#].[^\s]*",
            match => $"<a href=\"{match.Value}\">{match.Value}</a>"
        );
    }
    
    // Slugify a string (convert to URL-friendly format)
    public static string Slugify(string input)
    {
        // Convert to lowercase
        string result = input.ToLower();
        
        // Remove accents
        result = Regex.Replace(
            result,
            @"[àáâäåãæçèéêëìíîïòóôõöøùúûüýÿ]",
            match => "aaaaaaaaceeeeiiiioooooouuuuyy"["àáâäåãæçèéêëìíîïòóôõöøùúûüýÿ".IndexOf(match.Value[0])]
            .ToString()
        );
        
        // Replace non-alphanumeric characters with hyphens
        result = Regex.Replace(result, @"[^a-z0-9]", "-");
        
        // Replace multiple hyphens with a single hyphen
        result = Regex.Replace(result, @"-+", "-");
        
        // Remove leading and trailing hyphens
        result = Regex.Replace(result, @"^-+|-+$", "");
        
        return result;
    }
}
```

## Resources

- [Regular Expressions in .NET (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions)
- [Regular Expression Language - Quick Reference (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference)
- [Regex Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex)
- [Best Practices for Regular Expressions in .NET (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/best-practices)
- [Regular Expression Options (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-options)
