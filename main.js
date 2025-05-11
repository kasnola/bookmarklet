// if (window.confirm("Do you want me to try"))
// https://www.theatlantic.com/technology/archive/2022/12/chatgpt-ai-writing-college-student-essays/672371/

javascript: (function () {
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
    let peskyTagCount = 0;

    let peskySemanticTags = document.querySelectorAll(
      "aside, footer, header, #left-sidebar"
    );

    console.log(peskySemanticTags);

    peskySemanticTags.forEach((element) => {
      peskyTagCount++;
      element.remove();
    });

    alert(
      `wiped out ${peskyTagCount} pesky elements & left the <article> behind`
    );
  }

  if (
    window.confirm(
      "try injecting a full-size iframe? this may or may not work."
    )
  ) {
    injectIframe();
  }

  wipePeskyTags();
})();
