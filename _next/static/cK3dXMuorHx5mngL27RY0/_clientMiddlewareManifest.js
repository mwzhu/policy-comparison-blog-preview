self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/policy-comparison-blog-preview(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!monitoring|studio|api\\/revalidate|_next\\/static|_next\\/image|favicon.ico).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!monitoring|studio|api/revalidate|_next/static|_next/image|favicon.ico).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()