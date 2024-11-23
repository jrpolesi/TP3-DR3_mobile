import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { ProductsList } from "./components/ProductsList.jsx";

const baseUrl = "https://dfef-dmrn-tps-default-rtdb.firebaseio.com";

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
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
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ProductsList products={data} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
