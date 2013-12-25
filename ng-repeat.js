document.addEventListener("DOMContentLoaded",function(){


    var model = {};



    var controller = new PowerClass("controller",function($els){

        this.createControllerModel = function(modelName){

        };

        this.getControllerModel = function(){

        };

        this.watchAttribute("data-controller",function($el,$attrs,$val,attrName){

            var controllerModel = null;
            if($val){
                if(!model[$val]){
                    model[$val] = {};
                }

                controllerModel =  model[$val];
            }

        });


    });

    var dataDisplay = new PowerClass("data-display",function($els,packet){

        this.dependendsUpon([
            {
                name:"controller",
                reference:controller
            }
        ]);


        this.watchAttribute("ng-show",function($el,$attrs,$val,attrName){

        });

    })



},false);
