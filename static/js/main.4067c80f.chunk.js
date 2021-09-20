(this.webpackJsonpdropdown2=this.webpackJsonpdropdown2||[]).push([[0],{46:function(e,a,l){"use strict";l.r(a);var t=l(0),r=l.n(t),n=l(9),u=l.n(n),c=l(24),o=l(6),i=l(8),s=l(15),v=l(1);var b=function(e){var a=e.plotvar,l=e.evalagainst,t=e.regmodel,r=e.timeperiod;return Object(v.jsx)(i.a,{className:"py-4",children:Object(v.jsxs)(s.a,{children:[Object(v.jsx)(s.a.Image,{alt:"Image NOT found",src:"".concat("/plot-explorer-clean","/images/rmse-decomposition_").concat(a.value,"_").concat(l.value,"_").concat(t.value,"_").concat(r.value,".png")}),Object(v.jsxs)(s.a.Caption,{children:["Plot showing: ",a.value," - ",l.value," - ",t.value," - ",r.value]})]})})},d=l(12),j=l(11),p=[{value:"snw",label:"Surface Snow Amount"},{value:"tasmax",label:"Daily Maximum Near-Surface Air Temperature"},{value:"rss",label:"Net surface long wave flux"},{value:"clt",label:"Total Cloud Fraction"},{value:"prc",label:"Convective Precipitation"},{value:"tas",label:"Near-Surface Air Temperature"},{value:"tasmin",label:"Daily Minimum Near-Surface Air Temperature"},{value:"wsgsmax",label:"Daily Maximum Near-Surface Wind Speed of Gust"},{value:"psl",label:"Sea Level Pressure"},{value:"pr",label:"Precipitation"},{value:"sfcWind",label:"Near-Surface Wind Speed"},{value:"hurs",label:"Near-Surface Relative humidity"},{value:"uas",label:"Eastward Near-Surface Wind"},{value:"vas",label:"Northward Near-Surface Wind "},{value:"prsn",label:"Snowfall Flux"},{value:"rls",label:"Net surface long wave flux"}],m=[{value:"HadUK-grid",label:"HadUK-grid"},{value:"ECMWF-ERAINT",label:"ECMWF-ERAINT"}],O=[{value:"ALADIN63",label:"ALADIN63"},{value:"COSMO-crCLIM-v1-1",label:"COSMO-crCLIM-v1-1"},{value:"WRF381P",label:"WRF381P"},{value:"REMO2015",label:"REMO2015"},{value:"RCA4",label:"RCA4"},{value:"RACMO22E",label:"RACMO22E"},{value:"HIRHAM5",label:"HIRHAM5"},{value:"HadREM3-GA7-05",label:"HadREM3-GA7-05"},{value:"RegCM4-6",label:"RegCM4-6"},{value:"CCLM4-8-17",label:"CCLM4-8-17"}],g=[{value:"Jan",label:"January"},{value:"Feb",label:"February"},{value:"Mar",label:"March"},{value:"Apr",label:"April"},{value:"May",label:"May"},{value:"Jun",label:"June"},{value:"Jul",label:"July"},{value:"Aug",label:"August"},{value:"Sep",label:"September"},{value:"Oct",label:"October"},{value:"Nov",label:"November"},{value:"Dec",label:"December"},{value:"DJF",label:"DJF"},{value:"MAM",label:"MAM"},{value:"JJA",label:"JJA"},{value:"SON",label:"SON"}];var h=function(e){var a=e.setPlotvar,l=e.setEvalagainst,t=e.setRegmodel,r=e.setTimeperiod;return Object(v.jsxs)(i.a,{className:"pt-4",children:[Object(v.jsx)(j.a,{children:Object(v.jsx)(d.a,{options:p,onChange:a,placeholder:"Select variable"})}),Object(v.jsx)(j.a,{children:Object(v.jsx)(d.a,{options:m,onChange:l,placeholder:"Select model to evaluate against"})}),Object(v.jsx)(j.a,{children:Object(v.jsx)(d.a,{options:O,onChange:t,placeholder:"Select regional model"})}),Object(v.jsx)(j.a,{children:Object(v.jsx)(d.a,{options:g,onChange:r,placeholder:"Select time period"})})]})},S=l(23),f=l(25);var x=function(){var e=Object(t.useState)(null),a=Object(o.a)(e,2),l=a[0],r=a[1],n=Object(t.useState)(null),u=Object(o.a)(n,2),s=u[0],d=u[1],j=Object(t.useState)(null),p=Object(o.a)(j,2),m=p[0],O=p[1],g=Object(t.useState)(null),x=Object(o.a)(g,2),M=x[0],A=x[1],C=Object(t.useState)([]),N=Object(o.a)(C,2),R=N[0],F=N[1];return console.log(l,s,m,M),Object(v.jsxs)(S.a,{children:[Object(v.jsx)(h,{setPlotvar:r,setEvalagainst:d,setRegmodel:O,setTimeperiod:A}),R.map((function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(b,{plotvar:e.plotvar,evalagainst:e.evalagainst,regmodel:e.regmodel,timeperiod:e.timeperiod})})})),Object(v.jsxs)(i.a,{className:"py-5",children:[Object(v.jsx)(f.a,{onClick:function(){return function(){if(null!==l&&void 0!==l){var e={plotvar:l,evalagainst:s,regmodel:m,timeperiod:M};F([].concat(Object(c.a)(R),[e]))}else console.log("error, you didnt make enough selections")}()},variant:"outline-info",children:"Add another plot to compare"})," "]})]})};var M=function(){return Object(v.jsx)(x,{})},A=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,47)).then((function(a){var l=a.getCLS,t=a.getFID,r=a.getFCP,n=a.getLCP,u=a.getTTFB;l(e),t(e),r(e),n(e),u(e)}))};l(45);u.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),A()}},[[46,1,2]]]);
//# sourceMappingURL=main.4067c80f.chunk.js.map