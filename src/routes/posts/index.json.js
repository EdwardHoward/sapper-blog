import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
      title: post.title,
      subtitle: post.subtitle,
      date: post.date,
		slug: post.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}