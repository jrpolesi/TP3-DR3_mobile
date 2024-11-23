import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ListActions, SORT_VALUES } from "./ListActions.jsx";
import { ProductCard } from "./ProductCard.jsx";

export function ProductsList({ products }) {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filteredAndSortedProducts = filterAndSortProducts(products, {
    filter,
    sort,
  });

  return (
    <View style={styles.container}>
      <ListActions
        filter={filter}
        onChangeFilter={setFilter}
        sort={sort}
        onChangeSort={setSort}
      />
      <FlatList
        data={filteredAndSortedProducts}
        renderItem={({ item }) => <ProductCard key={item.id} {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    flex: 1,
  },
});

function filterAndSortProducts(products, options) {
  const { filter, sort } = options;

  const filteredProducts = !!filter
    ? filterProducts(products, filter)
    : products;
  return !!sort ? sortProducts(filteredProducts, sort) : filteredProducts;
}

function filterProducts(products, filter) {
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.description.toLowerCase().includes(filter.toLowerCase())
  );
}

function sortProducts(products, sort) {
  if (sort === SORT_VALUES.none) {
    return products;
  }

  return [...products].sort((a, b) => {
    if (sort === SORT_VALUES.nameAsc) {
      return a.name.localeCompare(b.name);
    }

    if (sort === SORT_VALUES.nameDesc) {
      return b.name.localeCompare(a.name);
    }

    if (sort === SORT_VALUES.priceAsc) {
      return a.price - b.price;
    }

    if (sort === SORT_VALUES.priceDesc) {
      return b.price - a.price;
    }

    return 0;
  });
}
