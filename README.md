## Application Description

I have created an CRUD Contacts application where a user can do operations to maintain a phonebook. I have used localstorage to store the data locally. It stores basic information of memebers in phonebook.
## Version used

Angular CLI: 16.1.3
Node: 16.20.1

## Setup/ Deployment
To run this project, install it locally using npm:

$ npm install
$ ng serve

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Best Practices

  COMMANDS ANGULAR/CLI
- I have used cmds to create the components and services in project. 
  For example: ng g c <component_name> to be used to create a new component.

- FILE NAMING CONVENTIONS
  While creating our files, we pay attention to the file names. Names should be consistent with the same pattern in which we mention the file’s feature first and then the type, (dot / hypiene) separated.
  For example: home.component.ts / contact-us.component.ts
  It also depends on project team How we have decided to make the naming conventions throughout the project as 
  we can replace contact-us.component.ts => contactUs.component.ts.

- CLASS NAME CONVENTIONS
  When we add names to our classes, we use upper camel case style with the added suffix that represents the type of our file.
  For example: export class HomeComponent

- CONSTANTS
  We can create a separate file to specify all the constants used in application. The best is to use the constants variables in components instead of using string.

- FOLDER STRUCTURE
  Our files should reside in the folders named by the feature they represent. This is important to note because we can easily identify which business logic we have implemented in those files inside our respective folders.
  For example: all components are kept under components folder whereas we create the core module and create the directories for the constants, guards and interceptors provided by the core module.
  MODELS/ INTERFACES
- Using interfaces is a perfect way of describing our object literals. The name should start from capital letter
  For example: export interface User 

- CONSTRUCTOR USAGE
  We should use the constructor method to set up Dependency Injection for our services and that is pretty much it. We shouldn’t be doing any work inside it.
  For example: constructor(routerParam: Router) {}

- LAZY LOADING
  The good practice for Angular is to use a separate routing module for the router. Here I am using single file of rouitng but In real we create a separate routing file for each module.
  For example:  home.routing.module.ts
  const appRoutes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'category', loadChildren: "./category/category.module#OwnerModule" },
]

- SHARED MODULE
  If we have components, directives or pipes in our project, which we want to share through the entire project, we
  register them inside the shared module file. Then, we need to register the shared module inside the app module.

- ENVIRONMENT VARIABLE
  We can set up endpoint variables to distinguish the end-points between development and production environment.


## UI Improvements

- We can add spinner/ alert before loading the data.
- only basic css used to show functionlity on UI. It can be customized to look more better.


## TEST WITH JASMINE/ KARMA
   Best is to achieve more than 90% coverage for all the components. I have added more than 90% test cases coverage in this application. Mocking dependencies allows you to test a component in isolation. Positive and negative testing are both important, so we need to be sure to include both in your angular unit tests.