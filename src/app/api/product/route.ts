import DetailProduct from "@/app/product/[[...slug]]/page";
import { NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: 'YONEX ASTROX 88 D PRO',
        price: 50,
        image: 'https://www.yonex.com/media/catalog/product/3/a/3ax88d-p_076-1_02.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300'
    },
    {
        id: 2,
        title: 'YONEX ASTROX 3 DG HF',
        price: 65,
        image: 'https://www.yonex.com/media/catalog/product/a/x/ax3dg_hf.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300'
    },
    {
        id: 3,
        title: 'YONEX ASTROX 88 S TOUR',
        price: 52,
        image: 'https://www.yonex.com/media/catalog/product/3/a/3ax88s-t_417-1_02.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300'
    },
    {
        id: 4,
        title: 'YONEX ASTROX 88 S TOUR',
        price: 52,
        image: 'https://www.yonex.com/media/catalog/product/3/a/3ax88s-t_417-1_02.png?quality=80&fit=bounds&height=300&width=240&canvas=240:300'
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