window.addEventListener('load', function() {

    const canvas = document.querySelector('canvas')
    const generateButton = document.getElementById('button')
    const ctx = canvas.getContext('2d')
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    let curve

    function drawTree(startX,startY,len,angle,branchWidth,color1,color2) {
        ctx.beginPath();
        ctx.save()
        ctx.strokeStyle = color1
        ctx.fillStyle = color2
        ctx.shadowBlur = 15
        ctx.shadowColor = 'rgb(0,0,0,0.5)'
        ctx.lineWidth =  branchWidth
        ctx.translate(startX,startY);
        ctx.rotate(angle * Math.PI/180)
        ctx.moveTo(0,0)
        // ctx.lineTo(0, -len)
        if (angle > 0) {
            ctx.bezierCurveTo(curve * 3, -len/2, curve2, -len/2, 0, -len)
        } else {
            ctx.bezierCurveTo(0, -len/2, -10, -len/2, 0, -len)
        }
        ctx.stroke()


        if (len < 15) {
            // leaves
            ctx.beginPath()
            ctx.arc(0, -len, 10, 0, Math.PI/2)
            ctx.fill()
            ctx.restore()
            return
        }

        drawTree(0,-len, len * 0.75, angle + curve, branchWidth * 0.6)
        drawTree(0, -len, len * 0.75, angle - curve, branchWidth * 0.6)

        ctx.restore()

    }

    drawTree(canvas.width/2,canvas.height - 80, 120, 0, 25, 'brown','white')
    
   function generateRandomTree() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
   // (startX,startY,len,angle,branchWidth,color1,color2) 
   let centerPointX = canvas.width/2
   let len = Math.floor(Math.random() * 20) + 100
   let angle = 0
   let branchWidth = (Math.random() * 40) + 1 
    let color1 = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')'
    let color2 = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')'
    generateButton.style.background = color1    
    curve = (Math.random() * 20) + 2
    curve2 = Math.random() * 50
    drawTree(centerPointX, canvas.height - 80, len, angle, branchWidth, color1, color2 )
   }

generateButton.addEventListener('click', generateRandomTree)

})