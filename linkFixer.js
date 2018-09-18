
const { writeFile } = require("fs").promises;
const fd = require('./fileDiscoverer');

const caller = async() => {
    try {
        const tree = await fd.execute('.');
        await writeFile('tree.json', JSON.stringify(tree, null, 4));
        console.log("file has been written");
    } catch (e) {
        console.error(e);
    }
};

caller();
