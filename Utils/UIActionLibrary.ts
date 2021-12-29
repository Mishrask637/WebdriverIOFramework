export class UIActionLibrary{

    static async acceptAlert()
    {
    try{
        if(await UIActionLibrary.isAlertPresent())
        {
           await browser.acceptAlert();
        }
        else{
            console.log("Alert Not Present");
        }
    }
    catch(error)
    {
        console.log("Alert Not Present");
    }
    }

    static async rejectAlert()
    {
    try{    
        if(await UIActionLibrary.isAlertPresent())
        {
           await browser.dismissAlert();
        }
        else{
            console.log("Alert Not Present");
        }
    }
    catch(error)
    {
        console.log("Alert Not Present");
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
        await browser.pause(1000);
    }

    static async click(element)
    {
        await element.click();
    }

    static async sendKeys(element,value)
    {
        await element.setValue(value);
    }

    static async clearAndSendKeys(element,value)
    {
        await element.clear();
        await element.setValue(value);
    }

    static async clear(element)
    {
        await element.clear();
    }

    static async swicthTab()
    {
        let tabSwitched = false;
        let currentWindow = await browser.getWindowHandle();
        let totalWindows = await browser.getWindowHandles();

        for(let i=0;i<totalWindows.length;i++)
        {
            if(currentWindow!==totalWindows[1])
            {
                await browser.switchToWindow(totalWindows[i]);
                break;
            }
        }
        if(tabSwitched)
        {
            console.log("Tab switched")
        }
        else{
            console.log("Did not swicth to any tab");
        }
    }

    static async swicthToNTab(index)
    {
        let tabSwitched = false;
        let currentWindow = await browser.getWindowHandle();
        let totalWindows = await browser.getWindowHandles();

        for(let i=0;i<totalWindows.length;i++)
        {
            if(currentWindow!==totalWindows[1] && index === i)
            {
                await browser.switchToWindow(totalWindows[i]);
                break;
            }
        }
        if(tabSwitched)
        {
            console.log("Tab switched")
        }
        else{
            console.log("Did not swicth to any tab");
        }
    }

    static async swicthToTabUsingTitle(title)
    {
        let tabSwitched = false;
        let currentWindow = await browser.getWindowHandle();

        let totalWindows = await browser.getWindowHandles();

        for(let i=0;i<totalWindows.length;i++)
        {
            if(currentWindow!==totalWindows[1])
            {
                await browser.switchToWindow(totalWindows[i]);
                if(browser.getTitle()===title)
                {
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
            console.log("Tab switched")
        }
        else{
            console.log("Did not swicth to any tab");
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
}