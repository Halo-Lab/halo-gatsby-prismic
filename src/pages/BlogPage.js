import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BlogPage from '@scenes/BlogPage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const { node: blogpageContent } = data.allPrismicBlog.edges[0];
  const { data: pageData } = blogpageContent;
  const { metatitle, metadescription, canonical } = pageData;
  const { edges: blogPosts } = data.allPrismicBlogpost;

  return (
    <Layout
      metadescription={metadescription}
      canonical={canonical}
      metatitle={metatitle}
    >
      <BlogPage content={pageData} blogPosts={blogPosts} />
    </Layout>
  );
};

export const query = graphql`
  query($lang: String) {
    allPrismicBlog(filter: { lang: { eq: $lang } }) {
      edges {
        node {
          _previewable
          type
          lang
          id
          alternate_languages {
            id
            lang
            uid
            type
          }
          data {
            blogtitle {
              raw
            }
            canonical {
              text
            }
            metadescription {
              text
            }
            metatitle {
              text
            }
            body {
              ... on PrismicBlogDataBodyForm {
                id
                slice_type
                primary {
                  lastname {
                    text
                  }
                  formtitle {
                    raw
                  }
                  firstname {
                    text
                  }
                  birthdate {
                    text
                  }
                  adress {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicBlogpost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          uid
          data {
            author {
              text
            }
            date
            metadescription {
              text
            }
            cover {
              alt
              url
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
            posttitle {
              text
            }
          }
        }
      }
    }
  }
`;

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Page;
