const express = require("express")
const router = express.Router()
const {addUser,getUser,updateUser,deleteUser}= require ("../controllers/userControler")

//route used for create method
router.post('/users/post',addUser)
//route used for read method
router.get('/users/get',getUser)
//route used for update method
router.put('/users/update/:id',updateUser)
//route used for delete method
router.delete('/users/delete/:id',deleteUser)

module.exports = router