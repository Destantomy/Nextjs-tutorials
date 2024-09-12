import DetailProduct from "@/app/product/[...slug]/page";
import { NextResponse } from "next/server";

const data = [
    {
        id: 1,
        name: 't-shirt',
        price: 120000
    },
    {
        id: 2,
        name: 'hoodie',
        price: 150000
    },
    {
        id: 3,
        name: 'sweater',
        price: 130000
    },
];

export async function GET(request: NextResponse) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    // console.log(id);
    if(id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if(detailProduct) {
            return NextResponse.json({
            status: 200,
            message: 'success',
            data: detailProduct,
        });
    }
        return NextResponse.json({
        status: 404,
        message: 'not found',
        data: '🖕🏻',
        });
        
    }
    return NextResponse.json({status: 200, message: 'succes', data: data});
}