import { NextRequest, NextResponse } from "next/server"
import { readFileSync } from 'fs'
// import main from "../../../about/personal/main.md"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    let directory = searchParams.get('dir');

    if (!directory) {
        return NextResponse.json({error: "missed required fields", status: 400});
    }

    const dir_link = `${process.cwd()}/about/${directory}`
    console.log(dir_link)

    try {
        const data = readFileSync(dir_link, 'utf8');
        return NextResponse.json({status: 200, data: data});
    } catch (error) {
        return NextResponse.json({status: 400, error: error});
    }

    
    

    // return NextResponse.json({status: 200, data: fileData});
}