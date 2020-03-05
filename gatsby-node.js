const path = require('path');
const slug = require('slug');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === `YoutubeVideo`) {
    const videoSlug = slug(node.title);
    const { createNodeField } = actions;

    createNodeField({
      node,
      name: `slug`,
      value: videoSlug,
    });
  }
};

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  });
};

/*
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allYoutubeVideo {
        edges {
          node {
            id
            publishedAt
            title
            description
            channelTitle
            privacyStatus
            thumbnail {
              url
              width
              height
            }
            videoId
          }
        }
      }
    }
  `).then(result => {
+};

    if (result.errors) {
      console.error(result.errors);
      return process.exit();
    }

  })
}
*/
