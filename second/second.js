document.addEventListener("DOMContentLoaded",function(){

    var model ={

        "my-controller":{
            data1:"anubhav",
            data2:"anubhavGupta",
            data3:"sk gupta",
            data4:"alg in"
        },
        "my-controller2":{
            data1:"gupta"
        }
    };

    var view = PowerClassFactory("view",function($els,dataPacket){

        this.watchAttribute("display-value",function($el,$attrs,$val,attrName){
            $el.innerHTML = dataPacket[$val] || "no Text";
        });

        this.watchAttribute("ng-mustache",function($el,$attrs,$val,attrName){
            var text = $el.innerHTML;

        })

    });


    var controller =  new PowerClass("controller",function($els){

        this.watchAttribute("ng-controller",function($el,$attrs,$val){

            if(!model[$val]){
                model[$val] ={};
            }

            if(!$el.view){
                $el.view ={};
            }

            var cont =  view($el,model[$val]);

        });

    });


    var x = document.getElementsByClassName("controller")[0];
     controller.setAttribute(x,"ng-controller","my-controller2");






},false);

