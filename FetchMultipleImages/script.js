const paths = [
    'img/chat.png',
    'img/enigma.jpg',
    'img/gallery.jpg'
]
const container = document.getElementsByClassName('container')[0]
paths.forEach(path =>{
    getImage(path)
})

async function getImage(path){
    const response = await fetch(path)
    const blob = await response.blob()
    showImage(blob)

}

function showImage(blob){
    const img = document.createElement('img')
    img.src = URL.createObjectURL(blob)
    img.width = 400
    container.append(img)
}
