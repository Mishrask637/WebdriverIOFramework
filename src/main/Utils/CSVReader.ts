const fs = require('fs')
const csvParser = require('papaparse')
import  {log}  from '../Logger/logger';

export class CSVReader{

static customeRowsMap;
static headerNamesMap;

    async parseCSVFile(filePath)
    {
        let file = await fs.readFileSync(filePath,'utf8')
        let parsedFile = await csvParser.parse(file,{
            delimeter:',',
            complete:(csvValues)=>{
                return csvValues;
            }
        });
        return parsedFile;
    }

    async parseCSVFileWithNewLine(filePath)
    {
        let file = await fs.readFileSync(filePath,'utf8')
        let parsedFile = await csvParser.parse(file,{
            delimeter:'\r\n',
            complete:(csvValues)=>{
                return csvValues;
            }
        });
        return parsedFile;
    }

    async parseCSVFileWithHeaders(filePath)
    {
        let file = await fs.readFileSync(filePath,'utf8')
        let parsedFile = await csvParser.parse(file,{
            header:true,
            delimeter:',',
            complete:(csvValues)=>{
                return csvValues;
            }
        });
        return parsedFile;
    }

    async getSpecificRow(filePath,rowNum)
    {
        let value;
        try{
            let parsedFile = await this.parseCSVFile(filePath);
            value = await parsedFile.data[rowNum];
        }
        catch(error)
        {
            log.info("Could not parse the file "+filePath +"\r\n"+
            "Error is "+error);
            value = "";
        }
        return await value;
    }

    async getTotalRows(filePath)
    {
        let value;
        try{
            let parsedFile = await this.parseCSVFile(filePath);
            value = await parsedFile.data.length;
        }
        catch(error)
        {
            log.info("Could not parse the file "+filePath +"\r\n"+
            "Error is "+error);
            value = "";
        }
        return await value;
    }

    async getTotalRowsWithHeaders(filePath)
    {
        let rowsvalue;
        try{
            let parsedFile = await this.parseCSVFileWithHeaders(filePath);
            rowsvalue = await parsedFile.data.length;
        }
        catch(error)
        {
            log.info("Could not parse the file "+filePath +"\r\n"+
            "Error is "+error);
            rowsvalue = "";
        }
        return await rowsvalue;
    }

    async getHeaderNames(filePath)
    {
        let value;
        try{
            let parsedFile = await this.parseCSVFileWithHeaders(filePath);
            value = await parsedFile.meta.fields;
        }
        catch(error)
        {
            log.info("Could not parse the file "+filePath +"\r\n"+
            "Error is "+error);
            value = "";
        }
        return await value;
    }

    async getValueUsingColumnName(filePath,rowNum,columnName)
    {
        let value;
        try{
            let parsedFile = await this.parseCSVFileWithHeaders(filePath);
            value = parsedFile.data[rowNum][columnName];
        }
        catch(error)
        {
            log.info("Could not parse the file "+filePath +"\r\n"+
            "Error is "+error);
            //log.info("Field "+columnName +" is not available in csv file at row "+rowNum);
            value = "";
        }
        return await value
    }

    async getAllRows(filePath)
    {
        let value;
        try{
            let parsedFile = await this.parseCSVFile(filePath);
            value = await parsedFile.data;
        }
        catch(error)
        {
            log.info("Could not parse the file "+filePath +"\r\n"+
            "Error is "+error);
            value = "";
        }
        return await value;
    }

}
