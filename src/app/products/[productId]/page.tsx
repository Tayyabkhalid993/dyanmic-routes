import { product } from "@/app/components/products"; // Adjust the path as necessary
import Image from "next/image";

export default function ProductDetail({params}: {params: { productId: string };}) {
  
    const selectedProduct = product.find((p) => p.id === params.productId);

  if (!selectedProduct) {
    return <p>Product not found!</p>; // Handle case where product is not found
  }

  return (
    <div>
      <h1>{selectedProduct.name}</h1>
      <Image
        src={selectedProduct.image}
        width={500}
        height={400}
        alt={selectedProduct.name}
      />
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
    </div>
  );
}
