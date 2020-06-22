const Activities = require('../models/Activities');//Importando model User (schema e função)

module.exports = {
    create(req, res){
        const activity = req.body;

        Activities.newActivity(activity).then((createdActivity) => {
            return res.send({createdActivity});
        }).catch((error) => {
            console.log(error);
        });
    },

    read(req, res){
        Activities.getAllActivities().then((allActivities) =>{
            return res.send({allActivities});
        }).catch((error) => {
            console.log(error);
        });
    },

    update(req, res){
        const activityId = req.params.id;
        const activityNewData = req.body;

        Activities.updateActivities(activityId, activityNewData).then(() => {
            return res.send({message: 'Atividade atualizada com sucesso'});
        }).catch((error) => {
            console.log(error);
        });
    },

    delete(req, res){
        const activityId = req.params.id;

        Activities.deleteActivities(activityId).then(() => {
            return res.send({message:`Atividade ${activityId} excluida com sucesso!`});
        }).catch((error) => {
            console.log(error);
        });
    },
  
};