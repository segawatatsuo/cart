function getListProductData(e, t, n, r) {
    (e = e || ""), (n = n || ""), (r = r || 0);
    var i = {
        id: (t = t || null).getAttribute("data-sku"),
        name: t.getElementsByClassName("card__title").length
            ? t.getElementsByClassName("card__title")[0].textContent
            : "",
        brand: Array.prototype.slice
            .call(t.getElementsByClassName("product-author-name"))
            .map(function (e) {
                return e.textContent.trim();
            })
            .join("/"),
        category: t.getAttribute("data-category"),
        price: t.getAttribute("data-price"),
        variant: "Undefined variant",
    };
    switch (
        (-1 !== ["impressions", "click"].indexOf(e) &&
            ((i.position = r), "impressions" == e && (i.list = n)),
        (i.id = i.id ? i.id.toString() : "0"),
        (i.price = i.price ? i.price.toString() : "0"),
        (i.name = i.name ? i.name.toString().trim() : "Undefined product"),
        (i.brand = i.brand ? i.brand.toString().trim() : "Undefined author"),
        i.category
            ? (i.category = i.category.toString().trim())
            : (i.category =
                  -1 !== i.id.indexOf("YI360")
                      ? "PNG Images"
                      : "Undefined category"),
        i.category.split("/")[0])
    ) {
        case "Creative Store":
        case "Creative Fonts":
            "cart" == e &&
            void 0 !== t.getAttribute("data-cart-license") &&
            t.getAttribute("data-cart-license")
                ? (i.variant = t.getAttribute("data-cart-license"))
                : (i.variant = "Standard License");
            break;
        case "Object Mockups":
            i.variant = "Standard License/PSD Mockup";
            break;
        case "PNG Images":
            i.variant = "Royalty Free License/Transparent PNG";
    }
    return i;
}
function getSingleProductData(e, t) {
    var n = document.getElementsByClassName("popup")[0],
        r = {
            id: n.querySelectorAll(".item-header-stats .sku").length
                ? n.querySelectorAll(".item-header-stats .sku")[0].textContent
                : "",
            name: n.querySelectorAll(".item-header-h h2").length
                ? n.querySelectorAll(".item-header-h h2")[0].textContent
                : "",
            price: "0",
            category: Array.prototype.slice
                .call(n.getElementsByClassName("fcat"))
                .map(function (e) {
                    return e.textContent.toString().trim();
                }),
            brand: [],
            variant: [],
        };
    t = void 0 !== t && t;
    if (
        (e && e.querySelectorAll(".regularprice .price.amount").length
            ? (r.price = parseFloat(
                  e
                      .querySelectorAll(".regularprice .price.amount")[0]
                      .textContent.replace(/[^\d.-]/g, "")
              ).toFixed(2))
            : ((e = document.querySelectorAll('input[name="product"]:checked')
                  .length
                  ? document.querySelectorAll(
                        'input[name="product"]:checked'
                    )[0]
                  : document.querySelectorAll('input[name="product"]')[0]),
              (r.price = parseFloat(
                  e
                      .closest("tr")
                      .querySelectorAll(".regularprice .price.amount")[0]
                      .textContent.replace(/[^\d.-]/g, "")
              ).toFixed(2))),
        Array.prototype.slice
            .call(n.querySelectorAll(".sidebar-container-owners .tablerow"))
            .filter(function (e, t) {
                return "none" != e.style.display;
            })
            .forEach(function (e) {
                e.querySelectorAll(".item-comment-message a").length &&
                    r.brand.push(
                        e.querySelectorAll(".item-comment-message a")[0]
                            .textContent
                    );
            }),
        (r.brand = r.brand.join("/")),
        t)
    )
        r.variant = t;
    else {
        var i = n.querySelectorAll(".item-sidebar .ftype"),
            o = n.querySelectorAll(".item-sidebar .flic");
        o.length &&
            "–" !== o[0].textContent.trim() &&
            r.variant.push(o[0].textContent.trim()),
            i.length &&
                "–" !== i[0].textContent.trim() &&
                "Creative Fonts" != r.category[0] &&
                r.variant.push(i[0].textContent.trim()),
            (r.variant = r.variant.join("/"));
    }
    return (
        (r.id = r.id ? r.id.toString() : "0"),
        (r.name = r.name ? r.name.toString().trim() : "Undefined product"),
        (r.price = r.price ? r.price.toString() : "0"),
        (r.brand = r.brand ? r.brand.toString().trim() : "Undefined author"),
        (r.variant =
            r.variant && "-" != r.variant
                ? r.variant.toString().trim()
                : "Undefined variant"),
        r.category.length
            ? (r.category = r.category.join("/").trim())
            : -1 !== r.id.indexOf("YI360")
            ? (r.category = "PNG Images")
            : (r.category = "Undefined category"),
        r
    );
}
function getCartItemData(e, t) {
    var n =
            e.querySelectorAll(".gtm-info").length &&
            void 0 !==
                e.querySelectorAll(".gtm-info")[0].getAttribute("data-info")
                ? JSON.parse(
                      e
                          .querySelectorAll(".gtm-info")[0]
                          .getAttribute("data-info")
                  )
                : {},
        r = {
            id: e.querySelectorAll("dd.variation-ID").length
                ? e.querySelectorAll("dd.variation-ID")[0].textContent.trim()
                : "",
            name: e.querySelectorAll(".product-name > a").length
                ? e.querySelectorAll(".product-name > a")[0].textContent.trim()
                : "",
            price: e.querySelectorAll(".product-subtotal > .amount").length
                ? parseFloat(
                      e
                          .querySelectorAll(".product-subtotal > .amount")[0]
                          .textContent.trim()
                          .replace(/[^\d.-]/g, "")
                  ).toFixed(2)
                : "",
            category: void 0 !== n.category ? n.category : "",
            brand: void 0 !== n.brand ? n.brand : "",
            variant: [],
        },
        i =
            ((t = void 0 !== t && t),
            e.querySelectorAll("dd.variation-License").length
                ? e
                      .querySelectorAll("dd.variation-License")[0]
                      .textContent.trim()
                : ""),
        o = e.querySelectorAll("dd.variation-Filetype").length
            ? e.querySelectorAll("dd.variation-Filetype")[0].textContent.trim()
            : "";
    return (
        t ? r.variant.push(t) : i.length && "–" !== i && r.variant.push(i),
        o.length &&
            "–" !== o &&
            "Creative Fonts" != r.category.split("/")[0] &&
            r.variant.push(o),
        (r.variant = r.variant.join("/")),
        (r.id = r.id ? r.id : "0"),
        (r.name = r.name ? r.name : "Undefined product"),
        (r.price = r.price ? r.price : "0"),
        (r.category = r.category ? r.category : "Undefined category"),
        (r.brand = r.brand ? r.brand : "Undefined author"),
        (r.variant =
            r.variant && "-" != r.variant ? r.variant : "Undefined variant"),
        r
    );
}
function getCheckoutItemData(e) {
    var t =
            e.querySelectorAll(".gtm-info").length &&
            void 0 !==
                e.querySelectorAll(".gtm-info")[0].getAttribute("data-info")
                ? JSON.parse(
                      e
                          .querySelectorAll(".gtm-info")[0]
                          .getAttribute("data-info")
                  )
                : {},
        n = {
            id: e.querySelectorAll(".variation-ID").length
                ? e.querySelectorAll(".variation-ID")[0].textContent.trim()
                : "",
            name: e.querySelectorAll(".product-title").length
                ? e.querySelectorAll(".product-title")[0].textContent.trim()
                : "",
            price: e.querySelectorAll(".product-total > .amount").length
                ? parseFloat(
                      e
                          .querySelectorAll(".product-total > .amount")[0]
                          .textContent.trim()
                          .replace(/[^\d.-]/g, "")
                  ).toFixed(2)
                : "",
            category: void 0 !== t.category ? t.category : "",
            brand: void 0 !== t.brand ? t.brand : "",
            variant: [],
        },
        r = e.querySelectorAll("dd.variation-License").length
            ? e.querySelectorAll("dd.variation-License")[0].textContent.trim()
            : "",
        i = e.querySelectorAll("dd.variation-Filetype").length
            ? e.querySelectorAll("dd.variation-Filetype")[0].textContent.trim()
            : "";
    return (
        r.length && "–" !== r && n.variant.push(r),
        i.length &&
            "–" !== i &&
            "Creative Fonts" != n.category.split("/")[0] &&
            n.variant.push(i),
        (n.variant = n.variant.join("/")),
        (n.id = n.id ? n.id : "0"),
        (n.name = n.name ? n.name : "Undefined product"),
        (n.price = n.price ? n.price : "0"),
        (n.category = n.category ? n.category : "Undefined category"),
        (n.brand = n.brand ? n.brand : "Undefined author"),
        (n.variant =
            n.variant && "-" != n.variant ? n.variant : "Undefined variant"),
        n
    );
}
function sendGaImpressions(e, t) {
    e = e || "";
    var n,
        r,
        i =
            "string" == typeof (t = t || "li.product-impressions")
                ? Array.prototype.slice.call(document.querySelectorAll(t))
                : t,
        o = [],
        a = [],
        s = "";
    "Related Products" == e
        ? document.getElementsByClassName("related-products").length
            ? ((n = document.querySelectorAll(".related-products .products")),
              (s = ".product-impressions"))
            : ((n = document.querySelectorAll(
                  "#related-products-carousel .owl-wrapper"
              )),
              (s = ".owl-item"))
        : (n = document.querySelectorAll("ul.products")),
        (a = Array.prototype.slice.call(n[0].children)),
        i.length &&
            i.forEach(function (t) {
                (r = s ? a.indexOf(t.closest(s)) : a.indexOf(t)),
                    o.push(getListProductData("impressions", t, e, r++));
            }),
        o.length &&
            o.chunk(30).forEach(function (e) {
                pushGaImpressions(e);
            });
}
function pushGaImpressions(e) {
    if (
        (window.gaDebugEnabled,
        dataLayer.push({
            event: "gtm-ee-event",
            "gtm-ee-event-category": "Enhanced Ecommerce",
            "gtm-ee-event-action": "Product Impressions",
            "gtm-ee-event-non-interaction": "True",
            ecommerce: { currencyCode: "USD", impressions: e },
        }),
        $('meta[property="og:description"]').length &&
            -1 !==
                $('meta[property="og:description"]')
                    .attr("content")
                    .indexOf("Product category: "))
    ) {
        var t = $('meta[property="og:description"]')
            .attr("content")
            .replace("Product category: ", "");
        "undefined" != typeof fbq &&
            fbq("track", "ViewContent", {
                content_name: "Category",
                content_category: t,
            }),
            (window._hsq = window._hsq || []),
            _hsq.push([
                "trackCustomBehavioralEvent",
                {
                    name: "pe20302049_category_view",
                    properties: { category: t },
                },
            ]);
    }
}
function sendGaClick(e, t, n) {
    (e = void 0 !== e && e ? e : ""),
        (n = void 0 !== n && n ? n : 0),
        t &&
            (window.gaDebugEnabled,
            dataLayer.push({
                event: "gtm-ee-event",
                "gtm-ee-event-category": "Enhanced Ecommerce",
                "gtm-ee-event-action": "Product Clicks",
                "gtm-ee-event-non-interaction": "False",
                ecommerce: {
                    currencyCode: "USD",
                    click: {
                        actionField: { list: e },
                        products: [getListProductData("click", t, e, n)],
                    },
                },
            }));
}
function sendGaProductDetails(e) {
    window.gaDebugEnabled,
        dataLayer.push({
            event: "gtm-ee-event",
            "gtm-ee-event-category": "Enhanced Ecommerce",
            "gtm-ee-event-action": "Product Details",
            "gtm-ee-event-non-interaction": "True",
            ecommerce: {
                currencyCode: "USD",
                detail: { products: [getSingleProductData(e)] },
            },
        });
}
function updateGaCart(e, t) {
    if (((t = t || ""), (e = e || []).length)) {
        var n = [];
        e.forEach(function (e) {
            n.push(getListProductData("cart", e));
        }),
            n.chunk(30).forEach(function (e) {
                pushGaCart(e, t);
            });
    }
}
function clearCart(e) {
    if ((e = e || []).length) {
        var t = [];
        e.forEach(function (e) {
            t.push(getCartItemData(e));
        }),
            t.chunk(30).forEach(function (e) {
                pushGaCart(e, "remove");
            }),
            _hsq.push(["identify", { cart_indicator: "false" }]),
            _hsq.push(["trackPageView"]);
    }
}
function pushGaCart(e, t) {
    var n =
            "remove" == (t = void 0 !== t && t ? t : "add")
                ? "Removing a Product from a Shopping Cart"
                : "Adding a Product to a Shopping Cart",
        r = { currencyCode: "USD" },
        i = { quantity: 0, value: 0, products: [] };
    (r[t] = { products: e }),
        window.gaDebugEnabled,
        dataLayer.push({
            event: "gtm-ee-event",
            "gtm-ee-event-category": "Enhanced Ecommerce",
            "gtm-ee-event-non-interaction": "False",
            "gtm-ee-event-action": n,
            ecommerce: r,
        }),
        "add" == t &&
            (e.forEach(function (e) {
                (i.value += parseFloat(e.price)),
                    i.products.push({ quantity: 1, id: e.id });
            }),
            (i.value = i.value.toFixed(2)),
            (i.quantity = e.length),
            dataLayer.push({
                event: "addToCartPinterest",
                add2cart_quantity: i.quantity,
                add2cart_value: i.value,
            }),
            "undefined" != typeof fbq &&
                fbq("track", "AddToCart", {
                    content_type: "product",
                    currency: "USD",
                    value: i.value,
                    contents: i.products,
                }),
            (window._hsq = window._hsq || []),
            _hsq.push(["identify", { cart_indicator: "true" }]),
            _hsq.push(["trackPageView"]),
            _hsq.push([
                "trackCustomBehavioralEvent",
                {
                    name: "pe20302049_add_to_cart",
                    properties: { yi_timestamp: new Date().getTime() },
                },
            ]));
}
function cartPageProcess() {
    var e = [],
        t = Array.prototype.slice.call(
            document.querySelectorAll(".cart_item:not(.cart_item_head)")
        );
    t.length &&
        t.forEach(function (t) {
            e.push(getCartItemData(t));
        }),
        e.chunk(30).forEach(function (e) {
            pushGaCheckoutStep(e, 1);
        });
}
function checkoutPageProcess(e, t) {
    var n = [],
        r = Array.prototype.slice.call(
            document.querySelectorAll("#order_review .cart_item")
        );
    r.length &&
        r.forEach(function (e) {
            n.push(getCheckoutItemData(e));
        }),
        n.chunk(30).forEach(function (n) {
            pushGaCheckoutStep(n, e, t);
        });
}
function pushGaCheckoutStep(e, t, n) {
    n = !(void 0 === n || !n) && n;
    var r = { step: (t = void 0 !== t && t ? parseInt(t, 10) : 1) };
    2 == t &&
        ("undefined" != typeof fbq &&
            fbq("track", "ViewContent", { content_name: "Checkout" }),
        (window._hsq = window._hsq || []),
        _hsq.push([
            "trackCustomBehavioralEvent",
            { name: "pe20302049_checkout" },
        ])),
        3 == t && n && (r.option = n),
        window.gaDebugEnabled,
        dataLayer.push({
            event: "gtm-ee-event",
            "gtm-ee-event-category": "Enhanced Ecommerce",
            "gtm-ee-event-action": "Checkout Step " + t,
            "gtm-ee-event-non-interaction": "False",
            ecommerce: {
                currencyCode: "USD",
                checkout: { actionField: r, products: e },
            },
        });
}
function trackSignIn() {
    (window._hsq = window._hsq || []),
        _hsq.push([
            "trackCustomBehavioralEvent",
            { name: "pe20302049_signin", properties: { project: "yimg" } },
        ]),
        "undefined" != typeof fbq && fbq("trackCustom", "SignIn");
}
function trackSignUp() {
    window.dataLayer.push({ event: "signUpSuccess" }),
        (window._hsq = window._hsq || []),
        _hsq.push([
            "trackCustomBehavioralEvent",
            { name: "pe20302049_signin", properties: { project: "yimg" } },
        ]),
        "undefined" != typeof fbq && fbq("trackCustom", "SignUp");
}
function trackDownload() {
    window.dataLayer.push({
        event: "gtm-event",
        "gtm-event-category": "User",
        "gtm-event-action": "Download item",
    }),
        (window._hsq = window._hsq || []),
        _hsq.push([
            "trackCustomBehavioralEvent",
            { name: "pe20302049_download" },
        ]),
        "undefined" != typeof fbq && fbq("trackCustom", "Download");
}
function trackPurchase() {
    var e = [],
        t = Array.prototype.slice.call(
            document.querySelectorAll(".order_details .order_item")
        ),
        n = { quantity: 0, value: 0, products: [] };
    t.length &&
        (t.forEach(function (t) {
            e.push(getCheckoutItemData(t));
        }),
        e.forEach(function (e) {
            (n.value += parseFloat(e.price)),
                n.products.push({ quantity: 1, id: e.id });
        }),
        (n.value = n.value.toFixed(2)),
        (n.quantity = e.length),
        "undefined" != typeof fbq &&
            fbq("track", "Purchase", {
                content_type: "product",
                currency: "USD",
                value: n.value,
                contents: n.products,
            }),
        (window._hsq = window._hsq || []),
        _hsq.push(["identify", { cart_indicator: "success" }]),
        _hsq.push(["trackPageView"]),
        _hsq.push([
            "trackCustomBehavioralEvent",
            {
                name: "pe20302049_complete_purchase",
                properties: { products: n.products },
            },
        ]));
}
!(function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document)
                        throw new Error(
                            "jQuery requires a window with a document"
                        );
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    var n = [],
        r = n.slice,
        i = n.concat,
        o = n.push,
        a = n.indexOf,
        s = {},
        l = s.toString,
        c = s.hasOwnProperty,
        u = {},
        d = "1.11.3",
        p = function (e, t) {
            return new p.fn.init(e, t);
        },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        h = /^-ms-/,
        m = /-([\da-z])/gi,
        g = function (e, t) {
            return t.toUpperCase();
        };
    function v(e) {
        var t = "length" in e && e.length,
            n = p.type(e);
        return (
            "function" !== n &&
            !p.isWindow(e) &&
            (!(1 !== e.nodeType || !t) ||
                "array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
        );
    }
    (p.fn = p.prototype =
        {
            jquery: d,
            constructor: p,
            selector: "",
            length: 0,
            toArray: function () {
                return r.call(this);
            },
            get: function (e) {
                return null != e
                    ? 0 > e
                        ? this[e + this.length]
                        : this[e]
                    : r.call(this);
            },
            pushStack: function (e) {
                var t = p.merge(this.constructor(), e);
                return (t.prevObject = this), (t.context = this.context), t;
            },
            each: function (e, t) {
                return p.each(this, e, t);
            },
            map: function (e) {
                return this.pushStack(
                    p.map(this, function (t, n) {
                        return e.call(t, n, t);
                    })
                );
            },
            slice: function () {
                return this.pushStack(r.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor(null);
            },
            push: o,
            sort: n.sort,
            splice: n.splice,
        }),
        (p.extend = p.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a = arguments[0] || {},
                    s = 1,
                    l = arguments.length,
                    c = !1;
                for (
                    "boolean" == typeof a &&
                        ((c = a), (a = arguments[s] || {}), s++),
                        "object" == typeof a || p.isFunction(a) || (a = {}),
                        s === l && ((a = this), s--);
                    l > s;
                    s++
                )
                    if (null != (i = arguments[s]))
                        for (r in i)
                            (e = a[r]),
                                a !== (n = i[r]) &&
                                    (c &&
                                    n &&
                                    (p.isPlainObject(n) || (t = p.isArray(n)))
                                        ? (t
                                              ? ((t = !1),
                                                (o =
                                                    e && p.isArray(e) ? e : []))
                                              : (o =
                                                    e && p.isPlainObject(e)
                                                        ? e
                                                        : {}),
                                          (a[r] = p.extend(c, o, n)))
                                        : void 0 !== n && (a[r] = n));
                return a;
            }),
        p.extend({
            expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === p.type(e);
            },
            isArray:
                Array.isArray ||
                function (e) {
                    return "array" === p.type(e);
                },
            isWindow: function (e) {
                return null != e && e == e.window;
            },
            isNumeric: function (e) {
                return !p.isArray(e) && e - parseFloat(e) + 1 >= 0;
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            isPlainObject: function (e) {
                var t;
                if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e))
                    return !1;
                try {
                    if (
                        e.constructor &&
                        !c.call(e, "constructor") &&
                        !c.call(e.constructor.prototype, "isPrototypeOf")
                    )
                        return !1;
                } catch (e) {
                    return !1;
                }
                if (u.ownLast) for (t in e) return c.call(e, t);
                for (t in e);
                return void 0 === t || c.call(e, t);
            },
            type: function (e) {
                return null == e
                    ? e + ""
                    : "object" == typeof e || "function" == typeof e
                    ? s[l.call(e)] || "object"
                    : typeof e;
            },
            globalEval: function (t) {
                t &&
                    p.trim(t) &&
                    (
                        e.execScript ||
                        function (t) {
                            e.eval.call(e, t);
                        }
                    )(t);
            },
            camelCase: function (e) {
                return e.replace(h, "ms-").replace(m, g);
            },
            nodeName: function (e, t) {
                return (
                    e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                );
            },
            each: function (e, t, n) {
                var r = 0,
                    i = e.length,
                    o = v(e);
                if (n) {
                    if (o) for (; i > r && !1 !== t.apply(e[r], n); r++);
                    else for (r in e) if (!1 === t.apply(e[r], n)) break;
                } else if (o)
                    for (; i > r && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(f, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return (
                    null != e &&
                        (v(Object(e))
                            ? p.merge(n, "string" == typeof e ? [e] : e)
                            : o.call(n, e)),
                    n
                );
            },
            inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (a) return a.call(t, e, n);
                    for (
                        r = t.length,
                            n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
                        r > n;
                        n++
                    )
                        if (n in t && t[n] === e) return n;
                }
                return -1;
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r; )
                    e[i++] = t[r++];
                if (n != n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; o > i; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    o = 0,
                    a = e.length,
                    s = [];
                if (v(e))
                    for (; a > o; o++) null != (r = t(e[o], o, n)) && s.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return i.apply([], s);
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, o;
                return (
                    "string" == typeof t && ((o = e[t]), (t = e), (e = o)),
                    p.isFunction(e)
                        ? ((n = r.call(arguments, 2)),
                          (i = function () {
                              return e.apply(
                                  t || this,
                                  n.concat(r.call(arguments))
                              );
                          }),
                          (i.guid = e.guid = e.guid || p.guid++),
                          i)
                        : void 0
                );
            },
            now: function () {
                return +new Date();
            },
            support: u,
        }),
        p.each(
            "Boolean Number String Function Array Date RegExp Object Error".split(
                " "
            ),
            function (e, t) {
                s["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var y = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            m,
            g,
            v,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            C = 0,
            T = 0,
            S = ae(),
            k = ae(),
            E = ae(),
            N = function (e, t) {
                return e === t && (d = !0), 0;
            },
            A = 1 << 31,
            q = {}.hasOwnProperty,
            D = [],
            _ = D.pop,
            L = D.push,
            j = D.push,
            H = D.slice,
            F = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            P =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            B = M.replace("w", "w#"),
            I =
                "\\[" +
                O +
                "*(" +
                M +
                ")(?:" +
                O +
                "*([*^$|!~]?=)" +
                O +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                B +
                "))|)" +
                O +
                "*\\]",
            R =
                ":(" +
                M +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                I +
                ")*)|.*)\\)|)",
            W = new RegExp(O + "+", "g"),
            $ = new RegExp(
                "^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$",
                "g"
            ),
            z = new RegExp("^" + O + "*," + O + "*"),
            U = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            X = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
            G = new RegExp(R),
            V = new RegExp("^" + B + "$"),
            J = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        O +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        O +
                        "*(?:([+-]|)" +
                        O +
                        "*(\\d+)|))" +
                        O +
                        "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                        O +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        O +
                        "*((?:-\\d)?\\d*)" +
                        O +
                        "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp(
                "\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)",
                "ig"
            ),
            re = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n
                    ? t
                    : 0 > r
                    ? String.fromCharCode(r + 65536)
                    : String.fromCharCode(
                          (r >> 10) | 55296,
                          (1023 & r) | 56320
                      );
            },
            ie = function () {
                p();
            };
        try {
            j.apply((D = H.call(w.childNodes)), w.childNodes),
                D[w.childNodes.length].nodeType;
        } catch (e) {
            j = {
                apply: D.length
                    ? function (e, t) {
                          L.apply(e, H.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                          e.length = n - 1;
                      },
            };
        }
        function oe(e, t, r, i) {
            var o, s, c, u, d, h, v, y, C, T;
            if (
                ((t ? t.ownerDocument || t : w) !== f && p(t),
                (r = r || []),
                (u = (t = t || f).nodeType),
                "string" != typeof e || !e || (1 !== u && 9 !== u && 11 !== u))
            )
                return r;
            if (!i && m) {
                if (11 !== u && (o = Z.exec(e)))
                    if ((c = o[1])) {
                        if (9 === u) {
                            if (!(s = t.getElementById(c)) || !s.parentNode)
                                return r;
                            if (s.id === c) return r.push(s), r;
                        } else if (
                            t.ownerDocument &&
                            (s = t.ownerDocument.getElementById(c)) &&
                            b(t, s) &&
                            s.id === c
                        )
                            return r.push(s), r;
                    } else {
                        if (o[2])
                            return j.apply(r, t.getElementsByTagName(e)), r;
                        if ((c = o[3]) && n.getElementsByClassName)
                            return j.apply(r, t.getElementsByClassName(c)), r;
                    }
                if (n.qsa && (!g || !g.test(e))) {
                    if (
                        ((y = v = x),
                        (C = t),
                        (T = 1 !== u && e),
                        1 === u && "object" !== t.nodeName.toLowerCase())
                    ) {
                        for (
                            h = a(e),
                                (v = t.getAttribute("id"))
                                    ? (y = v.replace(te, "\\$&"))
                                    : t.setAttribute("id", y),
                                y = "[id='" + y + "'] ",
                                d = h.length;
                            d--;

                        )
                            h[d] = y + ge(h[d]);
                        (C = (ee.test(e) && he(t.parentNode)) || t),
                            (T = h.join(","));
                    }
                    if (T)
                        try {
                            return j.apply(r, C.querySelectorAll(T)), r;
                        } catch (e) {
                        } finally {
                            v || t.removeAttribute("id");
                        }
                }
            }
            return l(e.replace($, "$1"), t, r, i);
        }
        function ae() {
            var e = [];
            return function t(n, i) {
                return (
                    e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                    (t[n + " "] = i)
                );
            };
        }
        function se(e) {
            return (e[x] = !0), e;
        }
        function le(e) {
            var t = f.createElement("div");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function ce(e, t) {
            for (var n = e.split("|"), i = e.length; i--; )
                r.attrHandle[n[i]] = t;
        }
        function ue(e, t) {
            var n = t && e,
                r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function de(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function fe(e) {
            return se(function (t) {
                return (
                    (t = +t),
                    se(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--; )
                            n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function he(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = oe.support = {}),
        (o = oe.isXML =
            function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
        (p = oe.setDocument =
            function (e) {
                var t,
                    i,
                    a = e ? e.ownerDocument || e : w;
                return a !== f && 9 === a.nodeType && a.documentElement
                    ? ((f = a),
                      (h = a.documentElement),
                      (i = a.defaultView) &&
                          i !== i.top &&
                          (i.addEventListener
                              ? i.addEventListener("unload", ie, !1)
                              : i.attachEvent && i.attachEvent("onunload", ie)),
                      (m = !o(a)),
                      (n.attributes = le(function (e) {
                          return (
                              (e.className = "i"), !e.getAttribute("className")
                          );
                      })),
                      (n.getElementsByTagName = le(function (e) {
                          return (
                              e.appendChild(a.createComment("")),
                              !e.getElementsByTagName("*").length
                          );
                      })),
                      (n.getElementsByClassName = K.test(
                          a.getElementsByClassName
                      )),
                      (n.getById = le(function (e) {
                          return (
                              (h.appendChild(e).id = x),
                              !a.getElementsByName ||
                                  !a.getElementsByName(x).length
                          );
                      })),
                      n.getById
                          ? ((r.find.ID = function (e, t) {
                                if (void 0 !== t.getElementById && m) {
                                    var n = t.getElementById(e);
                                    return n && n.parentNode ? [n] : [];
                                }
                            }),
                            (r.filter.ID = function (e) {
                                var t = e.replace(ne, re);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }))
                          : (delete r.find.ID,
                            (r.filter.ID = function (e) {
                                var t = e.replace(ne, re);
                                return function (e) {
                                    var n =
                                        void 0 !== e.getAttributeNode &&
                                        e.getAttributeNode("id");
                                    return n && n.value === t;
                                };
                            })),
                      (r.find.TAG = n.getElementsByTagName
                          ? function (e, t) {
                                return void 0 !== t.getElementsByTagName
                                    ? t.getElementsByTagName(e)
                                    : n.qsa
                                    ? t.querySelectorAll(e)
                                    : void 0;
                            }
                          : function (e, t) {
                                var n,
                                    r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; (n = o[i++]); )
                                        1 === n.nodeType && r.push(n);
                                    return r;
                                }
                                return o;
                            }),
                      (r.find.CLASS =
                          n.getElementsByClassName &&
                          function (e, t) {
                              return m ? t.getElementsByClassName(e) : void 0;
                          }),
                      (v = []),
                      (g = []),
                      (n.qsa = K.test(a.querySelectorAll)) &&
                          (le(function (e) {
                              (h.appendChild(e).innerHTML =
                                  "<a id='" +
                                  x +
                                  "'></a><select id='" +
                                  x +
                                  "-\f]' msallowcapture=''><option selected=''></option></select>"),
                                  e.querySelectorAll("[msallowcapture^='']")
                                      .length &&
                                      g.push("[*^$]=" + O + "*(?:''|\"\")"),
                                  e.querySelectorAll("[selected]").length ||
                                      g.push(
                                          "\\[" + O + "*(?:value|" + P + ")"
                                      ),
                                  e.querySelectorAll("[id~=" + x + "-]")
                                      .length || g.push("~="),
                                  e.querySelectorAll(":checked").length ||
                                      g.push(":checked"),
                                  e.querySelectorAll("a#" + x + "+*").length ||
                                      g.push(".#.+[+~]");
                          }),
                          le(function (e) {
                              var t = a.createElement("input");
                              t.setAttribute("type", "hidden"),
                                  e.appendChild(t).setAttribute("name", "D"),
                                  e.querySelectorAll("[name=d]").length &&
                                      g.push("name" + O + "*[*^$|!~]?="),
                                  e.querySelectorAll(":enabled").length ||
                                      g.push(":enabled", ":disabled"),
                                  e.querySelectorAll("*,:x"),
                                  g.push(",.*:");
                          })),
                      (n.matchesSelector = K.test(
                          (y =
                              h.matches ||
                              h.webkitMatchesSelector ||
                              h.mozMatchesSelector ||
                              h.oMatchesSelector ||
                              h.msMatchesSelector)
                      )) &&
                          le(function (e) {
                              (n.disconnectedMatch = y.call(e, "div")),
                                  y.call(e, "[s!='']:x"),
                                  v.push("!=", R);
                          }),
                      (g = g.length && new RegExp(g.join("|"))),
                      (v = v.length && new RegExp(v.join("|"))),
                      (t = K.test(h.compareDocumentPosition)),
                      (b =
                          t || K.test(h.contains)
                              ? function (e, t) {
                                    var n =
                                            9 === e.nodeType
                                                ? e.documentElement
                                                : e,
                                        r = t && t.parentNode;
                                    return (
                                        e === r ||
                                        !(
                                            !r ||
                                            1 !== r.nodeType ||
                                            !(n.contains
                                                ? n.contains(r)
                                                : e.compareDocumentPosition &&
                                                  16 &
                                                      e.compareDocumentPosition(
                                                          r
                                                      ))
                                        )
                                    );
                                }
                              : function (e, t) {
                                    if (t)
                                        for (; (t = t.parentNode); )
                                            if (t === e) return !0;
                                    return !1;
                                }),
                      (N = t
                          ? function (e, t) {
                                if (e === t) return (d = !0), 0;
                                var r =
                                    !e.compareDocumentPosition -
                                    !t.compareDocumentPosition;
                                return (
                                    r ||
                                    (1 &
                                        (r =
                                            (e.ownerDocument || e) ===
                                            (t.ownerDocument || t)
                                                ? e.compareDocumentPosition(t)
                                                : 1) ||
                                    (!n.sortDetached &&
                                        t.compareDocumentPosition(e) === r)
                                        ? e === a ||
                                          (e.ownerDocument === w && b(w, e))
                                            ? -1
                                            : t === a ||
                                              (t.ownerDocument === w && b(w, t))
                                            ? 1
                                            : u
                                            ? F(u, e) - F(u, t)
                                            : 0
                                        : 4 & r
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (e, t) {
                                if (e === t) return (d = !0), 0;
                                var n,
                                    r = 0,
                                    i = e.parentNode,
                                    o = t.parentNode,
                                    s = [e],
                                    l = [t];
                                if (!i || !o)
                                    return e === a
                                        ? -1
                                        : t === a
                                        ? 1
                                        : i
                                        ? -1
                                        : o
                                        ? 1
                                        : u
                                        ? F(u, e) - F(u, t)
                                        : 0;
                                if (i === o) return ue(e, t);
                                for (n = e; (n = n.parentNode); ) s.unshift(n);
                                for (n = t; (n = n.parentNode); ) l.unshift(n);
                                for (; s[r] === l[r]; ) r++;
                                return r
                                    ? ue(s[r], l[r])
                                    : s[r] === w
                                    ? -1
                                    : l[r] === w
                                    ? 1
                                    : 0;
                            }),
                      a)
                    : f;
            }),
        (oe.matches = function (e, t) {
            return oe(e, null, null, t);
        }),
        (oe.matchesSelector = function (e, t) {
            if (
                ((e.ownerDocument || e) !== f && p(e),
                (t = t.replace(X, "='$1']")),
                !(
                    !n.matchesSelector ||
                    !m ||
                    (v && v.test(t)) ||
                    (g && g.test(t))
                ))
            )
                try {
                    var r = y.call(e, t);
                    if (
                        r ||
                        n.disconnectedMatch ||
                        (e.document && 11 !== e.document.nodeType)
                    )
                        return r;
                } catch (e) {}
            return oe(t, f, null, [e]).length > 0;
        }),
        (oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== f && p(e), b(e, t);
        }),
        (oe.attr = function (e, t) {
            (e.ownerDocument || e) !== f && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o =
                    i && q.call(r.attrHandle, t.toLowerCase())
                        ? i(e, t, !m)
                        : void 0;
            return void 0 !== o
                ? o
                : n.attributes || !m
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
        }),
        (oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (oe.uniqueSort = function (e) {
            var t,
                r = [],
                i = 0,
                o = 0;
            if (
                ((d = !n.detectDuplicates),
                (u = !n.sortStable && e.slice(0)),
                e.sort(N),
                d)
            ) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
            }
            return (u = null), e;
        }),
        (i = oe.getText =
            function (e) {
                var t,
                    n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += i(t);
                return n;
            }),
        (r = oe.selectors =
            {
                cacheLength: 50,
                createPseudo: se,
                match: J,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (e) {
                        return (
                            (e[1] = e[1].replace(ne, re)),
                            (e[3] = (e[3] || e[4] || e[5] || "").replace(
                                ne,
                                re
                            )),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        );
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3)
                                ? (e[3] || oe.error(e[0]),
                                  (e[4] = +(e[4]
                                      ? e[5] + (e[6] || 1)
                                      : 2 *
                                        ("even" === e[3] || "odd" === e[3]))),
                                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                : e[3] && oe.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return J.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                  ? (e[2] = e[4] || e[5] || "")
                                  : n &&
                                    G.test(n) &&
                                    (t = a(n, !0)) &&
                                    (t =
                                        n.indexOf(")", n.length - t) -
                                        n.length) &&
                                    ((e[0] = e[0].slice(0, t)),
                                    (e[2] = n.slice(0, t))),
                              e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ne, re).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return (
                                      e.nodeName &&
                                      e.nodeName.toLowerCase() === t
                                  );
                              };
                    },
                    CLASS: function (e) {
                        var t = S[e + " "];
                        return (
                            t ||
                            ((t = new RegExp(
                                "(^|" + O + ")" + e + "(" + O + "|$)"
                            )) &&
                                S(e, function (e) {
                                    return t.test(
                                        ("string" == typeof e.className &&
                                            e.className) ||
                                            (void 0 !== e.getAttribute &&
                                                e.getAttribute("class")) ||
                                            ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (e, t, n) {
                        return function (r) {
                            var i = oe.attr(r, e);
                            return null == i
                                ? "!=" === t
                                : !t ||
                                      ((i += ""),
                                      "=" === t
                                          ? i === n
                                          : "!=" === t
                                          ? i !== n
                                          : "^=" === t
                                          ? n && 0 === i.indexOf(n)
                                          : "*=" === t
                                          ? n && i.indexOf(n) > -1
                                          : "$=" === t
                                          ? n && i.slice(-n.length) === n
                                          : "~=" === t
                                          ? (
                                                " " +
                                                i.replace(W, " ") +
                                                " "
                                            ).indexOf(n) > -1
                                          : "|=" === t &&
                                            (i === n ||
                                                i.slice(0, n.length + 1) ===
                                                    n + "-"));
                        };
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (t, n, l) {
                                  var c,
                                      u,
                                      d,
                                      p,
                                      f,
                                      h,
                                      m =
                                          o !== a
                                              ? "nextSibling"
                                              : "previousSibling",
                                      g = t.parentNode,
                                      v = s && t.nodeName.toLowerCase(),
                                      y = !l && !s;
                                  if (g) {
                                      if (o) {
                                          for (; m; ) {
                                              for (d = t; (d = d[m]); )
                                                  if (
                                                      s
                                                          ? d.nodeName.toLowerCase() ===
                                                            v
                                                          : 1 === d.nodeType
                                                  )
                                                      return !1;
                                              h = m =
                                                  "only" === e &&
                                                  !h &&
                                                  "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (
                                          ((h = [
                                              a ? g.firstChild : g.lastChild,
                                          ]),
                                          a && y)
                                      ) {
                                          for (
                                              f =
                                                  (c =
                                                      (u = g[x] || (g[x] = {}))[
                                                          e
                                                      ] || [])[0] === C && c[1],
                                                  p = c[0] === C && c[2],
                                                  d = f && g.childNodes[f];
                                              (d =
                                                  (++f && d && d[m]) ||
                                                  (p = f = 0) ||
                                                  h.pop());

                                          )
                                              if (
                                                  1 === d.nodeType &&
                                                  ++p &&
                                                  d === t
                                              ) {
                                                  u[e] = [C, f, p];
                                                  break;
                                              }
                                      } else if (
                                          y &&
                                          (c = (t[x] || (t[x] = {}))[e]) &&
                                          c[0] === C
                                      )
                                          p = c[1];
                                      else
                                          for (
                                              ;
                                              (d =
                                                  (++f && d && d[m]) ||
                                                  (p = f = 0) ||
                                                  h.pop()) &&
                                              ((s
                                                  ? d.nodeName.toLowerCase() !==
                                                    v
                                                  : 1 !== d.nodeType) ||
                                                  !++p ||
                                                  (y &&
                                                      ((d[x] || (d[x] = {}))[
                                                          e
                                                      ] = [C, p]),
                                                  d !== t));

                                          );
                                      return (
                                          (p -= i) === r ||
                                          (p % r == 0 && p / r >= 0)
                                      );
                                  }
                              };
                    },
                    PSEUDO: function (e, t) {
                        var n,
                            i =
                                r.pseudos[e] ||
                                r.setFilters[e.toLowerCase()] ||
                                oe.error("unsupported pseudo: " + e);
                        return i[x]
                            ? i(t)
                            : i.length > 1
                            ? ((n = [e, e, "", t]),
                              r.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? se(function (e, n) {
                                        for (
                                            var r, o = i(e, t), a = o.length;
                                            a--;

                                        )
                                            e[(r = F(e, o[a]))] = !(n[r] =
                                                o[a]);
                                    })
                                  : function (e) {
                                        return i(e, 0, n);
                                    })
                            : i;
                    },
                },
                pseudos: {
                    not: se(function (e) {
                        var t = [],
                            n = [],
                            r = s(e.replace($, "$1"));
                        return r[x]
                            ? se(function (e, t, n, i) {
                                  for (
                                      var o,
                                          a = r(e, null, i, []),
                                          s = e.length;
                                      s--;

                                  )
                                      (o = a[s]) && (e[s] = !(t[s] = o));
                              })
                            : function (e, i, o) {
                                  return (
                                      (t[0] = e),
                                      r(t, null, o, n),
                                      (t[0] = null),
                                      !n.pop()
                                  );
                              };
                    }),
                    has: se(function (e) {
                        return function (t) {
                            return oe(e, t).length > 0;
                        };
                    }),
                    contains: se(function (e) {
                        return (
                            (e = e.replace(ne, re)),
                            function (t) {
                                return (
                                    (
                                        t.textContent ||
                                        t.innerText ||
                                        i(t)
                                    ).indexOf(e) > -1
                                );
                            }
                        );
                    }),
                    lang: se(function (e) {
                        return (
                            V.test(e || "") ||
                                oe.error("unsupported lang: " + e),
                            (e = e.replace(ne, re).toLowerCase()),
                            function (t) {
                                var n;
                                do {
                                    if (
                                        (n = m
                                            ? t.lang
                                            : t.getAttribute("xml:lang") ||
                                              t.getAttribute("lang"))
                                    )
                                        return (
                                            (n = n.toLowerCase()) === e ||
                                            0 === n.indexOf(e + "-")
                                        );
                                } while (
                                    (t = t.parentNode) &&
                                    1 === t.nodeType
                                );
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === h;
                    },
                    focus: function (e) {
                        return (
                            e === f.activeElement &&
                            (!f.hasFocus || f.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                        );
                    },
                    enabled: function (e) {
                        return !1 === e.disabled;
                    },
                    disabled: function (e) {
                        return !0 === e.disabled;
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && !!e.checked) ||
                            ("option" === t && !!e.selected)
                        );
                    },
                    selected: function (e) {
                        return (
                            e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        );
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                        return Q.test(e.nodeName);
                    },
                    input: function (e) {
                        return Y.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && "button" === e.type) ||
                            "button" === t
                        );
                    },
                    text: function (e) {
                        var t;
                        return (
                            "input" === e.nodeName.toLowerCase() &&
                            "text" === e.type &&
                            (null == (t = e.getAttribute("type")) ||
                                "text" === t.toLowerCase())
                        );
                    },
                    first: fe(function () {
                        return [0];
                    }),
                    last: fe(function (e, t) {
                        return [t - 1];
                    }),
                    eq: fe(function (e, t, n) {
                        return [0 > n ? n + t : n];
                    }),
                    even: fe(function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e;
                    }),
                    odd: fe(function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e;
                    }),
                    lt: fe(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                        return e;
                    }),
                    gt: fe(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }),
        (r.pseudos.nth = r.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = de(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
        function me() {}
        function ge(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function ve(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = T++;
            return t.first
                ? function (t, n, o) {
                      for (; (t = t[r]); )
                          if (1 === t.nodeType || i) return e(t, n, o);
                  }
                : function (t, n, a) {
                      var s,
                          l,
                          c = [C, o];
                      if (a) {
                          for (; (t = t[r]); )
                              if ((1 === t.nodeType || i) && e(t, n, a))
                                  return !0;
                      } else
                          for (; (t = t[r]); )
                              if (1 === t.nodeType || i) {
                                  if (
                                      (s = (l = t[x] || (t[x] = {}))[r]) &&
                                      s[0] === C &&
                                      s[1] === o
                                  )
                                      return (c[2] = s[2]);
                                  if (((l[r] = c), (c[2] = e(t, n, a))))
                                      return !0;
                              }
                  };
        }
        function ye(e) {
            return e.length > 1
                ? function (t, n, r) {
                      for (var i = e.length; i--; )
                          if (!e[i](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function be(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
            return a;
        }
        function xe(e, t, n, r, i, o) {
            return (
                r && !r[x] && (r = xe(r)),
                i && !i[x] && (i = xe(i, o)),
                se(function (o, a, s, l) {
                    var c,
                        u,
                        d,
                        p = [],
                        f = [],
                        h = a.length,
                        m =
                            o ||
                            (function (e, t, n) {
                                for (var r = 0, i = t.length; i > r; r++)
                                    oe(e, t[r], n);
                                return n;
                            })(t || "*", s.nodeType ? [s] : s, []),
                        g = !e || (!o && t) ? m : be(m, p, e, s, l),
                        v = n ? (i || (o ? e : h || r) ? [] : a) : g;
                    if ((n && n(g, v, s, l), r))
                        for (c = be(v, f), r(c, [], s, l), u = c.length; u--; )
                            (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (c = [], u = v.length; u--; )
                                    (d = v[u]) && c.push((g[u] = d));
                                i(null, (v = []), c, l);
                            }
                            for (u = v.length; u--; )
                                (d = v[u]) &&
                                    (c = i ? F(o, d) : p[u]) > -1 &&
                                    (o[c] = !(a[c] = d));
                        }
                    } else (v = be(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, l) : j.apply(a, v);
                })
            );
        }
        function we(e) {
            for (
                var t,
                    n,
                    i,
                    o = e.length,
                    a = r.relative[e[0].type],
                    s = a || r.relative[" "],
                    l = a ? 1 : 0,
                    u = ve(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    d = ve(
                        function (e) {
                            return F(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    p = [
                        function (e, n, r) {
                            var i =
                                (!a && (r || n !== c)) ||
                                ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                            return (t = null), i;
                        },
                    ];
                o > l;
                l++
            )
                if ((n = r.relative[e[l].type])) p = [ve(ye(p), n)];
                else {
                    if (
                        (n = r.filter[e[l].type].apply(null, e[l].matches))[x]
                    ) {
                        for (i = ++l; o > i && !r.relative[e[i].type]; i++);
                        return xe(
                            l > 1 && ye(p),
                            l > 1 &&
                                ge(
                                    e
                                        .slice(0, l - 1)
                                        .concat({
                                            value:
                                                " " === e[l - 2].type
                                                    ? "*"
                                                    : "",
                                        })
                                ).replace($, "$1"),
                            n,
                            i > l && we(e.slice(l, i)),
                            o > i && we((e = e.slice(i))),
                            o > i && ge(e)
                        );
                    }
                    p.push(n);
                }
            return ye(p);
        }
        function Ce(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, l, u) {
                    var d,
                        p,
                        h,
                        m = 0,
                        g = "0",
                        v = o && [],
                        y = [],
                        b = c,
                        x = o || (i && r.find.TAG("*", u)),
                        w = (C += null == b ? 1 : Math.random() || 0.1),
                        T = x.length;
                    for (
                        u && (c = a !== f && a);
                        g !== T && null != (d = x[g]);
                        g++
                    ) {
                        if (i && d) {
                            for (p = 0; (h = e[p++]); )
                                if (h(d, a, s)) {
                                    l.push(d);
                                    break;
                                }
                            u && (C = w);
                        }
                        n && ((d = !h && d) && m--, o && v.push(d));
                    }
                    if (((m += g), n && g !== m)) {
                        for (p = 0; (h = t[p++]); ) h(v, y, a, s);
                        if (o) {
                            if (m > 0)
                                for (; g--; )
                                    v[g] || y[g] || (y[g] = _.call(l));
                            y = be(y);
                        }
                        j.apply(l, y),
                            u &&
                                !o &&
                                y.length > 0 &&
                                m + t.length > 1 &&
                                oe.uniqueSort(l);
                    }
                    return u && ((C = w), (c = b)), v;
                };
            return n ? se(o) : o;
        }
        return (
            (me.prototype = r.filters = r.pseudos),
            (r.setFilters = new me()),
            (a = oe.tokenize =
                function (e, t) {
                    var n,
                        i,
                        o,
                        a,
                        s,
                        l,
                        c,
                        u = k[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, l = [], c = r.preFilter; s; ) {
                        for (a in ((!n || (i = z.exec(s))) &&
                            (i && (s = s.slice(i[0].length) || s),
                            l.push((o = []))),
                        (n = !1),
                        (i = U.exec(s)) &&
                            ((n = i.shift()),
                            o.push({ value: n, type: i[0].replace($, " ") }),
                            (s = s.slice(n.length))),
                        r.filter))
                            !(i = J[a].exec(s)) ||
                                (c[a] && !(i = c[a](i))) ||
                                ((n = i.shift()),
                                o.push({ value: n, type: a, matches: i }),
                                (s = s.slice(n.length)));
                        if (!n) break;
                    }
                    return t ? s.length : s ? oe.error(e) : k(e, l).slice(0);
                }),
            (s = oe.compile =
                function (e, t) {
                    var n,
                        r = [],
                        i = [],
                        o = E[e + " "];
                    if (!o) {
                        for (t || (t = a(e)), n = t.length; n--; )
                            (o = we(t[n]))[x] ? r.push(o) : i.push(o);
                        (o = E(e, Ce(i, r))).selector = e;
                    }
                    return o;
                }),
            (l = oe.select =
                function (e, t, i, o) {
                    var l,
                        c,
                        u,
                        d,
                        p,
                        f = "function" == typeof e && e,
                        h = !o && a((e = f.selector || e));
                    if (((i = i || []), 1 === h.length)) {
                        if (
                            (c = h[0] = h[0].slice(0)).length > 2 &&
                            "ID" === (u = c[0]).type &&
                            n.getById &&
                            9 === t.nodeType &&
                            m &&
                            r.relative[c[1].type]
                        ) {
                            if (
                                !(t = (r.find.ID(
                                    u.matches[0].replace(ne, re),
                                    t
                                ) || [])[0])
                            )
                                return i;
                            f && (t = t.parentNode),
                                (e = e.slice(c.shift().value.length));
                        }
                        for (
                            l = J.needsContext.test(e) ? 0 : c.length;
                            l-- && ((u = c[l]), !r.relative[(d = u.type)]);

                        )
                            if (
                                (p = r.find[d]) &&
                                (o = p(
                                    u.matches[0].replace(ne, re),
                                    (ee.test(c[0].type) && he(t.parentNode)) ||
                                        t
                                ))
                            ) {
                                if ((c.splice(l, 1), !(e = o.length && ge(c))))
                                    return j.apply(i, o), i;
                                break;
                            }
                    }
                    return (
                        (f || s(e, h))(
                            o,
                            t,
                            !m,
                            i,
                            (ee.test(e) && he(t.parentNode)) || t
                        ),
                        i
                    );
                }),
            (n.sortStable = x.split("").sort(N).join("") === x),
            (n.detectDuplicates = !!d),
            p(),
            (n.sortDetached = le(function (e) {
                return 1 & e.compareDocumentPosition(f.createElement("div"));
            })),
            le(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
                ce("type|href|height|width", function (e, t, n) {
                    return n
                        ? void 0
                        : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                le(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
                ce("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase()
                        ? void 0
                        : e.defaultValue;
                }),
            le(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                ce(P, function (e, t, n) {
                    var r;
                    return n
                        ? void 0
                        : !0 === e[t]
                        ? t.toLowerCase()
                        : (r = e.getAttributeNode(t)) && r.specified
                        ? r.value
                        : null;
                }),
            oe
        );
    })(e);
    (p.find = y),
        (p.expr = y.selectors),
        (p.expr[":"] = p.expr.pseudos),
        (p.unique = y.uniqueSort),
        (p.text = y.getText),
        (p.isXMLDoc = y.isXML),
        (p.contains = y.contains);
    var b = p.expr.match.needsContext,
        x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;
    function C(e, t, n) {
        if (p.isFunction(t))
            return p.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
            });
        if (t.nodeType)
            return p.grep(e, function (e) {
                return (e === t) !== n;
            });
        if ("string" == typeof t) {
            if (w.test(t)) return p.filter(t, e, n);
            t = p.filter(t, e);
        }
        return p.grep(e, function (e) {
            return p.inArray(e, t) >= 0 !== n;
        });
    }
    (p.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? p.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : p.find.matches(
                      e,
                      p.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        p.fn.extend({
            find: function (e) {
                var t,
                    n = [],
                    r = this,
                    i = r.length;
                if ("string" != typeof e)
                    return this.pushStack(
                        p(e).filter(function () {
                            for (t = 0; i > t; t++)
                                if (p.contains(r[t], this)) return !0;
                        })
                    );
                for (t = 0; i > t; t++) p.find(e, r[t], n);
                return (
                    ((n = this.pushStack(i > 1 ? p.unique(n) : n)).selector =
                        this.selector ? this.selector + " " + e : e),
                    n
                );
            },
            filter: function (e) {
                return this.pushStack(C(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(C(this, e || [], !0));
            },
            is: function (e) {
                return !!C(
                    this,
                    "string" == typeof e && b.test(e) ? p(e) : e || [],
                    !1
                ).length;
            },
        });
    var T,
        S = e.document,
        k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        E = (p.fn.init = function (e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (
                    !(n =
                        "<" === e.charAt(0) &&
                        ">" === e.charAt(e.length - 1) &&
                        e.length >= 3
                            ? [null, e, null]
                            : k.exec(e)) ||
                    (!n[1] && t)
                )
                    return !t || t.jquery
                        ? (t || T).find(e)
                        : this.constructor(t).find(e);
                if (n[1]) {
                    if (
                        ((t = t instanceof p ? t[0] : t),
                        p.merge(
                            this,
                            p.parseHTML(
                                n[1],
                                t && t.nodeType ? t.ownerDocument || t : S,
                                !0
                            )
                        ),
                        x.test(n[1]) && p.isPlainObject(t))
                    )
                        for (n in t)
                            p.isFunction(this[n])
                                ? this[n](t[n])
                                : this.attr(n, t[n]);
                    return this;
                }
                if ((r = S.getElementById(n[2])) && r.parentNode) {
                    if (r.id !== n[2]) return T.find(e);
                    (this.length = 1), (this[0] = r);
                }
                return (this.context = S), (this.selector = e), this;
            }
            return e.nodeType
                ? ((this.context = this[0] = e), (this.length = 1), this)
                : p.isFunction(e)
                ? void 0 !== T.ready
                    ? T.ready(e)
                    : e(p)
                : (void 0 !== e.selector &&
                      ((this.selector = e.selector),
                      (this.context = e.context)),
                  p.makeArray(e, this));
        });
    (E.prototype = p.fn), (T = p(S));
    var N = /^(?:parents|prev(?:Until|All))/,
        A = { children: !0, contents: !0, next: !0, prev: !0 };
    function q(e, t) {
        do {
            e = e[t];
        } while (e && 1 !== e.nodeType);
        return e;
    }
    p.extend({
        dir: function (e, t, n) {
            for (
                var r = [], i = e[t];
                i &&
                9 !== i.nodeType &&
                (void 0 === n || 1 !== i.nodeType || !p(i).is(n));

            )
                1 === i.nodeType && r.push(i), (i = i[t]);
            return r;
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
    }),
        p.fn.extend({
            has: function (e) {
                var t,
                    n = p(e, this),
                    r = n.length;
                return this.filter(function () {
                    for (t = 0; r > t; t++)
                        if (p.contains(this, n[t])) return !0;
                });
            },
            closest: function (e, t) {
                for (
                    var n,
                        r = 0,
                        i = this.length,
                        o = [],
                        a =
                            b.test(e) || "string" != typeof e
                                ? p(e, t || this.context)
                                : 0;
                    i > r;
                    r++
                )
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (a
                                ? a.index(n) > -1
                                : 1 === n.nodeType &&
                                  p.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
                return this.pushStack(o.length > 1 ? p.unique(o) : o);
            },
            index: function (e) {
                return e
                    ? "string" == typeof e
                        ? p.inArray(this[0], p(e))
                        : p.inArray(e.jquery ? e[0] : e, this)
                    : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
            },
            add: function (e, t) {
                return this.pushStack(p.unique(p.merge(this.get(), p(e, t))));
            },
            addBack: function (e) {
                return this.add(
                    null == e ? this.prevObject : this.prevObject.filter(e)
                );
            },
        }),
        p.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return p.dir(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return p.dir(e, "parentNode", n);
                },
                next: function (e) {
                    return q(e, "nextSibling");
                },
                prev: function (e) {
                    return q(e, "previousSibling");
                },
                nextAll: function (e) {
                    return p.dir(e, "nextSibling");
                },
                prevAll: function (e) {
                    return p.dir(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return p.dir(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return p.dir(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return p.sibling((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return p.sibling(e.firstChild);
                },
                contents: function (e) {
                    return p.nodeName(e, "iframe")
                        ? e.contentDocument || e.contentWindow.document
                        : p.merge([], e.childNodes);
                },
            },
            function (e, t) {
                p.fn[e] = function (n, r) {
                    var i = p.map(this, t, n);
                    return (
                        "Until" !== e.slice(-5) && (r = n),
                        r && "string" == typeof r && (i = p.filter(r, i)),
                        this.length > 1 &&
                            (A[e] || (i = p.unique(i)),
                            N.test(e) && (i = i.reverse())),
                        this.pushStack(i)
                    );
                };
            }
        );
    var D,
        _ = /\S+/g,
        L = {};
    function j() {
        S.addEventListener
            ? (S.removeEventListener("DOMContentLoaded", H, !1),
              e.removeEventListener("load", H, !1))
            : (S.detachEvent("onreadystatechange", H),
              e.detachEvent("onload", H));
    }
    function H() {
        (S.addEventListener ||
            "load" === event.type ||
            "complete" === S.readyState) &&
            (j(), p.ready());
    }
    (p.Callbacks = function (e) {
        e =
            "string" == typeof e
                ? L[e] ||
                  (function (e) {
                      var t = (L[e] = {});
                      return (
                          p.each(e.match(_) || [], function (e, n) {
                              t[n] = !0;
                          }),
                          t
                      );
                  })(e)
                : p.extend({}, e);
        var t,
            n,
            r,
            i,
            o,
            a,
            s = [],
            l = !e.once && [],
            c = function (d) {
                for (
                    n = e.memory && d,
                        r = !0,
                        o = a || 0,
                        a = 0,
                        i = s.length,
                        t = !0;
                    s && i > o;
                    o++
                )
                    if (!1 === s[o].apply(d[0], d[1]) && e.stopOnFalse) {
                        n = !1;
                        break;
                    }
                (t = !1),
                    s &&
                        (l
                            ? l.length && c(l.shift())
                            : n
                            ? (s = [])
                            : u.disable());
            },
            u = {
                add: function () {
                    if (s) {
                        var r = s.length;
                        !(function t(n) {
                            p.each(n, function (n, r) {
                                var i = p.type(r);
                                "function" === i
                                    ? (e.unique && u.has(r)) || s.push(r)
                                    : r && r.length && "string" !== i && t(r);
                            });
                        })(arguments),
                            t ? (i = s.length) : n && ((a = r), c(n));
                    }
                    return this;
                },
                remove: function () {
                    return (
                        s &&
                            p.each(arguments, function (e, n) {
                                for (var r; (r = p.inArray(n, s, r)) > -1; )
                                    s.splice(r, 1),
                                        t && (i >= r && i--, o >= r && o--);
                            }),
                        this
                    );
                },
                has: function (e) {
                    return e ? p.inArray(e, s) > -1 : !(!s || !s.length);
                },
                empty: function () {
                    return (s = []), (i = 0), this;
                },
                disable: function () {
                    return (s = l = n = void 0), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (l = void 0), n || u.disable(), this;
                },
                locked: function () {
                    return !l;
                },
                fireWith: function (e, n) {
                    return (
                        !s ||
                            (r && !l) ||
                            ((n = [e, (n = n || []).slice ? n.slice() : n]),
                            t ? l.push(n) : c(n)),
                        this
                    );
                },
                fire: function () {
                    return u.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return u;
    }),
        p.extend({
            Deferred: function (e) {
                var t = [
                        [
                            "resolve",
                            "done",
                            p.Callbacks("once memory"),
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            p.Callbacks("once memory"),
                            "rejected",
                        ],
                        ["notify", "progress", p.Callbacks("memory")],
                    ],
                    n = "pending",
                    r = {
                        state: function () {
                            return n;
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var e = arguments;
                            return p
                                .Deferred(function (n) {
                                    p.each(t, function (t, o) {
                                        var a = p.isFunction(e[t]) && e[t];
                                        i[o[1]](function () {
                                            var e =
                                                a && a.apply(this, arguments);
                                            e && p.isFunction(e.promise)
                                                ? e
                                                      .promise()
                                                      .done(n.resolve)
                                                      .fail(n.reject)
                                                      .progress(n.notify)
                                                : n[o[0] + "With"](
                                                      this === r
                                                          ? n.promise()
                                                          : this,
                                                      a ? [e] : arguments
                                                  );
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? p.extend(e, r) : r;
                        },
                    },
                    i = {};
                return (
                    (r.pipe = r.then),
                    p.each(t, function (e, o) {
                        var a = o[2],
                            s = o[3];
                        (r[o[1]] = a.add),
                            s &&
                                a.add(
                                    function () {
                                        n = s;
                                    },
                                    t[1 ^ e][2].disable,
                                    t[2][2].lock
                                ),
                            (i[o[0]] = function () {
                                return (
                                    i[o[0] + "With"](
                                        this === i ? r : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (i[o[0] + "With"] = a.fireWith);
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
                );
            },
            when: function (e) {
                var t,
                    n,
                    i,
                    o = 0,
                    a = r.call(arguments),
                    s = a.length,
                    l = 1 !== s || (e && p.isFunction(e.promise)) ? s : 0,
                    c = 1 === l ? e : p.Deferred(),
                    u = function (e, n, i) {
                        return function (o) {
                            (n[e] = this),
                                (i[e] =
                                    arguments.length > 1
                                        ? r.call(arguments)
                                        : o),
                                i === t
                                    ? c.notifyWith(n, i)
                                    : --l || c.resolveWith(n, i);
                        };
                    };
                if (s > 1)
                    for (
                        t = new Array(s), n = new Array(s), i = new Array(s);
                        s > o;
                        o++
                    )
                        a[o] && p.isFunction(a[o].promise)
                            ? a[o]
                                  .promise()
                                  .done(u(o, i, a))
                                  .fail(c.reject)
                                  .progress(u(o, n, t))
                            : --l;
                return l || c.resolveWith(i, a), c.promise();
            },
        }),
        (p.fn.ready = function (e) {
            return p.ready.promise().done(e), this;
        }),
        p.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? p.readyWait++ : p.ready(!0);
            },
            ready: function (e) {
                if (!0 === e ? !--p.readyWait : !p.isReady) {
                    if (!S.body) return setTimeout(p.ready);
                    (p.isReady = !0),
                        (!0 !== e && --p.readyWait > 0) ||
                            (D.resolveWith(S, [p]),
                            p.fn.triggerHandler &&
                                (p(S).triggerHandler("ready"),
                                p(S).off("ready")));
                }
            },
        }),
        (p.ready.promise = function (t) {
            if (!D)
                if (((D = p.Deferred()), "complete" === S.readyState))
                    setTimeout(p.ready);
                else if (S.addEventListener)
                    S.addEventListener("DOMContentLoaded", H, !1),
                        e.addEventListener("load", H, !1);
                else {
                    S.attachEvent("onreadystatechange", H),
                        e.attachEvent("onload", H);
                    var n = !1;
                    try {
                        n = null == e.frameElement && S.documentElement;
                    } catch (e) {}
                    n &&
                        n.doScroll &&
                        (function e() {
                            if (!p.isReady) {
                                try {
                                    n.doScroll("left");
                                } catch (t) {
                                    return setTimeout(e, 50);
                                }
                                j(), p.ready();
                            }
                        })();
                }
            return D.promise(t);
        });
    var F,
        P = "undefined";
    for (F in p(u)) break;
    (u.ownLast = "0" !== F),
        (u.inlineBlockNeedsLayout = !1),
        p(function () {
            var e, t, n, r;
            (n = S.getElementsByTagName("body")[0]) &&
                n.style &&
                ((t = S.createElement("div")),
                ((r = S.createElement("div")).style.cssText =
                    "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                n.appendChild(r).appendChild(t),
                typeof t.style.zoom !== P &&
                    ((t.style.cssText =
                        "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                    (u.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
                    e && (n.style.zoom = 1)),
                n.removeChild(r));
        }),
        (function () {
            var e = S.createElement("div");
            if (null == u.deleteExpando) {
                u.deleteExpando = !0;
                try {
                    delete e.test;
                } catch (e) {
                    u.deleteExpando = !1;
                }
            }
            e = null;
        })(),
        (p.acceptData = function (e) {
            var t = p.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (
                (1 === n || 9 === n) &&
                (!t || (!0 !== t && e.getAttribute("classid") === t))
            );
        });
    var O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        M = /([A-Z])/g;
    function B(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(M, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
                try {
                    n =
                        "true" === n ||
                        ("false" !== n &&
                            ("null" === n
                                ? null
                                : +n + "" === n
                                ? +n
                                : O.test(n)
                                ? p.parseJSON(n)
                                : n));
                } catch (e) {}
                p.data(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0;
    }
    function R(e, t, r, i) {
        if (p.acceptData(e)) {
            var o,
                a,
                s = p.expando,
                l = e.nodeType,
                c = l ? p.cache : e,
                u = l ? e[s] : e[s] && s;
            if (
                (u && c[u] && (i || c[u].data)) ||
                void 0 !== r ||
                "string" != typeof t
            )
                return (
                    u || (u = l ? (e[s] = n.pop() || p.guid++) : s),
                    c[u] || (c[u] = l ? {} : { toJSON: p.noop }),
                    ("object" == typeof t || "function" == typeof t) &&
                        (i
                            ? (c[u] = p.extend(c[u], t))
                            : (c[u].data = p.extend(c[u].data, t))),
                    (a = c[u]),
                    i || (a.data || (a.data = {}), (a = a.data)),
                    void 0 !== r && (a[p.camelCase(t)] = r),
                    "string" == typeof t
                        ? null == (o = a[t]) && (o = a[p.camelCase(t)])
                        : (o = a),
                    o
                );
        }
    }
    function W(e, t, n) {
        if (p.acceptData(e)) {
            var r,
                i,
                o = e.nodeType,
                a = o ? p.cache : e,
                s = o ? e[p.expando] : p.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    p.isArray(t)
                        ? (t = t.concat(p.map(t, p.camelCase)))
                        : t in r
                        ? (t = [t])
                        : (t = (t = p.camelCase(t)) in r ? [t] : t.split(" ")),
                        (i = t.length);
                    for (; i--; ) delete r[t[i]];
                    if (n ? !I(r) : !p.isEmptyObject(r)) return;
                }
                (n || (delete a[s].data, I(a[s]))) &&
                    (o
                        ? p.cleanData([e], !0)
                        : u.deleteExpando || a != a.window
                        ? delete a[s]
                        : (a[s] = null));
            }
        }
    }
    p.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        },
        hasData: function (e) {
            return (
                !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) &&
                !I(e)
            );
        },
        data: function (e, t, n) {
            return R(e, t, n);
        },
        removeData: function (e, t) {
            return W(e, t);
        },
        _data: function (e, t, n) {
            return R(e, t, n, !0);
        },
        _removeData: function (e, t) {
            return W(e, t, !0);
        },
    }),
        p.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (
                        this.length &&
                        ((i = p.data(o)),
                        1 === o.nodeType && !p._data(o, "parsedAttrs"))
                    ) {
                        for (n = a.length; n--; )
                            a[n] &&
                                0 === (r = a[n].name).indexOf("data-") &&
                                B(o, (r = p.camelCase(r.slice(5))), i[r]);
                        p._data(o, "parsedAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          p.data(this, e);
                      })
                    : arguments.length > 1
                    ? this.each(function () {
                          p.data(this, e, t);
                      })
                    : o
                    ? B(o, e, p.data(o, e))
                    : void 0;
            },
            removeData: function (e) {
                return this.each(function () {
                    p.removeData(this, e);
                });
            },
        }),
        p.extend({
            queue: function (e, t, n) {
                var r;
                return e
                    ? ((t = (t || "fx") + "queue"),
                      (r = p._data(e, t)),
                      n &&
                          (!r || p.isArray(n)
                              ? (r = p._data(e, t, p.makeArray(n)))
                              : r.push(n)),
                      r || [])
                    : void 0;
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = p.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = p._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                p.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    p._data(e, n) ||
                    p._data(e, n, {
                        empty: p.Callbacks("once memory").add(function () {
                            p._removeData(e, t + "queue"), p._removeData(e, n);
                        }),
                    })
                );
            },
        }),
        p.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? p.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = p.queue(this, e, t);
                              p._queueHooks(this, e),
                                  "fx" === e &&
                                      "inprogress" !== n[0] &&
                                      p.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    p.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = p.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                for (
                    "string" != typeof e && ((t = e), (e = void 0)),
                        e = e || "fx";
                    a--;

                )
                    (n = p._data(o[a], e + "queueHooks")) &&
                        n.empty &&
                        (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        z = ["Top", "Right", "Bottom", "Left"],
        U = function (e, t) {
            return (
                (e = t || e),
                "none" === p.css(e, "display") ||
                    !p.contains(e.ownerDocument, e)
            );
        },
        X = (p.access = function (e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === p.type(n))
                for (s in ((i = !0), n)) p.access(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                p.isFunction(r) || (a = !0),
                c &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((c = t),
                          (t = function (e, t, n) {
                              return c.call(p(e), n);
                          }))),
                t)
            )
                for (; l > s; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : o;
        }),
        G = /^(?:checkbox|radio)$/i;
    !(function () {
        var e = S.createElement("input"),
            t = S.createElement("div"),
            n = S.createDocumentFragment();
        if (
            ((t.innerHTML =
                "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (u.leadingWhitespace = 3 === t.firstChild.nodeType),
            (u.tbody = !t.getElementsByTagName("tbody").length),
            (u.htmlSerialize = !!t.getElementsByTagName("link").length),
            (u.html5Clone =
                "<:nav></:nav>" !==
                S.createElement("nav").cloneNode(!0).outerHTML),
            (e.type = "checkbox"),
            (e.checked = !0),
            n.appendChild(e),
            (u.appendChecked = e.checked),
            (t.innerHTML = "<textarea>x</textarea>"),
            (u.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
            n.appendChild(t),
            (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
            (u.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (u.noCloneEvent = !0),
            t.attachEvent &&
                (t.attachEvent("onclick", function () {
                    u.noCloneEvent = !1;
                }),
                t.cloneNode(!0).click()),
            null == u.deleteExpando)
        ) {
            u.deleteExpando = !0;
            try {
                delete t.test;
            } catch (e) {
                u.deleteExpando = !1;
            }
        }
    })(),
        (function () {
            var t,
                n,
                r = S.createElement("div");
            for (t in { submit: !0, change: !0, focusin: !0 })
                (n = "on" + t),
                    (u[t + "Bubbles"] = n in e) ||
                        (r.setAttribute(n, "t"),
                        (u[t + "Bubbles"] = !1 === r.attributes[n].expando));
            r = null;
        })();
    var V = /^(?:input|select|textarea)$/i,
        J = /^key/,
        Y = /^(?:mouse|pointer|contextmenu)|click/,
        Q = /^(?:focusinfocus|focusoutblur)$/,
        K = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0;
    }
    function ee() {
        return !1;
    }
    function te() {
        try {
            return S.activeElement;
        } catch (e) {}
    }
    function ne(e) {
        var t = re.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) for (; t.length; ) n.createElement(t.pop());
        return n;
    }
    (p.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                h,
                m,
                g,
                v = p._data(e);
            if (v) {
                for (
                    n.handler && ((n = (l = n).handler), (i = l.selector)),
                        n.guid || (n.guid = p.guid++),
                        (a = v.events) || (a = v.events = {}),
                        (u = v.handle) ||
                            ((u = v.handle =
                                function (e) {
                                    return typeof p === P ||
                                        (e && p.event.triggered === e.type)
                                        ? void 0
                                        : p.event.dispatch.apply(
                                              u.elem,
                                              arguments
                                          );
                                }),
                            (u.elem = e)),
                        s = (t = (t || "").match(_) || [""]).length;
                    s--;

                )
                    (h = g = (o = K.exec(t[s]) || [])[1]),
                        (m = (o[2] || "").split(".").sort()),
                        h &&
                            ((c = p.event.special[h] || {}),
                            (h = (i ? c.delegateType : c.bindType) || h),
                            (c = p.event.special[h] || {}),
                            (d = p.extend(
                                {
                                    type: h,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext:
                                        i && p.expr.match.needsContext.test(i),
                                    namespace: m.join("."),
                                },
                                l
                            )),
                            (f = a[h]) ||
                                (((f = a[h] = []).delegateCount = 0),
                                (c.setup && !1 !== c.setup.call(e, r, m, u)) ||
                                    (e.addEventListener
                                        ? e.addEventListener(h, u, !1)
                                        : e.attachEvent &&
                                          e.attachEvent("on" + h, u))),
                            c.add &&
                                (c.add.call(e, d),
                                d.handler.guid || (d.handler.guid = n.guid)),
                            i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                            (p.event.global[h] = !0));
                e = null;
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                l,
                c,
                u,
                d,
                f,
                h,
                m,
                g,
                v = p.hasData(e) && p._data(e);
            if (v && (u = v.events)) {
                for (c = (t = (t || "").match(_) || [""]).length; c--; )
                    if (
                        ((h = g = (s = K.exec(t[c]) || [])[1]),
                        (m = (s[2] || "").split(".").sort()),
                        h)
                    ) {
                        for (
                            d = p.event.special[h] || {},
                                f =
                                    u[
                                        (h =
                                            (r ? d.delegateType : d.bindType) ||
                                            h)
                                    ] || [],
                                s =
                                    s[2] &&
                                    new RegExp(
                                        "(^|\\.)" +
                                            m.join("\\.(?:.*\\.|)") +
                                            "(\\.|$)"
                                    ),
                                l = o = f.length;
                            o--;

                        )
                            (a = f[o]),
                                (!i && g !== a.origType) ||
                                    (n && n.guid !== a.guid) ||
                                    (s && !s.test(a.namespace)) ||
                                    (r &&
                                        r !== a.selector &&
                                        ("**" !== r || !a.selector)) ||
                                    (f.splice(o, 1),
                                    a.selector && f.delegateCount--,
                                    d.remove && d.remove.call(e, a));
                        l &&
                            !f.length &&
                            ((d.teardown &&
                                !1 !== d.teardown.call(e, m, v.handle)) ||
                                p.removeEvent(e, h, v.handle),
                            delete u[h]);
                    } else for (h in u) p.event.remove(e, h + t[c], n, r, !0);
                p.isEmptyObject(u) &&
                    (delete v.handle, p._removeData(e, "events"));
            }
        },
        trigger: function (t, n, r, i) {
            var o,
                a,
                s,
                l,
                u,
                d,
                f,
                h = [r || S],
                m = c.call(t, "type") ? t.type : t,
                g = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = d = r = r || S),
                3 !== r.nodeType &&
                    8 !== r.nodeType &&
                    !Q.test(m + p.event.triggered) &&
                    (m.indexOf(".") >= 0 &&
                        ((g = m.split(".")), (m = g.shift()), g.sort()),
                    (a = m.indexOf(":") < 0 && "on" + m),
                    ((t = t[p.expando]
                        ? t
                        : new p.Event(m, "object" == typeof t && t)).isTrigger =
                        i ? 2 : 3),
                    (t.namespace = g.join(".")),
                    (t.namespace_re = t.namespace
                        ? new RegExp(
                              "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                    (t.result = void 0),
                    t.target || (t.target = r),
                    (n = null == n ? [t] : p.makeArray(n, [t])),
                    (u = p.event.special[m] || {}),
                    i || !u.trigger || !1 !== u.trigger.apply(r, n)))
            ) {
                if (!i && !u.noBubble && !p.isWindow(r)) {
                    for (
                        l = u.delegateType || m,
                            Q.test(l + m) || (s = s.parentNode);
                        s;
                        s = s.parentNode
                    )
                        h.push(s), (d = s);
                    d === (r.ownerDocument || S) &&
                        h.push(d.defaultView || d.parentWindow || e);
                }
                for (f = 0; (s = h[f++]) && !t.isPropagationStopped(); )
                    (t.type = f > 1 ? l : u.bindType || m),
                        (o =
                            (p._data(s, "events") || {})[t.type] &&
                            p._data(s, "handle")) && o.apply(s, n),
                        (o = a && s[a]) &&
                            o.apply &&
                            p.acceptData(s) &&
                            ((t.result = o.apply(s, n)),
                            !1 === t.result && t.preventDefault());
                if (
                    ((t.type = m),
                    !i &&
                        !t.isDefaultPrevented() &&
                        (!u._default || !1 === u._default.apply(h.pop(), n)) &&
                        p.acceptData(r) &&
                        a &&
                        r[m] &&
                        !p.isWindow(r))
                ) {
                    (d = r[a]) && (r[a] = null), (p.event.triggered = m);
                    try {
                        r[m]();
                    } catch (e) {}
                    (p.event.triggered = void 0), d && (r[a] = d);
                }
                return t.result;
            }
        },
        dispatch: function (e) {
            e = p.event.fix(e);
            var t,
                n,
                i,
                o,
                a,
                s = [],
                l = r.call(arguments),
                c = (p._data(this, "events") || {})[e.type] || [],
                u = p.event.special[e.type] || {};
            if (
                ((l[0] = e),
                (e.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, e))
            ) {
                for (
                    s = p.event.handlers.call(this, e, c), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();

                )
                    for (
                        e.currentTarget = o.elem, a = 0;
                        (i = o.handlers[a++]) &&
                        !e.isImmediatePropagationStopped();

                    )
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
                            ((e.handleObj = i),
                            (e.data = i.data),
                            void 0 !==
                                (n = (
                                    (p.event.special[i.origType] || {})
                                        .handle || i.handler
                                ).apply(o.elem, l)) &&
                                !1 === (e.result = n) &&
                                (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (
                        1 === l.nodeType &&
                        (!0 !== l.disabled || "click" !== e.type)
                    ) {
                        for (i = [], o = 0; s > o; o++)
                            void 0 === i[(n = (r = t[o]).selector + " ")] &&
                                (i[n] = r.needsContext
                                    ? p(n, this).index(l) >= 0
                                    : p.find(n, this, null, [l]).length),
                                i[n] && i.push(r);
                        i.length && a.push({ elem: l, handlers: i });
                    }
            return (
                s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a
            );
        },
        fix: function (e) {
            if (e[p.expando]) return e;
            var t,
                n,
                r,
                i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (
                a ||
                    (this.fixHooks[i] = a =
                        Y.test(i)
                            ? this.mouseHooks
                            : J.test(i)
                            ? this.keyHooks
                            : {}),
                    r = a.props ? this.props.concat(a.props) : this.props,
                    e = new p.Event(o),
                    t = r.length;
                t--;

            )
                e[(n = r[t])] = o[n];
            return (
                e.target || (e.target = o.srcElement || S),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                (e.metaKey = !!e.metaKey),
                a.filter ? a.filter(e, o) : e
            );
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
            " "
        ),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return (
                    null == e.which &&
                        (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                );
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
            ),
            filter: function (e, t) {
                var n,
                    r,
                    i,
                    o = t.button,
                    a = t.fromElement;
                return (
                    null == e.pageX &&
                        null != t.clientX &&
                        ((i = (r = e.target.ownerDocument || S)
                            .documentElement),
                        (n = r.body),
                        (e.pageX =
                            t.clientX +
                            ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) -
                            ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
                        (e.pageY =
                            t.clientY +
                            ((i && i.scrollTop) || (n && n.scrollTop) || 0) -
                            ((i && i.clientTop) || (n && n.clientTop) || 0))),
                    !e.relatedTarget &&
                        a &&
                        (e.relatedTarget = a === e.target ? t.toElement : a),
                    e.which ||
                        void 0 === o ||
                        (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== te() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (e) {}
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === te() && this.blur
                        ? (this.blur(), !1)
                        : void 0;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return p.nodeName(this, "input") &&
                        "checkbox" === this.type &&
                        this.click
                        ? (this.click(), !1)
                        : void 0;
                },
                _default: function (e) {
                    return p.nodeName(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
        simulate: function (e, t, n, r) {
            var i = p.extend(new p.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {},
            });
            r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i),
                i.isDefaultPrevented() && n.preventDefault();
        },
    }),
        (p.removeEvent = S.removeEventListener
            ? function (e, t, n) {
                  e.removeEventListener && e.removeEventListener(t, n, !1);
              }
            : function (e, t, n) {
                  var r = "on" + t;
                  e.detachEvent &&
                      (typeof e[r] === P && (e[r] = null), e.detachEvent(r, n));
              }),
        (p.Event = function (e, t) {
            return this instanceof p.Event
                ? (e && e.type
                      ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented =
                            e.defaultPrevented ||
                            (void 0 === e.defaultPrevented &&
                                !1 === e.returnValue)
                                ? Z
                                : ee))
                      : (this.type = e),
                  t && p.extend(this, t),
                  (this.timeStamp = (e && e.timeStamp) || p.now()),
                  void (this[p.expando] = !0))
                : new p.Event(e, t);
        }),
        (p.Event.prototype = {
            isDefaultPrevented: ee,
            isPropagationStopped: ee,
            isImmediatePropagationStopped: ee,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Z),
                    e &&
                        (e.preventDefault
                            ? e.preventDefault()
                            : (e.returnValue = !1));
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Z),
                    e &&
                        (e.stopPropagation && e.stopPropagation(),
                        (e.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Z),
                    e &&
                        e.stopImmediatePropagation &&
                        e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        p.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, t) {
                p.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                            r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (
                            (!i || (i !== r && !p.contains(r, i))) &&
                                ((e.type = o.origType),
                                (n = o.handler.apply(this, arguments)),
                                (e.type = t)),
                            n
                        );
                    },
                };
            }
        ),
        u.submitBubbles ||
            (p.event.special.submit = {
                setup: function () {
                    return (
                        !p.nodeName(this, "form") &&
                        void p.event.add(
                            this,
                            "click._submit keypress._submit",
                            function (e) {
                                var t = e.target,
                                    n =
                                        p.nodeName(t, "input") ||
                                        p.nodeName(t, "button")
                                            ? t.form
                                            : void 0;
                                n &&
                                    !p._data(n, "submitBubbles") &&
                                    (p.event.add(
                                        n,
                                        "submit._submit",
                                        function (e) {
                                            e._submit_bubble = !0;
                                        }
                                    ),
                                    p._data(n, "submitBubbles", !0));
                            }
                        )
                    );
                },
                postDispatch: function (e) {
                    e._submit_bubble &&
                        (delete e._submit_bubble,
                        this.parentNode &&
                            !e.isTrigger &&
                            p.event.simulate("submit", this.parentNode, e, !0));
                },
                teardown: function () {
                    return (
                        !p.nodeName(this, "form") &&
                        void p.event.remove(this, "._submit")
                    );
                },
            }),
        u.changeBubbles ||
            (p.event.special.change = {
                setup: function () {
                    return V.test(this.nodeName)
                        ? (("checkbox" === this.type ||
                              "radio" === this.type) &&
                              (p.event.add(
                                  this,
                                  "propertychange._change",
                                  function (e) {
                                      "checked" ===
                                          e.originalEvent.propertyName &&
                                          (this._just_changed = !0);
                                  }
                              ),
                              p.event.add(this, "click._change", function (e) {
                                  this._just_changed &&
                                      !e.isTrigger &&
                                      (this._just_changed = !1),
                                      p.event.simulate("change", this, e, !0);
                              })),
                          !1)
                        : void p.event.add(
                              this,
                              "beforeactivate._change",
                              function (e) {
                                  var t = e.target;
                                  V.test(t.nodeName) &&
                                      !p._data(t, "changeBubbles") &&
                                      (p.event.add(
                                          t,
                                          "change._change",
                                          function (e) {
                                              !this.parentNode ||
                                                  e.isSimulated ||
                                                  e.isTrigger ||
                                                  p.event.simulate(
                                                      "change",
                                                      this.parentNode,
                                                      e,
                                                      !0
                                                  );
                                          }
                                      ),
                                      p._data(t, "changeBubbles", !0));
                              }
                          );
                },
                handle: function (e) {
                    var t = e.target;
                    return this !== t ||
                        e.isSimulated ||
                        e.isTrigger ||
                        ("radio" !== t.type && "checkbox" !== t.type)
                        ? e.handleObj.handler.apply(this, arguments)
                        : void 0;
                },
                teardown: function () {
                    return (
                        p.event.remove(this, "._change"), !V.test(this.nodeName)
                    );
                },
            }),
        u.focusinBubbles ||
            p.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    p.event.simulate(t, e.target, p.event.fix(e), !0);
                };
                p.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = p._data(r, t);
                        i || r.addEventListener(e, n, !0),
                            p._data(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = p._data(r, t) - 1;
                        i
                            ? p._data(r, t, i)
                            : (r.removeEventListener(e, n, !0),
                              p._removeData(r, t));
                    },
                };
            }),
        p.fn.extend({
            on: function (e, t, n, r, i) {
                var o, a;
                if ("object" == typeof e) {
                    for (o in ("string" != typeof t &&
                        ((n = n || t), (t = void 0)),
                    e))
                        this.on(o, t, n, e[o], i);
                    return this;
                }
                if (
                    (null == n && null == r
                        ? ((r = t), (n = t = void 0))
                        : null == r &&
                          ("string" == typeof t
                              ? ((r = n), (n = void 0))
                              : ((r = n), (n = t), (t = void 0))),
                    !1 === r)
                )
                    r = ee;
                else if (!r) return this;
                return (
                    1 === i &&
                        ((a = r),
                        (r = function (e) {
                            return p().off(e), a.apply(this, arguments);
                        }),
                        (r.guid = a.guid || (a.guid = p.guid++))),
                    this.each(function () {
                        p.event.add(this, e, r, n, t);
                    })
                );
            },
            one: function (e, t, n, r) {
                return this.on(e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                        p(e.delegateTarget).off(
                            r.namespace
                                ? r.origType + "." + r.namespace
                                : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this
                    );
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 === t || "function" == typeof t) &&
                        ((n = t), (t = void 0)),
                    !1 === n && (n = ee),
                    this.each(function () {
                        p.event.remove(this, e, n, t);
                    })
                );
            },
            trigger: function (e, t) {
                return this.each(function () {
                    p.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? p.event.trigger(e, t, n, !0) : void 0;
            },
        });
    var re =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ie = / jQuery\d+="(?:null|\d+)"/g,
        oe = new RegExp("<(?:" + re + ")[\\s/>]", "i"),
        ae = /^\s+/,
        se =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        le = /<([\w:]+)/,
        ce = /<tbody/i,
        ue = /<|&#?\w+;/,
        de = /<(?:script|style|link)/i,
        pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fe = /^$|\/(?:java|ecma)script/i,
        he = /^true\/(.*)/,
        me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: u.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
        },
        ve = ne(S).appendChild(S.createElement("div"));
    function ye(e, t) {
        var n,
            r,
            i = 0,
            o =
                typeof e.getElementsByTagName !== P
                    ? e.getElementsByTagName(t || "*")
                    : typeof e.querySelectorAll !== P
                    ? e.querySelectorAll(t || "*")
                    : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
                !t || p.nodeName(r, t) ? o.push(r) : p.merge(o, ye(r, t));
        return void 0 === t || (t && p.nodeName(e, t)) ? p.merge([e], o) : o;
    }
    function be(e) {
        G.test(e.type) && (e.defaultChecked = e.checked);
    }
    function xe(e, t) {
        return p.nodeName(e, "table") &&
            p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
            ? e.getElementsByTagName("tbody")[0] ||
                  e.appendChild(e.ownerDocument.createElement("tbody"))
            : e;
    }
    function we(e) {
        return (e.type = (null !== p.find.attr(e, "type")) + "/" + e.type), e;
    }
    function Ce(e) {
        var t = he.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function Te(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            p._data(n, "globalEval", !t || p._data(t[r], "globalEval"));
    }
    function Se(e, t) {
        if (1 === t.nodeType && p.hasData(e)) {
            var n,
                r,
                i,
                o = p._data(e),
                a = p._data(t, o),
                s = o.events;
            if (s)
                for (n in (delete a.handle, (a.events = {}), s))
                    for (r = 0, i = s[n].length; i > r; r++)
                        p.event.add(t, n, s[n][r]);
            a.data && (a.data = p.extend({}, a.data));
        }
    }
    function ke(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (
                ((n = t.nodeName.toLowerCase()),
                !u.noCloneEvent && t[p.expando])
            ) {
                for (r in (i = p._data(t)).events)
                    p.removeEvent(t, r, i.handle);
                t.removeAttribute(p.expando);
            }
            "script" === n && t.text !== e.text
                ? ((we(t).text = e.text), Ce(t))
                : "object" === n
                ? (t.parentNode && (t.outerHTML = e.outerHTML),
                  u.html5Clone &&
                      e.innerHTML &&
                      !p.trim(t.innerHTML) &&
                      (t.innerHTML = e.innerHTML))
                : "input" === n && G.test(e.type)
                ? ((t.defaultChecked = t.checked = e.checked),
                  t.value !== e.value && (t.value = e.value))
                : "option" === n
                ? (t.defaultSelected = t.selected = e.defaultSelected)
                : ("input" === n || "textarea" === n) &&
                  (t.defaultValue = e.defaultValue);
        }
    }
    (ge.optgroup = ge.option),
        (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td),
        p.extend({
            clone: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    l = p.contains(e.ownerDocument, e);
                if (
                    (u.html5Clone ||
                    p.isXMLDoc(e) ||
                    !oe.test("<" + e.nodeName + ">")
                        ? (o = e.cloneNode(!0))
                        : ((ve.innerHTML = e.outerHTML),
                          ve.removeChild((o = ve.firstChild))),
                    !(
                        (u.noCloneEvent && u.noCloneChecked) ||
                        (1 !== e.nodeType && 11 !== e.nodeType) ||
                        p.isXMLDoc(e)
                    ))
                )
                    for (r = ye(o), s = ye(e), a = 0; null != (i = s[a]); ++a)
                        r[a] && ke(i, r[a]);
                if (t)
                    if (n)
                        for (
                            s = s || ye(e), r = r || ye(o), a = 0;
                            null != (i = s[a]);
                            a++
                        )
                            Se(i, r[a]);
                    else Se(e, o);
                return (
                    (r = ye(o, "script")).length > 0 &&
                        Te(r, !l && ye(e, "script")),
                    (r = s = i = null),
                    o
                );
            },
            buildFragment: function (e, t, n, r) {
                for (
                    var i,
                        o,
                        a,
                        s,
                        l,
                        c,
                        d,
                        f = e.length,
                        h = ne(t),
                        m = [],
                        g = 0;
                    f > g;
                    g++
                )
                    if ((o = e[g]) || 0 === o)
                        if ("object" === p.type(o))
                            p.merge(m, o.nodeType ? [o] : o);
                        else if (ue.test(o)) {
                            for (
                                s = s || h.appendChild(t.createElement("div")),
                                    l = (le.exec(o) || [
                                        "",
                                        "",
                                    ])[1].toLowerCase(),
                                    d = ge[l] || ge._default,
                                    s.innerHTML =
                                        d[1] +
                                        o.replace(se, "<$1></$2>") +
                                        d[2],
                                    i = d[0];
                                i--;

                            )
                                s = s.lastChild;
                            if (
                                (!u.leadingWhitespace &&
                                    ae.test(o) &&
                                    m.push(t.createTextNode(ae.exec(o)[0])),
                                !u.tbody)
                            )
                                for (
                                    i =
                                        (o =
                                            "table" !== l || ce.test(o)
                                                ? "<table>" !== d[1] ||
                                                  ce.test(o)
                                                    ? 0
                                                    : s
                                                : s.firstChild) &&
                                        o.childNodes.length;
                                    i--;

                                )
                                    p.nodeName(
                                        (c = o.childNodes[i]),
                                        "tbody"
                                    ) &&
                                        !c.childNodes.length &&
                                        o.removeChild(c);
                            for (
                                p.merge(m, s.childNodes), s.textContent = "";
                                s.firstChild;

                            )
                                s.removeChild(s.firstChild);
                            s = h.lastChild;
                        } else m.push(t.createTextNode(o));
                for (
                    s && h.removeChild(s),
                        u.appendChecked || p.grep(ye(m, "input"), be),
                        g = 0;
                    (o = m[g++]);

                )
                    if (
                        (!r || -1 === p.inArray(o, r)) &&
                        ((a = p.contains(o.ownerDocument, o)),
                        (s = ye(h.appendChild(o), "script")),
                        a && Te(s),
                        n)
                    )
                        for (i = 0; (o = s[i++]); )
                            fe.test(o.type || "") && n.push(o);
                return (s = null), h;
            },
            cleanData: function (e, t) {
                for (
                    var r,
                        i,
                        o,
                        a,
                        s = 0,
                        l = p.expando,
                        c = p.cache,
                        d = u.deleteExpando,
                        f = p.event.special;
                    null != (r = e[s]);
                    s++
                )
                    if ((t || p.acceptData(r)) && (a = (o = r[l]) && c[o])) {
                        if (a.events)
                            for (i in a.events)
                                f[i]
                                    ? p.event.remove(r, i)
                                    : p.removeEvent(r, i, a.handle);
                        c[o] &&
                            (delete c[o],
                            d
                                ? delete r[l]
                                : typeof r.removeAttribute !== P
                                ? r.removeAttribute(l)
                                : (r[l] = null),
                            n.push(o));
                    }
            },
        }),
        p.fn.extend({
            text: function (e) {
                return X(
                    this,
                    function (e) {
                        return void 0 === e
                            ? p.text(this)
                            : this.empty().append(
                                  (
                                      (this[0] && this[0].ownerDocument) ||
                                      S
                                  ).createTextNode(e)
                              );
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return this.domManip(arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        xe(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = xe(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            remove: function (e, t) {
                for (
                    var n, r = e ? p.filter(e, this) : this, i = 0;
                    null != (n = r[i]);
                    i++
                )
                    t || 1 !== n.nodeType || p.cleanData(ye(n)),
                        n.parentNode &&
                            (t &&
                                p.contains(n.ownerDocument, n) &&
                                Te(ye(n, "script")),
                            n.parentNode.removeChild(n));
                return this;
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (
                        1 === e.nodeType && p.cleanData(ye(e, !1));
                        e.firstChild;

                    )
                        e.removeChild(e.firstChild);
                    e.options &&
                        p.nodeName(e, "select") &&
                        (e.options.length = 0);
                }
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return p.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return X(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e)
                            return 1 === t.nodeType
                                ? t.innerHTML.replace(ie, "")
                                : void 0;
                        if (
                            !(
                                "string" != typeof e ||
                                de.test(e) ||
                                (!u.htmlSerialize && oe.test(e)) ||
                                (!u.leadingWhitespace && ae.test(e)) ||
                                ge[(le.exec(e) || ["", ""])[1].toLowerCase()]
                            )
                        ) {
                            e = e.replace(se, "<$1></$2>");
                            try {
                                for (; r > n; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (p.cleanData(ye(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = arguments[0];
                return (
                    this.domManip(arguments, function (t) {
                        (e = this.parentNode),
                            p.cleanData(ye(this)),
                            e && e.replaceChild(t, this);
                    }),
                    e && (e.length || e.nodeType) ? this : this.remove()
                );
            },
            detach: function (e) {
                return this.remove(e, !0);
            },
            domManip: function (e, t) {
                e = i.apply([], e);
                var n,
                    r,
                    o,
                    a,
                    s,
                    l,
                    c = 0,
                    d = this.length,
                    f = this,
                    h = d - 1,
                    m = e[0],
                    g = p.isFunction(m);
                if (
                    g ||
                    (d > 1 &&
                        "string" == typeof m &&
                        !u.checkClone &&
                        pe.test(m))
                )
                    return this.each(function (n) {
                        var r = f.eq(n);
                        g && (e[0] = m.call(this, n, r.html())),
                            r.domManip(e, t);
                    });
                if (
                    d &&
                    ((n = (l = p.buildFragment(
                        e,
                        this[0].ownerDocument,
                        !1,
                        this
                    )).firstChild),
                    1 === l.childNodes.length && (l = n),
                    n)
                ) {
                    for (
                        o = (a = p.map(ye(l, "script"), we)).length;
                        d > c;
                        c++
                    )
                        (r = l),
                            c !== h &&
                                ((r = p.clone(r, !0, !0)),
                                o && p.merge(a, ye(r, "script"))),
                            t.call(this[c], r, c);
                    if (o)
                        for (
                            s = a[a.length - 1].ownerDocument,
                                p.map(a, Ce),
                                c = 0;
                            o > c;
                            c++
                        )
                            (r = a[c]),
                                fe.test(r.type || "") &&
                                    !p._data(r, "globalEval") &&
                                    p.contains(s, r) &&
                                    (r.src
                                        ? p._evalUrl && p._evalUrl(r.src)
                                        : p.globalEval(
                                              (
                                                  r.text ||
                                                  r.textContent ||
                                                  r.innerHTML ||
                                                  ""
                                              ).replace(me, "")
                                          ));
                    l = n = null;
                }
                return this;
            },
        }),
        p.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, t) {
                p.fn[e] = function (e) {
                    for (
                        var n, r = 0, i = [], a = p(e), s = a.length - 1;
                        s >= r;
                        r++
                    )
                        (n = r === s ? this : this.clone(!0)),
                            p(a[r])[t](n),
                            o.apply(i, n.get());
                    return this.pushStack(i);
                };
            }
        );
    var Ee,
        Ne = {};
    function Ae(t, n) {
        var r,
            i = p(n.createElement(t)).appendTo(n.body),
            o =
                e.getDefaultComputedStyle &&
                (r = e.getDefaultComputedStyle(i[0]))
                    ? r.display
                    : p.css(i[0], "display");
        return i.detach(), o;
    }
    function qe(e) {
        var t = S,
            n = Ne[e];
        return (
            n ||
                (("none" !== (n = Ae(e, t)) && n) ||
                    ((t = (
                        (Ee = (
                            Ee ||
                            p("<iframe frameborder='0' width='0' height='0'/>")
                        ).appendTo(t.documentElement))[0].contentWindow ||
                        Ee[0].contentDocument
                    ).document).write(),
                    t.close(),
                    (n = Ae(e, t)),
                    Ee.detach()),
                (Ne[e] = n)),
            n
        );
    }
    !(function () {
        var e;
        u.shrinkWrapBlocks = function () {
            return null != e
                ? e
                : ((e = !1),
                  (n = S.getElementsByTagName("body")[0]) && n.style
                      ? ((t = S.createElement("div")),
                        ((r = S.createElement("div")).style.cssText =
                            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                        n.appendChild(r).appendChild(t),
                        typeof t.style.zoom !== P &&
                            ((t.style.cssText =
                                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                            (t.appendChild(S.createElement("div")).style.width =
                                "5px"),
                            (e = 3 !== t.offsetWidth)),
                        n.removeChild(r),
                        e)
                      : void 0);
            var t, n, r;
        };
    })();
    var De,
        _e,
        Le = /^margin/,
        je = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        He = /^(top|right|bottom|left)$/;
    function Fe(e, t) {
        return {
            get: function () {
                var n = e();
                if (null != n)
                    return n
                        ? void delete this.get
                        : (this.get = t).apply(this, arguments);
            },
        };
    }
    e.getComputedStyle
        ? ((De = function (t) {
              return t.ownerDocument.defaultView.opener
                  ? t.ownerDocument.defaultView.getComputedStyle(t, null)
                  : e.getComputedStyle(t, null);
          }),
          (_e = function (e, t, n) {
              var r,
                  i,
                  o,
                  a,
                  s = e.style;
              return (
                  (a = (n = n || De(e))
                      ? n.getPropertyValue(t) || n[t]
                      : void 0),
                  n &&
                      ("" !== a ||
                          p.contains(e.ownerDocument, e) ||
                          (a = p.style(e, t)),
                      je.test(a) &&
                          Le.test(t) &&
                          ((r = s.width),
                          (i = s.minWidth),
                          (o = s.maxWidth),
                          (s.minWidth = s.maxWidth = s.width = a),
                          (a = n.width),
                          (s.width = r),
                          (s.minWidth = i),
                          (s.maxWidth = o))),
                  void 0 === a ? a : a + ""
              );
          }))
        : S.documentElement.currentStyle &&
          ((De = function (e) {
              return e.currentStyle;
          }),
          (_e = function (e, t, n) {
              var r,
                  i,
                  o,
                  a,
                  s = e.style;
              return (
                  null == (a = (n = n || De(e)) ? n[t] : void 0) &&
                      s &&
                      s[t] &&
                      (a = s[t]),
                  je.test(a) &&
                      !He.test(t) &&
                      ((r = s.left),
                      (o = (i = e.runtimeStyle) && i.left) &&
                          (i.left = e.currentStyle.left),
                      (s.left = "fontSize" === t ? "1em" : a),
                      (a = s.pixelLeft + "px"),
                      (s.left = r),
                      o && (i.left = o)),
                  void 0 === a ? a : a + "" || "auto"
              );
          })),
        (function () {
            var t, n, r, i, o, a, s;
            if (
                (((t = S.createElement("div")).innerHTML =
                    "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (n = (r = t.getElementsByTagName("a")[0]) && r.style))
            ) {
                function l() {
                    var t, n, r, l;
                    (n = S.getElementsByTagName("body")[0]) &&
                        n.style &&
                        ((t = S.createElement("div")),
                        ((r = S.createElement("div")).style.cssText =
                            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                        n.appendChild(r).appendChild(t),
                        (t.style.cssText =
                            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                        (i = o = !1),
                        (s = !0),
                        e.getComputedStyle &&
                            ((i =
                                "1%" !==
                                (e.getComputedStyle(t, null) || {}).top),
                            (o =
                                "4px" ===
                                (
                                    e.getComputedStyle(t, null) || {
                                        width: "4px",
                                    }
                                ).width),
                            ((l = t.appendChild(
                                S.createElement("div")
                            )).style.cssText = t.style.cssText =
                                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                            (l.style.marginRight = l.style.width = "0"),
                            (t.style.width = "1px"),
                            (s = !parseFloat(
                                (e.getComputedStyle(l, null) || {}).marginRight
                            )),
                            t.removeChild(l)),
                        (t.innerHTML =
                            "<table><tr><td></td><td>t</td></tr></table>"),
                        ((l = t.getElementsByTagName("td"))[0].style.cssText =
                            "margin:0;border:0;padding:0;display:none"),
                        (a = 0 === l[0].offsetHeight) &&
                            ((l[0].style.display = ""),
                            (l[1].style.display = "none"),
                            (a = 0 === l[0].offsetHeight)),
                        n.removeChild(r));
                }
                (n.cssText = "float:left;opacity:.5"),
                    (u.opacity = "0.5" === n.opacity),
                    (u.cssFloat = !!n.cssFloat),
                    (t.style.backgroundClip = "content-box"),
                    (t.cloneNode(!0).style.backgroundClip = ""),
                    (u.clearCloneStyle =
                        "content-box" === t.style.backgroundClip),
                    (u.boxSizing =
                        "" === n.boxSizing ||
                        "" === n.MozBoxSizing ||
                        "" === n.WebkitBoxSizing),
                    p.extend(u, {
                        reliableHiddenOffsets: function () {
                            return null == a && l(), a;
                        },
                        boxSizingReliable: function () {
                            return null == o && l(), o;
                        },
                        pixelPosition: function () {
                            return null == i && l(), i;
                        },
                        reliableMarginRight: function () {
                            return null == s && l(), s;
                        },
                    });
            }
        })(),
        (p.swap = function (e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
            return i;
        });
    var Pe = /alpha\([^)]*\)/i,
        Oe = /opacity\s*=\s*([^)]*)/,
        Me = /^(none|table(?!-c[ea]).+)/,
        Be = new RegExp("^(" + $ + ")(.*)$", "i"),
        Ie = new RegExp("^([+-])=(" + $ + ")", "i"),
        Re = { position: "absolute", visibility: "hidden", display: "block" },
        We = { letterSpacing: "0", fontWeight: "400" },
        $e = ["Webkit", "O", "Moz", "ms"];
    function ze(e, t) {
        if (t in e) return t;
        for (
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = t,
                i = $e.length;
            i--;

        )
            if ((t = $e[i] + n) in e) return t;
        return r;
    }
    function Ue(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
            (r = e[a]).style &&
                ((o[a] = p._data(r, "olddisplay")),
                (n = r.style.display),
                t
                    ? (o[a] || "none" !== n || (r.style.display = ""),
                      "" === r.style.display &&
                          U(r) &&
                          (o[a] = p._data(r, "olddisplay", qe(r.nodeName))))
                    : ((i = U(r)),
                      ((n && "none" !== n) || !i) &&
                          p._data(
                              r,
                              "olddisplay",
                              i ? n : p.css(r, "display")
                          )));
        for (a = 0; s > a; a++)
            (r = e[a]).style &&
                ((t && "none" !== r.style.display && "" !== r.style.display) ||
                    (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    function Xe(e, t, n) {
        var r = Be.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function Ge(e, t, n, r, i) {
        for (
            var o =
                    n === (r ? "border" : "content")
                        ? 4
                        : "width" === t
                        ? 1
                        : 0,
                a = 0;
            4 > o;
            o += 2
        )
            "margin" === n && (a += p.css(e, n + z[o], !0, i)),
                r
                    ? ("content" === n &&
                          (a -= p.css(e, "padding" + z[o], !0, i)),
                      "margin" !== n &&
                          (a -= p.css(e, "border" + z[o] + "Width", !0, i)))
                    : ((a += p.css(e, "padding" + z[o], !0, i)),
                      "padding" !== n &&
                          (a += p.css(e, "border" + z[o] + "Width", !0, i)));
        return a;
    }
    function Ve(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = De(e),
            a = u.boxSizing && "border-box" === p.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (
                ((0 > (i = _e(e, t, o)) || null == i) && (i = e.style[t]),
                je.test(i))
            )
                return i;
            (r = a && (u.boxSizingReliable() || i === e.style[t])),
                (i = parseFloat(i) || 0);
        }
        return i + Ge(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function Je(e, t, n, r, i) {
        return new Je.prototype.init(e, t, n, r, i);
    }
    p.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: { float: u.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = p.camelCase(t),
                    l = e.style;
                if (
                    ((t = p.cssProps[s] || (p.cssProps[s] = ze(l, s))),
                    (a = p.cssHooks[t] || p.cssHooks[s]),
                    void 0 === n)
                )
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                        ? i
                        : l[t];
                if (
                    ("string" === (o = typeof n) &&
                        (i = Ie.exec(n)) &&
                        ((n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t))),
                        (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o || p.cssNumber[s] || (n += "px"),
                        u.clearCloneStyle ||
                            "" !== n ||
                            0 !== t.indexOf("background") ||
                            (l[t] = "inherit"),
                        !a || !("set" in a) || void 0 !== (n = a.set(e, n, r))))
                )
                    try {
                        l[t] = n;
                    } catch (e) {}
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = p.camelCase(t);
            return (
                (t = p.cssProps[s] || (p.cssProps[s] = ze(e.style, s))),
                (a = p.cssHooks[t] || p.cssHooks[s]) &&
                    "get" in a &&
                    (o = a.get(e, !0, n)),
                void 0 === o && (o = _e(e, t, r)),
                "normal" === o && t in We && (o = We[t]),
                "" === n || n
                    ? ((i = parseFloat(o)),
                      !0 === n || p.isNumeric(i) ? i || 0 : o)
                    : o
            );
        },
    }),
        p.each(["height", "width"], function (e, t) {
            p.cssHooks[t] = {
                get: function (e, n, r) {
                    return n
                        ? Me.test(p.css(e, "display")) && 0 === e.offsetWidth
                            ? p.swap(e, Re, function () {
                                  return Ve(e, t, r);
                              })
                            : Ve(e, t, r)
                        : void 0;
                },
                set: function (e, n, r) {
                    var i = r && De(e);
                    return Xe(
                        0,
                        n,
                        r
                            ? Ge(
                                  e,
                                  t,
                                  r,
                                  u.boxSizing &&
                                      "border-box" ===
                                          p.css(e, "boxSizing", !1, i),
                                  i
                              )
                            : 0
                    );
                },
            };
        }),
        u.opacity ||
            (p.cssHooks.opacity = {
                get: function (e, t) {
                    return Oe.test(
                        (t && e.currentStyle
                            ? e.currentStyle.filter
                            : e.style.filter) || ""
                    )
                        ? 0.01 * parseFloat(RegExp.$1) + ""
                        : t
                        ? "1"
                        : "";
                },
                set: function (e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = p.isNumeric(t)
                            ? "alpha(opacity=" + 100 * t + ")"
                            : "",
                        o = (r && r.filter) || n.filter || "";
                    (n.zoom = 1),
                        ((t >= 1 || "" === t) &&
                            "" === p.trim(o.replace(Pe, "")) &&
                            n.removeAttribute &&
                            (n.removeAttribute("filter"),
                            "" === t || (r && !r.filter))) ||
                            (n.filter = Pe.test(o)
                                ? o.replace(Pe, i)
                                : o + " " + i);
                },
            }),
        (p.cssHooks.marginRight = Fe(u.reliableMarginRight, function (e, t) {
            return t
                ? p.swap(e, { display: "inline-block" }, _e, [e, "marginRight"])
                : void 0;
        })),
        p.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (p.cssHooks[e + t] = {
                expand: function (n) {
                    for (
                        var r = 0,
                            i = {},
                            o = "string" == typeof n ? n.split(" ") : [n];
                        4 > r;
                        r++
                    )
                        i[e + z[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
                Le.test(e) || (p.cssHooks[e + t].set = Xe);
        }),
        p.fn.extend({
            css: function (e, t) {
                return X(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (p.isArray(t)) {
                            for (r = De(e), i = t.length; i > a; a++)
                                o[t[a]] = p.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? p.style(e, t, n) : p.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
            show: function () {
                return Ue(this, !0);
            },
            hide: function () {
                return Ue(this);
            },
            toggle: function (e) {
                return "boolean" == typeof e
                    ? e
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          U(this) ? p(this).show() : p(this).hide();
                      });
            },
        }),
        (p.Tween = Je),
        (Je.prototype = {
            constructor: Je,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || "swing"),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (p.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = Je.propHooks[this.prop];
                return e && e.get
                    ? e.get(this)
                    : Je.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = Je.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                              p.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Je.propHooks._default.set(this),
                    this
                );
            },
        }),
        (Je.prototype.init.prototype = Je.prototype),
        (Je.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] ||
                        (e.elem.style && null != e.elem.style[e.prop])
                        ? (t = p.css(e.elem, e.prop, "")) && "auto" !== t
                            ? t
                            : 0
                        : e.elem[e.prop];
                },
                set: function (e) {
                    p.fx.step[e.prop]
                        ? p.fx.step[e.prop](e)
                        : e.elem.style &&
                          (null != e.elem.style[p.cssProps[e.prop]] ||
                              p.cssHooks[e.prop])
                        ? p.style(e.elem, e.prop, e.now + e.unit)
                        : (e.elem[e.prop] = e.now);
                },
            },
        }),
        (Je.propHooks.scrollTop = Je.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        (p.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
        }),
        (p.fx = Je.prototype.init),
        (p.fx.step = {});
    var Ye,
        Qe,
        Ke = /^(?:toggle|show|hide)$/,
        Ze = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    l,
                    c,
                    d = this,
                    f = {},
                    h = e.style,
                    m = e.nodeType && U(e),
                    g = p._data(e, "fxshow");
                for (r in (n.queue ||
                    (null == (s = p._queueHooks(e, "fx")).unqueued &&
                        ((s.unqueued = 0),
                        (l = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || l();
                        })),
                    s.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            s.unqueued--,
                                p.queue(e, "fx").length || s.empty.fire();
                        });
                    })),
                1 === e.nodeType &&
                    ("height" in t || "width" in t) &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    (c = p.css(e, "display")),
                    "inline" ===
                        ("none" === c
                            ? p._data(e, "olddisplay") || qe(e.nodeName)
                            : c) &&
                        "none" === p.css(e, "float") &&
                        (u.inlineBlockNeedsLayout && "inline" !== qe(e.nodeName)
                            ? (h.zoom = 1)
                            : (h.display = "inline-block"))),
                n.overflow &&
                    ((h.overflow = "hidden"),
                    u.shrinkWrapBlocks() ||
                        d.always(function () {
                            (h.overflow = n.overflow[0]),
                                (h.overflowX = n.overflow[1]),
                                (h.overflowY = n.overflow[2]);
                        })),
                t))
                    if (((i = t[r]), Ke.exec(i))) {
                        if (
                            (delete t[r],
                            (o = o || "toggle" === i),
                            i === (m ? "hide" : "show"))
                        ) {
                            if ("show" !== i || !g || void 0 === g[r]) continue;
                            m = !0;
                        }
                        f[r] = (g && g[r]) || p.style(e, r);
                    } else c = void 0;
                if (p.isEmptyObject(f))
                    "inline" === ("none" === c ? qe(e.nodeName) : c) &&
                        (h.display = c);
                else
                    for (r in (g
                        ? "hidden" in g && (m = g.hidden)
                        : (g = p._data(e, "fxshow", {})),
                    o && (g.hidden = !m),
                    m
                        ? p(e).show()
                        : d.done(function () {
                              p(e).hide();
                          }),
                    d.done(function () {
                        var t;
                        for (t in (p._removeData(e, "fxshow"), f))
                            p.style(e, t, f[t]);
                    }),
                    f))
                        (a = ot(m ? g[r] : 0, r, d)),
                            r in g ||
                                ((g[r] = a.start),
                                m &&
                                    ((a.end = a.start),
                                    (a.start =
                                        "width" === r || "height" === r
                                            ? 1
                                            : 0)));
            },
        ],
        nt = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Ze.exec(t),
                        o = (i && i[3]) || (p.cssNumber[e] ? "" : "px"),
                        a =
                            (p.cssNumber[e] || ("px" !== o && +r)) &&
                            Ze.exec(p.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        (o = o || a[3]), (i = i || []), (a = +r || 1);
                        do {
                            (a /= s = s || ".5"), p.style(n.elem, e, a + o);
                        } while (s !== (s = n.cur() / r) && 1 !== s && --l);
                    }
                    return (
                        i &&
                            ((a = n.start = +a || +r || 0),
                            (n.unit = o),
                            (n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2])),
                        n
                    );
                },
            ],
        };
    function rt() {
        return (
            setTimeout(function () {
                Ye = void 0;
            }),
            (Ye = p.now())
        );
    }
    function it(e, t) {
        var n,
            r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            r["margin" + (n = z[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function ot(e, t, n) {
        for (
            var r, i = (nt[t] || []).concat(nt["*"]), o = 0, a = i.length;
            a > o;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function at(e, t, n) {
        var r,
            i,
            o = 0,
            a = tt.length,
            s = p.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (i) return !1;
                for (
                    var t = Ye || rt(),
                        n = Math.max(0, c.startTime + c.duration - t),
                        r = 1 - (n / c.duration || 0),
                        o = 0,
                        a = c.tweens.length;
                    a > o;
                    o++
                )
                    c.tweens[o].run(r);
                return (
                    s.notifyWith(e, [c, r, n]),
                    1 > r && a ? n : (s.resolveWith(e, [c]), !1)
                );
            },
            c = s.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ye || rt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = p.Tween(
                        e,
                        c.opts,
                        t,
                        n,
                        c.opts.specialEasing[t] || c.opts.easing
                    );
                    return c.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) c.tweens[n].run(1);
                    return (
                        t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                        this
                    );
                },
            }),
            u = c.props;
        for (
            (function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (
                        ((i = t[(r = p.camelCase(n))]),
                        (o = e[n]),
                        p.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                        n !== r && ((e[r] = o), delete e[n]),
                        (a = p.cssHooks[r]) && ("expand" in a))
                    )
                        for (n in ((o = a.expand(o)), delete e[r], o))
                            (n in e) || ((e[n] = o[n]), (t[n] = i));
                    else t[r] = i;
            })(u, c.opts.specialEasing);
            a > o;
            o++
        )
            if ((r = tt[o].call(c, e, u, c.opts))) return r;
        return (
            p.map(u, ot, c),
            p.isFunction(c.opts.start) && c.opts.start.call(e, c),
            p.fx.timer(p.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always)
        );
    }
    (p.Animation = p.extend(at, {
        tweener: function (e, t) {
            p.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
            for (var n, r = 0, i = e.length; i > r; r++)
                (n = e[r]), (nt[n] = nt[n] || []), nt[n].unshift(t);
        },
        prefilter: function (e, t) {
            t ? tt.unshift(e) : tt.push(e);
        },
    })),
        (p.speed = function (e, t, n) {
            var r =
                e && "object" == typeof e
                    ? p.extend({}, e)
                    : {
                          complete: n || (!n && t) || (p.isFunction(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !p.isFunction(t) && t),
                      };
            return (
                (r.duration = p.fx.off
                    ? 0
                    : "number" == typeof r.duration
                    ? r.duration
                    : r.duration in p.fx.speeds
                    ? p.fx.speeds[r.duration]
                    : p.fx.speeds._default),
                (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    p.isFunction(r.old) && r.old.call(this),
                        r.queue && p.dequeue(this, r.queue);
                }),
                r
            );
        }),
        p.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(U)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = p.isEmptyObject(e),
                    o = p.speed(t, n, r),
                    a = function () {
                        var t = at(this, p.extend({}, e), o);
                        (i || p._data(this, "finish")) && t.stop(!0);
                    };
                return (
                    (a.finish = a),
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = p.timers,
                            a = p._data(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a)
                                a[i] && a[i].stop && et.test(i) && r(a[i]);
                        for (i = o.length; i--; )
                            o[i].elem !== this ||
                                (null != e && o[i].queue !== e) ||
                                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (t || !n) && p.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = p._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = p.timers,
                            a = r ? r.length : 0;
                        for (
                            n.finish = !0,
                                p.queue(this, e, []),
                                i && i.stop && i.stop.call(this, !0),
                                t = o.length;
                            t--;

                        )
                            o[t].elem === this &&
                                o[t].queue === e &&
                                (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        p.each(["toggle", "show", "hide"], function (e, t) {
            var n = p.fn[t];
            p.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(it(t, !0), e, r, i);
            };
        }),
        p.each(
            {
                slideDown: it("show"),
                slideUp: it("hide"),
                slideToggle: it("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
                p.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                };
            }
        ),
        (p.timers = []),
        (p.fx.tick = function () {
            var e,
                t = p.timers,
                n = 0;
            for (Ye = p.now(); n < t.length; n++)
                (e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || p.fx.stop(), (Ye = void 0);
        }),
        (p.fx.timer = function (e) {
            p.timers.push(e), e() ? p.fx.start() : p.timers.pop();
        }),
        (p.fx.interval = 13),
        (p.fx.start = function () {
            Qe || (Qe = setInterval(p.fx.tick, p.fx.interval));
        }),
        (p.fx.stop = function () {
            clearInterval(Qe), (Qe = null);
        }),
        (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (p.fn.delay = function (e, t) {
            return (
                (e = (p.fx && p.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function () {
                        clearTimeout(r);
                    };
                })
            );
        }),
        (function () {
            var e, t, n, r, i;
            (t = S.createElement("div")).setAttribute("className", "t"),
                (t.innerHTML =
                    "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (r = t.getElementsByTagName("a")[0]),
                (i = (n = S.createElement("select")).appendChild(
                    S.createElement("option")
                )),
                (e = t.getElementsByTagName("input")[0]),
                (r.style.cssText = "top:1px"),
                (u.getSetAttribute = "t" !== t.className),
                (u.style = /top/.test(r.getAttribute("style"))),
                (u.hrefNormalized = "/a" === r.getAttribute("href")),
                (u.checkOn = !!e.value),
                (u.optSelected = i.selected),
                (u.enctype = !!S.createElement("form").enctype),
                (n.disabled = !0),
                (u.optDisabled = !i.disabled),
                (e = S.createElement("input")).setAttribute("value", ""),
                (u.input = "" === e.getAttribute("value")),
                (e.value = "t"),
                e.setAttribute("type", "radio"),
                (u.radioValue = "t" === e.value);
        })();
    var st = /\r/g;
    p.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            return arguments.length
                ? ((r = p.isFunction(e)),
                  this.each(function (n) {
                      var i;
                      1 === this.nodeType &&
                          (null == (i = r ? e.call(this, n, p(this).val()) : e)
                              ? (i = "")
                              : "number" == typeof i
                              ? (i += "")
                              : p.isArray(i) &&
                                (i = p.map(i, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((t =
                              p.valHooks[this.type] ||
                              p.valHooks[this.nodeName.toLowerCase()]) &&
                              "set" in t &&
                              void 0 !== t.set(this, i, "value")) ||
                              (this.value = i));
                  }))
                : i
                ? (t =
                      p.valHooks[i.type] ||
                      p.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(i, "value"))
                    ? n
                    : "string" == typeof (n = i.value)
                    ? n.replace(st, "")
                    : null == n
                    ? ""
                    : n
                : void 0;
        },
    }),
        p.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = p.find.attr(e, "value");
                        return null != t ? t : p.trim(p.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        for (
                            var t,
                                n,
                                r = e.options,
                                i = e.selectedIndex,
                                o = "select-one" === e.type || 0 > i,
                                a = o ? null : [],
                                s = o ? i + 1 : r.length,
                                l = 0 > i ? s : o ? i : 0;
                            s > l;
                            l++
                        )
                            if (
                                !(
                                    (!(n = r[l]).selected && l !== i) ||
                                    (u.optDisabled
                                        ? n.disabled
                                        : null !==
                                          n.getAttribute("disabled")) ||
                                    (n.parentNode.disabled &&
                                        p.nodeName(n.parentNode, "optgroup"))
                                )
                            ) {
                                if (((t = p(n).val()), o)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (
                            var n,
                                r,
                                i = e.options,
                                o = p.makeArray(t),
                                a = i.length;
                            a--;

                        )
                            if (
                                ((r = i[a]),
                                p.inArray(p.valHooks.option.get(r), o) >= 0)
                            )
                                try {
                                    r.selected = n = !0;
                                } catch (e) {
                                    r.scrollHeight;
                                }
                            else r.selected = !1;
                        return n || (e.selectedIndex = -1), i;
                    },
                },
            },
        }),
        p.each(["radio", "checkbox"], function () {
            (p.valHooks[this] = {
                set: function (e, t) {
                    return p.isArray(t)
                        ? (e.checked = p.inArray(p(e).val(), t) >= 0)
                        : void 0;
                },
            }),
                u.checkOn ||
                    (p.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                            ? "on"
                            : e.value;
                    });
        });
    var lt,
        ct,
        ut = p.expr.attrHandle,
        dt = /^(?:checked|selected)$/i,
        pt = u.getSetAttribute,
        ft = u.input;
    p.fn.extend({
        attr: function (e, t) {
            return X(this, p.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                p.removeAttr(this, e);
            });
        },
    }),
        p.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)
                    return typeof e.getAttribute === P
                        ? p.prop(e, t, n)
                        : ((1 === o && p.isXMLDoc(e)) ||
                              ((t = t.toLowerCase()),
                              (r =
                                  p.attrHooks[t] ||
                                  (p.expr.match.bool.test(t) ? ct : lt))),
                          void 0 === n
                              ? r && "get" in r && null !== (i = r.get(e, t))
                                  ? i
                                  : null == (i = p.find.attr(e, t))
                                  ? void 0
                                  : i
                              : null !== n
                              ? r &&
                                "set" in r &&
                                void 0 !== (i = r.set(e, n, t))
                                  ? i
                                  : (e.setAttribute(t, n + ""), n)
                              : void p.removeAttr(e, t));
            },
            removeAttr: function (e, t) {
                var n,
                    r,
                    i = 0,
                    o = t && t.match(_);
                if (o && 1 === e.nodeType)
                    for (; (n = o[i++]); )
                        (r = p.propFix[n] || n),
                            p.expr.match.bool.test(n)
                                ? (ft && pt) || !dt.test(n)
                                    ? (e[r] = !1)
                                    : (e[p.camelCase("default-" + n)] = e[r] =
                                          !1)
                                : p.attr(e, n, ""),
                            e.removeAttribute(pt ? n : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (
                            !u.radioValue &&
                            "radio" === t &&
                            p.nodeName(e, "input")
                        ) {
                            var n = e.value;
                            return (
                                e.setAttribute("type", t), n && (e.value = n), t
                            );
                        }
                    },
                },
            },
        }),
        (ct = {
            set: function (e, t, n) {
                return (
                    !1 === t
                        ? p.removeAttr(e, n)
                        : (ft && pt) || !dt.test(n)
                        ? e.setAttribute((!pt && p.propFix[n]) || n, n)
                        : (e[p.camelCase("default-" + n)] = e[n] = !0),
                    n
                );
            },
        }),
        p.each(p.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ut[t] || p.find.attr;
            ut[t] =
                (ft && pt) || !dt.test(t)
                    ? function (e, t, r) {
                          var i, o;
                          return (
                              r ||
                                  ((o = ut[t]),
                                  (ut[t] = i),
                                  (i =
                                      null != n(e, t, r)
                                          ? t.toLowerCase()
                                          : null),
                                  (ut[t] = o)),
                              i
                          );
                      }
                    : function (e, t, n) {
                          return n
                              ? void 0
                              : e[p.camelCase("default-" + t)]
                              ? t.toLowerCase()
                              : null;
                      };
        }),
        (ft && pt) ||
            (p.attrHooks.value = {
                set: function (e, t, n) {
                    return p.nodeName(e, "input")
                        ? void (e.defaultValue = t)
                        : lt && lt.set(e, t, n);
                },
            }),
        pt ||
            ((lt = {
                set: function (e, t, n) {
                    var r = e.getAttributeNode(n);
                    return (
                        r ||
                            e.setAttributeNode(
                                (r = e.ownerDocument.createAttribute(n))
                            ),
                        (r.value = t += ""),
                        "value" === n || t === e.getAttribute(n) ? t : void 0
                    );
                },
            }),
            (ut.id =
                ut.name =
                ut.coords =
                    function (e, t, n) {
                        var r;
                        return n
                            ? void 0
                            : (r = e.getAttributeNode(t)) && "" !== r.value
                            ? r.value
                            : null;
                    }),
            (p.valHooks.button = {
                get: function (e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value : void 0;
                },
                set: lt.set,
            }),
            (p.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    lt.set(e, "" !== t && t, n);
                },
            }),
            p.each(["width", "height"], function (e, t) {
                p.attrHooks[t] = {
                    set: function (e, n) {
                        return "" === n
                            ? (e.setAttribute(t, "auto"), n)
                            : void 0;
                    },
                };
            })),
        u.style ||
            (p.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText || void 0;
                },
                set: function (e, t) {
                    return (e.style.cssText = t + "");
                },
            });
    var ht = /^(?:input|select|textarea|button|object)$/i,
        mt = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function (e, t) {
            return X(this, p.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return (
                (e = p.propFix[e] || e),
                this.each(function () {
                    try {
                        (this[e] = void 0), delete this[e];
                    } catch (e) {}
                })
            );
        },
    }),
        p.extend({
            propFix: { for: "htmlFor", class: "className" },
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 !== o || !p.isXMLDoc(e)) &&
                            ((t = p.propFix[t] || t), (i = p.propHooks[t])),
                        void 0 !== n
                            ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                ? r
                                : (e[t] = n)
                            : i && "get" in i && null !== (r = i.get(e, t))
                            ? r
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = p.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : ht.test(e.nodeName) ||
                              (mt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
        }),
        u.hrefNormalized ||
            p.each(["href", "src"], function (e, t) {
                p.propHooks[t] = {
                    get: function (e) {
                        return e.getAttribute(t, 4);
                    },
                };
            }),
        u.optSelected ||
            (p.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return (
                        t &&
                            (t.selectedIndex,
                            t.parentNode && t.parentNode.selectedIndex),
                        null
                    );
                },
            }),
        p.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                p.propFix[this.toLowerCase()] = this;
            }
        ),
        u.enctype || (p.propFix.enctype = "encoding");
    var gt = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = 0,
                l = this.length,
                c = "string" == typeof e && e;
            if (p.isFunction(e))
                return this.each(function (t) {
                    p(this).addClass(e.call(this, t, this.className));
                });
            if (c)
                for (t = (e || "").match(_) || []; l > s; s++)
                    if (
                        (r =
                            1 === (n = this[s]).nodeType &&
                            (n.className
                                ? (" " + n.className + " ").replace(gt, " ")
                                : " "))
                    ) {
                        for (o = 0; (i = t[o++]); )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        (a = p.trim(r)), n.className !== a && (n.className = a);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = 0,
                l = this.length,
                c = 0 === arguments.length || ("string" == typeof e && e);
            if (p.isFunction(e))
                return this.each(function (t) {
                    p(this).removeClass(e.call(this, t, this.className));
                });
            if (c)
                for (t = (e || "").match(_) || []; l > s; s++)
                    if (
                        (r =
                            1 === (n = this[s]).nodeType &&
                            (n.className
                                ? (" " + n.className + " ").replace(gt, " ")
                                : ""))
                    ) {
                        for (o = 0; (i = t[o++]); )
                            for (; r.indexOf(" " + i + " ") >= 0; )
                                r = r.replace(" " + i + " ", " ");
                        (a = e ? p.trim(r) : ""),
                            n.className !== a && (n.className = a);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : this.each(
                      p.isFunction(e)
                          ? function (n) {
                                p(this).toggleClass(
                                    e.call(this, n, this.className, t),
                                    t
                                );
                            }
                          : function () {
                                if ("string" === n)
                                    for (
                                        var t,
                                            r = 0,
                                            i = p(this),
                                            o = e.match(_) || [];
                                        (t = o[r++]);

                                    )
                                        i.hasClass(t)
                                            ? i.removeClass(t)
                                            : i.addClass(t);
                                else
                                    (n === P || "boolean" === n) &&
                                        (this.className &&
                                            p._data(
                                                this,
                                                "__className__",
                                                this.className
                                            ),
                                        (this.className =
                                            this.className || !1 === e
                                                ? ""
                                                : p._data(
                                                      this,
                                                      "__className__"
                                                  ) || ""));
                            }
                  );
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (
                    1 === this[n].nodeType &&
                    (" " + this[n].className + " ")
                        .replace(gt, " ")
                        .indexOf(t) >= 0
                )
                    return !0;
            return !1;
        },
    }),
        p.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                " "
            ),
            function (e, t) {
                p.fn[t] = function (e, n) {
                    return arguments.length > 0
                        ? this.on(t, null, e, n)
                        : this.trigger(t);
                };
            }
        ),
        p.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
        });
    var vt = p.now(),
        yt = /\?/,
        bt =
            /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (p.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n,
            r = null,
            i = p.trim(t + "");
        return i &&
            !p.trim(
                i.replace(bt, function (e, t, i, o) {
                    return (
                        n && t && (r = 0),
                        0 === r ? e : ((n = i || t), (r += !o - !i), "")
                    );
                })
            )
            ? Function("return " + i)()
            : p.error("Invalid JSON: " + t);
    }),
        (p.parseXML = function (t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser
                    ? (n = new DOMParser().parseFromString(t, "text/xml"))
                    : (((n = new ActiveXObject("Microsoft.XMLDOM")).async =
                          "false"),
                      n.loadXML(t));
            } catch (e) {
                n = void 0;
            }
            return (
                (n &&
                    n.documentElement &&
                    !n.getElementsByTagName("parsererror").length) ||
                    p.error("Invalid XML: " + t),
                n
            );
        });
    var xt,
        wt,
        Ct = /#.*$/,
        Tt = /([?&])_=[^&]*/,
        St = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        kt = /^(?:GET|HEAD)$/,
        Et = /^\/\//,
        Nt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        At = {},
        qt = {},
        Dt = "*/".concat("*");
    try {
        wt = location.href;
    } catch (e) {
        ((wt = S.createElement("a")).href = ""), (wt = wt.href);
    }
    function _t(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(_) || [];
            if (p.isFunction(n))
                for (; (r = o[i++]); )
                    "+" === r.charAt(0)
                        ? ((r = r.slice(1) || "*"),
                          (e[r] = e[r] || []).unshift(n))
                        : (e[r] = e[r] || []).push(n);
        };
    }
    function Lt(e, t, n, r) {
        var i = {},
            o = e === qt;
        function a(s) {
            var l;
            return (
                (i[s] = !0),
                p.each(e[s] || [], function (e, s) {
                    var c = s(t, n, r);
                    return "string" != typeof c || o || i[c]
                        ? o
                            ? !(l = c)
                            : void 0
                        : (t.dataTypes.unshift(c), a(c), !1);
                }),
                l
            );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
    }
    function jt(e, t) {
        var n,
            r,
            i = p.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && p.extend(!0, e, n), e;
    }
    (xt = Nt.exec(wt.toLowerCase()) || []),
        p.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: wt,
                type: "GET",
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        xt[1]
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Dt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": p.parseJSON,
                    "text xml": p.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? jt(jt(e, p.ajaxSettings), t) : jt(p.ajaxSettings, e);
            },
            ajaxPrefilter: _t(At),
            ajaxTransport: _t(qt),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    l,
                    c,
                    u = p.ajaxSetup({}, t),
                    d = u.context || u,
                    f = u.context && (d.nodeType || d.jquery) ? p(d) : p.event,
                    h = p.Deferred(),
                    m = p.Callbacks("once memory"),
                    g = u.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; (t = St.exec(o)); )
                                        c[t[1].toLowerCase()] = t[2];
                                t = c[e.toLowerCase()];
                            }
                            return null == t ? null : t;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? o : null;
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return (
                                b || ((e = y[n] = y[n] || e), (v[e] = t)), this
                            );
                        },
                        overrideMimeType: function (e) {
                            return b || (u.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (2 > b) for (t in e) g[t] = [g[t], e[t]];
                                else w.always(e[w.status]);
                            return this;
                        },
                        abort: function (e) {
                            var t = e || x;
                            return l && l.abort(t), C(0, t), this;
                        },
                    };
                if (
                    ((h.promise(w).complete = m.add),
                    (w.success = w.done),
                    (w.error = w.fail),
                    (u.url = ((e || u.url || wt) + "")
                        .replace(Ct, "")
                        .replace(Et, xt[1] + "//")),
                    (u.type = t.method || t.type || u.method || u.type),
                    (u.dataTypes = p
                        .trim(u.dataType || "*")
                        .toLowerCase()
                        .match(_) || [""]),
                    null == u.crossDomain &&
                        ((n = Nt.exec(u.url.toLowerCase())),
                        (u.crossDomain = !(
                            !n ||
                            (n[1] === xt[1] &&
                                n[2] === xt[2] &&
                                (n[3] || ("http:" === n[1] ? "80" : "443")) ===
                                    (xt[3] ||
                                        ("http:" === xt[1] ? "80" : "443")))
                        ))),
                    u.data &&
                        u.processData &&
                        "string" != typeof u.data &&
                        (u.data = p.param(u.data, u.traditional)),
                    Lt(At, u, t, w),
                    2 === b)
                )
                    return w;
                for (r in ((s = p.event && u.global) &&
                    0 == p.active++ &&
                    p.event.trigger("ajaxStart"),
                (u.type = u.type.toUpperCase()),
                (u.hasContent = !kt.test(u.type)),
                (i = u.url),
                u.hasContent ||
                    (u.data &&
                        ((i = u.url += (yt.test(i) ? "&" : "?") + u.data),
                        delete u.data),
                    !1 === u.cache &&
                        (u.url = Tt.test(i)
                            ? i.replace(Tt, "$1_=" + vt++)
                            : i + (yt.test(i) ? "&" : "?") + "_=" + vt++)),
                u.ifModified &&
                    (p.lastModified[i] &&
                        w.setRequestHeader(
                            "If-Modified-Since",
                            p.lastModified[i]
                        ),
                    p.etag[i] &&
                        w.setRequestHeader("If-None-Match", p.etag[i])),
                ((u.data && u.hasContent && !1 !== u.contentType) ||
                    t.contentType) &&
                    w.setRequestHeader("Content-Type", u.contentType),
                w.setRequestHeader(
                    "Accept",
                    u.dataTypes[0] && u.accepts[u.dataTypes[0]]
                        ? u.accepts[u.dataTypes[0]] +
                              ("*" !== u.dataTypes[0]
                                  ? ", " + Dt + "; q=0.01"
                                  : "")
                        : u.accepts["*"]
                ),
                u.headers))
                    w.setRequestHeader(r, u.headers[r]);
                if (
                    u.beforeSend &&
                    (!1 === u.beforeSend.call(d, w, u) || 2 === b)
                )
                    return w.abort();
                for (r in ((x = "abort"),
                { success: 1, error: 1, complete: 1 }))
                    w[r](u[r]);
                if ((l = Lt(qt, u, t, w))) {
                    (w.readyState = 1),
                        s && f.trigger("ajaxSend", [w, u]),
                        u.async &&
                            u.timeout > 0 &&
                            (a = setTimeout(function () {
                                w.abort("timeout");
                            }, u.timeout));
                    try {
                        (b = 1), l.send(v, C);
                    } catch (e) {
                        if (!(2 > b)) throw e;
                        C(-1, e);
                    }
                } else C(-1, "No Transport");
                function C(e, t, n, r) {
                    var c,
                        v,
                        y,
                        x,
                        C,
                        T = t;
                    2 !== b &&
                        ((b = 2),
                        a && clearTimeout(a),
                        (l = void 0),
                        (o = r || ""),
                        (w.readyState = e > 0 ? 4 : 0),
                        (c = (e >= 200 && 300 > e) || 304 === e),
                        n &&
                            (x = (function (e, t, n) {
                                for (
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s = e.contents,
                                        l = e.dataTypes;
                                    "*" === l[0];

                                )
                                    l.shift(),
                                        void 0 === i &&
                                            (i =
                                                e.mimeType ||
                                                t.getResponseHeader(
                                                    "Content-Type"
                                                ));
                                if (i)
                                    for (a in s)
                                        if (s[a] && s[a].test(i)) {
                                            l.unshift(a);
                                            break;
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (a in n) {
                                        if (
                                            !l[0] ||
                                            e.converters[a + " " + l[0]]
                                        ) {
                                            o = a;
                                            break;
                                        }
                                        r || (r = a);
                                    }
                                    o = o || r;
                                }
                                return o
                                    ? (o !== l[0] && l.unshift(o), n[o])
                                    : void 0;
                            })(u, w, n)),
                        (x = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                l,
                                c = {},
                                u = e.dataTypes.slice();
                            if (u[1])
                                for (a in e.converters)
                                    c[a.toLowerCase()] = e.converters[a];
                            for (o = u.shift(); o; )
                                if (
                                    (e.responseFields[o] &&
                                        (n[e.responseFields[o]] = t),
                                    !l &&
                                        r &&
                                        e.dataFilter &&
                                        (t = e.dataFilter(t, e.dataType)),
                                    (l = o),
                                    (o = u.shift()))
                                )
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (
                                            !(a = c[l + " " + o] || c["* " + o])
                                        )
                                            for (i in c)
                                                if (
                                                    (s = i.split(" "))[1] ===
                                                        o &&
                                                    (a =
                                                        c[l + " " + s[0]] ||
                                                        c["* " + s[0]])
                                                ) {
                                                    !0 === a
                                                        ? (a = c[i])
                                                        : !0 !== c[i] &&
                                                          ((o = s[0]),
                                                          u.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a
                                                            ? e
                                                            : "No conversion from " +
                                                              l +
                                                              " to " +
                                                              o,
                                                    };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(u, x, w, c)),
                        c
                            ? (u.ifModified &&
                                  ((C = w.getResponseHeader("Last-Modified")) &&
                                      (p.lastModified[i] = C),
                                  (C = w.getResponseHeader("etag")) &&
                                      (p.etag[i] = C)),
                              204 === e || "HEAD" === u.type
                                  ? (T = "nocontent")
                                  : 304 === e
                                  ? (T = "notmodified")
                                  : ((T = x.state),
                                    (v = x.data),
                                    (c = !(y = x.error))))
                            : ((y = T),
                              (e || !T) && ((T = "error"), 0 > e && (e = 0))),
                        (w.status = e),
                        (w.statusText = (t || T) + ""),
                        c
                            ? h.resolveWith(d, [v, T, w])
                            : h.rejectWith(d, [w, T, y]),
                        w.statusCode(g),
                        (g = void 0),
                        s &&
                            f.trigger(c ? "ajaxSuccess" : "ajaxError", [
                                w,
                                u,
                                c ? v : y,
                            ]),
                        m.fireWith(d, [w, T]),
                        s &&
                            (f.trigger("ajaxComplete", [w, u]),
                            --p.active || p.event.trigger("ajaxStop")));
                }
                return w;
            },
            getJSON: function (e, t, n) {
                return p.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return p.get(e, void 0, t, "script");
            },
        }),
        p.each(["get", "post"], function (e, t) {
            p[t] = function (e, n, r, i) {
                return (
                    p.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
                    p.ajax({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r,
                    })
                );
            };
        }),
        (p._evalUrl = function (e) {
            return p.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0,
            });
        }),
        p.fn.extend({
            wrapAll: function (e) {
                if (p.isFunction(e))
                    return this.each(function (t) {
                        p(this).wrapAll(e.call(this, t));
                    });
                if (this[0]) {
                    var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (
                                    var e = this;
                                    e.firstChild && 1 === e.firstChild.nodeType;

                                )
                                    e = e.firstChild;
                                return e;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (e) {
                return this.each(
                    p.isFunction(e)
                        ? function (t) {
                              p(this).wrapInner(e.call(this, t));
                          }
                        : function () {
                              var t = p(this),
                                  n = t.contents();
                              n.length ? n.wrapAll(e) : t.append(e);
                          }
                );
            },
            wrap: function (e) {
                var t = p.isFunction(e);
                return this.each(function (n) {
                    p(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        p.nodeName(this, "body") ||
                            p(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (p.expr.filters.hidden = function (e) {
            return (
                (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
                (!u.reliableHiddenOffsets() &&
                    "none" ===
                        ((e.style && e.style.display) || p.css(e, "display")))
            );
        }),
        (p.expr.filters.visible = function (e) {
            return !p.expr.filters.hidden(e);
        });
    var Ht = /%20/g,
        Ft = /\[\]$/,
        Pt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Mt = /^(?:input|select|textarea|keygen)/i;
    function Bt(e, t, n, r) {
        var i;
        if (p.isArray(t))
            p.each(t, function (t, i) {
                n || Ft.test(e)
                    ? r(e, i)
                    : Bt(
                          e + "[" + ("object" == typeof i ? t : "") + "]",
                          i,
                          n,
                          r
                      );
            });
        else if (n || "object" !== p.type(t)) r(e, t);
        else for (i in t) Bt(e + "[" + i + "]", t[i], n, r);
    }
    (p.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                (t = p.isFunction(t) ? t() : null == t ? "" : t),
                    (r[r.length] =
                        encodeURIComponent(e) + "=" + encodeURIComponent(t));
            };
        if (
            (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional),
            p.isArray(e) || (e.jquery && !p.isPlainObject(e)))
        )
            p.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) Bt(n, e[n], t, i);
        return r.join("&").replace(Ht, "+");
    }),
        p.fn.extend({
            serialize: function () {
                return p.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = p.prop(this, "elements");
                    return e ? p.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !p(this).is(":disabled") &&
                            Mt.test(this.nodeName) &&
                            !Ot.test(e) &&
                            (this.checked || !G.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = p(this).val();
                        return null == n
                            ? null
                            : p.isArray(n)
                            ? p.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(Pt, "\r\n"),
                                  };
                              })
                            : { name: t.name, value: n.replace(Pt, "\r\n") };
                    })
                    .get();
            },
        }),
        (p.ajaxSettings.xhr =
            void 0 !== e.ActiveXObject
                ? function () {
                      return (
                          (!this.isLocal &&
                              /^(get|post|head|put|delete|options)$/i.test(
                                  this.type
                              ) &&
                              $t()) ||
                          (function () {
                              try {
                                  return new e.ActiveXObject(
                                      "Microsoft.XMLHTTP"
                                  );
                              } catch (e) {}
                          })()
                      );
                  }
                : $t);
    var It = 0,
        Rt = {},
        Wt = p.ajaxSettings.xhr();
    function $t() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    }
    e.attachEvent &&
        e.attachEvent("onunload", function () {
            for (var e in Rt) Rt[e](void 0, !0);
        }),
        (u.cors = !!Wt && "withCredentials" in Wt),
        (Wt = u.ajax = !!Wt) &&
            p.ajaxTransport(function (e) {
                var t;
                if (!e.crossDomain || u.cors)
                    return {
                        send: function (n, r) {
                            var i,
                                o = e.xhr(),
                                a = ++It;
                            if (
                                (o.open(
                                    e.type,
                                    e.url,
                                    e.async,
                                    e.username,
                                    e.password
                                ),
                                e.xhrFields)
                            )
                                for (i in e.xhrFields) o[i] = e.xhrFields[i];
                            for (i in (e.mimeType &&
                                o.overrideMimeType &&
                                o.overrideMimeType(e.mimeType),
                            e.crossDomain ||
                                n["X-Requested-With"] ||
                                (n["X-Requested-With"] = "XMLHttpRequest"),
                            n))
                                void 0 !== n[i] &&
                                    o.setRequestHeader(i, n[i] + "");
                            o.send((e.hasContent && e.data) || null),
                                (t = function (n, i) {
                                    var s, l, c;
                                    if (t && (i || 4 === o.readyState))
                                        if (
                                            (delete Rt[a],
                                            (t = void 0),
                                            (o.onreadystatechange = p.noop),
                                            i)
                                        )
                                            4 !== o.readyState && o.abort();
                                        else {
                                            (c = {}),
                                                (s = o.status),
                                                "string" ==
                                                    typeof o.responseText &&
                                                    (c.text = o.responseText);
                                            try {
                                                l = o.statusText;
                                            } catch (e) {
                                                l = "";
                                            }
                                            s || !e.isLocal || e.crossDomain
                                                ? 1223 === s && (s = 204)
                                                : (s = c.text ? 200 : 404);
                                        }
                                    c && r(s, l, c, o.getAllResponseHeaders());
                                }),
                                e.async
                                    ? 4 === o.readyState
                                        ? setTimeout(t)
                                        : (o.onreadystatechange = Rt[a] = t)
                                    : t();
                        },
                        abort: function () {
                            t && t(void 0, !0);
                        },
                    };
            }),
        p.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /(?:java|ecma)script/ },
            converters: {
                "text script": function (e) {
                    return p.globalEval(e), e;
                },
            },
        }),
        p.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && ((e.type = "GET"), (e.global = !1));
        }),
        p.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t,
                    n = S.head || p("head")[0] || S.documentElement;
                return {
                    send: function (r, i) {
                        ((t = S.createElement("script")).async = !0),
                            e.scriptCharset && (t.charset = e.scriptCharset),
                            (t.src = e.url),
                            (t.onload = t.onreadystatechange =
                                function (e, n) {
                                    (n ||
                                        !t.readyState ||
                                        /loaded|complete/.test(t.readyState)) &&
                                        ((t.onload = t.onreadystatechange =
                                            null),
                                        t.parentNode &&
                                            t.parentNode.removeChild(t),
                                        (t = null),
                                        n || i(200, "success"));
                                }),
                            n.insertBefore(t, n.firstChild);
                    },
                    abort: function () {
                        t && t.onload(void 0, !0);
                    },
                };
            }
        });
    var zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = zt.pop() || p.expando + "_" + vt++;
            return (this[e] = !0), e;
        },
    }),
        p.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                a,
                s =
                    !1 !== t.jsonp &&
                    (Ut.test(t.url)
                        ? "url"
                        : "string" == typeof t.data &&
                          !(t.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) &&
                          Ut.test(t.data) &&
                          "data");
            return s || "jsonp" === t.dataTypes[0]
                ? ((i = t.jsonpCallback =
                      p.isFunction(t.jsonpCallback)
                          ? t.jsonpCallback()
                          : t.jsonpCallback),
                  s
                      ? (t[s] = t[s].replace(Ut, "$1" + i))
                      : !1 !== t.jsonp &&
                        (t.url +=
                            (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                  (t.converters["script json"] = function () {
                      return a || p.error(i + " was not called"), a[0];
                  }),
                  (t.dataTypes[0] = "json"),
                  (o = e[i]),
                  (e[i] = function () {
                      a = arguments;
                  }),
                  r.always(function () {
                      (e[i] = o),
                          t[i] &&
                              ((t.jsonpCallback = n.jsonpCallback), zt.push(i)),
                          a && p.isFunction(o) && o(a[0]),
                          (a = o = void 0);
                  }),
                  "script")
                : void 0;
        }),
        (p.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && ((n = t), (t = !1)), (t = t || S);
            var r = x.exec(e),
                i = !n && [];
            return r
                ? [t.createElement(r[1])]
                : ((r = p.buildFragment([e], t, i)),
                  i && i.length && p(i).remove(),
                  p.merge([], r.childNodes));
        });
    var Xt = p.fn.load;
    (p.fn.load = function (e, t, n) {
        if ("string" != typeof e && Xt) return Xt.apply(this, arguments);
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
        return (
            s >= 0 && ((r = p.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
            p.isFunction(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (o = "POST"),
            a.length > 0 &&
                p
                    .ajax({ url: e, type: o, dataType: "html", data: t })
                    .done(function (e) {
                        (i = arguments),
                            a.html(
                                r
                                    ? p("<div>").append(p.parseHTML(e)).find(r)
                                    : e
                            );
                    })
                    .complete(
                        n &&
                            function (e, t) {
                                a.each(n, i || [e.responseText, t, e]);
                            }
                    ),
            this
        );
    }),
        p.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                p.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        (p.expr.filters.animated = function (e) {
            return p.grep(p.timers, function (t) {
                return e === t.elem;
            }).length;
        });
    var Gt = e.document.documentElement;
    function Vt(e) {
        return p.isWindow(e)
            ? e
            : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    (p.offset = {
        setOffset: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                l,
                c = p.css(e, "position"),
                u = p(e),
                d = {};
            "static" === c && (e.style.position = "relative"),
                (s = u.offset()),
                (o = p.css(e, "top")),
                (l = p.css(e, "left")),
                ("absolute" === c || "fixed" === c) &&
                p.inArray("auto", [o, l]) > -1
                    ? ((a = (r = u.position()).top), (i = r.left))
                    : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
                p.isFunction(t) && (t = t.call(e, n, s)),
                null != t.top && (d.top = t.top - s.top + a),
                null != t.left && (d.left = t.left - s.left + i),
                "using" in t ? t.using.call(e, d) : u.css(d);
        },
    }),
        p.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              p.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    r = { top: 0, left: 0 },
                    i = this[0],
                    o = i && i.ownerDocument;
                return o
                    ? ((t = o.documentElement),
                      p.contains(t, i)
                          ? (typeof i.getBoundingClientRect !== P &&
                                (r = i.getBoundingClientRect()),
                            (n = Vt(o)),
                            {
                                top:
                                    r.top +
                                    (n.pageYOffset || t.scrollTop) -
                                    (t.clientTop || 0),
                                left:
                                    r.left +
                                    (n.pageXOffset || t.scrollLeft) -
                                    (t.clientLeft || 0),
                            })
                          : r)
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n = { top: 0, left: 0 },
                        r = this[0];
                    return (
                        "fixed" === p.css(r, "position")
                            ? (t = r.getBoundingClientRect())
                            : ((e = this.offsetParent()),
                              (t = this.offset()),
                              p.nodeName(e[0], "html") || (n = e.offset()),
                              (n.top += p.css(e[0], "borderTopWidth", !0)),
                              (n.left += p.css(e[0], "borderLeftWidth", !0))),
                        {
                            top: t.top - n.top - p.css(r, "marginTop", !0),
                            left: t.left - n.left - p.css(r, "marginLeft", !0),
                        }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (
                        var e = this.offsetParent || Gt;
                        e &&
                        !p.nodeName(e, "html") &&
                        "static" === p.css(e, "position");

                    )
                        e = e.offsetParent;
                    return e || Gt;
                });
            },
        }),
        p.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
                var n = /Y/.test(t);
                p.fn[e] = function (r) {
                    return X(
                        this,
                        function (e, r, i) {
                            var o = Vt(e);
                            return void 0 === i
                                ? o
                                    ? t in o
                                        ? o[t]
                                        : o.document.documentElement[r]
                                    : e[r]
                                : void (o
                                      ? o.scrollTo(
                                            n ? p(o).scrollLeft() : i,
                                            n ? i : p(o).scrollTop()
                                        )
                                      : (e[r] = i));
                        },
                        e,
                        r,
                        arguments.length,
                        null
                    );
                };
            }
        ),
        p.each(["top", "left"], function (e, t) {
            p.cssHooks[t] = Fe(u.pixelPosition, function (e, n) {
                return n
                    ? ((n = _e(e, t)),
                      je.test(n) ? p(e).position()[t] + "px" : n)
                    : void 0;
            });
        }),
        p.each({ Height: "height", Width: "width" }, function (e, t) {
            p.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                    p.fn[r] = function (r, i) {
                        var o =
                                arguments.length &&
                                (n || "boolean" != typeof r),
                            a =
                                n ||
                                (!0 === r || !0 === i ? "margin" : "border");
                        return X(
                            this,
                            function (t, n, r) {
                                var i;
                                return p.isWindow(t)
                                    ? t.document.documentElement["client" + e]
                                    : 9 === t.nodeType
                                    ? ((i = t.documentElement),
                                      Math.max(
                                          t.body["scroll" + e],
                                          i["scroll" + e],
                                          t.body["offset" + e],
                                          i["offset" + e],
                                          i["client" + e]
                                      ))
                                    : void 0 === r
                                    ? p.css(t, n, a)
                                    : p.style(t, n, r, a);
                            },
                            t,
                            o ? r : void 0,
                            o,
                            null
                        );
                    };
                }
            );
        }),
        (p.fn.size = function () {
            return this.length;
        }),
        (p.fn.andSelf = p.fn.addBack),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return p;
            });
    var Jt = e.jQuery,
        Yt = e.$;
    return (
        (p.noConflict = function (t) {
            return (
                e.$ === p && (e.$ = Yt),
                t && e.jQuery === p && (e.jQuery = Jt),
                p
            );
        }),
        typeof t === P && (e.jQuery = e.$ = p),
        p
    );
}),
    Object.defineProperty(Array.prototype, "chunk", {
        value: function (e) {
            for (var t = [], n = 0; n < this.length; n += e)
                t.push(this.slice(n, n + e));
            return t;
        },
    }),
    (function (e) {
        var t = window.Element.prototype;
        "function" != typeof t.matches &&
            (t.matches =
                t.msMatchesSelector ||
                t.mozMatchesSelector ||
                t.webkitMatchesSelector ||
                function (e) {
                    for (
                        var t = (
                                this.document || this.ownerDocument
                            ).querySelectorAll(e),
                            n = 0;
                        t[n] && t[n] !== this;

                    )
                        ++n;
                    return Boolean(t[n]);
                }),
            "function" != typeof t.closest &&
                (t.closest = function (e) {
                    for (var t = this; t && 1 === t.nodeType; ) {
                        if (t.matches(e)) return t;
                        t = t.parentNode;
                    }
                    return null;
                });
    })(),
    (window.dataLayer = window.dataLayer || []),
    (window.gaDebugEnabled = 0),
    jQuery(document).ready(function (e) {
        var t;
        (e("body").on("click", ".add-to-cart-button.is-download", function (e) {
            trackDownload();
        }),
        -1 !== location.pathname.indexOf("/checkout/order-received") &&
            trackPurchase(),
        (e(".products > li.product-impressions").length ||
            e("#related-products-carousel .product-impressions").length) &&
            "function" == typeof sendGaImpressions) &&
            (e(
                "#related-products-carousel .product-impressions, .related-products .products > li.product-impressions"
            ).length
                ? ((n = "Related Products"),
                  (t = e("#related-products-carousel .product-impressions")
                      .length
                      ? "#related-products-carousel .product-impressions"
                      : ".related-products .products > li.product-impressions"))
                : e(".products > li.product-impressions").length &&
                  ((n = e("body").data("list") ? e("body").data("list") : ""),
                  (t = "li.product-impressions")),
            sendGaImpressions(n, t));
        if (e("#deposits .product-impressions").length) {
            var n = e("body").data("list") ? e("body").data("list") : "",
                r = {},
                i = [];
            e("#deposits .product-impressions").each(function (t) {
                (r = e(this).data("info")) &&
                    ((r.list = n), (r.position = t + 1), i.push(r));
            }),
                i.length && pushGaImpressions(i);
        }
        if (e("#plans .tile__select-variant input").length) {
            (n = e("body").data("list") ? e("body").data("list") : ""),
                (r = {}),
                (i = []);
            e("#plans .tile__select-variant.is-active input[checked]").each(
                function (t) {
                    (r = e(this).data("info")) &&
                        ((r.list = n), (r.position = t + 1), i.push(r));
                }
            ),
                i.length && pushGaImpressions(i),
                e(".plans-select-users input").on("change", function () {
                    (i = []),
                        ((r = e(this).data("info")).list = n),
                        (r.position = e(this).closest(".column").index()),
                        i.push(r),
                        pushGaImpressions(i);
                });
        }
        function o(t) {
            e.removeCookie("search_add_cart"),
                delete t.list,
                delete t.position,
                pushGaCart([t], "add");
        }
        e("body").on(
            "click",
            "#related-products-carousel .product-impressions, .related-products .product-impressions",
            function (t) {
                var n = 1;
                e(this).parents("#related-products-carousel").length
                    ? (n =
                          e(
                              e(this).parents(".owl-item"),
                              "#related-products-carousel .owl-wrapper"
                          ).index() + 1)
                    : e(this).parents(".related-products").length &&
                      (n = e(this).index() + 1),
                    sendGaClick("Related Products", this, n);
            }
        ),
            e("#deposits .pill, .packs__tiles .pill").on("click", function (t) {
                var n = e(this).closest(".product-impressions");
                n.length && void 0 !== n.data("info") && o(n.data("info"));
            }),
            e(".plans__button").on("click", function (t) {
                var n = e(this)
                    .closest(".column")
                    .find(".tile__select-variant.is-active input[checked]");
                n.length && void 0 !== n.data("info") && o(n.data("info"));
            }),
            e("body").on("click", ".cart_item .remove", function (t) {
                pushGaCart(
                    [getCartItemData(e(this).parents(".cart_item")[0])],
                    "remove"
                );
            });
    });
