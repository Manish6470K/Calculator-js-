$('.btn').click(function(){
    var get = $(this).html(); 
    console.log(get);
    exception(get);
}); 

var prev = 0;
var btnn = 0;
function exception(chk){
    if(chk == "+" || chk == "-" || chk == "*" || chk == "/"){
        console.log("Prev (operator chk) =" + prev);
        if(prev == 1){
            $('.op').attr("disabled", true);
            console.log(prev);
        }
        else{
            var inpText = $('.input').html()+chk;
            $('.history').append(inpText);
            $('.input').html("");
            prev = 1;
            btnn = 0;
            console.log(prev);
        }
    } 
    else if(chk == "C"){
        $('.history').html("");
        $('.input').html("");
        console.log(prev);
        btnn = 0;
    }
    else if(btnn == 1){ 
        $('.btn').attr("disabled", true);
        console.log("btnn = "+btnn);
    }
    else if(chk == "="){
        var hist = $('.history').html();
        var inp = $('.input').html();
        if(inp == ""){ 
            hist = hist.slice(0,-1); 
        }
        var res = eval(hist + inp);
        $('.input').html(res);
        $('.history').html("");
        prev = 0;
        btnn = 1;
    }
    else{ 
        input(chk);
        prev = 0;
        console.log(prev);
    }
}
function input(vlu){
    $('.input').append(vlu);
}
 