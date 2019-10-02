const path = require('path');
const getMarkdownInDirectory = require('utilities/markdown');
const cwd = process.cwd()

const posts = getMarkdownInDirectory(path.join(cwd, 'posts/'));

posts.forEach(post => {
   post.html = post.html.replace(/^\t{3}/gm, '');
});

posts.sort((a, b) => {
   return new Date(b.date) - new Date(a.date);
});

export default new Map(posts.map(post => [post.slug, post]));