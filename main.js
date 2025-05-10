// if (window.confirm("Do you want me to try"))
// https://www.theatlantic.com/technology/archive/2022/12/chatgpt-ai-writing-college-student-essays/672371/
javascript: (function () {
  let peskyTagCount = 0;

  let peskySemanticTags = document.querySelectorAll("aside, footer, header");

  console.log(peskySemanticTags);

  peskySemanticTags.forEach((element) => {
    peskyTagCount++;
    element.remove();
  });

  alert(
    `wiped out ${peskyTagCount} pesky elements & left the <article> behind`
  );

  document.createElement();
})();
