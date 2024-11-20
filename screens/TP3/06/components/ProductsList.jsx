import { FlatList } from "react-native";
import { ProductCard } from "./ProductCard";

export function ProductsList({ products }) {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard key={item.id} {...item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
