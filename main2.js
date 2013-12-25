//ng-model and ng-bind example.

document.addEventListener("DOMContentLoaded",function(){


    var model ={};

    var contentArea = new PowerClass("content-area",function($els){

        this.watchAttribute("ng-display",function($el,$attrs,$val){

            var text = this.encode(model[$val] || "");
            $el.innerHTML = text;
        })

    });

    var inputModel = new PowerClass("input-model",function($els){

        this.watchAttribute("ng-model",function($el,$attrs,$val,attrName){
            if(!model.hasOwnProperty($val)){
                model[$val] = "";
            }

            function updateMV(){
                model[$val] = $el.value;
                contentArea.update();
            }

            updateMV();


            $el.oninput = function(e){
                updateMV();
            };


        });

    });


    var btn = document.getElementById("btn");
    btn.onclick = function(){
        inputModel.setAttribute("ng-model","lastName");
    }

},false);
