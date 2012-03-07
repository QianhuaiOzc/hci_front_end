var fx = function(ontween, onend, duration) {
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
};
