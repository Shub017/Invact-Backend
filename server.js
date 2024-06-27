import server from "./index.js";
import connectToMongoDB from "./DataBase/dataBase.js";
server.listen(4040, ()=>{
    console.log('Server is listening at http://localhost:4040/')
    connectToMongoDB();
})