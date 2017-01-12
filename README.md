# GreatBay
This app integrates Node with SQL. It allows users to create and bid on assorted items using a CLI. 

## Technologies used
- Node.js
- MySQL

## Getting Started
In order to use the CLI app, type in the following

```
node app.js
```
This displays two options using the inquirer package:
```
POST AN ITEM
BID ON AN ITEM
```
If the user selects "POST AN ITEM" they are prompted for the items name and starting bid, and then that information is added to the database.

If the user selects "BID ON AN ITEM" they are shown a list of all available items and then are prompted to select what they would like to bid on. The console responds letting them know if their bid was high enough or not.

### Prerequisites

What to install and how for local development and testing purposes

```
- node.js: visit node.js and download...
- inquirer npm: npm install inquirer (included in package.json file)
- mysql npm: npm install mysql (included in package.json file)
```

## Default test (included in package.json file)

The default test is
```
node app.js
```

## Built With

* SublimeText

## Author

* **Aisha Ahmad** - [Aisha Ahmad](https://github.com/aishaprograms)

## Inspired By
Freecodecamp challenge
#100DaysofCode
