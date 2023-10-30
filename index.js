  import { inspect } from "util";
  import MyFile, { parti } from "./libs/my-file.js";

  function hello (name) {
    console.log("Hello " + name + "!");
    console.log("Default import", MyFile);
    console.log("Partial import", parti);
  }

  export { hello };
