"use strict";
com= com||{};
com.sapui= com.sapui||{};

com.sapui.calculator={};
var calc = com.sapui.calculator;
calc.screen= 0;
calc.memory= 0;

var mem = calc.mem={}

mem.mplus=function(){}
mem.mminus=function(){}
mem.mshow=function(){}
calc.clear=function(){}
mem.history={pv2:0,pv1:0,v:0}


mem.plus=function(valueToSave){
    this.pv2=this.v1
    this.pv1=this.v
    this.v+=valueToSave
};

mem.minus=function(valueToSave){
    this.pv2=this.v1
    this.pv1=this.v
    this.v-=valueToSave
};

mem.show=function(){
    calc.screen=this.v;
    };


calc.clear=function(){
    this.screen=0;
};

var ops = calc.ops={};

 
ops.multi=function (v1,v2){
    return v1*v2
    }
ops.divid=function (v1,v2){
    return v1/v2
}
ops.add=function (v1,v2){
    return v1+v2
}
ops.sub=function (v1,v2){
    return v1-v2
}

 
calc.op={};
calc.op.n1 =2;
calc.op.n2 =4;
calc.op.operator ="add";

calc.ops.generic=function(){screen.value=
    ops[this.operator](this.n1,this.n2)
}

calc.ops.generic1=function(){screen.value=
    ops[this.operator](this.n1,this.n2)
}

calc.ops.generic.apply(calc.op)

calc.ops.generic1.apply(calc.op)
