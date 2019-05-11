export class Research {
  id: number;
  name: string;
  video:string;
  category:string;
  details:string;
  lab:string;
}

export class Donation {
  
  public donorName: string;
  public email: string;
  public amount: number;
  public phone: string;
  public rersearchId: string;
  public category: string;
  public captcha: string;
  public creditName: string; 
  public creditNum: string;
  public expYear:string;
  public expMonth:string;
  public SecurityCode:number;
  public BillingAddress:string;
}