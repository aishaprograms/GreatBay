var inquirer = require('inquirer');
var mysql = require('mysql');
inquirer.prompt({ name: 'choice', message: 'What would you like to do', type: 'list', choices: ['Post an item', 'Bid on an item'] }).then(function(answers) {
    if (answers.choice === 'Post an item') {
        var info = [{
            name: 'name',

        }, {
            name: 'price',
        }, ];
        inquirer.prompt();
    } else {
        console.log('You chose to bid');
    }
});
