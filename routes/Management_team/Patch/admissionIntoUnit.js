const router = require('express').Router();


const { editAdmissionIntoUnit } = require('../../../controller/MarketingDepartment/PatchRequest/admissionToUnitPatch')
router.patch('/admissionIntoUnit/:id', editAdmissionIntoUnit)


module.exports = router;


