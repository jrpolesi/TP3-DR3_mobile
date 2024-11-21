import { StyleSheet, View } from "react-native";
import { ProposicoesList } from "../components/ProposicoesList";

export function ActiveDemocracyList({
  data,
  isLoading,
  fetchNextPage,
  hasNextPage,
  refreshData,
  isRefreshing,
  onUserOpinion,
}) {
  return (
    <View style={styles.container}>
      <ProposicoesList
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        refreshData={refreshData}
        isRefreshing={isRefreshing}
        onUserOpinion={onUserOpinion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
