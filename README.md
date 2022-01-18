[![Node.js CI](https://github.com/Halo-Lab/halo-gatsby-prismic/actions/workflows/node.js.yml/badge.svg)](https://github.com/Halo-Lab/halo-gatsby-prismic/actions/workflows/node.js.yml)

# Halo Lab Gatsby-Prismic public starter

This site is built with [Prismic CMS](https://prismic.io/), [Gatsby](https://www.gatsbyjs.com/).


## How to start project locally

To start project locally, clone this repository. Then go to project directory and install dependencies.

```
make install
```

Then start project.

```
make start
```

Visit [http://localhost:8000/](http://localhost:8000/).


Now your can change code and evaluate changes in browser.

Run `make clean` to clean cashe when you add new content in Prismic and want to see it locally.

## How to commit changes

When you are ready, check build to insure that your changes do not break anything. To build app and serve it locally, run:

```
make serve
```

Visit [http://localhost:9000/](http://localhost:9000/) to see production version of site.

If you need just check that build is ok, run `make build`.

If build is live, commit changes to GitHub repository. 

Visit test site and check your changes. If everything is ok, ask your buddy to review changes. After review is done and code is fixed, you can merge pull request.

## Word from author

Have fun! ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img src="https://dgestran.sirv.com/Images/supported-by-halolab.png" alt="Supported by Halo lab" height="60">
</a>
