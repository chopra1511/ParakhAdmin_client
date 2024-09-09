import AddProductForm from "./AddProductForm";

const AddProducts = () => {
  return (
    <>
      <div className="h-full p-5">
        <div className="h-full container bg-white p-5 rounded-2xl drop-shadow-xl hide-scrollbar overflow-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-Pacifico text-[#f2707f]">Add new</h1>
            <h1 className="text-2xl font-Lemon font-bold text-center">
              Product
            </h1>
          </div>
          <AddProductForm />
        </div>
      </div>
    </>
  );
};

export default AddProducts;
