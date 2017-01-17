# Coding Exercise

This repository contains the code for a front end coding exercise, written in Javascript, using the React and Redux frameworks.

## Instructions

### Installing

**Note:** [Node](https://nodejs.org/en/) is required to run the app
 
After cloning the repo, run the following command from the top level directory to install the necessary dependencies for the project:

```
$ npm install
```

### Running the server

To start the server run:

```
$ npm start
```

The webpage will then be accessible from `http://localhost:8080`

### Running the tests

To run the test suite a single time run the following command from the top level directory:

```
$ npm run single-test
```

### Running the linter

To run the linter and verify the code meets project standards run the following command:

```
$ npm run lint
```

## Project structure

All main project files can be found under the `src` directory. Each sub folder has the following purpose:

-  `actions`: Contains all Redux actions and action creators
-  `components`: Contains all React components
-  `reducers`: Contains all Redux reducers used to update state
-  `selectors`: Contains all Redux selectors used to retrieve state slices for use in React components
-  `utils`: Contains miscellaneous code used across sections of the app