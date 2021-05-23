const colors = [
    'red',
    'green',
    'violet',
    'gray',
    'blue',
    'yellow',
];

const refs = {
    start:document.querySelector(`button[data-action="start"]`),
    stop:document.querySelector(`button[data-action="stop"]`),
    body:document.querySelector('body')
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener('click',()=>{

    refs.start.setAttribute("disabled", "true");
    refs.stop.removeAttribute("disabled");

    let interval = setInterval(()=>{
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0,5)];
    },1000);

    refs.stop.addEventListener('click',()=>{
        clearInterval(interval);
        refs.start.removeAttribute("disabled");
        refs.stop.setAttribute("disabled", "true");
    });
});
