import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { CiSearch } from "react-icons/ci";
import { selectedProduct } from "../../redux/products/product.action";
import { useNavigate } from "react-router-dom";
import { Product } from "../../redux/products/product.type";

const Search: React.FC = () => {
  const { products, loading, error } = useSelector((state: RootState) => state.product);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductClick = (item: Product): void => {
    dispatch(selectedProduct(item));
    navigate("/product-info");
    setSearchTerm("");
  };

  const searchProduct = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <div className="my-2 w-full text-black relative">
        <CiSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 p-2 border border-gray-300 rounded w-[600px] focus:outline-none"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="absolute top-12 bg-white p-2 w-[600px] text-gray-700 rounded shadow">
          Loading...
        </p>
      ) : error ? (
        <p className="absolute top-12 bg-white p-2 w-[600px] text-red-500 rounded shadow">
          Error: {error}
        </p>
      ) : (
        searchTerm && (
          <ul className="absolute top-14 bg-white w-[600px] max-h-[300px] overflow-y-auto rounded shadow">
            {searchProduct.length > 0 ? (
              searchProduct.map((product) => (
                <li
                  key={product.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium text-black">{product.name}</p>
                    <p className="text-xs text-gray-500">₹ {product.price}</p>
                  </div>
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No products found.</li>
            )}
          </ul>
        )
      )}
    </div>
  );
};

export default Search;
