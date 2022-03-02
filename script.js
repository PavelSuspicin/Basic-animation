function animateString(id) {
    let element = document.querySelector('.' + id)
    let textNode = element.childNodes[0]
    let text = textNode.data
    console.log(text)
    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1)
        textNode.data = text
    }, 500)
}
