const User = require("../models").user;
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.register = async (req, res) => {
    const {username, email, password, confirmPassword} = req.body


        if (password !== confirmPassword) {
            res.send({
                status : false,
                message : 'Password tidak cocok'
            });
        }else{
        const encryptedPassword = await bcrypt.hash(password, 12);
        
        const register = await User.create({
            username,
            email,
            phone : '',
            password : encryptedPassword,
            fullname : username,
            avatar : '',

        })
        const user = await User.findOne({
            where : {
                username
            }

        })
        if(!user){
            res.send({
                status : false,
                message : 'Register Gagal'
            });
        }else {
            console.log(user);
            const pass = await bcrypt.compare(password, user.password)
            
            if(! pass){
                res.send({
                    status : false,
                    message : 'Register Gagal'
                });
            }else{
                const token = jwt.sign(
                    {
                      email: user.email,
                      userId: user.id
                    },
                    "tokenAbah"
                  )
                  res.send({
                    status : true,
                    token : token,
                    message : 'Login Sukses'
                });
            }
        }

        // res.send({
        //     status : true,
        //     data : user,
        //     message : 'Register Sukses'
        // });
    }
}


exports.login = async (req, res) => {

        const {email, password} = req.body
         const user = await User.findOne({
            where : {
                email
            }

        })

        if(!user){
            res.send({
                status : false,
                message : 'Username Tidak ditemukan'
            });
        }else {
            console.log(user);
            const pass = await bcrypt.compare(password, user.password)
            
            if(!pass){
                res.send({
                    status : false,
                    message : 'Password Salah'
                });
            }else{
                const token = jwt.sign(
                    {
                      email: user.email,
                      userId: user.id
                    },
                    "tokenAbah"
                  )
                  res.send({
                    status : true,
                    token : token,
                    message : 'Login Sukses'
                });
            }
           
        }

    } 
    
        
    
