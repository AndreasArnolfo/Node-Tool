const fs = require ('fs');

module.exports = {
    readFile(filePath) {
        fs.readFile('filePath', 'utf8', (err, data) =>{
            if(err){
            console.log('Une erreur est survenue');    
            console.error(err);
            }else{
                console.error(data);
            }
        });
    },

    readFileSync(filePath){
        const datas = fs.readFileSync(filePath, 'utf8');
        console.log(datas);
    }
};