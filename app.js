//Task one //

var itemsArray = [
    {name: "juice", price: "50", quantity: "3"},
    {name: "cookie", price: "30", quantity: "9"},
    {name: "shirt", price: "880", quantity: "1"},
    {name: "pen", price: "100", quantity: "2"}
  ];
  
  var itemsWithTotalPrice = itemsArray.map(function(item) {
    return {
      name: item.name,
      totalPrice: parseInt(item.price) * parseInt(item.quantity)
    };
  });
  
  console.log(itemsWithTotalPrice);
  

  var totalPriceOfAllItems = itemsArray.reduce(function(acc, item) {
    return acc + parseInt(item.price) * parseInt(item.quantity);
  }, 0);
  
  console.log("Total price of all items: " + totalPriceOfAllItems);


//Task Two //

var person = {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
    age: 30,
    gender: "male",
    city: "New York",
    country: "USA"
  };
  
  console.log("Age property exists: " + ("age" in person));
  console.log("Country property exists: " + ("country" in person));
  console.log("FirstName property exists: " + ("firstName" in person));
  console.log("LastName property exists: " + ("lastName" in person));


  // Task Three //


  function Person(name, email, password, age, gender, city, country) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
    this.gender = gender;
    this.city = city;
    this.country = country;
  }
  
  var person1 = new Person("Salar", "salar001@example.com", "password123", 30, "male", "Karachi", "Pakistan");
  var person2 = new Person("Sharjeena", "sharjeena555@example.com", "password234", 25, "female", "Chicago", "U.S");
  var person3 = new Person("Mustafa", "mustafa255@example.com", "password567", 40, "male", "Chicago", "U.S");
  
  console.log(person1);
  console.log(person2);
  console.log(person3);


  //Task Four //


  function PopulationRecord(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
  }
  

  var record1 = new PopulationRecord("Ali", "male", "123 Main St", "Bachelor's Degree", "Software Engineer");
  var record2 = new PopulationRecord("Ayesha", "female", "456 Elm St", "Master's Degree", "Doctor");
  var record3 = new PopulationRecord("Abdullah", "male", "789 Oak St", "High School Diploma", "Teacher");
  
  console.log(record1);
  console.log(record2);
  console.log(record3);
  

  localStorage.setItem("populationRecords", JSON.stringify([record1, record2, record3]));