const FinanceModel = require('../../model/Finance/financeModel')

const getAllFinanceDatas = async (req, res) => {
    try {
        const result = await FinanceModel.find();
        if (!result)
            return res.status(404).json({
                errorMessage: "can not find daily Finance"
            })

        return res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error getting datas from database..."
        })
    }

}


const getFinanceDatasById = async (req, res) => {
    try {
        const result = await FinanceModel.findById(req.params.id);
        if (!result)
            return res.status(400).json({
                errorMessage: "can not find result"
            })

        return res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error getting result from database..."
        })
    }

}




// CREATE USER
const createFinance = async (req, res) => {
    try {

        // from front end......
        const {
            no,
            referralCode,
            registrationNumber,
            BVN,
            firstName,
            middleName,
            lastName,
            bankName,
            accountNumber,
            phone,
            contributionCategoryBeforeLoan,
            totalAmountContributed,
            amountInWords,
            amountOfLoanOrLoanRequestFigure,
            amountInWordsOfRequestLoan,

            isReligionSupportForLoan,
            isEligibilty,
            isCanMakeContributionWhileServicingLoan,

            servicingLoanAmount,
            pickAmountOfLoanAfterRepayment,
            referralFullName,
            referralPhone,
            referralDateOfRegistration,
            referralDateOfAdmin,
            referralUnitCode,

            //bond...............

            memberName,
            memberRegistrationNumber,
            date,

            surety1MemberName,
            surety1MemberRegistrationNumber,
            surety1DateOfRegistration,
            surety1NameOfRefferal,
            surety1TotalContribution,

            surety2BVN,
            surety2FirstName,
            surety2MiddleName,
            surety2LastName,
            surety2AccountNumber,
            surety2Occupation,
            surety2PlaceOfWorkAddress,
            surety2Position,
            surety2Level,
            surety2RelationShipWithBorrower,
            surety2YearsWithBorrower
        } = req.body;


        // store in database......
        const newUser = new FinanceModel({
            no,
            referralCode,
            registrationNumber,
            BVN,
            firstName,
            middleName,
            lastName,
            bankName,
            accountNumber,
            phone,
            contributionCategoryBeforeLoan,
            totalAmountContributed,
            amountInWords,
            amountOfLoanOrLoanRequestFigure,
            amountInWordsOfRequestLoan,

            isReligionSupportForLoan,
            isEligibilty,
            isCanMakeContributionWhileServicingLoan,
            servicingLoanAmount,
            pickAmountOfLoanAfterRepayment,
            referralFullName,
            referralPhone,
            referralDateOfRegistration,
            referralDateOfAdmin,
            referralUnitCode,



            //bond.............
            memberName,
            memberRegistrationNumber,
            date,

            surety1MemberName,
            surety1MemberRegistrationNumber,
            surety1DateOfRegistration,
            surety1NameOfRefferal,
            surety1TotalContribution,

            surety2BVN,
            surety2FirstName,
            surety2MiddleName,
            surety2LastName,
            surety2AccountNumber,
            surety2Occupation,
            surety2PlaceOfWorkAddress,
            surety2Position,
            surety2Level,
            surety2RelationShipWithBorrower,
            surety2YearsWithBorrower





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
const deleteFinanceModel = async (req, res) => {

    try {

        const id = req.params.id;
        const user = await FinanceModel.findByIdAndDelete(id)
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " failed to delete FinanceModel from database...."
        })
    }

}






module.exports = {
    getAllFinanceDatas, getFinanceDatasById, createFinance, deleteFinanceModel
};










