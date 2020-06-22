const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({//construindo aqui o nosso primeiro Schema
    name: {
        type: String, //Define o tipo do campo como String
        required: true //Campo obrigatório
    },
    email: {
        type: String,
        unique: true, //Só pode existir um no banco
        required: true,
        lowercase: true, //Força para letra minuscula a entrada
    },
    password: {
        type: String,
        required: true,
        select: false, //Quando estivermos fazendo buscas no mongo, esse campo não pode ser visto
    },
    createdAt: {
        type: Date,
        default: Date.now, //Valor padrão preenchido com a data atual
    }
});

const UserData = mongoose.model('User', UserSchema); //Transformamos o nosso modelo Schema em uma constante

class User{//Aqui declaramos as funções do mongo que podem ser utilizadas no schema


    //Create
    static newUser(data){
		return new Promise((resolve, reject) => {
			UserData.create(data).then((result) => {
				resolve(result);
			})
			.catch((error) => {
				reject(error);
			});
		});
    }
    
    //Read
    static getAllUsers(){
        return new Promise((resolve, reject) => {
            UserData.find({}).then((results)=> {
                resolve(results);
            }).catch((error)=> {
             reject(error);
                console.log(error);
             });
        });
    }

    //Update
    static updateUser(id, user) {
        return new Promise((resolve, reject) => {
            UserData.findByIdAndUpdate(id, user).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteUser(id) {
        return new Promise((resolve, reject) => {
            UserData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
       });
    }

    
}

module.exports = User;