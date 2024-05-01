function ProductContent({ selectedProduct }) {
  return (
    <section>
      <div className="flex-1 gap-y-3 flex flex-col">
        {selectedProduct?.text2 && (
          <p className="text-grey text-justify">{selectedProduct?.text2}</p>
        )}
        {selectedProduct?.text3 && (
          <p className="text-grey text-justify">{selectedProduct?.text3}</p>
        )}
        {selectedProduct?.closureSize && (
          <>
            <h2 className="text-2xl font-bold">Closure SIZES</h2>
            <ul className="pl-5">
              {selectedProduct?.closureSize?.map((size, index) => (
                <li key={index}>{size}</li>
              ))}
            </ul>
          </>
        )}
        {selectedProduct?.availableSizes && (
          <>
            <h2 className="text-2xl font-bold">AVAILABLE SIZES</h2>
            <ul className="pl-5">
              {selectedProduct?.availableSizes?.map((size, index) => (
                <li key={index}>{size}</li>
              ))}
            </ul>
          </>
        )}
        {selectedProduct?.features && (
          <>
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="pl-5">
              {selectedProduct?.features?.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}

// export default SectionWrapper(ProductContent, "ProductContent");
export default ProductContent;
