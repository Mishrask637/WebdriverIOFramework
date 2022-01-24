import { ExcelReader } from "./ExcelReader";

const excelReader = new ExcelReader();

let getTotalRowsCount = excelReader.getTotalRowsCount('./src/main/Utils/TestExcelFile.xlsx','Sheet1');

getTotalRowsCount.then(data=>{
    console.log("Total rows count are "+data);
});

let getRowValue = excelReader.getRowValue('./src/main/Utils/TestExcelFile.xlsx','Sheet1',4);

getRowValue.then(rowVal=>{
    console.log("Row Value is "+rowVal);
});

let getAllRows = excelReader.getAllRows('./src/main/Utils/TestExcelFile.xlsx','Sheet1');

getAllRows.then(allrows=>{
    console.log("All rows are "+allrows);
});

let getColumnCount = excelReader.getColumnCount('./src/main/Utils/TestExcelFile.xlsx','Sheet1',1);

getColumnCount.then(colCount=>{
    console.log("Column Count is "+colCount);
});

let getSpecificColumnValue = excelReader.getSpecificColumnValue('./src/main/Utils/TestExcelFile.xlsx','Sheet1',1,1);

getSpecificColumnValue.then(specColVal=>{
    console.log("Specific Column Value is "+specColVal);
});