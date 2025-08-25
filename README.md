# cs465-fullstack
CS-465 Full Stack Development with MEAN 
Architecture 

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). 

The project implements three different approaches to fronted development. The Express HTML and Handlebars templates were used first to generate server-side rendered pages. These pages required full reloads when navigating, but they allowed direct integration with backend routes and controllers. The second approach incorporated JavaScript for client-side interactivity. JavaScript enabled dynamic updates to page elements, form validation, and asynchronous requests, reducing the need for constant page reloads. Finally, the Angular Single-Page Application (SPA) was introduced for the administrative interface. Unlike the server-rendered Express views, the SPA communicates with the backend through RESTful API endpoints. This allows the fronted to update data dynamically in the browser without reloading, and it also supports modular development through reusable Angular components.  

Why did the backend use a NoSQL MongoDB database? 

The backend used a NoSQL MongoDB database to store application data such as trips, customers, and bookings. MongoDB stores information as BSON documents, which map directly to JSON objects. This provided a natural fit for the JSON data exchanged between the backend and frontend. Unlike relational databases, MongoDB does not require a fixed schema, which allowed flexible data structures. Mongoose was used as the object data modeling (ODM) library to define schemas, enforce validation, and simplify database queries.   

Functionality 

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces? 

JSON is a data-interchange format that consists only of structured data in key-value pairs. Unlike JavaScript, it does not include methods, logic, or execution, only data representation. In the project, JSON was the standard format for data transfer between the backend and frontend. For example, the Express RESTful API returned JSON responses from MongoDB, and the Angular SPA consumed those responses to render trip details. Similarly, when creating or updating data, the frontend sent JSON payloads to the API, which were then stored in the database.   

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components. 

While building my travel booking web application, I refactored the Angular architecture to centralize API interactions by creating a service layer and a JWT interceptor. This ensured that all requests automatically attached the proper authorization token, eliminating errors caused by missing or inconsistent headers in individual API calls. I also developed reusable UI components, including navigation bars, trip cards, and login forms, which improved consistency, simplified testing, and allowed efficient updates across the application. By handling login state, conditional rendering of buttons, and secure API access, these changes enhanced security, maintainability, and scalability, resulting in a modular and professional codebase.  

Testing 

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application. 

The project implemented standard RESTful API methods: 

GET: Retrieve data from the server (e.g., /api/trips for available trips). 

POST: Submit new data (e.g., /api/trips to create a trip). 

PUT: Update existing data (e.g., api/trips/:id to modify a trip) 

DELETE: Remove data (e.g., /api/trips/:id to delete a trip). 

Each endpoint is a defined URL pattern that maps to a controller function in Express. Testing endpoints required verifying correct responses, error handling, and adherence to the data model. When security was added, JSON Web Tokens (JWT) were used for authentication. API testing included varying that requests without a token were rejected with 401 unauthroized and that requests with a valid token were granted access. This ensured that administrative functionality, such as adding or editing trips, was restricted to authenticated users.  

Reflection 

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field? 

This course provided practical experience in designing and implementing a full stack web application using the MEAN stack (MongoDB, Express, Angular, Node.js). Skills gained include:  

Designing application architecture with MVC routing. 

Building RESTful APIs and integrating them with a NoSQL database. 

Implementing fronted solutions using both server-side rendering and client-side SPA development.  

Applying security features such as authentication and secure endpoints.  

Using GitHub for version control and project collaboration.  

These skills directly align with professional full stack and backend development roles and strengthen my qualifications for software engineering positions.  

 
