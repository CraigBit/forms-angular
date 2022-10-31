export interface ILocalItemsInside {
  id: number;
  name: string;
  glCode: number;
  amount: number | null;
  salesTax: number | null;
}

export interface ILocalItems {
  id: number;
  name: string;
  items: ILocalItemsInside[];
}

export interface ISalesTaxArray {
  id: number;
  title: string;
  value: number;
}
