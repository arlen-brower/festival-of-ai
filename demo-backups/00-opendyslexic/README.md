# OpenDyslexic website font

This extension injects one stylesheet into ordinary pages. The stylesheet
loads a bundled copy of OpenDyslexic and applies it to page text.

It intentionally requests broad website access because changing arbitrary
sites requires the stylesheet to run on arbitrary sites. It does not include
JavaScript, analytics, or network requests.

After loading `manifest.json`, open `sample-page.html` or refresh a normal web
page. Firefox-protected pages such as `about:addons` cannot be modified by an
extension.
