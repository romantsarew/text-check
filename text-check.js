document.addEventListener("DOMContentLoaded", function() {
  function replaceTextInAllElements(element, testText) {
      for (let node of element.childNodes) {
          if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
              node.nodeValue = testText;
          } else if (node.nodeType === Node.ELEMENT_NODE) {
              replaceTextInAllElements(node, testText);
          }
      }
  }

  let testText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';

  replaceTextInAllElements(document.body, testText);
});
