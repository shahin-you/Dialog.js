export class ShTools{
    static isUniqueID(id){
        let owner = document.getElementById(id);
        return x==null;
    }

    static isDOMElement(obj){
        try{
            return obj instanceof Element || obj instanceof HTMLElement;
        }
        catch(o_O){
            console.log(`ShTools.isDOMElement:${o_O}`);
            return false;
        }
    }

    static hasStyle(domObject, styleName){
        if (!ShTools.isDOMElement(domObject))
            return false;
        let styleFound = Object.keys(domObject).find(p=> p.toLowerCase() == styleName.toLowerCase())
        return styleFound && domObject.style[styleName];
    }

    static getStyle(domObject, styleName){
        if (!ShTools.isDOMElement(domObject))
            return '';
        try{
            return domObject.style[styleName];
        }
        catch(o_O) { return ''; }
    }
}