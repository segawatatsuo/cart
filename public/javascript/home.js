!(function (e, n) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = n())
        : "function" == typeof define && define.amd
        ? define(n)
        : ((e =
              "undefined" != typeof globalThis
                  ? globalThis
                  : e || self).Flicking = n());
})(this, function () {
    "use strict";
    var e = function (n, t) {
        return (
            (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, n) {
                        e.__proto__ = n;
                    }) ||
                function (e, n) {
                    for (var t in n)
                        Object.prototype.hasOwnProperty.call(n, t) &&
                            (e[t] = n[t]);
                }),
            e(n, t)
        );
    };
    function n(n, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError(
                "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
            );
        function i() {
            this.constructor = n;
        }
        e(n, t),
            (n.prototype =
                null === t
                    ? Object.create(t)
                    : ((i.prototype = t.prototype), new i()));
    }
    var t = function () {
        return (
            (t =
                Object.assign ||
                function (e) {
                    for (var n, t = 1, i = arguments.length; t < i; t++)
                        for (var r in (n = arguments[t]))
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                    return e;
                }),
            t.apply(this, arguments)
        );
    };
    function i(e, n, t, i) {
        return new (t || (t = Promise))(function (r, o) {
            function a(e) {
                try {
                    u(i.next(e));
                } catch (e) {
                    o(e);
                }
            }
            function s(e) {
                try {
                    u(i.throw(e));
                } catch (e) {
                    o(e);
                }
            }
            function u(e) {
                var n;
                e.done
                    ? r(e.value)
                    : ((n = e.value),
                      n instanceof t
                          ? n
                          : new t(function (e) {
                                e(n);
                            })).then(a, s);
            }
            u((i = i.apply(e, n || [])).next());
        });
    }
    function r(e, n) {
        var t,
            i,
            r,
            o,
            a = {
                label: 0,
                sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                },
                trys: [],
                ops: [],
            };
        return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                    return this;
                }),
            o
        );
        function s(o) {
            return function (s) {
                return (function (o) {
                    if (t)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (
                                ((t = 1),
                                i &&
                                    (r =
                                        2 & o[0]
                                            ? i.return
                                            : o[0]
                                            ? i.throw ||
                                              ((r = i.return) && r.call(i), 0)
                                            : i.next) &&
                                    !(r = r.call(i, o[1])).done)
                            )
                                return r;
                            switch (
                                ((i = 0), r && (o = [2 & o[0], r.value]), o[0])
                            ) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++, { value: o[1], done: !1 };
                                case 5:
                                    a.label++, (i = o[1]), (o = [0]);
                                    continue;
                                case 7:
                                    (o = a.ops.pop()), a.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !(
                                            (r =
                                                (r = a.trys).length > 0 &&
                                                r[r.length - 1]) ||
                                            (6 !== o[0] && 2 !== o[0])
                                        )
                                    ) {
                                        a = 0;
                                        continue;
                                    }
                                    if (
                                        3 === o[0] &&
                                        (!r || (o[1] > r[0] && o[1] < r[3]))
                                    ) {
                                        a.label = o[1];
                                        break;
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        (a.label = r[1]), (r = o);
                                        break;
                                    }
                                    if (r && a.label < r[2]) {
                                        (a.label = r[2]), a.ops.push(o);
                                        break;
                                    }
                                    r[2] && a.ops.pop(), a.trys.pop();
                                    continue;
                            }
                            o = n.call(e, a);
                        } catch (e) {
                            (o = [6, e]), (i = 0);
                        } finally {
                            t = r = 0;
                        }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, s]);
            };
        }
    }
    function o(e) {
        var n = "function" == typeof Symbol && Symbol.iterator,
            t = n && e[n],
            i = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function () {
                    return (
                        e && i >= e.length && (e = void 0),
                        { value: e && e[i++], done: !e }
                    );
                },
            };
        throw new TypeError(
            n ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
    }
    function a(e, n) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var i,
            r,
            o = t.call(e),
            a = [];
        try {
            for (; (void 0 === n || n-- > 0) && !(i = o.next()).done; )
                a.push(i.value);
        } catch (e) {
            r = { error: e };
        } finally {
            try {
                i && !i.done && (t = o.return) && t.call(o);
            } finally {
                if (r) throw r.error;
            }
        }
        return a;
    }
    function s() {
        for (var e = [], n = 0; n < arguments.length; n++)
            e = e.concat(a(arguments[n]));
        return e;
    }
    function u(e) {
        var n = "function" == typeof Symbol && Symbol.iterator,
            t = n && e[n],
            i = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function () {
                    return (
                        e && i >= e.length && (e = void 0),
                        { value: e && e[i++], done: !e }
                    );
                },
            };
        throw new TypeError(
            n ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
    }
    function l(e, n) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var i,
            r,
            o = t.call(e),
            a = [];
        try {
            for (; (void 0 === n || n-- > 0) && !(i = o.next()).done; )
                a.push(i.value);
        } catch (e) {
            r = { error: e };
        } finally {
            try {
                i && !i.done && (t = o.return) && t.call(o);
            } finally {
                if (r) throw r.error;
            }
        }
        return a;
    }
    function c() {
        for (var e = [], n = 0; n < arguments.length; n++)
            e = e.concat(l(arguments[n]));
        return e;
    }
    var h = function (e) {
            return void 0 === e;
        },
        f = (function () {
            function e(e, n) {
                var t, i;
                if (((this._canceled = !1), n))
                    try {
                        for (
                            var r = u(Object.keys(n)), o = r.next();
                            !o.done;
                            o = r.next()
                        ) {
                            var a = o.value;
                            this[a] = n[a];
                        }
                    } catch (e) {
                        t = { error: e };
                    } finally {
                        try {
                            o && !o.done && (i = r.return) && i.call(r);
                        } finally {
                            if (t) throw t.error;
                        }
                    }
                this.eventType = e;
            }
            var n = e.prototype;
            return (
                (n.stop = function () {
                    this._canceled = !0;
                }),
                (n.isCanceled = function () {
                    return this._canceled;
                }),
                e
            );
        })(),
        d = (function () {
            function e() {
                this._eventHandler = {};
            }
            var n = e.prototype;
            return (
                (n.trigger = function (e) {
                    for (var n = [], t = 1; t < arguments.length; t++)
                        n[t - 1] = arguments[t];
                    var i = e instanceof f ? e.eventType : e,
                        r = c(this._eventHandler[i] || []);
                    return (
                        r.length <= 0 ||
                            (e instanceof f
                                ? ((e.currentTarget = this),
                                  r.forEach(function (n) {
                                      n(e);
                                  }))
                                : r.forEach(function (e) {
                                      e.apply(void 0, c(n));
                                  })),
                        this
                    );
                }),
                (n.once = function (e, n) {
                    var t = this;
                    if ("object" == typeof e && h(n)) {
                        var i = e;
                        for (var r in i) this.once(r, i[r]);
                        return this;
                    }
                    if ("string" == typeof e && "function" == typeof n) {
                        var o = function () {
                            for (var i = [], r = 0; r < arguments.length; r++)
                                i[r] = arguments[r];
                            n.apply(void 0, c(i)), t.off(e, o);
                        };
                        this.on(e, o);
                    }
                    return this;
                }),
                (n.hasOn = function (e) {
                    return !!this._eventHandler[e];
                }),
                (n.on = function (e, n) {
                    if ("object" == typeof e && h(n)) {
                        var t = e;
                        for (var i in t) this.on(i, t[i]);
                        return this;
                    }
                    if ("string" == typeof e && "function" == typeof n) {
                        var r = this._eventHandler[e];
                        h(r) &&
                            ((this._eventHandler[e] = []),
                            (r = this._eventHandler[e])),
                            r.push(n);
                    }
                    return this;
                }),
                (n.off = function (e, n) {
                    var t, i;
                    if (h(e)) return (this._eventHandler = {}), this;
                    if (h(n)) {
                        if ("string" == typeof e)
                            return delete this._eventHandler[e], this;
                        var r = e;
                        for (var o in r) this.off(o, r[o]);
                        return this;
                    }
                    var a = this._eventHandler[e];
                    if (a) {
                        var s = 0;
                        try {
                            for (
                                var l = u(a), c = l.next();
                                !c.done;
                                c = l.next()
                            ) {
                                if (c.value === n) {
                                    a.splice(s, 1),
                                        a.length <= 0 &&
                                            delete this._eventHandler[e];
                                    break;
                                }
                                s++;
                            }
                        } catch (e) {
                            t = { error: e };
                        } finally {
                            try {
                                c && !c.done && (i = l.return) && i.call(l);
                            } finally {
                                if (t) throw t.error;
                            }
                        }
                    }
                    return this;
                }),
                (e.VERSION = "3.0.2"),
                e
            );
        })(),
        g = f,
        p = {
            WRONG_TYPE: 0,
            ELEMENT_NOT_FOUND: 1,
            VAL_MUST_NOT_NULL: 2,
            NOT_ATTACHED_TO_FLICKING: 3,
            WRONG_OPTION: 4,
            INDEX_OUT_OF_RANGE: 5,
            POSITION_NOT_REACHABLE: 6,
            TRANSFORM_NOT_SUPPORTED: 7,
            STOP_CALLED_BY_USER: 8,
            ANIMATION_INTERRUPTED: 9,
            ANIMATION_ALREADY_PLAYING: 10,
            NOT_ALLOWED_IN_FRAMEWORK: 11,
            NOT_INITIALIZED: 12,
            NO_ACTIVE: 13,
            NOT_ALLOWED_IN_VIRTUAL: 14,
        },
        v = function (e, n) {
            return (
                e +
                "(" +
                typeof e +
                ") is not a " +
                n
                    .map(function (e) {
                        return '"' + e + '"';
                    })
                    .join(" or ") +
                "."
            );
        },
        _ =
            'This module is not attached to the Flicking instance. "init()" should be called first.',
        m = function (e, n) {
            return 'Option "' + e + '" is not in correct format, given: ' + n;
        },
        b = function (e) {
            return 'Position "' + e + '" is not reachable.';
        },
        E =
            "This behavior is not allowed in the frameworks like React, Vue, or Angular.",
        y = {
            READY: "ready",
            BEFORE_RESIZE: "beforeResize",
            AFTER_RESIZE: "afterResize",
            HOLD_START: "holdStart",
            HOLD_END: "holdEnd",
            MOVE_START: "moveStart",
            MOVE: "move",
            MOVE_END: "moveEnd",
            WILL_CHANGE: "willChange",
            CHANGED: "changed",
            WILL_RESTORE: "willRestore",
            RESTORED: "restored",
            SELECT: "select",
            NEED_PANEL: "needPanel",
            VISIBLE_CHANGE: "visibleChange",
            REACH_EDGE: "reachEdge",
            PANEL_CHANGE: "panelChange",
        },
        P = { PREV: "prev", CENTER: "center", NEXT: "next" },
        x = { PREV: "PREV", NEXT: "NEXT", NONE: null },
        O = { SNAP: "snap", FREE_SCROLL: "freeScroll", STRICT: "strict" },
        w = {
            VERTICAL: "vertical",
            HIDDEN: "flicking-hidden",
            DEFAULT_VIRTUAL: "flicking-panel",
        },
        T = { LINEAR: "linear", BOUND: "bound" },
        R = {
            __proto__: null,
            EVENTS: y,
            ALIGN: P,
            DIRECTION: x,
            MOVE_TYPE: O,
            CLASS: w,
            CIRCULAR_FALLBACK: T,
            ERROR_CODE: p,
        },
        C = function (e) {
            for (var n = [], t = 1; t < arguments.length; t++)
                n[t - 1] = arguments[t];
            return (
                n.forEach(function (n) {
                    Object.keys(n).forEach(function (t) {
                        e[t] = n[t];
                    });
                }),
                e
            );
        },
        I = function (e, n) {
            var t = null;
            if (G(e)) {
                var i = (n || document).querySelector(e);
                if (!i)
                    throw new ne(
                        (function (e) {
                            return (
                                'Element with selector "' + e + '" not found.'
                            );
                        })(e),
                        p.ELEMENT_NOT_FOUND
                    );
                t = i;
            } else e && e.nodeType === Node.ELEMENT_NODE && (t = e);
            if (!t) throw new ne(v(e, ["HTMLElement", "string"]), p.WRONG_TYPE);
            return t;
        },
        k = function (e, n) {
            if (null == e)
                throw new ne(
                    (function (e, n) {
                        return n + " should be provided. Given: " + e;
                    })(e, n),
                    p.VAL_MUST_NOT_NULL
                );
        },
        A = function (e, n, t) {
            return Math.max(Math.min(e, t), n);
        },
        S = function (e) {
            if (!e) throw new ne(_, p.NOT_ATTACHED_TO_FLICKING);
            return e;
        },
        M = function (e) {
            return [].slice.call(e);
        },
        N = function (e, n) {
            var t;
            if (G(e))
                switch (e) {
                    case P.PREV:
                        t = 0;
                        break;
                    case P.CENTER:
                        t = 0.5 * n;
                        break;
                    case P.NEXT:
                        t = n;
                        break;
                    default:
                        if (null == (t = j(e, n)))
                            throw new ne(m("align", e), p.WRONG_OPTION);
                }
            else t = e;
            return t;
        },
        D = function (e, n) {
            var t;
            if (Array.isArray(e))
                t = e.map(function (e) {
                    return j(e, n);
                });
            else {
                var i = j(e, n);
                t = [i, i];
            }
            return t.map(function (n) {
                if (null == n) throw new ne(m("bounce", e), p.WRONG_OPTION);
                return n;
            });
        },
        j = function (e, n) {
            var t = L(e);
            return null == t ? null : t.percentage * n + t.absolute;
        },
        L = function (e) {
            var n = /(?:(\+|\-)\s*)?(\d+(?:\.\d+)?(%|px)?)/g;
            if ("number" == typeof e) return { percentage: 0, absolute: e };
            for (
                var t = { percentage: 0, absolute: 0 }, i = 0, r = n.exec(e);
                null != r;

            ) {
                var o = r[1],
                    a = r[2],
                    s = r[3],
                    u = parseFloat(a);
                if ((i <= 0 && (o = o || "+"), !o)) return null;
                var l = "+" === o ? 1 : -1;
                "%" === s
                    ? (t.percentage += l * (u / 100))
                    : (t.absolute += l * u),
                    ++i,
                    (r = n.exec(e));
            }
            return 0 === i ? null : t;
        },
        z = function (e) {
            return "object" == typeof e ? e.panel : e;
        },
        V = function (e, n) {
            return e === n ? x.NONE : e < n ? x.NEXT : x.PREV;
        },
        F = function (e) {
            Array.isArray(e) || (e = [e]);
            var n = [];
            return (
                e.forEach(function (e) {
                    if (G(e)) {
                        var t = document.createElement("div");
                        for (
                            t.innerHTML = e, n.push.apply(n, s(M(t.children)));
                            t.firstChild;

                        )
                            t.removeChild(t.firstChild);
                    } else {
                        if (!e || e.nodeType !== Node.ELEMENT_NODE)
                            throw new ne(
                                v(e, ["HTMLElement", "string"]),
                                p.WRONG_TYPE
                            );
                        n.push(e);
                    }
                }),
                n
            );
        },
        H = function (e, n) {
            return A(e < 0 ? e + n : e, 0, n);
        },
        B = function (e, n) {
            var t, i;
            try {
                for (var r = o(e), a = r.next(); !a.done; a = r.next())
                    if (a.value === n) return !0;
            } catch (e) {
                t = { error: e };
            } finally {
                try {
                    a && !a.done && (i = r.return) && i.call(r);
                } finally {
                    if (t) throw t.error;
                }
            }
            return !1;
        },
        G = function (e) {
            return "string" == typeof e;
        },
        X = function (e, n, t) {
            var i = t - n;
            return (
                e < n
                    ? (e = t - ((n - e) % i))
                    : e > t && (e = n + ((e - t) % i)),
                e
            );
        },
        $ = function (e, n) {
            var t, i;
            try {
                for (var r = o(e), a = r.next(); !a.done; a = r.next()) {
                    var s = a.value;
                    if (n(s)) return s;
                }
            } catch (e) {
                t = { error: e };
            } finally {
                try {
                    a && !a.done && (i = r.return) && i.call(r);
                } finally {
                    if (t) throw t.error;
                }
            }
            return null;
        },
        Y = function (e, n) {
            for (var t = 0; t < e.length; t++) if (n(e[t])) return t;
            return -1;
        },
        U = function (e, n, t) {
            return (e - n) / (t - n);
        },
        W = function (e) {
            return window.getComputedStyle(e) || e.currentStyle;
        },
        q = function (e, n) {
            var t = n.width,
                i = n.height;
            null != t &&
                (G(t) ? (e.style.width = t) : (e.style.width = t + "px")),
                null != i &&
                    (G(i) ? (e.style.height = i) : (e.style.height = i + "px"));
        },
        K = function (e, n, t) {
            return e >= n && e <= t;
        },
        Z = function (e, n) {
            return e >= n ? e % n : e < 0 ? H(((e + 1) % n) - 1, n) : e;
        },
        J = function (e) {
            for (var n = new Array(e), t = 0; t < e; t++) n[t] = t;
            return n;
        },
        Q =
            Object.setPrototypeOf ||
            function (e, n) {
                return (e.__proto__ = n), e;
            },
        ee = {
            __proto__: null,
            merge: C,
            getElement: I,
            checkExistence: k,
            clamp: A,
            getFlickingAttached: S,
            toArray: M,
            parseAlign: N,
            parseBounce: D,
            parseArithmeticSize: j,
            parseArithmeticExpression: L,
            parseCSSSizeValue: function (e) {
                return G(e) ? e : e + "px";
            },
            parsePanelAlign: z,
            getDirection: V,
            parseElement: F,
            getMinusCompensatedIndex: H,
            includes: B,
            isString: G,
            circulatePosition: X,
            find: $,
            findRight: function (e, n) {
                for (var t = e.length - 1; t >= 0; t--) {
                    var i = e[t];
                    if (n(i)) return i;
                }
                return null;
            },
            findIndex: Y,
            getProgress: U,
            getStyle: W,
            setSize: q,
            isBetween: K,
            circulateIndex: Z,
            range: J,
            setPrototypeOf: Q,
        },
        ne = (function (e) {
            function t(n, i) {
                var r = e.call(this, n) || this;
                return (
                    Q(r, t.prototype),
                    (r.name = "FlickingError"),
                    (r.code = i),
                    r
                );
            }
            return n(t, e), t;
        })(Error),
        te = (function () {
            function e(e) {
                (this._el = e),
                    (this._width = 0),
                    (this._height = 0),
                    (this._padding = { left: 0, right: 0, top: 0, bottom: 0 }),
                    (this._isBorderBoxSizing = !1);
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "element", {
                    get: function () {
                        return this._el;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "width", {
                    get: function () {
                        return (
                            this._width -
                            this._padding.left -
                            this._padding.right
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "height", {
                    get: function () {
                        return (
                            this._height -
                            this._padding.top -
                            this._padding.bottom
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "padding", {
                    get: function () {
                        return this._padding;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.setSize = function (e) {
                    var n = e.width,
                        t = e.height,
                        i = this._el,
                        r = this._padding,
                        o = this._isBorderBoxSizing;
                    if (null != n)
                        if (G(n)) i.style.width = n;
                        else {
                            var a = o ? n + r.left + r.right : n;
                            i.style.width = a + "px";
                        }
                    if (null != t)
                        if (G(t)) i.style.height = t;
                        else {
                            var s = o ? t + r.top + r.bottom : t;
                            i.style.height = s + "px";
                        }
                    this.resize();
                }),
                (n.resize = function () {
                    var e = this._el,
                        n = W(e);
                    (this._width = e.clientWidth),
                        (this._height = e.clientHeight),
                        (this._padding = {
                            left: n.paddingLeft ? parseFloat(n.paddingLeft) : 0,
                            right: n.paddingRight
                                ? parseFloat(n.paddingRight)
                                : 0,
                            top: n.paddingTop ? parseFloat(n.paddingTop) : 0,
                            bottom: n.paddingBottom
                                ? parseFloat(n.paddingBottom)
                                : 0,
                        }),
                        (this._isBorderBoxSizing =
                            "border-box" === n.boxSizing);
                }),
                e
            );
        })(),
        ie = (function () {
            function e(e) {
                var n,
                    t = this;
                (this._onResize = function () {
                    var e = t._flicking,
                        n = e.resizeDebounce,
                        i = e.maxResizeDebounce;
                    n <= 0
                        ? e.resize()
                        : (t._maxResizeDebounceTimer <= 0 &&
                              i > 0 &&
                              i >= n &&
                              (t._maxResizeDebounceTimer = window.setTimeout(
                                  t._doScheduledResize,
                                  i
                              )),
                          t._resizeTimer > 0 &&
                              (clearTimeout(t._resizeTimer),
                              (t._resizeTimer = 0)),
                          (t._resizeTimer = window.setTimeout(
                              t._doScheduledResize,
                              n
                          )));
                }),
                    (this._doScheduledResize = function () {
                        clearTimeout(t._resizeTimer),
                            clearTimeout(t._maxResizeDebounceTimer),
                            (t._maxResizeDebounceTimer = -1),
                            (t._resizeTimer = -1),
                            t._flicking.resize();
                    }),
                    (this._skipFirstResize =
                        ((n = !0),
                        function () {
                            n ? (n = !1) : t._onResize();
                        })),
                    (this._flicking = e),
                    (this._enabled = !1),
                    (this._resizeObserver = null),
                    (this._resizeTimer = -1),
                    (this._maxResizeDebounceTimer = -1);
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "enabled", {
                    get: function () {
                        return this._enabled;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.enable = function () {
                    var e = this._flicking,
                        n = e.viewport;
                    if (
                        (this._enabled && this.disable(),
                        e.useResizeObserver && window.ResizeObserver)
                    ) {
                        var t =
                            0 !== n.width || 0 !== n.height
                                ? new ResizeObserver(this._skipFirstResize)
                                : new ResizeObserver(this._onResize);
                        t.observe(e.viewport.element),
                            (this._resizeObserver = t);
                    } else window.addEventListener("resize", this._onResize);
                    return (this._enabled = !0), this;
                }),
                (n.disable = function () {
                    if (!this._enabled) return this;
                    var e = this._resizeObserver;
                    return (
                        e
                            ? (e.disconnect(), (this._resizeObserver = null))
                            : window.removeEventListener(
                                  "resize",
                                  this._onResize
                              ),
                        (this._enabled = !1),
                        this
                    );
                }),
                e
            );
        })(),
        re = (function () {
            function e(e) {
                (this._element = e), (this._rendered = !0);
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "element", {
                    get: function () {
                        return this._element;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "rendered", {
                    get: function () {
                        return this._rendered;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.show = function (e) {
                    var n = this.element,
                        t = e.camera.element;
                    n.parentElement !== t &&
                        (t.appendChild(n), (this._rendered = !0));
                }),
                (n.hide = function (e) {
                    var n = this.element,
                        t = e.camera.element;
                    n.parentElement === t &&
                        (t.removeChild(n), (this._rendered = !1));
                }),
                e
            );
        })(),
        oe = (function () {
            function e(e) {
                this._flicking = e;
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "element", {
                    get: function () {
                        return this._virtualElement.nativeElement;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "rendered", {
                    get: function () {
                        return this._virtualElement.visible;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "_virtualElement", {
                    get: function () {
                        var e = this._flicking,
                            n = this._panel.elementIndex;
                        return e.virtual.elements[n];
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.init = function (e) {
                    this._panel = e;
                }),
                (n.show = function () {}),
                (n.hide = function () {}),
                e
            );
        })(),
        ae = (function () {
            function e(e, n) {
                var t, i, r, o;
                (this._flicking = e),
                    (this._renderPanel =
                        null !== (t = null == n ? void 0 : n.renderPanel) &&
                        void 0 !== t
                            ? t
                            : function () {
                                  return "";
                              }),
                    (this._initialPanelCount =
                        null !==
                            (i = null == n ? void 0 : n.initialPanelCount) &&
                        void 0 !== i
                            ? i
                            : -1),
                    (this._cache =
                        null !== (r = null == n ? void 0 : n.cache) &&
                        void 0 !== r &&
                        r),
                    (this._panelClass =
                        null !== (o = null == n ? void 0 : n.panelClass) &&
                        void 0 !== o
                            ? o
                            : w.DEFAULT_VIRTUAL),
                    (this._elements = []);
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "elements", {
                    get: function () {
                        return this._elements;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "renderPanel", {
                    get: function () {
                        return this._renderPanel;
                    },
                    set: function (e) {
                        (this._renderPanel = e),
                            this._flicking.renderer.panels.forEach(function (
                                e
                            ) {
                                return e.uncacheRenderResult();
                            });
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "initialPanelCount", {
                    get: function () {
                        return this._initialPanelCount;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "cache", {
                    get: function () {
                        return this._cache;
                    },
                    set: function (e) {
                        this._cache = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "panelClass", {
                    get: function () {
                        return this._panelClass;
                    },
                    set: function (e) {
                        this._panelClass = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.init = function () {
                    var e = this._flicking;
                    if (e.virtualEnabled) {
                        e.externalRenderer ||
                            e.renderExternal ||
                            this._initVirtualElements();
                        var n = e.camera.children;
                        this._elements = n.map(function (e) {
                            return { nativeElement: e, visible: !0 };
                        });
                    }
                }),
                (n.show = function (e) {
                    var n = this._elements[e],
                        t = n.nativeElement;
                    (n.visible = !0), t.style.display && (t.style.display = "");
                }),
                (n.hide = function (e) {
                    var n = this._elements[e],
                        t = n.nativeElement;
                    (n.visible = !1), (t.style.display = "none");
                }),
                (n.append = function (e) {
                    void 0 === e && (e = 1);
                    var n = this._flicking;
                    return this.insert(n.panels.length, e);
                }),
                (n.prepend = function (e) {
                    return void 0 === e && (e = 1), this.insert(0, e);
                }),
                (n.insert = function (e, n) {
                    return (
                        void 0 === n && (n = 1),
                        n <= 0
                            ? []
                            : this._flicking.renderer.batchInsert({
                                  index: e,
                                  elements: J(n),
                                  hasDOMInElements: !1,
                              })
                    );
                }),
                (n.remove = function (e, n) {
                    return n <= 0
                        ? []
                        : this._flicking.renderer.batchRemove({
                              index: e,
                              deleteCount: n,
                              hasDOMInElements: !1,
                          });
                }),
                (n._initVirtualElements = function () {
                    var e = this,
                        n = this._flicking,
                        t = n.camera.element,
                        i = n.panelsPerView,
                        r = document.createDocumentFragment();
                    J(i + 1)
                        .map(function (n) {
                            var t = document.createElement("div");
                            return (
                                (t.className = e._panelClass),
                                (t.dataset.elementIndex = n.toString()),
                                t
                            );
                        })
                        .forEach(function (e) {
                            r.appendChild(e);
                        }),
                        t.appendChild(r);
                }),
                e
            );
        })();
    function se(e, n) {
        for (var t = e.length, i = 0; i < t; ++i) if (n(e[i], i)) return !0;
        return !1;
    }
    function ue(e, n) {
        for (var t = e.length, i = 0; i < t; ++i) if (n(e[i], i)) return e[i];
        return null;
    }
    function le(e, n) {
        try {
            return new RegExp(e, "g").exec(n);
        } catch (e) {
            return null;
        }
    }
    function ce(e) {
        return e.replace(/_/g, ".");
    }
    function he(e, n) {
        var t = null,
            i = "-1";
        return (
            se(e, function (e) {
                var r = le("(" + e.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", n);
                return !(
                    !r ||
                    e.brand ||
                    ((t = e),
                    (i = r[3] || "-1"),
                    e.versionAlias
                        ? (i = e.versionAlias)
                        : e.versionTest &&
                          (i =
                              (function (e, n) {
                                  var t = le(
                                      "(" +
                                          e +
                                          ")((?:\\/|\\s|:)([0-9|\\.|_]+))",
                                      n
                                  );
                                  return t ? t[3] : "";
                              })(e.versionTest.toLowerCase(), n) || i),
                    (i = ce(i)),
                    0)
                );
            }),
            { preset: t, version: i }
        );
    }
    function fe(e, n) {
        var t = { brand: "", version: "-1" };
        return (
            se(e, function (e) {
                var i = de(n, e);
                return (
                    !!i &&
                    ((t.brand = e.id),
                    (t.version = e.versionAlias || i.version),
                    "-1" !== t.version)
                );
            }),
            t
        );
    }
    function de(e, n) {
        return ue(e, function (e) {
            var t = e.brand;
            return le("" + n.test, t.toLowerCase());
        });
    }
    var ge = [
            { test: "phantomjs", id: "phantomjs" },
            { test: "whale", id: "whale" },
            { test: "edgios|edge|edg", id: "edge" },
            {
                test: "msie|trident|windows phone",
                id: "ie",
                versionTest: "iemobile|msie|rv",
            },
            { test: "miuibrowser", id: "miui browser" },
            { test: "samsungbrowser", id: "samsung internet" },
            { test: "samsung", id: "samsung internet", versionTest: "version" },
            { test: "chrome|crios", id: "chrome" },
            { test: "firefox|fxios", id: "firefox" },
            { test: "android", id: "android browser", versionTest: "version" },
            {
                test: "safari|iphone|ipad|ipod",
                id: "safari",
                versionTest: "version",
            },
        ],
        pe = [
            {
                test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
                id: "chrome",
                versionTest: "chrome",
            },
            { test: "chromium", id: "chrome" },
            { test: "whale", id: "chrome", versionAlias: "-1", brand: !0 },
        ],
        ve = [
            {
                test: "applewebkit",
                id: "webkit",
                versionTest: "applewebkit|safari",
            },
        ],
        _e = [
            { test: "(?=(iphone|ipad))(?!(.*version))", id: "webview" },
            {
                test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
                id: "webview",
            },
            { test: "webview", id: "webview" },
        ],
        me = [
            { test: "windows phone", id: "windows phone" },
            { test: "windows 2000", id: "window", versionAlias: "5.0" },
            { test: "windows nt", id: "window" },
            {
                test: "iphone|ipad|ipod",
                id: "ios",
                versionTest: "iphone os|cpu os",
            },
            { test: "mac os x", id: "mac" },
            { test: "android", id: "android" },
            { test: "tizen", id: "tizen" },
            { test: "webos|web0s", id: "webos" },
        ];
    var be = function (e, n) {
        return (
            (be =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, n) {
                        e.__proto__ = n;
                    }) ||
                function (e, n) {
                    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
                }),
            be(e, n)
        );
    };
    function Ee(e, n) {
        function t() {
            this.constructor = e;
        }
        be(e, n),
            (e.prototype =
                null === n
                    ? Object.create(n)
                    : ((t.prototype = n.prototype), new t()));
    }
    var ye,
        Pe = function () {
            return (
                (Pe =
                    Object.assign ||
                    function (e) {
                        for (var n, t = 1, i = arguments.length; t < i; t++)
                            for (var r in (n = arguments[t]))
                                Object.prototype.hasOwnProperty.call(n, r) &&
                                    (e[r] = n[r]);
                        return e;
                    }),
                Pe.apply(this, arguments)
            );
        };
    ye =
        "undefined" == typeof window
            ? { navigator: { userAgent: "" } }
            : window;
    var xe,
        Oe = "left",
        we = "right",
        Te = "middle",
        Re =
            "ontouchstart" in ye &&
            "safari" ===
                ((function () {
                    if (
                        "undefined" == typeof navigator ||
                        !navigator ||
                        !navigator.userAgentData
                    )
                        return !1;
                    var e = navigator.userAgentData,
                        n = e.brands || e.uaList;
                    return !(!n || !n.length);
                })()
                    ? (function (e) {
                          var n = navigator.userAgentData,
                              t = (n.uaList || n.brands).slice(),
                              i = n.mobile || !1,
                              r = t[0],
                              o = {
                                  name: r.brand,
                                  version: r.version,
                                  majorVersion: -1,
                                  webkit: !1,
                                  webkitVersion: "-1",
                                  chromium: !1,
                                  chromiumVersion: "-1",
                                  webview: !!fe(_e, t).brand,
                              },
                              a = {
                                  name: "unknown",
                                  version: "-1",
                                  majorVersion: -1,
                              };
                          o.webkit =
                              !o.chromium &&
                              se(ve, function (e) {
                                  return de(t, e);
                              });
                          var s = fe(pe, t);
                          if (
                              ((o.chromium = !!s.brand),
                              (o.chromiumVersion = s.version),
                              !o.chromium)
                          ) {
                              var u = fe(ve, t);
                              (o.webkit = !!u.brand),
                                  (o.webkitVersion = u.version);
                          }
                          var l = fe(ge, t);
                          return (
                              l.brand &&
                                  ((o.name = l.brand), (o.version = l.version)),
                              "Linux armv8l" === navigator.platform
                                  ? (a.name = "android")
                                  : o.webkit && (a.name = i ? "ios" : "mac"),
                              "ios" === a.name &&
                                  o.webview &&
                                  (o.version = "-1"),
                              (a.version = ce(a.version)),
                              (o.version = ce(o.version)),
                              (a.majorVersion = parseInt(a.version, 10)),
                              (o.majorVersion = parseInt(o.version, 10)),
                              { browser: o, os: a, isMobile: i, isHints: !0 }
                          );
                      })()
                    : (function (e) {
                          var n = (function (e) {
                                  var n = e;
                                  if (void 0 === n) {
                                      if (
                                          "undefined" == typeof navigator ||
                                          !navigator
                                      )
                                          return "";
                                      n = navigator.userAgent || "";
                                  }
                                  return n.toLowerCase();
                              })(e),
                              t = !!/mobi/g.exec(n),
                              i = {
                                  name: "unknown",
                                  version: "-1",
                                  majorVersion: -1,
                                  webview: !!he(_e, n).preset,
                                  chromium: !1,
                                  chromiumVersion: "-1",
                                  webkit: !1,
                                  webkitVersion: "-1",
                              },
                              r = {
                                  name: "unknown",
                                  version: "-1",
                                  majorVersion: -1,
                              },
                              o = he(ge, n),
                              a = o.preset,
                              s = o.version,
                              u = he(me, n),
                              l = u.preset,
                              c = u.version,
                              h = he(pe, n);
                          if (
                              ((i.chromium = !!h.preset),
                              (i.chromiumVersion = h.version),
                              !i.chromium)
                          ) {
                              var f = he(ve, n);
                              (i.webkit = !!f.preset),
                                  (i.webkitVersion = f.version);
                          }
                          return (
                              l &&
                                  ((r.name = l.id),
                                  (r.version = c),
                                  (r.majorVersion = parseInt(c, 10))),
                              a &&
                                  ((i.name = a.id),
                                  (i.version = s),
                                  i.webview &&
                                      "ios" === r.name &&
                                      "safari" !== i.name &&
                                      (i.webview = !1)),
                              (i.majorVersion = parseInt(i.version, 10)),
                              { browser: i, os: r, isMobile: t, isHints: !1 }
                          );
                      })(xe)
                ).browser.name,
        Ce = (function () {
            if ("undefined" == typeof document) return "";
            for (
                var e = (
                        document.head ||
                        document.getElementsByTagName("head")[0]
                    ).style,
                    n = [
                        "transform",
                        "webkitTransform",
                        "msTransform",
                        "mozTransform",
                    ],
                    t = 0,
                    i = n.length;
                t < i;
                t++
            )
                if (n[t] in e) return n[t];
            return "";
        })(),
        Ie = {
            "touch-action": "none",
            "user-select": "none",
            "-webkit-user-drag": "none",
        },
        ke = function (e) {
            for (var n = [], t = 0, i = e.length; t < i; t++) n.push(e[t]);
            return n;
        },
        Ae = function (e, n) {
            var t;
            if ((void 0 === n && (n = !1), "string" == typeof e)) {
                if (e.match(/^<([a-z]+)\s*([^>]*)>/)) {
                    var i = document.createElement("div");
                    (i.innerHTML = e), (t = ke(i.childNodes));
                } else t = ke(document.querySelectorAll(e));
                n || (t = t.length >= 1 ? t[0] : void 0);
            } else
                e === ye
                    ? (t = e)
                    : !e.nodeName || (1 !== e.nodeType && 9 !== e.nodeType)
                    ? ("jQuery" in ye && e instanceof jQuery) ||
                      e.constructor.prototype.jquery
                        ? (t = n ? e.toArray() : e.get(0))
                        : Array.isArray(e) &&
                          ((t = e.map(function (e) {
                              return Ae(e);
                          })),
                          n || (t = t.length >= 1 ? t[0] : void 0))
                    : (t = e);
            return t;
        },
        Se = ye.requestAnimationFrame || ye.webkitRequestAnimationFrame,
        Me = ye.cancelAnimationFrame || ye.webkitCancelAnimationFrame;
    if (Se && !Me) {
        var Ne = {},
            De = Se;
        (Se = function (e) {
            var n = De(function (t) {
                Ne[n] && e(t);
            });
            return (Ne[n] = !0), n;
        }),
            (Me = function (e) {
                delete Ne[e];
            });
    } else
        (Se && Me) ||
            ((Se = function (e) {
                return ye.setTimeout(function () {
                    e(
                        (ye.performance &&
                            ye.performance.now &&
                            ye.performance.now()) ||
                            new Date().getTime()
                    );
                }, 16);
            }),
            (Me = ye.clearTimeout));
    var je,
        Le = function (e, n) {
            var t = {};
            for (var i in e) i && (t[i] = n(e[i], i));
            return t;
        },
        ze = function (e, n) {
            var t = {};
            for (var i in e) i && n(e[i], i) && (t[i] = e[i]);
            return t;
        },
        Ve = function (e, n) {
            for (var t in e) if (t && !n(e[t], t)) return !1;
            return !0;
        },
        Fe = function (e, n) {
            return Ve(e, function (e, t) {
                return e === n[t];
            });
        },
        He = {},
        Be = function (e, n) {
            return He[n] || (He[n] = $e(n)), He[n](e);
        },
        Ge = function (e, n) {
            return e && n
                ? Le(e, function (e, t) {
                      return Be(e, "number" == typeof n ? n : n[t]);
                  })
                : e;
        },
        Xe = function (e) {
            if (!isFinite(e)) return 0;
            var n = "" + e;
            if (n.indexOf("e") >= 0) {
                for (var t = 0, i = 1; Math.round(e * i) / i !== e; )
                    (i *= 10), t++;
                return t;
            }
            return n.indexOf(".") >= 0 ? n.length - n.indexOf(".") - 1 : 0;
        },
        $e = function (e) {
            var n = e < 1 ? Math.pow(10, Xe(e)) : 1;
            return function (t) {
                return 0 === e ? 0 : Math.round(Math.round(t / e) * e * n) / n;
            };
        },
        Ye = function (e, n) {
            var t = {};
            if (e && e.style) {
                var i = n || Ie;
                Object.keys(i).forEach(function (n) {
                    (t[n] = e.style[n]), (e.style[n] = i[n]);
                });
            }
            return t;
        },
        Ue = (function () {
            function e(e) {
                this._axes = e;
            }
            var n = e.prototype;
            return (
                (n.hold = function (e, n) {
                    var t = this._getRoundPos(e).roundPos;
                    this._axes.trigger(
                        new g("hold", {
                            pos: t,
                            input: n.input || null,
                            inputEvent: n.event || null,
                            isTrusted: !0,
                        })
                    );
                }),
                (n.triggerRelease = function (e) {
                    var n = this._getRoundPos(e.destPos, e.depaPos),
                        t = n.roundPos,
                        i = n.roundDepa;
                    (e.destPos = t),
                        (e.depaPos = i),
                        (e.setTo = this._createUserControll(
                            e.destPos,
                            e.duration
                        )),
                        this._axes.trigger(
                            new g(
                                "release",
                                Pe(Pe({}, e), {
                                    bounceRatio: this._getBounceRatio(t),
                                })
                            )
                        );
                }),
                (n.triggerChange = function (e, n, t, i) {
                    void 0 === i && (i = !1);
                    var r = this.animationManager,
                        o = r.axisManager,
                        a = r.getEventInfo(),
                        s = this._getRoundPos(e, n),
                        u = s.roundPos,
                        l = s.roundDepa,
                        c = o.moveTo(u, l),
                        h =
                            (null == t ? void 0 : t.event) ||
                            (null == a ? void 0 : a.event) ||
                            null,
                        f = {
                            pos: c.pos,
                            delta: c.delta,
                            bounceRatio: this._getBounceRatio(c.pos),
                            holding: i,
                            inputEvent: h,
                            isTrusted: !!h,
                            input:
                                (null == t ? void 0 : t.input) ||
                                (null == a ? void 0 : a.input) ||
                                null,
                            set: h
                                ? this._createUserControll(c.pos)
                                : function () {},
                        },
                        d = new g("change", f);
                    return (
                        this._axes.trigger(d),
                        h && o.set(f.set().destPos),
                        !d.isCanceled()
                    );
                }),
                (n.triggerAnimationStart = function (e) {
                    var n = this._getRoundPos(e.destPos, e.depaPos),
                        t = n.roundPos,
                        i = n.roundDepa;
                    (e.destPos = t),
                        (e.depaPos = i),
                        (e.setTo = this._createUserControll(
                            e.destPos,
                            e.duration
                        ));
                    var r = new g("animationStart", e);
                    return this._axes.trigger(r), !r.isCanceled();
                }),
                (n.triggerAnimationEnd = function (e) {
                    void 0 === e && (e = !1),
                        this._axes.trigger(
                            new g("animationEnd", { isTrusted: e })
                        );
                }),
                (n.triggerFinish = function (e) {
                    void 0 === e && (e = !1),
                        this._axes.trigger(new g("finish", { isTrusted: e }));
                }),
                (n.setAnimationManager = function (e) {
                    this.animationManager = e;
                }),
                (n.destroy = function () {
                    this._axes.off();
                }),
                (n._createUserControll = function (e, n) {
                    void 0 === n && (n = 0);
                    var t = { destPos: Pe({}, e), duration: n };
                    return function (e, n) {
                        return (
                            e && (t.destPos = Pe({}, e)),
                            void 0 !== n && (t.duration = n),
                            t
                        );
                    };
                }),
                (n._getRoundPos = function (e, n) {
                    var t = this._axes.options.round;
                    return { roundPos: Ge(e, t), roundDepa: Ge(n, t) };
                }),
                (n._getBounceRatio = function (e) {
                    return this._axes.axisManager.map(e, function (e, n) {
                        return e < n.range[0] && 0 !== n.bounce[0]
                            ? (n.range[0] - e) / n.bounce[0]
                            : e > n.range[1] && 0 !== n.bounce[1]
                            ? (e - n.range[1]) / n.bounce[1]
                            : 0;
                    });
                }),
                e
            );
        })(),
        We = (function () {
            function e(e) {
                (this._options = e), (this._prevented = !1);
            }
            var n = e.prototype;
            return (
                (n.isInterrupting = function () {
                    return this._options.interruptable || this._prevented;
                }),
                (n.isInterrupted = function () {
                    return !this._options.interruptable && this._prevented;
                }),
                (n.setInterrupt = function (e) {
                    this._options.interruptable || (this._prevented = e);
                }),
                e
            );
        })(),
        qe = function (e, n, t, i) {
            var r = e,
                o = [
                    t[0] ? n[0] : i ? n[0] - i[0] : n[0],
                    t[1] ? n[1] : i ? n[1] + i[1] : n[1],
                ];
            return (r = Math.max(o[0], r)), Math.min(o[1], r);
        },
        Ke = function (e, n) {
            return e < n[0] || e > n[1];
        },
        Ze = function (e, n, t) {
            return (t[1] && e > n[1]) || (t[0] && e < n[0]);
        },
        Je = function (e, n, t) {
            var i = e,
                r = n[0],
                o = n[1],
                a = o - r;
            return (
                t[1] && e > o && (i = ((i - o) % a) + r),
                t[0] && e < r && (i = ((i - r) % a) + o),
                i
            );
        },
        Qe = (function () {
            function e(e) {
                var n = this;
                (this._axis = e),
                    this._complementOptions(),
                    (this._pos = Object.keys(this._axis).reduce(function (
                        e,
                        t
                    ) {
                        return (e[t] = n._axis[t].range[0]), e;
                    },
                    {}));
            }
            var n = e.prototype;
            return (
                (n.getDelta = function (e, n) {
                    var t = this.get(e);
                    return Le(this.get(n), function (e, n) {
                        return e - t[n];
                    });
                }),
                (n.get = function (e) {
                    var n = this;
                    return e && Array.isArray(e)
                        ? e.reduce(function (e, t) {
                              return t && t in n._pos && (e[t] = n._pos[t]), e;
                          }, {})
                        : Pe(Pe({}, this._pos), e || {});
                }),
                (n.moveTo = function (e, n) {
                    void 0 === n && (n = this._pos);
                    var t = Le(this._pos, function (t, i) {
                        return i in e && i in n ? e[i] - n[i] : 0;
                    });
                    return (
                        this.set(
                            this.map(e, function (e, n) {
                                return n ? Je(e, n.range, n.circular) : 0;
                            })
                        ),
                        { pos: Pe({}, this._pos), delta: t }
                    );
                }),
                (n.set = function (e) {
                    for (var n in e)
                        n && n in this._pos && (this._pos[n] = e[n]);
                }),
                (n.every = function (e, n) {
                    var t = this._axis;
                    return Ve(e, function (e, i) {
                        return n(e, t[i], i);
                    });
                }),
                (n.filter = function (e, n) {
                    var t = this._axis;
                    return ze(e, function (e, i) {
                        return n(e, t[i], i);
                    });
                }),
                (n.map = function (e, n) {
                    var t = this._axis;
                    return Le(e, function (e, i) {
                        return n(e, t[i], i);
                    });
                }),
                (n.isOutside = function (e) {
                    return !this.every(
                        e ? this.get(e) : this._pos,
                        function (e, n) {
                            return !Ke(e, n.range);
                        }
                    );
                }),
                (n.getAxisOptions = function (e) {
                    return this._axis[e];
                }),
                (n._complementOptions = function () {
                    var e = this;
                    Object.keys(this._axis).forEach(function (n) {
                        (e._axis[n] = Pe(
                            {
                                range: [0, 100],
                                bounce: [0, 0],
                                circular: [!1, !1],
                            },
                            e._axis[n]
                        )),
                            ["bounce", "circular"].forEach(function (t) {
                                var i = e._axis,
                                    r = i[n][t];
                                /string|number|boolean/.test(typeof r) &&
                                    (i[n][t] = [r, r]);
                            });
                    });
                }),
                e
            );
        })(),
        en = "ontouchstart" in ye,
        nn = "PointerEvent" in ye,
        tn = nn || "MSPointerEvent" in ye,
        rn = (function () {
            function e() {
                var e = this;
                this._stopContextMenu = function (n) {
                    n.preventDefault(),
                        ye.removeEventListener(
                            "contextmenu",
                            e._stopContextMenu
                        );
                };
            }
            var n = e.prototype;
            return (
                (n.extendEvent = function (e) {
                    var n,
                        t,
                        i,
                        r = this.prevEvent,
                        o = this._getCenter(e),
                        a = r ? this._getMovement(e) : { x: 0, y: 0 },
                        s = r ? this._getScale(e) : 1,
                        u = r
                            ? ((t = o.x - r.center.x),
                              (i = o.y - r.center.y),
                              (180 * Math.atan2(i, t)) / Math.PI)
                            : 0,
                        l = r ? r.deltaX + a.x : a.x,
                        c = r ? r.deltaY + a.y : a.y,
                        h = a.x,
                        f = a.y,
                        d = this._latestInterval,
                        g = Date.now(),
                        p = d ? g - d.timestamp : 0,
                        v = r ? r.velocityX : 0,
                        _ = r ? r.velocityY : 0;
                    return (
                        (!d || p >= 16) &&
                            (d &&
                                ((v = (n = [
                                    (l - d.deltaX) / p,
                                    (c - d.deltaY) / p,
                                ])[0]),
                                (_ = n[1])),
                            (this._latestInterval = {
                                timestamp: g,
                                deltaX: l,
                                deltaY: c,
                            })),
                        {
                            srcEvent: e,
                            scale: s,
                            angle: u,
                            center: o,
                            deltaX: l,
                            deltaY: c,
                            offsetX: h,
                            offsetY: f,
                            velocityX: v,
                            velocityY: _,
                            preventSystemEvent: !0,
                        }
                    );
                }),
                (n._getDistance = function (e, n) {
                    var t = n.clientX - e.clientX,
                        i = n.clientY - e.clientY;
                    return Math.sqrt(t * t + i * i);
                }),
                (n._getButton = function (e) {
                    var n = { 1: Oe, 2: we, 4: Te };
                    return (this._isTouchEvent(e) ? Oe : n[e.buttons]) || null;
                }),
                (n._isTouchEvent = function (e) {
                    return e.type.indexOf("touch") > -1;
                }),
                (n._isValidButton = function (e, n) {
                    return n.indexOf(e) > -1;
                }),
                (n._preventMouseButton = function (e, n) {
                    n === we
                        ? ye.addEventListener(
                              "contextmenu",
                              this._stopContextMenu
                          )
                        : n === Te && e.preventDefault();
                }),
                e
            );
        })(),
        on = (function (e) {
            function n() {
                var n = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (n.start = ["mousedown"]),
                    (n.move = ["mousemove"]),
                    (n.end = ["mouseup"]),
                    n
                );
            }
            Ee(n, e);
            var t = n.prototype;
            return (
                (t.onEventStart = function (e, n) {
                    var t = this._getButton(e);
                    return n && !this._isValidButton(t, n)
                        ? null
                        : (this._preventMouseButton(e, t), this.extendEvent(e));
                }),
                (t.onEventMove = function (e, n) {
                    return n && !this._isValidButton(this._getButton(e), n)
                        ? null
                        : this.extendEvent(e);
                }),
                (t.onEventEnd = function () {}),
                (t.onRelease = function () {
                    this.prevEvent = null;
                }),
                (t.getTouches = function () {
                    return 0;
                }),
                (t._getScale = function () {
                    return 1;
                }),
                (t._getCenter = function (e) {
                    return { x: e.clientX, y: e.clientY };
                }),
                (t._getMovement = function (e) {
                    var n = this.prevEvent.srcEvent;
                    return { x: e.pageX - n.pageX, y: e.pageY - n.pageY };
                }),
                n
            );
        })(rn),
        an = (function (e) {
            function n() {
                var n = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (n.start = ["touchstart"]),
                    (n.move = ["touchmove"]),
                    (n.end = ["touchend", "touchcancel"]),
                    n
                );
            }
            Ee(n, e);
            var t = n.prototype;
            return (
                (t.onEventStart = function (e) {
                    return (this._baseTouches = e.touches), this.extendEvent(e);
                }),
                (t.onEventMove = function (e) {
                    return this.extendEvent(e);
                }),
                (t.onEventEnd = function (e) {
                    this._baseTouches = e.touches;
                }),
                (t.onRelease = function () {
                    (this.prevEvent = null), (this._baseTouches = null);
                }),
                (t.getTouches = function (e) {
                    return e.touches.length;
                }),
                (t._getScale = function (e) {
                    return 2 !== e.touches.length ||
                        this._baseTouches.length < 2
                        ? null
                        : this._getDistance(e.touches[0], e.touches[1]) /
                              this._getDistance(
                                  this._baseTouches[0],
                                  this._baseTouches[1]
                              );
                }),
                (t._getCenter = function (e) {
                    return { x: e.touches[0].clientX, y: e.touches[0].clientY };
                }),
                (t._getMovement = function (e) {
                    var n = this.prevEvent.srcEvent;
                    return e.touches[0].identifier !== n.touches[0].identifier
                        ? { x: 0, y: 0 }
                        : {
                              x: e.touches[0].pageX - n.touches[0].pageX,
                              y: e.touches[0].pageY - n.touches[0].pageY,
                          };
                }),
                n
            );
        })(rn),
        sn = (function (e) {
            function n() {
                var n = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (n.start = nn ? ["pointerdown"] : ["MSPointerDown"]),
                    (n.move = nn ? ["pointermove"] : ["MSPointerMove"]),
                    (n.end = nn
                        ? ["pointerup", "pointercancel"]
                        : ["MSPointerUp", "MSPointerCancel"]),
                    (n._firstInputs = []),
                    (n._recentInputs = []),
                    n
                );
            }
            Ee(n, e);
            var t = n.prototype;
            return (
                (t.onEventStart = function (e, n) {
                    var t = this._getButton(e);
                    return n && !this._isValidButton(t, n)
                        ? null
                        : (this._preventMouseButton(e, t),
                          this._updatePointerEvent(e),
                          this.extendEvent(e));
                }),
                (t.onEventMove = function (e, n) {
                    return n && !this._isValidButton(this._getButton(e), n)
                        ? null
                        : (this._updatePointerEvent(e), this.extendEvent(e));
                }),
                (t.onEventEnd = function (e) {
                    this._removePointerEvent(e);
                }),
                (t.onRelease = function () {
                    (this.prevEvent = null),
                        (this._firstInputs = []),
                        (this._recentInputs = []);
                }),
                (t.getTouches = function () {
                    return this._recentInputs.length;
                }),
                (t._getScale = function () {
                    return 2 !== this._recentInputs.length
                        ? null
                        : this._getDistance(
                              this._recentInputs[0],
                              this._recentInputs[1]
                          ) /
                              this._getDistance(
                                  this._firstInputs[0],
                                  this._firstInputs[1]
                              );
                }),
                (t._getCenter = function (e) {
                    return { x: e.clientX, y: e.clientY };
                }),
                (t._getMovement = function (e) {
                    var n = this.prevEvent.srcEvent;
                    return e.pointerId !== n.pointerId
                        ? { x: 0, y: 0 }
                        : { x: e.pageX - n.pageX, y: e.pageY - n.pageY };
                }),
                (t._updatePointerEvent = function (e) {
                    var n = this,
                        t = !1;
                    this._recentInputs.forEach(function (i, r) {
                        i.pointerId === e.pointerId &&
                            ((t = !0), (n._recentInputs[r] = e));
                    }),
                        t ||
                            (this._firstInputs.push(e),
                            this._recentInputs.push(e));
                }),
                (t._removePointerEvent = function (e) {
                    (this._firstInputs = this._firstInputs.filter(function (n) {
                        return n.pointerId !== e.pointerId;
                    })),
                        (this._recentInputs = this._recentInputs.filter(
                            function (n) {
                                return n.pointerId !== e.pointerId;
                            }
                        ));
                }),
                n
            );
        })(rn),
        un = (function (e) {
            function n() {
                var n = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (n.start = ["mousedown", "touchstart"]),
                    (n.move = ["mousemove", "touchmove"]),
                    (n.end = ["mouseup", "touchend", "touchcancel"]),
                    n
                );
            }
            Ee(n, e);
            var t = n.prototype;
            return (
                (t.onEventStart = function (e, n) {
                    var t = this._getButton(e);
                    return (
                        this._isTouchEvent(e) &&
                            (this._baseTouches = e.touches),
                        n && !this._isValidButton(t, n)
                            ? null
                            : (this._preventMouseButton(e, t),
                              this.extendEvent(e))
                    );
                }),
                (t.onEventMove = function (e, n) {
                    return n && !this._isValidButton(this._getButton(e), n)
                        ? null
                        : this.extendEvent(e);
                }),
                (t.onEventEnd = function (e) {
                    this._isTouchEvent(e) && (this._baseTouches = e.touches);
                }),
                (t.onRelease = function () {
                    (this.prevEvent = null), (this._baseTouches = null);
                }),
                (t.getTouches = function (e) {
                    return this._isTouchEvent(e) ? e.touches.length : 0;
                }),
                (t._getScale = function (e) {
                    return this._isTouchEvent(e)
                        ? 2 !== e.touches.length || this._baseTouches.length < 2
                            ? 1
                            : this._getDistance(e.touches[0], e.touches[1]) /
                              this._getDistance(
                                  this._baseTouches[0],
                                  this._baseTouches[1]
                              )
                        : this.prevEvent.scale;
                }),
                (t._getCenter = function (e) {
                    return this._isTouchEvent(e)
                        ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
                        : { x: e.clientX, y: e.clientY };
                }),
                (t._getMovement = function (e) {
                    var n = this,
                        t = this.prevEvent.srcEvent,
                        i = [e, t].map(function (t) {
                            return n._isTouchEvent(e)
                                ? {
                                      id: t.touches[0].identifier,
                                      x: t.touches[0].pageX,
                                      y: t.touches[0].pageY,
                                  }
                                : { id: null, x: t.pageX, y: t.pageY };
                        }),
                        r = i[0],
                        o = i[1];
                    return r.id === o.id
                        ? { x: r.x - o.x, y: r.y - o.y }
                        : { x: 0, y: 0 };
                }),
                n
            );
        })(rn),
        ln = function (e, n) {
            return n.reduce(function (n, t, i) {
                return e[i] && (n[e[i]] = t), n;
            }, {});
        },
        cn = (function () {
            function e(e) {
                var n = e.options,
                    t = e.interruptManager,
                    i = e.eventManager,
                    r = e.axisManager,
                    o = e.animationManager;
                (this._isOutside = !1),
                    (this._moveDistance = null),
                    (this._isStopped = !1),
                    (this.options = n),
                    (this._interruptManager = t),
                    (this._eventManager = i),
                    (this._axisManager = r),
                    (this._animationManager = o);
            }
            var n = e.prototype;
            return (
                (n.get = function (e) {
                    return this._axisManager.get(e.axes);
                }),
                (n.hold = function (e, n) {
                    if (
                        !this._interruptManager.isInterrupted() &&
                        e.axes.length
                    ) {
                        var t = { input: e, event: n };
                        (this._isStopped = !1),
                            this._interruptManager.setInterrupt(!0),
                            this._animationManager.stopAnimation(t),
                            this._moveDistance ||
                                this._eventManager.hold(
                                    this._axisManager.get(),
                                    t
                                ),
                            (this._isOutside = this._axisManager.isOutside(
                                e.axes
                            )),
                            (this._moveDistance = this._axisManager.get(
                                e.axes
                            ));
                    }
                }),
                (n.change = function (e, n, t, i) {
                    if (
                        !this._isStopped &&
                        this._interruptManager.isInterrupting() &&
                        !this._axisManager.every(t, function (e) {
                            return 0 === e;
                        })
                    ) {
                        var r = n.srcEvent ? n.srcEvent : n;
                        if (!r.__childrenAxesAlreadyChanged) {
                            var o,
                                a =
                                    this._moveDistance ||
                                    this._axisManager.get(e.axes);
                            (o = Le(a, function (e, n) {
                                return e + (t[n] || 0);
                            })),
                                this._moveDistance &&
                                    (this._moveDistance = this._axisManager.map(
                                        o,
                                        function (e, n) {
                                            var t = n.circular,
                                                i = n.range;
                                            return t && (t[0] || t[1])
                                                ? Je(e, i, t)
                                                : e;
                                        }
                                    )),
                                this._isOutside &&
                                    this._axisManager.every(a, function (e, n) {
                                        return !Ke(e, n.range);
                                    }) &&
                                    (this._isOutside = !1),
                                (a = this._atOutside(a)),
                                (o = this._atOutside(o)),
                                (this.options.nested &&
                                    this._isEndofAxis(t, a, o)) ||
                                    (r.__childrenAxesAlreadyChanged = !0);
                            var s = { input: e, event: n };
                            if (i) {
                                var u = this._animationManager.getDuration(
                                    o,
                                    a
                                );
                                this._animationManager.animateTo(o, u, s);
                            } else
                                !this._eventManager.triggerChange(
                                    o,
                                    a,
                                    s,
                                    !0
                                ) &&
                                    ((this._isStopped = !0),
                                    (this._moveDistance = null),
                                    this._animationManager.finish(!1));
                        }
                    }
                }),
                (n.release = function (e, n, t, i) {
                    if (
                        !this._isStopped &&
                        this._interruptManager.isInterrupting() &&
                        this._moveDistance
                    ) {
                        var r = n.srcEvent ? n.srcEvent : n;
                        r.__childrenAxesAlreadyReleased &&
                            (t = t.map(function () {
                                return 0;
                            }));
                        var o = this._axisManager.get(e.axes),
                            a = this._axisManager.get(),
                            s = this._animationManager.getDisplacement(t),
                            u = ln(e.axes, s),
                            l = this._axisManager.get(
                                this._axisManager.map(u, function (e, n, t) {
                                    return n.circular &&
                                        (n.circular[0] || n.circular[1])
                                        ? o[t] + e
                                        : qe(
                                              o[t] + e,
                                              n.range,
                                              n.circular,
                                              n.bounce
                                          );
                                })
                            );
                        r.__childrenAxesAlreadyReleased = !0;
                        var c = this._animationManager.getDuration(l, o, i);
                        0 === c && (l = Pe({}, a));
                        var h = {
                            depaPos: a,
                            destPos: l,
                            duration: c,
                            delta: this._axisManager.getDelta(a, l),
                            inputEvent: n,
                            input: e,
                            isTrusted: !0,
                        };
                        this._eventManager.triggerRelease(h),
                            (this._moveDistance = null);
                        var f = this._animationManager.getUserControl(h),
                            d = Fe(f.destPos, a),
                            g = { input: e, event: n };
                        d || 0 === f.duration
                            ? (d ||
                                  this._eventManager.triggerChange(
                                      f.destPos,
                                      a,
                                      g,
                                      !0
                                  ),
                              this._interruptManager.setInterrupt(!1),
                              this._axisManager.isOutside()
                                  ? this._animationManager.restore(g)
                                  : this._eventManager.triggerFinish(!0))
                            : this._animationManager.animateTo(
                                  f.destPos,
                                  f.duration,
                                  g
                              );
                    }
                }),
                (n._atOutside = function (e) {
                    var n = this;
                    return this._isOutside
                        ? this._axisManager.map(e, function (e, n) {
                              var t = n.range[0] - n.bounce[0],
                                  i = n.range[1] + n.bounce[1];
                              return e > i ? i : e < t ? t : e;
                          })
                        : this._axisManager.map(e, function (e, t) {
                              var i = t.range[0],
                                  r = t.range[1],
                                  o = t.bounce,
                                  a = t.circular;
                              return a && (a[0] || a[1])
                                  ? e
                                  : e < i
                                  ? i -
                                    n._animationManager.interpolate(i - e, o[0])
                                  : e > r
                                  ? r +
                                    n._animationManager.interpolate(e - r, o[1])
                                  : e;
                          });
                }),
                (n._isEndofAxis = function (e, n, t) {
                    return this._axisManager.every(n, function (i, r, o) {
                        return (
                            0 === e[o] ||
                            (n[o] === t[o] &&
                                (function (e, n, t, i) {
                                    return (
                                        (!i[0] && e === n[0] - t[0]) ||
                                        (!i[1] && e === n[1] + t[1])
                                    );
                                })(i, r.range, r.bounce, r.circular))
                        );
                    });
                }),
                e
            );
        })(),
        hn = function (e, n, t) {
            return Math.max(Math.min(e, t), n);
        },
        fn = (function () {
            function e(e) {
                var n = e.options,
                    t = e.interruptManager,
                    i = e.eventManager,
                    r = e.axisManager;
                (this._options = n),
                    (this.interruptManager = t),
                    (this.eventManager = i),
                    (this.axisManager = r),
                    (this.animationEnd = this.animationEnd.bind(this));
            }
            var n = e.prototype;
            return (
                (n.getDuration = function (e, n, t) {
                    var i,
                        r = this;
                    if (void 0 !== t) i = t;
                    else {
                        var o = Le(n, function (n, t) {
                            return (function (e, n) {
                                var t = Math.sqrt((e / n) * 2);
                                return t < 100 ? 0 : t;
                            })(Math.abs(n - e[t]), r._options.deceleration);
                        });
                        i = Object.keys(o).reduce(function (e, n) {
                            return Math.max(e, o[n]);
                        }, -1 / 0);
                    }
                    return hn(
                        i,
                        this._options.minimumDuration,
                        this._options.maximumDuration
                    );
                }),
                (n.getDisplacement = function (e) {
                    var n = Math.pow(
                            e.reduce(function (e, n) {
                                return e + n * n;
                            }, 0),
                            1 / e.length
                        ),
                        t = Math.abs(n / -this._options.deceleration);
                    return e.map(function (e) {
                        return (e / 2) * t;
                    });
                }),
                (n.stopAnimation = function (e) {
                    if (this._animateParam) {
                        var n = this.axisManager.get(),
                            t = this.axisManager.map(n, function (e, n) {
                                return Je(e, n.range, n.circular);
                            });
                        Ve(t, function (e, t) {
                            return n[t] === e;
                        }) || this.eventManager.triggerChange(t, n, e, !!e),
                            (this._animateParam = null),
                            this._raf && ((i = this._raf), Me(i)),
                            (this._raf = null),
                            this.eventManager.triggerAnimationEnd(
                                !!(null == e ? void 0 : e.event)
                            );
                    }
                    var i;
                }),
                (n.getEventInfo = function () {
                    return this._animateParam &&
                        this._animateParam.input &&
                        this._animateParam.inputEvent
                        ? {
                              input: this._animateParam.input,
                              event: this._animateParam.inputEvent,
                          }
                        : null;
                }),
                (n.restore = function (e) {
                    var n = this.axisManager.get(),
                        t = this.axisManager.map(n, function (e, n) {
                            return Math.min(
                                n.range[1],
                                Math.max(n.range[0], e)
                            );
                        });
                    this.stopAnimation(),
                        this.animateTo(t, this.getDuration(n, t), e);
                }),
                (n.animationEnd = function () {
                    var e = this.getEventInfo();
                    this._animateParam = null;
                    var n = this.axisManager.filter(
                        this.axisManager.get(),
                        function (e, n) {
                            return Ze(e, n.range, n.circular);
                        }
                    );
                    Object.keys(n).length > 0 &&
                        this.setTo(
                            this.axisManager.map(n, function (e, n) {
                                return Je(e, n.range, n.circular);
                            })
                        ),
                        this.interruptManager.setInterrupt(!1),
                        this.eventManager.triggerAnimationEnd(!!e),
                        this.axisManager.isOutside()
                            ? this.restore(e)
                            : this.finish(!!e);
                }),
                (n.finish = function (e) {
                    (this._animateParam = null),
                        this.interruptManager.setInterrupt(!1),
                        this.eventManager.triggerFinish(e);
                }),
                (n.getUserControl = function (e) {
                    var n = e.setTo();
                    return (
                        (n.destPos = this.axisManager.get(n.destPos)),
                        (n.duration = hn(
                            n.duration,
                            this._options.minimumDuration,
                            this._options.maximumDuration
                        )),
                        n
                    );
                }),
                (n.animateTo = function (e, n, t) {
                    var i = this;
                    this.stopAnimation();
                    var r = this._createAnimationParam(e, n, t),
                        o = Pe({}, r.depaPos),
                        a = this.eventManager.triggerAnimationStart(r),
                        s = this.getUserControl(r);
                    if (
                        (!a &&
                            this.axisManager.every(s.destPos, function (e, n) {
                                return Ze(e, n.range, n.circular);
                            }),
                        a && !Fe(s.destPos, o))
                    ) {
                        var u = (null == t ? void 0 : t.event) || null;
                        this._animateLoop(
                            {
                                depaPos: o,
                                destPos: s.destPos,
                                duration: s.duration,
                                delta: this.axisManager.getDelta(o, s.destPos),
                                isTrusted: !!u,
                                inputEvent: u,
                                input: (null == t ? void 0 : t.input) || null,
                            },
                            function () {
                                return i.animationEnd();
                            }
                        );
                    }
                }),
                (n.setTo = function (e, n) {
                    void 0 === n && (n = 0);
                    var t = Object.keys(e),
                        i = this.axisManager.get(t);
                    if (Fe(e, i)) return this;
                    this.interruptManager.setInterrupt(!0);
                    var r = ze(e, function (e, n) {
                        return i[n] !== e;
                    });
                    return Object.keys(r).length
                        ? ((r = this.axisManager.map(r, function (e, n) {
                              var t = n.range,
                                  i = n.circular;
                              return i && (i[0] || i[1]) ? e : qe(e, t, i);
                          })),
                          Fe(r, i) ||
                              (n > 0
                                  ? this.animateTo(r, n)
                                  : (this.stopAnimation(),
                                    this.eventManager.triggerChange(r),
                                    this.finish(!1))),
                          this)
                        : this;
                }),
                (n.setBy = function (e, n) {
                    return (
                        void 0 === n && (n = 0),
                        this.setTo(
                            Le(
                                this.axisManager.get(Object.keys(e)),
                                function (n, t) {
                                    return n + e[t];
                                }
                            ),
                            n
                        )
                    );
                }),
                (n._createAnimationParam = function (e, n, t) {
                    var i = this.axisManager.get(),
                        r = e,
                        o = (null == t ? void 0 : t.event) || null;
                    return {
                        depaPos: i,
                        destPos: r,
                        duration: hn(
                            n,
                            this._options.minimumDuration,
                            this._options.maximumDuration
                        ),
                        delta: this.axisManager.getDelta(i, r),
                        inputEvent: o,
                        input: (null == t ? void 0 : t.input) || null,
                        isTrusted: !!o,
                        done: this.animationEnd,
                    };
                }),
                (n._animateLoop = function (e, n) {
                    var t = this;
                    if (e.duration) {
                        this._animateParam = Pe(Pe({}, e), {
                            startTime: new Date().getTime(),
                        });
                        var i = Le(e.destPos, function (e) {
                                return e;
                            }),
                            r = this._initState(this._animateParam),
                            o = function () {
                                t._raf = null;
                                var e = t._animateParam,
                                    a = t._getNextState(r),
                                    s = !t.eventManager.triggerChange(
                                        a.pos,
                                        r.pos
                                    );
                                if (((r = a), a.finished))
                                    return (
                                        (e.destPos = t._getFinalPos(
                                            e.destPos,
                                            i
                                        )),
                                        Fe(
                                            e.destPos,
                                            t.axisManager.get(
                                                Object.keys(e.destPos)
                                            )
                                        ) ||
                                            t.eventManager.triggerChange(
                                                e.destPos,
                                                a.pos
                                            ),
                                        void n()
                                    );
                                s ? t.finish(!1) : (t._raf = Se(o));
                            };
                        o();
                    } else this.eventManager.triggerChange(e.destPos), n();
                }),
                (n._getFinalPos = function (e, n) {
                    var t = this,
                        i = 1e-6;
                    return Le(e, function (e, r) {
                        if (e >= n[r] - i && e <= n[r] + i) return n[r];
                        var o = t._getRoundUnit(e, r);
                        return Be(e, o);
                    });
                }),
                (n._getRoundUnit = function (e, n) {
                    var t,
                        i = this._options.round,
                        r = null;
                    if (!i) {
                        var o = this.axisManager.getAxisOptions(n);
                        (t = Math.max(Xe(o.range[0]), Xe(o.range[1]), Xe(e))),
                            (r = 1 / Math.pow(10, t));
                    }
                    return r || i;
                }),
                e
            );
        })(),
        dn = (function (e) {
            function n() {
                var n = (null !== e && e.apply(this, arguments)) || this;
                return (n._useDuration = !0), n;
            }
            Ee(n, e);
            var t = n.prototype;
            return (
                (t.interpolate = function (e, n) {
                    var t = this._easing(1e-5) / 1e-5;
                    return this._easing(e / (n * t)) * n;
                }),
                (t.updateAnimation = function (e) {
                    var n = this._animateParam;
                    if (n) {
                        var t = new Date().getTime() - n.startTime,
                            i = (null == e ? void 0 : e.destPos) || n.destPos,
                            r = (null == e ? void 0 : e.duration) || n.duration;
                        if ((null == e ? void 0 : e.restart) || r <= t)
                            this.setTo(i, r - t);
                        else {
                            if (null == e ? void 0 : e.destPos) {
                                var o = this.axisManager.get();
                                (this._initialEasingPer = this._prevEasingPer),
                                    (n.delta = this.axisManager.getDelta(o, i)),
                                    (n.destPos = i);
                            }
                            if (null == e ? void 0 : e.duration) {
                                var a = (t + this._durationOffset) / n.duration;
                                (this._durationOffset = a * r - t),
                                    (n.duration = r);
                            }
                        }
                    }
                }),
                (t._initState = function (e) {
                    return (
                        (this._initialEasingPer = 0),
                        (this._prevEasingPer = 0),
                        (this._durationOffset = 0),
                        { pos: e.depaPos, easingPer: 0, finished: !1 }
                    );
                }),
                (t._getNextState = function (e) {
                    var n = this,
                        t = this._animateParam,
                        i = e.pos,
                        r = t.destPos,
                        o = Le(i, function (e, n) {
                            return e <= r[n] ? 1 : -1;
                        }),
                        a =
                            (new Date().getTime() -
                                t.startTime +
                                this._durationOffset) /
                            t.duration,
                        s = this._easing(a),
                        u = this.axisManager.map(i, function (e, u, l) {
                            var c =
                                    a >= 1
                                        ? r[l]
                                        : e +
                                          (t.delta[l] *
                                              (s - n._prevEasingPer)) /
                                              (1 - n._initialEasingPer),
                                h = Je(c, u.range, u.circular);
                            if (c !== h) {
                                var f = o[l] * (u.range[1] - u.range[0]);
                                (r[l] -= f), (i[l] -= f);
                            }
                            return h;
                        });
                    return (
                        (this._prevEasingPer = s),
                        { pos: u, easingPer: s, finished: s >= 1 }
                    );
                }),
                (t._easing = function (e) {
                    return e > 1 ? 1 : this._options.easing(e);
                }),
                n
            );
        })(fn),
        gn = (function (e) {
            function n(n, t, i) {
                void 0 === n && (n = {}),
                    void 0 === t && (t = {}),
                    void 0 === i && (i = null);
                var r = e.call(this) || this;
                return (
                    (r.axis = n),
                    (r._inputs = []),
                    (r.options = Pe(
                        {
                            easing: function (e) {
                                return 1 - Math.pow(1 - e, 3);
                            },
                            interruptable: !0,
                            maximumDuration: 1 / 0,
                            minimumDuration: 0,
                            deceleration: 6e-4,
                            round: null,
                            nested: !1,
                        },
                        t
                    )),
                    (r.interruptManager = new We(r.options)),
                    (r.axisManager = new Qe(r.axis)),
                    (r.eventManager = new Ue(r)),
                    (r.animationManager = new dn(r)),
                    (r.inputObserver = new cn(r)),
                    r.eventManager.setAnimationManager(r.animationManager),
                    i && r.eventManager.triggerChange(i),
                    r
                );
            }
            Ee(n, e);
            var t = n.prototype;
            return (
                (t.connect = function (e, n) {
                    var t;
                    return (
                        (t = "string" == typeof e ? e.split(" ") : e.concat()),
                        ~this._inputs.indexOf(n) && this.disconnect(n),
                        n.mapAxes(t),
                        n.connect(this.inputObserver),
                        this._inputs.push(n),
                        this
                    );
                }),
                (t.disconnect = function (e) {
                    if (e) {
                        var n = this._inputs.indexOf(e);
                        n >= 0 &&
                            (this._inputs[n].disconnect(),
                            this._inputs.splice(n, 1));
                    } else
                        this._inputs.forEach(function (e) {
                            return e.disconnect();
                        }),
                            (this._inputs = []);
                    return this;
                }),
                (t.get = function (e) {
                    return this.axisManager.get(e);
                }),
                (t.setTo = function (e, n) {
                    return (
                        void 0 === n && (n = 0),
                        this.animationManager.setTo(e, n),
                        this
                    );
                }),
                (t.setBy = function (e, n) {
                    return (
                        void 0 === n && (n = 0),
                        this.animationManager.setBy(e, n),
                        this
                    );
                }),
                (t.stopAnimation = function () {
                    return this.animationManager.stopAnimation(), this;
                }),
                (t.updateAnimation = function (e) {
                    return this.animationManager.updateAnimation(e), this;
                }),
                (t.isBounceArea = function (e) {
                    return this.axisManager.isOutside(e);
                }),
                (t.destroy = function () {
                    this.disconnect(), this.eventManager.destroy();
                }),
                (n.VERSION = "3.1.1-snapshot"),
                (n.TRANSFORM = Ce),
                (n.DIRECTION_NONE = 1),
                (n.DIRECTION_LEFT = 2),
                (n.DIRECTION_RIGHT = 4),
                (n.DIRECTION_UP = 8),
                (n.DIRECTION_DOWN = 16),
                (n.DIRECTION_HORIZONTAL = 6),
                (n.DIRECTION_VERTICAL = 24),
                (n.DIRECTION_ALL = 30),
                n
            );
        })(d),
        pn = function (e, n, t) {
            return t ? !!(30 === n || (n & e && t & e)) : !!(n & e);
        },
        vn = (function () {
            function e(e, n) {
                var t = this;
                (this.axes = []),
                    (this.element = null),
                    (this._enabled = !1),
                    (this._activeEvent = null),
                    (this._atRightEdge = !1),
                    (this._rightEdgeTimer = 0),
                    (this._forceRelease = function () {
                        var e = t._activeEvent,
                            n = e.prevEvent;
                        t._detachWindowEvent(e),
                            e.onRelease(),
                            t._observer.release(t, n, [0, 0]);
                    }),
                    (this.element = Ae(e)),
                    (this.options = Pe(
                        {
                            inputType: ["touch", "mouse", "pointer"],
                            inputButton: [Oe],
                            scale: [1, 1],
                            thresholdAngle: 45,
                            threshold: 0,
                            iOSEdgeSwipeThreshold: 30,
                            releaseOnScroll: !1,
                        },
                        n
                    )),
                    (this._onPanstart = this._onPanstart.bind(this)),
                    (this._onPanmove = this._onPanmove.bind(this)),
                    (this._onPanend = this._onPanend.bind(this));
            }
            var n = e.prototype;
            return (
                (n.mapAxes = function (e) {
                    var n = !!e[0],
                        t = !!e[1];
                    (this._direction = n && t ? 30 : n ? 6 : t ? 24 : 1),
                        (this.axes = e);
                }),
                (n.connect = function (e) {
                    return (
                        this._activeEvent &&
                            (this._detachElementEvent(),
                            this._detachWindowEvent(this._activeEvent)),
                        this._attachElementEvent(e),
                        (this._originalCssProps = Ye(this.element)),
                        this
                    );
                }),
                (n.disconnect = function () {
                    return (
                        this._detachElementEvent(),
                        this._detachWindowEvent(this._activeEvent),
                        this._originalCssProps !== Ie &&
                            Ye(this.element, this._originalCssProps),
                        (this._direction = 1),
                        this
                    );
                }),
                (n.destroy = function () {
                    this.disconnect(), (this.element = null);
                }),
                (n.enable = function () {
                    return (this._enabled = !0), this;
                }),
                (n.disable = function () {
                    return (this._enabled = !1), this;
                }),
                (n.isEnabled = function () {
                    return this._enabled;
                }),
                (n._onPanstart = function (e) {
                    var n = this._activeEvent,
                        t = n.onEventStart(e, this.options.inputButton);
                    if (
                        t &&
                        this._enabled &&
                        !(n.getTouches(e) > 1) &&
                        !1 !== t.srcEvent.cancelable
                    ) {
                        var i = this.options.iOSEdgeSwipeThreshold;
                        this._observer.hold(this, t),
                            (this._atRightEdge =
                                Re && t.center.x > window.innerWidth - i),
                            this._attachWindowEvent(n),
                            (n.prevEvent = t);
                    }
                }),
                (n._onPanmove = function (e) {
                    var n = this,
                        t = this._activeEvent,
                        i = t.onEventMove(e, this.options.inputButton);
                    if (i && this._enabled && !(t.getTouches(e) > 1)) {
                        var r = this.options,
                            o = r.iOSEdgeSwipeThreshold,
                            a = r.releaseOnScroll,
                            s = (function (e, n) {
                                if (n < 0 || n > 90) return 1;
                                var t = Math.abs(e);
                                return t > n && t < 180 - n ? 24 : 6;
                            })(i.angle, this.options.thresholdAngle);
                        if (!a || i.srcEvent.cancelable) {
                            if (t.prevEvent && Re) {
                                if (i.center.x < 0)
                                    return void this._forceRelease();
                                this._atRightEdge &&
                                    (clearTimeout(this._rightEdgeTimer),
                                    i.deltaX < -o
                                        ? (this._atRightEdge = !1)
                                        : (this._rightEdgeTimer =
                                              window.setTimeout(function () {
                                                  return n._forceRelease();
                                              }, 100)));
                            }
                            var u = this._applyScale(
                                    [i.offsetX, i.offsetY],
                                    [
                                        pn(6, this._direction, s),
                                        pn(24, this._direction, s),
                                    ]
                                ),
                                l = u.some(function (e) {
                                    return 0 !== e;
                                });
                            l &&
                                (!1 !== i.srcEvent.cancelable &&
                                    i.srcEvent.preventDefault(),
                                i.srcEvent.stopPropagation()),
                                (i.preventSystemEvent = l),
                                l &&
                                    this._observer.change(
                                        this,
                                        i,
                                        ln(this.axes, u)
                                    ),
                                (t.prevEvent = i);
                        } else this._onPanend(e);
                    }
                }),
                (n._onPanend = function (e) {
                    var n = this._activeEvent;
                    if (
                        (n.onEventEnd(e),
                        this._enabled && 0 === n.getTouches(e))
                    ) {
                        this._detachWindowEvent(n),
                            clearTimeout(this._rightEdgeTimer);
                        var t = n.prevEvent,
                            i = this._applyScale(
                                [
                                    Math.abs(t.velocityX) *
                                        (t.offsetX < 0 ? -1 : 1),
                                    Math.abs(t.velocityY) *
                                        (t.offsetY < 0 ? -1 : 1),
                                ],
                                [
                                    pn(6, this._direction),
                                    pn(24, this._direction),
                                ]
                            );
                        n.onRelease(), this._observer.release(this, t, i);
                    }
                }),
                (n._attachWindowEvent = function (e) {
                    var n = this;
                    null == e ||
                        e.move.forEach(function (e) {
                            window.addEventListener(e, n._onPanmove);
                        }),
                        null == e ||
                            e.end.forEach(function (e) {
                                window.addEventListener(e, n._onPanend);
                            });
                }),
                (n._detachWindowEvent = function (e) {
                    var n = this;
                    null == e ||
                        e.move.forEach(function (e) {
                            window.removeEventListener(e, n._onPanmove);
                        }),
                        null == e ||
                            e.end.forEach(function (e) {
                                window.removeEventListener(e, n._onPanend);
                            });
                }),
                (n._attachElementEvent = function (e) {
                    var n = this,
                        t = (function (e) {
                            void 0 === e && (e = []);
                            var n = !1,
                                t = !1,
                                i = !1;
                            return (
                                e.forEach(function (e) {
                                    switch (e) {
                                        case "mouse":
                                            t = !0;
                                            break;
                                        case "touch":
                                            n = en;
                                            break;
                                        case "pointer":
                                            i = tn;
                                    }
                                }),
                                i
                                    ? new sn()
                                    : n && t
                                    ? new un()
                                    : n
                                    ? new an()
                                    : t
                                    ? new on()
                                    : null
                            );
                        })(this.options.inputType);
                    if (!t)
                        throw new Error(
                            "There is currently no inputType available for current device. There must be at least one available inputType."
                        );
                    (this._observer = e),
                        (this._enabled = !0),
                        (this._activeEvent = t),
                        null == t ||
                            t.start.forEach(function (e) {
                                var t;
                                null === (t = n.element) ||
                                    void 0 === t ||
                                    t.addEventListener(e, n._onPanstart);
                            });
                }),
                (n._detachElementEvent = function () {
                    var e = this,
                        n = this._activeEvent;
                    null == n ||
                        n.start.forEach(function (n) {
                            var t;
                            null === (t = e.element) ||
                                void 0 === t ||
                                t.removeEventListener(n, e._onPanstart);
                        }),
                        (this._enabled = !1),
                        (this._observer = null);
                }),
                (n._applyScale = function (e, n) {
                    var t = [0, 0],
                        i = this.options.scale;
                    return (
                        n[0] && (t[0] = e[0] * i[0]),
                        n[1] && (t[1] = e[1] * i[1]),
                        t
                    );
                }),
                e
            );
        })(),
        _n = gn,
        mn = {
            HOLD: "hold",
            CHANGE: "change",
            RELEASE: "release",
            ANIMATION_END: "animationEnd",
            FINISH: "finish",
        },
        bn = "flick";
    !(function (e) {
        (e[(e.IDLE = 0)] = "IDLE"),
            (e[(e.HOLDING = 1)] = "HOLDING"),
            (e[(e.DRAGGING = 2)] = "DRAGGING"),
            (e[(e.ANIMATING = 3)] = "ANIMATING"),
            (e[(e.DISABLED = 4)] = "DISABLED");
    })(je || (je = {}));
    var En = (function () {
            function e() {
                (this._delta = 0), (this._targetPanel = null);
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "delta", {
                    get: function () {
                        return this._delta;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "targetPanel", {
                    get: function () {
                        return this._targetPanel;
                    },
                    set: function (e) {
                        this._targetPanel = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.onEnter = function (e) {
                    (this._delta = e._delta),
                        (this._targetPanel = e._targetPanel);
                }),
                (n.onHold = function (e) {}),
                (n.onChange = function (e) {}),
                (n.onRelease = function (e) {}),
                (n.onAnimationEnd = function (e) {}),
                (n.onFinish = function (e) {}),
                (n._moveToChangedPosition = function (e) {
                    var n = e.flicking,
                        t = e.axesEvent,
                        i = e.transitTo,
                        r = t.delta.flick;
                    if (r) {
                        this._delta += r;
                        var o = n.camera,
                            a = o.position,
                            s = t.pos.flick,
                            u = n.circularEnabled
                                ? X(s, o.range.min, o.range.max)
                                : s;
                        o.lookAt(u);
                        var l = new g(y.MOVE, {
                            isTrusted: t.isTrusted,
                            holding: this.holding,
                            direction: V(0, t.delta.flick),
                            axesEvent: t,
                        });
                        n.trigger(l),
                            l.isCanceled() && (o.lookAt(a), i(je.DISABLED));
                    }
                }),
                e
            );
        })(),
        yn = (function (e) {
            function t() {
                var n = (null !== e && e.apply(this, arguments)) || this;
                return (n.holding = !1), (n.animating = !1), n;
            }
            n(t, e);
            var i = t.prototype;
            return (
                (i.onEnter = function () {
                    (this._delta = 0), (this._targetPanel = null);
                }),
                (i.onHold = function (e) {
                    var n = e.flicking,
                        t = e.axesEvent,
                        i = e.transitTo;
                    if (n.renderer.panelCount <= 0) i(je.DISABLED);
                    else {
                        var r = new g(y.HOLD_START, { axesEvent: t });
                        n.trigger(r),
                            r.isCanceled() ? i(je.DISABLED) : i(je.HOLDING);
                    }
                }),
                (i.onChange = function (e) {
                    var n = e.flicking,
                        t = e.axesEvent,
                        i = e.transitTo,
                        r = n.control.controller.animatingContext,
                        o = new g(y.MOVE_START, {
                            isTrusted: t.isTrusted,
                            holding: this.holding,
                            direction: V(r.start, r.end),
                            axesEvent: t,
                        });
                    n.trigger(o),
                        o.isCanceled()
                            ? i(je.DISABLED)
                            : i(je.ANIMATING).onChange(e);
                }),
                t
            );
        })(En),
        Pn = (function (e) {
            function t() {
                var n = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (n.holding = !0),
                    (n.animating = !1),
                    (n._releaseEvent = null),
                    n
                );
            }
            n(t, e);
            var i = t.prototype;
            return (
                (i.onChange = function (e) {
                    var n = e.flicking,
                        t = e.axesEvent,
                        i = e.transitTo,
                        r = t.inputEvent,
                        o = n.horizontal ? r.offsetX : r.offsetY,
                        a = new g(y.MOVE_START, {
                            isTrusted: t.isTrusted,
                            holding: this.holding,
                            direction: V(0, -o),
                            axesEvent: t,
                        });
                    n.trigger(a),
                        a.isCanceled()
                            ? i(je.DISABLED)
                            : i(je.DRAGGING).onChange(e);
                }),
                (i.onRelease = function (e) {
                    var n = e.flicking,
                        t = e.axesEvent,
                        i = e.transitTo;
                    if (
                        (n.trigger(new g(y.HOLD_END, { axesEvent: t })),
                        0 !== t.delta.flick)
                    )
                        return (
                            t.setTo({ flick: n.camera.position }, 0),
                            void i(je.IDLE)
                        );
                    this._releaseEvent = t;
                }),
                (i.onFinish = function (e) {
                    var n,
                        t,
                        i = e.flicking;
                    if (((0, e.transitTo)(je.IDLE), this._releaseEvent)) {
                        var r,
                            a = this._releaseEvent.inputEvent.srcEvent;
                        if ("touchend" === a.type) {
                            var s = a.changedTouches[0];
                            r = document.elementFromPoint(s.clientX, s.clientY);
                        } else r = a.target;
                        var u = i.renderer.panels,
                            l = null;
                        try {
                            for (
                                var c = o(u), h = c.next();
                                !h.done;
                                h = c.next()
                            ) {
                                var f = h.value;
                                if (f.contains(r)) {
                                    l = f;
                                    break;
                                }
                            }
                        } catch (e) {
                            n = { error: e };
                        } finally {
                            try {
                                h && !h.done && (t = c.return) && t.call(c);
                            } finally {
                                if (n) throw n.error;
                            }
                        }
                        if (l) {
                            var d = i.camera.position,
                                p = l.position;
                            i.trigger(
                                new g(y.SELECT, {
                                    index: l.index,
                                    panel: l,
                                    direction: V(d, p),
                                })
                            );
                        }
                    }
                }),
                t
            );
        })(En),
        xn = (function (e) {
            function t() {
                var n = (null !== e && e.apply(this, arguments)) || this;
                return (n.holding = !0), (n.animating = !0), n;
            }
            n(t, e);
            var i = t.prototype;
            return (
                (i.onChange = function (e) {
                    this._moveToChangedPosition(e);
                }),
                (i.onRelease = function (e) {
                    var n,
                        t = e.flicking,
                        i = e.axesEvent,
                        r = e.transitTo;
                    if (
                        (t.trigger(new g(y.HOLD_END, { axesEvent: i })),
                        t.renderer.panelCount <= 0)
                    )
                        r(je.IDLE);
                    else {
                        r(je.ANIMATING);
                        var o = t.control,
                            a = i.destPos.flick,
                            s = Math.max(i.duration, t.duration);
                        try {
                            o.moveToPosition(a, s, i);
                        } catch (e) {
                            r(je.IDLE),
                                i.setTo(
                                    (((n = {}).flick = t.camera.position), n),
                                    0
                                );
                        }
                    }
                }),
                t
            );
        })(En),
        On = (function (e) {
            function t() {
                var n = (null !== e && e.apply(this, arguments)) || this;
                return (n.holding = !1), (n.animating = !0), n;
            }
            n(t, e);
            var i = t.prototype;
            return (
                (i.onHold = function (e) {
                    var n = e.flicking,
                        t = e.axesEvent,
                        i = e.transitTo;
                    (this._delta = 0), n.control.updateInput();
                    var r = new g(y.HOLD_START, { axesEvent: t });
                    n.trigger(r),
                        r.isCanceled() ? i(je.DISABLED) : i(je.DRAGGING);
                }),
                (i.onChange = function (e) {
                    this._moveToChangedPosition(e);
                }),
                (i.onFinish = function (e) {
                    var n = e.flicking,
                        t = e.axesEvent,
                        i = e.transitTo,
                        r = n.control,
                        o = r.controller.animatingContext;
                    i(je.IDLE),
                        n.trigger(
                            new g(y.MOVE_END, {
                                isTrusted: t.isTrusted,
                                direction: V(o.start, o.end),
                                axesEvent: t,
                            })
                        );
                    var a = this._targetPanel;
                    a && r.setActive(a, r.activePanel, t.isTrusted);
                }),
                t
            );
        })(En),
        wn = (function (e) {
            function t() {
                var n = (null !== e && e.apply(this, arguments)) || this;
                return (n.holding = !1), (n.animating = !0), n;
            }
            n(t, e);
            var i = t.prototype;
            return (
                (i.onAnimationEnd = function (e) {
                    (0, e.transitTo)(je.IDLE);
                }),
                (i.onChange = function (e) {
                    var n = e.axesEvent,
                        t = e.transitTo;
                    n.stop(), t(je.IDLE);
                }),
                (i.onRelease = function (e) {
                    var n = e.axesEvent,
                        t = e.transitTo;
                    0 === n.delta.flick && t(je.IDLE);
                }),
                t
            );
        })(En),
        Tn = (function () {
            function e() {
                var e = this;
                (this.transitTo = function (n) {
                    var t;
                    switch (n) {
                        case je.IDLE:
                            t = new yn();
                            break;
                        case je.HOLDING:
                            t = new Pn();
                            break;
                        case je.DRAGGING:
                            t = new xn();
                            break;
                        case je.ANIMATING:
                            t = new On();
                            break;
                        case je.DISABLED:
                            t = new wn();
                    }
                    return t.onEnter(e._state), (e._state = t), e._state;
                }),
                    (this._state = new yn());
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "state", {
                    get: function () {
                        return this._state;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.fire = function (e, n) {
                    var i = this._state,
                        r = t(t({}, n), { transitTo: this.transitTo });
                    switch (e) {
                        case mn.HOLD:
                            i.onHold(r);
                            break;
                        case mn.CHANGE:
                            i.onChange(r);
                            break;
                        case mn.RELEASE:
                            i.onRelease(r);
                            break;
                        case mn.ANIMATION_END:
                            i.onAnimationEnd(r);
                            break;
                        case mn.FINISH:
                            i.onFinish(r);
                    }
                }),
                e
            );
        })(),
        Rn = (function () {
            function e() {
                var e = this;
                (this._onAxesHold = function () {
                    e._dragged = !1;
                }),
                    (this._onAxesChange = function () {
                        e._dragged = !0;
                    }),
                    (this._preventClickWhenDragged = function (n) {
                        e._dragged && (n.preventDefault(), n.stopPropagation()),
                            (e._dragged = !1);
                    }),
                    this._resetInternalValues(),
                    (this._stateMachine = new Tn());
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "axes", {
                    get: function () {
                        return this._axes;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "stateMachine", {
                    get: function () {
                        return this._stateMachine;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "state", {
                    get: function () {
                        return this._stateMachine.state;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "animatingContext", {
                    get: function () {
                        return this._animatingContext;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "controlParams", {
                    get: function () {
                        var e = this._axes;
                        if (!e)
                            return {
                                range: { min: 0, max: 0 },
                                position: 0,
                                circular: !1,
                            };
                        var n = e.axis.flick;
                        return {
                            range: { min: n.range[0], max: n.range[1] },
                            circular: n.circular[0],
                            position: this.position,
                        };
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "enabled", {
                    get: function () {
                        var e, n;
                        return (
                            null !==
                                (n =
                                    null === (e = this._panInput) ||
                                    void 0 === e
                                        ? void 0
                                        : e.isEnabled()) &&
                            void 0 !== n &&
                            n
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "position", {
                    get: function () {
                        var e, n;
                        return null !==
                            (n =
                                null === (e = this._axes) || void 0 === e
                                    ? void 0
                                    : e.get([bn]).flick) && void 0 !== n
                            ? n
                            : 0;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "range", {
                    get: function () {
                        var e, n;
                        return null !==
                            (n =
                                null === (e = this._axes) || void 0 === e
                                    ? void 0
                                    : e.axis.flick.range) && void 0 !== n
                            ? n
                            : [0, 0];
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "bounce", {
                    get: function () {
                        var e;
                        return null === (e = this._axes) || void 0 === e
                            ? void 0
                            : e.axis.flick.bounce;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.init = function (e) {
                    var n,
                        t = this;
                    (this._flicking = e),
                        (this._axes = new _n(
                            (((n = {}).flick = {
                                range: [0, 0],
                                circular: !1,
                                bounce: [0, 0],
                            }),
                            n),
                            {
                                deceleration: e.deceleration,
                                interruptable: e.interruptable,
                                nested: e.nested,
                                easing: e.easing,
                            }
                        )),
                        (this._panInput = new vn(e.viewport.element, {
                            inputType: e.inputType,
                            iOSEdgeSwipeThreshold: e.iOSEdgeSwipeThreshold,
                            scale: e.horizontal ? [-1, 0] : [0, -1],
                            releaseOnScroll: !0,
                        }));
                    var i = this._axes;
                    i.connect(
                        e.horizontal ? [bn, ""] : ["", bn],
                        this._panInput
                    );
                    var r = function (n) {
                        var r = mn[n];
                        i.on(r, function (n) {
                            t._stateMachine.fire(r, {
                                flicking: e,
                                axesEvent: n,
                            });
                        });
                    };
                    for (var o in mn) r(o);
                    return this;
                }),
                (n.destroy = function () {
                    var e;
                    this._axes &&
                        (this.removePreventClickHandler(),
                        this._axes.destroy()),
                        null === (e = this._panInput) ||
                            void 0 === e ||
                            e.destroy(),
                        this._resetInternalValues();
                }),
                (n.enable = function () {
                    var e;
                    return (
                        null === (e = this._panInput) ||
                            void 0 === e ||
                            e.enable(),
                        this
                    );
                }),
                (n.disable = function () {
                    var e;
                    return (
                        null === (e = this._panInput) ||
                            void 0 === e ||
                            e.disable(),
                        this
                    );
                }),
                (n.update = function (e) {
                    var n,
                        t = S(this._flicking),
                        i = t.camera,
                        r = this._axes,
                        o = r.axis.flick;
                    return (
                        (o.circular = [e.circular, e.circular]),
                        (o.range = [e.range.min, e.range.max]),
                        (o.bounce = D(t.bounce, i.size)),
                        r.axisManager.set((((n = {}).flick = e.position), n)),
                        this
                    );
                }),
                (n.addPreventClickHandler = function () {
                    var e = S(this._flicking),
                        n = this._axes,
                        t = e.camera.element;
                    return (
                        n.on(mn.HOLD, this._onAxesHold),
                        n.on(mn.CHANGE, this._onAxesChange),
                        t.addEventListener(
                            "click",
                            this._preventClickWhenDragged,
                            !0
                        ),
                        this
                    );
                }),
                (n.removePreventClickHandler = function () {
                    var e = S(this._flicking),
                        n = this._axes,
                        t = e.camera.element;
                    return (
                        n.off(mn.HOLD, this._onAxesHold),
                        n.off(mn.CHANGE, this._onAxesChange),
                        t.removeEventListener(
                            "click",
                            this._preventClickWhenDragged,
                            !0
                        ),
                        this
                    );
                }),
                (n.animateTo = function (e, n, t) {
                    var i,
                        r,
                        o = this,
                        a = this._axes,
                        s = this._stateMachine.state;
                    if (!a)
                        return Promise.reject(
                            new ne(_, p.NOT_ATTACHED_TO_FLICKING)
                        );
                    var u = a.get([bn]).flick;
                    if (u === e)
                        return (
                            (c = S(this._flicking)).camera.lookAt(e),
                            s.targetPanel &&
                                c.control.setActive(
                                    s.targetPanel,
                                    c.control.activePanel,
                                    null !==
                                        (r =
                                            null == t ? void 0 : t.isTrusted) &&
                                        void 0 !== r &&
                                        r
                                ),
                            Promise.resolve()
                        );
                    this._animatingContext = { start: u, end: e, offset: 0 };
                    var l = function () {
                        var i, r;
                        a.once(mn.FINISH, function () {
                            o._animatingContext = {
                                start: 0,
                                end: 0,
                                offset: 0,
                            };
                        }),
                            t
                                ? t.setTo((((i = {}).flick = e), i), n)
                                : a.setTo((((r = {}).flick = e), r), n);
                    };
                    if (0 === n) {
                        var c,
                            h = (c = S(this._flicking)).camera;
                        l();
                        var f = c.circularEnabled
                            ? X(e, h.range.min, h.range.max)
                            : e;
                        return (
                            a.axisManager.set((((i = {}).flick = f), i)),
                            Promise.resolve()
                        );
                    }
                    return new Promise(function (e, n) {
                        var t = function () {
                                a.off(mn.HOLD, i), e();
                            },
                            i = function () {
                                a.off(mn.FINISH, t),
                                    n(
                                        new ne(
                                            "Animation is interrupted by user input.",
                                            p.ANIMATION_INTERRUPTED
                                        )
                                    );
                            };
                        a.once(mn.FINISH, t), a.once(mn.HOLD, i), l();
                    });
                }),
                (n._resetInternalValues = function () {
                    (this._flicking = null),
                        (this._axes = null),
                        (this._panInput = null),
                        (this._animatingContext = {
                            start: 0,
                            end: 0,
                            offset: 0,
                        }),
                        (this._dragged = !1);
                }),
                e
            );
        })(),
        Cn = (function () {
            function e() {
                (this._flicking = null),
                    (this._controller = new Rn()),
                    (this._activePanel = null);
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "controller", {
                    get: function () {
                        return this._controller;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "activeIndex", {
                    get: function () {
                        var e, n;
                        return null !==
                            (n =
                                null === (e = this._activePanel) || void 0 === e
                                    ? void 0
                                    : e.index) && void 0 !== n
                            ? n
                            : -1;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "activePanel", {
                    get: function () {
                        return this._activePanel;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "animating", {
                    get: function () {
                        return this._controller.state.animating;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "holding", {
                    get: function () {
                        return this._controller.state.holding;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.init = function (e) {
                    return (this._flicking = e), this._controller.init(e), this;
                }),
                (n.destroy = function () {
                    this._controller.destroy(),
                        (this._flicking = null),
                        (this._activePanel = null);
                }),
                (n.enable = function () {
                    return this._controller.enable(), this;
                }),
                (n.disable = function () {
                    return this._controller.disable(), this;
                }),
                (n.updatePosition = function (e) {
                    var n = S(this._flicking).camera,
                        t = this._activePanel;
                    t && n.lookAt(n.clampToReachablePosition(t.position));
                }),
                (n.updateInput = function () {
                    var e = S(this._flicking).camera;
                    return this._controller.update(e.controlParams), this;
                }),
                (n.resetActive = function () {
                    return (this._activePanel = null), this;
                }),
                (n.moveToPanel = function (e, n) {
                    var t = n.duration,
                        o = n.direction,
                        a = void 0 === o ? x.NONE : o,
                        s = n.axesEvent;
                    return i(this, void 0, void 0, function () {
                        var n, i, o, u, l, c, h;
                        return r(this, function (r) {
                            return (
                                (n = S(this._flicking)),
                                (i = n.camera),
                                (o = e.position),
                                (u = i.findNearestAnchor(o)),
                                e.removed || !u
                                    ? [
                                          2,
                                          Promise.reject(
                                              new ne(
                                                  b(e.position),
                                                  p.POSITION_NOT_REACHABLE
                                              )
                                          ),
                                      ]
                                    : (i.canReach(e)
                                          ? n.circularEnabled &&
                                            ((l = this._controller.position),
                                            (c = i.rangeDiff),
                                            (h = [o, o + c, o - c].filter(
                                                function (e) {
                                                    return (
                                                        a === x.NONE ||
                                                        (a === x.PREV
                                                            ? e <= l
                                                            : e >= l)
                                                    );
                                                }
                                            )),
                                            (o = h.reduce(function (e, n) {
                                                return Math.abs(l - n) <
                                                    Math.abs(l - e)
                                                    ? n
                                                    : e;
                                            }, 1 / 0)))
                                          : ((o = u.position), (e = u.panel)),
                                      this._triggerIndexChangeEvent(
                                          e,
                                          e.position,
                                          s
                                      ),
                                      [
                                          2,
                                          this._animateToPosition({
                                              position: o,
                                              duration: t,
                                              newActivePanel: e,
                                              axesEvent: s,
                                          }),
                                      ])
                            );
                        });
                    });
                }),
                (n.setActive = function (e, n, t) {
                    var i,
                        r = S(this._flicking);
                    (this._activePanel = e),
                        r.camera.updateAdaptiveHeight(),
                        e !== n
                            ? r.trigger(
                                  new g(y.CHANGED, {
                                      index: e.index,
                                      panel: e,
                                      prevIndex:
                                          null !==
                                              (i =
                                                  null == n
                                                      ? void 0
                                                      : n.index) && void 0 !== i
                                              ? i
                                              : -1,
                                      prevPanel: n,
                                      isTrusted: t,
                                      direction: n
                                          ? V(n.position, e.position)
                                          : x.NONE,
                                  })
                              )
                            : r.trigger(new g(y.RESTORED, { isTrusted: t }));
                }),
                (n._triggerIndexChangeEvent = function (e, n, t) {
                    var i,
                        r = S(this._flicking),
                        o =
                            e !== this._activePanel
                                ? y.WILL_CHANGE
                                : y.WILL_RESTORE,
                        a = r.camera,
                        s = this._activePanel,
                        u = new g(o, {
                            index: e.index,
                            panel: e,
                            isTrusted: (null == t ? void 0 : t.isTrusted) || !1,
                            direction: V(
                                null !==
                                    (i = null == s ? void 0 : s.position) &&
                                    void 0 !== i
                                    ? i
                                    : a.position,
                                n
                            ),
                        });
                    if ((r.trigger(u), u.isCanceled()))
                        throw new ne(
                            "Event stop() is called by user.",
                            p.STOP_CALLED_BY_USER
                        );
                }),
                (n._animateToPosition = function (e) {
                    var n = e.position,
                        t = e.duration,
                        o = e.newActivePanel,
                        a = e.axesEvent;
                    return i(this, void 0, void 0, function () {
                        var e,
                            s,
                            u = this;
                        return r(this, function (l) {
                            return (
                                (e = S(this._flicking)),
                                (s = function () {
                                    return u._controller.animateTo(n, t, a);
                                }),
                                (this._controller.state.targetPanel = o),
                                t <= 0
                                    ? [2, s()]
                                    : [
                                          2,
                                          s()
                                              .then(function () {
                                                  return i(
                                                      u,
                                                      void 0,
                                                      void 0,
                                                      function () {
                                                          return r(
                                                              this,
                                                              function (n) {
                                                                  switch (
                                                                      n.label
                                                                  ) {
                                                                      case 0:
                                                                          return [
                                                                              4,
                                                                              e.renderer.render(),
                                                                          ];
                                                                      case 1:
                                                                          return (
                                                                              n.sent(),
                                                                              [
                                                                                  2,
                                                                              ]
                                                                          );
                                                                  }
                                                              }
                                                          );
                                                      }
                                                  );
                                              })
                                              .catch(function (e) {
                                                  if (
                                                      !(
                                                          a &&
                                                          e instanceof ne &&
                                                          e.code ===
                                                              p.ANIMATION_INTERRUPTED
                                                      )
                                                  )
                                                      throw e;
                                              }),
                                      ]
                            );
                        });
                    });
                }),
                e
            );
        })(),
        In = (function () {
            function e(e) {
                var n = e.index,
                    t = e.position,
                    i = e.panel;
                (this._index = n), (this._pos = t), (this._panel = i);
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "index", {
                    get: function () {
                        return this._index;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "position", {
                    get: function () {
                        return this._pos;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "panel", {
                    get: function () {
                        return this._panel;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                e
            );
        })(),
        kn = (function (e) {
            function t(n) {
                var t = (void 0 === n ? {} : n).count,
                    i = void 0 === t ? 1 / 0 : t,
                    r = e.call(this) || this;
                return (r._count = i), r;
            }
            n(t, e);
            var i = t.prototype;
            return (
                Object.defineProperty(i, "count", {
                    get: function () {
                        return this._count;
                    },
                    set: function (e) {
                        this._count = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (i.moveToPosition = function (e, n, t) {
                    var i = S(this._flicking),
                        r = i.camera,
                        o = r.findActiveAnchor(),
                        a = r.findNearestAnchor(r.position),
                        s = i.control.controller.state;
                    if (!o || !a)
                        return Promise.reject(
                            new ne(b(e), p.POSITION_NOT_REACHABLE)
                        );
                    var u,
                        l = this._calcSnapThreshold(e, o),
                        c = i.animating ? s.delta : e - r.position,
                        h = Math.abs(c),
                        f =
                            t && 0 !== t.delta.flick
                                ? Math.abs(t.delta.flick)
                                : h;
                    return (
                        (u =
                            f >= l && f > 0
                                ? this._findSnappedAnchor(e, a)
                                : h >= i.threshold && h > 0
                                ? this._findAdjacentAnchor(c, a)
                                : a),
                        this._triggerIndexChangeEvent(u.panel, e, t),
                        this._animateToPosition({
                            position: r.clampToReachablePosition(u.position),
                            duration: n,
                            newActivePanel: u.panel,
                            axesEvent: t,
                        })
                    );
                }),
                (i._findSnappedAnchor = function (e, n) {
                    var t = S(this._flicking),
                        i = t.camera,
                        r = this._count,
                        o = i.position,
                        a = i.clampToReachablePosition(e),
                        s = i.findAnchorIncludePosition(a);
                    if (!n || !s) throw new ne(b(e), p.POSITION_NOT_REACHABLE);
                    if (!isFinite(r)) return s;
                    var u = t.panelCount,
                        l = i.anchorPoints,
                        c =
                            Math.sign(e - o) *
                            Math.floor(Math.abs(e - o) / i.rangeDiff);
                    (e > o && s.index < n.index) ||
                    (s.position > n.position && s.index === n.index)
                        ? (c += 1)
                        : ((e < o && s.index > n.index) ||
                              (s.position < n.position &&
                                  s.index === n.index)) &&
                          (c -= 1);
                    var h = c * u,
                        f = s.index + h;
                    if (Math.abs(f - n.index) <= r) {
                        var d = l[s.index];
                        return new In({
                            index: d.index,
                            position: d.position + c * i.rangeDiff,
                            panel: d.panel,
                        });
                    }
                    if (t.circularEnabled) {
                        var g = l[Z(n.index + Math.sign(e - o) * r, u)],
                            v = Math.floor(r / u);
                        return (
                            e > o && g.index < n.index
                                ? (v += 1)
                                : e < o && g.index > n.index && (v -= 1),
                            new In({
                                index: g.index,
                                position: g.position + v * i.rangeDiff,
                                panel: g.panel,
                            })
                        );
                    }
                    return l[
                        A(n.index + Math.sign(e - o) * r, 0, l.length - 1)
                    ];
                }),
                (i._findAdjacentAnchor = function (e, n) {
                    var t,
                        i = S(this._flicking).camera;
                    return null !==
                        (t = e > 0 ? i.getNextAnchor(n) : i.getPrevAnchor(n)) &&
                        void 0 !== t
                        ? t
                        : n;
                }),
                (i._calcSnapThreshold = function (e, n) {
                    var t = e > n.position,
                        i = n.panel,
                        r = i.size,
                        o = i.alignPosition;
                    return t ? r - o + i.margin.next : o + i.margin.prev;
                }),
                t
            );
        })(Cn),
        An = (function (e) {
            function t(n) {
                var t = (void 0 === n ? {} : n).stopAtEdge,
                    i = void 0 === t || t,
                    r = e.call(this) || this;
                return (r._stopAtEdge = i), r;
            }
            n(t, e);
            var i = t.prototype;
            return (
                Object.defineProperty(i, "stopAtEdge", {
                    get: function () {
                        return this._stopAtEdge;
                    },
                    set: function (e) {
                        this._stopAtEdge = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (i.updatePosition = function (e) {
                    var n = S(this._flicking).camera,
                        t = this._activePanel;
                    if (t) {
                        var i = t.range,
                            r = i.min + (i.max - i.min) * e;
                        n.lookAt(n.clampToReachablePosition(r));
                    }
                }),
                (i.moveToPosition = function (e, n, t) {
                    var i = S(this._flicking).camera,
                        r = i.clampToReachablePosition(e),
                        o = i.findAnchorIncludePosition(r);
                    if (!o)
                        return Promise.reject(
                            new ne(b(e), p.POSITION_NOT_REACHABLE)
                        );
                    var a = o.panel;
                    return (
                        a !== this._activePanel &&
                            this._triggerIndexChangeEvent(a, e, t),
                        this._animateToPosition({
                            position: this._stopAtEdge ? r : e,
                            duration: n,
                            newActivePanel: a,
                            axesEvent: t,
                        })
                    );
                }),
                t
            );
        })(Cn),
        Sn = (function (e) {
            function t(n) {
                var t = (void 0 === n ? {} : n).count,
                    i = void 0 === t ? 1 : t,
                    r = e.call(this) || this;
                return (
                    (r.setActive = function (n, t, i) {
                        e.prototype.setActive.call(r, n, t, i), r.updateInput();
                    }),
                    (r._count = i),
                    r._resetIndexRange(),
                    r
                );
            }
            n(t, e);
            var o = t.prototype;
            return (
                Object.defineProperty(o, "count", {
                    get: function () {
                        return this._count;
                    },
                    set: function (e) {
                        this._count = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (o.destroy = function () {
                    e.prototype.destroy.call(this), this._resetIndexRange();
                }),
                (o.updateInput = function () {
                    var e,
                        n = S(this._flicking),
                        t = n.camera,
                        i = n.renderer,
                        r = this._controller,
                        o = t.controlParams,
                        a = this._count,
                        s = r.state.animating
                            ? null === (e = t.findNearestAnchor(t.position)) ||
                              void 0 === e
                                ? void 0
                                : e.panel
                            : this._activePanel;
                    if (!s) return r.update(o), this._resetIndexRange(), this;
                    var u = o.range,
                        l = s.position,
                        c = s.index,
                        h = i.panelCount,
                        f = c - a,
                        d = c + a;
                    f < 0 &&
                        (f = n.circularEnabled
                            ? H(((f + 1) % h) - 1, h)
                            : A(f, 0, h - 1)),
                        d >= h &&
                            (d = n.circularEnabled ? d % h : A(d, 0, h - 1));
                    var g = i.panels[f],
                        p = i.panels[d],
                        v = Math.max(g.position, u.min),
                        _ = Math.min(p.position, u.max);
                    return (
                        v > l && (v -= t.rangeDiff),
                        _ < l && (_ += t.rangeDiff),
                        (o.range = { min: v, max: _ }),
                        o.circular &&
                            (o.position < v && (o.position += t.rangeDiff),
                            o.position > _ && (o.position -= t.rangeDiff)),
                        (o.circular = !1),
                        r.update(o),
                        (this._indexRange = { min: g.index, max: p.index }),
                        this
                    );
                }),
                (o.moveToPanel = function (n, t) {
                    return i(this, void 0, void 0, function () {
                        var i, o;
                        return r(this, function (r) {
                            return (
                                (i = S(this._flicking)),
                                (o = i.camera),
                                this._controller.update(o.controlParams),
                                [2, e.prototype.moveToPanel.call(this, n, t)]
                            );
                        });
                    });
                }),
                (o.moveToPosition = function (e, n, t) {
                    var i = S(this._flicking),
                        r = i.camera,
                        o = this._activePanel,
                        a = this._controller.range,
                        s = this._indexRange,
                        u = r.range,
                        l = A(r.clampToReachablePosition(e), a[0], a[1]),
                        c = r.findAnchorIncludePosition(l);
                    if (!c || !o)
                        return Promise.reject(
                            new ne(b(e), p.POSITION_NOT_REACHABLE)
                        );
                    var h,
                        f,
                        d = o.position,
                        g = Math.abs(e - d) >= i.threshold,
                        v = e > d ? r.getNextAnchor(c) : r.getPrevAnchor(c),
                        _ = r.anchorPoints,
                        m = _[0],
                        E = _[_.length - 1],
                        y = e <= u.min && K(m.panel.index, s.min, s.max),
                        P = e >= u.max && K(E.panel.index, s.min, s.max),
                        x =
                            v &&
                            (s.min <= s.max
                                ? K(v.index, s.min, s.max)
                                : v.index >= s.min || v.index <= s.max);
                    if (y || P) {
                        var O = e < u.min ? m : E;
                        (f = O.panel), (h = O.position);
                    } else
                        g && c.position !== o.position
                            ? ((f = c.panel), (h = c.position))
                            : g && x
                            ? ((f = v.panel), (h = v.position))
                            : ((h = r.clampToReachablePosition(o.position)),
                              (f = o));
                    return (
                        this._triggerIndexChangeEvent(f, e, t),
                        this._animateToPosition({
                            position: h,
                            duration: n,
                            newActivePanel: f,
                            axesEvent: t,
                        })
                    );
                }),
                (o._resetIndexRange = function () {
                    this._indexRange = { min: 0, max: 0 };
                }),
                t
            );
        })(Cn),
        Mn = {
            __proto__: null,
            Control: Cn,
            SnapControl: kn,
            FreeControl: An,
            StrictControl: Sn,
            AxesController: Rn,
            State: En,
            IdleState: yn,
            HoldingState: Pn,
            DraggingState: xn,
            AnimatingState: On,
            DisabledState: wn,
            StateMachine: Tn,
        },
        Nn = (function () {
            function e(e) {
                this._flicking = e;
            }
            var n = e.prototype;
            return (
                (n.getAnchors = function () {
                    return this._flicking.renderer.panels.map(function (e, n) {
                        return new In({
                            index: n,
                            position: e.position,
                            panel: e,
                        });
                    });
                }),
                (n.findAnchorIncludePosition = function (e) {
                    return this._flicking.camera.anchorPoints
                        .filter(function (n) {
                            return n.panel.includePosition(e, !0);
                        })
                        .reduce(function (n, t) {
                            return n &&
                                Math.abs(n.position - e) <
                                    Math.abs(t.position - e)
                                ? n
                                : t;
                        }, null);
                }),
                (n.findNearestAnchor = function (e) {
                    var n = this._flicking.camera.anchorPoints;
                    if (n.length <= 0) return null;
                    for (var t = 1 / 0, i = 0; i < n.length; i++) {
                        var r = n[i],
                            o = Math.abs(r.position - e);
                        if (o > t) return n[i - 1];
                        t = o;
                    }
                    return n[n.length - 1];
                }),
                (n.clampToReachablePosition = function (e) {
                    var n = this._flicking.camera.range;
                    return A(e, n.min, n.max);
                }),
                (n.getCircularOffset = function () {
                    return 0;
                }),
                (n.canReach = function (e) {
                    var n = this._flicking.camera.range;
                    if (e.removed) return !1;
                    var t = e.position;
                    return t >= n.min && t <= n.max;
                }),
                (n.canSee = function (e) {
                    var n = this._flicking.camera.visibleRange;
                    return e.isVisibleOnRange(n.min, n.max);
                }),
                e
            );
        })(),
        Dn = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            n(t, e);
            var i = t.prototype;
            return (
                (i.checkAvailability = function () {
                    return !0;
                }),
                (i.getRange = function () {
                    var e,
                        n,
                        t = this._flicking.renderer,
                        i = t.getPanel(0),
                        r = t.getPanel(t.panelCount - 1);
                    return {
                        min:
                            null !== (e = null == i ? void 0 : i.position) &&
                            void 0 !== e
                                ? e
                                : 0,
                        max:
                            null !== (n = null == r ? void 0 : r.position) &&
                            void 0 !== n
                                ? n
                                : 0,
                    };
                }),
                t
            );
        })(Nn),
        jn = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            n(t, e);
            var i = t.prototype;
            return (
                (i.checkAvailability = function () {
                    var e = this._flicking,
                        n = e.renderer.panels;
                    if (n.length <= 0) return !1;
                    var t = n[0],
                        i = n[n.length - 1],
                        r = t.range.min - t.margin.prev,
                        o = i.range.max + i.margin.next,
                        a = e.camera.size,
                        s = o - r;
                    return n.every(function (e) {
                        return s - e.size >= a;
                    });
                }),
                (i.getRange = function () {
                    var e = this._flicking.renderer.panels;
                    if (e.length <= 0) return { min: 0, max: 0 };
                    var n = e[0],
                        t = e[e.length - 1];
                    return {
                        min: n.range.min - n.margin.prev,
                        max: t.range.max + t.margin.next,
                    };
                }),
                (i.getAnchors = function () {
                    return this._flicking.renderer.panels.map(function (e, n) {
                        return new In({
                            index: n,
                            position: e.position,
                            panel: e,
                        });
                    });
                }),
                (i.findNearestAnchor = function (e) {
                    var n = this._flicking.camera,
                        t = n.anchorPoints;
                    if (t.length <= 0) return null;
                    for (
                        var i = n.range, r = 1 / 0, o = -1, a = 0;
                        a < t.length;
                        a++
                    ) {
                        var s = t[a],
                            u = Math.min(
                                Math.abs(s.position - e),
                                Math.abs(s.position - i.min + i.max - e),
                                Math.abs(e - i.min + i.max - s.position)
                            );
                        u < r && ((r = u), (o = a));
                    }
                    return t[o];
                }),
                (i.findAnchorIncludePosition = function (n) {
                    var t = this._flicking.camera,
                        i = t.range,
                        r = t.anchorPoints,
                        o = t.rangeDiff,
                        a = r.length,
                        s = X(n, i.min, i.max),
                        u = e.prototype.findAnchorIncludePosition.call(this, s);
                    if (a > 0 && (n === i.min || n === i.max)) {
                        var l = [
                            u,
                            new In({
                                index: 0,
                                position: r[0].position + o,
                                panel: r[0].panel,
                            }),
                            new In({
                                index: a - 1,
                                position: r[a - 1].position - o,
                                panel: r[a - 1].panel,
                            }),
                        ].filter(function (e) {
                            return !!e;
                        });
                        u = l.reduce(function (e, t) {
                            return e &&
                                Math.abs(e.position - n) <
                                    Math.abs(t.position - n)
                                ? e
                                : t;
                        }, null);
                    }
                    if (!u) return null;
                    if (n < i.min) {
                        var c = -Math.floor((i.min - n) / o) - 1;
                        return new In({
                            index: u.index,
                            position: u.position + o * c,
                            panel: u.panel,
                        });
                    }
                    return n > i.max
                        ? ((c = Math.floor((n - i.max) / o) + 1),
                          new In({
                              index: u.index,
                              position: u.position + o * c,
                              panel: u.panel,
                          }))
                        : u;
                }),
                (i.getCircularOffset = function () {
                    var e = this._flicking;
                    if (!e.camera.circularEnabled) return 0;
                    var n = e.panels.filter(function (e) {
                            return e.toggled;
                        }),
                        t = n.filter(function (e) {
                            return e.toggleDirection === x.PREV;
                        }),
                        i = n.filter(function (e) {
                            return e.toggleDirection === x.NEXT;
                        });
                    return (
                        this._calcPanelAreaSum(t) - this._calcPanelAreaSum(i)
                    );
                }),
                (i.clampToReachablePosition = function (e) {
                    return e;
                }),
                (i.canReach = function (e) {
                    return !e.removed;
                }),
                (i.canSee = function (n) {
                    var t = this._flicking.camera,
                        i = t.range,
                        r = t.rangeDiff,
                        o = t.visibleRange,
                        a = e.prototype.canSee.call(this, n);
                    return o.min < i.min
                        ? a || n.isVisibleOnRange(o.min + r, o.max + r)
                        : o.max > i.max
                        ? a || n.isVisibleOnRange(o.min - r, o.max - r)
                        : a;
                }),
                (i._calcPanelAreaSum = function (e) {
                    return e.reduce(function (e, n) {
                        return e + n.sizeIncludingMargin;
                    }, 0);
                }),
                t
            );
        })(Nn),
        Ln = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            n(t, e);
            var i = t.prototype;
            return (
                (i.checkAvailability = function () {
                    var e = this._flicking,
                        n = e.renderer,
                        t = n.getPanel(0),
                        i = n.getPanel(n.panelCount - 1);
                    if (!t || !i) return !1;
                    var r = e.camera.size,
                        o = t.range.min;
                    return r < i.range.max - o;
                }),
                (i.getRange = function () {
                    var e = this._flicking,
                        n = e.renderer,
                        t = e.camera.alignPosition,
                        i = n.getPanel(0),
                        r = n.getPanel(n.panelCount - 1);
                    if (!i || !r) return { min: 0, max: 0 };
                    var o = e.camera.size,
                        a = i.range.min,
                        s = r.range.max,
                        u = a + t,
                        l = s - o + t;
                    if (o < s - a) return { min: u, max: l };
                    var c = e.camera.align,
                        h = "object" == typeof c ? c.camera : c,
                        f = u + N(h, l - u);
                    return { min: f, max: f };
                }),
                (i.getAnchors = function () {
                    var e = this._flicking,
                        n = e.camera,
                        t = e.renderer.panels;
                    if (t.length <= 0) return [];
                    var i = e.camera.range,
                        r = t.filter(function (e) {
                            return n.canReach(e);
                        });
                    if (r.length > 0) {
                        var o = r[0].position !== i.min,
                            a = r[r.length - 1].position !== i.max,
                            s = o ? 1 : 0,
                            u = r.map(function (e, n) {
                                return new In({
                                    index: n + s,
                                    position: e.position,
                                    panel: e,
                                });
                            });
                        return (
                            o &&
                                u.splice(
                                    0,
                                    0,
                                    new In({
                                        index: 0,
                                        position: i.min,
                                        panel: t[r[0].index - 1],
                                    })
                                ),
                            a &&
                                u.push(
                                    new In({
                                        index: u.length,
                                        position: i.max,
                                        panel: t[r[r.length - 1].index + 1],
                                    })
                                ),
                            u
                        );
                    }
                    if (i.min !== i.max) {
                        var l = this._findNearestPanel(i.min, t),
                            c = l.index === t.length - 1 ? l.prev() : l,
                            h = c.next();
                        return [
                            new In({ index: 0, position: i.min, panel: c }),
                            new In({ index: 1, position: i.max, panel: h }),
                        ];
                    }
                    return [
                        new In({
                            index: 0,
                            position: i.min,
                            panel: this._findNearestPanel(i.min, t),
                        }),
                    ];
                }),
                (i.findAnchorIncludePosition = function (n) {
                    var t = this._flicking.camera,
                        i = t.range,
                        r = t.anchorPoints;
                    return r.length <= 0
                        ? null
                        : n <= i.min
                        ? r[0]
                        : n >= i.max
                        ? r[r.length - 1]
                        : e.prototype.findAnchorIncludePosition.call(this, n);
                }),
                (i._findNearestPanel = function (e, n) {
                    for (var t = 1 / 0, i = 0; i < n.length; i++) {
                        var r = n[i],
                            o = Math.abs(r.position - e);
                        if (o > t) return n[i - 1];
                        t = o;
                    }
                    return n[n.length - 1];
                }),
                t
            );
        })(Nn),
        zn = (function () {
            function e(e, n) {
                var t = this,
                    i = (void 0 === n ? {} : n).align,
                    r = void 0 === i ? P.CENTER : i;
                (this._checkTranslateSupport = function () {
                    var e,
                        n,
                        i = document.documentElement.style,
                        r = "";
                    try {
                        for (
                            var a = o([
                                    "webkitTransform",
                                    "msTransform",
                                    "MozTransform",
                                    "OTransform",
                                    "transform",
                                ]),
                                s = a.next();
                            !s.done;
                            s = a.next()
                        ) {
                            var u = s.value;
                            u in i && (r = u);
                        }
                    } catch (n) {
                        e = { error: n };
                    } finally {
                        try {
                            s && !s.done && (n = a.return) && n.call(a);
                        } finally {
                            if (e) throw e.error;
                        }
                    }
                    if (!r)
                        throw new ne(
                            "Browser does not support CSS transform.",
                            p.TRANSFORM_NOT_SUPPORTED
                        );
                    t._transform = r;
                }),
                    (this._flicking = e),
                    this._resetInternalValues(),
                    (this._align = r);
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "element", {
                    get: function () {
                        return this._el;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "children", {
                    get: function () {
                        return M(this._el.children);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "position", {
                    get: function () {
                        return this._position;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "alignPosition", {
                    get: function () {
                        return this._alignPos;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "offset", {
                    get: function () {
                        return this._offset - this._circularOffset;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "circularEnabled", {
                    get: function () {
                        return this._circularEnabled;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "mode", {
                    get: function () {
                        return this._mode;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "range", {
                    get: function () {
                        return this._range;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "rangeDiff", {
                    get: function () {
                        return this._range.max - this._range.min;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "visiblePanels", {
                    get: function () {
                        return this._visiblePanels;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "visibleRange", {
                    get: function () {
                        return {
                            min: this._position - this._alignPos,
                            max: this._position - this._alignPos + this.size,
                        };
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "anchorPoints", {
                    get: function () {
                        return this._anchors;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "controlParams", {
                    get: function () {
                        return {
                            range: this._range,
                            position: this._position,
                            circular: this._circularEnabled,
                        };
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "atEdge", {
                    get: function () {
                        return (
                            this._position <= this._range.min ||
                            this._position >= this._range.max
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "size", {
                    get: function () {
                        var e = this._flicking;
                        return e
                            ? e.horizontal
                                ? e.viewport.width
                                : e.viewport.height
                            : 0;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "progress", {
                    get: function () {
                        var e = this._flicking,
                            n = this._position + this._offset,
                            t = this.findNearestAnchor(this._position);
                        if (!e || !t) return NaN;
                        var i = t.panel,
                            r = i.position + i.offset,
                            o = e.control.controller.bounce,
                            a = this.range,
                            s = a.min,
                            u = a.max,
                            l = this.rangeDiff;
                        if (n === r) return i.index;
                        if (n < r) {
                            var c = i.prev(),
                                h = c ? c.position + c.offset : s - o[0];
                            return h > r && (h -= l), i.index - 1 + U(n, h, r);
                        }
                        var f = i.next(),
                            d = f ? f.position + f.offset : u + o[1];
                        return d < r && (d += l), i.index + U(n, r, d);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "align", {
                    get: function () {
                        return this._align;
                    },
                    set: function (e) {
                        this._align = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.init = function () {
                    var e = this._flicking.viewport.element;
                    return (
                        k(
                            e.firstElementChild,
                            "First element child of the viewport element"
                        ),
                        (this._el = e.firstElementChild),
                        this._checkTranslateSupport(),
                        this._updateMode(),
                        this
                    );
                }),
                (n.destroy = function () {
                    return this._resetInternalValues(), this;
                }),
                (n.lookAt = function (e) {
                    var n = this,
                        t = S(this._flicking),
                        i = this._position;
                    this._position = e;
                    var r = this._togglePanels(i, e);
                    this._refreshVisiblePanels(),
                        this._checkNeedPanel(),
                        this._checkReachEnd(i, e),
                        r
                            ? t.renderer.render().then(function () {
                                  n.updateOffset();
                              })
                            : this.applyTransform();
                }),
                (n.getPrevAnchor = function (e) {
                    if (this._circularEnabled && 0 === e.index) {
                        var n = this._anchors,
                            t = this.rangeDiff,
                            i = n[n.length - 1];
                        return new In({
                            index: i.index,
                            position: i.position - t,
                            panel: i.panel,
                        });
                    }
                    return this._anchors[e.index - 1] || null;
                }),
                (n.getNextAnchor = function (e) {
                    var n = this._anchors;
                    if (this._circularEnabled && e.index === n.length - 1) {
                        var t = this.rangeDiff,
                            i = n[0];
                        return new In({
                            index: i.index,
                            position: i.position + t,
                            panel: i.panel,
                        });
                    }
                    return n[e.index + 1] || null;
                }),
                (n.getProgressInPanel = function (e) {
                    var n = e.range;
                    return (this._position - n.min) / (n.max - n.min);
                }),
                (n.findAnchorIncludePosition = function (e) {
                    return this._mode.findAnchorIncludePosition(e);
                }),
                (n.findNearestAnchor = function (e) {
                    return this._mode.findNearestAnchor(e);
                }),
                (n.findActiveAnchor = function () {
                    var e = S(this._flicking).control.activeIndex;
                    return $(this._anchors, function (n) {
                        return n.panel.index === e;
                    });
                }),
                (n.clampToReachablePosition = function (e) {
                    return this._mode.clampToReachablePosition(e);
                }),
                (n.canReach = function (e) {
                    return this._mode.canReach(e);
                }),
                (n.canSee = function (e) {
                    return this._mode.canSee(e);
                }),
                (n.updateRange = function () {
                    var e = S(this._flicking).renderer.panels;
                    return (
                        this._updateMode(),
                        (this._range = this._mode.getRange()),
                        this._circularEnabled &&
                            e.forEach(function (e) {
                                return e.updateCircularToggleDirection();
                            }),
                        this
                    );
                }),
                (n.updateAlignPos = function () {
                    var e = this._align,
                        n = "object" == typeof e ? e.camera : e;
                    return (this._alignPos = N(n, this.size)), this;
                }),
                (n.updateAnchors = function () {
                    return (this._anchors = this._mode.getAnchors()), this;
                }),
                (n.updateAdaptiveHeight = function () {
                    var e = S(this._flicking),
                        n = e.control.activePanel;
                    e.horizontal &&
                        e.adaptive &&
                        n &&
                        e.viewport.setSize({ height: n.height });
                }),
                (n.updateOffset = function () {
                    var e = S(this._flicking),
                        n = this._position,
                        t = e.panels.filter(function (e) {
                            return !e.rendered;
                        });
                    return (
                        (this._offset = t
                            .filter(function (e) {
                                return e.position + e.offset < n;
                            })
                            .reduce(function (e, n) {
                                return e + n.sizeIncludingMargin;
                            }, 0)),
                        (this._circularOffset = this._mode.getCircularOffset()),
                        this.applyTransform(),
                        this
                    );
                }),
                (n.resetNeedPanelHistory = function () {
                    return (
                        (this._needPanelTriggered = { prev: !1, next: !1 }),
                        this
                    );
                }),
                (n.applyTransform = function () {
                    var e = this._el,
                        n = S(this._flicking);
                    if (n.renderer.rendering) return this;
                    var t =
                        this._position -
                        this._alignPos -
                        this._offset +
                        this._circularOffset;
                    return (
                        (e.style[this._transform] = n.horizontal
                            ? "translate(" + -t + "px)"
                            : "translate(0, " + -t + "px)"),
                        this
                    );
                }),
                (n._resetInternalValues = function () {
                    (this._position = 0),
                        (this._alignPos = 0),
                        (this._offset = 0),
                        (this._circularOffset = 0),
                        (this._circularEnabled = !1),
                        (this._range = { min: 0, max: 0 }),
                        (this._visiblePanels = []),
                        (this._anchors = []),
                        (this._needPanelTriggered = { prev: !1, next: !1 });
                }),
                (n._refreshVisiblePanels = function () {
                    var e = this,
                        n = S(this._flicking),
                        t = n.renderer.panels.filter(function (n) {
                            return e.canSee(n);
                        }),
                        i = this._visiblePanels;
                    this._visiblePanels = t;
                    var r = t.filter(function (e) {
                            return !B(i, e);
                        }),
                        o = i.filter(function (e) {
                            return !B(t, e);
                        });
                    (r.length > 0 || o.length > 0) &&
                        n.renderer.render().then(function () {
                            n.trigger(
                                new g(y.VISIBLE_CHANGE, {
                                    added: r,
                                    removed: o,
                                    visiblePanels: t,
                                })
                            );
                        });
                }),
                (n._checkNeedPanel = function () {
                    var e = this._needPanelTriggered;
                    if (!e.prev || !e.next) {
                        var n = S(this._flicking),
                            t = n.renderer.panels;
                        if (t.length <= 0)
                            return (
                                e.prev ||
                                    (n.trigger(
                                        new g(y.NEED_PANEL, {
                                            direction: x.PREV,
                                        })
                                    ),
                                    (e.prev = !0)),
                                void (
                                    e.next ||
                                    (n.trigger(
                                        new g(y.NEED_PANEL, {
                                            direction: x.NEXT,
                                        })
                                    ),
                                    (e.next = !0))
                                )
                            );
                        var i = this._position,
                            r = this.size,
                            o = this._range,
                            a = n.needPanelThreshold,
                            s = i - this._alignPos,
                            u = s + r,
                            l = t[0],
                            c = t[t.length - 1];
                        e.prev ||
                            ((s <= l.range.min + a || i <= o.min + a) &&
                                (n.trigger(
                                    new g(y.NEED_PANEL, { direction: x.PREV })
                                ),
                                (e.prev = !0))),
                            e.next ||
                                ((u >= c.range.max - a || i >= o.max - a) &&
                                    (n.trigger(
                                        new g(y.NEED_PANEL, {
                                            direction: x.NEXT,
                                        })
                                    ),
                                    (e.next = !0)));
                    }
                }),
                (n._checkReachEnd = function (e, n) {
                    var t = S(this._flicking),
                        i = this._range,
                        r = e > i.min && e < i.max,
                        o = n > i.min && n < i.max;
                    if (r && !o) {
                        var a = n <= i.min ? x.PREV : x.NEXT;
                        t.trigger(new g(y.REACH_EDGE, { direction: a }));
                    }
                }),
                (n._updateMode = function () {
                    var e = S(this._flicking);
                    if (e.circular) {
                        var n = new jn(e),
                            t = n.checkAvailability();
                        if (t) this._mode = n;
                        else {
                            var i = e.circularFallback;
                            this._mode = i === T.BOUND ? new Ln(e) : new Dn(e);
                        }
                        this._circularEnabled = t;
                    } else this._mode = e.bound ? new Ln(e) : new Dn(e);
                }),
                (n._togglePanels = function (e, n) {
                    return (
                        n !== e &&
                        S(this._flicking)
                            .renderer.panels.map(function (t) {
                                return t.toggle(e, n);
                            })
                            .some(function (e) {
                                return e;
                            })
                    );
                }),
                e
            );
        })(),
        Vn = {
            __proto__: null,
            Camera: zn,
            LinearCameraMode: Dn,
            CircularCameraMode: jn,
            BoundCameraMode: Ln,
        },
        Fn = function (e, n) {
            return (
                (Fn =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, n) {
                            e.__proto__ = n;
                        }) ||
                    function (e, n) {
                        for (var t in n)
                            Object.prototype.hasOwnProperty.call(n, t) &&
                                (e[t] = n[t]);
                    }),
                Fn(e, n)
            );
        };
    function Hn(e, n) {
        function t() {
            this.constructor = e;
        }
        Fn(e, n),
            (e.prototype =
                null === n
                    ? Object.create(n)
                    : ((t.prototype = n.prototype), new t()));
    }
    var Bn = function () {
            return (
                (Bn =
                    Object.assign ||
                    function (e) {
                        for (var n, t = 1, i = arguments.length; t < i; t++)
                            for (var r in (n = arguments[t]))
                                Object.prototype.hasOwnProperty.call(n, r) &&
                                    (e[r] = n[r]);
                        return e;
                    }),
                Bn.apply(this, arguments)
            );
        },
        Gn = "undefined" != typeof window,
        Xn = Gn ? window.navigator.userAgent : "",
        $n = !!Gn && !!("getComputedStyle" in window),
        Yn = /MSIE|Trident|Windows Phone|Edge/.test(Xn),
        Un = !!Gn && !!("addEventListener" in document),
        Wn = "width",
        qn = "height";
    function Kn(e, n) {
        return e.getAttribute(n) || "";
    }
    function Zn(e) {
        return [].slice.call(e);
    }
    function Jn(e) {
        return "loading" in e && "lazy" === e.getAttribute("loading");
    }
    function Qn(e, n, t) {
        Un
            ? e.addEventListener(n, t, !1)
            : e.attachEvent
            ? e.attachEvent("on" + n, t)
            : (e["on" + n] = t);
    }
    function et(e, n, t) {
        e.removeEventListener
            ? e.removeEventListener(n, t, !1)
            : e.detachEvent
            ? e.detachEvent("on" + n, t)
            : (e["on" + n] = null);
    }
    function nt(e, n) {
        var t = e["client" + n] || e["offset" + n];
        return (
            parseFloat(
                t ||
                    (function (e) {
                        return (
                            ($n
                                ? window.getComputedStyle(e)
                                : e.currentStyle) || {}
                        );
                    })(e)[n.toLowerCase()]
            ) || 0
        );
    }
    var tt = [];
    function it(e, n) {
        !tt.length && Qn(window, "resize", ot),
            (e.__PREFIX__ = n),
            tt.push(e),
            rt(e);
    }
    function rt(e, n) {
        void 0 === n && (n = "data-");
        var t = e.__PREFIX__ || n,
            i = parseInt(Kn(e, "" + t + Wn), 10) || 0,
            r = parseInt(Kn(e, "" + t + qn), 10) || 0;
        if (Kn(e, t + "fixed") === qn) {
            var o = nt(e, "Height") || r;
            e.style.width = (i / r) * o + "px";
        } else
            (o =
                (function (e) {
                    return nt(e, "Width");
                })(e) || i),
                (e.style.height = (r / i) * o + "px");
    }
    function ot() {
        tt.forEach(function (e) {
            rt(e);
        });
    }
    var at = (function (e) {
            function n(n, t) {
                void 0 === t && (t = {});
                var i = e.call(this) || this;
                (i.isReady = !1),
                    (i.isPreReady = !1),
                    (i.hasDataSize = !1),
                    (i.hasLoading = !1),
                    (i.isSkip = !1),
                    (i.onCheck = function (e) {
                        i.clear(),
                            e && "error" === e.type && i.onError(i.element);
                        var n = !i.hasDataSize && !i.hasLoading;
                        i.onReady(n);
                    }),
                    (i.options = Bn({ prefix: "data-" }, t)),
                    (i.element = n);
                var r = i.options.prefix;
                return (
                    (i.hasDataSize = (function (e, n) {
                        return (
                            void 0 === n && (n = "data-"),
                            !!e.getAttribute(n + "width")
                        );
                    })(n, r)),
                    (i.isSkip = (function (e, n) {
                        return (
                            void 0 === n && (n = "data-"),
                            !!e.getAttribute(n + "skip")
                        );
                    })(n, r)),
                    (i.hasLoading = Jn(n)),
                    i
                );
            }
            Hn(n, e);
            var t = n.prototype;
            return (
                (t.check = function () {
                    return this.isSkip || !this.checkElement()
                        ? (this.onAlreadyReady(!0), !1)
                        : (this.hasDataSize &&
                              it(this.element, this.options.prefix),
                          (this.hasDataSize || this.hasLoading) &&
                              this.onAlreadyPreReady(),
                          !0);
                }),
                (t.addEvents = function () {
                    var e = this,
                        n = this.element;
                    this.constructor.EVENTS.forEach(function (t) {
                        Qn(n, t, e.onCheck);
                    });
                }),
                (t.clear = function () {
                    var e = this,
                        n = this.element;
                    this.constructor.EVENTS.forEach(function (t) {
                        et(n, t, e.onCheck);
                    }),
                        this.removeAutoSizer();
                }),
                (t.destroy = function () {
                    this.clear(), this.off();
                }),
                (t.removeAutoSizer = function () {
                    if (this.hasDataSize) {
                        var e = this.options.prefix;
                        !(function (e, n) {
                            var t = tt.indexOf(e);
                            if (!(t < 0)) {
                                var i = Kn(e, n + "fixed");
                                delete e.__PREFIX__,
                                    (e.style[i === qn ? Wn : qn] = ""),
                                    tt.splice(t, 1),
                                    !tt.length && et(window, "resize", ot);
                            }
                        })(this.element, e);
                    }
                }),
                (t.onError = function (e) {
                    this.trigger("error", { element: this.element, target: e });
                }),
                (t.onPreReady = function () {
                    this.isPreReady ||
                        ((this.isPreReady = !0),
                        this.trigger("preReady", {
                            element: this.element,
                            hasLoading: this.hasLoading,
                            isSkip: this.isSkip,
                        }));
                }),
                (t.onReady = function (e) {
                    this.isReady ||
                        ((e = !this.isPreReady && e) && (this.isPreReady = !0),
                        this.removeAutoSizer(),
                        (this.isReady = !0),
                        this.trigger("ready", {
                            element: this.element,
                            withPreReady: e,
                            hasLoading: this.hasLoading,
                            isSkip: this.isSkip,
                        }));
                }),
                (t.onAlreadyError = function (e) {
                    var n = this;
                    setTimeout(function () {
                        n.onError(e);
                    });
                }),
                (t.onAlreadyPreReady = function () {
                    var e = this;
                    setTimeout(function () {
                        e.onPreReady();
                    });
                }),
                (t.onAlreadyReady = function (e) {
                    var n = this;
                    setTimeout(function () {
                        n.onReady(e);
                    });
                }),
                (n.EVENTS = []),
                n
            );
        })(d),
        st = (function (e) {
            function n() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            Hn(n, e);
            var t = n.prototype;
            return (
                (t.setHasLoading = function (e) {
                    this.hasLoading = e;
                }),
                (t.check = function () {
                    return this.isSkip
                        ? (this.onAlreadyReady(!0), !1)
                        : (this.hasDataSize
                              ? (it(this.element, this.options.prefix),
                                this.onAlreadyPreReady())
                              : this.trigger("requestChildren"),
                          !0);
                }),
                (t.checkElement = function () {
                    return !0;
                }),
                (t.destroy = function () {
                    this.clear(), this.trigger("requestDestroy"), this.off();
                }),
                (t.onAlreadyPreReady = function () {
                    e.prototype.onAlreadyPreReady.call(this),
                        this.trigger("reqeustReadyChildren");
                }),
                (n.EVENTS = []),
                n
            );
        })(at),
        ut = (function (e) {
            function n(n) {
                void 0 === n && (n = {});
                var t = e.call(this) || this;
                return (
                    (t.readyCount = 0),
                    (t.preReadyCount = 0),
                    (t.totalCount = 0),
                    (t.totalErrorCount = 0),
                    (t.isPreReadyOver = !0),
                    (t.elementInfos = []),
                    (t.options = Bn({ loaders: {}, prefix: "data-" }, n)),
                    t
                );
            }
            Hn(n, e);
            var t = n.prototype;
            return (
                (t.check = function (e) {
                    var n = this,
                        t = this.options.prefix;
                    this.clear(),
                        (this.elementInfos = Zn(e).map(function (e, i) {
                            var r = n.getLoader(e, { prefix: t });
                            return (
                                r.check(),
                                r
                                    .on("error", function (e) {
                                        n.onError(i, e.target);
                                    })
                                    .on("preReady", function (e) {
                                        var t = n.elementInfos[i];
                                        (t.hasLoading = e.hasLoading),
                                            (t.isSkip = e.isSkip);
                                        var r = n.checkPreReady(i);
                                        n.onPreReadyElement(i),
                                            r && n.onPreReady();
                                    })
                                    .on("ready", function (e) {
                                        var t = e.withPreReady,
                                            r = e.hasLoading,
                                            o = e.isSkip,
                                            a = n.elementInfos[i];
                                        (a.hasLoading = r), (a.isSkip = o);
                                        var s = t && n.checkPreReady(i),
                                            u = n.checkReady(i);
                                        t && n.onPreReadyElement(i),
                                            n.onReadyElement(i),
                                            s && n.onPreReady(),
                                            u && n.onReady();
                                    }),
                                {
                                    loader: r,
                                    element: e,
                                    hasLoading: !1,
                                    hasError: !1,
                                    isPreReady: !1,
                                    isReady: !1,
                                    isSkip: !1,
                                }
                            );
                        }));
                    var i = this.elementInfos.length;
                    return (
                        (this.totalCount = i),
                        i ||
                            setTimeout(function () {
                                n.onPreReady(), n.onReady();
                            }),
                        this
                    );
                }),
                (t.getTotalCount = function () {
                    return this.totalCount;
                }),
                (t.isPreReady = function () {
                    return this.elementInfos.every(function (e) {
                        return e.isPreReady;
                    });
                }),
                (t.isReady = function () {
                    return this.elementInfos.every(function (e) {
                        return e.isReady;
                    });
                }),
                (t.hasError = function () {
                    return this.totalErrorCount > 0;
                }),
                (t.clear = function () {
                    (this.isPreReadyOver = !1),
                        (this.totalCount = 0),
                        (this.preReadyCount = 0),
                        (this.readyCount = 0),
                        (this.totalErrorCount = 0),
                        this.elementInfos.forEach(function (e) {
                            !e.isReady && e.loader && e.loader.destroy();
                        }),
                        (this.elementInfos = []);
                }),
                (t.destroy = function () {
                    this.clear(), this.off();
                }),
                (t.getLoader = function (e, n) {
                    var t = this,
                        i = e.tagName.toLowerCase(),
                        r = this.options.loaders,
                        o = Object.keys(r);
                    if (r[i]) return new r[i](e, n);
                    var a = new st(e, n),
                        s = Zn(e.querySelectorAll(o.join(", ")));
                    a.setHasLoading(
                        s.some(function (e) {
                            return Jn(e);
                        })
                    );
                    var u = !1,
                        l = this.clone()
                            .on("error", function (e) {
                                a.onError(e.target);
                            })
                            .on("ready", function () {
                                a.onReady(u);
                            });
                    return (
                        a
                            .on("requestChildren", function () {
                                var n = (function (e, n, t) {
                                    var i = Zn(
                                        e.querySelectorAll(
                                            (function () {
                                                for (
                                                    var e = 0,
                                                        n = 0,
                                                        t = arguments.length;
                                                    n < t;
                                                    n++
                                                )
                                                    e += arguments[n].length;
                                                var i = Array(e),
                                                    r = 0;
                                                for (n = 0; n < t; n++)
                                                    for (
                                                        var o = arguments[n],
                                                            a = 0,
                                                            s = o.length;
                                                        a < s;
                                                        a++, r++
                                                    )
                                                        i[r] = o[a];
                                                return i;
                                            })(
                                                [
                                                    "[" +
                                                        t +
                                                        "skip] [" +
                                                        t +
                                                        "width]",
                                                ],
                                                n.map(function (e) {
                                                    return [
                                                        "[" + t + "skip] " + e,
                                                        e + "[" + t + "skip]",
                                                        "[" + t + "width] " + e,
                                                    ].join(", ");
                                                })
                                            ).join(", ")
                                        )
                                    );
                                    return Zn(
                                        e.querySelectorAll(
                                            "[" + t + "width], " + n.join(", ")
                                        )
                                    ).filter(function (e) {
                                        return -1 === i.indexOf(e);
                                    });
                                })(e, o, t.options.prefix);
                                l.check(n).on("preReady", function (e) {
                                    (u = e.isReady) || a.onPreReady();
                                });
                            })
                            .on("reqeustReadyChildren", function () {
                                l.check(s);
                            })
                            .on("requestDestroy", function () {
                                l.destroy();
                            }),
                        a
                    );
                }),
                (t.clone = function () {
                    return new n(Bn({}, this.options));
                }),
                (t.checkPreReady = function (e) {
                    return (
                        (this.elementInfos[e].isPreReady = !0),
                        ++this.preReadyCount,
                        !(this.preReadyCount < this.totalCount)
                    );
                }),
                (t.checkReady = function (e) {
                    return (
                        (this.elementInfos[e].isReady = !0),
                        ++this.readyCount,
                        !(this.readyCount < this.totalCount)
                    );
                }),
                (t.onError = function (e, n) {
                    var t = this.elementInfos[e];
                    (t.hasError = !0),
                        this.trigger("error", {
                            element: t.element,
                            index: e,
                            target: n,
                            errorCount: this.getErrorCount(),
                            totalErrorCount: ++this.totalErrorCount,
                        });
                }),
                (t.onPreReadyElement = function (e) {
                    var n = this.elementInfos[e];
                    this.trigger("preReadyElement", {
                        element: n.element,
                        index: e,
                        preReadyCount: this.preReadyCount,
                        readyCount: this.readyCount,
                        totalCount: this.totalCount,
                        isPreReady: this.isPreReady(),
                        isReady: this.isReady(),
                        hasLoading: n.hasLoading,
                        isSkip: n.isSkip,
                    });
                }),
                (t.onPreReady = function () {
                    (this.isPreReadyOver = !0),
                        this.trigger("preReady", {
                            readyCount: this.readyCount,
                            totalCount: this.totalCount,
                            isReady: this.isReady(),
                            hasLoading: this.hasLoading(),
                        });
                }),
                (t.onReadyElement = function (e) {
                    var n = this.elementInfos[e];
                    this.trigger("readyElement", {
                        index: e,
                        element: n.element,
                        hasError: n.hasError,
                        errorCount: this.getErrorCount(),
                        totalErrorCount: this.totalErrorCount,
                        preReadyCount: this.preReadyCount,
                        readyCount: this.readyCount,
                        totalCount: this.totalCount,
                        isPreReady: this.isPreReady(),
                        isReady: this.isReady(),
                        hasLoading: n.hasLoading,
                        isPreReadyOver: this.isPreReadyOver,
                        isSkip: n.isSkip,
                    });
                }),
                (t.onReady = function () {
                    this.trigger("ready", {
                        errorCount: this.getErrorCount(),
                        totalErrorCount: this.totalErrorCount,
                        totalCount: this.totalCount,
                    });
                }),
                (t.getErrorCount = function () {
                    return this.elementInfos.filter(function (e) {
                        return e.hasError;
                    }).length;
                }),
                (t.hasLoading = function () {
                    return this.elementInfos.some(function (e) {
                        return e.hasLoading;
                    });
                }),
                n
            );
        })(d),
        lt = (function (e) {
            function n() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                Hn(n, e),
                (n.prototype.checkElement = function () {
                    var e = this.element,
                        n = e.getAttribute("src");
                    if (e.complete) {
                        if (n)
                            return e.naturalWidth || this.onAlreadyError(e), !1;
                        this.onAlreadyPreReady();
                    }
                    return this.addEvents(), Yn && e.setAttribute("src", n), !0;
                }),
                (n.EVENTS = ["load", "error"]),
                n
            );
        })(at),
        ct = (function (e) {
            function n() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                Hn(n, e),
                (n.prototype.checkElement = function () {
                    var e = this.element;
                    return !(
                        e.readyState >= 1 ||
                        (e.error
                            ? (this.onAlreadyError(e), 1)
                            : (this.addEvents(), 0))
                    );
                }),
                (n.EVENTS = ["loadedmetadata", "error"]),
                n
            );
        })(at),
        ht = (function (e) {
            function n(n) {
                return (
                    void 0 === n && (n = {}),
                    e.call(this, Bn({ loaders: { img: lt, video: ct } }, n)) ||
                        this
                );
            }
            return Hn(n, e), n;
        })(ut),
        ft = (function () {
            function e(e) {
                var n = e.align,
                    t = void 0 === n ? P.CENTER : n,
                    i = e.strategy;
                (this._flicking = null),
                    (this._panels = []),
                    (this._rendering = !1),
                    (this._align = t),
                    (this._strategy = i);
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "panels", {
                    get: function () {
                        return this._panels;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "rendering", {
                    get: function () {
                        return this._rendering;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "panelCount", {
                    get: function () {
                        return this._panels.length;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "strategy", {
                    get: function () {
                        return this._strategy;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "align", {
                    get: function () {
                        return this._align;
                    },
                    set: function (e) {
                        this._align = e;
                        var n = z(e);
                        this._panels.forEach(function (e) {
                            e.align = n;
                        });
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.init = function (e) {
                    return (this._flicking = e), this._collectPanels(), this;
                }),
                (n.destroy = function () {
                    (this._flicking = null), (this._panels = []);
                }),
                (n.getPanel = function (e) {
                    return this._panels[e] || null;
                }),
                (n.forceRenderAllPanels = function () {
                    return (
                        this._panels.forEach(function (e) {
                            return e.markForShow();
                        }),
                        Promise.resolve()
                    );
                }),
                (n.updatePanelSize = function () {
                    var e = S(this._flicking),
                        n = this._panels;
                    if (n.length <= 0) return this;
                    if (e.panelsPerView > 0) {
                        var t = n[0];
                        t.resize(), this._updatePanelSizeByGrid(t, n);
                    } else
                        e.panels.forEach(function (e) {
                            return e.resize();
                        });
                    return this;
                }),
                (n.batchInsert = function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    var t = this.batchInsertDefer.apply(this, s(e));
                    return t.length <= 0
                        ? []
                        : (this.updateAfterPanelChange(t, []), t);
                }),
                (n.batchInsertDefer = function () {
                    for (var e = this, n = [], t = 0; t < arguments.length; t++)
                        n[t] = arguments[t];
                    var i = this._panels,
                        r = S(this._flicking),
                        o = i[0],
                        a = z(this._align),
                        u = n.reduce(function (n, t) {
                            var u,
                                l = H(t.index, i.length),
                                c = i.slice(l),
                                h = t.elements.map(function (n, t) {
                                    return e._createPanel(n, {
                                        index: l + t,
                                        align: a,
                                        flicking: r,
                                    });
                                });
                            if (
                                (i.splice.apply(i, s([l, 0], h)),
                                t.hasDOMInElements &&
                                    e._insertPanelElements(
                                        h,
                                        null !== (u = c[0]) && void 0 !== u
                                            ? u
                                            : null
                                    ),
                                r.panelsPerView > 0)
                            ) {
                                var f = o || h[0].resize();
                                e._updatePanelSizeByGrid(f, h);
                            } else
                                h.forEach(function (e) {
                                    return e.resize();
                                });
                            return (
                                c.forEach(function (e) {
                                    e.increaseIndex(h.length),
                                        e.updatePosition();
                                }),
                                s(n, h)
                            );
                        }, []);
                    return u;
                }),
                (n.batchRemove = function () {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    var t = this.batchRemoveDefer.apply(this, s(e));
                    return t.length <= 0
                        ? []
                        : (this.updateAfterPanelChange([], t), t);
                }),
                (n.batchRemoveDefer = function () {
                    for (var e = this, n = [], t = 0; t < arguments.length; t++)
                        n[t] = arguments[t];
                    var i = this._panels,
                        r = S(this._flicking),
                        o = r.control,
                        a = o.activePanel,
                        u = n.reduce(function (n, t) {
                            var r = t.index,
                                u = t.deleteCount,
                                l = H(r, i.length),
                                c = i.slice(l + u),
                                h = i.splice(l, u);
                            return h.length <= 0
                                ? []
                                : (c.forEach(function (e) {
                                      e.decreaseIndex(h.length),
                                          e.updatePosition();
                                  }),
                                  t.hasDOMInElements &&
                                      e._removePanelElements(h),
                                  h.forEach(function (e) {
                                      return e.destroy();
                                  }),
                                  B(h, a) && o.resetActive(),
                                  s(n, h));
                        }, []);
                    return u;
                }),
                (n.updateAfterPanelChange = function (e, n) {
                    var t,
                        i = S(this._flicking),
                        r = i.camera,
                        o = i.control,
                        a = this._panels,
                        u = o.activePanel;
                    if (
                        (this._updateCameraAndControl(),
                        this.render(),
                        !i.animating)
                    )
                        if (!u || u.removed)
                            if (a.length <= 0) r.lookAt(0);
                            else {
                                var l =
                                    null !==
                                        (t = null == u ? void 0 : u.index) &&
                                    void 0 !== t
                                        ? t
                                        : 0;
                                l > a.length - 1 && (l = a.length - 1),
                                    o
                                        .moveToPanel(a[l], { duration: 0 })
                                        .catch(function () {});
                            }
                        else
                            o.moveToPanel(u, { duration: 0 }).catch(
                                function () {}
                            );
                    i.camera.updateOffset(),
                        (e.length > 0 || n.length > 0) &&
                            (i.trigger(
                                new g(y.PANEL_CHANGE, { added: e, removed: n })
                            ),
                            this.checkPanelContentsReady(s(e, n)));
                }),
                (n.checkPanelContentsReady = function (e) {
                    var n = this,
                        t = S(this._flicking),
                        i = t.resizeOnContentsReady,
                        r = this._panels;
                    if (
                        i &&
                        !t.virtualEnabled &&
                        !(
                            (e = e.filter(function (e) {
                                return (function (e) {
                                    return !!e.element.querySelector(
                                        "img, video"
                                    );
                                })(e);
                            })).length <= 0
                        )
                    ) {
                        var o = new ht();
                        e.forEach(function (e) {
                            e.loading = !0;
                        }),
                            o.on("readyElement", function (i) {
                                if (n._flicking) {
                                    var a = e[i.index],
                                        s = t.camera,
                                        u = t.control,
                                        l = u.activePanel
                                            ? s.getProgressInPanel(
                                                  u.activePanel
                                              )
                                            : 0;
                                    (a.loading = !1),
                                        a.resize(),
                                        r
                                            .slice(a.index + 1)
                                            .forEach(function (e) {
                                                return e.updatePosition();
                                            }),
                                        t.initialized &&
                                            (s.updateRange(),
                                            s.updateOffset(),
                                            s.updateAnchors(),
                                            u.animating ||
                                                (u.updatePosition(l),
                                                u.updateInput()));
                                } else o.destroy();
                            }),
                            o.on("preReady", function (e) {
                                n._flicking && n.render(),
                                    e.readyCount === e.totalCount &&
                                        o.destroy();
                            }),
                            o.on("ready", function () {
                                n._flicking && n.render(), o.destroy();
                            }),
                            o.check(
                                e.map(function (e) {
                                    return e.element;
                                })
                            );
                    }
                }),
                (n._updateCameraAndControl = function () {
                    var e = S(this._flicking),
                        n = e.camera,
                        t = e.control;
                    n.updateRange(),
                        n.updateOffset(),
                        n.updateAnchors(),
                        n.resetNeedPanelHistory(),
                        t.updateInput();
                }),
                (n._showOnlyVisiblePanels = function (e) {
                    var n = e.renderer.panels,
                        t = e.camera.visiblePanels.reduce(function (e, n) {
                            return (e[n.index] = !0), e;
                        }, {});
                    n.forEach(function (n) {
                        n.index in t || n.loading
                            ? n.markForShow()
                            : e.holding || n.markForHide();
                    });
                }),
                (n._updatePanelSizeByGrid = function (e, n) {
                    var t = S(this._flicking),
                        i = t.panelsPerView;
                    if (i <= 0)
                        throw new ne(m("panelsPerView", i), p.WRONG_OPTION);
                    if (!(n.length <= 0)) {
                        var r =
                                (t.camera.size -
                                    (e.margin.prev + e.margin.next) * (i - 1)) /
                                i,
                            o = t.horizontal ? { width: r } : { height: r },
                            a = { size: r, height: e.height, margin: e.margin };
                        t.noPanelStyleOverride ||
                            this._strategy.updatePanelSizes(t, o),
                            t.panels.forEach(function (e) {
                                return e.resize(a);
                            });
                    }
                }),
                (n._removeAllChildsFromCamera = function () {
                    for (
                        var e = S(this._flicking).camera.element;
                        e.firstChild;

                    )
                        e.removeChild(e.firstChild);
                }),
                (n._insertPanelElements = function (e, n) {
                    void 0 === n && (n = null);
                    var t = S(this._flicking).camera.element,
                        i = (null == n ? void 0 : n.element) || null,
                        r = document.createDocumentFragment();
                    e.forEach(function (e) {
                        return r.appendChild(e.element);
                    }),
                        t.insertBefore(r, i);
                }),
                (n._removePanelElements = function (e) {
                    var n = S(this._flicking).camera.element;
                    e.forEach(function (e) {
                        n.removeChild(e.element);
                    });
                }),
                e
            );
        })(),
        dt = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            n(t, e);
            var o = t.prototype;
            return (
                (o.render = function () {
                    return i(this, void 0, void 0, function () {
                        var e, n;
                        return r(this, function (t) {
                            return (
                                (e = S(this._flicking)),
                                (n = this._strategy).updateRenderingPanels(e),
                                n.renderPanels(e),
                                this._resetPanelElementOrder(),
                                [2]
                            );
                        });
                    });
                }),
                (o._collectPanels = function () {
                    var e = S(this._flicking),
                        n = e.camera;
                    this._removeAllTextNodes(),
                        (this._panels = this._strategy.collectPanels(
                            e,
                            n.children
                        ));
                }),
                (o._createPanel = function (e, n) {
                    return this._strategy.createPanel(e, n);
                }),
                (o._resetPanelElementOrder = function () {
                    var e = S(this._flicking),
                        n = e.camera.element,
                        t = this._strategy
                            .getRenderingElementsByOrder(e)
                            .reverse();
                    t.forEach(function (e, i) {
                        var r = t[i - 1] ? t[i - 1] : null;
                        e.nextElementSibling !== r && n.insertBefore(e, r);
                    });
                }),
                (o._removeAllTextNodes = function () {
                    var e = S(this._flicking).camera.element;
                    M(e.childNodes).forEach(function (n) {
                        n.nodeType === Node.TEXT_NODE && e.removeChild(n);
                    });
                }),
                t
            );
        })(ft),
        gt = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            n(t, e);
            var i = t.prototype;
            return (
                (i._removePanelElements = function (e) {}),
                (i._removeAllChildsFromCamera = function () {}),
                t
            );
        })(ft),
        pt = (function () {
            function e(e) {
                var n = e.index,
                    t = e.align,
                    i = e.flicking,
                    r = e.elementProvider;
                (this._index = n),
                    (this._flicking = i),
                    (this._elProvider = r),
                    (this._align = t),
                    (this._removed = !1),
                    (this._rendered = !0),
                    (this._loading = !1),
                    this._resetInternalStates();
            }
            var n = e.prototype;
            return (
                Object.defineProperty(n, "element", {
                    get: function () {
                        return this._elProvider.element;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "elementProvider", {
                    get: function () {
                        return this._elProvider;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "index", {
                    get: function () {
                        return this._index;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "position", {
                    get: function () {
                        return this._pos + this._alignPos;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "size", {
                    get: function () {
                        return this._size;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "sizeIncludingMargin", {
                    get: function () {
                        return (
                            this._size + this._margin.prev + this._margin.next
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "height", {
                    get: function () {
                        return this._height;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "margin", {
                    get: function () {
                        return this._margin;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "alignPosition", {
                    get: function () {
                        return this._alignPos;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "removed", {
                    get: function () {
                        return this._removed;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "rendered", {
                    get: function () {
                        return this._rendered;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "loading", {
                    get: function () {
                        return this._loading;
                    },
                    set: function (e) {
                        this._loading = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "range", {
                    get: function () {
                        return { min: this._pos, max: this._pos + this._size };
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "toggled", {
                    get: function () {
                        return this._toggled;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "toggleDirection", {
                    get: function () {
                        return this._toggleDirection;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "offset", {
                    get: function () {
                        var e = this._toggleDirection,
                            n = this._flicking.camera.rangeDiff;
                        return e !== x.NONE && this._toggled
                            ? e === x.PREV
                                ? -n
                                : n
                            : 0;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "progress", {
                    get: function () {
                        var e = this._flicking;
                        return this.index - e.camera.progress;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "outsetProgress", {
                    get: function () {
                        var e = this.position + this.offset,
                            n = this._alignPos,
                            t = this._flicking.camera,
                            i = t.position;
                        if (i === e) return 0;
                        if (i < e) {
                            var r = e + (t.size - t.alignPosition) + n;
                            return -U(i, e, r);
                        }
                        var o = e - (t.alignPosition + this._size - n);
                        return 1 - U(i, o, e);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "visibleRatio", {
                    get: function () {
                        var e = this.range,
                            n = this._size,
                            t = this.offset,
                            i = this._flicking.camera.visibleRange,
                            r = e.min + t,
                            o = e.max + t;
                        if (o <= i.min || r >= i.max) return 0;
                        var a = n;
                        return (
                            i.min > r && (a -= i.min - r),
                            i.max < o && (a -= o - i.max),
                            a / n
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(n, "align", {
                    get: function () {
                        return this._align;
                    },
                    set: function (e) {
                        this._align = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (n.markForShow = function () {
                    (this._rendered = !0),
                        this._elProvider.show(this._flicking);
                }),
                (n.markForHide = function () {
                    (this._rendered = !1),
                        this._elProvider.hide(this._flicking);
                }),
                (n.resize = function (e) {
                    var n = this.element,
                        i = this._flicking.horizontal;
                    if (e)
                        (this._size = e.size),
                            (this._margin = t({}, e.margin)),
                            (this._height = e.height);
                    else {
                        var r = W(n);
                        (this._size = i ? n.offsetWidth : n.offsetHeight),
                            (this._margin = i
                                ? {
                                      prev: parseFloat(r.marginLeft || "0"),
                                      next: parseFloat(r.marginRight || "0"),
                                  }
                                : {
                                      prev: parseFloat(r.marginTop || "0"),
                                      next: parseFloat(r.marginBottom || "0"),
                                  }),
                            (this._height = i ? n.offsetHeight : this._size);
                    }
                    return this.updatePosition(), this._updateAlignPos(), this;
                }),
                (n.setSize = function (e) {
                    return q(this.element, e), this;
                }),
                (n.contains = function (e) {
                    var n;
                    return !!(null === (n = this.element) || void 0 === n
                        ? void 0
                        : n.contains(e));
                }),
                (n.destroy = function () {
                    this._resetInternalStates(), (this._removed = !0);
                }),
                (n.includePosition = function (e, n) {
                    return void 0 === n && (n = !1), this.includeRange(e, e, n);
                }),
                (n.includeRange = function (e, n, t) {
                    void 0 === t && (t = !1);
                    var i = this._margin,
                        r = this.range;
                    return (
                        t && ((r.min -= i.prev), (r.max += i.next)),
                        n >= r.min && e <= r.max
                    );
                }),
                (n.isVisibleOnRange = function (e, n) {
                    var t = this.range;
                    return n > t.min && e < t.max;
                }),
                (n.focus = function (e) {
                    return this._flicking.moveTo(this._index, e);
                }),
                (n.prev = function () {
                    var e = this._index,
                        n = this._flicking,
                        t = n.renderer,
                        i = t.panelCount;
                    return 1 === i
                        ? null
                        : n.circularEnabled
                        ? t.getPanel(0 === e ? i - 1 : e - 1)
                        : t.getPanel(e - 1);
                }),
                (n.next = function () {
                    var e = this._index,
                        n = this._flicking,
                        t = n.renderer,
                        i = t.panelCount;
                    return 1 === i
                        ? null
                        : n.circularEnabled
                        ? t.getPanel(e === i - 1 ? 0 : e + 1)
                        : t.getPanel(e + 1);
                }),
                (n.increaseIndex = function (e) {
                    return (this._index += Math.max(e, 0)), this;
                }),
                (n.decreaseIndex = function (e) {
                    return (this._index -= Math.max(e, 0)), this;
                }),
                (n.updatePosition = function () {
                    var e = this._flicking.renderer.panels[this._index - 1];
                    return (
                        (this._pos = e
                            ? e.range.max + e.margin.next + this._margin.prev
                            : this._margin.prev),
                        this
                    );
                }),
                (n.toggle = function (e, n) {
                    var t = this._toggleDirection,
                        i = this._togglePosition;
                    if (t === x.NONE || n === e) return !1;
                    var r = this._toggled;
                    return (
                        n > e
                            ? i >= e && i <= n && (this._toggled = t === x.NEXT)
                            : i <= e &&
                              i >= n &&
                              (this._toggled = t !== x.NEXT),
                        r !== this._toggled
                    );
                }),
                (n.updateCircularToggleDirection = function () {
                    var e = this._flicking;
                    if (!e.circularEnabled)
                        return (
                            (this._toggleDirection = x.NONE),
                            (this._toggled = !1),
                            this
                        );
                    var n = e.camera,
                        t = n.range,
                        i = n.alignPosition,
                        r = n.visibleRange,
                        o = r.max - r.min,
                        a = t.min - i,
                        s = t.max - i + o,
                        u = this.includeRange(s - o, s, !1),
                        l = this.includeRange(a, a + o, !1);
                    return (
                        (this._toggled = !1),
                        u
                            ? ((this._toggleDirection = x.PREV),
                              (this._togglePosition =
                                  this.range.max + t.min - t.max + i),
                              this.toggle(1 / 0, n.position))
                            : l
                            ? ((this._toggleDirection = x.NEXT),
                              (this._togglePosition =
                                  this.range.min + t.max - o + i),
                              this.toggle(-1 / 0, n.position))
                            : ((this._toggleDirection = x.NONE),
                              (this._togglePosition = 0)),
                        this
                    );
                }),
                (n._updateAlignPos = function () {
                    this._alignPos = N(this._align, this._size);
                }),
                (n._resetInternalStates = function () {
                    (this._size = 0),
                        (this._pos = 0),
                        (this._margin = { prev: 0, next: 0 }),
                        (this._height = 0),
                        (this._alignPos = 0),
                        (this._toggled = !1),
                        (this._togglePosition = 0),
                        (this._toggleDirection = x.NONE);
                }),
                e
            );
        })(),
        vt = (function () {
            function e(e) {
                var n = e.providerCtor;
                this._providerCtor = n;
            }
            var n = e.prototype;
            return (
                (n.renderPanels = function () {}),
                (n.getRenderingIndexesByOrder = function (e) {
                    var n = e.renderer.panels.filter(function (e) {
                            return e.rendered;
                        }),
                        t = n.filter(function (e) {
                            return e.toggled && e.toggleDirection === x.PREV;
                        }),
                        i = n.filter(function (e) {
                            return e.toggled && e.toggleDirection === x.NEXT;
                        });
                    return s(
                        t,
                        n.filter(function (e) {
                            return !e.toggled;
                        }),
                        i
                    ).map(function (e) {
                        return e.index;
                    });
                }),
                (n.getRenderingElementsByOrder = function (e) {
                    var n = e.panels;
                    return this.getRenderingIndexesByOrder(e).map(function (e) {
                        return n[e].element;
                    });
                }),
                (n.updateRenderingPanels = function (e) {
                    e.renderOnlyVisible
                        ? this._showOnlyVisiblePanels(e)
                        : e.panels.forEach(function (e) {
                              return e.markForShow();
                          });
                }),
                (n.collectPanels = function (e, n) {
                    var t = this,
                        i = z(e.renderer.align);
                    return n.map(function (n, r) {
                        return new pt({
                            index: r,
                            elementProvider: new t._providerCtor(n),
                            align: i,
                            flicking: e,
                        });
                    });
                }),
                (n.createPanel = function (e, n) {
                    return new pt(
                        t(t({}, n), {
                            elementProvider: new this._providerCtor(e),
                        })
                    );
                }),
                (n.updatePanelSizes = function (e, n) {
                    e.panels.forEach(function (e) {
                        return e.setSize(n);
                    });
                }),
                (n._showOnlyVisiblePanels = function (e) {
                    var n = e.renderer.panels,
                        t = e.camera,
                        i = t.visiblePanels.reduce(function (e, n) {
                            return (e[n.index] = !0), e;
                        }, {});
                    n.forEach(function (n) {
                        n.index in i || n.loading
                            ? n.markForShow()
                            : e.holding || n.markForHide();
                    }),
                        t.updateOffset();
                }),
                e
            );
        })(),
        _t = (function (e) {
            function t(n) {
                var t = e.call(this, n) || this;
                return (
                    n.elementProvider.init(t),
                    (t._elProvider = n.elementProvider),
                    (t._cachedInnerHTML = null),
                    t
                );
            }
            n(t, e);
            var i = t.prototype;
            return (
                Object.defineProperty(i, "element", {
                    get: function () {
                        return this._elProvider.element;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(i, "cachedInnerHTML", {
                    get: function () {
                        return this._cachedInnerHTML;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(i, "elementIndex", {
                    get: function () {
                        var e = this._flicking,
                            n = e.panelsPerView + 1,
                            t = e.panelCount,
                            i = this._index;
                        return (
                            this._toggled &&
                                (i =
                                    this._toggleDirection === x.NEXT
                                        ? i + t
                                        : i - t),
                            Z(i, n)
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (i.cacheRenderResult = function (e) {
                    this._cachedInnerHTML = e;
                }),
                (i.uncacheRenderResult = function () {
                    this._cachedInnerHTML = null;
                }),
                (i.render = function () {
                    var e = this._flicking.virtual,
                        n = e.renderPanel,
                        t = e.cache,
                        i = this._elProvider.element,
                        r = this._cachedInnerHTML || n(this, this._index);
                    r !== i.innerHTML &&
                        ((i.innerHTML = r), t && this.cacheRenderResult(r));
                }),
                (i.increaseIndex = function (n) {
                    return (
                        this.uncacheRenderResult(),
                        e.prototype.increaseIndex.call(this, n)
                    );
                }),
                (i.decreaseIndex = function (n) {
                    return (
                        this.uncacheRenderResult(),
                        e.prototype.decreaseIndex.call(this, n)
                    );
                }),
                t
            );
        })(pt),
        mt = (function () {
            function e() {}
            var n = e.prototype;
            return (
                (n.renderPanels = function (e) {
                    var n = e.virtual,
                        t = e.visiblePanels,
                        i = J(e.panelsPerView + 1);
                    t.forEach(function (e) {
                        var t = e.elementIndex;
                        e.render(), n.show(t), (i[t] = -1);
                    }),
                        i
                            .filter(function (e) {
                                return e >= 0;
                            })
                            .forEach(function (e) {
                                n.hide(e);
                            });
                }),
                (n.getRenderingIndexesByOrder = function (e) {
                    var n = e.virtual,
                        i = s(e.visiblePanels)
                            .filter(function (e) {
                                return e.rendered;
                            })
                            .sort(function (e, n) {
                                return (
                                    e.position +
                                    e.offset -
                                    (n.position + n.offset)
                                );
                            });
                    return i.length <= 0
                        ? n.elements.map(function (e, n) {
                              return n;
                          })
                        : s(
                              i.map(function (e) {
                                  return e.elementIndex;
                              }),
                              n.elements
                                  .map(function (e, n) {
                                      return t(t({}, e), { idx: n });
                                  })
                                  .filter(function (e) {
                                      return !e.visible;
                                  })
                                  .map(function (e) {
                                      return e.idx;
                                  })
                          );
                }),
                (n.getRenderingElementsByOrder = function (e) {
                    var n = e.virtual.elements;
                    return this.getRenderingIndexesByOrder(e).map(function (e) {
                        return n[e].nativeElement;
                    });
                }),
                (n.updateRenderingPanels = function (e) {
                    var n = e.renderer.panels,
                        t = e.camera,
                        i = t.visiblePanels.reduce(function (e, n) {
                            return (e[n.index] = !0), e;
                        }, {});
                    n.forEach(function (e) {
                        e.index in i || e.loading
                            ? e.markForShow()
                            : e.markForHide();
                    }),
                        t.updateOffset();
                }),
                (n.collectPanels = function (e) {
                    var n = z(e.renderer.align);
                    return J(e.virtual.initialPanelCount).map(function (t) {
                        return new _t({
                            index: t,
                            elementProvider: new oe(e),
                            align: n,
                            flicking: e,
                        });
                    });
                }),
                (n.createPanel = function (e, n) {
                    return new _t(
                        t(t({}, n), { elementProvider: new oe(n.flicking) })
                    );
                }),
                (n.updatePanelSizes = function (e, n) {
                    e.virtual.elements.forEach(function (e) {
                        q(e.nativeElement, n);
                    }),
                        e.panels.forEach(function (e) {
                            return e.setSize(n);
                        });
                }),
                e
            );
        })(),
        bt = {
            __proto__: null,
            Renderer: ft,
            VanillaRenderer: dt,
            ExternalRenderer: gt,
            NormalRenderingStrategy: vt,
            VirtualRenderingStrategy: mt,
        },
        Et = (function (e) {
            function o(n, t) {
                var i = void 0 === t ? {} : t,
                    r = i.align,
                    o = void 0 === r ? P.CENTER : r,
                    a = i.defaultIndex,
                    s = void 0 === a ? 0 : a,
                    u = i.horizontal,
                    l = void 0 === u || u,
                    c = i.circular,
                    h = void 0 !== c && c,
                    f = i.circularFallback,
                    d = void 0 === f ? T.LINEAR : f,
                    g = i.bound,
                    p = void 0 !== g && g,
                    v = i.adaptive,
                    _ = void 0 !== v && v,
                    m = i.panelsPerView,
                    b = void 0 === m ? -1 : m,
                    E = i.noPanelStyleOverride,
                    y = void 0 !== E && E,
                    x = i.resizeOnContentsReady,
                    O = void 0 !== x && x,
                    w = i.nested,
                    R = void 0 !== w && w,
                    C = i.needPanelThreshold,
                    k = void 0 === C ? 0 : C,
                    A = i.preventEventsBeforeInit,
                    S = void 0 === A || A,
                    M = i.deceleration,
                    N = void 0 === M ? 0.0075 : M,
                    D = i.duration,
                    j = void 0 === D ? 500 : D,
                    L = i.easing,
                    z =
                        void 0 === L
                            ? function (e) {
                                  return 1 - Math.pow(1 - e, 3);
                              }
                            : L,
                    V = i.inputType,
                    F = void 0 === V ? ["mouse", "touch"] : V,
                    H = i.moveType,
                    B = void 0 === H ? "snap" : H,
                    G = i.threshold,
                    X = void 0 === G ? 40 : G,
                    $ = i.interruptable,
                    Y = void 0 === $ || $,
                    U = i.bounce,
                    W = void 0 === U ? "20%" : U,
                    q = i.iOSEdgeSwipeThreshold,
                    K = void 0 === q ? 30 : q,
                    Z = i.preventClickOnDrag,
                    J = void 0 === Z || Z,
                    Q = i.disableOnInit,
                    ee = void 0 !== Q && Q,
                    ne = i.renderOnlyVisible,
                    re = void 0 !== ne && ne,
                    oe = i.virtual,
                    se = void 0 === oe ? null : oe,
                    ue = i.autoInit,
                    le = void 0 === ue || ue,
                    ce = i.autoResize,
                    he = void 0 === ce || ce,
                    fe = i.useResizeObserver,
                    de = void 0 === fe || fe,
                    ge = i.resizeDebounce,
                    pe = void 0 === ge ? 0 : ge,
                    ve = i.maxResizeDebounce,
                    _e = void 0 === ve ? 100 : ve,
                    me = i.externalRenderer,
                    be = void 0 === me ? null : me,
                    Ee = i.renderExternal,
                    ye = void 0 === Ee ? null : Ee,
                    Pe = e.call(this) || this;
                return (
                    (Pe._initialized = !1),
                    (Pe._plugins = []),
                    (Pe._align = o),
                    (Pe._defaultIndex = s),
                    (Pe._horizontal = l),
                    (Pe._circular = h),
                    (Pe._circularFallback = d),
                    (Pe._bound = p),
                    (Pe._adaptive = _),
                    (Pe._panelsPerView = b),
                    (Pe._noPanelStyleOverride = y),
                    (Pe._resizeOnContentsReady = O),
                    (Pe._nested = R),
                    (Pe._virtual = se),
                    (Pe._needPanelThreshold = k),
                    (Pe._preventEventsBeforeInit = S),
                    (Pe._deceleration = N),
                    (Pe._duration = j),
                    (Pe._easing = z),
                    (Pe._inputType = F),
                    (Pe._moveType = B),
                    (Pe._threshold = X),
                    (Pe._interruptable = Y),
                    (Pe._bounce = W),
                    (Pe._iOSEdgeSwipeThreshold = K),
                    (Pe._preventClickOnDrag = J),
                    (Pe._disableOnInit = ee),
                    (Pe._renderOnlyVisible = re),
                    (Pe._autoInit = le),
                    (Pe._autoResize = he),
                    (Pe._useResizeObserver = de),
                    (Pe._resizeDebounce = pe),
                    (Pe._maxResizeDebounce = _e),
                    (Pe._externalRenderer = be),
                    (Pe._renderExternal = ye),
                    (Pe._viewport = new te(I(n))),
                    (Pe._autoResizer = new ie(Pe)),
                    (Pe._renderer = Pe._createRenderer()),
                    (Pe._camera = Pe._createCamera()),
                    (Pe._control = Pe._createControl()),
                    (Pe._virtualManager = new ae(Pe, se)),
                    Pe._autoInit && Pe.init(),
                    Pe
                );
            }
            n(o, e);
            var a = o.prototype;
            return (
                Object.defineProperty(a, "control", {
                    get: function () {
                        return this._control;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "camera", {
                    get: function () {
                        return this._camera;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "renderer", {
                    get: function () {
                        return this._renderer;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "viewport", {
                    get: function () {
                        return this._viewport;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "initialized", {
                    get: function () {
                        return this._initialized;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "circularEnabled", {
                    get: function () {
                        return this._camera.circularEnabled;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "virtualEnabled", {
                    get: function () {
                        return this._panelsPerView > 0 && null != this._virtual;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "index", {
                    get: function () {
                        return this._control.activeIndex;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "element", {
                    get: function () {
                        return this._viewport.element;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "currentPanel", {
                    get: function () {
                        return this._control.activePanel;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "panels", {
                    get: function () {
                        return this._renderer.panels;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "panelCount", {
                    get: function () {
                        return this._renderer.panelCount;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "visiblePanels", {
                    get: function () {
                        return this._camera.visiblePanels;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "animating", {
                    get: function () {
                        return this._control.animating;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "holding", {
                    get: function () {
                        return this._control.holding;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "activePlugins", {
                    get: function () {
                        return this._plugins;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "align", {
                    get: function () {
                        return this._align;
                    },
                    set: function (e) {
                        (this._align = e),
                            (this._renderer.align = e),
                            (this._camera.align = e);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "defaultIndex", {
                    get: function () {
                        return this._defaultIndex;
                    },
                    set: function (e) {
                        this._defaultIndex = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "horizontal", {
                    get: function () {
                        return this._horizontal;
                    },
                    set: function (e) {
                        this._horizontal = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "circular", {
                    get: function () {
                        return this._circular;
                    },
                    set: function (e) {
                        this._circular = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "circularFallback", {
                    get: function () {
                        return this._circularFallback;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "bound", {
                    get: function () {
                        return this._bound;
                    },
                    set: function (e) {
                        this._bound = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "adaptive", {
                    get: function () {
                        return this._adaptive;
                    },
                    set: function (e) {
                        this._adaptive = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "panelsPerView", {
                    get: function () {
                        return this._panelsPerView;
                    },
                    set: function (e) {
                        this._panelsPerView = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "noPanelStyleOverride", {
                    get: function () {
                        return this._noPanelStyleOverride;
                    },
                    set: function (e) {
                        this._noPanelStyleOverride = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "resizeOnContentsReady", {
                    get: function () {
                        return this._resizeOnContentsReady;
                    },
                    set: function (e) {
                        this._resizeOnContentsReady = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "nested", {
                    get: function () {
                        return this._nested;
                    },
                    set: function (e) {
                        this._nested = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "needPanelThreshold", {
                    get: function () {
                        return this._needPanelThreshold;
                    },
                    set: function (e) {
                        this._needPanelThreshold = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "preventEventsBeforeInit", {
                    get: function () {
                        return this._preventEventsBeforeInit;
                    },
                    set: function (e) {
                        this._preventEventsBeforeInit = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "deceleration", {
                    get: function () {
                        return this._deceleration;
                    },
                    set: function (e) {
                        this._deceleration = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "easing", {
                    get: function () {
                        return this._easing;
                    },
                    set: function (e) {
                        this._easing = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "duration", {
                    get: function () {
                        return this._duration;
                    },
                    set: function (e) {
                        this._duration = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "inputType", {
                    get: function () {
                        return this._inputType;
                    },
                    set: function (e) {
                        this._inputType = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "moveType", {
                    get: function () {
                        return this._moveType;
                    },
                    set: function (e) {
                        this._moveType = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "threshold", {
                    get: function () {
                        return this._threshold;
                    },
                    set: function (e) {
                        this._threshold = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "interruptable", {
                    get: function () {
                        return this._interruptable;
                    },
                    set: function (e) {
                        this._interruptable = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "bounce", {
                    get: function () {
                        return this._bounce;
                    },
                    set: function (e) {
                        this._bounce = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "iOSEdgeSwipeThreshold", {
                    get: function () {
                        return this._iOSEdgeSwipeThreshold;
                    },
                    set: function (e) {
                        this._iOSEdgeSwipeThreshold = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "preventClickOnDrag", {
                    get: function () {
                        return this._preventClickOnDrag;
                    },
                    set: function (e) {
                        if (e !== this._preventClickOnDrag) {
                            var n = this._control.controller;
                            e
                                ? n.addPreventClickHandler()
                                : n.removePreventClickHandler(),
                                (this._preventClickOnDrag = e);
                        }
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "disableOnInit", {
                    get: function () {
                        return this._disableOnInit;
                    },
                    set: function (e) {
                        this._disableOnInit = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "renderOnlyVisible", {
                    get: function () {
                        return this._renderOnlyVisible;
                    },
                    set: function (e) {
                        this._renderOnlyVisible = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "virtual", {
                    get: function () {
                        return this._virtualManager;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "autoInit", {
                    get: function () {
                        return this._autoInit;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "autoResize", {
                    get: function () {
                        return this._autoResize;
                    },
                    set: function (e) {
                        (this._autoResize = e),
                            e
                                ? this._autoResizer.enable()
                                : this._autoResizer.disable();
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "useResizeObserver", {
                    get: function () {
                        return this._useResizeObserver;
                    },
                    set: function (e) {
                        (this._useResizeObserver = e),
                            this._autoResize && this._autoResizer.enable();
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "resizeDebounce", {
                    get: function () {
                        return this._resizeDebounce;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "maxResizeDebounce", {
                    get: function () {
                        return this._maxResizeDebounce;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "externalRenderer", {
                    get: function () {
                        return this._externalRenderer;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(a, "renderExternal", {
                    get: function () {
                        return this._renderExternal;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (a.init = function () {
                    var e = this;
                    if (this._initialized) return Promise.resolve();
                    var n = this._camera,
                        t = this._renderer,
                        i = this._control,
                        r = this._virtualManager,
                        o = this.trigger,
                        a = this._preventEventsBeforeInit;
                    return (
                        n.init(),
                        r.init(),
                        t.init(this),
                        i.init(this),
                        a &&
                            (this.trigger = function () {
                                return e;
                            }),
                        this._initialResize(),
                        this._moveToInitialPanel(),
                        this._autoResize && this._autoResizer.enable(),
                        this._preventClickOnDrag &&
                            i.controller.addPreventClickHandler(),
                        this._disableOnInit && this.disableInput(),
                        t.checkPanelContentsReady(t.panels),
                        t.render().then(function () {
                            e._plugins.forEach(function (n) {
                                return n.init(e);
                            }),
                                (e._initialized = !0),
                                a && (e.trigger = o),
                                e.trigger(new g(y.READY));
                        })
                    );
                }),
                (a.destroy = function () {
                    this.off(),
                        this._autoResizer.disable(),
                        this._control.destroy(),
                        this._camera.destroy(),
                        this._renderer.destroy(),
                        this._plugins.forEach(function (e) {
                            return e.destroy();
                        }),
                        (this._initialized = !1);
                }),
                (a.prev = function (e) {
                    var n, t, i;
                    return (
                        void 0 === e && (e = this._duration),
                        this.moveTo(
                            null !==
                                (i =
                                    null ===
                                        (t =
                                            null ===
                                                (n =
                                                    this._control
                                                        .activePanel) ||
                                            void 0 === n
                                                ? void 0
                                                : n.prev()) || void 0 === t
                                        ? void 0
                                        : t.index) && void 0 !== i
                                ? i
                                : -1,
                            e,
                            x.PREV
                        )
                    );
                }),
                (a.next = function (e) {
                    var n, t, i;
                    return (
                        void 0 === e && (e = this._duration),
                        this.moveTo(
                            null !==
                                (i =
                                    null ===
                                        (t =
                                            null ===
                                                (n =
                                                    this._control
                                                        .activePanel) ||
                                            void 0 === n
                                                ? void 0
                                                : n.next()) || void 0 === t
                                        ? void 0
                                        : t.index) && void 0 !== i
                                ? i
                                : this._renderer.panelCount,
                            e,
                            x.NEXT
                        )
                    );
                }),
                (a.moveTo = function (e, n, t) {
                    void 0 === n && (n = this._duration),
                        void 0 === t && (t = x.NONE);
                    var i = this._renderer,
                        r = i.panelCount,
                        o = i.getPanel(e);
                    return o
                        ? this._control.animating
                            ? Promise.reject(
                                  new ne(
                                      "Animation is already playing.",
                                      p.ANIMATION_ALREADY_PLAYING
                                  )
                              )
                            : this._control.moveToPanel(o, {
                                  duration: n,
                                  direction: t,
                              })
                        : Promise.reject(
                              new ne(
                                  (function (e, n, t) {
                                      return (
                                          'Index "' +
                                          e +
                                          '" is out of range: should be between ' +
                                          n +
                                          " and " +
                                          t +
                                          "."
                                      );
                                  })(e, 0, r - 1),
                                  p.INDEX_OUT_OF_RANGE
                              )
                          );
                }),
                (a.getPanel = function (e) {
                    return this._renderer.getPanel(e);
                }),
                (a.enableInput = function () {
                    return this._control.enable(), this;
                }),
                (a.disableInput = function () {
                    return this._control.disable(), this;
                }),
                (a.getStatus = function (e) {
                    var n,
                        t,
                        i = void 0 === e ? {} : e,
                        r = i.index,
                        o = void 0 === r || r,
                        a = i.position,
                        s = void 0 === a || a,
                        u = i.includePanelHTML,
                        l = void 0 !== u && u,
                        c = i.visiblePanelsOnly,
                        h = void 0 !== c && c,
                        f = this._camera,
                        d = {
                            panels: (h ? this.visiblePanels : this.panels).map(
                                function (e) {
                                    var n = { index: e.index };
                                    return (
                                        l && (n.html = e.element.outerHTML), n
                                    );
                                }
                            ),
                        };
                    if ((o && (d.index = this.index), s)) {
                        var g = f.findNearestAnchor(f.position);
                        g &&
                            (d.position = {
                                panel: g.panel.index,
                                progressInPanel: f.getProgressInPanel(g.panel),
                            });
                    }
                    if (h) {
                        var p = this.visiblePanels;
                        d.visibleOffset =
                            null !==
                                (t =
                                    null === (n = p[0]) || void 0 === n
                                        ? void 0
                                        : n.index) && void 0 !== t
                                ? t
                                : 0;
                    }
                    return d;
                }),
                (a.setStatus = function (e) {
                    var n;
                    if (!this._initialized)
                        throw new ne(
                            "Flicking is not initialized yet, call init() first.",
                            p.NOT_INITIALIZED
                        );
                    var t = e.index,
                        i = e.position,
                        r = e.visibleOffset,
                        o = e.panels,
                        a = this._renderer,
                        s = this._control;
                    if (
                        ((null === (n = o[0]) || void 0 === n
                            ? void 0
                            : n.html) &&
                            !this._renderExternal &&
                            (a.batchRemove({
                                index: 0,
                                deleteCount: this.panels.length,
                                hasDOMInElements: !0,
                            }),
                            a.batchInsert({
                                index: 0,
                                elements: F(
                                    o.map(function (e) {
                                        return e.html;
                                    })
                                ),
                                hasDOMInElements: !0,
                            })),
                        t)
                    ) {
                        var u = r ? t - r : t;
                        this.moveTo(u, 0).catch(function () {});
                    }
                    if (i && this._moveType === O.FREE_SCROLL) {
                        var l = i.panel,
                            c = i.progressInPanel,
                            h = ((u = r ? l - r : l), a.panels[u].range),
                            f = h.min + (h.max - h.min) * c;
                        s.moveToPosition(f, 0).catch(function () {});
                    }
                }),
                (a.addPlugins = function () {
                    for (
                        var e, n = this, t = [], i = 0;
                        i < arguments.length;
                        i++
                    )
                        t[i] = arguments[i];
                    return (
                        this._initialized &&
                            t.forEach(function (e) {
                                return e.init(n);
                            }),
                        (e = this._plugins).push.apply(e, s(t)),
                        this
                    );
                }),
                (a.removePlugins = function () {
                    for (var e = this, n = [], t = 0; t < arguments.length; t++)
                        n[t] = arguments[t];
                    return (
                        n.forEach(function (n) {
                            var t = Y(e._plugins, function (e) {
                                return e === n;
                            });
                            t >= 0 && (n.destroy(), e._plugins.splice(t, 1));
                        }),
                        this
                    );
                }),
                (a.resize = function () {
                    return i(this, void 0, void 0, function () {
                        var e, n, t, i, o, a, s, u, l, c, h;
                        return r(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    return (
                                        (e = this._viewport),
                                        (n = this._renderer),
                                        (t = this._camera),
                                        (i = this._control),
                                        (o = i.activePanel),
                                        (a = e.width),
                                        (s = e.height),
                                        (u = o ? t.getProgressInPanel(o) : 0),
                                        this.trigger(
                                            new g(y.BEFORE_RESIZE, {
                                                width: a,
                                                height: s,
                                                element: e.element,
                                            })
                                        ),
                                        e.resize(),
                                        [4, n.forceRenderAllPanels()]
                                    );
                                case 1:
                                    return (
                                        r.sent(),
                                        n.updatePanelSize(),
                                        t.updateAlignPos(),
                                        t.updateRange(),
                                        t.updateAnchors(),
                                        [4, n.render()]
                                    );
                                case 2:
                                    return (
                                        r.sent(),
                                        i.animating ||
                                            (i.updatePosition(u),
                                            i.updateInput()),
                                        (l = e.width),
                                        (c = e.height),
                                        (h = l !== a || c !== s),
                                        this.trigger(
                                            new g(y.AFTER_RESIZE, {
                                                width: e.width,
                                                height: e.height,
                                                prev: { width: a, height: s },
                                                sizeChanged: h,
                                                element: e.element,
                                            })
                                        ),
                                        [2]
                                    );
                            }
                        });
                    });
                }),
                (a.append = function (e) {
                    return this.insert(this._renderer.panelCount, e);
                }),
                (a.prepend = function (e) {
                    return this.insert(0, e);
                }),
                (a.insert = function (e, n) {
                    if (this._renderExternal)
                        throw new ne(E, p.NOT_ALLOWED_IN_FRAMEWORK);
                    return this._renderer.batchInsert({
                        index: e,
                        elements: F(n),
                        hasDOMInElements: !0,
                    });
                }),
                (a.remove = function (e, n) {
                    if ((void 0 === n && (n = 1), this._renderExternal))
                        throw new ne(E, p.NOT_ALLOWED_IN_FRAMEWORK);
                    return this._renderer.batchRemove({
                        index: e,
                        deleteCount: n,
                        hasDOMInElements: !0,
                    });
                }),
                (a._createControl = function () {
                    var e,
                        n = this._moveType,
                        t = Object.keys(O).map(function (e) {
                            return O[e];
                        }),
                        i = Array.isArray(n) ? n[0] : n,
                        r =
                            Array.isArray(n) &&
                            null !== (e = n[1]) &&
                            void 0 !== e
                                ? e
                                : {};
                    if (!B(t, i))
                        throw new ne(
                            m("moveType", JSON.stringify(n)),
                            p.WRONG_OPTION
                        );
                    switch (i) {
                        case O.SNAP:
                            return new kn(r);
                        case O.FREE_SCROLL:
                            return new An(r);
                        case O.STRICT:
                            return new Sn(r);
                    }
                }),
                (a._createCamera = function () {
                    return (
                        this._circular && this._bound,
                        new zn(this, { align: this._align })
                    );
                }),
                (a._createRenderer = function () {
                    var e = this._externalRenderer;
                    return (
                        this._virtual && this._panelsPerView,
                        e ||
                            (this._renderExternal
                                ? this._createExternalRenderer()
                                : this._createVanillaRenderer())
                    );
                }),
                (a._createExternalRenderer = function () {
                    var e = this._renderExternal,
                        n = e.renderer,
                        i = e.rendererOptions;
                    return new n(t({ align: this._align }, i));
                }),
                (a._createVanillaRenderer = function () {
                    var e = this.virtualEnabled;
                    return new dt({
                        align: this._align,
                        strategy: e ? new mt() : new vt({ providerCtor: re }),
                    });
                }),
                (a._moveToInitialPanel = function () {
                    var e = this._renderer,
                        n = this._control,
                        t = this._camera,
                        i = e.getPanel(this._defaultIndex) || e.getPanel(0);
                    if (i) {
                        var r = t.findNearestAnchor(i.position);
                        if ((n.setActive(i, null, !1), !r))
                            throw new ne(
                                b(i.position),
                                p.POSITION_NOT_REACHABLE
                            );
                        var o = i.position;
                        t.canReach(i) || (o = r.position),
                            t.lookAt(o),
                            n.updateInput(),
                            t.updateOffset();
                    }
                }),
                (a._initialResize = function () {
                    var e = this._viewport,
                        n = this._renderer,
                        t = this._camera,
                        i = this._control;
                    this.trigger(
                        new g(y.BEFORE_RESIZE, {
                            width: 0,
                            height: 0,
                            element: e.element,
                        })
                    ),
                        e.resize(),
                        n.updatePanelSize(),
                        t.updateAlignPos(),
                        t.updateRange(),
                        t.updateAnchors(),
                        t.updateOffset(),
                        i.updateInput();
                    var r = e.width,
                        o = e.height,
                        a = 0 !== r || 0 !== o;
                    this.trigger(
                        new g(y.AFTER_RESIZE, {
                            width: e.width,
                            height: e.height,
                            prev: { width: 0, height: 0 },
                            sizeChanged: a,
                            element: e.element,
                        })
                    );
                }),
                (o.VERSION = "4.7.0"),
                o
            );
        })(d),
        yt = function (e, n, t, i, r) {
            return e.batchInsertDefer.apply(
                e,
                s(
                    n.added.slice(i, r).map(function (e, n) {
                        return {
                            index: e,
                            elements: [t[n]],
                            hasDOMInElements: !1,
                        };
                    })
                )
            );
        },
        Pt = function (e, n, t) {
            var i = e.panels.slice(n, t);
            return e.batchRemoveDefer({
                index: n,
                deleteCount: i.length,
                hasDOMInElements: !1,
            });
        },
        xt = function (e) {
            if ("number" == typeof e) return e + "px";
            switch (e) {
                case P.CENTER:
                    return "50%";
                case P.NEXT:
                    return "100%";
                case P.PREV:
                    return "0%";
                default:
                    return e;
            }
        },
        Ot = {
            __proto__: null,
            withFlickingMethods: function (e, n) {
                [d.prototype, Et.prototype].forEach(function (t) {
                    Object.getOwnPropertyNames(t)
                        .filter(function (n) {
                            return (
                                !e[n] &&
                                0 !== n.indexOf("_") &&
                                "constructor" !== n
                            );
                        })
                        .forEach(function (i) {
                            var r = Object.getOwnPropertyDescriptor(t, i);
                            if (r.value)
                                Object.defineProperty(e, i, {
                                    value: function () {
                                        for (
                                            var e, t = [], i = 0;
                                            i < arguments.length;
                                            i++
                                        )
                                            t[i] = arguments[i];
                                        return (e = r.value).call.apply(
                                            e,
                                            s([this[n]], t)
                                        );
                                    },
                                });
                            else {
                                var o = {};
                                r.get &&
                                    (o.get = function () {
                                        var e,
                                            t = this[n];
                                        return (
                                            t &&
                                            (null === (e = r.get) ||
                                            void 0 === e
                                                ? void 0
                                                : e.call(t))
                                        );
                                    }),
                                    r.set &&
                                        (o.set = function () {
                                            for (
                                                var e, t = [], i = 0;
                                                i < arguments.length;
                                                i++
                                            )
                                                t[i] = arguments[i];
                                            return null === (e = r.set) ||
                                                void 0 === e
                                                ? void 0
                                                : e.call.apply(
                                                      e,
                                                      s([this[n]], t)
                                                  );
                                        }),
                                    Object.defineProperty(e, i, o);
                            }
                        });
                });
            },
            sync: function (e, n, t) {
                var i = e.renderer,
                    r = i.panels,
                    o = s(n.prevList),
                    u = [],
                    l = [];
                if (n.removed.length > 0) {
                    var c = -1,
                        h = -1;
                    n.removed.forEach(function (e) {
                        c < 0 && (c = e),
                            h >= 0 && e !== h - 1
                                ? (l.push.apply(l, s(Pt(i, h, c + 1))),
                                  (c = e),
                                  (h = e))
                                : (h = e),
                            o.splice(e, 1);
                    }),
                        l.push.apply(l, s(Pt(i, h, c + 1)));
                }
                if (
                    (n.ordered.forEach(function (e) {
                        var n = a(e, 2),
                            t = n[0],
                            i = n[1],
                            o = r.splice(t, 1)[0];
                        r.splice(i, 0, o);
                    }),
                    n.ordered.length > 0 &&
                        (r.forEach(function (e, n) {
                            var t = n - e.index;
                            t > 0 ? e.increaseIndex(t) : e.decreaseIndex(-t);
                        }),
                        r.sort(function (e, n) {
                            return e.index - n.index;
                        }),
                        r.forEach(function (e) {
                            e.updatePosition();
                        })),
                    n.added.length > 0)
                ) {
                    var f = -1,
                        d = -1,
                        g = t.slice(o.length);
                    n.added.forEach(function (e, t) {
                        f < 0 && (f = t),
                            d >= 0 && e !== d + 1
                                ? (u.push.apply(u, s(yt(i, n, g, f, t + 1))),
                                  (f = -1),
                                  (d = -1))
                                : (d = e);
                    }),
                        f >= 0 && u.push.apply(u, s(yt(i, n, g, f)));
                }
                (n.added.length > 0 || n.removed.length > 0) &&
                    i.updateAfterPanelChange(u, l);
            },
            getRenderingPanels: function (e, n) {
                var t = n.removed.reduce(function (e, n) {
                        return (e[n] = !0), e;
                    }, {}),
                    i = n.maintained.reduce(function (e, n) {
                        var t = a(n, 2),
                            i = t[0],
                            r = t[1];
                        return (e[i] = r), e;
                    }, {});
                return s(
                    e.panels
                        .filter(function (e) {
                            return !t[e.index];
                        })
                        .sort(function (e, n) {
                            return (
                                e.position + e.offset - (n.position + n.offset)
                            );
                        })
                        .map(function (e) {
                            return n.list[i[e.index]];
                        }),
                    n.added.map(function (e) {
                        return n.list[e];
                    })
                );
            },
            getDefaultCameraTransform: function (e, n, t) {
                void 0 === e && (e = P.CENTER), void 0 === n && (n = !0);
                var i = (function (e) {
                        var n = "object" == typeof e ? e.camera : e;
                        return xt(n);
                    })(e),
                    r = (function (e) {
                        var n = "object" == typeof e ? e.panel : e;
                        return L(xt(n));
                    })(e);
                if (null == r) return "";
                var o =
                    "calc(" +
                    i +
                    " - (" +
                    (t || "0px") +
                    " * " +
                    r.percentage +
                    ") - " +
                    r.absolute +
                    "px)";
                return n ? "translate(" + o + ")" : "translate(0, " + o + ")";
            },
        };
    return (
        C(Et, {
            __proto__: null,
            Viewport: te,
            FlickingError: ne,
            AnchorPoint: In,
            VirtualManager: ae,
            VanillaElementProvider: re,
            VirtualElementProvider: oe,
            Panel: pt,
            VirtualPanel: _t,
        }),
        C(Et, Vn),
        C(Et, Mn),
        C(Et, bt),
        C(Et, R),
        C(Et, Ot),
        C(Et, ee),
        Et
    );
}),
    (function (e, n) {
        "object" == typeof exports && "undefined" != typeof module
            ? n(exports, require("@egjs/flicking"))
            : "function" == typeof define && define.amd
            ? define(["exports", "@egjs/flicking"], n)
            : n(
                  (((e = e || self).Flicking = e.Flicking || {}),
                  (e.Flicking.Plugins = {})),
                  e.Flicking
              );
    })(this, function (e, n) {
        "use strict";
        var t = {
                CLICK: "click",
                MOUSE_DOWN: "mousedown",
                TOUCH_START: "touchstart",
            },
            i = {
                PREV_SELECTOR: ".flicking-arrow-prev",
                NEXT_SELECTOR: ".flicking-arrow-next",
                DISABLED_CLASS: "flicking-arrow-disabled",
            },
            r = function (e, n) {
                e &&
                    (e.classList
                        ? e.classList.add(n)
                        : e.className.split(" ").indexOf(n) < 0 &&
                          (e.className = e.className + " " + n));
            },
            o = function (e, n) {
                if (e)
                    if (e.classList) e.classList.remove(n);
                    else {
                        var t = new RegExp("( |^)" + n + "( |$)", "g");
                        e.className.replace(t, " ");
                    }
            },
            a = function (e, n, t) {
                var i = n.querySelector(e);
                if (!i)
                    throw new Error(
                        "[Flicking-" +
                            t +
                            "] Couldn't find element with the given selector: " +
                            e
                    );
                return i;
            },
            s = (function () {
                function e(e) {
                    var t = this,
                        r = void 0 === e ? {} : e,
                        o = r.parentEl,
                        a = void 0 === o ? null : o,
                        s = r.prevElSelector,
                        u = void 0 === s ? i.PREV_SELECTOR : s,
                        l = r.nextElSelector,
                        c = void 0 === l ? i.NEXT_SELECTOR : l,
                        h = r.disabledClass,
                        f = void 0 === h ? i.DISABLED_CLASS : h,
                        d = r.moveCount,
                        g = void 0 === d ? 1 : d,
                        p = r.moveByViewportSize,
                        v = void 0 !== p && p;
                    (this._flicking = null),
                        (this._preventInputPropagation = function (e) {
                            e.stopPropagation();
                        }),
                        (this._onPrevClick = function () {
                            var e = t._flicking,
                                n = e.camera,
                                i = n.anchorPoints;
                            if (!(e.animating || i.length <= 0)) {
                                var r = i[0],
                                    o = t._moveCount;
                                if (t._moveByViewportSize)
                                    e.control
                                        .moveToPosition(
                                            n.position - n.size,
                                            e.duration
                                        )
                                        .catch(t._onCatch);
                                else if (e.circularEnabled) {
                                    for (
                                        var a = e.currentPanel, s = 0;
                                        s < o;
                                        s++
                                    )
                                        a = a.prev();
                                    a.focus().catch(t._onCatch);
                                } else
                                    e.index > r.panel.index
                                        ? e
                                              .moveTo(
                                                  Math.max(
                                                      e.index - o,
                                                      r.panel.index
                                                  )
                                              )
                                              .catch(t._onCatch)
                                        : n.position > n.range.min &&
                                          e.moveTo(e.index).catch(t._onCatch);
                            }
                        }),
                        (this._onNextClick = function () {
                            var e = t._flicking,
                                n = e.camera,
                                i = n.anchorPoints;
                            if (!(e.animating || i.length <= 0)) {
                                var r = i[i.length - 1],
                                    o = t._moveCount;
                                if (t._moveByViewportSize)
                                    e.control
                                        .moveToPosition(
                                            n.position + n.size,
                                            e.duration
                                        )
                                        .catch(t._onCatch);
                                else if (e.circularEnabled) {
                                    for (
                                        var a = e.currentPanel, s = 0;
                                        s < o;
                                        s++
                                    )
                                        a = a.next();
                                    a.focus().catch(t._onCatch);
                                } else
                                    e.index < r.panel.index
                                        ? e
                                              .moveTo(
                                                  Math.min(
                                                      e.index + o,
                                                      r.panel.index
                                                  )
                                              )
                                              .catch(t._onCatch)
                                        : n.position > n.range.min &&
                                          e.moveTo(e.index).catch(t._onCatch);
                            }
                        }),
                        (this._onAnimation = function () {
                            var e = t._flicking,
                                n = e.camera,
                                i = e.control.controller;
                            e.holding
                                ? t._updateClass(n.position)
                                : t._updateClass(i.animatingContext.end);
                        }),
                        (this._onCatch = function (e) {
                            if (!(e instanceof n.FlickingError)) throw e;
                        }),
                        (this._parentEl = a),
                        (this._prevElSelector = u),
                        (this._nextElSelector = c),
                        (this._disabledClass = f),
                        (this._moveCount = g),
                        (this._moveByViewportSize = v);
                }
                var s = e.prototype;
                return (
                    Object.defineProperty(s, "prevEl", {
                        get: function () {
                            return this._prevEl;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(s, "nextEl", {
                        get: function () {
                            return this._nextEl;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(s, "parentEl", {
                        get: function () {
                            return this._parentEl;
                        },
                        set: function (e) {
                            this._parentEl = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(s, "prevElSelector", {
                        get: function () {
                            return this._prevElSelector;
                        },
                        set: function (e) {
                            this._prevElSelector = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(s, "nextElSelector", {
                        get: function () {
                            return this._nextElSelector;
                        },
                        set: function (e) {
                            this._nextElSelector = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(s, "disabledClass", {
                        get: function () {
                            return this._disabledClass;
                        },
                        set: function (e) {
                            this._disabledClass = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(s, "moveCount", {
                        get: function () {
                            return this._moveCount;
                        },
                        set: function (e) {
                            this._moveCount = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    Object.defineProperty(s, "moveByViewportSize", {
                        get: function () {
                            return this._moveByViewportSize;
                        },
                        set: function (e) {
                            this._moveByViewportSize = e;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (s.init = function (e) {
                        var i = this;
                        this._flicking && this.destroy(),
                            (this._flicking = e),
                            e.on(n.EVENTS.MOVE, this._onAnimation);
                        var r = this._parentEl ? this._parentEl : e.element,
                            o = a(this._prevElSelector, r, "Arrow"),
                            s = a(this._nextElSelector, r, "Arrow");
                        [t.MOUSE_DOWN, t.TOUCH_START].forEach(function (e) {
                            o.addEventListener(e, i._preventInputPropagation, {
                                passive: !0,
                            }),
                                s.addEventListener(
                                    e,
                                    i._preventInputPropagation,
                                    { passive: !0 }
                                );
                        }),
                            o.addEventListener(t.CLICK, this._onPrevClick),
                            s.addEventListener(t.CLICK, this._onNextClick),
                            (this._prevEl = o),
                            (this._nextEl = s),
                            this.update();
                    }),
                    (s.destroy = function () {
                        var e = this,
                            i = this._flicking;
                        if (i) {
                            i.off(n.EVENTS.MOVE, this._onAnimation);
                            var r = this._prevEl,
                                o = this._nextEl;
                            [t.MOUSE_DOWN, t.TOUCH_START].forEach(function (n) {
                                r.removeEventListener(
                                    n,
                                    e._preventInputPropagation
                                ),
                                    o.removeEventListener(
                                        n,
                                        e._preventInputPropagation
                                    );
                            }),
                                r.removeEventListener(
                                    t.CLICK,
                                    this._onPrevClick
                                ),
                                o.removeEventListener(
                                    t.CLICK,
                                    this._onNextClick
                                ),
                                (this._flicking = null);
                        }
                    }),
                    (s.update = function () {
                        this._updateClass(this._flicking.camera.position);
                    }),
                    (s._updateClass = function (e) {
                        var n = this._flicking,
                            t = this._disabledClass,
                            i = this._prevEl,
                            a = this._nextEl,
                            s = n.camera.range,
                            u = !n.circularEnabled && e <= s.min,
                            l = !n.circularEnabled && e >= s.max;
                        u ? r(i, t) : o(i, t), l ? r(a, t) : o(a, t);
                    }),
                    e
                );
            })();
        (e.ARROW = i), (e.Arrow = s);
    }),
    (function (e, n) {
        "object" == typeof exports && "object" == typeof module
            ? (module.exports = n(require("jquery")))
            : "function" == typeof define && define.amd
            ? define("$Transform", ["jquery"], n)
            : "object" == typeof exports
            ? (exports.$Transform = n(require("jquery")))
            : ((e.eg = e.eg || {}), (e.eg.$Transform = n(e.jQuery)));
    })(this, function (e) {
        return (function (e) {
            function n(i) {
                if (t[i]) return t[i].exports;
                var r = (t[i] = { i, l: !1, exports: {} });
                return (
                    e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
                );
            }
            var t = {};
            return (
                (n.m = e),
                (n.c = t),
                (n.i = function (e) {
                    return e;
                }),
                (n.d = function (e, t, i) {
                    n.o(e, t) ||
                        Object.defineProperty(e, t, {
                            configurable: !1,
                            enumerable: !0,
                            get: i,
                        });
                }),
                (n.n = function (e) {
                    var t =
                        e && e.__esModule
                            ? function () {
                                  return e.default;
                              }
                            : function () {
                                  return e;
                              };
                    return n.d(t, "a", t), t;
                }),
                (n.o = function (e, n) {
                    return Object.prototype.hasOwnProperty.call(e, n);
                }),
                (n.p = ""),
                n((n.s = 2))
            );
        })([
            function (n, t) {
                n.exports = e;
            },
            function (e, n, t) {
                "use strict";
                function i(e) {
                    if (!e || "none" === e)
                        return ["matrix", ["1", "0", "0", "1", "0", "0"]];
                    var n = e.replace(/\s/g, "").match(/(matrix)(3d)*\((.*)\)/);
                    return [n[1] + (n[2] || ""), n[3].split(",")];
                }
                function r(e) {
                    var n = e[0],
                        t = e[1];
                    return "matrix3d" === n
                        ? e
                        : [
                              n + "3d",
                              [
                                  t[0],
                                  t[1],
                                  "0",
                                  "0",
                                  t[2],
                                  t[3],
                                  "0",
                                  "0",
                                  "0",
                                  "0",
                                  "1",
                                  "0",
                                  t[4],
                                  t[5],
                                  "0",
                                  "1",
                              ],
                          ];
                }
                function o(e) {
                    return e.indexOf("translate") >= 0
                        ? "px"
                        : e.indexOf("rotate") >= 0
                        ? "deg"
                        : "";
                }
                function a(e, n) {
                    var t = e,
                        i = e.match(/((-|\+)*[0-9]+)%/);
                    return (
                        i && i.length >= 1
                            ? (t = n * (parseFloat(i[1]) / 100) + "px")
                            : -1 === e.indexOf("px") && (t = e + "px"),
                        t
                    );
                }
                function s(e) {
                    var n = e.match(/((-|\+)*[\d|.]+)(px|deg|rad)*/),
                        t = void 0;
                    return (
                        n &&
                            n.length >= 1 &&
                            (t = { num: parseFloat(n[1]), unit: n[3] }),
                        t
                    );
                }
                function u(e) {
                    var n = e.match(/(\b\w+?)\((\s*[^)]+)/),
                        t = void 0,
                        i = void 0,
                        r = ["", ""];
                    return (
                        n &&
                            n.length > 2 &&
                            ((t = n[1]),
                            (i = n[2].split(",")),
                            (i = f.map(i, function (e) {
                                return f.trim(e);
                            })),
                            (r = [f.trim(t), i])),
                        r
                    );
                }
                function l(e) {
                    for (
                        var n = e.split(")"), t = [], i = 0, r = n.length - 1;
                        i < r;
                        i++
                    ) {
                        var o = u(n[i]);
                        (o[1] = f.map(o[1], s)), t.push(o);
                    }
                    return function (e) {
                        var n = "",
                            i = 0;
                        return (
                            f.each(t, function (r) {
                                i = t[r][0].indexOf("scale") >= 0 ? 1 : 0;
                                var o = f
                                    .map(t[r][1], function (n) {
                                        var t = n.num;
                                        return (
                                            1 === i && (t -= 1),
                                            i + t * e + (n.unit || "")
                                        );
                                    })
                                    .join(",");
                                n += t[r][0] + "(" + o + ") ";
                            }),
                            n
                        );
                    };
                }
                function c(e) {
                    var n = void 0,
                        t = [];
                    if (f.isArray(e))
                        return (
                            (n = e[0]) +
                            "(" +
                            e[1].join(o(n) + ",") +
                            o(n) +
                            ")"
                        );
                    for (n in e) t.push(n);
                    return f
                        .map(t, function (n) {
                            return n + "(" + e[n] + o(n) + ")";
                        })
                        .join(" ");
                }
                (n.__esModule = !0),
                    (n.rateFn = n.toMatrix = n.toMatrix3d = void 0);
                var h = (function (e) {
                        return e && e.__esModule ? e : { default: e };
                    })(t(0)),
                    f = h.default;
                (n.toMatrix3d = r),
                    (n.toMatrix = i),
                    (n.rateFn = function (e, n, t) {
                        var o = t.indexOf("+=") >= 0,
                            s = void 0,
                            u = void 0,
                            h = void 0,
                            d = (function (e, n, t) {
                                for (
                                    var i = void 0,
                                        r = "",
                                        o = e.split(")"),
                                        s = 0,
                                        u = o.length - 1;
                                    s < u;
                                    s++
                                ) {
                                    var l = o[s];
                                    if (
                                        (i = l.match(
                                            /(translate([XYZ]|3d)?|rotate)\(([^)]*)/
                                        )) &&
                                        i.length > 1
                                    )
                                        if ("rotate" === i[1])
                                            -1 === i[3].indexOf("deg") &&
                                                (l = i[1] + "(" + i[3] + "deg");
                                        else {
                                            var c = i[3].split(","),
                                                h = [n, t, 100];
                                            switch (i[2]) {
                                                case "X":
                                                    l = i[1] + "(" + a(i[3], n);
                                                    break;
                                                case "Y":
                                                    l = i[1] + "(" + a(i[3], t);
                                                    break;
                                                case "Z":
                                                    break;
                                                default:
                                                    for (
                                                        var f = 0, d = c.length;
                                                        f < d;
                                                        f++
                                                    )
                                                        c[f] = a(c[f], h[f]);
                                                    l =
                                                        i[1] +
                                                        "(" +
                                                        c.join(",");
                                            }
                                        }
                                    r += l = " " + l + ")";
                                }
                                return r.replace("%", "").replace("+=", "");
                            })(
                                t,
                                parseFloat(f.css(e, "width")) || 0,
                                parseFloat(f.css(e, "height")) || 0
                            );
                        return (
                            o
                                ? ((s =
                                      n && "none" !== n
                                          ? n
                                          : "matrix(1, 0, 0, 1, 0, 0)"),
                                  (u = l(d)))
                                : ((s = i(n)),
                                  (h = i("none")),
                                  s[1].length < h[1].length
                                      ? (s = r(s))
                                      : s[1].length > h[1].length && (h = r(h)),
                                  (u = l(d))),
                            function (e) {
                                var n = [],
                                    t = "";
                                if (o) return s + u(e);
                                if (1 === e) t = c(h);
                                else {
                                    for (
                                        var i, r, a = 0, l = s[1].length;
                                        a < l;
                                        a++
                                    )
                                        (i = parseFloat(s[1][a])),
                                            (r = parseFloat(h[1][a])),
                                            n.push(i + (r - i) * e);
                                    t = c([s[0], n]);
                                }
                                return t + u(e);
                            }
                        );
                    });
            },
            function (e, n, t) {
                "use strict";
                n.__esModule = !0;
                var i = (function (e) {
                        return e && e.__esModule ? e : { default: e };
                    })(t(0)),
                    r = t(1),
                    o = i.default;
                o &&
                    (o.fx.step.transform = function (e) {
                        (e.rateFn =
                            e.rateFn || (0, r.rateFn)(e.elem, e.start, e.end)),
                            o.style(e.elem, "transform", e.rateFn(e.pos));
                    }),
                    (n.default = o),
                    (e.exports = n.default);
            },
        ]);
    }),
    $(function () {
        if ($("#flick").length) {
            var e = new Flicking("#flick", {
                inputType: ["touch", "mouse"],
                moveType: "snap",
                align: "prev",
                bound: !0,
                duration: 500,
                threshold: 40,
                bounce: 0,
                preventClickOnDrag: !0,
            });
            e.element.addEventListener(
                "wheel",
                function (n) {
                    0 !== n.deltaX &&
                        (n.preventDefault(),
                        e.control.controller.axes.setTo(
                            { flick: e.camera.position + n.deltaX },
                            0
                        ),
                        e._plugins[0].update());
                },
                !0
            ),
                e.addPlugins(
                    new Flicking.Plugins.Arrow({
                        parentEl: $("#flick-wrap")[0],
                        disabledClass: "is-disabled",
                    })
                );
            var n = $(".home-slider__bullet"),
                t = $(".home-slider__mockups .tile__image"),
                i = $("#mockups-cats span"),
                r = $("#mockups-button, #mockups-overlay"),
                o = "is-active",
                a = "hidden";
            $(".home-slider__bullet").on("click", function () {
                var e = $(this),
                    s = e.index(),
                    u = n.filter(".is-active").first().index();
                r.attr("href", e.data("url")),
                    n.eq(u).removeClass(o),
                    n.eq(s).addClass(o),
                    i.eq(u).removeClass(o),
                    i.eq(s).addClass(o),
                    t
                        .eq(u)
                        .stop()
                        .animate(
                            { opacity: 0, transform: "translateX(-80px)" },
                            300,
                            "swing",
                            function () {
                                $(this).addClass(a),
                                    $(this).css({
                                        opacity: "",
                                        "-webkit-transform": "",
                                        "-ms-transform": "",
                                        transform: "",
                                    });
                            }
                        ),
                    t
                        .eq(s)
                        .stop()
                        .addClass("fade-enter")
                        .removeClass(a)
                        .animate(
                            { opacity: 1, transform: "translateX(0px)" },
                            300,
                            "swing",
                            function () {
                                $(this).removeClass("fade-enter"),
                                    $(this).css({
                                        opacity: "",
                                        "-webkit-transform": "",
                                        "-ms-transform": "",
                                        transform: "",
                                    });
                            }
                        );
            });
        }
        var s = $.cookie("home-yt-plan")
            ? parseInt($.cookie("home-yt-plan"))
            : 1;
        $('[name="tickets"]:checked').prop("checked", null),
            $('[name="tickets"][value="' + s + '"]').prop("checked", !0),
            $('[name="tickets"]').on("change", function () {
                var e = $(this).val(),
                    n = $(this).data("price"),
                    t = $(this).data("url");
                $("#tickets-button").attr("href", t),
                    $("#tickets-price").text(n),
                    $.cookie("home-yt-plan", e);
            });
        var u = !1,
            l = ["provisual"],
            c = $.cookie("home_offer")
                ? $.parseJSON($.cookie("home_offer"))
                : {};
        if (!$.isEmptyObject(c)) {
            var h = Date.now() - 6048e5;
            $.each(c, function (e, n) {
                if (-1 === n || n > h) {
                    var t = l.indexOf(e);
                    -1 !== t && l.splice(t, 1);
                }
            });
        }
        function f(e, n, t) {
            (e = e || ""),
                (n = n || ""),
                (t = t || ""),
                (window.dataLayer = window.dataLayer || []),
                window.dataLayer.push({
                    event: `click_main_marketing_pop_up_${n}${t}_${e}`,
                }),
                (c[n] = void 0 !== c[n] && c[n] ? -1 : Date.now()),
                $.cookie("home_offer", JSON.stringify(c));
        }
        l && (u = l[Math.floor(Math.random() * l.length)]),
            u &&
                setTimeout(function () {
                    $.ajax({
                        type: "GET",
                        url: "offer.php",
                        dataType: "json",
                        cache: !1,
                        data: { type: u },
                    }).done(function (e, n, t) {
                        if (e.success && e.data) {
                            var i = $(e.data),
                                r = $("body").width();
                            $("body").addClass("papap").append(i),
                                (r = $("body").width() - r),
                                $("body").css({ "padding-right": r }),
                                $("#headerline, #masthead, #search-sticky").css(
                                    { "margin-right": r }
                                );
                        }
                    });
                }, 1e4),
            $("body").on("click", ".modal", function (e) {
                var n = $(this),
                    t = $(e.target);
                (t.hasClass("modal") || $(e.target).hasClass("modal__close")) &&
                    n.fadeOut(100, function () {
                        $("body").removeClass("papap"),
                            $("body").css({ "padding-right": "" }),
                            $("#headerline, #masthead, #search-sticky").css({
                                "margin-right": "",
                            }),
                            n.remove(),
                            f("skip", n.data("offer"), n.data("variant"));
                    }),
                    t.hasClass("modal__cta") &&
                        f("proceed", n.data("offer"), n.data("variant"));
            });
    });
