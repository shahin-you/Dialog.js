import {ShTools} from './ShTools'
import {ShDialogTypes} from './ShDialogEnums';
import {ShDialogToolbarButtons} from './ShDialogEnums';

class ShDialog{
    #dialogID = ``;

    constructor(settings){
        let currentSettings = settings || {};
        //set dialogID
        //  if is provided and unique then use the provided id otherwise, create a unique id
        this.#dialogID = ('dialogID' in currentSettings) && 
                         (ShTools.isUniqueID(currentSettings.dialogID)) ?
                         currentSettings.dialogID : `ShDialogID_${Date.now().toString(36) + Math.random().toString(36).substring(2)}`;
    }

    closeDialog(){
        let shadow = document.getElementsByClassName('shDialog-shade-div');
        let body = document.getElementById(this.#dialogID);
        if (shadow)
            shadow.remove();
        if (body)
            body.remove();
    }

    #createTitlebar(settings){
        if (!settings)
            return;
        let titleFrame = document.createElement('div');
        //titleFrame.classList.add(settings.dialogType.getCSS());
        let titlebarButtonsArea = document.createElement('div');
        if (settings.titlebarButtons)
            settings.titlebarButtons.forEach(element => {
                let buttonDiv = document.createElement('div');
                buttonDiv.addEventListener('click', element.clickHandler);
                buttonDiv.classList.add(element.cssClasses);
                titleFrame.appendChild(buttonDiv);
            });
        return titleFrame;
    }

    showDialog(dialogBodyObj, exSettings){
        if (!ShTools.isDOMElement(dialogBodyObj))
            return;
        let currentSettings = exSettings || 
                            {
                                dialogDirection: 'ltr',
                                dialogType: ShDialogTypes.info, 
                                dialogWidth: '50%', 
                                dialogTop: '25%', 
                                titlebarButtons: [
                                    {
                                        buttonType:ShDialogToolbarButtons.close, 
                                        clickHandler:()=>{this.closeDialog();},
                                        cssClasses: ['sh-close-button-icon', 'sh-close-button-color'],
                                    }],
                                title: 'dialog',
                            };
        //
        //if (ShTools.getStyle(dialogFrameObj, 'display')!='none')
        //    return;

        let bodyElement = document.body;
        if (!bodyElement)
            return;
        
        let dialogFrameObj = document.createElement('div');
        dialogFrameObj.id = this.#dialogID;
        let backgroundShadeDiv = document.createElement('div');
        backgroundShadeDiv.classList.add('shDialog-shade-div'); //since this a newly created element, one can use className = 'shDialog-shade-div'
        
        dialogFrameObj.appendChild(this.#createTitlebar(currentSettings));
        dialogFrameObj.appendChild(dialogBodyObj);
        bodyElement.appendChild(backgroundShadeDiv);
        bodyElement.appendChild(dialogFrameObj);
    }

    static showMessage(title, message, exSettings){
        let currentSettings = exSettings || {dialogType:ShDialogTypes.info};

    }
}
