window.addEventListener('load', function() {

    const canvas = document.querySelector('canvas')
    const generateButton = document.querySelector('.generate-tree-button')
    const ctx = canvas.getContext('2d')
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    function drawTree(startX,startY,len,angle,branchWidth,color1,color2) {
        console.log(startX,startY,len,angle,branchWidth,color1,color2)
        ctx.beginPath();
        ctx.save()
        ctx.strokeStyle = color1
        ctx.fillStyle = color2
        ctx.lineWidth =  branchWidth
        ctx.translate(startX,startY);
        ctx.rotate(angle * Math.PI/180)
        ctx.moveTo(0,0)
        ctx.lineTo(0, -len)
        ctx.stroke()
        console.log(startX,startY,len,angle,branchWidth,color1,color2)


        if (len < 10) {
            ctx.restore()
            return
        }
console.log(branchWidth)
        drawTree(0,-len, len * 0.75, angle + 5, branchWidth)
        drawTree(0, -len, len * 0.75, angle - 5, branchWidth)

        ctx.restore()

    }
        drawTree(canvas.width/2,canvas.height - 80, 120, 0, 2, 'brown','green')
    
   

    

})