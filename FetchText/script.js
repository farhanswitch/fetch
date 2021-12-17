async function getText(){
    const response = await fetch('lorem.txt')
    const text = await response.text()
    document.getElementById('lorem').innerText = text
}

getText()
.then(result=>{
    console.log('Success')
})
.catch(error=>{
    console.log(error)
})