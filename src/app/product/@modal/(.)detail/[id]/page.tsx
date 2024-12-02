import { getData } from "@/services/products";
import dynamic from "next/dynamic";
import Image from "next/image";

const Modal = dynamic(() => import('@/components/core/Modal'));

export default async function DetailProductPage(props: any) {
    const {params} = props;
    const product = await getData('http://localhost:3000/api/product/?id=' + params.id);

    return (
        <Modal>
            <Image src={product.data.image} alt="product" width={500} height={500} className="w-full object-cover aspect-square col-span-2"/>
            <div className="bg-white p-4 px-6">
                <h3>Product : {product.data.name}</h3>
                <p>Price : ${product.data.price}</p>
            </div>
        </Modal>
    );
}