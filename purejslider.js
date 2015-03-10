<script type="text/javascript">
    //set the interval temporary variable
    var setIntrVal = null;
    var intrVal = 3000;

    //lets get the slider elements
    var slides = document.getElementById('slides'); //get the <ul id="slides">
    var slide = document.getElementsByClassName('slide'); //get the <li class="slide">
    var active = document.getElementsByClassName('active'); //get the <li class="slide active">

    //lets set z-index properties to the slides
    var j = 99; //lets initialize a higher value, change this if you need to
    for (var i = 0; i < slide.length; i++) {
        slide[i].style.zIndex = j;
        j--;
    }

    var ywtSlider = {
        init: function (newIntrVal) {
            //pass the new interval value into the intrVal variable
            if(newIntrVal) intrVal = newIntrVal;

            //start cycle on init
            ywtSlider.cycle();
        },

        cycle: function() {
            //check if cycle is already started then clear the cycle
            //this will clear the current interval
            if(setIntrVal) clearInterval(setIntrVal);

            //ok lets start another cycle
            setIntrVal = setInterval(function () {
                ywtSlider.slide('next');
            }, intrVal);

            //console.log(interVal);
        },

        slide: function (dir) {
            //lets get the slide index number so we can set this to the slide
            var nodeList = Array.prototype.slice.call(slides.children);
            var itemIndex = nodeList.indexOf(active[active.length - 1]);

            if (dir == 'back') {
                //check and run if the direction is back
                //if the direction is back
                //lets remove the class starting from the current item to the last
                for (k = itemIndex; k < slide.length; k++) {
                    slide[k].className = 'slide';
                }
            } else if (dir == 'next') {
                //check and run if the direction is next
                //lets check first the position of the current item
                if (itemIndex + 1 < slide.length - 1) {
                    //if the next item index is not the last item lets set the 'active' class
                    //to the next item
                    slide[itemIndex + 1].className += ' active';

                } else {
                    //if the next item supposed to be the last item, lets remove the 'active' class
                    //from all slide elements
                    for (var k = 0; k < slide.length; k++) {
                        slide[k].className = 'slide';
                    }
                }
            }

            //continue the cycle
            ywtSlider.cycle();
        }
    };

    window.onload = function() {
        ywtSlider.init(5000);
    }
</script>
