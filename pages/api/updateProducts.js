import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let p of req.body.products) {
            await Product.findByIdAndUpdate(p._id, p)
        }
        res.status(200).json({ success: "success" })
    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler)