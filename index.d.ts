declare module "util" {
  function formatDate(date: Date | number, formatter: string): string;
  namespace formatDate {}
  function getQueryParameter(name: string): string;
  namespace getQueryParameter {}
  function delParamsUrl(url: string, name: string): string;
  namespace delParamsUrl {}
  function selectText(element: any): void;
  namespace selectText {}
  function dataType(data: any): string;
  namespace dataType {}
  function ArrFlatSort(arr: Array<any>): Array<any>;
  namespace ArrFlatSort {}
  function destructuringArray(
    arr: Array<any>,
    str: string
  ): { [key: string]: string };
  namespace destructuringArray {}
  function convert(str: string, mark: string): string;
  namespace convert {}
}
