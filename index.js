const library = require('./library');
const {
    helloWorld,
    helloWorld2
} = require('./library');
const chalk = require('chalk');
const figlet = require('figlet');
const readline = require('readline');
const prompt = require("./prompt");
const file = require('./file');
const menu = require('node-menu');
const exec = require('child_process').exec;
const angularCLI = exec('npm install -g angular-cli');



var TestObject = function () {
    var self = this;
    self.fieldA = 'FieldA';
    self.fieldB = 'FieldB';
};

TestObject.prototype.printFieldA = function () {
    console.log(this.fieldA);
};

TestObject.prototype.printFieldB = function (arg) {
    console.log(this.fieldB + arg);
};

var testObject = new TestObject();

menu.addDelimiter('-', 50, 'Main Menu')
    .addItem(chalk.green(
            'Crée une application Angular'),
        function () {
            dir = exec("npm install -g @angular/cli && ng new my-dream-app && cd my-dream-app && ng serve", function(err, stdout, stderr) {
                if (err) {
                  // should have err.code here?  
                }
                console.log(stdout);
              });
              
              dir.on('exit', function (code) {
              });
        })
    .addItem(chalk.blue(
        'Crée une application Ionic'),
    function () {
        // dir = exec("npm install -g @angular/cli && ng new my-dream-app && cd my-dream-app && ng serve", function(err, stdout, stderr) {
        dir = exec("npm install -g ionic cordova && ionic start helloWorld blank && cd helloWorld && ionic serve ", function(err, stdout, stderr) {
            if (err) {
              // should have err.code here?  
            }
            console.log(stdout);
          });
          
          dir.on('exit', function (code) {
          });
    })
    .addItem(
        "coucou",
        testObject.printFieldA,
        testObject)
    .addItem(
        'Print Field B concatenated with arg1',
        testObject.printFieldB,
        testObject,
        [{
            'name': 'arg1',
            'type': 'string'
        }])
    .addItem(
        'Sum',
        function (op1, op2) {
            var sum = op1 + op2;
            console.log('Sum ' + op1 + '+' + op2 + '=' + sum);
        },
        null,
        [{
            'name': 'op1',
            'type': 'numeric'
        }, {
            'name': 'op2',
            'type': 'numeric'
        }])
    .addItem(
        'String and Bool parameters',
        function (str, b) {
            console.log("String is: " + str);
            console.log("Bool is: " + b);
        },
        null,
        [{
            'name': 'str',
            'type': 'string'
        }, {
            'name': 'bool',
            'type': 'bool'
        }])
    .addDelimiter('*', 50)
    // .customHeader(function() {
    //     process.stdout.write("Hello\n");
    // })
    // .disableDefaultHeader()
    // .customPrompt(function() {
    //     process.stdout.write("\nEnter your selection:\n");
    // })
    // .disableDefaultPrompt()
    .start();
//file.readFile();
//library.helloWorld();

//console.log(chalk.green("coucou vert"));
//console.log(chalk.red("coucou vert"));
//console.log(chalk.blue("coucou vert"));
//console.log(chalk.green("coucou vert"));

//prompt.askQuestions();
//console.log(process.argv);