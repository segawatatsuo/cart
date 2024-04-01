
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("jquery")))
    : "function" == typeof define && define.amd
    ? define("$Transform", ["jquery"], t)
    : "object" == typeof exports
    ? (exports.$Transform = t(require("jquery")))
    : ((e.eg = e.eg || {}), (e.eg.$Transform = t(e.jQuery)));
})(this, function (e) {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var a = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.i = function (e) {
        return e;
      }),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 2))
    );
  })([
    function (t, n) {
      t.exports = e;
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        if (!e || "none" === e)
          return ["matrix", ["1", "0", "0", "1", "0", "0"]];
        var t = e.replace(/\s/g, "").match(/(matrix)(3d)*\((.*)\)/);
        return [t[1] + (t[2] || ""), t[3].split(",")];
      }
      function a(e) {
        var t = e[0],
          n = e[1];
        return "matrix3d" === t
          ? e
          : [
              t + "3d",
              [
                n[0],
                n[1],
                "0",
                "0",
                n[2],
                n[3],
                "0",
                "0",
                "0",
                "0",
                "1",
                "0",
                n[4],
                n[5],
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
      function i(e, t) {
        var n = e,
          r = e.match(/((-|\+)*[0-9]+)%/);
        return (
          r && r.length >= 1
            ? (n = t * (parseFloat(r[1]) / 100) + "px")
            : -1 === e.indexOf("px") && (n = e + "px"),
          n
        );
      }
      function s(e) {
        var t = e.match(/((-|\+)*[\d|.]+)(px|deg|rad)*/),
          n = void 0;
        return (
          t && t.length >= 1 && (n = { num: parseFloat(t[1]), unit: t[3] }), n
        );
      }
      function u(e) {
        var t = e.match(/(\b\w+?)\((\s*[^)]+)/),
          n = void 0,
          r = void 0,
          a = ["", ""];
        return (
          t &&
            t.length > 2 &&
            ((n = t[1]),
            (r = t[2].split(",")),
            (r = p.map(r, function (e) {
              return p.trim(e);
            })),
            (a = [p.trim(n), r])),
          a
        );
      }
      function c(e) {
        for (
          var t = e.split(")"), n = [], r = 0, a = t.length - 1;
          r < a;
          r++
        ) {
          var o = u(t[r]);
          (o[1] = p.map(o[1], s)), n.push(o);
        }
        return function (e) {
          var t = "",
            r = 0;
          return (
            p.each(n, function (a) {
              r = n[a][0].indexOf("scale") >= 0 ? 1 : 0;
              var o = p
                .map(n[a][1], function (t) {
                  var n = t.num;
                  return 1 === r && (n -= 1), r + n * e + (t.unit || "");
                })
                .join(",");
              t += n[a][0] + "(" + o + ") ";
            }),
            t
          );
        };
      }
      function f(e) {
        var t = void 0,
          n = [];
        if (p.isArray(e))
          return (t = e[0]) + "(" + e[1].join(o(t) + ",") + o(t) + ")";
        for (t in e) n.push(t);
        return p
          .map(n, function (t) {
            return t + "(" + e[t] + o(t) + ")";
          })
          .join(" ");
      }
      (t.__esModule = !0), (t.rateFn = t.toMatrix = t.toMatrix3d = void 0);
      var l = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(0)),
        p = l.default;
      (t.toMatrix3d = a),
        (t.toMatrix = r),
        (t.rateFn = function (e, t, n) {
          var o = n.indexOf("+=") >= 0,
            s = void 0,
            u = void 0,
            l = void 0,
            d = (function (e, t, n) {
              for (
                var r = void 0,
                  a = "",
                  o = e.split(")"),
                  s = 0,
                  u = o.length - 1;
                s < u;
                s++
              ) {
                var c = o[s];
                if (
                  (r = c.match(/(translate([XYZ]|3d)?|rotate)\(([^)]*)/)) &&
                  r.length > 1
                )
                  if ("rotate" === r[1])
                    -1 === r[3].indexOf("deg") &&
                      (c = r[1] + "(" + r[3] + "deg");
                  else {
                    var f = r[3].split(","),
                      l = [t, n, 100];
                    switch (r[2]) {
                      case "X":
                        c = r[1] + "(" + i(r[3], t);
                        break;
                      case "Y":
                        c = r[1] + "(" + i(r[3], n);
                        break;
                      case "Z":
                        break;
                      default:
                        for (var p = 0, d = f.length; p < d; p++)
                          f[p] = i(f[p], l[p]);
                        c = r[1] + "(" + f.join(",");
                    }
                  }
                a += c = " " + c + ")";
              }
              return a.replace("%", "").replace("+=", "");
            })(
              n,
              parseFloat(p.css(e, "width")) || 0,
              parseFloat(p.css(e, "height")) || 0
            );
          return (
            o
              ? ((s = t && "none" !== t ? t : "matrix(1, 0, 0, 1, 0, 0)"),
                (u = c(d)))
              : ((s = r(t)),
                (l = r("none")),
                s[1].length < l[1].length
                  ? (s = a(s))
                  : s[1].length > l[1].length && (l = a(l)),
                (u = c(d))),
            function (e) {
              var t = [],
                n = "";
              if (o) return s + u(e);
              if (1 === e) n = f(l);
              else {
                for (var r, a, i = 0, c = s[1].length; i < c; i++)
                  (r = parseFloat(s[1][i])),
                    (a = parseFloat(l[1][i])),
                    t.push(r + (a - r) * e);
                n = f([s[0], t]);
              }
              return n + u(e);
            }
          );
        });
    },
    function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      var r = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(0)),
        a = n(1),
        o = r.default;
      o &&
        (o.fx.step.transform = function (e) {
          (e.rateFn = e.rateFn || (0, a.rateFn)(e.elem, e.start, e.end)),
            o.style(e.elem, "transform", e.rateFn(e.pos));
        }),
        (t.default = o),
        (e.exports = t.default);
    },
  ]);
}),


  $(function () {
    if ($("#home-slider").length) {
      new Swiper("#home-slider", {
        slidesPerView: "auto",
        watchSlidesProgress: !1,
        normalizeSlideIndex: !1,
        keyboard: { enabled: !0, onlyInViewport: !0 },
        navigation: {
          enabled: !0,
          nextEl: ".swiper__button_next",
          prevEl: ".swiper__button_prev",
        },
      });
      var e = $(".home-slider__bullet"),
        t = $(".home-slider__mockups .tile__image"),
        n = $("#mockups-cats span"),
        r = $("#mockups-button, #mockups-overlay"),
        a = "is-active",
        o = "d-none",
        i = "translateX(-80px)",
        s = "translateX(0px)";
      $(".home-slider__bullet").on("click", function () {
        var u = $(this),
          c = u.index(),
          f = e
            .filter("." + a)
            .first()
            .index();
        r.attr("href", u.data("url")),
          e.eq(f).removeClass(a),
          e.eq(c).addClass(a),
          n.eq(f).removeClass(a),
          n.eq(c).addClass(a),
          t
            .eq(f)
            .stop()
            .animate(
              { opacity: 0, "-webkit-transform": i, transform: i },
              300,
              "swing",
              function () {
                $(this).addClass(o),
                  $(this).css({
                    opacity: "",
                    "-webkit-transform": "",
                    transform: "",
                  });
              }
            ),
          t
            .eq(c)
            .stop()
            .addClass("fade-enter")
            .removeClass(o)
            .animate(
              { opacity: 1, "-webkit-transform": s, transform: s },
              300,
              "swing",
              function () {
                $(this).removeClass("fade-enter"),
                  $(this).css({
                    opacity: "",
                    "-webkit-transform": "",
                    transform: "",
                  });
              }
            );
      });
    }
    var u = $.cookie("home-yt-plan") ? parseInt($.cookie("home-yt-plan")) : 1;
    function c(e, t, n) {
      (e = e || ""),
        (t = t || ""),
        (n = n || ""),
        dataLayer.push({ event: `click_main_marketing_pop_up_${t}${n}_${e}` }),
        (p[t] = void 0 !== p[t] && p[t] ? -1 : Date.now()),
        $.cookie("home_offer", JSON.stringify(p));
    }
    $('[name="tickets"]:checked').prop("checked", null),
      $('[name="tickets"][value="' + u + '"]').prop("checked", !0),
      $('[name="tickets"]').on("change", function () {
        var e = $(this).val(),
          t = $(this).data("price"),
          n = $(this).data("url");
        $("#tickets-button").attr("href", n),
          $("#tickets-price").text(t),
          $.cookie("home-yt-plan", e);
      });
    var f = !1,
      l = ["provisual"],
      p = $.cookie("home_offer") ? $.parseJSON($.cookie("home_offer")) : {};
    if (!$.isEmptyObject(p)) {
      var d = Date.now() - 6048e5;
      $.each(p, function (e, t) {
        if (-1 === t || t > d) {
          var n = l.indexOf(e);
          -1 !== n && l.splice(n, 1);
        }
      });
    }
    l && (f = l[Math.floor(Math.random() * l.length)]),
      f &&
        setTimeout(function () {
          $.magnificPopup.instance.isOpen ||
            $.magnificPopup.open({
              key: "offer",
              showCloseBtn: !1,
              type: "ajax",
              items: { src: "/offer.php" },
              ajax: {
                settings: {
                  type: "GET",
                  dataType: "json",
                  cache: !1,
                  data: { type: f },
                },
              },
              callbacks: {
                parseAjax: function (e) {
                  e.data.success && e.data.data && (e.data = $(e.data.data));
                },
                beforeClose: function () {
                  var e = $(this.content);
                  e.length && c("skip", e.data("offer"), e.data("variant"));
                },
              },
            });
        }, 1e4),
      $(document).on("click", ".popup-offer__cta", function (e) {
        var t = $(this).closest(".popup");
        t.length && c("proceed", t.data("offer"), t.data("variant"));
      });
  });
