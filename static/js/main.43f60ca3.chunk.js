(window["webpackJsonpenodo-test"]=window["webpackJsonpenodo-test"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/Enodo_Skills_Assessment_Data_File_4-19-2019.3aadd98a.csv"},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=(a(14),a(1)),s=a(2),c=a(4),p=a(3),u=a(5),d={position:"relative",width:"100%",height:"100%"},m=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).initMap=function(){var e=new window.google.maps.Map(document.getElementById("map"),{center:{lat:41.875902,lng:-87.667764},zoom:13});a.props.properties&&a.createMarkers(a.props.properties,e)},a.createMarkers=function(e,t){e.forEach((function(e){var a="http://maps.google.com/mapfiles/ms/icons/red-dot.png";e.ESTIMATED_MARKET_VALUE>4e5&&e.ESTIMATED_MARKET_VALUE<=8e5&&(a="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"),e.ESTIMATED_MARKET_VALUE>8e5&&(a="http://maps.google.com/mapfiles/ms/icons/green-dot.png");var n=new window.google.maps.Marker({name:e.Full_Address,position:{lat:parseFloat(e.Latitude),lng:parseFloat(e.Longitude)},map:t,icon:a}),r="<div id='infowindow'><p>".concat(e.Full_Address,"</p></div>"),i=new window.google.maps.InfoWindow({content:r});n.addListener("mouseover",(function(){i.open(t,n)})),n.addListener("mouseout",(function(){i.close()}))}))},a.state={showingInfo:!1,activeMarker:{},selectedProperty:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.properties!==e.properties&&this.initMap()}},{key:"componentDidMount",value:function(){window.initMap=this.initMap;var e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJO-fjqtJKgYhOjl5wwbW0JFu2Vl5B1lE&callback=initMap",e.async=!0,e.defer=!0,window.document.body.appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",{style:d,id:"map"})}}]),t}(n.Component),f=a(6);var h=function(e){return"string"===typeof e.options[0]?r.a.createElement("li",{className:"filter-component"},r.a.createElement("h4",null,r.a.createElement("button",{"data-toggle":"collapse",href:"#"+e.field,"aria-expanded":"false","aria-controls":e.field},e.field.replace(/_/g," ").toUpperCase(),r.a.createElement("i",{className:"fas fa-angle-down",style:{float:"right"}}))),r.a.createElement("div",{className:"el-row collapse multi-collapse",id:e.field},r.a.createElement("div",{className:"el-select"},r.a.createElement("select",{name:e.field,type:"text",readOnly:"readonly",autoComplete:"off",placeholder:"Select",className:"browser-default custom-select",onChange:e.handleFilterChange},r.a.createElement("option",{value:""},"Select..."),e.generateOptions(e.options))))):r.a.createElement("li",{className:"filter-component"},r.a.createElement("h4",null,r.a.createElement("button",{"data-toggle":"collapse",href:"#"+e.field,"aria-expanded":"false","aria-controls":e.field},e.field.replace(/_/g," ").toUpperCase(),r.a.createElement("i",{className:"fas fa-angle-down",style:{float:"right"}}))),r.a.createElement("div",{className:"el-row collapse multi-collapse",id:e.field},r.a.createElement("div",{className:"el-input",onChange:e.handleFilterChange},r.a.createElement("input",{name:e.field,type:"text",autoComplete:"off",placeholder:"Min",className:"el-input_inner"}),r.a.createElement("input",{name:e.field,type:"text",autoComplete:"off",placeholder:"Max",className:"el-input_inner"}))))};function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).generateOptions=function(e){var t=[];return e.forEach((function(e){e&&t.push(r.a.createElement("option",{value:e,key:e},e))})),t},a.handleFilterChange=function(e){var t=e.target.name,n=e.target.placeholder||null,r=e.target.value,i=!1,o=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state.currentFilters);o[t]&&(""===r?(delete o[t],i=!0):(n?o[t][n]=r:o[t]=r,i=!0)),i||(o[t]=n?Object(f.a)({},n,r):r),a.setState((function(e){return{currentFilters:o}}))},a.state={currentFilters:{}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=[];return Object.keys(this.props.filters).sort().forEach((function(a){t.push(r.a.createElement(h,{field:a,options:e.props.filters[a],key:a,generateOptions:e.generateOptions,handleFilterChange:e.handleFilterChange}))})),r.a.createElement("div",{id:"filters-container"},r.a.createElement("div",{id:"filters-header"},r.a.createElement("h3",{style:{textAlign:"center"}},"Filters")),r.a.createElement("div",{id:"filters"},r.a.createElement("ul",null,t)),r.a.createElement("div",{id:"submit-container"},r.a.createElement("button",{type:"button",className:"el-button el-button-primary",onClick:function(){return e.props.handleFilterSubmit(e.state.currentFilters)}},"Filter")))}}]),t}(n.Component),v=(a(15),["CURRENT_LAND","CURRENT_BUILDING","CURRENT_TOTAL","COMM_UNITS","ESTIMATED_MARKET_VALUE","PRIOR_LAND","PRIOR_BUILDING","PRIOR_TOTAL","PPRIOR LAND","PPRIOR_BUILDING","PPRIOR_TOTAL","FULL_BATH","HALF_BATH","AC","FIREPLACE","AGE","BUILDING_SQ_FT","LAND_SQ_FT","BLDG_SF","UNITS_TOT","MULTI_SALE","SALE_AMOUNT","APPEAL_A_PROPAV","APPEAL_A_CURRAV"]),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).updatePropertiesData=function(e){var t=e.data;t.forEach((function(e){for(var t in e)v.includes(t)?e[t]=parseInt(e[t]):e[t]=e[t].trim()})),a.setState({data:t,currentProperties:t})},a.hanldeFilterSubmit=function(e,t){var n=a.state.data.filter((function(t){var a=!0;for(var n in e)if("string"===typeof e[n]){if(t[n]!==e[n]){a=!1;break}}else{var r=parseInt(e[n].Min),i=parseInt(e[n].Max);if(t[n]<r||t[n]>i){a=!1;break}}return a}));a.setState({currentProperties:n})},a.state={data:"",currentProperties:[],selectedFilters:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=a(16);a(17).parse(e,{header:!0,download:!0,skipEmptyLines:!0,complete:this.updatePropertiesData})}},{key:"createFilterKeys",value:function(e,t){Object.keys(e).forEach((function(e){t[e]=[]}))}},{key:"populateFiltersObject",value:function(e,t){e.forEach((function(e){for(var a in e)t[a].includes(e[a])||t[a].push(e[a])}))}},{key:"createFiltersData",value:function(){var e={};for(var t in this.createFilterKeys(this.state.data[0],e),this.populateFiltersObject(this.state.data,e),e)e[t].sort();return e}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("p",{className:"property-count"},"Number of properties: ",r.a.createElement("span",null,this.state.currentProperties.length)),r.a.createElement("div",{className:"container-div"},this.state.data.length>0&&r.a.createElement(g,{properties:this.state.data,filters:this.createFiltersData(),handleFilterChange:this.handleFilterChange,handleFilterSubmit:this.hanldeFilterSubmit}),r.a.createElement("div",{id:"map-container"},this.state.data.length>0&&r.a.createElement(m,{properties:this.state.currentProperties}))),r.a.createElement("p",{className:"emv-legend"},r.a.createElement("strong",null,"Estimated Market Value: "),r.a.createElement("span",{id:"red"},"<$400,000 "),"|",r.a.createElement("span",{id:"yellow"}," $400,000 - $800,000 "),"|",r.a.createElement("span",{id:"green"}," >$800,000")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.43f60ca3.chunk.js.map