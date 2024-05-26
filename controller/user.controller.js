const { Error } = require('mongoose');
const User = require('../model/User')
const bcryptjs = require('bcryptjs')
const saltRounds = 10;

const userController = {}

userController.createUser = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        
        const user = await User.find({email});
        if(user!=""){
            throw new Error(`이미 존재하는 ID입니다`)
        }
        const salt = bcryptjs.genSaltSync(saltRounds);
        const hash = bcryptjs.hashSync(password, salt);
        const newUser = new User({name,email,password:hash})
        await newUser.save()
        console.log("oh",newUser)
        res.status(200).json({status:"susses"})
    }catch(error){
        res.status(400).json({status:"fail",error})
    }
};

userController.loginWithEmail = async(req,res) => {
    try{
        const {email,password} = req.body;
        const userList = await User.find({email},"-createdAt -updatedAt -__v");
        const user = userList[0];
        if(user!="") {
            const isMath = bcryptjs.compareSync(password, user.password);
            if(isMath) {
                const token = user.generateToken();
                return res.status(200).json({status:"success",user,token})
            }
        }
        throw new Error(`아이디 또는 비밀번호가 일치하지 않습니다.`);
    }catch(error){
        res.status(400).json({status:'fail',error});
    }
}

module.exports = userController;