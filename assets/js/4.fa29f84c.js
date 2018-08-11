(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,t,n){"use strict";n(68)(),e.exports={meta:{docs:{description:"disallow unused `eslint-disable` comments",category:"Best Practices",recommended:!1,url:"https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html"},fixable:null,schema:[]},create:()=>({})}},101:function(e,t,n){e.exports=(()=>[n(102)])},185:function(e,t,n){"use strict";const s=n(57),l=n(55);e.exports={meta:{docs:{description:"disallow unused `eslint-enable` comments",category:"Best Practices",recommended:!0,url:"https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html"},fixable:null,schema:[]},create(e){const t=e.getSourceCode(),n=s.get(t);return{Program(){for(const t of n.unusedEnableDirectives)e.report({loc:l.toRuleIdLocation(t.comment,t.ruleId),message:t.ruleId?"'{{ruleId}}' rule is re-enabled but it has not been disabled.":"ESLint rules are re-enabled but those have not been disabled.",data:t})}}}}},186:function(e,t,n){"use strict";const s=n(55),l={Block:/^\s*(eslint(?:-disable|-enable|-env)?|exported|globals?)(?:\s|$)/,Line:/^\s*(eslint-disable(?:-next)?-line)(?:\s|$)/};e.exports={meta:{docs:{description:"disallow ESLint directive-comments",category:"Stylistic Issues",recommended:!1,url:"https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html"},fixable:null,schema:[{type:"object",properties:{allow:{type:"array",items:{enum:["eslint","eslint-disable","eslint-disable-line","eslint-disable-next-line","eslint-enable","eslint-env","exported","global","globals"]},additionalItems:!1,uniqueItems:!0}},additionalProperties:!1}]},create(e){const t=e.getSourceCode(),n=new Set(e.options[0]&&e.options[0].allow||[]);return{Program(){for(const i of t.getAllComments()){const t=l[i.type];if(null==t)continue;const o=t.exec(i.value);null==o||n.has(o[1])||e.report({loc:s.toForceLocation(i.loc),message:"Unexpected ESLint directive comment."})}}}}}},187:function(e,t,n){"use strict";e.exports={patch:n(68)}},188:function(e,t,n){"use strict";var s=n(67);n.n(s).a},195:function(e,t,n){"use strict";n.r(t);var s=n(192),l=n(89),i={name:"ESLintPlayground",components:{EslintEditor:s.a},props:{code:{type:String,required:!0},type:{type:String,required:!0,validator:e=>"bad"===e||"good"===e},reportUnusedDisable:{type:Boolean,default:!1}},data:()=>({linter:null}),computed:{config(){const e={globals:{ArrayBuffer:!1,DataView:!1,Float32Array:!1,Float64Array:!1,Int16Array:!1,Int32Array:!1,Int8Array:!1,Map:!1,Promise:!1,Proxy:!1,Reflect:!1,Set:!1,Symbol:!1,Uint16Array:!1,Uint32Array:!1,Uint8Array:!1,Uint8ClampedArray:!1,WeakMap:!1,WeakSet:!1,Atomics:!1,SharedArrayBuffer:!1},rules:{},parserOptions:{ecmaVersion:2018,sourceType:"module"}};return this.reportUnusedDisable&&(e.rules["eslint-comments/no-unused-disable"]="error"),e}},async mounted(){const{default:e}=await Promise.resolve().then(n.t.bind(null,102,7)),t=this.linter=new e;for(const e of Object.keys(l.rules))t.defineRule(`eslint-comments/${e}`,l.rules[e])}},o=(n(188),n(0)),r=Object(o.a)(i,function(){var e=this.$createElement;return(this._self._c||e)("eslint-editor",{staticClass:"eslint-playground",class:"eslint-playground-"+this.type,attrs:{linter:this.linter,config:this.config,code:this.code,dark:"",fix:""}})},[],!1,null,null,null);r.options.__file="eslint-playground.vue";t.default=r.exports},55:function(e,t,n){"use strict";const s=n(94),l=/[^\r\n\u2028\u2029]*(?:\r\n|[\r\n\u2028\u2029]|$)/g;e.exports={toForceLocation:e=>({start:{line:e.start.line,column:-1},end:e.end}),toRuleIdLocation(t,n){if(null==n)return e.exports.toForceLocation(t.loc);const i=t.value.match(l),o=new RegExp(`([\\s,]|^)${s(n)}(?:[\\s,]|$)`);{const e=o.exec(i[0]);if(null!=e){const s=t.loc.start;return{start:{line:s.line,column:2+s.column+e.index+e[1].length},end:{line:s.line,column:2+s.column+e.index+e[1].length+n.length}}}}for(let e=1;e<i.length;++e){const s=o.exec(i[e]);if(null!=s){const l=t.loc.start;return{start:{line:l.line+e,column:s.index+s[1].length},end:{line:l.line+e,column:s.index+s[1].length+n.length}}}}return t.loc},lte:(e,t)=>e.line<t.line||e.line===t.line&&e.column<=t.column}},57:function(e,t,n){"use strict";const s=n(55),l=/^\s*(eslint-(?:en|dis)able(?:(?:-next)?-line)?)\s*(?:(\S|\S[\s\S]*\S)\s*)?$/,i=/[\s,]+/g,o=new WeakMap;e.exports=class e{static get(t){let n=o.get(t.ast);return null==n&&((n=new e)._scan(t),o.set(t.ast,n)),n}constructor(){this.areas=[],this.duplicateDisableDirectives=[],this.unusedEnableDirectives=[],this.numberOfRelatedDisableDirectives=new Map}_disable(e,t,n,s){if(n)for(const l of n)null!=this._getArea(l,t)&&this.duplicateDisableDirectives.push({comment:e,ruleId:l}),this.areas.push({comment:e,ruleId:l,kind:s,start:t,end:null});else null!=this._getArea(null,t)&&this.duplicateDisableDirectives.push({comment:e,ruleId:null}),this.areas.push({comment:e,ruleId:null,kind:s,start:t,end:null})}_enable(e,t,n,s){const l=new Set;if(n)for(const i of n){let n=!1;for(let e=this.areas.length-1;e>=0;--e){const o=this.areas[e];null===o.end&&o.kind===s&&o.ruleId===i&&(l.add(o.comment),o.end=t,n=!0)}n||this.unusedEnableDirectives.push({comment:e,ruleId:i})}else{let n=!1;for(let e=this.areas.length-1;e>=0;--e){const i=this.areas[e];null===i.end&&i.kind===s&&(l.add(i.comment),i.end=t,n=!0)}n||this.unusedEnableDirectives.push({comment:e,ruleId:null})}this.numberOfRelatedDisableDirectives.set(e,l.size)}_getArea(e,t){for(let n=this.areas.length-1;n>=0;--n){const l=this.areas[n];if((null===l.ruleId||l.ruleId===e)&&s.lte(l.start,t)&&(null===l.end||s.lte(t,l.end)))return l}return null}_scan(e){for(const t of e.getAllComments()){const e=l.exec(t.value);if(null==e)continue;const n=e[1],s=e[2]?e[2].split(i):null;if("Block"===t.type&&"eslint-disable"===n)this._disable(t,t.loc.start,s,"block");else if("Block"===t.type&&"eslint-enable"===n)this._enable(t,t.loc.start,s,"block");else if("Line"===t.type&&"eslint-disable-line"===n){const e=t.loc.start.line,n={line:e,column:0},l={line:e+1,column:-1};this._disable(t,n,s,"line"),this._enable(t,l,s,"line")}else if("Line"===t.type&&"eslint-disable-next-line"===n){const e=t.loc.start.line,n={line:e+1,column:0},l={line:e+2,column:-1};this._disable(t,n,s,"line"),this._enable(t,l,s,"line")}}}}},67:function(e,t,n){},68:function(e,t,n){"use strict";const s=n(101),{toRuleIdLocation:l}=n(55),i=/'(.+?)'/;function o(e,t){const n=e&&e.rules,s=n&&n[t];switch(Array.isArray(s)?s[0]:s){case 2:case"error":return 2;case 1:case"warn":return 1;default:return 0}}function r(e,t){if(null!=t){const n={line:e.line,column:e.column-1},s=t.getIndexFromLoc(n),l={includeComments:!0},i=t.getTokenByRangeStart(s,l);if(null!=i&&("Line"===i.type||"Block"===i.type))return i}}function a(e){return!e.fatal&&!e.ruleId&&e.message.includes("eslint-disable")}function c(e,t,n,s){const o=Object.assign({},n),r=i.exec(n.message),a=r&&r[1];if(o.ruleId=e,o.severity=t,o.message=a?`'${a}' rule is disabled but never reported.`:"ESLint rules are disabled but never reported.",null!=s)if(a){const e=l(s,a);o.line=e.start.line,o.column=e.start.column+1,o.endLine=e.end.line,o.endColumn=e.end.column+1}else o.endLine=s.loc.end.line,o.endColumn=s.loc.end.column+1;return o}function u(e,t,n,s,l){for(let i=e.length-1;i>=0;--i){const o=e[i];if(!a(o))continue;const u=c(n,s,o,r(o,t));l?e.splice(i+1,0,u):e.splice(i,1,u)}return e}e.exports=((e="eslint-comments/no-unused-disable")=>{for(const t of s()){const n=t.prototype.verify;Object.defineProperty(t.prototype,"verify",{value:function(t,s,l){const i=o(s,e);if(0===i)return n.call(this,t,s,l);const r="string"==typeof l?{filename:l}:l||{},a=Boolean(r.reportUnusedDisableDirectives);return u(n.call(this,t,s,Object.assign({},r,{reportUnusedDisableDirectives:!0})),this.getSourceCode(),e,i,a)},configurable:!0,writable:!0})}})},89:function(e,t,n){"use strict";e.exports={configs:n(90),rules:n(92),utils:n(187)}},90:function(e,t,n){"use strict";e.exports={recommended:n(91)}},91:function(e,t,n){"use strict";e.exports={plugins:["eslint-comments"],rules:{"eslint-comments/disable-enable-pair":"error","eslint-comments/no-aggregating-enable":"error","eslint-comments/no-duplicate-disable":"error","eslint-comments/no-unlimited-disable":"error","eslint-comments/no-unused-enable":"error"}}},92:function(e,t,n){"use strict";e.exports={"disable-enable-pair":n(93),"no-aggregating-enable":n(95),"no-duplicate-disable":n(96),"no-restricted-disable":n(97),"no-unlimited-disable":n(99),"no-unused-disable":n(100),"no-unused-enable":n(185),"no-use":n(186)}},93:function(e,t,n){"use strict";const s=n(57),l=n(55);e.exports={meta:{docs:{description:"require a `eslint-enable` comment for every `eslint-disable` comment",category:"Best Practices",recommended:!0,url:"https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html"},fixable:null,schema:[{type:"object",properties:{allowWholeFile:{type:"boolean"}},additionalProperties:!1}]},create(e){const t=e.options[0]&&e.options[0].allowWholeFile,n=e.getSourceCode(),i=s.get(n);return{Program(n){if(!t||0!==n.body.length)for(const s of i.areas)null==s.end&&(t&&l.lte(s.start,n.loc.start)||e.report({loc:l.toRuleIdLocation(s.comment,s.ruleId),message:s.ruleId?"Requires 'eslint-enable' directive for '{{ruleId}}'.":"Requires 'eslint-enable' directive.",data:s}))}}}}},95:function(e,t,n){"use strict";const s=n(57),l=n(55);e.exports={meta:{docs:{description:"disallow a `eslint-enable` comment for multiple `eslint-disable` comments",category:"Best Practices",recommended:!0,url:"https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html"},fixable:null,schema:[]},create(e){const t=e.getSourceCode(),n=s.get(t);return{Program(){for(const t of n.numberOfRelatedDisableDirectives){const n=t[0],s=t[1];s>=2&&e.report({loc:l.toForceLocation(n.loc),message:"This `eslint-enable` comment affects {{count}} `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment.",data:{count:s}})}}}}}},96:function(e,t,n){"use strict";const s=n(57),l=n(55);e.exports={meta:{docs:{description:"disallow duplicate `eslint-disable` comments",category:"Best Practices",recommended:!0,url:"https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html"},fixable:null,schema:[]},create(e){const t=e.getSourceCode(),n=s.get(t);return{Program(){for(const t of n.duplicateDisableDirectives)e.report({loc:l.toRuleIdLocation(t.comment,t.ruleId),message:t.ruleId?"'{{ruleId}}' rule has been disabled already.":"ESLint rules have been disabled already.",data:t})}}}}},97:function(e,t,n){"use strict";const s=n(98),l=n(57),i=n(55);e.exports={meta:{docs:{description:"disallow `eslint-disable` comments about specific rules",category:"Stylistic Issues",recommended:!1,url:"https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html"},fixable:null,schema:{type:"array",items:{type:"string"},uniqueItems:!0}},create(e){const t=e.getSourceCode(),n=l.get(t);if(0===e.options.length)return{};const o=new s;for(const t of e.options)o.add(t);return{Program(){for(const t of n.areas)(null==t.ruleId||o.ignores(t.ruleId))&&e.report({loc:i.toRuleIdLocation(t.comment,t.ruleId),message:"Disabling '{{ruleId}}' is not allowed.",data:{ruleId:t.ruleId||String(e.options)}})}}}}},99:function(e,t,n){"use strict";const s=n(55),l={Block:/^\s*(eslint-disable)\s*(\S)?/,Line:/^\s*(eslint-disable(?:-next)?-line)\s*(\S)?/};e.exports={meta:{docs:{description:"disallow `eslint-disable` comments without rule names",category:"Best Practices",recommended:!0,url:"https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html"},fixable:null,schema:[]},create(e){const t=e.getSourceCode();return{Program(){for(const n of t.getAllComments()){const t=l[n.type];if(null==t)continue;const i=t.exec(n.value);i&&!i[2]&&e.report({loc:s.toForceLocation(n.loc),message:"Unexpected unlimited '{{kind}}' comment. Specify some rule names to disable.",data:{kind:i[1]}})}}}}}}}]);