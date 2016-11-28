'use strict'
module.exports = function(models){
    let { Planet } = models;
    return {
        createPlanet(name){
            let planet = new Planet(name);
            return new Promise((resolve, reject) => {
                planet.save((err) => {
                    if(err){
                        return reject(err);
                    }
                    return resolve(planet);
                });
            });
        },
        getAllPlanets(){
             return new Promise((resolve, reject) => {
                Planet.find((err, planets) => {
                    if(err){
                        return reject(err);
                    }
                    return resolve(planets);
                });
            });
        },

        getPlanetByName(planetName){
             return new Promise((resolve, reject) => {
                Planet.findOne({name: planetName},(err, planet) => {
                    if(err){
                       return reject(err);
                    }
                    return resolve(planet);
                });
            });
        },
        getPlanetById(planetId){
             return new Promise((resolve, reject) => {
                Planet.findOne({_id: planetId},(err, planet) => {
                    if(err){
                       return reject(err);
                    }
                    return resolve(planet);
                });
            });
        }
}