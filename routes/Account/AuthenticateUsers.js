
const router = require('express').Router();
const { auth } = require('../../middleWare/authMiddleWare');

const { logOut,confirm, getAllUserAccount, createUserAccount, deleteUserAccount, loginUserAccount } = require('../../controller/Account/authenticateUser');

router.get('/',auth, getAllUserAccount);
router.post('/confirm',auth, confirm);
router.post('/logOut', auth, logOut);

router.post('/create', createUserAccount);

router.post('/login', loginUserAccount);

router.delete('/delete/:id',auth,deleteUserAccount);

module.exports = router;



 

