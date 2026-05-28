import ProductCard from "@/components/modules/Products/ProductCard";
import { getAllProducts } from "@/src/service/products";

const page = async () => {
    const {data} = await getAllProducts()
    console.log("products:", data);
    return (
        <div className="grid grid-cols-4 gap-5">
            {data.map((product:any) => (
                <ProductCard key={product._id} product={product}></ProductCard>
            ))}
        </div>
    );
};

export default page;