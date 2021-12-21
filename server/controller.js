
let houseId = 4
const houses = require('./db.json')

module.exports = {

    getHouses: (req, res) => {
        res.status(200).send(houses)
    }, 
    deleteHouse: (req, res) => {
        const targetId = +req.params.id;

        const foundIndex = houses.findIndex(houseObj => {
            return houseObj.id === targetId
        });

        houses.splice(foundIndex, 1)

        res.status(200).send(houses);

    
    },
    createHouse: (req, res) => {
        req.body.id = houseId
        houses.push(req.body)
        houseId += 1
        res.status(200).send(houses)

    },
    updateHouse: (req, res) => {
        const targetId = +req.params.id;
        const type = req.body.type;

       
        
        foundIndex = houses.findIndex(houseObj => {
            return houseObj.id === targetId;
        })
        if(type === 'minus'){
            houses[foundIndex].price -= 10000
        } else if( type === 'plus'){
            houses[foundIndex].price += 10000
        }



        res.status(200).send(houses)
   
    

}}