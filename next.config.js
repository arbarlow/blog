module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/microservices-opinions-and-advice',
        permanent: true
      }
    ];
  }
};
