---
title: "Tooling and Ecosystem"
sidebar_position: 28
---

The .NET ecosystem provides a rich set of tools and libraries to help you develop, test, and deploy C# applications. This section covers the essential tools and components of the .NET ecosystem.

## .NET CLI

The .NET Command Line Interface (CLI) is a cross-platform tool for developing, building, running, and publishing .NET applications.

### Basic Commands

```bash
# Create a new console application
dotnet new console -n MyApp

# Create a new web API project
dotnet new webapi -n MyApi

# Create a new class library
dotnet new classlib -n MyLibrary

# Build a project or solution
dotnet build

# Run a project
dotnet run

# Run with specific configuration
dotnet run --configuration Release

# Run with specific framework
dotnet run --framework net8.0

# Publish the application
dotnet publish -c Release
```

### Project Management

```bash
# Add a reference to another project
dotnet add reference ../MyLibrary/MyLibrary.csproj

# Add a NuGet package
dotnet add package Newtonsoft.Json

# Add a specific version of a package
dotnet add package Microsoft.EntityFrameworkCore --version 8.0.0

# Remove a package
dotnet remove package Newtonsoft.Json

# List project references
dotnet list reference

# List NuGet packages
dotnet list package
```

### Solution Management

```bash
# Create a new solution
dotnet new sln -n MySolution

# Add projects to a solution
dotnet sln add MyApp/MyApp.csproj MyLibrary/MyLibrary.csproj

# Remove a project from a solution
dotnet sln remove MyApp/MyApp.csproj

# List projects in a solution
dotnet sln list
```

### Testing

```bash
# Run tests
dotnet test

# Run tests with filter
dotnet test --filter "Category=Unit"

# Run tests with test results output
dotnet test --logger "trx;LogFileName=results.trx"

# Run tests with code coverage
dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=cobertura
```

### Tools

```bash
# Install a global tool
dotnet tool install -g dotnet-ef

# Update a global tool
dotnet tool update -g dotnet-ef

# Uninstall a global tool
dotnet tool uninstall -g dotnet-ef

# List installed global tools
dotnet tool list -g

# Install a local tool
dotnet tool install dotnet-reportgenerator-globaltool
```

## NuGet Package Management

NuGet is the package manager for .NET, allowing you to share and consume code packages.

### Package Management with CLI

```bash
# Restore packages
dotnet restore

# Add a package
dotnet add package Serilog

# Add a package with specific version
dotnet add package Microsoft.Extensions.Logging --version 8.0.0

# Add a package from a specific source
dotnet add package MyPackage --source https://mypackagesource/v3/index.json

# Remove a package
dotnet remove package Serilog
```

### Package Management with NuGet.Config

Create a `NuGet.Config` file to configure package sources:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <clear />
    <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
    <add key="MyCompany" value="https://packages.mycompany.com/nuget/v3/index.json" />
  </packageSources>
  <packageSourceCredentials>
    <MyCompany>
      <add key="Username" value="username" />
      <add key="ClearTextPassword" value="password" />
    </MyCompany>
  </packageSourceCredentials>
</configuration>
```

### Creating NuGet Packages

```bash
# Create a NuGet package
dotnet pack -c Release

# Create a NuGet package with specific version
dotnet pack -c Release /p:Version=1.0.1

# Push a package to NuGet.org
dotnet nuget push bin/Release/MyPackage.1.0.0.nupkg --api-key YOUR_API_KEY --source https://api.nuget.org/v3/index.json

# Push a package to a private feed
dotnet nuget push bin/Release/MyPackage.1.0.0.nupkg --source https://packages.mycompany.com/nuget/v3/index.json
```

## Testing Frameworks

.NET provides several testing frameworks to help you write and run tests.

### xUnit

xUnit is a popular testing framework for .NET:

```csharp
using Xunit;

public class CalculatorTests
{
    [Fact]
    public void Add_TwoNumbers_ReturnsSum()
    {
        // Arrange
        var calculator = new Calculator();
        
        // Act
        int result = calculator.Add(2, 3);
        
        // Assert
        Assert.Equal(5, result);
    }
    
    [Theory]
    [InlineData(1, 1, 2)]
    [InlineData(5, 3, 8)]
    [InlineData(-1, 1, 0)]
    public void Add_MultipleTestCases_ReturnsSum(int a, int b, int expected)
    {
        var calculator = new Calculator();
        int result = calculator.Add(a, b);
        Assert.Equal(expected, result);
    }
}
```

### NUnit

NUnit is another popular testing framework:

```csharp
using NUnit.Framework;

[TestFixture]
public class CalculatorTests
{
    [Test]
    public void Add_TwoNumbers_ReturnsSum()
    {
        // Arrange
        var calculator = new Calculator();
        
        // Act
        int result = calculator.Add(2, 3);
        
        // Assert
        Assert.AreEqual(5, result);
    }
    
    [TestCase(1, 1, 2)]
    [TestCase(5, 3, 8)]
    [TestCase(-1, 1, 0)]
    public void Add_MultipleTestCases_ReturnsSum(int a, int b, int expected)
    {
        var calculator = new Calculator();
        int result = calculator.Add(a, b);
        Assert.AreEqual(expected, result);
    }
}
```

### MSTest

MSTest is Microsoft's testing framework:

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class CalculatorTests
{
    [TestMethod]
    public void Add_TwoNumbers_ReturnsSum()
    {
        // Arrange
        var calculator = new Calculator();
        
        // Act
        int result = calculator.Add(2, 3);
        
        // Assert
        Assert.AreEqual(5, result);
    }
    
    [DataTestMethod]
    [DataRow(1, 1, 2)]
    [DataRow(5, 3, 8)]
    [DataRow(-1, 1, 0)]
    public void Add_MultipleTestCases_ReturnsSum(int a, int b, int expected)
    {
        var calculator = new Calculator();
        int result = calculator.Add(a, b);
        Assert.AreEqual(expected, result);
    }
}
```

### Mocking Frameworks

Mocking frameworks help you create mock objects for testing:

#### Moq

```csharp
using Moq;
using Xunit;

public class OrderServiceTests
{
    [Fact]
    public void PlaceOrder_ValidOrder_ReturnsOrderId()
    {
        // Arrange
        var mockRepository = new Mock<IOrderRepository>();
        mockRepository.Setup(repo => repo.Save(It.IsAny<Order>()))
                     .Returns(42);
        
        var service = new OrderService(mockRepository.Object);
        var order = new Order { /* ... */ };
        
        // Act
        int orderId = service.PlaceOrder(order);
        
        // Assert
        Assert.Equal(42, orderId);
        mockRepository.Verify(repo => repo.Save(order), Times.Once);
    }
}
```

#### NSubstitute

```csharp
using NSubstitute;
using Xunit;

public class OrderServiceTests
{
    [Fact]
    public void PlaceOrder_ValidOrder_ReturnsOrderId()
    {
        // Arrange
        var repository = Substitute.For<IOrderRepository>();
        repository.Save(Arg.Any<Order>()).Returns(42);
        
        var service = new OrderService(repository);
        var order = new Order { /* ... */ };
        
        // Act
        int orderId = service.PlaceOrder(order);
        
        // Assert
        Assert.Equal(42, orderId);
        repository.Received(1).Save(order);
    }
}
```

## Common Libraries

The .NET ecosystem includes many popular libraries for various tasks.

### Web Development

- **ASP.NET Core**: Framework for building web apps and APIs
- **Blazor**: Framework for building interactive web UIs using C#
- **Minimal APIs**: Lightweight approach to building HTTP APIs
- **SignalR**: Real-time web functionality for apps
- **Swagger/OpenAPI**: API documentation and testing

### Data Access

- **Entity Framework Core**: ORM for database access
- **Dapper**: Lightweight ORM for high performance
- **MongoDB.Driver**: MongoDB client library
- **StackExchange.Redis**: Redis client library
- **Npgsql**: PostgreSQL client library

### Logging and Monitoring

- **Serilog**: Structured logging library
- **NLog**: Flexible logging platform
- **Microsoft.Extensions.Logging**: Logging abstractions
- **OpenTelemetry**: Observability framework
- **Application Insights**: Azure monitoring service

### Serialization

- **System.Text.Json**: Built-in JSON serialization
- **Newtonsoft.Json**: Popular JSON framework
- **MessagePack**: Binary serialization format
- **Protobuf-net**: Protocol Buffers serialization

### Dependency Injection

- **Microsoft.Extensions.DependencyInjection**: Built-in DI container
- **Autofac**: IoC container
- **Lamar**: Fast IoC container
- **SimpleInjector**: DI container focused on simplicity

### Authentication and Authorization

- **Microsoft.AspNetCore.Authentication**: Authentication middleware
- **IdentityServer**: OpenID Connect and OAuth 2.0 framework
- **Auth0.NET**: Auth0 integration
- **Microsoft.Identity.Web**: Microsoft identity platform integration

### Testing

- **xUnit**: Testing framework
- **NUnit**: Testing framework
- **MSTest**: Microsoft's testing framework
- **Moq**: Mocking framework
- **NSubstitute**: Mocking framework
- **FluentAssertions**: Fluent assertions library
- **Bogus**: Fake data generator

### Utility Libraries

- **Polly**: Resilience and transient-fault-handling library
- **Humanizer**: String manipulation and human-friendly text
- **AutoMapper**: Object-to-object mapping
- **FluentValidation**: Validation library
- **MediatR**: Mediator pattern implementation
- **Scrutor**: Assembly scanning and decoration extensions for DI

## Build Systems

Build systems automate the process of compiling, testing, and packaging your code.

### MSBuild

MSBuild is the build system used by Visual Studio and the .NET CLI:

```xml
<!-- Directory.Build.props -->
<Project>
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <LangVersion>latest</LangVersion>
  </PropertyGroup>
  
  <ItemGroup>
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.8.0" />
    <PackageReference Include="xunit" Version="2.6.1" />
    <PackageReference Include="xunit.runner.visualstudio" Version="2.5.3" />
  </ItemGroup>
</Project>
```

### CAKE (C# Make)

CAKE is a cross-platform build automation system with a C# DSL:

```csharp
// build.cake
var target = Argument("target", "Default");
var configuration = Argument("configuration", "Release");

Task("Clean")
    .Does(() =>
    {
        CleanDirectories("./src/**/bin");
        CleanDirectories("./src/**/obj");
    });

Task("Restore")
    .IsDependentOn("Clean")
    .Does(() =>
    {
        DotNetRestore("./MySolution.sln");
    });

Task("Build")
    .IsDependentOn("Restore")
    .Does(() =>
    {
        DotNetBuild("./MySolution.sln", new DotNetBuildSettings
        {
            Configuration = configuration,
            NoRestore = true
        });
    });

Task("Test")
    .IsDependentOn("Build")
    .Does(() =>
    {
        DotNetTest("./MySolution.sln", new DotNetTestSettings
        {
            Configuration = configuration,
            NoRestore = true,
            NoBuild = true
        });
    });

Task("Default")
    .IsDependentOn("Test");

RunTarget(target);
```

### GitHub Actions

GitHub Actions allows you to automate your build, test, and deployment pipeline:

```yaml
# .github/workflows/build.yml
name: Build and Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: 8.0.x
        
    - name: Restore dependencies
      run: dotnet restore
      
    - name: Build
      run: dotnet build --no-restore --configuration Release
      
    - name: Test
      run: dotnet test --no-build --configuration Release --verbosity normal
```

### Azure DevOps Pipelines

Azure DevOps Pipelines provides CI/CD capabilities:

```yaml
# azure-pipelines.yml
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'

steps:
- task: UseDotNet@2
  inputs:
    packageType: 'sdk'
    version: '8.0.x'
    
- task: DotNetCoreCLI@2
  displayName: 'Restore'
  inputs:
    command: 'restore'
    projects: '**/*.csproj'
    
- task: DotNetCoreCLI@2
  displayName: 'Build'
  inputs:
    command: 'build'
    projects: '**/*.csproj'
    arguments: '--configuration $(buildConfiguration) --no-restore'
    
- task: DotNetCoreCLI@2
  displayName: 'Test'
  inputs:
    command: 'test'
    projects: '**/*Tests.csproj'
    arguments: '--configuration $(buildConfiguration) --no-build'
```

## Deployment Options

.NET applications can be deployed in various ways.

### Self-Contained Deployment

Package your application with the .NET runtime:

```bash
# Create a self-contained deployment for Windows
dotnet publish -c Release -r win-x64 --self-contained

# Create a self-contained deployment for Linux
dotnet publish -c Release -r linux-x64 --self-contained

# Create a self-contained deployment for macOS
dotnet publish -c Release -r osx-x64 --self-contained
```

### Framework-Dependent Deployment

Package your application without the .NET runtime:

```bash
# Create a framework-dependent deployment
dotnet publish -c Release
```

### Docker Containers

Deploy your application as a Docker container:

```dockerfile
# Dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MyApp.csproj", "./"]
RUN dotnet restore "MyApp.csproj"
COPY . .
RUN dotnet build "MyApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MyApp.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]
```

Build and run the Docker container:

```bash
# Build the Docker image
docker build -t myapp .

# Run the Docker container
docker run -p 8080:80 myapp
```

### Cloud Deployment

Deploy your application to cloud platforms:

#### Azure App Service

```bash
# Deploy to Azure App Service
az webapp up --name MyWebApp --resource-group MyResourceGroup --sku F1
```

#### AWS Elastic Beanstalk

```bash
# Deploy to AWS Elastic Beanstalk
eb init -p .NET -r us-east-1 MyApp
eb create MyApp-env
```

#### Kubernetes

```yaml
# kubernetes-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 80
```

Deploy to Kubernetes:

```bash
# Apply the Kubernetes deployment
kubectl apply -f kubernetes-deployment.yaml
```

## Resources

- [.NET CLI Documentation](https://learn.microsoft.com/en-us/dotnet/core/tools/)
- [NuGet Documentation](https://learn.microsoft.com/en-us/nuget/)
- [xUnit Documentation](https://xunit.net/docs/getting-started/netcore/cmdline)
- [Entity Framework Core Documentation](https://learn.microsoft.com/en-us/ef/core/)
- [ASP.NET Core Documentation](https://learn.microsoft.com/en-us/aspnet/core/)
- [Docker with .NET](https://learn.microsoft.com/en-us/dotnet/core/docker/introduction)
- [GitHub Actions for .NET](https://learn.microsoft.com/en-us/dotnet/devops/github-actions-overview)
