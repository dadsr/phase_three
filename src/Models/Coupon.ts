export class Coupon{
    id:number;
    title:string;
    description:string;
    companyId:string;
    category:string;
    price:string;
    amount:string;
    startDate:string;
    endDate:string;
    image:string;


    constructor(id: number, title: string, description: string, companyId: string, category: string, price: string, amount: string, startDate: string, endDate: string, image: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.companyId = companyId;
        this.category = category;
        this.price = price;
        this.amount = amount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.image = image;
    }
}