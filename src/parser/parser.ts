
export interface IParser {
    parseToJSON(lines:Array<string>):object;
}

export class ParserFactory {
    public static getParser(lanID:string) : IParser {
        switch (lanID) {
            case 'haxe' : return new HaxeParser();
        }

        return null;
    }
    
}

class BaseParser implements IParser {

    parseToJSON(lines:Array<string>):object{
        return {};
    }

    protected getSignatur(text:string):object {
        return {};
    }
}

class HaxeParser extends BaseParser {
    
    parseToJSON(lines:Array<string>):object {
        let result:object = {};

        for (var i = 0; i < lines.length; i++) {
            var line:string = lines[i];
            
            
        }

        return result;
    }

    protected getSignatur(text:string):object {
        var result:object = {};
        var index:number = text.indexOf('class');
        if(index != -1) {
            //result
        }
        return result;
    }
}

class Node {

}