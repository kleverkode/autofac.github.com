# Autofac Organization Pages

This repository hosts the Autofac project organization pages. [Jekyll](https://github.com/mojombo/jekyll) is being used to manage page transformation in accordance with GitHub Pages usage.

[Visit Autofac on Google Code.](https://autofac.googlecode.com)

To run locally (Windows):

  1. Install [Ruby and the Ruby Development Kit](http://rubyinstaller.org/downloads/).
  1. At a regular (not irb) command prompt, run `gem install jekyll`
  1. Change to the local repo directory with the site.
  1. Run `jekyll --serve`
  1. In a browser, visit [http://localhost:4000](http://localhost:4000)

To update the API docs:
  1. Delete the content in the `apidoc` folder.
  1. Place the "website" style generated API doc from the build into the `apidoc` folder.
  1. Rename the `Index.html` to `index.html` (it's case-sensitive).
  1. Push the changes.

To update the minified script/CSS:
  1. Open a Visual Studio command prompt.
  1. Run `msbuild default.proj` to minify scripts.

Jekyll resources:
  * [Jekyll Documentation](https://github.com/mojombo/jekyll/wiki)
  * [Learning Jekyll by Example](http://www.andrewmunsell.com/tutorials/jekyll-by-example/)