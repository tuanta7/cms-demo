import { HomePage, PlayersPage } from "@/templates/pages";

const LM_PAGE_PREFIX = "manutd-lm:pages/";

export const pageMap = {
  [LM_PAGE_PREFIX]: () => HomePage,
  [LM_PAGE_PREFIX + "players"]: () => PlayersPage,
};
