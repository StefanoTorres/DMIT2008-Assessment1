//this function is meant to convert the template that will be given into an element that can be entered into the DOM

function createElementFromTemplate(template){
    let element = document.createRange().createContextualFragment(template);

    return element;
}

export default createElementFromTemplate;