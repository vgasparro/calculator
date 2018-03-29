//all common functions to configure modules

"use strict";
window["com"]={};
com["sapui"]={v:10};

// $ is alias for com.sapui
var $ = com.sapui

$.initStructure=function (libPath){
    var root = window
    var structure=libPath.split(".")
    for (var i = 0; i < structure.length; i++) {
        root[structure[i]]=root[structure[i]]||{}
        root= root[structure[i]];
        }
}

$.initconf = function()
{
    for (var y=0;y<conf.modules.length;y++)
    {
     var mod = conf.modules[y];
     if (mod.active) 
     {
     for (var z=0; z<mod.src.length;z++)
     {
      var script = document.createElement(script)
      script.src= mod.rootpath+mod.src[z];
      document.write(script.outerHTML)

     }
     }

    }
}
 
$.initconf()