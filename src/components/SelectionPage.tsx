import Product from "./Product";
import products from "../items";
export default function SelectionPage({ category }: { category: string }) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  const productElements = filteredProducts.map((item) => {
    return <Product key={item.id} {...item} />;
  });
  return (
    <>
      <div className="products category">{productElements}</div>
    </>
  );
}
