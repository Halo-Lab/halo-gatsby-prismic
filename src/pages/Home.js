import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Home from '@scenes/Home';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  const { node: homepageContent } = data.allPrismicHomepage.edges[0];
  const { data: pageData } = homepageContent;
  const { metatitle, metadescription, canonical, body: pageContent } = pageData;

  return (
    <Layout
      canonical={canonical}
      metatitle={metatitle}
      metadescription={metadescription}
    >
      <Home content={pageContent} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($lang: String) {
    allPrismicHomepage(filter: { lang: { eq: $lang } }) {
      edges {
        node {
          type
          lang
          id
          alternate_languages {
            id
            lang
            type
            uid
          }
          data {
            metatitle {
              text
            }
            metadescription {
              text
            }
            canonical {
              text
            }
            body {
              ... on PrismicHomepageDataBodyBenefits {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                }
                items {
                  description {
                    text
                  }
                  icon {
                    alt
                    url
                  }
                  title {
                    text
                  }
                }
              }
              ... on PrismicHomepageDataBodyConversion {
                id
                slice_type
                primary {
                  buttontext {
                    text
                  }
                  cta {
                    text
                  }
                  placeholder {
                    text
                  }
                }
              }
              ... on PrismicHomepageDataBodyFeature {
                id
                slice_type
                primary {
                  title {
                    raw
                  }
                  featureimage {
                    url
                    alt
                    gatsbyImageData(layout: FIXED, placeholder: BLURRED)
                  }
                  description {
                    raw
                  }
                }
              }
              ... on PrismicHomepageDataBodyHero {
                id
                slice_type
                primary {
                  heroimage {
                    alt
                    url
                    gatsbyImageData(layout: FIXED, placeholder: BLURRED)
                  }
                  title {
                    raw
                  }
                }
              }
              ... on PrismicHomepageDataBodyTestimonial {
                id
                slice_type
                primary {
                  image {
                    alt
                    url
                  }
                  name {
                    raw
                  }
                  testimonial {
                    raw
                  }
                  title {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Page;
