---
title: "Resource Management"
sidebar_position: 15
---

Many objects — file handles, network sockets, database connections, unmanaged memory — hold resources that the garbage collector doesn't know how to release. .NET's `IDisposable` pattern gives these types a deterministic, explicit way to release those resources instead of waiting on an unpredictable finalizer pass.

## The `IDisposable` Interface

```csharp
public interface IDisposable
{
    void Dispose();
}
```

Any type that owns an unmanaged or scarce resource should implement `IDisposable` and release that resource in `Dispose()`.

```csharp
public class SimpleFileLogger : IDisposable
{
    private readonly StreamWriter _writer;

    public SimpleFileLogger(string path) => _writer = new StreamWriter(path);

    public void Log(string message) => _writer.WriteLine(message);

    public void Dispose() => _writer.Dispose();
}
```

## The `using` Statement

Calling `Dispose()` manually is error-prone — an exception thrown between construction and disposal leaks the resource. The `using` statement wraps a block in a `try`/`finally` and guarantees `Dispose()` runs even if the block throws:

```csharp
using (var logger = new SimpleFileLogger("app.log"))
{
    logger.Log("Application started");
} // Dispose() is called here, even if Log() threw
```

This is exactly equivalent to:

```csharp
var logger = new SimpleFileLogger("app.log");
try
{
    logger.Log("Application started");
}
finally
{
    logger.Dispose();
}
```

### `using` Declarations (C# 8+)

A `using` declaration disposes the resource at the end of the *enclosing scope* (the containing block or method) instead of requiring an explicit block, reducing nesting:

```csharp
void ProcessFile(string path)
{
    using var reader = new StreamReader(path);
    string firstLine = reader.ReadLine();
    Console.WriteLine(firstLine);
} // reader.Dispose() is called here, at the end of the method
```

### Multiple Resources

```csharp
using var source = new FileStream("input.txt", FileMode.Open);
using var destination = new FileStream("output.txt", FileMode.Create);
source.CopyTo(destination);
// Both disposed, in reverse declaration order, at the end of scope
```

## `IAsyncDisposable` and `await using` (C# 8+)

Some resources need to release asynchronously — flushing a network stream or closing a database connection, for example. `IAsyncDisposable` mirrors `IDisposable` with an async signature:

```csharp
public interface IAsyncDisposable
{
    ValueTask DisposeAsync();
}
```

```csharp
public class AsyncResource : IAsyncDisposable
{
    public async ValueTask DisposeAsync()
    {
        await Task.Delay(10); // simulate async cleanup, e.g. flushing a buffer
        Console.WriteLine("Disposed asynchronously");
    }
}

await using var resource = new AsyncResource();
// DisposeAsync() is awaited at the end of scope
```

## Implementing the Full Dispose Pattern

The examples above are enough for types that only hold *managed* resources (other `IDisposable` objects). A type that directly owns an *unmanaged* resource (a raw handle, unmanaged memory) should implement the full Dispose pattern, which also protects against double-disposal and provides a finalizer as a safety net if `Dispose()` is never called:

```csharp
public class ResourceHolder : IDisposable
{
    private bool _disposed;
    private IntPtr _unmanagedHandle; // example unmanaged resource
    private readonly StreamWriter? _managedResource;

    public ResourceHolder(string path)
    {
        _managedResource = new StreamWriter(path);
        _unmanagedHandle = AllocateHandle();
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this); // the finalizer is no longer needed once Dispose ran
    }

    protected virtual void Dispose(bool disposing)
    {
        if (_disposed) return;

        if (disposing)
        {
            // Release managed resources
            _managedResource?.Dispose();
        }

        // Release unmanaged resources (always, regardless of `disposing`)
        ReleaseHandle(_unmanagedHandle);
        _disposed = true;
    }

    ~ResourceHolder() => Dispose(false); // finalizer: safety net if Dispose() was never called

    private static IntPtr AllocateHandle() => IntPtr.Zero; // placeholder
    private static void ReleaseHandle(IntPtr handle) { /* placeholder */ }
}
```

The `disposing` parameter distinguishes two call paths: `disposing: true` means `Dispose()` was called explicitly, so it's safe to touch other managed objects; `disposing: false` means the finalizer is running, at which point other managed objects may already have been collected and must not be touched — only unmanaged cleanup is safe there.

## Best Practices

- Always prefer a `using` statement/declaration over calling `Dispose()` manually — it's exception-safe by construction.
- Guard against double-disposal (calling `Dispose()` more than once should be a no-op, not throw) — the `_disposed` flag pattern above handles this.
- Don't implement a finalizer unless the type directly owns an unmanaged resource — finalizers add GC overhead (an extra collection pass) even for objects that are otherwise ready to be collected immediately.
- Be cautious `using`-wrapping types like `HttpClient` per-request — `HttpClient` is designed to be created once and reused (or managed via `IHttpClientFactory`); disposing and recreating it per call can exhaust OS sockets under load.
- After `Dispose()` runs, further use of the object should throw `ObjectDisposedException` rather than fail silently or corrupt state — guard public members with the `_disposed` check where it matters.

## Resources

- [IDisposable Interface](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)
- [Implementing a Dispose Method](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose)
- [using statement (C# Reference)](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/statements/using)
- [IAsyncDisposable Interface](https://learn.microsoft.com/en-us/dotnet/api/system.iasyncdisposable)
- [Implement a DisposeAsync method](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-disposeasync)
