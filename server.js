//  DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const session = require('express-session');


const armorController = require('./controllers/armorController')
const backgroundsController = require('./controllers/backgroundsController')
const classesController = require('./controllers/classesController')
const featsController = require('./controllers/featsController')
const itemsController = require('./controllers/itemsController')
const monstersController = require('./controllers/monstersController')
const racesController = require('./controllers/racesController')
const spellsController = require('./controllers/spellsController')
const weaponsController = require('./controllers/weaponsController')

app.use(express.json());
app.use(cors());

app.use('/armor', armorController)
app.use('/backgrounds', backgroundsController)
app.use('/classes', classesController)
app.use('/feats', featsController)
app.use('/items', itemsController)
app.use('/monsters', monstersController)
app.use('/races', racesController)
app.use('/spells', spellsController)
app.use('/weapons', weaponsController)



let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

app.listen(PORT, ()=>{
    console.log('Listening')
})

mongoose.connect('mongodb+srv://klyon:JqIO7Olb8If4S0kg@homebrew.hethkpl.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('Linked')
})


