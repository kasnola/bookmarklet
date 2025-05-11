# caacaw

caacaw is a bookmarklet made for the [Hacklet YSWS](http://hacklet.hackclub.com/) that tries to erase clutter & hop over soft paywalls, leaving just the [&lt;article>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/article). it's mostly useful for sites like [the Purdue OWL](https://owl.purdue.edu/owl/multilingual/multilingual_students/key_concepts_for_writing_in_north_american_colleges/reference_and_citation_in_writing.html) or [The Atlantic](https://www.theatlantic.com/technology/archive/2022/12/chatgpt-ai-writing-college-student-essays/672371/) where I Just Want The Article.

apparently, crows and owls are rivals. so. caacaw!

## sometimes "Just The Article, Please" doesn't work

damn javascript-enabled paywalls. anyways, cacaw has a janky last-resort implemented:

if you run the bookmarklet _twice_, it'll ask you if you want to inject a sandboxed iframe.

yes, it's very error-prone. yes, the hrefs don't work properly. sorry!

it works on some sites e.g. [The Atlantic](https://www.theatlantic.com/ideas/archive/2024/04/paywall-problems-media-trust-democracy/678032/) though, which is usually Good Enough For Me!

## sites tested

- stackexchange.com
- theatlantic.com
- nytimes.com
- developer.mozilla.org
- reddit.com
  - honestly, just install an extension that redirects to old.reddit.com or use an alternative frontend.
