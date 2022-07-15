
const router = require('express').Router();
const { auth } = require('../../../middleWare/authMiddleWare')

const {
    getAdmissionIntoUnitById,
    getAllAdmissionIntoUnit,
    createAdmissionIntoUnit,
    deleteAdmissionIntoUnit
} = require('../../../controller/MarketingDepartment/admissionIntoUnit');

router.get('/', auth, getAllAdmissionIntoUnit);
router.get('/:id', auth, getAdmissionIntoUnitById);

router.post('/', auth, createAdmissionIntoUnit);
router.delete('/delete/:id', auth, deleteAdmissionIntoUnit);

module.exports = router;






