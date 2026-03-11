# Express Basic Server Practice

This project is a continuation of a previous exercise focused on learning the fundamentals of Node.js.

While the earlier version used the built-in `http` module to manually create a server and implement routing logic, this version adapts the same project using the **Express.js** framework.

The goal of this adaptation is to understand how Express simplifies common server tasks while preserving the core concepts explored in the original project.

Just like the first version, the purpose of this project was not to build a visually polished website. Instead, the focus was on practicing fundamental backend concepts such as:

* **Creating a web server** using Express
* **Defining routes** using `app.get()`
* **Serving static HTML files** with `res.sendFile()`
* **Handling dynamic routes** with route parameters
* **Implementing a custom 404 fallback page**
* **Understanding middleware flow** and the use of `next()`


## Project Idea

To make navigation between pages more interesting during testing, each page displays a memorable quote from the HBO TV show **Game of Thrones (2011–2019)**.

These quotes are used purely as placeholder content while navigating between different routes such as:

* `/`
* `/quote02`
* `/quote03`
* `/quote04`

The purpose is simply to provide visible content while interacting with the server routes.


## Important Note

This project was created purely as a **learning exercise** to explore how a basic web server works with Node.js and Express.

Because of that:

* The visual design and styling were not the focus
* The project was not intended for production
* The project was not deployed online

Instead, it is meant to be cloned and run locally in order to observe how routing and server logic behave in a simple Express application.


## Running the Project

1. **Clone the repository:**
```bash
git clone <repository-url>
```

2. Navigate to the project folder:
```bash
cd <project-folder>
```

3. Install dependencies:
```bash
npm install
```

4. Run the server:
```bash
node app.js
```

5. Open your browser and go to:
```bash
http://localhost:3000
```

From there, you can navigate between the different quote pages and observe how the Express server handles routing and invalid URLs.