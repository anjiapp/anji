
import fs from "fs";
import bodyParser from "body-parser";
import express from "express";
import compression from "compression";
import path from 'path';
import { fileURLToPath } from 'url';

//import { User } from "./users.js";

global.HOST = "localhost:8080";
global.VERSION = "0.0.1";
global.MAX_WORLD_LIMIT = 200;


const app = express();

export default app;