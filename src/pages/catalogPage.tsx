import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Loader } from "../components/Loader";
import Products from "../components/Products";
import { Heading2 } from "../components/Typography";

interface Product {
  id: string;
  name: string;
  price: number;
  catygory: string;
}

const CatalogPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategories.length === 0 || selectedCategories.includes(product.catygory);

  const matchesSearch =
    product.name.toLowerCase().startsWith(search.toLowerCase());

  return matchesCategory && matchesSearch;
});


  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const uniqueCategories = [...new Set(products.map((p) => p.catygory))];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="max-w-10xl mx-auto pt-10 px-4">

        <div className="mb-10 flex items-center">
          <Heading2 className="mb-3 text-2xl mr-4">Пошук</Heading2>
          <input
            type="text"
            placeholder="Введіть назву товару..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="border border-gray-300 rounded-md shadow-sm p-2 w-full "
          />
        </div>


      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-64 bg-white rounded-xl shadow-md p-4 space-y-4">
            <h2 className="text-xl font-bold">Фільтри</h2>
            <div>
              <h3 className="text-lg font-semibold mb-2">Категорії</h3>
              <div className="space-y-2">
                {uniqueCategories.map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="accent-pink-500"
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <Products products={filteredProducts} />
          </main>
        </div>
      )}
    </div> 
  );
};

export default CatalogPage;
