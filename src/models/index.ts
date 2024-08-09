export declare class Category {
    readonly id: number;
    readonly name: string;
    readonly src: string;
    readonly subCategories : string[];
}

export declare class Product {
    readonly id: number;
    readonly image: string;
    readonly images: string[];
    readonly name: string;
    readonly miktar: string;
    readonly detay?: string;
    readonly icindekiler?: string;
    readonly alerjen_info?: string;
    readonly mensei?: string;
    readonly firma?: string;
    readonly isletmeNo?: string;
    readonly kullanim?: string;
    readonly fiyat: number;
    readonly fiyatIndirimli?: number;
    readonly besinDegeri?: string[] | {
      "Enerji (kj)": number;
      "Enerji (kcal)": number;
      "Şeker (g)": number;
      "Yağ (g)": number;
      "Doymuş yağ (g)": number;
      "Karbonhidrat (g)": number;
      "Lif (g)": number;
      "Protein (g)": number;
      "Tuz (g)": number;
    };
}

export interface CartItem {
    id: number;
    name: string;
    price: number;
    count: number;
  }
  