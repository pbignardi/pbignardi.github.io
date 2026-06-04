import markdownItAnchor from "markdown-it-anchor";
import markdownItAttrs from "markdown-it-attrs";
import markdownIt from "markdown-it";
import htmlmin from "html-minifier-terser";
import eleventyToc from "eleventy-plugin-toc";
import fontAwesomePlugin from "@11ty/font-awesome";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import Shiki from '@shikijs/markdown-it'

async function shikiPlugin(configuration, options) {
  const highlighter = await createHighlighter(options);
  configuration.amendLibrary("md", (library) => {
    library.set({
      highlight: (code, language) => {
        return highlighter.codeToHtml(code, {
          lang: language,
          theme: options.theme,
        });
      },
    });
  });
}

export default async function(config) {
    config.setInputDirectory("src");

    // passthrough
    config.addPassthroughCopy("css");
    config.addPassthroughCopy("fonts");

    // TOC plugin
    config.addPlugin(eleventyToc, {
        tags: ["h2"]
    })

    // navigation plugin
    config.addPlugin(eleventyNavigationPlugin);

    // font-awesome plugin
	config.addPlugin(fontAwesomePlugin);

    // markdown-it
    const md = markdownIt().use(markdownItAnchor, {
        levels: [2],
        permalink: markdownItAnchor.permalink.ariaHidden({
            placement: 'after'
        })
    }).use(markdownItAttrs).use(await Shiki({
        themes: {
            dark: "ayu-mirage",
            light: "ayu-mirage"
        }
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
