import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export default function Product() {
  // 1. Berikan nilai awal array kosong [] agar tidak error saat .map di awal
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    // 2. Alamat fetch harus ke URL API-nya, bukan ke path file sistem .ts
    fetch('/api/product')
      .then((res) => res.json())
      .then((response) => {
        // 3. Ambil properti 'data' karena API-mu membungkusnya dalam objek
        setProducts(response.data);
      })
      .catch((err) => console.error("Gagal ambil data:", err));
  }, []); // [] memastikan fetch cuma jalan 1 kali

  return (
    <div className="p-4">
      <h1>INI ADALAH PRODUCT PAGES</h1>
      {/* 4. Karena awalannya [], .map tidak akan error meski data belum datang */}
      {products.map((product: ProductType) => (
        <div key={product.id} className="border-b py-2 m-2">
          {product.name} - Rp{product.price} - Ukuran: {product.description}
        </div>
      ))}
    </div>
  );
}