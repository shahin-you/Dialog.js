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
                                dialogWidth: "50%", 
                                dialogTop: "25%", 
                                titlebarButtons: [ShDialogToolbarButtons.close]
                            };
        //
        if (ShTools.getStyle(dialogFrameObj, 'display')!='none')
                            return;
        
    }

    static showMessage(title, message, exSettings){
        let currentSettings = exSettings || {dialogType:ShDialogTypes.info};
    }
}
