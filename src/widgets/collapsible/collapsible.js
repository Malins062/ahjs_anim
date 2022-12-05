import './collapsible.css';

/*
class CollapsibleWidget

  Параметры конструктора:
    parentEl - контейнер, в котором искать объекты collapsible
*/

const CLASS_NAME = 'collapsible',
  PREFIX = 'csbl'

export default class CollapsibleWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get idSelector() {
    return `[data-${PREFIX}-toggle=${CLASS_NAME}]`;
  }

  static get classSelector() {
    return `.${CLASS_NAME}`;
  }

  listen() {
    return this.parentEl;
  }
}
