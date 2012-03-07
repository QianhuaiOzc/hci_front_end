var hci = {
    currentY:  function() {
       var y = -1;
       var userAgent = navigator.userAgent;
       if(userAgent.indexOf('Chrome') != -1) {
           y = document.body.scrollTop;
       } else {
           y = document.documentElement.scrollTop;
       }
       return y;
    },
    fx: function(ontween, onend, duration, callback) {
            var pos, runTime, startTime = + new Date,
            timer = setInterval(function() {
                runTime = + new Date - startTime;
                pos = runTime / duration;

                if(pos >= 1) {
                    clearInterval(timer);
                    onend(pos);
                } else {
                    ontween(pos);
                };
            }, 13);
    }
}
