const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

const markdown = fs.readFileSync('README.md').toString();

const links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
    console.log(link);
});
