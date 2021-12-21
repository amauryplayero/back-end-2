const express = require("express");
const app = express();

const ctrl = require('./controller')

const cors = require("cors");

app.use(cors())
app.use(express.json()) 

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.createHouse)
app.put(`/api/houses/:id`, ctrl.updateHouse)
app.delete(`/api/houses/:id`, ctrl.deleteHouse)





const SERVER_PORT = 4004;
app.listen(SERVER_PORT, () => console.log(`Server jamming on ${SERVER_PORT}`));

