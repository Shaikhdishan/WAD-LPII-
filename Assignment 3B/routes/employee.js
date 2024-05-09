const express = require('express');
const router = express.Router();

const Employee = require('../models/Employee');

router.get("/get", async (req, res) => {
    const employee = await Employee.find({}); 
    return res.json({
        employee
    });
})


router.post("/post", async (req, res) => {
    const user = new Employee({
        name: req.body.name,
        Designation: req.body.Designation
    });

    try {
        const emp = await user.save();
        return res.json({
            emp
        })
    }
    catch (error) {
        console.log(error);
    }
})

router.patch("/update/:id", async (req, res) => {
    try {
        const _id = req.params.id

        const updatedData = await Employee.findByIdAndUpdate(
            { _id }, req.body, { new: true }
        )

        return res.json({
            updatedData
        })
    } catch (error) {
        console.log(error);
    }
})

router.delete("/delete/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const deletedUser = await Employee.findByIdAndDelete(
            { _id }
        )

        return res.json({
            deletedUser
        })

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;