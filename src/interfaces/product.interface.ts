export interface ProductCharacteristicTypes {
    value: string;
    name: string;
}

export interface ReviewModelTypes {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}

export interface ProductModelTypes {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    description: string;
    characteristics: ProductCharacteristicTypes[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    image: string;
    initialRating: number;
    reviews: ReviewModelTypes[];
    reviewCount: number;
    reviewAvg?: number;
    advantages?: string;
    disadvantages?: string;
}