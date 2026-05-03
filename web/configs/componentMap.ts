import { Footer, Code } from "@/components";

const LM_COMPONENT_PREFIX = "manutd-lm:components/";

const componentMap = {
  [LM_COMPONENT_PREFIX + "footer"]: Footer,
  [LM_COMPONENT_PREFIX + "code"]: Code,
};

export default componentMap;
