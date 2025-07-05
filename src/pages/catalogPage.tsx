import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Loader } from '../components/Loader';
import Products from '../components/Products';

interface Product {
  id: string;
  name: string;
  price: number;
  catygory: string;
}

const CatalogPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl sm:text-3xl font-bold mb-4 text-center pt-10">Наші товари</h1>
      {loading ? (
        <Loader/>
      ) : (
        <Products products={products} />
      )}
    </div>
  );
};

export default CatalogPage;
