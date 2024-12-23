const express = require("express");
const { getBrands, getBrand, addBrand, updateBrand, deleteBrand } = require("../handlers/brand-handler");
const router = express.Router();

// Rota para adicionar uma marca
router.post("", async (req, res) => {
    try {
        console.log('Add brand called');
        let model = req.body;
        let result = await addBrand(model);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Rota para atualizar uma marca
router.put("/:id", async (req, res) => {
    try {
        console.log('Update brand called');
        let model = req.body;
        let id = req.params["id"];
        let result = await updateBrand(id, model);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Rota para deletar uma marca
router.delete("/:id", async (req, res) => {
    try {
        console.log('Delete brand called');
        let id = req.params["id"];
        await deleteBrand(id);
        res.status(200).send({ message: "deleted" });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Rota para buscar todas as marcas
router.get("", async (req, res) => {
    try {
        console.log('Get all brands called');
        let brands = await getBrands();
        res.status(200).send(brands);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Rota para buscar uma marca por ID
router.get("/:id", async (req, res) => {
    try {
        console.log('Get brand by ID called');
        let id = req.params["id"];
        let brand = await getBrand(id);
        res.status(200).send(brand);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
});

module.exports = router;
