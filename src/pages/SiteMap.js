import React from "react";
import XMLViewer from "react-xml-viewer";

const xml =
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"><url> <loc>https://www.rabiel.dev/</loc></url> <url> <loc>https://www.rabiel.dev/</loc> </url> <url> <loc>https://www.rabiel.dev/</loc></url> <url> <loc>https://www.rabiel.dev/</loc> </url></urlset>';
const SiteMap = () => {
  return <XMLViewer xml={xml} />;
};
export default SiteMap;
