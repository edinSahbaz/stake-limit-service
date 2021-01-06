# Stake Limit Service API

This project contains the source code of Stake Limit Service API. This was a recruitment task for NSoft.

## Contribute

- [Issue Tracker](https://github.com/edinSahbaz/stake-limit-service/issues)
- [Source Code](https://github.com/edinSahbaz/stake-limit-service)

### Prerequisites

- [Node.js](https://nodejs.org/en/), JavaScript runtime.
- [MySql](), Database Service.

### Running locally

Create a fork, or clone this repository if you have write access:

```shell
git clone https://github.com/edinSahbaz/stake-limit-service.git
```

Then visit the downloaded repository and install dependencies:

```shell
npm install
```

Set up DB with scripts included in ./db folder and modify .env file with your variables. 

After setting up .env file, DB and installing dependecies, start the API: 

```shell
npm start
```

### Unit testing

To run unit testing, please navigate to root folder and run following command:

```shell
npm test
```

## API Documentation

### Configuration routes

API works on configuration that id set by default on creation of DB.

#### To get configuration
##### Request

    GET /api/v1/stake-limit-service/configuration

##### Response
    
    HTTP 200 OK
    
    {
      timeDuration: 300,
      stakeLimit: 1000,
      hotPercentage: 75,
      restrictionExpires: 300
    }
    
#### To update configuration

##### Request

    PUT /api/v1/stake-limit-service/configuration
    
    body:
    { 
      timeDuration: 300,
      stakeLimit: 1000,
      hotPercentage: 75,
      restrictionExpires: 300
    }
    
##### Response
    
    HTTP 200 OK
    
### Stake service routes
    
#### To send ticket for processing

##### Request

    POST /api/v1/stake-limit-service/
    
    body:
    { 
      stake: 100,
    }
    
##### Response
    
    {
      status: "{status}"
    }
    
