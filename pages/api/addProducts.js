import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let p of req.body.products) {
            let product = new Product({
                title: p.title,
                slug: p.slug,
                desc: p.desc,
                img: p.img,
                category: p.category,
                size: p.size,
                color: p.color,
                price: p.price,
                availableQty: p.availableQty
            })
            await product.save()
        }
        res.status(200).json({ success: "success" })
    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDb(handler)