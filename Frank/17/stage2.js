
    window.addEventListener('load', function() {
        const canvas = document.getElementById('canvas1')
        const ctx = canvas.getContext('2d')
        canvas.height = window.innerHeight
        canvas.width = window.innerWidth
        let numberOfParticles = 200
        let hue = 0
        
        particlesArray = []
  
          class Particle {
              constructor() {
                  this.x = Math.random() * canvas.width
                  this.y = Math.random() * canvas.height
                  this.radius = (Math.random() * 10) + 2
                  this.speedX = (Math.random() * 3) - 1.5
                  this.speedY = (Math.random() * 3) - 1.
                  this.hue = Math.floor(Math.random() * 360) + 1
                  console.log(this.hue)
              }
              draw() {
                  ctx.beginPath();
                  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
                  ctx.fillStyle = 'hsl(' + this.hue + ', 100%, 50%';
                  ctx.fill()
              }
              update() {
                  this.x += this.speedX
                  this.y += this.speedY
                  if ( this.x + this.radius > canvas.width || 
                      this.x - this.radius < 0) {
                          this.speedX = -this.speedX
                      }
                      if ( this.y + this.radius > canvas.height || 
                          this.y - this.radius < 0) {
                              this.speedY = -this.speedY
                      }
                      this.draw()
              }
          }
          function init() {
              for (let i = 0;i < numberOfParticles; i++) {
                  particlesArray.push(new Particle)
              }
          }
          function animate() {
              ctx.fillStyle = 'rgba(255,255,255,0.05)' // leaves solid trail
              ctx.fillRect(0,0,canvas.width,canvas.height) // adds transparency to trail
              // ctx.clearRect(0,0,canvas.width,canvas.height) // leaves no trail
              for ( let i = 0; i < particlesArray.length; i++) {
                  particlesArray[i].update()
              }
              requestAnimationFrame(animate)
          }
          init()
          animate()
  
        
      })
  
    