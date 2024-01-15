import app from "./module/app.js/index.js";
import fs from "fs";
import https from "https";
import http from "http";
import util from "util";

const logFilePath = "latest.log";
fs.writeFileSync(logFilePath, ""); // be sure log file is empty

function createLogFunction(original) {
	return function(obj) {
		original(obj);
		fs.appendFile(logFilePath, obj.toString() + "\n", function (err) {
			if (err) {
				throw err;
			}
		});
	}
}

let _log = createLogFunction(console.log);
let _warn = createLogFunction(console.warn);
let _error = createLogFunction(console.error);

console.log = function(obj) {
	if (typeof(obj) == "object") {
		obj = util.inspect(obj, {
			"colors": true
		});
	} else if (obj === undefined) {
		obj = "undefined";
	}
	_log("[ LOG ] " + obj.toString());
}

console.debug = function(obj, userId) {
	if (typeof(obj) == "object") {
		obj = util.inspect(obj, {
			"colors": true
		});
	} else if (obj === undefined) {
		obj = "undefined";
	}
	if (userId === undefined) {
		_log("[DEBUG] " + obj.toString());
	} else {
		_log("[User " + userId + " | DEBUG] " + obj.toString());
	}
}

console.info = function(obj) {
	_log("[INFO ] " + obj.toString());
}

console.warn = function(obj) {
	_warn("[WARN ] " + obj.toString());
}

console.error = function(obj) {
	_error("[ERROR] " + obj.toString());
}




let useHttps = false;

const port = 8080;

let server = http.createServer(options, app);
server.listen(port);
console.log("The server is ready! Listening on port " + port + "...");