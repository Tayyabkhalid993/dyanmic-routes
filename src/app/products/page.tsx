import Link from "next/link";
import Image from "next/image";
import { product } from "@/app/components/products";

export default function Products() {
  return (
    <div>
      <div>
        {product.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
              <Image
                src={product.image}
                width={300}
                height={200}
                alt="product image"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            
              <br />
              <br />
          </Link>
        ))}
      </div>
    </div>
  );
}
