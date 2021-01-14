// YOUR CODE HERE
// eslint-disable-next-line no-unused-vars

class $ {
  constructor(selector) {
    if (selector[0] === '.') {
      this.elements = Array.from(document.getElementsByClassName(selector.slice(1)));
    } else if (selector[0] === '#') {
      /* In case of an 'if' statement instead of the below 'else if' statement for id selector,the first if statement above for the class selector will not work as expected -as if it is ignored- 
    The Reason of That is the end 'else' statement which requires to have 'else ifs'
    in case of more than else statment.
    */
      this.elements = [document.getElementById(selector.slice(1))];
    } else {
      this.elements = Array.from(document.getElementsByTagName(selector));
    }
  }
  hide() {
    this.elements.forEach(element => (element.style.display = 'none'));
    return this;
  }
  show() {
    this.elements.forEach(element => (element.style.display = 'inherit'));
    return this;
  }
  addClassName(className) {
    this.elements.forEach(element => element.classList.add(className));
    return this;
  }
  removeClassName(className) {
    this.elements.forEach(element => element.classList.remove(className));
    return this;
  }
  text(textToAdd) {
    this.elements.forEach(element => (element.innerText = textToAdd));
    return this;
  }
  addChild(tag) {
    this.elements.forEach(element => {
      const newTag = document.createElement(tag);
      element.appendChild(newTag);
    });
    return this;
  }
}
