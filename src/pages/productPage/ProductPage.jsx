import { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import SEO from "../components/seo";
import ProductAside from "./ProductAside";
import ProductDetails from "./ProductDetails";
import { products } from "../../data/productDetails";
import { Link, useParams } from "react-router-dom";

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState({});
  const { slug } = useParams();
  // console.log(slug);
  useEffect(() => {
    const product = products.find((p) => p?.slug === slug);
    // console.log(product);
    setSelectedProduct(product);
  }, [slug]);
  // console.log(selectedProduct);
  return (
    <Fragment>
      <SEO
        title="Ashirwad Plastics"
        titleTemplate={selectedProduct.title}
        description="Ashirwad Plastics – Liquid Dispensing and Packaging Solutions"
      />
      <LayoutOne>
        {/* Banner Section  */}
        <section className="w-full relative">
          <img
            src={selectedProduct.bannerImg}
            className="w-full h-[37rem] object-cover object-center"
            alt="banner image"
          />

          {/* Overlay  */}
          <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 flex items-center text-center justify-center flex-col p-5 gap-y-8">
            <h1 className="max-md:text-5xl text-7xl font-bold text-center text-white">
              {selectedProduct.title}
            </h1>
            <p className="text-xl text-white md:w-1/2">
              {selectedProduct.text1}
            </p>

            {/* BreadCrumbs  */}
            <div className=" text-white bg-white bg-opacity-30 p-3 ">
              <p className="pr-2">
                <Link className="px-2" to="/">
                  HOME
                </Link>{" "}
                &#8594;{" "}
                <Link className="px-2" to="#">
                  PRODUCTS
                </Link>{" "}
                &#8594; {`${selectedProduct?.title?.toUpperCase()}`}
              </p>
            </div>
          </div>
        </section>
        <section className="w-full grid grid-cols-12 gap-10 px-[8%] py-10">
          <ProductAside selectedProduct={selectedProduct} />
          <ProductDetails selectedProduct={selectedProduct} />
        </section>
      </LayoutOne>
    </Fragment>
  );
}
