const dbConnect = require('./mongodb');

const updateData =async ()=>{
    let data =await dbConnect();
    let result =await data.updateOne(
        {name:'iPhone 13'},{
            $set: {name:'iPhone 13 Pro'}
        }
    );
    console.log(result)

}

updateData();