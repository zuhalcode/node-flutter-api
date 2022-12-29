# Ruesto - API

## Introduction

This repository is an API implementation with ExpressJS which is included authentication and data provider used for Ruesto App as a backend.

### Installation

First, clone this repository and install its dependencies with `yarn install` or `npm install`. Then, rename the `.env.example` file to `.env.local`.

```bash
# clone this repository
git clone https://github.com/zuhalcode/node-flutter-api.git

cd node-flutter-api

# Install dependencies...
npm install
```

Next, set your application's environtment variables which includes these :

```bash

PORT = 4000 # or other available port
DB_CONNECTION = # your mongodb connection string
SECRET_KEY = # random value for jwt token usage

```

After defining the appropriate environment variables, you may serve the Express application using the `run` command:

```bash
# Serve the application...
npm run server
```

API has activated and could be consumed.
