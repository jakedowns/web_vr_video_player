(()=>{"use strict";var e={d:(r,t)=>{for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)},r={};e.d(r,{default:()=>t});class t{data;verifyVideoSRC;name;constructor(e,r=!0,t="Local Files"){return"string"!=typeof e?(err="Error: `json_file` must be valid string",console.error(err),err):(this.verifyVideoSRC=r,this.name=t,fetch(e).then((e=>e.json())).then((e=>(window.registerExtension({type:"json_file",name:this.name,verifyVideoSRC:this.verifyVideoSRC,data:e}),this.data=e,!0))).catch((e=>(console.error("Error:",e),e))),{type:"json_file",name:this.name,verifyVideoSRC:this.verifyVideoSRC,data:this.data})}}self.JsonLoader=r.default})();