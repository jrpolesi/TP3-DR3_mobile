import { StyleSheet, View } from "react-native";
import { ProposicoesList } from "../components/ProposicoesList.jsx";

export function Home({ data, isLoading, fetchNextPage, hasNextPage }) {
  return (
    <View style={styles.container}>
      <ProposicoesList
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
