javascript:(()=>{document.head.insertAdjacentHTML("beforeend",'<style>#anthonytedja-modal{font-family:BlinkMacSystemFont;border:none;border-radius:14px;background-color:#f2f1f6;padding:1rem;min-width:400px;color:#000}#anthonytedja-modal[open]{animation:.5s show}#anthonytedja-modal.hide{animation:.5s hide}#anthonytedja-form{display:flex;flex-direction:column;justify-content:center;background-color:#fff;row-gap:1.5rem;padding:.5rem 1.25rem;border-radius:12px}.anthonytedja-hover{cursor:pointer;transition:.2s}.anthonytedja-hover:focus:not([disabled]),.anthonytedja-hover:hover:not([disabled]){opacity:.7;transform:scale(1.05)}#anthonytedja-modal [disabled]{opacity:.3;cursor:not-allowed}.anthonytedja-flex{display:flex;align-items:center;justify-content:space-between;column-gap:1rem;width:100%;margin:.25rem 0}.anthonytedja-flex.buttons{margin:12px 0;justify-content:end;flex-direction:row-reverse}.anthonytedja-flex.buttons button{border:1px solid #007fff;border-radius:34px;padding:8px 24px}#anthonytedja-close{color:#007fff;background-color:#fff}#anthonytedja-confirm,#anthonytedja-switch input:checked+.slider{background-color:#007fff}#anthonytedja-confirm{color:#fff}#anthonytedja-modal h1{font-size:1.5rem;margin:1rem 0}#anthonytedja-form h2{font-size:.75rem;opacity:.5;font-weight:400;margin:.5rem 0}#anthonytedja-form h3{font-size:.9rem;font-weight:400}#anthonytedja-form p{margin:0;font-size:.75rem;opacity:.4;font-weight:400}#anthonytedja-filter{margin:.5rem 0;padding:.5rem;border-radius:8px;border:1px solid #e9e9eb;box-sizing:border-box;width:100%;background-color:#fff;color:#000}#anthonytedja-switch{position:relative;display:inline-block;width:54px;height:32px}#anthonytedja-toggle{opacity:0!important}#anthonytedja-switch .slider{position:absolute;inset:0;background-color:#e9e9eb;border-radius:34px}#anthonytedja-switch .slider:before{position:absolute;content:"";height:28px;width:28px;left:2px;bottom:2px;background-color:#fff;-webkit-transition:.4s;transition:.4s;border-radius:50%}#anthonytedja-switch input:focus-visible+.slider{outline:#007fff solid 2px}#anthonytedja-switch input:checked+.slider:before{-webkit-transform:translateX(22px);-ms-transform:translateX(22px);transform:translateX(22px)}@keyframes show{from{transform:translateY(60%) scale(.75);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}@keyframes hide{to{transform:scale(.75);opacity:0}}</style>');let e=document.createElement("dialog");e.setAttribute("id","anthonytedja-modal"),e.innerHTML='<h1>GitHub PR Assistant</h1> <form id="anthonytedja-form" method="dialog"> <div> <h2>CONFIGURATIONS</h2> <div class="anthonytedja-flex"> <h3>View Files Mode</h3> <label id="anthonytedja-switch"> <input id="anthonytedja-toggle" type="checkbox" tabindex="1"/> <span class="anthonytedja-hover slider"></span> </label> </div><p>When unchecked, assistant will unview files.</p></div><div> <h2>FILEPATH FILTER (Optional)</h2> <input type="text" id="anthonytedja-filter" placeholder="Directory: ex. vendor" tabindex="1"/> <p>Filter files by directory to select by.</p></div><div class="anthonytedja-flex buttons"> <button id="anthonytedja-confirm" class="anthonytedja-hover" type="submit" value="submit" tabindex="0"> Confirm </button> <button id="anthonytedja-close" class="anthonytedja-hover" value="cancel" tabindex="1"> Cancel </button> </div></form>',document.body.appendChild(e),e.showModal();let t=document.getElementById("anthonytedja-form"),n=document.getElementById("anthonytedja-toggle"),o=document.getElementById("anthonytedja-filter"),a=document.getElementById("anthonytedja-close"),i=document.getElementById("anthonytedja-confirm");function d(){e.classList.add("hide"),e.addEventListener("webkitAnimationEnd",()=>{e.close(),e.parentNode?.removeChild(e)})}function r(){let e=document.getElementsByName("viewed"),t=e.length;for(var o=0;o<t;o++)e[o].checked!==n.checked&&e[o].click();e[t-1]?.scrollIntoView()}function s(e){let t=document.getElementsByName("viewed"),o=t.length;for(var a=0;a<o;a++)t[a].checked!==n.checked&&t[a].id.toLowerCase().startsWith(e.toLowerCase())&&t[a].click();t[o-1]?.scrollIntoView()}async function l(){i.textContent="Loading...",i.disabled=!0,a.disabled=!0,o.disabled=!0,n.disabled=!0}n.addEventListener("keypress",e=>{e.preventDefault(),13===e.which&&(n.checked^=1)}),t.addEventListener("submit",async e=>{e.preventDefault(),e.submitter===i&&await l().then(()=>{o.value?s(o.value):r()}),d()})})();