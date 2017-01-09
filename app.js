var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "GreatBay"
});

connection.connect(function(err) {
    if (err) throw err;
    bid();
});

function bid() {
    inquirer.prompt({
            name: 'choice',
            message: 'What would you like to do',
            type: 'list',
            choices: ['Post an item', 'Bid on an item']
        })
        .then(function(answers) {
            if (answers.choice === 'Post an item') {
                postItem();
            } else {
                console.log('You chose to bid');
            }
        });
}

function postItem() {
    var info = [{
        name: 'name',
        type: 'input',
        message: 'Which item do you want to post?',
        validate: function(value) {
            if (value !== '' && value !== null && value !== undefined) {
                return true;
            }
            return 'Please enter a valid input';
        }
    }, {
        name: 'price',
        type: 'input',
        message: 'What is the price of the item?',
        validate: function(value) {
            if (!isNaN(value)) {
                return true;
            }
            return 'Please enter a number';
        }
    }];
    inquirer.prompt(info).then(function(answers) {
        console.log(answers.name);
        console.log(answers.price);
    });
}
