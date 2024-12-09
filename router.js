// import express
const express = require('express')
// import userController
const userController = require('./controllers/userController')

// import add controller
const projectcontroller = require('./controllers/projectController')
// import jwtmiddleware
const jwtMiddleware = require('./middleware/jwtMiddleware')

const multerConfig = require('./middleware/multerMiddleware.js')

// instance  router
const router = new express.Router()

// Register
router.post('/register',userController.register)

// login
router.post('/login',userController.login)

// add-project
router.post('/add-project',jwtMiddleware,multerConfig.single("projectImage"),projectcontroller.addProjectController)

// all project
router.get('/all-project',jwtMiddleware,projectcontroller.getAllProjectController)
 
// home project
router.get('/home-project',projectcontroller.getHomeProjectController)

// user project
router.get('/user-project',jwtMiddleware,projectcontroller.getUserProjectController)
      
// remove user projcet
router.delete('/remove-userproject/:id',jwtMiddleware , projectcontroller.removeUserProjectController)

//  update user project
router.put('/update-userProject/:id',jwtMiddleware ,multerConfig.single('projectImage'),projectcontroller.editProjectController)

// update user profile
router.put('/update-userProfile',jwtMiddleware , multerConfig.single("profile"),userController.editProfileController)
 
module.exports = router 
 
 
// //import express 
// const express = require('express')
// //import user controller

// const userController = require('./controllers/userController.js')
// //add controller
// const projectController=require('./controllers/projectController')

// const jwtMiddleware = require('./middleware/jwtMiddleware.js')

// const multerConfig = require('./middleware/multerMiddleware.js')

// //instance router

// const router = new express.Router()

// //Register
// router.post('/register',userController.register)

// //login
// router.post('/login', userController.login)

// //add project
// router.post('/add-project',jwtMiddleware,multerConfig.single("projectimage"),projectController.addProjectController)



// module.exports = router;