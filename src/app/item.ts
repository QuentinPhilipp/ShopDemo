
export class Item {
  id : number;
  name : string;
  price : number;
  desc : string;
  photos : string[];

  constructor(_id:number,_name:string,_price:number,_desc:string,_photos:string[]) {
    this.id = _id;
    this.name = _name;
    this.price = _price;
    this.desc = _desc;
    this.photos = _photos;
  }
}
