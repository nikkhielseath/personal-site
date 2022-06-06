# [snikhill.tech](https://snikhill.tech/)

My **_Personal Estate_** on the World Wide Web. Bootstrapped using [Gatsby](https://www.gatsbyjs.com/) and
hosted on [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/) with [Dato](https://www.datocms.com/)
as CMS.

The Design was made by me. Yes, it is not that impressive but, it is something, and I proud of the effort
that I made. It actually helped me explore Adobe XD and Figma.

This website also contains a [blog](https://snikhill.tech/blog) powered by markdown.

# Future

- Improve the blog
- Implement an action to automatically publish blog posts on dev.to & medium
- Design Tweaks

# Development Instructions

This is a gatsbyjs website made using v4 of gatsby. Not all the gatsby plugins
support this version but, it no criticial failures were observed.

This project is using husky to run some pre-commit hooks.

## Pre Commit Hooks stuff

Setup using `lint-staged`

```json
  "lint-staged": {
    "*.{jsx,js,scss,md}": [
      "eslint --cache --fix",
      "prettier --write"
    ]
  }
```

- Prettier is being used to beautify the code according to a consistent standard
  before commiting.
- eslint is being used to identify and warn about any critical JS syntax errors.

## Requirements

- `gatsby` @ v4
- `npm` as the preffered package manager
- node v16.13.0

## Start up the website locally

- Use `npm run develop`

# Social Links

- [twitter](https://twitter.com/SethNikhill)
- [linkedIn](https://www.linkedin.com/in/snikhill/)
- github (Well, Duh!)
