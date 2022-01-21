import * as reporter from 'cucumber-html-reporter'
import * as fs from 'fs';
import * as mkdir from 'mkdirp'
import * as path from 'path'
const jsonReports = path.join(process.cwd(),"/reports/json");
const htmlReports = path.join(process.cwd(),"/reports/html");
const today = new Date();
const timestamp = today.getMonth()+ '' +today.getDate()+ '' + today.getFullYear() + "_"+today.getHours()+today.getMinutes()+today.getSeconds();
const targetJson = jsonReports+"/automation-demo-site-regtsitration-feature.json"
const targetHtml = htmlReports+"/automation-demo-site-regtsitration-feature.html"
const FileName = htmlReports+"/DemoProject "+timestamp+".html";

const cucumberReporterOptions = {
    jsonDir:jsonReports,
    output:FileName,
    reportSuiteAsScenarios:true,
    scenarioTimestamp:true,
    theme:"bootstrap",
    displayDuration:true,
    brandTitle:"Demo Project",
    name:"Demo Propject Report" 
};


export class Reporter{

    public static async createDirectory(dir:string)
    {
        if(!fs.existsSync(dir))
        {
           await mkdir.sync(dir);
        }
    }

    public static async createHtmlReport()
    {
        try{
            await reporter.generate(cucumberReporterOptions);
        }
        catch(err)
        {
            throw new Error("Failed to save cucumber test results in json file. "+err);
        }
    }

}