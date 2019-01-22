const inquirer = require('inquirer');

module.exports = {
    askQuestions() {



        const questions = [

            {
                name: "Nom",
                type: "input",
                message: "Votre nom",
                validate: (value) => {
                    return value.length > 0 ? true : " vous devez renseignez un nom ";
                }
            },
            {
                name: "Prenom",
                type: "input",
                message: " Votre prenom",
                validate: (value) => {
                    return value.length > 0 ? true : " vous devez renseignez un prenom ";
                }
            }
        ];

        inquirer.prompt(questions).then((responses) => {
            console.log(responses);
        });
    },
};