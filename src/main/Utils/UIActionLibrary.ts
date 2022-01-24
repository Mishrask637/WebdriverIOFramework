// import { DataTable } from '@wdio/cucumber-framework/node_modules/@cucumber/cucumber';
import { DataTable } from '@cucumber/cucumber';
import  {log}  from '../Logger/logger';

export class UIActionLibrary{

    static async acceptAlert()
    {
    try{
        if(await UIActionLibrary.isAlertPresent())
        {
           await browser.acceptAlert();
           await log.info('Accepted the alert')
        }
        else{
            await log.info('Alert Not Present');
        }
    }
    catch(error)
    {
        await log.info('Alert Not Present');
    }
    }

    static async rejectAlert()
    {
    try{    
        if(await UIActionLibrary.isAlertPresent())
        {
           await browser.dismissAlert();
           await log.info('Alert Dismissed')
        }
        else{
            await log.info('Alert Not Present');
        }
    }
    catch(error)
    {
        await log.info('Alert Not Present');
    }
    }

    static async getAlertText()
    {
        let alertText = '';
        let userId = '';
        if(await UIActionLibrary.isAlertPresent())
        {
            alertText = await browser.getAlertText();
            userId = await alertText.substring(alertText.indexOf(":")+1,alertText.length);
        }
        await browser.pause(1000);
        return userId;
    }

    static async setAlertText(text)
    {
        if(await UIActionLibrary.isAlertPresent())
        {
            await browser.sendAlertText(text);
        }
        await log.info('Alert text set to '+text);
        await browser.pause(1000);
    }

    static async click(element)
    {
        await element.click();
        await log.info('Clicked on element '+await element.toString());
    }

    static async sendKeys(element,value)
    {
        await element.setValue(value);
        await log.info('Value '+value+' set successfully');
    }

    static async clearAndSendKeys(element,value)
    {
        await element.clear();
        await log.info('Text Field cleared successfully');
        await element.setValue(value);
        await log.info('Value '+value+'set successfully');
    }

    static async clear(element)
    {
        await element.clear();
        await log.info('Text Field cleared successfully');
    }

    static async swicthTabUsingElement(element)
    {
        let tabSwitched = false;
        let currentWindow = await browser.getWindowHandle();
        await log.info('Current window handle is '+currentWindow);
        await UIActionLibrary.click(element);
        let totalWindows = await browser.getWindowHandles();
        await log.info('Total available windows are '+totalWindows);
        for(let i=0;i<totalWindows.length;i++)
        {
            if(currentWindow!==await totalWindows[1])
            {
                await browser.switchToWindow(totalWindows[i]);
                await log.info('Switched to window '+totalWindows[i]);
                await log.info('Window Title is '+ await browser.getTitle());
                tabSwitched=true;
                break;
            }
        }
        if(tabSwitched)
        {
            await log.info('Tab switched');
        }
        else{
            await log.info('Did not swicth to any tab');
        }
    }

    static async swicthTab()
    {
        let tabSwitched = false;
        let currentWindow = await browser.getWindowHandle();
        await log.info('Current window handle is '+currentWindow);
        let totalWindows = await browser.getWindowHandles();
        await log.info('Total available windows are '+totalWindows);
        for(let i=0;i<totalWindows.length;i++)
        {
            log.info("Window of "+i +"= "+await totalWindows[i])
            if(currentWindow !== await totalWindows[i])
            {
                log.info("I Value is "+i);
                await browser.switchToWindow(totalWindows[i]);
                await log.info('Switched to window '+totalWindows[i]);
                await log.info('Window Title is '+ await browser.getTitle());
                tabSwitched=true;
                break;
            }
        }
        if(tabSwitched)
        {
            await log.info('Tab switched');
        }
        else{
            await log.info('Did not swicth to any tab');
        }
    }

    static async swicthToNTab(index)
    {
        let tabSwitched = false;
        let currentWindow = await browser.getWindowHandle();
        await log.info('Current window handle is '+currentWindow);
        let totalWindows = await browser.getWindowHandles();
        await log.info('Total available windows are '+totalWindows);

        for(let i=0;i<totalWindows.length;i++)
        {
            if(currentWindow!==totalWindows[i] && index === i)
            {
                await browser.switchToWindow(totalWindows[i]);
                await log.info('Switched to window '+totalWindows[i]);
                await log.info('Window Title is '+ await browser.getTitle());
                tabSwitched=true;
                break;
            }
        }
        if(tabSwitched)
        {
            await log.info('Tab switched');
        }
        else{
            await log.info('Did not swicth to any tab');
        }
    }

    static async swicthToTabUsingTitle(title)
    {
        let tabSwitched = false;
        let currentWindow = await browser.getWindowHandle();
        await log.info('Current window handle is '+currentWindow);
        let totalWindows = await browser.getWindowHandles();
        await log.info('Total available windows are '+totalWindows);

        for(let i=0;i<totalWindows.length;i++)
        {
            if(currentWindow!==totalWindows[i])
            {
                await browser.switchToWindow(totalWindows[i]);
                if(browser.getTitle()===title ||  (await browser.getTitle()).includes(title))
                {
                    await log.info('Switched to window '+totalWindows[i]);
                    await log.info('Window Title is '+ await browser.getTitle());
                    tabSwitched=true;
                    break;
                }
                else{
                    currentWindow = await browser.getWindowHandle();
                    continue;
                }
            }
        }
        if(tabSwitched)
        {
            await log.info('Tab switched');
        }
        else{
            await log.info('Did not swicth to any tab');
        }
    }

    static async isAlertPresent() {
        return async function() {
          try {
            await this.getAlertText();
            return true;
          } catch (error) {
            if (error.name === 'no such alert') {
              return false;
            } else {
              throw error;
            }
          }
        };
      }

      static async moveTo(element)
      {
        await element.moveTo();
        await log.info("Moved to element "+await element.toString());
      }

      static async scrollIntoView(element)
      {
        await element.scrollIntoView();
        await log.info("Scrolled to element "+await element.toString());
      }

      static async moveToAndClick(element)
      {
        await element.moveTo().click();
        await log.info("Moved and clicked on element "+await element.toString())
      }

      static async hashes(datatable:DataTable)
      { 
        return await datatable.hashes();
      }

      static async rowsHash(datatable:DataTable)
      { 
        return await datatable.rowsHash();
      }

      static async rows(datatable:DataTable)
      { 
        return await datatable.rows();
      }

      static async raw(datatable:DataTable)
      { 
        return await datatable.raw();
      }

      static async transpose(datatable:DataTable)
      {
        return await datatable.transpose();
      }
}