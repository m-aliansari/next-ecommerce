import connectDb from "../../middleware/mongoose";
import User from "../../models/User";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user = await User.findOne({ email: req.body.email })
        const bytes = CryptoJS.AES.decrypt(user.password, "secret123")
        const decryptedPass = bytes.toString(CryptoJS.enc.Utf8)
        if (user) {
            if (req.body.email === user.email && decryptedPass === req.body.password) {
                let token = jwt.sign({email: user.email, name: user.name}, 'jwtsecret', {
                    expiresIn: '2d'
                })
                res.status(200).json({ success: true, token: token })
            }
            else
                res.status(400).json({ success: false, error: "Invalid credentials" })
        } else {
            res.status(400).json({ success: false, error: "User not found" })
        }
    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler)