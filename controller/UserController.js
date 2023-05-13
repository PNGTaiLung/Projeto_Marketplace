import { getAll } from "../model/User.js";

class UserController{
    static listUser(req, res){
        res.json(getAll())
    }
}

export default UserController