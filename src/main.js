import { R2 } from "./module/R2.js";
import fs from "fs";
const config = await JSON.parse(fs.readFileSync("config.json", "utf-8"));
const R2Class = new R2(config);

console.log(await R2Class.listData());