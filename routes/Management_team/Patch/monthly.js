const router = require('express').Router();
const { upload } = require('../../../fileHelper');


const {
    editMonthlySuscriber,
} = require('../../../controller/MarketingDepartment/PatchRequest/monthlyPatch');


router.patch('/monthly/:id', upload.fields([{ name: "customerImage", maxCount: 1 },
{ name: "referee1Image", maxCount: 1 }, { name: "referee2Image", maxCount: 1 }]), editMonthlySuscriber);


module.exports = router;

