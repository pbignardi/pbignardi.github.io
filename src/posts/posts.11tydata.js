export default {
    layout: "post",
    tags: ["blog_posts"],
	eleventyComputed: {
        permalink: "posts/{{page.fileSlug}}.html",
        navOptions: {
            includeSelf: true
        },
		eleventyNavigation: {
			key: (data) => data.title,
			parent: "Posts",
		},
	},
};
