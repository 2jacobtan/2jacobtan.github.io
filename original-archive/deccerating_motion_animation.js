(function(){
    // var D = 10; /*distance*/
    // VI = 10; /*initial velocity*/
    // VF = 0; /*final velocity*/
    var max = 128; /* max displacement */

    var rows = 32; /*# of rows to display*/
    var list = document.createElement("ol");
    var part0 = "";
    for(i=0;i<max;i++) part0 += "•";
    for(i=0;i<rows;i++){
        var item0 = document.createElement("li");
        var text0 = document.createTextNode(part0);
        item0.appendChild(text0);
        list.appendChild(item0);
    }

    document.body.appendChild(list);
    
    /* outputs a line indicating the displacement */
    function line(a, d){ /*a amplitude; d direction{0,1}*/
        var part1 = "", part2 = "";		
		for(i=0;i<a;i++) part1 += "◘";
        for(i=a;i<max;i++) part2 += "•";
        // document.write(part1,part2,"<br/>")
		var item = document.createElement("li");
        if (d == 0) var text = document.createTextNode(part1 + part2);
        else if (d == 1) var text = document.createTextNode(part2 + part1);
        else {console.log("Error 001");
            var text = document.createTextNode("Error 001");
        }
        item.appendChild(text);
        list.insertBefore(item, list.firstChild);
        list.removeChild(list.lastChild);
    }

    /* timed loop */
    {
        var loopI = 0, dir = 0;
		function loop(){
            if (loopI == max+1) {
                loopI = 0;
                if (dir == 0) dir = 1;
                else if (dir == 1) dir = 0;
                else console.log("Error 002");
            }
            
            // version 1
            // var amp = Math.round(max * (1+Math.cos(Math.PI+loopI/max*Math.PI))/2);
            // line(amp, dir);
            
            // version 2
            var amp = Math.round(max * (1+Math.cos(Math.PI+loopI/max*Math.PI*2))/2);
            line(amp, 0); /* use "dir" as 2nd argument to pass directional info*/

            loopI++;
        }
        window.setInterval(loop,25);
   }
})();