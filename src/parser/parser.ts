
import  * as group from "./data/group";

export interface IParser {
    getGroups():Array<group.Group>;
    getGroupByName(name:string):group.Group;
    parse(lines:Array<string>):void;
}

export class Parser {
    public static getParser(lanID:string) : IParser {
        switch (lanID) {
            case 'hx' : return new HaxeParser();
        }

        return null;
    }
    
}

class BaseParser implements IParser {
    protected _groups:Array<group.Group>;
    
    constructor() {
        this._groups = new Array();
    }

    getGroups():Array<group.Group> {
        return this._groups;
    }

    getGroupByName(name:string):group.Group {
        for (var i = 0; i < this._groups.length; i++) {
            if(this._groups[i].title == name) return this._groups[i];
        }
        return null;
    }

    parse(lines:Array<string>):void{

    }
}

class HaxeParser extends BaseParser {
    
    parse(lines:Array<string>):void {

    }
}