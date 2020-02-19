declare class Util {
  static formatDate(date: Date | number, formatter: string): string;
  static getQueryParameter(name: string): string;
  static delParamsUrl(url: string, name: string): string;
  static selectText(element: any): void;
  static dataType(data: any): string;
  static ArrFlatSort(arr: Array<any>): Array<any>;
  static destructuringArray(
    arr: Array<any>,
    str: string
  ): { [key: string]: string };
  convert(str: string, mark: string): string;
}
if (exports) {
  exports.Util = Util;
}
