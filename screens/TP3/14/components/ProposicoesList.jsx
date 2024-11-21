import { ActivityIndicator, FlatList } from "react-native";
import { Proposicao } from "./Proposicao";

export function ProposicoesList({
  data,
  isLoading,
  isRefreshing,
  fetchNextPage,
  hasNextPage,
  refreshData,
  onUserOpinion,
}) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return (
          <Proposicao
            key={item.id}
            proposicao={item}
            onUserOpinion={
              onUserOpinion ? (agree) => onUserOpinion(item, agree) : undefined
            }
          />
        );
      }}
      onEndReached={() => {
        hasNextPage && fetchNextPage?.();
      }}
      ListFooterComponent={!!isLoading && ActivityIndicator}
      refreshing={!!isRefreshing}
      onRefresh={() => refreshData?.()}
    />
  );
}
