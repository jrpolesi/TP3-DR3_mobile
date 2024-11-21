import { useCallback, useEffect, useState } from "react";

const BASE_URL = "https://dadosabertos.camara.leg.br/api/v2";

export function useQueryProposicoes() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(
    () => `${BASE_URL}/proposicoes?pagina=1&itens=10`
  );

  const fetchNextPage = useCallback(async () => {
    if (!nextPage || isLoading) {
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(nextPage);
      const data = await res.json();

      const next = data.links.find((link) => link.rel === "next");

      setNextPage(next?.href ?? null);

      setData((prev) => (data.dados ? [...prev, ...data.dados] : prev));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [nextPage, isLoading]);

  useEffect(() => {
    if (data.length === 0) {
      fetchNextPage();
    }
  }, [fetchNextPage]);

  return {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage: !!nextPage,
  };
}
