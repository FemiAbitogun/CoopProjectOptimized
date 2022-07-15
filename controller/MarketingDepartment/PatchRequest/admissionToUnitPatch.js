
const Admission = require('../../../model/Management_team/Marketing_department/admissionIntoUnit');


const editAdmissionIntoUnit = async (req, res) => {
    try {

        let admission = await Admission.findById(req.params.id);


        admission.registrationNumber = req.body.registrationNumber,
            admission.dateOfAdmission = req.body.dateOfAdmission,
            admission.refferalFileNumber = req.body.refferalFileNumber,
            admission.fullName = req.body.fullName,
            admission.phoneNumber = req.body.phoneNumber,
            admission.amount = req.body.amount,
            admission.total = req.body.total,
            admission.loanQualify = req.body.loanQualify


        await admission.save();

        return res.status(200).json({});

    }

    catch (err) {
        res.status(500).json({
            errorMessage: " error getting admission from database...."
        })

        console.log(err.message)

    }

}


module.exports = { editAdmissionIntoUnit }