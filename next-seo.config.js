const title = 'Malte Granderath – Developer, writer, creator.';
const description =
  'Front-end developer and JavaScript enthusiast';

const SEO = {
  title,
  description,
  canonical: 'https://granderath.tech',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://granderath.tech',
    title,
    description,
    images: [
      {
        url: 'https://granderath.tech/static/images/banner.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@mgrandera',
    site: '@mgrandera',
    cardType: 'summary_large_image'
  }
};

export default SEO;
