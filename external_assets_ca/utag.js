//tealium universal tag - x_axis.loader ut4.0.201603161659, Copyright 2016 Tealium.com Inc. All Rights Reserved.
var x_axis_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};if((""+document.cookie).match("x_axis_env_xaxis_-troybilt=([^\S;]*)")){if(RegExp.$1.indexOf("/prod/")===-1){ul(RegExp.$1);x_axis_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/xaxis/-troybilt/prod/';}}})();}catch(e){};try{var _profile="-troybilt";var x_axis_data=x_axis_data||{};var _qevents=_qevents||[];var _mTrack=_mTrack||[];var _oiqq=_oiqq||[];var versaTag=versaTag||{};var fb_param=fb_param||{};function getURL(h){var l=document.createElement("a");var href=h+"";if(href.indexOf("http")<0&&href.indexOf("//")!=0){href="//"+href;}
l.href=href;return l;}
var x_axis_condload;if((document.URL+"").indexOf("tags.tiqcdn.com")<0&&(document.URL+"").indexOf("mobile.html")<0&&typeof lbURLtealium!="undefined"){x_axis_condload=true;(function(){var windowURL=typeof lbURLtealium=="string"?getURL(lbURLtealium):getURL(lbURLtealium.href);var url=windowURL.href+"";var data=[];if(typeof lbTrans!="undefined"&&lbTrans!="[TRANSACTION ID]"){data.push("order_id="+lbTrans);}
if(typeof lbValue!="undefined"&&lbValue!="[TRANSACTION VALUE]"){data.push("order_total="+lbValue);data.push("order_subtotal="+lbValue);}
if(typeof lbData!="undefined"&&lbData!="[Attribute/Value Pairs for Custom Data]"){var p=lbData.split("&");for(var i=0;i<p.length;i++){var d=(p[i]+"").replace("=","--");data.push("lbData_MP"+(i+1)+"="+encodeURIComponent(d));}}
for(var u in x_axis_data){data.push(u+"="+encodeURIComponent(x_axis_data[u]));}
if(typeof refAction!="undefined"&&refAction!=""){data.push("refAction="+encodeURIComponent(refAction));}
if(typeof refKeyword!="undefined"&&refKeyword!=""){data.push("refKeyword="+encodeURIComponent(refKeyword));}
if(typeof lbRefEncoded!="undefined"&&lbRefEncoded!=""){data.push("lbRefEncoded="+encodeURIComponent(lbRefEncoded));}
if(typeof refContent!="undefined"&&refContent!=""){data.push("refContent="+encodeURIComponent(refContent));}
if(typeof refCampaign!="undefined"&&refCampaign!=""){data.push("refCampaign="+encodeURIComponent(refCampaign));}
if(typeof refTerm!="undefined"&&refTerm!=""){data.push("refTerm="+encodeURIComponent(refTerm));}
if(typeof lbURLmod!=="undefined"&&lbURLmod!=""){data.push("lbURLmod="+encodeURIComponent(lbURLmod));}
data.push("order_currency=USD");data.push("xaxis_title="+encodeURIComponent(document.title));data.push("xaxis_hash="+encodeURIComponent((""+windowURL.hash).substring(1)));data.push("xaxis_domain="+windowURL.hostname);data.push("xaxis_pathname="+encodeURIComponent(windowURL.pathname));var debug_mode=false;if((document.cookie+"").indexOf("x_axisdb=true")>=0){debug_mode=true;data.push("x_axisdb=true");}
var maxURLSize=1800-data.join("&").length;if(maxURLSize>1){var encodedURL=encodeURIComponent(url);if(encodedURL.length>maxURLSize){encodedURL=encodedURL.substring(1,maxURLSize);}
data.push("xaxis_url="+encodedURL);}
maxURLSize=1800-data.join("&").length;if(maxURLSize>1){var encodedRefURL=encodeURIComponent(document.referrer);if(encodedRefURL.length>maxURLSize){encodedRefURL=encodedRefURL.substring(1,maxURLSize);}
data.push("xaxis_referrer="+encodedRefURL);}
var iframe_url="//tags.tiqcdn.com/ut"+"ag/xa"+"xis/"+_profile+"/prod/mobile.html";var js_url="";var scripts=document.getElementsByTagName("script");for(var i=0;i<scripts.length;i++){var src=scripts[i].getAttribute("src")+"";if(src.indexOf("/ut"+"ag.js")>0&&src.indexOf("/xa"+"xis/")>0){if(js_url=="")js_url=src;if(iframe_url=="")iframe_url=src.replace("ut"+"ag.js","mobile.html");}}
if(debug_mode==true){if(js_url.indexOf("/dev/")>0){iframe_url=iframe_url.replace("/prod/","/dev/");}
if(js_url.indexOf("/qa/")>0){iframe_url=iframe_url.replace("/prod/","/qa/");}}
var iframe=document.createElement("iframe");iframe.setAttribute("style","display:none");iframe.setAttribute("height","1");iframe.setAttribute("width","1");iframe.src=iframe_url+"?"+data.join("&");document.body.appendChild(iframe);})();}else{x_axis_data={};x_axis_cfg_ovrd={noview:false};(function(){var query=(""+location.search).substring(1);var p=query.split("&");for(var i=0;i<p.length;i++){var d=p[i].split("=");try{x_axis_data[d[0]]=decodeURIComponent(d[1]);}catch(er){x_axis_data[d[0]]="";}}})();if(x_axis_data.xaxis_url==""||typeof x_axis_data.xaxis_url=="undefined"){x_axis_data.xaxis_url=x_axis_data.xaxis_domain+x_axis_data.xaxis_pathname;}
if(x_axis_data.xaxis_url.indexOf("?")>0){x_axis_data.xaxis_query_string=x_axis_data.xaxis_url.substring(1+x_axis_data.xaxis_url.indexOf("?"));if(x_axis_data.xaxis_query_string.indexOf("#")>-1){x_axis_data.xaxis_query_string=x_axis_data.xaxis_query_string.substring(0,x_axis_data.xaxis_query_string.indexOf("#"));}}
if(x_axis_data.x_axisdb==="true"){document.cookie="x_axisdb=true";}
window.xaxis_getData=function(variable,index,delimeter){try{if(!!index){index--;}else{x_axis.DB('getData Error: No index given');return'';}
if(!delimeter){delimeter='&';}
if(!!x_axis.data[variable]){var data=x_axis.data[variable].split(delimeter);}else{x_axis.DB('getData Error: Invalid Variable Name: '+variable);return'';}
if(!!data[index]){if(data[index].indexOf('=')>0){return data[index].split('=')[1];}else{return data[index];}}else{x_axis.DB('getData Error: Undefined index');return'';}}catch(e){x_axis.DB('getData Error: '+e);return'';}}}}catch(e){};if(typeof x_axis=="undefined"&&!x_axis_condload){var x_axis={id:"xaxis.-troybilt",o:{},sender:{},send:{},rpt:{ts:{a:new Date()}},dbi:[],loader:{q:[],lc:0,f:{},p:0,ol:0,wq:[],lq:[],bq:{},bk:{},rf:0,ri:0,rp:0,rq:[],ready_q:[],sendq:{"pending":0},run_ready_q:function(){for(var i=0;i<x_axis.loader.ready_q.length;i++){x_axis.DB("READY_Q:"+i);try{x_axis.loader.ready_q[i]()}catch(e){x_axis.DB(e)};}},lh:function(a,b,c){a=""+location.hostname;b=a.split(".");c=(/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\./.test(a))?3:2;return b.splice(b.length-c,c).join(".");},WQ:function(a,b,c,d,g){x_axis.DB('WQ:'+x_axis.loader.wq.length);try{if(x_axis.udoname&&x_axis.udoname.indexOf(".")<0){x_axis.ut.merge(x_axis.data,window[x_axis.udoname],0);}
if(x_axis.cfg.load_rules_at_wait){x_axis.handler.LR(x_axis.data);}}catch(e){x_axis.DB(e)};d=0;g=[];for(a=0;a<x_axis.loader.wq.length;a++){b=x_axis.loader.wq[a];b.load=x_axis.loader.cfg[b.id].load;if(b.load==4){this.f[b.id]=0;x_axis.loader.LOAD(b.id)}else if(b.load>0){g.push(b);d++;}else{this.f[b.id]=1;}}
for(a=0;a<g.length;a++){x_axis.loader.AS(g[a]);}
if(d==0){x_axis.loader.END();}},AS:function(a,b,c,d){x_axis.send[a.id]=a;if(typeof a.src=='undefined'){a.src=x_axis.cfg.path+((typeof a.name!='undefined')?a.name:'ut'+'ag.'+a.id+'.js')}
a.src+=(a.src.indexOf('?')>0?'&':'?')+'utv='+(a.v?x_axis.cfg.template+a.v:x_axis.cfg.v);x_axis.rpt['l_'+a.id]=a.src;b=document;this.f[a.id]=0;if(a.load==2){x_axis.DB("Attach sync: "+a.src);a.uid=a.id;b.write('<script id="x_axis_'+a.id+'" src="'+a.src+'"></scr'+'ipt>')
if(typeof a.cb!='undefined')a.cb();}else if(a.load==1||a.load==3){if(b.createElement){c='x_axis_xaxis.-troybilt_'+a.id;if(!b.getElementById(c)){d={src:a.src,id:c,uid:a.id,loc:a.loc}
if(a.load==3){d.type="iframe"};if(typeof a.cb!='undefined')d.cb=a.cb;x_axis.ut.loader(d);}}}},GV:function(a,b,c){b={};for(c in a){if(a.hasOwnProperty(c)&&typeof a[c]!="function")b[c]=a[c];}
return b},OU:function(a,b,c,d,f){try{if(typeof x_axis.data['cp.OPTOUTMULTI']!='undefined'){c=x_axis.loader.cfg;a=x_axis.ut.decode(x_axis.data['cp.OPTOUTMULTI']).split('|');for(d=0;d<a.length;d++){b=a[d].split(':');if(b[1]*1!==0){if(b[0].indexOf('c')==0){for(f in x_axis.loader.GV(c)){if(c[f].tcat==b[0].substring(1))c[f].load=0}}else if(b[0]*1==0){x_axis.cfg.nocookie=true}else{for(f in x_axis.loader.GV(c)){if(c[f].tid==b[0])c[f].load=0}}}}}}catch(e){x_axis.DB(e)}},RDdom:function(o){var d=document||{},l=location||{};o["dom.referrer"]=eval("document."+"referrer");o["dom.title"]=""+d.title;o["dom.domain"]=""+l.hostname;o["dom.query_string"]=(""+l.search).substring(1);o["dom.hash"]=(""+l.hash).substring(1);o["dom.url"]=""+d.URL;o["dom.pathname"]=""+l.pathname;o["dom.viewport_height"]=window.innerHeight||(d.documentElement?d.documentElement.clientHeight:960);o["dom.viewport_width"]=window.innerWidth||(d.documentElement?d.documentElement.clientWidth:960);},RDcp:function(o,b,c,d){b=b||x_axis.loader.RC();for(d in b){if(d.match(/x_axis_(.*)/)){for(c in x_axis.loader.GV(b[d])){o["cp.x_axis_"+RegExp.$1+"_"+c]=b[d][c];}}}
for(c in x_axis.loader.GV((x_axis.cl&&!x_axis.cl['_all_'])?x_axis.cl:b)){if(c.indexOf("x_axis_")<0&&typeof b[c]!="undefined")o["cp."+c]=b[c];}
o["_t_visitor_id"]=o["cp.x_axis_main_v_id"];o["_t_session_id"]=o["cp.x_axis_main_ses_id"];},RDqp:function(o,a,b,c){a=location.search+(location.hash+'').replace("#","&");if(x_axis.cfg.lowerqp){a=a.toLowerCase()};if(a.length>1){b=a.substring(1).split('&');for(a=0;a<b.length;a++){c=b[a].split("=");if(c.length>1){o["qp."+c[0]]=x_axis.ut.decode(c[1])}}}},RDmeta:function(o,a,b,h){a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++){try{h=a[b].name||a[b].getAttribute("property")||"";}catch(e){h="";x_axis.DB(e)};if(x_axis.cfg.lowermeta){h=h.toLowerCase()};if(h!=""){o["meta."+h]=a[b].content}}},RDva:function(o){var readAttr=function(o,l){var a="",b;a=localStorage.getItem(l);if(!a||a=="{}")return;b=x_axis.ut.flatten({va:JSON.parse(a)});x_axis.ut.merge(o,b,1);}
try{readAttr(o,"tealium_va");readAttr(o,"tealium_va_"+o["ut.account"]+"_"+o["ut.profile"]);}catch(e){x_axis.DB(e)}},RDut:function(o,a){o["ut.domain"]=x_axis.cfg.domain;o["ut.version"]=x_axis.cfg.v;o["ut.event"]=a||"view";try{o["ut.account"]=x_axis.cfg.utid.split("/")[0];o["ut.profile"]=x_axis.cfg.utid.split("/")[1];o["ut.env"]=x_axis.cfg.path.split("/")[6];}catch(e){x_axis.DB(e)}},RD:function(o,a,b,c,d){x_axis.DB("x_axis.loader.RD");x_axis.DB(o);if(!x_axis.loader.rd_flag){a=(new Date()).getTime();b=x_axis.loader.RC();c=a+parseInt(x_axis.cfg.session_timeout);d=a;if(!b.x_axis_main){b.x_axis_main={};}else if(b.x_axis_main.ses_id&&typeof b.x_axis_main._st!="undefined"&&parseInt(b.x_axis_main._st)<a){delete b.x_axis_main.ses_id;}
if(!b.x_axis_main.v_id){b.x_axis_main.v_id=x_axis.ut.vi(a);}
if(!b.x_axis_main.ses_id){b.x_axis_main.ses_id=d+'';b.x_axis_main._ss=b.x_axis_main._pn=1;b.x_axis_main._sn=1+parseInt(b.x_axis_main._sn||0);}else{d=b.x_axis_main.ses_id;b.x_axis_main._ss=0;b.x_axis_main._pn=1+parseInt(b.x_axis_main._pn);b.x_axis_main._sn=parseInt(b.x_axis_main._sn);}
if(isNaN(b.x_axis_main._sn)||b.x_axis_main._sn<1){b.x_axis_main._sn=b.x_axis_main._pn=1}
b.x_axis_main._st=c+'';x_axis.loader.SC("x_axis_main",{"v_id":b.x_axis_main.v_id,"_sn":b.x_axis_main._sn,"_ss":b.x_axis_main._ss,"_pn":b.x_axis_main._pn+";exp-session","_st":c,"ses_id":d+";exp-session"});}
x_axis.loader.rd_flag=1;this.RDqp(o);this.RDmeta(o);this.RDcp(o,b);this.RDdom(o);this.RDut(o);this.RDva(o);},RC:function(a,x,b,c,d,e,f,g,h,i,j,k,l,m,n,o,v,ck,cv,r,s,t){o={};b=(""+document.cookie!="")?(document.cookie).split("; "):[];r=/^(.*?)=(.*)$/;s=/^(.*);exp-(.*)$/;t=(new Date()).getTime();for(c=0;c<b.length;c++){if(b[c].match(r)){ck=RegExp.$1;cv=RegExp.$2;}
e=x_axis.ut.decode(cv);if(typeof ck!="undefined"){if(ck.indexOf("ulog")==0||ck.indexOf("x_axis_")==0){e=cv.split("$");g=[];j={};for(f=0;f<e.length;f++){try{g=e[f].split(":");if(g.length>2){g[1]=g.slice(1).join(":");}
v="";if((""+g[1]).indexOf("~")==0){h=g[1].substring(1).split("|");for(i=0;i<h.length;i++)h[i]=x_axis.ut.decode(h[i]);v=h}else v=x_axis.ut.decode(g[1]);j[g[0]]=v;}catch(er){x_axis.DB(er)};}
o[ck]={};for(f in x_axis.loader.GV(j)){if(j[f]instanceof Array){n=[];for(m=0;m<j[f].length;m++){if(j[f][m].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);if(k>t)n[m]=(x==0)?j[f][m]:RegExp.$1;}}
j[f]=n.join("|");}else{j[f]=""+j[f];if(j[f].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);j[f]=(k<t)?null:(x==0?j[f]:RegExp.$1);}}
if(j[f])o[ck][f]=j[f];}}else if(x_axis.cl[ck]||x_axis.cl['_all_']){o[ck]=e}}}
return(a)?(o[a]?o[a]:{}):o;},SC:function(a,b,c,d,e,f,g,h,i,j,k,x,v){if(!a)return 0;if(a=="x_axis_main"&&x_axis.cfg.nocookie)return 0;v="";var date=new Date();var exp=new Date();exp.setTime(date.getTime()+(365*24*60*60*1000));x=exp.toGMTString();if(c&&c=="da"){x="Thu, 31 Dec 2009 00:00:00 GMT";}else if(a.indexOf("x_axis_")!=0&&a.indexOf("ulog")!=0){if(typeof b!="object"){v=b}}else{d=x_axis.loader.RC(a,0);for(e in x_axis.loader.GV(b)){f=""+b[e];if(f.match(/^(.*);exp-(\d+)(\w)$/)){g=date.getTime()+parseInt(RegExp.$2)*((RegExp.$3=="h")?3600000:86400000);if(RegExp.$3=="u")g=parseInt(RegExp.$2);f=RegExp.$1+";exp-"+g;}
if(c=="i"){if(d[e]==null)d[e]=f;}else if(c=="d")delete d[e];else if(c=="a")d[e]=(d[e]!=null)?(f-0)+(d[e]-0):f;else if(c=="ap"||c=="au"){if(d[e]==null)d[e]=f;else{if(d[e].indexOf("|")>0){d[e]=d[e].split("|")}
g=(d[e]instanceof Array)?d[e]:[d[e]];g.push(f);if(c=="au"){h={};k={};for(i=0;i<g.length;i++){if(g[i].match(/^(.*);exp-(.*)$/)){j=RegExp.$1;}
if(typeof k[j]=="undefined"){k[j]=1;h[g[i]]=1;}}
g=[];for(i in x_axis.loader.GV(h)){g.push(i);}}
d[e]=g}}else d[e]=f;}
h=new Array();for(g in x_axis.loader.GV(d)){if(d[g]instanceof Array){for(c=0;c<d[g].length;c++){d[g][c]=encodeURIComponent(d[g][c])}
h.push(g+":~"+d[g].join("|"))}else h.push((g+":").replace(/[\,\$\;\?]/g,"")+encodeURIComponent(d[g]))}
if(h.length==0){h.push("");x=""}
v=(h.join("$"));}
document.cookie=a+"="+v+";path=/;domain="+x_axis.cfg.domain+";expires="+x;return 1},LOAD:function(a,b,c,d){if(!x_axis.loader.cfg){return}
if(this.ol==0){if(x_axis.loader.cfg[a].block&&x_axis.loader.cfg[a].cbf){this.f[a]=1;delete x_axis.loader.bq[a];}
for(b in x_axis.loader.GV(x_axis.loader.bq)){if(x_axis.loader.cfg[a].load==4&&x_axis.loader.cfg[a].wait==0){x_axis.loader.bk[a]=1;x_axis.DB("blocked: "+a);}
x_axis.DB("blocking: "+b);return;}
x_axis.loader.INIT();return;}
x_axis.DB('x_axis.loader.LOAD:'+a);if(this.f[a]==0){this.f[a]=1;if(x_axis.cfg.noview!=true){if(x_axis.loader.cfg[a].send){x_axis.DB("SENDING: "+a);try{if(x_axis.loader.sendq.pending>0&&x_axis.loader.sendq[a]){x_axis.DB("x_axis.loader.LOAD:sendq: "+a);while(d=x_axis.loader.sendq[a].shift()){x_axis.DB(d);x_axis.sender[a].send(d.event,x_axis.handler.C(d.data));x_axis.loader.sendq.pending--;}}else{x_axis.sender[a].send('view',x_axis.handler.C(x_axis.data));}
x_axis.rpt['s_'+a]=0;}catch(e){x_axis.DB(e);x_axis.rpt['s_'+a]=1;}}}
if(x_axis.loader.rf==0)return;for(b in x_axis.loader.GV(this.f)){if(this.f[b]==0||this.f[b]==2)return}
x_axis.loader.END();}},EV:function(a,b,c,d){if(b=="ready"){if(!x_axis.data){try{x_axis.cl={'_all_':1};x_axis.loader.initdata();x_axis.loader.RD(x_axis.data);}catch(e){x_axis.DB(e)};}
if((document.attachEvent||x_axis.cfg.dom_complete)?document.readyState==="complete":document.readyState!=="loading")setTimeout(c,1);else{x_axis.loader.ready_q.push(c);var RH;if(x_axis.loader.ready_q.length<=1){if(document.addEventListener){RH=function(){document.removeEventListener("DOMContentLoaded",RH,false);x_axis.loader.run_ready_q()};if(!x_axis.cfg.dom_complete)document.addEventListener("DOMContentLoaded",RH,false);window.addEventListener("load",x_axis.loader.run_ready_q,false);}else if(document.attachEvent){RH=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",RH);x_axis.loader.run_ready_q()}};document.attachEvent("onreadystatechange",RH);window.attachEvent("onload",x_axis.loader.run_ready_q);}}}}else{if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent(((d==1)?"":"on")+b,c)}}},END:function(b,c,d,e,v,w){if(this.ended){return};this.ended=1;x_axis.DB("loader.END");b=x_axis.data;if(x_axis.handler.base&&x_axis.handler.base!='*'){e=x_axis.handler.base.split(",");for(d=0;d<e.length;d++){if(typeof b[e[d]]!="undefined")x_axis.handler.df[e[d]]=b[e[d]]}}else if(x_axis.handler.base=='*'){x_axis.ut.merge(x_axis.handler.df,b,1);}
x_axis.rpt['r_0']="t";for(var r in x_axis.loader.GV(x_axis.cond)){x_axis.rpt['r_'+r]=(x_axis.cond[r])?"t":"f";}
x_axis.rpt.ts['s']=new Date();v=".tiqcdn.com";w=x_axis.cfg.path.indexOf(v);if(w>0&&b["cp.x_axis_main__ss"]==1&&!x_axis.cfg.no_session_count)x_axis.ut.loader({src:x_axis.cfg.path.substring(0,w)+v+"/ut"+"ag/tiqapp/ut"+"ag.v.js?a="+x_axis.cfg.utid+(x_axis.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
if(x_axis.cfg.noview!=true)x_axis.handler.RE('view',b,"end");x_axis.handler.INIT();}},DB:function(a,b){if(x_axis.cfg.x_axisdb===false){return;}else if(typeof x_axis.cfg.x_axisdb=="undefined"){x_axis.db_log=[];b=document.cookie+'';x_axis.cfg.x_axisdb=((b.indexOf('x_axisdb=true')>=0)?true:false);}
if(x_axis.cfg.x_axisdb===true){var t;if(x_axis.ut.typeOf(a)=="object"){t=x_axis.handler.C(a)}else{t=a}
x_axis.db_log.push(t);try{console.log(t)}catch(e){}}},RP:function(a,b,c){if(typeof a!='undefined'&&typeof a.src!='undefined'&&a.src!=''){b=[];for(c in x_axis.loader.GV(a)){if(c!='src')b.push(c+'='+escape(a[c]))}
this.dbi.push((new Image()).src=a.src+'?utv='+x_axis.cfg.v+'&utid='+x_axis.cfg.utid+'&'+(b.join('&')))}},view:function(a,c,d){return this.track({event:'view',data:a,cfg:{cb:c,uids:d}})},link:function(a,c,d){return this.track({event:'link',data:a,cfg:{cb:c,uids:d}})},track:function(a,b,c,d){if(typeof a=="string")a={event:a,data:b,cfg:{cb:c}};for(d in x_axis.loader.GV(x_axis.o)){try{x_axis.o[d].handler.trigger(a.event||"view",a.data||a,a.cfg)}catch(e){x_axis.DB(e)};}
if(a.cfg&&a.cfg.cb)try{a.cfg.cb()}catch(e){x_axis.DB(e)};return true},handler:{base:"",df:{},o:{},send:{},iflag:0,INIT:function(a,b,c){x_axis.DB('x_axis.handler.INIT');if(x_axis.initcatch){x_axis.initcatch=0;return}
this.iflag=1;a=x_axis.loader.q.length;if(a>0){x_axis.DB("Loader queue");for(b=0;b<a;b++){c=x_axis.loader.q[b];x_axis.handler.trigger(c.a,c.b,c.c)}}
},test:function(){return 1},LR:function(b){x_axis.DB("Load Rules");for(var d in x_axis.loader.GV(x_axis.cond)){x_axis.cond[d]=false;}
x_axis.DB(x_axis.data);x_axis.loader.loadrules();x_axis.DB(x_axis.cond);x_axis.loader.initcfg();x_axis.loader.OU();for(var r in x_axis.loader.GV(x_axis.cond)){x_axis.rpt['r_'+r]=(x_axis.cond[r])?"t":"f";}},RE:function(a,b,c,d,e,f,g){if(c!="alr"&&!this.cfg_extend){return 0;}
x_axis.DB("RE: "+c);if(c=="alr")x_axis.DB("All Tags EXTENSIONS");x_axis.DB(b);if(typeof this.extend!="undefined"){g=0;for(d=0;d<this.extend.length;d++){try{e=0;if(typeof this.cfg_extend!="undefined"){f=this.cfg_extend[d];if(typeof f.count=="undefined")f.count=0;if(f[a]==0||(f.once==1&&f.count>0)||f[c]==0){e=1}else{if(f[c]==1){g=1};f.count++}}
if(e!=1){this.extend[d](a,b);x_axis.rpt['ex_'+d]=0}}catch(er){x_axis.DB(er);x_axis.rpt['ex_'+d]=1;x_axis.ut.error({e:er.message,s:x_axis.cfg.path+'x_axis.js',l:d,t:'ge'});}}
x_axis.DB(b);return g;}},trigger:function(a,b,c,d,e,f){x_axis.DB('trigger:'+a+(c&&c.uids?":"+c.uids.join(","):""));b=b||{};x_axis.DB(b);if(!this.iflag){x_axis.DB("trigger:called before tags loaded");for(d in x_axis.loader.f){if(!(x_axis.loader.f[d]===1))x_axis.DB('Tag '+d+' did not LOAD')}
x_axis.loader.q.push({a:a,b:x_axis.handler.C(b),c:c});return;}
x_axis.cfg.noview=false;x_axis.ut.merge(b,this.df,0);x_axis.loader.RDqp(b);x_axis.loader.RDcp(b);x_axis.loader.RDdom(b);x_axis.loader.RDmeta(b);x_axis.loader.RDut(b,a);x_axis.loader.RDva(b);function sendTag(a,b,d){try{if(typeof x_axis.sender[d]!="undefined"){x_axis.DB("SENDING: "+d);x_axis.sender[d].send(a,x_axis.handler.C(b));x_axis.rpt['s_'+d]=0;}else if(x_axis.loader.cfg[d].load!=2&&x_axis.loader.cfg[d].s2s!=1){x_axis.loader.sendq[d]=x_axis.loader.sendq[d]||[];x_axis.loader.sendq[d].push({"event":a,"data":x_axis.handler.C(b)});x_axis.loader.sendq.pending++;x_axis.loader.AS({id:d,load:1});}}catch(e){x_axis.DB(e)}}
if(c&&c.uids){this.RE(a,b,"alr");for(f=0;f<c.uids.length;f++){d=c.uids[f];sendTag(a,b,d);}}else if(x_axis.cfg.load_rules_ajax){this.RE(a,b,"blr");x_axis.ut.merge(x_axis.data,b,1);this.LR(b);this.RE(a,b,"alr");for(f=0;f<x_axis.loader.cfgsort.length;f++){d=x_axis.loader.cfgsort[f];if(x_axis.loader.cfg[d].load&&x_axis.loader.cfg[d].send){sendTag(a,b,d);}}}else{this.RE(a,b,"alr");for(d in x_axis.loader.GV(x_axis.sender)){sendTag(a,b,d);}}
this.RE(a,b,"end");x_axis.loader.SC("x_axis_main",{"_st":((new Date()).getTime()+parseInt(x_axis.cfg.session_timeout))});},C:function(a,b,c){b={};for(c in x_axis.loader.GV(a)){if(a[c]instanceof Array){b[c]=a[c].slice(0)}else{b[c]=a[c]}}
return b}},ut:{pad:function(a,b,c,d){a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return""+d+a},vi:function(t,a,b){if(!x_axis.v_id){a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){x_axis.DB(e);a+="12345"};x_axis.v_id=a;}
return x_axis.v_id},hasOwn:function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a)},isEmptyObject:function(o,a){for(a in o){if(x_axis.ut.hasOwn(o,a))return false}
return true},isEmpty:function(o){var t=x_axis.ut.typeOf(o);if(t=="number"){return isNaN(o)}else if(t=="boolean"){return false}else if(t=="string"){return o.length===0}else return x_axis.ut.isEmptyObject(o)},typeOf:function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();},flatten:function(o){var a={};function r(c,p){if(Object(c)!==c||c instanceof Array){a[p]=c;}else{if(x_axis.ut.isEmptyObject(c)){}else{for(var d in c){r(c[d],p?p+"."+d:d);}}}}
r(o,"");return a;},merge:function(a,b,c,d){if(c){for(d in x_axis.loader.GV(b)){a[d]=b[d]}}else{for(d in x_axis.loader.GV(b)){if(typeof a[d]=="undefined")a[d]=b[d]}}},decode:function(a,b){b="";try{b=decodeURIComponent(a)}catch(e){x_axis.DB(e)};if(b==""){b=unescape(a)};return b},error:function(a,b,c){if(typeof x_axis_err!="undefined"){x_axis_err.push(a)}},loader:function(o,a,b,c,l){a=document;if(o.type=="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in x_axis.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l])}
b.setAttribute("src",o.src);}else if(o.type=="img"){x_axis.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in x_axis.loader.GV(o.attrs)){b[l]=o.attrs[l]}
b.src=o.src;}
if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}
l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){x_axis.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}};x_axis.o['xaxis.-troybilt']=x_axis;x_axis.cfg={template:"ut4.39.",load_rules_ajax:true,load_rules_at_wait:false,lowerqp:false,session_timeout:1800000,readywait:0,noload:0,domain:x_axis.loader.lh(),path:"//tags.tiqcdn.com/utag/xaxis/-troybilt/prod/",utid:"xaxis/-troybilt/201603161659"};x_axis.cfg.v=x_axis.cfg.template+"201603161659";x_axis.cond={10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,5:0,6:0,8:0,9:0};x_axis.loader.initdata=function(){try{x_axis.data=(typeof x_axis_data!='undefined')?x_axis_data:{};x_axis.udoname='x_axis_data';}catch(e){x_axis.data={};x_axis.DB('idf:'+e);}};x_axis.loader.loadrules=function(){try{x_axis.cond[10]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/flex-leaf-blower')}catch(e){x_axis.DB(e)};try{x_axis.cond[11]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/flex-dethatcher')}catch(e){x_axis.DB(e)};try{x_axis.cond[12]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/flex-plug-aerator')}catch(e){x_axis.DB(e)};try{x_axis.cond[13]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/flex-water-pump')}catch(e){x_axis.DB(e)};try{x_axis.cond[14]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/flex-pressure-washer')}catch(e){x_axis.DB(e)};try{x_axis.cond[15]|=(/testevent\.troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/')}catch(e){x_axis.DB(e)};try{x_axis.cond[16]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/FlexWhyView'&&x_axis.data['xaxis_query_string']=='storeId=10001&catalogId=14102&langId=-1')}catch(e){x_axis.DB(e)};try{x_axis.cond[17]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/flex')}catch(e){x_axis.DB(e)};try{x_axis.cond[18]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/DisplayContentView'&&x_axis.data['xaxis_query_string']=='langId=-1&storeId=10001&catalogId=14102&pageName=promos/walkBehind2PaidSearch2013')}catch(e){x_axis.DB(e)};try{x_axis.cond[19]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/webapp/wcs/stores/servlet/DisplayContentView'&&x_axis.data['xaxis_query_string']=='langId=-1&storeId=10001&catalogId=14102&pageName=promos/2CycleVs4CycleStringTrimmers2014')}catch(e){x_axis.DB(e)};try{x_axis.cond[20]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/DisplayContentView'&&x_axis.data['xaxis_query_string']=='langId=-1&storeId=10001&catalogId=14102&pageName=promos/ridingMowersPaidSearch2013')}catch(e){x_axis.DB(e)};try{x_axis.cond[21]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/education/tillers')}catch(e){x_axis.DB(e)};try{x_axis.cond[22]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/DisplayContentView'&&x_axis.data['xaxis_query_string'].toString().indexOf('langId=-1&storeId=10001&catalogId=14102&pageName=promos/fullLinePaidSearch2016')>-1)}catch(e){x_axis.DB(e)};try{x_axis.cond[5]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/flex')}catch(e){x_axis.DB(e)};try{x_axis.cond[6]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/flex-power-base')}catch(e){x_axis.DB(e)};try{x_axis.cond[8]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/flex-wide-area-mower')}catch(e){x_axis.DB(e)};try{x_axis.cond[9]|=(/troybilt\.com$/.test(x_axis.data['xaxis_domain'])&&x_axis.data['xaxis_pathname']=='/equipment/troybilt/flex-snow-thrower')}catch(e){x_axis.DB(e)};};x_axis.pre=function(){x_axis.loader.initdata();try{x_axis.loader.RD(x_axis.data)}catch(e){x_axis.DB(e)};x_axis.loader.loadrules();};x_axis.loader.GET=function(){x_axis.cl={'_all_':1};x_axis.pre();x_axis.handler.extend=[function(a,b,c,d){try{if(typeof b['xaxis_pathname']!='undefined'&&b['xaxis_pathname']!=''){c=[b['xaxis_domain'],b['xaxis_pathname']];b['targeting_url']=c.join('|')}}catch(e){x_axis.DB(e)}}];x_axis.handler.cfg_extend=[{"alr":0,"bwq":0,"id":"2","blr":1,"end":0}];x_axis.loader.initcfg=function(){x_axis.loader.cfg={"13":{load:x_axis.cond[5],send:1,v:201603161659,wait:1,tid:20011},"14":{load:x_axis.cond[6],send:1,v:201603161659,wait:1,tid:20011},"16":{load:x_axis.cond[8],send:1,v:201603161659,wait:1,tid:20011},"17":{load:x_axis.cond[9],send:1,v:201603161659,wait:1,tid:20011},"18":{load:x_axis.cond[10],send:1,v:201603161659,wait:1,tid:20011},"19":{load:x_axis.cond[11],send:1,v:201603161659,wait:1,tid:20011},"20":{load:x_axis.cond[12],send:1,v:201603161659,wait:1,tid:20011},"21":{load:x_axis.cond[13],send:1,v:201603161659,wait:1,tid:20011},"22":{load:x_axis.cond[14],send:1,v:201603161659,wait:1,tid:20011},"23":{load:x_axis.cond[15],send:1,v:201603161659,wait:1,tid:20011},"24":{load:x_axis.cond[16],send:1,v:201603161659,wait:1,tid:20011},"25":{load:x_axis.cond[17],send:1,v:201603161659,wait:1,tid:20011},"26":{load:x_axis.cond[18],send:1,v:201603161659,wait:1,tid:20011},"27":{load:x_axis.cond[19],send:1,v:201603161659,wait:1,tid:20011},"28":{load:x_axis.cond[20],send:1,v:201603161659,wait:1,tid:20011},"29":{load:x_axis.cond[21],send:1,v:201603161659,wait:1,tid:20011},"30":{load:x_axis.cond[22],send:1,v:201603161659,wait:1,tid:20011}};x_axis.loader.cfgsort=["13","14","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];}
x_axis.loader.initcfg();}
if(typeof x_axis_cfg_ovrd!='undefined'){for(var i in x_axis.loader.GV(x_axis_cfg_ovrd))x_axis.cfg[i]=x_axis_cfg_ovrd[i]};x_axis.loader.PINIT=function(a,b,c){x_axis.DB("Pre-INIT");if(x_axis.cfg.noload){return;}
try{this.GET();if(x_axis.handler.RE('view',x_axis.data,"blr")){x_axis.handler.LR(x_axis.data);}}catch(e){x_axis.DB(e)};a=this.cfg;c=0;for(b in this.GV(a)){if(a[b].block==1||(a[b].load>0&&(typeof a[b].src!='undefined'&&a[b].src!=''))){a[b].block=1;c=1;this.bq[b]=1;}}
if(c==1){for(b in this.GV(a)){if(a[b].block){a[b].id=b;if(a[b].load==4)a[b].load=1;a[b].cb=function(){var d=this.uid;x_axis.loader.cfg[d].cbf=1;x_axis.loader.LOAD(d)};this.AS(a[b]);}}}
if(c==0)this.INIT();};x_axis.loader.INIT=function(a,b,c,d,e){x_axis.DB('x_axis.loader.INIT');if(this.ol==1)return-1;else this.ol=1;if(x_axis.cfg.noview!=true)x_axis.handler.RE('view',x_axis.data,"alr");x_axis.rpt.ts['i']=new Date();d=this.cfgsort;for(a=0;a<d.length;a++){e=d[a];b=this.cfg[e];b.id=e;if(b.block!=1&&b.s2s!=1){if(x_axis.loader.bk[b.id]||((x_axis.cfg.readywait||x_axis.cfg.noview)&&b.load==4)){this.f[b.id]=0;x_axis.loader.LOAD(b.id)}else if(b.wait==1&&x_axis.loader.rf==0){x_axis.DB('x_axis.loader.INIT: waiting '+b.id);this.wq.push(b)
this.f[b.id]=2;}else if(b.load>0){x_axis.DB('x_axis.loader.INIT: loading '+b.id);this.lq.push(b);this.AS(b);}}}
if(this.wq.length>0)x_axis.loader.EV('','ready',function(a){if(x_axis.loader.rf==0){x_axis.DB('READY:x_axis.loader.wq');x_axis.loader.rf=1;x_axis.loader.WQ();}});else if(this.lq.length>0)x_axis.loader.rf=1;else if(this.lq.length==0)x_axis.loader.END();return 1};if(x_axis.cfg.readywait||x_axis.cfg.waittimer){x_axis.loader.EV('','ready',function(a){if(x_axis.loader.rf==0){x_axis.loader.rf=1;x_axis.cfg.readywait=1;x_axis.DB('READY:x_axis.cfg.readywait');setTimeout(function(){x_axis.loader.PINIT()},x_axis.cfg.waittimer||1);}})}else{x_axis.loader.PINIT()}}