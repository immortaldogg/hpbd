// helper functions
const PI2 = Math.PI * 2
const random = (min, max) => Math.random() * (max - min + 1) + min | 0
const timestamp = _ => new Date().getTime()

// container
class Birthday {
  constructor() {
    this.resize()

    // create a lovely place to store the firework
    this.fireworks = []
    this.counter = 0

  }
  
  resize() {
    this.width = canvas.width = window.innerWidth
    let center = this.width / 2 | 0
    this.spawnA = center - center / 4 | 0
    this.spawnB = center + center / 4 | 0
    
    this.height = canvas.height = window.innerHeight
    this.spawnC = this.height * .1
    this.spawnD = this.height * .5
    
  }
  
  onClick(evt) {
     let x = evt.clientX || evt.touches && evt.touches[0].pageX
     let y = evt.clientY || evt.touches && evt.touches[0].pageY
     
     let count = random(3,5)
     for(let i = 0; i < count; i++) this.fireworks.push(new Firework(
        random(this.spawnA, this.spawnB),
        this.height,
        x,
        y,
        random(0, 260),
        random(30, 110)))
          
     this.counter = -1
     
  }
  
  update(delta) {
    ctx.globalCompositeOperation = 'hard-light'
    ctx.fillStyle = `rgba(20,20,20,${ 7 * delta })`
    ctx.fillRect(0, 0, this.width, this.height)

    ctx.globalCompositeOperation = 'lighter'
    for (let firework of this.fireworks) firework.update(delta)

    // if enough time passed... create new new firework
    this.counter += delta * 3 // each second
    if (this.counter >= 1) {
      this.fireworks.push(new Firework(
        random(this.spawnA, this.spawnB),
        this.height,
        random(0, this.width),
        random(this.spawnC, this.spawnD),
        random(0, 360),
        random(30, 110)))
      this.counter = 0
    }

    // remove the dead fireworks
    if (this.fireworks.length > 1000) this.fireworks = this.fireworks.filter(firework => !firework.dead)

  }
}

class Firework {
  constructor(x, y, targetX, targetY, shade, offsprings) {
    this.dead = false
    this.offsprings = offsprings

    this.x = x
    this.y = y
    this.targetX = targetX
    this.targetY = targetY

    this.shade = shade
    this.history = []
  }
  update(delta) {
    if (this.dead) return

    let xDiff = this.targetX - this.x
    let yDiff = this.targetY - this.y
    if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
      this.x += xDiff * 2 * delta
      this.y += yDiff * 2 * delta

      this.history.push({
        x: this.x,
        y: this.y
      })

      if (this.history.length > 20) this.history.shift()

    } else {
      if (this.offsprings && !this.madeChilds) {
        
        let babies = this.offsprings / 2
        for (let i = 0; i < babies; i++) {
          let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
          let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

          birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

        }

      }
      this.madeChilds = true
      this.history.shift()
    }
    
    if (this.history.length === 0) this.dead = true
    else if (this.offsprings) { 
        for (let i = 0; this.history.length > i; i++) {
          let point = this.history[i]
          ctx.beginPath()
          ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
          ctx.arc(point.x, point.y, 1, 0, PI2, false)
          ctx.fill()
        } 
      } else {
      ctx.beginPath()
      ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
      ctx.arc(this.x, this.y, 1, 0, PI2, false)
      ctx.fill()
    }

  }
}

let canvas = document.getElementById('birthday')
let ctx = canvas.getContext('2d')

let then = timestamp()

let birthday = new Birthday
window.onresize = () => birthday.resize()
document.onclick = evt => birthday.onClick(evt)
document.ontouchstart = evt => birthday.onClick(evt)

var myAudio = document.getElementById("myAudio"); 
myAudio.play();

var myAudio2 = document.getElementById("myAudio2"); 
myAudio2.loop = true;

// THE NEXT FEW LINES OF CODES IS DISTURBING
// VIEWER DISCRETION IS ADVISED!!!
setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈"
}, 132)

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈H"
}, 556)

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HA"
}, 768)

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HAP"
}, 1482)

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HAPP"
}, 2144)

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HAPPY"
}, 2806)

//space
setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HAPPY "
}, 3520)

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HAPPY  "
}, 3944)
// space

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HAPPY  B"
}, 4129)

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HAPPY  BI"
}, 4579)

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HAPPY  BIR"
}, 4817)

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HAPPY  BIRT"
}, 5479)

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HAPPY  BIRTH"
}, 6167)

setTimeout(()=> {
  document.getElementById("hpbd").textContent = "🎈HAPPY  BIRTHDAY🎉"
}, 6829)

setTimeout(()=> {
  document.getElementById("name").textContent = "Hap"
}, 8232)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy"
}, 8629)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy Birth"
}, 8894)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy Birthday"
}, 9555)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy Birthday To"
}, 10191)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy Birthday To You"
}, 10879)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy Birthday To You"
}, 11500)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy Birthday To You"
}, 14214)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy Birthday To You"
}, 14637)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy Birthday To You"
}, 14928)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy Birthday To You"
}, 15564)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy Birthday To You"
}, 16225)

setTimeout(()=> {
  document.getElementById("name").textContent = "Happy Birthday To Linh"
  document.getElementById("name").classList.remove("sama")
  document.getElementById("name").classList.add("fade-out")
}, 16887)

setTimeout(()=> {
  document.getElementById("name").textContent = "🎂🎂🎂 Linh-sama 🎂🎂🎂"
  document.getElementById("name").classList.remove("fade-in")
  document.getElementById("name").classList.add("fade-in")
}, 18400)

setTimeout(()=> {
  document.getElementById("name").textContent = "🎂🎂🎂 Linh-sama 🎂🎂🎂"
  document.getElementById("name").classList.remove("fade-in")
  document.getElementById("name").classList.add("sama")
}, 19900)

// THE ABOVE CODE IS DISTURBING
// VIEWER DISCRETION IS ADVISED!!!

var ms = 11000;
setTimeout(function() {
  document.getElementById("leftDrum").classList.remove("underneath");
  document.getElementById("leftDrum").classList.add('go-up');
  document.getElementById("rightDrum").classList.remove("underneath");
  document.getElementById("rightDrum").classList.add('go-up');
  document.getElementById("topBanner").classList.remove("above");
  document.getElementById("topBanner").classList.add('go-down');
}, ms);

var millisecondsToWait = 19000;
setTimeout(function() {
    myAudio2.play();

    
    // Whatever you want to do after the wait
    ;(function loop(){    
      requestAnimationFrame(loop)      
        
      let now = timestamp()
      let delta = now - then
  
      then = now
      birthday.update(delta / 1000)
  
    })()
}, millisecondsToWait);

  

// bonus
