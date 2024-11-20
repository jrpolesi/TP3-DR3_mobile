import { ActivityIndicator, FlatList } from "react-native";
import { Proposicao } from "./Proposicao";

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
        console.log("end reached", hasNextPage, fetchNextPage);
        hasNextPage && fetchNextPage();
      }}
      ListFooterComponent={isLoading && ActivityIndicator}
    />
  );
}
