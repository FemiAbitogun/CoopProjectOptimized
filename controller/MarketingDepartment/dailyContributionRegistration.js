

const DailyContributionModel = require('../../model/Management_team/Marketing_department/dailyContributionRegistration');

const getAllDailyContributor = async (req, res) => {
    try {
        const AllDailyContribution = await DailyContributionModel.find();
        if (!AllDailyContribution)
            return res.status(400).json({
                errorMessage: "can not find daily contributors"
            })

        return res.status(200).json(AllDailyContribution);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error getting daily contributors from database..."
        })
    }

}




const dailyContributorById = async (req, res) => {
    try {
        const dailyContributor = await DailyContributionModel.findById(req.params.id);
        if (!dailyContributor)
            return res.status(400).json({
                errorMessage: "can not find daily contributors"
            })

        return res.status(200).json(dailyContributor);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error getting daily contributors from database..."
        })
    }

}







// CREATE USER
const createDailyContributor = async (req, res) => {
    try {

        // from front end......
        const {
            cardNo,
            fullName,
            phoneNumber,
            amount,
            zone,
            referralCode,
            
            contribution,
            dateOfRegistration,
            dateOfFirstContribution
        } = req.body;


        // store in database......
        const newUser = new DailyContributionModel({
            cardNo,
            fullName,
            phoneNumber,
            amount,
            zone,
            referralCode,
            contribution,
            dateOfRegistration,
            dateOfFirstContribution
        })
        const savednewUser = await newUser.save();

        res.status(201).json("saved successfully");



    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error saving datas to database...."
        })
    }

}










// DELETE USERS
const deleteDailyContributor = async (req, res) => {

    try {

        const id = req.params.id;
        const user = await DailyContributionModel.findByIdAndDelete(id)
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " failed to delete user from database...."
        })
    }

}






module.exports = { dailyContributorById, getAllDailyContributor, createDailyContributor, deleteDailyContributor };










