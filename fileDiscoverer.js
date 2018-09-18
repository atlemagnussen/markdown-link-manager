const { readdir, stat } = require("fs").promises;
const { join } = require("path");
const ignore = ['.git', '.vscode'];

class FileDiscoverer {

    async execute(path) {
        if (!path) {
            throw new Error("missing path!");
        }
        const tree = [];
        const content = await readdir(path);
        for (let i = 0; i < content.length; i++) {
            const name = content[i];
            if (ignore.includes(name)) {
                continue;
            }
            const fullPath = join(path, name);
            if ((await stat(fullPath)).isDirectory()) {
                const dir = {
                    name,
                    fullPath,
                    isDir: true,
                };
                tree.unshift(dir);
                dir.tree = await this.execute(fullPath);
            } else {
                const file = {
                    name,
                    fullPath,
                    isDir: false
                };
                tree.push(file);
            }
        }
        return tree;
    }
}

module.exports = new FileDiscoverer();