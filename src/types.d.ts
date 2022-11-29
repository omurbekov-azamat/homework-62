export interface GotUniversity {
  domains: string | undefined;
  country: string;
  name: string;
  capital: string;
  flag: string;
}

export interface GotContent {
  textCss: string;
  imageCss: string;
  imageUrl: string;
}

export interface GotCountry {
  capital: string;
  flag: string;
}

export interface GotUser {
  name: string;
  number: string;
  email: string;
}

export interface Data{
  _id?: string,
  message: string,
  author: string,
  datetime?: string,
}

export interface CustomerMenu {
  name: string;
  price: number;
  image: string;
  count: number;
  id: number;
}