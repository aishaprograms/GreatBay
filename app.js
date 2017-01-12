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
                bidItem();
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
            console.log('Please enter a valid input');
            return false;
        }
    }, {
        name: 'price',
        type: 'input',
        message: 'What is the starting bid of the item?',
        validate: function(value) {
            if (!isNaN(value)) {
                return true;
            }
            return 'Please enter a number';
        }
    }];
    inquirer.prompt(info).then(function(answer) {
        connection.query("INSERT INTO items SET ?", {
            name: answer.name,
            price: answer.price,
            highestBid: answer.price
        }, function(err, res) {
            console.log("Your auction was created successfully!");
            bid();
        });
    });
}

function bidItem() {
    connection.query("SELECT * FROM items", function(err, res) {
        //show all items
        console.log(res);
        inquirer.prompt({
            name: "selection",
            type: "list",
            choices: function(value) {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].name);
                }
                return choiceArray;
            },
            message: "Which item do you want to bid on?"
        }).then(function(answer) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].name === answer.selection) {
                    var chosenItem = res[i];
                    inquirer.prompt({
                        name: "bidAmount",
                        type: "input",
                        message: "How much would you like to bid?"
                    }).then(function(answer) {
                        if (chosenItem.highestBid <= parseFloat(answer.bidAmount)) {
                            connection.query("UPDATE items SET ? WHERE ?", [{
                                highestBid: answer.bidAmount
                            }, {
                                id: chosenItem.id
                            }], function(err, res) {
                                console.log("You won the highest bid!");
                                bid();
                            });
                        } else {
                            console.log("Too bad-- you bid too low");
                            bid();
                        }
                    });
                }
            }
        });
    });
};
