type DetailProductProps = {params: {slug: string[]}};

export default function DetailProduct(props: DetailProductProps) {
    const {params} = props;
    console.log(params);
    return(
        <div>
            <h1>{params.slug ? "Detail Product" : "Product Page"}</h1>
            <>
            <p>Category: {params.slug[0]}</p>
            <p>Id: {params.slug[1]}</p></>
        </div>
    )
}