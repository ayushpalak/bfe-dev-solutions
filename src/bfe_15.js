// I believe you've used jQuery before, we often chain the jQuery methods together to accomplish our goals.

// For example, below chained call turns button into a black button with white text.

// $('#button')
//   .css('color', '#fff')
//   .css('backgroundColor', '#000')
//   .css('fontWeight', 'bold')
// The chaining makes the code simple to read, 
// could you create a simple wrapper $ to make above code work as expected?

// The wrapper only needs to have css(propertyName: string, value: any)

/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
    // your code here
    const _css = function (propertyName, value) {
        // css will receive el as this value
        this.style[propertyName] = value;

        return {
            css: (propertyName, value) => {
                // arrow function resolves this as parents this (lexical scope)
                // parent is _css which has this binding to `el`
                return _css.call(this, propertyName, value)
            }
        }
    }
    return {
        // binding el to _css
        css: (propertyName, value) => _css.call(el, propertyName, value)
    }
}

// solution without this:
/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
    // your code here
    const _css = (el, propertyName, value) => {
        el.style[propertyName] = value;
        return { css: (propertyName, value) => _css(el, propertyName, value) }
    }
    return {
        css: (propertyName, value) => _css(el, propertyName, value)
    }
}

$(document.getElementById("para")) // {css}
    .css('color', '#fff') // 
    .css('backgroundColor', '#000')
    .css('fontWeight', 'bold')