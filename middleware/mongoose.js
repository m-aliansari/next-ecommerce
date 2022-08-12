import { connections, connect } from "mongoose";

const connectDb = handler => async (req, res) =>{
    if (connections[0].readyState) {
        return handler(req, res)
    }
    console.log(process.env.MONGO_URI);
    connect(process.env.MONGO_URI)
    return handler(req, res)
}

export default connectDb