const appRoot = require("app-root-path")
const router = require('express').Router()
const {login,createUser} = require(appRoot+'/apps/v1/common/authentication/userRegistration.js')


const {resetPassword,resetPasswordconformation} =require(appRoot+"/apps/v1/common/authentication/updateAuth")

router.post("/user-create",createUser)

router.post('/login', login);

router.post('/resetpassword', resetPassword)


router.patch("/resetpassword/:authToken/:id",resetPasswordconformation)


module.exports.router = router