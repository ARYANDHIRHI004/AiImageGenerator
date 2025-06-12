import mongoose from "mongoose"
const DBNAME = "AIIMAGEGENERATOR"

const connectDB = async () => {
    try {

        const mongoDbConnectioninstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`)
        console.log(`MongoDB connection successfully host:${mongoDbConnectioninstance.connection.host}`);
        
    } catch (error) {
        console.log('MongoDB connectio Failed: ', error);
        
    }
}

export default connectDB
