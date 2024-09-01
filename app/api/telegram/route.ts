import { NextRequest, NextResponse } from "next/server"

const tgbot = process.env.TG_BOT_KEY
const myId = process.env.TG_PERSONAL_ID

export async function POST(req: NextRequest) {
    const json = await req.json();
    console.log(json)
    const {name, email, body, date} = json;
    if (!name || !email || !body || !date) {
        return NextResponse.json({error: "missed required fields", status: 400,});
    }

    const text = `-------------------------- %0A Name: ${name}, %0A Email: ${email}, %0A Body: ${body}, %0A Sent ${date}`
    const link = `https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=${myId}&text=${text}&parse_mode=HTML`
    const tel = await fetch(link)
    const data = tel.json();
    // console.log(data);
    return NextResponse.json({data, status: 200});
}