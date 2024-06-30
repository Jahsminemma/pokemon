# Pokémon Backend with NestJS

This repository contains a NestJS backend application that interacts with the PokeAPI to serve Pokemon data. The application includes endpoints to display a paginated view of Pokemon and to fetch detailed information about a specific Pokemon. The application is containerized using Docker.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
    - [Without Docker](#without-docker)
    - [With Docker](#with-docker)
- [API Endpoints](#api-endpoints)
  - [Get All Pokemon](#get-all-pokémon)
  - [Get Pokemon by id](#get-pokémon-by-name)


## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- NestJS CLI (v7 or higher)
- Docker

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jahsminemma/pokemon.git
   cd pokemon-api

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test
```
2. **Access the application:**

 *Open your browser and navigate to http://localhost:3000.*

```bash
GET /pokemon?limit=10&offset=0 - Get a paginated list of Pokémon.
GET /pokemon/:id - Get detailed information about a Pokémon by id.
```
  **With Docker**
    1. **Build the Docker image:**
  ```bash
    docker run -p 3000:3000 pokemon-api
  ```
    2. **Run the Docker container:**
   ```bash
    docker run -p 3000:3000 pokemon-api
  ```

  This application uses Swagger to provide interactive API documentation and testing. Follow the steps below to access and use the Swagger documentation.

  To start the swagger UI

  access this link http://localhost:3000/api/docs#/Pokeman/PokemonController_getPokemonList

**Explore the API:**
The Swagger UI will display all available endpoints with detailed information about each one.
You can interact with the API directly from the Swagger UI by providing necessary parameters and clicking the "Execute" button.
