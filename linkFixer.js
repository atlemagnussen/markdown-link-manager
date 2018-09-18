const Absolute = 1; // /absolute/path
const Relative = 2; // ./relative/path
const AbsoluteMd = 3; // /absolute/path.md
const RelativeMd = 4; // ./relative/path.md
const ValidTypes = [Absolute, Relative, AbsoluteMd, RelativeMd];

class LinkFixer {
    constructor(tree, linkType) {
        this.tree = tree;
        if (!ValidTypes.includes(linkType)) {
            throw new Error(`Invalid linktype, valid types are: ${ValidTypes.join(', ')}`);
        }
        this.type = linkType;
    }

    getLink(current) {
        const currentObj = this.parseLink(current);
        console.log(currentObj);
    }

    parseLink(link) {
        return {
            "name": link,
            "dir": ""
        };
    }
}

module.exports = LinkFixer;
