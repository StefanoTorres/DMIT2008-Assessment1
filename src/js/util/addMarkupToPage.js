// This is the function that will add the element node that was created to the DOM

function AddMarkupToPage(element){
    const parentNode = document.querySelector('.views');
    parentNode.appendChild(element);
}

export default AddMarkupToPage