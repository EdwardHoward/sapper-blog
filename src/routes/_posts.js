const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const marked = require('marked');

const cwd = process.cwd()
const posts = fs.readdirSync(path.join(cwd, 'src/routes/posts/'))
   .filter(filename => /\.md$/.test(filename))
   .map(filename => {
      const file = fs.readFileSync(`${path.join(cwd, 'src/routes/posts/')}${filename}`);
      const { data, content: rawContent } = matter(file);
      const { title } = data;

      const slug = filename.split('.')[0];

      const html = marked(rawContent);

      return {
         title,
         slug,
         html
      }
   });

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;