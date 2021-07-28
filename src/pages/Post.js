import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Post from '@scenes/PostPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const { node: blogpostContent } = data.allPrismicBlogpost.edges[0];
  const { data: pageData } = blogpostContent;
  const { metatitle, metadescription, canonical } = pageData;

  return (
    <Layout
      metadescription={metadescription}
      canonical={canonical}
      metatitle={metatitle}
    >
      <Post content={pageData} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query($uid: String) {
    allPrismicBlogpost(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          lang
          id
          type
          alternate_languages {
            id
            lang
            type
            uid
          }
          data {
            author {
              text
            }
            canonical {
              text
            }
            date
            metadescription {
              text
            }
            metatitle {
              text
            }
            cover {
              alt
              url
              gatsbyImageData(layout: FIXED, placeholder: BLURRED)
            }
            postcontent {
              raw
            }
            posttitle {
              raw
            }
          }
        }
      }
    }
  }
`;

export default Page;
