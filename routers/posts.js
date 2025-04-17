const express = require('express');
const router = express.Router();

// index
router.get('/', (req, res) => {
    res.send('Lista dei post');
})

// show
router.get('/:id', (req, res) => {
    res.send('Dettaglio della pizza: ' +req.params.id);
})

module.exports = router;