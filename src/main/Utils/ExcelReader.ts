import {Workbook,Worksheet} from 'exceljs'

export class ExcelReader{

    workbookObj;

    async getWorkbookObject(filePath)
    {
        let wb:Workbook = new Workbook();
        this.workbookObj = await wb.xlsx.readFile(filePath);
        return await this.workbookObj;
    }

    async getTotalRowsCount(filePath,sheetName)
    {
        let wb = await this.getWorkbookObject(filePath);
        let sheetObj:Worksheet = await wb.getWorksheet(sheetName);
        let totalRowCount =await sheetObj.rowCount;
        return await totalRowCount;
    }

    async getRowValue(filePath,sheetName,rowNum)
    {
        let rowValue = [];
        let wb = await this.getWorkbookObject(filePath);
        let sheetObj:Worksheet = await wb.getWorksheet(sheetName);
        let row = await sheetObj.getRow(rowNum);
        for(let i=1;i<=row.cellCount;i++)
        {
            let values={
                array:await row.getCell(i).value
            }
            if(await row.getCell(i).value === null)
            {
                values.array='';
            }
            await rowValue.push(await values.array);
        }

        return await rowValue;
    }

    async getAllRows(filePath,sheetName)
    {
        let valueArray = [];
        let wb = await this.getWorkbookObject(filePath);
        let sheetObj:Worksheet = await wb.getWorksheet(sheetName);
        let totalRowCount = await sheetObj.rowCount;
        let totalColCount;

        for(let i=1;i<=totalRowCount;i++)
        {
            totalColCount = await sheetObj.getRow(i).cellCount;

            for(let j=1;j<=totalColCount;j++)
            {
                let values={
                    array:await sheetObj.getRow(i).getCell(j).value
                }
                if(await sheetObj.getRow(i).getCell(j).value===null)
                {
                    values.array='';
                }
                await valueArray.push(await values.array);
            }
        }
        
        return await valueArray;
    }

    async getColumnCount(filePath,sheetName,rowNum)
    {
        let wb = await this.getWorkbookObject(filePath);
        let sheetObj:Worksheet = await wb.getWorksheet(sheetName);
        let row = await sheetObj.getRow(rowNum);
        return await row.cellCount;
    }

    async getSpecificColumnValue(filePath,sheetName,rowNum,columnNum)
    {
        let wb = await this.getWorkbookObject(filePath);
        let sheetObj:Worksheet = await wb.getWorksheet(sheetName);
        let row = await sheetObj.getRow(rowNum);
        let cell = await row.getCell(columnNum);
        return await cell.value;
    }
}