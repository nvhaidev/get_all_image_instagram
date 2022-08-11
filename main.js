const jsonData = require("./data.json");
const fs = require("fs");

function parse(data) {
    if (typeof data === "object") {
        return data;
    }
    return JSON.parse(data);
}

const main = async () => {
    const json = [];
    const data = [];

    const jsonParse = parse(jsonData);

    await jsonParse.forEach((value, keys) => {
        value.forEach((val, index) => {
            json.push(val);
        });
    });

    const uniqueChars = [...new Set(json)];

    await uniqueChars.forEach((val, key) => {
        data.push(val);
    });

    fs.writeFileSync("./done.json", JSON.stringify(data));
};

main().catch(console.error);
