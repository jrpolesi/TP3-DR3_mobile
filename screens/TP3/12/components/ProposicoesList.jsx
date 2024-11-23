import { ActivityIndicator, FlatList } from "react-native";
import { Proposicao } from "./Proposicao.jsx";

export function ProposicoesList({
  data,
  isLoading,
  fetchNextPage,
  hasNextPage,
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
    />
  );
}
