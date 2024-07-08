import { NextResponse } from "next/server";
import { object, string, number, date, InferType } from "yup";
import * as Yup from "yup";

export async function POST(request: Request) {

  let messageSchema = object({
    name: string()
      .required()
      .min(3, "Name must have a miniumu of 3 characters"),
    email: string().required().email(),
    message: string().required().min(10,"Message Must have a minimum of 10 characters"),
      createdOn: date().default(() => new Date()),
  });

  // parse and assert validity

  type message = InferType<typeof messageSchema>;

  // let {name,price,description,image}:product = await request.json()
  let message: message = await request.json();

  try {
    // Validate params using the schema
    await messageSchema.validate(message);
    return NextResponse.json(message);
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
