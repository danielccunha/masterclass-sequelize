<div align="center">

  <h1>
   <i>masterclass-sequelize</i>
  </h1>

  <p>
  Project developed in Rocketseat's Sequelize masterclass
  </p>

<a href="https://insomnia.rest/run/?label=masterclass-sequelize&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fdanielccunha%2Fmasterclass-sequelize%2Fmaster%2Fdocs%2Finsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

</div>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) for running the project
- [Postgres](https://www.postgresql.org/) which is the database used in this project

**Cloning the Repository**

```
git clone https://github.com/danielccunha/masterclass-sequelize.git
cd masterclass-sequelize
```

### Installing

```sh
# In case you are using yarn
yarn

# In case you are using npm
npm install
```

### Setup

Before running any command, clone `.env.example` and add your Postgres database credentials.

```sh
# Cloning .env file
cp .env.example .env
nano .env

# Create the database
yarn sequelize db:create

# Running migrations
yarn sequelize db:migrate
```

### Running it

Finally, after setting up the project start it using `yarn start` or `npm start`. To test it, use the [Insomnia collection](docs/insomnia.json).

## Built With

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/v5/)
- [Express](https://expressjs.com/pt-br/)
