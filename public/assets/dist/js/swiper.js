var Swiper = (function () {
  "use strict";
  function e(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function t(i, n) {
    void 0 === i && (i = {}),
      void 0 === n && (n = {}),
      Object.keys(n).forEach((s) => {
        void 0 === i[s]
          ? (i[s] = n[s])
          : e(n[s]) && e(i[s]) && Object.keys(n[s]).length > 0 && t(i[s], n[s]);
      });
  }
  const i = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function n() {
    const e = "undefined" != typeof document ? document : {};
    return t(e, i), e;
  }
  const s = {
    document: i,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function o() {
    const e = "undefined" != typeof window ? window : {};
    return t(e, s), e;
  }
  function r(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function a() {
    return Date.now();
  }
  function l(e, t) {
    void 0 === t && (t = "x");
    const i = o();
    let n, s, r;
    const a = (function (e) {
      const t = o();
      let i;
      return (
        t.getComputedStyle && (i = t.getComputedStyle(e, null)),
        !i && e.currentStyle && (i = e.currentStyle),
        i || (i = e.style),
        i
      );
    })(e);
    return (
      i.WebKitCSSMatrix
        ? ((s = a.transform || a.webkitTransform),
          s.split(",").length > 6 &&
            (s = s
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new i.WebKitCSSMatrix("none" === s ? "" : s)))
        : ((r =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (n = r.toString().split(","))),
      "x" === t &&
        (s = i.WebKitCSSMatrix
          ? r.m41
          : 16 === n.length
          ? parseFloat(n[12])
          : parseFloat(n[4])),
      "y" === t &&
        (s = i.WebKitCSSMatrix
          ? r.m42
          : 16 === n.length
          ? parseFloat(n[13])
          : parseFloat(n[5])),
      s || 0
    );
  }
  function c(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function d() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
      const s = n < 0 || arguments.length <= n ? void 0 : arguments[n];
      if (
        null != s &&
        ((i = s),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const i = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, n = i.length; t < n; t += 1) {
          const n = i[t],
            o = Object.getOwnPropertyDescriptor(s, n);
          void 0 !== o &&
            o.enumerable &&
            (c(e[n]) && c(s[n])
              ? s[n].__swiper__
                ? (e[n] = s[n])
                : d(e[n], s[n])
              : !c(e[n]) && c(s[n])
              ? ((e[n] = {}), s[n].__swiper__ ? (e[n] = s[n]) : d(e[n], s[n]))
              : (e[n] = s[n]));
        }
      }
    }
    var i;
    return e;
  }
  function u(e, t, i) {
    e.style.setProperty(t, i);
  }
  function p(e) {
    let { swiper: t, targetPosition: i, side: n } = e;
    const s = o(),
      r = -t.translate;
    let a,
      l = null;
    const c = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      s.cancelAnimationFrame(t.cssModeFrameID);
    const d = i > r ? "next" : "prev",
      u = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      p = () => {
        (a = new Date().getTime()), null === l && (l = a);
        const e = Math.max(Math.min((a - l) / c, 1), 0),
          o = 0.5 - Math.cos(e * Math.PI) / 2;
        let d = r + o * (i - r);
        if ((u(d, i) && (d = i), t.wrapperEl.scrollTo({ [n]: d }), u(d, i)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [n]: d });
            }),
            void s.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = s.requestAnimationFrame(p);
      };
    p();
  }
  function h(e, t) {
    return (
      void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
    );
  }
  function f(e, t) {
    void 0 === t && (t = []);
    const i = document.createElement(e);
    return i.classList.add(...(Array.isArray(t) ? t : [t])), i;
  }
  function m(e, t) {
    return o().getComputedStyle(e, null).getPropertyValue(t);
  }
  function g(e) {
    let t,
      i = e;
    if (i) {
      for (t = 0; null !== (i = i.previousSibling); )
        1 === i.nodeType && (t += 1);
      return t;
    }
  }
  function v(e, t) {
    const i = [];
    let n = e.parentElement;
    for (; n; )
      t ? n.matches(t) && i.push(n) : i.push(n), (n = n.parentElement);
    return i;
  }
  function _(e, t, i) {
    const n = o();
    return i
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            n
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            n
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let y, w, b;
  function $() {
    return (
      y ||
        (y = (function () {
          const e = o(),
            t = n();
          return {
            smoothScroll:
              t.documentElement &&
              t.documentElement.style &&
              "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      y
    );
  }
  function x(e) {
    return (
      void 0 === e && (e = {}),
      w ||
        (w = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const i = $(),
            n = o(),
            s = n.navigator.platform,
            r = t || n.navigator.userAgent,
            a = { ios: !1, android: !1 },
            l = n.screen.width,
            c = n.screen.height,
            d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = r.match(/(iPad).*OS\s([\d_]+)/);
          const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            f = "Win32" === s;
          let m = "MacIntel" === s;
          return (
            !u &&
              m &&
              i.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${l}x${c}`) >= 0 &&
              ((u = r.match(/(Version)\/([\d.]+)/)),
              u || (u = [0, 1, "13_0_0"]),
              (m = !1)),
            d && !f && ((a.os = "android"), (a.android = !0)),
            (u || h || p) && ((a.os = "ios"), (a.ios = !0)),
            a
          );
        })(e)),
      w
    );
  }
  function C() {
    return (
      b ||
        (b = (function () {
          const e = o();
          let t = !1;
          function i() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (i()) {
            const i = String(e.navigator.userAgent);
            if (i.includes("Version/")) {
              const [e, n] = i
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              t = e < 16 || (16 === e && n < 2);
            }
          }
          return {
            isSafari: t || i(),
            needPerspectiveFix: t,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      b
    );
  }
  var S = {
    on(e, t, i) {
      const n = this;
      if (!n.eventsListeners || n.destroyed) return n;
      if ("function" != typeof t) return n;
      const s = i ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          n.eventsListeners[e] || (n.eventsListeners[e] = []),
            n.eventsListeners[e][s](t);
        }),
        n
      );
    },
    once(e, t, i) {
      const n = this;
      if (!n.eventsListeners || n.destroyed) return n;
      if ("function" != typeof t) return n;
      function s() {
        n.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
        for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++)
          o[r] = arguments[r];
        t.apply(n, o);
      }
      return (s.__emitterProxy = t), n.on(e, s, i);
    },
    onAny(e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof e) return i;
      const n = t ? "unshift" : "push";
      return (
        i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[n](e), i
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const i = t.eventsAnyListeners.indexOf(e);
      return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
    },
    off(e, t) {
      const i = this;
      return !i.eventsListeners || i.destroyed
        ? i
        : i.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (i.eventsListeners[e] = [])
              : i.eventsListeners[e] &&
                i.eventsListeners[e].forEach((n, s) => {
                  (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                    i.eventsListeners[e].splice(s, 1);
                });
          }),
          i)
        : i;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, i, n;
      for (var s = arguments.length, o = new Array(s), r = 0; r < s; r++)
        o[r] = arguments[r];
      return (
        "string" == typeof o[0] || Array.isArray(o[0])
          ? ((t = o[0]), (i = o.slice(1, o.length)), (n = e))
          : ((t = o[0].events), (i = o[0].data), (n = o[0].context || e)),
        i.unshift(n),
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(n, [t, ...i]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(n, i);
              });
        }),
        e
      );
    },
  };
  const k = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const i = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (i) {
        let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t &&
          e.isElement &&
          (i.shadowRoot
            ? (t = i.shadowRoot.querySelector(
                `.${e.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                i.shadowRoot &&
                  ((t = i.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  )),
                  t && t.remove());
              })),
          t && t.remove();
      }
    },
    T = (e, t) => {
      if (!e.slides[t]) return;
      const i = e.slides[t].querySelector('[loading="lazy"]');
      i && i.removeAttribute("loading");
    },
    E = (e) => {
      if (!e || e.destroyed || !e.params) return;
      let t = e.params.lazyPreloadPrevNext;
      const i = e.slides.length;
      if (!i || !t || t < 0) return;
      t = Math.min(t, i);
      const n =
          "auto" === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        s = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        const i = s,
          o = [i - t];
        return (
          o.push(...Array.from({ length: t }).map((e, t) => i + n + t)),
          void e.slides.forEach((t, i) => {
            o.includes(t.column) && T(e, i);
          })
        );
      }
      const o = s + n - 1;
      if (e.params.rewind || e.params.loop)
        for (let n = s - t; n <= o + t; n += 1) {
          const t = ((n % i) + i) % i;
          (t < s || t > o) && T(e, t);
        }
      else
        for (let n = Math.max(s - t, 0); n <= Math.min(o + t, i - 1); n += 1)
          n !== s && (n > o || n < s) && T(e, n);
    };
  var O = {
      updateSize: function () {
        const e = this;
        let t, i;
        const n = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n.clientWidth),
          (i =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(m(n, "padding-left") || 0, 10) -
              parseInt(m(n, "padding-right") || 0, 10)),
            (i =
              i -
              parseInt(m(n, "padding-top") || 0, 10) -
              parseInt(m(n, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function i(e, i) {
          return parseFloat(e.getPropertyValue(t(i)) || 0);
        }
        const n = e.params,
          {
            wrapperEl: s,
            slidesEl: o,
            size: r,
            rtlTranslate: a,
            wrongRTL: l,
          } = e,
          c = e.virtual && n.virtual.enabled,
          d = c ? e.virtual.slides.length : e.slides.length,
          p = h(o, `.${e.params.slideClass}, swiper-slide`),
          f = c ? e.virtual.slides.length : p.length;
        let g = [];
        const v = [],
          y = [];
        let w = n.slidesOffsetBefore;
        "function" == typeof w && (w = n.slidesOffsetBefore.call(e));
        let b = n.slidesOffsetAfter;
        "function" == typeof b && (b = n.slidesOffsetAfter.call(e));
        const $ = e.snapGrid.length,
          x = e.slidesGrid.length;
        let C = n.spaceBetween,
          S = -w,
          k = 0,
          T = 0;
        if (void 0 === r) return;
        "string" == typeof C && C.indexOf("%") >= 0
          ? (C = (parseFloat(C.replace("%", "")) / 100) * r)
          : "string" == typeof C && (C = parseFloat(C)),
          (e.virtualSize = -C),
          p.forEach((e) => {
            a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          n.centeredSlides &&
            n.cssMode &&
            (u(s, "--swiper-centered-offset-before", ""),
            u(s, "--swiper-centered-offset-after", ""));
        const E = n.grid && n.grid.rows > 1 && e.grid;
        let O;
        E && e.grid.initSlides(f);
        const A =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let s = 0; s < f; s += 1) {
          let o;
          if (
            ((O = 0),
            p[s] && (o = p[s]),
            E && e.grid.updateSlide(s, o, f, t),
            !p[s] || "none" !== m(o, "display"))
          ) {
            if ("auto" === n.slidesPerView) {
              A && (p[s].style[t("width")] = "");
              const r = getComputedStyle(o),
                a = o.style.transform,
                l = o.style.webkitTransform;
              if (
                (a && (o.style.transform = "none"),
                l && (o.style.webkitTransform = "none"),
                n.roundLengths)
              )
                O = e.isHorizontal() ? _(o, "width", !0) : _(o, "height", !0);
              else {
                const e = i(r, "width"),
                  t = i(r, "padding-left"),
                  n = i(r, "padding-right"),
                  s = i(r, "margin-left"),
                  a = i(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) O = e + s + a;
                else {
                  const { clientWidth: i, offsetWidth: r } = o;
                  O = e + t + n + s + a + (r - i);
                }
              }
              a && (o.style.transform = a),
                l && (o.style.webkitTransform = l),
                n.roundLengths && (O = Math.floor(O));
            } else
              (O = (r - (n.slidesPerView - 1) * C) / n.slidesPerView),
                n.roundLengths && (O = Math.floor(O)),
                p[s] && (p[s].style[t("width")] = `${O}px`);
            p[s] && (p[s].swiperSlideSize = O),
              y.push(O),
              n.centeredSlides
                ? ((S = S + O / 2 + k / 2 + C),
                  0 === k && 0 !== s && (S = S - r / 2 - C),
                  0 === s && (S = S - r / 2 - C),
                  Math.abs(S) < 0.001 && (S = 0),
                  n.roundLengths && (S = Math.floor(S)),
                  T % n.slidesPerGroup == 0 && g.push(S),
                  v.push(S))
                : (n.roundLengths && (S = Math.floor(S)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && g.push(S),
                  v.push(S),
                  (S = S + O + C)),
              (e.virtualSize += O + C),
              (k = O),
              (T += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + b),
          a &&
            l &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            (s.style.width = `${e.virtualSize + C}px`),
          n.setWrapperSize && (s.style[t("width")] = `${e.virtualSize + C}px`),
          E && e.grid.updateWrapperSize(O, g, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < g.length; i += 1) {
            let s = g[i];
            n.roundLengths && (s = Math.floor(s)),
              g[i] <= e.virtualSize - r && t.push(s);
          }
          (g = t),
            Math.floor(e.virtualSize - r) - Math.floor(g[g.length - 1]) > 1 &&
              g.push(e.virtualSize - r);
        }
        if (c && n.loop) {
          const t = y[0] + C;
          if (n.slidesPerGroup > 1) {
            const i = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  n.slidesPerGroup
              ),
              s = t * n.slidesPerGroup;
            for (let e = 0; e < i; e += 1) g.push(g[g.length - 1] + s);
          }
          for (
            let i = 0;
            i < e.virtual.slidesBefore + e.virtual.slidesAfter;
            i += 1
          )
            1 === n.slidesPerGroup && g.push(g[g.length - 1] + t),
              v.push(v[v.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === g.length && (g = [0]), 0 !== C)) {
          const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          p.filter(
            (e, t) => !(n.cssMode && !n.loop) || t !== p.length - 1
          ).forEach((e) => {
            e.style[i] = `${C}px`;
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          y.forEach((t) => {
            e += t + (C || 0);
          }),
            (e -= C);
          const t = e - r;
          g = g.map((e) => (e <= 0 ? -w : e > t ? t + b : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (y.forEach((t) => {
              e += t + (C || 0);
            }),
            (e -= C),
            e < r)
          ) {
            const t = (r - e) / 2;
            g.forEach((e, i) => {
              g[i] = e - t;
            }),
              v.forEach((e, i) => {
                v[i] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: p,
            snapGrid: g,
            slidesGrid: v,
            slidesSizesGrid: y,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          u(s, "--swiper-centered-offset-before", -g[0] + "px"),
            u(
              s,
              "--swiper-centered-offset-after",
              e.size / 2 - y[y.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            i = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + i));
        }
        if (
          (f !== d && e.emit("slidesLengthChange"),
          g.length !== $ &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          v.length !== x && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset(),
          !(c || n.cssMode || ("slide" !== n.effect && "fade" !== n.effect)))
        ) {
          const t = `${n.containerModifierClass}backface-hidden`,
            i = e.el.classList.contains(t);
          f <= n.maxBackfaceHiddenSlides
            ? i || e.el.classList.add(t)
            : i && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [],
          n = t.virtual && t.params.virtual.enabled;
        let s,
          o = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const r = (e) => (n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              i.push(e);
            });
          else
            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
              const e = t.activeIndex + s;
              if (e > t.slides.length && !n) break;
              i.push(r(e));
            }
        else i.push(r(t.activeIndex));
        for (s = 0; s < i.length; s += 1)
          if (void 0 !== i[s]) {
            const e = i[s].offsetHeight;
            o = e > o ? e : o;
          }
        (o || 0 === o) && (t.wrapperEl.style.height = `${o}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          i = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let n = 0; n < t.length; n += 1)
          t[n].swiperSlideOffset =
            (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) -
            i -
            e.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          i = t.params,
          { slides: n, rtlTranslate: s, snapGrid: o } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        s && (r = e),
          n.forEach((e) => {
            e.classList.remove(i.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        let a = i.spaceBetween;
        "string" == typeof a && a.indexOf("%") >= 0
          ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
          : "string" == typeof a && (a = parseFloat(a));
        for (let e = 0; e < n.length; e += 1) {
          const l = n[e];
          let c = l.swiperSlideOffset;
          i.cssMode && i.centeredSlides && (c -= n[0].swiperSlideOffset);
          const d =
              (r + (i.centeredSlides ? t.minTranslate() : 0) - c) /
              (l.swiperSlideSize + a),
            u =
              (r - o[0] + (i.centeredSlides ? t.minTranslate() : 0) - c) /
              (l.swiperSlideSize + a),
            p = -(r - c),
            h = p + t.slidesSizesGrid[e];
          ((p >= 0 && p < t.size - 1) ||
            (h > 1 && h <= t.size) ||
            (p <= 0 && h >= t.size)) &&
            (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(e),
            n[e].classList.add(i.slideVisibleClass)),
            (l.progress = s ? -d : d),
            (l.originalProgress = s ? -u : u);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: s, isBeginning: o, isEnd: r, progressLoop: a } = t;
        const l = o,
          c = r;
        if (0 === n) (s = 0), (o = !0), (r = !0);
        else {
          s = (e - t.minTranslate()) / n;
          const i = Math.abs(e - t.minTranslate()) < 1,
            a = Math.abs(e - t.maxTranslate()) < 1;
          (o = i || s <= 0), (r = a || s >= 1), i && (s = 0), a && (s = 1);
        }
        if (i.loop) {
          const i = t.getSlideIndexByData(0),
            n = t.getSlideIndexByData(t.slides.length - 1),
            s = t.slidesGrid[i],
            o = t.slidesGrid[n],
            r = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          (a = l >= s ? (l - s) / r : (l + r - o) / r), a > 1 && (a -= 1);
        }
        Object.assign(t, {
          progress: s,
          progressLoop: a,
          isBeginning: o,
          isEnd: r,
        }),
          (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          o && !l && t.emit("reachBeginning toEdge"),
          r && !c && t.emit("reachEnd toEdge"),
          ((l && !o) || (c && !r)) && t.emit("fromEdge"),
          t.emit("progress", s);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: i, slidesEl: n, activeIndex: s } = e,
          o = e.virtual && i.virtual.enabled,
          r = (e) => h(n, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
        let a;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              i.slideActiveClass,
              i.slideNextClass,
              i.slidePrevClass
            );
          }),
          o)
        )
          if (i.loop) {
            let t = s - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (a = r(`[data-swiper-slide-index="${t}"]`));
          } else a = r(`[data-swiper-slide-index="${s}"]`);
        else a = t[s];
        if (a) {
          a.classList.add(i.slideActiveClass);
          let e = (function (e, t) {
            const i = [];
            for (; e.nextElementSibling; ) {
              const n = e.nextElementSibling;
              t ? n.matches(t) && i.push(n) : i.push(n), (e = n);
            }
            return i;
          })(a, `.${i.slideClass}, swiper-slide`)[0];
          i.loop && !e && (e = t[0]), e && e.classList.add(i.slideNextClass);
          let n = (function (e, t) {
            const i = [];
            for (; e.previousElementSibling; ) {
              const n = e.previousElementSibling;
              t ? n.matches(t) && i.push(n) : i.push(n), (e = n);
            }
            return i;
          })(a, `.${i.slideClass}, swiper-slide`)[0];
          i.loop && 0 === !n && (n = t[t.length - 1]),
            n && n.classList.add(i.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: n,
            params: s,
            activeIndex: o,
            realIndex: r,
            snapIndex: a,
          } = t;
        let l,
          c = e;
        const d = (e) => {
          let i = e - t.virtual.slidesBefore;
          return (
            i < 0 && (i = t.virtual.slides.length + i),
            i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
            i
          );
        };
        if (
          (void 0 === c &&
            (c = (function (e) {
              const { slidesGrid: t, params: i } = e,
                n = e.rtlTranslate ? e.translate : -e.translate;
              let s;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? n >= t[e] && n < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (s = e)
                    : n >= t[e] && n < t[e + 1] && (s = e + 1)
                  : n >= t[e] && (s = e);
              return (
                i.normalizeSlideIndex && (s < 0 || void 0 === s) && (s = 0), s
              );
            })(t)),
          n.indexOf(i) >= 0)
        )
          l = n.indexOf(i);
        else {
          const e = Math.min(s.slidesPerGroupSkip, c);
          l = e + Math.floor((c - e) / s.slidesPerGroup);
        }
        if ((l >= n.length && (l = n.length - 1), c === o))
          return (
            l !== a && ((t.snapIndex = l), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = d(c))
            )
          );
        let u;
        (u =
          t.virtual && s.virtual.enabled && s.loop
            ? d(c)
            : t.slides[c]
            ? parseInt(
                t.slides[c].getAttribute("data-swiper-slide-index") || c,
                10
              )
            : c),
          Object.assign(t, {
            previousSnapIndex: a,
            snapIndex: l,
            previousRealIndex: r,
            realIndex: u,
            previousIndex: o,
            activeIndex: c,
          }),
          t.initialized && E(t),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            (r !== u && t.emit("realIndexChange"), t.emit("slideChange"));
      },
      updateClickedSlide: function (e, t) {
        const i = this,
          n = i.params;
        let s = e.closest(`.${n.slideClass}, swiper-slide`);
        !s &&
          i.isElement &&
          t &&
          t.length > 1 &&
          t.includes(e) &&
          [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
            !s &&
              e.matches &&
              e.matches(`.${n.slideClass}, swiper-slide`) &&
              (s = e);
          });
        let o,
          r = !1;
        if (s)
          for (let e = 0; e < i.slides.length; e += 1)
            if (i.slides[e] === s) {
              (r = !0), (o = e);
              break;
            }
        if (!s || !r)
          return (i.clickedSlide = void 0), void (i.clickedIndex = void 0);
        (i.clickedSlide = s),
          i.virtual && i.params.virtual.enabled
            ? (i.clickedIndex = parseInt(
                s.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (i.clickedIndex = o),
          n.slideToClickedSlide &&
            void 0 !== i.clickedIndex &&
            i.clickedIndex !== i.activeIndex &&
            i.slideToClickedSlide();
      },
    },
    A = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const { params: t, rtlTranslate: i, translate: n, wrapperEl: s } = this;
        if (t.virtualTranslate) return i ? -n : n;
        if (t.cssMode) return n;
        let o = l(s, e);
        return (o += this.cssOverflowAdjustment()), i && (o = -o), o || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          { rtlTranslate: n, params: s, wrapperEl: o, progress: r } = i;
        let a,
          l = 0,
          c = 0;
        i.isHorizontal() ? (l = n ? -e : e) : (c = e),
          s.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? l : c),
          s.cssMode
            ? (o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -l : -c)
            : s.virtualTranslate ||
              (i.isHorizontal()
                ? (l -= i.cssOverflowAdjustment())
                : (c -= i.cssOverflowAdjustment()),
              (o.style.transform = `translate3d(${l}px, ${c}px, 0px)`));
        const d = i.maxTranslate() - i.minTranslate();
        (a = 0 === d ? 0 : (e - i.minTranslate()) / d),
          a !== r && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, i, n, s) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          void 0 === n && (n = !0);
        const o = this,
          { params: r, wrapperEl: a } = o;
        if (o.animating && r.preventInteractionOnTransition) return !1;
        const l = o.minTranslate(),
          c = o.maxTranslate();
        let d;
        if (
          ((d = n && e > l ? l : n && e < c ? c : e),
          o.updateProgress(d),
          r.cssMode)
        ) {
          const e = o.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!o.support.smoothScroll)
              return (
                p({ swiper: o, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (o.setTransition(0),
              o.setTranslate(d),
              i &&
                (o.emit("beforeTransitionStart", t, s),
                o.emit("transitionEnd")))
            : (o.setTransition(t),
              o.setTranslate(d),
              i &&
                (o.emit("beforeTransitionStart", t, s),
                o.emit("transitionStart")),
              o.animating ||
                ((o.animating = !0),
                o.onTranslateToWrapperTransitionEnd ||
                  (o.onTranslateToWrapperTransitionEnd = function (e) {
                    o &&
                      !o.destroyed &&
                      e.target === this &&
                      (o.wrapperEl.removeEventListener(
                        "transitionend",
                        o.onTranslateToWrapperTransitionEnd
                      ),
                      (o.onTranslateToWrapperTransitionEnd = null),
                      delete o.onTranslateToWrapperTransitionEnd,
                      i && o.emit("transitionEnd"));
                  }),
                o.wrapperEl.addEventListener(
                  "transitionend",
                  o.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
  function I(e) {
    let { swiper: t, runCallbacks: i, direction: n, step: s } = e;
    const { activeIndex: o, previousIndex: r } = t;
    let a = n;
    if (
      (a || (a = o > r ? "next" : o < r ? "prev" : "reset"),
      t.emit(`transition${s}`),
      i && o !== r)
    ) {
      if ("reset" === a) return void t.emit(`slideResetTransition${s}`);
      t.emit(`slideChangeTransition${s}`),
        "next" === a
          ? t.emit(`slideNextTransition${s}`)
          : t.emit(`slidePrevTransition${s}`);
    }
  }
  var P = {
      slideTo: function (e, t, i, n, s) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const o = this;
        let r = e;
        r < 0 && (r = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: h,
          wrapperEl: f,
          enabled: m,
        } = o;
        if (
          (o.animating && a.preventInteractionOnTransition) ||
          (!m && !n && !s)
        )
          return !1;
        const g = Math.min(o.params.slidesPerGroupSkip, r);
        let v = g + Math.floor((r - g) / o.params.slidesPerGroup);
        v >= l.length && (v = l.length - 1);
        const _ = -l[v];
        if (a.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * _),
              i = Math.floor(100 * c[e]),
              n = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= i && t < n - (n - i) / 2
                ? (r = e)
                : t >= i && t < n && (r = e + 1)
              : t >= i && (r = e);
          }
        if (o.initialized && r !== u) {
          if (
            !o.allowSlideNext &&
            (h
              ? _ > o.translate && _ > o.minTranslate()
              : _ < o.translate && _ < o.minTranslate())
          )
            return !1;
          if (
            !o.allowSlidePrev &&
            _ > o.translate &&
            _ > o.maxTranslate() &&
            (u || 0) !== r
          )
            return !1;
        }
        let y;
        if (
          (r !== (d || 0) && i && o.emit("beforeSlideChangeStart"),
          o.updateProgress(_),
          (y = r > u ? "next" : r < u ? "prev" : "reset"),
          (h && -_ === o.translate) || (!h && _ === o.translate))
        )
          return (
            o.updateActiveIndex(r),
            a.autoHeight && o.updateAutoHeight(),
            o.updateSlidesClasses(),
            "slide" !== a.effect && o.setTranslate(_),
            "reset" !== y && (o.transitionStart(i, y), o.transitionEnd(i, y)),
            !1
          );
        if (a.cssMode) {
          const e = o.isHorizontal(),
            i = h ? _ : -_;
          if (0 === t) {
            const t = o.virtual && o.params.virtual.enabled;
            t &&
              ((o.wrapperEl.style.scrollSnapType = "none"),
              (o._immediateVirtual = !0)),
              t && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
                ? ((o._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    f[e ? "scrollLeft" : "scrollTop"] = i;
                  }))
                : (f[e ? "scrollLeft" : "scrollTop"] = i),
              t &&
                requestAnimationFrame(() => {
                  (o.wrapperEl.style.scrollSnapType = ""),
                    (o._immediateVirtual = !1);
                });
          } else {
            if (!o.support.smoothScroll)
              return (
                p({ swiper: o, targetPosition: i, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
          }
          return !0;
        }
        return (
          o.setTransition(t),
          o.setTranslate(_),
          o.updateActiveIndex(r),
          o.updateSlidesClasses(),
          o.emit("beforeTransitionStart", t, n),
          o.transitionStart(i, y),
          0 === t
            ? o.transitionEnd(i, y)
            : o.animating ||
              ((o.animating = !0),
              o.onSlideToWrapperTransitionEnd ||
                (o.onSlideToWrapperTransitionEnd = function (e) {
                  o &&
                    !o.destroyed &&
                    e.target === this &&
                    (o.wrapperEl.removeEventListener(
                      "transitionend",
                      o.onSlideToWrapperTransitionEnd
                    ),
                    (o.onSlideToWrapperTransitionEnd = null),
                    delete o.onSlideToWrapperTransitionEnd,
                    o.transitionEnd(i, y));
                }),
              o.wrapperEl.addEventListener(
                "transitionend",
                o.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, i, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === i && (i = !0),
          "string" == typeof e && (e = parseInt(e, 10));
        const s = this;
        let o = e;
        return (
          s.params.loop &&
            (s.virtual && s.params.virtual.enabled
              ? (o += s.virtual.slidesBefore)
              : (o = s.getSlideIndexByData(o))),
          s.slideTo(o, t, i, n)
        );
      },
      slideNext: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const n = this,
          { enabled: s, params: o, animating: r } = n;
        if (!s) return n;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const l = n.activeIndex < o.slidesPerGroupSkip ? 1 : a,
          c = n.virtual && o.virtual.enabled;
        if (o.loop) {
          if (r && !c && o.loopPreventsSliding) return !1;
          if (
            (n.loopFix({ direction: "next" }),
            (n._clientLeft = n.wrapperEl.clientLeft),
            n.activeIndex === n.slides.length - 1 && o.cssMode)
          )
            return (
              requestAnimationFrame(() => {
                n.slideTo(n.activeIndex + l, e, t, i);
              }),
              !0
            );
        }
        return o.rewind && n.isEnd
          ? n.slideTo(0, e, t, i)
          : n.slideTo(n.activeIndex + l, e, t, i);
      },
      slidePrev: function (e, t, i) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const n = this,
          {
            params: s,
            snapGrid: o,
            slidesGrid: r,
            rtlTranslate: a,
            enabled: l,
            animating: c,
          } = n;
        if (!l) return n;
        const d = n.virtual && s.virtual.enabled;
        if (s.loop) {
          if (c && !d && s.loopPreventsSliding) return !1;
          n.loopFix({ direction: "prev" }),
            (n._clientLeft = n.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const p = u(a ? n.translate : -n.translate),
          h = o.map((e) => u(e));
        let f = o[h.indexOf(p) - 1];
        if (void 0 === f && s.cssMode) {
          let e;
          o.forEach((t, i) => {
            p >= t && (e = i);
          }),
            void 0 !== e && (f = o[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if (
          (void 0 !== f &&
            ((m = r.indexOf(f)),
            m < 0 && (m = n.activeIndex - 1),
            "auto" === s.slidesPerView &&
              1 === s.slidesPerGroup &&
              s.slidesPerGroupAuto &&
              ((m = m - n.slidesPerViewDynamic("previous", !0) + 1),
              (m = Math.max(m, 0)))),
          s.rewind && n.isBeginning)
        ) {
          const s =
            n.params.virtual && n.params.virtual.enabled && n.virtual
              ? n.virtual.slides.length - 1
              : n.slides.length - 1;
          return n.slideTo(s, e, t, i);
        }
        return s.loop && 0 === n.activeIndex && s.cssMode
          ? (requestAnimationFrame(() => {
              n.slideTo(m, e, t, i);
            }),
            !0)
          : n.slideTo(m, e, t, i);
      },
      slideReset: function (e, t, i) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, i)
        );
      },
      slideToClosest: function (e, t, i, n) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === n && (n = 0.5);
        const s = this;
        let o = s.activeIndex;
        const r = Math.min(s.params.slidesPerGroupSkip, o),
          a = r + Math.floor((o - r) / s.params.slidesPerGroup),
          l = s.rtlTranslate ? s.translate : -s.translate;
        if (l >= s.snapGrid[a]) {
          const e = s.snapGrid[a];
          l - e > (s.snapGrid[a + 1] - e) * n && (o += s.params.slidesPerGroup);
        } else {
          const e = s.snapGrid[a - 1];
          l - e <= (s.snapGrid[a] - e) * n && (o -= s.params.slidesPerGroup);
        }
        return (
          (o = Math.max(o, 0)),
          (o = Math.min(o, s.slidesGrid.length - 1)),
          s.slideTo(o, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: i } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let s,
          o = e.clickedIndex;
        const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (s = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? o < e.loopedSlides - n / 2 ||
                o > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (o = e.getSlideIndex(
                    h(i, `${a}[data-swiper-slide-index="${s}"]`)[0]
                  )),
                  r(() => {
                    e.slideTo(o);
                  }))
                : e.slideTo(o)
              : o > e.slides.length - n
              ? (e.loopFix(),
                (o = e.getSlideIndex(
                  h(i, `${a}[data-swiper-slide-index="${s}"]`)[0]
                )),
                r(() => {
                  e.slideTo(o);
                }))
              : e.slideTo(o);
        } else e.slideTo(o);
      },
    },
    L = {
      loopCreate: function (e) {
        const t = this,
          { params: i, slidesEl: n } = t;
        !i.loop ||
          (t.virtual && t.params.virtual.enabled) ||
          (h(n, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
            e.setAttribute("data-swiper-slide-index", t);
          }),
          t.loopFix({
            slideRealIndex: e,
            direction: i.centeredSlides ? void 0 : "next",
          }));
      },
      loopFix: function (e) {
        let {
          slideRealIndex: t,
          slideTo: i = !0,
          direction: n,
          setTranslate: s,
          activeSlideIndex: o,
          byController: r,
          byMousewheel: a,
        } = void 0 === e ? {} : e;
        const l = this;
        if (!l.params.loop) return;
        l.emit("beforeLoopFix");
        const {
          slides: c,
          allowSlidePrev: d,
          allowSlideNext: u,
          slidesEl: p,
          params: h,
        } = l;
        if (
          ((l.allowSlidePrev = !0),
          (l.allowSlideNext = !0),
          l.virtual && h.virtual.enabled)
        )
          return (
            i &&
              (h.centeredSlides || 0 !== l.snapIndex
                ? h.centeredSlides && l.snapIndex < h.slidesPerView
                  ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                  : l.snapIndex === l.snapGrid.length - 1 &&
                    l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
            (l.allowSlidePrev = d),
            (l.allowSlideNext = u),
            void l.emit("loopFix")
          );
        const f =
          "auto" === h.slidesPerView
            ? l.slidesPerViewDynamic()
            : Math.ceil(parseFloat(h.slidesPerView, 10));
        let m = h.loopedSlides || f;
        m % h.slidesPerGroup != 0 &&
          (m += h.slidesPerGroup - (m % h.slidesPerGroup)),
          (l.loopedSlides = m);
        const g = [],
          v = [];
        let _ = l.activeIndex;
        void 0 === o
          ? (o = l.getSlideIndex(
              l.slides.filter((e) =>
                e.classList.contains(h.slideActiveClass)
              )[0]
            ))
          : (_ = o);
        const y = "next" === n || !n,
          w = "prev" === n || !n;
        let b = 0,
          $ = 0;
        if (o < m) {
          b = Math.max(m - o, h.slidesPerGroup);
          for (let e = 0; e < m - o; e += 1) {
            const t = e - Math.floor(e / c.length) * c.length;
            g.push(c.length - t - 1);
          }
        } else if (o > l.slides.length - 2 * m) {
          $ = Math.max(o - (l.slides.length - 2 * m), h.slidesPerGroup);
          for (let e = 0; e < $; e += 1) {
            const t = e - Math.floor(e / c.length) * c.length;
            v.push(t);
          }
        }
        if (
          (w &&
            g.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                p.prepend(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          y &&
            v.forEach((e) => {
              (l.slides[e].swiperLoopMoveDOM = !0),
                p.append(l.slides[e]),
                (l.slides[e].swiperLoopMoveDOM = !1);
            }),
          l.recalcSlides(),
          "auto" === h.slidesPerView && l.updateSlides(),
          h.watchSlidesProgress && l.updateSlidesOffset(),
          i)
        )
          if (g.length > 0 && w)
            if (void 0 === t) {
              const e = l.slidesGrid[_],
                t = l.slidesGrid[_ + b] - e;
              a
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(_ + b, 0, !1, !0),
                  s &&
                    ((l.touches[l.isHorizontal() ? "startX" : "startY"] += t),
                    (l.touchEventsData.currentTranslate = l.translate)));
            } else
              s &&
                (l.slideToLoop(t, 0, !1, !0),
                (l.touchEventsData.currentTranslate = l.translate));
          else if (v.length > 0 && y)
            if (void 0 === t) {
              const e = l.slidesGrid[_],
                t = l.slidesGrid[_ - $] - e;
              a
                ? l.setTranslate(l.translate - t)
                : (l.slideTo(_ - $, 0, !1, !0),
                  s &&
                    ((l.touches[l.isHorizontal() ? "startX" : "startY"] += t),
                    (l.touchEventsData.currentTranslate = l.translate)));
            } else l.slideToLoop(t, 0, !1, !0);
        if (
          ((l.allowSlidePrev = d),
          (l.allowSlideNext = u),
          l.controller && l.controller.control && !r)
        ) {
          const e = {
            slideRealIndex: t,
            direction: n,
            setTranslate: s,
            activeSlideIndex: o,
            byController: !0,
          };
          Array.isArray(l.controller.control)
            ? l.controller.control.forEach((t) => {
                !t.destroyed &&
                  t.params.loop &&
                  t.loopFix({
                    ...e,
                    slideTo: t.params.slidesPerView === h.slidesPerView && i,
                  });
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix({
                ...e,
                slideTo:
                  l.controller.control.params.slidesPerView ===
                    h.slidesPerView && i,
              });
        }
        l.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: i } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const n = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          n[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          n.forEach((e) => {
            i.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
  function M(e) {
    const t = this,
      i = n(),
      s = o(),
      r = t.touchEventsData;
    r.evCache.push(e);
    const { params: l, touches: c, enabled: d } = t;
    if (!d) return;
    if (!l.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let u = e;
    u.originalEvent && (u = u.originalEvent);
    let p = u.target;
    if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p)) return;
    if ("which" in u && 3 === u.which) return;
    if ("button" in u && u.button > 0) return;
    if (r.isTouched && r.isMoved) return;
    const h = !!l.noSwipingClass && "" !== l.noSwipingClass,
      f = e.composedPath ? e.composedPath() : e.path;
    h && u.target && u.target.shadowRoot && f && (p = f[0]);
    const m = l.noSwipingSelector
        ? l.noSwipingSelector
        : `.${l.noSwipingClass}`,
      g = !(!u.target || !u.target.shadowRoot);
    if (
      l.noSwiping &&
      (g
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(i) {
                if (!i || i === n() || i === o()) return null;
                i.assignedSlot && (i = i.assignedSlot);
                const s = i.closest(e);
                return s || i.getRootNode ? s || t(i.getRootNode().host) : null;
              })(t)
            );
          })(m, p)
        : p.closest(m))
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
    (c.currentX = u.pageX), (c.currentY = u.pageY);
    const v = c.currentX,
      _ = c.currentY,
      y = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
      w = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (y && (v <= w || v >= s.innerWidth - w)) {
      if ("prevent" !== y) return;
      e.preventDefault();
    }
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (c.startX = v),
      (c.startY = _),
      (r.touchStartTime = a()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (r.allowThresholdMove = !1);
    let b = !0;
    p.matches(r.focusableElements) &&
      ((b = !1), "SELECT" === p.nodeName && (r.isTouched = !1)),
      i.activeElement &&
        i.activeElement.matches(r.focusableElements) &&
        i.activeElement !== p &&
        i.activeElement.blur();
    const $ = b && t.allowTouchMove && l.touchStartPreventDefault;
    (!l.touchStartForcePreventDefault && !$) ||
      p.isContentEditable ||
      u.preventDefault(),
      l.freeMode &&
        l.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !l.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", u);
  }
  function D(e) {
    const t = n(),
      i = this,
      s = i.touchEventsData,
      { params: o, touches: r, rtlTranslate: l, enabled: c } = i;
    if (!c) return;
    if (!o.simulateTouch && "mouse" === e.pointerType) return;
    let d = e;
    if ((d.originalEvent && (d = d.originalEvent), !s.isTouched))
      return void (
        s.startMoving &&
        s.isScrolling &&
        i.emit("touchMoveOpposite", d)
      );
    const u = s.evCache.findIndex((e) => e.pointerId === d.pointerId);
    u >= 0 && (s.evCache[u] = d);
    const p = s.evCache.length > 1 ? s.evCache[0] : d,
      h = p.pageX,
      f = p.pageY;
    if (d.preventedByNestedSwiper) return (r.startX = h), void (r.startY = f);
    if (!i.allowTouchMove)
      return (
        d.target.matches(s.focusableElements) || (i.allowClick = !1),
        void (
          s.isTouched &&
          (Object.assign(r, {
            startX: h,
            startY: f,
            prevX: i.touches.currentX,
            prevY: i.touches.currentY,
            currentX: h,
            currentY: f,
          }),
          (s.touchStartTime = a()))
        )
      );
    if (o.touchReleaseOnEdges && !o.loop)
      if (i.isVertical()) {
        if (
          (f < r.startY && i.translate <= i.maxTranslate()) ||
          (f > r.startY && i.translate >= i.minTranslate())
        )
          return (s.isTouched = !1), void (s.isMoved = !1);
      } else if (
        (h < r.startX && i.translate <= i.maxTranslate()) ||
        (h > r.startX && i.translate >= i.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      d.target === t.activeElement &&
      d.target.matches(s.focusableElements)
    )
      return (s.isMoved = !0), void (i.allowClick = !1);
    if (
      (s.allowTouchCallbacks && i.emit("touchMove", d),
      d.targetTouches && d.targetTouches.length > 1)
    )
      return;
    (r.currentX = h), (r.currentY = f);
    const m = r.currentX - r.startX,
      g = r.currentY - r.startY;
    if (i.params.threshold && Math.sqrt(m ** 2 + g ** 2) < i.params.threshold)
      return;
    if (void 0 === s.isScrolling) {
      let e;
      (i.isHorizontal() && r.currentY === r.startY) ||
      (i.isVertical() && r.currentX === r.startX)
        ? (s.isScrolling = !1)
        : m * m + g * g >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(g), Math.abs(m))) / Math.PI),
          (s.isScrolling = i.isHorizontal()
            ? e > o.touchAngle
            : 90 - e > o.touchAngle));
    }
    if (
      (s.isScrolling && i.emit("touchMoveOpposite", d),
      void 0 === s.startMoving &&
        ((r.currentX === r.startX && r.currentY === r.startY) ||
          (s.startMoving = !0)),
      s.isScrolling ||
        (i.zoom &&
          i.params.zoom &&
          i.params.zoom.enabled &&
          s.evCache.length > 1))
    )
      return void (s.isTouched = !1);
    if (!s.startMoving) return;
    (i.allowClick = !1),
      !o.cssMode && d.cancelable && d.preventDefault(),
      o.touchMoveStopPropagation && !o.nested && d.stopPropagation();
    let v = i.isHorizontal() ? m : g,
      _ = i.isHorizontal()
        ? r.currentX - r.previousX
        : r.currentY - r.previousY;
    o.oneWayMovement &&
      ((v = Math.abs(v) * (l ? 1 : -1)), (_ = Math.abs(_) * (l ? 1 : -1))),
      (r.diff = v),
      (v *= o.touchRatio),
      l && ((v = -v), (_ = -_));
    const y = i.touchesDirection;
    (i.swipeDirection = v > 0 ? "prev" : "next"),
      (i.touchesDirection = _ > 0 ? "prev" : "next");
    const w = i.params.loop && !o.cssMode,
      b =
        ("next" === i.swipeDirection && i.allowSlideNext) ||
        ("prev" === i.swipeDirection && i.allowSlidePrev);
    if (!s.isMoved) {
      if (
        (w && b && i.loopFix({ direction: i.swipeDirection }),
        (s.startTranslate = i.getTranslate()),
        i.setTransition(0),
        i.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        i.wrapperEl.dispatchEvent(e);
      }
      (s.allowMomentumBounce = !1),
        !o.grabCursor ||
          (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
          i.setGrabCursor(!0),
        i.emit("sliderFirstMove", d);
    }
    let $;
    s.isMoved &&
      y !== i.touchesDirection &&
      w &&
      b &&
      Math.abs(v) >= 1 &&
      (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }), ($ = !0)),
      i.emit("sliderMove", d),
      (s.isMoved = !0),
      (s.currentTranslate = v + s.startTranslate);
    let x = !0,
      C = o.resistanceRatio;
    if (
      (o.touchReleaseOnEdges && (C = 0),
      v > 0
        ? (w &&
            b &&
            !$ &&
            s.currentTranslate >
              (o.centeredSlides
                ? i.minTranslate() - i.size / 2
                : i.minTranslate()) &&
            i.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          s.currentTranslate > i.minTranslate() &&
            ((x = !1),
            o.resistance &&
              (s.currentTranslate =
                i.minTranslate() -
                1 +
                (-i.minTranslate() + s.startTranslate + v) ** C)))
        : v < 0 &&
          (w &&
            b &&
            !$ &&
            s.currentTranslate <
              (o.centeredSlides
                ? i.maxTranslate() + i.size / 2
                : i.maxTranslate()) &&
            i.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                i.slides.length -
                ("auto" === o.slidesPerView
                  ? i.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(o.slidesPerView, 10))),
            }),
          s.currentTranslate < i.maxTranslate() &&
            ((x = !1),
            o.resistance &&
              (s.currentTranslate =
                i.maxTranslate() +
                1 -
                (i.maxTranslate() - s.startTranslate - v) ** C))),
      x && (d.preventedByNestedSwiper = !0),
      !i.allowSlideNext &&
        "next" === i.swipeDirection &&
        s.currentTranslate < s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      !i.allowSlidePrev &&
        "prev" === i.swipeDirection &&
        s.currentTranslate > s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      i.allowSlidePrev ||
        i.allowSlideNext ||
        (s.currentTranslate = s.startTranslate),
      o.threshold > 0)
    ) {
      if (!(Math.abs(v) > o.threshold || s.allowThresholdMove))
        return void (s.currentTranslate = s.startTranslate);
      if (!s.allowThresholdMove)
        return (
          (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          void (r.diff = i.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        );
    }
    o.followFinger &&
      !o.cssMode &&
      (((o.freeMode && o.freeMode.enabled && i.freeMode) ||
        o.watchSlidesProgress) &&
        (i.updateActiveIndex(), i.updateSlidesClasses()),
      o.freeMode &&
        o.freeMode.enabled &&
        i.freeMode &&
        i.freeMode.onTouchMove(),
      i.updateProgress(s.currentTranslate),
      i.setTranslate(s.currentTranslate));
  }
  function z(e) {
    const t = this,
      i = t.touchEventsData,
      n = i.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (n >= 0 && i.evCache.splice(n, 1),
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        e.type
      ) &&
        (!["pointercancel", "contextmenu"].includes(e.type) ||
          (!t.browser.isSafari && !t.browser.isWebView)))
    )
      return;
    const {
      params: s,
      touches: o,
      rtlTranslate: l,
      slidesGrid: c,
      enabled: d,
    } = t;
    if (!d) return;
    if (!s.simulateTouch && "mouse" === e.pointerType) return;
    let u = e;
    if (
      (u.originalEvent && (u = u.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", u),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && s.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const p = a(),
      h = p - i.touchStartTime;
    if (t.allowClick) {
      const e = u.path || (u.composedPath && u.composedPath());
      t.updateClickedSlide((e && e[0]) || u.target, e),
        t.emit("tap click", u),
        h < 300 &&
          p - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", u);
    }
    if (
      ((i.lastClickTime = a()),
      r(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === o.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    let f;
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (f = s.followFinger
        ? l
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      s.cssMode)
    )
      return;
    if (s.freeMode && s.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: f });
    let m = 0,
      g = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < c.length;
      e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
    ) {
      const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      void 0 !== c[e + t]
        ? f >= c[e] && f < c[e + t] && ((m = e), (g = c[e + t] - c[e]))
        : f >= c[e] && ((m = e), (g = c[c.length - 1] - c[c.length - 2]));
    }
    let v = null,
      _ = null;
    s.rewind &&
      (t.isBeginning
        ? (_ =
            s.virtual && s.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (v = 0));
    const y = (f - c[m]) / g,
      w = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (h > s.longSwipesMs) {
      if (!s.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (y >= s.longSwipesRatio
          ? t.slideTo(s.rewind && t.isEnd ? v : m + w)
          : t.slideTo(m)),
        "prev" === t.swipeDirection &&
          (y > 1 - s.longSwipesRatio
            ? t.slideTo(m + w)
            : null !== _ && y < 0 && Math.abs(y) > s.longSwipesRatio
            ? t.slideTo(_)
            : t.slideTo(m));
    } else {
      if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
      !t.navigation ||
      (u.target !== t.navigation.nextEl && u.target !== t.navigation.prevEl)
        ? ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + w),
          "prev" === t.swipeDirection && t.slideTo(null !== _ ? _ : m))
        : u.target === t.navigation.nextEl
        ? t.slideTo(m + w)
        : t.slideTo(m);
    }
  }
  function j() {
    const e = this,
      { params: t, el: i } = e;
    if (i && 0 === i.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: n, allowSlidePrev: s, snapGrid: o } = e,
      r = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const a = r && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    a
      ? e.params.loop && !r
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = s),
      (e.allowSlideNext = n),
      e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
  }
  function F(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function R() {
    const e = this,
      { wrapperEl: t, rtlTranslate: i, enabled: n } = e;
    if (!n) return;
    let s;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const o = e.maxTranslate() - e.minTranslate();
    (s = 0 === o ? 0 : (e.translate - e.minTranslate()) / o),
      s !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  function q(e) {
    const t = this;
    k(t, e.target),
      t.params.cssMode ||
        ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
        t.update();
  }
  let H = !1;
  function N() {}
  const B = (e, t) => {
      const i = n(),
        { params: s, el: o, wrapperEl: r, device: a } = e,
        l = !!s.nested,
        c = "on" === t ? "addEventListener" : "removeEventListener",
        d = t;
      o[c]("pointerdown", e.onTouchStart, { passive: !1 }),
        i[c]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
        i[c]("pointerup", e.onTouchEnd, { passive: !0 }),
        i[c]("pointercancel", e.onTouchEnd, { passive: !0 }),
        i[c]("pointerout", e.onTouchEnd, { passive: !0 }),
        i[c]("pointerleave", e.onTouchEnd, { passive: !0 }),
        i[c]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (s.preventClicks || s.preventClicksPropagation) &&
          o[c]("click", e.onClick, !0),
        s.cssMode && r[c]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[d](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              j,
              !0
            )
          : e[d]("observerUpdate", j, !0),
        o[c]("load", e.onLoad, { capture: !0 });
    },
    G = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var W = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper_no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper_",
    slideClass: "swiper__slide",
    slideActiveClass: "swiper__slide_active",
    slideVisibleClass: "swiper__slide_visible",
    slideNextClass: "swiper__slide_next",
    slidePrevClass: "swiper__slide_prev",
    wrapperClass: "swiper__wrapper",
    lazyPreloaderClass: "swiper__preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function V(e, t) {
    return function (i) {
      void 0 === i && (i = {});
      const n = Object.keys(i)[0],
        s = i[n];
      "object" == typeof s && null !== s
        ? (!0 === e[n] && (e[n] = { enabled: !0 }),
          "navigation" === n &&
            e[n] &&
            e[n].enabled &&
            !e[n].prevEl &&
            !e[n].nextEl &&
            (e[n].auto = !0),
          ["pagination", "scrollbar"].indexOf(n) >= 0 &&
            e[n] &&
            e[n].enabled &&
            !e[n].el &&
            (e[n].auto = !0),
          n in e && "enabled" in s
            ? ("object" != typeof e[n] ||
                "enabled" in e[n] ||
                (e[n].enabled = !0),
              e[n] || (e[n] = { enabled: !1 }),
              d(t, i))
            : d(t, i))
        : d(t, i);
    };
  }
  const U = {
      eventsEmitter: S,
      update: O,
      translate: A,
      transition: {
        setTransition: function (e, t) {
          const i = this;
          i.params.cssMode ||
            ((i.wrapperEl.style.transitionDuration = `${e}ms`),
            (i.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
            i.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const i = this,
            { params: n } = i;
          n.cssMode ||
            (n.autoHeight && i.updateAutoHeight(),
            I({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const i = this,
            { params: n } = i;
          (i.animating = !1),
            n.cssMode ||
              (i.setTransition(0),
              I({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: P,
      loop: L,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const i =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0),
            (i.style.cursor = "move"),
            (i.style.cursor = e ? "grabbing" : "grab"),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = ""),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = n(),
            { params: i } = e;
          (e.onTouchStart = M.bind(e)),
            (e.onTouchMove = D.bind(e)),
            (e.onTouchEnd = z.bind(e)),
            i.cssMode && (e.onScroll = R.bind(e)),
            (e.onClick = F.bind(e)),
            (e.onLoad = q.bind(e)),
            H || (t.addEventListener("touchstart", N), (H = !0)),
            B(e, "on");
        },
        detachEvents: function () {
          B(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: i, params: n, el: s } = e,
            o = n.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const r = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!r || e.currentBreakpoint === r) return;
          const a = (r in o ? o[r] : void 0) || e.originalParams,
            l = G(e, n),
            c = G(e, a),
            u = n.enabled;
          l && !c
            ? (s.classList.remove(
                `${n.containerModifierClass}grid`,
                `${n.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !l &&
              c &&
              (s.classList.add(`${n.containerModifierClass}grid`),
              ((a.grid.fill && "column" === a.grid.fill) ||
                (!a.grid.fill && "column" === n.grid.fill)) &&
                s.classList.add(`${n.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              if (void 0 === a[t]) return;
              const i = n[t] && n[t].enabled,
                s = a[t] && a[t].enabled;
              i && !s && e[t].disable(), !i && s && e[t].enable();
            });
          const p = a.direction && a.direction !== n.direction,
            h = n.loop && (a.slidesPerView !== n.slidesPerView || p),
            f = n.loop;
          p && i && e.changeDirection(), d(e.params, a);
          const m = e.params.enabled,
            g = e.params.loop;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !m ? e.disable() : !u && m && e.enable(),
            (e.currentBreakpoint = r),
            e.emit("_beforeBreakpoint", a),
            i &&
              (h
                ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                : !f && g
                ? (e.loopCreate(t), e.updateSlides())
                : f && !g && e.loopDestroy()),
            e.emit("breakpoint", a);
        },
        getBreakpoint: function (e, t, i) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !i)))
            return;
          let n = !1;
          const s = o(),
            r = "window" === t ? s.innerHeight : i.clientHeight,
            a = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: r * t, point: e };
              }
              return { value: e, point: e };
            });
          a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < a.length; e += 1) {
            const { point: o, value: r } = a[e];
            "window" === t
              ? s.matchMedia(`(min-width: ${r}px)`).matches && (n = o)
              : r <= i.clientWidth && (n = o);
          }
          return n || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: i } = e,
            { slidesOffsetBefore: n } = i;
          if (n) {
            const t = e.slides.length - 1,
              i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
            e.isLocked = e.size > i;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: i, rtl: n, el: s, device: o } = e,
            r = (function (e, t) {
              const i = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((n) => {
                        e[n] && i.push(t + n);
                      })
                    : "string" == typeof e && i.push(t + e);
                }),
                i
              );
            })(
              [
                "initialized",
                i.direction,
                { "free-mode": e.params.freeMode && i.freeMode.enabled },
                { autoheight: i.autoHeight },
                { rtl: n },
                { grid: i.grid && i.grid.rows > 1 },
                {
                  "grid-column":
                    i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
                },
                { android: o.android },
                { ios: o.ios },
                { "css-mode": i.cssMode },
                { centered: i.cssMode && i.centeredSlides },
                { "watch-progress": i.watchSlidesProgress },
              ],
              i.containerModifierClass
            );
          t.push(...r), s.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      },
    },
    Y = {};
  class X {
    constructor() {
      let e, t;
      for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
        s[o] = arguments[o];
      1 === s.length &&
      s[0].constructor &&
      "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
        ? (t = s[0])
        : ([e, t] = s),
        t || (t = {}),
        (t = d({}, t)),
        e && !t.el && (t.el = e);
      const r = n();
      if (
        t.el &&
        "string" == typeof t.el &&
        r.querySelectorAll(t.el).length > 1
      ) {
        const e = [];
        return (
          r.querySelectorAll(t.el).forEach((i) => {
            const n = d({}, t, { el: i });
            e.push(new X(n));
          }),
          e
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = $()),
        (a.device = x({ userAgent: t.userAgent })),
        (a.browser = C()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
      const l = {};
      a.modules.forEach((e) => {
        e({
          params: t,
          swiper: a,
          extendParams: V(t, l),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const c = d({}, W, l);
      return (
        (a.params = d({}, c, Y, t)),
        (a.originalParams = d({}, a.params)),
        (a.passedParams = d({}, t)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((e) => {
            a.on(e, a.params.on[e]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === a.params.direction,
          isVertical: () => "vertical" === a.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: i } = this,
        n = g(h(t, `.${i.slideClass}, swiper-slide`)[0]);
      return g(e) - n;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = h(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const n = i.minTranslate(),
        s = (i.maxTranslate() - n) * e + n;
      i.translateTo(s, void 0 === t ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((i) => {
        const n = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: n }), e.emit("_slideClass", i, n);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: i,
        slides: n,
        slidesGrid: s,
        slidesSizesGrid: o,
        size: r,
        activeIndex: a,
      } = this;
      let l = 1;
      if ("number" == typeof i.slidesPerView) return i.slidesPerView;
      if (i.centeredSlides) {
        let e,
          t = n[a] ? n[a].swiperSlideSize : 0;
        for (let i = a + 1; i < n.length; i += 1)
          n[i] &&
            !e &&
            ((t += n[i].swiperSlideSize), (l += 1), t > r && (e = !0));
        for (let i = a - 1; i >= 0; i -= 1)
          n[i] &&
            !e &&
            ((t += n[i].swiperSlideSize), (l += 1), t > r && (e = !0));
      } else if ("current" === e)
        for (let e = a + 1; e < n.length; e += 1)
          (t ? s[e] + o[e] - s[a] < r : s[e] - s[a] < r) && (l += 1);
      else for (let e = a - 1; e >= 0; e -= 1) s[a] - s[e] < r && (l += 1);
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      function n() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let s;
      if (
        (i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && k(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        i.freeMode && i.freeMode.enabled && !i.cssMode)
      )
        n(), i.autoHeight && e.updateAutoHeight();
      else {
        if (
          ("auto" === i.slidesPerView || i.slidesPerView > 1) &&
          e.isEnd &&
          !i.centeredSlides
        ) {
          const t =
            e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          s = e.slideTo(t.length - 1, 0, !1, !0);
        } else s = e.slideTo(e.activeIndex, 0, !1, !0);
        s || n();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const i = this,
        n = i.params.direction;
      return (
        e || (e = "horizontal" === n ? "vertical" : "horizontal"),
        e === n ||
          ("horizontal" !== e && "vertical" !== e) ||
          (i.el.classList.remove(`${i.params.containerModifierClass}${n}`),
          i.el.classList.add(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let i = e || t.params.el;
      if (("string" == typeof i && (i = document.querySelector(i)), !i))
        return !1;
      (i.swiper = t),
        i.parentNode &&
          i.parentNode.host &&
          "SWIPER-CONTAINER" === i.parentNode.host.nodeName &&
          (t.isElement = !0);
      const n = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let s =
        i && i.shadowRoot && i.shadowRoot.querySelector
          ? i.shadowRoot.querySelector(n())
          : h(i, n())[0];
      return (
        !s &&
          t.params.createElements &&
          ((s = f("div", t.params.wrapperClass)),
          i.append(s),
          h(i, `.${t.params.slideClass}`).forEach((e) => {
            s.append(e);
          })),
        Object.assign(t, {
          el: i,
          wrapperEl: s,
          slidesEl:
            t.isElement && !i.parentNode.host.slideSlots
              ? i.parentNode.host
              : s,
          hostEl: t.isElement ? i.parentNode.host : i,
          mounted: !0,
          rtl: "rtl" === i.dir.toLowerCase() || "rtl" === m(i, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === i.dir.toLowerCase() || "rtl" === m(i, "direction")),
          wrongRTL: "-webkit-box" === m(s, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      if (!1 === t.mount(e)) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
      const i = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        i.forEach((e) => {
          e.complete
            ? k(t, e)
            : e.addEventListener("load", (e) => {
                k(t, e.target);
              });
        }),
        E(t),
        (t.initialized = !0),
        E(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const i = this,
        { params: n, el: s, wrapperEl: o, slides: r } = i;
      return (
        void 0 === i.params ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          n.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            s.removeAttribute("style"),
            o.removeAttribute("style"),
            r &&
              r.length &&
              r.forEach((e) => {
                e.classList.remove(
                  n.slideVisibleClass,
                  n.slideActiveClass,
                  n.slideNextClass,
                  n.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((e) => {
            i.off(e);
          }),
          !1 !== e &&
            ((i.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      d(Y, e);
    }
    static get extendedDefaults() {
      return Y;
    }
    static get defaults() {
      return W;
    }
    static installModule(e) {
      X.prototype.__modules__ || (X.prototype.__modules__ = []);
      const t = X.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => X.installModule(e)), X)
        : (X.installModule(e), X);
    }
  }
  function K(e, t, i, n) {
    return (
      e.params.createElements &&
        Object.keys(n).forEach((s) => {
          if (!i[s] && !0 === i.auto) {
            let o = h(e.el, `.${n[s]}`)[0];
            o || ((o = f("div", n[s])), (o.className = n[s]), e.el.append(o)),
              (i[s] = o),
              (t[s] = o);
          }
        }),
      i
    );
  }
  function Q(e) {
    return (
      void 0 === e && (e = ""),
      `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  Object.keys(U).forEach((e) => {
    Object.keys(U[e]).forEach((t) => {
      X.prototype[t] = U[e][t];
    });
  }),
    X.use([
      function (e) {
        let { swiper: t, on: i, emit: n } = e;
        const s = o();
        let r = null,
          a = null;
        const l = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (n("beforeResize"), n("resize"));
          },
          c = () => {
            t && !t.destroyed && t.initialized && n("orientationchange");
          };
        i("init", () => {
          t.params.resizeObserver && void 0 !== s.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((r = new ResizeObserver((e) => {
                a = s.requestAnimationFrame(() => {
                  const { width: i, height: n } = t;
                  let s = i,
                    o = n;
                  e.forEach((e) => {
                    let { contentBoxSize: i, contentRect: n, target: r } = e;
                    (r && r !== t.el) ||
                      ((s = n ? n.width : (i[0] || i).inlineSize),
                      (o = n ? n.height : (i[0] || i).blockSize));
                  }),
                    (s === i && o === n) || l();
                });
              })),
              r.observe(t.el))
            : (s.addEventListener("resize", l),
              s.addEventListener("orientationchange", c));
        }),
          i("destroy", () => {
            a && s.cancelAnimationFrame(a),
              r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
              s.removeEventListener("resize", l),
              s.removeEventListener("orientationchange", c);
          });
      },
      function (e) {
        let { swiper: t, extendParams: i, on: n, emit: s } = e;
        const r = [],
          a = o(),
          l = function (e, i) {
            void 0 === i && (i = {});
            const n = new (a.MutationObserver || a.WebkitMutationObserver)(
              (e) => {
                if (t.__preventObserver__) return;
                if (1 === e.length) return void s("observerUpdate", e[0]);
                const i = function () {
                  s("observerUpdate", e[0]);
                };
                a.requestAnimationFrame
                  ? a.requestAnimationFrame(i)
                  : a.setTimeout(i, 0);
              }
            );
            n.observe(e, {
              attributes: void 0 === i.attributes || i.attributes,
              childList: void 0 === i.childList || i.childList,
              characterData: void 0 === i.characterData || i.characterData,
            }),
              r.push(n);
          };
        i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          n("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = v(t.hostEl);
                for (let t = 0; t < e.length; t += 1) l(e[t]);
              }
              l(t.hostEl, { childList: t.params.observeSlideChildren }),
                l(t.wrapperEl, { attributes: !1 });
            }
          }),
          n("destroy", () => {
            r.forEach((e) => {
              e.disconnect();
            }),
              r.splice(0, r.length);
          });
      },
    ]);
  const J = [
    function (e) {
      let { swiper: t, extendParams: i, on: s, emit: r } = e;
      const a = n(),
        l = o();
      function c(e) {
        if (!t.enabled) return;
        const { rtlTranslate: i } = t;
        let s = e;
        s.originalEvent && (s = s.originalEvent);
        const c = s.keyCode || s.charCode,
          d = t.params.keyboard.pageUpDown,
          u = d && 33 === c,
          p = d && 34 === c,
          h = 37 === c,
          f = 39 === c,
          m = 38 === c,
          g = 40 === c;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && f) || (t.isVertical() && g) || p)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && h) || (t.isVertical() && m) || u)
        )
          return !1;
        if (
          !(
            s.shiftKey ||
            s.altKey ||
            s.ctrlKey ||
            s.metaKey ||
            (a.activeElement &&
              a.activeElement.nodeName &&
              ("input" === a.activeElement.nodeName.toLowerCase() ||
                "textarea" === a.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (u || p || h || f || m || g)
          ) {
            let e = !1;
            if (
              v(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
              0 === v(t.el, `.${t.params.slideActiveClass}`).length
            )
              return;
            const s = t.el,
              r = s.clientWidth,
              a = s.clientHeight,
              c = l.innerWidth,
              d = l.innerHeight,
              u = (function (e) {
                const t = o(),
                  i = n(),
                  s = e.getBoundingClientRect(),
                  r = i.body,
                  a = e.clientTop || r.clientTop || 0,
                  l = e.clientLeft || r.clientLeft || 0,
                  c = e === t ? t.scrollY : e.scrollTop,
                  d = e === t ? t.scrollX : e.scrollLeft;
                return { top: s.top + c - a, left: s.left + d - l };
              })(s);
            i && (u.left -= s.scrollLeft);
            const p = [
              [u.left, u.top],
              [u.left + r, u.top],
              [u.left, u.top + a],
              [u.left + r, u.top + a],
            ];
            for (let t = 0; t < p.length; t += 1) {
              const i = p[t];
              if (i[0] >= 0 && i[0] <= c && i[1] >= 0 && i[1] <= d) {
                if (0 === i[0] && 0 === i[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((u || p || h || f) &&
                (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
              (((p || f) && !i) || ((u || h) && i)) && t.slideNext(),
              (((u || h) && !i) || ((p || f) && i)) && t.slidePrev())
            : ((u || p || m || g) &&
                (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
              (p || g) && t.slideNext(),
              (u || m) && t.slidePrev()),
            r("keyPress", c);
        }
      }
      function d() {
        t.keyboard.enabled ||
          (a.addEventListener("keydown", c), (t.keyboard.enabled = !0));
      }
      function u() {
        t.keyboard.enabled &&
          (a.removeEventListener("keydown", c), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        i({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        s("init", () => {
          t.params.keyboard.enabled && d();
        }),
        s("destroy", () => {
          t.keyboard.enabled && u();
        }),
        Object.assign(t.keyboard, { enable: d, disable: u });
    },
    function (e) {
      let { swiper: t, extendParams: i, on: n, emit: s } = e;
      i({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper__button_disabled",
          hiddenClass: "swiper__button_hidden",
          lockClass: "swiper__button_lock",
          navigationDisabledClass: "swiper_navigation-disabled",
        },
      }),
        (t.navigation = { nextEl: null, prevEl: null });
      const o = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function r(e) {
        let i;
        return e &&
          "string" == typeof e &&
          t.isElement &&
          ((i = t.el.querySelector(e)), i)
          ? i
          : (e &&
              ("string" == typeof e && (i = [...document.querySelectorAll(e)]),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                i.length > 1 &&
                1 === t.el.querySelectorAll(e).length &&
                (i = t.el.querySelector(e))),
            e && !i ? e : i);
      }
      function a(e, i) {
        const n = t.params.navigation;
        (e = o(e)).forEach((e) => {
          e &&
            (e.classList[i ? "add" : "remove"](...n.disabledClass.split(" ")),
            "BUTTON" === e.tagName && (e.disabled = i),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](n.lockClass));
        });
      }
      function l() {
        const { nextEl: e, prevEl: i } = t.navigation;
        if (t.params.loop) return a(i, !1), void a(e, !1);
        a(i, t.isBeginning && !t.params.rewind),
          a(e, t.isEnd && !t.params.rewind);
      }
      function c(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), s("navigationPrev"));
      }
      function d(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), s("navigationNext"));
      }
      function u() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = K(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            {
              nextEl: "swiper__button swiper__button_next",
              prevEl: "swiper__button swiper__button_prev",
            }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        let i = r(e.nextEl),
          n = r(e.prevEl);
        Object.assign(t.navigation, { nextEl: i, prevEl: n }),
          (i = o(i)),
          (n = o(n));
        const s = (i, n) => {
          i && i.addEventListener("click", "next" === n ? d : c),
            !t.enabled && i && i.classList.add(...e.lockClass.split(" "));
        };
        i.forEach((e) => s(e, "next")), n.forEach((e) => s(e, "prev"));
      }
      function p() {
        let { nextEl: e, prevEl: i } = t.navigation;
        (e = o(e)), (i = o(i));
        const n = (e, i) => {
          e.removeEventListener("click", "next" === i ? d : c),
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        e.forEach((e) => n(e, "next")), i.forEach((e) => n(e, "prev"));
      }
      n("init", () => {
        !1 === t.params.navigation.enabled ? h() : (u(), l());
      }),
        n("toEdge fromEdge lock unlock", () => {
          l();
        }),
        n("destroy", () => {
          p();
        }),
        n("enable disable", () => {
          let { nextEl: e, prevEl: i } = t.navigation;
          (e = o(e)),
            (i = o(i)),
            t.enabled
              ? l()
              : [...e, ...i]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.add(t.params.navigation.lockClass)
                  );
        }),
        n("click", (e, i) => {
          let { nextEl: n, prevEl: r } = t.navigation;
          (n = o(n)), (r = o(r));
          const a = i.target;
          if (
            t.params.navigation.hideOnClick &&
            !r.includes(a) &&
            !n.includes(a)
          ) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === a || t.pagination.el.contains(a))
            )
              return;
            let e;
            n.length
              ? (e = n[0].classList.contains(t.params.navigation.hiddenClass))
              : r.length &&
                (e = r[0].classList.contains(t.params.navigation.hiddenClass)),
              s(!0 === e ? "navigationShow" : "navigationHide"),
              [...n, ...r]
                .filter((e) => !!e)
                .forEach((e) =>
                  e.classList.toggle(t.params.navigation.hiddenClass)
                );
          }
        });
      const h = () => {
        t.el.classList.add(
          ...t.params.navigation.navigationDisabledClass.split(" ")
        ),
          p();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.el.classList.remove(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            u(),
            l();
        },
        disable: h,
        update: l,
        init: u,
        destroy: p,
      });
    },
    function (e) {
      let { swiper: t, extendParams: i, on: n, emit: s } = e;
      const o = "swiper__pagination";
      let r;
      i({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${o}-bullet`,
          bulletActiveClass: `${o}-bullet_active`,
          modifierClass: `${o}_`,
          currentClass: `${o}-current`,
          totalClass: `${o}-total`,
          hiddenClass: `${o}_hidden`,
          progressbarFillClass: `${o}_progressbar-fill`,
          progressbarOppositeClass: `${o}_progressbar-opposite`,
          clickableClass: `${o}_clickable`,
          lockClass: `${o}_lock`,
          horizontalClass: `${o}_horizontal`,
          verticalClass: `${o}_vertical`,
          paginationDisabledClass: `${o}_disabled`,
        },
      }),
        (t.pagination = { el: null, bullets: [] });
      let a = 0;
      const l = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      function c() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
        );
      }
      function d(e, i) {
        const { bulletActiveClass: n } = t.params.pagination;
        e &&
          (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) &&
          (e.classList.add(`${n}-${i}`),
          (e = e[("prev" === i ? "previous" : "next") + "ElementSibling"]) &&
            e.classList.add(`${n}-${i}-${i}`));
      }
      function u(e) {
        const i = e.target.closest(Q(t.params.pagination.bulletClass));
        if (!i) return;
        e.preventDefault();
        const n = g(i) * t.params.slidesPerGroup;
        if (t.params.loop) {
          if (t.realIndex === n) return;
          const e = t.realIndex,
            i = t.getSlideIndexByData(n),
            s = t.getSlideIndexByData(t.realIndex),
            o = (n) => {
              const s = t.activeIndex;
              t.loopFix({ direction: n, activeSlideIndex: i, slideTo: !1 }),
                s === t.activeIndex && t.slideToLoop(e, 0, !1, !0);
            };
          if (i > t.slides.length - t.loopedSlides) o(i > s ? "next" : "prev");
          else if (t.params.centeredSlides) {
            const e =
              "auto" === t.params.slidesPerView
                ? t.slidesPerViewDynamic()
                : Math.ceil(parseFloat(t.params.slidesPerView, 10));
            i < Math.floor(e / 2) && o("prev");
          }
          t.slideToLoop(n);
        } else t.slideTo(n);
      }
      function p() {
        const e = t.rtl,
          i = t.params.pagination;
        if (c()) return;
        let n,
          o,
          u = t.pagination.el;
        u = l(u);
        const p =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          h = t.params.loop
            ? Math.ceil(p / t.params.slidesPerGroup)
            : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((o = t.previousRealIndex || 0),
              (n =
                t.params.slidesPerGroup > 1
                  ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                  : t.realIndex))
            : void 0 !== t.snapIndex
            ? ((n = t.snapIndex), (o = t.previousSnapIndex))
            : ((o = t.previousIndex || 0), (n = t.activeIndex || 0)),
          "bullets" === i.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const s = t.pagination.bullets;
          let l, c, p;
          if (
            (i.dynamicBullets &&
              ((r = _(s[0], t.isHorizontal() ? "width" : "height", !0)),
              u.forEach((e) => {
                e.style[t.isHorizontal() ? "width" : "height"] =
                  r * (i.dynamicMainBullets + 4) + "px";
              }),
              i.dynamicMainBullets > 1 &&
                void 0 !== o &&
                ((a += n - (o || 0)),
                a > i.dynamicMainBullets - 1
                  ? (a = i.dynamicMainBullets - 1)
                  : a < 0 && (a = 0)),
              (l = Math.max(n - a, 0)),
              (c = l + (Math.min(s.length, i.dynamicMainBullets) - 1)),
              (p = (c + l) / 2)),
            s.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${i.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                )
                .flat();
              e.classList.remove(...t);
            }),
            u.length > 1)
          )
            s.forEach((e) => {
              const s = g(e);
              s === n
                ? e.classList.add(...i.bulletActiveClass.split(" "))
                : t.isElement && e.setAttribute("part", "bullet"),
                i.dynamicBullets &&
                  (s >= l &&
                    s <= c &&
                    e.classList.add(
                      ...`${i.bulletActiveClass}-main`.split(" ")
                    ),
                  s === l && d(e, "prev"),
                  s === c && d(e, "next"));
            });
          else {
            const e = s[n];
            if (
              (e && e.classList.add(...i.bulletActiveClass.split(" ")),
              t.isElement &&
                s.forEach((e, t) => {
                  e.setAttribute("part", t === n ? "bullet-active" : "bullet");
                }),
              i.dynamicBullets)
            ) {
              const e = s[l],
                t = s[c];
              for (let e = l; e <= c; e += 1)
                s[e] &&
                  s[e].classList.add(
                    ...`${i.bulletActiveClass}-main`.split(" ")
                  );
              d(e, "prev"), d(t, "next");
            }
          }
          if (i.dynamicBullets) {
            const n = Math.min(s.length, i.dynamicMainBullets + 4),
              o = (r * n - r) / 2 - p * r,
              a = e ? "right" : "left";
            s.forEach((e) => {
              e.style[t.isHorizontal() ? a : "top"] = `${o}px`;
            });
          }
        }
        u.forEach((e, o) => {
          if (
            ("fraction" === i.type &&
              (e.querySelectorAll(Q(i.currentClass)).forEach((e) => {
                e.textContent = i.formatFractionCurrent(n + 1);
              }),
              e.querySelectorAll(Q(i.totalClass)).forEach((e) => {
                e.textContent = i.formatFractionTotal(h);
              })),
            "progressbar" === i.type)
          ) {
            let s;
            s = i.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const o = (n + 1) / h;
            let r = 1,
              a = 1;
            "horizontal" === s ? (r = o) : (a = o),
              e.querySelectorAll(Q(i.progressbarFillClass)).forEach((e) => {
                (e.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${a})`),
                  (e.style.transitionDuration = `${t.params.speed}ms`);
              });
          }
          "custom" === i.type && i.renderCustom
            ? ((e.innerHTML = i.renderCustom(t, n + 1, h)),
              0 === o && s("paginationRender", e))
            : (0 === o && s("paginationRender", e), s("paginationUpdate", e)),
            t.params.watchOverflow &&
              t.enabled &&
              e.classList[t.isLocked ? "add" : "remove"](i.lockClass);
        });
      }
      function h() {
        const e = t.params.pagination;
        if (c()) return;
        const i =
          t.virtual && t.params.virtual.enabled
            ? t.virtual.slides.length
            : t.slides.length;
        let n = t.pagination.el;
        n = l(n);
        let o = "";
        if ("bullets" === e.type) {
          let n = t.params.loop
            ? Math.ceil(i / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && n > i && (n = i);
          for (let i = 0; i < n; i += 1)
            e.renderBullet
              ? (o += e.renderBullet.call(t, i, e.bulletClass))
              : (o += `<${e.bulletElement} ${
                  t.isElement ? 'part="bullet"' : ""
                } class="${e.bulletClass}"></${e.bulletElement}>`);
        }
        "fraction" === e.type &&
          (o = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          "progressbar" === e.type &&
            (o = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
          (t.pagination.bullets = []),
          n.forEach((i) => {
            "custom" !== e.type && (i.innerHTML = o || ""),
              "bullets" === e.type &&
                t.pagination.bullets.push(
                  ...i.querySelectorAll(Q(e.bulletClass))
                );
          }),
          "custom" !== e.type && s("paginationRender", n[0]);
      }
      function f() {
        t.params.pagination = K(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper__pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let i;
        "string" == typeof e.el &&
          t.isElement &&
          (i = t.el.querySelector(e.el)),
          i ||
            "string" != typeof e.el ||
            (i = [...document.querySelectorAll(e.el)]),
          i || (i = e.el),
          i &&
            0 !== i.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              Array.isArray(i) &&
              i.length > 1 &&
              ((i = [...t.el.querySelectorAll(e.el)]),
              i.length > 1 &&
                (i = i.filter((e) => v(e, ".swiper")[0] === t.el)[0])),
            Array.isArray(i) && 1 === i.length && (i = i[0]),
            Object.assign(t.pagination, { el: i }),
            (i = l(i)),
            i.forEach((i) => {
              "bullets" === e.type &&
                e.clickable &&
                i.classList.add(...(e.clickableClass || "").split(" ")),
                i.classList.add(e.modifierClass + e.type),
                i.classList.add(
                  t.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                "bullets" === e.type &&
                  e.dynamicBullets &&
                  (i.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                  (a = 0),
                  e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type &&
                  e.progressbarOpposite &&
                  i.classList.add(e.progressbarOppositeClass),
                e.clickable && i.addEventListener("click", u),
                t.enabled || i.classList.add(e.lockClass);
            }));
      }
      function m() {
        const e = t.params.pagination;
        if (c()) return;
        let i = t.pagination.el;
        i &&
          ((i = l(i)),
          i.forEach((i) => {
            i.classList.remove(e.hiddenClass),
              i.classList.remove(e.modifierClass + e.type),
              i.classList.remove(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              e.clickable &&
                (i.classList.remove(...(e.clickableClass || "").split(" ")),
                i.removeEventListener("click", u));
          })),
          t.pagination.bullets &&
            t.pagination.bullets.forEach((t) =>
              t.classList.remove(...e.bulletActiveClass.split(" "))
            );
      }
      n("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: i } = t.pagination;
        (i = l(i)),
          i.forEach((i) => {
            i.classList.remove(e.horizontalClass, e.verticalClass),
              i.classList.add(
                t.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
      }),
        n("init", () => {
          !1 === t.params.pagination.enabled ? y() : (f(), h(), p());
        }),
        n("activeIndexChange", () => {
          void 0 === t.snapIndex && p();
        }),
        n("snapIndexChange", () => {
          p();
        }),
        n("snapGridLengthChange", () => {
          h(), p();
        }),
        n("destroy", () => {
          m();
        }),
        n("enable disable", () => {
          let { el: e } = t.pagination;
          e &&
            ((e = l(e)),
            e.forEach((e) =>
              e.classList[t.enabled ? "remove" : "add"](
                t.params.pagination.lockClass
              )
            ));
        }),
        n("lock unlock", () => {
          p();
        }),
        n("click", (e, i) => {
          const n = i.target,
            o = l(t.pagination.el);
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            o &&
            o.length > 0 &&
            !n.classList.contains(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && n === t.navigation.nextEl) ||
                (t.navigation.prevEl && n === t.navigation.prevEl))
            )
              return;
            const e = o[0].classList.contains(t.params.pagination.hiddenClass);
            s(!0 === e ? "paginationShow" : "paginationHide"),
              o.forEach((e) =>
                e.classList.toggle(t.params.pagination.hiddenClass)
              );
          }
        });
      const y = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e &&
          ((e = l(e)),
          e.forEach((e) =>
            e.classList.add(t.params.pagination.paginationDisabledClass)
          )),
          m();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.el.classList.remove(t.params.pagination.paginationDisabledClass);
          let { el: e } = t.pagination;
          e &&
            ((e = l(e)),
            e.forEach((e) =>
              e.classList.remove(t.params.pagination.paginationDisabledClass)
            )),
            f(),
            h(),
            p();
        },
        disable: y,
        render: h,
        update: p,
        init: f,
        destroy: m,
      });
    },
    function (e) {
      let { swiper: t, extendParams: i, on: s } = e;
      i({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper__slide_thumb-active",
          thumbsContainerClass: "swiper_thumbs",
        },
      });
      let o = !1,
        r = !1;
      function a() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const i = e.clickedIndex,
          n = e.clickedSlide;
        if (n && n.classList.contains(t.params.thumbs.slideThumbActiveClass))
          return;
        if (null == i) return;
        let s;
        (s = e.params.loop
          ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : i),
          t.params.loop ? t.slideToLoop(s) : t.slideTo(s);
      }
      function l() {
        const { thumbs: e } = t.params;
        if (o) return !1;
        o = !0;
        const i = t.constructor;
        if (e.swiper instanceof i)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            t.thumbs.swiper.update();
        else if (c(e.swiper)) {
          const n = Object.assign({}, e.swiper);
          Object.assign(n, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new i(n)),
            (r = !0);
        }
        return (
          t.thumbs.swiper.el.classList.add(
            t.params.thumbs.thumbsContainerClass
          ),
          t.thumbs.swiper.on("tap", a),
          !0
        );
      }
      function d(e) {
        const i = t.thumbs.swiper;
        if (!i || i.destroyed) return;
        const n =
          "auto" === i.params.slidesPerView
            ? i.slidesPerViewDynamic()
            : i.params.slidesPerView;
        let s = 1;
        const o = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (s = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (s = 1),
          (s = Math.floor(s)),
          i.slides.forEach((e) => e.classList.remove(o)),
          i.params.loop || (i.params.virtual && i.params.virtual.enabled))
        )
          for (let e = 0; e < s; e += 1)
            h(
              i.slidesEl,
              `[data-swiper-slide-index="${t.realIndex + e}"]`
            ).forEach((e) => {
              e.classList.add(o);
            });
        else
          for (let e = 0; e < s; e += 1)
            i.slides[t.realIndex + e] &&
              i.slides[t.realIndex + e].classList.add(o);
        const r = t.params.thumbs.autoScrollOffset,
          a = r && !i.params.loop;
        if (t.realIndex !== i.realIndex || a) {
          const s = i.activeIndex;
          let o, l;
          if (i.params.loop) {
            const e = i.slides.filter(
              (e) =>
                e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`
            )[0];
            (o = i.slides.indexOf(e)),
              (l = t.activeIndex > t.previousIndex ? "next" : "prev");
          } else (o = t.realIndex), (l = o > t.previousIndex ? "next" : "prev");
          a && (o += "next" === l ? r : -1 * r),
            i.visibleSlidesIndexes &&
              i.visibleSlidesIndexes.indexOf(o) < 0 &&
              (i.params.centeredSlides
                ? (o =
                    o > s
                      ? o - Math.floor(n / 2) + 1
                      : o + Math.floor(n / 2) - 1)
                : o > s && i.params.slidesPerGroup,
              i.slideTo(o, e ? 0 : void 0));
        }
      }
      (t.thumbs = { swiper: null }),
        s("beforeInit", () => {
          const { thumbs: e } = t.params;
          if (e && e.swiper)
            if (
              "string" == typeof e.swiper ||
              e.swiper instanceof HTMLElement
            ) {
              const i = n(),
                s = () => {
                  const n =
                    "string" == typeof e.swiper
                      ? i.querySelector(e.swiper)
                      : e.swiper;
                  if (n && n.swiper) (e.swiper = n.swiper), l(), d(!0);
                  else if (n) {
                    const i = (s) => {
                      (e.swiper = s.detail[0]),
                        n.removeEventListener("init", i),
                        l(),
                        d(!0),
                        e.swiper.update(),
                        t.update();
                    };
                    n.addEventListener("init", i);
                  }
                  return n;
                },
                o = () => {
                  t.destroyed || s() || requestAnimationFrame(o);
                };
              requestAnimationFrame(o);
            } else l(), d(!0);
        }),
        s("slideChange update resize observerUpdate", () => {
          d();
        }),
        s("setTransition", (e, i) => {
          const n = t.thumbs.swiper;
          n && !n.destroyed && n.setTransition(i);
        }),
        s("beforeDestroy", () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && r && e.destroy();
        }),
        Object.assign(t.thumbs, { init: l, update: d });
    },
  ];
  return X.use(J), X;
})();
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (e) {
  var t = "Close",
    i = "MarkupParse",
    n = "mfp",
    s = "." + n,
    o = "mfp-ready",
    r = "mfp-removing",
    a = "is-mfp-opened";
  HTML_OVERFLOW_CLASS = "is-mfp-overflow";
  var l,
    c,
    d,
    u,
    p,
    h,
    f = function () {},
    m = !!window.jQuery || "undefined" != typeof jQuery,
    g = e(window),
    v = function (e, t) {
      l.ev.on(n + e + s, t);
    },
    _ = function (t, i, n, s) {
      var o = document.createElement("div");
      return (
        (o.className = "mfp-" + t),
        n && (o.innerHTML = n),
        s ? i && i.appendChild(o) : ((o = e(o)), i && o.appendTo(i)),
        o
      );
    },
    y = function (t, i) {
      l.ev.triggerHandler(n + t, i),
        l.st.callbacks &&
          ((t = t.charAt(0).toLowerCase() + t.slice(1)),
          l.st.callbacks[t] &&
            l.st.callbacks[t].apply(l, e.isArray(i) ? i : [i]));
    },
    w = function (t) {
      return (
        (t === h && l.currTemplate.closeBtn) ||
          ((l.currTemplate.closeBtn = e(
            l.st.closeMarkup.replace(/%title%/g, l.st.tClose)
          )),
          (h = t)),
        l.currTemplate.closeBtn
      );
    },
    b = function () {
      e.magnificPopup.instance ||
        ((l = new f()).init(), (e.magnificPopup.instance = l));
    };
  (f.prototype = {
    constructor: f,
    init: function () {
      var t = navigator.appVersion;
      (l.isLowIE = l.isIE8 = document.all && !document.addEventListener),
        (l.isAndroid = /android/gi.test(t)),
        (l.isIOS = /iphone|ipad|ipod/gi.test(t)),
        (l.supportsTransition = (function () {
          var e = document.createElement("p").style,
            t = ["ms", "O", "Moz", "Webkit"];
          if (void 0 !== e.transition) return !0;
          for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
          return !1;
        })()),
        (l.probablyMobile =
          l.isAndroid ||
          l.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = e(document)),
        (l.popupsCache = {});
    },
    open: function (t) {
      var n;
      if (!1 === t.isObj) {
        (l.items = t.items.toArray()), (l.index = 0);
        var r,
          c = t.items;
        for (n = 0; n < c.length; n++)
          if (((r = c[n]).parsed && (r = r.el[0]), r === t.el[0])) {
            l.index = n;
            break;
          }
      } else
        (l.items = e.isArray(t.items) ? t.items : [t.items]),
          (l.index = t.index || 0);
      if (!l.isOpen) {
        (l.types = []),
          (p = ""),
          t.mainEl && t.mainEl.length ? (l.ev = t.mainEl.eq(0)) : (l.ev = d),
          t.key
            ? (l.popupsCache[t.key] || (l.popupsCache[t.key] = {}),
              (l.currTemplate = l.popupsCache[t.key]))
            : (l.currTemplate = {}),
          (l.st = e.extend(!0, {}, e.magnificPopup.defaults, t)),
          (l.fixedContentPos =
            "auto" === l.st.fixedContentPos
              ? !l.probablyMobile
              : l.st.fixedContentPos),
          l.st.modal &&
            ((l.st.closeOnContentClick = !1),
            (l.st.closeOnBgClick = !1),
            (l.st.showCloseBtn = !1),
            (l.st.enableEscapeKey = !1)),
          l.bgOverlay ||
            ((l.bgOverlay = _("bg").on("click" + s, function () {
              l.close();
            })),
            (l.wrap = _("wrap")
              .attr("tabindex", -1)
              .on("click" + s, function (e) {
                l._checkIfClose(e.target, e.target._mfpFromContent) &&
                  l.close(),
                  delete e.target._mfpFromContent;
              })),
            (l.container = _("container", l.wrap))),
          (l.contentContainer = _("content")),
          l.contentContainer.on("click" + s, function (e) {
            e.target._mfpFromContent = e.target !== this;
          }),
          l.st.preloader &&
            (l.preloader = _("preloader", l.container, l.st.tLoading));
        var u = e.magnificPopup.modules;
        for (n = 0; n < u.length; n++) {
          var h = u[n];
          (h = h.charAt(0).toUpperCase() + h.slice(1)), l["init" + h].call(l);
        }
        y("BeforeOpen"),
          l.st.showCloseBtn &&
            (l.st.closeBtnInside
              ? (v(i, function (e, t, i, n) {
                  i.close_replaceWith = w(n.type);
                }),
                (p += " mfp-close-btn-in"))
              : l.wrap.append(w())),
          l.st.alignTop && (p += " mfp-align-top"),
          l.fixedContentPos
            ? l.wrap.css({
                overflow: l.st.overflowY,
                overflowX: "hidden",
                overflowY: l.st.overflowY,
              })
            : l.wrap.css({ top: g.scrollTop(), position: "absolute" }),
          (!1 === l.st.fixedBgPos ||
            ("auto" === l.st.fixedBgPos && !l.fixedContentPos)) &&
            l.bgOverlay.css({ height: d.height(), position: "absolute" }),
          l.st.enableEscapeKey &&
            d.on("keyup" + s, function (e) {
              27 === e.keyCode && l.close();
            }),
          g.on("resize" + s, function () {
            l.updateSize();
          }),
          l.st.closeOnContentClick || (p += " mfp-auto-cursor"),
          p && l.wrap.addClass(p);
        var f = (l.wH = g.height()),
          m = {};
        if (l.fixedContentPos && l._hasScrollBar(f)) {
          var b = l._getScrollbarSize();
          b && (m.marginRight = b);
        }
        l.fixedContentPos &&
          (l.isIE7
            ? e("body, html").css("overflow", "hidden")
            : (m.overflow = "hidden"),
          e("html").addClass(HTML_OVERFLOW_CLASS));
        var $ = l.st.mainClass;
        l.isIE7 && ($ += " mfp-ie7"),
          $ && l._addClassToMFP($),
          l.updateItemHTML(),
          y("BuildControls"),
          e("html").css(m).addClass(a),
          l.bgOverlay.add(l.wrap).prependTo(l.st.prependTo || e(document.body));
        try {
          l._lastFocusedEl = document.activeElement;
        } catch (e) {
          l._lastFocusedEl = document.body;
        }
        return (
          setTimeout(function () {
            l.content
              ? (l._addClassToMFP(o), l._setFocus())
              : l.bgOverlay.addClass(o),
              "onfocusin" in window || !document.addEventListener
                ? d.on("focusin" + s, l._onFocusIn)
                : document.addEventListener("focus", l._onFocusIn, !0);
          }, 16),
          (l.isOpen = !0),
          l.updateSize(f),
          y("Open"),
          t
        );
      }
      l.updateItemHTML();
    },
    close: function () {
      l.isOpen &&
        (y("BeforeClose"),
        (l.isOpen = !1),
        l.st.removalDelay && !l.isLowIE && l.supportsTransition
          ? (l._addClassToMFP(r),
            setTimeout(function () {
              l._close();
            }, l.st.removalDelay))
          : l._close());
    },
    _close: function () {
      y(t);
      var i = r + " " + o + " ";
      if (
        (l.bgOverlay.detach(),
        l.wrap.detach(),
        l.container.empty(),
        l.st.mainClass && (i += l.st.mainClass + " "),
        l._removeClassFromMFP(i),
        l.fixedContentPos)
      ) {
        var n = { marginRight: "" };
        l.isIE7 ? e("body, html").css("overflow", "") : (n.overflow = ""),
          e("html").css(n).removeClass(HTML_OVERFLOW_CLASS);
      }
      e("html").removeClass(a),
        d.off("keyup.mfp focusin" + s),
        l.ev.off(s),
        "onfocusin" in window ||
          !document.addEventListener ||
          document.removeEventListener("focus", l._onFocusIn, !0),
        l.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        l.bgOverlay.attr("class", "mfp-bg"),
        l.container.attr("class", "mfp-container"),
        !l.st.showCloseBtn ||
          (l.st.closeBtnInside && !0 !== l.currTemplate[l.currItem.type]) ||
          (l.currTemplate.closeBtn && l.currTemplate.closeBtn.detach()),
        l.st.autoFocusLast &&
          l._lastFocusedEl &&
          e(l._lastFocusedEl).trigger("focus"),
        (l.currItem = null),
        (l.content = null),
        (l.currTemplate = null),
        (l.prevHeight = 0),
        y("AfterClose");
    },
    updateSize: function (t) {
      if (l.isIOS) {
        var i = document.documentElement.clientWidth / window.innerWidth,
          n = window.innerHeight * i;
        l.wrap.css("height", n), (l.wH = n);
      } else l.wH = t || g.height();
      l.fixedContentPos ||
        (l.wrap.css("height", l.wH),
        l.isIOS &&
          setTimeout(function () {
            e("html, body").animate({ scrollTop: l.wrap.offset().top }, 100);
          }, 250)),
        y("Resize");
    },
    updateItemHTML: function () {
      var t = l.items[l.index];
      l.contentContainer.detach(),
        l.content && l.content.detach(),
        t.parsed || (t = l.parseEl(l.index));
      var i = t.type;
      if (
        (y("BeforeChange", [l.currItem ? l.currItem.type : "", i]),
        (l.currItem = t),
        !l.currTemplate[i])
      ) {
        var n = !!l.st[i] && l.st[i].markup;
        y("FirstMarkupParse", n), (l.currTemplate[i] = !n || e(n));
      }
      u && u !== t.type && l.container.removeClass("mfp-" + u + "-holder");
      var s = l["get" + i.charAt(0).toUpperCase() + i.slice(1)](
        t,
        l.currTemplate[i]
      );
      l.appendContent(s, i),
        (t.preloaded = !0),
        y("Change", t),
        (u = t.type),
        l.container.prepend(l.contentContainer),
        y("AfterChange");
    },
    appendContent: function (e, t) {
      (l.content = e),
        e
          ? l.st.showCloseBtn && l.st.closeBtnInside && !0 === l.currTemplate[t]
            ? l.content.find(".mfp-close").length || l.content.append(w())
            : (l.content = e)
          : (l.content = ""),
        y("BeforeAppend"),
        l.container.addClass("mfp-" + t + "-holder"),
        l.contentContainer.append(l.content);
    },
    parseEl: function (t) {
      var i,
        n = l.items[t];
      if (
        (n.tagName
          ? (n = { el: e(n) })
          : ((i = n.type), (n = { data: n, src: n.src })),
        n.el)
      ) {
        for (var s = l.types, o = 0; o < s.length; o++)
          if (n.el.hasClass("mfp-" + s[o])) {
            i = s[o];
            break;
          }
        (n.src = n.el.attr("data-mfp-src")),
          n.src || (n.src = n.el.attr("href"));
      }
      return (
        (n.type = i || l.st.type || "inline"),
        (n.index = t),
        (n.parsed = !0),
        (l.items[t] = n),
        y("ElementParse", n),
        l.items[t]
      );
    },
    addGroup: function (e, t) {
      var i = function (i) {
        (i.mfpEl = this), l._openClick(i, e, t);
      };
      t || (t = {});
      var n = "click.magnificPopup";
      (t.mainEl = e),
        t.items
          ? ((t.isObj = !0), e.off(n).on(n, i))
          : ((t.isObj = !1),
            t.delegate
              ? e.off(n).on(n, t.delegate, i)
              : ((t.items = e), e.off(n).on(n, i)));
    },
    _openClick: function (t, i, n) {
      if (
        (void 0 !== n.midClick
          ? n.midClick
          : e.magnificPopup.defaults.midClick) ||
        !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)
      ) {
        var s =
          void 0 !== n.disableOn
            ? n.disableOn
            : e.magnificPopup.defaults.disableOn;
        if (s)
          if ("function" == typeof s) {
            if (!s.call(l)) return !0;
          } else if (g.width() < s) return !0;
        t.type && (t.preventDefault(), l.isOpen && t.stopPropagation()),
          (n.el = e(t.mfpEl)),
          n.delegate && (n.items = i.find(n.delegate)),
          l.open(n);
      }
    },
    updateStatus: function (e, t) {
      if (l.preloader) {
        c !== e && l.container.removeClass("mfp-s-" + c),
          t || "loading" !== e || (t = l.st.tLoading);
        var i = { status: e, text: t };
        y("UpdateStatus", i),
          (e = i.status),
          (t = i.text),
          l.preloader.html(t),
          l.preloader.find("a").on("click", function (e) {
            e.stopImmediatePropagation();
          }),
          l.container.addClass("mfp-s-" + e),
          (c = e);
      }
    },
    _checkIfClose: function (t, i) {
      if (!e(t).closest(".mfp-prevent-close").length) {
        var n = l.st.closeOnContentClick,
          s = l.st.closeOnBgClick;
        if (n && s) return !0;
        if (
          !l.content ||
          e(t).closest(".mfp-close").length ||
          (l.preloader && t === l.preloader[0])
        )
          return !0;
        if (i) {
          if (n) return !0;
        } else if (s && e.contains(document, t)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (e) {
      l.bgOverlay.addClass(e), l.wrap.addClass(e);
    },
    _removeClassFromMFP: function (e) {
      this.bgOverlay.removeClass(e), l.wrap.removeClass(e);
    },
    _hasScrollBar: function (e) {
      return (
        (l.isIE7 ? d.height() : document.body.scrollHeight) > (e || g.height())
      );
    },
    _setFocus: function () {
      if (l.st.focus) {
        var e = l.content.find(l.st.focus).eq(0);
        if (e.length) return void e.trigger("focus");
      }
      l.wrap.trigger("focus");
    },
    _onFocusIn: function (t) {
      if (t.target !== l.wrap[0] && !e.contains(l.wrap[0], t.target))
        return l.wrap.trigger("focus"), !1;
    },
    _parseMarkup: function (t, n, o) {
      var r;
      o.data && (n = e.extend(o.data, n)),
        y(i, [t, n, o]),
        e.each(n, function (i, n) {
          if (void 0 === n || !1 === n) return !0;
          if ((r = i.split("_")).length > 1) {
            var o = t.find(s + "-" + r[0]);
            if (o.length > 0) {
              var a = r[1];
              "replaceWith" === a
                ? o[0] !== n[0] && o.replaceWith(n)
                : "img" === a
                ? o.is("img")
                  ? o.attr("src", n)
                  : o.replaceWith(
                      e("<img>").attr("src", n).attr("class", o.attr("class"))
                    )
                : o.attr(r[1], n);
            }
          } else t.find(s + "-" + i).html(n);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === l.scrollbarSize) {
        var e = document.createElement("div");
        (e.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(e),
          (l.scrollbarSize = e.offsetWidth - e.clientWidth),
          document.body.removeChild(e);
      }
      return l.scrollbarSize;
    },
  }),
    (e.magnificPopup = {
      instance: null,
      proto: f.prototype,
      modules: [],
      open: function (t, i) {
        return (
          b(),
          ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
          (t.index = i || 0),
          this.instance.open(t)
        );
      },
      close: function () {
        return e.magnificPopup.instance && e.magnificPopup.instance.close();
      },
      registerModule: function (t, i) {
        i.options && (e.magnificPopup.defaults[t] = i.options),
          e.extend(this.proto, i.proto),
          this.modules.push(t);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close"></button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (e.fn.magnificPopup = function (t) {
      b();
      var i = e(this);
      if ("string" == typeof t)
        if ("open" === t) {
          var n,
            s = m ? i.data("magnificPopup") : i[0].magnificPopup,
            o = parseInt(arguments[1], 10) || 0;
          s.items
            ? (n = s.items[o])
            : ((n = i), s.delegate && (n = n.find(s.delegate)), (n = n.eq(o))),
            l._openClick({ mfpEl: n }, i, s);
        } else
          l.isOpen && l[t].apply(l, Array.prototype.slice.call(arguments, 1));
      else
        (t = e.extend(!0, {}, t)),
          m ? i.data("magnificPopup", t) : (i[0].magnificPopup = t),
          l.addGroup(i, t);
      return i;
    });
  var $,
    x,
    C,
    S = "inline",
    k = function () {
      C && (x.after(C.addClass($)).detach(), (C = null));
    };
  e.magnificPopup.registerModule(S, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        l.types.push(S),
          v(t + "." + S, function () {
            k();
          });
      },
      getInline: function (t, i) {
        if ((k(), t.src)) {
          var n = l.st.inline,
            s = e(t.src);
          if (s.length) {
            var o = s[0].parentNode;
            o &&
              o.tagName &&
              (x || (($ = n.hiddenClass), (x = _($)), ($ = "mfp-" + $)),
              (C = s.after(x).detach().removeClass($))),
              l.updateStatus("ready");
          } else l.updateStatus("error", n.tNotFound), (s = e("<div>"));
          return (t.inlineElement = s), s;
        }
        return l.updateStatus("ready"), l._parseMarkup(i, {}, t), i;
      },
    },
  });
  var T,
    E = "ajax",
    O = function () {
      T && e(document.body).removeClass(T);
    },
    A = function () {
      O(), l.req && l.req.abort();
    };
  e.magnificPopup.registerModule(E, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        l.types.push(E),
          (T = l.st.ajax.cursor),
          v(t + "." + E, A),
          v("BeforeChange." + E, A);
      },
      getAjax: function (t) {
        T && e(document.body).addClass(T), l.updateStatus("loading");
        var i = e.extend(
          {
            url: t.src,
            success: function (i, n, s) {
              var r = { data: i, xhr: s };
              y("ParseAjax", r),
                l.appendContent(e(r.data), E),
                (t.finished = !0),
                O(),
                l._setFocus(),
                setTimeout(function () {
                  l.wrap.addClass(o);
                }, 16),
                l.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              O(),
                (t.finished = t.loadError = !0),
                l.updateStatus(
                  "error",
                  l.st.ajax.tError.replace("%url%", t.src)
                );
            },
          },
          l.st.ajax.settings
        );
        return (l.req = e.ajax(i)), "";
      },
    },
  }),
    b();
}),
  (function (e) {
    "use strict";
    var t = "spritespin",
      i = {};
    (window.SpriteSpin = i),
      (i.namespace = t),
      (i.mods = {}),
      (i.eventNames = [
        "mousedown",
        "mousemove",
        "mouseup",
        "mouseenter",
        "mouseover",
        "mouseleave",
        "dblclick",
        "mousewheel",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "selectstart",
        "gesturestart",
        "gesturechange",
        "gestureend",
      ]),
      (i.eventsToPrevent = ["dragstart"]),
      (i.defaults = {
        source: void 0,
        width: void 0,
        height: void 0,
        frames: void 0,
        framesX: void 0,
        lanes: 1,
        sizeMode: void 0,
        module: "360",
        behavior: "drag",
        renderer: "canvas",
        lane: 0,
        frame: 0,
        frameTime: 40,
        animate: !0,
        reverse: !1,
        loop: !0,
        stopFrame: 0,
        wrap: !0,
        wrapLane: !1,
        sense: 1,
        senseLane: void 0,
        orientation: "horizontal",
        detectSubsampling: !0,
        scrollThreshold: 50,
        preloadCount: void 0,
        onInit: void 0,
        onProgress: void 0,
        onLoad: void 0,
        onFrame: void 0,
        onDraw: void 0,
        onPreloadStart: void 0,
        onFullLoad: void 0,
        onDragStart: void 0,
        onDragEnd: void 0,
        shiftMatrix: void 0,
      });
    var n = 0,
      s = {};
    function o(i) {
      e(window.document).bind(i + "." + t, function (e) {
        !(function (e, t) {
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var n,
                o,
                r = s[i];
              for (n = 0; n < r.mods.length; n += 1)
                "function" == typeof (o = r.mods[n])[e] &&
                  o[e].apply(r.target, [t, r]);
            }
        })("document" + i, e);
      });
    }
    function r() {
      for (var e in s)
        if (s.hasOwnProperty(e)) {
          var t = s[e];
          t.responsive && i.boot(t, !0);
        }
    }
    i.instances = s;
    var a = null;
    e(window).on("resize", function () {
      clearTimeout(a), (a = setTimeout(r, 100));
    });
    for (var l = 0; l < i.eventNames.length; l += 1) o(i.eventNames[l]);
    function c(e, t, i) {
      return e > i ? i : e < t ? t : e;
    }
    function d(e, t, i, n) {
      for (; e > i; ) e -= n;
      for (; e < t; ) e += n;
      return e;
    }
    function u(e) {
      return e.preventDefault(), !1;
    }
    function p(e, i, n) {
      n &&
        e.bind(i + "." + t, function (t) {
          n.apply(e, [t, e.spritespin("data")]);
        });
    }
    function h(e) {
      e.unbind("." + t);
    }
    function f(e, t) {
      var i,
        n = (t || e).width;
      if (n * (t || e).height <= 1048576) return !1;
      if (!(i = document.createElement("canvas")) || !i.getContext) return !1;
      var s = i.getContext("2d");
      if (!s) return !1;
      (i.width = i.height = 1),
        (s.fillStyle = "#FF00FF"),
        s.fillRect(0, 0, 1, 1),
        s.drawImage(e, 1 - n, 0);
      try {
        var o = s.getImageData(0, 0, 1, 1).data;
        return 255 === o[0] && 0 === o[1] && 255 === o[2];
      } catch (e) {
        return (
          (function () {
            window.console &&
              window.console.log &&
              window.console.log.apply(window.console, arguments);
          })(e.message, e.stack),
          !1
        );
      }
    }
    function m(t, n, s, o) {
      var r;
      (s = void 0 !== s ? s : 0),
        (r = n[(o = void 0 !== o ? o : 0)] - 1),
        (function (t) {
          var i,
            n,
            s = "string" == typeof t.source ? [t.source] : t.source,
            o = 0,
            r = t.totalCount,
            a = [],
            l = t.preloadCount || s.length,
            c = !1,
            d = !1,
            u = function () {
              (o += 1),
                (r += 1),
                "function" == typeof t.progress &&
                  t.progress({
                    index: e.inArray(this, a),
                    loaded: o,
                    totalCount: r,
                    percent: Math.round((o / s.length) * 100),
                  }),
                (d = d || this === a[0]),
                !c &&
                  o >= l &&
                  d &&
                  "function" == typeof t.complete &&
                  ((c = !0), t.complete(a, r));
            };
          for (i = 0; i < s.length; i += 1)
            (n = new Image()),
              a.push(n),
              (n.onload = n.onabort = n.onerror = u),
              (n.src = s[i]);
          "function" == typeof t.initiated && t.initiated(a);
        })({
          source: t.source.slice(t.frames * r, t.frames * r + t.frames),
          data: t,
          totalCount: s,
          progress: function (e) {
            t.target.trigger("onProgress", [e, t]);
          },
          complete: function (e, s) {
            Array.prototype.splice.apply(
              t.images,
              [r * t.frames, e.length].concat(e)
            ),
              0 === o &&
                ((t.loading = !1),
                i.measureSource(t),
                i.setLayout(t),
                t.stage.show(),
                t.target
                  .removeClass("loading")
                  .trigger("onLoad", t)
                  .trigger("onFrame", t)
                  .trigger("onDraw", t)),
              ++o < t.lanes && m(t, n, s, o),
              o == t.lanes && t.target.trigger("onFullLoad", t);
          },
        });
    }
    (i.clamp = c),
      (i.wrap = d),
      (i.bind = p),
      (i.sourceArray = function (e, t) {
        var i = 0,
          n = 0,
          s = 0,
          o = 0,
          r = t.digits || 2;
        t.frame && ((i = t.frame[0]), (n = t.frame[1])),
          t.lane && ((s = t.lane[0]), (o = t.lane[1]));
        var a,
          l,
          c,
          d = [];
        for (a = s; a <= o; a += 1)
          for (l = i; l <= n; l += 1)
            (c = (c = e.replace("{lane}", a.toString().padStart(r, 0))).replace(
              "{frame}",
              l.toString().padStart(r, 0)
            )),
              d.push(c);
        return d;
      }),
      (i.measureSource = function (e) {
        var t = e.images[e.lane * e.frames + e.frame],
          i = (function (e) {
            if (null != e.naturalWidth)
              return { width: e.naturalWidth, height: e.naturalHeight };
            var t = new Image();
            return (t.src = e.src), { width: t.width, height: t.height };
          })(t);
        if (1 === e.images.length) {
          if (
            ((e.sourceWidth = i.width),
            (e.sourceHeight = i.height),
            e.detectSubsampling &&
              f(t, i) &&
              ((e.sourceWidth /= 2), (e.sourceHeight /= 2)),
            (e.framesX = e.framesX || e.frames),
            !e.frameWidth || !e.frameHeight)
          )
            if (e.framesX) {
              e.frameWidth = Math.floor(e.sourceWidth / e.framesX);
              var n = Math.ceil((e.frames * e.lanes) / e.framesX);
              e.frameHeight = Math.floor(e.sourceHeight / n);
            } else (e.frameWidth = i.width), (e.frameHeight = i.height);
        } else
          (e.sourceWidth = e.frameWidth = i.width),
            (e.sourceHeight = e.frameHeight = i.height),
            f(t, i) &&
              ((e.sourceWidth = e.frameWidth = i.width / 2),
              (e.sourceHeight = e.frameHeight = i.height / 2)),
            (e.frames = e.frames || e.images.length);
      }),
      (i.resetInput = function (e) {
        (e.startX = e.startY = void 0),
          (e.currentX = e.currentY = void 0),
          (e.oldX = e.oldY = void 0),
          (e.dX = e.dY = e.dW = 0),
          (e.ddX = e.ddY = e.ddW = 0);
      }),
      (i.updateInput = function (e, t) {
        void 0 === e.touches &&
          void 0 !== e.originalEvent &&
          (e.touches = e.originalEvent.touches),
          (t.oldX = t.currentX),
          (t.oldY = t.currentY),
          void 0 !== e.touches && e.touches.length > 0
            ? ((t.currentX = e.touches[0].clientX || 0),
              (t.currentY = e.touches[0].clientY || 0))
            : ((t.currentX = e.clientX || 0), (t.currentY = e.clientY || 0)),
          (void 0 !== t.oldX && void 0 !== t.oldY) ||
            ((t.oldX = t.currentX), (t.oldY = t.currentY)),
          (void 0 !== t.startX && void 0 !== t.startY) ||
            ((t.startX = t.currentX),
            (t.startY = t.currentY),
            (t.clickframe = t.frame),
            (t.clicklane = t.lane)),
          (t.dX = t.currentX - t.startX),
          (t.dY = t.currentY - t.startY),
          (t.ddX = t.currentX - t.oldX),
          (t.ddY = t.currentY - t.oldY),
          (t.ndX = t.dX / t.width),
          (t.ndY = t.dY / t.height),
          (t.nddX = t.ddX / t.width),
          (t.nddY = t.ddY / t.height);
      }),
      (i.updateFrame = function (e, t, n, s) {
        (s = void 0 !== s && s),
          (e.lastFrame = e.frame),
          (e.lastLane = e.lane),
          void 0 !== t
            ? (e.frame = Number(t))
            : e.animation && (e.frame += e.reverse ? -1 : 1),
          e.animation
            ? ((e.frame = d(e.frame, 0, e.frames - 1, e.frames)),
              e.loop || e.frame !== e.stopFrame || i.stopAnimation(e))
            : e.wrap
            ? (e.frame = d(e.frame, 0, e.frames - 1, e.frames))
            : (e.frame = c(e.frame, 0, e.frames - 1)),
          void 0 !== n &&
            ((e.lane = n),
            e.wrapLane
              ? (e.lane = d(e.lane, 0, e.lanes - 1, e.lanes))
              : (e.lane = c(e.lane, 0, e.lanes - 1)));
        var o = e.lane * e.frames + e.frame,
          r = e.images[o];
        "canvas" !== e.renderer ||
        (void 0 !== r && !1 !== r.complete && void 0 !== r.complete)
          ? (e.lastFrame == e.frame && e.lastLane == e.lane) ||
            e.target.trigger("onFrameChanged", e)
          : ((e.frame = e.lastFrame), (e.lane = e.lastLane)),
          s
            ? e.target.trigger("onHandleFrame", e)
            : e.target.trigger("onFrame", e),
          e.target.trigger("onDraw", e);
      }),
      (i.stopAnimation = function (e) {
        (e.animate = !1),
          e.animation &&
            (window.clearInterval(e.animation), (e.animation = null));
      }),
      (i.setAnimation = function (e) {
        e.animate ? i.requestFrame(e) : i.stopAnimation(e);
      }),
      (i.requestFrame = function (e) {
        e.animation ||
          (void 0 === e.frameFunction &&
            (e.frameFunction = function () {
              try {
                i.updateFrame(e);
              } catch (e) {}
            }),
          (e.animation = window.setInterval(e.frameFunction, e.frameTime)));
      }),
      (i.setModules = function (t) {
        var n, s, o;
        for (n = 0; n < t.mods.length; n += 1)
          "string" == typeof (s = t.mods[n]) &&
            ((o = i.mods[s])
              ? (t.mods[n] = o)
              : e.error("No module found with name " + s));
      }),
      (i.displaySize = function (e) {
        var t = Math.floor(e.width || e.frameWidth || e.target.innerWidth()),
          i = Math.floor(e.height || e.frameHeight || e.target.innerHeight());
        return { width: t, height: i, aspect: t / i };
      }),
      (i.calculateInnerLayout = function (e) {
        var t = Math.floor(e.width || e.frameWidth || e.target.innerWidth()),
          i = Math.floor(e.height || e.frameHeight || e.target.innerHeight()),
          n = t / i,
          s = e.frameWidth || t,
          o = e.frameHeight || i,
          r = s / o,
          a = {
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            overflow: "hidden",
          },
          l = e.sizeMode;
        return l && "scale" != l
          ? ("original" == l
              ? ((a.width = s), (a.height = o))
              : "fit" == l
              ? r >= n
                ? ((a.width = t), (a.height = t / r))
                : ((a.height = i), (a.width = i * r))
              : "fill" == l
              ? r >= n
                ? ((a.height = i), (a.width = i * r))
                : ((a.width = t), (a.height = t / r))
              : ((a.width = t), (a.height = i)),
            (a.width = 0 | a.width),
            (a.height = 0 | a.height),
            (a.top = ((i - a.height) / 2) | 0),
            (a.left = ((t - a.width) / 2) | 0),
            (a.right = a.left),
            (a.bottom = a.top),
            a)
          : a;
      }),
      (i.setLayout = function (e) {
        e.target
          .attr("unselectable", "on")
          .css({
            width: "",
            height: "",
            "-ms-user-select": "none",
            "-moz-user-select": "none",
            "-khtml-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
          });
        var t = Math.floor(e.width || e.frameWidth || e.target.innerWidth()),
          n = Math.floor(e.height || e.frameHeight || e.target.innerHeight());
        if (e.responsive && "function" == typeof window.getComputedStyle) {
          var s = getComputedStyle(e.target[0]);
          if (s.width) {
            var o = t / n;
            n = ((t = 0 | Number(s.width.replace("px", ""))) / o) | 0;
          }
        }
        e.target.css({
          width: t,
          height: n,
          position: "relative",
          overflow: "hidden",
        });
        var r,
          a = i.calculateInnerLayout(e);
        e.stage.css(a).hide(),
          e.canvas &&
            ((e.canvasRatio =
              e.canvasRatio ||
              ((r = e.context),
              (window.devicePixelRatio || 1) /
                (r.webkitBackingStorePixelRatio ||
                  r.mozBackingStorePixelRatio ||
                  r.msBackingStorePixelRatio ||
                  r.oBackingStorePixelRatio ||
                  r.backingStorePixelRatio ||
                  1))),
            (e.canvas[0].width = a.width * e.canvasRatio || t),
            (e.canvas[0].height = a.height * e.canvasRatio || n),
            e.canvas.css(a).hide(),
            e.context.scale(e.canvasRatio, e.canvasRatio));
      }),
      (i.setEvents = function (e) {
        var t,
          n,
          s,
          o = e.target;
        for (h(o), n = 0; n < i.eventsToPrevent.length; n += 1)
          p(o, i.eventsToPrevent[n], u);
        for (t = 0; t < e.mods.length; t += 1) {
          for (s = e.mods[t], n = 0; n < i.eventNames.length; n += 1)
            p(o, i.eventNames[n], s[i.eventNames[n]]);
          p(o, "onInit", s.onInit),
            p(o, "onProgress", s.onProgress),
            p(o, "onLoad", s.onLoad),
            p(o, "onDraw", s.onDraw),
            p(o, "onFrameChanged", s.onFrameChanged),
            p(o, "onFrame", s.onFrame),
            p(o, "onHandleFrame", s.onHandleFrame),
            p(o, "onPreloadStart", s.onPreloadStart),
            p(o, "onFullLoad", s.onFullLoad),
            p(o, "onDragStart", s.onDragStart),
            p(o, "onDragEnd", s.onDragEnd);
        }
        p(o, "onLoad", function (e, t) {
          i.setAnimation(t);
        }),
          p(o, "onInit", e.onInit),
          p(o, "onProgress", e.onProgress),
          p(o, "onLoad", e.onLoad),
          p(o, "onDraw", e.onDraw),
          p(o, "onFrameChanged", s.onFrameChanged),
          p(o, "onFrame", e.onFrame),
          p(o, "onHandleFrame", e.onHandleFrame),
          p(o, "onPreloadStart", e.onPreloadStart),
          p(o, "onFullLoad", e.onFullLoad),
          p(o, "onDragStart", e.onDragStart),
          p(o, "onDragEnd", e.onDragEnd);
      }),
      (i.boot = function (e, t) {
        (t = void 0 !== t && t) && !e.loading
          ? (i.setLayout(e),
            e.stage.show(),
            void 0 !== e.images &&
              e.images.length &&
              e.target
                .trigger("onLoad", e)
                .trigger("onFrame", e)
                .trigger("onDraw", e))
          : (i.setModules(e),
            i.setLayout(e),
            i.setEvents(e),
            e.target.trigger("onInit", e),
            SpriteSpin.preload(e));
      }),
      (i.preload = function (e) {
        e.target.trigger("onPreloadStart", e),
          e.target.addClass("loading"),
          (e.loading = !0),
          (e.images = Array.apply(null, Array(e.source.length)).map(
            Number.prototype.valueOf,
            0
          ));
        for (var t, i, n = e.lane + 1, s = [n], o = 1; s.length < e.lanes; )
          (i = n + o) < e.lanes + 1 && s.push(i),
            (t = n - o) > 0 && s.push(t),
            o++;
        m(e, s);
      }),
      (i.create = function (o) {
        var r = o.target,
          a = r.data(t);
        if (a) e.extend(a, o);
        else {
          if (
            (((a = e.extend({}, i.defaults, o)).source = a.source || []),
            r.find("img").each(function () {
              a.source.push(e(this).attr("src"));
            }),
            r
              .empty()
              .addClass("spritespin-instance")
              .append("<div class='spritespin-stage'></div>"),
            "canvas" === a.renderer)
          ) {
            var l = e("<canvas class='spritespin-canvas'></canvas>")[0];
            l.getContext && l.getContext("2d")
              ? ((a.canvas = e(l)),
                (a.context = l.getContext("2d")),
                r.append(a.canvas),
                r.addClass("with-canvas"))
              : (a.renderer = "image");
          }
          (a.target = r),
            (a.stage = r.find(".spritespin-stage")),
            r.data(t, a),
            (function (e) {
              (n += 1), (e.id = n), (s[n] = e);
            })(a);
        }
        "string" == typeof a.source && (a.source = [a.source]),
          a.mods && (delete a.behavior, delete a.module),
          (a.behavior || a.module) &&
            ((a.mods = []),
            a.behavior && a.mods.push(a.behavior),
            a.module && a.mods.push(a.module),
            delete a.behavior,
            delete a.module),
          i.boot(a);
      }),
      (i.destroy = function (e) {
        e &&
          (!(function (e) {
            delete s[e.id];
          })(e),
          i.stopAnimation(e),
          h(e.target),
          e.target.removeData(t));
      }),
      (i.registerModule = function (t, n) {
        return (
          i.mods[t] && e.error("Module name is already taken: " + t),
          (n = n || {}),
          (i.mods[t] = n),
          n
        );
      }),
      (i.Api = function (e) {
        this.data = e;
      }),
      (i.extendApi = function (t) {
        var n,
          s = i.Api.prototype;
        for (n in t)
          t.hasOwnProperty(n) &&
            (s[n]
              ? e.error("API method is already defined: " + n)
              : (s[n] = t[n]));
        return s;
      }),
      (e.fn.spritespin = function (n, s) {
        if ("data" === n) return this.data(t);
        if ("api" === n) {
          var o = this.data(t);
          return (o.api = o.api || new i.Api(o)), o.api;
        }
        if ("destroy" === n)
          return e(this).each(function () {
            i.destroy(e(this).data(t));
          });
        if (2 === arguments.length && "string" == typeof n) {
          var r = {};
          (r[n] = s), (n = r);
        }
        return "object" == typeof n
          ? ((n.target = e(this)), i.create(n), n.target)
          : e.error("Invalid call to spritespin");
      });
  })(window.jQuery || window.Zepto || window.$),
  (function (e) {
    "use strict";
    var t = window.SpriteSpin;
    t.extendApi({
      isPlaying: function () {
        return null !== this.data.animation;
      },
      isLooping: function () {
        return this.data.loop;
      },
      toggleAnimation: function () {
        (this.data.animate = !this.data.animate), t.setAnimation(this.data);
      },
      stopAnimation: function () {
        (this.data.animate = !1), t.setAnimation(this.data);
      },
      startAnimation: function () {
        (this.data.animate = !0), t.setAnimation(this.data);
      },
      changeAnimationSpeed: function (e) {
        (this.data.frameTime = e),
          window.clearInterval(this.data.animation),
          (this.data.animation = null),
          t.setAnimation(this.data);
      },
      loop: function (e) {
        return (this.data.loop = e), t.setAnimation(this.data), this;
      },
      updateShiftMatrix: function (e) {
        this.data.shiftMatrix = e;
      },
      currentFrame: function () {
        return this.data.frame;
      },
      updateFrame: function (e) {
        return t.updateFrame(this.data, e, this.data.lane, !0), this;
      },
      updateLane: function (e) {
        return t.updateFrame(this.data, this.data.frame, e, !0), this;
      },
      skipFrames: function (e) {
        var i = this.data;
        return t.updateFrame(i, i.frame + (i.reverse ? -e : +e)), this;
      },
      nextFrame: function () {
        return this.skipFrames(1);
      },
      prevFrame: function () {
        return this.skipFrames(-1);
      },
      skipLanes: function (e) {
        var i = this.data;
        return t.updateFrame(i, i.frame, i.lane + (i.reverse ? -e : +e)), this;
      },
      nextLane: function () {
        return this.skipLanes(1);
      },
      prevLane: function () {
        return this.skipLanes(-1);
      },
      playTo: function (e, i) {
        var n = this.data;
        if ((i = i || {}).force || n.frame !== e) {
          if (i.nearest) {
            var s = e - n.frame,
              o = e > n.frame ? s - n.frames : s + n.frames,
              r = Math.abs(s) < Math.abs(o) ? s : o;
            n.reverse = r < 0;
          }
          return (
            (n.animate = !0),
            (n.loop = !1),
            (n.stopFrame = e),
            t.setAnimation(n),
            this
          );
        }
      },
      currentImage: function () {
        var t = this.data.lane * this.data.frames + this.data.frame;
        return e(this.data.images[t]).attr("src");
      },
      makePreload: function () {
        t.preload(this.data);
      },
    });
  })(window.jQuery || window.Zepto || window.$),
  (function (e) {
    "use strict";
    var t = (function () {
      for (
        var e,
          t,
          i = [
            [
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenElement",
              "fullscreenEnabled",
              "fullscreenchange",
              "fullscreenerror",
            ],
            [
              "webkitRequestFullscreen",
              "webkitExitFullscreen",
              "webkitFullscreenElement",
              "webkitFullscreenEnabled",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitCurrentFullScreenElement",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "webkitfullscreenerror",
            ],
            [
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozFullScreenElement",
              "mozFullScreenEnabled",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            [
              "msRequestFullscreen",
              "msExitFullscreen",
              "msFullscreenElement",
              "msFullscreenEnabled",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          ],
          n = 0,
          s = i.length,
          o = {};
        n < s;
        n++
      )
        if ((e = i[n]) && e[1] in document) {
          for (n = 0, t = e.length; n < t; n++) o[i[0][n]] = e[n];
          return o;
        }
      return !1;
    })();
    function i() {
      return document[t.fullscreenElement];
    }
    function n() {
      return !!i();
    }
    var s = t.fullscreenchange + "." + SpriteSpin.namespace + "-fullscreen";
    function o() {
      e(document).unbind(s);
    }
    var r = "orientationchange." + SpriteSpin.namespace + "-fullscreen";
    function a() {
      e(window).unbind(r);
    }
    SpriteSpin.extendApi({
      fullscreenEnabled: function () {
        return document[t.fullscreenEnabled];
      },
      fullscreenElement: i,
      exitFullscreen: function () {
        return document[t.exitFullscreen]();
      },
      toggleFullscreen: function (e) {
        n() ? this.requestFullscreen(e) : this.exitFullscreen();
      },
      requestFullscreen: function (i) {
        i = i || {};
        var l,
          c = this.data,
          d = c.width,
          u = c.height,
          p = c.source,
          h = c.sizeMode,
          f = c.responsive,
          m = function () {
            (c.width = window.screen.width),
              (c.height = window.screen.height),
              (c.source = i.source || p),
              (c.sizeMode = i.sizeMode || "fit"),
              (c.responsive = !1),
              SpriteSpin.boot(c);
          };
        (l = function () {
          var t;
          n()
            ? (m(), (t = m), a(), e(window).bind(r, t))
            : (o(),
              a(),
              (c.width = d),
              (c.height = u),
              (c.source = p),
              (c.sizeMode = h),
              (c.responsive = f),
              SpriteSpin.boot(c));
        }),
          o(),
          e(document).bind(s, l),
          (c.target[0] || document.documentElement)[t.requestFullscreen]();
      },
    });
  })(window.jQuery || window.Zepto || window.$, window.SpriteSpin),
  (function (e, t) {
    "use strict";
    function i(e, i) {
      if (!i.loading && i.stage.is(":visible")) {
        t.updateInput(e, i);
        var n,
          s,
          o = i.target,
          r = o.offset();
        "horizontal" === i.orientation
          ? ((n = o.innerWidth() / 2), (s = i.currentX - r.left))
          : ((n = o.innerHeight() / 2), (s = i.currentY - r.top)),
          t.updateFrame(i, i.frame + (s > n ? 1 : -1));
      }
    }
    t.registerModule("click", { mouseup: i, touchend: i });
  })(window.jQuery || window.Zepto || window.$, window.SpriteSpin),
  (function (e, t) {
    "use strict";
    function i(e, i) {
      i.loading ||
        i.dragging ||
        !i.stage.is(":visible") ||
        ((i.dragging = !0),
        i.target.trigger("onDragStart", i),
        (i.dragFrame = i.frame + 0.5 || 0.5),
        (i.dragLane = i.lane + 0.5 || 0.5),
        t.updateInput(e, i));
    }
    function n(e, i) {
      i.dragging &&
        ((i.dragging = !1), t.resetInput(i), i.target.trigger("onDragEnd", i));
    }
    function s(i, n) {
      if (n.dragging) {
        if (
          (t.updateInput(i, n),
          Math.abs(n.ddX) + Math.abs(n.ddY) > n.scrollThreshold &&
            e(window).width() < 1024)
        )
          return (n.dragging = !1), void t.resetInput(n);
        i.preventDefault();
        var s = 0;
        s =
          "number" == typeof n.orientation
            ? ((Number(n.orientation) || 0) * Math.PI) / 180
            : "horizontal" === n.orientation
            ? 0
            : Math.PI / 2;
        var o = Math.sin(s),
          r = Math.cos(s),
          a = (n.nddX * r - n.nddY * o) * n.sense || 0,
          l = (n.nddX * o + n.nddY * r) * n.senseLane || 0;
        (n.dragFrame += n.frames * a), (n.dragLane += n.lanes * l);
        var c = Math.floor(n.dragFrame),
          d = Math.floor(n.dragLane);
        t.updateFrame(n, c, d), t.stopAnimation(n);
      }
    }
    t.registerModule("drag", {
      mousedown: i,
      mousemove: s,
      mouseup: n,
      documentmousemove: s,
      documentmouseup: n,
      touchstart: i,
      touchmove: s,
      touchend: n,
      touchcancel: n,
    }),
      t.registerModule("move", {
        mousemove: function (e, t) {
          i.call(this, e, t), s.call(this, e, t);
        },
        mouseleave: n,
        touchstart: i,
        touchmove: s,
        touchend: n,
        touchcancel: n,
      });
  })(window.jQuery || window.Zepto || window.$, window.SpriteSpin),
  (function (e, t) {
    "use strict";
    function i(e, i) {
      i.loading ||
        i.dragging ||
        !i.stage.is(":visible") ||
        (t.updateInput(e, i),
        (i.dragging = !0),
        (i.animate = !0),
        t.setAnimation(i));
    }
    function n(e, i) {
      (i.dragging = !1), t.resetInput(i), t.stopAnimation(i);
    }
    function s(e, i) {
      if (i.dragging) {
        t.updateInput(e, i);
        var n,
          s,
          o = i.target,
          r = o.offset();
        "horizontal" === i.orientation
          ? ((n = o.innerWidth() / 2), (s = (i.currentX - r().left - n) / n))
          : ((n = i.height / 2), (s = (i.currentY - r().top - n) / n)),
          (i.reverse = s < 0),
          (s = s < 0 ? -s : s),
          (i.frameTime = 80 * (1 - s) + 20),
          (("horizontal" === i.orientation && i.dX < i.dY) ||
            ("vertical" === i.orientation && i.dX < i.dY)) &&
            e.preventDefault();
      }
    }
    t.registerModule("hold", {
      mousedown: i,
      mousemove: s,
      mouseup: n,
      mouseleave: n,
      touchstart: i,
      touchmove: s,
      touchend: n,
      touchcancel: n,
      onFrame: function () {
        e(this).spritespin("api").startAnimation();
      },
    });
  })(window.jQuery || window.Zepto || window.$, window.SpriteSpin),
  (function (e, t) {
    "use strict";
    function i(e, i) {
      i.loading || i.dragging || (t.updateInput(e, i), (i.dragging = !0));
    }
    function n(e, i) {
      if (i.dragging) {
        t.updateInput(e, i);
        var n = i.frame,
          s = i.lane;
        t.updateFrame(i, n, s);
      }
    }
    function s(e, i) {
      if (i.dragging) {
        i.dragging = !1;
        var n,
          s,
          o = i.frame,
          r = i.lane,
          a = i.swipeSnap,
          l = i.swipeFling;
        "horizontal" === i.orientation
          ? ((n = i.ndX), (s = i.ddX))
          : ((n = i.ndY), (s = i.ddY)),
          n > a || s > l
            ? (o = i.frame - 1)
            : (n < -a || s < -l) && (o = i.frame + 1),
          t.resetInput(i),
          t.updateFrame(i, o, r),
          t.stopAnimation(i);
      }
    }
    t.registerModule("swipe", {
      onLoad: function (e, t) {
        (t.swipeFling = t.swipeFling || 10), (t.swipeSnap = t.swipeSnap || 0.5);
      },
      mousedown: i,
      mousemove: n,
      mouseup: s,
      mouseleave: s,
      touchstart: i,
      touchmove: n,
      touchend: s,
      touchcancel: s,
    });
  })(window.jQuery || window.Zepto || window.$, window.SpriteSpin),
  (function (e, t) {
    "use strict";
    var i = Math.floor;
    t.registerModule("360", {
      onLoad: function (t, n) {
        if (
          (n.width && n.frameWidth
            ? (n.scaleWidth = n.width / n.frameWidth)
            : (n.scaleWidth = 1),
          n.height && n.frameHeight
            ? (n.scaleHeight = n.height / n.frameHeight)
            : (n.scaleHeight = 1),
          (n.sourceIsSprite = 1 === n.images.length),
          n.stage.empty().css({ "background-image": "none" }).show(),
          "canvas" === n.renderer)
        ) {
          var s = n.canvas[0].width / n.canvasRatio,
            o = n.canvas[0].height / n.canvasRatio;
          n.context.clearRect(0, 0, s, o), n.canvas.show();
        } else if ("background" === n.renderer) {
          n.sourceIsSprite
            ? ((s = i(n.sourceWidth * n.scaleWidth)),
              (o = i(n.sourceHeight * n.scaleHeight)))
            : ((s = i(n.frameWidth * n.scaleWidth)),
              (o = i(n.frameHeight * n.scaleHeight)));
          var r = [s, "px ", o, "px"].join("");
          n.stage.css({
            "background-repeat": "no-repeat",
            "-webkit-background-size": r,
            "-moz-background-size": r,
            "-o-background-size": r,
            "background-size": r,
          });
        } else
          "image" === n.renderer &&
            (n.sourceIsSprite
              ? ((s = i(n.sourceWidth * n.scaleWidth)),
                (o = i(n.sourceHeight * n.scaleHeight)))
              : (s = o = "100%"),
            e(n.images)
              .appendTo(n.stage)
              .css({ width: s, height: o, position: "absolute" }));
      },
      onDraw: function (t, n) {
        n.sourceIsSprite
          ? (function (t) {
              var n = t.lane * t.frames + t.frame,
                s = t.frameWidth * (n % t.framesX),
                o = t.frameHeight * i(n / t.framesX);
              if ("canvas" === t.renderer) {
                var r = t.canvas[0].width / t.canvasRatio,
                  a = t.canvas[0].height / t.canvasRatio;
                return (
                  t.context.clearRect(0, 0, r, a),
                  void t.context.drawImage(
                    t.images[0],
                    s,
                    o,
                    t.frameWidth,
                    t.frameHeight,
                    0,
                    0,
                    r,
                    a
                  )
                );
              }
              (s = -i(s * t.scaleWidth)),
                (o = -i(o * t.scaleHeight)),
                "background" === t.renderer
                  ? t.stage.css({
                      "background-image": ["url('", t.source[0], "')"].join(""),
                      "background-position": [s, "px ", o, "px"].join(""),
                    })
                  : e(t.images).css({
                      top: o,
                      left: s,
                      "max-width": "initial",
                    });
            })(n)
          : (function (t) {
              var i = t.lane * t.frames + t.frame,
                n = t.images[i];
              if ("canvas" === t.renderer && n && !0 === n.complete) {
                var s = 0,
                  o = 0;
                void 0 !== t.shiftMatrix &&
                  t.shiftMatrix instanceof Array &&
                  t.shiftMatrix.length &&
                  ((s = t.shiftMatrix[i][0]), (o = t.shiftMatrix[i][1]));
                var r = t.canvas[0].width / t.canvasRatio,
                  a = t.canvas[0].height / t.canvasRatio;
                t.context.clearRect(0, 0, r, a),
                  t.context.drawImage(n, s, o, r, a);
              } else
                "background" === t.renderer
                  ? t.stage.css({
                      "background-image": ["url('", t.source[i], "')"].join(""),
                      "background-position": [0, "px ", 0, "px"].join(""),
                    })
                  : (e(t.images).hide(), e(t.images[i]).show());
            })(n);
      },
    });
  })(window.jQuery || window.Zepto || window.$, window.SpriteSpin),
  (function (e, t) {
    "use strict";
    function i(t) {
      t.blurScope = t.blurScope || {};
      var i = t.blurScope;
      return (
        (i.canvas = i.canvas || e("<canvas class='blur-layer'></canvas>")),
        (i.context = i.context || i.canvas[0].getContext("2d")),
        (i.steps = i.steps || []),
        (i.fadeTime = Math.max(t.blurFadeTime || 200, 1)),
        (i.frameTime = Math.max(t.blurFrameTime || t.frameTime, 16)),
        (i.trackTime = null),
        (i.cssBlur = !!t.blurCss),
        i
      );
    }
    var n = [];
    function s(e, t) {
      t.timeout = window.setTimeout(function () {
        !(function (e, t) {
          if (
            ((function (e, t) {
              window.clearTimeout(t.timeout), (t.timeout = null);
            })(0, t),
            !t.context)
          )
            return;
          var i,
            r,
            a = t.context,
            l = 0;
          for (
            a.clearRect(0, 0, e.width, e.height), i = 0;
            i < t.steps.length;
            i += 1
          )
            ((r = t.steps[i]).live = Math.max(r.live - r.step, 0)),
              (r.alpha = Math.max(r.live - 0.25, 0)),
              o(e, t, r),
              (l += r.alpha + r.d);
          t.cssBlur &&
            (function (e, t) {
              (t = Math.min(Math.max(t / 2 - 4, 0), 1.5)),
                e.css({
                  "-webkit-filter": "blur(" + t + "px)",
                  filter: "blur(" + t + "px)",
                });
            })(t.canvas, l);
          (function (e) {
            var t;
            for (n.length = 0, t = 0; t < e.length; t += 1)
              e[t].alpha <= 0 && n.push(t);
            for (t = 0; t < n.length; t += 1) e.splice(n[t], 1);
          })(t.steps),
            t.steps.length && s(e, t);
        })(e, t);
      }, t.frameTime);
    }
    function o(e, t, i) {
      var n = t.context,
        s = i.index,
        o = e.sourceIsSprite ? e.images[0] : e.images[s];
      if (!(i.alpha <= 0) && o && void 0 !== o.complete && !1 !== o.complete)
        if (((n.globalAlpha = i.alpha), e.sourceIsSprite)) {
          var r = e.frameWidth * (s % e.framesX),
            a = e.frameHeight * Math.floor(s / e.framesX);
          n.drawImage(
            o,
            r,
            a,
            e.frameWidth,
            e.frameHeight,
            0,
            0,
            e.width,
            e.height
          );
        } else n.drawImage(o, 0, 0, e.width, e.height);
    }
    t.registerModule("blur", {
      onLoad: function (e, n) {
        var s = i(n),
          o = t.calculateInnerLayout(n);
        (s.canvas[0].width = n.width * n.canvasRatio),
          (s.canvas[0].height = n.height * n.canvasRatio),
          s.canvas.css(o).show(),
          s.context.scale(n.canvasRatio, n.canvasRatio),
          n.target.append(s.canvas);
      },
      onFrameChanged: function (e, t) {
        var n = i(t);
        !(function (e, t) {
          var i = Math.abs(e.frame - e.lastFrame);
          i >= e.frames / 2 && (i = e.frames - i);
          t.steps.unshift({
            index: e.lane * e.frames + e.frame,
            live: 1,
            step: t.frameTime / t.fadeTime,
            d: i,
          });
        })(t, n),
          null == n.timeout && s(t, n);
      },
    });
  })(window.jQuery || window.Zepto || window.$, window.SpriteSpin),
  (function (e, t) {
    "use strict";
    var i = Math.max,
      n = Math.min;
    function s(e, t) {
      t.dragging &&
        (r(t, t.easeScope),
        (function (e, t) {
          t.samples.push({
            time: new Date().getTime(),
            frame: e.dragFrame,
            lane: e.dragLane,
          });
          for (; t.samples.length > e.easeSamples; ) t.samples.shift();
        })(t, t.easeScope));
    }
    function o(e, t) {
      for (
        var i, n, s = t.easeScope, o = s.samples, l = 0, c = 0, d = 0, u = 0;
        u < o.length;
        u += 1
      )
        if (((n = o[u]), i)) {
          var p = n.time - i.time;
          if (p > t.easeAbortAfterMs) return (l = c = d = 0), r(t, s);
          (c += n.frame - i.frame), (l += n.lane - i.lane), (d += p), (i = n);
        } else i = n;
      (o.length = 0),
        d &&
          ((s.ms = t.easeUpdateTime),
          (s.lane = t.lane),
          (s.lanes = 0),
          (s.laneStep = (l / d) * s.ms),
          (s.frame = t.frame),
          (s.frames = 0),
          (s.frameStep = (c / d) * s.ms),
          a(t, s));
    }
    function r(e, t) {
      null != t.timeout && (window.clearTimeout(t.timeout), (t.timeout = null));
    }
    function a(e, i) {
      i.timeout = window.setTimeout(function () {
        !(function (e, i) {
          (i.lanes += i.laneStep),
            (i.frames += i.frameStep),
            (i.laneStep *= e.easeDamping),
            (i.frameStep *= e.easeDamping);
          var n = Math.floor(i.frame + i.frames),
            s = Math.floor(i.lane + i.lanes);
          t.updateFrame(e, n, s),
            e.dragging
              ? r(0, i)
              : Math.abs(i.frameStep) > 0.005 || Math.abs(i.laneStep) > 0.005
              ? a(e, i)
              : r(0, i);
        })(e, i);
      }, i.ms);
    }
    t.registerModule("ease", {
      onLoad: function (e, t) {
        (t.easeAbortAfterMs = i(t.easeAbortAfterMs || 250, 0)),
          (t.easeDamping = i(n(t.easeDamping || 0.9, 0.999), 0)),
          (t.easeSamples = i(t.easeSamples || 5, 1)),
          (t.easeUpdateTime = i(t.easeUpdateTime || t.frameTime, 16)),
          (t.easeScope = { samples: [], steps: [] });
      },
      mousemove: s,
      mouseup: o,
      mouseleave: o,
      touchmove: s,
      touchend: o,
      touchcancel: o,
    });
  })(window.jQuery || window.Zepto || window.$, window.SpriteSpin),
  (function (e, t) {
    "use strict";
    t.registerModule("gallery", {
      onLoad: function (i, n) {
        (n.galleryImages = []),
          (n.galleryOffsets = []),
          (n.gallerySpeed = 500),
          (n.galleryOpacity = 0.25),
          (n.galleryFrame = 0),
          (n.galleryStage = n.galleryStage || e("<div/>")),
          n.stage.prepend(n.galleryStage),
          n.galleryStage.empty();
        var s,
          o = 0;
        for (s = 0; s < n.source.length; s += 1) {
          var r = e("<img src='" + n.source[s] + "'/>");
          n.galleryStage.append(r), n.galleryImages.push(r);
          var a = n.height / r[0].height;
          n.galleryOffsets.push(-o + (n.width - r[0].width * a) / 2),
            (o += n.width),
            r.css({
              "max-width": "initial",
              opacity: n.galleryOpacity,
              width: n.width,
              height: n.height,
            });
        }
        var l = t.calculateInnerLayout(n);
        n.galleryStage.css(l).css({ width: o }),
          n.galleryImages[n.galleryFrame].animate(
            { opacity: 1 },
            n.gallerySpeed
          );
      },
      onDraw: function (e, t) {
        t.galleryFrame === t.frame || t.dragging
          ? (t.dragging || t.dX != t.gallerydX) &&
            ((t.galleryDX = t.DX),
            (t.galleryDDX = t.DDX),
            t.galleryStage
              .stop(!0, !0)
              .animate({ left: t.galleryOffsets[t.frame] + t.dX }))
          : (t.galleryStage.stop(!0, !1),
            t.galleryStage.animate(
              { left: t.galleryOffsets[t.frame] },
              t.gallerySpeed
            ),
            t.galleryImages[t.galleryFrame].animate(
              { opacity: t.galleryOpacity },
              t.gallerySpeed
            ),
            (t.galleryFrame = t.frame),
            t.galleryImages[t.galleryFrame].animate(
              { opacity: 1 },
              t.gallerySpeed
            ));
      },
    });
  })(window.jQuery || window.Zepto || window.$, window.SpriteSpin),
  (function (e, t) {
    "use strict";
    var i = Math.floor;
    t.registerModule("panorama", {
      onLoad: function (e, t) {
        t.stage.empty().show(),
          (t.frames = t.sourceWidth),
          "horizontal" === t.orientation
            ? ((t.scale = t.height / t.sourceHeight),
              (t.frames = t.sourceWidth))
            : ((t.scale = t.width / t.sourceWidth),
              (t.frames = t.sourceHeight));
        var n = [
          i(t.sourceWidth * t.scale),
          "px ",
          i(t.sourceHeight * t.scale),
          "px",
        ].join("");
        t.stage.css({
          "max-width": "initial",
          "background-image": ["url('", t.source[0], "')"].join(""),
          "background-repeat": "repeat-both",
          "-webkit-background-size": n,
          "-moz-background-size": n,
          "-o-background-size": n,
          "background-size": n,
        });
      },
      onDraw: function (e, t) {
        var n = 0,
          s = 0;
        "horizontal" === t.orientation
          ? (n = -i((t.frame % t.frames) * t.scale))
          : (s = -i((t.frame % t.frames) * t.scale)),
          t.stage.css({ "background-position": [n, "px ", s, "px"].join("") });
      },
    });
  })(window.jQuery || window.Zepto || window.$, window.SpriteSpin),
  (function (e, t) {
    "use strict";
    function i(e, i) {
      var n, s, o, r;
      e.preventDefault(),
        (i.dragging = !1),
        !e.touches && e.originalEvent && (e.touches = e.originalEvent.touches),
        e.touches && e.touches.length
          ? ((n = e.touches[0].clientX || 0), (s = e.touches[0].clientY || 0))
          : ((n = e.clientX || 0), (s = e.clientY || 0)),
        (n /= i.width),
        (s /= i.height),
        null == i.zoomPX && ((i.zoomPX = n), (i.zoomPY = s)),
        null == i.zoomX && ((i.zoomX = n), (i.zoomY = s)),
        (o = n - i.zoomPX),
        (r = s - i.zoomPY),
        (i.zoomPX = n),
        (i.zoomPY = s),
        e.type.match(/touch/) && ((o = -o), (r = -r)),
        (i.zoomX = t.clamp(i.zoomX + o, 0, 1)),
        (i.zoomY = t.clamp(i.zoomY + r, 0, 1)),
        t.updateFrame(i);
    }
    function n(t, n) {
      t.preventDefault();
      var s = new Date().getTime();
      n.zoomClickTime
        ? s - n.zoomClickTime > (n.zoomDoubleClickTime || 500)
          ? (n.zoomClickTime = s)
          : ((n.zoomClickTime = 0),
            e(this).spritespin("api").toggleZoom() && i(t, n))
        : (n.zoomClickTime = s);
    }
    function s(e, t) {
      t.zoomStage.is(":visible") && i(e, t);
    }
    t.registerModule("zoom", {
      mousedown: n,
      touchstart: n,
      mousemove: s,
      touchmove: s,
      onInit: function (t, i) {
        i.zoomStage ||
          (i.zoomStage = e("<div class='spritezoom-stage'></div>")
            .css({
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
            })
            .appendTo(i.target)
            .hide());
      },
      onDestroy: function (e, t) {
        t.zoomStage && t.zoomStage.remove();
      },
      onDraw: function (t, i) {
        var n = i.lane * i.frames + i.frame,
          s = (i.zoomSource || i.source)[n];
        if (s) {
          var o = i.zoomX,
            r = i.zoomY;
          (null != o && null != r) ||
            ((o = i.zoomX = 0.5), (r = i.zoomY = 0.5)),
            (o = (100 * o) | 0),
            (r = (100 * r) | 0),
            i.zoomStage.css({
              "background-repeat": "no-repeat",
              "background-image": ["url('", s, "')"].join(""),
              "background-position": [o, "% ", r, "%"].join(""),
            });
        } else
          e.error(
            "'zoomSource' option is missing or it contains unsufficient number of frames."
          );
      },
    }),
      t.extendApi({
        toggleZoom: function () {
          var t = this.data;
          return t.zoomStage
            ? t.zoomStage.is(":visible")
              ? (t.zoomStage.fadeOut(), t.stage.fadeIn(), !1)
              : (t.zoomStage.fadeIn(), t.stage.fadeOut(), !0)
            : (e.error("zoom module is not initialized or is not available."),
              !1);
        },
      });
  })(window.jQuery || window.Zepto || window.$, window.SpriteSpin),
  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    /OS 11_0|OS 11_1|OS 11_2/.test(navigator.userAgent) &&
    document.body.classList.add("iosBugFixCaret"),
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
    document.body.classList.add("is-safari");
var preloaderSpinner =
  '<div class="preloader-spinner"><svg width="30" height="30"><use xlink:href="#preloader-circle"></use></svg></div>';
function getBanners() {
  if ($("#products-list-banner, #products-footer-banner").length) {
    var e = {
      store:
        $("#products-list").length && $("#products-list").data("store")
          ? $("#products-list").data("store")
          : "om",
    };
    void 0 !== iam.id && iam.id && (e.userId = iam.id),
      void 0 !== iam.plan && iam.plan && (e.plan = iam.plan),
      $.ajax({
        type: "POST",
        url: "/showcase-ajax/banners",
        cache: !1,
        dataType: "json",
        data: e,
        success: function (e) {
          $("#products-list-banner").length &&
            (void 0 !== e["products-list"] && e["products-list"]
              ? $("#products-list-banner").replaceWith(e["products-list"])
              : $("#products-list-banner").remove()),
            $("#products-footer-banner").length &&
              (void 0 !== e["products-footer"] && e["products-footer"]
                ? $("#products-footer-banner").replaceWith(e["products-footer"])
                : $("#products-footer-banner").slideUp(500).remove());
        },
      });
  }
}
function updateProductIam() {
  if ($("#product").length && "undefined" != typeof iam && isUserLogged) {
    if (
      ($(".login-window").removeClass("login-window"),
      $("#comments-user-avatar").length)
    ) {
      var e = $("<img />").attr("src", iam.ava).attr("alt", iam.display_name);
      $("#comments-user-avatar").html(e);
    }
    if (void 0 !== iam.is_affiliate && iam.is_affiliate) {
      var t = $("#product-share"),
        i = t.data("url") + "?yi=" + iam.id;
      t.data("url", i),
        $("#socials-become").remove(),
        $("#socials-referral")
          .attr("href", i)
          .data("clipboard-text", i)
          .removeClass("d-none"),
        $("#product-banner-affiliate").remove();
    }
    iam.credits &&
      iam.credits > 0 &&
      ($(".round-group__item_standard-license").addClass("is-free-quota"),
      $("#product").find('input[name="product"]:checked').trigger("change"));
  }
}
function trackSendComment(e) {
  e.length > 10 &&
    void 0 !== iam.id &&
    iam.id &&
    3563 !== iam.id &&
    dataLayer.push({
      event: "SendComment",
      user_id: iam.id,
      comment_link: location.href,
      comment_text: e,
    });
}
function trackEmptyCart() {
  void 0 !== iam.id &&
    iam.id &&
    window.dataLayer.push({ event: "AbandonedCartFalse", user_id: iam.id });
}
function trackAddToCart() {
  void 0 !== iam.id &&
    iam.id &&
    window.dataLayer.push({ event: "AbandonedCartTrue", user_id: iam.id });
}
function trackGaProductDetails(e) {
  if ("function" == typeof gtag) {
    var t = $("#product"),
      i = (e = e.length
        ? e
        : t.find('input[name="product"]:checked').length
        ? t.find('input[name="product"]:checked')
        : t.find('input[name="product"]').first()).closest(
        ".round-group__item"
      ),
      n = e.val() ? JSON.parse(e.val()) : [],
      s = {
        item_id: void 0 !== n.product_id ? n.product_id : "",
        item_name: t.find(".product__top .h1").length
          ? t.find(".product__top .h1").text()
          : "Undefined product",
        item_variant:
          "undefined" != typeof forceVariantId
            ? forceVariantId
            : void 0 !== n.variation_id
            ? n.variation_id
            : "",
        price:
          i.find(".product__licenses-price").length &&
          i.find(".product__licenses-price").data("value")
            ? parseFloat(i.find(".product__licenses-price").data("value"))
            : 0,
        item_brand: "Undefined author",
      },
      o = t.find("#product-authors .card__info:visible");
    o.length &&
      ((s.item_brand = []),
      o.each(function () {
        $(this).find(".product-author-name").length &&
          s.item_brand.push($(this).find(".product-author-name").text());
      }),
      (s.item_brand = s.item_brand.join("/")));
    var r = t.find(".product__specs .table:not(.d-none)");
    if (r.length) {
      var a = r.find(".categories .product__specs-value a");
      a.length &&
        a.each(function (e) {
          s["item_category" + (0 == e ? "" : e)] = $(this).text().trim();
        });
    }
    gtag("event", "view_item", { currency: "USD", value: s.price, items: [s] });
  }
}
function trackGaProductsList(e) {
  if ("function" == typeof gtag && e.length) {
    var t = [],
      i = e.parent(),
      n = {
        products_list: "Products list",
        related_products: "Related products",
        deposits: "Deposits",
        packs: "On-demand packs",
        home_packs: "On-demand packs at Home page",
        plans: "Yellow tickets",
      },
      s = "products_list";
    (s =
      "related-products-list" == i.attr("id")
        ? "related_products"
        : "deposits-tiles" == i.attr("id")
        ? "deposits"
        : e.closest("#packs").length
        ? "packs"
        : e.closest("#home-packs").length
        ? "home_packs"
        : e.closest("#plans").length
        ? "plans"
        : "products_list"),
      e.each(function () {
        var e = {
          item_list_id: s,
          item_list_name: n[s],
          index: $(this).index(),
          item_brand: "",
        };
        if (
          "deposits" == s ||
          "packs" == s ||
          "home_packs" == s ||
          "plans" == s
        ) {
          var i = $(this).data("info");
          (e.item_id = i.id),
            (e.item_name = i.name),
            (e.price = parseFloat(i.price)),
            (e.item_brand = i.brand),
            (e.item_category = i.category);
        } else {
          (e.item_id = $(this).data("sku")),
            (e.item_name = $(this).find(".card__title").text()),
            (e.price = parseFloat($(this).data("price")));
          var o = $(this).data("category")
            ? $(this).data("category").split("/")
            : [];
          o.length &&
            $.each(o, function (t, i) {
              e["item_category" + (0 == t ? "" : t)] = i.trim();
            });
          var r = $(this).find(".product-author-name");
          r.length &&
            ((e.item_brand = []),
            r.each(function () {
              e.item_brand.push($(this).text().trim());
            }),
            (e.item_brand = e.item_brand.join("/")));
        }
        t.push(e);
      }),
      gtag("event", "view_item_list", {
        item_list_id: s,
        item_list_name: n[s],
        items: t,
      });
  }
}
$.tooltipster.setDefaults({
  trigger: "click",
  side: "bottom",
  trackerInterval: 25,
  animationDuration: 200,
  updateAnimation: null,
  delay: 100,
  debug: !1,
  distance: 14,
  maxWidth: 280,
}),
  ($.fn.initTooltips = function () {
    return (
      $(this)
        .find(".tooltip:not(.tooltipstered)")
        .tooltipster({
          functionInit: function (e, t) {
            var i = $(t.origin);
            i.data("options") &&
              $.each(i.data("options"), function (t, i) {
                "template" === t
                  ? (e.option("contentAsHTML", !0), e.content($(i).html()))
                  : e.option(t, i);
              });
          },
        }),
      this
    );
  }),
  $(function () {
    $("body").initTooltips(),
      $("#header-cart")
        .on("click", function (e) {
          $(this).hasClass("is-empty") && e.preventDefault();
        })
        .tooltipster({
          content: $("#cart-tooltip"),
          interactive: !0,
          functionReady: function (e, t) {
            $(e.elementTooltip()).on("click", ".tooltip-close", function () {
              e.close();
            });
          },
          functionInit: function (e, t) {
            $(t.origin).hasClass("is-empty") || e.disable();
          },
        }),
      $.ajax({
        type: "GET",
        url: "/iam.php",
        cache: !1,
        async: !0,
        dataType: "json",
        error: function (e) {},
        success: function (e) {
          if (
            ((window.iam = e),
            (isUserLogged = void 0 !== iam.id && !!iam.id),
            void 0 !== iam.cart &&
              ($("#header-cart")
                .toggleClass("is-empty", !iam.cart)
                .tooltipster(iam.cart ? "disable" : "enable"),
              $("#header-cart-count").text(iam.cart)),
            void 0 !== iam.notice &&
              $("#header-bell").toggleClass("has-unread", iam.notice > 0),
            void 0 !== iam.usertype &&
              void 0 !== iam.userstatus &&
              $("body")
                .data("usertype", iam.usertype)
                .data("userstatus", iam.userstatus),
            isUserLogged)
          ) {
            if (
              ($(".login-window").removeClass("login-window"),
              $("#user-likes-button").attr("href", iam.author_url + "/likes"),
              $("#user-name").attr("href", iam.author_url),
              iam.is_author
                ? $("#header-offer-pill-yt")
                    .attr("href", "/yin/products/form")
                    .attr("id", "header-offer-pill-author")
                    .text("Upload Items")
                : $.isEmptyObject(iam.plan) ||
                  $("#header-offer-pill-yt")
                    .attr("href", "/make-a-deposit")
                    .attr("id", "header-offer-pill-deposit")
                    .text("Free Bonus Credits"),
              !$("#header-avatar").hasClass("is-loaded"))
            ) {
              var t = $("<img />")
                .attr("src", iam.ava)
                .attr("alt", iam.display_name);
              $("#header-avatar").html(t).addClass("is-loaded");
            }
            if (
              ($("#user-balance").html("$" + iam.balance),
              (iam.credits = 0),
              $("#user-packs").html(""),
              $.isEmptyObject(iam.plan) ||
                (void 0 !== iam.plan.free_items &&
                  iam.plan.free_items &&
                  ((iam.credits += parseInt(iam.plan.free_items, 10)),
                  $("#user-packs").append(
                    '<div class="header-user__packs"><b>Free quota:</b> ' +
                      iam.plan.free_items +
                      "</div>"
                  )),
                $(".header-banner_vd2024").length &&
                  $(".header-banner_vd2024").attr("href", "/make-a-deposit")),
              void 0 !== iam.on_demand &&
                iam.on_demand &&
                ((iam.credits += parseInt(iam.on_demand, 10)),
                $("#user-packs").append(
                  '<div class="header-user__packs"><b>On-demand:</b> ' +
                    iam.on_demand +
                    "</div>"
                )),
              $("#user-menu-items").length &&
                !$("#user-menu-items").hasClass("is-loaded"))
            ) {
              var i = "";
              $.each(iam.menu, function (e, t) {
                i +=
                  '<a class="header-user__item" href="' +
                  t.url +
                  '">' +
                  t.icon_svg +
                  "<span>" +
                  t.name +
                  "</span></a>";
              }),
                $("#user-menu-items").append(i).addClass("is-loaded");
            }
          }
          "function" == typeof updateProductIam && updateProductIam(),
            "function" == typeof getBanners && getBanners();
        },
      });
  }),
  $(function () {
    (-1 !== location.pathname.indexOf("/checkout/order-received") &&
      trackEmptyCart(),
    $(
      "#deposits .pill, .packs__tiles .pill, .plans__button, #tickets-button"
    ).on("click", function (e) {
      $(this).hasClass("login-window") || trackAddToCart();
    }),
    $(
      ".products > li.product-impressions, .product_om #related-products-list .product-impressions"
    ).length) &&
      trackGaProductsList(
        $(".product_om #related-products-list .product-impressions").length
          ? $(".product_om #related-products-list .product-impressions")
          : $(".products li.product-impressions")
      );
    $(
      "#deposits-tiles .product-impressions, #packs .product-impressions, #home-packs:not(.d-none) .product-impressions"
    ).length &&
      trackGaProductsList(
        $(
          "#deposits-tiles .product-impressions, #packs .product-impressions, #home-packs:not(.d-none) .product-impressions"
        )
      ),
      $("#plans .tile__select-variant input").length &&
        trackGaProductsList(
          $("#plans .tile__select-variant.is-active input[checked]")
        );
  });
var isNoticesEndReached = !1;
function isChatDataValid() {
  return (
    "undefined" != typeof chatdata &&
    void 0 !== chatdata.user_id &&
    parseInt(chatdata.user_id)
  );
}
function open_chat_dialog(e, t) {
  if (
    ((e = e || window.event) && (e.stopPropagation(), e.preventDefault()),
    $(".header_dashboard").length)
  )
    t && $("#my-conversation-" + t).length
      ? ($("#quickview").removeClass("open"),
        $("#chat").removeClass("push-parrallax"),
        $(".dialogs-list .navbar").addClass("hidden"),
        $(".dialogs-list .chat-inner").addClass("hidden"),
        $("#quickview").addClass("open"),
        $("#chat").addClass("push-parrallax"),
        show_dialog(t))
      : $("#quickview").addClass("open");
  else {
    var i = t ? "/" + t : "";
    location.href = "/my-account/edit-account#message" + i;
  }
}
function read_notice(e) {
  return (
    !!isChatDataValid() &&
    ($('div[data-id_notice="' + e + '"]').removeClass("is-unread"),
    $("div[data-id_notice]").length ==
      $("#notifications div[data-template]").length &&
      $("#notifications-read").text("No unread notifications"),
    $.ajax({
      type: "POST",
      url: "/wp-admin/admin-ajax.php",
      data: { action: "wbb_notice_read", nonce: chatdata.nonce, notice_id: e },
      success: function (e) {
        if (e) {
          var t = parseInt(e.data.unread);
          $("#header-bell").toggleClass("has-unread", t > 0);
        }
      },
    }),
    this)
  );
}
function replace_in_template(e, t, i, n) {
  var s = Math.floor(Date.now() / 1e3);
  t.time > 0 && void 0 !== t.time && (s = t.time);
  var o = t.text.replace(/&#39;/, "'");
  return (
    (o = replace_mnem(o)),
    (e = (e = (e = (e = (e = (e = e.replace(
      /{id_notice}/g,
      t.id_notice
    )).replace(/{link}/g, t.link)).replace(/{text}/g, o)).replace(
      /{badge}/g,
      i
    )).replace(/{time}/g, s)).replace(/{from}/g, n))
  );
}
function read_time_in_notice() {
  $("div[data-time]").each(function () {
    if ("{time}" != $(this).attr("data-time")) {
      var e = Math.round(Date.now() / 1e3),
        t = Math.round((e - $(this).attr("data-time")) / 60);
      if ((t < 1 && (t = 1), t < 60)) $(this).text(t + " mins ago");
      else {
        var i = Math.round(t / 60);
        if (i < 24) $(this).text(i + " hours ago");
        else {
          var n = Math.round(i / 24);
          n >= 2 ? $(this).text(n + " days ago") : $(this).text("yesterday");
        }
      }
    }
  });
}
function add_notice_in_center(e, t, i) {
  if (((body_data = JSON.parse(e.body)), void 0 === body_data.badge)) {
    var n = Math.floor(
      $(
        "div[data-id_notice='" +
          body_data.id_notice +
          "']:first .notification__badge"
      ).text()
    );
    n || (n = 0);
    var s =
      ' <span class="notification__badge' +
      ((++n).count < 2 ? " hidden" : "") +
      '">' +
      notification.count +
      "</span>";
  } else s = body_data.badge;
  $("div[data-id_notice='" + body_data.id_notice + "']").remove();
  var o = "hidden";
  1 == i && (o += " is-unread");
  var r = $('div[data-template="' + e.action + '"]')
    .clone()
    .removeAttr("data-template")
    .removeClass(o)
    .prop("outerHTML");
  (r = replace_in_template(r, body_data, s, e.from)),
    t ? $("#notifications").append(r) : $("#notifications").prepend(r),
    $("#notifications").find(".is-unread").length &&
      ($("#header-bell").addClass("has-unread"),
      $("#notifications-read").text("Mark all as Read"));
}
function replace_mnem(e) {
  return (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(
    /&#34;/,
    '"'
  )).replace(/&#034;/, '"')).replace(/&#039;/, "'")).replace(
    /&amp;#039;/,
    "'"
  )).replace(/&#39;/, "'")).replace(/\\&#034;/, '"')).replace(
    /\&#034;/,
    '"'
  )).replace(/\\&#039;/, "'")).replace(/\&#039;/, "'")).replace(
    /&#034;/,
    '"'
  )).replace(/\\/, ""));
}
function get_notifications() {
  isChatDataValid() &&
    !window.is_notices_loading &&
    ((isNoticesEndReached = !1),
    $.ajax({
      type: "POST",
      url: "/notice_get.php",
      beforeSend: function () {
        $("#notifications").append(preloaderSpinner),
          (window.is_notices_loading = !0);
      },
      data: {
        action: "get_notices",
        uid: chatdata.user_id,
        page: window.current_notice_page,
        nonce: chatdata.nonce_chat,
      },
    }).done(function (e) {
      (isNoticesEndReached = !1),
        $("#notifications").find(".preloader-spinner").remove(),
        render_notices(e);
    }));
}
function render_notices(e) {
  if (isChatDataValid() && e.success && e.data.notices.length > 0) {
    var t = e.data.notices;
    $.each(t, function (e, t) {
      add_notice_in_center(
        {
          from: t.from,
          action: t.type.trim(),
          body: JSON.stringify({
            id_notice: t.id,
            link: t.link,
            text: t.text.trim(),
            time: t.time,
            badge:
              ' <span class="notification__badge' +
              (t.count < 2 ? " hidden" : "") +
              '">' +
              t.count +
              "</span>",
          }),
        },
        !0,
        t.is_read
      ),
        (window.last_element_id = t.id);
    }),
      (window.is_notices_loading = !1),
      (window.current_notice_page = parseInt(e.data.page)),
      window.current_notice_page++,
      read_time_in_notice();
  }
}
$(function () {
  var e = $("#header-bell");
  function t(t) {
    t = void 0 !== t && t;
    var i = !(e.hasClass("is-opened") || t);
    e.toggleClass("is-opened", i),
      i &&
        isChatDataValid() &&
        (void 0 === window.current_notice_page ||
          1 == window.current_notice_page) &&
        get_notifications();
  }
  "undefined" != typeof get_chatdata && (chatdata = get_chatdata()),
    $("#notifications").on(
      "scroll",
      $.throttle(200, function () {
        !isNoticesEndReached &&
          $(this).scrollTop() + $(this).innerHeight() >=
            $(this)[0].scrollHeight - 5 &&
          ((isNoticesEndReached = !0), get_notifications());
      })
    ),
    setInterval(read_time_in_notice, 6e4),
    $("#notifications-read").on("click", function (e) {
      if ((e.preventDefault(), e.stopPropagation(), !isChatDataValid()))
        return !1;
      $("#header-bell").removeClass("has-unread"),
        $("div[data-id_notice].is-unread:not(.hidden)").each(function () {
          $(this).removeClass("is-unread");
        }),
        $.ajax({
          type: "POST",
          url: "/wp-admin/admin-ajax.php",
          data: { action: "wbb_all_notice_read", nonce: chatdata.nonce },
          success: function (e) {
            $("#notifications-read").text("No unread notifications");
          },
        });
    }),
    e.on("click", function (e) {
      t();
    });
  var i = $("#header-browse");
  function n(e) {
    (e = void 0 !== e && e),
      i.toggleClass("is-opened", !(i.hasClass("is-opened") || e));
  }
  i.on("click", function (e) {
    n();
  });
  var s = $("#header-burger");
  function o(e) {
    (e = void 0 !== e && e),
      s.toggleClass("is-opened", !(s.hasClass("is-opened") || e)),
      (void 0 === $.cookie("headerIconAnimated") ||
        1 != $.cookie("headerIconAnimated") ||
        s.hasClass("is-animated")) &&
        ($.cookie("headerIconAnimated", 1, { expires: 365, path: "/" }),
        s.removeClass("is-animated"));
  }
  s.on("click", function (e) {
    o();
  }),
    (void 0 !== $.cookie("headerIconAnimated") &&
      1 == parseInt($.cookie("headerIconAnimated"))) ||
      setTimeout(function () {
        s.addClass("is-animated");
      }, 1e3),
    s.filter(".is-animated").hover(function () {
      s.removeClass("is-animated");
    });
  var r = $("#header-avatar");
  function a(e) {
    (e = void 0 !== e && e),
      r.toggleClass("is-opened", !(r.hasClass("is-opened") || e));
  }
  r.on("click", function (e) {
    a();
  }),
    $(document).on("click touchend", function (e) {
      $(e.target).closest("#header-markets").length || o(!0),
        $(e.target).closest("#header-menu").length || n(!0),
        $(e.target).closest("#header-user").length || a(!0),
        $(e.target).closest("#header-notifications").length || t(!0);
    });
}),
  ($.fn.isInViewport = function () {
    var e = $(this).offset().top,
      t = e + $(this).outerHeight(),
      i = $(window).scrollTop(),
      n = i + $(window).height();
    return t > i && e < n;
  });
var isUserLogged = !!document.getElementById("header-avatar"),
  ajaxTiming = 0,
  clickReferrerUrl = !1,
  initialTitle = document.title,
  initialUrl = location.href;
$(window).on("load", function () {
  setTimeout(function () {
    window.cookieconsent.initialise({
      compliance: {
        info: '<div class="d-flex cc-compliance">{{dismiss}}</div>',
      },
      elements: {
        dismiss:
          '<div aria-label="dismiss cookie message" tabindex="0" class="pill pill_black pill_arrow pill_padding cc-btn cc-dismiss">{{dismiss}}<svg width="20" height="20"><use xlink:href="#arrow-right"></use></svg></div>',
      },
      layout: "basic-close",
      law: { regionalLaw: !1 },
      location: !1,
      position: "bottom-left",
      content: {
        header: "Cookies used on the website!",
        message:
          "Our website uses cookies to make your browsing experience better. By using this website you agree to our use of cookies.",
        dismiss: "Got it!",
        allow: "Allow cookies",
        deny: "Decline",
        link: "Read our Privacy Policy",
        href: "/privacy-policy",
        close: "",
        policy: "Cookie Policy",
        target: "_blank",
      },
    });
  }, 5e3);
}),
  $(function () {
    if ($(".show-zd").length) {
      var e = document.createElement("script");
      (e.type = "text/javascript"),
        (e.id = "ze-snippet"),
        (e.async = !0),
        (e.src =
          "https://static.zdassets.com/ekr/snippet.js?key=6af5769c-5a63-4fd1-8627-57bdc0cd964a"),
        document.body.appendChild(e);
    }
    function t(e, t) {
      return (
        (t = t || ""),
        e && (e.preventDefault(), e.stopPropagation()),
        $.ajax({
          type: "POST",
          url: "/wp-admin/admin-ajax.php",
          cache: !1,
          dataType: "json",
          data: { action: "passport_login", url: t },
          error: function (e, t, i) {
            location.reload();
          },
          success: function (e, t, i) {
            void 0 !== e.data && void 0 !== e.data.url && e.data.url.length
              ? (location.href = e.data.url)
              : location.reload();
          },
        }),
        !1
      );
    }
    function i(e) {
      return e.id
        ? $(
            '<span><div class="select2-flag select2-flag_' +
              e.id.toLowerCase() +
              '"></div>' +
              e.text +
              "</span>"
          )
        : e.text;
    }
    if (
      ($(document).on(
        "click",
        '.js-link-scroll[href*="#"]:not([href$="#"])',
        function (e) {
          e.preventDefault();
          var t,
            i,
            n = this.hash,
            s = $(n);
          s.length &&
            ($.magnificPopup.instance.isOpen
              ? ((t = $("#product-wrapper").length
                  ? $("#product-wrapper")
                  : $(".mfp-wrap")),
                (i = s.position().top + t.scrollTop() - 10))
              : ((t = $("html, body")),
                (i =
                  s.offset().top -
                  $("#masthead").outerHeight() -
                  $("#headerline").outerHeight() -
                  10)),
            t.stop().animate(
              { scrollTop: i },
              {
                duration: 600,
                complete: function () {
                  window.history.replaceState(
                    "",
                    document.title,
                    location.href.replace(location.hash, "") + n
                  );
                },
              }
            ));
        }
      ),
      $(document).on(
        "click",
        '.login-window, a[href="#login-box"], .register-window',
        function (e, i) {
          return t(e, $(this).attr("href") ? $(this).attr("href") : "");
        }
      ),
      ("#reset_pass" !== location.hash && "#login_user" !== location.hash) ||
        t(),
      $.extend(!0, $.fn.select2.defaults.defaults, {
        minimumResultsForSearch: -1,
        dropdownAutoWidth: !0,
        width: "100%",
      }),
      $(
        "select:not(.country_select):not(.state_select):not(.languages-select2)"
      ).select2(),
      $("select.languages-select2").select2({
        templateResult: i,
        templateSelection: i,
      }),
      $(".academy-language-select").on("change", function () {
        $.cookie("yi_academy_lang", $(this).val(), { expires: 365, path: "/" }),
          location.reload();
      }),
      $(document).on("click", "[data-clipboard-text]", function (e) {
        var t = $(this),
          i = t.data("clipboard-text");
        if (i.length) {
          e.preventDefault();
          try {
            navigator.clipboard.writeText(i);
            var n = t.find(".js-clipboard-content").length
                ? t.find(".js-clipboard-content")
                : t,
              s = n.html();
            n.html("Copied!"),
              setTimeout(function () {
                n.html(s);
              }, 2e3);
          } catch (e) {}
        }
      }),
      $.extend(!0, $.magnificPopup.defaults, {
        tLoading: preloaderSpinner,
        fixedContentPos: !0,
        fixedBgPos: !0,
        closeBtnInside: !0,
        mainClass: "mfp-fade",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close"><svg width="24" height="24"><use xlink:href="#icon-times"></use></svg></button>',
        removalDelay: 200,
      }),
      $(document).on("click", ".popup__close", function (e) {
        $.magnificPopup.close();
      }),
      $(".has-yt-video").length &&
        "function" == typeof $.fn.fitVids &&
        $(".has-yt-video").fitVids(),
      $(".typical-sticky-nav").length)
    ) {
      var n,
        s,
        o =
          window.innerWidth < 1025
            ? 0
            : $(".header").height() + $(".header-banner").height(),
        r = $(".typical-sticky-nav__link"),
        a = $(".typical-sticky-nav__link:not(.is-logout)"),
        l = $(".has-sticky-nav section").first();
      r.length &&
        ($(window).scroll(
          $.throttle(200, function () {
            (n = window.scrollY),
              a.each(function () {
                (s = $(this.hash)),
                  (sectionOffset = s.offset().top),
                  (sectionHeight = s.outerHeight(!0)),
                  Math.floor(sectionOffset - o) <= n &&
                  Math.floor(sectionOffset - o + sectionHeight) > n
                    ? $(this).addClass("is-current")
                    : $(this).removeClass("is-current");
              }),
              n <= Math.floor(l.offset().top - o) &&
                r.first().addClass("is-current");
          })
        ),
        r.on("click", function (e) {
          if ((e.preventDefault(), !$(this).hasClass("is-current")))
            return (
              $("html, body")
                .stop()
                .animate(
                  { scrollTop: Math.ceil($(this.hash).offset().top - o) },
                  800
                ),
              !1
            );
        }));
    }
    $("div.filters__select").on("click", function (e) {
      if ($(this).hasClass("is-disabled")) return !1;
      "A" !== $(e.target).prop("tagName") &&
        ($(".filters__select.is-opened").not(this).removeClass("is-opened"),
        $(this).toggleClass("is-opened"));
    }),
      $(document).on("click touchend", function (e) {
        0 === $(e.target).closest($(".filters__select")).length &&
          $(".filters__select").removeClass("is-opened");
      }),
      $(document).on("change", ".filters-select__radio", function () {
        var e = $(this),
          t = $(this).attr("id"),
          i = e.closest(".filters__select"),
          n = $("#" + t + "-label")
            .html()
            .replace(/(<span>.*?<\/span>)/is, ""),
          s = i.find(".filters-select__selected"),
          o = i.data("postfix");
        o && (n += o), s.html(n), i.removeClass("is-opened");
      }),
      $(".profile-bio__more").on("click", function () {
        var e = $(this),
          t = e.parent(),
          i = !t.hasClass("is-expanded");
        e.text(i ? "Show less" : "Show more"), t.toggleClass("is-expanded");
      });
    var c = function (e) {
        return $.Deferred(function (t) {
          var i = new Image();
          (i.onload = function () {
            t.resolve(i);
          }),
            (i.onerror = function () {
              t.reject();
            }),
            (i.src = e);
        }).promise();
      },
      d = function () {
        var e = $(
          ".card__thumb:not(.is-loaded), .card__avatar-img:not(.is-loaded)"
        );
        e.length &&
          e.each(function (e, t) {
            if ($(t).isInViewport()) {
              var i, n;
              if (
                ($(t).data("tn1") && (i = $(t).data("tn1")),
                $(t).data("tn2") &&
                  (i ? (n = $(t).data("tn2")) : (i = $(t).data("tn2"))),
                i)
              ) {
                var s = $(t).children(".card-thumb__img"),
                  o = $(t).children("svg");
                $.when(c(i)).done(function (e) {
                  $(t).addClass("is-loaded"),
                    s.attr("src", e.src),
                    o.css("opacity", 0),
                    setTimeout(function () {
                      o.remove();
                    }, 250);
                });
              }
              n &&
                $.when(c(n)).done(function (e) {
                  $(t)
                    .children(".card__background")
                    .css({ "background-image": 'url("' + e.src + '")' });
                }),
                $(t).data("src") &&
                  $.when(c($(t).data("src"))).done(function (e) {
                    $(t).attr("src", e.src).addClass("is-loaded");
                  });
            }
          });
      };
    if (
      (d(),
      $(document).on(
        "resize scroll",
        $.throttle(250, function () {
          d();
        })
      ),
      $(".yi-set-favorite").on("click", function (e) {
        e.preventDefault(), e.stopPropagation();
        var t = $(this),
          i = parseInt(
            t.closest("li").data("id").toString().replace("i360-", "")
          ),
          n = !$(this).hasClass("is-favorite");
        if ($(this).hasClass("cs-featured"))
          $.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            cache: !1,
            dataType: "json",
            data: { action: "cs_set_featured", pid: i },
            success: function (e) {
              e.success && t.toggleClass("is-favorite");
            },
          });
        else {
          var s = "";
          (s = $(this).hasClass("yi-fonts")
            ? "creative-fonts"
            : $(this).hasClass("png-featured")
            ? "png"
            : "set"),
            $.ajax({
              type: "POST",
              url: "/wp-admin/admin-ajax.php",
              cache: !1,
              dataType: "json",
              data: {
                action: "yi_sets_featured",
                sid: i,
                featured: n,
                what: s,
              },
              success: function (e) {
                e.success && t.toggleClass("is-favorite");
              },
            });
        }
      }),
      $("#collection-cart").length)
    ) {
      var u = $("#collection-cart"),
        p = $("#collection-cart-add"),
        h = $("#collection-cart-remove");
      function f(e) {
        e
          ? $(".collection__pill")
              .addClass("has-preloader")
              .append(preloaderSpinner)
          : $(".collection__pill")
              .removeClass("has-preloader")
              .find(".preloader-spinner")
              .remove();
      }
      function m(e) {
        (e = e || "add"), f(!0);
        var t = {
          action: "add" == e ? u.data("action-add") : u.data("action-remove"),
          collection: u.data("collection"),
        };
        $.ajax({
          type: "POST",
          url: "/wp-admin/admin-ajax.php",
          cache: !1,
          dataType: "json",
          data: t,
          error: function () {
            f(!1);
          },
          success: function (t) {
            f(!1);
            var i = 0,
              n = 0,
              s = 0;
            "add" == e
              ? (p
                  .attr("href", "/cart")
                  .addClass("is-active")
                  .html("<span>View cart</span>"),
                h.removeClass("d-none"),
                void 0 !== t.data &&
                  ($.each(t.data, function (e, t) {
                    i += parseFloat(t);
                  }),
                  (n = Object.keys(t.data).length)),
                void 0 !== t.total_price && (i = t.total_price),
                void 0 !== t.total_count && (n = t.total_count),
                (s = t.total))
              : (p
                  .attr("href", "#")
                  .removeClass("is-active")
                  .html("<span>Add to cart</span>"),
                h.addClass("d-none"),
                void 0 !== t.data && void 0 !== t.data.total
                  ? (s = t.data.total)
                  : void 0 !== t.total && (s = t.total)),
              $("#header-cart")
                .toggleClass("is-empty", !s)
                .tooltipster(s ? "disable" : "enable"),
              $("#header-cart-count").text(s),
              $("#collection-cart-count").text(n),
              $("#collection-price")
                .text("$" + i.toFixed(2))
                .toggleClass("d-none", 0 === i);
          },
        });
      }
      p.on("click", function (e) {
        $(this).hasClass("has-preloader") && e.preventDefault(),
          $(this).hasClass("is-active") || m("add");
      }),
        h.on("click", function (e) {
          return (
            $(this).hasClass("has-preloader") ||
              (e.preventDefault(), m("remove")),
            !1
          );
        });
    }
    if ($("#search-form").length) {
      var g = $("#search-form"),
        v = $("#search-box"),
        _ = $("#search-form-input"),
        y = $("#search-clear"),
        w = !!_.val() || !!$(".search__category").length,
        b = g.data("engine"),
        x = $("#search-history");
      function C(e) {
        g.toggleClass("is-focus", e);
      }
      function S() {
        g.toggleClass(
          "is-filled",
          _.val() &&
            !g.hasClass("is-filled") &&
            g.find(".search__category").length
        );
      }
      _.on("input", function () {
        S();
      }),
        v.on("mousedown", function (e) {
          $(e.target).closest(y).length || C(!0);
        }),
        $(document).on("mousedown", function (e) {
          $(e.target).closest(v).length || C(!1);
        }),
        y.on("click", function (e) {
          return (
            e.preventDefault(),
            e.stopPropagation(),
            w
              ? (location.href = g.data("url")
                  ? g.data("url")
                  : g.attr("action"))
              : (g.removeClass("is-history"),
                _.typeahead("val", "").val("").change(),
                S()),
            C(!1),
            !1
          );
        }),
        g.on("submit", function (e) {
          e.preventDefault();
          var t = $(this).serializeJSON();
          void 0 !== t.q &&
            t.q.trim().length &&
            (location.href = g
              .attr("action")
              .replace("%q", encodeURIComponent(t.q.trim())));
        });
      var k = function () {
          if (isUserLogged)
            $.ajax({
              type: "GET",
              url: "/wp-admin/admin-ajax.php",
              cache: !0,
              dataType: "json",
              data: { action: "elastic_suggest_saved", engine: b },
              success: function (e) {
                $.isArray(e) && e.length
                  ? ($.each(e, function (e, t) {
                      T(t);
                    }),
                    x.addClass("is-loaded"),
                    _.val() || g.addClass("is-history"))
                  : x.remove();
              },
            });
          else if ("undefined" != typeof Storage) {
            var e =
              JSON.parse(window.localStorage.getItem("search_history_" + b)) ||
              {};
            Object.keys(e).length
              ? ($.each(Object.keys(e).reverse(), function (t, i) {
                  T({ id: i, text: e[i] });
                }),
                x.addClass("is-loaded"),
                _.val() || g.addClass("is-history"))
              : x.remove();
          } else g.removeClass("is-history");
        },
        T = function (e) {
          x.append(
            '<div class="tt-history" data-id="' +
              e.id +
              '"><svg width="16" height="16" class="tt-clock"><use xlink:href="#icon-clock"></use></svg><span>' +
              e.text +
              '</span><div class="tt-times js-delete-suggest"><svg width="16" height="16"><use xlink:href="#icon-times"></use></svg></div></div>'
          );
        };
      if (b) {
        var E = $("#search-form").data("settings"),
          O = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            replace: function (e, t) {
              return e + "#" + t;
            },
            cache: !1,
            remote: {
              url: "/wp-admin/admin-ajax.php",
              prepare: function (e, t) {
                return (
                  (t.type = "GET"),
                  (t.data = {
                    engine: b,
                    action: "elastic_suggest",
                    q: e.trim(),
                  }),
                  $.extend(t.data, E),
                  t
                );
              },
            },
          });
        _.typeahead(
          {
            hint: !1,
            highlight: !0,
            minLength: 1,
            menu: $("#search-dropdown"),
          },
          {
            name: "elastic",
            limit: 10,
            source: O,
            templates: {
              suggestion: function (e) {
                return "<div><span>" + e + "</span></div>";
              },
            },
          }
        )
          .on("typeahead:select", function (e, t) {
            $(this).closest("form").length && $(this).closest("form").submit();
          })
          .on("typeahead:open", function (e, t) {
            g.addClass("is-opened");
          })
          .on("typeahead:close", function (e, t) {
            g.removeClass("is-opened");
          }),
          g.on("submit", function (e) {
            var t = _.val().trim();
            if (!t.length) return e.preventDefault(), !1;
            isUserLogged ||
              "undefined" == typeof Storage ||
              (function (e) {
                var t = "search_history_" + b,
                  i = JSON.parse(window.localStorage.getItem(t)) || {};
                if (Object.keys(i).length)
                  for (key in i) i[key] === e && delete i[key];
                (i[
                  Date.now().toString(36) + Math.random().toString(36).substr(2)
                ] = e),
                  Object.keys(i).length > 20 &&
                    (i = Object.keys(i)
                      .slice(-20)
                      .reduce(function (e, t) {
                        return (e[t] = i[t]), e;
                      }, {})),
                  window.localStorage.setItem(t, JSON.stringify(i));
              })(t);
          }),
          x.length &&
            (_.on("input focus", function () {
              x.length &&
                (_.val()
                  ? g.removeClass("is-history")
                  : x.hasClass("is-loaded")
                  ? g.addClass("is-history")
                  : k());
            }),
            $(document).on("click", ".js-delete-suggest", function (e) {
              e.preventDefault(), e.stopPropagation();
              var t = $(this).closest(".tt-history"),
                i = t.data("id");
              if (
                (t.remove(),
                $(".tt-history").length || x.remove(),
                isUserLogged)
              )
                $.ajax({
                  type: "POST",
                  url: "/wp-admin/admin-ajax.php",
                  data: { action: "elastic_suggest_saved_remove", id: i },
                });
              else if ("undefined" != typeof Storage) {
                var n = "search_history_" + b,
                  s = JSON.parse(window.localStorage.getItem(n)) || {};
                i in s && delete s[i],
                  window.localStorage.setItem(n, JSON.stringify(s));
              }
            }),
            $(document).on("click", ".tt-history", function () {
              _.val($(this).text().trim()).trigger("input"),
                _.closest("form").submit();
            }));
      }
    }
    var A = $("#search-sticky");
    if (A.length && !$("body").hasClass("product-page-popup")) {
      var I = function () {
        A.toggleClass("is-stuck", $(document).scrollTop() > 0);
      };
      $(window).on(
        "scroll",
        $.throttle(250, function () {
          I();
        })
      ),
        I();
    }
    $(".examples__filter").on("click", function () {
      var e = $(this),
        t = e.data("filter"),
        i = e.data("help-url"),
        n = $("#examples-products");
      if (e.hasClass("is-active") || !t) return !1;
      $(".examples__filter.is-active").removeClass("is-active"),
        n
          .removeClass(function (e, t) {
            return (t.match(/(^|\s)filter-\S+/g) || []).join(" ");
          })
          .addClass(t),
        e.addClass("is-active"),
        d(),
        i && $("#help-button").length && $("#help-button").attr("href", i);
    }),
      $(".sidebar__arrow").on("click", function (e) {
        e.stopPropagation(), e.preventDefault();
        var t = $(this).closest(".sidebar__item"),
          i = t.find(".sidebar__sublist");
        $(".sidebar__item.is-opened").not(t).removeClass("is-opened"),
          $(".sidebar__sublist").not(i).slideUp(400),
          t.toggleClass("is-opened"),
          i.stop().slideToggle(400);
      });
    var P = $("#sidebar");
    if (P.length) {
      function L() {
        var e =
          ($("#headerline").outerHeight() || 0) +
          ($("#masthead").outerHeight() || 0) +
          ($("#search-sticky").outerHeight() || 0);
        P.toggleClass("is-stuck", window.scrollY >= P.offset().top - e);
      }
      $(window).on(
        "scroll",
        $.throttle(125, function () {
          L();
        })
      ),
        L();
    }
    if (
      ($(".questions__title, .questions__icon").on("click", function () {
        var e = $(this).closest(".questions__item"),
          t = e.find(".questions__answer");
        e.toggleClass("is-opened"), t.stop().slideToggle(400);
      }),
      $("#hints-slider").length)
    )
      new Swiper("#hints-slider", {
        slidesPerView: "auto",
        watchSlidesProgress: !0,
        normalizeSlideIndex: !1,
        keyboard: { enabled: !0, onlyInViewport: !0 },
        navigation: {
          enabled: !0,
          prevEl: ".swiper__button_prev",
          nextEl: ".swiper__button_next",
        },
      });
    if ($(".sidebar-select").length) {
      var M = $(".sidebar-select"),
        D = "60vh";
      $(window).on(
        "scroll resize",
        $.throttle(200, function () {
          window.matchMedia("(max-width: 1023px)").matches &&
            ((D =
              Math.ceil(
                $(window).height() -
                  $(".sidebar-select")[0].getBoundingClientRect().top -
                  M.outerHeight() -
                  30
              ) + "px"),
            $("html").attr("style", "--category-select-height:" + D + ";"));
        })
      ),
        setTimeout(function () {
          $(window).trigger("resize");
        }, 500);
    }
  }),
  $(function () {
    $(document).on("input change", "#comment-text", function (e) {
      $("#comment-submit").attr("disabled", $(this).val().length <= 0);
    }),
      $(document).on("submit", "#comment-form", function (e) {
        e.preventDefault(), e.stopPropagation();
        var t = $(this),
          i = $("#comment-text"),
          n = $("#comment-submit"),
          s = t.serializeJSON();
        n.prop("disabled", !0),
          "function" == typeof trackSendComment && trackSendComment(s.comment),
          $.ajax({
            type: "POST",
            url: "/wp-admin/admin-ajax.php",
            cache: !1,
            data: s,
            error: function (e) {
              alert("Something went wrong..."), n.prop("disabled", !1);
            },
            success: function (e) {
              "-1" != e &&
                $.ajax({
                  type: "POST",
                  url: "/wp-admin/admin-ajax.php",
                  cache: !1,
                  data: { action: "get_comment", cid: e, type: false },
                  success: function (e) {
                    $("#comments-list .comments__empty").remove(),
                      $("#comments-list").prepend(e),
                      n.prop("disabled", !1),
                      $("#comment-parent").val(0),
                      i.val("").trigger("change");
                  },
                });
            },
          });
      }),
      $(document).on("click", ".comments__item-reply", function (e) {
        e.preventDefault();
        var t = $(this),
          i = t.closest(".comments__item");
        (($textarea = $("#comment-text")),
        (commentParentId = parseInt(t.data("id"))),
        (commentText = $.trim($textarea.val().toString())),
        (commentAuthor = i.find(".comments__user-name").data("user")),
        commentParentId && $("#comment-parent").val(commentParentId),
        "undefined" != typeof commentAuthor && commentAuthor.length) &&
          (new RegExp("@" + commentAuthor).test(commentText) ||
            $textarea.val("@" + commentAuthor + " " + commentText));
        setTimeout(function () {
          $textarea.focus();
        }, 800);
      }),
      $(document).on("click", ".follow-button[data-id]", function (e) {
        e.preventDefault();
        var t = $(this),
          i = t.data("id") ? parseInt(t.data("id")) : 0,
          n = t.data("nonce"),
          s = t.hasClass("is-following"),
          o = t.html();
        return (
          n &&
            !isNaN(i) &&
            i &&
            (t.addClass("has-preloader").prepend(preloaderSpinner),
            $.ajax({
              type: "POST",
              url: "/wp-admin/admin-ajax.php",
              cache: !1,
              data: {
                _ajax_nonce: n,
                action: "follow",
                uid: i,
                follow: s ? 0 : 1,
              },
              error: function (e) {
                alert("Something went wrong...");
              },
              success: function (e) {
                t.removeClass("has-preloader"),
                  e > 0
                    ? (s
                        ? (t.removeClass("is-following"),
                          (o = "<span>Follow</span>"))
                        : (t.addClass("is-following"),
                          (o = "<span>Following</span>")),
                      t.html(o))
                    : t.html(o);
              },
            })),
          !1
        );
      });
    var e = "<span>Add to Cart</span>",
      t = "<span>View Cart</span>",
      i = "<span>Buy Now</span>",
      n = "<span>Buy with free quota / pack</span>";
    $(document).on("change", "#product-filetype-select", function (e) {
      var t = $(this).val(),
        i = $("#product-licenses-" + t),
        n = $(".product__licenses-item").filter(":visible"),
        s = $(".product__licenses-item input[type=radio]:checked")
          .parent()
          .index();
      s < 0
        ? i
            .find(".round-group__item")
            .eq(0)
            .children("input[name=product]")
            .prop("checked", !0)
            .trigger("change")
        : n.fadeOut(250, function () {
            i
              .find(".round-group__item")
              .eq(s)
              .children("input[name=product]")
              .prop("checked", !0)
              .trigger("change"),
              i.fadeIn(250);
          });
    }),
      $(document).on("change", 'input[name="product"]', function (s) {
        s.stopPropagation();
        var o = $(this),
          r = o.closest(".round-group__item"),
          a = $(".product__specs .table"),
          l = $("#product-authors"),
          c = $("#product-price"),
          d = r.find(".product__licenses-price"),
          u = $("#product-addtocart"),
          p = $("#product-buynow"),
          h = $.parseJSON(o.val()) || [],
          f = h["attribute_pa_file-type"] ? h["attribute_pa_file-type"] : "",
          m = h.attribute_pa_license ? h.attribute_pa_license : "",
          g = "3dmodel" === f;
        if (
          (r.hasClass("is-in-cart")
            ? (u
                .removeClass("d-none")
                .addClass("is-in-cart")
                .attr("href", "/cart")
                .html(t),
              p.removeClass("is-free-quota").html(i))
            : r.hasClass("is-free-quota")
            ? (u
                .removeClass("is-in-cart")
                .addClass("d-none")
                .attr("href", "#")
                .html(e),
              p.addClass("is-free-quota").html(n))
            : (u.removeClass("d-none is-in-cart").attr("href", "#").html(e),
              p.removeClass("is-free-quota").html(i)),
          r.hasClass("is-free-quota") || r.hasClass("is-free"))
        )
          c.text("Free");
        else {
          var v = "";
          void 0 !== d.data("value-discount") && d.data("value-discount")
            ? (v = "$" + d.data("value-discount") + " USD")
            : void 0 !== d.data("value") &&
              d.data("value") &&
              (v = "$" + d.data("value") + " USD"),
            c.text(v);
        }
        if (
          (a.addClass("d-none"),
          $("#product-specs-" + f + "-" + m).removeClass("d-none"),
          l.toggleClass("is-show-3d", g),
          g)
        ) {
          if (!$("#product-3d-iframe").length)
            $('<iframe scrolling="no" seamless="seamless"></iframe>')
              .attr({
                id: "product-3d-iframe",
                src: $(".product__3d").data("iframe-url"),
                width: 1052,
                height: 580,
              })
              .appendTo(".product__3d");
          $("#product-media").addClass("is-show-3d");
        } else $("#product-media").removeClass("is-show-3d");
      }),
      $(document).on(
        "click",
        "#product-addtocart, #product-buynow",
        function (e) {
          e.preventDefault(), e.stopPropagation();
          var i = $(this);
          if (i.hasClass("has-preloader") || i.hasClass("is-disabled"))
            return !1;
          var n = $('.product input[name="product"]:checked'),
            s = n.closest(".round-group__item"),
            o = $.parseJSON(n.val()) || [],
            r = "product-buynow" == i.attr("id") ? "buynow" : "add2cart";
          if ("add2cart" == r && s.hasClass("is-in-cart"))
            return (location.href = "/cart"), !1;
          var a = i.html();
          return (
            i
              .html("<span>Please wait... </span>")
              .addClass("has-preloader")
              .append(preloaderSpinner),
            (o.action = r),
            (o.attribute = {}),
            $.each(o, function (e, t) {
              e.match(/^attribute_pa/) && (o.attribute[e] = t);
            }),
            $.ajax({
              type: "POST",
              url: "/wp-admin/admin-ajax.php",
              cache: !1,
              data: o,
              error: function (e, t, n) {
                if (
                  (i.removeClass("has-preloader").html(a),
                  500 == e.status ||
                    void 0 === e.responseJSON ||
                    void 0 === e.responseJSON.url)
                ) {
                  var s = n;
                  void 0 !== e.responseJSON && void 0 !== e.responseJSON.message
                    ? (s = e.responseJSON.message)
                    : void 0 !== e.responseText && (s = e.responseText),
                    alert(s);
                } else
                  e.responseJSON.url && (location.href = e.responseJSON.url);
              },
              success: function (e) {
                var n = !1;
                if (
                  ("add2cart" == r
                    ? (n = e && void 0 !== e.success && e.success)
                    : "buynow" == r &&
                      (n = e && void 0 !== e.code && 200 == e.code),
                  n)
                )
                  if (
                    ("function" == typeof trackAddToCart && trackAddToCart(),
                    "add2cart" == r)
                  ) {
                    if (
                      (i
                        .removeClass("has-preloader")
                        .html(t)
                        .attr("href", "/cart"),
                      s.addClass("is-in-cart"),
                      $("#header-cart")
                        .removeClass("is-empty")
                        .tooltipster("disable"),
                      $("#header-cart-count").text(e.data.count),
                      $("#font-chars-cart").length &&
                        void 0 !== o.attribute.attribute_pa_sku)
                    ) {
                      var l = o.attribute.attribute_pa_sku;
                      $('.card_symbol[data-sku="' + l + '"]').addClass(
                        "is-in-cart"
                      ),
                        $(".collection__pill")
                          .addClass("has-preloader")
                          .append(preloaderSpinner),
                        l &&
                          "function" == typeof updateFontPage &&
                          $.ajax({
                            type: "POST",
                            url: "/wp-admin/admin-ajax.php",
                            cache: !1,
                            dataType: "json",
                            data: { action: "get_cart_font", sku: l },
                            error: function (e) {
                              $(".collection__pill")
                                .removeClass("has-preloader")
                                .find(".preloader-spinner")
                                .remove();
                            },
                            success: function (e) {
                              e && "object" == typeof e && updateFontPage(e),
                                $(".collection__pill")
                                  .removeClass("has-preloader")
                                  .find(".preloader-spinner")
                                  .remove();
                            },
                          });
                    }
                    void 0 !== e.data.prev_variation &&
                      $("#variant-" + e.data.prev_variation).length &&
                      $("#variant-" + e.data.prev_variation)
                        .closest(".round-group__item")
                        .removeClass("is-in-cart");
                  } else
                    "buynow" == r &&
                      (i.removeClass("has-preloader").html(a),
                      (location.href =
                        void 0 !== e.url && e.url ? e.url : "/checkout"));
                else {
                  i.removeClass("has-preloader").html(a);
                  var c = "General error";
                  void 0 !== e.data &&
                    void 0 !== e.data.msg &&
                    (c = e.data.msg),
                    alert(c);
                }
              },
            }),
            !1
          );
        }
      ),
      $("#product-addtocart, #product-buynow").removeAttr("disabled");
    var s = function () {
        var e,
          t,
          i,
          n,
          s,
          o,
          r = $("#spinner"),
          a = {},
          l = $("#spinner-preloader"),
          c = $("#spinner-rotate"),
          d = $("#spinner-play");
        if (
          ((a.productId = parseInt($("#product").data("id"), 10) || 0),
          (a.sourceUrl = r.data("source") || ""),
          (a.frames = parseInt(r.data("frames"), 10) || ""),
          (a.lanes = parseInt(r.data("lanes"), 10) || ""),
          (a.updated = parseInt(r.data("updated"), 10) || 0),
          (a.animated = parseInt(r.data("animated"), 10) || 0),
          !a.sourceUrl && !a.frames && a.lanes)
        )
          return !1;
        (a.initialView =
          void 0 !== r.data("initial-view")
            ? r.data("initial-view").split("_")
            : [1, 1]),
          (o = parseInt(a.initialView[0], 10)) <= 0 && (o = 1),
          (s = parseInt(a.initialView[1], 10)) <= 0 && (s = 1),
          (a.lane = o - 1),
          (a.frame = s - 1),
          (a.sense = 2),
          a.lanes <= 5
            ? (a.senseLane = 6)
            : a.lanes >= 13
            ? (a.senseLane = 1)
            : (a.senseLane = Math.round(
                0.004 * a.lanes * a.lanes * a.lanes -
                  0.1045 * a.lanes * a.lanes +
                  0.323 * a.lanes +
                  5.8
              )),
          r.spritespin({
            source: SpriteSpin.sourceArray(
              a.sourceUrl +
                "v{lane}h{frame}.jpg?hash=" +
                a.productId +
                a.updated,
              { lane: [1, a.lanes], frame: [1, a.frames], digits: 2 }
            ),
            lanes: a.lanes,
            frames: a.frames,
            preloadCount: a.frames,
            lane: a.lane,
            frame: a.frame,
            sense: a.sense,
            senseLane: a.senseLane,
            width: 576,
            height: 618,
            sizeMode: "scale",
            responsive: !1,
            module: "360",
            behavior: "drag",
            renderer: "canvas",
            frameTime: 33,
            animate: !1,
            reverse: !1,
            loop: !0,
            wrap: !0,
            wrapLane: !1,
            orientation: "horizontal",
            detectSubsampling: !0,
            scrollThreshold: 75,
            onInit: function (e, t) {
              var i = new Image();
              (i.onload =
                i.onabort =
                i.onerror =
                  function () {
                    t.target.css({
                      "background-image": ["url('", this.src, "')"].join(""),
                    });
                  }),
                (i.src = t.source[t.lane * t.frames + t.frame]);
            },
            onPreloadStart: function (e, t) {
              l.fadeIn(100);
            },
            onLoad: function (e, t) {
              r.hasClass("is-animated") ||
                c.hasClass("is-hidden") ||
                !(a.frames > 1 || a.lanes > 1) ||
                c.fadeIn(400),
                t.target.css({ "background-image": "" });
            },
            onFullLoad: function (t, i) {
              l.fadeOut(200, function () {
                a.animated &&
                  (e.startAnimation(), d.addClass("is-active").fadeIn(200));
              });
            },
            onDragStart: function () {
              $(window).width() > 1023 &&
                (clearTimeout(n), $("body").addClass("is-spinner-drag")),
                r.hasClass("is-animated") ||
                  c.hasClass("is-hidden") ||
                  !(a.frames > 1 || a.lanes > 1) ||
                  c.addClass("is-hidden").stop().fadeOut(400);
            },
            onDragEnd: function () {
              clearTimeout(n),
                (n = setTimeout(function () {
                  $("body").removeClass("is-spinner-drag");
                }, 500));
            },
          }),
          (e = r.spritespin("api")),
          (t = e.data),
          a.animated &&
            d.off("click").on("click", function () {
              $(this).hasClass("is-active")
                ? ($(this).removeClass("is-active"), e.stopAnimation())
                : ($(this).addClass("is-active"), e.startAnimation());
            });
        var u = function () {
          var n, r;
          "function" == typeof history.replaceState &&
            (clearTimeout(i),
            (i = setTimeout(function () {
              0 == t.lane && 0 == t.frame
                ? (r = window.location.origin + window.location.pathname)
                : ((n = $.param({ ca: o + "_" + s })),
                  (r =
                    window.location.origin +
                    window.location.pathname +
                    "?" +
                    n)),
                history.replaceState({ path: r }, "", r),
                t.dragging || $("body").removeClass("is-spinner-drag");
            }, 500))),
            e.currentImage() &&
              e.currentImage().length &&
              $("#product-share").data("image", e.currentImage());
        };
        $("#product").length &&
          (u(),
          $(document).on("change", 'input[name="product"]', u),
          r.on("onFrameChanged", function () {
            (s = t.frame + 1),
              (o = t.lane + 1),
              $("#png-lane").text(o),
              $("#png-frame").text(s),
              !t.animate &&
                d.hasClass("is-active") &&
                d.removeClass("is-active"),
              u();
          })),
          $(document).keydown(function (t) {
            if (-1 != $.inArray(t.keyCode, [37, 38, 39, 40]))
              switch ((t.preventDefault(), t.keyCode)) {
                case 37:
                  e.prevFrame();
                  break;
                case 39:
                  e.nextFrame();
                  break;
                case 38:
                  e.prevLane();
                  break;
                case 40:
                  e.nextLane();
              }
          });
      },
      o = function () {
        if ($("#product-wrapper").length) {
          $("#product");
          if (
            ((function () {
              var e = $("#product"),
                t = e.data("id") ? parseInt(e.data("id")) : 0,
                i = e.data("sku") ? e.data("sku") : 0,
                n = e.data("store") ? e.data("store") : "om",
                s = 1,
                o = 0,
                r = "";
              if (t && i) {
                if (
                  ("png" == n && (s = 2),
                  "cf_symbols" == n && (s = 4),
                  (r = "yiw_" + s + "_" + t),
                  $.cookie(r))
                )
                  return !1;
                ajaxTiming
                  ? (o = ajaxTiming)
                  : void 0 !== window.performance &&
                    (o =
                      window.performance.timing.responseEnd -
                      window.performance.timing.navigationStart),
                  window.setTimeout(function () {
                    $.ajax({
                      type: "POST",
                      async: !0,
                      url: "/nonce.php",
                      cache: !1,
                      data: { uid: void 0 !== iam.id && iam.id ? iam.id : 0 },
                      success: function (e) {
                        "undefiled" != typeof e &&
                          e.length &&
                          $.ajax({
                            type: "POST",
                            url: "/view.php",
                            cache: !1,
                            async: !0,
                            data: {
                              _ajax_nonce: $.trim(e),
                              action: "view",
                              pid: t,
                              sid: s,
                              uid: void 0 !== iam.id && iam.id ? iam.id : 0,
                              url: location.href,
                              resolution: screen.width + "x" + screen.height,
                              window:
                                $(window).width() + "x" + $(window).height(),
                              platform: navigator.platform,
                              loadtime: o,
                              ref_url:
                                $.magnificPopup.instance.isOpen &&
                                $("#product-wrapper").length
                                  ? clickReferrerUrl
                                  : document.referrer,
                            },
                            success: function (e) {
                              if (
                                ((e = parseInt($.trim(e), 10)),
                                !isNaN(e) && e > 0)
                              ) {
                                var t = new Date();
                                t.setTime(t.getTime() + 252e4),
                                  $.cookie(r, "1", { expires: t, path: "/" });
                              }
                            },
                          });
                      },
                    });
                  }, 2750);
              }
            })(),
            (function () {
              var e = $("#product"),
                t = e.find('input[name="product"]'),
                i = e.find(".follow-button"),
                n = {
                  store: e.data("store"),
                  id: e.data("id"),
                  variations: [],
                  users: [],
                };
              $.each(t, function (e, t) {
                n.variations[e] = $.parseJSON($(t).val()) || [];
              }),
                $.each(i, function (e, t) {
                  n.users[e] = $(t).data("id");
                }),
                $.ajax({
                  type: "POST",
                  url: "/showcase-ajax/product",
                  cache: !1,
                  async: !0,
                  dataType: "json",
                  data: n,
                  success: function (n) {
                    if (void 0 !== n.id && n.id) {
                      void 0 !== n.discounts &&
                        n.discounts &&
                        $.each(n.discounts, function (e, i) {
                          var n = t
                              .eq(parseInt(e, 10))
                              .closest(".round-group__item")
                              .find(".product__licenses-price"),
                            s = (
                              (parseFloat(n.data("value")) *
                                (100 - parseFloat(i))) /
                              100
                            ).toFixed(2);
                          n.html("$" + s).attr("data-value-discount", s);
                        }),
                        void 0 !== n.in_cart &&
                          n.in_cart &&
                          $.each(n.in_cart, function (e, i) {
                            t.eq(parseInt(e, 10))
                              .closest(".round-group__item")
                              .addClass("is-in-cart");
                          }),
                        e
                          .find('input[name="product"]:checked')
                          .trigger("change"),
                        $("#product-addtocart, #product-buynow").removeClass(
                          "is-disabled"
                        ),
                        void 0 !== n.follow &&
                          n.follow &&
                          $.each(n.follow, function (e, t) {
                            i.eq(e)
                              .addClass("is-following")
                              .html("<span>Following</span>");
                          }),
                        void 0 !== n.is_liked &&
                          n.is_liked &&
                          $("#product-like").addClass("is-liked");
                      var s = e.find("#product-banner-offer");
                      void 0 !== n.banner && n.banner
                        ? s.replaceWith(n.banner)
                        : s.remove();
                    }
                  },
                });
            })(),
            $("#product-wrapper select").select2({
              minimumResultsForSearch: -1,
            }),
            $("#product-wrapper").initTooltips(),
            $(".product__info-box").trigger("scroll"),
            $(".product__slider").length)
          ) {
            var e = new Swiper(".product__thumbs", {
              slidesPerView: "auto",
              watchSlidesProgress: !0,
            });
            new Swiper(".product__slider", {
              mousewheel: { forceToAxis: !0 },
              slidesPerView: "auto",
              watchSlidesProgress: !1,
              normalizeSlideIndex: !1,
              keyboard: { enabled: !0, onlyInViewport: !0 },
              thumbs: { swiper: e, autoScrollOffset: 1 },
              navigation: {
                enabled: !0,
                nextEl: ".swiper__button_next",
                prevEl: ".swiper__button_prev",
              },
              pagination: { el: ".swiper__pagination", clickable: !0 },
              on: {
                slideChange: function (e) {
                  var t = $(e.slides[e.activeIndex]).find("img");
                  t.length && $("#product-share").data("image", t.attr("src"));
                },
              },
            });
          }
          if ($("#related-products-list").length) {
            var t = $("#related-products-list");
            !t.hasClass("is-loaded") && t.data("url")
              ? $.ajax({
                  type: "GET",
                  url: t.data("url"),
                  cache: !0,
                  async: !0,
                  error: function (e) {},
                  success: function (e) {
                    e.length && -1 !== parseInt(e)
                      ? (t.addClass("is-loaded").html(e),
                        $(
                          ".product_om #related-products-list .product-impressions"
                        ).length &&
                          "function" == typeof trackGaProductsList &&
                          trackGaProductsList(
                            $(
                              ".product_om #related-products-list .product-impressions"
                            )
                          ))
                      : t.slideUp(250);
                  },
                })
              : t.children.length || t.slideUp(250);
          }
          if ($("#comments-list").length) {
            var i = $("#comments-list");
            !i.hasClass("is-loaded") &&
              i.data("url") &&
              $.ajax({
                type: "GET",
                url: i.data("url"),
                cache: !0,
                async: !0,
                error: function (e) {},
                success: function (e) {
                  e.trim().length && -1 !== parseInt(e)
                    ? i.addClass("is-loaded").html(e)
                    : $(".comments__empty").removeClass("d-none");
                },
              });
          }
          var n = $('.product input[name="product"]:checked');
          if (!n.length) {
            if ($("#product-filetype-select").length) {
              var o = $("#product-filetype-select option:first").val();
              $("#product-filetype-select").val(o),
                (n = $("#product-licenses-" + o)
                  .find(".round-group__item")
                  .first()
                  .children("input[name=product]"));
            } else
              n = $(".product__licenses-item")
                .first()
                .find('input[name="product"]')
                .first();
            n.prop("checked", !0);
          }
          n.trigger("change"),
            "function" == typeof trackGaProductDetails &&
              trackGaProductDetails(n);
        }
        $("#spinner").length && s();
      };
    o(),
      $(document).magnificPopup({
        key: "product",
        delegate:
          ".products .js-card-popup, .cart_item a:not(.remove):not(.is-ticket):not(.nopapap), .popup a.yi:not(.nopapap):not(.sobaka), a.fakir",
        type: "ajax",
        midClick: !0,
        mainClass: "mfp-zoom-in mfp-product",
        closeBtnInside: !1,
        overflowY: "hidden",
        removalDelay: 300,
        ajax: { settings: { type: "GET", cache: !0, data: { ajax: 1 } } },
        disableOn: function () {
          return !(
            $("body").hasClass("product-page-popup") ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) ||
            $(window).width() < 1024
          );
        },
        callbacks: {
          beforeOpen: function () {
            (ajaxTiming = new Date()), (clickReferrerUrl = location.href);
          },
          parseAjax: function (e) {
            if (
              ((e.data = $(e.data).find("#product-wrapper")), e.data.length)
            ) {
              var t = $(e.data).find("#product").data("title");
              t && (document.title = t);
            }
          },
          elementParse: function (e) {
            var t = $(e.el).closest(".card.product-impressions");
            t.length &&
              $("#elastic-request-id").val() &&
              $.ajax({
                type: "POST",
                url: "/wp-admin/admin-ajax.php",
                data: {
                  action: "elastic_click",
                  request_id: $("#elastic-request-id").val(),
                  request_engine: $("#elastic-request-engine").val(),
                  id: t.data("id") || 0,
                },
              });
          },
          ajaxContentAdded: function () {
            (ajaxTiming = new Date() - ajaxTiming),
              o(),
              "function" == typeof updateProductIam && updateProductIam();
          },
          open: function () {
            history.pushState(
              { url: this.currItem.src, title: document.title },
              "",
              this.currItem.src
            );
          },
          close: function () {
            history.pushState(
              { url: initialUrl, title: initialTitle },
              "",
              initialUrl
            ),
              null !== history.state && (document.title = history.state.title),
              $("#product-3d-iframe").remove(),
              (clickReferrerUrl = !1);
          },
        },
      }),
      $("a.fakir").length && $("a.fakir").first().trigger("click"),
      setTimeout(function () {
        $(window).on("popstate", function (e) {
          if (-1 === location.href.indexOf("#"))
            if (history.state) {
              var t = history.state.url || history.state.path || "",
                i = t.replace(/^.*\/\/[^\/]+/, "");
              (t || i) &&
              $(
                '#products-list a[href="' +
                  t +
                  '"], #products-list a[href="' +
                  i +
                  '"]'
              ).length
                ? $(
                    '#products-list a[href="' +
                      t +
                      '"], #products-list a[href="' +
                      i +
                      '"]'
                  )
                    .eq(0)
                    .trigger("click")
                : $("#products-list").length && $.magnificPopup.instance.isOpen
                ? $.magnificPopup.close()
                : location.replace(location);
            } else location.replace(location);
        });
      }, 0),
      $(document).on("click", "#product-like", function (e) {
        if ((e.preventDefault(), $(this).hasClass("has-preloader"))) return !1;
        var t = $(this),
          i = {
            action: "likeme",
            _ajax_nonce: t.data("nonce"),
            pid: $("#product-share").data("pid"),
            like: t.hasClass("is-liked") ? -1 : 1,
          };
        i.pid &&
          i._ajax_nonce &&
          i._ajax_nonce.toString().length >= 4 &&
          (t.addClass("has-preloader").prepend(preloaderSpinner),
          $.ajax({
            type: "POST",
            dataType: "json",
            url: "/wp-admin/admin-ajax.php",
            cache: !1,
            data: i,
            error: function (e) {
              alert("Something went wrong..."),
                t
                  .removeClass("has-preloader")
                  .find(".preloader-spinner")
                  .remove();
            },
            success: function (e) {
              t
                .removeClass("has-preloader")
                .find(".preloader-spinner")
                .remove(),
                t.toggleClass("is-liked", i.like > 0);
            },
          }));
      }),
      $(document).on("click", "#socials-menu-button", function (e) {
        e.preventDefault(),
          $("#socials-menu-wrap").toggleClass(
            "is-opened",
            !$("#socials-menu-wrap").hasClass("is-opened")
          );
      }),
      $(document).on("click touchend", function (e) {
        $(e.target).closest("#socials-menu-wrap").length ||
          $("#socials-menu-wrap").removeClass("is-opened");
      });
    var r = {
      pinterest: {
        url: "https://pinterest.com/pin/create/link/",
        fields: { url: "url", description: "title", media: "image" },
      },
      facebook: {
        url: "https://www.facebook.com/sharer.php",
        fields: { u: "url" },
      },
      twitter: {
        url: "https://twitter.com/intent/tweet",
        fields: { url: "url", text: "title" },
      },
      reddit: {
        url: "https://reddit.com/submit",
        fields: { url: "url", title: "title" },
      },
      telegram: {
        url: "https://t.me/share/url",
        fields: { url: "url", text: "title" },
      },
      vkontakte: {
        url: "https://vk.com/share.php",
        fields: { url: "url", title: "title", image: "image" },
      },
    };
    $(document).on("click", "[data-share]", function (e) {
      var t = $("#product-share").data(),
        i = $(this).data("share");
      if (i && void 0 !== r[i]) {
        e.preventDefault();
        var n = r[i].url,
          s = [];
        if (
          ((t.url = t.url && $.trim(t.url) ? $.trim(t.url) : location.href),
          (t.title =
            t.title && $.trim(t.title)
              ? $.trim(t.title)
              : $(document).find("title").text()),
          $.each(r[i].fields, function (e, i) {
            void 0 !== t[i] &&
              "" != $.trim(t[i]) &&
              s.push(e + "=" + encodeURIComponent(t[i]));
          }),
          s.length)
        ) {
          n += "?" + s.join("&");
          var o = {
              toolbar: "no",
              location: "no",
              directories: "no",
              status: "no",
              menubar: "no",
              scrollbars: "no",
              resizable: "no",
              copyhistory: "no",
              width: 650,
              height: 420,
            },
            a = null != window.screenLeft ? window.screenLeft : screen.left,
            l = null != window.screenTop ? window.screenTop : screen.top,
            c = window.innerWidth
              ? window.innerWidth
              : document.documentElement.clientWidth
              ? document.documentElement.clientWidth
              : screen.width,
            d = window.innerHeight
              ? window.innerHeight
              : document.documentElement.clientHeight
              ? document.documentElement.clientHeight
              : screen.height;
          (o.left = c / 2 - o.width / 2 + a),
            (o.top = d / 2 - o.height / 2 + l);
          var u = $.map(o, function (e, t) {
            return t + "=" + e;
          }).join(", ");
          window.open(n, "", u),
            (t.share = n),
            (t.what = i),
            $.ajax({
              type: "POST",
              url: "/wp-admin/admin-ajax.php",
              cache: !1,
              data: { action: "share", data: t },
            });
        }
      }
    });
  });
