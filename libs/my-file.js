import { rnd } from "../math/rnd.js";
import { inspect as check } from "util";

const defa = check({
  ["default string is an object"]: rnd().toString(),
}, false, null, true);
const parti = "partial string " + rnd().toString();

export { parti };

export default defa
