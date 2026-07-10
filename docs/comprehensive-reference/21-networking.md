---
title: "Networking"
sidebar_position: 21
---

Networking in C# allows you to create applications that communicate over networks, from simple HTTP requests to complex client-server architectures. The .NET Framework provides a rich set of classes for various networking tasks.

## HTTP Client

### HttpClient Basics

```csharp
// Basic HTTP requests with HttpClient
public async Task HttpClientBasicsAsync()
{
    // Create an instance of HttpClient
    using (HttpClient client = new HttpClient())
    {
        // Set base address
        client.BaseAddress = new Uri("https://api.example.com/");
        
        // Set default headers
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        client.DefaultRequestHeaders.Add("User-Agent", "My C# App");
        
        // GET request
        HttpResponseMessage response = await client.GetAsync("users");
        
        // Check if the request was successful
        if (response.IsSuccessStatusCode)
        {
            // Read response content as string
            string content = await response.Content.ReadAsStringAsync();
            Console.WriteLine(content);
            
            // Deserialize JSON response
            List<User> users = JsonSerializer.Deserialize<List<User>>(content);
            
            // Process the data
            foreach (var user in users)
            {
                Console.WriteLine($"User: {user.Name}, Email: {user.Email}");
            }
        }
        else
        {
            Console.WriteLine($"Error: {response.StatusCode}");
        }
    }
}

// User model for deserialization
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}
```

### HTTP Methods

```csharp
// Different HTTP methods with HttpClient
public async Task HttpMethodsAsync()
{
    using (HttpClient client = new HttpClient())
    {
        // POST request with JSON content
        var user = new User { Name = "John Doe", Email = "john@example.com" };
        string json = JsonSerializer.Serialize(user);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        HttpResponseMessage postResponse = await client.PostAsync("https://api.example.com/users", content);
        
        if (postResponse.IsSuccessStatusCode)
        {
            User createdUser = JsonSerializer.Deserialize<User>(
                await postResponse.Content.ReadAsStringAsync()
            );
            Console.WriteLine($"Created user with ID: {createdUser.Id}");
        }
        
        // PUT request
        user.Name = "John Smith";
        json = JsonSerializer.Serialize(user);
        content = new StringContent(json, Encoding.UTF8, "application/json");
        
        HttpResponseMessage putResponse = await client.PutAsync(
            $"https://api.example.com/users/{user.Id}",
            content
        );
        
        // PATCH request
        var patchContent = new StringContent(
            @"{""Name"": ""John Smith Jr.""}", 
            Encoding.UTF8, 
            "application/json"
        );
        
        var patchRequest = new HttpRequestMessage(
            new HttpMethod("PATCH"),
            $"https://api.example.com/users/{user.Id}"
        )
        {
            Content = patchContent
        };
        
        HttpResponseMessage patchResponse = await client.SendAsync(patchRequest);
        
        // DELETE request
        HttpResponseMessage deleteResponse = await client.DeleteAsync(
            $"https://api.example.com/users/{user.Id}"
        );
        
        // HEAD request
        var headRequest = new HttpRequestMessage(HttpMethod.Head, "https://api.example.com/users");
        HttpResponseMessage headResponse = await client.SendAsync(headRequest);
        
        // OPTIONS request
        var optionsRequest = new HttpRequestMessage(HttpMethod.Options, "https://api.example.com/users");
        HttpResponseMessage optionsResponse = await client.SendAsync(optionsRequest);
    }
}
```

### Request and Response Handling

```csharp
// Advanced request and response handling
public async Task RequestResponseHandlingAsync()
{
    // Create HttpClientHandler to customize the request pipeline
    var handler = new HttpClientHandler
    {
        AllowAutoRedirect = true,
        MaxAutomaticRedirections = 5,
        UseCookies = true,
        CookieContainer = new CookieContainer(),
        AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate
    };
    
    using (HttpClient client = new HttpClient(handler))
    {
        // Set timeout
        client.Timeout = TimeSpan.FromSeconds(30);
        
        // Create a request message
        var request = new HttpRequestMessage(HttpMethod.Get, "https://api.example.com/data");
        
        // Add headers to the request
        request.Headers.Add("X-API-Key", "your-api-key");
        request.Headers.Add("Accept-Language", "en-US");
        
        // Add query parameters
        var uriBuilder = new UriBuilder(request.RequestUri);
        var query = HttpUtility.ParseQueryString(uriBuilder.Query);
        query["page"] = "1";
        query["limit"] = "10";
        uriBuilder.Query = query.ToString();
        request.RequestUri = uriBuilder.Uri;
        
        // Send the request
        HttpResponseMessage response = await client.SendAsync(request);
        
        // Get response headers
        Console.WriteLine($"Content-Type: {response.Content.Headers.ContentType}");
        Console.WriteLine($"Content-Length: {response.Content.Headers.ContentLength}");
        
        // Get cookies from the response
        IEnumerable<Cookie> cookies = handler.CookieContainer.GetCookies(request.RequestUri)
            .Cast<Cookie>();
        
        foreach (var cookie in cookies)
        {
            Console.WriteLine($"Cookie: {cookie.Name} = {cookie.Value}");
        }
        
        // Read response content in different formats
        string textContent = await response.Content.ReadAsStringAsync();
        byte[] byteContent = await response.Content.ReadAsByteArrayAsync();
        Stream streamContent = await response.Content.ReadAsStreamAsync();
        
        // Handle different status codes
        switch ((int)response.StatusCode)
        {
            case 200:
                Console.WriteLine("Success!");
                break;
            case 401:
                Console.WriteLine("Unauthorized - check your credentials");
                break;
            case 404:
                Console.WriteLine("Resource not found");
                break;
            case >= 500:
                Console.WriteLine("Server error");
                break;
        }
    }
}
```

### Authentication

```csharp
// Authentication with HttpClient
public async Task AuthenticationExamplesAsync()
{
    // Basic authentication
    using (HttpClient client = new HttpClient())
    {
        string credentials = Convert.ToBase64String(
            Encoding.ASCII.GetBytes("username:password")
        );
        
        client.DefaultRequestHeaders.Authorization = 
            new AuthenticationHeaderValue("Basic", credentials);
        
        HttpResponseMessage response = await client.GetAsync("https://api.example.com/secure");
    }
    
    // Bearer token authentication (e.g., JWT)
    using (HttpClient client = new HttpClient())
    {
        client.DefaultRequestHeaders.Authorization = 
            new AuthenticationHeaderValue("Bearer", "your-jwt-token");
        
        HttpResponseMessage response = await client.GetAsync("https://api.example.com/secure");
    }
    
    // API key authentication
    using (HttpClient client = new HttpClient())
    {
        // In header
        client.DefaultRequestHeaders.Add("X-API-Key", "your-api-key");
        
        // Or in query string
        var uriBuilder = new UriBuilder("https://api.example.com/secure");
        var query = HttpUtility.ParseQueryString(uriBuilder.Query);
        query["api_key"] = "your-api-key";
        uriBuilder.Query = query.ToString();
        
        HttpResponseMessage response = await client.GetAsync(uriBuilder.Uri);
    }
    
    // OAuth 2.0 client credentials flow
    using (HttpClient client = new HttpClient())
    {
        // Request token
        var tokenRequest = new Dictionary<string, string>
        {
            ["grant_type"] = "client_credentials",
            ["client_id"] = "your-client-id",
            ["client_secret"] = "your-client-secret",
            ["scope"] = "read write"
        };
        
        var tokenContent = new FormUrlEncodedContent(tokenRequest);
        
        HttpResponseMessage tokenResponse = await client.PostAsync(
            "https://auth.example.com/token",
            tokenContent
        );
        
        if (tokenResponse.IsSuccessStatusCode)
        {
            string tokenJson = await tokenResponse.Content.ReadAsStringAsync();
            var tokenData = JsonSerializer.Deserialize<JsonElement>(tokenJson);
            string accessToken = tokenData.GetProperty("access_token").GetString();
            
            // Use the token
            client.DefaultRequestHeaders.Authorization = 
                new AuthenticationHeaderValue("Bearer", accessToken);
            
            HttpResponseMessage apiResponse = await client.GetAsync("https://api.example.com/secure");
        }
    }
}
```

### File Upload and Download

```csharp
// File upload and download with HttpClient
public async Task FileOperationsAsync()
{
    // File download
    using (HttpClient client = new HttpClient())
    {
        // Download file as byte array
        byte[] fileBytes = await client.GetByteArrayAsync("https://example.com/files/document.pdf");
        
        // Save to disk
        await File.WriteAllBytesAsync("document.pdf", fileBytes);
        
        // Download file as stream (more memory efficient for large files)
        using (Stream stream = await client.GetStreamAsync("https://example.com/files/large-file.zip"))
        using (FileStream fileStream = File.Create("large-file.zip"))
        {
            await stream.CopyToAsync(fileStream);
        }
        
        // Download with progress reporting
        HttpResponseMessage response = await client.GetAsync(
            "https://example.com/files/very-large-file.zip",
            HttpCompletionOption.ResponseHeadersRead  // Don't buffer the entire response
        );
        
        long? totalBytes = response.Content.Headers.ContentLength;
        using (Stream contentStream = await response.Content.ReadAsStreamAsync())
        using (FileStream fileStream = File.Create("very-large-file.zip"))
        {
            byte[] buffer = new byte[8192];
            long totalBytesRead = 0;
            int bytesRead;
            
            while ((bytesRead = await contentStream.ReadAsync(buffer, 0, buffer.Length)) > 0)
            {
                await fileStream.WriteAsync(buffer, 0, bytesRead);
                
                totalBytesRead += bytesRead;
                
                if (totalBytes.HasValue)
                {
                    double percentage = (double)totalBytesRead / totalBytes.Value * 100;
                    Console.WriteLine($"Downloaded {totalBytesRead} of {totalBytes} bytes ({percentage:F2}%)");
                }
            }
        }
    }
    
    // File upload
    using (HttpClient client = new HttpClient())
    {
        // Simple file upload
        byte[] fileBytes = File.ReadAllBytes("document.pdf");
        var content = new ByteArrayContent(fileBytes);
        content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");
        
        HttpResponseMessage response = await client.PostAsync(
            "https://example.com/upload",
            content
        );
        
        // Multipart form data upload
        using (var formData = new MultipartFormDataContent())
        {
            // Add file content
            var fileContent = new ByteArrayContent(File.ReadAllBytes("document.pdf"));
            fileContent.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");
            formData.Add(fileContent, "file", "document.pdf");
            
            // Add form fields
            formData.Add(new StringContent("File description"), "description");
            
            // Send the request
            response = await client.PostAsync("https://example.com/upload", formData);
        }
        
        // Upload with progress reporting
        var progressContent = new ProgressableStreamContent(
            File.OpenRead("large-file.zip"),
            8192,  // Buffer size
            (sent, total) => 
            {
                double percentage = (double)sent / total * 100;
                Console.WriteLine($"Uploaded {sent} of {total} bytes ({percentage:F2}%)");
            }
        );
        
        progressContent.Headers.ContentType = new MediaTypeHeaderValue("application/zip");
        
        response = await client.PostAsync("https://example.com/upload", progressContent);
    }
}

// Custom content for progress reporting
public class ProgressableStreamContent : StreamContent
{
    private readonly Stream _content;
    private readonly int _bufferSize;
    private readonly Action<long, long> _progress;
    
    public ProgressableStreamContent(Stream content, int bufferSize, Action<long, long> progress)
        : base(content, bufferSize)
    {
        _content = content;
        _bufferSize = bufferSize;
        _progress = progress;
    }
    
    protected override async Task SerializeToStreamAsync(Stream stream, TransportContext context)
    {
        var buffer = new byte[_bufferSize];
        long totalBytesRead = 0;
        long totalBytes = _content.Length;
        int bytesRead;
        
        _content.Position = 0;
        
        while ((bytesRead = await _content.ReadAsync(buffer, 0, buffer.Length)) > 0)
        {
            await stream.WriteAsync(buffer, 0, bytesRead);
            
            totalBytesRead += bytesRead;
            _progress?.Invoke(totalBytesRead, totalBytes);
        }
    }
}
```

### HttpClient Best Practices

```csharp
// HttpClient best practices
public class HttpClientBestPractices
{
    // 1. Reuse HttpClient instances
    // Bad: Creating a new HttpClient for each request
    public async Task BadPracticeAsync()
    {
        // This can lead to socket exhaustion
        using (var client = new HttpClient())
        {
            var response = await client.GetAsync("https://api.example.com");
        }
    }
    
    // Good: Reuse HttpClient instance
    private static readonly HttpClient SharedClient = new HttpClient();
    
    public async Task GoodPracticeAsync()
    {
        var response = await SharedClient.GetAsync("https://api.example.com");
    }
    
    // 2. Use HttpClientFactory in ASP.NET Core
    // In Startup.ConfigureServices:
    // services.AddHttpClient();
    
    // Inject IHttpClientFactory and use it:
    private readonly IHttpClientFactory _clientFactory;
    
    public HttpClientBestPractices(IHttpClientFactory clientFactory)
    {
        _clientFactory = clientFactory;
    }
    
    public async Task HttpClientFactoryExampleAsync()
    {
        var client = _clientFactory.CreateClient();
        var response = await client.GetAsync("https://api.example.com");
    }
    
    // 3. Named clients with HttpClientFactory
    // In Startup.ConfigureServices:
    // services.AddHttpClient("github", c =>
    // {
    //     c.BaseAddress = new Uri("https://api.github.com/");
    //     c.DefaultRequestHeaders.Add("Accept", "application/vnd.github.v3+json");
    //     c.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");
    // });
    
    public async Task NamedClientExampleAsync()
    {
        var client = _clientFactory.CreateClient("github");
        var response = await client.GetAsync("users/dotnet");
    }
    
    // 4. Typed clients with HttpClientFactory
    // In Startup.ConfigureServices:
    // services.AddHttpClient<GitHubService>();
    
    // 5. Use cancellation tokens
    public async Task CancellationExampleAsync(CancellationToken cancellationToken)
    {
        try
        {
            var response = await SharedClient.GetAsync(
                "https://api.example.com",
                cancellationToken
            );
        }
        catch (TaskCanceledException)
        {
            Console.WriteLine("Request was canceled");
        }
    }
    
    // 6. Handle transient errors with Polly
    // In Startup.ConfigureServices:
    // services.AddHttpClient("github")
    //     .AddTransientHttpErrorPolicy(p => 
    //         p.WaitAndRetryAsync(3, _ => TimeSpan.FromMilliseconds(600)));
}

// Typed client example
public class GitHubService
{
    private readonly HttpClient _httpClient;
    
    public GitHubService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri("https://api.github.com/");
        _httpClient.DefaultRequestHeaders.Add("Accept", "application/vnd.github.v3+json");
        _httpClient.DefaultRequestHeaders.Add("User-Agent", "HttpClientFactory-Sample");
    }
    
    public async Task<IEnumerable<GitHubRepo>> GetReposAsync()
    {
        var response = await _httpClient.GetAsync("repositories");
        response.EnsureSuccessStatusCode();
        
        return await JsonSerializer.DeserializeAsync<IEnumerable<GitHubRepo>>(
            await response.Content.ReadAsStreamAsync()
        );
    }
}

public class GitHubRepo
{
    public long Id { get; set; }
    public string Name { get; set; }
    public string FullName { get; set; }
    public string HtmlUrl { get; set; }
}
```

## TCP/IP Networking

### TcpClient and TcpListener

```csharp
// TCP client example
public async Task TcpClientExampleAsync()
{
    using (TcpClient client = new TcpClient())
    {
        // Connect to the server
        await client.ConnectAsync("example.com", 8080);
        
        // Get the network stream
        using (NetworkStream stream = client.GetStream())
        {
            // Send data
            byte[] requestData = Encoding.ASCII.GetBytes("Hello, server!");
            await stream.WriteAsync(requestData, 0, requestData.Length);
            
            // Receive data
            byte[] buffer = new byte[1024];
            int bytesRead = await stream.ReadAsync(buffer, 0, buffer.Length);
            string response = Encoding.ASCII.GetString(buffer, 0, bytesRead);
            
            Console.WriteLine($"Received: {response}");
        }
    }
}

// TCP server example
public async Task TcpServerExampleAsync()
{
    // Create a TCP listener on localhost port 8080
    TcpListener listener = new TcpListener(IPAddress.Any, 8080);
    
    try
    {
        // Start listening for client connections
        listener.Start();
        Console.WriteLine("Server started. Waiting for connections...");
        
        while (true)
        {
            // Accept a client connection
            TcpClient client = await listener.AcceptTcpClientAsync();
            Console.WriteLine("Client connected!");
            
            // Handle the client connection in a separate task
            _ = HandleClientAsync(client);
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Server error: {ex.Message}");
    }
    finally
    {
        // Stop listening
        listener.Stop();
    }
}

private async Task HandleClientAsync(TcpClient client)
{
    try
    {
        using (client)
        using (NetworkStream stream = client.GetStream())
        {
            // Read data from the client
            byte[] buffer = new byte[1024];
            int bytesRead = await stream.ReadAsync(buffer, 0, buffer.Length);
            string request = Encoding.ASCII.GetString(buffer, 0, bytesRead);
            
            Console.WriteLine($"Received: {request}");
            
            // Process the request (in a real application)
            string response = $"Echo: {request}";
            
            // Send response back to the client
            byte[] responseData = Encoding.ASCII.GetBytes(response);
            await stream.WriteAsync(responseData, 0, responseData.Length);
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error handling client: {ex.Message}");
    }
}
```

### UdpClient

```csharp
// UDP client example
public async Task UdpClientExampleAsync()
{
    using (UdpClient client = new UdpClient())
    {
        // Send data to the server
        byte[] data = Encoding.ASCII.GetBytes("Hello, UDP server!");
        await client.SendAsync(data, data.Length, "example.com", 8080);
        
        // Receive response
        UdpReceiveResult result = await client.ReceiveAsync();
        string response = Encoding.ASCII.GetString(result.Buffer);
        
        Console.WriteLine($"Received: {response} from {result.RemoteEndPoint}");
    }
}

// UDP server example
public async Task UdpServerExampleAsync()
{
    // Create a UDP listener on port 8080
    using (UdpClient listener = new UdpClient(8080))
    {
        Console.WriteLine("UDP server started. Waiting for messages...");
        
        while (true)
        {
            try
            {
                // Receive data
                UdpReceiveResult result = await listener.ReceiveAsync();
                string message = Encoding.ASCII.GetString(result.Buffer);
                IPEndPoint clientEndPoint = result.RemoteEndPoint;
                
                Console.WriteLine($"Received: {message} from {clientEndPoint}");
                
                // Send response back to the client
                string response = $"Echo: {message}";
                byte[] responseData = Encoding.ASCII.GetBytes(response);
                await listener.SendAsync(responseData, responseData.Length, clientEndPoint);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}
```

### Socket Programming

```csharp
// Socket client example
public async Task SocketClientExampleAsync()
{
    // Create a TCP/IP socket
    using (Socket client = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp))
    {
        // Connect to the server
        await client.ConnectAsync("example.com", 8080);
        
        // Send data
        byte[] requestData = Encoding.ASCII.GetBytes("Hello from socket client!");
        await client.SendAsync(new ArraySegment<byte>(requestData), SocketFlags.None);
        
        // Receive data
        byte[] buffer = new byte[1024];
        int bytesRead = await client.ReceiveAsync(new ArraySegment<byte>(buffer), SocketFlags.None);
        string response = Encoding.ASCII.GetString(buffer, 0, bytesRead);
        
        Console.WriteLine($"Received: {response}");
    }
}

// Socket server example
public async Task SocketServerExampleAsync()
{
    // Create a TCP/IP socket
    using (Socket listener = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp))
    {
        // Bind the socket to the local endpoint
        IPEndPoint localEndPoint = new IPEndPoint(IPAddress.Any, 8080);
        listener.Bind(localEndPoint);
        
        // Listen for incoming connections
        listener.Listen(100);
        Console.WriteLine("Socket server started. Waiting for connections...");
        
        while (true)
        {
            // Accept a client connection
            Socket handler = await listener.AcceptAsync();
            
            // Handle the client connection in a separate task
            _ = HandleSocketClientAsync(handler);
        }
    }
}

private async Task HandleSocketClientAsync(Socket handler)
{
    try
    {
        using (handler)
        {
            // Receive data from the client
            byte[] buffer = new byte[1024];
            int bytesRead = await handler.ReceiveAsync(new ArraySegment<byte>(buffer), SocketFlags.None);
            string request = Encoding.ASCII.GetString(buffer, 0, bytesRead);
            
            Console.WriteLine($"Received: {request}");
            
            // Send response back to the client
            string response = $"Echo: {request}";
            byte[] responseData = Encoding.ASCII.GetBytes(response);
            await handler.SendAsync(new ArraySegment<byte>(responseData), SocketFlags.None);
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error handling socket client: {ex.Message}");
    }
}
```

### Asynchronous Socket Programming

```csharp
// Asynchronous socket server with SocketAsyncEventArgs
public class AsyncSocketServer
{
    private Socket _listener;
    private readonly int _port;
    private readonly int _maxConnections;
    private readonly Semaphore _maxConnectionsEnforcer;
    private readonly BufferManager _bufferManager;
    private readonly SocketAsyncEventArgsPool _readWritePool;
    
    public AsyncSocketServer(int port, int maxConnections)
    {
        _port = port;
        _maxConnections = maxConnections;
        _maxConnectionsEnforcer = new Semaphore(maxConnections, maxConnections);
        
        // Create a buffer manager to handle buffers for all socket operations
        int bufferSize = 1024;
        _bufferManager = new BufferManager(bufferSize * maxConnections, bufferSize);
        
        // Create a pool of SocketAsyncEventArgs objects for read/write operations
        _readWritePool = new SocketAsyncEventArgsPool(maxConnections);
        
        // Initialize the buffer manager and event args pool
        Init();
    }
    
    private void Init()
    {
        // Initialize the buffer manager
        _bufferManager.InitBuffer();
        
        // Preallocate SocketAsyncEventArgs objects
        for (int i = 0; i < _maxConnections; i++)
        {
            SocketAsyncEventArgs args = new SocketAsyncEventArgs();
            args.Completed += IO_Completed;
            
            // Assign a buffer from the buffer manager
            _bufferManager.SetBuffer(args);
            
            // Add to the pool
            _readWritePool.Push(args);
        }
    }
    
    public void Start()
    {
        // Create the listening socket
        _listener = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
        _listener.Bind(new IPEndPoint(IPAddress.Any, _port));
        _listener.Listen(_maxConnections);
        
        Console.WriteLine($"Server started on port {_port}");
        
        // Start accepting connections
        StartAccept(null);
    }
    
    private void StartAccept(SocketAsyncEventArgs acceptEventArg)
    {
        if (acceptEventArg == null)
        {
            acceptEventArg = new SocketAsyncEventArgs();
            acceptEventArg.Completed += AcceptCompleted;
        }
        else
        {
            // Clear the socket from the previous accept operation
            acceptEventArg.AcceptSocket = null;
        }
        
        // Block if we've reached the maximum number of connections
        _maxConnectionsEnforcer.WaitOne();
        
        // Accept the next connection
        bool willRaiseEvent = _listener.AcceptAsync(acceptEventArg);
        if (!willRaiseEvent)
        {
            ProcessAccept(acceptEventArg);
        }
    }
    
    private void AcceptCompleted(object sender, SocketAsyncEventArgs e)
    {
        ProcessAccept(e);
    }
    
    private void ProcessAccept(SocketAsyncEventArgs e)
    {
        if (e.SocketError == SocketError.Success)
        {
            // Get a SocketAsyncEventArgs from the pool for the new connection
            SocketAsyncEventArgs readEventArgs = _readWritePool.Pop();
            if (readEventArgs != null)
            {
                // Associate the socket with the SocketAsyncEventArgs
                readEventArgs.UserToken = e.AcceptSocket;
                
                // Begin receiving data
                bool willRaiseEvent = e.AcceptSocket.ReceiveAsync(readEventArgs);
                if (!willRaiseEvent)
                {
                    ProcessReceive(readEventArgs);
                }
            }
            else
            {
                // No SocketAsyncEventArgs available, close the socket
                e.AcceptSocket.Close();
                _maxConnectionsEnforcer.Release();
            }
        }
        
        // Accept the next connection
        StartAccept(e);
    }
    
    private void IO_Completed(object sender, SocketAsyncEventArgs e)
    {
        switch (e.LastOperation)
        {
            case SocketAsyncOperation.Receive:
                ProcessReceive(e);
                break;
            case SocketAsyncOperation.Send:
                ProcessSend(e);
                break;
            default:
                throw new ArgumentException("The last operation completed on the socket was not a receive or send");
        }
    }
    
    private void ProcessReceive(SocketAsyncEventArgs e)
    {
        Socket socket = (Socket)e.UserToken;
        
        if (e.SocketError == SocketError.Success && e.BytesTransferred > 0)
        {
            // Process the received data
            string receivedData = Encoding.ASCII.GetString(e.Buffer, e.Offset, e.BytesTransferred);
            Console.WriteLine($"Received: {receivedData}");
            
            // Prepare the response
            string response = $"Echo: {receivedData}";
            byte[] responseData = Encoding.ASCII.GetBytes(response);
            
            // Copy the response to the buffer
            Buffer.BlockCopy(responseData, 0, e.Buffer, e.Offset, responseData.Length);
            e.SetBuffer(e.Offset, responseData.Length);
            
            // Send the response
            bool willRaiseEvent = socket.SendAsync(e);
            if (!willRaiseEvent)
            {
                ProcessSend(e);
            }
        }
        else
        {
            CloseClientSocket(e);
        }
    }
    
    private void ProcessSend(SocketAsyncEventArgs e)
    {
        if (e.SocketError == SocketError.Success)
        {
            Socket socket = (Socket)e.UserToken;
            
            // Prepare to receive more data
            e.SetBuffer(e.Offset, _bufferManager.BufferSize);
            
            bool willRaiseEvent = socket.ReceiveAsync(e);
            if (!willRaiseEvent)
            {
                ProcessReceive(e);
            }
        }
        else
        {
            CloseClientSocket(e);
        }
    }
    
    private void CloseClientSocket(SocketAsyncEventArgs e)
    {
        Socket socket = (Socket)e.UserToken;
        
        try
        {
            socket.Shutdown(SocketShutdown.Both);
        }
        catch (Exception)
        {
            // The client has already closed the connection
        }
        
        socket.Close();
        
        // Release the SocketAsyncEventArgs back to the pool
        _readWritePool.Push(e);
        
        // Release the semaphore so another connection can be accepted
        _maxConnectionsEnforcer.Release();
    }
    
    public void Stop()
    {
        _listener.Close();
    }
}

// Helper classes for the async socket server
public class BufferManager
{
    private readonly int _numBytes;
    private readonly int _bufferSize;
    private byte[] _buffer;
    private Stack<int> _freeIndexPool;
    private int _currentIndex;
    
    public int BufferSize => _bufferSize;
    
    public BufferManager(int totalBytes, int bufferSize)
    {
        _numBytes = totalBytes;
        _bufferSize = bufferSize;
        _currentIndex = 0;
        _freeIndexPool = new Stack<int>();
    }
    
    public void InitBuffer()
    {
        _buffer = new byte[_numBytes];
    }
    
    public bool SetBuffer(SocketAsyncEventArgs args)
    {
        if (_freeIndexPool.Count > 0)
        {
            args.SetBuffer(_buffer, _freeIndexPool.Pop(), _bufferSize);
        }
        else
        {
            if ((_numBytes - _bufferSize) < _currentIndex)
            {
                return false;
            }
            
            args.SetBuffer(_buffer, _currentIndex, _bufferSize);
            _currentIndex += _bufferSize;
        }
        
        return true;
    }
    
    public void FreeBuffer(SocketAsyncEventArgs args)
    {
        _freeIndexPool.Push(args.Offset);
        args.SetBuffer(null, 0, 0);
    }
}

public class SocketAsyncEventArgsPool
{
    private readonly Stack<SocketAsyncEventArgs> _pool;
    
    public SocketAsyncEventArgsPool(int capacity)
    {
        _pool = new Stack<SocketAsyncEventArgs>(capacity);
    }
    
    public void Push(SocketAsyncEventArgs item)
    {
        if (item == null)
        {
            throw new ArgumentNullException(nameof(item));
        }
        
        lock (_pool)
        {
            _pool.Push(item);
        }
    }
    
    public SocketAsyncEventArgs Pop()
    {
        lock (_pool)
        {
            return _pool.Count > 0 ? _pool.Pop() : null;
        }
    }
}
```

## Web Sockets

### WebSocket Client

```csharp
// WebSocket client example
public async Task WebSocketClientExampleAsync()
{
    using (ClientWebSocket client = new ClientWebSocket())
    {
        // Connect to the WebSocket server
        Uri serverUri = new Uri("wss://echo.websocket.org");
        await client.ConnectAsync(serverUri, CancellationToken.None);
        
        Console.WriteLine("Connected to WebSocket server");
        
        // Send a message
        string message = "Hello, WebSocket server!";
        byte[] messageBytes = Encoding.UTF8.GetBytes(message);
        await client.SendAsync(
            new ArraySegment<byte>(messageBytes),
            WebSocketMessageType.Text,
            true,  // endOfMessage
            CancellationToken.None
        );
        
        Console.WriteLine($"Sent: {message}");
        
        // Receive the response
        byte[] buffer = new byte[1024];
        WebSocketReceiveResult result = await client.ReceiveAsync(
            new ArraySegment<byte>(buffer),
            CancellationToken.None
        );
        
        string response = Encoding.UTF8.GetString(buffer, 0, result.Count);
        Console.WriteLine($"Received: {response}");
        
        // Close the connection
        await client.CloseAsync(
            WebSocketCloseStatus.NormalClosure,
            "Closing",
            CancellationToken.None
        );
    }
}

// WebSocket client with continuous communication
public async Task WebSocketContinuousCommunicationAsync()
{
    using (ClientWebSocket client = new ClientWebSocket())
    {
        await client.ConnectAsync(new Uri("wss://echo.websocket.org"), CancellationToken.None);
        
        // Start a task to receive messages
        var receiveTask = ReceiveMessagesAsync(client);
        
        // Send messages
        for (int i = 0; i < 5; i++)
        {
            string message = $"Message {i}";
            byte[] messageBytes = Encoding.UTF8.GetBytes(message);
            
            await client.SendAsync(
                new ArraySegment<byte>(messageBytes),
                WebSocketMessageType.Text,
                true,
                CancellationToken.None
            );
            
            Console.WriteLine($"Sent: {message}");
            
            // Wait a bit before sending the next message
            await Task.Delay(1000);
        }
        
        // Close the connection
        await client.CloseAsync(
            WebSocketCloseStatus.NormalClosure,
            "Closing",
            CancellationToken.None
        );
        
        // Wait for the receive task to complete
        await receiveTask;
    }
}

private async Task ReceiveMessagesAsync(ClientWebSocket client)
{
    byte[] buffer = new byte[1024];
    
    try
    {
        while (client.State == WebSocketState.Open)
        {
            WebSocketReceiveResult result = await client.ReceiveAsync(
                new ArraySegment<byte>(buffer),
                CancellationToken.None
            );
            
            if (result.MessageType == WebSocketMessageType.Close)
            {
                await client.CloseAsync(
                    WebSocketCloseStatus.NormalClosure,
                    "Closing",
                    CancellationToken.None
                );
            }
            else
            {
                string message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                Console.WriteLine($"Received: {message}");
            }
        }
    }
    catch (WebSocketException ex)
    {
        Console.WriteLine($"WebSocket error: {ex.Message}");
    }
}
```

### WebSocket Server (ASP.NET Core)

```csharp
// WebSocket server in ASP.NET Core
// In Startup.cs:

// Configure method
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    // ...
    
    // Add WebSocket middleware
    app.UseWebSockets(new WebSocketOptions
    {
        KeepAliveInterval = TimeSpan.FromMinutes(2),
        ReceiveBufferSize = 4 * 1024  // 4KB
    });
    
    // Handle WebSocket requests
    app.Use(async (context, next) =>
    {
        if (context.Request.Path == "/ws")
        {
            if (context.WebSockets.IsWebSocketRequest)
            {
                WebSocket webSocket = await context.WebSockets.AcceptWebSocketAsync();
                await HandleWebSocketAsync(webSocket);
            }
            else
            {
                context.Response.StatusCode = 400;
            }
        }
        else
        {
            await next();
        }
    });
    
    // ...
}

private async Task HandleWebSocketAsync(WebSocket webSocket)
{
    byte[] buffer = new byte[1024];
    WebSocketReceiveResult result = await webSocket.ReceiveAsync(
        new ArraySegment<byte>(buffer),
        CancellationToken.None
    );
    
    while (!result.CloseStatus.HasValue)
    {
        // Process the received message
        string message = Encoding.UTF8.GetString(buffer, 0, result.Count);
        Console.WriteLine($"Received: {message}");
        
        // Echo the message back
        await webSocket.SendAsync(
            new ArraySegment<byte>(buffer, 0, result.Count),
            result.MessageType,
            result.EndOfMessage,
            CancellationToken.None
        );
        
        // Receive the next message
        result = await webSocket.ReceiveAsync(
            new ArraySegment<byte>(buffer),
            CancellationToken.None
        );
    }
    
    // Close the WebSocket connection
    await webSocket.CloseAsync(
        result.CloseStatus.Value,
        result.CloseStatusDescription,
        CancellationToken.None
    );
}
```

## DNS and Network Information

### DNS Resolution

```csharp
// DNS resolution examples
public async Task DnsExamplesAsync()
{
    // Get IP addresses for a hostname
    IPHostEntry hostEntry = await Dns.GetHostEntryAsync("www.example.com");
    
    Console.WriteLine($"Host name: {hostEntry.HostName}");
    Console.WriteLine("IP Addresses:");
    
    foreach (IPAddress address in hostEntry.AddressList)
    {
        Console.WriteLine($"  {address} (IPv{(address.AddressFamily == AddressFamily.InterNetwork ? "4" : "6")})");
    }
    
    // Get host name from IP address
    IPHostEntry ipEntry = await Dns.GetHostEntryAsync("8.8.8.8");
    Console.WriteLine($"Host name for 8.8.8.8: {ipEntry.HostName}");
    
    // Get IP addresses directly
    IPAddress[] addresses = await Dns.GetHostAddressesAsync("www.example.com");
    
    foreach (IPAddress address in addresses)
    {
        Console.WriteLine($"Address: {address}");
    }
    
    // Resolve a service using SRV records (requires external DNS library)
    // Example using DnsClient.NET:
    // var lookup = new LookupClient();
    // var result = await lookup.QueryAsync("_sip._tcp.example.com", QueryType.SRV);
    // var srvRecords = result.Answers.SrvRecords();
    
    // foreach (var srv in srvRecords)
    // {
    //     Console.WriteLine($"Service: {srv.Target}:{srv.Port} (Priority: {srv.Priority}, Weight: {srv.Weight})");
    // }
}
```

### Network Information

```csharp
// Network information examples
public void NetworkInformationExamples()
{
    // Get all network interfaces
    NetworkInterface[] interfaces = NetworkInterface.GetAllNetworkInterfaces();
    
    foreach (NetworkInterface ni in interfaces)
    {
        Console.WriteLine($"Name: {ni.Name}");
        Console.WriteLine($"Description: {ni.Description}");
        Console.WriteLine($"Type: {ni.NetworkInterfaceType}");
        Console.WriteLine($"Status: {ni.OperationalStatus}");
        Console.WriteLine($"Speed: {ni.Speed / 1000000} Mbps");
        Console.WriteLine($"MAC Address: {string.Join(":", ni.GetPhysicalAddress().GetAddressBytes().Select(b => b.ToString("X2")))}");
        
        // Get IP properties
        IPInterfaceProperties ipProps = ni.GetIPProperties();
        
        // Get unicast addresses (IPv4 and IPv6)
        Console.WriteLine("IP Addresses:");
        foreach (UnicastIPAddressInformation addr in ipProps.UnicastAddresses)
        {
            Console.WriteLine($"  {addr.Address} (Subnet mask: {addr.IPv4Mask})");
        }
        
        // Get gateway addresses
        Console.WriteLine("Gateways:");
        foreach (GatewayIPAddressInformation gateway in ipProps.GatewayAddresses)
        {
            Console.WriteLine($"  {gateway.Address}");
        }
        
        // Get DNS servers
        Console.WriteLine("DNS Servers:");
        foreach (IPAddress dns in ipProps.DnsAddresses)
        {
            Console.WriteLine($"  {dns}");
        }
        
        Console.WriteLine();
    }
    
    // Check if network is available
    bool networkAvailable = NetworkInterface.GetIsNetworkAvailable();
    Console.WriteLine($"Network available: {networkAvailable}");
    
    // Get IPv4 statistics
    NetworkInterface primaryInterface = interfaces.FirstOrDefault(ni => 
        ni.OperationalStatus == OperationalStatus.Up && 
        ni.NetworkInterfaceType != NetworkInterfaceType.Loopback);
    
    if (primaryInterface != null)
    {
        IPv4InterfaceStatistics stats = primaryInterface.GetIPv4Statistics();
        
        Console.WriteLine($"Bytes received: {stats.BytesReceived}");
        Console.WriteLine($"Bytes sent: {stats.BytesSent}");
        Console.WriteLine($"Incoming packets discarded: {stats.IncomingPacketsDiscarded}");
        Console.WriteLine($"Outgoing packets discarded: {stats.OutgoingPacketsDiscarded}");
    }
    
    // Ping a host
    using (Ping ping = new Ping())
    {
        PingReply reply = ping.Send("www.example.com");
        
        Console.WriteLine($"Ping status: {reply.Status}");
        if (reply.Status == IPStatus.Success)
        {
            Console.WriteLine($"Round-trip time: {reply.RoundtripTime} ms");
            Console.WriteLine($"TTL: {reply.Options.Ttl}");
        }
    }
}
```

## Network Security

### SSL/TLS

```csharp
// SSL/TLS examples
public async Task SslTlsExamplesAsync()
{
    // Create a TCP client
    using (TcpClient client = new TcpClient())
    {
        // Connect to the server
        await client.ConnectAsync("example.com", 443);
        
        // Create an SSL stream over the TCP connection
        using (SslStream sslStream = new SslStream(
            client.GetStream(),
            false,  // Don't leave the inner stream open
            ValidateServerCertificate,  // Certificate validation callback
            null    // Certificate selection callback
        ))
        {
            // Authenticate as a client (TLS handshake)
            await sslStream.AuthenticateAsClientAsync(
                "example.com",  // Target host name
                null,           // Client certificates
                SslProtocols.Tls12 | SslProtocols.Tls13,  // Allowed protocols
                false           // Don't check certificate revocation
            );
            
            // Check SSL/TLS details
            Console.WriteLine($"SSL/TLS Protocol: {sslStream.SslProtocol}");
            Console.WriteLine($"Cipher Algorithm: {sslStream.CipherAlgorithm}");
            Console.WriteLine($"Cipher Strength: {sslStream.CipherStrength}");
            Console.WriteLine($"Hash Algorithm: {sslStream.HashAlgorithm}");
            Console.WriteLine($"Hash Strength: {sslStream.HashStrength}");
            Console.WriteLine($"Key Exchange Algorithm: {sslStream.KeyExchangeAlgorithm}");
            Console.WriteLine($"Key Exchange Strength: {sslStream.KeyExchangeStrength}");
            
            // Get the server certificate
            X509Certificate remoteCertificate = sslStream.RemoteCertificate;
            Console.WriteLine($"Server certificate: {remoteCertificate.Subject}");
            Console.WriteLine($"Issued by: {remoteCertificate.Issuer}");
            Console.WriteLine($"Valid from: {remoteCertificate.GetEffectiveDateString()}");
            Console.WriteLine($"Valid until: {remoteCertificate.GetExpirationDateString()}");
            
            // Send a request (e.g., HTTP)
            string request = "GET / HTTP/1.1\r\nHost: example.com\r\nConnection: close\r\n\r\n";
            byte[] requestBytes = Encoding.ASCII.GetBytes(request);
            await sslStream.WriteAsync(requestBytes, 0, requestBytes.Length);
            
            // Read the response
            byte[] buffer = new byte[4096];
            int bytesRead = await sslStream.ReadAsync(buffer, 0, buffer.Length);
            string response = Encoding.ASCII.GetString(buffer, 0, bytesRead);
            
            Console.WriteLine("Response:");
            Console.WriteLine(response);
        }
    }
}

// Certificate validation callback
private bool ValidateServerCertificate(
    object sender,
    X509Certificate certificate,
    X509Chain chain,
    SslPolicyErrors sslPolicyErrors)
{
    // For production, you should implement proper certificate validation
    // This example just logs the errors and accepts the certificate
    
    if (sslPolicyErrors == SslPolicyErrors.None)
    {
        return true;  // Certificate is valid
    }
    
    Console.WriteLine($"Certificate error: {sslPolicyErrors}");
    
    // For testing purposes, you might want to accept the certificate anyway
    // In production, you should return false if there are errors
    return false;  // Reject the certificate
}

// SSL/TLS server example
public async Task SslTlsServerExampleAsync()
{
    // Create a TCP listener
    TcpListener listener = new TcpListener(IPAddress.Any, 8443);
    listener.Start();
    
    Console.WriteLine("SSL/TLS server started. Waiting for connections...");
    
    // Load the server certificate
    X509Certificate2 serverCertificate = new X509Certificate2(
        "server.pfx",  // Certificate file
        "password"     // Certificate password
    );
    
    while (true)
    {
        // Accept a client connection
        TcpClient client = await listener.AcceptTcpClientAsync();
        
        // Handle the client in a separate task
        _ = HandleSslClientAsync(client, serverCertificate);
    }
}

private async Task HandleSslClientAsync(TcpClient client, X509Certificate2 serverCertificate)
{
    try
    {
        using (client)
        {
            // Create an SSL stream over the TCP connection
            using (SslStream sslStream = new SslStream(
                client.GetStream(),
                false,
                null,  // No client certificate validation
                null
            ))
            {
                // Authenticate as a server (TLS handshake)
                await sslStream.AuthenticateAsServerAsync(
                    serverCertificate,
                    false,           // Don't require client certificate
                    SslProtocols.Tls12 | SslProtocols.Tls13,
                    false            // Don't check certificate revocation
                );
                
                // Read the client request
                byte[] buffer = new byte[4096];
                int bytesRead = await sslStream.ReadAsync(buffer, 0, buffer.Length);
                string request = Encoding.ASCII.GetString(buffer, 0, bytesRead);
                
                Console.WriteLine($"Received: {request}");
                
                // Send a response
                string response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: 13\r\n\r\nHello, World!";
                byte[] responseBytes = Encoding.ASCII.GetBytes(response);
                await sslStream.WriteAsync(responseBytes, 0, responseBytes.Length);
            }
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error handling SSL/TLS client: {ex.Message}");
    }
}
```

### Certificate Management

```csharp
// Certificate management examples
public void CertificateManagementExamples()
{
    // Load a certificate from a file
    X509Certificate2 cert = new X509Certificate2(
        "certificate.pfx",  // Certificate file
        "password"          // Certificate password
    );
    
    // Display certificate information
    Console.WriteLine($"Subject: {cert.Subject}");
    Console.WriteLine($"Issuer: {cert.Issuer}");
    Console.WriteLine($"Valid from: {cert.NotBefore}");
    Console.WriteLine($"Valid until: {cert.NotAfter}");
    Console.WriteLine($"Thumbprint: {cert.Thumbprint}");
    Console.WriteLine($"Serial number: {cert.SerialNumber}");
    Console.WriteLine($"Version: {cert.Version}");
    
    // Check if the certificate has a private key
    Console.WriteLine($"Has private key: {cert.HasPrivateKey}");
    
    // Access the certificate's public key
    RSA publicKey = cert.GetRSAPublicKey();
    if (publicKey != null)
    {
        Console.WriteLine($"Public key size: {publicKey.KeySize} bits");
    }
    
    // Access the certificate's private key (if available)
    if (cert.HasPrivateKey)
    {
        RSA privateKey = cert.GetRSAPrivateKey();
        if (privateKey != null)
        {
            Console.WriteLine($"Private key size: {privateKey.KeySize} bits");
        }
    }
    
    // Access certificate extensions
    foreach (X509Extension extension in cert.Extensions)
    {
        Console.WriteLine($"Extension: {extension.Oid.FriendlyName}");
    }
    
    // Access the certificate store
    using (X509Store store = new X509Store(StoreName.My, StoreLocation.CurrentUser))
    {
        // Open the store
        store.Open(OpenFlags.ReadOnly);
        
        // List all certificates in the store
        Console.WriteLine("Certificates in the personal store:");
        foreach (X509Certificate2 storeCert in store.Certificates)
        {
            Console.WriteLine($"  {storeCert.Subject} ({storeCert.Thumbprint})");
        }
        
        // Find a certificate by thumbprint
        string thumbprint = "1234567890ABCDEF1234567890ABCDEF12345678";
        X509Certificate2Collection foundCerts = store.Certificates.Find(
            X509FindType.FindByThumbprint,
            thumbprint,
            false  // Don't validate certificates
        );
        
        if (foundCerts.Count > 0)
        {
            Console.WriteLine($"Found certificate: {foundCerts[0].Subject}");
        }
        
        // Find certificates by subject name
        X509Certificate2Collection subjectCerts = store.Certificates.Find(
            X509FindType.FindBySubjectName,
            "example.com",
            false
        );
        
        Console.WriteLine($"Found {subjectCerts.Count} certificates for example.com");
    }
    
    // Create a certificate chain
    using (X509Chain chain = new X509Chain())
    {
        // Configure the chain
        chain.ChainPolicy.RevocationMode = X509RevocationMode.Online;
        chain.ChainPolicy.RevocationFlag = X509RevocationFlag.EntireChain;
        chain.ChainPolicy.VerificationFlags = X509VerificationFlags.NoFlag;
        
        // Build the chain for the certificate
        bool isValid = chain.Build(cert);
        
        Console.WriteLine($"Certificate chain is valid: {isValid}");
        
        // If the chain building failed, show the status of each element
        if (!isValid)
        {
            foreach (X509ChainElement element in chain.ChainElements)
            {
                Console.WriteLine($"Chain element: {element.Certificate.Subject}");
                
                foreach (X509ChainStatus status in element.ChainElementStatus)
                {
                    Console.WriteLine($"  Status: {status.Status}");
                    Console.WriteLine($"  Information: {status.StatusInformation}");
                }
            }
        }
    }
}
```

## Resources

- [HttpClient Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient)
- [TCP Client-Server Communication (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/network-programming/tcp-client-server)
- [UDP Client-Server Communication (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/network-programming/udp-client-server)
- [WebSockets in ASP.NET Core (Microsoft Docs)](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/websockets)
- [Network Programming in .NET (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/network-programming/)
