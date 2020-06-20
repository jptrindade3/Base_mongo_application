const mongoose = require('mongoose');

//Vamos construir aqui o nosso primeiro Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String, //Define o tipo do campo como String
        require: true //Campo obrigatório
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

//Transformamos o nosso modelo Schema em uma constante
const User = mongoose.model('User', UserSchema);

module.exports = User;