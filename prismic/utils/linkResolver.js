const { defaultLanguage } = require('./../../prismic-config');

const linkResolver = (doc) => {
  const properties = doc._meta || doc;

  if (properties.type === 'homepage') {
    return properties.lang === defaultLanguage
      ? '/'
      : `/${properties.lang.slice(0, 2)}/`;
  }

  if (properties.type === 'blog') {
    return properties.lang === defaultLanguage
      ? '/blog'
      : `/${properties.lang.slice(0, 2)}/blog`;
  }

  if (properties.type === 'blogpost' && properties.uid) {
    return properties.lang === defaultLanguage
      ? `/blog/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/blog/${properties.uid}`;
  }

  // Backup for all other types
  return '/';
};

module.exports = linkResolver;
