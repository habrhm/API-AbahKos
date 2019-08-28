const Kost = require('../models').kosts

exports.show = async (req, res) => {

        const kost = await Kost.findOne({
            where : {
                id : req.params.id
            }
        })

        if (!kost) {
            res.send({
                status: false,
                message: "Data kosong",
                
            });
        }else{

        res.send({
            status: true,
            message: "Data Berhasil didapat",
            data: kost
        });
    }
}

    exports.index = async (req, res) => {

        const kost = await Kost.findAll({

        })

        if (!kost) {
            res.send({
                status: false,
                message: "Data kosong",
                
            });
        }else{
           
        res.send({
            status: true,
            message: "Data Berhasil didapat",
            data: kost
        });
    }
   

}

exports.store = async (req, res) => {
    const images = req.files;
    const {
        name,
        address,
        latitude,
        longitude,
        city,
        description,
        roomNumber,
        roomType,
        roomWidth,
        roomLength,
        facilities,
        price
    } = req.body
    console.log(req.files)
    
    
    
    let imagePaths = ''
    images.forEach((item, index) => {
        if(index === 0){
            imagePaths = item.path
        }else{
            imagePaths +=  ', ' +item.path
        }
    })
        console.log(req)
        const user = await Kost.create({
            name,
            address,
            region : `${latitude}, ${longitude}`,
            city,
            description,
            roomNumber,
            roomType,
            roomWidth,
            roomLength,
            facilities,
            price,
            images : imagePaths,
            userId: req.user.userId

        })
        
        res.send({
            status: true,
            data: user,
            
            message: 'Simpan data Sukses'
        });
    }
