
const DailyModel = require('../../../model/Management_team/Marketing_department/dailyContributionRegistration');


const editDailySuscriber = async (req, res) => {
    try {

        let result = await DailyModel.findById(req.params.id);
        result.cardNo=req.body.cardNo,
        result.fullName=req.body.fullName,
        result.phoneNumber=req.body.phoneNumber,
        result.amount=req.body.amount,
        result.zone=req.body.zone,
        result.referralCode=req.body.referralCode,

        await result.save();
console.log("daily rote ")
        return res.status(200).json({});

    }

    catch (err) {
        res.status(500).json({
            errorMessage: " error getting DailyModel from database...."
        })

        console.log(err.message)

    }

}


module.exports = { editDailySuscriber }