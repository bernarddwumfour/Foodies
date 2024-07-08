import { NextResponse } from "next/server"
import { object, string, number, date, InferType, array } from "yup";


let orderSchema = object({
    user: object({
        id : string().required(),
        name : string().required(),
        email : string().required()
    }).required(),
    products : array(
        object({
            id : number().required(),
            name : string().required(),
            price : number().required(),
            description : string().required(),
            image : string().required()
        })
    ).required(),
  });

  // parse and assert validity

  type order = InferType<typeof orderSchema>;

export async function POST(request:Request){
    let order:order = await request.json()

    if(!order.user.id && !(order.products.length > 0)){
        return NextResponse.json("Unable to place order , Please make sure you are logged in and the cart is not empty")

    }

    else{
        // validate and place add here
    }
}

