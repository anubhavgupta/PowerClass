document.addEventListener("DOMContentLoaded",function(){


    var innerSlider = new PowerClass("inner-slider",function(){

        this.watchAttribute("data-tile-height",function($el,$attrs,$value,atrName){
            $el.style.height = $value;
            $el.style.lineHeight = $value;
        });

    });


    var designTile = new PowerClass("design-tile",function($els){

        this.watchAttribute("data-tile-size",function($el,$attrs,$val,attrName){
            switch($val){
                case "1":
                    //add come class to it for below style
                    //also this class should do some work
                    $el.classList.add("tile-back-1");
                    break;
                case "2":
                    $el.classList.add("tile-back-2");
                    break;
                case "3":
                    $el.classList.add("tile-back-3");
                    break;
            }

        });

        this.watchAttribute("data-background-color",function($el,$atts,$val,attrName){
            $el.style.background = $val;
        });

        this.watchAttribute("data-tile-height",function($el,$attrs,$value,atrName){
            $el.style.height = $value;
            $el.style.lineHeight = $value;
            this.forEach($el.children,function(el,index){
                innerSlider.setAttribute(el,"data-tile-height",$value);
            });

        });
    });

    var tileRow = new PowerClass("tile-row",function($el){

        this.watchAttribute("data-tiles-background",function($el,$attrs,$value,atrName){

            this.forEach($el.children,function($el,index){
                designTile.setAttribute($el,"data-background-color",$value);
            })

        });

        this.watchAttribute("data-tile-height",function($el,$attrs,$value,atrName){
            this.forEach($el.children,function(el,index){
                designTile.setAttribute(el,"data-tile-height",$value);
            })
        });
    })


},false);
































var p = function(classOrEl){

};
