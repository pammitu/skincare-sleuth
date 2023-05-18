import React from "react";
import { getProductsData } from "../services/apiService";


const IngredientsPage = () => {
    const [products, setProducts] = useState([]);
    const [search, getSearch] = useState('');

    const fetchData = async () => {
        const data = await getProductsData(search);
        setProducts(data.products);
    }

    useEffect(() => {
        if (search !== '') {
            fetchData();
        }
    }, [search]);

    return (
        <div>
            <h1>Ingreient Page</h1>
            <p>This is the ingredient page </p>
            <input
                type="text"
                placeholder="search.."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.product_name}</h2>
                    <p>{product.ingredients_text}</p>
                    </div>
            ))}
        </div>
    );
}

export default IngredientsPage;