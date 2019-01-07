/**
 * Based on Chris Ferdinandi gulp file - github.com/cferdinandi/gulp-boilerplate
 */

var settings = {
  clean: true,
  scripts: true,
  styles: true,
  svgs: true,
  copy: true,
  reload: true
};

/**
 * Paths to project folders
 */

var paths = {
  input: "src/",
  output: "dist/",
  scripts: {
    input: "src/js/*",
    output: "dist/js/"
  },
  styles: {
    input: "src/css/**/*.css",
    output: "dist/css/"
  },
  svgs: {
    input: "src/svg/*.svg",
    output: "/dist/svg/"
  },
  copy: {
    input: "src/copy/**/*",
    output: "dist/"
  },
  reload: "./dist"
};

/**
 * Template for banner
 */

var banner = {
  full:
    "/*!\n" +
    " * <%= package.name %> v<%= packafe.version %>\n" +
    " * <%= package.description %>\n" +
    " * (c) " +
    new Date().getFullYear() +
    " <%= package.author.name %>\n" +
    " * <%= package.license %> License\n" +
    " * <%= package.repository.url %>\n" +
    " */\n\n",
  min:
    "/*!" +
    " * <%= package.name %> v<%= packafe.version %>" +
    " | (c) " +
    new Date().getFullYear() +
    " <%= package.author.name %>" +
    " | <%= package.license %> License" +
    " | <%= package.repository.url %>" +
    " */\n"
};

/**
 * Gulp packages
 */

var { gulp, src, dest, watch, series, parallel } = require("gulp");
