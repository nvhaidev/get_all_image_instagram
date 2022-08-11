const fs = require("fs");
const path = require("path");
function parse(data) {
    if (typeof data === "object") {
        return data;
    }
    if (typeof data === "string") {
        return JSON.parse(data);
    }
}
function read(file) {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            return data;
        }
    });
}

const main = async () => {
    const json = [];
    const data = [];
    const jsonDataPath = path.join(process.cwd(), "./data.json");
    const jsonParse = parse(require(jsonDataPath));

    await jsonParse.forEach((value, keys) => {
        value.forEach((val, index) => {
            json.push(val);
        });
    });
    const uniqueChars = [...new Set(json)];

    await uniqueChars.forEach((val, key) => {
        data.push(val);
    });

    fs.writeFileSync(
        path.join(process.cwd(), "./done.json"),
        JSON.stringify(data)
    );
};

main().catch(console.error);
