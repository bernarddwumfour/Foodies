import { NextResponse } from "next/server";
import { object, string, number, date, InferType } from "yup";
import * as Yup from "yup";

export async function POST(request: Request) {

  let productSchema = object({
    name: string()
      .required()
      .min(3, "Name must have a miniumu of 3 characters"),
    price: number().required().positive().integer(),
    description: string().required().min(10,"Description Must have a minimum of 10 characters"),
    image: string(),
      createdOn: date().default(() => new Date()),
  });

  // parse and assert validity

  type product = InferType<typeof productSchema>;

  // let {name,price,description,image}:product = await request.json()
  let product: product = await request.json();

  try {
    // Validate params using the schema
    await productSchema.validate(product);
    return NextResponse.json(product);
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      // Return validation errors
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    } else {
      // Handle other errors
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }
  }
}
