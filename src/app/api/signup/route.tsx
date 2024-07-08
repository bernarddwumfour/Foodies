import { NextResponse } from "next/server"
import { object, string, number, date, InferType } from "yup";
import * as Yup from "yup";


let users = [
  {
    firstname: "Bernard",
    surname: "Kusi",
    email:"bernard@gmail.com",
    password : "hello2000",
    password_confirmation : "hello2000"
  },
  {
    firstname: "Jennifer",
    surname: "Dwumfour",
    email:"jennifer@gmail.com",
    password : "hello2000",
    password_confirmation : "hello2000"
  },
  {
    firstname: "Gideon",
    surname: "Jesse",
    email:"gideon@gmail.com",
    password : "hello2000",
    password_confirmation : "hello2000"
  },
  {
    firstname: "Joseph",
    surname: "Agyapong",
    email:"joseph@gmail.com",
    password : "hello2000",
    password_confirmation : "hello2000"
  },
]


type user = {firstname?:string,surname?:string,email?:String,password?:string,password_confirmation?:string}

let userSchema = object({
    firstname: string()
      .required()
      .min(3, "Name must have a miniumu of 3 characters"),
    surname: string()
      .required()
      .min(3, "Name must have a miniumu of 3 characters"),
    email: string().email(),
    password: string().required().min(3,"Password Must have a minimum of 10 characters"),
      createdOn: date().default(() => new Date()),
  });

export async  function POST(request:Request){

    let user:user = await request.json()

    if(user.password !== user.password_confirmation){
        return NextResponse.json({error:"passwords do not match"})
    }

    try{
        await userSchema.validate(user)

        let dbuser = users.filter(person=>person.email == user.email)
        if(dbuser.length > 0){
          return NextResponse.json({ error:"User with this email already exists"});
        }else{
          // create new user
        }

        return NextResponse.json(user)
    }catch(error){
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