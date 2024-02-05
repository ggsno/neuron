import { HttpStatusCode } from "axios";
import { HttpResponse, http } from "msw";

const textNodes = [{ id: "0", content: "root" }];

const createId = () => {
  if (textNodes.length === 0) return "0";
  return Number(textNodes[textNodes.length - 1].id) + 1 + "";
};

export const handlers = [
  http.get(`${import.meta.env.VITE_BACKEND_URL}/api/text-nodes`, () => {
    return HttpResponse.json(textNodes);
  }),

  http.post<Record<string, never>, { content: string }>(
    `${import.meta.env.VITE_BACKEND_URL}/api/text-nodes`,
    async ({ request }) => {
      const { content } = await request.json();
      textNodes.push({ id: createId(), content });
      return new HttpResponse(null, {
        status: HttpStatusCode.Created,
      });
    }
  ),
];
