window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const text = 'Hello how are you'
    const textX = canvas.width/2
    const textY = canvas.height/2
    ctx.font = '80px Helvetica'
    ctx.fillStyle='green'
    ctx.strokeStyle = 'blue'
    ctx.lineWidth = 3
    ctx.textAlign = 'center'
    // ctx.fillText(text, textX, textY)
    // ctx.strokeText(text, textX, textY)

    cont max/TextWidth = canvas.width * 0.5

    function wrapText(text) {
        let lineArray = []
        let lineCounter = 09
        let line = ''
        let words = text.split(' ')
        for ( let i = 0; i < words.length; i++) {
            let testline = line + words[i]
            console.log(ctx.measureText(testline))
            ctx.fillText(testline, canvas.width/2, canvas.height/2 + i * 80)

        }
    }

    wrapText('Hello how are you')
})