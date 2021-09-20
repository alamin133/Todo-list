const mongoose =require('mongoose');

module.exports=async()=>{
    try{
        const connectionParams={
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        };
        await mongoose.connect
        ("mongodb://localhost/todo-list",
        
        connectionParams
        );
        console.log('Connected to mongodb')

    }
    catch(error){
       console.log("could not connect to database",error)
    }
}