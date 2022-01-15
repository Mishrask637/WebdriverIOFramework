import { Element } from 'webdriverio';
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
            console.log("Alert Not Present");
            await log.info('Alert Not Present');
        }
    }
    catch(error)
    {
        console.log("Alert Not Present");
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
            console.log("Alert Not Present");
            await log.info('Alert Not Present');
        }
    }
    catch(error)
    {
        console.log("Alert Not Present");
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
        await log.info('Clicked on element '+element.toString());
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
            console.log("Tab switched");
            await log.info('Tab switched');
        }
        else{
            console.log("Did not swicth to any tab");
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
            console.log("Window of "+i +"= "+await totalWindows[i])
            if(currentWindow !== await totalWindows[i])
            {
                console.log("I Value is "+i);
                await browser.switchToWindow(totalWindows[i]);
                await log.info('Switched to window '+totalWindows[i]);
                await log.info('Window Title is '+ await browser.getTitle());
                tabSwitched=true;
                break;
            }
        }
        if(tabSwitched)
        {
            console.log("Tab switched");
            await log.info('Tab switched');
        }
        else{
            console.log("Did not swicth to any tab");
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
            console.log("Tab switched");
            await log.info('Tab switched');
        }
        else{
            console.log("Did not swicth to any tab");
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
            console.log("Tab switched");
            await log.info('Tab switched');
        }
        else{
            console.log("Did not swicth to any tab");
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
      }

      static async scrollIntoView(element)
      {
        await element.scrollIntoView();
      }

      static async moveToAndClick(element)
      {
        await element.moveTo().click();
      }
}