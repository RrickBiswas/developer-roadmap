import"./hoisted.2d48204b.js";import"./hoisted.f3746243.js";import"./navigation.9977dc3f.js";import"./index.es.ebad3893.js";import"./http.408ee04f.js";import"./jwt.ab9b7b25.js";import"./resource-progress.8f66df23.js";import"./page.2efb91d4.js";import"./index.4b590221.js";import"./popup.a359f713.js";import"./dom.ebb41e7a.js";document.querySelectorAll("[faq-question]").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll("[faq-answer]").forEach(i=>{i.classList.add("hidden")});const e=o.nextElementSibling;e&&e.classList.remove("hidden")})});class r{constructor(){this.topicSearchId="search-topic-input",this.onDOMLoaded=this.onDOMLoaded.bind(this),this.init=this.init.bind(this),this.filterTopicNodes=this.filterTopicNodes.bind(this)}get topicSearchEl(){return document.getElementById(this.topicSearchId)}filterTopicNodes(e){const i=e.target.value.trim().toLowerCase();if(!i){document.querySelectorAll("[data-topic]").forEach(t=>t.classList.remove("hidden"));return}document.querySelectorAll("[data-topic]").forEach(t=>t.classList.add("hidden")),document.querySelectorAll(`[data-topic*="${i}"]`).forEach(t=>t.classList.remove("hidden"))}onDOMLoaded(){this.topicSearchEl&&this.topicSearchEl.addEventListener("keyup",this.filterTopicNodes)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const c=new r;c.init();
