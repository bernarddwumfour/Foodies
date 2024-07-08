import { NextResponse } from "next/server"

type user = {email?:String,password?:string}

export async  function POST(request:Request){

    let {email,password}:user = await request.json()
    
    if(!(email && password)){
        return NextResponse.json({error:"Please enter the user details"})
    }
    return NextResponse.json({email,password})

} 