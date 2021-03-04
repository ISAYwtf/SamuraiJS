(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[10],{240:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var r=i(63);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var i=[],r=!0,n=!1,a=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(i.push(u.value),!t||i.length!==t);r=!0);}catch(s){n=!0,a=s}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return i}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},259:function(e,t,i){"use strict";i.d(t,"a",(function(){return X})),i.d(t,"b",(function(){return M}));var r=i(6),n=i(12),a=i(0),u=i.n(a),o={},s=/[.[\]]+/,l=function(e){if(null===e||void 0===e||!e.length)return[];if("string"!==typeof e)throw new Error("toPath() expects a string");return null==o[e]&&(o[e]=e.split(s).filter(Boolean)),o[e]},c=function(e,t){for(var i=l(t),r=e,n=0;n<i.length;n++){var a=i[n];if(void 0===r||null===r||"object"!==typeof r||Array.isArray(r)&&isNaN(a))return;r=r[a]}return r};function d(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var f=function e(t,i,a,u,o){if(i>=a.length)return u;var s=a[i];if(isNaN(s)){var l;if(void 0===t||null===t){var c,f=e(void 0,i+1,a,u,o);return void 0===f?void 0:((c={})[s]=f,c)}if(Array.isArray(t))throw new Error("Cannot set a non-numeric property on an array");var v=e(t[s],i+1,a,u,o);if(void 0===v){var b=Object.keys(t).length;if(void 0===t[s]&&0===b)return;if(void 0!==t[s]&&b<=1)return isNaN(a[i-1])||o?void 0:{};t[s];return Object(n.a)(t,[s].map(d))}return Object(r.a)({},t,((l={})[s]=v,l))}var m=Number(s);if(void 0===t||null===t){var S=e(void 0,i+1,a,u,o);if(void 0===S)return;var h=[];return h[m]=S,h}if(!Array.isArray(t))throw new Error("Cannot set a numeric property on an object");var g=e(t[m],i+1,a,u,o),y=[].concat(t);if(o&&void 0===g){if(y.splice(m,1),0===y.length)return}else y[m]=g;return y},v=function(e,t,i,r){if(void 0===r&&(r=!1),void 0===e||null===e)throw new Error("Cannot call setIn() with "+String(e)+" state");if(void 0===t||null===t)throw new Error("Cannot call setIn() with "+String(t)+" key");return f(e,0,l(t),i,r)},b="FINAL_FORM/form-error",m="FINAL_FORM/array-error";function S(e,t){var i=e.errors,r=e.initialValues,n=e.lastSubmittedValues,a=e.submitErrors,u=e.submitFailed,o=e.submitSucceeded,s=e.submitting,l=e.values,d=t.active,f=t.blur,v=t.change,b=t.data,S=t.focus,h=t.modified,g=t.modifiedSinceLastSubmit,y=t.name,p=t.touched,O=t.validating,j=t.visited,E=c(l,y),F=c(i,y);F&&F[m]&&(F=F[m]);var V=a&&c(a,y),w=r&&c(r,y),k=t.isEqual(w,E),L=!F&&!V;return{active:d,blur:f,change:v,data:b,dirty:!k,dirtySinceLastSubmit:!(!n||t.isEqual(c(n,y),E)),error:F,focus:S,initial:w,invalid:!L,length:Array.isArray(E)?E.length:void 0,modified:h,modifiedSinceLastSubmit:g,name:y,pristine:k,submitError:V,submitFailed:u,submitSucceeded:o,submitting:s,touched:p,valid:L,value:E,visited:j,validating:O}}var h=["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","modifiedSinceLastSubmit","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","value","visited","validating"],g=function(e,t){if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(var n=Object.prototype.hasOwnProperty.bind(t),a=0;a<i.length;a++){var u=i[a];if(!n(u)||e[u]!==t[u])return!1}return!0};function y(e,t,i,r,n,a){var u=!1;return n.forEach((function(n){r[n]&&(e[n]=t[n],i&&(~a.indexOf(n)?g(t[n],i[n]):t[n]===i[n])||(u=!0))})),u}var p=["data"],O=function(e,t,i,r){var n={blur:e.blur,change:e.change,focus:e.focus,name:e.name};return y(n,e,t,i,h,p)||!t||r?n:void 0},j=["active","dirty","dirtyFields","dirtyFieldsSinceLastSubmit","dirtySinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","modifiedSinceLastSubmit","pristine","submitting","submitError","submitErrors","submitFailed","submitSucceeded","touched","valid","validating","values","visited"],E=["touched","visited"];function F(e,t,i,r){var n={};return y(n,e,t,i,j,E)||!t||r?n:void 0}var V=function(e){var t,i;return function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t&&n.length===t.length&&!n.some((function(e,i){return!g(t[i],e)}))||(t=n,i=e.apply(void 0,n)),i}},w=function(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then},k=function(e,t){return e===t},L=function e(t){return Object.keys(t).some((function(i){var r=t[i];return!r||"object"!==typeof r||r instanceof Error?"undefined"!==typeof r:e(r)}))};function N(e,t,i,r,n,a){var u=n(i,r,t,a);return!!u&&(e(u),!0)}function A(e,t,i,r,n){var a=e.entries;Object.keys(a).forEach((function(e){var u=a[Number(e)];if(u){var o=u.subscription,s=u.subscriber,l=u.notified;N(s,o,t,i,r,n||!l)&&(u.notified=!0)}}))}function C(e){if(!e)throw new Error("No config specified");var t=e.debug,i=e.destroyOnUnregister,n=e.keepDirtyOnReinitialize,a=e.initialValues,u=e.mutators,o=e.onSubmit,s=e.validate,l=e.validateOnBlur;if(!o)throw new Error("No onSubmit function specified");var d={subscribers:{index:0,entries:{}},fieldSubscribers:{},fields:{},formState:{dirtySinceLastSubmit:!1,modifiedSinceLastSubmit:!1,errors:{},initialValues:a&&Object(r.a)({},a),invalid:!1,pristine:!0,submitting:!1,submitFailed:!1,submitSucceeded:!1,valid:!0,validating:0,values:a?Object(r.a)({},a):{}},lastFormState:void 0},f=0,h=!1,y=!1,p=0,j={},E=function(e,t,i){var r=i(c(e.formState.values,t));e.formState.values=v(e.formState.values,t,r)||{}},C=function(e,t,i){if(e.fields[t]){var n,a;e.fields=Object(r.a)({},e.fields,((n={})[i]=Object(r.a)({},e.fields[t],{name:i,blur:function(){return M.blur(i)},change:function(e){return M.change(i,e)},focus:function(){return M.focus(i)},lastFieldState:void 0}),n)),delete e.fields[t],e.fieldSubscribers=Object(r.a)({},e.fieldSubscribers,((a={})[i]=e.fieldSubscribers[t],a)),delete e.fieldSubscribers[t];var u=c(e.formState.values,t);e.formState.values=v(e.formState.values,t,void 0)||{},e.formState.values=v(e.formState.values,i,u),delete e.lastFormState}},x=function(e){return function(){if(u){for(var t={formState:d.formState,fields:d.fields,fieldSubscribers:d.fieldSubscribers,lastFormState:d.lastFormState},i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];var a=u[e](r,t,{changeValue:E,getIn:c,renameField:C,resetFieldState:M.resetFieldState,setIn:v,shallowEqual:g});return d.formState=t.formState,d.fields=t.fields,d.fieldSubscribers=t.fieldSubscribers,d.lastFormState=t.lastFormState,P(void 0,(function(){B(),_()})),a}}},R=u?Object.keys(u).reduce((function(e,t){return e[t]=x(t),e}),{}):{},q=function(e){return Object.keys(e.validators).reduce((function(t,i){var r=e.validators[Number(i)]();return r&&t.push(r),t}),[])},P=function(e,t){if(h)return y=!0,void t();var i=d.fields,n=d.formState,a=Object(r.a)({},i),u=Object.keys(a);if(s||u.some((function(e){return q(a[e]).length}))){var o=!1;if(e){var l=a[e];if(l){var f=l.validateFields;f&&(o=!0,u=f.length?f.concat(e):[e])}}var O,E={},F={},V=[].concat(function(e){var t=[];if(s){var i=s(Object(r.a)({},d.formState.values));w(i)?t.push(i.then(e)):e(i)}return t}((function(e){E=e||{}})),u.reduce((function(e,t){return e.concat(function(e,t){var i,r=[],n=q(e);return n.length&&(n.forEach((function(n){var a=n(c(d.formState.values,e.name),d.formState.values,0===n.length||3===n.length?S(d.formState,d.fields[e.name]):void 0);if(a&&w(a)){e.validating=!0;var u=a.then((function(i){e.validating=!1,t(i)}));r.push(u)}else i||(i=a)})),t(i)),r}(i[t],(function(e){F[t]=e})))}),[])),k=V.length>0,L=++p,N=Promise.all(V).then((O=L,function(e){return delete j[O],e}));k&&(j[L]=N);var A=function(){var e=Object(r.a)({},o?n.errors:{},E),t=function(t){u.forEach((function(r){if(i[r]){var n=c(E,r),u=c(e,r),l=q(a[r]).length,d=F[r];t(r,l&&d||s&&n||(n||o?void 0:u))}}))};t((function(t,i){e=v(e,t,i)||{}})),t((function(t,i){if(i&&i[m]){var r=c(e,t),n=[].concat(r);n[m]=i[m],e=v(e,t,n)}})),g(n.errors,e)||(n.errors=e),n.error=E[b]};if(A(),t(),k){d.formState.validating++,t();var C=function(){d.formState.validating--,t()};N.then((function(){p>L||A()})).then(C,C)}}else t()},B=function(e){if(!f){var t=d.fields,i=d.fieldSubscribers,n=d.formState,a=Object(r.a)({},t),u=function(e){var t=a[e],r=S(n,t),u=t.lastFieldState;t.lastFieldState=r;var o=i[e];o&&A(o,r,u,O,void 0===u)};e?u(e):Object.keys(a).forEach(u)}},U=function(){Object.keys(d.fields).forEach((function(e){d.fields[e].touched=!0}))},z=function(){var e=d.fields,t=d.formState,i=d.lastFormState,n=Object(r.a)({},e),a=Object.keys(n),u=!1,o=a.reduce((function(e,i){return!n[i].isEqual(c(t.values,i),c(t.initialValues||{},i))&&(u=!0,e[i]=!0),e}),{}),s=a.reduce((function(e,i){var r=t.lastSubmittedValues||{};return n[i].isEqual(c(t.values,i),c(r,i))||(e[i]=!0),e}),{});t.pristine=!u,t.dirtySinceLastSubmit=!(!t.lastSubmittedValues||!Object.values(s).some((function(e){return e}))),t.modifiedSinceLastSubmit=!(!t.lastSubmittedValues||!Object.keys(n).some((function(e){return n[e].modifiedSinceLastSubmit}))),t.valid=!t.error&&!t.submitError&&!L(t.errors)&&!(t.submitErrors&&L(t.submitErrors));var l=function(e){var t=e.active,i=e.dirtySinceLastSubmit,r=e.modifiedSinceLastSubmit,n=e.error,a=e.errors,u=e.initialValues,o=e.pristine,s=e.submitting,l=e.submitFailed,c=e.submitSucceeded,d=e.submitError,f=e.submitErrors,v=e.valid,b=e.validating,m=e.values;return{active:t,dirty:!o,dirtySinceLastSubmit:i,modifiedSinceLastSubmit:r,error:n,errors:a,hasSubmitErrors:!!(d||f&&L(f)),hasValidationErrors:!(!n&&!L(a)),invalid:!v,initialValues:u,pristine:o,submitting:s,submitFailed:l,submitSucceeded:c,submitError:d,submitErrors:f,valid:v,validating:b>0,values:m}}(t),f=a.reduce((function(e,t){return e.modified[t]=n[t].modified,e.touched[t]=n[t].touched,e.visited[t]=n[t].visited,e}),{modified:{},touched:{},visited:{}}),v=f.modified,b=f.touched,m=f.visited;return l.dirtyFields=i&&g(i.dirtyFields,o)?i.dirtyFields:o,l.dirtyFieldsSinceLastSubmit=i&&g(i.dirtyFieldsSinceLastSubmit,s)?i.dirtyFieldsSinceLastSubmit:s,l.modified=i&&g(i.modified,v)?i.modified:v,l.touched=i&&g(i.touched,b)?i.touched:b,l.visited=i&&g(i.visited,m)?i.visited:m,i&&g(i,l)?i:l},D=!1,I=!1,_=function e(){if(D)I=!0;else{if(D=!0,t&&t(z(),Object.keys(d.fields).reduce((function(e,t){return e[t]=d.fields[t],e}),{})),!f&&!h){var i=d.lastFormState,r=z();r!==i&&(d.lastFormState=r,A(d.subscribers,r,i,F))}D=!1,I&&(I=!1,e())}};P(void 0,(function(){_()}));var M={batch:function(e){f++,e(),f--,B(),_()},blur:function(e){var t=d.fields,i=d.formState,n=t[e];n&&(delete i.active,t[e]=Object(r.a)({},n,{active:!1,touched:!0}),l?P(e,(function(){B(),_()})):(B(),_()))},change:function(e,t){var i=d.fields,n=d.formState;if(c(n.values,e)!==t){E(d,e,(function(){return t}));var a=i[e];a&&(i[e]=Object(r.a)({},a,{modified:!0,modifiedSinceLastSubmit:!!n.lastSubmittedValues})),l?(B(),_()):P(e,(function(){B(),_()}))}},get destroyOnUnregister(){return!!i},set destroyOnUnregister(e){i=e},focus:function(e){var t=d.fields[e];t&&!t.active&&(d.formState.active=e,t.active=!0,t.visited=!0,B(),_())},mutators:R,getFieldState:function(e){var t=d.fields[e];return t&&t.lastFieldState},getRegisteredFields:function(){return Object.keys(d.fields)},getState:function(){return z()},initialize:function(e){var t=d.fields,i=d.formState,a=Object(r.a)({},t),u="function"===typeof e?e(i.values):e;n||(i.values=u);var o=n?Object.keys(a).reduce((function(e,t){return a[t].isEqual(c(i.values,t),c(i.initialValues||{},t))||(e[t]=c(i.values,t)),e}),{}):{};i.initialValues=u,i.values=u,Object.keys(o).forEach((function(e){i.values=v(i.values,e,o[e])})),P(void 0,(function(){B(),_()}))},isValidationPaused:function(){return h},pauseValidation:function(){h=!0},registerField:function(e,t,r,n){void 0===r&&(r={}),d.fieldSubscribers[e]||(d.fieldSubscribers[e]={index:0,entries:{}});var a=d.fieldSubscribers[e].index++;d.fieldSubscribers[e].entries[a]={subscriber:V(t),subscription:r,notified:!1},d.fields[e]||(d.fields[e]={active:!1,afterSubmit:n&&n.afterSubmit,beforeSubmit:n&&n.beforeSubmit,blur:function(){return M.blur(e)},change:function(t){return M.change(e,t)},data:n&&n.data||{},focus:function(){return M.focus(e)},isEqual:n&&n.isEqual||k,lastFieldState:void 0,modified:!1,modifiedSinceLastSubmit:!1,name:e,touched:!1,valid:!0,validateFields:n&&n.validateFields,validators:{},validating:!1,visited:!1});var u=!1,o=n&&n.silent,s=function(){o?B(e):(_(),B())};return n&&(u=!(!n.getValidator||!n.getValidator()),n.getValidator&&(d.fields[e].validators[a]=n.getValidator),void 0!==n.initialValue&&void 0===c(d.formState.values,e)&&(d.formState.initialValues=v(d.formState.initialValues||{},e,n.initialValue),d.formState.values=v(d.formState.values,e,n.initialValue),P(void 0,s)),void 0!==n.defaultValue&&void 0===n.initialValue&&void 0===c(d.formState.initialValues,e)&&(d.formState.values=v(d.formState.values,e,n.defaultValue))),u?P(void 0,s):s(),function(){var t=!1;d.fields[e]&&(t=!(!d.fields[e].validators[a]||!d.fields[e].validators[a]()),delete d.fields[e].validators[a]),delete d.fieldSubscribers[e].entries[a];var r=!Object.keys(d.fieldSubscribers[e].entries).length;r&&(delete d.fieldSubscribers[e],delete d.fields[e],t&&(d.formState.errors=v(d.formState.errors,e,void 0)||{}),i&&(d.formState.values=v(d.formState.values,e,void 0,!0)||{})),o||(t?P(void 0,(function(){_(),B()})):r&&_())}},reset:function(e){if(void 0===e&&(e=d.formState.initialValues),d.formState.submitting)throw Error("Cannot reset() in onSubmit(), use setTimeout(form.reset)");d.formState.submitFailed=!1,d.formState.submitSucceeded=!1,delete d.formState.submitError,delete d.formState.submitErrors,delete d.formState.lastSubmittedValues,M.initialize(e||{})},resetFieldState:function(e){d.fields[e]=Object(r.a)({},d.fields[e],{active:!1,lastFieldState:void 0,modified:!1,touched:!1,valid:!0,validating:!1,visited:!1}),P(void 0,(function(){B(),_()}))},restart:function(e){void 0===e&&(e=d.formState.initialValues),M.batch((function(){for(var t in d.fields)M.resetFieldState(t),d.fields[t]=Object(r.a)({},d.fields[t],{active:!1,lastFieldState:void 0,modified:!1,modifiedSinceLastSubmit:!1,touched:!1,valid:!0,validating:!1,visited:!1});M.reset(e)}))},resumeValidation:function(){h=!1,y&&P(void 0,(function(){B(),_()})),y=!1},setConfig:function(e,r){switch(e){case"debug":t=r;break;case"destroyOnUnregister":i=r;break;case"initialValues":M.initialize(r);break;case"keepDirtyOnReinitialize":n=r;break;case"mutators":u=r,r?(Object.keys(R).forEach((function(e){e in r||delete R[e]})),Object.keys(r).forEach((function(e){R[e]=x(e)}))):Object.keys(R).forEach((function(e){delete R[e]}));break;case"onSubmit":o=r;break;case"validate":s=r,P(void 0,(function(){B(),_()}));break;case"validateOnBlur":l=r;break;default:throw new Error("Unrecognised option "+e)}},submit:function(){var e=d.formState;if(!e.submitting){if(delete e.submitErrors,delete e.submitError,e.lastSubmittedValues=Object(r.a)({},e.values),d.formState.error||L(d.formState.errors))return U(),d.formState.submitFailed=!0,_(),void B();var t=Object.keys(j);if(t.length)Promise.all(t.map((function(e){return j[Number(e)]}))).then(M.submit,console.error);else if(!Object.keys(d.fields).some((function(e){return d.fields[e].beforeSubmit&&!1===d.fields[e].beforeSubmit()}))){var i,n=!1,a=function(t){return e.submitting=!1,t&&L(t)?(e.submitFailed=!0,e.submitSucceeded=!1,e.submitErrors=t,e.submitError=t[b],U()):(e.submitFailed=!1,e.submitSucceeded=!0,Object.keys(d.fields).forEach((function(e){return d.fields[e].afterSubmit&&d.fields[e].afterSubmit()}))),_(),B(),n=!0,i&&i(t),t};e.submitting=!0,e.submitFailed=!1,e.submitSucceeded=!1,e.lastSubmittedValues=Object(r.a)({},e.values),Object.keys(d.fields).forEach((function(e){return d.fields[e].modifiedSinceLastSubmit=!1}));var u=o(e.values,M,a);if(!n){if(u&&w(u))return _(),B(),u.then(a,(function(e){throw a(),e}));if(o.length>=3)return _(),B(),new Promise((function(e){i=e}));a(u)}}}},subscribe:function(e,t){if(!e)throw new Error("No callback given.");if(!t)throw new Error("No subscription provided. What values do you want to listen to?");var i=V(e),r=d.subscribers,n=r.index++;r.entries[n]={subscriber:i,subscription:t,notified:!1};var a=z();return N(i,t,a,a,F,!0),function(){delete r.entries[n]}}};return M}function x(e,t,i){var r=e.render,u=e.children,o=e.component,s=Object(n.a)(e,["render","children","component"]);if(o)return Object(a.createElement)(o,Object.assign(t,s,{children:u,render:r}));if(r)return r(void 0===u?Object.assign(t,s):Object.assign(t,s,{children:u}));if("function"!==typeof u)throw new Error("Must specify either a render prop, a render function as children, or a component prop to "+i);return u(Object.assign(t,s))}function R(e,t,i){void 0===i&&(i=function(e,t){return e===t});var r=u.a.useRef(e);u.a.useEffect((function(){i(e,r.current)||(t(),r.current=e)}))}var q=function(e,t){if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(var n=Object.prototype.hasOwnProperty.bind(t),a=0;a<i.length;a++){var u=i[a];if(!n(u)||e[u]!==t[u])return!1}return!0},P=function(e){return!(!e||"function"!==typeof e.stopPropagation)},B=Object(a.createContext)();function U(e){var t=u.a.useRef(e);return u.a.useEffect((function(){t.current=e})),t}var z=function(e,t,i){i.forEach((function(i){Object.defineProperty(e,i,{get:function(){return t[i]},enumerable:!0})}))},D=function(e,t){return z(e,t,["active","dirty","dirtyFields","dirtySinceLastSubmit","dirtyFieldsSinceLastSubmit","error","errors","hasSubmitErrors","hasValidationErrors","initialValues","invalid","modified","modifiedSinceLastSubmit","pristine","submitError","submitErrors","submitFailed","submitSucceeded","submitting","touched","valid","validating","values","visited"])},I={"final-form":"4.20.1","react-final-form":"6.5.2"},_=j.reduce((function(e,t){return e[t]=!0,e}),{});function M(e){var t=e.debug,i=e.decorators,o=e.destroyOnUnregister,s=e.form,l=e.initialValues,c=e.initialValuesEqual,d=e.keepDirtyOnReinitialize,f=e.mutators,v=e.onSubmit,b=e.subscription,m=void 0===b?_:b,S=e.validate,h=e.validateOnBlur,g=Object(n.a)(e,["debug","decorators","destroyOnUnregister","form","initialValues","initialValuesEqual","keepDirtyOnReinitialize","mutators","onSubmit","subscription","validate","validateOnBlur"]),y={debug:t,destroyOnUnregister:o,initialValues:l,keepDirtyOnReinitialize:d,mutators:f,onSubmit:v,validate:S,validateOnBlur:h},p=function(e){var t=u.a.useRef();return t.current||(t.current=e()),t.current}((function(){var e=s||C(y);return e.pauseValidation(),e})),O=Object(a.useState)((function(){var e={};return p.subscribe((function(t){e=t}),m)(),e})),j=O[0],E=O[1],F=U(j);Object(a.useEffect)((function(){p.isValidationPaused()&&p.resumeValidation();var e=[p.subscribe((function(e){q(e,F.current)||E(e)}),m)].concat(i?i.map((function(e){return e(p)})):[]);return function(){p.pauseValidation(),e.reverse().forEach((function(e){return e()}))}}),[i]),R(t,(function(){p.setConfig("debug",t)})),R(o,(function(){p.destroyOnUnregister=!!o})),R(d,(function(){p.setConfig("keepDirtyOnReinitialize",d)})),R(l,(function(){p.setConfig("initialValues",l)}),c||q),R(f,(function(){p.setConfig("mutators",f)})),R(v,(function(){p.setConfig("onSubmit",v)})),R(S,(function(){p.setConfig("validate",S)})),R(h,(function(){p.setConfig("validateOnBlur",h)}));var V={form:Object(r.a)({},p,{reset:function(e){P(e)?p.reset():p.reset(e)}}),handleSubmit:function(e){return e&&("function"===typeof e.preventDefault&&e.preventDefault(),"function"===typeof e.stopPropagation&&e.stopPropagation()),p.submit()}};return D(V,j),Object(a.createElement)(B.Provider,{value:p},x(Object(r.a)({},g,{__versions:I}),V,"ReactFinalForm"))}function T(e){var t=Object(a.useContext)(B);if(!t)throw new Error((e||"useForm")+" must be used inside of a <Form> component");return t}var J="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,W=h.reduce((function(e,t){return e[t]=!0,e}),{}),G=function(e,t){return void 0===e?"":e},H=function(e,t){return""===e?void 0:e},K=function(e,t){return e===t};function Q(e,t){void 0===t&&(t={});var i=t,n=i.afterSubmit,u=i.allowNull,o=i.component,s=i.data,l=i.defaultValue,c=i.format,d=void 0===c?G:c,f=i.formatOnBlur,v=i.initialValue,b=i.multiple,m=i.parse,S=void 0===m?H:m,h=i.subscription,g=void 0===h?W:h,y=i.type,p=i.validateFields,O=i.value,j=T("useField"),E=U(t),F=function(t,i){return j.registerField(e,t,g,{afterSubmit:n,beforeSubmit:function(){var t=E.current,i=t.beforeSubmit,r=t.formatOnBlur,n=t.format,a=void 0===n?G:n;if(r){var u=j.getFieldState(e).value,o=a(u,e);o!==u&&j.change(e,o)}return i&&i()},data:s,defaultValue:l,getValidator:function(){return E.current.validate},initialValue:v,isEqual:function(e,t){return(E.current.isEqual||K)(e,t)},silent:i,validateFields:p})},V=Object(a.useRef)(!0),w=Object(a.useState)((function(){var e={},t=j.destroyOnUnregister;return j.destroyOnUnregister=!1,F((function(t){e=t}),!0)(),j.destroyOnUnregister=t,e})),k=w[0],L=w[1];Object(a.useEffect)((function(){return F((function(e){V.current?V.current=!1:L(e)}),!1)}),[e,s,l,v]);var N={onBlur:Object(a.useCallback)((function(e){if(k.blur(),f){var t=j.getFieldState(k.name);k.change(d(t.value,k.name))}}),[k.blur,k.name,d,f]),onChange:Object(a.useCallback)((function(t){var i=t&&t.target?function(e,t,i,r){if(!r&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(r&&e.nativeEvent)return e.nativeEvent.text;var n=e.target,a=n.type,u=n.value,o=n.checked;switch(a){case"checkbox":if(void 0!==i){if(o)return Array.isArray(t)?t.concat(i):[i];if(!Array.isArray(t))return t;var s=t.indexOf(i);return s<0?t:t.slice(0,s).concat(t.slice(s+1))}return!!o;case"select-multiple":return function(e){var t=[];if(e)for(var i=0;i<e.length;i++){var r=e[i];r.selected&&t.push(r.value)}return t}(e.target.options);default:return u}}(t,k.value,O,J):t;k.change(S(i,e))}),[O,e,S,k.change,k.value,y]),onFocus:Object(a.useCallback)((function(e){k.focus()}),[k.focus])},A={};!function(e,t){z(e,t,["active","data","dirty","dirtySinceLastSubmit","error","initial","invalid","length","modified","modifiedSinceLastSubmit","pristine","submitError","submitFailed","submitSucceeded","submitting","touched","valid","validating","visited"])}(A,k);var C=Object(r.a)({name:e,get value(){var t=k.value;return f?"input"===o&&(t=G(t)):t=d(t,e),null!==t||u||(t=""),"checkbox"===y||"radio"===y?O:"select"===o&&b?t||[]:t},get checked(){var t=k.value;return"checkbox"===y?(t=d(t,e),void 0===O?!!t:!(!Array.isArray(t)||!~t.indexOf(O))):"radio"===y?d(t,e)===O:void 0}},N);return b&&(C.multiple=b),void 0!==y&&(C.type=y),{input:C,meta:A}}var X=Object(a.forwardRef)((function(e,t){var i=e.afterSubmit,u=e.allowNull,o=e.beforeSubmit,s=e.children,l=e.component,c=e.data,d=e.defaultValue,f=e.format,v=e.formatOnBlur,b=e.initialValue,m=e.isEqual,S=e.multiple,h=e.name,g=e.parse,y=e.subscription,p=e.type,O=e.validate,j=e.validateFields,E=e.value,F=Object(n.a)(e,["afterSubmit","allowNull","beforeSubmit","children","component","data","defaultValue","format","formatOnBlur","initialValue","isEqual","multiple","name","parse","subscription","type","validate","validateFields","value"]),V=Q(h,{afterSubmit:i,allowNull:u,beforeSubmit:o,children:s,component:l,data:c,defaultValue:d,format:f,formatOnBlur:v,initialValue:b,isEqual:m,multiple:S,parse:g,subscription:y,type:p,validate:O,validateFields:j,value:E});if("function"===typeof s)return s(Object(r.a)({},V,F));if("string"===typeof l)return Object(a.createElement)(l,Object(r.a)({},V.input,{children:s,ref:t},F));if(!h)throw new Error("prop name cannot be undefined in <Field> component");return x(Object(r.a)({children:s,component:l,ref:t},F),V,"Field("+h+")")}))}}]);
//# sourceMappingURL=10.63acd5db.chunk.js.map