var H = Object.defineProperty;
var J = (e, t, n) => t in e ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var a = (e, t, n) => (J(e, typeof t != "symbol" ? t + "" : t, n), n);
function y() {
}
function z(e) {
  return e();
}
function P() {
  return /* @__PURE__ */ Object.create(null);
}
function k(e) {
  e.forEach(z);
}
function I(e) {
  return typeof e == "function";
}
function U(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function V(e) {
  return Object.keys(e).length === 0;
}
function w(e, t) {
  e.appendChild(t);
}
function q(e, t, n) {
  const i = F(e);
  if (!i.getElementById(t)) {
    const r = O("style");
    r.id = t, r.textContent = n, G(i, r);
  }
}
function F(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function G(e, t) {
  return w(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function T(e, t, n) {
  e.insertBefore(t, n || null);
}
function C(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function O(e) {
  return document.createElement(e);
}
function L(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function K(e) {
  return document.createTextNode(e);
}
function f(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Q(e) {
  return Array.from(e.childNodes);
}
function p(e, t, n, i) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, "");
}
function W(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let A;
function m(e) {
  A = e;
}
const b = [], M = [];
let _ = [];
const R = [], X = /* @__PURE__ */ Promise.resolve();
let v = !1;
function Y() {
  v || (v = !0, X.then($));
}
function E(e) {
  _.push(e);
}
const j = /* @__PURE__ */ new Set();
let g = 0;
function $() {
  if (g !== 0)
    return;
  const e = A;
  do {
    try {
      for (; g < b.length; ) {
        const t = b[g];
        g++, m(t), Z(t.$$);
      }
    } catch (t) {
      throw b.length = 0, g = 0, t;
    }
    for (m(null), b.length = 0, g = 0; M.length; )
      M.pop()();
    for (let t = 0; t < _.length; t += 1) {
      const n = _[t];
      j.has(n) || (j.add(n), n());
    }
    _.length = 0;
  } while (b.length);
  for (; R.length; )
    R.pop()();
  v = !1, j.clear(), m(e);
}
function Z(e) {
  if (e.fragment !== null) {
    e.update(), k(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(E);
  }
}
function tt(e) {
  const t = [], n = [];
  _.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), _ = t;
}
const et = /* @__PURE__ */ new Set();
function nt(e, t) {
  e && e.i && (et.delete(e), e.i(t));
}
function st(e, t, n) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), E(() => {
    const s = e.$$.on_mount.map(z).filter(I);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : k(s), e.$$.on_mount = [];
  }), r.forEach(E);
}
function it(e, t) {
  const n = e.$$;
  n.fragment !== null && (tt(n.after_update), k(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function rt(e, t) {
  e.$$.dirty[0] === -1 && (b.push(e), Y(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ot(e, t, n, i, r, s, o = null, l = [-1]) {
  const h = A;
  m(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: y,
    not_equal: r,
    bound: P(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: P(),
    dirty: l,
    skip_bound: !1,
    root: t.target || h.$$.root
  };
  o && o(c.root);
  let d = !1;
  if (c.ctx = n ? n(e, t.props || {}, (u, N, ...S) => {
    const B = S.length ? S[0] : N;
    return c.ctx && r(c.ctx[u], c.ctx[u] = B) && (!c.skip_bound && c.bound[u] && c.bound[u](B), d && rt(e, u)), N;
  }) : [], c.update(), d = !0, k(c.before_update), c.fragment = i ? i(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const u = Q(t.target);
      c.fragment && c.fragment.l(u), u.forEach(C);
    } else
      c.fragment && c.fragment.c();
    t.intro && nt(e.$$.fragment), st(e, t.target, t.anchor), $();
  }
  m(h);
}
let D;
typeof HTMLElement == "function" && (D = class extends HTMLElement {
  constructor(t, n, i) {
    super();
    /** The Svelte component constructor */
    a(this, "$$ctor");
    /** Slots */
    a(this, "$$s");
    /** The Svelte component instance */
    a(this, "$$c");
    /** Whether or not the custom element is connected */
    a(this, "$$cn", !1);
    /** Component props data */
    a(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    a(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    a(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    a(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    a(this, "$$l_u", /* @__PURE__ */ new Map());
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
              o = O("slot"), s !== "default" && f(o, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, d) {
              T(c, o, d);
            },
            d: function(c) {
              c && C(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = W(this);
      for (const s of this.$$s)
        s in i && (n[s] = [t(s)]);
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = x(o, s.value, this.$$p_d, "toProp"));
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
            const o = x(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = x(t, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
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
function x(e, t, n, i) {
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
  let o = class extends D {
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
      set(h) {
        var c;
        h = x(l, h, t), this.$$d[l] = h, (c = this.$$c) == null || c.$set({ [l]: h });
      }
    });
  }), i.forEach((l) => {
    Object.defineProperty(o.prototype, l, {
      get() {
        var h;
        return (h = this.$$c) == null ? void 0 : h[l];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
class lt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    a(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    a(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    it(this, 1), this.$destroy = y;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!I(n))
      return y;
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
    this.$$set && !V(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ut = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ut);
function ht(e) {
  q(e, "svelte-1j8504", ".svelte-1j8504,.svelte-1j8504::before,.svelte-1j8504::after{background-repeat:no-repeat;box-sizing:border-box}.svelte-1j8504::before,.svelte-1j8504::after{text-decoration:inherit;vertical-align:inherit}.svelte-1j8504{padding:0;margin:0}a.svelte-1j8504{background-color:transparent}a.svelte-1j8504:active,a.svelte-1j8504:hover{outline-width:0}a.svelte-1j8504:focus{outline-width:0}.svelte-1j8504::-webkit-file-upload-button{-webkit-appearance:button;color:inherit;font:inherit}.button.svelte-1j8504{font-family:sans-serif;display:inline-flex;align-items:center;justify-content:center;gap:8px;background-color:#0085ff;color:#fff;font-weight:bold;width:var(--bsky-share-button-width, 96px);height:var(--bsky-share-button-height, 30px);text-decoration:none;font-size:calc(var(--bsky-share-button-height, 40px) * 0.425);border-radius:4px;transition:opacity .2s linear}.button.svelte-1j8504:hover{opacity:.7}");
}
function ft(e) {
  let t, n, i, r;
  return {
    c() {
      t = O("a"), n = L("svg"), i = L("path"), r = K(
        /*buttonText*/
        e[2]
      ), f(i, "fill", "#fff"), f(i, "d", "M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"), f(i, "class", "svelte-1j8504"), f(n, "xmlns", "http://www.w3.org/2000/svg"), f(n, "height", "14"), f(n, "width", "15.75"), f(n, "viewBox", "0 0 576 512"), f(n, "class", "svelte-1j8504"), f(t, "class", "button svelte-1j8504"), f(
        t,
        "aria-label",
        /*buttonText*/
        e[2]
      ), f(t, "href", "https://bsky.app/intent/compose?text=" + encodeURIComponent(
        /*text*/
        e[3]
      )), p(
        t,
        "--bsky-share-button-width",
        /*width*/
        e[0] + "px"
      ), p(
        t,
        "--bsky-share-button-height",
        /*height*/
        e[1] + "px"
      ), f(t, "target", "_blank"), f(t, "rel", "nofollow");
    },
    m(s, o) {
      T(s, t, o), w(t, n), w(n, i), w(t, r);
    },
    p(s, [o]) {
      o & /*width*/
      1 && p(
        t,
        "--bsky-share-button-width",
        /*width*/
        s[0] + "px"
      ), o & /*height*/
      2 && p(
        t,
        "--bsky-share-button-height",
        /*height*/
        s[1] + "px"
      );
    },
    i: y,
    o: y,
    d(s) {
      s && C(t);
    }
  };
}
function at(e, t, n) {
  let { type: i = "button" } = t, { width: r = 96 } = t, { height: s = 30 } = t, { title: o = document.title || "" } = t, { url: l = location.href } = t, { lang: h = document.documentElement.lang || "en" } = t, c = h === "ja" ? "シェア" : "Share", d = o + `
` + l;
  return e.$$set = (u) => {
    "type" in u && n(4, i = u.type), "width" in u && n(0, r = u.width), "height" in u && n(1, s = u.height), "title" in u && n(5, o = u.title), "url" in u && n(6, l = u.url), "lang" in u && n(7, h = u.lang);
  }, [r, s, c, d, i, o, l, h];
}
class $t extends lt {
  constructor(t) {
    super(), ot(
      this,
      t,
      at,
      ft,
      U,
      {
        type: 4,
        width: 0,
        height: 1,
        title: 5,
        url: 6,
        lang: 7
      },
      ht
    );
  }
  get type() {
    return this.$$.ctx[4];
  }
  set type(t) {
    this.$$set({ type: t }), $();
  }
  get width() {
    return this.$$.ctx[0];
  }
  set width(t) {
    this.$$set({ width: t }), $();
  }
  get height() {
    return this.$$.ctx[1];
  }
  set height(t) {
    this.$$set({ height: t }), $();
  }
  get title() {
    return this.$$.ctx[5];
  }
  set title(t) {
    this.$$set({ title: t }), $();
  }
  get url() {
    return this.$$.ctx[6];
  }
  set url(t) {
    this.$$set({ url: t }), $();
  }
  get lang() {
    return this.$$.ctx[7];
  }
  set lang(t) {
    this.$$set({ lang: t }), $();
  }
}
customElements.define("bsky-share-button", ct($t, { type: {}, width: {}, height: {}, title: {}, url: {}, lang: {} }, [], [], !0));
export {
  $t as default
};
