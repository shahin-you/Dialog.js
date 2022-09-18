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

    showDialog(dialogFrameObj, exSettings){
        if (!ShTools.isDOMElement(dialogFrameObj))
            return;
        let currentSettings = exSettings || 
                            {
                                dialogType: ShDialogTypes.info, 
                                dialogWidth: '50%', 
                                dialogTop: '25%', 
                                titlebarButtons: [ShDialogToolbarButtons.close],
                                title: 'dialog',
                            };
        //
        if (ShTools.getStyle(dialogFrameObj, 'display')!='none')
            return;

        let bodyElement = document.body;
        if (!bodyElement)
            return;
        
        let backgroundShadeDiv = document.createElement('div');
        backgroundShadeDiv.className = 'shDialog-shade-div';
                            
        bodyElement.appendChild(backgroundShadeDiv);
    }

    static showMessage(title, message, exSettings){
        let currentSettings = exSettings || {dialogType:ShDialogTypes.info};
    }
}
