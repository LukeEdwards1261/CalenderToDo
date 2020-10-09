# CalenderToDo
# Project Title

This Maven project will create to backend of a ToDoCalender database via a java based interface (Spring). The database is seperated into 2 seperate sections: tasks and days: both of which each have their own controller, class and DTO in order to interact with their designated tables. Tasks and days are linked together in a many to one relationship, allowing the update command within orders to have the additional functionality to add and remove tasks from a day.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites


Java
A java IDE such as Eclipse or Spring
this is one half of the structure (backend) in order to opperate the front end you will need a HTML and javascript interface such as visual studio code, as well as Selenium to fully operate the tests.


## Running the tests

All tests can be run in one go with the use of Junit and selenium(via Junit). These tests will run CRUD tests for the october section of the ToDoCalender for the DTO and controller

### Unit Tests 

test the controllers (both unit and intergration) of both days and tasks as well as task service

```
These tests and to test the CRUD functionality of each of the days and tasks to a standard of 80%
```

### Integration Tests 
test the controllers (both unit and intergration) of both days and tasks as well as task service

```
These tests and to test the CRUD functionality of each of the days and tasks to a standard of 80%
```

### And coding style tests

Explain what these tests test and why

```
Not implimented for this project.
```

## Deployment

Maven will build and package this project for you and will simply need to be deployed to your chosen system (ie github)

## Built With

* [Maven](https://maven.apache.org/) - Dependency Management

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **Luke Edwards** - *Following work* [LukeEdwards](https://github.com/LukeEdwards1261)

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

*For help in [Choosing a license](https://choosealicense.com/)*

## Acknowledgments
