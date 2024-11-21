import { ActivityIndicator, FlatList } from "react-native";
import { Proposicao } from "./Proposicao";

export function ProposicoesList({
  data,
  isLoading,
  isRefreshing,
  fetchNextPage,
  hasNextPage,
  refreshData,
}) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <Proposicao key={item.id} proposicao={item} />;
      }}
      onEndReached={() => {
        hasNextPage && fetchNextPage();
      }}
      ListFooterComponent={isLoading && ActivityIndicator}
      refreshing={isRefreshing}
      onRefresh={refreshData}
    />
  );
}
