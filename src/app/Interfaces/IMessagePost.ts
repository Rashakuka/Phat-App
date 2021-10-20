export interface IMessagePost {
  name: string,
  text: string,
  ammount: string,
  currency: string,
  orderId: string,
  user: IUser
}

interface IUser {
  address:string,
  email:string,
  payerId:string
}
