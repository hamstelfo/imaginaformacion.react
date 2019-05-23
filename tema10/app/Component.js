export default function(text=new Date().toLocaleString()){

    const element = document.createElement('div');

    element.innerHTML = text;

    return element;

}