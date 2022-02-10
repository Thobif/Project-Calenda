const mongoose = require('mongoose')

const connectDB = async()=> {
    try{
        //code
        await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        console.log('Connect DB Success !!')
    }catch (err) {
        //err
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB