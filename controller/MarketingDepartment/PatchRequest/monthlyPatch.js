
const Suscriber = require('../../../model/Management_team/Marketing_department/monthly_registration');
const cloudinary = require('../../../cloudinary');

const editMonthlySuscriber = async (req, res) => {
    try {


        let suscriber = await Suscriber.findById(req.params.id);

        if (req.files.customerImage) {

            await cloudinary.uploader.destroy(suscriber.customerImagePath);
            await cloudinary.uploader.upload(req.files.customerImage[0].path);

            suscriber.customerImagePath = req.files.customerImage[0].path
        }

        if (req.files.referee1Image) {

            await cloudinary.uploader.destroy(suscriber.referee1ImagePath);
            await cloudinary.uploader.upload(req.files.referee1ImagePath[0].path);
            
            suscriber.referee1ImagePath = req.files.referee1ImagePath[0].path;
        }
        if (req.files.referee2Image) {
            await cloudinary.uploader.destroy(suscriber.referee2ImagePath);
            await cloudinary.uploader.upload(req.files.referee2ImagePath[0].path);
        
            suscriber.referee2ImagePath = req.files.referee2ImagePath[0].path;
            
        }


        suscriber.referalCode = req.body.referalCode
        suscriber.state = req.body.state
        suscriber.branch = req.body.branch
        suscriber.unitCode = req.body.unitCode
        suscriber.formNo = req.body.formNo


        suscriber.fullName = req.body.fullName
        suscriber.residentialAddress = req.body.residentialAddress
        suscriber.email = req.body.email
        suscriber.phone = req.body.phone
        suscriber.occupation = req.body.occupation
        suscriber.maritalStatus = req.body.maritalStatus
        suscriber.religion = req.body.religion
        suscriber.gender = req.body.gender
        suscriber.birthday = req.body.birthday
        suscriber.permanentHomeAddress = req.body.permanentHomeAddress
        suscriber.stateOfOrigin = req.body.stateOfOrigin
        suscriber.LGA = req.body.LGA
        suscriber.homeTown = req.body.homeTown
        suscriber.prefferDaysOfMeeting = req.body.prefferDaysOfMeeting
        suscriber.contributionPlan = req.body.contributionPlan
        suscriber.bankName = req.body.bankName
        suscriber.accountNumber = req.body.accountNumber
        suscriber.BVN = req.body.BVN
        suscriber.meansOfIdentification = req.body.meansOfIdentification
        suscriber.idCardNo = req.body.idCardNo
        suscriber.kinFullname = req.body.kinFullname
        suscriber.kinAddress = req.body.kinAddress
        suscriber.kinEmail = req.body.kinEmail
        suscriber.kinPhone = req.body.kinPhone
        suscriber.kinOccupation = req.body.kinOccupation
        suscriber.kinOfficeAddress = req.body.kinOfficeAddress
        suscriber.kinRelationshipType = req.body.kinRelationshipType
        suscriber.kinYearOfrelationship = req.body.kinYearOfrelationship
        suscriber.referee1FullName = req.body.referee1FullName
        suscriber.referee1HomeAddress = req.body.referee1HomeAddress
        suscriber.referee1WorkAddress = req.body.referee1WorkAddress
        suscriber.referee1Business = req.body.referee1Business
        suscriber.referee1Email = req.body.referee1Email
        suscriber.referee1Religion = req.body.referee1Religion
        suscriber.referee1Phone = req.body.referee1Phone
        suscriber.referee1Relationship = req.body.referee1Relationship
        suscriber.referee2FullName = req.body.referee2FullName
        suscriber.referee2HomeAddress = req.body.referee2HomeAddress
        suscriber.referee2WorkAddress = req.body.referee2WorkAddress
        suscriber.referee2Business = req.body.referee2Business
        suscriber.referee2Email = req.body.referee2Email
        suscriber.referee2Religion = req.body.referee2Religion
        suscriber.referee2Phone = req.body.referee2Phone
        suscriber.referee2Relationship = req.body.referee2Relationship;
        await suscriber.save();

        return res.status(200).json("Succesfully edited");

    }

    catch (err) {
        res.status(500).json({
            errorMessage: " error editing suscriber from database...."
        })

        
    }

}



module.exports = {

    editMonthlySuscriber,
}


