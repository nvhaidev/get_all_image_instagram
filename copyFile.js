const shell = require("shelljs");

shell.cp("-R", "./data.json", "./done.json", "build");
