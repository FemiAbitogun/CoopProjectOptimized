const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    const token = req.cookies.ticket;
    if (!token) {
        return res.status(401).json({ errorMessage: "Unauthorized access....." });
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
        return res.status(401).json({ errorMessage: "Unauthorized access....." });
    }
    req.authenticatedUserID=verified.user
    next();
}

module.exports = { auth };