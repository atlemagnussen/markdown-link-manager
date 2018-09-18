const assert = require('assert').strict;
const LinkFixer = require('../linkFixer');

describe('parseLink', () => {
    const lf = new LinkFixer([], 1);
    it('should return "melk" when input "melk (3dl)"', () => {
        const expected = {"name": "about", "dir": ""};
        const output = lf.parseLink("./about");
        assert.deepStrictEqual(output, expected);
    });

});
