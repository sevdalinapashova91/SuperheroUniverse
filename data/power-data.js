'use strict'
module.exports = function(models){
    let { Power } = models;
    return {
        createPower(name){
            let power = new Power(name);
            return new Promise((resolve, reject) => {
                power.save((err) => {
                    if(err){
                        return reject(err);
                    }
                    return resolve(power);
                });
            });
        },
        getAllPowers(){
             return new Promise((resolve, reject) => {
                Power.find((err, powers) => {
                    if(err){
                        return reject(err);
                    }
                    return resolve(powers);
                });
            });
        },

        getPowerByName(powerName){
             return new Promise((resolve, reject) => {
                Power.findOne({name: powerName},(err, power) => {
                    if(err){
                       return reject(err);
                    }
                    return resolve(power);
                });
            });
        },
        getPowerById(id){
             return new Promise((resolve, reject) => {
                Power.findOne({_id: id},(err, power) => {
                    if(err){
                       return reject(err);
                    }
                    return resolve(power);
                });
            });
        }
}