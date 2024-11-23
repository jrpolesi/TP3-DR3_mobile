import { useEffect, useState } from "react";
import { View } from "react-native";
import { ProductsList } from "./components/ProductsList.jsx";

const baseUrl = "https://dfef-dmrn-tps-default-rtdb.firebaseio.com";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${baseUrl}/products.json`);
      const data = await res.json();

      const resolvedData = Object.entries(data).map(([id, value]) => ({
        id,
        description: value.descricao,
        name: value.nome,
        price: value.preco,
        image: value.imagens?.length ? value.imagens[0] : undefined,
      }));

      setData(resolvedData);
    }

    fetchData();
  }, []);

  return (
    <View>
      <ProductsList products={data} />
    </View>
  );
}
