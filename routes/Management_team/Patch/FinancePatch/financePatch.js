const router = require('express').Router();


const { editFinance } = require('../../../../controller/FinanceDepartment/PatchRequest/editFinance')
router.patch('/:id', editFinance)


module.exports = router;


