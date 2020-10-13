const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/akempler-delugach/VSProjects/front-end-class-project/client/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/akempler-delugach/VSProjects/front-end-class-project/client/src/pages/index.tsx")))
}

