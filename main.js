javascript: (function () {
  let areYouSure =
    "!!JANK!!: try injecting a full-size iframe? this is almost guaranteed to break things -- do CTRL+SHIFT+R when you're done.";
  let peskyTagCount = 0;

  let peskySemanticTags = document.querySelectorAll(
    "aside, footer, header, #left-sidebar"
  );
  function injectIframe() {
    let iframe = document.createElement("iframe");

    iframe.setAttribute("src", document.URL);
    iframe.setAttribute("sandbox", "");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "100%");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("marginheight", "0");
    iframe.setAttribute("marginwidth", "0");
    iframe.setAttribute("scrolling", "auto");

    document.body.innerHTML = "";
    document.documentElement.appendChild(iframe);

    document.documentElement.style.overflow = "auto";
    document.documentElement.style.height = "100%";
    document.documentElement.style.width = "100%";
  }

  function wipePeskyTags() {
    console.log(peskySemanticTags);

    peskySemanticTags.forEach((element) => {
      peskyTagCount++;
      element.remove();
    });

    if (peskyTagCount === 0) {
      return;
    }

    alert(
      `wiped out ${peskyTagCount} pesky elements & left the <article> behind`
    );
  }

  wipePeskyTags();

  if (peskyTagCount === 0) {
    if (window.confirm(areYouSure)) {
      injectIframe();
    }
  }
})();
