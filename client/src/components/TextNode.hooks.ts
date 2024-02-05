import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { queryClient, queryKeyDict } from "../global/reactQuery";
import axios from "axios";
import { TextNode } from "./TextNode.type";

export function useTextNode() {
  const { data: textNodes, ...rest } = useSuspenseQuery({
    queryKey: [queryKeyDict.textNodes],
    queryFn: async () => {
      const res = await axios.get<TextNode[]>(
        `${import.meta.env.VITE_BACKEND_URL}/api/text-nodes`
      );
      console.log(res.data);
      return res.data;
    },
  });

  const createTextNode = useMutation({
    mutationFn: (content: string) =>
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/text-nodes`, {
        content,
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [queryKeyDict.textNodes] }),
  }).mutate;

  return { textNodes, createTextNode, ...rest };
}
