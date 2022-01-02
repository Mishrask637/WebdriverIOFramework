import { CSVReader } from "./CSVReader";

const csvReader = new CSVReader();

let totalRow = csvReader.getTotalRowsWithHeaders('./Utils/TESTCSVFILE.csv');

totalRow.then(text=>{
    console.log("Total Rows are "+text)
});

let username = csvReader.getValueUsingColumnName('./Utils/TESTCSVFILE.csv',1,'USERNAME');

username.then(name=>{
    console.log("UserName is "+name)
})