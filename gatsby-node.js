var fs = require('fs');
var dir = './.cache/caches/gatsby-source-prismic';

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const homepage = await graphql(`
    {
      allPrismicHomepage {
        nodes {
          id
          lang
          type
          url
        }
      }
    }
  `);

  homepage.data.allPrismicHomepage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/pages/Home.js'),
      context: { ...page },
    });
  });

  const blogpost = await graphql(`
    {
      allPrismicBlogpost {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `);

  blogpost.data.allPrismicBlogpost.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/pages/Post.js'),
      context: { ...page },
    });
  });

  const blog = await graphql(`
    {
      allPrismicBlog {
        nodes {
          id
          lang
          type
          url
        }
      }
    }
  `);

  blog.data.allPrismicBlog.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/pages/BlogPage.js'),
      context: { ...page },
    });
  });
};
