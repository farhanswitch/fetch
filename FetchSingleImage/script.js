async function getImage(){
    const response = await fetch('contact-me.png')
    const blob = await response.blob()
    document.getElementById('image').src = URL.createObjectURL(blob)
}

getImage()
.then(result =>{
    console.log('yay')
})
.catch(err=>{
    console.log(err)
})