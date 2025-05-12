(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".my-button{display:inline-block;padding:10px 20px;font-size:16px;font-weight:700;color:#fff;background-color:#007bff;border:none;border-radius:4px;text-align:center;text-decoration:none;cursor:pointer;transition:background-color .3s ease,transform .2s ease}.my-button:hover{background-color:#0056b3;transform:scale(1.05)}.my-button:active{background-color:#003f7f;transform:scale(.95)}.my-button:disabled{background-color:#ccc;cursor:not-allowed}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var o = { exports: {} }, e = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a;
function d() {
  if (a) return e;
  a = 1;
  var u = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function x(l, r, t) {
    var s = null;
    if (t !== void 0 && (s = "" + t), r.key !== void 0 && (s = "" + r.key), "key" in r) {
      t = {};
      for (var i in r)
        i !== "key" && (t[i] = r[i]);
    } else t = r;
    return r = t.ref, {
      $$typeof: u,
      type: l,
      key: s,
      ref: r !== void 0 ? r : null,
      props: t
    };
  }
  return e.Fragment = n, e.jsx = x, e.jsxs = x, e;
}
var R;
function v() {
  return R || (R = 1, o.exports = d()), o.exports;
}
var p = v();
function E({ label: u, onClick: n }) {
  return /* @__PURE__ */ p.jsx("button", { onClick: n, className: "my-button", children: u });
}
export {
  E as default
};
