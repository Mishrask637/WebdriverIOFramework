import {JsonReader} from "./JsonReader"

const reader = new JsonReader();

reader.jsonReaderWithCallback("./src/main/Utils/testFile.json",(err,data)=>{
    if(err)
    {
        console.log("Error is "+err)
    }
    else{
        console.log(data);
    }
});


reader.jsonReaderSync("./src/main/Utils/testFile.json")
.then((data) => console.log(data))
.catch((error) => console.error(error));
