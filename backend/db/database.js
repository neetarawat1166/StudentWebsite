import mongoose from 'mongoose'

export const DBConnect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected")
    }catch(error){
        console.log(`ERROR IN DB  ${error}`)
    }
}

