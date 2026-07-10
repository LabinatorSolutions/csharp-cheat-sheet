---
title: "Serialization"
sidebar_position: 19
---

Serialization is the process of converting objects into a format that can be stored or transmitted, while deserialization is the reverse process. C# provides several serialization mechanisms for different formats and use cases.

## JSON Serialization

### System.Text.Json (Modern)

```csharp
// Basic JSON serialization with System.Text.Json
public void BasicJsonSerialization()
{
    // Create an object to serialize
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1),
        Address = new Address
        {
            Street = "123 Main St",
            City = "Anytown",
            ZipCode = "12345"
        },
        PhoneNumbers = new List<string> { "555-1234", "555-5678" }
    };
    
    // Serialize to JSON string
    string json = JsonSerializer.Serialize(person);
    Console.WriteLine(json);
    
    // Deserialize from JSON string
    Person deserializedPerson = JsonSerializer.Deserialize<Person>(json);
    Console.WriteLine($"Deserialized: {deserializedPerson.Name}");
    
    // Serialize to file
    File.WriteAllText("person.json", json);
    
    // Deserialize from file
    string fileJson = File.ReadAllText("person.json");
    Person fileDeserializedPerson = JsonSerializer.Deserialize<Person>(fileJson);
}

// Customizing JSON serialization
public void CustomJsonSerialization()
{
    var options = new JsonSerializerOptions
    {
        WriteIndented = true,                      // Pretty printing
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,  // camelCase property names
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,  // Skip null values
        Converters = { new JsonStringEnumConverter() }  // Serialize enums as strings
    };
    
    var person = new Person { Name = "Jane Doe", Status = UserStatus.Active };
    
    string json = JsonSerializer.Serialize(person, options);
    Console.WriteLine(json);
    
    // Deserialize with options
    Person deserializedPerson = JsonSerializer.Deserialize<Person>(json, options);
}

// Using JSON attributes
public class Person
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    [JsonPropertyName("email_address")]
    public string Email { get; set; }
    
    [JsonIgnore]
    public string Password { get; set; }
    
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public UserStatus Status { get; set; }
    
    [JsonInclude]
    public DateTime BirthDate { get; private set; }
    
    public Address Address { get; set; }
    
    public List<string> PhoneNumbers { get; set; }
}

public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
    public string ZipCode { get; set; }
}

public enum UserStatus
{
    Inactive,
    Active,
    Suspended
}

// Working with JSON documents
public void JsonDocumentExample()
{
    string json = @"{
        ""name"": ""John Doe"",
        ""age"": 30,
        ""address"": {
            ""street"": ""123 Main St"",
            ""city"": ""Anytown""
        },
        ""phoneNumbers"": [""555-1234"", ""555-5678""]
    }";
    
    // Parse the JSON document
    using (JsonDocument document = JsonDocument.Parse(json))
    {
        JsonElement root = document.RootElement;
        
        // Access properties
        string name = root.GetProperty("name").GetString();
        int age = root.GetProperty("age").GetInt32();
        
        // Access nested properties
        JsonElement address = root.GetProperty("address");
        string street = address.GetProperty("street").GetString();
        
        // Access array elements
        JsonElement phoneNumbers = root.GetProperty("phoneNumbers");
        string firstPhone = phoneNumbers[0].GetString();
        
        Console.WriteLine($"Name: {name}, Age: {age}");
        Console.WriteLine($"Street: {street}");
        Console.WriteLine($"First phone: {firstPhone}");
        
        // Check if a property exists
        bool hasEmail = root.TryGetProperty("email", out JsonElement email);
        
        // Enumerate array elements
        foreach (JsonElement phone in phoneNumbers.EnumerateArray())
        {
            Console.WriteLine($"Phone: {phone.GetString()}");
        }
        
        // Enumerate object properties
        foreach (JsonProperty property in root.EnumerateObject())
        {
            Console.WriteLine($"Property: {property.Name}, Type: {property.Value.ValueKind}");
        }
    }
}

// Creating JSON with Utf8JsonWriter
public void CreateJsonWithWriter()
{
    using (MemoryStream stream = new MemoryStream())
    {
        using (Utf8JsonWriter writer = new Utf8JsonWriter(stream, new JsonWriterOptions { Indented = true }))
        {
            writer.WriteStartObject();
            
            writer.WriteString("name", "John Doe");
            writer.WriteNumber("age", 30);
            
            writer.WriteStartObject("address");
            writer.WriteString("street", "123 Main St");
            writer.WriteString("city", "Anytown");
            writer.WriteEndObject();
            
            writer.WriteStartArray("phoneNumbers");
            writer.WriteStringValue("555-1234");
            writer.WriteStringValue("555-5678");
            writer.WriteEndArray();
            
            writer.WriteEndObject();
        }
        
        string json = Encoding.UTF8.GetString(stream.ToArray());
        Console.WriteLine(json);
    }
}

// Custom JSON converter
public class DateTimeConverter : JsonConverter<DateTime>
{
    public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        if (reader.TokenType != JsonTokenType.String)
        {
            throw new JsonException("Expected string value for DateTime");
        }
        
        string dateString = reader.GetString();
        return DateTime.Parse(dateString);
    }
    
    public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
    {
        writer.WriteStringValue(value.ToString("yyyy-MM-dd"));
    }
}

// Using the custom converter
public void UseCustomConverter()
{
    var options = new JsonSerializerOptions
    {
        WriteIndented = true,
        Converters = { new DateTimeConverter() }
    };
    
    var person = new Person { Name = "John", BirthDate = new DateTime(1980, 1, 1) };
    string json = JsonSerializer.Serialize(person, options);
    Console.WriteLine(json);
}
```

### Newtonsoft.Json (Json.NET)

```csharp
// Basic JSON serialization with Newtonsoft.Json
public void BasicNewtonsoftJsonSerialization()
{
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1)
    };
    
    // Serialize to JSON string
    string json = JsonConvert.SerializeObject(person);
    Console.WriteLine(json);
    
    // Deserialize from JSON string
    Person deserializedPerson = JsonConvert.DeserializeObject<Person>(json);
    Console.WriteLine($"Deserialized: {deserializedPerson.Name}");
    
    // Pretty print
    string prettyJson = JsonConvert.SerializeObject(person, Formatting.Indented);
    Console.WriteLine(prettyJson);
}

// Customizing Newtonsoft.Json serialization
public void CustomNewtonsoftJsonSerialization()
{
    var settings = new JsonSerializerSettings
    {
        Formatting = Formatting.Indented,
        NullValueHandling = NullValueHandling.Ignore,
        DefaultValueHandling = DefaultValueHandling.Ignore,
        ContractResolver = new CamelCasePropertyNamesContractResolver(),
        Converters = { new StringEnumConverter() }
    };
    
    var person = new Person { Name = "Jane Doe", Status = UserStatus.Active };
    
    string json = JsonConvert.SerializeObject(person, settings);
    Console.WriteLine(json);
    
    // Deserialize with settings
    Person deserializedPerson = JsonConvert.DeserializeObject<Person>(json, settings);
}

// Using Newtonsoft.Json attributes
public class PersonWithAttributes
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    [JsonProperty("email_address")]
    public string Email { get; set; }
    
    [JsonIgnore]
    public string Password { get; set; }
    
    [JsonConverter(typeof(StringEnumConverter))]
    public UserStatus Status { get; set; }
    
    [JsonProperty]
    public DateTime BirthDate { get; private set; }
    
    [JsonExtensionData]
    public Dictionary<string, JToken> AdditionalData { get; set; }
}

// Working with JObject and LINQ to JSON
public void LinqToJsonExample()
{
    string json = @"{
        ""name"": ""John Doe"",
        ""age"": 30,
        ""address"": {
            ""street"": ""123 Main St"",
            ""city"": ""Anytown""
        },
        ""phoneNumbers"": [""555-1234"", ""555-5678""]
    }";
    
    // Parse JSON to JObject
    JObject jObject = JObject.Parse(json);
    
    // Access properties
    string name = (string)jObject["name"];
    int age = (int)jObject["age"];
    
    // Access nested properties
    string street = (string)jObject["address"]["street"];
    
    // Access array elements
    string firstPhone = (string)jObject["phoneNumbers"][0];
    
    Console.WriteLine($"Name: {name}, Age: {age}");
    Console.WriteLine($"Street: {street}");
    Console.WriteLine($"First phone: {firstPhone}");
    
    // Modify properties
    jObject["age"] = 31;
    jObject["address"]["zipCode"] = "12345";
    
    // Add new properties
    jObject["email"] = "john.doe@example.com";
    
    // Remove properties
    jObject.Remove("phoneNumbers");
    
    // Convert back to JSON
    string modifiedJson = jObject.ToString();
    Console.WriteLine(modifiedJson);
    
    // Create a new JObject
    JObject newObject = new JObject
    {
        ["name"] = "Jane Doe",
        ["age"] = 28,
        ["address"] = new JObject
        {
            ["street"] = "456 Oak Ave",
            ["city"] = "Othertown"
        },
        ["phoneNumbers"] = new JArray("555-4321", "555-8765")
    };
    
    string newJson = newObject.ToString();
    Console.WriteLine(newJson);
}

// Custom JSON converter for Newtonsoft.Json
public class CustomDateTimeConverter : JsonConverter
{
    public override bool CanConvert(Type objectType)
    {
        return objectType == typeof(DateTime);
    }
    
    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
    {
        if (reader.TokenType != JsonToken.String)
        {
            throw new JsonSerializationException("Expected string value for DateTime");
        }
        
        string dateString = (string)reader.Value;
        return DateTime.Parse(dateString);
    }
    
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
    {
        writer.WriteValue(((DateTime)value).ToString("yyyy-MM-dd"));
    }
}
```

## XML Serialization

### XmlSerializer

```csharp
// Basic XML serialization
public void BasicXmlSerialization()
{
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1),
        Address = new Address
        {
            Street = "123 Main St",
            City = "Anytown",
            ZipCode = "12345"
        },
        PhoneNumbers = new List<string> { "555-1234", "555-5678" }
    };
    
    // Create XML serializer
    XmlSerializer serializer = new XmlSerializer(typeof(Person));
    
    // Serialize to string
    using (StringWriter writer = new StringWriter())
    {
        serializer.Serialize(writer, person);
        string xml = writer.ToString();
        Console.WriteLine(xml);
    }
    
    // Serialize to file
    using (FileStream fs = new FileStream("person.xml", FileMode.Create))
    {
        serializer.Serialize(fs, person);
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("person.xml", FileMode.Open))
    {
        Person deserializedPerson = (Person)serializer.Deserialize(fs);
        Console.WriteLine($"Deserialized: {deserializedPerson.Name}");
    }
}

// Using XML attributes
[XmlRoot("Person")]
public class PersonWithXmlAttributes
{
    [XmlAttribute("id")]
    public int Id { get; set; }
    
    [XmlElement("FullName")]
    public string Name { get; set; }
    
    [XmlElement("EmailAddress")]
    public string Email { get; set; }
    
    [XmlIgnore]
    public string Password { get; set; }
    
    [XmlElement("DOB")]
    public DateTime BirthDate { get; set; }
    
    [XmlElement("HomeAddress")]
    public Address Address { get; set; }
    
    [XmlArray("ContactNumbers")]
    [XmlArrayItem("Phone")]
    public List<string> PhoneNumbers { get; set; }
    
    [XmlElement(Order = 1)]
    public string FirstElement { get; set; }
    
    [XmlElement(Order = 2)]
    public string SecondElement { get; set; }
}

// Customizing XML serialization
public void CustomXmlSerialization()
{
    var person = new PersonWithXmlAttributes
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1),
        Address = new Address
        {
            Street = "123 Main St",
            City = "Anytown",
            ZipCode = "12345"
        },
        PhoneNumbers = new List<string> { "555-1234", "555-5678" },
        FirstElement = "First",
        SecondElement = "Second"
    };
    
    XmlSerializer serializer = new XmlSerializer(typeof(PersonWithXmlAttributes));
    
    // Set up XML writer settings
    XmlWriterSettings settings = new XmlWriterSettings
    {
        Indent = true,
        IndentChars = "    ",
        OmitXmlDeclaration = false,
        Encoding = Encoding.UTF8
    };
    
    // Serialize with custom settings
    using (StringWriter stringWriter = new StringWriter())
    using (XmlWriter xmlWriter = XmlWriter.Create(stringWriter, settings))
    {
        // Add XML namespaces
        XmlSerializerNamespaces namespaces = new XmlSerializerNamespaces();
        namespaces.Add("", "");  // Remove default namespace
        namespaces.Add("custom", "http://example.com/custom");
        
        serializer.Serialize(xmlWriter, person, namespaces);
        string xml = stringWriter.ToString();
        Console.WriteLine(xml);
    }
}

// Handling complex XML serialization
public void ComplexXmlSerialization()
{
    // Serializing a collection
    var people = new List<Person>
    {
        new Person { Id = 1, Name = "John Doe" },
        new Person { Id = 2, Name = "Jane Doe" }
    };
    
    XmlSerializer collectionSerializer = new XmlSerializer(typeof(List<Person>));
    
    using (StringWriter writer = new StringWriter())
    {
        collectionSerializer.Serialize(writer, people);
        string xml = writer.ToString();
        Console.WriteLine(xml);
    }
    
    // Serializing derived types
    XmlSerializer derivedSerializer = new XmlSerializer(
        typeof(Person),
        new Type[] { typeof(Employee), typeof(Customer) }
    );
    
    var employee = new Employee { Id = 1, Name = "John Doe", EmployeeId = "E12345" };
    
    using (StringWriter writer = new StringWriter())
    {
        derivedSerializer.Serialize(writer, employee);
        string xml = writer.ToString();
        Console.WriteLine(xml);
    }
}

// Derived classes for XML serialization
[XmlInclude(typeof(Employee))]
[XmlInclude(typeof(Customer))]
public class Person
{
    public int Id { get; set; }
    public string Name { get; set; }
    // Other properties...
}

public class Employee : Person
{
    public string EmployeeId { get; set; }
    public string Department { get; set; }
}

public class Customer : Person
{
    public string CustomerId { get; set; }
    public decimal CreditLimit { get; set; }
}
```

### System.Xml.Linq (LINQ to XML)

```csharp
// Creating XML with LINQ to XML
public void CreateXmlWithLinq()
{
    // Create an XML document
    XDocument document = new XDocument(
        new XDeclaration("1.0", "UTF-8", "yes"),
        new XComment("Person information"),
        new XElement("Person",
            new XAttribute("id", 1),
            new XElement("Name", "John Doe"),
            new XElement("Email", "john.doe@example.com"),
            new XElement("BirthDate", new DateTime(1980, 1, 1).ToString("yyyy-MM-dd")),
            new XElement("Address",
                new XElement("Street", "123 Main St"),
                new XElement("City", "Anytown"),
                new XElement("ZipCode", "12345")
            ),
            new XElement("PhoneNumbers",
                new XElement("Phone", "555-1234"),
                new XElement("Phone", "555-5678")
            )
        )
    );
    
    // Save to string
    string xml = document.ToString();
    Console.WriteLine(xml);
    
    // Save to file
    document.Save("person_linq.xml");
}

// Querying XML with LINQ to XML
public void QueryXmlWithLinq()
{
    // Load XML from file
    XDocument document = XDocument.Load("person_linq.xml");
    
    // Get the root element
    XElement person = document.Root;
    
    // Get element values
    string name = person.Element("Name").Value;
    string email = person.Element("Email").Value;
    
    Console.WriteLine($"Name: {name}, Email: {email}");
    
    // Get attribute value
    int id = (int)person.Attribute("id");
    Console.WriteLine($"ID: {id}");
    
    // Get nested element value
    string street = person.Element("Address").Element("Street").Value;
    Console.WriteLine($"Street: {street}");
    
    // Query with LINQ
    var phoneNumbers = from phone in person.Element("PhoneNumbers").Elements("Phone")
                      select phone.Value;
    
    Console.WriteLine("Phone numbers:");
    foreach (string phone in phoneNumbers)
    {
        Console.WriteLine($"  {phone}");
    }
    
    // Modify elements
    person.Element("Name").Value = "Jane Doe";
    
    // Add new elements
    person.Add(new XElement("Status", "Active"));
    
    // Remove elements
    person.Element("PhoneNumbers").Remove();
    
    // Save changes
    document.Save("person_modified.xml");
}

// Transforming XML with LINQ
public void TransformXmlWithLinq()
{
    XDocument document = XDocument.Load("person_linq.xml");
    
    // Transform to a new XML structure
    XDocument transformed = new XDocument(
        new XElement("Contact",
            new XElement("FullName", (string)document.Root.Element("Name")),
            new XElement("ContactInfo",
                new XElement("EmailAddress", (string)document.Root.Element("Email")),
                new XElement("PhoneNumbers",
                    from phone in document.Root.Element("PhoneNumbers").Elements("Phone")
                    select new XElement("Number", phone.Value)
                )
            ),
            new XElement("Location",
                new XElement("Address", (string)document.Root.Element("Address").Element("Street")),
                new XElement("City", (string)document.Root.Element("Address").Element("City")),
                new XElement("PostalCode", (string)document.Root.Element("Address").Element("ZipCode"))
            )
        )
    );
    
    Console.WriteLine(transformed.ToString());
}
```

## Binary Serialization

### BinaryFormatter (Legacy)

```csharp
// Note: BinaryFormatter is obsolete and not recommended for new code due to security issues
// Basic binary serialization
public void BasicBinarySerialization()
{
    // Create a serializable object
    [Serializable]
    public class SerializablePerson
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        
        [NonSerialized]
        private string _temporaryData;
        
        public SerializablePerson() { }
        
        public SerializablePerson(int id, string name, DateTime birthDate)
        {
            Id = id;
            Name = name;
            BirthDate = birthDate;
        }
    }
    
    var person = new SerializablePerson(1, "John Doe", new DateTime(1980, 1, 1));
    
    // Serialize to file
    using (FileStream fs = new FileStream("person.bin", FileMode.Create))
    {
        BinaryFormatter formatter = new BinaryFormatter();
        formatter.Serialize(fs, person);
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("person.bin", FileMode.Open))
    {
        BinaryFormatter formatter = new BinaryFormatter();
        SerializablePerson deserializedPerson = (SerializablePerson)formatter.Deserialize(fs);
        
        Console.WriteLine($"Deserialized: {deserializedPerson.Name}, Born: {deserializedPerson.BirthDate}");
    }
}

// Custom serialization with ISerializable
[Serializable]
public class CustomSerializablePerson : ISerializable
{
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime BirthDate { get; set; }
    
    // Standard constructor
    public CustomSerializablePerson(int id, string name, DateTime birthDate)
    {
        Id = id;
        Name = name;
        BirthDate = birthDate;
    }
    
    // Deserialization constructor
    protected CustomSerializablePerson(SerializationInfo info, StreamingContext context)
    {
        Id = info.GetInt32("PersonId");
        Name = info.GetString("FullName");
        BirthDate = info.GetDateTime("DOB");
    }
    
    // Serialization method
    public void GetObjectData(SerializationInfo info, StreamingContext context)
    {
        info.AddValue("PersonId", Id);
        info.AddValue("FullName", Name);
        info.AddValue("DOB", BirthDate);
    }
}
```

### Custom Binary Serialization

```csharp
// Custom binary serialization with BinaryReader/BinaryWriter
public void CustomBinarySerialization()
{
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1)
    };
    
    // Serialize to file
    using (FileStream fs = new FileStream("person_custom.bin", FileMode.Create))
    using (BinaryWriter writer = new BinaryWriter(fs))
    {
        // Write data in a specific order
        writer.Write(person.Id);
        writer.Write(person.Name);
        writer.Write(person.Email ?? string.Empty);
        writer.Write(person.BirthDate.Ticks);
        
        // Write a collection
        writer.Write(person.PhoneNumbers?.Count ?? 0);
        if (person.PhoneNumbers != null)
        {
            foreach (string phone in person.PhoneNumbers)
            {
                writer.Write(phone);
            }
        }
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("person_custom.bin", FileMode.Open))
    using (BinaryReader reader = new BinaryReader(fs))
    {
        Person deserializedPerson = new Person
        {
            Id = reader.ReadInt32(),
            Name = reader.ReadString(),
            Email = reader.ReadString(),
            BirthDate = new DateTime(reader.ReadInt64())
        };
        
        int phoneCount = reader.ReadInt32();
        if (phoneCount > 0)
        {
            deserializedPerson.PhoneNumbers = new List<string>();
            for (int i = 0; i < phoneCount; i++)
            {
                deserializedPerson.PhoneNumbers.Add(reader.ReadString());
            }
        }
        
        Console.WriteLine($"Deserialized: {deserializedPerson.Name}, Born: {deserializedPerson.BirthDate}");
    }
}
```

## Data Contract Serialization

### DataContractSerializer

```csharp
// Basic DataContractSerializer usage
public void BasicDataContractSerialization()
{
    // Define a data contract
    [DataContract(Name = "Person", Namespace = "http://example.com/person")]
    public class PersonWithDataContract
    {
        [DataMember(Name = "id", Order = 1)]
        public int Id { get; set; }
        
        [DataMember(Name = "name", Order = 2)]
        public string Name { get; set; }
        
        [DataMember(Name = "email", Order = 3, EmitDefaultValue = false)]
        public string Email { get; set; }
        
        [DataMember(Name = "birthDate", Order = 4)]
        public DateTime BirthDate { get; set; }
        
        [DataMember(Name = "address", Order = 5)]
        public AddressWithDataContract Address { get; set; }
        
        [DataMember(Name = "phoneNumbers", Order = 6)]
        public List<string> PhoneNumbers { get; set; }
        
        // This property won't be serialized
        public string Password { get; set; }
    }
    
    [DataContract(Name = "Address")]
    public class AddressWithDataContract
    {
        [DataMember(Name = "street")]
        public string Street { get; set; }
        
        [DataMember(Name = "city")]
        public string City { get; set; }
        
        [DataMember(Name = "zipCode")]
        public string ZipCode { get; set; }
    }
    
    var person = new PersonWithDataContract
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1),
        Address = new AddressWithDataContract
        {
            Street = "123 Main St",
            City = "Anytown",
            ZipCode = "12345"
        },
        PhoneNumbers = new List<string> { "555-1234", "555-5678" }
    };
    
    // Create serializer
    DataContractSerializer serializer = new DataContractSerializer(typeof(PersonWithDataContract));
    
    // Serialize to file
    using (FileStream fs = new FileStream("person_datacontract.xml", FileMode.Create))
    {
        serializer.WriteObject(fs, person);
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("person_datacontract.xml", FileMode.Open))
    {
        PersonWithDataContract deserializedPerson = 
            (PersonWithDataContract)serializer.ReadObject(fs);
        
        Console.WriteLine($"Deserialized: {deserializedPerson.Name}, Email: {deserializedPerson.Email}");
    }
}

// Handling known types
public void DataContractWithKnownTypes()
{
    [DataContract]
    [KnownType(typeof(EmployeeWithDataContract))]
    [KnownType(typeof(CustomerWithDataContract))]
    public class PersonWithDataContract
    {
        [DataMember]
        public int Id { get; set; }
        
        [DataMember]
        public string Name { get; set; }
    }
    
    [DataContract]
    public class EmployeeWithDataContract : PersonWithDataContract
    {
        [DataMember]
        public string EmployeeId { get; set; }
        
        [DataMember]
        public string Department { get; set; }
    }
    
    [DataContract]
    public class CustomerWithDataContract : PersonWithDataContract
    {
        [DataMember]
        public string CustomerId { get; set; }
        
        [DataMember]
        public decimal CreditLimit { get; set; }
    }
    
    var employee = new EmployeeWithDataContract
    {
        Id = 1,
        Name = "John Doe",
        EmployeeId = "E12345",
        Department = "IT"
    };
    
    // Create serializer with known types
    DataContractSerializer serializer = new DataContractSerializer(
        typeof(PersonWithDataContract),
        new Type[] { typeof(EmployeeWithDataContract), typeof(CustomerWithDataContract) }
    );
    
    // Serialize to file
    using (FileStream fs = new FileStream("employee_datacontract.xml", FileMode.Create))
    {
        serializer.WriteObject(fs, employee);
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("employee_datacontract.xml", FileMode.Open))
    {
        PersonWithDataContract deserializedPerson = 
            (PersonWithDataContract)serializer.ReadObject(fs);
        
        if (deserializedPerson is EmployeeWithDataContract emp)
        {
            Console.WriteLine($"Employee: {emp.Name}, ID: {emp.EmployeeId}, Dept: {emp.Department}");
        }
    }
}
```

### DataContractJsonSerializer

```csharp
// DataContractJsonSerializer usage
public void DataContractJsonSerialization()
{
    var person = new PersonWithDataContract
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1)
    };
    
    // Create serializer
    DataContractJsonSerializer serializer = new DataContractJsonSerializer(typeof(PersonWithDataContract));
    
    // Serialize to memory stream
    using (MemoryStream ms = new MemoryStream())
    {
        serializer.WriteObject(ms, person);
        ms.Position = 0;
        
        // Convert to string
        using (StreamReader reader = new StreamReader(ms))
        {
            string json = reader.ReadToEnd();
            Console.WriteLine(json);
        }
    }
    
    // Serialize to file
    using (FileStream fs = new FileStream("person_datacontract.json", FileMode.Create))
    {
        serializer.WriteObject(fs, person);
    }
    
    // Deserialize from file
    using (FileStream fs = new FileStream("person_datacontract.json", FileMode.Open))
    {
        PersonWithDataContract deserializedPerson = 
            (PersonWithDataContract)serializer.ReadObject(fs);
        
        Console.WriteLine($"Deserialized: {deserializedPerson.Name}, Email: {deserializedPerson.Email}");
    }
}
```

## Protocol Buffers (protobuf)

### Using Google.Protobuf

```csharp
// Define a .proto file (person.proto)
/*
syntax = "proto3";

package tutorial;

message Person {
  int32 id = 1;
  string name = 2;
  string email = 3;
  
  enum PhoneType {
    MOBILE = 0;
    HOME = 1;
    WORK = 2;
  }
  
  message PhoneNumber {
    string number = 1;
    PhoneType type = 2;
  }
  
  repeated PhoneNumber phones = 4;
  
  message Address {
    string street = 1;
    string city = 2;
    string zip_code = 3;
  }
  
  Address address = 5;
}
*/

// Using the generated code
public void ProtobufSerialization()
{
    // Create a person
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com"
    };
    
    // Add phone numbers
    person.Phones.Add(new Person.Types.PhoneNumber
    {
        Number = "555-1234",
        Type = Person.Types.PhoneType.Home
    });
    
    person.Phones.Add(new Person.Types.PhoneNumber
    {
        Number = "555-5678",
        Type = Person.Types.PhoneType.Mobile
    });
    
    // Add address
    person.Address = new Person.Types.Address
    {
        Street = "123 Main St",
        City = "Anytown",
        ZipCode = "12345"
    };
    
    // Serialize to file
    using (FileStream output = File.Create("person.pb"))
    {
        person.WriteTo(output);
    }
    
    // Deserialize from file
    Person deserializedPerson;
    using (FileStream input = File.OpenRead("person.pb"))
    {
        deserializedPerson = Person.Parser.ParseFrom(input);
    }
    
    Console.WriteLine($"Deserialized: {deserializedPerson.Name}, Email: {deserializedPerson.Email}");
    Console.WriteLine($"Phone count: {deserializedPerson.Phones.Count}");
    Console.WriteLine($"Address: {deserializedPerson.Address.Street}, {deserializedPerson.Address.City}");
}
```

## Best Practices

### Choosing the Right Serialization Format

```csharp
// Serialization format comparison
public void SerializationComparison()
{
    /*
    Format Selection Guidelines:
    
    JSON:
    - Use for web APIs, configuration files, and cross-platform data exchange
    - Human-readable and widely supported
    - System.Text.Json for modern .NET applications
    - Newtonsoft.Json for more features and backward compatibility
    
    XML:
    - Use for document-oriented data, configuration files, and SOAP services
    - More verbose than JSON but supports namespaces and schemas
    - XmlSerializer for simple cases
    - LINQ to XML for more complex XML manipulation
    
    Binary:
    - Use for internal storage, caching, and when size and performance matter
    - Not human-readable but more compact and faster
    - Avoid BinaryFormatter due to security concerns
    - Consider custom binary serialization or Protocol Buffers
    
    Protocol Buffers:
    - Use for high-performance, cross-platform scenarios
    - Very compact binary format with schema evolution support
    - Requires code generation from .proto files
    - Good for microservices and gRPC
    
    DataContractSerializer:
    - Use for WCF services and when you need both XML and JSON formats
    - More control over serialization than XmlSerializer
    - Supports versioning and polymorphism
    */
    
    // Performance comparison example
    var person = new Person
    {
        Id = 1,
        Name = "John Doe",
        Email = "john.doe@example.com",
        BirthDate = new DateTime(1980, 1, 1),
        Address = new Address
        {
            Street = "123 Main St",
            City = "Anytown",
            ZipCode = "12345"
        },
        PhoneNumbers = new List<string> { "555-1234", "555-5678" }
    };
    
    // Measure JSON serialization
    Stopwatch jsonStopwatch = Stopwatch.StartNew();
    string json = JsonSerializer.Serialize(person);
    jsonStopwatch.Stop();
    
    // Measure XML serialization
    Stopwatch xmlStopwatch = Stopwatch.StartNew();
    XmlSerializer xmlSerializer = new XmlSerializer(typeof(Person));
    string xml;
    using (StringWriter writer = new StringWriter())
    {
        xmlSerializer.Serialize(writer, person);
        xml = writer.ToString();
    }
    xmlStopwatch.Stop();
    
    // Compare sizes
    Console.WriteLine($"JSON size: {Encoding.UTF8.GetByteCount(json)} bytes");
    Console.WriteLine($"XML size: {Encoding.UTF8.GetByteCount(xml)} bytes");
    
    // Compare times
    Console.WriteLine($"JSON time: {jsonStopwatch.ElapsedMilliseconds} ms");
    Console.WriteLine($"XML time: {xmlStopwatch.ElapsedMilliseconds} ms");
}
```

### Security Considerations

```csharp
// Security best practices
public void SerializationSecurity()
{
    // 1. Avoid BinaryFormatter
    // BinaryFormatter can deserialize arbitrary types and execute code
    // Use safer alternatives like System.Text.Json or custom binary serialization
    
    // 2. Validate input before deserialization
    public void SafeJsonDeserialization(string json)
    {
        // Validate that the JSON is well-formed
        try
        {
            using (JsonDocument doc = JsonDocument.Parse(json))
            {
                // Additional validation if needed
            }
        }
        catch (JsonException)
        {
            throw new ArgumentException("Invalid JSON format");
        }
        
        // Use a safe deserializer
        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true,
            MaxDepth = 10  // Prevent stack overflow from deeply nested objects
        };
        
        Person person = JsonSerializer.Deserialize<Person>(json, options);
        
        // Validate the deserialized object
        if (string.IsNullOrEmpty(person.Name))
        {
            throw new ArgumentException("Name is required");
        }
    }
    
    // 3. Use type constraints with generics
    public T Deserialize<T>(string json) where T : class, new()
    {
        return JsonSerializer.Deserialize<T>(json);
    }
    
    // 4. Implement ISerializable carefully
    [Serializable]
    public class SecureSerializable : ISerializable
    {
        private string _sensitiveData;
        
        public SecureSerializable(string sensitiveData)
        {
            _sensitiveData = sensitiveData;
        }
        
        protected SecureSerializable(SerializationInfo info, StreamingContext context)
        {
            // Validate data during deserialization
            string data = info.GetString("data");
            if (string.IsNullOrEmpty(data))
            {
                throw new SerializationException("Invalid data");
            }
            
            _sensitiveData = data;
        }
        
        public void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            // Only serialize what's necessary
            info.AddValue("data", _sensitiveData);
        }
    }
}
```

### Versioning and Compatibility

```csharp
// Handling versioning and compatibility
public void SerializationVersioning()
{
    // 1. Adding new properties (backward compatibility)
    [DataContract]
    public class PersonV1
    {
        [DataMember(Order = 1)]
        public int Id { get; set; }
        
        [DataMember(Order = 2)]
        public string Name { get; set; }
    }
    
    [DataContract]
    public class PersonV2
    {
        [DataMember(Order = 1)]
        public int Id { get; set; }
        
        [DataMember(Order = 2)]
        public string Name { get; set; }
        
        [DataMember(Order = 3, EmitDefaultValue = false)]
        public string Email { get; set; }  // New property
    }
    
    // 2. Renaming properties with JsonPropertyName
    [DataContract]
    public class PersonV3
    {
        [DataMember(Order = 1)]
        public int Id { get; set; }
        
        [DataMember(Order = 2)]
        [JsonPropertyName("name")]  // Keep the same JSON property name
        public string FullName { get; set; }  // Renamed from Name
        
        [DataMember(Order = 3, EmitDefaultValue = false)]
        public string Email { get; set; }
    }
    
    // 3. Using OnDeserializing and OnDeserialized callbacks
    [DataContract]
    public class VersionedPerson
    {
        [DataMember]
        public int Id { get; set; }
        
        [DataMember]
        public string Name { get; set; }
        
        [DataMember(EmitDefaultValue = false)]
        public string Email { get; set; }
        
        [DataMember]
        public int Version { get; set; } = 2;  // Current version
        
        private bool _isOldVersion;
        
        [OnDeserializing]
        private void OnDeserializing(StreamingContext context)
        {
            // Initialize defaults
            _isOldVersion = true;
            Email = null;
        }
        
        [OnDeserialized]
        private void OnDeserialized(StreamingContext context)
        {
            if (_isOldVersion && Version < 2)
            {
                // Handle migration from old version
                if (string.IsNullOrEmpty(Email))
                {
                    Email = $"{Name.ToLower().Replace(" ", ".")}@example.com";
                }
            }
        }
    }
    
    // 4. Using optional fields in Protocol Buffers
    // In .proto file:
    /*
    message Person {
      int32 id = 1;
      string name = 2;
      string email = 3;  // Optional in v1, required in v2
      
      // New in v2
      optional string phone = 4;
    }
    */
}
```

### Performance Optimization

```csharp
// Performance optimization techniques
public void SerializationPerformance()
{
    // 1. Reuse serializer instances
    public class JsonSerializerService
    {
        private static readonly JsonSerializerOptions _options = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };
        
        public string Serialize<T>(T obj)
        {
            return JsonSerializer.Serialize(obj, _options);
        }
        
        public T Deserialize<T>(string json)
        {
            return JsonSerializer.Deserialize<T>(json, _options);
        }
    }
    
    // 2. Use source generation for System.Text.Json
    [JsonSourceGenerationOptions(
        PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase,
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonSerializable(typeof(Person))]
    internal partial class PersonContext : JsonSerializerContext
    {
    }
    
    // Usage with source generation
    var person = new Person { Name = "John Doe" };
    string json = JsonSerializer.Serialize(person, PersonContext.Default.Person);
    Person deserializedPerson = JsonSerializer.Deserialize(json, PersonContext.Default.Person);
    
    // 3. Use streams instead of strings for large objects
    public void SerializeToStream<T>(T obj, Stream stream)
    {
        JsonSerializer.Serialize(stream, obj);
    }
    
    public T DeserializeFromStream<T>(Stream stream)
    {
        return JsonSerializer.Deserialize<T>(stream);
    }
    
    // 4. Use buffer pooling for large serialization operations
    public void SerializeWithBufferPooling<T>(T obj, Stream stream)
    {
        using (var bufferWriter = new ArrayPoolBufferWriter<byte>())
        {
            using (var writer = new Utf8JsonWriter(bufferWriter))
            {
                JsonSerializer.Serialize(writer, obj);
            }
            
            bufferWriter.WrittenMemory.Span.CopyTo(stream);
        }
    }
    
    // 5. Consider using Protocol Buffers for high-performance scenarios
    // Protocol Buffers are generally faster and produce smaller output
    // than JSON or XML serialization
}

// Custom buffer writer using array pooling
public class ArrayPoolBufferWriter<T> : IBufferWriter<T>, IDisposable
{
    private T[] _rentedBuffer;
    private int _written;
    
    public ArrayPoolBufferWriter(int initialCapacity = 1024)
    {
        _rentedBuffer = ArrayPool<T>.Shared.Rent(initialCapacity);
        _written = 0;
    }
    
    public Memory<T> WrittenMemory => _rentedBuffer.AsMemory(0, _written);
    
    public void Advance(int count)
    {
        _written += count;
    }
    
    public Memory<T> GetMemory(int sizeHint = 0)
    {
        EnsureCapacity(sizeHint);
        return _rentedBuffer.AsMemory(_written);
    }
    
    public Span<T> GetSpan(int sizeHint = 0)
    {
        EnsureCapacity(sizeHint);
        return _rentedBuffer.AsSpan(_written);
    }
    
    private void EnsureCapacity(int sizeHint)
    {
        if (sizeHint == 0)
            sizeHint = 1;
            
        if (_written + sizeHint > _rentedBuffer.Length)
        {
            int newSize = Math.Max(_rentedBuffer.Length * 2, _written + sizeHint);
            T[] newBuffer = ArrayPool<T>.Shared.Rent(newSize);
            
            Array.Copy(_rentedBuffer, newBuffer, _written);
            
            T[] toReturn = _rentedBuffer;
            _rentedBuffer = newBuffer;
            
            ArrayPool<T>.Shared.Return(toReturn);
        }
    }
    
    public void Dispose()
    {
        if (_rentedBuffer != null)
        {
            ArrayPool<T>.Shared.Return(_rentedBuffer);
            _rentedBuffer = null;
        }
    }
}
```

## Resources

- [System.Text.Json Overview (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-overview)
- [JSON Serialization in .NET (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/json-serialization)
- [XML Serialization in .NET (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/standard/serialization/xml-serialization)
- [Data Contract Serialization (Microsoft Docs)](https://learn.microsoft.com/en-us/dotnet/framework/wcf/feature-details/data-contract-serialization)
- [Protocol Buffers (Google Developers)](https://developers.google.com/protocol-buffers)
