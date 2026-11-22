self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/policy-comparison-blog-preview/design",
        "destination": "/policy-comparison-blog-preview/design.html"
      },
      {
        "source": "/policy-comparison-blog-preview/design-recruiting",
        "destination": "/policy-comparison-blog-preview/design-recruiting.html"
      },
      {
        "source": "/policy-comparison-blog-preview/blog/:slug/opengraph-image",
        "destination": "/policy-comparison-blog-preview/blog/:slug/og"
      },
      {
        "source": "/policy-comparison-blog-preview/blog/:slug/opengraph-image-:suffix",
        "destination": "/policy-comparison-blog-preview/blog/:slug/og"
      },
      {
        "source": "/policy-comparison-blog-preview/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/a-4-a/c.js"
      },
      {
        "source": "/policy-comparison-blog-preview/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/:path*"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()