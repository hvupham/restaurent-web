const Users = require("../models/userModel");

const userController = {
    getAllUsers: async(req,res)=>{  // asyns: tạm dừng việc thực thi của hàm đến khi await có kết quả
        try {
            const users  = Users.find();
            res.status(200).json(users);

        }
        catch(error){
            res.status(500).json({message: error.message});
        }
    },
    deleteUser: async(req, res) => {
        let user = await Users.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    await user.remove();
    res.status(200).json({ message: "User deleted" });
    }

}
module.exports = userController;