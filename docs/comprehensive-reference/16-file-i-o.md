---
title: "File I/O"
sidebar_position: 16
---

File I/O (Input/Output) operations are essential for reading from and writing to files in C#. The .NET Framework provides a rich set of classes for working with files and directories.

## File and Directory Operations

### File Class

The `File` class provides static methods for creating, copying, deleting, moving, and opening files.

```csharp
// Check if a file exists
bool exists = File.Exists("data.txt");

// Create a new file (overwrites if exists) and write text
File.WriteAllText("output.txt", "Hello, World!");

// Append text to a file (creates if doesn't exist)
File.AppendAllText("log.txt", $"{DateTime.Now}: Application started\n");

// Read all text from a file
string content = File.ReadAllText("data.txt");

// Read all lines from a file into a string array
string[] lines = File.ReadAllLines("data.txt");

// Write all lines to a file
File.WriteAllLines("output.txt", new[] { "Line 1", "Line 2", "Line 3" });

// Copy a file (overwrite if exists)
File.Copy("source.txt", "destination.txt", true);

// Move a file (rename)
File.Move("old.txt", "new.txt");

// Delete a file
File.Delete("temp.txt");

// Get file attributes
FileAttributes attributes = File.GetAttributes("data.txt");
bool isReadOnly = (attributes & FileAttributes.ReadOnly) == FileAttributes.ReadOnly;

// Set file attributes
File.SetAttributes("data.txt", FileAttributes.ReadOnly);

// Get file creation, access, and modification times
DateTime created = File.GetCreationTime("data.txt");
DateTime accessed = File.GetLastAccessTime("data.txt");
DateTime modified = File.GetLastWriteTime("data.txt");

// Open a file and return a FileStream
using (FileStream fs = File.Open("data.txt", FileMode.Open, FileAccess.Read))
{
    // Use the FileStream...
}

// Create a StreamReader for a file
using (StreamReader reader = File.OpenText("data.txt"))
{
    // Use the StreamReader...
}

// Create a StreamWriter for a file
using (StreamWriter writer = File.CreateText("output.txt"))
{
    // Use the StreamWriter...
}
```

### Directory Class

The `Directory` class provides static methods for creating, moving, and enumerating through directories and subdirectories.

```csharp
// Check if a directory exists
bool exists = Directory.Exists("logs");

// Create a directory
Directory.CreateDirectory("logs");

// Get the current directory
string currentDir = Directory.GetCurrentDirectory();

// Get the parent directory
string parentDir = Directory.GetParent(currentDir).FullName;

// Get all files in a directory
string[] files = Directory.GetFiles("logs");

// Get files with a specific pattern
string[] textFiles = Directory.GetFiles("logs", "*.txt");

// Get files with a specific pattern, including subdirectories
string[] allTextFiles = Directory.GetFiles("logs", "*.txt", SearchOption.AllDirectories);

// Get all directories in a directory
string[] dirs = Directory.GetDirectories("data");

// Get directories with a specific pattern
string[] backupDirs = Directory.GetDirectories("data", "backup*");

// Get all subdirectories recursively
string[] allSubDirs = Directory.GetDirectories("data", "*", SearchOption.AllDirectories);

// Move a directory
Directory.Move("old_logs", "new_logs");

// Delete an empty directory
Directory.Delete("temp");

// Delete a directory and all its contents
Directory.Delete("temp", true);

// Get directory creation, access, and modification times
DateTime created = Directory.GetCreationTime("logs");
DateTime accessed = Directory.GetLastAccessTime("logs");
DateTime modified = Directory.GetLastWriteTime("logs");
```

### Path Class

The `Path` class provides methods for processing directory and file paths.

```csharp
// Combine path parts
string fullPath = Path.Combine("data", "users", "user1.txt");  // "data/users/user1.txt" or "data\users\user1.txt"

// Get the file name from a path
string fileName = Path.GetFileName("data/users/user1.txt");  // "user1.txt"

// Get the file name without extension
string fileNameWithoutExt = Path.GetFileNameWithoutExtension("data/users/user1.txt");  // "user1"

// Get the file extension
string extension = Path.GetExtension("data/users/user1.txt");  // ".txt"

// Get the directory name
string dirName = Path.GetDirectoryName("data/users/user1.txt");  // "data/users"

// Get the full path (resolves relative paths)
string absolutePath = Path.GetFullPath("../data/users/user1.txt");

// Get a temporary file name
string tempFile = Path.GetTempFileName();

// Get the temporary directory path
string tempDir = Path.GetTempPath();

// Get the root directory
string rootDir = Path.GetPathRoot("C:/data/users/user1.txt");  // "C:/"

// Check if a path has an extension
bool hasExtension = Path.HasExtension("data.txt");  // true

// Change the extension of a path
string newPath = Path.ChangeExtension("data.txt", ".csv");  // "data.csv"

// Get a random file name
string randomFileName = Path.GetRandomFileName();

// Get the directory separator character
char separator = Path.DirectorySeparatorChar;  // '/' on Unix, '\' on Windows

// Get the invalid characters for file names
char[] invalidChars = Path.GetInvalidFileNameChars();
```

### FileInfo and DirectoryInfo Classes

`FileInfo` and `DirectoryInfo` provide instance methods for working with files and directories.

```csharp
// Create a FileInfo object
FileInfo file = new FileInfo("data.txt");

// Check if the file exists
bool exists = file.Exists;

// Get file properties
string name = file.Name;
string directory = file.DirectoryName;
string fullPath = file.FullName;
long size = file.Length;
bool isReadOnly = file.IsReadOnly;
DateTime created = file.CreationTime;
DateTime modified = file.LastWriteTime;

// Create a new file
using (FileStream fs = file.Create())
{
    // Use the FileStream...
}

// Open a file for reading
using (FileStream fs = file.OpenRead())
{
    // Use the FileStream...
}

// Open a file for writing
using (FileStream fs = file.OpenWrite())
{
    // Use the FileStream...
}

// Create a StreamReader for the file
using (StreamReader reader = file.OpenText())
{
    // Use the StreamReader...
}

// Create a StreamWriter for the file
using (StreamWriter writer = file.CreateText())
{
    // Use the StreamWriter...
}

// Copy the file
FileInfo copy = file.CopyTo("copy.txt", true);

// Move/rename the file
file.MoveTo("new_name.txt");

// Delete the file
file.Delete();

// Create a DirectoryInfo object
DirectoryInfo dir = new DirectoryInfo("logs");

// Check if the directory exists
exists = dir.Exists;

// Get directory properties
name = dir.Name;
fullPath = dir.FullName;
DirectoryInfo parent = dir.Parent;
created = dir.CreationTime;

// Create the directory
dir.Create();

// Get files in the directory
FileInfo[] files = dir.GetFiles();

// Get files with a specific pattern
FileInfo[] textFiles = dir.GetFiles("*.txt");

// Get files with a specific pattern, including subdirectories
FileInfo[] allTextFiles = dir.GetFiles("*.txt", SearchOption.AllDirectories);

// Get subdirectories
DirectoryInfo[] subDirs = dir.GetDirectories();

// Get subdirectories with a specific pattern
DirectoryInfo[] backupDirs = dir.GetDirectories("backup*");

// Move/rename the directory
dir.MoveTo("new_logs");

// Delete the directory
dir.Delete();  // Fails if not empty
dir.Delete(true);  // Deletes all contents
```

## Reading and Writing Files

### StreamReader and StreamWriter

`StreamReader` and `StreamWriter` are used for reading from and writing to text files.

```csharp
// Reading a text file line by line
using (StreamReader reader = new StreamReader("data.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null)
    {
        Console.WriteLine(line);
    }
}

// Reading a text file all at once
using (StreamReader reader = new StreamReader("data.txt"))
{
    string content = reader.ReadToEnd();
    Console.WriteLine(content);
}

// Reading a specific number of characters
using (StreamReader reader = new StreamReader("data.txt"))
{
    char[] buffer = new char[1024];
    int charsRead = reader.Read(buffer, 0, buffer.Length);
    Console.WriteLine(new string(buffer, 0, charsRead));
}

// Writing to a text file
using (StreamWriter writer = new StreamWriter("output.txt"))
{
    writer.WriteLine("Line 1");
    writer.WriteLine("Line 2");
    writer.WriteLine("Line 3");
}

// Appending to a text file
using (StreamWriter writer = new StreamWriter("log.txt", true))
{
    writer.WriteLine($"{DateTime.Now}: Application started");
}

// Writing with specific encoding
using (StreamWriter writer = new StreamWriter("output.txt", false, Encoding.UTF8))
{
    writer.WriteLine("Text with UTF-8 encoding");
}

// Reading with specific encoding
using (StreamReader reader = new StreamReader("data.txt", Encoding.UTF8))
{
    string content = reader.ReadToEnd();
    Console.WriteLine(content);
}
```

### FileStream

`FileStream` provides a stream for reading from and writing to files.

```csharp
// Creating a file and writing bytes
using (FileStream fs = new FileStream("data.bin", FileMode.Create, FileAccess.Write))
{
    byte[] data = { 0x48, 0x65, 0x6C, 0x6C, 0x6F };  // "Hello" in ASCII
    fs.Write(data, 0, data.Length);
}

// Opening a file and reading bytes
using (FileStream fs = new FileStream("data.bin", FileMode.Open, FileAccess.Read))
{
    byte[] buffer = new byte[1024];
    int bytesRead = fs.Read(buffer, 0, buffer.Length);
    
    // Process the bytes...
    for (int i = 0; i < bytesRead; i++)
    {
        Console.Write($"{buffer[i]:X2} ");
    }
}

// Seeking to a specific position
using (FileStream fs = new FileStream("data.bin", FileMode.Open, FileAccess.ReadWrite))
{
    // Seek to the 10th byte
    fs.Seek(10, SeekOrigin.Begin);
    
    // Read from that position
    int byteValue = fs.ReadByte();
    
    // Seek to the end
    fs.Seek(0, SeekOrigin.End);
    
    // Append data
    byte[] data = { 0x21 };  // "!" in ASCII
    fs.Write(data, 0, data.Length);
    
    // Seek relative to current position
    fs.Seek(-5, SeekOrigin.Current);
}

// Using FileStream with different modes
using (FileStream fs = new FileStream("data.bin", FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read))
{
    // FileMode.OpenOrCreate - Opens if exists, creates if doesn't
    // FileAccess.ReadWrite - Allows reading and writing
    // FileShare.Read - Allows other processes to read the file while open
    
    // File operations...
}
```

### BinaryReader and BinaryWriter

`BinaryReader` and `BinaryWriter` are used for reading and writing primitive data types as binary values.

```csharp
// Writing binary data
using (FileStream fs = new FileStream("data.bin", FileMode.Create))
using (BinaryWriter writer = new BinaryWriter(fs))
{
    writer.Write(42);        // Write an int
    writer.Write(3.14159);   // Write a double
    writer.Write("Hello");   // Write a string
    writer.Write(true);      // Write a boolean
    writer.Write((byte)255); // Write a byte
}

// Reading binary data
using (FileStream fs = new FileStream("data.bin", FileMode.Open))
using (BinaryReader reader = new BinaryReader(fs))
{
    int intValue = reader.ReadInt32();
    double doubleValue = reader.ReadDouble();
    string stringValue = reader.ReadString();
    bool boolValue = reader.ReadBoolean();
    byte byteValue = reader.ReadByte();
    
    Console.WriteLine($"Int: {intValue}, Double: {doubleValue}, String: {stringValue}, Bool: {boolValue}, Byte: {byteValue}");
}

// Reading until end of file
using (FileStream fs = new FileStream("data.bin", FileMode.Open))
using (BinaryReader reader = new BinaryReader(fs))
{
    try
    {
        while (true)
        {
            byte value = reader.ReadByte();
            Console.Write($"{value:X2} ");
        }
    }
    catch (EndOfStreamException)
    {
        // Reached the end of the file
        Console.WriteLine("\nEnd of file reached.");
    }
}
```

### MemoryStream

`MemoryStream` provides a stream that uses memory as a backing store instead of a file.

```csharp
// Creating a MemoryStream and writing to it
using (MemoryStream ms = new MemoryStream())
{
    // Write data to the memory stream
    byte[] data = Encoding.UTF8.GetBytes("Hello, World!");
    ms.Write(data, 0, data.Length);
    
    // Reset the position to the beginning
    ms.Position = 0;
    
    // Read data from the memory stream
    byte[] buffer = new byte[ms.Length];
    ms.Read(buffer, 0, buffer.Length);
    
    // Convert bytes back to string
    string result = Encoding.UTF8.GetString(buffer);
    Console.WriteLine(result);  // "Hello, World!"
    
    // Get the bytes from the memory stream
    byte[] allBytes = ms.ToArray();
    
    // Write the memory stream to a file
    File.WriteAllBytes("output.bin", allBytes);
}

// Using MemoryStream as a temporary buffer
using (MemoryStream ms = new MemoryStream())
{
    // Create a writer that writes to the memory stream
    using (StreamWriter writer = new StreamWriter(ms, Encoding.UTF8, 1024, true))
    {
        writer.WriteLine("Line 1");
        writer.WriteLine("Line 2");
        writer.Flush();  // Ensure all data is written to the underlying stream
        
        // Get the current position
        long position = ms.Position;
        
        // Reset to beginning
        ms.Position = 0;
        
        // Create a reader that reads from the memory stream
        using (StreamReader reader = new StreamReader(ms, Encoding.UTF8, false, 1024, true))
        {
            string content = reader.ReadToEnd();
            Console.WriteLine(content);
        }
    }
}
```

## Asynchronous File I/O

### Async File Operations

The .NET Framework provides asynchronous versions of many file operations.

```csharp
// Async file reading
public async Task<string> ReadFileAsync(string filePath)
{
    using (StreamReader reader = new StreamReader(filePath))
    {
        return await reader.ReadToEndAsync();
    }
}

// Async file writing
public async Task WriteFileAsync(string filePath, string content)
{
    using (StreamWriter writer = new StreamWriter(filePath))
    {
        await writer.WriteAsync(content);
    }
}

// Async file copy
public async Task CopyFileAsync(string sourcePath, string destinationPath)
{
    using (FileStream sourceStream = new FileStream(sourcePath, FileMode.Open, FileAccess.Read))
    using (FileStream destinationStream = new FileStream(destinationPath, FileMode.Create, FileAccess.Write))
    {
        await sourceStream.CopyToAsync(destinationStream);
    }
}

// Using File class async methods
public async Task FileClassAsyncExample()
{
    // Read all text asynchronously
    string content = await File.ReadAllTextAsync("data.txt");
    
    // Read all lines asynchronously
    string[] lines = await File.ReadAllLinesAsync("data.txt");
    
    // Read all bytes asynchronously
    byte[] bytes = await File.ReadAllBytesAsync("data.bin");
    
    // Write all text asynchronously
    await File.WriteAllTextAsync("output.txt", "Hello, World!");
    
    // Write all lines asynchronously
    await File.WriteAllLinesAsync("output.txt", new[] { "Line 1", "Line 2", "Line 3" });
    
    // Write all bytes asynchronously
    await File.WriteAllBytesAsync("output.bin", new byte[] { 0x48, 0x65, 0x6C, 0x6C, 0x6F });
}

// Async file stream operations
public async Task FileStreamAsyncExample()
{
    using (FileStream fs = new FileStream("data.bin", FileMode.Open, FileAccess.Read))
    {
        byte[] buffer = new byte[1024];
        
        // Read asynchronously
        int bytesRead = await fs.ReadAsync(buffer, 0, buffer.Length);
        
        // Process the bytes...
    }
    
    using (FileStream fs = new FileStream("output.bin", FileMode.Create, FileAccess.Write))
    {
        byte[] data = { 0x48, 0x65, 0x6C, 0x6C, 0x6F };  // "Hello" in ASCII
        
        // Write asynchronously
        await fs.WriteAsync(data, 0, data.Length);
    }
}
```

### Async Stream Reading and Writing

```csharp
// Async stream reading line by line
public async Task ReadLinesAsync(string filePath)
{
    using (StreamReader reader = new StreamReader(filePath))
    {
        string line;
        while ((line = await reader.ReadLineAsync()) != null)
        {
            Console.WriteLine(line);
        }
    }
}

// Async stream writing
public async Task WriteLinesAsync(string filePath, IEnumerable<string> lines)
{
    using (StreamWriter writer = new StreamWriter(filePath))
    {
        foreach (string line in lines)
        {
            await writer.WriteLineAsync(line);
        }
    }
}

// Processing a large file asynchronously
public async Task ProcessLargeFileAsync(string filePath)
{
    using (StreamReader reader = new StreamReader(filePath))
    {
        // Buffer for reading chunks of text
        char[] buffer = new char[4096];
        int charsRead;
        
        while ((charsRead = await reader.ReadAsync(buffer, 0, buffer.Length)) > 0)
        {
            // Process the characters in the buffer
            string chunk = new string(buffer, 0, charsRead);
            // Do something with the chunk...
        }
    }
}
```

## File Compression

### Using System.IO.Compression

The `System.IO.Compression` namespace provides classes for compressing and decompressing files and streams.

```csharp
// Compress a file
public void CompressFile(string sourceFile, string compressedFile)
{
    using (FileStream sourceStream = new FileStream(sourceFile, FileMode.Open))
    using (FileStream targetStream = new FileStream(compressedFile, FileMode.Create))
    using (GZipStream compressionStream = new GZipStream(targetStream, CompressionMode.Compress))
    {
        sourceStream.CopyTo(compressionStream);
    }
}

// Decompress a file
public void DecompressFile(string compressedFile, string targetFile)
{
    using (FileStream sourceStream = new FileStream(compressedFile, FileMode.Open))
    using (GZipStream decompressionStream = new GZipStream(sourceStream, CompressionMode.Decompress))
    using (FileStream targetStream = new FileStream(targetFile, FileMode.Create))
    {
        decompressionStream.CopyTo(targetStream);
    }
}

// Compress a string
public byte[] CompressString(string text)
{
    byte[] inputBytes = Encoding.UTF8.GetBytes(text);
    
    using (MemoryStream outputStream = new MemoryStream())
    {
        using (GZipStream compressionStream = new GZipStream(outputStream, CompressionMode.Compress, true))
        {
            compressionStream.Write(inputBytes, 0, inputBytes.Length);
        }
        
        return outputStream.ToArray();
    }
}

// Decompress a byte array to a string
public string DecompressString(byte[] compressedData)
{
    using (MemoryStream inputStream = new MemoryStream(compressedData))
    using (GZipStream decompressionStream = new GZipStream(inputStream, CompressionMode.Decompress))
    using (StreamReader reader = new StreamReader(decompressionStream, Encoding.UTF8))
    {
        return reader.ReadToEnd();
    }
}
```

### Working with ZIP Files

```csharp
// Create a ZIP file
public void CreateZipFile(string sourceDirectory, string zipFilePath)
{
    ZipFile.CreateFromDirectory(sourceDirectory, zipFilePath);
}

// Extract a ZIP file
public void ExtractZipFile(string zipFilePath, string targetDirectory)
{
    ZipFile.ExtractToDirectory(zipFilePath, targetDirectory);
}

// Create a ZIP file with options
public void CreateZipFileWithOptions(string sourceDirectory, string zipFilePath)
{
    ZipFile.CreateFromDirectory(
        sourceDirectory,
        zipFilePath,
        CompressionLevel.Optimal,  // Compression level
        false,                     // Include base directory
        Encoding.UTF8              // Entry name encoding
    );
}

// Extract a ZIP file with encoding
public void ExtractZipFileWithEncoding(string zipFilePath, string targetDirectory)
{
    ZipFile.ExtractToDirectory(zipFilePath, targetDirectory, Encoding.UTF8);
}

// Working with ZIP archives
public void ManipulateZipArchive(string zipFilePath)
{
    using (ZipArchive archive = ZipFile.Open(zipFilePath, ZipArchiveMode.Update))
    {
        // Add a file to the archive
        ZipArchiveEntry entry = archive.CreateEntry("newfile.txt");
        using (StreamWriter writer = new StreamWriter(entry.Open()))
        {
            writer.WriteLine("This is a new file in the ZIP archive.");
        }
        
        // Extract a specific file
        ZipArchiveEntry existingEntry = archive.GetEntry("existingfile.txt");
        if (existingEntry != null)
        {
            existingEntry.ExtractToFile("extracted.txt", true);
        }
        
        // Delete an entry
        ZipArchiveEntry entryToDelete = archive.GetEntry("oldfile.txt");
        if (entryToDelete != null)
        {
            entryToDelete.Delete();
        }
        
        // List all entries
        foreach (ZipArchiveEntry archiveEntry in archive.Entries)
        {
            Console.WriteLine($"Name: {archiveEntry.Name}, Size: {archiveEntry.Length}, Modified: {archiveEntry.LastWriteTime}");
        }
    }
}
```

## File Watching

### FileSystemWatcher

The `FileSystemWatcher` class allows you to monitor a directory for changes to files and subdirectories.

```csharp
// Create a FileSystemWatcher
public void WatchDirectory(string path)
{
    // Create a new FileSystemWatcher
    using (FileSystemWatcher watcher = new FileSystemWatcher())
    {
        // Set the directory to watch
        watcher.Path = path;
        
        // Watch for changes in LastWrite time and file/directory name
        watcher.NotifyFilter = NotifyFilters.LastWrite
                             | NotifyFilters.FileName
                             | NotifyFilters.DirectoryName;
        
        // Only watch text files
        watcher.Filter = "*.txt";
        
        // Add event handlers
        watcher.Changed += OnChanged;
        watcher.Created += OnCreated;
        watcher.Deleted += OnDeleted;
        watcher.Renamed += OnRenamed;
        
        // Begin watching
        watcher.EnableRaisingEvents = true;
        
        // Wait for the user to quit the program
        Console.WriteLine("Press 'q' to quit the watcher.");
        while (Console.Read() != 'q') ;
    }
}

// Event handlers
private static void OnChanged(object sender, FileSystemEventArgs e)
{
    Console.WriteLine($"File: {e.FullPath} {e.ChangeType}");
}

private static void OnCreated(object sender, FileSystemEventArgs e)
{
    Console.WriteLine($"File: {e.FullPath} created");
}

private static void OnDeleted(object sender, FileSystemEventArgs e)
{
    Console.WriteLine($"File: {e.FullPath} deleted");
}

private static void OnRenamed(object sender, RenamedEventArgs e)
{
    Console.WriteLine($"File: {e.OldFullPath} renamed to {e.FullPath}");
}

// Watch subdirectories
public void WatchDirectoryWithSubdirectories(string path)
{
    using (FileSystemWatcher watcher = new FileSystemWatcher())
    {
        watcher.Path = path;
        watcher.IncludeSubdirectories = true;  // Watch subdirectories
        watcher.NotifyFilter = NotifyFilters.LastWrite | NotifyFilters.FileName | NotifyFilters.DirectoryName;
        
        // Event handlers...
        
        watcher.EnableRaisingEvents = true;
        
        // Wait for the user to quit the program
        Console.WriteLine("Press 'q' to quit the watcher.");
        while (Console.Read() != 'q') ;
    }
}
```

## File Security

### File Access Control

```csharp
// Get file security information
public void GetFileSecurity(string filePath)
{
    FileSecurity security = File.GetAccessControl(filePath);
    
    // Get the owner
    IdentityReference owner = security.GetOwner(typeof(NTAccount));
    Console.WriteLine($"Owner: {owner.Value}");
    
    // Get access rules
    AuthorizationRuleCollection rules = security.GetAccessRules(true, true, typeof(NTAccount));
    
    foreach (FileSystemAccessRule rule in rules)
    {
        Console.WriteLine($"Identity: {rule.IdentityReference.Value}");
        Console.WriteLine($"Access: {rule.FileSystemRights}");
        Console.WriteLine($"Type: {rule.AccessControlType}");
        Console.WriteLine();
    }
}

// Set file security
public void SetFileSecurity(string filePath)
{
    FileSecurity security = File.GetAccessControl(filePath);
    
    // Add a new access rule
    FileSystemAccessRule rule = new FileSystemAccessRule(
        "Everyone",  // Identity
        FileSystemRights.Read,  // Rights
        AccessControlType.Allow  // Allow or deny
    );
    
    security.AddAccessRule(rule);
    
    // Set the modified security
    File.SetAccessControl(filePath, security);
}

// Remove an access rule
public void RemoveAccessRule(string filePath, string identity)
{
    FileSecurity security = File.GetAccessControl(filePath);
    
    // Create a rule to remove
    FileSystemAccessRule rule = new FileSystemAccessRule(
        identity,
        FileSystemRights.FullControl,
        AccessControlType.Allow
    );
    
    // Remove the rule
    security.RemoveAccessRule(rule);
    
    // Set the modified security
    File.SetAccessControl(filePath, security);
}

// Change the owner
public void ChangeOwner(string filePath, string newOwner)
{
    FileSecurity security = File.GetAccessControl(filePath);
    
    // Set the new owner
    security.SetOwner(new NTAccount(newOwner));
    
    // Apply the changes
    File.SetAccessControl(filePath, security);
}
```

### Encrypted File System (EFS)

```csharp
// Encrypt a file
public void EncryptFile(string filePath)
{
    File.Encrypt(filePath);
}

// Decrypt a file
public void DecryptFile(string filePath)
{
    File.Decrypt(filePath);
}

// Check if a file is encrypted
public bool IsFileEncrypted(string filePath)
{
    FileAttributes attributes = File.GetAttributes(filePath);
    return (attributes & FileAttributes.Encrypted) == FileAttributes.Encrypted;
}
```

## Best Practices

### Error Handling

```csharp
// Proper error handling for file operations
public string ReadFileWithErrorHandling(string filePath)
{
    try
    {
        return File.ReadAllText(filePath);
    }
    catch (FileNotFoundException ex)
    {
        Console.WriteLine($"File not found: {ex.Message}");
        return string.Empty;
    }
    catch (DirectoryNotFoundException ex)
    {
        Console.WriteLine($"Directory not found: {ex.Message}");
        return string.Empty;
    }
    catch (IOException ex)
    {
        Console.WriteLine($"I/O error: {ex.Message}");
        return string.Empty;
    }
    catch (UnauthorizedAccessException ex)
    {
        Console.WriteLine($"Access denied: {ex.Message}");
        return string.Empty;
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Unexpected error: {ex.Message}");
        return string.Empty;
    }
}

// Using the using statement for proper resource disposal
public void WriteFileWithProperDisposal(string filePath, string content)
{
    try
    {
        using (StreamWriter writer = new StreamWriter(filePath))
        {
            writer.Write(content);
        }  // StreamWriter is automatically disposed here
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error writing to file: {ex.Message}");
    }
}
```

### Performance Considerations

```csharp
// Buffered reading for better performance
public void ReadLargeFileEfficiently(string filePath)
{
    const int BufferSize = 8192;  // 8KB buffer
    
    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.Read, BufferSize))
    using (BufferedStream bs = new BufferedStream(fs, BufferSize))
    using (StreamReader reader = new StreamReader(bs))
    {
        string line;
        while ((line = reader.ReadLine()) != null)
        {
            // Process the line...
        }
    }
}

// Using FileOptions for performance optimization
public void OptimizeFileAccess(string filePath)
{
    // Sequential access optimization
    using (FileStream fs = new FileStream(
        filePath,
        FileMode.Open,
        FileAccess.Read,
        FileShare.Read,
        4096,  // Buffer size
        FileOptions.SequentialScan))  // Optimize for sequential access
    {
        // Read the file...
    }
    
    // Random access optimization
    using (FileStream fs = new FileStream(
        filePath,
        FileMode.Open,
        FileAccess.Read,
        FileShare.Read,
        4096,
        FileOptions.RandomAccess))  // Optimize for random access
    {
        // Read the file...
    }
    
    // Asynchronous optimization
    using (FileStream fs = new FileStream(
        filePath,
        FileMode.Open,
        FileAccess.Read,
        FileShare.Read,
        4096,
        FileOptions.Asynchronous))  // Optimize for asynchronous access
    {
        // Read the file asynchronously...
    }
}

// Memory-mapped files for very large files
public void UseMemoryMappedFile(string filePath)
{
    using (MemoryMappedFile mmf = MemoryMappedFile.CreateFromFile(filePath, FileMode.Open))
    {
        // Access a portion of the file
        using (MemoryMappedViewAccessor accessor = mmf.CreateViewAccessor(0, 1024))  // First 1KB
        {
            // Read data
            byte value = accessor.ReadByte(0);
            
            // Write data
            accessor.Write(10, (byte)65);  // Write 'A' at offset 10
        }
        
        // Access the file as a stream
        using (MemoryMappedViewStream stream = mmf.CreateViewStream())
        {
            // Use the stream...
            byte[] buffer = new byte[100];
            stream.Read(buffer, 0, buffer.Length);
        }
    }
}
```

### File Path Handling

```csharp
// Safe file path handling
public string GetSafeFilePath(string basePath, string fileName)
{
    // Validate and sanitize the file name
    if (string.IsNullOrEmpty(fileName))
    {
        throw new ArgumentException("File name cannot be null or empty", nameof(fileName));
    }
    
    // Remove any invalid characters
    string safeFileName = string.Join("_", fileName.Split(Path.GetInvalidFileNameChars()));
    
    // Combine paths safely
    string fullPath = Path.Combine(basePath, safeFileName);
    
    // Ensure the resulting path is within the intended directory
    string normalizedPath = Path.GetFullPath(fullPath);
    string normalizedBasePath = Path.GetFullPath(basePath);
    
    if (!normalizedPath.StartsWith(normalizedBasePath))
    {
        throw new SecurityException("Attempted path traversal attack");
    }
    
    return fullPath;
}

// Creating a unique file name
public string GetUniqueFileName(string directory, string fileName)
{
    string fileNameOnly = Path.GetFileNameWithoutExtension(fileName);
    string extension = Path.GetExtension(fileName);
    string path = Path.Combine(directory, fileName);
    int count = 1;
    
    while (File.Exists(path))
    {
        string newFileName = $"{fileNameOnly}({count}){extension}";
        path = Path.Combine(directory, newFileName);
        count++;
    }
    
    return path;
}
```

## Resources

- [File and Stream I/O (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/io/)
- [File Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.io.file)
- [Directory Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.io.directory)
- [Path Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.io.path)
- [FileStream Class (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/api/system.io.filestream)
- [Asynchronous File I/O (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/io/asynchronous-file-i-o)
