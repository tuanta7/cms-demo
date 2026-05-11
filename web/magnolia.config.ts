import { MagnoliaConfig } from "@magnolia/react-editor";
import { Footer, Code } from "@/components";
import { HomePage, PlayersPage } from "@/templates/pages";

const config: MagnoliaConfig = {
  componentMappings: {
    "manutd-lm:pages/home": HomePage,
    "manutd-lm:pages/players": PlayersPage,

    "manutd-lm:components/code": Code,
    "manutd-lm:components/footer": Footer,
  },
};

export default config;
