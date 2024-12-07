interface ProductInterface {
    id: string,
    name: string,
    price:number,
    description:string,
    image:string
}


export const product:ProductInterface[] = [
    {
        id: "001",
        name: "Samsung Phone 04",
        price:1200,
        description:"This is the product of Phone",
        image:'/SamsungZFlip.PNG'
    },
    {
        id: "002",
        name: "Samsung Phone 05",
        price:1900,
        description:"This is the description of product",
        image:'/SamsungFold05.PNG'
    }
]