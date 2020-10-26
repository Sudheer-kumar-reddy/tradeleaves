export class ProductList {
    public productName: string;
    public attributes: Attribute[];
    public image: string;
    public minOrders: string;
    public deliveryTime: string;
    public location: string;
    public productRating: string;
    public productPrice: string;

    // constructor(productName, attributes, image, minOrders, deliveryTime, location, productRating, productPrice ) {
    //     this.productName = productName;
    //     this.attributes = attributes;
    //     this.image = image;
    //     this.minOrders = minOrders;
    //     this.deliveryTime = deliveryTime;
    //     this.location = location;
    //     this.productRating = productRating;
    //     this.productPrice = productPrice;
    // }
}

export interface Attribute {
    material:string;
    color: string;
    brand: string;

}