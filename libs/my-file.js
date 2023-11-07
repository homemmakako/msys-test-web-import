import { rnd } from "../math/rnd.js";
import { inspect } from "util";

const defa = inspect({
  ["default string is an object"]: rnd().toString(),
}, false, null, true);
const parti = "partial string " + rnd().toString();

export { parti };

export default defa
