import { useEffect, useMemo, useState } from "react"

export default function P2() {
    // State Variables
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");

    // useEffect
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://dummyjson.com/products?limit=194");
            const data = await response.json();
            setProducts(data.products);
        };
        getProducts();
    }, []);

    // Handler Functions
    const filteredProducts = useMemo(() => {
        return products.filter(p => 
            p.category.toLowerCase().includes(category.toLowerCase())
        );
    }, [products, category]);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q2. Build a component with a list of products (name, price, category) and a category filter input. Use useMemo to filter the list — it should only recompute when the filter or list changes.
                </h1>

                <div>
                    <input onChange={(e) => setCategory(e.target.value)} value={category} className="border p-2" type="text" placeholder="Enter Category..."/>

                    <h1 className="text-blue-800 my-4">Products :-</h1>
                    {
                        filteredProducts?.map((p) => (
                            <>
                                <h2 key={p?.id}>Product {p?.id}</h2>
                                <div>
                                    <p className="p-2 rounded bg-orange-300 my-2">Title: {p?.title}</p>
                                    <p className="p-2 rounded bg-orange-300 my-2">Price: {p?.price}</p>
                                    <p className="p-2 rounded bg-orange-300 my-2">Category: {p?.category}</p>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
};