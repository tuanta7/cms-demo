module.exports = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [new URL("http://localhost:8080/**")],
  },
};
