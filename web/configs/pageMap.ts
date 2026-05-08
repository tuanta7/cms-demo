import { HomePage, PlayersPage } from "@/templates/pages";

const LM_PAGE_PREFIX = "manutd-lm:pages/";

const pageMap = {
  [LM_PAGE_PREFIX + "home"]: HomePage,
  [LM_PAGE_PREFIX + "players"]: PlayersPage,
};

export default pageMap;
