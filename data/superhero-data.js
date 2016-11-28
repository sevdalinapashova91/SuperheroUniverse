/*globals module Promise*/
'use strict'
module.exports = function(model){
    let { Superhero } = model;
    return {
        //change like in fraction
        createSuperhero(name, secretIdentity, city, alignment, story, image, powers, fractions){
            let superhero = new Superhero({
                name, 
                secretIdentity,
                city,
                alignment, 
                story, 
                image, 
                powers, 
                fractions
            });

            return new Promise((resolve, reject) => {
                superhero.save((err)=>{
                    if(err){
                        return reject(err);
                    }
                    return resolve(superhero);
                });
            });
        },

        getAllSuperheroes(){
            return new Promise((resolve, reject) => {
                Superhero.find((err, superheroes) => {
                    if(err){
                        return reject(err);
                    }
                    return resolve(superheroes);
                });
            });
        },

        getAllSuperheroesByPower(power){
            return new Promise((resolve, reject) => {
                Superhero.find({
                    powers:{
                        $in: [power]
                    }
                }, (err, superheroes) => {
                    if(err){
                        return reject(err);
                    }
                    return resolve(superheroes);
                });
            });
        },

        getAllSuperheroesByFraction(fraction){
            return new Promise((resolve, reject) => {
                Superhero.find({
                    fractions:{
                        $in: [fraction]
                    }
                }, (err, superheroes) => {
                    if(err){
                        return reject(err);
                    }
                    return resolve(superheroes);
                });
            });
        },
        getSuperheroById(id){
            return new Promise((resolve, reject) => {
                Superhero.findOne({_id:id},(err, superhero) => {
                    if(err){
                       return reject(err);
                    }
                    return resolve(superhero);
                });
            });
        }, 
        getSuperheroBySecretIdentity(identity){
            return new Promise((resolve, reject)=>{
                Superhero.findOne({ secretIdentity: identity }, (err, superhero) => {
                       if(err){
                          return reject(err);
                       }     

                       return resolve(superhero);
                    });
            });
        }
    }
}