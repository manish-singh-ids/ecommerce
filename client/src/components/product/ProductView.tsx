import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { fetchProducts, selectedProduct } from '../../redux/products/product.action';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../redux/products/product.type';

const ProductView: React.FC = () => {
  const dispatch : any = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.product);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(Infinity);
  const productsPerPage: number = 8;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductClick = (item: Product) => {
    dispatch(selectedProduct(item));

    navigate("/product-info");
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= minPrice &&
      product.price <= maxPrice
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-20 bg-slate-900 text-center">
      <h1 className="mb-6 text-white font-semibold">{"Our Latest Products"}</h1>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <>
          <div className="flex justify-evenly items-start w-full gap-8">

            <div className="min-h-screen bg-gray-800 p-4 rounded-md text-white w-1/5">
              <h2 className="font-bold mb-4">Filters</h2>

              <div className="mb-4">
                <label htmlFor="search" className="block mb-2">Search:</label>
                <input
                  id="search"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-md text-black"
                  placeholder="Search products..."
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2">Price Range:</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : 0)}
                    className="w-1/2 px-4 py-2 rounded-md text-black"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    value={maxPrice === Infinity ? '' : maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : Infinity)}
                    className="w-1/2 px-4 py-2 rounded-md text-black"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center w-full">
              {currentProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 bg-slate-950 max-w-72 p-2 rounded-md text-white hover:cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover w-full h-64 rounded-md"
                  />
                  <div className="space-y-2 flex flex-col text-left">
                    <h2 className="font-bold mb-2">{product.name}</h2>
                    <span className="opacity-70">{product.description}</span>
                    <span className="font-bold">₹ {product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <ul className="flex justify-center space-x-2">
              {[...Array(totalPages)].map((_, pageIndex) => (
                <li key={pageIndex}>
                  <button
                    onClick={() => handlePageChange(pageIndex + 1)}
                    className={`px-4 py-2 rounded-md ${currentPage === pageIndex + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-black'
                      }`}
                  >
                    {pageIndex + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductView;
