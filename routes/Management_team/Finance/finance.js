
const router = require('express').Router();

const { getAllFinanceDatas, getFinanceDatasById, createFinance, deleteFinanceModel } = require('../../../controller/FinanceDepartment/finance');

router.post('/create', createFinance);



router.get('/', getAllFinanceDatas);
router.get('/:id', getFinanceDatasById);
router.delete('/delete/:id', deleteFinanceModel);


module.exports = router;





