import { CSVReader } from "./CSVReader";

const csvReader = new CSVReader();

let totalRow = csvReader.getTotalRows('./src/main/Utils/TESTCSVFILE.csv');

totalRow.then(text=>{
    console.log("Total Rows are "+text)
});

let username = csvReader.getValueUsingColumnName('./src/main/Utils/TESTCSVFILE.csv',2,'USERNAME');

username.then(name=>{
    console.log("UserName is "+name)
})

let headerNames = csvReader.getHeaderNames('./src/main/Utils/TESTCSVFILE.csv');

headerNames.then(names=>{
    console.log("Header Names are "+names)
})

/* let totalRowsWithHeaders = csvReader.getTotalRowsWithHeaders('./src/main/Utils/TESTCSVFILE.csv')

totalRowsWithHeaders.then(rows=>{
    console.log("total Rows With Headers are "+rows)
}) */

let allRows = csvReader.getAllRows('./src/main/Utils/TESTCSVFILE.csv')

allRows.then(allrows=>{
    console.log("All Rows are "+allrows)
})

let specificRow = csvReader.getSpecificRow('./src/main/Utils/TESTCSVFILE.csv',3);

specificRow.then(specificRow=>{
    console.log("Specific row values are "+specificRow)
})