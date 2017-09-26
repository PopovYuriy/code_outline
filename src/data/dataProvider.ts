import * as parser from '../parser/parser';
import  * as group from "./group";

class DataProvider {
    private static _instance:DataProvider;

    private _currentParser:parser.IParser;

    private _groups:Array<group.Group>;

    constructor() {
        if(DataProvider._instance != null) {
            throw "DataProvider instance has already created. Use DataProvider.getInstance().";
        }
    }
    
    
    public static getInstance():DataProvider {
        if(DataProvider._instance != null) {
            return DataProvider._instance;
        }else {
            return new DataProvider();
        }
    }

    public init(languageId:string, text:Array<string>) {
        
        this._currentParser = parser.ParserFactory.getParser(languageId);
        
        if(this._currentParser == null)  throw "Current programming language is not available.";

        let jsonData:object = this._currentParser.parseToJSON(text);
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
}
