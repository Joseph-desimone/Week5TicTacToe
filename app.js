let clickedX = 'clickedX';
let clickedO = 'clickedO';

let box1 = $('#box1')
let box2 = $('#box2')
let box3 = $('#box3')
let box4 = $('#box4')
let box5 = $('#box5')
let box6 = $('#box6')
let box7 = $('#box7')
let box8 = $('#box8')
let box9 = $('#box9')


turns = 0;
let divs = $('.col-3');
$(`button`).on("click", (evt) => {
    if (turns % 2 == 0) {
        console.log(evt)
        $(evt.target).addClass("clickedX").removeClass("notClicked");
        turns++;
        evt.target.setAttribute("disabled", "");
    } else {
        $(evt.target).addClass("clickedO").removeClass("notClicked");
        turns++;
        evt.target.setAttribute("disabled", "");
    }
});

$('#box1').on('click', (evt) => {
    checkForWinX();
    checkForWinO();
});
$('#box2').on('click', (evt) => {
    checkForWinX();
    checkForWinO();
});
$('#box3').on('click', (evt) => {
    checkForWinX();
    checkForWinO();
});
$('#box4').on('click', (evt) => {
    checkForWinX();
    checkForWinO();
});
$('#box5').on('click', (evt) => {
    checkForWinX();
    checkForWinO();
});
$('#box6').on('click', (evt) => {
    checkForWinX();
    checkForWinO();
});
$('#box7').on('click', (evt) => {
    checkForWinX();
    checkForWinO();
});
$('#box8').on('click', (evt) => {
    checkForWinX();
    checkForWinO();
});
$('#box9').on('click', (evt) => {
    checkForWinX();
    checkForWinO();
});

function checkForWinX(clickedX) {
if (box1.hasClass('clickedX') && box2.hasClass('clickedX') && box3.hasClass('clickedX') ||
    box4.hasClass('clickedX') && box5.hasClass('clickedX') && box6.hasClass('clickedX') ||
    box7.hasClass('clickedX') && box8.hasClass('clickedX') && box9.hasClass('clickedX') ||
    box1.hasClass('clickedX') && box4.hasClass('clickedX') && box7.hasClass('clickedX') ||
    box2.hasClass('clickedX') && box5.hasClass('clickedX') && box8.hasClass('clickedX') ||
    box3.hasClass('clickedX') && box6.hasClass('clickedX') && box9.hasClass('clickedX') ||
    box1.hasClass('clickedX') && box5.hasClass('clickedX') && box9.hasClass('clickedX') ||
    box3.hasClass('clickedX') && box5.hasClass('clickedX') && box7.hasClass('clickedX')
) {
    alert('Winner: X');
}}

function checkForWinO(clickedO) {
if (box1.hasClass('clickedO') && box2.hasClass('clickedO') && box3.hasClass('clickedO') ||
    box4.hasClass('clickedO') && box5.hasClass('clickedO') && box6.hasClass('clickedO') ||
    box7.hasClass('clickedO') && box8.hasClass('clickedO') && box9.hasClass('clickedO') ||
    box1.hasClass('clickedO') && box4.hasClass('clickedO') && box7.hasClass('clickedO') ||
    box2.hasClass('clickedO') && box5.hasClass('clickedO') && box8.hasClass('clickedO') ||
    box3.hasClass('clickedO') && box6.hasClass('clickedO') && box9.hasClass('clickedO') ||
    box1.hasClass('clickedO') && box5.hasClass('clickedO') && box9.hasClass('clickedO') ||
    box3.hasClass('clickedO') && box5.hasClass('clickedO') && box7.hasClass('clickedO')
) {
    alert('Winner: O'); 
} else if (turns == 9){
    alert('Tie Game');
}}
    

$('#restart').on("click", () => {
    $("button").addClass("notClicked").removeClass("clickedX clickedO").removeAttr("disabled");
    turns = 0;
    $("#restart").removeClass("notClicked")
});