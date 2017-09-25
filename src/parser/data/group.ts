
export class GroupType {
    static readonly VARIABLES:string = "Variables";
    static readonly FUNCTIONS:string = "Functions";
    static readonly CONSTANTS:string = "Constants";
    static readonly GET_SET:string = "Get/Set";
}

export class Group {
    private _title:string;
    private _data:Array<GroupItem>;
    
    constructor(id:string) {
        this._title = id;
    }

    public get title() : string {
        return this.title;
    }
    
    public get itemsCount() : number {
        return this._data.length;
    }
    
    getItem(id:number) : GroupItem {
        return id >= this.itemsCount ? null : this._data[id];
    }

    addItem(item:GroupItem):void {
        this._data.push(item);
    }
}

export class GroupItem {
    private _icon:string;
    private _title:string;
    private _line:number;

    constructor(title:string, line:number, icon:string = '') {
        this._title = title;
        this._line = line;
        this._icon = icon;
    }
    
    public get title() : string {
        return this._title;
    }
    
    public get line() : number {
        return this._line;
    }
    
    public get icon() : string {
        return this._icon;
    }
    
    setIcon(i:string):void {
        this._icon = i;
    }
}