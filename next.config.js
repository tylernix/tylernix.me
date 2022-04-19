module.exports = {
    // Uncomment the line below to enable basePath, pages and
    // redirects will then have a path prefix (`/app` in this case)
    //
    // basePath: '/app',
  
    async redirects() {
      return [
        {
          source: '/auth0',
          destination: '/api/auth/login',
          permanent: false,
        },
        {
          source: '/logout',
          destination: '/api/auth/logout',
          permanent: false,
        }
      ]
    },
    async headers() {
      return [
        {
          source: "/fonts/Electronix-Regular.woff2",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
      ];
    },
  }