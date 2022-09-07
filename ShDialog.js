import {ShTools} from './ShTools'
import {ShDialogTypes} from './ShDialogTypes';

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

    static showMessage(title, message, exSettings){
        let currentSettings = exSettings || {dialogType:ShDialogTypes.info};
    }

    get id(){ return this.#dialogID; }
}
