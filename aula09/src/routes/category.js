const express = require('express');
const Category = require('../entity/Category');

const router = express.Router();

router.get('/categorias', async (req, res) => {
    let data = await Category.findAll(); //SELECT * FROM ...

    res.send(data);
});
router.get('/categorias/.id', async (req, res) => {
    let data = await Category.findByPK(req.params.id);

    res.send(data);
});

module.exports = router;