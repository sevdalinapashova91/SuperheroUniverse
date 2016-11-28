'use strict'
module.exports = function(models){
    let { City } = models;
    return {
        createCity(name){
            let city = new City(name);
            return new Promise((resolve, reject) => {
                city.save((err) => {
                    if(err){
                        return reject(err);
                    }
                    return resolve(city);
                });
            });
        },
        getAllCities(){
             return new Promise((resolve, reject) => {
                City.find((err, cities) => {
                    if(err){
                        return reject(err);
                    }
                    return resolve(cities);
                });
            });
        },

        getCityByName(cityName){
             return new Promise((resolve, reject) => {
                City.findOne({name:cityName},(err, city) => {
                    if(err){
                       return reject(err);
                    }
                    return resolve(city);
                });
            });
        },
        getCityById(cityId){
             return new Promise((resolve, reject) => {
                City.findOne({_id:cityId},(err, city) => {
                    if(err){
                       return reject(err);
                    }
                    return resolve(city);
                });
            });
        }
    }
}