import { R as pop, P as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="background svelte-cic2qh">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="loading svelte-cic2qh">Loading...</p>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
