const fs = require('fs');
// const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');

const markdown = fs.readFileSync('README.md').toString();

const links = markdownLinkExtractor(markdown);

fs.writeFile('links.json', JSON.stringify(links, null, 4), (err) => {
    if (err) {
        console.error(err);
    }
    console.log("saved");
});
