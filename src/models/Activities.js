const mongoose = require('mongoose');

const ActivitiesSchema = new mongoose.Schema({//construindo aqui o nosso segundo Schema
    name: {
        type: String, //Define o tipo do campo como String
        require: true //Campo obrigatório
    },
    activity: {
        type: String,
        required: true,
    },
});

const ActivitiesData = mongoose.model('Activities', ActivitiesSchema);

class Activities {//Aqui declaramos as funções do mongo que podem ser utilizadas no schema


    //Create
    static newActivity(data) {
        return new Promise((resolve, reject) => {
            ActivitiesData.create(data).then((result) => {
                resolve(result);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    //Read
    static getAllActivities() {
        return new Promise((resolve, reject) => {
            ActivitiesData.find({}).then((results) => {
                resolve(results);
            }).catch((error) => {
                reject(error);
                console.log(error);
            });
        });
    }

    //Update
    static updateActivities(id, activity) {
        return new Promise((resolve, reject) => {
            ActivitiesData.findByIdAndUpdate(id, activity).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }

    //Delete
    static deleteActivities(id) {
        return new Promise((resolve, reject) => {
            ActivitiesData.findByIdAndDelete(id).then(() => {
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }


}
module.exports = Activities;