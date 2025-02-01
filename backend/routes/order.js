const express = require("express");
const router=express.Router();
const { getOrders, updateOrderStatus } = require("../handlers/order-handler")

router.get("", async (req, res) => {
    const orders = await getOrders();
    res.send(orders);
})
router.put("/:id", async (req, res) => {  // Alteração de POST para PUT
    const id = req.params.id;
    const status = req.body.status;  // Altere para req.body.status
    await updateOrderStatus(id, status);
    res.send({ message: "Status alterado com sucesso!" });
});


module.exports = router;