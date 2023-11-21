import { inspect } from "util";
import Default, { parti } from "./libs/my-file.js";

function hello (name) {
  console.log("Hello " + name + "!");
  console.log("Default import", Default);
  console.log("Partial import", parti);
}

function boot () {
  console.log("Booting addon");
}

function configure (input) {
  console.log("Configuring addon");
  console.log("Aqui", input);
  input.done();
}

export { hello, boot, configure };
