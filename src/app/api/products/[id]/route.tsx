import { NextResponse } from "next/server";

let products:product[] = [
    {
      id : 1 ,
      name : "Jollof Rice",
      price : 12 ,
      description : "Description For jollof Rice", 
      image : "food1"
    },
    {
      id : 2 ,
      name : "Plain Rice",
      price : 15 ,
      description : "Description For plain Rice", 
      image : "food2"
    },
    {
      id : 3 ,
      name : "Fried Rice",
      price : 18 ,
      description : "Description For Fried Rice", 
      image : "food3"
    },
    {
      id : 4 ,
      name : "Waakye",
      price : 21,
      description : "Description For Waakye", 
      image : "food4"
    },

  ]

export async function GET(REQUEST : Request,params:{id:string}){

    // Filter the products array to find the product with the matching ID
    // return NextResponse.json({params: params["id"]});
  const product = products.find(product => product["id"].toString() === params.id);

  if (product) {
    // Return the product if found
    return NextResponse.json({ product });
  } else {
    // Return an error message if the product is not found
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

}