/**
 *
 * POWER CLASS
 *
 * @param className
 * @param scopeMethod
 * @constructor
 *
 *
 * TODO:-
 * add old value and new value
 */
var PowerClass = function(className,scopeMethod,$rootNode,dataPacket){

    this.className = className;
    this.elements = ($rootNode || document).getElementsByClassName(className);

    //also make this an array so that we can run attributes as they are registered in watch attributes.
    this.attributesToWatch={};

    //constructor
    scopeMethod.apply(this,[this.elements,dataPacket]);
    this.update();
};

PowerClass.prototype.forEach = function(arraySet,method){
    for(var i=0;i<arraySet.length;i++){
        method.apply(this,[arraySet[i],i]);
    }
};

PowerClass.prototype.watchAttribute = function(attributeName,handler){
    this.attributesToWatch[attributeName] = handler;
};

PowerClass.prototype.setAttribute = function($element,attributeName,value){
    if(typeof $element == "string"){
        this.forEach(this.elements,function(el,index){
            el.setAttribute($element,attributeName);
        });
        this.update();
    }
    else{
        $element.setAttribute(attributeName,value);
        this.update($element);
    }

};


PowerClass.prototype.encode = function(text){
    text = text.replace(/[\u00A0-\u99999<>\&]/gim, function(i) {
        return '&#'+i.charCodeAt(0)+';';
    });
    return text;
};

PowerClass.prototype.update = function(element){

    if(!element){
        this.forEach(this.elements,function(el,index){
            for(var i in this.attributesToWatch){
                if(this.attributesToWatch.hasOwnProperty(i) && el.attributes[i]){
                    this.attributesToWatch[i].apply(this,[el,el.attributes,this.encode(el.attributes[i].value),i]);
                }
            }
        });
    }
    else if(element.classList.contains(this.className)){ // issue with legacy support
        for(var i in this.attributesToWatch){
            if(this.attributesToWatch.hasOwnProperty(i) && element.attributes[i]){
                this.attributesToWatch[i].apply(this,[element,element.attributes,this.encode(element.attributes[i].value),i]);
            }
        }
    }

};


function PowerClassFactory(className,handlerMethod){

    var className = className;
    var handlerMethod = handlerMethod;

    return function($rootNode,dataPacket){
        return new PowerClass(className,handlerMethod,$rootNode,dataPacket);
    }
}

