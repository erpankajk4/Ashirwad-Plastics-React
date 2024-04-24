import ProductContent from "./ProductContent";
import ProductShowcase from "./ProductShowcase";

export default function ProductDetails({ selectedProduct }) {
  // console.log(selectedProduct?.images);
  return (
    <main className="w-full col-span-9 flex flex-col flex-wrap  gap-x-5">
      <ProductShowcase sliderImages={selectedProduct?.images} />
      {/* Products Details  */}
      <ProductContent selectedProduct={ selectedProduct } />
    </main>
  );
}
