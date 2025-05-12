var i = { exports: {} }, e = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x;
function d() {
  if (x) return e;
  x = 1;
  var u = Symbol.for("react.transitional.element"), R = Symbol.for("react.fragment");
  function o(l, r, t) {
    var n = null;
    if (t !== void 0 && (n = "" + t), r.key !== void 0 && (n = "" + r.key), "key" in r) {
      t = {};
      for (var s in r)
        s !== "key" && (t[s] = r[s]);
    } else t = r;
    return r = t.ref, {
      $$typeof: u,
      type: l,
      key: n,
      ref: r !== void 0 ? r : null,
      props: t
    };
  }
  return e.Fragment = R, e.jsx = o, e.jsxs = o, e;
}
var a;
function v() {
  return a || (a = 1, i.exports = d()), i.exports;
}
var p = v();
function E({ label: u }) {
  return /* @__PURE__ */ p.jsx("button", { className: "my-button", children: u });
}
export {
  E as default
};
