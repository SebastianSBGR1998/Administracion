const express = require('express');
const router = express.Router();


// estoy enrutando por otra parte xD

router.get('/', (req,res) => {
    res.render("index", {titulo : "mi titulo dinamico"})
})

router.get('/servicios', (req, res) => {
    res.send('Saludos desde servicios')
})

module.exports = router;