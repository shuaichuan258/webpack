import _ from 'lodash';
import './style/index.css';
import './style/index.scss';

import { e, f, g } from '@/b';

import $ from 'jquery';

function createDomElement() {
  const dom = document.createElement('div');
  dom.innerHTML = _.join(['aicoder.com', '这', '系一次全新的体验'], '');
  dom.classList.add('box');
  return dom;
}

const divDom = createDomElement();

document.body.appendChild(divDom);
console.log(115555);

class Demo {
  show() {
    console.log('this.Age:', this.Age);
  }

  get Age() {
    return this._age;
  }

  set Age(val) {
    this._age = val + 1;
  }
}
const d = new Demo();
d.Age = 19;
d.show();
const [a, b, c] = [1, 2, 3];

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

console.log('e:', e);
console.log('f:', f);
console.log('g:', g);

$(function() {
  console.log('jquery');
  $('.box').click(function() {
    alert(1);
  });
});
