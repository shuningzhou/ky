export class KyItem {
    static readonly ITEM_TPYE_TEXT : string = "item-type-text";
    static readonly ITEM_TPYE_NUMBER : string = "item-type-number";
    static readonly ITEM_TPYE_DATE : string = "item-type-date";

    itemType: string;
    valuePath: string;
    placeHolder: string;
    defaultValue: any;
    cols: number;
    rows: number;

    get ITEM_TPYE_TEXT() {
        return KyItem.ITEM_TPYE_TEXT;
    }

    get ITEM_TPYE_NUMBER() {
        return KyItem.ITEM_TPYE_NUMBER;
    }

    get ITEM_TPYE_DATE() {
        return KyItem.ITEM_TPYE_DATE;
    }

}
