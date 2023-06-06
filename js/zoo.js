    var width = $(window).width();
    var height = $(window).height();
    var upleft = 0;
 function goRight() {
        $("#animate").animate({
        left: width
      }, 5000, function() {
         setTimeout(goLeft, 100);
      });
    }
    function goLeft() {
        $("#animate").animate({
        left: 0
      }, 5000, function() {
         setTimeout(goRight, 100);
      });
    }
    function goUp() {
        $("#animate").animate({
        top: 0
      }, 5000, function() {
         setTimeout(goDown, 100);
      });
    }
    function goDown() {
        $("#animate").animate({
        top: height
      }, 5000, function() {
         setTimeout(goUp, 100);
      });
    }
    setTimeout(goRight, 100);

$("#animate").on('click',function(){$('#animate').stop();
                  if(upleft == 0)
                  {goDown(); upleft=1;}
                                    else {goLeft();upleft=0}
})