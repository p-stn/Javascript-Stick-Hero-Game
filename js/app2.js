// (max - min) + min
const myn = document.querySelector(".main")

const numbers = [];
const hghtW = []
const tsthe = []

// Add two algoritm for height wall and margin wall
function generateRandomNumbers() {
    let currentNumber = 100
    for (let i = 0; i < 5; i++) {
        const randomOffset = Math.floor(Math.random() * 100) + 1
        // const rndm = Math.floor(Math.random() * (100 - 20) + 20)
        const rndm = Math.floor(Math.random() * (100 - 20) + 20)
        const randty = Math.floor(Math.random() * (200 - 20) + 20)
        currentNumber += 100 + randomOffset
        hghtW.push(rndm)
        numbers.push(currentNumber)
        tsthe.push(randty)

    }

    // return numbers;
}

const result = generateRandomNumbers();



const sty = {
    styleWall: 'w-[90px] h-[450px] bg-black absolute bottom-0 ml-[350px]',
    styleWood: 'w-[10px] h-[90px] bg-green-600  absolute origin-bottom	 rotate-[0deg] bottom-[450px] right-0'

}
// width Fixed
// height & margin variable
// let x =parseInt(Math.random() * (200 - 20) + 20)
// let y = Math.random() * (100 - 25) + 25



const wall = (() => {

    const { styleWall, styleWood } = sty
    tsthe.forEach((e, i) => {
        let wl = document.createElement("div")
        let wd = document.createElement("div")
        wl.classList = `h-[450px] bg-black bottom-0 relative `
        wd.classList = "gtst w-[5px] h-[0px] bg-green-600  absolute origin-bottom duration-0 rotate-[0deg] bottom-[450px] right-0 "
        wl.style.width = `${hghtW[i]}px`
        wl.style.marginLeft = `${e}px`

        wl.appendChild(wd)
        myn.appendChild(wl)

    })
})
wall()

let tpi = document.querySelectorAll(".gtst")



const tst = document.querySelector(".tst")
const gtst = document.querySelector(".gtst")
let py = 0
let sum = ''

// const pat =(()=>{py++})
let flag = 0
// const tsa = (() => {
let ty = 0
let tty = 0
let counter = 0

let pyt = []
let py3 = 0
const wood = (() => {
    tst.addEventListener("mousedown", (() => {

        sum = setInterval(() => {
            // gtst.style.height = `${py++}px`
            tpi[flag].style.height = `${py++}px`
        }, 0);
        // console.log(flag);
    }))
    tst.addEventListener("mouseup", () => {
        clearInterval(sum)
        tpi[flag].style.transition = "0.5s"
        tpi[flag].style.transform = "rotate(90deg)"
        console.log('py', py);
        // console.log('py3', py3);
        // console.log("Sum", py + py3);
        // console.log(flag);
        tsthe.forEach((e, i) => {
            ty = ty + e + hghtW[i]
            // ty = e + hghtW[i]
            pyt.push(ty)
            console.log(py + py3);
            // console.log((pyt[i] - hghtW[i]), 'on', pyt[i]);
            // if ((py + py3) > (pyt[i] - hghtW[i]) && (py + py3) < pyt[i]) {
            if ((py + py3) > (pyt[i] - hghtW[i]) && (py + py3) < pyt[i] ){
                console.log(">>>>>>>>>>>Yes");
                // console.log('pyt', pyt[i],'sum + py ',py + pyt[i]);
                // console.log(i);
                flag = i + 1
                py3 = pyt[i]
                // console.log('py3',py3);
                py = 0
                // console.log('flag', flag);
            }
            // else if((py + py3) > (pyt[i] - hghtW[i]) && (py + py3) < pyt[i])){
                
            // }
            else {
                console.log(">>>>>NO");


            }
        })
        console.log(tsthe);
        console.log(hghtW);

    })




})

wood()
