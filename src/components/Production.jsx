import productList from "../lists/ProductList.jsx";
function Production() {
  return (
    <>
      <div className="flex gap-2 md:gap-5 px-5 md:px-16 mt-7">
        {productList.map((product, id) => (
          <div
            className="border-[3px] border-[rgb(38,42,58)] bg-gradient-to-b from-[#2E303C] to-[#1F202B] rounded-lg hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer relative shadow-xl shadow-black hover:border-[#c5c5c5] group"
            key={id}
          >
            <video
              src={product.video}
              autoPlay
              loop
              playsInline
              muted
              className="absolute top-0 z-0 rounded-md opacity-0 group-hover:opacity-50"
            />
            <img src={product.image} className="w-full z-[1]" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Production;
