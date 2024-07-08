import { NextResponse } from "next/server";

type message = { name :string , email : string , message  :string}
let messsages :message[] = [
  {
    name : "message1",
    email : "bernard@gmail.com" ,
    message : "Description For message", 
  },
 
  {
    name : "message2",
    email : "bernard@gmail.com" ,
    message : "Description For message", 
  },
 
  {
    name : "message3",
    email : "bernard@gmail.com" ,
    message : "Description For message", 
  },
 

]
export async function GET(){
  return NextResponse.json(messsages)
}