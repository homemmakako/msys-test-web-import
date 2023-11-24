import { rnd as random } from "../math/rnd.js";
import { inspect as check } from "util";

const defa = check({
  ["default string is an object"]: random().toString(),
}, false, null, true);
const parti = "partial string " + random().toString();

export { parti };

export default defa
