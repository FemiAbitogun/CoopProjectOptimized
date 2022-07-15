


const router = require('express').Router();
const {auth}= require('../../../middleWare/authMiddleWare')

const {dailyContributorById, getAllDailyContributor, createDailyContributor ,deleteDailyContributor } = require('../../../controller/MarketingDepartment/dailyContributionRegistration');

router.get('/getAll',auth,getAllDailyContributor);

//http://localhost:3000/editDaily/edit/60d7b573c7c5841a204beed7
router.get('/:id',auth,dailyContributorById);
router.post('/',auth,createDailyContributor);
router.delete('/delete/:id',auth,deleteDailyContributor);

module.exports = router;





