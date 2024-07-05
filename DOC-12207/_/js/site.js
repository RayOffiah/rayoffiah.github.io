!function(){var n=document.querySelector(".nav"),e=n&&n.querySelector(".menu-expand-toggle"),t=document.querySelector(".footer"),r=(e&&e.addEventListener("click",function(e){e.preventDefault(),n.classList.toggle("collapse-menu"),t.classList.toggle("remove-margin")}),document.querySelector(".nav-container"));if(r){if(!r.querySelector(".components")){if(!window.siteNavigationData)return;e=document.getElementById("page-navigation-group");if(!e)return;var i=window.siteNavigationData.reduce(function(e,t){return(e[t.name]=t)&&e},{}),o=document.getElementById("page-versions"),a=r,l=h(),d=o,u=JSON.parse(e.innerText),p=i,o=_("div","components is-revealed"),v=1===u.components.length&&u.title===p[u.components[0]].title.replace(/^Couchbase | Database$/,""),m=(v||(e=_("div","components_group-title"),u.url?((i=_("a")).href=L(l.url,u.url),i.appendChild(document.createTextNode(u.title)),e.appendChild(i)):e.appendChild(document.createTextNode(u.title)),o.appendChild(e)),_("ul","components_list"));u.components.forEach(function(i){var n,o,e=p[i],a=_("li","components_list-items"),s=i===l.component?l.version:u.latestVersions[i],t=_("div","component_list-version"),r=_("span","component_list_title"),c=(r.appendChild(document.createTextNode(e.title)),t.appendChild(r),1<e.versions.length);c&&(i===l.component&&d?n=d.content.querySelector(".version_list"):(n=_("select","version_list"),e.versions.forEach(function(e){var t=_("option");t.value=e.version,e.version===s&&t.setAttribute("selected",""),t.appendChild(document.createTextNode(e.displayVersion||e.version)),n.appendChild(t)})),t.appendChild(n)),a.appendChild(t),e.versions.forEach(function(e,t){var n=_("div","version_items"),r=(n.dataset.version=e.version,!0),r=((r=l.component===i&&l.version===e.version||v&&(!c||e.version===s)?!1:r)&&n.classList.add("hide"),e.sets);(r=1!==r.length||r[0].content?r:r[0].items).length&&r[0].content&&r[0].content.endsWith(" Home")&&r.splice.apply(r,[0,1].concat(r[0].items||[])),function i(e,t,o,a){if(!(e||[]).length)return;var s=_("ul","menu_row");a=a.concat(s);e.forEach(function(e){null==e.content&&1===e.items.length&&(e=e.items[0]);var t,n=_("li","menu_list"),r=(n.dataset.depth=a.length-1,_("span","menu_line")),e=(e.url?((t=_("a","menu_title menu_link")).href=L(o.url,e.url),o.url===e.url&&(n.classList.add("is-current-page"),t.classList.add("is-current-page","is-initial-page"))):t=_("span","menu_title menu_text"),t.innerHTML=e.content||"",r.appendChild(t),n.appendChild(r),i(e.items,n,o,a));e&&(1<a.length&&r.insertBefore(Object.assign(document.createElement("span"),{className:"in-toggle"}),t),n.classList.add("is-parent"),a.length>o.navHeaderLevels)&&(n.querySelector("a.is-current-page")||n.classList.add("closed")),s.appendChild(n)});return t.appendChild(s)}(r,n,l,[])&&(o=!0),a.appendChild(n)}),o&&m.appendChild(a)}),o.appendChild(m),a.appendChild(o)}{var s=r,c=h();s.addEventListener("mousedown",function(e){1<e.detail&&"pointer"===window.getComputedStyle(e.target).cursor&&e.preventDefault()});let e=s.querySelector(".components"),t;s.querySelector('a.menu_link[href^="#"]')&&(window.location.hash&&(t=g()),window.addEventListener("hashchange",g)),t||C(e,s.querySelector("a.is-current-page")),e.classList.contains("is-revealed")||(S("a.is-current-page",s).forEach(function(e){for(var t=q("menu_list",e,s),n=(t.classList.contains("is-parent")&&t.classList.remove("closed"),e);(n=n.parentNode)&&n!==s;)n.classList.remove(n.classList.contains("hide")?"hide":"closed")}),e.classList.add("is-revealed")),S(".component_list_title",s).forEach(function(r){r.style.cursor="pointer",r.addEventListener("click",function(){var e,t=r.parentNode.parentNode,n=t.querySelector(".version_list");n?(e=t.querySelector(".version_items:not(.hide)"))?e.classList.add("hide"):(e=t.querySelector('.version_items[data-version="'+n.value+'"]'))&&e.classList.remove("hide"):t.querySelector(".version_items").classList.toggle("hide")})}),S(".menu_title",s).forEach(function(e){var t=q("menu_list",e,s);!t.classList.contains("is-parent")||e.href||t.dataset.depth<c.navHeaderLevels||(e.style.cursor="pointer",e.addEventListener("click",function(e){t.classList.toggle("closed")}))}),S(".version_list",s).forEach(function(n){n.addEventListener("change",function(){if(n.dataset.component===c.component){var e=n.options[n.selectedIndex];if(e.dataset.url)return void(window.location.href=e.dataset.url)}var e=n.parentNode.parentNode,t=e.querySelector(".version_items:not(.hide)"),t=(t&&t.classList.add("hide"),e.querySelector('.version_items[data-version="'+n.value+'"]'));t&&t.classList.remove("hide")})}),S(".in-toggle",s).forEach(function(e){var t=q("is-parent",e,s);e.addEventListener("click",function(){t.classList.toggle("closed")})})}}else t.classList.toggle("remove-margin");function h(){var e=document.head;return{component:e.querySelector('meta[name="dcterms.subject"]').getAttribute("content"),version:e.querySelector('meta[name="dcterms.identifier"]').getAttribute("content"),url:e.querySelector("meta[name=page-url]").getAttribute("content"),navHeaderLevels:e.querySelector('meta[name="page-nav-header-levels"]')?.content||0}}function g(){var e,t=window.location.hash;if(t&&(t.indexOf("%")&&(t=decodeURIComponent(t)),e=r.querySelector('a.menu_link[href="'+t+'"]')),e=e||r.querySelector("a.is-initial-page")){t=r.querySelector("a.is-current-page");if(e!==t)return t&&f(r,t,"clear"),f(r,e,"activate"),C(n.querySelector(".components"),e),!0}}function f(e,t,n){t.classList["clear"===n?"remove":"add"]("is-current-page");for(var r,i=t.parentNode.parentNode,o=t.parentNode;o!==e;)"LI"===o.tagName&&(r=o.classList,o===i?r["clear"===n?"remove":"add"]("is-current-page"):r.contains("is-parent")&&r["clear"===n?"add":"remove"]("closed")),o=o.parentNode}function L(e,t){var n,r;return e&&"/"===t.charAt()?(n="",~(r=t.indexOf("#"))&&(n=t.substr(r),t=t.substr(0,r)),e===t?n||("/"===t.charAt(t.length-1)?"./":t.substr(t.lastIndexOf("/")+1)):(function(e,t){for(var n=y(e.split("/")),r=y(t.split("/")),i=0,o=Math.min(n.length,r.length),a=o;i<o;i++)if(n[i]!==r[i]){a=i;break}for(var s=[],c=n.length-a;0<c;c--)s.push("..");return s.concat(r.slice(a)).join("/")}(e.slice(0,e.lastIndexOf("/")),t)||".")+("/"===t.charAt(t.length-1)?"/"+n:n)):t}function y(e){for(var t=0,n=e.length;t<n&&!e[t];t++);if(t===n)return[];for(var r=n;0<r&&!e[r-1];r--);return e.slice(t,r)}function _(e,t){e=document.createElement(e);return t&&(e.className=t),e}function S(e,t){return[].slice.call((t||document).querySelectorAll(e))}function q(e,t,n){if((t=t.parentNode)!==n)return t.classList.contains(e)?t:q(e,t,n)}function C(e,t){var n;t&&(n=e.getBoundingClientRect(),e.scrollHeight!==Math.round(n.height))&&(t=t.getBoundingClientRect(),e.scrollTop+=Math.round(t.top-n.top-.5*(n.height-t.height)))}}();
!function(){var e=document.querySelector("aside.toc.sidebar");if(e&&!document.querySelector("body.-toc")){var t=parseInt(e.dataset.levels||1,10);if(!(t<0)){for(var o="article.doc",n=document.querySelector(o),c=[],r=0;r<=t;r++){var d=[o];if(r){for(var i=1;i<=r;i++)d.push((2===i?".sectionbody>":"")+".sect"+i);d.push("h"+(r+1)+"[id]")}else d.push("h1[id].sect0");c.push(d.join(">"))}u=c.join(",");var a,l,s,u,m=function(e){return[].slice.call(e)}((n.parentNode||document).querySelectorAll(u));m.length&&(l={},u=m.reduce(function(e,t){var o=document.createElement("a"),n=(o.textContent=t.textContent,l[o.href="#"+t.id]=o,document.createElement("li"));return n.dataset.level=parseInt(t.nodeName.slice(1),10)-1,n.appendChild(o),e.appendChild(n),e},document.createElement("ul")),(s=e.querySelector(".toc-menu"))||((s=document.createElement("div")).className="toc-menu"),s.appendChild(u),e&&window.addEventListener("load",function(){f(),window.addEventListener("scroll",f)}),u=!document.getElementById("toc")&&n.querySelector("h1.page ~ :not(.is-before-toc)"))&&((e=document.createElement("aside")).className="toc embedded",e.appendChild(s.cloneNode(!0)),u.parentNode.insertBefore(e,u))}}function f(){var t,e;m.some(function(e){if(!(Math.floor(e.getBoundingClientRect().top)<=0))return!0;t="#"+e.id}),t?t!==a&&(a&&l[a].classList.remove("is-active"),(e=l[t]).classList.add("is-active"),s.scrollHeight>s.offsetHeight&&(s.scrollTop=Math.max(0,e.offsetTop+e.offsetHeight-s.offsetHeight)),a=t):a&&(l[a].classList.remove("is-active"),a=void 0)}}();
"MozAppearance"in document.body.style&&Array.prototype.slice.call(document.querySelectorAll("main [id]")).forEach(function(e){var t;e.firstChild&&~window.getComputedStyle(e).display.indexOf("inline")&&((t=document.createElement("a")).id=e.id,e.removeAttribute("id"),e.parentNode.insertBefore(t,e))});
document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".navbar-burger");t&&t.addEventListener("click",function(e){e.stopPropagation(),t.classList.toggle("is-active"),document.getElementById(t.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar"),document.querySelector("nav.collapse-menu").classList.remove("collapse-menu")})});
!function(e){var t,n,o=document.getElementById("dialogBox"),c=document.getElementById("yesBtn"),i=document.getElementById("noBtn"),s=document.getElementById("skipBtnMsg"),d=document.querySelector(".feed-back-msg"),a=document.querySelector(".submit-btn"),l=document.querySelector(".info-btn"),u=document.querySelector(".feedback-modal"),r=document.querySelector(".close-popup");(c||i)&&(t=c.dataset,n=i.dataset,c.addEventListener("click",function(e){this.classList.add("active"),i.classList.remove("active"),console.log(t,16)}),i.addEventListener("click",function(e){this.classList.add("active"),c.classList.remove("active"),console.log(n,27)}),s.addEventListener("click",function(e){o.style.display="none",d.value=""}),d.addEventListener("keyup",function(e){""!==this.value?a.classList.remove("disabled"):a.classList.add("disabled")}),l.addEventListener("click",function(e){u.classList.add("show")}),r.addEventListener("click",function(e){u.classList.remove("show")})),window.ATL_JQ_PAGE_PROPS={triggerFunction:function(t){e("#myCustomTrigger").click(function(e){e.preventDefault(),t()})},fieldValues:{summary:"Feedback on "+document.title,customfield_11580:window.location.href,description:`

Browser environment: `+navigator.userAgent}},window.location.hash&&(s=window.location.hash,0!==e(s).length)&&(l=e(s).offset().top,e("html, body").animate({scrollTop:l},"slow"))}(jQuery);
!function(){var h={cpp:"cc",csharp:"dotnet",js:"nodejs",python:"py",ruby:"rb"},C={sqlpp:"sql++"},g=document.querySelector("main.article");function E(e){var t=e.querySelector("iframe"),n=t.cloneNode();e.replaceChild(n,t),n.contentWindow.document.write("<!DOCTYPE html><html><body><pre>Running code...</pre></body></html>")}document.querySelectorAll("pre > code").forEach(function(a){var e,t,c,l,n,o,d=a.parentNode,r=a.dataset.sourceUrl,r=(r&&((e=document.createElement("a")).href=r,e.className="view-source-button remove-ext-icon",e.target="_blank",e.dataset.title="View On GitHub",e.appendChild(document.createElement("i")).className="fab fa-github",r=document.createTextNode("View"),e.appendChild(r)),document.createElement("div")),i=(r.className="source-type-box",document.createElement("div")),u=(i.className="col-2 left-block",document.createElement("div")),s=(u.className="col-2 right-block",document.createElement("a")),m=(s.className="copy-code-button",s.dataset.title="Copy",s.appendChild(document.createElement("i")).className="far fa-copy",document.createTextNode("Copy")),m=(s.appendChild(m),document.createElement("span")),p=(m.className="data-source",m.innerHTML+=C[a.dataset.lang]||a.dataset.lang||"",document.createElement("span"));p.className="fade-shadow",s.addEventListener("click",function(e){var t=a.innerText;("$"===t.charAt(0)?(t=t.substring(2),navigator.clipboard.writeText(t)):navigator.clipboard.writeText(a.innerText)).then(function(){s.blur(),s.dataset.title="Copied ✓",setTimeout(function(){s.dataset.title="Copy"},2e3)},function(){s.dataset.title="Error"})}),a.matches(".listingblock.try-it code")&&(a.contentEditable=!0,a.spellcheck=!1,(t=document.createElement("a")).className="run-code",t.dataset.title="Run Code",t.appendChild(document.createElement("i")).className="fas fa-terminal",n=document.createTextNode("Run Code"),t.appendChild(n),l=g.parentNode,"TEMPLATE"===(o=document.getElementById("run-code-panel")).tagName&&(n=o,(o=l.appendChild(n.content.firstElementChild.cloneNode(!0))).querySelector(".rerun").addEventListener("click",function(){E(o)}),o.querySelector(".close").addEventListener("click",function(){var e=l.querySelector("main"),t=e.getBoundingClientRect().top,e=Array.prototype.slice.call(e.querySelectorAll("*")).find(function(e){return e.getBoundingClientRect().top>=t}),n=e.getBoundingClientRect().top,e=(document.documentElement.classList.remove("terminal-launched"),e.getBoundingClientRect().top);document.documentElement.style.scrollBehavior="auto",document.documentElement.scrollBy(0,e-n),document.documentElement.style.scrollBehavior=""}),n.parentNode.removeChild(n),o.id="run-code-panel"),c=o,t.addEventListener("click",function(e){var t=this.getBoundingClientRect().top,n=(document.documentElement.classList.add("terminal-launched"),this.getBoundingClientRect().top),n=(g.scrollBy(0,n-t),E(c),c.querySelector("form")),t=(n.lang.value=h[a.dataset.lang]||a.dataset.lang,a.innerText);"java"===n.lang.value&&(t=t.replace(/^(?:public )?class \S+/m,"class Program")),n.code.value=t,n.submit()})),d.prepend(r),r.appendChild(i),r.appendChild(u),i.appendChild(m),e&&u.appendChild(e),u.appendChild(s),t&&u.appendChild(t),d.appendChild(p)})}();
!function(){var u,a,c,i,l;document.getElementById("contributorList")&&(a=document.getElementById("contributorList"),c=document.getElementById("commitdate"),i=document.getElementById("otherContributor"),l=document.querySelector(".contributor-list-box"),fetch("https://api.github.com/repos/couchbase/docs-ui/stats/contributors").then(function(t){return t.json()}).then(function(t){0;var t=(u=t).length-5,e=u.length-1,e=u[e].weeks,e=e[e.length-1].w,e=new Date(1e3*e),n=e.getDate(),r=e.getFullYear(),o=new Array,o=(o[0]="January",o[1]="February",o[2]="March",o[3]="April",o[4]="May",o[5]="June",o[6]="July",o[7]="August",o[8]="September",o[9]="October",o[10]="November",o[11]="December",o[e.getMonth()]);c.append(o+" "+n+", "+r),i.append(t),l.classList.add("show"),u.slice(0).reverse().map(function(t,e,n){var r,o,u;e<=4&&(e=t.author.avatar_url,t=t.author.html_url,r=document.createElement("li"),o=document.createElement("a"),(u=document.createElement("img")).setAttribute("src",e),u.setAttribute("alt",""),o.setAttribute("href",t),o.setAttribute("target","_blank"),r.appendChild(o),o.appendChild(u),a.appendChild(r))})}).catch(function(t){console.log(t,13)}))}();
!function(){var t=document.querySelectorAll("table.tableblock");window.onload=function(){window.innerWidth<768?t.forEach(function(t,e){for(var l=t.querySelectorAll("tbody tr").length,h=t.querySelectorAll("thead tr th").length,r=1;r<=h;r++){var c,o=t.querySelectorAll("th");void 0!==o[r]&&(c=o[r].offsetHeight);for(var d=1;d<=l;d++)null!=t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")")&&void 0!==t.querySelector(" tr:nth-child("+d+") td:nth-child("+r+")")&&(t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")").offsetHeight>c&&(c=t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")").offsetHeight),t.querySelectorAll("tr:nth-child("+d+") td:nth-child("+r+")").scrollHeight>t.querySelector("tr:nth-child("+d+") td:nth-child("+r+")").offsetHeight)&&(c=t.querySelectorAll("tr:nth-child("+d+") td:nth-child("+r+")").scrollHeight);for(var i=1;i<=l;i++)null!=t.querySelector("tr:nth-child("+i+") td:nth-child("+r+")")&&void 0!==t.querySelector("tr:nth-child("+i+") td:nth-child("+r+")")&&(t.querySelector("tr:nth-child("+i+") td:nth-child("+r+")").style.height=c+"px",t.querySelector("th:nth-child("+r+")").style.height=c+"px")}}):document.querySelectorAll("table.tableblock tbody tr td, table.tableblock thead tr th").forEach(function(t,e){t.style.height="auto"})}}();
!function(){var n,e,o;document.querySelector(".tutorials-filter")&&(e=document.querySelectorAll(".nav-menu.filter li a"),n=document.querySelectorAll(".data-filter-column"),e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),this.classList.toggle("active"),this.nextElementSibling.classList.toggle("open")})}),n.forEach(function(e,t){t%2==1?n[t].classList.add("even"):n[t].classList.add("odd")}),e=document.querySelectorAll('input[type="checkbox"]'),o={},e.forEach(function(a){a.addEventListener("change",function(e){e.preventDefault();var t,e=this,c=(!0===a.checked&&(Object.prototype.hasOwnProperty.call(o,e.name)||(o[e.name]=[]),o[e.name].push(e.value.toLowerCase())),!1===a.checked&&(t=o[e.name].indexOf(e.value),1===o[e.name].length?delete o[e.name]:o[e.name].splice(t,1)),n.forEach(function(e){e.classList.remove("odd"),e.classList.remove("even")}),Array.from(document.querySelectorAll(".data-filter-column")));Object.keys(o).forEach(function(e){var a=o[e];c=c.filter(function(e){var t,c=!1,e=(Array.from(e.querySelectorAll(".sub-heading")).forEach(function(e){e=e.dataset.category.toLowerCase().split(" ");t=e}),t);return Array.prototype.forEach.call(e,function(e){if(-1!==a.indexOf(e))return!(c=!0)}),c})}),n.forEach(function(e){e.classList.add("hide")}),c.forEach(function(e,t){e.classList.add("show"),e.classList.remove("hide"),t%2==1?e.classList.add("even"):e.classList.add("odd")}),document.getElementById("clearALLBtn").addEventListener("click",function(e){e.preventDefault(),o=[],n.forEach(function(e,t){e.classList.remove("hide"),e.classList.remove("show"),e.classList.remove("odd"),e.classList.remove("even"),t%2==1?e.classList.add("even"):e.classList.add("odd")});for(var t=document.querySelectorAll(".check-mark"),c=0;c<t.length;c++)t[c].checked=!1})})}))}();
[].slice.call(document.querySelectorAll("td.icon > i.fa")).forEach(function(e){e.classList.remove("fa")}),[].slice.call(document.querySelectorAll("a.anchor")).forEach(function(e){/^H[1-6]$/.test(e.parentNode.tagName)&&(e.appendChild(document.createElement("i")).className="fas fa-link")}),[].slice.call(document.querySelectorAll(".edition a")).forEach(function(e){~e.innerText.toLowerCase().indexOf("community")&&e.parentNode.classList.add("page-edition")}),[].slice.call(document.querySelectorAll("table.tableblock")).forEach(function(e){e.caption&&e.classList.add("caption-table")});
!function(){var e=new window.ChatBotUiLoader.IframeLoader,t=window.parent.origin;e.load({ui:{parentOrigin:t,toolbarTitle:"Couchbase",toolbarLogo:"https://www.couchbase.com/wp-content/uploads/sites/3/2023/10/SDKs_Ottoman.svg",positiveFeedbackIntent:"Thumbs up",negativeFeedbackIntent:"Thumbs down",helpIntent:"Help",enableLogin:!1,forceLogin:!1,AllowSuperDangerousHTMLInMessage:!0,shouldDisplayResponseCardTitle:!1,saveHistory:!1,minButtonContent:"",hideInputFieldsForButtonResponse:!1,pushInitialTextOnRestart:!1,directFocusToBotInput:!1,showDialogStateIcon:!1,backButton:!1,messageMenu:!0,hideButtonMessageBubble:!1,enableLiveChat:!1},iframe:{iframeOrigin:"https://d2sozpdiqok6m4.cloudfront.net",shouldLoadIframeMinimized:!0,iframeSrcPath:"/#/?lexWebUiEmbed=true&parentOrigin="+t}}).then(function(){e.api.ping()}).catch(function(e){console.error("chatbot UI failed to load",e)})}();