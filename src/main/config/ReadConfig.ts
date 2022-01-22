import {baseUrl,database,dbhostname,dbusername,dbpassword,appUsername,appPassword} from './wdio.conf'

// import {vars} from './wdio.conf'



export class ReadConfig{

    async getdbUsername()
    {
        return await dbusername;
    }

    async getdbPassword()
    {
        return await dbpassword;
    }

    async getdatabase()
    {
        return await database;
    }

    async getdbHostname()
    {
        return await dbhostname;
    }

    async getbaseUrl()
    {
        return await baseUrl;
    }

    async getAppUsername()
    {
        return await appUsername;
    }

    async getAppPassword()
    {
        return await appPassword;
    }

}