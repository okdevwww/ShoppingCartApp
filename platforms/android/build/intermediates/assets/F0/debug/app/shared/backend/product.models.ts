
export enum condimentOperation {
    none,
    optional,
    force
}

export class product {
    productId: string;
    condiment: condimentOperation;
    label: string;
    detail: string;
    price: number;

}

export class productGroup {
    productGroupId: string;
    icon: string;
    label: string;
    products: product[];
}


export class condiment {
    productId: string;
    label: string;
    price: number;

}

export class condimentGroup {
    label: string; // eg REMOVE, EXTRAS
    condiments: condiment[];

}

export class specialGroupSelection {
    products: product[];
    selected: product;
}

export class specialProduct {
    products: specialGroupSelection[];
    comesWith: string[];
}


export class cartProductLine {
    productId: string;
    label: string;
    price: number;
}

export class cartTransaction {
    products: cartProductLine[];
    totalPrice: number;
}
