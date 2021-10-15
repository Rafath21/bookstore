const express=require('express');
const app=express();
const router=express.Router();
const {allUsers,deleteUser,updateUser} =require('../../controllers/adminControllers/allUsersController');

router.route('/').get(allUsers).put(updateUser).delete(deleteUser);

module.exports=router;