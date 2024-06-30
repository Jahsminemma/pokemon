# Pokemon
full stack development experience using Angular and NestJS stack and Pokemon API

## Getting Started 

This project uses Docker Compose to simplify the development and deployment process. 

### Prerequisites

- Docker installed and running on your system (https://www.docker.com/get-started/)
- Docker Compose installed (https://docs.docker.com/compose/install/)
- Node.js and npm (or yarn) installed on your system (https://nodejs.org/en/download/package-manager/current)

### Development Setup

1. **Clone the Repository:**

```bash
   git clone https://github.com/Jahsminemma/pokemon.git
```

2. **Install Dependencies:**

Navigate to the project directory and run:

```bash
docker-compose up
```
3. Access the Application:

The Angular application should be accessible in your web browser at http://localhost:4200.

The Nestjs application should be accessible at http://localhost:3000

To use the swagger UI for testing and documentation access it at http://localhost:3000/api/docs#/Pokeman/PokemonController_getPokemonList
