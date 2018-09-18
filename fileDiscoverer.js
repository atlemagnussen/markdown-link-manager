const {readdir, stat} = require("fs").promises;
const path = require("path");
const ignore = ['.git', '.vscode'];

class FileDiscoverer {
    constructor(root) {
        this.root = path.normalize(root);
        this.get();
    }

    async get() {
        if (this.tree) {
            return this.tree;
        }
        this.tree = await this.recurse(this.root);
        return this.tree;
    }

    async recurse(p) {
        if (!p) {
            throw new Error("missing path!");
        }
        const tree = [];
        const content = await readdir(p);
        for (let i = 0; i < content.length; i++) {
            const name = content[i];
            if (ignore.includes(name)) {
                continue;
            }
            const fullPath = path.join(p, name);
            if ((await stat(fullPath)).isDirectory()) {
                const dir = {
                    name,
                    "path": this.stripRoot(p),
                    "isDir": true,
                };
                tree.unshift(dir);
                dir.tree = await this.recurse(fullPath);
            } else {
                const file = {
                    name,
                    "path": this.stripRoot(p),
                    "isDir": false
                };
                tree.push(file);
            }
        }
        return tree;
    }

    stripRoot(p) {
        if (p === this.root) {
            return "";
        }
        return path.relative(this.root, p);
    }
}

module.exports = FileDiscoverer;
