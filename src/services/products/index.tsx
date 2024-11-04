export const getData = async (url: string) => {
    // api from fakestore
    // const res = await fetch('https://fakestoreapi.com/products', {
    //     cache: 'no-store',
    // });
    
    // local api
    const res = await fetch(url, {
        cache: 'no-store',
        next: {
            tags: ['products'],
            // revalidate: 15,
        }
    });

    if(!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}