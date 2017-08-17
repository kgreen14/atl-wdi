[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

> Answer here

var task1 = {
  name: "do homework",
  startTime: "5:15",
  endTime: "Not Complete",
};

The property "name" is appropriate so someone knows what the task is, "startTime" makes sense as to when the task was started and "endTime" tells you if the task is complete and when it was complete.

var project1 = {
  projectName: "WDI Homework",
  description: "All homework assigned during WDI11",
  setOfTasks: [task1, task2, task3]
};

The "setOfTasks" array stores my tasks to organize them into a group of related tasks and the information of each task is retrievable.

### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

var account = {
  userName = "Kgreen",
  dateOfBirth = "01/04/1985",
  biography = "blah blah blah",
};
Accounts in apps should have a userName, dateOfBirth, and biography because they give you information on who the user is.

var album = {
  var album = {
  name: "Fourth Of July",
  description: "Centennial Park Indepence Day Celebration",
  setOfPics: ["fireworks1.jpg", "fireworks2.jpg", "fireworks3.jpg"]
};
An album normally has a name, and description to give you information on the album and it will contain pictures so "seOfPics" seems appropriate as a property of an album.

var photo = {
  name: "fireworks"
  comment: "merica"
  url: "pics/fireworks1.jpg"
};
Photos taken and stored on a computer or website/app will usually have a name to describe the photo, and allow you to comment below so you can say something about the photo. All pictures/images will have a url so you can locate and link to the picture/image, so that is an appropriate property.


> Answer here

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

var light = {
  brightness: "low",
  location: "Kitchen",
  name: "kitchen led",
};
Brightness tells you the setting of the light. Location tells you where in the house you can find the light. Name tells you what the light is called with some detail about it.

var home {
  temperature: 72,
  allLigtsInHouse: ["kitchen", "living room", "master bedroom", "master bathroom"]
};

The temperture of a house is an important thing to track and display so it is appropriate to have a temperature property in the home object. The allLightsInHouse array is nice to be able to track what lights are in the house and be able to pull information on each light.

> Answer here

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

var product {
  name: "Air Jordan",
  description: "The original Air Jordan shoe",
  price: $399,
};
These are great properties because all items I've bought online have a name so you know what you're buying, a description so you know detailed information about the product, and how much it cost.

var orderItem {
  product: "null"
  quantity: 0,
};
Under orderItem it is a good idea to know how many of a product are being ordered incase someone wants more than 1 of that item. This way the cart knows how to calculate the cost and determine how many are being ordered.

var order {
  orderItems: [],
  orderStatus: "No items in cart."
  orderCompleteDate: "Incomplete"
}
In a cart (order), you can have multiple items being ordered at the same time. It is sensible to know the status of the order, and when it was completed incase of a returned item situation.


> Answer here

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.
1. Disadvantate: Nothing is stored about the locations so the app doesn't know the distance between stops.
2. You can easily add more stops on the exampleLine's list of stops and they have details about them because they are objects.

> Answer here

### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

Example 1 is better suited for a Doctor to easily see all their appointments. Example 2 is better suited for a receptionist to see all appointments without having to dig into each doctor.
> Answer here

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

    player
    game
    que

  > Answer here

b.  How might those entities be represented in JavaScript code?

    Player = {
      username:
      profilePicture:
      rating:
    };
    game = {
      playerX:
      playerO:
      whoWon:
    };
    que = {
      waitList = ["user1", "user2", "user3"]
    };
  > Answer here

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

    A. Tracking a player, the game, and a queue are probably some of the most barebones things you would want to track with any game, otherwise you can't really make a game that is playable by multiple people.
    B. I think most of the games I have played, have always had a username, profile picture, and your rating to pair you up with the right opponenets. This is all pretty common sense.



  > Answer here
