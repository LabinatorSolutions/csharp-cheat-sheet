---
title: "Asynchronous Programming"
sidebar_position: 17
---

Asynchronous programming in C# allows you to write non-blocking code that can improve the responsiveness and scalability of your applications. The async/await pattern introduced in C# 5.0 makes asynchronous programming much more accessible.

## Async/Await Basics

### Async Methods

```csharp
// Basic async method that returns a Task
public async Task DoWorkAsync()
{
    Console.WriteLine("Starting work...");
    
    // Simulate asynchronous work with a delay
    await Task.Delay(1000);
    
    Console.WriteLine("Work completed");
}

// Async method that returns a Task<T>
public async Task<int> CalculateAsync(int a, int b)
{
    Console.WriteLine("Starting calculation...");
    
    // Simulate asynchronous calculation
    await Task.Delay(1000);
    
    return a + b;
}

// Async method with void return type (generally avoid except for event handlers)
public async void Button_Click(object sender, EventArgs e)
{
    try
    {
        await DoWorkAsync();
        MessageBox.Show("Operation completed successfully!");
    }
    catch (Exception ex)
    {
        // Exception handling is crucial in async void methods
        // as exceptions can't be caught by the caller
        MessageBox.Show($"Error: {ex.Message}");
    }
}

// Calling async methods
public async Task CallAsyncMethodsAsync()
{
    // Await the Task
    await DoWorkAsync();
    
    // Await and get the result from Task<T>
    int result = await CalculateAsync(5, 3);
    Console.WriteLine($"Result: {result}");
    
    // Call without await (fire and forget - generally avoid)
    // DoWorkAsync();  // This doesn't wait for completion
    
    // Store the task for later awaiting
    Task<int> calculationTask = CalculateAsync(10, 20);
    
    // Do other work...
    
    // Await the stored task
    int calculationResult = await calculationTask;
    Console.WriteLine($"Calculation result: {calculationResult}");
}
```

### Async Method Signatures

```csharp
// Recommended async method signatures
public async Task MethodAsync()
{
    await Task.Delay(100);
}

public async Task<int> MethodWithResultAsync()
{
    await Task.Delay(100);
    return 42;
}

// Async method in interface
public interface IDataService
{
    Task<Data> GetDataAsync(int id);
}

// Implementing the interface
public class DataService : IDataService
{
    public async Task<Data> GetDataAsync(int id)
    {
        // Implementation...
        await Task.Delay(100);
        return new Data { Id = id, Name = "Sample" };
    }
}

// Async method in abstract class
public abstract class BaseService
{
    public abstract Task<Data> GetDataAsync(int id);
    
    public async Task<List<Data>> GetAllDataAsync()
    {
        // Implementation...
        await Task.Delay(100);
        return new List<Data>();
    }
}

// Async lambda expressions
Func<Task> asyncAction = async () => 
{
    await Task.Delay(100);
    Console.WriteLine("Async lambda completed");
};

Func<int, Task<string>> asyncFunc = async (id) => 
{
    await Task.Delay(100);
    return $"Item {id}";
};
```

### Awaiting Tasks

```csharp
// Basic await
public async Task BasicAwaitAsync()
{
    Console.WriteLine("Before await");
    await Task.Delay(1000);
    Console.WriteLine("After await");  // Executes after the delay completes
}

// Awaiting a Task<T>
public async Task AwaitTaskWithResultAsync()
{
    Task<int> task = CalculateAsync(5, 3);
    
    // Do other work while the calculation is in progress...
    
    int result = await task;  // Waits for the task to complete and gets the result
    Console.WriteLine($"Result: {result}");
}

// Awaiting multiple tasks sequentially
public async Task SequentialAwaitsAsync()
{
    int result1 = await CalculateAsync(5, 3);
    int result2 = await CalculateAsync(10, 20);
    int sum = result1 + result2;
    
    Console.WriteLine($"Sum: {sum}");
}

// Awaiting multiple tasks in parallel
public async Task ParallelAwaitsAsync()
{
    // Start both tasks
    Task<int> task1 = CalculateAsync(5, 3);
    Task<int> task2 = CalculateAsync(10, 20);
    
    // Await both tasks to complete
    int result1 = await task1;
    int result2 = await task2;
    
    int sum = result1 + result2;
    Console.WriteLine($"Sum: {sum}");
}

// Using Task.WhenAll to await multiple tasks
public async Task WhenAllAsync()
{
    Task<int> task1 = CalculateAsync(5, 3);
    Task<int> task2 = CalculateAsync(10, 20);
    Task<int> task3 = CalculateAsync(7, 8);
    
    // Await all tasks to complete
    int[] results = await Task.WhenAll(task1, task2, task3);
    
    int sum = results.Sum();
    Console.WriteLine($"Sum: {sum}");
}

// Using Task.WhenAny to await the first completed task
public async Task WhenAnyAsync()
{
    Task<int> task1 = CalculateAsync(5, 3);
    Task<int> task2 = CalculateAsync(10, 20);
    
    // Await the first task to complete
    Task<int> completedTask = await Task.WhenAny(task1, task2);
    
    int firstResult = await completedTask;
    Console.WriteLine($"First result: {firstResult}");
    
    // Await the other task if needed
    if (completedTask == task1)
    {
        int secondResult = await task2;
        Console.WriteLine($"Second result: {secondResult}");
    }
    else
    {
        int secondResult = await task1;
        Console.WriteLine($"Second result: {secondResult}");
    }
}
```

### ConfigureAwait

```csharp
// Using ConfigureAwait(true) - default behavior
public async Task WithContextAsync()
{
    await Task.Delay(1000).ConfigureAwait(true);
    // Code here runs on the original synchronization context
    // (e.g., UI thread in a GUI application)
}

// Using ConfigureAwait(false) - optimization for library code
public async Task WithoutContextAsync()
{
    await Task.Delay(1000).ConfigureAwait(false);
    // Code here runs on any available thread from the thread pool
    // This can improve performance in library code
}

// Example in a library method
public async Task<string> LibraryMethodAsync()
{
    // Use ConfigureAwait(false) in library code to avoid forcing
    // continuation on the original context
    string data = await FetchDataAsync().ConfigureAwait(false);
    data = await ProcessDataAsync(data).ConfigureAwait(false);
    return data;
}

// Example in UI code
public async void Button_Click(object sender, EventArgs e)
{
    // In UI code, typically use the default ConfigureAwait(true)
    // to ensure UI updates happen on the UI thread
    string result = await LibraryMethodAsync();
    ResultTextBox.Text = result;  // This needs to run on the UI thread
}
```

## Task-based Asynchronous Pattern (TAP)

### Creating Tasks

```csharp
// Creating a completed task
Task completedTask = Task.CompletedTask;

// Creating a completed task with a result
Task<int> completedTaskWithResult = Task.FromResult(42);

// Creating a faulted task
Task<int> faultedTask = Task.FromException<int>(new InvalidOperationException("Task failed"));

// Creating a canceled task
Task<int> canceledTask = Task.FromCanceled<int>(new CancellationToken(true));

// Creating a task that runs a delegate
Task delegateTask = new Task(() => Console.WriteLine("Task running"));
delegateTask.Start();  // Must explicitly start the task

// Creating and starting a task in one step
Task startedTask = Task.Run(() => Console.WriteLine("Task running"));

// Creating a task with a result
Task<int> resultTask = Task.Run(() => 
{
    Console.WriteLine("Calculating...");
    return 42;
});

// Creating a task with Task.Factory
Task factoryTask = Task.Factory.StartNew(() => Console.WriteLine("Task running"));

// Creating a long-running task
Task longRunningTask = Task.Factory.StartNew(() => 
{
    // Long-running operation
    Thread.Sleep(5000);
}, TaskCreationOptions.LongRunning);
```

### Task Continuation

```csharp
// Basic continuation
public async Task BasicContinuationAsync()
{
    Task<int> task = Task.Run(() => 42);
    
    // Using ContinueWith
    Task<string> continuation = task.ContinueWith(t => 
    {
        int result = t.Result;
        return $"The result is {result}";
    });
    
    string message = await continuation;
    Console.WriteLine(message);
}

// Continuation with TaskContinuationOptions
public void ContinuationOptionsExample()
{
    Task<int> task = Task.Run(() => 42);
    
    // Continue only if the task completed successfully
    Task successContinuation = task.ContinueWith(t => 
    {
        Console.WriteLine($"Success: {t.Result}");
    }, TaskContinuationOptions.OnlyOnRanToCompletion);
    
    // Continue only if the task faulted
    Task failureContinuation = task.ContinueWith(t => 
    {
        Console.WriteLine($"Failure: {t.Exception.InnerException.Message}");
    }, TaskContinuationOptions.OnlyOnFaulted);
    
    // Continue only if the task was canceled
    Task canceledContinuation = task.ContinueWith(t => 
    {
        Console.WriteLine("Task was canceled");
    }, TaskContinuationOptions.OnlyOnCanceled);
}

// Multiple continuations
public void MultipleContinuations()
{
    Task<int> task = Task.Run(() => 42);
    
    // Multiple independent continuations
    Task continuation1 = task.ContinueWith(t => Console.WriteLine($"Continuation 1: {t.Result}"));
    Task continuation2 = task.ContinueWith(t => Console.WriteLine($"Continuation 2: {t.Result}"));
    
    // Chained continuations
    Task<int> firstContinuation = task.ContinueWith(t => t.Result * 2);
    Task<int> secondContinuation = firstContinuation.ContinueWith(t => t.Result + 10);
    Task<string> thirdContinuation = secondContinuation.ContinueWith(t => $"Final result: {t.Result}");
    
    Console.WriteLine(thirdContinuation.Result);  // Blocks until the result is available
}

// Async/await vs ContinueWith
public async Task AsyncAwaitVsContinueWithAsync()
{
    // Using async/await (generally preferred)
    Task<int> task = Task.Run(() => 42);
    int result = await task;
    string message = $"The result is {result}";
    Console.WriteLine(message);
    
    // Equivalent using ContinueWith
    Task<int> task2 = Task.Run(() => 42);
    Task<string> continuation = task2.ContinueWith(t => 
    {
        int res = t.Result;
        return $"The result is {res}";
    });
    string message2 = await continuation;
    Console.WriteLine(message2);
}
```

### Task Exceptions

```csharp
// Handling exceptions with async/await
public async Task HandleExceptionsWithAwaitAsync()
{
    try
    {
        await ThrowExceptionAsync();
    }
    catch (InvalidOperationException ex)
    {
        Console.WriteLine($"Caught exception: {ex.Message}");
    }
}

public async Task ThrowExceptionAsync()
{
    await Task.Delay(100);
    throw new InvalidOperationException("Something went wrong");
}

// Handling exceptions with ContinueWith
public void HandleExceptionsWithContinueWith()
{
    Task task = Task.Run(() => 
    {
        throw new InvalidOperationException("Something went wrong");
    });
    
    task.ContinueWith(t => 
    {
        if (t.IsFaulted)
        {
            Exception ex = t.Exception.InnerException;
            Console.WriteLine($"Caught exception: {ex.Message}");
        }
    });
}

// Handling AggregateException
public async Task HandleAggregateExceptionAsync()
{
    try
    {
        // Start multiple tasks
        Task task1 = Task.Run(() => { throw new InvalidOperationException("Error 1"); });
        Task task2 = Task.Run(() => { throw new ArgumentException("Error 2"); });
        
        // Wait for all tasks to complete
        await Task.WhenAll(task1, task2);
    }
    catch (AggregateException ex)
    {
        // This won't be reached with await, but would be with Task.Wait()
        foreach (var innerEx in ex.InnerExceptions)
        {
            Console.WriteLine($"Inner exception: {innerEx.Message}");
        }
    }
    catch (Exception ex)
    {
        // With await, only the first exception is thrown
        Console.WriteLine($"Caught exception: {ex.Message}");
    }
}

// Using Task.Wait() with exception handling
public void HandleExceptionsWithWait()
{
    Task task = Task.Run(() => 
    {
        throw new InvalidOperationException("Something went wrong");
    });
    
    try
    {
        task.Wait();  // Blocks until the task completes
    }
    catch (AggregateException ex)
    {
        // Task.Wait() wraps exceptions in AggregateException
        foreach (var innerEx in ex.InnerExceptions)
        {
            Console.WriteLine($"Inner exception: {innerEx.Message}");
        }
    }
}
```

## Asynchronous Streams (C# 8.0+)

### IAsyncEnumerable

```csharp
// Producing an asynchronous stream
public async IAsyncEnumerable<int> GenerateNumbersAsync()
{
    for (int i = 0; i < 10; i++)
    {
        // Simulate asynchronous work
        await Task.Delay(100);
        yield return i;
    }
}

// Consuming an asynchronous stream
public async Task ConsumeAsyncStreamAsync()
{
    await foreach (int number in GenerateNumbersAsync())
    {
        Console.WriteLine(number);
    }
}

// Filtering an asynchronous stream
public async Task FilterAsyncStreamAsync()
{
    await foreach (int number in GenerateNumbersAsync())
    {
        if (number % 2 == 0)
        {
            Console.WriteLine($"Even number: {number}");
        }
    }
}

// Using ConfigureAwait with async streams
public async Task ConfigureAwaitWithAsyncStreamAsync()
{
    await foreach (int number in GenerateNumbersAsync().ConfigureAwait(false))
    {
        // This code runs without capturing the original synchronization context
        Console.WriteLine(number);
    }
}

// Cancellation with async streams
public async Task CancellationWithAsyncStreamAsync(CancellationToken cancellationToken)
{
    try
    {
        await foreach (int number in GenerateNumbersAsync().WithCancellation(cancellationToken))
        {
            Console.WriteLine(number);
            
            // Check cancellation manually if needed
            cancellationToken.ThrowIfCancellationRequested();
        }
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("Operation was canceled");
    }
}

// Async stream with cancellation support
public async IAsyncEnumerable<int> GenerateNumbersWithCancellationAsync(
    [EnumeratorCancellation] CancellationToken cancellationToken = default)
{
    for (int i = 0; i < 10; i++)
    {
        // Check cancellation before each delay
        cancellationToken.ThrowIfCancellationRequested();
        
        // Simulate asynchronous work
        await Task.Delay(100, cancellationToken);
        yield return i;
    }
}
```

## Cancellation

### CancellationToken

```csharp
// Creating a CancellationToken
public async Task CancellationExampleAsync()
{
    // Create a CancellationTokenSource
    using (CancellationTokenSource cts = new CancellationTokenSource())
    {
        // Get the token
        CancellationToken token = cts.Token;
        
        // Start a task that can be canceled
        Task task = DoWorkAsync(token);
        
        // Simulate waiting for user input to cancel
        await Task.Delay(2000);
        
        // Cancel the operation
        cts.Cancel();
        
        try
        {
            // Wait for the task to complete or be canceled
            await task;
            Console.WriteLine("Task completed successfully");
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Task was canceled");
        }
    }
}

// Method that supports cancellation
public async Task DoWorkAsync(CancellationToken cancellationToken)
{
    for (int i = 0; i < 10; i++)
    {
        // Check if cancellation was requested
        cancellationToken.ThrowIfCancellationRequested();
        
        // Do some work
        Console.WriteLine($"Working... {i}");
        
        // Delay that also respects cancellation
        await Task.Delay(500, cancellationToken);
    }
}

// Cancellation with timeout
public async Task CancellationWithTimeoutAsync()
{
    using (CancellationTokenSource cts = new CancellationTokenSource(5000))  // 5-second timeout
    {
        try
        {
            await DoWorkAsync(cts.Token);
            Console.WriteLine("Task completed within timeout");
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Task was canceled due to timeout");
        }
    }
}

// Combining cancellation tokens
public async Task CombinedCancellationAsync()
{
    using (CancellationTokenSource cts1 = new CancellationTokenSource())
    using (CancellationTokenSource cts2 = new CancellationTokenSource())
    using (CancellationTokenSource linkedCts = CancellationTokenSource.CreateLinkedTokenSource(cts1.Token, cts2.Token))
    {
        // Start a task with the linked token
        Task task = DoWorkAsync(linkedCts.Token);
        
        // Cancel from either source
        await Task.Delay(2000);
        cts1.Cancel();  // This will also cancel the linked token
        
        try
        {
            await task;
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Task was canceled");
        }
    }
}

// Registering cancellation callbacks
public void CancellationCallbacks()
{
    using (CancellationTokenSource cts = new CancellationTokenSource())
    {
        CancellationToken token = cts.Token;
        
        // Register a callback that will be invoked when cancellation is requested
        token.Register(() => 
        {
            Console.WriteLine("Cancellation was requested");
            // Clean up resources, etc.
        });
        
        // Register multiple callbacks
        token.Register(() => Console.WriteLine("Callback 1"));
        token.Register(() => Console.WriteLine("Callback 2"));
        
        // Cancel and trigger the callbacks
        cts.Cancel();
    }
}
```

## Asynchronous Programming Patterns

### Task-based Asynchronous Pattern (TAP)

```csharp
// Modern TAP method
public Task<string> GetDataAsync(string url, CancellationToken cancellationToken = default)
{
    // Implementation using HttpClient
    using (HttpClient client = new HttpClient())
    {
        return client.GetStringAsync(url);
    }
}

// Calling a TAP method
public async Task CallTapMethodAsync()
{
    string data = await GetDataAsync("https://api.example.com/data");
    Console.WriteLine(data);
}
```

### Event-based Asynchronous Pattern (EAP)

```csharp
// Legacy EAP method (pre-async/await)
public void DownloadDataEap(string url)
{
    WebClient client = new WebClient();
    
    // Subscribe to the event
    client.DownloadStringCompleted += (sender, e) => 
    {
        if (e.Error != null)
        {
            Console.WriteLine($"Error: {e.Error.Message}");
        }
        else if (e.Cancelled)
        {
            Console.WriteLine("Download canceled");
        }
        else
        {
            Console.WriteLine($"Downloaded: {e.Result}");
        }
    };
    
    // Start the asynchronous operation
    client.DownloadStringAsync(new Uri(url));
}

// Converting EAP to TAP
public Task<string> DownloadDataAsync(string url)
{
    WebClient client = new WebClient();
    TaskCompletionSource<string> tcs = new TaskCompletionSource<string>();
    
    client.DownloadStringCompleted += (sender, e) => 
    {
        if (e.Error != null)
        {
            tcs.SetException(e.Error);
        }
        else if (e.Cancelled)
        {
            tcs.SetCanceled();
        }
        else
        {
            tcs.SetResult(e.Result);
        }
    };
    
    client.DownloadStringAsync(new Uri(url));
    
    return tcs.Task;
}
```

### Asynchronous Programming Model (APM)

```csharp
// Legacy APM method (pre-async/await)
public void ReadFileApm(string filePath)
{
    FileStream fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
    byte[] buffer = new byte[1024];
    
    // Begin the asynchronous operation
    fileStream.BeginRead(buffer, 0, buffer.Length, ar => 
    {
        try
        {
            // End the asynchronous operation
            int bytesRead = fileStream.EndRead(ar);
            Console.WriteLine($"Read {bytesRead} bytes");
            
            // Process the data...
            
            fileStream.Dispose();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
            fileStream.Dispose();
        }
    }, null);
}

// Converting APM to TAP
public Task<int> ReadFileAsync(string filePath)
{
    FileStream fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
    byte[] buffer = new byte[1024];
    
    return Task<int>.Factory.FromAsync(
        fileStream.BeginRead,
        fileStream.EndRead,
        buffer,
        0,
        buffer.Length,
        null);
}
```

## ValueTask and ValueTask<T> (C# 7.0+)

### Using ValueTask

```csharp
// Method that returns ValueTask<T>
public ValueTask<int> GetValueAsync(bool useCache)
{
    if (useCache && _cachedValue.HasValue)
    {
        // Return the cached value without creating a Task
        return new ValueTask<int>(_cachedValue.Value);
    }
    
    // Fall back to creating a Task
    return new ValueTask<int>(CalculateValueAsync());
}

private int? _cachedValue;
private async Task<int> CalculateValueAsync()
{
    await Task.Delay(100);
    int result = 42;
    _cachedValue = result;
    return result;
}

// Method that returns ValueTask
public ValueTask DoWorkAsync(bool skipWork)
{
    if (skipWork)
    {
        // Return a completed ValueTask without creating a Task
        return ValueTask.CompletedTask;
    }
    
    // Fall back to creating a Task
    return new ValueTask(DoActualWorkAsync());
}

private async Task DoActualWorkAsync()
{
    await Task.Delay(100);
    Console.WriteLine("Work completed");
}

// Awaiting ValueTask
public async Task UseValueTaskAsync()
{
    int value = await GetValueAsync(useCache: false);
    Console.WriteLine($"Value: {value}");
    
    await DoWorkAsync(skipWork: false);
}

// Important: ValueTask should only be awaited once
public async Task CorrectValueTaskUsageAsync()
{
    ValueTask<int> valueTask = GetValueAsync(useCache: false);
    
    // Correct: Await the ValueTask directly
    int result = await valueTask;
    
    // Incorrect: Awaiting the same ValueTask multiple times
    // int result1 = await valueTask;
    // int result2 = await valueTask;  // This may throw or return incorrect results
    
    // Incorrect: Storing and awaiting later in certain cases
    // if (condition)
    // {
    //     await valueTask;
    // }
    // else
    // {
    //     // Do something else, then...
    //     await valueTask;  // Problematic
    // }
}

// Converting ValueTask to Task if multiple awaits are needed
public async Task ConvertToTaskAsync()
{
    ValueTask<int> valueTask = GetValueAsync(useCache: false);
    
    // Convert to Task if you need to await multiple times
    Task<int> task = valueTask.AsTask();
    
    int result1 = await task;
    int result2 = await task;  // Safe with Task
}
```

## Parallel Programming

### Task Parallel Library (TPL)

```csharp
// Parallel.For
public void ParallelForExample()
{
    Parallel.For(0, 10, i => 
    {
        Console.WriteLine($"Processing item {i} on thread {Thread.CurrentThread.ManagedThreadId}");
        // Do work...
    });
}

// Parallel.ForEach
public void ParallelForEachExample()
{
    List<string> items = new List<string> { "Item1", "Item2", "Item3", "Item4", "Item5" };
    
    Parallel.ForEach(items, item => 
    {
        Console.WriteLine($"Processing {item} on thread {Thread.CurrentThread.ManagedThreadId}");
        // Do work...
    });
}

// Parallel.Invoke
public void ParallelInvokeExample()
{
    Parallel.Invoke(
        () => ProcessItem("Item1"),
        () => ProcessItem("Item2"),
        () => ProcessItem("Item3")
    );
}

private void ProcessItem(string item)
{
    Console.WriteLine($"Processing {item} on thread {Thread.CurrentThread.ManagedThreadId}");
    // Do work...
}

// Parallel with cancellation
public void ParallelWithCancellation()
{
    CancellationTokenSource cts = new CancellationTokenSource();
    
    try
    {
        Parallel.For(0, 1000, new ParallelOptions { CancellationToken = cts.Token }, i => 
        {
            if (i == 500)
            {
                cts.Cancel();  // Cancel when i reaches 500
            }
            
            Console.WriteLine($"Processing item {i}");
            Thread.Sleep(10);  // Simulate work
        });
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("Operation was canceled");
    }
}

// Parallel LINQ (PLINQ)
public void PlinqExample()
{
    int[] numbers = Enumerable.Range(1, 1000000).ToArray();
    
    // Sequential LINQ
    var evenNumbersSequential = numbers.Where(n => n % 2 == 0).ToList();
    
    // Parallel LINQ
    var evenNumbersParallel = numbers.AsParallel().Where(n => n % 2 == 0).ToList();
    
    // Controlling the degree of parallelism
    var result = numbers
        .AsParallel()
        .WithDegreeOfParallelism(Environment.ProcessorCount)
        .Where(n => n % 2 == 0)
        .ToList();
    
    // Preserving order
    var orderedResult = numbers
        .AsParallel()
        .AsOrdered()
        .Where(n => n % 2 == 0)
        .ToList();
    
    // Handling exceptions in PLINQ
    try
    {
        var results = numbers
            .AsParallel()
            .Where(n => 
            {
                if (n == 500000)
                {
                    throw new InvalidOperationException("Error processing item");
                }
                return n % 2 == 0;
            })
            .ToList();
    }
    catch (AggregateException ex)
    {
        foreach (var innerEx in ex.InnerExceptions)
        {
            Console.WriteLine($"Error: {innerEx.Message}");
        }
    }
}
```

## Best Practices

### Async Method Naming

```csharp
// DO use the Async suffix for async methods
public async Task<string> GetDataAsync()
{
    await Task.Delay(100);
    return "Data";
}

// DO use the Async suffix even when implementing an interface
public interface IDataService
{
    Task<string> GetDataAsync();
}

// DO use the Async suffix for overridden methods
public override async Task<string> GetDataAsync()
{
    await Task.Delay(100);
    return "Overridden data";
}

// DON'T use the Async suffix for synchronous methods that return Task
public Task<string> GetData()  // Not GetDataAsync
{
    return Task.FromResult("Data");
}
```

### Exception Handling

```csharp
// DO handle exceptions in async methods
public async Task HandleExceptionsAsync()
{
    try
    {
        await FetchDataAsync();
    }
    catch (HttpRequestException ex)
    {
        // Handle network errors
        Console.WriteLine($"Network error: {ex.Message}");
    }
    catch (JsonException ex)
    {
        // Handle parsing errors
        Console.WriteLine($"JSON parsing error: {ex.Message}");
    }
    catch (Exception ex)
    {
        // Handle other errors
        Console.WriteLine($"Unexpected error: {ex.Message}");
    }
}

// DON'T swallow exceptions without proper handling
public async Task DoNotSwallowExceptionsAsync()
{
    try
    {
        await FetchDataAsync();
    }
    catch (Exception)
    {
        // Bad: Swallowing the exception without handling or logging
    }
}

// DO use exception filters for logging without catching
public async Task LogWithoutCatchingAsync()
{
    try
    {
        await FetchDataAsync();
    }
    catch (Exception ex) when (LogException(ex))
    {
        // This block never executes
    }
}

private bool LogException(Exception ex)
{
    Console.WriteLine($"Exception: {ex.Message}");
    return false;  // Return false to allow the exception to continue propagating
}
```

### Async Void

```csharp
// DON'T use async void except for event handlers
public async void AsyncVoidMethod()  // Bad practice
{
    await Task.Delay(100);
    throw new Exception("This exception is unobservable");
}

// DO use async Task instead
public async Task AsyncTaskMethod()  // Good practice
{
    await Task.Delay(100);
    throw new Exception("This exception can be caught by the caller");
}

// DO use async void for event handlers
public async void Button_Click(object sender, EventArgs e)  // Acceptable
{
    try
    {
        await AsyncTaskMethod();
    }
    catch (Exception ex)
    {
        // Handle the exception
        MessageBox.Show($"Error: {ex.Message}");
    }
}

// DO wrap async void calls in try-catch
public void CallAsyncVoid()
{
    try
    {
        AsyncVoidMethod();  // Can't await this
    }
    catch (Exception ex)
    {
        // This won't catch exceptions from AsyncVoidMethod
        Console.WriteLine($"Error: {ex.Message}");
    }
}
```

### Cancellation

```csharp
// DO support cancellation in long-running async methods
public async Task<string> FetchDataWithCancellationAsync(CancellationToken cancellationToken = default)
{
    using (HttpClient client = new HttpClient())
    {
        return await client.GetStringAsync("https://api.example.com/data", cancellationToken);
    }
}

// DO make cancellation token parameters optional with a default value
public async Task ProcessDataAsync(string data, CancellationToken cancellationToken = default)
{
    // Process the data...
    await Task.Delay(100, cancellationToken);
}

// DO check cancellation regularly in compute-intensive operations
public async Task<int> ComputeIntensiveTaskAsync(CancellationToken cancellationToken)
{
    int result = 0;
    
    for (int i = 0; i < 1000000; i++)
    {
        // Check cancellation periodically
        if (i % 1000 == 0)
        {
            cancellationToken.ThrowIfCancellationRequested();
        }
        
        // Compute-intensive work...
        result += i;
    }
    
    return result;
}
```

### Async Main (C# 7.1+)

```csharp
// Entry point for console applications
public static async Task Main(string[] args)
{
    Console.WriteLine("Starting application...");
    
    try
    {
        await RunApplicationAsync();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Application error: {ex.Message}");
    }
    
    Console.WriteLine("Application completed");
}

private static async Task RunApplicationAsync()
{
    // Application logic...
    await Task.Delay(1000);
    Console.WriteLine("Application running...");
}
```

### Async Streams (C# 8.0+)

```csharp
// DO use async streams for asynchronous enumeration
public async IAsyncEnumerable<string> GetDataStreamAsync()
{
    for (int i = 0; i < 10; i++)
    {
        await Task.Delay(100);  // Simulate async work
        yield return $"Item {i}";
    }
}

// DO support cancellation in async streams
public async IAsyncEnumerable<string> GetDataStreamWithCancellationAsync(
    [EnumeratorCancellation] CancellationToken cancellationToken = default)
{
    for (int i = 0; i < 10; i++)
    {
        cancellationToken.ThrowIfCancellationRequested();
        await Task.Delay(100, cancellationToken);
        yield return $"Item {i}";
    }
}

// DO use await foreach to consume async streams
public async Task ConsumeAsyncStreamAsync()
{
    await foreach (var item in GetDataStreamAsync())
    {
        Console.WriteLine(item);
    }
}
```

## Resources

- [Asynchronous Programming (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/)
- [Task-based Asynchronous Pattern (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap)
- [Async/Await Best Practices (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/async)
- [Asynchronous Streams (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-8.0/async-streams)
- [Parallel Programming (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/)
