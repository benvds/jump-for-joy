import * as utils from './utils';

function $(selectors, subject) {
    return utils.toArray((subject || document).querySelectorAll(selectors));
}

function elementIndex(element) {
    return utils.indexOf.call(element.parentElement.children, element);
}

export {
    $,
    elementIndex
};
