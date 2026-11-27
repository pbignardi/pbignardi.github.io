import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import markdownIt from "markdown-it";
import htmlmin from "html-minifier-terser";
import eleventyToc from "eleventy-plugin-toc";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import Shiki from '@shikijs/markdown-it'

export default async function(config) {
    config.setInputDirectory("src");

    // parse excerpt
    config.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!-- excerpt -->",
    });

    // passthrough
    config.addPassthroughCopy("css");
    config.addPassthroughCopy("js");
    config.addPassthroughCopy("fonts");

    // TOC plugin
    config.addPlugin(eleventyToc, {
        tags: ["h2"]
    })

    // navigation plugin
    config.addPlugin(eleventyNavigationPlugin);

    // markdown-it
    const md = markdownIt().use(markdownItAnchor, {
        levels: [1, 2],
        permalink: markdownItAnchor.permalink.ariaHidden({
            placement: 'after',
        })
    }).use(markdownItAttrs).use(await Shiki({
        themes: {
            dark: "ayu-dark",
            light: "ayu-light"
        },
        colorReplacements: {
            'ayu-dark': {
                '#0d1017': '#202020'
            }
        },
        defaultColor: false,
    }))

	config.setLibrary("md", md);


    // minify html
    config.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});

			return minified;
		}
		return content;
	});

    // set author globally
    config.addGlobalData("author", "Paolo Bignardi");
};
