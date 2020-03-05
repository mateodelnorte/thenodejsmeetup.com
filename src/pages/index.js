import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        The Node.js Meetup | ATX & NYC.
      </Title>
    </Box>
    <Gallery items={data.allYoutubeVideo.edges} />
    <div style={{ height: '1vh' }} />
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query {
    allYoutubeVideo {
      edges {
        node {
          fields {
            slug
          }
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
`;
