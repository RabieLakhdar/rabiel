const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
require("babel-register")({
  presets: [es2015, presetReact]
});
const router = require("./src/navigation").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return (
  new Sitemap(router())
  .build("https://www.rabiel.dev")
  .save("sitemap.xml")
  );
}

generateSitemap();