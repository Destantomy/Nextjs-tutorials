import { retrieveData, retrieveDataById } from "@/app/lib/firebase/service";
import DetailProduct from "@/app/product/page";
import { NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: 'Nike Mercurial Vapor 16 Elite',
        price: 248,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54449b69-7cc3-4459-b772-276fa932b9ee/ZM+VAPOR+16+ELITE+FG.png'
    },
    {
        id: 2,
        title: 'Nike Mercurial Superfly 10 Elite',
        price: 280,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5f77fa98-433d-4bd7-a762-967b6fab8f01/ZM+SUPERFLY+10+ELITE+FG.png'
    },
    {
        id: 3,
        title: 'Nike Phantom GX 2 Elite',
        price: 254,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3873d1b3-d130-4fcd-b0e7-b607d0cc7287/PHANTOM+GX+II+ELITE+FG.png'
    },
    {
        id: 4,
        title: 'Nike Phantom Luna 2 Elite',
        price: 222,
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f1026add-f08b-47d8-84cb-40a8ba1194a1/PHANTOM+LUNA+II+ELITE+FG.png'
    },
];

export async function GET(request: NextResponse) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    // console.log(id);
    if(id) {
        // const detailProduct = data.find((item) => item.id === Number(id)); //if using local array as DB
        const detailProduct = await retrieveDataById('products', id);
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

    const products = await retrieveData('products');

    return NextResponse.json({status: 200, message: 'succes', data: products});
}