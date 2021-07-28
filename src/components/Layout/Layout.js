import React from 'react';
import { object, node } from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Head from '@components/Head';

const Layout = ({ children, data, canonical, metatitle, metadescription }) => {
  const { node: layoutContent } = data.allPrismicLayout.edges[0];
  const { data: layoutData } = layoutContent;
  const { body: headerData, body1: footerData } = layoutData;

  return (
    <div className="layout container">
      <Head
        canonical={canonical}
        metatitle={metatitle}
        metadescription={metadescription}
      />
      <Header data={headerData} />
      {children}
      <Footer data={footerData} />
    </div>
  );
};

Layout.propTypes = {
  data: object,
  canonical: object,
  metatitle: object,
  metadescription: object,
  children: node,
};

const LayoutWithData = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allPrismicLayout {
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
                  body {
                    ... on PrismicLayoutDataBodyLogo {
                      id
                      slice_type
                      primary {
                        logo {
                          alt
                          url
                          gatsbyImageData(layout: CONSTRAINED)
                        }
                      }
                    }
                    ... on PrismicLayoutDataBodyMenu {
                      id
                      slice_type
                      primary {
                        buttontext {
                          text
                        }
                        buttonlink {
                          link_type
                          url
                        }
                      }
                      items {
                        itemlink {
                          link_type
                          url
                        }
                        menuitem {
                          text
                        }
                      }
                    }
                  }
                  body1 {
                    ... on PrismicLayoutDataBody1Logo {
                      id
                      slice_type
                      primary {
                        logo {
                          alt
                          url
                        }
                      }
                    }
                    ... on PrismicLayoutDataBody1Menu {
                      id
                      items {
                        itemlink {
                          link_type
                          url
                        }
                        menuitem {
                          text
                        }
                      }
                      slice_type
                    }
                    ... on PrismicLayoutDataBody1SocialLinks {
                      id
                      items {
                        sociallink {
                          link_type
                          url
                        }
                        sociallogo {
                          alt
                          url
                        }
                      }
                      slice_type
                    }
                    ... on PrismicLayoutDataBody1Submenu {
                      id
                      slice_type
                      items {
                        itemlink {
                          link_type
                          url
                        }
                        menuitem {
                          text
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => <Layout data={data} {...props} />}
    />
  );
};

LayoutWithData.propTypes = {
  children: node,
};

export default LayoutWithData;
