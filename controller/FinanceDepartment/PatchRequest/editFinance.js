

const FinanceModel = require('../../../model/Finance/financeModel');


const editFinance = async (req, res) => {


    try {
        const result = await FinanceModel.findById(req.params.id);

        // store in database......

        result.no = req.body.no;
        result.referralCode = req.body.referralCode;
        result.registrationNumber = req.body.registrationNumber;
        result.BVN = req.body.BVN;
        result.firstName = req.body.firstName;
        result.middleName = req.body.middleName;
        result.lastName = req.body.lastName;


        result.bankName = req.body.bankName;
        result.accountNumber = req.body.accountNumber;
        result.phone = req.body.phone;
        result.contributionCategoryBeforeLoan = req.body.contributionCategoryBeforeLoan;
        result.totalAmountContributed = req.body.totalAmountContributed;
        result.amountInWords = req.body.amountInWords;
        result.amountOfLoanOrLoanRequestFigure = req.body.amountOfLoanOrLoanRequestFigure;
        result.amountInWordsOfRequestLoan = req.body.amountInWordsOfRequestLoan;
        result.isReligionSupportForLoan = req.body.isReligionSupportForLoan;
        result.isEligibilty = req.body.isEligibilty;
        result.isCanMakeContributionWhileServicingLoan = req.body.isCanMakeContributionWhileServicingLoan;
        result.servicingLoanAmount = req.body.servicingLoanAmount;
        result.pickAmountOfLoanAfterRepayment = req.body.pickAmountOfLoanAfterRepayment;
        result.referralFullName = req.body.referralFullName;
        result.referralPhone = req.body.referralPhone;
        result.referralDateOfRegistration = req.body.referralDateOfRegistration;
        result.referralDateOfAdmin = req.body.referralDateOfAdmin;
        result.referralUnitCode = req.body.referralUnitCode;

        // bond

        result.memberName = req.body.memberName,
            result.memberRegistrationNumber = req.body.memberRegistrationNumber,
            result.date = req.body.date,

            result.surety1MemberName = req.body.surety1MemberName,
            result.surety1MemberRegistrationNumber = req.body.surety1MemberRegistrationNumber,
            result.surety1DateOfRegistration = req.body.surety1DateOfRegistration,
            result.surety1NameOfRefferal = req.body.surety1NameOfRefferal,
            result.surety1TotalContribution = req.body.surety1TotalContribution,

            result.surety2BVN = req.body.surety2BVN,
            result.surety2FirstName = req.body.surety2FirstName,
            result.surety2MiddleName = req.body.surety2MiddleName,
            result.surety2LastName = req.body.surety2LastName,
            result.surety2AccountNumber = req.body.surety2AccountNumber,
            result.surety2Occupation = req.body.surety2Occupation,
            result.surety2PlaceOfWorkAddress = req.body.surety2PlaceOfWorkAddress,
            result.surety2Position = req.body.surety2Position,
            result.surety2Level = req.body.surety2Level,
            result.surety2RelationShipWithBorrower = req.body.surety2RelationShipWithBorrower,
            result.surety2YearsWithBorrower = req.body.surety2YearsWithBorrower



        var Savedresult = await result.save();

        res.status(201).json(" successfully edited finance table");



    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })
    }

}



module.exports = {
    editFinance
};
