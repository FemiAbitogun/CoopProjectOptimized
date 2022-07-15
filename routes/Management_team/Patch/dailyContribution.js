const router = require('express').Router();


const { editDailySuscriber } = require('../../../controller/MarketingDepartment/PatchRequest/dailyPatchRequest')
router.patch('/:id', editDailySuscriber)


module.exports = router;


