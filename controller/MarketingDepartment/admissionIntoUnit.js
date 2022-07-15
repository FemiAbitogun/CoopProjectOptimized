

const AdmissionIntoUnitModel = require('../../model/Management_team/Marketing_department/admissionIntoUnit');

const getAllAdmissionIntoUnit = async (req, res) => {
    try {
        const AllAdmissionIntoUnit =await AdmissionIntoUnitModel.find();
        if (!AllAdmissionIntoUnit)
            return res.status(500).json({
                errorMessage: "can not find AdmissionIntoUnit"
            })

        return res.status(200).json(AllAdmissionIntoUnit);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })
    }

}


const getAdmissionIntoUnitById = async (req, res) => {
    try {
        const admissionIntoUnit =await AdmissionIntoUnitModel.findById(req.params.id)
        if (!admissionIntoUnit)
            return res.status(500).json({
                errorMessage: "can not find AdmissionIntoUnit"
            })

        return res.status(200).json(admissionIntoUnit);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })
    }

}







// CREATE USER
const createAdmissionIntoUnit = async (req, res) => {
    try {
        const {
            registrationNumber,
            dateOfAdmission,
            refferalFileNumber,
            fullName,
            phoneNumber,
            amount,
            total,
            loanQualify
        } = req.body;


        // store in database......
        const newAdmissionIntoUnit = new AdmissionIntoUnitModel({
            registrationNumber,
            dateOfAdmission,
            refferalFileNumber,
            fullName,
            phoneNumber,
            amount,
            total,
            loanQualify
        })
        
        const savednewUser = await newAdmissionIntoUnit.save();
        res.status(201).json("saved successfully");



    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })
    }

}




// DELETE USERS
const deleteAdmissionIntoUnit = async (req, res) => {

    try {

        const id = req.params.id;
        const user = await AdmissionIntoUnitModel.findByIdAndDelete(id)
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " failed to delete user from database...."
        })
    }

}


module.exports = { getAllAdmissionIntoUnit, createAdmissionIntoUnit, deleteAdmissionIntoUnit,getAdmissionIntoUnitById };










