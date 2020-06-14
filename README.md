# Simple Deno Web Api Server

## Installation
To run this application, you need to have Deno installed. Optionally, you can install Denon, which will allow you to see any application changes in your browser without having to restart the application. To install these dependencies, go to the official Deno documentation pages:
* [Deno](https://deno.land/#installation)
* [Denon](https://deno.land/x/denon)

## Run the App
To get the app running using Deno, run the following command
```bash
deno run --allow-net --allow-read server.ts
```

or

If you have Denon installed, you can run the following
```bash
denon start
```

## Routes
### Website
`http:localhost:3000` - loads the homepage of the website

### API - GET Requests
`http:localhost:3000/characters` - gets all the characters from Rick and Morty API  
`http:localhost:3000/characters/:id` - gets a specific cahracter from Rick and Morty API