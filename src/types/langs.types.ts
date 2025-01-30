export interface IWidth {
  mobile: number;
  desk: number;
}

export interface ILangData {
  name: string;
  width: IWidth;
}

export interface ILangs {
  ua: ILangData;
  eng: ILangData;
  de: ILangData;
}
