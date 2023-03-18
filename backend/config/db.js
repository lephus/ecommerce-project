import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true })
        console.log("MongoDB connected: " + conn.connection.host)
    } catch (err) {
        console.log("Error " + err.message);
        process.exit(1)
    }

}

export default connectDB