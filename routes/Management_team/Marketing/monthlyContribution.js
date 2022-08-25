
const router = require('express').Router();
const { upload } = require('../../../fileHelper');
const { auth } = require('../../../middleWare/authMiddleWare')
const { getAllSuscriberAccount, createSuscriberAccount, deleteSuscriberAccount,
    getSuscriberAccountById } = require('../../../controller/MarketingDepartment/monthlyContribution');
router.get('/', auth, getAllSuscriberAccount);
router.get('/:id', auth, getSuscriberAccountById);

//customerImage: 
router.post('/', upload.fields([{ name: "customerImage", maxCount: 1 }, { name: "referee1Image", maxCount: 1 }, { name: "referee2Image", maxCount: 1 }
]), createSuscriberAccount);

router.delete('/delete/:id', auth, deleteSuscriberAccount);
 
module.exports = router;


