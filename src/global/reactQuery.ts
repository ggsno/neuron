import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const queryKeyDict = {
  textNodes: "TEXT_NODES",
} as const;
