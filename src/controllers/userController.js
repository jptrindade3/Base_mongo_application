const User = require('../models/User');//Importando model User (schema e função)

module.exports = {
    create(req, res){
        const user = req.body;

        User.newUser(user).then((createdUser) => {
            return res.send({createdUser});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        User.getAllUsers().then((allUsers) =>{
            return res.send({allUsers});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const userId = req.params.id;
        const userNewData = req.body;

        User.updateUser(userId, userNewData).then(() => {
            return res.send({message: 'Usuário atualizado com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const userId = req.params.id;

        User.deleteUser(userId).then(() => {
            return res.send({message:`Usuário ${userId} excluido com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
  
};