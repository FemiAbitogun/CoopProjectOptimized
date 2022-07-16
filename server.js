const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin:["http://localhost:3000","https://femi-abitogun-coop-project.netlify.app/"]
}));

//https://coop-project-femiabitogun.herokuapp.com/
const PORT = process.env.PORT || 9000

// creating server..........................
app.listen(PORT, () => {
    console.log(`app listening @ port ${PORT}`)
})

const { databaseConfig } = require('./databaseConnection/databaseConfig');
databaseConfig();

app.use('/uploads', express.static('uploads'));


app.get('/', async (req, res) => {
    return res.status(200).send("Server test ok....")
})

//login and authentication routes............
app.use('/api/authenticateUser', require('./routes/Account/AuthenticateUsers'));



/**MARKETING DEPARTMENT */

/*monthly contribution */
app.use('/api/monthlyContribution', require('./routes/Management_team/Marketing/monthlyContribution'));
app.use('/api/monthlyContribution/edit/', require('./routes/Management_team/Patch/monthly'));


/*admissionIntoUnit */
app.use('/api/admission', require('./routes/Management_team/Marketing/admissionIntoUnit'));
app.use('/api/admission/edit', require('./routes/Management_team/Patch/admissionIntoUnit'));


/*daily contribution */
app.use('/api/dailyContribution', require('./routes/Management_team/Marketing/dailyContributionRegistration'));
app.use('/api/daily/edit', require('./routes/Management_team/Patch/dailyContribution'));


/*FINANCE DEPARTMENT */
app.use('/api/finance', require('./routes/Management_team/Finance/finance.js'));
app.use('/api/finance/edit', require('./routes/Management_team/Patch/FinancePatch/financePatch'));

