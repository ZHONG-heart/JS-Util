declare module "js-util" {
  export function formatDate(date: Date | number, formatter: string): string;
  namespace formatDate {}
  export function getQueryParameter(name: string): string;
  namespace getQueryParameter {}
  export function delParamsUrl(url: string, name: string): string;
  namespace delParamsUrl {}
  export function selectText(element: any): void;
  namespace selectText {}
  export function dataType(data: any): string;
  namespace dataType {}
  export function ArrFlatSort(arr: Array<any>): Array<any>;
  namespace ArrFlatSort {}
  export function destructuringArray(
    arr: Array<any>,
    str: string
  ): { [key: string]: string };
  namespace destructuringArray {}
  export function convert(str: string, mark: string): string;
  namespace convert {}
}
