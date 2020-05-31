var blank = 25;

function SelectYear2Css() {
    var x = document.getElementsByClassName("timing");
    var y = document.getElementsByClassName("point");
    for (var i = 0; i < x.length; i++) {
        var temp = (x[i].innerHTML - 1920) * blank;
        temp = temp + 10;
        //temp = x[i].innerHTML;
        //alert(temp);
        y[i].style.top = temp + "px";
        //x[i].style.color = "red";
    }

}

function createYear() {
    var st = 1920;
    for (var i = 1920; i <= 2005; i += 5) {
        var para = document.createElement("div");
        para.className = "year";
        para.style.top = (i - 1920) * blank + "px"
        var node = document.createTextNode(i);
        para.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(para);
    }
}

function createDash() {
    var A = document.getElementsByClassName("dash");
    var B = document.getElementsByClassName("period");
    for (var i = 0; i < B.length; i++) {
        var temp = B[i].innerHTML;
        var st = (temp.split("~")[0] - 1920) * blank;
        var ed = (temp.split("~")[1] - 1920) * blank;
        //alert(st);
        
        A[i].style.height = ed-st-1 + "px";
        A[i].style.top = st + "px";
       
    }
}

createYear();
SelectYear2Css();
createDash();