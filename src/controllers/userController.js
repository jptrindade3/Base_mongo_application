const User = require('../models/User');
const { create } = require('../models/User');

module.exports = {
    async create(req, res){
        try{
            const user = await User.create(req.body);
    
            return res.send({user});
        }catch (err){
            return res.status(400).send({ error: 'Registration failed'});
        }
    },

    async delete(req, res){

    },

    async list(req, res){

    },
};