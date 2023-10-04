// import ts from 'app-background'

const myn = document.querySelector(".main")
const ball = document.querySelector(".ball")
const clkTest = document.querySelector(".clkTest")
const clk = document.querySelector(".clk")
const play = document.querySelector(".play")
const scor = document.querySelector(".score>h2")
// clk.style.pointerEvents = "none"
// #########################################
const _walls = []
const _spacewalls = []
const _getTagWalls = []
let _flagWalls = 0


const CreateWall = ((_randomSizeWall, _randomSizeWood) => {
    let _wall = document.createElement("div")
    let _Wood = document.createElement("div")
    _wall.classList = `tst h-[35%] bg-black bottom-0 relative `
    _Wood.classList = "gtst w-[4px] h-[0px] bg-black  absolute origin-bottom duration-0 rotate-[0deg] bottom-[100%] right-0 "
    _wall.style.width = `${_randomSizeWall}px`
    _wall.style.marginLeft = `${_randomSizeWood}px`
    _wall.appendChild(_Wood)
    _getTagWalls.push(_wall)
    myn.appendChild(_wall)
})
CreateWall(50, 0)

const GenerateRandomNumbers = ((N = 5) => {
    let _currentNumber = 100
    for (let i = 0; i < N; i++) {
        const _randomOffset = Math.floor(Math.random() * 100) + 1
        const _randomSizeWall = Math.floor(Math.random() * (80 - 20) + 20)
        const _randomSizeWood = Math.floor(Math.random() * (200 - 20) + 20)
        _currentNumber += 100 + _randomOffset
        _walls.push(_randomSizeWall)
        _spacewalls.push(_randomSizeWood)
        CreateWall(_randomSizeWall, _randomSizeWood)
    }
})
GenerateRandomNumbers();
// valueClickMouse => "Each time the mouse is clicked."
let _valueClickMouse = 0

// 
let _interval = null

// _SumSpaceWalls => Sum of walls and the distance between the walls
let _SumSpaceWalls = 0

// _SumSpWl => We place the summed numbers inside an array and check them within a loop
const _SumSpWl = []
let py3 = 0
let score = 0
const ClickDown = (() => {
    _interval = setInterval(() => {
        _getTagWalls[_flagWalls].children[0].style.height = `${_valueClickMouse++}px`
    }, 0);
})
const ClickUp = (() => {
    clearInterval(_interval)
    _getTagWalls[_flagWalls].children[0].style.transition = "0.3s"
    _getTagWalls[_flagWalls].children[0].style.transform = "rotate(90deg)"

    _spacewalls.forEach((e, i) => {
        _SumSpaceWalls = _SumSpaceWalls + e + _walls[i]
        _SumSpWl.push(_SumSpaceWalls)
        if ((_valueClickMouse + py3) > (_SumSpWl[i] - _walls[i]) && (_valueClickMouse + py3) < _SumSpWl[i]) {
            score = score + 1
            scor.innerHTML = score

            _flagWalls = i + 1
            py3 = _SumSpWl[i]
            _valueClickMouse = 0
            setTimeout(() => {
                ball.style.transition = "0.5s"
                ball.style.left = `${py3 + 15}px`
            }, 500);
            setTimeout(() => {

                myn.style.right = `${py3}px`
            }, 900);
            GenerateRandomNumbers(2)
        }
        else if (_spacewalls.length === i + 1) {
            setTimeout(() => {
                ball.style.transition = "0.5s"
                ball.style.left = `${(_valueClickMouse + py3 + 20)}px`
            }, 500);
            setTimeout(() => {
                _getTagWalls[_flagWalls].children[0].style.transform = "rotate(180deg)"
                ball.style.transition = "2.3s"
                ball.style.bottom = `-50%`
            }, 900);
            clk.style.pointerEvents = "none"
            setTimeout(() => {
                clkTest.style.display = 'flex'
            }, 1500);
        }
        else {
            // 
        }
    })
    // reset 
    _SumSpaceWalls = 0
    _SumSpWl.length = 0
})
const wood = (() => {
    _flagWalls = 0
    py3 = 0
    _valueClickMouse = 0
    ball.style.bottom = `${35}%`
    clk.addEventListener("mousedown", ClickDown)
    clk.addEventListener("mouseup", ClickUp)

    clk.addEventListener("touchstart", ClickDown)
    clk.addEventListener("touchend", ClickUp)
})
wood()

clkTest.addEventListener('click', () => {
    chback()
    score = 0
    scor.innerHTML = score
    clkTest.style.display = 'none'
    _getTagWalls.forEach((e, i) => {
        e.remove()
    })
    ball.style.transition = "0s"
    ball.style.left = `${15}px`

    myn.style.right = `${0}px`
    _getTagWalls.length = 0
    _walls.length = 0
    _spacewalls.length = 0
    CreateWall(50, 0)
    GenerateRandomNumbers()
    clk.style.pointerEvents = null
    wood()
})

const back = [
    "url('img/back/pic-1.webp')",
    "url('img/back/pic-2.jpg')",
    // "url('img/back/pic-3.jpg')",
    "url('img/back/pic-4.jpg')",
    "url('img/back/pic-5.jpg')",
    "url('img/back/pic-6.jpg')",
    "url('img/back/pic-6.png')",
    "url('img/back/pic-7.jpg')",
    "url('img/back/pic-8.jfif')",
    "url('img/back/pic-9.png')",
    "url('img/back/pic-10.jpg')",
]
let ts = parseInt(Math.random() * back.length)
let num = null;
function chback() {
    let odn;
    do {
        odn = parseInt(Math.random() * back.length);
    } while (odn === num);
    num = odn;
    document.body.style.backgroundImage = back[odn]
}
chback()
