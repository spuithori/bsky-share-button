var D = Object.defineProperty;
var H = (e, t, n) => t in e ? D(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (H(e, typeof t != "symbol" ? t + "" : t, n), n);
function g() {
}
function R(e) {
  return e();
}
function B() {
  return /* @__PURE__ */ Object.create(null);
}
function x(e) {
  e.forEach(R);
}
function z(e) {
  return typeof e == "function";
}
function J(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function U(e) {
  return Object.keys(e).length === 0;
}
function y(e, t) {
  e.appendChild(t);
}
function V(e, t, n) {
  const i = q(e);
  if (!i.getElementById(t)) {
    const r = C("style");
    r.id = t, r.textContent = n, F(i, r);
  }
}
function q(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function F(e, t) {
  return y(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function I(e, t, n) {
  e.insertBefore(t, n || null);
}
function E(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function C(e) {
  return document.createElement(e);
}
function L(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function G(e) {
  return document.createTextNode(e);
}
function h(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function K(e) {
  return Array.from(e.childNodes);
}
function Q(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let O;
function m(e) {
  O = e;
}
const _ = [], P = [];
let b = [];
const M = [], W = /* @__PURE__ */ Promise.resolve();
let k = !1;
function X() {
  k || (k = !0, W.then($));
}
function v(e) {
  b.push(e);
}
const j = /* @__PURE__ */ new Set();
let d = 0;
function $() {
  if (d !== 0)
    return;
  const e = O;
  do {
    try {
      for (; d < _.length; ) {
        const t = _[d];
        d++, m(t), Y(t.$$);
      }
    } catch (t) {
      throw _.length = 0, d = 0, t;
    }
    for (m(null), _.length = 0, d = 0; P.length; )
      P.pop()();
    for (let t = 0; t < b.length; t += 1) {
      const n = b[t];
      j.has(n) || (j.add(n), n());
    }
    b.length = 0;
  } while (_.length);
  for (; M.length; )
    M.pop()();
  k = !1, j.clear(), m(e);
}
function Y(e) {
  if (e.fragment !== null) {
    e.update(), x(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(v);
  }
}
function Z(e) {
  const t = [], n = [];
  b.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), b = t;
}
const tt = /* @__PURE__ */ new Set();
function et(e, t) {
  e && e.i && (tt.delete(e), e.i(t));
}
function nt(e, t, n) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), v(() => {
    const s = e.$$.on_mount.map(R).filter(z);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : x(s), e.$$.on_mount = [];
  }), r.forEach(v);
}
function st(e, t) {
  const n = e.$$;
  n.fragment !== null && (Z(n.after_update), x(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function it(e, t) {
  e.$$.dirty[0] === -1 && (_.push(e), X(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function rt(e, t, n, i, r, s, o = null, l = [-1]) {
  const u = O;
  m(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: g,
    not_equal: r,
    bound: B(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: B(),
    dirty: l,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  o && o(c.root);
  let p = !1;
  if (c.ctx = n ? n(e, t.props || {}, (a, N, ...S) => {
    const A = S.length ? S[0] : N;
    return c.ctx && r(c.ctx[a], c.ctx[a] = A) && (!c.skip_bound && c.bound[a] && c.bound[a](A), p && it(e, a)), N;
  }) : [], c.update(), p = !0, x(c.before_update), c.fragment = i ? i(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = K(t.target);
      c.fragment && c.fragment.l(a), a.forEach(E);
    } else
      c.fragment && c.fragment.c();
    t.intro && et(e.$$.fragment), nt(e, t.target, t.anchor), $();
  }
  m(u);
}
let T;
typeof HTMLElement == "function" && (T = class extends HTMLElement {
  constructor(t, n, i) {
    super();
    /** The Svelte component constructor */
    f(this, "$$ctor");
    /** Slots */
    f(this, "$$s");
    /** The Svelte component instance */
    f(this, "$$c");
    /** Whether or not the custom element is connected */
    f(this, "$$cn", !1);
    /** Component props data */
    f(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    f(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    f(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    f(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    f(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, i);
  }
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let o;
          return {
            c: function() {
              o = C("slot"), s !== "default" && h(o, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, p) {
              I(c, o, p);
            },
            d: function(c) {
              c && E(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = Q(this);
      for (const s of this.$$s)
        s in i && (n[s] = [t(s)]);
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = w(o, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const r = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const o = w(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const s in this.$$l)
        for (const o of this.$$l[s]) {
          const l = this.$$c.$on(s, o);
          this.$$l_u.set(o, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, i) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = w(t, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function w(e, t, n, i) {
  var s;
  const r = (s = n[e]) == null ? void 0 : s.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ct(e, t, n, i, r, s) {
  let o = class extends T {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((l) => {
    Object.defineProperty(o.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(u) {
        var c;
        u = w(l, u, t), this.$$d[l] = u, (c = this.$$c) == null || c.$set({ [l]: u });
      }
    });
  }), i.forEach((l) => {
    Object.defineProperty(o.prototype, l, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[l];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
class ot {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    st(this, 1), this.$destroy = g;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!z(n))
      return g;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !U(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const lt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(lt);
function ut(e) {
  V(e, "svelte-1h23jac", ".svelte-1h23jac,.svelte-1h23jac::before,.svelte-1h23jac::after{background-repeat:no-repeat;box-sizing:border-box}.svelte-1h23jac::before,.svelte-1h23jac::after{text-decoration:inherit;vertical-align:inherit}.svelte-1h23jac{padding:0;margin:0}a.svelte-1h23jac{background-color:transparent}a.svelte-1h23jac:active,a.svelte-1h23jac:hover{outline-width:0}a.svelte-1h23jac:focus{outline-width:0}.svelte-1h23jac::-webkit-file-upload-button{-webkit-appearance:button;color:inherit;font:inherit}.button.svelte-1h23jac{font-family:sans-serif;display:inline-flex;align-items:center;justify-content:center;gap:8px;background-color:#4a83fc;color:#fff;font-weight:bold;width:120px;height:40px;text-decoration:none;font-size:14px;border-radius:4px;transition:opacity .2s linear}.button.svelte-1h23jac:hover{opacity:.7}");
}
function ht(e) {
  let t, n, i, r;
  return {
    c() {
      t = C("a"), n = L("svg"), i = L("path"), r = G("Share"), h(i, "fill", "#fff"), h(i, "d", "M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"), h(i, "class", "svelte-1h23jac"), h(n, "xmlns", "http://www.w3.org/2000/svg"), h(n, "height", "14"), h(n, "width", "15.75"), h(n, "viewBox", "0 0 576 512"), h(n, "class", "svelte-1h23jac"), h(t, "class", "button svelte-1h23jac"), h(t, "href", "https://bsky.app/intent/compose?text=" + encodeURIComponent(
        /*text*/
        e[0]
      )), h(t, "target", "_blank"), h(t, "rel", "nofollow");
    },
    m(s, o) {
      I(s, t, o), y(t, n), y(n, i), y(t, r);
    },
    p: g,
    i: g,
    o: g,
    d(s) {
      s && E(t);
    }
  };
}
function ft(e, t, n) {
  let { type: i = "button" } = t, { width: r = 120 } = t, { height: s = 40 } = t, { title: o = document.title || "" } = t, { url: l = location.href } = t, u = o + `
` + l;
  return e.$$set = (c) => {
    "type" in c && n(1, i = c.type), "width" in c && n(2, r = c.width), "height" in c && n(3, s = c.height), "title" in c && n(4, o = c.title), "url" in c && n(5, l = c.url);
  }, [u, i, r, s, o, l];
}
class at extends ot {
  constructor(t) {
    super(), rt(
      this,
      t,
      ft,
      ht,
      J,
      {
        type: 1,
        width: 2,
        height: 3,
        title: 4,
        url: 5
      },
      ut
    );
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(t) {
    this.$$set({ type: t }), $();
  }
  get width() {
    return this.$$.ctx[2];
  }
  set width(t) {
    this.$$set({ width: t }), $();
  }
  get height() {
    return this.$$.ctx[3];
  }
  set height(t) {
    this.$$set({ height: t }), $();
  }
  get title() {
    return this.$$.ctx[4];
  }
  set title(t) {
    this.$$set({ title: t }), $();
  }
  get url() {
    return this.$$.ctx[5];
  }
  set url(t) {
    this.$$set({ url: t }), $();
  }
}
customElements.define("bsky-share-button", ct(at, { type: {}, width: {}, height: {}, title: {}, url: {} }, [], [], !0));
export {
  at as default
};
