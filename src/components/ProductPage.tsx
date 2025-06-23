import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface Product {
    id: string;
    name: string;
    price: number;
    catygory: string;
    description?: string;
}

    const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, 'products', id!);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() } as Product);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Завантаження товару...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8 pt-10">
  {/* ЛІВА КОЛОНКА: КАРТИНКА + КНОПКИ */}
  <div className="flex flex-col items-center">
    <img
      src='/images/religion.png'
      alt={product.name}
      className="w-60 h-60 rounded-xl shadow-md object-cover"
    />

    <div className="flex gap-4 mt-6">
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Додати в кошик
      </button>
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Обчислити бісер
      </button>
    </div>
  </div>

  {/* ПРАВА КОЛОНКА: ІНФОРМАЦІЯ */}
  <div className="flex flex-col justify-center">
    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
    <p className="text-pink-600 text-xl font-semibold mb-2">{product.price}$</p>
    <p className="text-sm text-gray-500 mb-4">Категорія: {product.catygory}</p>
    <p className="text-base text-gray-700">{product.description}</p>
  </div>
</div>

  );
};

export default ProductPage;


