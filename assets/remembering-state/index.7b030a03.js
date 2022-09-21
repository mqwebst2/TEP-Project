import"../modulepreload-polyfill.c7c6310f.js";import{o as u}from"../index.783118d6.js";class d extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),o=document.querySelector("#comment-template").content.cloneNode(!0);t.append(o),this.name=this.shadowRoot.querySelector(".comment-title__name"),this.email=this.shadowRoot.querySelector(".comment-title__email"),this.message=this.shadowRoot.querySelector(".comment-body__message"),this.time=this.shadowRoot.querySelector(".comment-body__time")}static get observedAttributes(){return["name","email","message","time"]}attributeChangedCallback(t,o,e){o!==e&&this[`${t}`]&&(this[`${t}`].textContent=e)}}customElements.get("custom-comment")===void 0&&customElements.define("custom-comment",d);const l=u("comment-store",1,{upgrade(s){s.createObjectStore("comments",{keyPath:"id",autoIncrement:!0})}});class h{constructor(t={}){const o=this;this.subscribers=[],l.then(async e=>{this.db=e;const m=await this.db.getAll("comments");this.state.commentList=m}),this.state=new Proxy(t,{async set(e,m,c){if(e[m]=c,o.db&&m==="commentList"){const n=c[c.length-1];n&&!(n!=null&&n.id)&&await o.db.add("comments",n)}for(const n of o.subscribers)n(e);return!0}})}subscribe(t){if(typeof t!="function")throw new Error("You must subscribe with a function.");this.subscribers.push(t),t(this.state)}addComment(t){t.date||(t.date=new Date().toLocaleString()),this.state.commentList.push(t),this.state.commentList=this.state.commentList}deleteComment(t){this.state.commentList.splice(t,1),this.state.commentList=this.state.commentList}}const a=new h({commentList:[]}),b=document.querySelectorAll("[required]"),r=document.querySelector("#form"),i=document.querySelector("#output");for(const s of b)s.closest(".form-item").querySelector("label").classList.add("required");r.addEventListener("submit",s=>{s.preventDefault();const t=Object.fromEntries(new FormData(r).entries());console.log(t),a.addComment(t),s.target.reset(),s.target.querySelector("input").focus()});a.subscribe(s=>{const t=s.commentList;console.log(t),i.innerHTML="";for(const o of t){const e=document.createElement("custom-comment");e.setAttribute("class","custom-comment"),e.setAttribute("name",o.name),e.setAttribute("email",o.email),e.setAttribute("message",o.comment),e.setAttribute("time",o.date),i.append(e)}});window.addEventListener("DOMContentLoaded",()=>{const s=i.querySelectorAll("custom-comment");console.log(s)});
