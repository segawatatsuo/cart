/*
!(function (e) {
  if (!e.hasInitialised) {
    var t = {
      escapeRegExp: function (e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      },
      hasClass: function (e, t) {
        var i = " ";
        return (
          1 === e.nodeType &&
          (i + e.className + i).replace(/[\n\t]/g, i).indexOf(i + t + i) >= 0
        );
      },
      addClass: function (e, t) {
        e.className += " " + t;
      },
      removeClass: function (e, t) {
        var i = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
        e.className = e.className.replace(i, "");
      },
      interpolateString: function (e, t) {
        return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function (e) {
          return t(arguments[1]) || "";
        });
      },
      getCookie: function (e) {
        var t = ("; " + document.cookie).split("; " + e + "=");
        return t.length < 2 ? void 0 : t.pop().split(";").shift();
      },
      setCookie: function (e, t, i, n, s, o) {
        var r = new Date();
        r.setHours(r.getHours() + 24 * (i || 365));
        var a = [
          e + "=" + t,
          "expires=" + r.toUTCString(),
          "path=" + (s || "/"),
        ];
        n && a.push("domain=" + n),
          o && a.push("secure"),
          (document.cookie = a.join(";"));
      },
      deepExtend: function (e, t) {
        for (var i in t)
          t.hasOwnProperty(i) &&
            (i in e && this.isPlainObject(e[i]) && this.isPlainObject(t[i])
              ? this.deepExtend(e[i], t[i])
              : (e[i] = t[i]));
        return e;
      },
      throttle: function (e, t) {
        var i = !1;
        return function () {
          i ||
            (e.apply(this, arguments),
            (i = !0),
            setTimeout(function () {
              i = !1;
            }, t));
        };
      },
      hash: function (e) {
        var t,
          i,
          n = 0;
        if (0 === e.length) return n;
        for (t = 0, i = e.length; t < i; ++t)
          (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
        return n;
      },
      normaliseHex: function (e) {
        return (
          "#" == e[0] && (e = e.substr(1)),
          3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
          e
        );
      },
      getContrast: function (e) {
        return (
          (e = this.normaliseHex(e)),
          (299 * parseInt(e.substr(0, 2), 16) +
            587 * parseInt(e.substr(2, 2), 16) +
            114 * parseInt(e.substr(4, 2), 16)) /
            1e3 >=
          128
            ? "#000"
            : "#fff"
        );
      },
      getLuminance: function (e) {
        var t = parseInt(this.normaliseHex(e), 16),
          i = 38 + (t >> 16),
          n = 38 + ((t >> 8) & 255),
          s = 38 + (255 & t);
        return (
          "#" +
          (
            16777216 +
            65536 * (i < 255 ? (i < 1 ? 0 : i) : 255) +
            256 * (n < 255 ? (n < 1 ? 0 : n) : 255) +
            (s < 255 ? (s < 1 ? 0 : s) : 255)
          )
            .toString(16)
            .slice(1)
        );
      },
      isMobile: function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      },
      isPlainObject: function (e) {
        return "object" == typeof e && null !== e && e.constructor == Object;
      },
      traverseDOMPath: function (e, i) {
        return e && e.parentNode
          ? t.hasClass(e, i)
            ? e
            : this.traverseDOMPath(e.parentNode, i)
          : null;
      },
    };
    (e.status = { deny: "deny", allow: "allow", dismiss: "dismiss" }),
      (e.transitionEnd = (function () {
        var e = document.createElement("div"),
          t = {
            t: "transitionend",
            OT: "oTransitionEnd",
            msT: "MSTransitionEnd",
            MozT: "transitionend",
            WebkitT: "webkitTransitionEnd",
          };
        for (var i in t)
          if (t.hasOwnProperty(i) && void 0 !== e.style[i + "ransition"])
            return t[i];
        return "";
      })()),
      (e.hasTransition = !!e.transitionEnd);
    var i = Object.keys(e.status).map(t.escapeRegExp);
    (e.customStyles = {}),
      (e.Popup = (function () {
        var n = {
          enabled: !0,
          container: null,
          cookie: {
            name: "cookieconsent_status",
            path: "/",
            domain: "",
            expiryDays: 365,
            secure: !1,
          },
          onPopupOpen: function () {},
          onPopupClose: function () {},
          onInitialise: function (e) {},
          onStatusChange: function (e, t) {},
          onRevokeChoice: function () {},
          onNoCookieLaw: function (e, t) {},
          content: {
            header: "Cookies used on the website!",
            message:
              "This website uses cookies to ensure you get the best experience on our website.",
            dismiss: "Got it!",
            allow: "Allow cookies",
            deny: "Decline",
            link: "Learn more",
            href: "https://www.cookiesandyou.com",
            close: "&#x274c;",
            target: "_blank",
            policy: "Cookie Policy",
          },
          elements: {
            header: '<span class="cc-header">{{header}}</span>&nbsp;',
            message:
              '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
            messagelink:
              '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',
            dismiss:
              '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
            allow:
              '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
            deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
            link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
            close:
              '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',
          },
          window:
            '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',
          revokeBtn: '<div class="cc-revoke {{classes}}">{{policy}}</div>',
          compliance: {
            info: '<div class="cc-compliance">{{dismiss}}</div>',
            "opt-in":
              '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',
            "opt-out":
              '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',
          },
          type: "info",
          layouts: {
            basic: "{{messagelink}}{{compliance}}",
            "basic-close": "{{messagelink}}{{compliance}}{{close}}",
            "basic-header": "{{header}}{{message}}{{link}}{{compliance}}",
          },
          layout: "basic",
          position: "bottom",
          theme: "block",
          static: !1,
          palette: null,
          revokable: !1,
          animateRevokable: !0,
          showLink: !0,
          dismissOnScroll: !1,
          dismissOnTimeout: !1,
          dismissOnWindowClick: !1,
          ignoreClicksFrom: ["cc-revoke", "cc-btn"],
          autoOpen: !0,
          autoAttach: !0,
          whitelistPage: [],
          blacklistPage: [],
          overrideHTML: null,
        };
        function s() {
          this.initialise.apply(this, arguments);
        }
        function o(e) {
          (this.openingTimeout = null), t.removeClass(e, "cc-invisible");
        }
        function r(t) {
          (t.style.display = "none"),
            t.removeEventListener(e.transitionEnd, this.afterTransition),
            (this.afterTransition = null);
        }
        function a() {
          var e = this.options.position.split("-"),
            t = [];
          return (
            e.forEach(function (e) {
              t.push("cc-" + e);
            }),
            t
          );
        }
        function l(n) {
          var s = this.options,
            o = document.createElement("div"),
            r =
              s.container && 1 === s.container.nodeType
                ? s.container
                : document.body;
          o.innerHTML = n;
          var a = o.children[0];
          return (
            (a.style.display = "none"),
            t.hasClass(a, "cc-window") &&
              e.hasTransition &&
              t.addClass(a, "cc-invisible"),
            (this.onButtonClick = function (n) {
              var s = t.traverseDOMPath(n.target, "cc-btn") || n.target;
              if (t.hasClass(s, "cc-btn")) {
                var o = s.className.match(
                    new RegExp("\\bcc-(" + i.join("|") + ")\\b")
                  ),
                  r = (o && o[1]) || !1;
                r && (this.setStatus(r), this.close(!0));
              }
              t.hasClass(s, "cc-close") &&
                (this.setStatus(e.status.dismiss), this.close(!0)),
                t.hasClass(s, "cc-revoke") && this.revokeChoice();
            }.bind(this)),
            a.addEventListener("click", this.onButtonClick),
            s.autoAttach &&
              (r.firstChild
                ? r.insertBefore(a, r.firstChild)
                : r.appendChild(a)),
            a
          );
        }
        function c(e) {
          return "000000" == (e = t.normaliseHex(e))
            ? "#000"
            : t.getLuminance(e);
        }
        function d(e, t) {
          for (var i = 0, n = e.length; i < n; ++i) {
            var s = e[i];
            if (
              (s instanceof RegExp && s.test(t)) ||
              ("string" == typeof s && s.length && s === t)
            )
              return !0;
          }
          return !1;
        }
        return (
          (s.prototype.initialise = function (i) {
            this.options && this.destroy(),
              t.deepExtend((this.options = {}), n),
              t.isPlainObject(i) && t.deepExtend(this.options, i),
              function () {
                var t = this.options.onInitialise.bind(this);
                if (!window.navigator.cookieEnabled)
                  return t(e.status.deny), !0;
                if (window.CookiesOK || window.navigator.CookiesOK)
                  return t(e.status.allow), !0;
                var i = Object.keys(e.status),
                  n = this.getStatus(),
                  s = i.indexOf(n) >= 0;
                return s && t(n), s;
              }.call(this) && (this.options.enabled = !1),
              d(this.options.blacklistPage, location.pathname) &&
                (this.options.enabled = !1),
              d(this.options.whitelistPage, location.pathname) &&
                (this.options.enabled = !0);
            var s = this.options.window
                .replace(
                  "{{classes}}",
                  function () {
                    var i = this.options,
                      n =
                        "top" == i.position || "bottom" == i.position
                          ? "banner"
                          : "floating";
                    t.isMobile() && (n = "floating");
                    var s = [
                      "cc-" + n,
                      "cc-type-" + i.type,
                      "cc-theme-" + i.theme,
                    ];
                    return (
                      i.static && s.push("cc-static"),
                      s.push.apply(s, a.call(this)),
                      function (i) {
                        var n = t.hash(JSON.stringify(i)),
                          s = "cc-color-override-" + n,
                          o = t.isPlainObject(i);
                        return (
                          (this.customStyleSelector = o ? s : null),
                          o &&
                            (function (i, n, s) {
                              if (e.customStyles[i])
                                ++e.customStyles[i].references;
                              else {
                                var o = {},
                                  r = n.popup,
                                  a = n.button,
                                  l = n.highlight;
                                r &&
                                  ((r.text = r.text
                                    ? r.text
                                    : t.getContrast(r.background)),
                                  (r.link = r.link ? r.link : r.text),
                                  (o[s + ".cc-window"] = [
                                    "color: " + r.text,
                                    "background-color: " + r.background,
                                  ]),
                                  (o[s + ".cc-revoke"] = [
                                    "color: " + r.text,
                                    "background-color: " + r.background,
                                  ]),
                                  (o[
                                    s +
                                      " .cc-link," +
                                      s +
                                      " .cc-link:active," +
                                      s +
                                      " .cc-link:visited"
                                  ] = ["color: " + r.link]),
                                  a &&
                                    ((a.text = a.text
                                      ? a.text
                                      : t.getContrast(a.background)),
                                    (a.border = a.border
                                      ? a.border
                                      : "transparent"),
                                    (o[s + " .cc-btn"] = [
                                      "color: " + a.text,
                                      "border-color: " + a.border,
                                      "background-color: " + a.background,
                                    ]),
                                    a.padding &&
                                      o[s + " .cc-btn"].push(
                                        "padding: " + a.padding
                                      ),
                                    "transparent" != a.background &&
                                      (o[
                                        s +
                                          " .cc-btn:hover, " +
                                          s +
                                          " .cc-btn:focus"
                                      ] = [
                                        "background-color: " +
                                          (a.hover || c(a.background)),
                                      ]),
                                    l
                                      ? ((l.text = l.text
                                          ? l.text
                                          : t.getContrast(l.background)),
                                        (l.border = l.border
                                          ? l.border
                                          : "transparent"),
                                        (o[
                                          s +
                                            " .cc-highlight .cc-btn:first-child"
                                        ] = [
                                          "color: " + l.text,
                                          "border-color: " + l.border,
                                          "background-color: " + l.background,
                                        ]))
                                      : (o[
                                          s +
                                            " .cc-highlight .cc-btn:first-child"
                                        ] = ["color: " + r.text])));
                                var d = document.createElement("style");
                                document.head.appendChild(d),
                                  (e.customStyles[i] = {
                                    references: 1,
                                    element: d.sheet,
                                  });
                                var u = -1;
                                for (var p in o)
                                  o.hasOwnProperty(p) &&
                                    d.sheet.insertRule(
                                      p + "{" + o[p].join(";") + "}",
                                      ++u
                                    );
                              }
                            })(n, i, "." + s),
                          o
                        );
                      }.call(this, this.options.palette),
                      this.customStyleSelector &&
                        s.push(this.customStyleSelector),
                      s
                    );
                  }
                    .call(this)
                    .join(" ")
                )
                .replace(
                  "{{children}}",
                  function () {
                    var e = {},
                      i = this.options;
                    i.showLink ||
                      ((i.elements.link = ""),
                      (i.elements.messagelink = i.elements.message)),
                      Object.keys(i.elements).forEach(function (n) {
                        e[n] = t.interpolateString(i.elements[n], function (e) {
                          var t = i.content[e];
                          return e && "string" == typeof t && t.length ? t : "";
                        });
                      });
                    var n = i.compliance[i.type];
                    n || (n = i.compliance.info),
                      (e.compliance = t.interpolateString(n, function (t) {
                        return e[t];
                      }));
                    var s = i.layouts[i.layout];
                    return (
                      s || (s = i.layouts.basic),
                      t.interpolateString(s, function (t) {
                        return e[t];
                      })
                    );
                  }.call(this)
                ),
              o = this.options.overrideHTML;
            if (
              ("string" == typeof o && o.length && (s = o), this.options.static)
            ) {
              var r = l.call(this, '<div class="cc-grower">' + s + "</div>");
              (r.style.display = ""),
                (this.element = r.firstChild),
                (this.element.style.display = "none"),
                t.addClass(this.element, "cc-invisible");
            } else this.element = l.call(this, s);
            (function () {
              var i = this.setStatus.bind(this),
                n = this.close.bind(this),
                s = this.options.dismissOnTimeout;
              "number" == typeof s &&
                s >= 0 &&
                (this.dismissTimeout = window.setTimeout(function () {
                  i(e.status.dismiss), n(!0);
                }, Math.floor(s)));
              var o = this.options.dismissOnScroll;
              if ("number" == typeof o && o >= 0) {
                var r = function (t) {
                  window.pageYOffset > Math.floor(o) &&
                    (i(e.status.dismiss),
                    n(!0),
                    window.removeEventListener("scroll", r),
                    (this.onWindowScroll = null));
                };
                this.options.enabled &&
                  ((this.onWindowScroll = r),
                  window.addEventListener("scroll", r));
              }
              var a = this.options.dismissOnWindowClick,
                l = this.options.ignoreClicksFrom;
              if (a) {
                var c = function (s) {
                  for (
                    var o = !1, r = s.path.length, a = l.length, d = 0;
                    d < r;
                    d++
                  )
                    if (!o)
                      for (var u = 0; u < a; u++)
                        o || (o = t.hasClass(s.path[d], l[u]));
                  o ||
                    (i(e.status.dismiss),
                    n(!0),
                    window.removeEventListener("click", c),
                    window.removeEventListener("touchend", c),
                    (this.onWindowClick = null));
                }.bind(this);
                this.options.enabled &&
                  ((this.onWindowClick = c),
                  window.addEventListener("click", c),
                  window.addEventListener("touchend", c));
              }
            }).call(this),
              function () {
                if (
                  ("info" != this.options.type && (this.options.revokable = !0),
                  t.isMobile() && (this.options.animateRevokable = !1),
                  this.options.revokable)
                ) {
                  var e = a.call(this);
                  this.options.animateRevokable && e.push("cc-animate"),
                    this.customStyleSelector &&
                      e.push(this.customStyleSelector);
                  var i = this.options.revokeBtn
                    .replace("{{classes}}", e.join(" "))
                    .replace("{{policy}}", this.options.content.policy);
                  this.revokeBtn = l.call(this, i);
                  var n = this.revokeBtn;
                  if (this.options.animateRevokable) {
                    var s = t.throttle(function (e) {
                      var i = !1,
                        s = window.innerHeight - 20;
                      t.hasClass(n, "cc-top") && e.clientY < 20 && (i = !0),
                        t.hasClass(n, "cc-bottom") && e.clientY > s && (i = !0),
                        i
                          ? t.hasClass(n, "cc-active") ||
                            t.addClass(n, "cc-active")
                          : t.hasClass(n, "cc-active") &&
                            t.removeClass(n, "cc-active");
                    }, 200);
                    (this.onMouseMove = s),
                      window.addEventListener("mousemove", s);
                  }
                }
              }.call(this),
              this.options.autoOpen && this.autoOpen();
          }),
          (s.prototype.destroy = function () {
            this.onButtonClick &&
              this.element &&
              (this.element.removeEventListener("click", this.onButtonClick),
              (this.onButtonClick = null)),
              this.dismissTimeout &&
                (clearTimeout(this.dismissTimeout),
                (this.dismissTimeout = null)),
              this.onWindowScroll &&
                (window.removeEventListener("scroll", this.onWindowScroll),
                (this.onWindowScroll = null)),
              this.onWindowClick &&
                (window.removeEventListener("click", this.onWindowClick),
                (this.onWindowClick = null)),
              this.onMouseMove &&
                (window.removeEventListener("mousemove", this.onMouseMove),
                (this.onMouseMove = null)),
              this.element &&
                this.element.parentNode &&
                this.element.parentNode.removeChild(this.element),
              (this.element = null),
              this.revokeBtn &&
                this.revokeBtn.parentNode &&
                this.revokeBtn.parentNode.removeChild(this.revokeBtn),
              (this.revokeBtn = null),
              (function (i) {
                if (t.isPlainObject(i)) {
                  var n = t.hash(JSON.stringify(i)),
                    s = e.customStyles[n];
                  if (s && !--s.references) {
                    var o = s.element.ownerNode;
                    o && o.parentNode && o.parentNode.removeChild(o),
                      (e.customStyles[n] = null);
                  }
                }
              })(this.options.palette),
              (this.options = null);
          }),
          (s.prototype.open = function (t) {
            if (this.element)
              return (
                this.isOpen() ||
                  (e.hasTransition
                    ? this.fadeIn()
                    : (this.element.style.display = ""),
                  this.options.revokable && this.toggleRevokeButton(),
                  this.options.onPopupOpen.call(this)),
                this
              );
          }),
          (s.prototype.close = function (t) {
            if (this.element)
              return (
                this.isOpen() &&
                  (e.hasTransition
                    ? this.fadeOut()
                    : (this.element.style.display = "none"),
                  t && this.options.revokable && this.toggleRevokeButton(!0),
                  this.options.onPopupClose.call(this)),
                this
              );
          }),
          (s.prototype.fadeIn = function () {
            var i = this.element;
            if (
              e.hasTransition &&
              i &&
              (this.afterTransition && r.call(this, i),
              t.hasClass(i, "cc-invisible"))
            ) {
              if (((i.style.display = ""), this.options.static)) {
                var n = this.element.clientHeight;
                this.element.parentNode.style.maxHeight = n + "px";
              }
              this.openingTimeout = setTimeout(o.bind(this, i), 20);
            }
          }),
          (s.prototype.fadeOut = function () {
            var i = this.element;
            e.hasTransition &&
              i &&
              (this.openingTimeout &&
                (clearTimeout(this.openingTimeout), o.bind(this, i)),
              t.hasClass(i, "cc-invisible") ||
                (this.options.static &&
                  (this.element.parentNode.style.maxHeight = ""),
                (this.afterTransition = r.bind(this, i)),
                i.addEventListener(e.transitionEnd, this.afterTransition),
                t.addClass(i, "cc-invisible")));
          }),
          (s.prototype.isOpen = function () {
            return (
              this.element &&
              "" == this.element.style.display &&
              (!e.hasTransition || !t.hasClass(this.element, "cc-invisible"))
            );
          }),
          (s.prototype.toggleRevokeButton = function (e) {
            this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none");
          }),
          (s.prototype.revokeChoice = function (e) {
            (this.options.enabled = !0),
              this.clearStatus(),
              this.options.onRevokeChoice.call(this),
              e || this.autoOpen();
          }),
          (s.prototype.hasAnswered = function (t) {
            return Object.keys(e.status).indexOf(this.getStatus()) >= 0;
          }),
          (s.prototype.hasConsented = function (t) {
            var i = this.getStatus();
            return i == e.status.allow || i == e.status.dismiss;
          }),
          (s.prototype.autoOpen = function (e) {
            !this.hasAnswered() && this.options.enabled
              ? this.open()
              : this.hasAnswered() &&
                this.options.revokable &&
                this.toggleRevokeButton(!0);
          }),
          (s.prototype.setStatus = function (i) {
            var n = this.options.cookie,
              s = t.getCookie(n.name),
              o = Object.keys(e.status).indexOf(s) >= 0;
            Object.keys(e.status).indexOf(i) >= 0
              ? (t.setCookie(
                  n.name,
                  i,
                  n.expiryDays,
                  n.domain,
                  n.path,
                  n.secure
                ),
                this.options.onStatusChange.call(this, i, o))
              : this.clearStatus();
          }),
          (s.prototype.getStatus = function () {
            return t.getCookie(this.options.cookie.name);
          }),
          (s.prototype.clearStatus = function () {
            var e = this.options.cookie;
            t.setCookie(e.name, "", -1, e.domain, e.path);
          }),
          s
        );
      })()),
      (e.Location = (function () {
        var e = {
          timeout: 5e3,
          services: ["ipinfo"],
          serviceDefinitions: {
            ipinfo: function () {
              return {
                url: "//ipinfo.io",
                headers: ["Accept: application/json"],
                callback: function (e, t) {
                  try {
                    var i = JSON.parse(t);
                    return i.error ? o(i) : { code: i.country };
                  } catch (e) {
                    return o({ error: "Invalid response (" + e + ")" });
                  }
                },
              };
            },
            ipinfodb: function (e) {
              return {
                url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                isScript: !0,
                callback: function (e, t) {
                  try {
                    var i = JSON.parse(t);
                    return "ERROR" == i.statusCode
                      ? o({ error: i.statusMessage })
                      : { code: i.countryCode };
                  } catch (e) {
                    return o({ error: "Invalid response (" + e + ")" });
                  }
                },
              };
            },
            maxmind: function () {
              return {
                url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                isScript: !0,
                callback: function (e) {
                  window.geoip2
                    ? geoip2.country(
                        function (t) {
                          try {
                            e({ code: t.country.iso_code });
                          } catch (t) {
                            e(o(t));
                          }
                        },
                        function (t) {
                          e(o(t));
                        }
                      )
                    : e(
                        new Error(
                          "Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"
                        )
                      );
                },
              };
            },
          },
        };
        function i(i) {
          t.deepExtend((this.options = {}), e),
            t.isPlainObject(i) && t.deepExtend(this.options, i),
            (this.currentServiceIndex = -1);
        }
        function n(e, t, i) {
          var n,
            s = document.createElement("script");
          (s.type = "text/" + (e.type || "javascript")),
            (s.src = e.src || e),
            (s.async = !1),
            (s.onreadystatechange = s.onload =
              function () {
                var e = s.readyState;
                clearTimeout(n),
                  t.done ||
                    (e && !/loaded|complete/.test(e)) ||
                    ((t.done = !0),
                    t(),
                    (s.onreadystatechange = s.onload = null));
              }),
            document.body.appendChild(s),
            (n = setTimeout(function () {
              (t.done = !0), t(), (s.onreadystatechange = s.onload = null);
            }, i));
        }
        function s(e, t, i, n, s) {
          var o = new (window.XMLHttpRequest || window.ActiveXObject)(
            "MSXML2.XMLHTTP.3.0"
          );
          if (
            (o.open(n ? "POST" : "GET", e, 1),
            o.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            ),
            Array.isArray(s))
          )
            for (var r = 0, a = s.length; r < a; ++r) {
              var l = s[r].split(":", 2);
              o.setRequestHeader(
                l[0].replace(/^\s+|\s+$/g, ""),
                l[1].replace(/^\s+|\s+$/g, "")
              );
            }
          "function" == typeof t &&
            (o.onreadystatechange = function () {
              o.readyState > 3 && t(o);
            }),
            o.send(n);
        }
        function o(e) {
          return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error);
        }
        return (
          (i.prototype.getNextService = function () {
            var e;
            do {
              e = this.getServiceByIdx(++this.currentServiceIndex);
            } while (
              this.currentServiceIndex < this.options.services.length &&
              !e
            );
            return e;
          }),
          (i.prototype.getServiceByIdx = function (e) {
            var i = this.options.services[e];
            if ("function" == typeof i) {
              var n = i();
              return (
                n.name &&
                  t.deepExtend(n, this.options.serviceDefinitions[n.name](n)),
                n
              );
            }
            return "string" == typeof i
              ? this.options.serviceDefinitions[i]()
              : t.isPlainObject(i)
              ? this.options.serviceDefinitions[i.name](i)
              : null;
          }),
          (i.prototype.locate = function (e, t) {
            var i = this.getNextService();
            i
              ? ((this.callbackComplete = e),
                (this.callbackError = t),
                this.runService(i, this.runNextServiceOnError.bind(this)))
              : t(new Error("No services to run"));
          }),
          (i.prototype.setupUrl = function (e) {
            var t = this.getCurrentServiceOpts();
            return e.url.replace(/\{(.*?)\}/g, function (i, n) {
              if ("callback" === n) {
                var s = "callback" + Date.now();
                return (
                  (window[s] = function (t) {
                    e.__JSONP_DATA = JSON.stringify(t);
                  }),
                  s
                );
              }
              if (n in t.interpolateUrl) return t.interpolateUrl[n];
            });
          }),
          (i.prototype.runService = function (e, t) {
            var i = this;
            e &&
              e.url &&
              e.callback &&
              (e.isScript ? n : s)(
                this.setupUrl(e),
                function (n) {
                  var s = n ? n.responseText : "";
                  e.__JSONP_DATA &&
                    ((s = e.__JSONP_DATA), delete e.__JSONP_DATA),
                    i.runServiceCallback.call(i, t, e, s);
                },
                this.options.timeout,
                e.data,
                e.headers
              );
          }),
          (i.prototype.runServiceCallback = function (e, t, i) {
            var n = this,
              s = t.callback(function (t) {
                s || n.onServiceResult.call(n, e, t);
              }, i);
            s && this.onServiceResult.call(this, e, s);
          }),
          (i.prototype.onServiceResult = function (e, t) {
            t instanceof Error || (t && t.error)
              ? e.call(this, t, null)
              : e.call(this, null, t);
          }),
          (i.prototype.runNextServiceOnError = function (e, t) {
            if (e) {
              this.logError(e);
              var i = this.getNextService();
              i
                ? this.runService(i, this.runNextServiceOnError.bind(this))
                : this.completeService.call(
                    this,
                    this.callbackError,
                    new Error("All services failed")
                  );
            } else this.completeService.call(this, this.callbackComplete, t);
          }),
          (i.prototype.getCurrentServiceOpts = function () {
            var e = this.options.services[this.currentServiceIndex];
            return "string" == typeof e
              ? { name: e }
              : "function" == typeof e
              ? e()
              : t.isPlainObject(e)
              ? e
              : {};
          }),
          (i.prototype.completeService = function (e, t) {
            (this.currentServiceIndex = -1), e && e(t);
          }),
          (i.prototype.logError = function (e) {
            var t = this.currentServiceIndex;
            this.getServiceByIdx(t);
          }),
          i
        );
      })()),
      (e.Law = (function () {
        var e = {
          regionalLaw: !0,
          hasLaw: [
            "AT",
            "BE",
            "BG",
            "HR",
            "CZ",
            "CY",
            "DK",
            "EE",
            "FI",
            "FR",
            "DE",
            "EL",
            "HU",
            "IE",
            "IT",
            "LV",
            "LT",
            "LU",
            "MT",
            "NL",
            "PL",
            "PT",
            "SK",
            "ES",
            "SE",
            "GB",
            "UK",
            "GR",
            "EU",
          ],
          revokable: [
            "HR",
            "CY",
            "DK",
            "EE",
            "FR",
            "DE",
            "LV",
            "LT",
            "NL",
            "PT",
            "ES",
          ],
          explicitAction: ["HR", "IT", "ES"],
        };
        function i(e) {
          this.initialise.apply(this, arguments);
        }
        return (
          (i.prototype.initialise = function (i) {
            t.deepExtend((this.options = {}), e),
              t.isPlainObject(i) && t.deepExtend(this.options, i);
          }),
          (i.prototype.get = function (e) {
            var t = this.options;
            return {
              hasLaw: t.hasLaw.indexOf(e) >= 0,
              revokable: t.revokable.indexOf(e) >= 0,
              explicitAction: t.explicitAction.indexOf(e) >= 0,
            };
          }),
          (i.prototype.applyLaw = function (e, t) {
            var i = this.get(t);
            return (
              i.hasLaw ||
                ((e.enabled = !1),
                "function" == typeof e.onNoCookieLaw && e.onNoCookieLaw(t, i)),
              this.options.regionalLaw &&
                (i.revokable && (e.revokable = !0),
                i.explicitAction &&
                  ((e.dismissOnScroll = !1), (e.dismissOnTimeout = !1))),
              e
            );
          }),
          i
        );
      })()),
      (e.initialise = function (i, n, s) {
        var o = new e.Law(i.law);
        n || (n = function () {}), s || (s = function () {});
        var r = Object.keys(e.status),
          a = t.getCookie("cookieconsent_status");
        r.indexOf(a) >= 0
          ? n(new e.Popup(i))
          : e.getCountryCode(
              i,
              function (t) {
                delete i.law,
                  delete i.location,
                  t.code && (i = o.applyLaw(i, t.code)),
                  n(new e.Popup(i));
              },
              function (t) {
                delete i.law, delete i.location, s(t, new e.Popup(i));
              }
            );
      }),
      (e.getCountryCode = function (t, i, n) {
        t.law && t.law.countryCode
          ? i({ code: t.law.countryCode })
          : t.location
          ? new e.Location(t.location).locate(function (e) {
              i(e || {});
            }, n)
          : i({});
      }),
      (e.utils = t),
      (e.hasInitialised = !0),
      (window.cookieconsent = e);
  }
})(window.cookieconsent || {}),
*/
  (function (e) {
    if ("function" == typeof define && define.amd) define(["jquery"], e);
    else if ("object" == typeof exports) {
      var t = require("jquery");
      module.exports = e(t);
    } else e(window.jQuery || window.Zepto || window.$);
  })(function (e) {
    "use strict";
    var t = /\r?\n/g,
      i = /^(?:submit|button|image|reset|file)$/i,
      n = /^(?:input|select|textarea|keygen)/i,
      s = /^(?:checkbox|radio)$/i;
    (e.fn.serializeJSON = function (t) {
      var i = e.serializeJSON,
        n = i.setupOpts(t),
        s = e.extend({}, n.defaultTypes, n.customTypes),
        o = i.serializeArray(this, n),
        r = {};
      return (
        e.each(o, function (t, o) {
          var a = o.name,
            l = e(o.el).attr("data-value-type");
          if (!l && !n.disableColonTypes) {
            var c = i.splitType(o.name);
            (a = c[0]), (l = c[1]);
          }
          if ("skip" !== l) {
            l || (l = n.defaultType);
            var d = i.applyTypeFunc(o.name, o.value, l, o.el, s);
            if (d || !i.shouldSkipFalsy(o.name, a, l, o.el, n)) {
              var u = i.splitInputNameIntoKeysArray(a);
              i.deepSet(r, u, d, n);
            }
          }
        }),
        r
      );
    }),
      (e.serializeJSON = {
        defaultOptions: {},
        defaultBaseOptions: {
          checkboxUncheckedValue: void 0,
          useIntKeysAsArrayIndex: !1,
          skipFalsyValuesForTypes: [],
          skipFalsyValuesForFields: [],
          disableColonTypes: !1,
          customTypes: {},
          defaultTypes: {
            string: function (e) {
              return String(e);
            },
            number: function (e) {
              return Number(e);
            },
            boolean: function (e) {
              return -1 === ["false", "null", "undefined", "", "0"].indexOf(e);
            },
            null: function (e) {
              return -1 === ["false", "null", "undefined", "", "0"].indexOf(e)
                ? e
                : null;
            },
            array: function (e) {
              return JSON.parse(e);
            },
            object: function (e) {
              return JSON.parse(e);
            },
            skip: null,
          },
          defaultType: "string",
        },
        setupOpts: function (t) {
          null == t && (t = {});
          var i = e.serializeJSON,
            n = [
              "checkboxUncheckedValue",
              "useIntKeysAsArrayIndex",
              "skipFalsyValuesForTypes",
              "skipFalsyValuesForFields",
              "disableColonTypes",
              "customTypes",
              "defaultTypes",
              "defaultType",
            ];
          for (var s in t)
            if (-1 === n.indexOf(s))
              throw new Error(
                "serializeJSON ERROR: invalid option '" +
                  s +
                  "'. Please use one of " +
                  n.join(", ")
              );
          return e.extend({}, i.defaultBaseOptions, i.defaultOptions, t);
        },
        serializeArray: function (o, r) {
          null == r && (r = {});
          var a = e.serializeJSON;
          return o
            .map(function () {
              var t = e.prop(this, "elements");
              return t ? e.makeArray(t) : this;
            })
            .filter(function () {
              var t = e(this),
                o = this.type;
              return (
                this.name &&
                !t.is(":disabled") &&
                n.test(this.nodeName) &&
                !i.test(o) &&
                (this.checked ||
                  !s.test(o) ||
                  null != a.getCheckboxUncheckedValue(t, r))
              );
            })
            .map(function (i, n) {
              var o = e(this),
                l = o.val(),
                d = this.type;
              return null == l
                ? null
                : (s.test(d) &&
                    !this.checked &&
                    (l = a.getCheckboxUncheckedValue(o, r)),
                  c(l)
                    ? e.map(l, function (e) {
                        return {
                          name: n.name,
                          value: e.replace(t, "\r\n"),
                          el: n,
                        };
                      })
                    : { name: n.name, value: l.replace(t, "\r\n"), el: n });
            })
            .get();
        },
        getCheckboxUncheckedValue: function (e, t) {
          var i = e.attr("data-unchecked-value");
          return null == i && (i = t.checkboxUncheckedValue), i;
        },
        applyTypeFunc: function (e, t, i, n, s) {
          var r = s[i];
          if (!r)
            throw new Error(
              "serializeJSON ERROR: Invalid type " +
                i +
                " found in input name '" +
                e +
                "', please use one of " +
                o(s).join(", ")
            );
          return r(t, n);
        },
        splitType: function (e) {
          var t = e.split(":");
          if (t.length > 1) {
            var i = t.pop();
            return [t.join(":"), i];
          }
          return [e, ""];
        },
        shouldSkipFalsy: function (t, i, n, s, o) {
          var r = e(s).attr("data-skip-falsy");
          if (null != r) return "false" !== r;
          var a = o.skipFalsyValuesForFields;
          if (a && (-1 !== a.indexOf(i) || -1 !== a.indexOf(t))) return !0;
          var l = o.skipFalsyValuesForTypes;
          return !(!l || -1 === l.indexOf(n));
        },
        splitInputNameIntoKeysArray: function (t) {
          var i = t.split("[");
          return (
            "" ===
              (i = e.map(i, function (e) {
                return e.replace(/\]/g, "");
              }))[0] && i.shift(),
            i
          );
        },
        deepSet: function (t, i, n, s) {
          null == s && (s = {});
          var o = e.serializeJSON;
          if (a(t))
            throw new Error(
              "ArgumentError: param 'o' expected to be an object or array, found undefined"
            );
          if (!i || 0 === i.length)
            throw new Error(
              "ArgumentError: param 'keys' expected to be an array with least one element"
            );
          var d = i[0];
          if (1 !== i.length) {
            var u = i[1],
              p = i.slice(1);
            if ("" === d) {
              var h = t.length - 1,
                f = t[h];
              d = r(f) && a(o.deepGet(f, p)) ? h : h + 1;
            }
            "" === u || (s.useIntKeysAsArrayIndex && l(u))
              ? (!a(t[d]) && c(t[d])) || (t[d] = [])
              : (!a(t[d]) && r(t[d])) || (t[d] = {}),
              o.deepSet(t[d], p, n, s);
          } else "" === d ? t.push(n) : (t[d] = n);
        },
        deepGet: function (t, i) {
          var n = e.serializeJSON;
          if (a(t) || a(i) || 0 === i.length || (!r(t) && !c(t))) return t;
          var s = i[0];
          if ("" !== s) {
            if (1 === i.length) return t[s];
            var o = i.slice(1);
            return n.deepGet(t[s], o);
          }
        },
      });
    var o = function (e) {
        if (Object.keys) return Object.keys(e);
        var t,
          i = [];
        for (t in e) i.push(t);
        return i;
      },
      r = function (e) {
        return e === Object(e);
      },
      a = function (e) {
        return void 0 === e;
      },
      l = function (e) {
        return /^[0-9]+$/.test(String(e));
      },
      c =
        Array.isArray ||
        function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        };
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (e) {
    var t = /\+/g;
    function i(e) {
      return o.raw ? e : encodeURIComponent(e);
    }
    function n(e) {
      return i(o.json ? JSON.stringify(e) : String(e));
    }
    function s(i, n) {
      var s = o.raw
        ? i
        : (function (e) {
            0 === e.indexOf('"') &&
              (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
              return (
                (e = decodeURIComponent(e.replace(t, " "))),
                o.json ? JSON.parse(e) : e
              );
            } catch (e) {}
          })(i);
      return e.isFunction(n) ? n(s) : s;
    }
    var o = (e.cookie = function (t, r, a) {
      if (arguments.length > 1 && !e.isFunction(r)) {
        if ("number" == typeof (a = e.extend({}, o.defaults, a)).expires) {
          var l = a.expires,
            c = (a.expires = new Date());
          c.setMilliseconds(c.getMilliseconds() + 864e5 * l);
        }
        return (document.cookie = [
          i(t),
          "=",
          n(r),
          a.expires ? "; expires=" + a.expires.toUTCString() : "",
          a.path ? "; path=" + a.path : "",
          a.domain ? "; domain=" + a.domain : "",
          a.secure ? "; secure" : "",
        ].join(""));
      }
      for (
        var d,
          u = t ? void 0 : {},
          p = document.cookie ? document.cookie.split("; ") : [],
          h = 0,
          f = p.length;
        h < f;
        h++
      ) {
        var m = p[h].split("="),
          g = ((d = m.shift()), o.raw ? d : decodeURIComponent(d)),
          v = m.join("=");
        if (t === g) {
          u = s(v, r);
          break;
        }
        t || void 0 === (v = s(v)) || (u[g] = v);
      }
      return u;
    });
    (o.defaults = {}),
      (e.removeCookie = function (t, i) {
        return e.cookie(t, "", e.extend({}, i, { expires: -1 })), !e.cookie(t);
      });
  }),
  (function (e, t) {
    var i,
      n = e.jQuery || e.Cowboy || (e.Cowboy = {});
    (n.throttle = i =
      function (e, i, s, o) {
        var r,
          a = 0;
        function l() {
          var n = this,
            l = +new Date() - a,
            c = arguments;
          function d() {
            (a = +new Date()), s.apply(n, c);
          }
          o && !r && d(),
            r && clearTimeout(r),
            o === t && l > e
              ? d()
              : !0 !== i &&
                (r = setTimeout(
                  o
                    ? function () {
                        r = t;
                      }
                    : d,
                  o === t ? e - l : e
                ));
        }
        return (
          "boolean" != typeof i && ((o = s), (s = i), (i = t)),
          n.guid && (l.guid = s.guid = s.guid || n.guid++),
          l
        );
      }),
      (n.debounce = function (e, n, s) {
        return s === t ? i(e, n, !1) : i(e, s, !1 !== n);
      });
  })(this),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (i) {
          return (e.Bloodhound = t(i));
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : (e.Bloodhound = t(e.jQuery));
  })(this, function (e) {
    var t = (function () {
        "use strict";
        return {
          isMsie: function () {
            return (
              !!/(msie|trident)/i.test(navigator.userAgent) &&
              navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
            );
          },
          isBlankString: function (e) {
            return !e || /^\s*$/.test(e);
          },
          escapeRegExChars: function (e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          },
          isString: function (e) {
            return "string" == typeof e;
          },
          isNumber: function (e) {
            return "number" == typeof e;
          },
          isArray: e.isArray,
          isFunction: e.isFunction,
          isObject: e.isPlainObject,
          isUndefined: function (e) {
            return void 0 === e;
          },
          isElement: function (e) {
            return !(!e || 1 !== e.nodeType);
          },
          isJQuery: function (t) {
            return t instanceof e;
          },
          toStr: function (e) {
            return t.isUndefined(e) || null === e ? "" : e + "";
          },
          bind: e.proxy,
          each: function (t, i) {
            e.each(t, function (e, t) {
              return i(t, e);
            });
          },
          map: e.map,
          filter: e.grep,
          every: function (t, i) {
            var n = !0;
            return t
              ? (e.each(t, function (e, s) {
                  if (!(n = i.call(null, s, e, t))) return !1;
                }),
                !!n)
              : n;
          },
          some: function (t, i) {
            var n = !1;
            return t
              ? (e.each(t, function (e, s) {
                  if ((n = i.call(null, s, e, t))) return !1;
                }),
                !!n)
              : n;
          },
          mixin: e.extend,
          identity: function (e) {
            return e;
          },
          clone: function (t) {
            return e.extend(!0, {}, t);
          },
          getIdGenerator: function () {
            var e = 0;
            return function () {
              return e++;
            };
          },
          templatify: function (t) {
            return e.isFunction(t)
              ? t
              : function () {
                  return String(t);
                };
          },
          defer: function (e) {
            setTimeout(e, 0);
          },
          debounce: function (e, t, i) {
            var n, s;
            return function () {
              var o,
                r,
                a = this,
                l = arguments;
              return (
                (o = function () {
                  (n = null), i || (s = e.apply(a, l));
                }),
                (r = i && !n),
                clearTimeout(n),
                (n = setTimeout(o, t)),
                r && (s = e.apply(a, l)),
                s
              );
            };
          },
          throttle: function (e, t) {
            var i, n, s, o, r, a;
            return (
              (r = 0),
              (a = function () {
                (r = new Date()), (s = null), (o = e.apply(i, n));
              }),
              function () {
                var l = new Date(),
                  c = t - (l - r);
                return (
                  (i = this),
                  (n = arguments),
                  c <= 0
                    ? (clearTimeout(s),
                      (s = null),
                      (r = l),
                      (o = e.apply(i, n)))
                    : s || (s = setTimeout(a, c)),
                  o
                );
              }
            );
          },
          stringify: function (e) {
            return t.isString(e) ? e : JSON.stringify(e);
          },
          guid: function () {
            function e(e) {
              var t = (Math.random().toString(16) + "000000000").substr(2, 8);
              return e ? "-" + t.substr(0, 4) + "-" + t.substr(4, 4) : t;
            }
            return "tt-" + e() + e(!0) + e(!0) + e();
          },
          noop: function () {},
        };
      })(),
      i = "1.3.1",
      n = (function () {
        "use strict";
        return {
          nonword: i,
          whitespace: e,
          ngram: n,
          obj: { nonword: s(i), whitespace: s(e), ngram: s(n) },
        };
        function e(e) {
          return (e = t.toStr(e)) ? e.split(/\s+/) : [];
        }
        function i(e) {
          return (e = t.toStr(e)) ? e.split(/\W+/) : [];
        }
        function n(e) {
          e = t.toStr(e);
          var i = [],
            n = "";
          return (
            t.each(e.split(""), function (e) {
              e.match(/\s+/) ? (n = "") : (i.push(n + e), (n += e));
            }),
            i
          );
        }
        function s(e) {
          return function (i) {
            return (
              (i = t.isArray(i) ? i : [].slice.call(arguments, 0)),
              function (n) {
                var s = [];
                return (
                  t.each(i, function (i) {
                    s = s.concat(e(t.toStr(n[i])));
                  }),
                  s
                );
              }
            );
          };
        }
      })(),
      s = (function () {
        "use strict";
        function i(i) {
          (this.maxSize = t.isNumber(i) ? i : 100),
            this.reset(),
            this.maxSize <= 0 && (this.set = this.get = e.noop);
        }
        function n() {
          this.head = this.tail = null;
        }
        function s(e, t) {
          (this.key = e), (this.val = t), (this.prev = this.next = null);
        }
        return (
          t.mixin(i.prototype, {
            set: function (e, t) {
              var i,
                n = this.list.tail;
              this.size >= this.maxSize &&
                (this.list.remove(n), delete this.hash[n.key], this.size--),
                (i = this.hash[e])
                  ? ((i.val = t), this.list.moveToFront(i))
                  : ((i = new s(e, t)),
                    this.list.add(i),
                    (this.hash[e] = i),
                    this.size++);
            },
            get: function (e) {
              var t = this.hash[e];
              if (t) return this.list.moveToFront(t), t.val;
            },
            reset: function () {
              (this.size = 0), (this.hash = {}), (this.list = new n());
            },
          }),
          t.mixin(n.prototype, {
            add: function (e) {
              this.head && ((e.next = this.head), (this.head.prev = e)),
                (this.head = e),
                (this.tail = this.tail || e);
            },
            remove: function (e) {
              e.prev ? (e.prev.next = e.next) : (this.head = e.next),
                e.next ? (e.next.prev = e.prev) : (this.tail = e.prev);
            },
            moveToFront: function (e) {
              this.remove(e), this.add(e);
            },
          }),
          i
        );
      })(),
      o = (function () {
        "use strict";
        var i;
        try {
          (i = window.localStorage).setItem("~~~", "!"), i.removeItem("~~~");
        } catch (e) {
          i = null;
        }
        function n(e, n) {
          (this.prefix = ["__", e, "__"].join("")),
            (this.ttlKey = "__ttl__"),
            (this.keyMatcher = new RegExp(
              "^" + t.escapeRegExChars(this.prefix)
            )),
            (this.ls = n || i),
            !this.ls && this._noop();
        }
        return (
          t.mixin(n.prototype, {
            _prefix: function (e) {
              return this.prefix + e;
            },
            _ttlKey: function (e) {
              return this._prefix(e) + this.ttlKey;
            },
            _noop: function () {
              this.get =
                this.set =
                this.remove =
                this.clear =
                this.isExpired =
                  t.noop;
            },
            _safeSet: function (e, t) {
              try {
                this.ls.setItem(e, t);
              } catch (e) {
                "QuotaExceededError" === e.name && (this.clear(), this._noop());
              }
            },
            get: function (e) {
              return (
                this.isExpired(e) && this.remove(e),
                r(this.ls.getItem(this._prefix(e)))
              );
            },
            set: function (e, i, n) {
              return (
                t.isNumber(n)
                  ? this._safeSet(this._ttlKey(e), o(s() + n))
                  : this.ls.removeItem(this._ttlKey(e)),
                this._safeSet(this._prefix(e), o(i))
              );
            },
            remove: function (e) {
              return (
                this.ls.removeItem(this._ttlKey(e)),
                this.ls.removeItem(this._prefix(e)),
                this
              );
            },
            clear: function () {
              var e,
                t = (function (e) {
                  var t,
                    n,
                    s = [],
                    o = i.length;
                  for (t = 0; t < o; t++)
                    (n = i.key(t)).match(e) && s.push(n.replace(e, ""));
                  return s;
                })(this.keyMatcher);
              for (e = t.length; e--; ) this.remove(t[e]);
              return this;
            },
            isExpired: function (e) {
              var i = r(this.ls.getItem(this._ttlKey(e)));
              return !!(t.isNumber(i) && s() > i);
            },
          }),
          n
        );
        function s() {
          return new Date().getTime();
        }
        function o(e) {
          return JSON.stringify(t.isUndefined(e) ? null : e);
        }
        function r(t) {
          return e.parseJSON(t);
        }
      })(),
      r = (function () {
        "use strict";
        var i = 0,
          n = {},
          o = new s(10);
        function r(e) {
          (e = e || {}),
            (this.maxPendingRequests = e.maxPendingRequests || 6),
            (this.cancelled = !1),
            (this.lastReq = null),
            (this._send = e.transport),
            (this._get = e.limiter ? e.limiter(this._get) : this._get),
            (this._cache = !1 === e.cache ? new s(0) : o);
        }
        return (
          (r.setMaxPendingRequests = function (e) {
            this.maxPendingRequests = e;
          }),
          (r.resetCache = function () {
            o.reset();
          }),
          t.mixin(r.prototype, {
            _fingerprint: function (t) {
              return (t = t || {}).url + t.type + e.param(t.data || {});
            },
            _get: function (e, t) {
              var s,
                o,
                r = this;
              function a(e) {
                t(null, e), r._cache.set(s, e);
              }
              function l() {
                t(!0);
              }
              (s = this._fingerprint(e)),
                this.cancelled ||
                  s !== this.lastReq ||
                  ((o = n[s])
                    ? o.done(a).fail(l)
                    : i < this.maxPendingRequests
                    ? (i++,
                      (n[s] = this._send(e)
                        .done(a)
                        .fail(l)
                        .always(function () {
                          i--,
                            delete n[s],
                            r.onDeckRequestArgs &&
                              (r._get.apply(r, r.onDeckRequestArgs),
                              (r.onDeckRequestArgs = null));
                        })))
                    : (this.onDeckRequestArgs = [].slice.call(arguments, 0)));
            },
            get: function (i, n) {
              var s, o;
              (n = n || e.noop),
                (i = t.isString(i) ? { url: i } : i || {}),
                (o = this._fingerprint(i)),
                (this.cancelled = !1),
                (this.lastReq = o),
                (s = this._cache.get(o)) ? n(null, s) : this._get(i, n);
            },
            cancel: function () {
              this.cancelled = !0;
            },
          }),
          r
        );
      })(),
      a = (window.SearchIndex = (function () {
        "use strict";
        var i = "c";
        function n(i) {
          ((i = i || {}).datumTokenizer && i.queryTokenizer) ||
            e.error("datumTokenizer and queryTokenizer are both required"),
            (this.identify = i.identify || t.stringify),
            (this.datumTokenizer = i.datumTokenizer),
            (this.queryTokenizer = i.queryTokenizer),
            (this.matchAnyQueryToken = i.matchAnyQueryToken),
            this.reset();
        }
        return (
          t.mixin(n.prototype, {
            bootstrap: function (e) {
              (this.datums = e.datums), (this.trie = e.trie);
            },
            add: function (e) {
              var n = this;
              (e = t.isArray(e) ? e : [e]),
                t.each(e, function (e) {
                  var r, a;
                  (n.datums[(r = n.identify(e))] = e),
                    (a = s(n.datumTokenizer(e))),
                    t.each(a, function (e) {
                      var t, s, a;
                      for (t = n.trie, s = e.split(""); (a = s.shift()); )
                        (t = t[i][a] || (t[i][a] = o())).i.push(r);
                    });
                });
            },
            get: function (e) {
              var i = this;
              return t.map(e, function (e) {
                return i.datums[e];
              });
            },
            search: function (e) {
              var n,
                o,
                r = this;
              return (
                (n = s(this.queryTokenizer(e))),
                t.each(n, function (e) {
                  var t, n, s, a;
                  if (o && 0 === o.length && !r.matchAnyQueryToken) return !1;
                  for (t = r.trie, n = e.split(""); t && (s = n.shift()); )
                    t = t[i][s];
                  if (t && 0 === n.length)
                    (a = t.i.slice(0)),
                      (o = o
                        ? (function (e, t) {
                            var i = 0,
                              n = 0,
                              s = [];
                            (e = e.sort()), (t = t.sort());
                            var o = e.length,
                              r = t.length;
                            for (; i < o && n < r; )
                              e[i] < t[n]
                                ? i++
                                : (e[i] > t[n] || (s.push(e[i]), i++), n++);
                            return s;
                          })(o, a)
                        : a);
                  else if (!r.matchAnyQueryToken) return (o = []), !1;
                }),
                o
                  ? t.map(
                      (function (e) {
                        for (
                          var t = {}, i = [], n = 0, s = e.length;
                          n < s;
                          n++
                        )
                          t[e[n]] || ((t[e[n]] = !0), i.push(e[n]));
                        return i;
                      })(o),
                      function (e) {
                        return r.datums[e];
                      }
                    )
                  : []
              );
            },
            all: function () {
              var e = [];
              for (var t in this.datums) e.push(this.datums[t]);
              return e;
            },
            reset: function () {
              (this.datums = {}), (this.trie = o());
            },
            serialize: function () {
              return { datums: this.datums, trie: this.trie };
            },
          }),
          n
        );
        function s(e) {
          return (
            (e = t.filter(e, function (e) {
              return !!e;
            })),
            (e = t.map(e, function (e) {
              return e.toLowerCase();
            }))
          );
        }
        function o() {
          var e = { i: [] };
          return (e[i] = {}), e;
        }
      })()),
      l = (function () {
        "use strict";
        var e;
        function i(e) {
          (this.url = e.url),
            (this.ttl = e.ttl),
            (this.cache = e.cache),
            (this.prepare = e.prepare),
            (this.transform = e.transform),
            (this.transport = e.transport),
            (this.thumbprint = e.thumbprint),
            (this.storage = new o(e.cacheKey));
        }
        return (
          (e = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint",
          }),
          t.mixin(i.prototype, {
            _settings: function () {
              return { url: this.url, type: "GET", dataType: "json" };
            },
            store: function (t) {
              this.cache &&
                (this.storage.set(e.data, t, this.ttl),
                this.storage.set(e.protocol, location.protocol, this.ttl),
                this.storage.set(e.thumbprint, this.thumbprint, this.ttl));
            },
            fromCache: function () {
              var t,
                i = {};
              return this.cache
                ? ((i.data = this.storage.get(e.data)),
                  (i.protocol = this.storage.get(e.protocol)),
                  (i.thumbprint = this.storage.get(e.thumbprint)),
                  (t =
                    i.thumbprint !== this.thumbprint ||
                    i.protocol !== location.protocol),
                  i.data && !t ? i.data : null)
                : null;
            },
            fromNetwork: function (e) {
              var t,
                i = this;
              e &&
                ((t = this.prepare(this._settings())),
                this.transport(t)
                  .fail(function () {
                    e(!0);
                  })
                  .done(function (t) {
                    e(null, i.transform(t));
                  }));
            },
            clear: function () {
              return this.storage.clear(), this;
            },
          }),
          i
        );
      })(),
      c = (function () {
        "use strict";
        function e(e) {
          (this.url = e.url),
            (this.prepare = e.prepare),
            (this.transform = e.transform),
            (this.indexResponse = e.indexResponse),
            (this.transport = new r({
              cache: e.cache,
              limiter: e.limiter,
              transport: e.transport,
              maxPendingRequests: e.maxPendingRequests,
            }));
        }
        return (
          t.mixin(e.prototype, {
            _settings: function () {
              return { url: this.url, type: "GET", dataType: "json" };
            },
            get: function (e, t) {
              var i,
                n = this;
              if (t)
                return (
                  (e = e || ""),
                  (i = this.prepare(e, this._settings())),
                  this.transport.get(i, function (e, i) {
                    t(e ? [] : n.transform(i));
                  })
                );
            },
            cancelLastRequest: function () {
              this.transport.cancel();
            },
          }),
          e
        );
      })(),
      d = (function () {
        "use strict";
        return function (s) {
          var o, r;
          return (
            (o = {
              initialize: !0,
              identify: t.stringify,
              datumTokenizer: null,
              queryTokenizer: null,
              matchAnyQueryToken: !1,
              sufficient: 5,
              indexRemote: !1,
              sorter: null,
              local: [],
              prefetch: null,
              remote: null,
            }),
            !(s = t.mixin(o, s || {})).datumTokenizer &&
              e.error("datumTokenizer is required"),
            !s.queryTokenizer && e.error("queryTokenizer is required"),
            (r = s.sorter),
            (s.sorter = r
              ? function (e) {
                  return e.sort(r);
                }
              : t.identity),
            (s.local = t.isFunction(s.local) ? s.local() : s.local),
            (s.prefetch = (function (s) {
              var o;
              if (!s) return null;
              return (
                (o = {
                  url: null,
                  ttl: 864e5,
                  cache: !0,
                  cacheKey: null,
                  thumbprint: "",
                  prepare: t.identity,
                  transform: t.identity,
                  transport: null,
                }),
                (s = t.isString(s) ? { url: s } : s),
                (s = t.mixin(o, s)),
                !s.url && e.error("prefetch requires url to be set"),
                (s.transform = s.filter || s.transform),
                (s.cacheKey = s.cacheKey || s.url),
                (s.thumbprint = i + s.thumbprint),
                (s.transport = s.transport ? n(s.transport) : e.ajax),
                s
              );
            })(s.prefetch)),
            (s.remote = (function (i) {
              var s;
              if (!i) return;
              return (
                (s = {
                  url: null,
                  cache: !0,
                  prepare: null,
                  replace: null,
                  wildcard: null,
                  limiter: null,
                  rateLimitBy: "debounce",
                  rateLimitWait: 300,
                  transform: t.identity,
                  transport: null,
                }),
                (i = t.isString(i) ? { url: i } : i),
                (i = t.mixin(s, i)),
                !i.url && e.error("remote requires url to be set"),
                (i.transform = i.filter || i.transform),
                (i.prepare = (function (e) {
                  var t, i, n;
                  if (((t = e.prepare), (i = e.replace), (n = e.wildcard), t))
                    return t;
                  t = i ? s : e.wildcard ? o : r;
                  return t;
                  function s(e, t) {
                    return (t.url = i(t.url, e)), t;
                  }
                  function o(e, t) {
                    return (t.url = t.url.replace(n, encodeURIComponent(e))), t;
                  }
                  function r(e, t) {
                    return t;
                  }
                })(i)),
                (i.limiter = (function (e) {
                  var i, n, s;
                  (i = e.limiter),
                    (n = e.rateLimitBy),
                    (s = e.rateLimitWait),
                    i || (i = /^throttle$/i.test(n) ? r(s) : o(s));
                  return i;
                  function o(e) {
                    return function (i) {
                      return t.debounce(i, e);
                    };
                  }
                  function r(e) {
                    return function (i) {
                      return t.throttle(i, e);
                    };
                  }
                })(i)),
                (i.transport = i.transport ? n(i.transport) : e.ajax),
                delete i.replace,
                delete i.wildcard,
                delete i.rateLimitBy,
                delete i.rateLimitWait,
                i
              );
            })(s.remote)),
            s
          );
        };
        function n(i) {
          return function (n) {
            var s = e.Deferred();
            return (
              i(
                n,
                function (e) {
                  t.defer(function () {
                    s.resolve(e);
                  });
                },
                function (e) {
                  t.defer(function () {
                    s.reject(e);
                  });
                }
              ),
              s
            );
          };
        }
      })(),
      u = (function () {
        "use strict";
        var i;
        function s(e) {
          (e = d(e)),
            (this.sorter = e.sorter),
            (this.identify = e.identify),
            (this.sufficient = e.sufficient),
            (this.indexRemote = e.indexRemote),
            (this.local = e.local),
            (this.remote = e.remote ? new c(e.remote) : null),
            (this.prefetch = e.prefetch ? new l(e.prefetch) : null),
            (this.index = new a({
              identify: this.identify,
              datumTokenizer: e.datumTokenizer,
              queryTokenizer: e.queryTokenizer,
            })),
            !1 !== e.initialize && this.initialize();
        }
        return (
          (i = window && window.Bloodhound),
          (s.noConflict = function () {
            return window && (window.Bloodhound = i), s;
          }),
          (s.tokenizers = n),
          t.mixin(s.prototype, {
            __ttAdapter: function () {
              var e = this;
              return this.remote
                ? function (t, i, n) {
                    return e.search(t, i, n);
                  }
                : function (t, i) {
                    return e.search(t, i);
                  };
            },
            _loadPrefetch: function () {
              var t,
                i,
                n = this;
              return (
                (t = e.Deferred()),
                this.prefetch
                  ? (i = this.prefetch.fromCache())
                    ? (this.index.bootstrap(i), t.resolve())
                    : this.prefetch.fromNetwork(function (e, i) {
                        if (e) return t.reject();
                        n.add(i),
                          n.prefetch.store(n.index.serialize()),
                          t.resolve();
                      })
                  : t.resolve(),
                t.promise()
              );
            },
            _initialize: function () {
              var e = this;
              return (
                this.clear(),
                (this.initPromise = this._loadPrefetch()).done(function () {
                  e.add(e.local);
                }),
                this.initPromise
              );
            },
            initialize: function (e) {
              return !this.initPromise || e
                ? this._initialize()
                : this.initPromise;
            },
            add: function (e) {
              return this.index.add(e), this;
            },
            get: function (e) {
              return (
                (e = t.isArray(e) ? e : [].slice.call(arguments)),
                this.index.get(e)
              );
            },
            search: function (e, i, n) {
              var s,
                o = this;
              return (
                (i = i || t.noop),
                (n = n || t.noop),
                (s = this.sorter(this.index.search(e))),
                i(this.remote ? s.slice() : s),
                this.remote && s.length < this.sufficient
                  ? this.remote.get(e, function (e) {
                      var i = [];
                      t.each(e, function (e) {
                        !t.some(s, function (t) {
                          return o.identify(e) === o.identify(t);
                        }) && i.push(e);
                      }),
                        o.indexRemote && o.add(i),
                        n(i);
                    })
                  : this.remote && this.remote.cancelLastRequest(),
                this
              );
            },
            all: function () {
              return this.index.all();
            },
            clear: function () {
              return this.index.reset(), this;
            },
            clearPrefetchCache: function () {
              return this.prefetch && this.prefetch.clear(), this;
            },
            clearRemoteCache: function () {
              return r.resetCache(), this;
            },
            ttAdapter: function () {
              return this.__ttAdapter();
            },
          }),
          s
        );
      })();
    return u;
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery")))
      : t(e.jQuery);
  })(this, function (e) {
    var t = (function () {
        "use strict";
        return {
          isMsie: function () {
            return (
              !!/(msie|trident)/i.test(navigator.userAgent) &&
              navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
            );
          },
          isBlankString: function (e) {
            return !e || /^\s*$/.test(e);
          },
          escapeRegExChars: function (e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          },
          isString: function (e) {
            return "string" == typeof e;
          },
          isNumber: function (e) {
            return "number" == typeof e;
          },
          isArray: e.isArray,
          isFunction: e.isFunction,
          isObject: e.isPlainObject,
          isUndefined: function (e) {
            return void 0 === e;
          },
          isElement: function (e) {
            return !(!e || 1 !== e.nodeType);
          },
          isJQuery: function (t) {
            return t instanceof e;
          },
          toStr: function (e) {
            return t.isUndefined(e) || null === e ? "" : e + "";
          },
          bind: e.proxy,
          each: function (t, i) {
            e.each(t, function (e, t) {
              return i(t, e);
            });
          },
          map: e.map,
          filter: e.grep,
          every: function (t, i) {
            var n = !0;
            return t
              ? (e.each(t, function (e, s) {
                  if (!(n = i.call(null, s, e, t))) return !1;
                }),
                !!n)
              : n;
          },
          some: function (t, i) {
            var n = !1;
            return t
              ? (e.each(t, function (e, s) {
                  if ((n = i.call(null, s, e, t))) return !1;
                }),
                !!n)
              : n;
          },
          mixin: e.extend,
          identity: function (e) {
            return e;
          },
          clone: function (t) {
            return e.extend(!0, {}, t);
          },
          getIdGenerator: function () {
            var e = 0;
            return function () {
              return e++;
            };
          },
          templatify: function (t) {
            return e.isFunction(t)
              ? t
              : function () {
                  return String(t);
                };
          },
          defer: function (e) {
            setTimeout(e, 0);
          },
          debounce: function (e, t, i) {
            var n, s;
            return function () {
              var o,
                r,
                a = this,
                l = arguments;
              return (
                (o = function () {
                  (n = null), i || (s = e.apply(a, l));
                }),
                (r = i && !n),
                clearTimeout(n),
                (n = setTimeout(o, t)),
                r && (s = e.apply(a, l)),
                s
              );
            };
          },
          throttle: function (e, t) {
            var i, n, s, o, r, a;
            return (
              (r = 0),
              (a = function () {
                (r = new Date()), (s = null), (o = e.apply(i, n));
              }),
              function () {
                var l = new Date(),
                  c = t - (l - r);
                return (
                  (i = this),
                  (n = arguments),
                  c <= 0
                    ? (clearTimeout(s),
                      (s = null),
                      (r = l),
                      (o = e.apply(i, n)))
                    : s || (s = setTimeout(a, c)),
                  o
                );
              }
            );
          },
          stringify: function (e) {
            return t.isString(e) ? e : JSON.stringify(e);
          },
          guid: function () {
            function e(e) {
              var t = (Math.random().toString(16) + "000000000").substr(2, 8);
              return e ? "-" + t.substr(0, 4) + "-" + t.substr(4, 4) : t;
            }
            return "tt-" + e() + e(!0) + e(!0) + e();
          },
          noop: function () {},
        };
      })(),
      i = (function () {
        "use strict";
        var e = {
          wrapper: "twitter-typeahead",
          input: "tt-input",
          hint: "tt-hint",
          menu: "tt-menu",
          dataset: "tt-dataset",
          suggestion: "tt-suggestion",
          selectable: "tt-selectable",
          empty: "tt-empty",
          open: "tt-open",
          cursor: "tt-cursor",
          highlight: "tt-highlight",
        };
        return function (o) {
          var r, a;
          return (
            (a = t.mixin({}, e, o)),
            {
              css: (r = { css: s(), classes: a, html: i(a), selectors: n(a) })
                .css,
              html: r.html,
              classes: r.classes,
              selectors: r.selectors,
              mixin: function (e) {
                t.mixin(e, r);
              },
            }
          );
        };
        function i(e) {
          return {
            wrapper: '<span class="' + e.wrapper + '"></span>',
            menu: '<div role="listbox" class="' + e.menu + '"></div>',
          };
        }
        function n(e) {
          var i = {};
          return (
            t.each(e, function (e, t) {
              i[t] = "." + e;
            }),
            i
          );
        }
        function s() {
          var e = {
            wrapper: {},
            hint: {
              position: "absolute",
              top: "0",
              left: "0",
              borderColor: "transparent",
              boxShadow: "none",
              opacity: "1",
            },
            input: {
              position: "relative",
              verticalAlign: "top",
              backgroundColor: "transparent",
            },
            inputWithNoHint: { position: "relative", verticalAlign: "top" },
            menu: { display: "none" },
            ltr: { left: "0", right: "auto" },
            rtl: { left: "auto", right: " 0" },
          };
          return (
            t.isMsie() &&
              t.mixin(e.input, {
                backgroundImage:
                  "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
              }),
            e
          );
        }
      })(),
      n = (function () {
        "use strict";
        var i;
        function n(t) {
          (t && t.el) || e.error("EventBus initialized without el"),
            (this.$el = e(t.el));
        }
        return (
          "typeahead:",
          (i = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted",
          }),
          t.mixin(n.prototype, {
            _trigger: function (t, i) {
              var n = e.Event("typeahead:" + t);
              return this.$el.trigger.call(this.$el, n, i || []), n;
            },
            before: function (e) {
              var t;
              return (
                (t = [].slice.call(arguments, 1)),
                this._trigger("before" + e, t).isDefaultPrevented()
              );
            },
            trigger: function (e) {
              var t;
              this._trigger(e, [].slice.call(arguments, 1)),
                (t = i[e]) && this._trigger(t, [].slice.call(arguments, 1));
            },
          }),
          n
        );
      })(),
      s = (function () {
        "use strict";
        var e = /\s+/,
          t = (function () {
            var e;
            e = window.setImmediate
              ? function (e) {
                  setImmediate(function () {
                    e();
                  });
                }
              : function (e) {
                  setTimeout(function () {
                    e();
                  }, 0);
                };
            return e;
          })();
        return {
          onSync: function (e, t, n) {
            return i.call(this, "sync", e, t, n);
          },
          onAsync: function (e, t, n) {
            return i.call(this, "async", e, t, n);
          },
          off: function (t) {
            var i;
            if (!this._callbacks) return this;
            t = t.split(e);
            for (; (i = t.shift()); ) delete this._callbacks[i];
            return this;
          },
          trigger: function (i) {
            var s, o, r, a, l;
            if (!this._callbacks) return this;
            (i = i.split(e)), (r = [].slice.call(arguments, 1));
            for (; (s = i.shift()) && (o = this._callbacks[s]); )
              (a = n(o.sync, this, [s].concat(r))),
                (l = n(o.async, this, [s].concat(r))),
                a() && t(l);
            return this;
          },
        };
        function i(t, i, n, s) {
          var o;
          if (!n) return this;
          for (
            i = i.split(e),
              n = s
                ? (function (e, t) {
                    return e.bind
                      ? e.bind(t)
                      : function () {
                          e.apply(t, [].slice.call(arguments, 0));
                        };
                  })(n, s)
                : n,
              this._callbacks = this._callbacks || {};
            (o = i.shift());

          )
            (this._callbacks[o] = this._callbacks[o] || {
              sync: [],
              async: [],
            }),
              this._callbacks[o][t].push(n);
          return this;
        }
        function n(e, t, i) {
          return function () {
            for (var n, s = 0, o = e.length; !n && s < o; s += 1)
              n = !1 === e[s].apply(t, i);
            return !n;
          };
        }
      })(),
      o = (function (e) {
        "use strict";
        var i = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: !1,
            caseSensitive: !1,
            diacriticInsensitive: !1,
          },
          n = {
            A: "[AaªÀ-Åà-åĀ-ąǍǎȀ-ȃȦȧᴬᵃḀḁẚẠ-ảₐ℀℁℻⒜Ⓐⓐ㍱-㍴㎀-㎄㎈㎉㎩-㎯㏂㏊㏟㏿Ａａ]",
            B: "[BbᴮᵇḂ-ḇℬ⒝Ⓑⓑ㍴㎅-㎇㏃㏈㏔㏝Ｂｂ]",
            C: "[CcÇçĆ-čᶜ℀ℂ℃℅℆ℭⅭⅽ⒞Ⓒⓒ㍶㎈㎉㎝㎠㎤㏄-㏇Ｃｃ]",
            D: "[DdĎďǄ-ǆǱ-ǳᴰᵈḊ-ḓⅅⅆⅮⅾ⒟Ⓓⓓ㋏㍲㍷-㍹㎗㎭-㎯㏅㏈Ｄｄ]",
            E: "[EeÈ-Ëè-ëĒ-ěȄ-ȇȨȩᴱᵉḘ-ḛẸ-ẽₑ℡ℯℰⅇ⒠Ⓔⓔ㉐㋍㋎Ｅｅ]",
            F: "[FfᶠḞḟ℉ℱ℻⒡Ⓕⓕ㎊-㎌㎙ﬀ-ﬄＦｆ]",
            G: "[GgĜ-ģǦǧǴǵᴳᵍḠḡℊ⒢Ⓖⓖ㋌㋍㎇㎍-㎏㎓㎬㏆㏉㏒㏿Ｇｇ]",
            H: "[HhĤĥȞȟʰᴴḢ-ḫẖℋ-ℎ⒣Ⓗⓗ㋌㍱㎐-㎔㏊㏋㏗Ｈｈ]",
            I: "[IiÌ-Ïì-ïĨ-İĲĳǏǐȈ-ȋᴵᵢḬḭỈ-ịⁱℐℑℹⅈⅠ-ⅣⅥ-ⅨⅪⅫⅰ-ⅳⅵ-ⅸⅺⅻ⒤Ⓘⓘ㍺㏌㏕ﬁﬃＩｉ]",
            J: "[JjĲ-ĵǇ-ǌǰʲᴶⅉ⒥ⒿⓙⱼＪｊ]",
            K: "[KkĶķǨǩᴷᵏḰ-ḵK⒦Ⓚⓚ㎄㎅㎉㎏㎑㎘㎞㎢㎦㎪㎸㎾㏀㏆㏍-㏏Ｋｋ]",
            L: "[LlĹ-ŀǇ-ǉˡᴸḶḷḺ-ḽℒℓ℡Ⅼⅼ⒧Ⓛⓛ㋏㎈㎉㏐-㏓㏕㏖㏿ﬂﬄＬｌ]",
            M: "[MmᴹᵐḾ-ṃ℠™ℳⅯⅿ⒨Ⓜⓜ㍷-㍹㎃㎆㎎㎒㎖㎙-㎨㎫㎳㎷㎹㎽㎿㏁㏂㏎㏐㏔-㏖㏘㏙㏞㏟Ｍｍ]",
            N: "[NnÑñŃ-ŉǊ-ǌǸǹᴺṄ-ṋⁿℕ№⒩Ⓝⓝ㎁㎋㎚㎱㎵㎻㏌㏑Ｎｎ]",
            O: "[OoºÒ-Öò-öŌ-őƠơǑǒǪǫȌ-ȏȮȯᴼᵒỌ-ỏₒ℅№ℴ⒪Ⓞⓞ㍵㏇㏒㏖Ｏｏ]",
            P: "[PpᴾᵖṔ-ṗℙ⒫Ⓟⓟ㉐㍱㍶㎀㎊㎩-㎬㎰㎴㎺㏋㏗-㏚Ｐｐ]",
            Q: "[Qqℚ⒬Ⓠⓠ㏃Ｑｑ]",
            R: "[RrŔ-řȐ-ȓʳᴿᵣṘ-ṛṞṟ₨ℛ-ℝ⒭Ⓡⓡ㋍㍴㎭-㎯㏚㏛Ｒｒ]",
            S: "[SsŚ-šſȘșˢṠ-ṣ₨℁℠⒮Ⓢⓢ㎧㎨㎮-㎳㏛㏜ﬆＳｓ]",
            T: "[TtŢ-ťȚțᵀᵗṪ-ṱẗ℡™⒯Ⓣⓣ㉐㋏㎔㏏ﬅﬆＴｔ]",
            U: "[UuÙ-Üù-üŨ-ųƯưǓǔȔ-ȗᵁᵘᵤṲ-ṷỤ-ủ℆⒰Ⓤⓤ㍳㍺Ｕｕ]",
            V: "[VvᵛᵥṼ-ṿⅣ-Ⅷⅳ-ⅷ⒱Ⓥⓥⱽ㋎㍵㎴-㎹㏜㏞Ｖｖ]",
            W: "[WwŴŵʷᵂẀ-ẉẘ⒲Ⓦⓦ㎺-㎿㏝Ｗｗ]",
            X: "[XxˣẊ-ẍₓ℻Ⅸ-Ⅻⅸ-ⅻ⒳Ⓧⓧ㏓Ｘｘ]",
            Y: "[YyÝýÿŶ-ŸȲȳʸẎẏẙỲ-ỹ⒴Ⓨⓨ㏉Ｙｙ]",
            Z: "[ZzŹ-žǱ-ǳᶻẐ-ẕℤℨ⒵Ⓩⓩ㎐-㎔Ｚｚ]",
          };
        return function (n) {
          var o;
          (n = t.mixin({}, i, n)).node &&
            n.pattern &&
            ((n.pattern = t.isArray(n.pattern) ? n.pattern : [n.pattern]),
            (o = (function (e, i, n, o) {
              for (var r, a = [], l = 0, c = e.length; l < c; l++) {
                var d = t.escapeRegExChars(e[l]);
                o && (d = d.replace(/\S/g, s)), a.push(d);
              }
              return (
                (r = n
                  ? "\\b(" + a.join("|") + ")\\b"
                  : "(" + a.join("|") + ")"),
                i ? new RegExp(r) : new RegExp(r, "i")
              );
            })(
              n.pattern,
              n.caseSensitive,
              n.wordsOnly,
              n.diacriticInsensitive
            )),
            (function e(t, i) {
              for (var n, s = 0; s < t.childNodes.length; s++)
                3 === (n = t.childNodes[s]).nodeType
                  ? (s += i(n) ? 1 : 0)
                  : e(n, i);
            })(n.node, function (t) {
              var i, s, r;
              (i = o.exec(t.data)) &&
                ((r = e.createElement(n.tagName)),
                n.className && (r.className = n.className),
                (s = t.splitText(i.index)).splitText(i[0].length),
                r.appendChild(s.cloneNode(!0)),
                t.parentNode.replaceChild(r, s));
              return !!i;
            }));
        };
        function s(e) {
          return n[e.toUpperCase()] || e;
        }
      })(window.document),
      r = (function () {
        "use strict";
        var i;
        function n(i, n) {
          var s, o;
          (i = i || {}).input || e.error("input is missing"),
            n.mixin(this),
            (this.$hint = e(i.hint)),
            (this.$input = e(i.input)),
            (this.$menu = e(i.menu)),
            (s = this.$input.attr("id") || t.guid()),
            this.$menu.attr("id", s + "_listbox"),
            this.$hint.attr({ "aria-hidden": !0 }),
            this.$input.attr({
              "aria-owns": s + "_listbox",
              role: "combobox",
              "aria-autocomplete": "list",
              "aria-expanded": !1,
            }),
            (this.query = this.$input.val()),
            (this.queryWhenFocused = this.hasFocus() ? this.query : null),
            (this.$overflowHelper =
              ((o = this.$input),
              e('<pre aria-hidden="true"></pre>')
                .css({
                  position: "absolute",
                  visibility: "hidden",
                  whiteSpace: "pre",
                  fontFamily: o.css("font-family"),
                  fontSize: o.css("font-size"),
                  fontStyle: o.css("font-style"),
                  fontVariant: o.css("font-variant"),
                  fontWeight: o.css("font-weight"),
                  wordSpacing: o.css("word-spacing"),
                  letterSpacing: o.css("letter-spacing"),
                  textIndent: o.css("text-indent"),
                  textRendering: o.css("text-rendering"),
                  textTransform: o.css("text-transform"),
                })
                .insertAfter(o))),
            this._checkLanguageDirection(),
            0 === this.$hint.length &&
              (this.setHint =
                this.getHint =
                this.clearHint =
                this.clearHintIfInvalid =
                  t.noop),
            this.onSync("cursorchange", this._updateDescendent);
        }
        return (
          (i = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down",
          }),
          (n.normalizeQuery = function (e) {
            return t
              .toStr(e)
              .replace(/^\s*/g, "")
              .replace(/\s{2,}/g, " ");
          }),
          t.mixin(n.prototype, s, {
            _onBlur: function () {
              this.resetInputValue(), this.trigger("blurred");
            },
            _onFocus: function () {
              (this.queryWhenFocused = this.query), this.trigger("focused");
            },
            _onKeydown: function (e) {
              var t = i[e.which || e.keyCode];
              this._managePreventDefault(t, e),
                t && this._shouldTrigger(t, e) && this.trigger(t + "Keyed", e);
            },
            _onInput: function () {
              this._setQuery(this.getInputValue()),
                this.clearHintIfInvalid(),
                this._checkLanguageDirection();
            },
            _managePreventDefault: function (e, t) {
              var i;
              switch (e) {
                case "up":
                case "down":
                  i = !o(t);
                  break;
                default:
                  i = !1;
              }
              i && t.preventDefault();
            },
            _shouldTrigger: function (e, t) {
              var i;
              if ("tab" === e) i = !o(t);
              else i = !0;
              return i;
            },
            _checkLanguageDirection: function () {
              var e = (this.$input.css("direction") || "ltr").toLowerCase();
              this.dir !== e &&
                ((this.dir = e),
                this.$hint.attr("dir", e),
                this.trigger("langDirChanged", e));
            },
            _setQuery: function (e, t) {
              var i, s, o, r;
              (o = e),
                (r = this.query),
                (s =
                  !!(i = n.normalizeQuery(o) === n.normalizeQuery(r)) &&
                  this.query.length !== e.length),
                (this.query = e),
                t || i
                  ? !t && s && this.trigger("whitespaceChanged", this.query)
                  : this.trigger("queryChanged", this.query);
            },
            _updateDescendent: function (e, t) {
              this.$input.attr("aria-activedescendant", t);
            },
            bind: function () {
              var e,
                n,
                s,
                o,
                r = this;
              return (
                (e = t.bind(this._onBlur, this)),
                (n = t.bind(this._onFocus, this)),
                (s = t.bind(this._onKeydown, this)),
                (o = t.bind(this._onInput, this)),
                this.$input
                  .on("blur.tt", e)
                  .on("focus.tt", n)
                  .on("keydown.tt", s),
                !t.isMsie() || t.isMsie() > 9
                  ? this.$input.on("input.tt", o)
                  : this.$input.on(
                      "keydown.tt keypress.tt cut.tt paste.tt",
                      function (e) {
                        i[e.which || e.keyCode] ||
                          t.defer(t.bind(r._onInput, r, e));
                      }
                    ),
                this
              );
            },
            focus: function () {
              this.$input.focus();
            },
            blur: function () {
              this.$input.blur();
            },
            getLangDir: function () {
              return this.dir;
            },
            getQuery: function () {
              return this.query || "";
            },
            setQuery: function (e, t) {
              this.setInputValue(e), this._setQuery(e, t);
            },
            hasQueryChangedSinceLastFocus: function () {
              return this.query !== this.queryWhenFocused;
            },
            getInputValue: function () {
              return this.$input.val();
            },
            setInputValue: function (e) {
              this.$input.val(e),
                this.clearHintIfInvalid(),
                this._checkLanguageDirection();
            },
            resetInputValue: function () {
              this.setInputValue(this.query);
            },
            getHint: function () {
              return this.$hint.val();
            },
            setHint: function (e) {
              this.$hint.val(e);
            },
            clearHint: function () {
              this.setHint("");
            },
            clearHintIfInvalid: function () {
              var e, t, i;
              (i =
                (e = this.getInputValue()) !== (t = this.getHint()) &&
                0 === t.indexOf(e)),
                !("" !== e && i && !this.hasOverflow()) && this.clearHint();
            },
            hasFocus: function () {
              return this.$input.is(":focus");
            },
            hasOverflow: function () {
              var e = this.$input.width() - 2;
              return (
                this.$overflowHelper.text(this.getInputValue()),
                this.$overflowHelper.width() >= e
              );
            },
            isCursorAtEnd: function () {
              var e, i, n;
              return (
                (e = this.$input.val().length),
                (i = this.$input[0].selectionStart),
                t.isNumber(i)
                  ? i === e
                  : !document.selection ||
                    ((n = document.selection.createRange()).moveStart(
                      "character",
                      -e
                    ),
                    e === n.text.length)
              );
            },
            destroy: function () {
              this.$hint.off(".tt"),
                this.$input.off(".tt"),
                this.$overflowHelper.remove(),
                (this.$hint = this.$input = this.$overflowHelper = e("<div>"));
            },
            setAriaExpanded: function (e) {
              this.$input.attr("aria-expanded", e);
            },
          }),
          n
        );
        function o(e) {
          return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
        }
      })(),
      a = (function () {
        "use strict";
        var i, n;
        function r(i, s) {
          var o;
          ((i = i || {}).templates = i.templates || {}),
            (i.templates.notFound = i.templates.notFound || i.templates.empty),
            i.source || e.error("missing source"),
            i.node || e.error("missing node"),
            i.name &&
              ((o = i.name), !/^[_a-zA-Z0-9-]+$/.test(o)) &&
              e.error("invalid dataset name: " + i.name),
            s.mixin(this),
            (this.highlight = !!i.highlight),
            (this.name = t.toStr(i.name || n())),
            (this.limit = i.limit || 5),
            (this.displayFn = (function (e) {
              return (e = e || t.stringify), t.isFunction(e) ? e : i;
              function i(t) {
                return t[e];
              }
            })(i.display || i.displayKey)),
            (this.templates = (function (i, n) {
              return {
                notFound: i.notFound && t.templatify(i.notFound),
                pending: i.pending && t.templatify(i.pending),
                header: i.header && t.templatify(i.header),
                footer: i.footer && t.templatify(i.footer),
                suggestion: i.suggestion ? s : o,
              };
              function s(n) {
                var s = i.suggestion;
                return e(s(n)).attr("id", t.guid());
              }
              function o(i) {
                return e('<div role="option">').attr("id", t.guid()).text(n(i));
              }
            })(i.templates, this.displayFn)),
            (this.source = i.source.__ttAdapter
              ? i.source.__ttAdapter()
              : i.source),
            (this.async = t.isUndefined(i.async)
              ? this.source.length > 2
              : !!i.async),
            this._resetLastSuggestion(),
            (this.$el = e(i.node)
              .attr("role", "presentation")
              .addClass(this.classes.dataset)
              .addClass(this.classes.dataset + "-" + this.name));
        }
        return (
          (i = {
            dataset: "tt-selectable-dataset",
            val: "tt-selectable-display",
            obj: "tt-selectable-object",
          }),
          (n = t.getIdGenerator()),
          (r.extractData = function (t) {
            var n = e(t);
            return n.data(i.obj)
              ? {
                  dataset: n.data(i.dataset) || "",
                  val: n.data(i.val) || "",
                  obj: n.data(i.obj) || null,
                }
              : null;
          }),
          t.mixin(r.prototype, s, {
            _overwrite: function (e, t) {
              (t = t || []).length
                ? this._renderSuggestions(e, t)
                : this.async && this.templates.pending
                ? this._renderPending(e)
                : !this.async && this.templates.notFound
                ? this._renderNotFound(e)
                : this._empty(),
                this.trigger("rendered", t, !1, this.name);
            },
            _append: function (e, t) {
              (t = t || []).length && this.$lastSuggestion.length
                ? this._appendSuggestions(e, t)
                : t.length
                ? this._renderSuggestions(e, t)
                : !this.$lastSuggestion.length &&
                  this.templates.notFound &&
                  this._renderNotFound(e),
                this.trigger("rendered", t, !0, this.name);
            },
            _renderSuggestions: function (e, t) {
              var i;
              (i = this._getSuggestionsFragment(e, t)),
                (this.$lastSuggestion = i.children().last()),
                this.$el
                  .html(i)
                  .prepend(this._getHeader(e, t))
                  .append(this._getFooter(e, t));
            },
            _appendSuggestions: function (e, t) {
              var i, n;
              (n = (i = this._getSuggestionsFragment(e, t)).children().last()),
                this.$lastSuggestion.after(i),
                (this.$lastSuggestion = n);
            },
            _renderPending: function (e) {
              var t = this.templates.pending;
              this._resetLastSuggestion(),
                t && this.$el.html(t({ query: e, dataset: this.name }));
            },
            _renderNotFound: function (e) {
              var t = this.templates.notFound;
              this._resetLastSuggestion(),
                t && this.$el.html(t({ query: e, dataset: this.name }));
            },
            _empty: function () {
              this.$el.empty(), this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function (n, s) {
              var r,
                a = this;
              return (
                (r = document.createDocumentFragment()),
                t.each(s, function (t) {
                  var s, o;
                  (o = a._injectQuery(n, t)),
                    (s = e(a.templates.suggestion(o))
                      .data(i.dataset, a.name)
                      .data(i.obj, t)
                      .data(i.val, a.displayFn(t))
                      .addClass(
                        a.classes.suggestion + " " + a.classes.selectable
                      )),
                    r.appendChild(s[0]);
                }),
                this.highlight &&
                  o({ className: this.classes.highlight, node: r, pattern: n }),
                e(r)
              );
            },
            _getFooter: function (e, t) {
              return this.templates.footer
                ? this.templates.footer({
                    query: e,
                    suggestions: t,
                    dataset: this.name,
                  })
                : null;
            },
            _getHeader: function (e, t) {
              return this.templates.header
                ? this.templates.header({
                    query: e,
                    suggestions: t,
                    dataset: this.name,
                  })
                : null;
            },
            _resetLastSuggestion: function () {
              this.$lastSuggestion = e();
            },
            _injectQuery: function (e, i) {
              return t.isObject(i) ? t.mixin({ _query: e }, i) : i;
            },
            update: function (t) {
              var i = this,
                n = !1,
                s = !1,
                o = 0;
              function r(e) {
                s ||
                  ((s = !0),
                  (e = (e || []).slice(0, i.limit)),
                  (o = e.length),
                  i._overwrite(t, e),
                  o < i.limit &&
                    i.async &&
                    i.trigger("asyncRequested", t, i.name));
              }
              this.cancel(),
                (this.cancel = function () {
                  (n = !0),
                    (i.cancel = e.noop),
                    i.async && i.trigger("asyncCanceled", t, i.name);
                }),
                this.source(t, r, function (s) {
                  if (((s = s || []), !n && o < i.limit)) {
                    i.cancel = e.noop;
                    var r = Math.abs(o - i.limit);
                    (o += r),
                      i._append(t, s.slice(0, r)),
                      i.async && i.trigger("asyncReceived", t, i.name);
                  }
                }),
                !s && r([]);
            },
            cancel: e.noop,
            clear: function () {
              this._empty(), this.cancel(), this.trigger("cleared");
            },
            isEmpty: function () {
              return this.$el.is(":empty");
            },
            destroy: function () {
              this.$el = e("<div>");
            },
          }),
          r
        );
      })(),
      l = (function () {
        "use strict";
        function i(i, n) {
          var s = this;
          (i = i || {}).node || e.error("node is required"),
            n.mixin(this),
            (this.$node = e(i.node)),
            (this.query = null),
            (this.datasets = t.map(i.datasets, function (t) {
              var i = s.$node.find(t.node).first();
              return (
                (t.node = i.length ? i : e("<div>").appendTo(s.$node)),
                new a(t, n)
              );
            }));
        }
        return (
          t.mixin(i.prototype, s, {
            _onSelectableClick: function (t) {
              this.trigger(
                "selectableClicked",
                e(t.currentTarget),
                e(t.target)
              );
            },
            _onRendered: function (e, t, i, n) {
              this.$node.toggleClass(
                this.classes.empty,
                this._allDatasetsEmpty()
              ),
                this.trigger("datasetRendered", t, i, n),
                this._allDatasetsEmpty()
                  ? this._hide()
                  : this.isOpen() && this._show();
            },
            _onCleared: function () {
              this.$node.toggleClass(
                this.classes.empty,
                this._allDatasetsEmpty()
              ),
                this.trigger("datasetCleared"),
                this._allDatasetsEmpty()
                  ? this._hide()
                  : this.isOpen() && this._show();
            },
            _propagate: function () {
              this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function () {
              return t.every(
                this.datasets,
                t.bind(function (e) {
                  var t = e.isEmpty();
                  return this.$node.attr("aria-expanded", !t), t;
                }, this)
              );
            },
            _getSelectables: function () {
              return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function () {
              var e = this.getActiveSelectable();
              e && e.removeClass(this.classes.cursor);
            },
            _ensureVisible: function (e) {
              var t, i, n, s;
              (i = (t = e.position().top) + e.outerHeight(!0)),
                (n = this.$node.scrollTop()),
                (s =
                  this.$node.height() +
                  parseInt(this.$node.css("paddingTop"), 10) +
                  parseInt(this.$node.css("paddingBottom"), 10)),
                t < 0
                  ? this.$node.scrollTop(n + t)
                  : s < i && this.$node.scrollTop(n + (i - s));
            },
            bind: function () {
              var i,
                n = this;
              return (
                (i = t.bind(this._onSelectableClick, this)),
                this.$node.on("click.tt", this.selectors.selectable, i),
                this.$node.on(
                  "mouseover",
                  this.selectors.selectable,
                  function () {
                    n.setCursor(e(this));
                  }
                ),
                this.$node.on("mouseleave", function () {
                  n._removeCursor();
                }),
                t.each(this.datasets, function (e) {
                  e.onSync("asyncRequested", n._propagate, n)
                    .onSync("asyncCanceled", n._propagate, n)
                    .onSync("asyncReceived", n._propagate, n)
                    .onSync("rendered", n._onRendered, n)
                    .onSync("cleared", n._onCleared, n);
                }),
                this
              );
            },
            isOpen: function () {
              return this.$node.hasClass(this.classes.open);
            },
            open: function () {
              this.$node.scrollTop(0),
                this.$node.addClass(this.classes.open),
                !this._allDatasetsEmpty() && this._show();
            },
            close: function () {
              this.$node.attr("aria-expanded", !1),
                this.$node.removeClass(this.classes.open),
                this._removeCursor(),
                this._hide();
            },
            _hide: function () {
              this.$node.hide();
            },
            _show: function () {
              this.$node.css("display", "block");
            },
            setLanguageDirection: function (e) {
              this.$node.attr("dir", e),
                this.$node.css("ltr" === e ? this.css.ltr : this.css.rtl);
            },
            selectableRelativeToCursor: function (e) {
              var t, i, n;
              return (
                (i = this.getActiveSelectable()),
                (t = this._getSelectables()),
                -1 ===
                (n =
                  (n =
                    (((n = (i ? t.index(i) : -1) + e) + 1) % (t.length + 1)) -
                    1) < -1
                    ? t.length - 1
                    : n)
                  ? null
                  : t.eq(n)
              );
            },
            setCursor: function (e) {
              this._removeCursor(),
                (e = e && e.first()) &&
                  (e.addClass(this.classes.cursor), this._ensureVisible(e));
            },
            getSelectableData: function (e) {
              return e && e.length ? a.extractData(e) : null;
            },
            getActiveSelectable: function () {
              var e = this._getSelectables()
                .filter(this.selectors.cursor)
                .first();
              return e.length ? e : null;
            },
            getTopSelectable: function () {
              var e = this._getSelectables().first();
              return e.length ? e : null;
            },
            update: function (e) {
              var i = e !== this.query;
              return (
                i &&
                  ((this.query = e),
                  t.each(this.datasets, function (t) {
                    t.update(e);
                  })),
                i
              );
            },
            empty: function () {
              t.each(this.datasets, function (e) {
                e.clear();
              }),
                (this.query = null),
                this.$node.addClass(this.classes.empty);
            },
            destroy: function () {
              this.$node.off(".tt"),
                (this.$node = e("<div>")),
                t.each(this.datasets, function (e) {
                  e.destroy();
                });
            },
          }),
          i
        );
      })(),
      c = (function () {
        "use strict";
        function i(i) {
          (this.$el = e("<span></span>", {
            role: "status",
            "aria-live": "polite",
          }).css({
            position: "absolute",
            padding: "0",
            border: "0",
            height: "1px",
            width: "1px",
            "margin-bottom": "-1px",
            "margin-right": "-1px",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            "white-space": "nowrap",
          })),
            i.$input.after(this.$el),
            t.each(
              i.menu.datasets,
              t.bind(function (e) {
                e.onSync &&
                  (e.onSync("rendered", t.bind(this.update, this)),
                  e.onSync("cleared", t.bind(this.cleared, this)));
              }, this)
            );
        }
        return (
          t.mixin(i.prototype, {
            update: function (e, t) {
              var i,
                n = t.length;
              (i =
                1 === n
                  ? { result: "result", is: "is" }
                  : { result: "results", is: "are" }),
                this.$el.text(
                  n +
                    " " +
                    i.result +
                    " " +
                    i.is +
                    " available, use up and down arrow keys to navigate."
                );
            },
            cleared: function () {
              this.$el.text("");
            },
          }),
          i
        );
      })(),
      d = (function () {
        "use strict";
        var e = l.prototype;
        function i() {
          l.apply(this, [].slice.call(arguments, 0));
        }
        return (
          t.mixin(i.prototype, l.prototype, {
            open: function () {
              return (
                !this._allDatasetsEmpty() && this._show(),
                e.open.apply(this, [].slice.call(arguments, 0))
              );
            },
            close: function () {
              return (
                this._hide(), e.close.apply(this, [].slice.call(arguments, 0))
              );
            },
            _onRendered: function () {
              return (
                this._allDatasetsEmpty()
                  ? this._hide()
                  : this.isOpen() && this._show(),
                e._onRendered.apply(this, [].slice.call(arguments, 0))
              );
            },
            _onCleared: function () {
              return (
                this._allDatasetsEmpty()
                  ? this._hide()
                  : this.isOpen() && this._show(),
                e._onCleared.apply(this, [].slice.call(arguments, 0))
              );
            },
            setLanguageDirection: function (t) {
              return (
                this.$node.css("ltr" === t ? this.css.ltr : this.css.rtl),
                e.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
              );
            },
            _hide: function () {
              this.$node.hide();
            },
            _show: function () {
              this.$node.css("display", "block");
            },
          }),
          i
        );
      })(),
      u = (function () {
        "use strict";
        function i(i, s) {
          var o, r, a, l, c, d, u, p, h, f, m;
          (i = i || {}).input || e.error("missing input"),
            i.menu || e.error("missing menu"),
            i.eventBus || e.error("missing event bus"),
            s.mixin(this),
            (this.eventBus = i.eventBus),
            (this.minLength = t.isNumber(i.minLength) ? i.minLength : 1),
            (this.input = i.input),
            (this.menu = i.menu),
            (this.enabled = !0),
            (this.autoselect = !!i.autoselect),
            (this.active = !1),
            this.input.hasFocus() && this.activate(),
            (this.dir = this.input.getLangDir()),
            this._hacks(),
            this.menu
              .bind()
              .onSync("selectableClicked", this._onSelectableClicked, this)
              .onSync("asyncRequested", this._onAsyncRequested, this)
              .onSync("asyncCanceled", this._onAsyncCanceled, this)
              .onSync("asyncReceived", this._onAsyncReceived, this)
              .onSync("datasetRendered", this._onDatasetRendered, this)
              .onSync("datasetCleared", this._onDatasetCleared, this),
            (o = n(this, "activate", "open", "_onFocused")),
            (r = n(this, "deactivate", "_onBlurred")),
            (a = n(this, "isActive", "isOpen", "_onEnterKeyed")),
            (l = n(this, "isActive", "isOpen", "_onTabKeyed")),
            (c = n(this, "isActive", "_onEscKeyed")),
            (d = n(this, "isActive", "open", "_onUpKeyed")),
            (u = n(this, "isActive", "open", "_onDownKeyed")),
            (p = n(this, "isActive", "isOpen", "_onLeftKeyed")),
            (h = n(this, "isActive", "isOpen", "_onRightKeyed")),
            (f = n(this, "_openIfActive", "_onQueryChanged")),
            (m = n(this, "_openIfActive", "_onWhitespaceChanged")),
            this.input
              .bind()
              .onSync("focused", o, this)
              .onSync("blurred", r, this)
              .onSync("enterKeyed", a, this)
              .onSync("tabKeyed", l, this)
              .onSync("escKeyed", c, this)
              .onSync("upKeyed", d, this)
              .onSync("downKeyed", u, this)
              .onSync("leftKeyed", p, this)
              .onSync("rightKeyed", h, this)
              .onSync("queryChanged", f, this)
              .onSync("whitespaceChanged", m, this)
              .onSync("langDirChanged", this._onLangDirChanged, this);
        }
        return (
          t.mixin(i.prototype, {
            _hacks: function () {
              var i, n;
              (i = this.input.$input || e("<div>")),
                (n = this.menu.$node || e("<div>")),
                i.on("blur.tt", function (e) {
                  var s, o, r;
                  (s = document.activeElement),
                    (o = n.is(s)),
                    (r = n.has(s).length > 0),
                    t.isMsie() &&
                      (o || r) &&
                      (e.preventDefault(),
                      e.stopImmediatePropagation(),
                      t.defer(function () {
                        i.focus();
                      }));
                }),
                n.on("mousedown.tt", function (e) {
                  e.preventDefault();
                });
            },
            _onSelectableClicked: function (e, t, i) {
              this.select(t, i);
            },
            _onDatasetCleared: function () {
              this._updateHint();
            },
            _onDatasetRendered: function (e, t, i, n) {
              if ((this._updateHint(), this.autoselect)) {
                var s = this.selectors.cursor.substr(1);
                this.menu.$node
                  .find(this.selectors.suggestion)
                  .first()
                  .addClass(s);
              }
              this.eventBus.trigger("render", t, i, n);
            },
            _onAsyncRequested: function (e, t, i) {
              this.eventBus.trigger("asyncrequest", i, t);
            },
            _onAsyncCanceled: function (e, t, i) {
              this.eventBus.trigger("asynccancel", i, t);
            },
            _onAsyncReceived: function (e, t, i) {
              this.eventBus.trigger("asyncreceive", i, t);
            },
            _onFocused: function () {
              this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function () {
              this.input.hasQueryChangedSinceLastFocus() &&
                this.eventBus.trigger("change", this.input.getQuery());
            },
            _onEnterKeyed: function (e, t) {
              var i;
              (i = this.menu.getActiveSelectable())
                ? this.select(i) && (t.preventDefault(), t.stopPropagation())
                : this.autoselect &&
                  this.select(this.menu.getTopSelectable()) &&
                  (t.preventDefault(), t.stopPropagation());
            },
            _onTabKeyed: function (e, t) {
              var i;
              (i = this.menu.getActiveSelectable())
                ? this.select(i) && t.preventDefault()
                : this.autoselect &&
                  (i = this.menu.getTopSelectable()) &&
                  this.autocomplete(i) &&
                  t.preventDefault();
            },
            _onEscKeyed: function () {
              this.close();
            },
            _onUpKeyed: function () {
              this.moveCursor(-1);
            },
            _onDownKeyed: function () {
              this.moveCursor(1);
            },
            _onLeftKeyed: function () {
              "rtl" === this.dir &&
                this.input.isCursorAtEnd() &&
                this.autocomplete(
                  this.menu.getActiveSelectable() ||
                    this.menu.getTopSelectable()
                );
            },
            _onRightKeyed: function () {
              "ltr" === this.dir &&
                this.input.isCursorAtEnd() &&
                this.autocomplete(
                  this.menu.getActiveSelectable() ||
                    this.menu.getTopSelectable()
                );
            },
            _onQueryChanged: function (e, t) {
              this._minLengthMet(t) ? this.menu.update(t) : this.menu.empty();
            },
            _onWhitespaceChanged: function () {
              this._updateHint();
            },
            _onLangDirChanged: function (e, t) {
              this.dir !== t &&
                ((this.dir = t), this.menu.setLanguageDirection(t));
            },
            _openIfActive: function () {
              this.isActive() && this.open();
            },
            _minLengthMet: function (e) {
              return (
                (e = t.isString(e) ? e : this.input.getQuery() || "").length >=
                this.minLength
              );
            },
            _updateHint: function () {
              var e, i, n, s, o, a;
              (e = this.menu.getTopSelectable()),
                (i = this.menu.getSelectableData(e)),
                (n = this.input.getInputValue()),
                !i || t.isBlankString(n) || this.input.hasOverflow()
                  ? this.input.clearHint()
                  : ((s = r.normalizeQuery(n)),
                    (o = t.escapeRegExChars(s)),
                    (a = new RegExp("^(?:" + o + ")(.+$)", "i").exec(i.val)) &&
                      this.input.setHint(n + a[1]));
            },
            isEnabled: function () {
              return this.enabled;
            },
            enable: function () {
              this.enabled = !0;
            },
            disable: function () {
              this.enabled = !1;
            },
            isActive: function () {
              return this.active;
            },
            activate: function () {
              return (
                !!this.isActive() ||
                (!(!this.isEnabled() || this.eventBus.before("active")) &&
                  ((this.active = !0), this.eventBus.trigger("active"), !0))
              );
            },
            deactivate: function () {
              return (
                !this.isActive() ||
                (!this.eventBus.before("idle") &&
                  ((this.active = !1),
                  this.close(),
                  this.eventBus.trigger("idle"),
                  !0))
              );
            },
            isOpen: function () {
              return this.menu.isOpen();
            },
            open: function () {
              return (
                this.isOpen() ||
                  this.eventBus.before("open") ||
                  (this.input.setAriaExpanded(!0),
                  this.menu.open(),
                  this._updateHint(),
                  this.eventBus.trigger("open")),
                this.isOpen()
              );
            },
            close: function () {
              return (
                this.isOpen() &&
                  !this.eventBus.before("close") &&
                  (this.input.setAriaExpanded(!1),
                  this.menu.close(),
                  this.input.clearHint(),
                  this.input.resetInputValue(),
                  this.eventBus.trigger("close")),
                !this.isOpen()
              );
            },
            setVal: function (e) {
              this.input.setQuery(t.toStr(e));
            },
            getVal: function () {
              return this.input.getQuery();
            },
            select: function (e, t) {
              var i = this.menu.getSelectableData(e);
              return (
                !(
                  !i || this.eventBus.before("select", i.obj, i.dataset, e, t)
                ) &&
                (this.input.setQuery(i.val, !0),
                this.eventBus.trigger("select", i.obj, i.dataset),
                this.close(),
                !0)
              );
            },
            autocomplete: function (e) {
              var t, i;
              return (
                (t = this.input.getQuery()),
                !(
                  !((i = this.menu.getSelectableData(e)) && t !== i.val) ||
                  this.eventBus.before("autocomplete", i.obj, i.dataset)
                ) &&
                  (this.input.setQuery(i.val),
                  this.eventBus.trigger("autocomplete", i.obj, i.dataset),
                  !0)
              );
            },
            moveCursor: function (e) {
              var t, i, n, s, o, r;
              return (
                (t = this.input.getQuery()),
                (i = this.menu.selectableRelativeToCursor(e)),
                (s = (n = this.menu.getSelectableData(i)) ? n.obj : null),
                (o = n ? n.dataset : null),
                (r = i ? i.attr("id") : null),
                this.input.trigger("cursorchange", r),
                !(this._minLengthMet() && this.menu.update(t)) &&
                  !this.eventBus.before("cursorchange", s, o) &&
                  (this.menu.setCursor(i),
                  n
                    ? "string" == typeof n.val &&
                      this.input.setInputValue(n.val)
                    : (this.input.resetInputValue(), this._updateHint()),
                  this.eventBus.trigger("cursorchange", s, o),
                  !0)
              );
            },
            destroy: function () {
              this.input.destroy(), this.menu.destroy();
            },
          }),
          i
        );
        function n(e) {
          var i = [].slice.call(arguments, 1);
          return function () {
            var n = [].slice.call(arguments);
            t.each(i, function (t) {
              return e[t].apply(e, n);
            });
          };
        }
      })();
    !(function () {
      "use strict";
      var s, o, a;
      function p(t, i) {
        t.each(function () {
          var t,
            n = e(this);
          (t = n.data(o.typeahead)) && i(t, n);
        });
      }
      function h(i) {
        var n;
        return (n = t.isJQuery(i) || t.isElement(i) ? e(i).first() : []).length
          ? n
          : null;
      }
      (s = e.fn.typeahead),
        (o = { www: "tt-www", attrs: "tt-attrs", typeahead: "tt-typeahead" }),
        (a = {
          initialize: function (s, a) {
            var p;
            return (
              (a = t.isArray(a) ? a : [].slice.call(arguments, 1)),
              (p = i((s = s || {}).classNames)),
              this.each(function () {
                var i, f, m, g, v, _, y, w, b, $, x;
                t.each(a, function (e) {
                  e.highlight = !!s.highlight;
                }),
                  (i = e(this)),
                  (f = e(p.html.wrapper)),
                  (m = h(s.hint)),
                  (g = h(s.menu)),
                  (v = !1 !== s.hint && !m),
                  (_ = !1 !== s.menu && !g),
                  v &&
                    (m = (function (e, t) {
                      return e
                        .clone()
                        .addClass(t.classes.hint)
                        .removeData()
                        .css(t.css.hint)
                        .css(
                          ((i = e),
                          {
                            backgroundAttachment: i.css(
                              "background-attachment"
                            ),
                            backgroundClip: i.css("background-clip"),
                            backgroundColor: i.css("background-color"),
                            backgroundImage: i.css("background-image"),
                            backgroundOrigin: i.css("background-origin"),
                            backgroundPosition: i.css("background-position"),
                            backgroundRepeat: i.css("background-repeat"),
                            backgroundSize: i.css("background-size"),
                          })
                        )
                        .prop({ readonly: !0, required: !1 })
                        .removeAttr("id name placeholder")
                        .removeClass("required")
                        .attr({ spellcheck: "false", tabindex: -1 });
                      var i;
                    })(i, p)),
                  _ && (g = e(p.html.menu).css(p.css.menu)),
                  m && m.val(""),
                  (i = (function (e, t) {
                    e.data(o.attrs, {
                      dir: e.attr("dir"),
                      autocomplete: e.attr("autocomplete"),
                      spellcheck: e.attr("spellcheck"),
                      style: e.attr("style"),
                    }),
                      e.addClass(t.classes.input).attr({ spellcheck: !1 });
                    try {
                      !e.attr("dir") && e.attr("dir", "auto");
                    } catch (e) {}
                    return e;
                  })(i, p)),
                  (v || _) &&
                    (f.css(p.css.wrapper),
                    i.css(v ? p.css.input : p.css.inputWithNoHint),
                    i
                      .wrap(f)
                      .parent()
                      .prepend(v ? m : null)
                      .append(_ ? g : null));
                (x = _ ? d : l),
                  (y = new n({ el: i })),
                  (w = new r({ hint: m, input: i, menu: g }, p)),
                  (b = new x({ node: g, datasets: a }, p)),
                  new c({ $input: i, menu: b }),
                  ($ = new u(
                    {
                      input: w,
                      menu: b,
                      eventBus: y,
                      minLength: s.minLength,
                      autoselect: s.autoselect,
                    },
                    p
                  )),
                  i.data(o.www, p),
                  i.data(o.typeahead, $);
              })
            );
          },
          isEnabled: function () {
            var e;
            return (
              p(this.first(), function (t) {
                e = t.isEnabled();
              }),
              e
            );
          },
          enable: function () {
            return (
              p(this, function (e) {
                e.enable();
              }),
              this
            );
          },
          disable: function () {
            return (
              p(this, function (e) {
                e.disable();
              }),
              this
            );
          },
          isActive: function () {
            var e;
            return (
              p(this.first(), function (t) {
                e = t.isActive();
              }),
              e
            );
          },
          activate: function () {
            return (
              p(this, function (e) {
                e.activate();
              }),
              this
            );
          },
          deactivate: function () {
            return (
              p(this, function (e) {
                e.deactivate();
              }),
              this
            );
          },
          isOpen: function () {
            var e;
            return (
              p(this.first(), function (t) {
                e = t.isOpen();
              }),
              e
            );
          },
          open: function () {
            return (
              p(this, function (e) {
                e.open();
              }),
              this
            );
          },
          close: function () {
            return (
              p(this, function (e) {
                e.close();
              }),
              this
            );
          },
          select: function (t) {
            var i = !1,
              n = e(t);
            return (
              p(this.first(), function (e) {
                i = e.select(n);
              }),
              i
            );
          },
          autocomplete: function (t) {
            var i = !1,
              n = e(t);
            return (
              p(this.first(), function (e) {
                i = e.autocomplete(n);
              }),
              i
            );
          },
          moveCursor: function (e) {
            var t = !1;
            return (
              p(this.first(), function (i) {
                t = i.moveCursor(e);
              }),
              t
            );
          },
          val: function (e) {
            var i;
            return arguments.length
              ? (p(this, function (i) {
                  i.setVal(t.toStr(e));
                }),
                this)
              : (p(this.first(), function (e) {
                  i = e.getVal();
                }),
                i);
          },
          destroy: function () {
            return (
              p(this, function (e, i) {
                !(function (e) {
                  var i, n;
                  (i = e.data(o.www)),
                    (n = e.parent().filter(i.selectors.wrapper)),
                    t.each(e.data(o.attrs), function (i, n) {
                      t.isUndefined(i) ? e.removeAttr(n) : e.attr(n, i);
                    }),
                    e
                      .removeData(o.typeahead)
                      .removeData(o.www)
                      .removeData(o.attr)
                      .removeClass(i.classes.input),
                    n.length && (e.detach().insertAfter(n), n.remove());
                })(i),
                  e.destroy();
              }),
              this
            );
          },
        }),
        (e.fn.typeahead = function (e) {
          return a[e]
            ? a[e].apply(this, [].slice.call(arguments, 1))
            : a.initialize.apply(this, arguments);
        }),
        (e.fn.typeahead.noConflict = function () {
          return (e.fn.typeahead = s), this;
        });
    })();
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = function (t, i) {
          return (
            void 0 === i &&
              (i =
                "undefined" != typeof window
                  ? require("jquery")
                  : require("jquery")(t)),
            e(i),
            i
          );
        })
      : e(jQuery);
  })(function (e) {
    ((x =
      e && e.fn && e.fn.select2 && e.fn.select2.amd ? e.fn.select2.amd : x) &&
      x.requirejs) ||
      (x ? (t = x) : (x = {}),
      (a = {}),
      (l = {}),
      (c = {}),
      (d = {}),
      (u = Object.prototype.hasOwnProperty),
      (p = [].slice),
      (h = /\.js$/),
      (o = function (e, t) {
        var i,
          n,
          s = w(e),
          o = s[0];
        t = t[1];
        return (
          (e = s[1]),
          o && (i = y((o = v(o, t)))),
          o
            ? (e =
                i && i.normalize
                  ? i.normalize(
                      e,
                      ((n = t),
                      function (e) {
                        return v(e, n);
                      })
                    )
                  : v(e, t))
            : ((o = (s = w((e = v(e, t))))[0]), (e = s[1]), o && (i = y(o))),
          { f: o ? o + "!" + e : e, n: e, pr: o, p: i }
        );
      }),
      (r = {
        require: function (e) {
          return _(e);
        },
        exports: function (e) {
          var t = a[e];
          return void 0 !== t ? t : (a[e] = {});
        },
        module: function (e) {
          return {
            id: e,
            uri: "",
            exports: a[e],
            config:
              ((t = e),
              function () {
                return (c && c.config && c.config[t]) || {};
              }),
          };
          var t;
        },
      }),
      (n = function (e, t, n, s) {
        var c,
          u,
          p,
          h,
          f,
          m = [],
          v = typeof n,
          w = b((s = s || e));
        if ("undefined" == v || "function" == v) {
          for (
            t = !t.length && n.length ? ["require", "exports", "module"] : t,
              h = 0;
            h < t.length;
            h += 1
          )
            if ("require" === (u = (p = o(t[h], w)).f)) m[h] = r.require(e);
            else if ("exports" === u) (m[h] = r.exports(e)), (f = !0);
            else if ("module" === u) c = m[h] = r.module(e);
            else if (g(a, u) || g(l, u) || g(d, u)) m[h] = y(u);
            else {
              if (!p.p) throw new Error(e + " missing " + u);
              p.p.load(
                p.n,
                _(s, !0),
                (function (e) {
                  return function (t) {
                    a[e] = t;
                  };
                })(u),
                {}
              ),
                (m[h] = a[u]);
            }
          (v = n ? n.apply(a[e], m) : void 0),
            e &&
              (c && c.exports !== i && c.exports !== a[e]
                ? (a[e] = c.exports)
                : (v === i && f) || (a[e] = v));
        } else e && (a[e] = n);
      }),
      (f =
        t =
        s =
          function (e, t, a, l, d) {
            if ("string" == typeof e) return r[e] ? r[e](t) : y(o(e, b(t)).f);
            if (!e.splice) {
              if (((c = e).deps && s(c.deps, c.callback), !t)) return;
              t.splice ? ((e = t), (t = a), (a = null)) : (e = i);
            }
            return (
              (t = t || function () {}),
              "function" == typeof a && ((a = l), (l = d)),
              l
                ? n(i, e, t, a)
                : setTimeout(function () {
                    n(i, e, t, a);
                  }, 4),
              s
            );
          }),
      (s.config = function (e) {
        return s(e);
      }),
      (f._defined = a),
      ((m = function (e, t, i) {
        if ("string" != typeof e)
          throw new Error(
            "See almond README: incorrect module build, no module name"
          );
        t.splice || ((i = t), (t = [])),
          g(a, e) || g(l, e) || (l[e] = [e, t, i]);
      }).amd = { jQuery: !0 }),
      (x.requirejs = f),
      (x.require = t),
      (x.define = m)),
      x.define("almond", function () {}),
      x.define("jquery", [], function () {
        var t = e || $;
        return null == t && console && console.error, t;
      }),
      x.define("select2/utils", ["jquery"], function (e) {
        var t = {};
        function i(e) {
          var t,
            i = e.prototype,
            n = [];
          for (t in i)
            "function" == typeof i[t] && "constructor" !== t && n.push(t);
          return n;
        }
        function n() {
          this.listeners = {};
        }
        (t.Extend = function (e, t) {
          var i,
            n = {}.hasOwnProperty;
          function s() {
            this.constructor = e;
          }
          for (i in t) n.call(t, i) && (e[i] = t[i]);
          return (
            (s.prototype = t.prototype),
            (e.prototype = new s()),
            (e.__super__ = t.prototype),
            e
          );
        }),
          (t.Decorate = function (e, t) {
            var n = i(t),
              s = i(e);
            function o() {
              var i = Array.prototype.unshift,
                n = t.prototype.constructor.length,
                s = e.prototype.constructor;
              0 < n &&
                (i.call(arguments, e.prototype.constructor),
                (s = t.prototype.constructor)),
                s.apply(this, arguments);
            }
            (t.displayName = e.displayName),
              (o.prototype = new (function () {
                this.constructor = o;
              })());
            for (var r = 0; r < s.length; r++) {
              var a = s[r];
              o.prototype[a] = e.prototype[a];
            }
            for (var l = 0; l < n.length; l++) {
              var c = n[l];
              o.prototype[c] = (function (e) {
                var i = function () {},
                  n =
                    (e in o.prototype && (i = o.prototype[e]), t.prototype[e]);
                return function () {
                  return (
                    Array.prototype.unshift.call(arguments, i),
                    n.apply(this, arguments)
                  );
                };
              })(c);
            }
            return o;
          }),
          (n.prototype.on = function (e, t) {
            (this.listeners = this.listeners || {}),
              e in this.listeners
                ? this.listeners[e].push(t)
                : (this.listeners[e] = [t]);
          }),
          (n.prototype.trigger = function (e) {
            var t = Array.prototype.slice,
              i = t.call(arguments, 1);
            (this.listeners = this.listeners || {}),
              0 === (i = null == i ? [] : i).length && i.push({}),
              (i[0]._type = e) in this.listeners &&
                this.invoke(this.listeners[e], t.call(arguments, 1)),
              "*" in this.listeners &&
                this.invoke(this.listeners["*"], arguments);
          }),
          (n.prototype.invoke = function (e, t) {
            for (var i = 0, n = e.length; i < n; i++) e[i].apply(this, t);
          }),
          (t.Observable = n),
          (t.generateChars = function (e) {
            for (var t = "", i = 0; i < e; i++)
              t += Math.floor(36 * Math.random()).toString(36);
            return t;
          }),
          (t.bind = function (e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }),
          (t._convertData = function (e) {
            for (var t in e) {
              var i = t.split("-"),
                n = e;
              if (1 !== i.length) {
                for (var s = 0; s < i.length; s++) {
                  var o = i[s];
                  (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in n ||
                    (n[o] = {}),
                    s == i.length - 1 && (n[o] = e[t]),
                    (n = n[o]);
                }
                delete e[t];
              }
            }
            return e;
          }),
          (t.hasScroll = function (t, i) {
            var n = e(i),
              s = i.style.overflowX,
              o = i.style.overflowY;
            return (
              (s !== o || ("hidden" !== o && "visible" !== o)) &&
              ("scroll" === s ||
                "scroll" === o ||
                n.innerHeight() < i.scrollHeight ||
                n.innerWidth() < i.scrollWidth)
            );
          }),
          (t.escapeMarkup = function (e) {
            var t = {
              "\\": "&#92;",
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "/": "&#47;",
            };
            return "string" != typeof e
              ? e
              : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                  return t[e];
                });
          }),
          (t.__cache = {});
        var s = 0;
        return (
          (t.GetUniqueElementId = function (e) {
            var i = e.getAttribute("data-select2-id");
            return (
              null == i &&
                ((i = e.id
                  ? "select2-data-" + e.id
                  : "select2-data-" +
                    (++s).toString() +
                    "-" +
                    t.generateChars(4)),
                e.setAttribute("data-select2-id", i)),
              i
            );
          }),
          (t.StoreData = function (e, i, n) {
            (e = t.GetUniqueElementId(e)),
              t.__cache[e] || (t.__cache[e] = {}),
              (t.__cache[e][i] = n);
          }),
          (t.GetData = function (i, n) {
            var s = t.GetUniqueElementId(i);
            return n
              ? t.__cache[s] && null != t.__cache[s][n]
                ? t.__cache[s][n]
                : e(i).data(n)
              : t.__cache[s];
          }),
          (t.RemoveData = function (e) {
            var i = t.GetUniqueElementId(e);
            null != t.__cache[i] && delete t.__cache[i],
              e.removeAttribute("data-select2-id");
          }),
          (t.copyNonInternalCssClasses = function (e, t) {
            var i = (i = e.getAttribute("class").trim().split(/\s+/)).filter(
              function (e) {
                return 0 === e.indexOf("select2-");
              }
            );
            (t = (t = t.getAttribute("class").trim().split(/\s+/)).filter(
              function (e) {
                return 0 !== e.indexOf("select2-");
              }
            )),
              (i = i.concat(t));
            e.setAttribute("class", i.join(" "));
          }),
          t
        );
      }),
      x.define("select2/results", ["jquery", "./utils"], function (e, t) {
        function i(e, t, n) {
          (this.$element = e),
            (this.data = n),
            (this.options = t),
            i.__super__.constructor.call(this);
        }
        return (
          t.Extend(i, t.Observable),
          (i.prototype.render = function () {
            var t = e(
              '<ul class="select2-results__options" role="listbox"></ul>'
            );
            return (
              this.options.get("multiple") &&
                t.attr("aria-multiselectable", "true"),
              (this.$results = t)
            );
          }),
          (i.prototype.clear = function () {
            this.$results.empty();
          }),
          (i.prototype.displayMessage = function (t) {
            var i = this.options.get("escapeMarkup"),
              n =
                (this.clear(),
                this.hideLoading(),
                e(
                  '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                )),
              s = this.options.get("translations").get(t.message);
            n.append(i(s(t.args))),
              (n[0].className += " select2-results__message"),
              this.$results.append(n);
          }),
          (i.prototype.hideMessages = function () {
            this.$results.find(".select2-results__message").remove();
          }),
          (i.prototype.append = function (e) {
            this.hideLoading();
            var t = [];
            if (null == e.results || 0 === e.results.length)
              0 === this.$results.children().length &&
                this.trigger("results:message", { message: "noResults" });
            else {
              e.results = this.sort(e.results);
              for (var i = 0; i < e.results.length; i++) {
                var n = e.results[i];
                n = this.option(n);
                t.push(n);
              }
              this.$results.append(t);
            }
          }),
          (i.prototype.position = function (e, t) {
            t.find(".select2-results").append(e);
          }),
          (i.prototype.sort = function (e) {
            return this.options.get("sorter")(e);
          }),
          (i.prototype.highlightFirstItem = function () {
            var e = this.$results.find(".select2-results__option--selectable"),
              t = e.filter(".select2-results__option--selected");
            (0 < t.length ? t : e).first().trigger("mouseenter"),
              this.ensureHighlightVisible();
          }),
          (i.prototype.setClasses = function () {
            var i = this;
            this.data.current(function (n) {
              var s = n.map(function (e) {
                return e.id.toString();
              });
              i.$results
                .find(".select2-results__option--selectable")
                .each(function () {
                  var i = e(this),
                    n = t.GetData(this, "data"),
                    o = "" + n.id;
                  (null != n.element && n.element.selected) ||
                  (null == n.element && -1 < s.indexOf(o))
                    ? (this.classList.add("select2-results__option--selected"),
                      i.attr("aria-selected", "true"))
                    : (this.classList.remove(
                        "select2-results__option--selected"
                      ),
                      i.attr("aria-selected", "false"));
                });
            });
          }),
          (i.prototype.showLoading = function (e) {
            this.hideLoading(),
              (e = {
                disabled: !0,
                loading: !0,
                text: this.options.get("translations").get("searching")(e),
              }),
              ((e = this.option(e)).className += " loading-results"),
              this.$results.prepend(e);
          }),
          (i.prototype.hideLoading = function () {
            this.$results.find(".loading-results").remove();
          }),
          (i.prototype.option = function (i) {
            var n,
              s = document.createElement("li"),
              o =
                (s.classList.add("select2-results__option"),
                s.classList.add("select2-results__option--selectable"),
                { role: "option" }),
              r =
                window.Element.prototype.matches ||
                window.Element.prototype.msMatchesSelector ||
                window.Element.prototype.webkitMatchesSelector;
            for (n in (((null != i.element && r.call(i.element, ":disabled")) ||
              (null == i.element && i.disabled)) &&
              ((o["aria-disabled"] = "true"),
              s.classList.remove("select2-results__option--selectable"),
              s.classList.add("select2-results__option--disabled")),
            null == i.id &&
              s.classList.remove("select2-results__option--selectable"),
            null != i._resultId && (s.id = i._resultId),
            i.title && (s.title = i.title),
            i.children &&
              ((o.role = "group"),
              (o["aria-label"] = i.text),
              s.classList.remove("select2-results__option--selectable"),
              s.classList.add("select2-results__option--group")),
            o))
              s.setAttribute(n, o[n]);
            if (i.children) {
              r = e(s);
              for (
                var a = document.createElement("strong"),
                  l =
                    ((a.className = "select2-results__group"),
                    this.template(i, a),
                    []),
                  c = 0;
                c < i.children.length;
                c++
              ) {
                var d = i.children[c];
                d = this.option(d);
                l.push(d);
              }
              var u = e("<ul></ul>", {
                class:
                  "select2-results__options select2-results__options--nested",
                role: "none",
              });
              u.append(l), r.append(a), r.append(u);
            } else this.template(i, s);
            return t.StoreData(s, "data", i), s;
          }),
          (i.prototype.bind = function (i, n) {
            var s = this,
              o = i.id + "-results";
            this.$results.attr("id", o),
              i.on("results:all", function (e) {
                s.clear(),
                  s.append(e.data),
                  i.isOpen() && (s.setClasses(), s.highlightFirstItem());
              }),
              i.on("results:append", function (e) {
                s.append(e.data), i.isOpen() && s.setClasses();
              }),
              i.on("query", function (e) {
                s.hideMessages(), s.showLoading(e);
              }),
              i.on("select", function () {
                i.isOpen() &&
                  (s.setClasses(), s.options.get("scrollAfterSelect")) &&
                  s.highlightFirstItem();
              }),
              i.on("unselect", function () {
                i.isOpen() &&
                  (s.setClasses(), s.options.get("scrollAfterSelect")) &&
                  s.highlightFirstItem();
              }),
              i.on("open", function () {
                s.$results.attr("aria-expanded", "true"),
                  s.$results.attr("aria-hidden", "false"),
                  s.setClasses(),
                  s.ensureHighlightVisible();
              }),
              i.on("close", function () {
                s.$results.attr("aria-expanded", "false"),
                  s.$results.attr("aria-hidden", "true"),
                  s.$results.removeAttr("aria-activedescendant");
              }),
              i.on("results:toggle", function () {
                var e = s.getHighlightedResults();
                0 !== e.length && e.trigger("mouseup");
              }),
              i.on("results:select", function () {
                var e,
                  i = s.getHighlightedResults();
                0 !== i.length &&
                  ((e = t.GetData(i[0], "data")),
                  i.hasClass("select2-results__option--selected")
                    ? s.trigger("close", {})
                    : s.trigger("select", { data: e }));
              }),
              i.on("results:previous", function () {
                var e,
                  t = s.getHighlightedResults(),
                  i = s.$results.find(".select2-results__option--selectable"),
                  n = i.index(t);
                n <= 0 ||
                  ((n -= 1),
                  0 === t.length && (n = 0),
                  (t = i.eq(n)).trigger("mouseenter"),
                  (i = s.$results.offset().top),
                  (t = t.offset().top),
                  (e = s.$results.scrollTop() + (t - i)),
                  0 === n
                    ? s.$results.scrollTop(0)
                    : t - i < 0 && s.$results.scrollTop(e));
              }),
              i.on("results:next", function () {
                var e,
                  t,
                  i = s.getHighlightedResults(),
                  n = s.$results.find(".select2-results__option--selectable");
                (i = n.index(i) + 1) >= n.length ||
                  ((n = n.eq(i)).trigger("mouseenter"),
                  (e = s.$results.offset().top + s.$results.outerHeight(!1)),
                  (n = n.offset().top + n.outerHeight(!1)),
                  (t = s.$results.scrollTop() + n - e),
                  0 === i
                    ? s.$results.scrollTop(0)
                    : e < n && s.$results.scrollTop(t));
              }),
              i.on("results:focus", function (e) {
                e.element[0].classList.add(
                  "select2-results__option--highlighted"
                ),
                  e.element[0].setAttribute("aria-selected", "true");
              }),
              i.on("results:message", function (e) {
                s.displayMessage(e);
              }),
              e.fn.mousewheel &&
                this.$results.on("mousewheel", function (e) {
                  var t = s.$results.scrollTop(),
                    i = s.$results.get(0).scrollHeight - t + e.deltaY;
                  (t = 0 < e.deltaY && t - e.deltaY <= 0),
                    (i = e.deltaY < 0 && i <= s.$results.height());
                  t
                    ? (s.$results.scrollTop(0),
                      e.preventDefault(),
                      e.stopPropagation())
                    : i &&
                      (s.$results.scrollTop(
                        s.$results.get(0).scrollHeight - s.$results.height()
                      ),
                      e.preventDefault(),
                      e.stopPropagation());
                }),
              this.$results.on(
                "mouseup",
                ".select2-results__option--selectable",
                function (i) {
                  var n = e(this),
                    o = t.GetData(this, "data");
                  n.hasClass("select2-results__option--selected")
                    ? s.options.get("multiple")
                      ? s.trigger("unselect", { originalEvent: i, data: o })
                      : s.trigger("close", { originalEvent: i, data: o })
                    : s.trigger("select", { originalEvent: i, data: o });
                }
              ),
              this.$results.on(
                "mouseenter",
                ".select2-results__option--selectable",
                function (i) {
                  var n = t.GetData(this, "data");
                  s
                    .getHighlightedResults()
                    .removeClass("select2-results__option--highlighted")
                    .attr("aria-selected", "false"),
                    s.trigger("results:focus", { data: n, element: e(this) });
                }
              );
          }),
          (i.prototype.getHighlightedResults = function () {
            return this.$results.find(".select2-results__option--highlighted");
          }),
          (i.prototype.destroy = function () {
            this.$results.remove();
          }),
          (i.prototype.ensureHighlightVisible = function () {
            var e,
              t,
              i,
              n,
              s = this.getHighlightedResults();
            0 !== s.length &&
              ((e = this.$results
                .find(".select2-results__option--selectable")
                .index(s)),
              (t = this.$results.offset().top),
              (n = s.offset().top),
              (i = this.$results.scrollTop() + (n - t)),
              (n -= t),
              (i -= 2 * s.outerHeight(!1)),
              e <= 2
                ? this.$results.scrollTop(0)
                : (n > this.$results.outerHeight() || n < 0) &&
                  this.$results.scrollTop(i));
          }),
          (i.prototype.template = function (t, i) {
            var n = this.options.get("templateResult"),
              s = this.options.get("escapeMarkup");
            null == (n = n(t, i))
              ? (i.style.display = "none")
              : "string" == typeof n
              ? (i.innerHTML = s(n))
              : e(i).append(n);
          }),
          i
        );
      }),
      x.define("select2/keys", [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46,
        };
      }),
      x.define(
        "select2/selection/base",
        ["jquery", "../utils", "../keys"],
        function (e, t, i) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            t.Extend(n, t.Observable),
            (n.prototype.render = function () {
              var i = e(
                '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
              );
              return (
                (this._tabindex = 0),
                null != t.GetData(this.$element[0], "old-tabindex")
                  ? (this._tabindex = t.GetData(
                      this.$element[0],
                      "old-tabindex"
                    ))
                  : null != this.$element.attr("tabindex") &&
                    (this._tabindex = this.$element.attr("tabindex")),
                i.attr("title", this.$element.attr("title")),
                i.attr("tabindex", this._tabindex),
                i.attr("aria-disabled", "false"),
                (this.$selection = i)
              );
            }),
            (n.prototype.bind = function (e, t) {
              var n = this,
                s = e.id + "-results";
              (this.container = e),
                this.$selection.on("focus", function (e) {
                  n.trigger("focus", e);
                }),
                this.$selection.on("blur", function (e) {
                  n._handleBlur(e);
                }),
                this.$selection.on("keydown", function (e) {
                  n.trigger("keypress", e),
                    e.which === i.SPACE && e.preventDefault();
                }),
                e.on("results:focus", function (e) {
                  n.$selection.attr("aria-activedescendant", e.data._resultId);
                }),
                e.on("selection:update", function (e) {
                  n.update(e.data);
                }),
                e.on("open", function () {
                  n.$selection.attr("aria-expanded", "true"),
                    n.$selection.attr("aria-owns", s),
                    n._attachCloseHandler(e);
                }),
                e.on("close", function () {
                  n.$selection.attr("aria-expanded", "false"),
                    n.$selection.removeAttr("aria-activedescendant"),
                    n.$selection.removeAttr("aria-owns"),
                    n.$selection.trigger("focus"),
                    n._detachCloseHandler(e);
                }),
                e.on("enable", function () {
                  n.$selection.attr("tabindex", n._tabindex),
                    n.$selection.attr("aria-disabled", "false");
                }),
                e.on("disable", function () {
                  n.$selection.attr("tabindex", "-1"),
                    n.$selection.attr("aria-disabled", "true");
                });
            }),
            (n.prototype._handleBlur = function (t) {
              var i = this;
              window.setTimeout(function () {
                document.activeElement == i.$selection[0] ||
                  e.contains(i.$selection[0], document.activeElement) ||
                  i.trigger("blur", t);
              }, 1);
            }),
            (n.prototype._attachCloseHandler = function (i) {
              e(document.body).on("mousedown.select2." + i.id, function (i) {
                var n = e(i.target).closest(".select2");
                e(".select2.select2-container--open").each(function () {
                  this != n[0] && t.GetData(this, "element").select2("close");
                });
              });
            }),
            (n.prototype._detachCloseHandler = function (t) {
              e(document.body).off("mousedown.select2." + t.id);
            }),
            (n.prototype.position = function (e, t) {
              t.find(".selection").append(e);
            }),
            (n.prototype.destroy = function () {
              this._detachCloseHandler(this.container);
            }),
            (n.prototype.update = function (e) {
              throw new Error(
                "The `update` method must be defined in child classes."
              );
            }),
            (n.prototype.isEnabled = function () {
              return !this.isDisabled();
            }),
            (n.prototype.isDisabled = function () {
              return this.options.get("disabled");
            }),
            n
          );
        }
      ),
      x.define(
        "select2/selection/single",
        ["jquery", "./base", "../utils", "../keys"],
        function (e, t, i, n) {
          function s() {
            s.__super__.constructor.apply(this, arguments);
          }
          return (
            i.Extend(s, t),
            (s.prototype.render = function () {
              var e = s.__super__.render.call(this);
              return (
                e[0].classList.add("select2-selection--single"),
                e.html(
                  /*'<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'*/
                ),
                e
              );
            }),
            (s.prototype.bind = function (e, t) {
              var i = this,
                n =
                  (s.__super__.bind.apply(this, arguments),
                  e.id + "-container");
              this.$selection
                .find(".select2-selection__rendered")
                .attr("id", n)
                .attr("role", "textbox")
                .attr("aria-readonly", "true"),
                this.$selection.attr("aria-labelledby", n),
                this.$selection.attr("aria-controls", n),
                this.$selection.on("mousedown", function (e) {
                  1 === e.which && i.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on("focus", function (e) {}),
                this.$selection.on("blur", function (e) {}),
                e.on("focus", function (t) {
                  e.isOpen() || i.$selection.trigger("focus");
                });
            }),
            (s.prototype.clear = function () {
              var e = this.$selection.find(".select2-selection__rendered");
              e.empty(), e.removeAttr("title");
            }),
            (s.prototype.display = function (e, t) {
              var i = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(i(e, t));
            }),
            (s.prototype.selectionContainer = function () {
              return e("<span></span>");
            }),
            (s.prototype.update = function (e) {
              var t, i;
              0 === e.length
                ? this.clear()
                : ((e = e[0]),
                  (t = this.$selection.find(".select2-selection__rendered")),
                  (i = this.display(e, t)),
                  t.empty().append(i),
                  (i = e.title || e.text)
                    ? t.attr("title", i)
                    : t.removeAttr("title"));
            }),
            s
          );
        }
      ),
      x.define(
        "select2/selection/multiple",
        ["jquery", "./base", "../utils"],
        function (e, t, i) {
          function n(e, t) {
            n.__super__.constructor.apply(this, arguments);
          }
          return (
            i.Extend(n, t),
            (n.prototype.render = function () {
              var e = n.__super__.render.call(this);
              return (
                e[0].classList.add("select2-selection--multiple"),
                e.html('<ul class="select2-selection__rendered"></ul>'),
                e
              );
            }),
            (n.prototype.bind = function (t, s) {
              var o = this,
                r =
                  (n.__super__.bind.apply(this, arguments),
                  t.id + "-container");
              this.$selection
                .find(".select2-selection__rendered")
                .attr("id", r),
                this.$selection.on("click", function (e) {
                  o.trigger("toggle", { originalEvent: e });
                }),
                this.$selection.on(
                  "click",
                  ".select2-selection__choice__remove",
                  function (t) {
                    var n;
                    o.isDisabled() ||
                      ((n = e(this).parent()),
                      (n = i.GetData(n[0], "data")),
                      o.trigger("unselect", { originalEvent: t, data: n }));
                  }
                ),
                this.$selection.on(
                  "keydown",
                  ".select2-selection__choice__remove",
                  function (e) {
                    o.isDisabled() || e.stopPropagation();
                  }
                );
            }),
            (n.prototype.clear = function () {
              var e = this.$selection.find(".select2-selection__rendered");
              e.empty(), e.removeAttr("title");
            }),
            (n.prototype.display = function (e, t) {
              var i = this.options.get("templateSelection");
              return this.options.get("escapeMarkup")(i(e, t));
            }),
            (n.prototype.selectionContainer = function () {
              return e(
                '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
              );
            }),
            (n.prototype.update = function (e) {
              if ((this.clear(), 0 !== e.length)) {
                for (
                  var t = [],
                    n =
                      this.$selection
                        .find(".select2-selection__rendered")
                        .attr("id") + "-choice-",
                    s = 0;
                  s < e.length;
                  s++
                ) {
                  var o = e[s],
                    r = this.selectionContainer(),
                    a = this.display(o, r),
                    l = n + i.generateChars(4) + "-",
                    c =
                      ((a =
                        ((a =
                          (o.id ? (l += o.id) : (l += i.generateChars(4)),
                          r
                            .find(".select2-selection__choice__display")
                            .append(a)
                            .attr("id", l),
                          o.title || o.text)) && r.attr("title", a),
                        this.options.get("translations").get("removeItem"))),
                      r.find(".select2-selection__choice__remove"));
                  c.attr("title", a()),
                    c.attr("aria-label", a()),
                    c.attr("aria-describedby", l),
                    i.StoreData(r[0], "data", o),
                    t.push(r);
                }
                this.$selection.find(".select2-selection__rendered").append(t);
              }
            }),
            n
          );
        }
      ),
      x.define("select2/selection/placeholder", [], function () {
        function e(e, t, i) {
          (this.placeholder = this.normalizePlaceholder(i.get("placeholder"))),
            e.call(this, t, i);
        }
        return (
          (e.prototype.normalizePlaceholder = function (e, t) {
            return "string" == typeof t ? { id: "", text: t } : t;
          }),
          (e.prototype.createPlaceholder = function (e, t) {
            var i = this.selectionContainer();
            i.html(this.display(t)),
              i[0].classList.add("select2-selection__placeholder"),
              i[0].classList.remove("select2-selection__choice"),
              (t = t.title || t.text || i.text());
            return (
              this.$selection
                .find(".select2-selection__rendered")
                .attr("title", t),
              i
            );
          }),
          (e.prototype.update = function (e, t) {
            var i = 1 == t.length && t[0].id != this.placeholder.id;
            if (1 < t.length || i) return e.call(this, t);
            this.clear(),
              (i = this.createPlaceholder(this.placeholder)),
              this.$selection.find(".select2-selection__rendered").append(i);
          }),
          e
        );
      }),
      x.define(
        "select2/selection/allowClear",
        ["jquery", "../keys", "../utils"],
        function (e, t, i) {
          function n() {}
          return (
            (n.prototype.bind = function (e, t, i) {
              var n = this;
              e.call(this, t, i),
                null == this.placeholder &&
                  this.options.get("debug") &&
                  window.console &&
                  console.error,
                this.$selection.on(
                  "mousedown",
                  ".select2-selection__clear",
                  function (e) {
                    n._handleClear(e);
                  }
                ),
                t.on("keypress", function (e) {
                  n._handleKeyboardClear(e, t);
                });
            }),
            (n.prototype._handleClear = function (e, t) {
              if (!this.isDisabled()) {
                var n = this.$selection.find(".select2-selection__clear");
                if (0 !== n.length) {
                  t.stopPropagation();
                  var s = i.GetData(n[0], "data"),
                    o = this.$element.val(),
                    r = (this.$element.val(this.placeholder.id), { data: s });
                  if ((this.trigger("clear", r), r.prevented))
                    this.$element.val(o);
                  else {
                    for (var a = 0; a < s.length; a++)
                      if (
                        ((r = { data: s[a] }),
                        this.trigger("unselect", r),
                        r.prevented)
                      )
                        return void this.$element.val(o);
                    this.$element.trigger("input").trigger("change"),
                      this.trigger("toggle", {});
                  }
                }
              }
            }),
            (n.prototype._handleKeyboardClear = function (e, i, n) {
              n.isOpen() ||
                (i.which != t.DELETE && i.which != t.BACKSPACE) ||
                this._handleClear(i);
            }),
            (n.prototype.update = function (t, n) {
              var s, o;
              t.call(this, n),
                this.$selection.find(".select2-selection__clear").remove(),
                this.$selection[0].classList.remove(
                  "select2-selection--clearable"
                ),
                0 <
                  this.$selection.find(".select2-selection__placeholder")
                    .length ||
                  0 === n.length ||
                  ((t = this.$selection
                    .find(".select2-selection__rendered")
                    .attr("id")),
                  (s = this.options.get("translations").get("removeAllItems")),
                  (o = e(
                    '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                  )).attr("title", s()),
                  o.attr("aria-label", s()),
                  o.attr("aria-describedby", t),
                  i.StoreData(o[0], "data", n),
                  this.$selection.prepend(o),
                  this.$selection[0].classList.add(
                    "select2-selection--clearable"
                  ));
            }),
            n
          );
        }
      ),
      x.define(
        "select2/selection/search",
        ["jquery", "../utils", "../keys"],
        function (e, t, i) {
          function n(e, t, i) {
            e.call(this, t, i);
          }
          return (
            (n.prototype.render = function (t) {
              var i = this.options.get("translations").get("search"),
                n = e(
                  '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'
                );
              (this.$searchContainer = n),
                (this.$search = n.find("textarea")),
                this.$search.prop(
                  "autocomplete",
                  this.options.get("autocomplete")
                ),
                this.$search.attr("aria-label", i()),
                (n = t.call(this));
              return (
                this._transferTabIndex(), n.append(this.$searchContainer), n
              );
            }),
            (n.prototype.bind = function (e, n, s) {
              var o = this,
                r = n.id + "-results",
                a = n.id + "-container",
                l =
                  (e =
                    (e.call(this, n, s),
                    o.$search.attr("aria-describedby", a),
                    n.on("open", function () {
                      o.$search.attr("aria-controls", r),
                        o.$search.trigger("focus");
                    }),
                    n.on("close", function () {
                      o.$search.val(""),
                        o.resizeSearch(),
                        o.$search.removeAttr("aria-controls"),
                        o.$search.removeAttr("aria-activedescendant"),
                        o.$search.trigger("focus");
                    }),
                    n.on("enable", function () {
                      o.$search.prop("disabled", !1), o._transferTabIndex();
                    }),
                    n.on("disable", function () {
                      o.$search.prop("disabled", !0);
                    }),
                    n.on("focus", function (e) {
                      o.$search.trigger("focus");
                    }),
                    n.on("results:focus", function (e) {
                      e.data._resultId
                        ? o.$search.attr(
                            "aria-activedescendant",
                            e.data._resultId
                          )
                        : o.$search.removeAttr("aria-activedescendant");
                    }),
                    this.$selection.on(
                      "focusin",
                      ".select2-search--inline",
                      function (e) {
                        o.trigger("focus", e);
                      }
                    ),
                    this.$selection.on(
                      "focusout",
                      ".select2-search--inline",
                      function (e) {
                        o._handleBlur(e);
                      }
                    ),
                    this.$selection.on(
                      "keydown",
                      ".select2-search--inline",
                      function (e) {
                        var n;
                        e.stopPropagation(),
                          o.trigger("keypress", e),
                          (o._keyUpPrevented = e.isDefaultPrevented()),
                          e.which === i.BACKSPACE &&
                            "" === o.$search.val() &&
                            0 <
                              (n = o.$selection
                                .find(".select2-selection__choice")
                                .last()).length &&
                            ((n = t.GetData(n[0], "data")),
                            o.searchRemoveChoice(n),
                            e.preventDefault());
                      }
                    ),
                    this.$selection.on(
                      "click",
                      ".select2-search--inline",
                      function (e) {
                        o.$search.val() && e.stopPropagation();
                      }
                    ),
                    document.documentMode)) && e <= 11;
              this.$selection.on(
                "input.searchcheck",
                ".select2-search--inline",
                function (e) {
                  l
                    ? o.$selection.off("input.search input.searchcheck")
                    : o.$selection.off("keyup.search");
                }
              ),
                this.$selection.on(
                  "keyup.search input.search",
                  ".select2-search--inline",
                  function (e) {
                    var t;
                    l && "input" === e.type
                      ? o.$selection.off("input.search input.searchcheck")
                      : (t = e.which) != i.SHIFT &&
                        t != i.CTRL &&
                        t != i.ALT &&
                        t != i.TAB &&
                        o.handleSearch(e);
                  }
                );
            }),
            (n.prototype._transferTabIndex = function (e) {
              this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1");
            }),
            (n.prototype.createPlaceholder = function (e, t) {
              this.$search.attr("placeholder", t.text);
            }),
            (n.prototype.update = function (e, t) {
              var i = this.$search[0] == document.activeElement;
              this.$search.attr("placeholder", ""),
                e.call(this, t),
                this.resizeSearch(),
                i && this.$search.trigger("focus");
            }),
            (n.prototype.handleSearch = function () {
              var e;
              this.resizeSearch(),
                this._keyUpPrevented ||
                  ((e = this.$search.val()),
                  this.trigger("query", { term: e })),
                (this._keyUpPrevented = !1);
            }),
            (n.prototype.searchRemoveChoice = function (e, t) {
              this.trigger("unselect", { data: t }),
                this.$search.val(t.text),
                this.handleSearch();
            }),
            (n.prototype.resizeSearch = function () {
              this.$search.css("width", "25px");
              var e = "100%";
              "" === this.$search.attr("placeholder") &&
                (e = 0.75 * (this.$search.val().length + 1) + "em"),
                this.$search.css("width", e);
            }),
            n
          );
        }
      ),
      x.define("select2/selection/selectionCss", ["../utils"], function (e) {
        function t() {}
        return (
          (t.prototype.render = function (t) {
            t = t.call(this);
            var i = this.options.get("selectionCssClass") || "";
            return (
              -1 !== i.indexOf(":all:") &&
                ((i = i.replace(":all:", "")),
                e.copyNonInternalCssClasses(t[0], this.$element[0])),
              t.addClass(i),
              t
            );
          }),
          t
        );
      }),
      x.define("select2/selection/eventRelay", ["jquery"], function (e) {
        function t() {}
        return (
          (t.prototype.bind = function (t, i, n) {
            var s = this,
              o = [
                "open",
                "opening",
                "close",
                "closing",
                "select",
                "selecting",
                "unselect",
                "unselecting",
                "clear",
                "clearing",
              ],
              r = [
                "opening",
                "closing",
                "selecting",
                "unselecting",
                "clearing",
              ];
            t.call(this, i, n),
              i.on("*", function (t, i) {
                var n;
                -1 !== o.indexOf(t) &&
                  ((n = e.Event("select2:" + t, { params: (i = i || {}) })),
                  s.$element.trigger(n),
                  -1 !== r.indexOf(t)) &&
                  (i.prevented = n.isDefaultPrevented());
              });
          }),
          t
        );
      }),
      x.define("select2/translation", ["jquery", "require"], function (e, t) {
        function i(e) {
          this.dict = e || {};
        }
        return (
          (i.prototype.all = function () {
            return this.dict;
          }),
          (i.prototype.get = function (e) {
            return this.dict[e];
          }),
          (i.prototype.extend = function (t) {
            this.dict = e.extend({}, t.all(), this.dict);
          }),
          (i._cache = {}),
          (i.loadPath = function (e) {
            var n;
            return (
              e in i._cache || ((n = t(e)), (i._cache[e] = n)),
              new i(i._cache[e])
            );
          }),
          i
        );
      }),
      x.define("select2/diacritics", [], function () {
        return {
          "Ⓐ": "A",
          Ａ: "A",
          À: "A",
          Á: "A",
          Â: "A",
          Ầ: "A",
          Ấ: "A",
          Ẫ: "A",
          Ẩ: "A",
          Ã: "A",
          Ā: "A",
          Ă: "A",
          Ằ: "A",
          Ắ: "A",
          Ẵ: "A",
          Ẳ: "A",
          Ȧ: "A",
          Ǡ: "A",
          Ä: "A",
          Ǟ: "A",
          Ả: "A",
          Å: "A",
          Ǻ: "A",
          Ǎ: "A",
          Ȁ: "A",
          Ȃ: "A",
          Ạ: "A",
          Ậ: "A",
          Ặ: "A",
          Ḁ: "A",
          Ą: "A",
          Ⱥ: "A",
          Ɐ: "A",
          Ꜳ: "AA",
          Æ: "AE",
          Ǽ: "AE",
          Ǣ: "AE",
          Ꜵ: "AO",
          Ꜷ: "AU",
          Ꜹ: "AV",
          Ꜻ: "AV",
          Ꜽ: "AY",
          "Ⓑ": "B",
          Ｂ: "B",
          Ḃ: "B",
          Ḅ: "B",
          Ḇ: "B",
          Ƀ: "B",
          Ƃ: "B",
          Ɓ: "B",
          "Ⓒ": "C",
          Ｃ: "C",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          Ç: "C",
          Ḉ: "C",
          Ƈ: "C",
          Ȼ: "C",
          Ꜿ: "C",
          "Ⓓ": "D",
          Ｄ: "D",
          Ḋ: "D",
          Ď: "D",
          Ḍ: "D",
          Ḑ: "D",
          Ḓ: "D",
          Ḏ: "D",
          Đ: "D",
          Ƌ: "D",
          Ɗ: "D",
          Ɖ: "D",
          Ꝺ: "D",
          Ǳ: "DZ",
          Ǆ: "DZ",
          ǲ: "Dz",
          ǅ: "Dz",
          "Ⓔ": "E",
          Ｅ: "E",
          È: "E",
          É: "E",
          Ê: "E",
          Ề: "E",
          Ế: "E",
          Ễ: "E",
          Ể: "E",
          Ẽ: "E",
          Ē: "E",
          Ḕ: "E",
          Ḗ: "E",
          Ĕ: "E",
          Ė: "E",
          Ë: "E",
          Ẻ: "E",
          Ě: "E",
          Ȅ: "E",
          Ȇ: "E",
          Ẹ: "E",
          Ệ: "E",
          Ȩ: "E",
          Ḝ: "E",
          Ę: "E",
          Ḙ: "E",
          Ḛ: "E",
          Ɛ: "E",
          Ǝ: "E",
          "Ⓕ": "F",
          Ｆ: "F",
          Ḟ: "F",
          Ƒ: "F",
          Ꝼ: "F",
          "Ⓖ": "G",
          Ｇ: "G",
          Ǵ: "G",
          Ĝ: "G",
          Ḡ: "G",
          Ğ: "G",
          Ġ: "G",
          Ǧ: "G",
          Ģ: "G",
          Ǥ: "G",
          Ɠ: "G",
          Ꞡ: "G",
          Ᵹ: "G",
          Ꝿ: "G",
          "Ⓗ": "H",
          Ｈ: "H",
          Ĥ: "H",
          Ḣ: "H",
          Ḧ: "H",
          Ȟ: "H",
          Ḥ: "H",
          Ḩ: "H",
          Ḫ: "H",
          Ħ: "H",
          Ⱨ: "H",
          Ⱶ: "H",
          Ɥ: "H",
          "Ⓘ": "I",
          Ｉ: "I",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          İ: "I",
          Ï: "I",
          Ḯ: "I",
          Ỉ: "I",
          Ǐ: "I",
          Ȉ: "I",
          Ȋ: "I",
          Ị: "I",
          Į: "I",
          Ḭ: "I",
          Ɨ: "I",
          "Ⓙ": "J",
          Ｊ: "J",
          Ĵ: "J",
          Ɉ: "J",
          "Ⓚ": "K",
          Ｋ: "K",
          Ḱ: "K",
          Ǩ: "K",
          Ḳ: "K",
          Ķ: "K",
          Ḵ: "K",
          Ƙ: "K",
          Ⱪ: "K",
          Ꝁ: "K",
          Ꝃ: "K",
          Ꝅ: "K",
          Ꞣ: "K",
          "Ⓛ": "L",
          Ｌ: "L",
          Ŀ: "L",
          Ĺ: "L",
          Ľ: "L",
          Ḷ: "L",
          Ḹ: "L",
          Ļ: "L",
          Ḽ: "L",
          Ḻ: "L",
          Ł: "L",
          Ƚ: "L",
          Ɫ: "L",
          Ⱡ: "L",
          Ꝉ: "L",
          Ꝇ: "L",
          Ꞁ: "L",
          Ǉ: "LJ",
          ǈ: "Lj",
          "Ⓜ": "M",
          Ｍ: "M",
          Ḿ: "M",
          Ṁ: "M",
          Ṃ: "M",
          Ɱ: "M",
          Ɯ: "M",
          "Ⓝ": "N",
          Ｎ: "N",
          Ǹ: "N",
          Ń: "N",
          Ñ: "N",
          Ṅ: "N",
          Ň: "N",
          Ṇ: "N",
          Ņ: "N",
          Ṋ: "N",
          Ṉ: "N",
          Ƞ: "N",
          Ɲ: "N",
          Ꞑ: "N",
          Ꞥ: "N",
          Ǌ: "NJ",
          ǋ: "Nj",
          "Ⓞ": "O",
          Ｏ: "O",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Ồ: "O",
          Ố: "O",
          Ỗ: "O",
          Ổ: "O",
          Õ: "O",
          Ṍ: "O",
          Ȭ: "O",
          Ṏ: "O",
          Ō: "O",
          Ṑ: "O",
          Ṓ: "O",
          Ŏ: "O",
          Ȯ: "O",
          Ȱ: "O",
          Ö: "O",
          Ȫ: "O",
          Ỏ: "O",
          Ő: "O",
          Ǒ: "O",
          Ȍ: "O",
          Ȏ: "O",
          Ơ: "O",
          Ờ: "O",
          Ớ: "O",
          Ỡ: "O",
          Ở: "O",
          Ợ: "O",
          Ọ: "O",
          Ộ: "O",
          Ǫ: "O",
          Ǭ: "O",
          Ø: "O",
          Ǿ: "O",
          Ɔ: "O",
          Ɵ: "O",
          Ꝋ: "O",
          Ꝍ: "O",
          Œ: "OE",
          Ƣ: "OI",
          Ꝏ: "OO",
          Ȣ: "OU",
          "Ⓟ": "P",
          Ｐ: "P",
          Ṕ: "P",
          Ṗ: "P",
          Ƥ: "P",
          Ᵽ: "P",
          Ꝑ: "P",
          Ꝓ: "P",
          Ꝕ: "P",
          "Ⓠ": "Q",
          Ｑ: "Q",
          Ꝗ: "Q",
          Ꝙ: "Q",
          Ɋ: "Q",
          "Ⓡ": "R",
          Ｒ: "R",
          Ŕ: "R",
          Ṙ: "R",
          Ř: "R",
          Ȑ: "R",
          Ȓ: "R",
          Ṛ: "R",
          Ṝ: "R",
          Ŗ: "R",
          Ṟ: "R",
          Ɍ: "R",
          Ɽ: "R",
          Ꝛ: "R",
          Ꞧ: "R",
          Ꞃ: "R",
          "Ⓢ": "S",
          Ｓ: "S",
          ẞ: "S",
          Ś: "S",
          Ṥ: "S",
          Ŝ: "S",
          Ṡ: "S",
          Š: "S",
          Ṧ: "S",
          Ṣ: "S",
          Ṩ: "S",
          Ș: "S",
          Ş: "S",
          Ȿ: "S",
          Ꞩ: "S",
          Ꞅ: "S",
          "Ⓣ": "T",
          Ｔ: "T",
          Ṫ: "T",
          Ť: "T",
          Ṭ: "T",
          Ț: "T",
          Ţ: "T",
          Ṱ: "T",
          Ṯ: "T",
          Ŧ: "T",
          Ƭ: "T",
          Ʈ: "T",
          Ⱦ: "T",
          Ꞇ: "T",
          Ꜩ: "TZ",
          "Ⓤ": "U",
          Ｕ: "U",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ũ: "U",
          Ṹ: "U",
          Ū: "U",
          Ṻ: "U",
          Ŭ: "U",
          Ü: "U",
          Ǜ: "U",
          Ǘ: "U",
          Ǖ: "U",
          Ǚ: "U",
          Ủ: "U",
          Ů: "U",
          Ű: "U",
          Ǔ: "U",
          Ȕ: "U",
          Ȗ: "U",
          Ư: "U",
          Ừ: "U",
          Ứ: "U",
          Ữ: "U",
          Ử: "U",
          Ự: "U",
          Ụ: "U",
          Ṳ: "U",
          Ų: "U",
          Ṷ: "U",
          Ṵ: "U",
          Ʉ: "U",
          "Ⓥ": "V",
          Ｖ: "V",
          Ṽ: "V",
          Ṿ: "V",
          Ʋ: "V",
          Ꝟ: "V",
          Ʌ: "V",
          Ꝡ: "VY",
          "Ⓦ": "W",
          Ｗ: "W",
          Ẁ: "W",
          Ẃ: "W",
          Ŵ: "W",
          Ẇ: "W",
          Ẅ: "W",
          Ẉ: "W",
          Ⱳ: "W",
          "Ⓧ": "X",
          Ｘ: "X",
          Ẋ: "X",
          Ẍ: "X",
          "Ⓨ": "Y",
          Ｙ: "Y",
          Ỳ: "Y",
          Ý: "Y",
          Ŷ: "Y",
          Ỹ: "Y",
          Ȳ: "Y",
          Ẏ: "Y",
          Ÿ: "Y",
          Ỷ: "Y",
          Ỵ: "Y",
          Ƴ: "Y",
          Ɏ: "Y",
          Ỿ: "Y",
          "Ⓩ": "Z",
          Ｚ: "Z",
          Ź: "Z",
          Ẑ: "Z",
          Ż: "Z",
          Ž: "Z",
          Ẓ: "Z",
          Ẕ: "Z",
          Ƶ: "Z",
          Ȥ: "Z",
          Ɀ: "Z",
          Ⱬ: "Z",
          Ꝣ: "Z",
          "ⓐ": "a",
          ａ: "a",
          ẚ: "a",
          à: "a",
          á: "a",
          â: "a",
          ầ: "a",
          ấ: "a",
          ẫ: "a",
          ẩ: "a",
          ã: "a",
          ā: "a",
          ă: "a",
          ằ: "a",
          ắ: "a",
          ẵ: "a",
          ẳ: "a",
          ȧ: "a",
          ǡ: "a",
          ä: "a",
          ǟ: "a",
          ả: "a",
          å: "a",
          ǻ: "a",
          ǎ: "a",
          ȁ: "a",
          ȃ: "a",
          ạ: "a",
          ậ: "a",
          ặ: "a",
          ḁ: "a",
          ą: "a",
          ⱥ: "a",
          ɐ: "a",
          ꜳ: "aa",
          æ: "ae",
          ǽ: "ae",
          ǣ: "ae",
          ꜵ: "ao",
          ꜷ: "au",
          ꜹ: "av",
          ꜻ: "av",
          ꜽ: "ay",
          "ⓑ": "b",
          ｂ: "b",
          ḃ: "b",
          ḅ: "b",
          ḇ: "b",
          ƀ: "b",
          ƃ: "b",
          ɓ: "b",
          "ⓒ": "c",
          ｃ: "c",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          ç: "c",
          ḉ: "c",
          ƈ: "c",
          ȼ: "c",
          ꜿ: "c",
          ↄ: "c",
          "ⓓ": "d",
          ｄ: "d",
          ḋ: "d",
          ď: "d",
          ḍ: "d",
          ḑ: "d",
          ḓ: "d",
          ḏ: "d",
          đ: "d",
          ƌ: "d",
          ɖ: "d",
          ɗ: "d",
          ꝺ: "d",
          ǳ: "dz",
          ǆ: "dz",
          "ⓔ": "e",
          ｅ: "e",
          è: "e",
          é: "e",
          ê: "e",
          ề: "e",
          ế: "e",
          ễ: "e",
          ể: "e",
          ẽ: "e",
          ē: "e",
          ḕ: "e",
          ḗ: "e",
          ĕ: "e",
          ė: "e",
          ë: "e",
          ẻ: "e",
          ě: "e",
          ȅ: "e",
          ȇ: "e",
          ẹ: "e",
          ệ: "e",
          ȩ: "e",
          ḝ: "e",
          ę: "e",
          ḙ: "e",
          ḛ: "e",
          ɇ: "e",
          ɛ: "e",
          ǝ: "e",
          "ⓕ": "f",
          ｆ: "f",
          ḟ: "f",
          ƒ: "f",
          ꝼ: "f",
          "ⓖ": "g",
          ｇ: "g",
          ǵ: "g",
          ĝ: "g",
          ḡ: "g",
          ğ: "g",
          ġ: "g",
          ǧ: "g",
          ģ: "g",
          ǥ: "g",
          ɠ: "g",
          ꞡ: "g",
          ᵹ: "g",
          ꝿ: "g",
          "ⓗ": "h",
          ｈ: "h",
          ĥ: "h",
          ḣ: "h",
          ḧ: "h",
          ȟ: "h",
          ḥ: "h",
          ḩ: "h",
          ḫ: "h",
          ẖ: "h",
          ħ: "h",
          ⱨ: "h",
          ⱶ: "h",
          ɥ: "h",
          ƕ: "hv",
          "ⓘ": "i",
          ｉ: "i",
          ì: "i",
          í: "i",
          î: "i",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          ï: "i",
          ḯ: "i",
          ỉ: "i",
          ǐ: "i",
          ȉ: "i",
          ȋ: "i",
          ị: "i",
          į: "i",
          ḭ: "i",
          ɨ: "i",
          ı: "i",
          "ⓙ": "j",
          ｊ: "j",
          ĵ: "j",
          ǰ: "j",
          ɉ: "j",
          "ⓚ": "k",
          ｋ: "k",
          ḱ: "k",
          ǩ: "k",
          ḳ: "k",
          ķ: "k",
          ḵ: "k",
          ƙ: "k",
          ⱪ: "k",
          ꝁ: "k",
          ꝃ: "k",
          ꝅ: "k",
          ꞣ: "k",
          "ⓛ": "l",
          ｌ: "l",
          ŀ: "l",
          ĺ: "l",
          ľ: "l",
          ḷ: "l",
          ḹ: "l",
          ļ: "l",
          ḽ: "l",
          ḻ: "l",
          ſ: "l",
          ł: "l",
          ƚ: "l",
          ɫ: "l",
          ⱡ: "l",
          ꝉ: "l",
          ꞁ: "l",
          ꝇ: "l",
          ǉ: "lj",
          "ⓜ": "m",
          ｍ: "m",
          ḿ: "m",
          ṁ: "m",
          ṃ: "m",
          ɱ: "m",
          ɯ: "m",
          "ⓝ": "n",
          ｎ: "n",
          ǹ: "n",
          ń: "n",
          ñ: "n",
          ṅ: "n",
          ň: "n",
          ṇ: "n",
          ņ: "n",
          ṋ: "n",
          ṉ: "n",
          ƞ: "n",
          ɲ: "n",
          ŉ: "n",
          ꞑ: "n",
          ꞥ: "n",
          ǌ: "nj",
          "ⓞ": "o",
          ｏ: "o",
          ò: "o",
          ó: "o",
          ô: "o",
          ồ: "o",
          ố: "o",
          ỗ: "o",
          ổ: "o",
          õ: "o",
          ṍ: "o",
          ȭ: "o",
          ṏ: "o",
          ō: "o",
          ṑ: "o",
          ṓ: "o",
          ŏ: "o",
          ȯ: "o",
          ȱ: "o",
          ö: "o",
          ȫ: "o",
          ỏ: "o",
          ő: "o",
          ǒ: "o",
          ȍ: "o",
          ȏ: "o",
          ơ: "o",
          ờ: "o",
          ớ: "o",
          ỡ: "o",
          ở: "o",
          ợ: "o",
          ọ: "o",
          ộ: "o",
          ǫ: "o",
          ǭ: "o",
          ø: "o",
          ǿ: "o",
          ɔ: "o",
          ꝋ: "o",
          ꝍ: "o",
          ɵ: "o",
          œ: "oe",
          ƣ: "oi",
          ȣ: "ou",
          ꝏ: "oo",
          "ⓟ": "p",
          ｐ: "p",
          ṕ: "p",
          ṗ: "p",
          ƥ: "p",
          ᵽ: "p",
          ꝑ: "p",
          ꝓ: "p",
          ꝕ: "p",
          "ⓠ": "q",
          ｑ: "q",
          ɋ: "q",
          ꝗ: "q",
          ꝙ: "q",
          "ⓡ": "r",
          ｒ: "r",
          ŕ: "r",
          ṙ: "r",
          ř: "r",
          ȑ: "r",
          ȓ: "r",
          ṛ: "r",
          ṝ: "r",
          ŗ: "r",
          ṟ: "r",
          ɍ: "r",
          ɽ: "r",
          ꝛ: "r",
          ꞧ: "r",
          ꞃ: "r",
          "ⓢ": "s",
          ｓ: "s",
          ß: "s",
          ś: "s",
          ṥ: "s",
          ŝ: "s",
          ṡ: "s",
          š: "s",
          ṧ: "s",
          ṣ: "s",
          ṩ: "s",
          ș: "s",
          ş: "s",
          ȿ: "s",
          ꞩ: "s",
          ꞅ: "s",
          ẛ: "s",
          "ⓣ": "t",
          ｔ: "t",
          ṫ: "t",
          ẗ: "t",
          ť: "t",
          ṭ: "t",
          ț: "t",
          ţ: "t",
          ṱ: "t",
          ṯ: "t",
          ŧ: "t",
          ƭ: "t",
          ʈ: "t",
          ⱦ: "t",
          ꞇ: "t",
          ꜩ: "tz",
          "ⓤ": "u",
          ｕ: "u",
          ù: "u",
          ú: "u",
          û: "u",
          ũ: "u",
          ṹ: "u",
          ū: "u",
          ṻ: "u",
          ŭ: "u",
          ü: "u",
          ǜ: "u",
          ǘ: "u",
          ǖ: "u",
          ǚ: "u",
          ủ: "u",
          ů: "u",
          ű: "u",
          ǔ: "u",
          ȕ: "u",
          ȗ: "u",
          ư: "u",
          ừ: "u",
          ứ: "u",
          ữ: "u",
          ử: "u",
          ự: "u",
          ụ: "u",
          ṳ: "u",
          ų: "u",
          ṷ: "u",
          ṵ: "u",
          ʉ: "u",
          "ⓥ": "v",
          ｖ: "v",
          ṽ: "v",
          ṿ: "v",
          ʋ: "v",
          ꝟ: "v",
          ʌ: "v",
          ꝡ: "vy",
          "ⓦ": "w",
          ｗ: "w",
          ẁ: "w",
          ẃ: "w",
          ŵ: "w",
          ẇ: "w",
          ẅ: "w",
          ẘ: "w",
          ẉ: "w",
          ⱳ: "w",
          "ⓧ": "x",
          ｘ: "x",
          ẋ: "x",
          ẍ: "x",
          "ⓨ": "y",
          ｙ: "y",
          ỳ: "y",
          ý: "y",
          ŷ: "y",
          ỹ: "y",
          ȳ: "y",
          ẏ: "y",
          ÿ: "y",
          ỷ: "y",
          ẙ: "y",
          ỵ: "y",
          ƴ: "y",
          ɏ: "y",
          ỿ: "y",
          "ⓩ": "z",
          ｚ: "z",
          ź: "z",
          ẑ: "z",
          ż: "z",
          ž: "z",
          ẓ: "z",
          ẕ: "z",
          ƶ: "z",
          ȥ: "z",
          ɀ: "z",
          ⱬ: "z",
          ꝣ: "z",
          Ά: "Α",
          Έ: "Ε",
          Ή: "Η",
          Ί: "Ι",
          Ϊ: "Ι",
          Ό: "Ο",
          Ύ: "Υ",
          Ϋ: "Υ",
          Ώ: "Ω",
          ά: "α",
          έ: "ε",
          ή: "η",
          ί: "ι",
          ϊ: "ι",
          ΐ: "ι",
          ό: "ο",
          ύ: "υ",
          ϋ: "υ",
          ΰ: "υ",
          ώ: "ω",
          ς: "σ",
          "’": "'",
        };
      }),
      x.define("select2/data/base", ["../utils"], function (e) {
        function t(e, i) {
          t.__super__.constructor.call(this);
        }
        return (
          e.Extend(t, e.Observable),
          (t.prototype.current = function (e) {
            throw new Error(
              "The `current` method must be defined in child classes."
            );
          }),
          (t.prototype.query = function (e, t) {
            throw new Error(
              "The `query` method must be defined in child classes."
            );
          }),
          (t.prototype.bind = function (e, t) {}),
          (t.prototype.destroy = function () {}),
          (t.prototype.generateResultId = function (t, i) {
            return (
              (t = t.id + "-result-"),
              (t += e.generateChars(4)),
              null != i.id
                ? (t += "-" + i.id.toString())
                : (t += "-" + e.generateChars(4)),
              t
            );
          }),
          t
        );
      }),
      x.define(
        "select2/data/select",
        ["./base", "../utils", "jquery"],
        function (e, t, i) {
          function n(e, t) {
            (this.$element = e),
              (this.options = t),
              n.__super__.constructor.call(this);
          }
          return (
            t.Extend(n, e),
            (n.prototype.current = function (e) {
              var t = this;
              e(
                Array.prototype.map.call(
                  this.$element[0].querySelectorAll(":checked"),
                  function (e) {
                    return t.item(i(e));
                  }
                )
              );
            }),
            (n.prototype.select = function (e) {
              var t,
                i = this;
              (e.selected = !0),
                null != e.element &&
                "option" === e.element.tagName.toLowerCase()
                  ? ((e.element.selected = !0),
                    this.$element.trigger("input").trigger("change"))
                  : this.$element.prop("multiple")
                  ? this.current(function (t) {
                      var n = [];
                      (e = [e]).push.apply(e, t);
                      for (var s = 0; s < e.length; s++) {
                        var o = e[s].id;
                        -1 === n.indexOf(o) && n.push(o);
                      }
                      i.$element.val(n),
                        i.$element.trigger("input").trigger("change");
                    })
                  : ((t = e.id),
                    this.$element.val(t),
                    this.$element.trigger("input").trigger("change"));
            }),
            (n.prototype.unselect = function (e) {
              var t = this;
              this.$element.prop("multiple") &&
                ((e.selected = !1),
                null != e.element &&
                "option" === e.element.tagName.toLowerCase()
                  ? ((e.element.selected = !1),
                    this.$element.trigger("input").trigger("change"))
                  : this.current(function (i) {
                      for (var n = [], s = 0; s < i.length; s++) {
                        var o = i[s].id;
                        o !== e.id && -1 === n.indexOf(o) && n.push(o);
                      }
                      t.$element.val(n),
                        t.$element.trigger("input").trigger("change");
                    }));
            }),
            (n.prototype.bind = function (e, t) {
              var i = this;
              (this.container = e).on("select", function (e) {
                i.select(e.data);
              }),
                e.on("unselect", function (e) {
                  i.unselect(e.data);
                });
            }),
            (n.prototype.destroy = function () {
              this.$element.find("*").each(function () {
                t.RemoveData(this);
              });
            }),
            (n.prototype.query = function (e, t) {
              var n = [],
                s = this;
              this.$element.children().each(function () {
                var t;
                ("option" !== this.tagName.toLowerCase() &&
                  "optgroup" !== this.tagName.toLowerCase()) ||
                  ((t = i(this)),
                  (t = s.item(t)),
                  null !== (t = s.matches(e, t)) && n.push(t));
              }),
                t({ results: n });
            }),
            (n.prototype.addOptions = function (e) {
              this.$element.append(e);
            }),
            (n.prototype.option = function (e) {
              var n;
              return (
                e.children
                  ? ((n = document.createElement("optgroup")).label = e.text)
                  : void 0 !==
                    (n = document.createElement("option")).textContent
                  ? (n.textContent = e.text)
                  : (n.innerText = e.text),
                void 0 !== e.id && (n.value = e.id),
                e.disabled && (n.disabled = !0),
                e.selected && (n.selected = !0),
                e.title && (n.title = e.title),
                ((e = this._normalizeItem(e)).element = n),
                t.StoreData(n, "data", e),
                i(n)
              );
            }),
            (n.prototype.item = function (e) {
              var n = {};
              if (null == (n = t.GetData(e[0], "data"))) {
                var s = e[0];
                if ("option" === s.tagName.toLowerCase())
                  n = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title"),
                  };
                else if ("optgroup" === s.tagName.toLowerCase()) {
                  n = {
                    text: e.prop("label"),
                    children: [],
                    title: e.prop("title"),
                  };
                  for (
                    var o = e.children("option"), r = [], a = 0;
                    a < o.length;
                    a++
                  ) {
                    var l = i(o[a]);
                    l = this.item(l);
                    r.push(l);
                  }
                  n.children = r;
                }
                ((n = this._normalizeItem(n)).element = e[0]),
                  t.StoreData(e[0], "data", n);
              }
              return n;
            }),
            (n.prototype._normalizeItem = function (e) {
              return (
                e !== Object(e) && (e = { id: e, text: e }),
                null != (e = i.extend({}, { text: "" }, e)).id &&
                  (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId &&
                  e.id &&
                  null != this.container &&
                  (e._resultId = this.generateResultId(this.container, e)),
                i.extend({}, { selected: !1, disabled: !1 }, e)
              );
            }),
            (n.prototype.matches = function (e, t) {
              return this.options.get("matcher")(e, t);
            }),
            n
          );
        }
      ),
      x.define(
        "select2/data/array",
        ["./select", "../utils", "jquery"],
        function (e, t, i) {
          function n(e, t) {
            (this._dataToConvert = t.get("data") || []),
              n.__super__.constructor.call(this, e, t);
          }
          return (
            t.Extend(n, e),
            (n.prototype.bind = function (e, t) {
              n.__super__.bind.call(this, e, t),
                this.addOptions(this.convertToOptions(this._dataToConvert));
            }),
            (n.prototype.select = function (e) {
              var t;
              0 ===
                this.$element.find("option").filter(function (t, i) {
                  return i.value == e.id.toString();
                }).length && ((t = this.option(e)), this.addOptions(t)),
                n.__super__.select.call(this, e);
            }),
            (n.prototype.convertToOptions = function (e) {
              for (
                var t = this,
                  n = this.$element.find("option"),
                  s = n
                    .map(function () {
                      return t.item(i(this)).id;
                    })
                    .get(),
                  o = [],
                  r = 0;
                r < e.length;
                r++
              ) {
                var a,
                  l,
                  c = this._normalizeItem(e[r]);
                0 <= s.indexOf(c.id)
                  ? ((a = n.filter(
                      (function (e) {
                        return function () {
                          return i(this).val() == e.id;
                        };
                      })(c)
                    )),
                    (l = this.item(a)),
                    (l = i.extend(!0, {}, c, l)),
                    (l = this.option(l)),
                    a.replaceWith(l))
                  : ((a = this.option(c)),
                    c.children &&
                      ((l = this.convertToOptions(c.children)), a.append(l)),
                    o.push(a));
              }
              return o;
            }),
            n
          );
        }
      ),
      x.define(
        "select2/data/ajax",
        ["./array", "../utils", "jquery"],
        function (e, t, i) {
          function n(e, t) {
            (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
              null != this.ajaxOptions.processResults &&
                (this.processResults = this.ajaxOptions.processResults),
              n.__super__.constructor.call(this, e, t);
          }
          return (
            t.Extend(n, e),
            (n.prototype._applyDefaults = function (e) {
              return i.extend(
                {},
                {
                  data: function (e) {
                    return i.extend({}, e, { q: e.term });
                  },
                  transport: function (e, t, n) {
                    return (e = i.ajax(e)).then(t), e.fail(n), e;
                  },
                },
                e,
                !0
              );
            }),
            (n.prototype.processResults = function (e) {
              return e;
            }),
            (n.prototype.query = function (e, t) {
              var n = this,
                s =
                  (null != this._request &&
                    ("function" == typeof this._request.abort &&
                      this._request.abort(),
                    (this._request = null)),
                  i.extend({ type: "GET" }, this.ajaxOptions));
              function o() {
                var i = s.transport(
                  s,
                  function (i) {
                    (i = n.processResults(i, e)),
                      n.options.get("debug") &&
                        window.console &&
                        console.error &&
                        i &&
                        i.results &&
                        Array.isArray(i.results),
                      t(i);
                  },
                  function () {
                    (i &&
                      "status" in i &&
                      (0 === i.status || "0" === i.status)) ||
                      n.trigger("results:message", { message: "errorLoading" });
                  }
                );
                n._request = i;
              }
              "function" == typeof s.url &&
                (s.url = s.url.call(this.$element, e)),
                "function" == typeof s.data &&
                  (s.data = s.data.call(this.$element, e)),
                this.ajaxOptions.delay && null != e.term
                  ? (this._queryTimeout &&
                      window.clearTimeout(this._queryTimeout),
                    (this._queryTimeout = window.setTimeout(
                      o,
                      this.ajaxOptions.delay
                    )))
                  : o();
            }),
            n
          );
        }
      ),
      x.define("select2/data/tags", ["jquery"], function (e) {
        function t(e, t, i) {
          var n,
            s = i.get("tags");
          if (
            (void 0 !==
              (n =
                (void 0 !== (n = i.get("createTag")) && (this.createTag = n),
                i.get("insertTag"))) && (this.insertTag = n),
            e.call(this, t, i),
            Array.isArray(s))
          )
            for (var o = 0; o < s.length; o++) {
              var r = s[o];
              (r = this._normalizeItem(r)), (r = this.option(r));
              this.$element.append(r);
            }
        }
        return (
          (t.prototype.query = function (e, t, i) {
            var n = this;
            this._removeOldTags(),
              null == t.term || null != t.page
                ? e.call(this, t, i)
                : e.call(this, t, function e(s, o) {
                    for (var r = s.results, a = 0; a < r.length; a++) {
                      var l = r[a],
                        c =
                          null != l.children && !e({ results: l.children }, !0);
                      if (
                        (l.text || "").toUpperCase() ===
                          (t.term || "").toUpperCase() ||
                        c
                      )
                        return !o && ((s.data = r), void i(s));
                    }
                    if (o) return !0;
                    var d,
                      u = n.createTag(t);
                    null != u &&
                      ((d = n.option(u)).attr("data-select2-tag", "true"),
                      n.addOptions([d]),
                      n.insertTag(r, u)),
                      (s.results = r),
                      i(s);
                  });
          }),
          (t.prototype.createTag = function (e, t) {
            return null == t.term || "" === (t = t.term.trim())
              ? null
              : { id: t, text: t };
          }),
          (t.prototype.insertTag = function (e, t, i) {
            t.unshift(i);
          }),
          (t.prototype._removeOldTags = function (t) {
            this.$element.find("option[data-select2-tag]").each(function () {
              this.selected || e(this).remove();
            });
          }),
          t
        );
      }),
      x.define("select2/data/tokenizer", ["jquery"], function (e) {
        function t(e, t, i) {
          var n = i.get("tokenizer");
          void 0 !== n && (this.tokenizer = n), e.call(this, t, i);
        }
        return (
          (t.prototype.bind = function (e, t, i) {
            e.call(this, t, i),
              (this.$search =
                t.dropdown.$search ||
                t.selection.$search ||
                i.find(".select2-search__field"));
          }),
          (t.prototype.query = function (t, i, n) {
            var s = this;
            i.term = i.term || "";
            var o = this.tokenizer(i, this.options, function (t) {
              var i = s._normalizeItem(t);
              s.$element.find("option").filter(function () {
                return e(this).val() === i.id;
              }).length ||
                ((t = s.option(i)).attr("data-select2-tag", !0),
                s._removeOldTags(),
                s.addOptions([t])),
                s.trigger("select", { data: i });
            });
            o.term !== i.term &&
              (this.$search.length &&
                (this.$search.val(o.term), this.$search.trigger("focus")),
              (i.term = o.term)),
              t.call(this, i, n);
          }),
          (t.prototype.tokenizer = function (t, i, n, s) {
            for (
              var o = n.get("tokenSeparators") || [],
                r = i.term,
                a = 0,
                l =
                  this.createTag ||
                  function (e) {
                    return { id: e.term, text: e.term };
                  };
              a < r.length;

            ) {
              var c = r[a];
              -1 === o.indexOf(c)
                ? a++
                : ((c = r.substr(0, a)),
                  null == (c = l(e.extend({}, i, { term: c })))
                    ? a++
                    : (s(c), (r = r.substr(a + 1) || ""), (a = 0)));
            }
            return { term: r };
          }),
          t
        );
      }),
      x.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, i) {
          (this.minimumInputLength = i.get("minimumInputLength")),
            e.call(this, t, i);
        }
        return (
          (e.prototype.query = function (e, t, i) {
            (t.term = t.term || ""),
              t.term.length < this.minimumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                      minimum: this.minimumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, i);
          }),
          e
        );
      }),
      x.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, i) {
          (this.maximumInputLength = i.get("maximumInputLength")),
            e.call(this, t, i);
        }
        return (
          (e.prototype.query = function (e, t, i) {
            (t.term = t.term || ""),
              0 < this.maximumInputLength &&
              t.term.length > this.maximumInputLength
                ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                      maximum: this.maximumInputLength,
                      input: t.term,
                      params: t,
                    },
                  })
                : e.call(this, t, i);
          }),
          e
        );
      }),
      x.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, i) {
          (this.maximumSelectionLength = i.get("maximumSelectionLength")),
            e.call(this, t, i);
        }
        return (
          (e.prototype.bind = function (e, t, i) {
            var n = this;
            e.call(this, t, i),
              t.on("select", function () {
                n._checkIfMaximumSelected();
              });
          }),
          (e.prototype.query = function (e, t, i) {
            var n = this;
            this._checkIfMaximumSelected(function () {
              e.call(n, t, i);
            });
          }),
          (e.prototype._checkIfMaximumSelected = function (e, t) {
            var i = this;
            this.current(function (e) {
              (e = null != e ? e.length : 0),
                0 < i.maximumSelectionLength && e >= i.maximumSelectionLength
                  ? i.trigger("results:message", {
                      message: "maximumSelected",
                      args: { maximum: i.maximumSelectionLength },
                    })
                  : t && t();
            });
          }),
          e
        );
      }),
      x.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
        function i(e, t) {
          (this.$element = e),
            (this.options = t),
            i.__super__.constructor.call(this);
        }
        return (
          t.Extend(i, t.Observable),
          (i.prototype.render = function () {
            var t = e(
              '<span class="select2-dropdown"><span class="select2-results"></span></span>'
            );
            return t.attr("dir", this.options.get("dir")), (this.$dropdown = t);
          }),
          (i.prototype.bind = function () {}),
          (i.prototype.position = function (e, t) {}),
          (i.prototype.destroy = function () {
            this.$dropdown.remove();
          }),
          i
        );
      }),
      x.define("select2/dropdown/search", ["jquery"], function (e) {
        function t() {}
        return (
          (t.prototype.render = function (t) {
            t = t.call(this);
            var i = this.options.get("translations").get("search"),
              n = e(
                '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
              );
            return (
              (this.$searchContainer = n),
              (this.$search = n.find("input")),
              this.$search.prop(
                "autocomplete",
                this.options.get("autocomplete")
              ),
              this.$search.attr("aria-label", i()),
              t.prepend(n),
              t
            );
          }),
          (t.prototype.bind = function (t, i, n) {
            var s = this,
              o = i.id + "-results";
            t.call(this, i, n),
              this.$search.on("keydown", function (e) {
                s.trigger("keypress", e),
                  (s._keyUpPrevented = e.isDefaultPrevented());
              }),
              this.$search.on("input", function (t) {
                e(this).off("keyup");
              }),
              this.$search.on("keyup input", function (e) {
                s.handleSearch(e);
              }),
              i.on("open", function () {
                s.$search.attr("tabindex", 0),
                  s.$search.attr("aria-controls", o),
                  s.$search.trigger("focus"),
                  window.setTimeout(function () {
                    s.$search.trigger("focus");
                  }, 0);
              }),
              i.on("close", function () {
                s.$search.attr("tabindex", -1),
                  s.$search.removeAttr("aria-controls"),
                  s.$search.removeAttr("aria-activedescendant"),
                  s.$search.val(""),
                  s.$search.trigger("blur");
              }),
              i.on("focus", function () {
                i.isOpen() || s.$search.trigger("focus");
              }),
              i.on("results:all", function (e) {
                (null != e.query.term && "" !== e.query.term) ||
                  (s.showSearch(e)
                    ? s.$searchContainer[0].classList.remove(
                        "select2-search--hide"
                      )
                    : s.$searchContainer[0].classList.add(
                        "select2-search--hide"
                      ));
              }),
              i.on("results:focus", function (e) {
                e.data._resultId
                  ? s.$search.attr("aria-activedescendant", e.data._resultId)
                  : s.$search.removeAttr("aria-activedescendant");
              });
          }),
          (t.prototype.handleSearch = function (e) {
            var t;
            this._keyUpPrevented ||
              ((t = this.$search.val()), this.trigger("query", { term: t })),
              (this._keyUpPrevented = !1);
          }),
          (t.prototype.showSearch = function (e, t) {
            return !0;
          }),
          t
        );
      }),
      x.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, i, n) {
          (this.placeholder = this.normalizePlaceholder(i.get("placeholder"))),
            e.call(this, t, i, n);
        }
        return (
          (e.prototype.append = function (e, t) {
            (t.results = this.removePlaceholder(t.results)), e.call(this, t);
          }),
          (e.prototype.normalizePlaceholder = function (e, t) {
            return "string" == typeof t ? { id: "", text: t } : t;
          }),
          (e.prototype.removePlaceholder = function (e, t) {
            for (var i = t.slice(0), n = t.length - 1; 0 <= n; n--) {
              var s = t[n];
              this.placeholder.id === s.id && i.splice(n, 1);
            }
            return i;
          }),
          e
        );
      }),
      x.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
        function t(e, t, i, n) {
          (this.lastParams = {}),
            e.call(this, t, i, n),
            (this.$loadingMore = this.createLoadingMore()),
            (this.loading = !1);
        }
        return (
          (t.prototype.append = function (e, t) {
            this.$loadingMore.remove(),
              (this.loading = !1),
              e.call(this, t),
              this.showLoadingMore(t) &&
                (this.$results.append(this.$loadingMore),
                this.loadMoreIfNeeded());
          }),
          (t.prototype.bind = function (e, t, i) {
            var n = this;
            e.call(this, t, i),
              t.on("query", function (e) {
                (n.lastParams = e), (n.loading = !0);
              }),
              t.on("query:append", function (e) {
                (n.lastParams = e), (n.loading = !0);
              }),
              this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
          }),
          (t.prototype.loadMoreIfNeeded = function () {
            var t = e.contains(document.documentElement, this.$loadingMore[0]);
            !this.loading &&
              t &&
              ((t = this.$results.offset().top + this.$results.outerHeight(!1)),
              this.$loadingMore.offset().top +
                this.$loadingMore.outerHeight(!1) <=
                t + 50) &&
              this.loadMore();
          }),
          (t.prototype.loadMore = function () {
            this.loading = !0;
            var t = e.extend({}, { page: 1 }, this.lastParams);
            t.page++, this.trigger("query:append", t);
          }),
          (t.prototype.showLoadingMore = function (e, t) {
            return t.pagination && t.pagination.more;
          }),
          (t.prototype.createLoadingMore = function () {
            var t = e(
                '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
              ),
              i = this.options.get("translations").get("loadingMore");
            return t.html(i(this.lastParams)), t;
          }),
          t
        );
      }),
      x.define(
        "select2/dropdown/attachBody",
        ["jquery", "../utils"],
        function (e, t) {
          function i(t, i, n) {
            (this.$dropdownParent = e(
              n.get("dropdownParent") || document.body
            )),
              t.call(this, i, n);
          }
          return (
            (i.prototype.bind = function (e, t, i) {
              var n = this;
              e.call(this, t, i),
                t.on("open", function () {
                  n._showDropdown(),
                    n._attachPositioningHandler(t),
                    n._bindContainerResultHandlers(t);
                }),
                t.on("close", function () {
                  n._hideDropdown(), n._detachPositioningHandler(t);
                }),
                this.$dropdownContainer.on("mousedown", function (e) {
                  e.stopPropagation();
                });
            }),
            (i.prototype.destroy = function (e) {
              e.call(this), this.$dropdownContainer.remove();
            }),
            (i.prototype.position = function (e, t, i) {
              t.attr("class", i.attr("class")),
                t[0].classList.remove("select2"),
                t[0].classList.add("select2-container--open"),
                t.css({ position: "absolute", top: -999999 }),
                (this.$container = i);
            }),
            (i.prototype.render = function (t) {
              var i = e("<span></span>");
              t = t.call(this);
              return i.append(t), (this.$dropdownContainer = i);
            }),
            (i.prototype._hideDropdown = function (e) {
              this.$dropdownContainer.detach();
            }),
            (i.prototype._bindContainerResultHandlers = function (e, t) {
              var i;
              this._containerResultsHandlersBound ||
                ((i = this),
                t.on("results:all", function () {
                  i._positionDropdown(), i._resizeDropdown();
                }),
                t.on("results:append", function () {
                  i._positionDropdown(), i._resizeDropdown();
                }),
                t.on("results:message", function () {
                  i._positionDropdown(), i._resizeDropdown();
                }),
                t.on("select", function () {
                  i._positionDropdown(), i._resizeDropdown();
                }),
                t.on("unselect", function () {
                  i._positionDropdown(), i._resizeDropdown();
                }),
                (this._containerResultsHandlersBound = !0));
            }),
            (i.prototype._attachPositioningHandler = function (i, n) {
              var s = this,
                o = "scroll.select2." + n.id,
                r = "resize.select2." + n.id,
                a =
                  ((n = "orientationchange.select2." + n.id),
                  this.$container.parents().filter(t.hasScroll));
              a.each(function () {
                t.StoreData(this, "select2-scroll-position", {
                  x: e(this).scrollLeft(),
                  y: e(this).scrollTop(),
                });
              }),
                a.on(o, function (i) {
                  var n = t.GetData(this, "select2-scroll-position");
                  e(this).scrollTop(n.y);
                }),
                e(window).on(o + " " + r + " " + n, function (e) {
                  s._positionDropdown(), s._resizeDropdown();
                });
            }),
            (i.prototype._detachPositioningHandler = function (i, n) {
              var s = "scroll.select2." + n.id,
                o = "resize.select2." + n.id;
              n = "orientationchange.select2." + n.id;
              this.$container.parents().filter(t.hasScroll).off(s),
                e(window).off(s + " " + o + " " + n);
            }),
            (i.prototype._positionDropdown = function () {
              var t = e(window),
                i = this.$dropdown[0].classList.contains(
                  "select2-dropdown--above"
                ),
                n = this.$dropdown[0].classList.contains(
                  "select2-dropdown--below"
                ),
                s = null,
                o =
                  (((l = this.$container.offset()).bottom =
                    l.top + this.$container.outerHeight(!1)),
                  { height: this.$container.outerHeight(!1) });
              (o.top = l.top), (o.bottom = l.top + o.height);
              var r = this.$dropdown.outerHeight(!1),
                a = t.scrollTop(),
                l =
                  ((t = t.scrollTop() + t.height()),
                  (a = a < l.top - r),
                  (t = t > l.bottom + r),
                  { left: l.left, top: o.bottom }),
                c = this.$dropdownParent,
                d =
                  ("static" === c.css("position") && (c = c.offsetParent()),
                  { top: 0, left: 0 });
              (e.contains(document.body, c[0]) || c[0].isConnected) &&
                (d = c.offset()),
                (l.top -= d.top),
                (l.left -= d.left),
                i || n || (s = "below"),
                t || !a || i ? !a && t && i && (s = "below") : (s = "above"),
                ("above" == s || (i && "below" !== s)) &&
                  (l.top = o.top - d.top - r),
                null != s &&
                  (this.$dropdown[0].classList.remove(
                    "select2-dropdown--below"
                  ),
                  this.$dropdown[0].classList.remove("select2-dropdown--above"),
                  this.$dropdown[0].classList.add("select2-dropdown--" + s),
                  this.$container[0].classList.remove(
                    "select2-container--below"
                  ),
                  this.$container[0].classList.remove(
                    "select2-container--above"
                  ),
                  this.$container[0].classList.add("select2-container--" + s)),
                this.$dropdownContainer.css(l);
            }),
            (i.prototype._resizeDropdown = function () {
              var e = { width: this.$container.outerWidth(!1) + "px" };
              this.options.get("dropdownAutoWidth") &&
                ((e.minWidth = e.width),
                (e.position = "relative"),
                (e.width = "auto")),
                this.$dropdown.css(e);
            }),
            (i.prototype._showDropdown = function (e) {
              this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown();
            }),
            i
          );
        }
      ),
      x.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, i, n) {
          (this.minimumResultsForSearch = i.get("minimumResultsForSearch")),
            this.minimumResultsForSearch < 0 &&
              (this.minimumResultsForSearch = 1 / 0),
            e.call(this, t, i, n);
        }
        return (
          (e.prototype.showSearch = function (e, t) {
            return (
              !(
                (function e(t) {
                  for (var i = 0, n = 0; n < t.length; n++) {
                    var s = t[n];
                    s.children ? (i += e(s.children)) : i++;
                  }
                  return i;
                })(t.data.results) < this.minimumResultsForSearch
              ) && e.call(this, t)
            );
          }),
          e
        );
      }),
      x.define("select2/dropdown/selectOnClose", ["../utils"], function (e) {
        function t() {}
        return (
          (t.prototype.bind = function (e, t, i) {
            var n = this;
            e.call(this, t, i),
              t.on("close", function (e) {
                n._handleSelectOnClose(e);
              });
          }),
          (t.prototype._handleSelectOnClose = function (t, i) {
            (!i ||
              null == i.originalSelect2Event ||
              ("select" !== (i = i.originalSelect2Event)._type &&
                "unselect" !== i._type)) &&
              ((i = this.getHighlightedResults()).length < 1 ||
                (null != (i = e.GetData(i[0], "data")).element &&
                  i.element.selected) ||
                (null == i.element && i.selected) ||
                this.trigger("select", { data: i }));
          }),
          t
        );
      }),
      x.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, i) {
            var n = this;
            e.call(this, t, i),
              t.on("select", function (e) {
                n._selectTriggered(e);
              }),
              t.on("unselect", function (e) {
                n._selectTriggered(e);
              });
          }),
          (e.prototype._selectTriggered = function (e, t) {
            var i = t.originalEvent;
            (i && (i.ctrlKey || i.metaKey)) ||
              this.trigger("close", {
                originalEvent: i,
                originalSelect2Event: t,
              });
          }),
          e
        );
      }),
      x.define("select2/dropdown/dropdownCss", ["../utils"], function (e) {
        function t() {}
        return (
          (t.prototype.render = function (t) {
            t = t.call(this);
            var i = this.options.get("dropdownCssClass") || "";
            return (
              -1 !== i.indexOf(":all:") &&
                ((i = i.replace(":all:", "")),
                e.copyNonInternalCssClasses(t[0], this.$element[0])),
              t.addClass(i),
              t
            );
          }),
          t
        );
      }),
      x.define(
        "select2/dropdown/tagsSearchHighlight",
        ["../utils"],
        function (e) {
          function t() {}
          return (
            (t.prototype.highlightFirstItem = function (t) {
              if (
                0 <
                (i = this.$results.find(
                  ".select2-results__option--selectable:not(.select2-results__option--selected)"
                )).length
              ) {
                var i = i.first(),
                  n = e.GetData(i[0], "data").element;
                if (
                  n &&
                  n.getAttribute &&
                  "true" === n.getAttribute("data-select2-tag")
                )
                  return void i.trigger("mouseenter");
              }
              t.call(this);
            }),
            t
          );
        }
      ),
      x.define("select2/i18n/en", [], function () {
        return {/*
          errorLoading: function () {
            return "The results could not be loaded.";
          },*/
          inputTooLong: function (e) {
            var t =
              "Please delete " +
              (e = e.input.length - e.maximum) +
              " character";
            return 1 != e && (t += "s"), t;
          },
          inputTooShort: function (e) {
            return (
              "Please enter " +
              (e.minimum - e.input.length) +
              " or more characters"
            );
          },
          loadingMore: function () {
            return "Loading more results…";
          },
          maximumSelected: function (e) {
            var t = "You can only select " + e.maximum + " item";
            return 1 != e.maximum && (t += "s"), t;
          },
          noResults: function () {
            return "No results found";
          },
          searching: function () {
            return "Searching…";
          },
          removeAllItems: function () {
            return "Remove all items";
          },
          removeItem: function () {
            return "Remove item";
          },
          search: function () {
            return "Search";
          },
        };
      }),
      x.define(
        "select2/defaults",
        [
          "jquery",
          "./results",
          "./selection/single",
          "./selection/multiple",
          "./selection/placeholder",
          "./selection/allowClear",
          "./selection/search",
          "./selection/selectionCss",
          "./selection/eventRelay",
          "./utils",
          "./translation",
          "./diacritics",
          "./data/select",
          "./data/array",
          "./data/ajax",
          "./data/tags",
          "./data/tokenizer",
          "./data/minimumInputLength",
          "./data/maximumInputLength",
          "./data/maximumSelectionLength",
          "./dropdown",
          "./dropdown/search",
          "./dropdown/hidePlaceholder",
          "./dropdown/infiniteScroll",
          "./dropdown/attachBody",
          "./dropdown/minimumResultsForSearch",
          "./dropdown/selectOnClose",
          "./dropdown/closeOnSelect",
          "./dropdown/dropdownCss",
          "./dropdown/tagsSearchHighlight",
          "./i18n/en",
        ],
        function (
          e,
          t,
          i,
          n,
          s,
          o,
          r,
          a,
          l,
          c,
          d,
          u,
          p,
          h,
          f,
          m,
          g,
          v,
          _,
          y,
          w,
          b,
          $,
          x,
          C,
          S,
          k,
          T,
          E,
          O,
          A
        ) {
          function I() {
            this.reset();
          }
          return (
            (I.prototype.apply = function (d) {
              null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter &&
                (null != d.ajax
                  ? (d.dataAdapter = f)
                  : null != d.data
                  ? (d.dataAdapter = h)
                  : (d.dataAdapter = p),
                0 < d.minimumInputLength &&
                  (d.dataAdapter = c.Decorate(d.dataAdapter, v)),
                0 < d.maximumInputLength &&
                  (d.dataAdapter = c.Decorate(d.dataAdapter, _)),
                0 < d.maximumSelectionLength &&
                  (d.dataAdapter = c.Decorate(d.dataAdapter, y)),
                d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, m)),
                (null == d.tokenSeparators && null == d.tokenizer) ||
                  (d.dataAdapter = c.Decorate(d.dataAdapter, g))),
                null == d.resultsAdapter &&
                  ((d.resultsAdapter = t),
                  null != d.ajax &&
                    (d.resultsAdapter = c.Decorate(d.resultsAdapter, x)),
                  null != d.placeholder &&
                    (d.resultsAdapter = c.Decorate(d.resultsAdapter, $)),
                  d.selectOnClose &&
                    (d.resultsAdapter = c.Decorate(d.resultsAdapter, k)),
                  d.tags) &&
                  (d.resultsAdapter = c.Decorate(d.resultsAdapter, O)),
                null == d.dropdownAdapter &&
                  (d.multiple
                    ? (d.dropdownAdapter = w)
                    : ((u = c.Decorate(w, b)), (d.dropdownAdapter = u)),
                  0 !== d.minimumResultsForSearch &&
                    (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, S)),
                  d.closeOnSelect &&
                    (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, T)),
                  null != d.dropdownCssClass &&
                    (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, E)),
                  (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, C))),
                null == d.selectionAdapter &&
                  (d.multiple
                    ? (d.selectionAdapter = n)
                    : (d.selectionAdapter = i),
                  null != d.placeholder &&
                    (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)),
                  d.allowClear &&
                    (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)),
                  d.multiple &&
                    (d.selectionAdapter = c.Decorate(d.selectionAdapter, r)),
                  null != d.selectionCssClass &&
                    (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)),
                  (d.selectionAdapter = c.Decorate(d.selectionAdapter, l))),
                (d.language = this._resolveLanguage(d.language)),
                d.language.push("en");
              for (var u, A = [], I = 0; I < d.language.length; I++) {
                var P = d.language[I];
                -1 === A.indexOf(P) && A.push(P);
              }
              return (
                (d.language = A),
                (d.translations = this._processTranslations(
                  d.language,
                  d.debug
                )),
                d
              );
            }),
            (I.prototype.reset = function () {
              function t(e) {
                return e.replace(/[^\u0000-\u007E]/g, function (e) {
                  return u[e] || e;
                });
              }
              this.defaults = {
                amdLanguageBase: "./i18n/",
                autocomplete: "off",
                closeOnSelect: !0,
                debug: !1,
                dropdownAutoWidth: !1,
                escapeMarkup: c.escapeMarkup,
                language: {},
                matcher: function i(n, s) {
                  if (null == n.term || "" === n.term.trim()) return s;
                  if (s.children && 0 < s.children.length) {
                    for (
                      var o = e.extend(!0, {}, s), r = s.children.length - 1;
                      0 <= r;
                      r--
                    )
                      null == i(n, s.children[r]) && o.children.splice(r, 1);
                    return 0 < o.children.length ? o : i(n, o);
                  }
                  var a = t(s.text).toUpperCase(),
                    l = t(n.term).toUpperCase();
                  return -1 < a.indexOf(l) ? s : null;
                },
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                scrollAfterSelect: !1,
                sorter: function (e) {
                  return e;
                },
                templateResult: function (e) {
                  return e.text;
                },
                templateSelection: function (e) {
                  return e.text;
                },
                theme: "default",
                width: "resolve",
              };
            }),
            (I.prototype.applyFromElement = function (e, t) {
              var i = e.language,
                n = this.defaults.language,
                s = t.prop("lang");
              (t = t.closest("[lang]").prop("lang")),
                (s = Array.prototype.concat.call(
                  this._resolveLanguage(s),
                  this._resolveLanguage(i),
                  this._resolveLanguage(n),
                  this._resolveLanguage(t)
                ));
              return (e.language = s), e;
            }),
            (I.prototype._resolveLanguage = function (t) {
              if (!t) return [];
              if (e.isEmptyObject(t)) return [];
              if (e.isPlainObject(t)) return [t];
              for (
                var i, n = Array.isArray(t) ? t : [t], s = [], o = 0;
                o < n.length;
                o++
              )
                s.push(n[o]),
                  "string" == typeof n[o] &&
                    0 < n[o].indexOf("-") &&
                    ((i = n[o].split("-")[0]), s.push(i));
              return s;
            }),
            (I.prototype._processTranslations = function (t, i) {
              for (var n = new d(), s = 0; s < t.length; s++) {
                var o = new d(),
                  r = t[s];
                if ("string" == typeof r)
                  try {
                    o = d.loadPath(r);
                  } catch (t) {
                    try {
                      (r = this.defaults.amdLanguageBase + r),
                        (o = d.loadPath(r));
                    } catch (t) {
                      i && window.console && console.warn;
                    }
                  }
                else o = e.isPlainObject(r) ? new d(r) : r;
                n.extend(o);
              }
              return n;
            }),
            (I.prototype.set = function (t, i) {
              var n = {};
              (n[e.camelCase(t)] = i), (t = c._convertData(n));
              e.extend(!0, this.defaults, t);
            }),
            new I()
          );
        }
      ),
      x.define(
        "select2/options",
        ["jquery", "./defaults", "./utils"],
        function (e, t, i) {
          function n(e, i) {
            (this.options = e),
              null != i && this.fromElement(i),
              null != i && (this.options = t.applyFromElement(this.options, i)),
              (this.options = t.apply(this.options));
          }
          return (
            (n.prototype.fromElement = function (t) {
              var n = ["select2"],
                s =
                  (null == this.options.multiple &&
                    (this.options.multiple = t.prop("multiple")),
                  null == this.options.disabled &&
                    (this.options.disabled = t.prop("disabled")),
                  null == this.options.autocomplete &&
                    t.prop("autocomplete") &&
                    (this.options.autocomplete = t.prop("autocomplete")),
                  null == this.options.dir &&
                    (t.prop("dir")
                      ? (this.options.dir = t.prop("dir"))
                      : t.closest("[dir]").prop("dir")
                      ? (this.options.dir = t.closest("[dir]").prop("dir"))
                      : (this.options.dir = "ltr")),
                  t.prop("disabled", this.options.disabled),
                  t.prop("multiple", this.options.multiple),
                  i.GetData(t[0], "select2Tags") &&
                    (this.options.debug && window.console && console.warn,
                    i.StoreData(t[0], "data", i.GetData(t[0], "select2Tags")),
                    i.StoreData(t[0], "tags", !0)),
                  i.GetData(t[0], "ajaxUrl") &&
                    (this.options.debug && window.console && console.warn,
                    t.attr("ajax--url", i.GetData(t[0], "ajaxUrl")),
                    i.StoreData(t[0], "ajax-Url", i.GetData(t[0], "ajaxUrl"))),
                  {});
              function o(e, t) {
                return t.toUpperCase();
              }
              for (var r = 0; r < t[0].attributes.length; r++) {
                var a = t[0].attributes[r].name,
                  l = "data-";
                a.substr(0, l.length) == l &&
                  ((a = a.substring(l.length)),
                  (l = i.GetData(t[0], a)),
                  (s[a.replace(/-([a-z])/g, o)] = l));
              }
              e.fn.jquery &&
                "1." == e.fn.jquery.substr(0, 2) &&
                t[0].dataset &&
                (s = e.extend(!0, {}, t[0].dataset, s));
              var c,
                d = e.extend(!0, {}, i.GetData(t[0]), s);
              for (c in (d = i._convertData(d)))
                -1 < n.indexOf(c) ||
                  (e.isPlainObject(this.options[c])
                    ? e.extend(this.options[c], d[c])
                    : (this.options[c] = d[c]));
              return this;
            }),
            (n.prototype.get = function (e) {
              return this.options[e];
            }),
            (n.prototype.set = function (e, t) {
              this.options[e] = t;
            }),
            n
          );
        }
      ),
      x.define(
        "select2/core",
        ["jquery", "./options", "./utils", "./keys"],
        function (e, t, i, n) {
          function s(e, n) {
            null != i.GetData(e[0], "select2") &&
              i.GetData(e[0], "select2").destroy(),
              (this.$element = e),
              (this.id = this._generateId(e)),
              (this.options = new t((n = n || {}), e)),
              s.__super__.constructor.call(this);
            (n = e.attr("tabindex") || 0),
              i.StoreData(e[0], "old-tabindex", n),
              e.attr("tabindex", "-1"),
              (n = this.options.get("dataAdapter")),
              (this.dataAdapter = new n(e, this.options)),
              (n = this.render());
            var o =
                (this._placeContainer(n), this.options.get("selectionAdapter")),
              r =
                ((o =
                  ((this.selection = new o(e, this.options)),
                  (this.$selection = this.selection.render()),
                  this.selection.position(this.$selection, n),
                  this.options.get("dropdownAdapter"))),
                (o =
                  ((this.dropdown = new o(e, this.options)),
                  (this.$dropdown = this.dropdown.render()),
                  this.dropdown.position(this.$dropdown, n),
                  this.options.get("resultsAdapter"))),
                (this.results = new o(e, this.options, this.dataAdapter)),
                (this.$results = this.results.render()),
                this.results.position(this.$results, this.$dropdown),
                this);
            this._bindAdapters(),
              this._registerDomEvents(),
              this._registerDataEvents(),
              this._registerSelectionEvents(),
              this._registerDropdownEvents(),
              this._registerResultsEvents(),
              this._registerEvents(),
              this.dataAdapter.current(function (e) {
                r.trigger("selection:update", { data: e });
              }),
              e[0].classList.add("select2-hidden-accessible"),
              e.attr("aria-hidden", "true"),
              this._syncAttributes(),
              i.StoreData(e[0], "select2", this),
              e.data("select2", this);
          }
          return (
            i.Extend(s, i.Observable),
            (s.prototype._generateId = function (e) {
              return (
                "select2-" +
                (null != e.attr("id")
                  ? e.attr("id")
                  : null != e.attr("name")
                  ? e.attr("name") + "-" + i.generateChars(2)
                  : i.generateChars(4)
                ).replace(/(:|\.|\[|\]|,)/g, "")
              );
            }),
            (s.prototype._placeContainer = function (e) {
              e.insertAfter(this.$element);
              var t = this._resolveWidth(
                this.$element,
                this.options.get("width")
              );
              null != t && e.css("width", t);
            }),
            (s.prototype._resolveWidth = function (e, t) {
              var i =
                /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
              if ("resolve" == t)
                return null != (n = this._resolveWidth(e, "style"))
                  ? n
                  : this._resolveWidth(e, "element");
              if ("element" == t)
                return (n = e.outerWidth(!1)) <= 0 ? "auto" : n + "px";
              if ("style" != t)
                return "computedstyle" == t
                  ? window.getComputedStyle(e[0]).width
                  : t;
              var n = e.attr("style");
              if ("string" == typeof n)
                for (var s = n.split(";"), o = 0, r = s.length; o < r; o += 1) {
                  var a = s[o].replace(/\s/g, "").match(i);
                  if (null !== a && 1 <= a.length) return a[1];
                }
              return null;
            }),
            (s.prototype._bindAdapters = function () {
              this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container);
            }),
            (s.prototype._registerDomEvents = function () {
              var e = this;
              this.$element.on("change.select2", function () {
                e.dataAdapter.current(function (t) {
                  e.trigger("selection:update", { data: t });
                });
              }),
                this.$element.on("focus.select2", function (t) {
                  e.trigger("focus", t);
                }),
                (this._syncA = i.bind(this._syncAttributes, this)),
                (this._syncS = i.bind(this._syncSubtree, this)),
                (this._observer = new window.MutationObserver(function (t) {
                  e._syncA(), e._syncS(t);
                })),
                this._observer.observe(this.$element[0], {
                  attributes: !0,
                  childList: !0,
                  subtree: !1,
                });
            }),
            (s.prototype._registerDataEvents = function () {
              var e = this;
              this.dataAdapter.on("*", function (t, i) {
                e.trigger(t, i);
              });
            }),
            (s.prototype._registerSelectionEvents = function () {
              var e = this,
                t = ["toggle", "focus"];
              this.selection.on("toggle", function () {
                e.toggleDropdown();
              }),
                this.selection.on("focus", function (t) {
                  e.focus(t);
                }),
                this.selection.on("*", function (i, n) {
                  -1 === t.indexOf(i) && e.trigger(i, n);
                });
            }),
            (s.prototype._registerDropdownEvents = function () {
              var e = this;
              this.dropdown.on("*", function (t, i) {
                e.trigger(t, i);
              });
            }),
            (s.prototype._registerResultsEvents = function () {
              var e = this;
              this.results.on("*", function (t, i) {
                e.trigger(t, i);
              });
            }),
            (s.prototype._registerEvents = function () {
              var e = this;
              this.on("open", function () {
                e.$container[0].classList.add("select2-container--open");
              }),
                this.on("close", function () {
                  e.$container[0].classList.remove("select2-container--open");
                }),
                this.on("enable", function () {
                  e.$container[0].classList.remove(
                    "select2-container--disabled"
                  );
                }),
                this.on("disable", function () {
                  e.$container[0].classList.add("select2-container--disabled");
                }),
                this.on("blur", function () {
                  e.$container[0].classList.remove("select2-container--focus");
                }),
                this.on("query", function (t) {
                  e.isOpen() || e.trigger("open", {}),
                    this.dataAdapter.query(t, function (i) {
                      e.trigger("results:all", { data: i, query: t });
                    });
                }),
                this.on("query:append", function (t) {
                  this.dataAdapter.query(t, function (i) {
                    e.trigger("results:append", { data: i, query: t });
                  });
                }),
                this.on("keypress", function (t) {
                  var i = t.which;
                  e.isOpen()
                    ? i === n.ESC || (i === n.UP && t.altKey)
                      ? (e.close(t), t.preventDefault())
                      : i === n.ENTER || i === n.TAB
                      ? (e.trigger("results:select", {}), t.preventDefault())
                      : i === n.SPACE && t.ctrlKey
                      ? (e.trigger("results:toggle", {}), t.preventDefault())
                      : i === n.UP
                      ? (e.trigger("results:previous", {}), t.preventDefault())
                      : i === n.DOWN &&
                        (e.trigger("results:next", {}), t.preventDefault())
                    : (i === n.ENTER ||
                        i === n.SPACE ||
                        (i === n.DOWN && t.altKey)) &&
                      (e.open(), t.preventDefault());
                });
            }),
            (s.prototype._syncAttributes = function () {
              this.options.set("disabled", this.$element.prop("disabled")),
                this.isDisabled()
                  ? (this.isOpen() && this.close(), this.trigger("disable", {}))
                  : this.trigger("enable", {});
            }),
            (s.prototype._isChangeMutation = function (e) {
              var t = this;
              if (e.addedNodes && 0 < e.addedNodes.length) {
                for (var i = 0; i < e.addedNodes.length; i++)
                  if (e.addedNodes[i].selected) return !0;
              } else {
                if (e.removedNodes && 0 < e.removedNodes.length) return !0;
                if (Array.isArray(e))
                  return e.some(function (e) {
                    return t._isChangeMutation(e);
                  });
              }
              return !1;
            }),
            (s.prototype._syncSubtree = function (e) {
              e = this._isChangeMutation(e);
              var t = this;
              e &&
                this.dataAdapter.current(function (e) {
                  t.trigger("selection:update", { data: e });
                });
            }),
            (s.prototype.trigger = function (e, t) {
              var i = s.__super__.trigger,
                n = {
                  open: "opening",
                  close: "closing",
                  select: "selecting",
                  unselect: "unselecting",
                  clear: "clearing",
                };
              if ((void 0 === t && (t = {}), e in n)) {
                var o = { prevented: !1, name: e, args: t };
                if ((i.call(this, n[e], o), o.prevented))
                  return void (t.prevented = !0);
              }
              i.call(this, e, t);
            }),
            (s.prototype.toggleDropdown = function () {
              this.isDisabled() || (this.isOpen() ? this.close() : this.open());
            }),
            (s.prototype.open = function () {
              this.isOpen() || this.isDisabled() || this.trigger("query", {});
            }),
            (s.prototype.close = function (e) {
              this.isOpen() && this.trigger("close", { originalEvent: e });
            }),
            (s.prototype.isEnabled = function () {
              return !this.isDisabled();
            }),
            (s.prototype.isDisabled = function () {
              return this.options.get("disabled");
            }),
            (s.prototype.isOpen = function () {
              return this.$container[0].classList.contains(
                "select2-container--open"
              );
            }),
            (s.prototype.hasFocus = function () {
              return this.$container[0].classList.contains(
                "select2-container--focus"
              );
            }),
            (s.prototype.focus = function (e) {
              this.hasFocus() ||
                (this.$container[0].classList.add("select2-container--focus"),
                this.trigger("focus", {}));
            }),
            (s.prototype.enable = function (e) {
              this.options.get("debug") && window.console && console.warn,
                (e = !(e = null != e && 0 !== e.length ? e : [!0])[0]),
                this.$element.prop("disabled", e);
            }),
            (s.prototype.data = function () {
              this.options.get("debug") &&
                0 < arguments.length &&
                window.console &&
                console.warn;
              var e = [];
              return (
                this.dataAdapter.current(function (t) {
                  e = t;
                }),
                e
              );
            }),
            (s.prototype.val = function (e) {
              if (
                (this.options.get("debug") && window.console && console.warn,
                null == e || 0 === e.length)
              )
                return this.$element.val();
              (e = e[0]),
                Array.isArray(e) &&
                  (e = e.map(function (e) {
                    return e.toString();
                  })),
                this.$element.val(e).trigger("input").trigger("change");
            }),
            (s.prototype.destroy = function () {
              i.RemoveData(this.$container[0]),
                this.$container.remove(),
                this._observer.disconnect(),
                (this._observer = null),
                (this._syncA = null),
                (this._syncS = null),
                this.$element.off(".select2"),
                this.$element.attr(
                  "tabindex",
                  i.GetData(this.$element[0], "old-tabindex")
                ),
                this.$element[0].classList.remove("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                i.RemoveData(this.$element[0]),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                (this.dataAdapter = null),
                (this.selection = null),
                (this.dropdown = null),
                (this.results = null);
            }),
            (s.prototype.render = function () {
              var t = e(
                '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
              );
              return (
                t.attr("dir", this.options.get("dir")),
                (this.$container = t),
                this.$container[0].classList.add(
                  "select2-container--" + this.options.get("theme")
                ),
                i.StoreData(t[0], "element", this.$element),
                t
              );
            }),
            s
          );
        }
      ),
      x.define("select2/dropdown/attachContainer", [], function () {
        function e(e, t, i) {
          e.call(this, t, i);
        }
        return (
          (e.prototype.position = function (e, t, i) {
            i.find(".dropdown-wrapper").append(t),
              t[0].classList.add("select2-dropdown--below"),
              i[0].classList.add("select2-container--below");
          }),
          e
        );
      }),
      x.define("select2/dropdown/stopPropagation", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, i) {
            e.call(this, t, i),
              this.$dropdown.on(
                [
                  "blur",
                  "change",
                  "click",
                  "dblclick",
                  "focus",
                  "focusin",
                  "focusout",
                  "input",
                  "keydown",
                  "keyup",
                  "keypress",
                  "mousedown",
                  "mouseenter",
                  "mouseleave",
                  "mousemove",
                  "mouseover",
                  "mouseup",
                  "search",
                  "touchend",
                  "touchstart",
                ].join(" "),
                function (e) {
                  e.stopPropagation();
                }
              );
          }),
          e
        );
      }),
      x.define("select2/selection/stopPropagation", [], function () {
        function e() {}
        return (
          (e.prototype.bind = function (e, t, i) {
            e.call(this, t, i),
              this.$selection.on(
                [
                  "blur",
                  "change",
                  "click",
                  "dblclick",
                  "focus",
                  "focusin",
                  "focusout",
                  "input",
                  "keydown",
                  "keyup",
                  "keypress",
                  "mousedown",
                  "mouseenter",
                  "mouseleave",
                  "mousemove",
                  "mouseover",
                  "mouseup",
                  "search",
                  "touchend",
                  "touchstart",
                ].join(" "),
                function (e) {
                  e.stopPropagation();
                }
              );
          }),
          e
        );
      }),
      (f = function (e) {
        var t,
          i,
          n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
          s =
            "onwheel" in document || 9 <= document.documentMode
              ? ["wheel"]
              : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
          o = Array.prototype.slice;
        if (e.event.fixHooks)
          for (var r = n.length; r; )
            e.event.fixHooks[n[--r]] = e.event.mouseHooks;
        var a = (e.event.special.mousewheel = {
          version: "3.1.12",
          setup: function () {
            if (this.addEventListener)
              for (var t = s.length; t; ) this.addEventListener(s[--t], l, !1);
            else this.onmousewheel = l;
            e.data(this, "mousewheel-line-height", a.getLineHeight(this)),
              e.data(this, "mousewheel-page-height", a.getPageHeight(this));
          },
          teardown: function () {
            if (this.removeEventListener)
              for (var t = s.length; t; )
                this.removeEventListener(s[--t], l, !1);
            else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"),
              e.removeData(this, "mousewheel-page-height");
          },
          getLineHeight: function (t) {
            var i = (t = e(t))[
              "offsetParent" in e.fn ? "offsetParent" : "parent"
            ]();
            return (
              i.length || (i = e("body")),
              parseInt(i.css("fontSize"), 10) ||
                parseInt(t.css("fontSize"), 10) ||
                16
            );
          },
          getPageHeight: function (t) {
            return e(t).height();
          },
          settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
        });
        function l(n) {
          var s,
            r = n || window.event,
            l = o.call(arguments, 1),
            u = 0,
            p = 0,
            h = 0,
            f = 0,
            m = 0;
          if (
            (((n = e.event.fix(r)).type = "mousewheel"),
            "detail" in r && (h = -1 * r.detail),
            "wheelDelta" in r && (h = r.wheelDelta),
            "wheelDeltaY" in r && (h = r.wheelDeltaY),
            "wheelDeltaX" in r && (p = -1 * r.wheelDeltaX),
            "axis" in r &&
              r.axis === r.HORIZONTAL_AXIS &&
              ((p = -1 * h), (h = 0)),
            (u = 0 === h ? p : h),
            "deltaY" in r && (u = h = -1 * r.deltaY),
            "deltaX" in r && ((p = r.deltaX), 0 === h) && (u = -1 * p),
            0 !== h || 0 !== p)
          )
            return (
              1 === r.deltaMode
                ? ((u *= s = e.data(this, "mousewheel-line-height")),
                  (h *= s),
                  (p *= s))
                : 2 === r.deltaMode &&
                  ((u *= s = e.data(this, "mousewheel-page-height")),
                  (h *= s),
                  (p *= s)),
              (s = Math.max(Math.abs(h), Math.abs(p))),
              (!i || s < i) && d(r, (i = s)) && (i /= 40),
              d(r, s) && ((u /= 40), (p /= 40), (h /= 40)),
              (u = Math[1 <= u ? "floor" : "ceil"](u / i)),
              (p = Math[1 <= p ? "floor" : "ceil"](p / i)),
              (h = Math[1 <= h ? "floor" : "ceil"](h / i)),
              a.settings.normalizeOffset &&
                this.getBoundingClientRect &&
                ((r = this.getBoundingClientRect()),
                (f = n.clientX - r.left),
                (m = n.clientY - r.top)),
              (n.deltaX = p),
              (n.deltaY = h),
              (n.deltaFactor = i),
              (n.offsetX = f),
              (n.offsetY = m),
              (n.deltaMode = 0),
              l.unshift(n, u, p, h),
              t && clearTimeout(t),
              (t = setTimeout(c, 200)),
              (e.event.dispatch || e.event.handle).apply(this, l)
            );
        }
        function c() {
          i = null;
        }
        function d(e, t) {
          return (
            a.settings.adjustOldDeltas &&
            "mousewheel" === e.type &&
            t % 120 == 0
          );
        }
        e.fn.extend({
          mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
          },
          unmousewheel: function (e) {
            return this.unbind("mousewheel", e);
          },
        });
      }),
      "function" == typeof x.define && x.define.amd
        ? x.define("jquery-mousewheel", ["jquery"], f)
        : "object" == typeof exports
        ? (module.exports = f)
        : f(e),
      x.define(
        "jquery.select2",
        [
          "jquery",
          "jquery-mousewheel",
          "./select2/core",
          "./select2/defaults",
          "./select2/utils",
        ],
        function (e, t, i, n, s) {
          var o;
          return (
            null == e.fn.select2 &&
              ((o = ["open", "close", "destroy"]),
              (e.fn.select2 = function (t) {
                if ("object" == typeof (t = t || {}))
                  return (
                    this.each(function () {
                      var n = e.extend(!0, {}, t);
                      new i(e(this), n);
                    }),
                    this
                  );
                var n, r;
                if ("string" == typeof t)
                  return (
                    (r = Array.prototype.slice.call(arguments, 1)),
                    this.each(function () {
                      var e = s.GetData(this, "select2");
                      null == e && window.console && console.error,
                        (n = e[t].apply(e, r));
                    }),
                    -1 < o.indexOf(t) ? this : n
                  );
                throw new Error("Invalid arguments for Select2: " + t);
              })),
            null == e.fn.select2.defaults && (e.fn.select2.defaults = n),
            i
          );
        }
      );
    var t,
      i,
      n,
      s,
      o,
      r,
      a,
      l,
      c,
      d,
      u,
      p,
      h,
      f,
      m = { define: x.define, require: x.require };
    function g(e, t) {
      return u.call(e, t);
    }
    function v(e, t) {
      var i,
        n,
        s,
        o,
        r,
        a,
        l,
        d,
        u,
        p,
        f = t && t.split("/"),
        m = c.map,
        g = (m && m["*"]) || {};
      if (e) {
        for (
          t = (e = e.split("/")).length - 1,
            c.nodeIdCompat && h.test(e[t]) && (e[t] = e[t].replace(h, "")),
            "." === e[0].charAt(0) &&
              f &&
              (e = f.slice(0, f.length - 1).concat(e)),
            d = 0;
          d < e.length;
          d++
        )
          "." === (p = e[d])
            ? (e.splice(d, 1), --d)
            : ".." !== p ||
              0 === d ||
              (1 === d && ".." === e[2]) ||
              ".." === e[d - 1] ||
              (0 < d && (e.splice(d - 1, 2), (d -= 2)));
        e = e.join("/");
      }
      if ((f || g) && m) {
        for (d = (i = e.split("/")).length; 0 < d; --d) {
          if (((n = i.slice(0, d).join("/")), f))
            for (u = f.length; 0 < u; --u)
              if ((s = (s = m[f.slice(0, u).join("/")]) && s[n])) {
                (o = s), (r = d);
                break;
              }
          if (o) break;
          !a && g && g[n] && ((a = g[n]), (l = d));
        }
        !o && a && ((o = a), (r = l)),
          o && (i.splice(0, r, o), (e = i.join("/")));
      }
      return e;
    }
    function _(e, t) {
      return function () {
        var n = p.call(arguments, 0);
        return (
          "string" != typeof n[0] && 1 === n.length && n.push(null),
          s.apply(i, n.concat([e, t]))
        );
      };
    }
    function y(e) {
      var t;
      if (
        (g(l, e) && ((t = l[e]), delete l[e], (d[e] = !0), n.apply(i, t)),
        g(a, e) || g(d, e))
      )
        return a[e];
      throw new Error("No " + e);
    }
    function w(e) {
      var t,
        i = e ? e.indexOf("!") : -1;
      return (
        -1 < i && ((t = e.substring(0, i)), (e = e.substring(i + 1, e.length))),
        [t, e]
      );
    }
    function b(e) {
      return e ? w(e) : [];
    }
    var x = m.require("jquery.select2");
    return (e.fn.select2.amd = m), x;
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e);
        })
      : "object" == typeof exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(0, function (e) {
    function t(e) {
      this.$container,
        (this.constraints = null),
        this.__$tooltip,
        this.__init(e);
    }
    function i(t, i) {
      var n = !0;
      return (
        e.each(t, function (e, s) {
          return void 0 === i[e] || t[e] !== i[e] ? ((n = !1), !1) : void 0;
        }),
        n
      );
    }
    function n(t) {
      var i = t.attr("id"),
        n = i ? r.window.document.getElementById(i) : null;
      return n ? n === t[0] : e.contains(r.window.document.body, t[0]);
    }
    var s = {
        animation: "fade",
        animationDuration: 350,
        content: null,
        contentAsHTML: !1,
        contentCloning: !1,
        debug: !0,
        delay: 300,
        delayTouch: [300, 500],
        functionInit: null,
        functionBefore: null,
        functionReady: null,
        functionAfter: null,
        functionFormat: null,
        IEmin: 6,
        interactive: !1,
        multiple: !1,
        parent: null,
        plugins: ["sideTip"],
        repositionOnScroll: !1,
        restoration: "none",
        selfDestruction: !0,
        theme: [],
        timer: 0,
        trackerInterval: 500,
        trackOrigin: !1,
        trackTooltip: !1,
        trigger: "hover",
        triggerClose: {
          click: !1,
          mouseleave: !1,
          originClick: !1,
          scroll: !1,
          tap: !1,
          touchleave: !1,
        },
        triggerOpen: { click: !1, mouseenter: !1, tap: !1, touchstart: !1 },
        updateAnimation: "rotate",
        zIndex: 9999999,
      },
      o = "undefined" != typeof window ? window : null,
      r = {
        hasTouchCapability: !(
          !o ||
          !(
            "ontouchstart" in o ||
            (o.DocumentTouch && o.document instanceof o.DocumentTouch) ||
            o.navigator.maxTouchPoints
          )
        ),
        hasTransitions: (function () {
          if (!o) return !1;
          var e = (o.document.body || o.document.documentElement).style,
            t = "transition",
            i = ["Moz", "Webkit", "Khtml", "O", "ms"];
          if ("string" == typeof e[t]) return !0;
          t = t.charAt(0).toUpperCase() + t.substr(1);
          for (var n = 0; n < i.length; n++)
            if ("string" == typeof e[i[n] + t]) return !0;
          return !1;
        })(),
        IE: !1,
        semVer: "4.2.8",
        window: o,
      },
      a = function () {
        (this.__$emitterPrivate = e({})),
          (this.__$emitterPublic = e({})),
          (this.__instancesLatestArr = []),
          (this.__plugins = {}),
          (this._env = r);
      };
    (a.prototype = {
      __bridge: function (t, i, n) {
        if (!i[n]) {
          var s = function () {};
          s.prototype = t;
          var o = new s();
          o.__init && o.__init(i),
            e.each(t, function (e, t) {
              0 != e.indexOf("__") &&
                !i[e] &&
                ((i[e] = function () {
                  return o[e].apply(o, Array.prototype.slice.apply(arguments));
                }),
                (i[e].bridged = o));
            }),
            (i[n] = o);
        }
        return this;
      },
      __setWindow: function (e) {
        return (r.window = e), this;
      },
      _getRuler: function (e) {
        return new t(e);
      },
      _off: function () {
        return (
          this.__$emitterPrivate.off.apply(
            this.__$emitterPrivate,
            Array.prototype.slice.apply(arguments)
          ),
          this
        );
      },
      _on: function () {
        return (
          this.__$emitterPrivate.on.apply(
            this.__$emitterPrivate,
            Array.prototype.slice.apply(arguments)
          ),
          this
        );
      },
      _one: function () {
        return (
          this.__$emitterPrivate.one.apply(
            this.__$emitterPrivate,
            Array.prototype.slice.apply(arguments)
          ),
          this
        );
      },
      _plugin: function (t) {
        var i = this;
        if ("string" == typeof t) {
          var n = t,
            s = null;
          return (
            n.indexOf(".") > 0
              ? (s = i.__plugins[n])
              : e.each(i.__plugins, function (e, t) {
                  return t.name.substring(t.name.length - n.length - 1) ==
                    "." + n
                    ? ((s = t), !1)
                    : void 0;
                }),
            s
          );
        }
        if (t.name.indexOf(".") < 0)
          throw new Error("Plugins must be namespaced");
        return (
          (i.__plugins[t.name] = t),
          t.core && i.__bridge(t.core, i, t.name),
          this
        );
      },
      _trigger: function () {
        var e = Array.prototype.slice.apply(arguments);
        return (
          "string" == typeof e[0] && (e[0] = { type: e[0] }),
          this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, e),
          this.__$emitterPublic.trigger.apply(this.__$emitterPublic, e),
          this
        );
      },
      instances: function (t) {
        var i = [];
        return (
          e(t || ".tooltipstered").each(function () {
            var t = e(this),
              n = t.data("tooltipster-ns");
            n &&
              e.each(n, function (e, n) {
                i.push(t.data(n));
              });
          }),
          i
        );
      },
      instancesLatest: function () {
        return this.__instancesLatestArr;
      },
      off: function () {
        return (
          this.__$emitterPublic.off.apply(
            this.__$emitterPublic,
            Array.prototype.slice.apply(arguments)
          ),
          this
        );
      },
      on: function () {
        return (
          this.__$emitterPublic.on.apply(
            this.__$emitterPublic,
            Array.prototype.slice.apply(arguments)
          ),
          this
        );
      },
      one: function () {
        return (
          this.__$emitterPublic.one.apply(
            this.__$emitterPublic,
            Array.prototype.slice.apply(arguments)
          ),
          this
        );
      },
      origins: function (t) {
        return e((t ? t + " " : "") + ".tooltipstered").toArray();
      },
      setDefaults: function (t) {
        return e.extend(s, t), this;
      },
      triggerHandler: function () {
        return (
          this.__$emitterPublic.triggerHandler.apply(
            this.__$emitterPublic,
            Array.prototype.slice.apply(arguments)
          ),
          this
        );
      },
    }),
      (e.tooltipster = new a()),
      (e.Tooltipster = function (t, i) {
        (this.__callbacks = { close: [], open: [] }),
          this.__closingTime,
          this.__Content,
          this.__contentBcr,
          (this.__destroyed = !1),
          (this.__$emitterPrivate = e({})),
          (this.__$emitterPublic = e({})),
          (this.__enabled = !0),
          this.__garbageCollector,
          this.__Geometry,
          this.__lastPosition,
          (this.__namespace = "tooltipster-" + Math.round(1e6 * Math.random())),
          this.__options,
          this.__$originParents,
          (this.__pointerIsOverOrigin = !1),
          (this.__previousThemes = []),
          (this.__state = "closed"),
          (this.__timeouts = { close: [], open: null }),
          (this.__touchEvents = []),
          (this.__tracker = null),
          this._$origin,
          this._$tooltip,
          this.__init(t, i);
      }),
      (e.Tooltipster.prototype = {
        __init: function (t, i) {
          var n = this;
          if (
            ((n._$origin = e(t)),
            (n.__options = e.extend(!0, {}, s, i)),
            n.__optionsFormat(),
            !r.IE || r.IE >= n.__options.IEmin)
          ) {
            var o = null;
            if (
              (void 0 === n._$origin.data("tooltipster-initialTitle") &&
                (void 0 === (o = n._$origin.attr("title")) && (o = null),
                n._$origin.data("tooltipster-initialTitle", o)),
              null !== n.__options.content)
            )
              n.__contentSet(n.__options.content);
            else {
              var a,
                l = n._$origin.attr("data-tooltip-content");
              l && (a = e(l)),
                a && a[0] ? n.__contentSet(a.first()) : n.__contentSet(o);
            }
            n._$origin.removeAttr("title").addClass("tooltipstered"),
              n.__prepareOrigin(),
              n.__prepareGC(),
              e.each(n.__options.plugins, function (e, t) {
                n._plug(t);
              }),
              r.hasTouchCapability &&
                e(r.window.document.body).on(
                  "touchmove." + n.__namespace + "-triggerOpen",
                  function (e) {
                    n._touchRecordEvent(e);
                  }
                ),
              n
                ._on("created", function () {
                  n.__prepareTooltip();
                })
                ._on("repositioned", function (e) {
                  n.__lastPosition = e.position;
                });
          } else n.__options.disabled = !0;
        },
        __contentInsert: function () {
          var e = this,
            t = e._$tooltip.find(".tooltipster-content"),
            i = e.__Content;
          return (
            e._trigger({
              type: "format",
              content: e.__Content,
              format: function (e) {
                i = e;
              },
            }),
            e.__options.functionFormat &&
              (i = e.__options.functionFormat.call(
                e,
                e,
                { origin: e._$origin[0] },
                e.__Content
              )),
            "string" != typeof i || e.__options.contentAsHTML
              ? t.empty().append(i)
              : t.text(i),
            e
          );
        },
        __contentSet: function (t) {
          return (
            t instanceof e &&
              this.__options.contentCloning &&
              (t = t.clone(!0)),
            (this.__Content = t),
            this._trigger({ type: "updated", content: t }),
            this
          );
        },
        __destroyError: function () {
          throw new Error(
            "This tooltip has been destroyed and cannot execute your method call."
          );
        },
        __geometry: function () {
          var t = this,
            i = t._$origin,
            n = t._$origin.is("area");
          if (n) {
            var s = t._$origin.parent().attr("name");
            i = e('img[usemap="#' + s + '"]');
          }
          var o = i[0].getBoundingClientRect(),
            a = e(r.window.document),
            l = e(r.window),
            c = i,
            d = {
              available: { document: null, window: null },
              document: { size: { height: a.height(), width: a.width() } },
              window: {
                scroll: {
                  left:
                    r.window.scrollX ||
                    r.window.document.documentElement.scrollLeft,
                  top:
                    r.window.scrollY ||
                    r.window.document.documentElement.scrollTop,
                },
                size: { height: l.height(), width: l.width() },
              },
              origin: {
                fixedLineage: !1,
                offset: {},
                size: { height: o.bottom - o.top, width: o.right - o.left },
                usemapImage: n ? i[0] : null,
                windowOffset: {
                  bottom: o.bottom,
                  left: o.left,
                  right: o.right,
                  top: o.top,
                },
              },
            };
          if (n) {
            var u = t._$origin.attr("shape"),
              p = t._$origin.attr("coords");
            if (
              (p &&
                ((p = p.split(",")),
                e.map(p, function (e, t) {
                  p[t] = parseInt(e);
                })),
              "default" != u)
            )
              switch (u) {
                case "circle":
                  var h = p[0],
                    f = p[1],
                    m = p[2],
                    g = f - m,
                    v = h - m;
                  (d.origin.size.height = 2 * m),
                    (d.origin.size.width = d.origin.size.height),
                    (d.origin.windowOffset.left += v),
                    (d.origin.windowOffset.top += g);
                  break;
                case "rect":
                  var _ = p[0],
                    y = p[1],
                    w = p[2],
                    b = p[3];
                  (d.origin.size.height = b - y),
                    (d.origin.size.width = w - _),
                    (d.origin.windowOffset.left += _),
                    (d.origin.windowOffset.top += y);
                  break;
                case "poly":
                  for (
                    var $ = 0, x = 0, C = 0, S = 0, k = "even", T = 0;
                    T < p.length;
                    T++
                  ) {
                    var E = p[T];
                    "even" == k
                      ? (E > C && ((C = E), 0 === T && ($ = C)),
                        $ > E && ($ = E),
                        (k = "odd"))
                      : (E > S && ((S = E), 1 == T && (x = S)),
                        x > E && (x = E),
                        (k = "even"));
                  }
                  (d.origin.size.height = S - x),
                    (d.origin.size.width = C - $),
                    (d.origin.windowOffset.left += $),
                    (d.origin.windowOffset.top += x);
              }
          }
          for (
            t._trigger({
              type: "geometry",
              edit: function (e) {
                (d.origin.size.height = e.height),
                  (d.origin.windowOffset.left = e.left),
                  (d.origin.windowOffset.top = e.top),
                  (d.origin.size.width = e.width);
              },
              geometry: {
                height: d.origin.size.height,
                left: d.origin.windowOffset.left,
                top: d.origin.windowOffset.top,
                width: d.origin.size.width,
              },
            }),
              d.origin.windowOffset.right =
                d.origin.windowOffset.left + d.origin.size.width,
              d.origin.windowOffset.bottom =
                d.origin.windowOffset.top + d.origin.size.height,
              d.origin.offset.left =
                d.origin.windowOffset.left + d.window.scroll.left,
              d.origin.offset.top =
                d.origin.windowOffset.top + d.window.scroll.top,
              d.origin.offset.bottom =
                d.origin.offset.top + d.origin.size.height,
              d.origin.offset.right =
                d.origin.offset.left + d.origin.size.width,
              d.available.document = {
                bottom: {
                  height: d.document.size.height - d.origin.offset.bottom,
                  width: d.document.size.width,
                },
                left: {
                  height: d.document.size.height,
                  width: d.origin.offset.left,
                },
                right: {
                  height: d.document.size.height,
                  width: d.document.size.width - d.origin.offset.right,
                },
                top: {
                  height: d.origin.offset.top,
                  width: d.document.size.width,
                },
              },
              d.available.window = {
                bottom: {
                  height: Math.max(
                    d.window.size.height -
                      Math.max(d.origin.windowOffset.bottom, 0),
                    0
                  ),
                  width: d.window.size.width,
                },
                left: {
                  height: d.window.size.height,
                  width: Math.max(d.origin.windowOffset.left, 0),
                },
                right: {
                  height: d.window.size.height,
                  width: Math.max(
                    d.window.size.width -
                      Math.max(d.origin.windowOffset.right, 0),
                    0
                  ),
                },
                top: {
                  height: Math.max(d.origin.windowOffset.top, 0),
                  width: d.window.size.width,
                },
              };
            "html" != c[0].tagName.toLowerCase();

          ) {
            if ("fixed" == c.css("position")) {
              d.origin.fixedLineage = !0;
              break;
            }
            c = c.parent();
          }
          return d;
        },
        __optionsFormat: function () {
          return (
            "number" == typeof this.__options.animationDuration &&
              (this.__options.animationDuration = [
                this.__options.animationDuration,
                this.__options.animationDuration,
              ]),
            "number" == typeof this.__options.delay &&
              (this.__options.delay = [
                this.__options.delay,
                this.__options.delay,
              ]),
            "number" == typeof this.__options.delayTouch &&
              (this.__options.delayTouch = [
                this.__options.delayTouch,
                this.__options.delayTouch,
              ]),
            "string" == typeof this.__options.theme &&
              (this.__options.theme = [this.__options.theme]),
            null === this.__options.parent
              ? (this.__options.parent = e(r.window.document.body))
              : "string" == typeof this.__options.parent &&
                (this.__options.parent = e(this.__options.parent)),
            "hover" == this.__options.trigger
              ? ((this.__options.triggerOpen = {
                  mouseenter: !0,
                  touchstart: !0,
                }),
                (this.__options.triggerClose = {
                  mouseleave: !0,
                  originClick: !0,
                  touchleave: !0,
                }))
              : "click" == this.__options.trigger &&
                ((this.__options.triggerOpen = { click: !0, tap: !0 }),
                (this.__options.triggerClose = { click: !0, tap: !0 })),
            this._trigger("options"),
            this
          );
        },
        __prepareGC: function () {
          var t = this;
          return (
            t.__options.selfDestruction
              ? (t.__garbageCollector = setInterval(function () {
                  var i = new Date().getTime();
                  (t.__touchEvents = e.grep(t.__touchEvents, function (e, t) {
                    return i - e.time > 6e4;
                  })),
                    n(t._$origin) ||
                      t.close(function () {
                        t.destroy();
                      });
                }, 2e4))
              : clearInterval(t.__garbageCollector),
            t
          );
        },
        __prepareOrigin: function () {
          var e = this;
          if (
            (e._$origin.off("." + e.__namespace + "-triggerOpen"),
            r.hasTouchCapability &&
              e._$origin.on(
                "touchstart." +
                  e.__namespace +
                  "-triggerOpen touchend." +
                  e.__namespace +
                  "-triggerOpen touchcancel." +
                  e.__namespace +
                  "-triggerOpen",
                function (t) {
                  e._touchRecordEvent(t);
                }
              ),
            e.__options.triggerOpen.click ||
              (e.__options.triggerOpen.tap && r.hasTouchCapability))
          ) {
            var t = "";
            e.__options.triggerOpen.click &&
              (t += "click." + e.__namespace + "-triggerOpen "),
              e.__options.triggerOpen.tap &&
                r.hasTouchCapability &&
                (t += "touchend." + e.__namespace + "-triggerOpen"),
              e._$origin.on(t, function (t) {
                e._touchIsMeaningfulEvent(t) && e._open(t);
              });
          }
          if (
            e.__options.triggerOpen.mouseenter ||
            (e.__options.triggerOpen.touchstart && r.hasTouchCapability)
          ) {
            t = "";
            e.__options.triggerOpen.mouseenter &&
              (t += "mouseenter." + e.__namespace + "-triggerOpen "),
              e.__options.triggerOpen.touchstart &&
                r.hasTouchCapability &&
                (t += "touchstart." + e.__namespace + "-triggerOpen"),
              e._$origin.on(t, function (t) {
                (!e._touchIsTouchEvent(t) && e._touchIsEmulatedEvent(t)) ||
                  ((e.__pointerIsOverOrigin = !0), e._openShortly(t));
              });
          }
          if (
            e.__options.triggerClose.mouseleave ||
            (e.__options.triggerClose.touchleave && r.hasTouchCapability)
          ) {
            t = "";
            e.__options.triggerClose.mouseleave &&
              (t += "mouseleave." + e.__namespace + "-triggerOpen "),
              e.__options.triggerClose.touchleave &&
                r.hasTouchCapability &&
                (t +=
                  "touchend." +
                  e.__namespace +
                  "-triggerOpen touchcancel." +
                  e.__namespace +
                  "-triggerOpen"),
              e._$origin.on(t, function (t) {
                e._touchIsMeaningfulEvent(t) && (e.__pointerIsOverOrigin = !1);
              });
          }
          return e;
        },
        __prepareTooltip: function () {
          var t = this,
            i = t.__options.interactive ? "auto" : "";
          return (
            t._$tooltip
              .attr("id", t.__namespace)
              .css({ "pointer-events": i, zIndex: t.__options.zIndex }),
            e.each(t.__previousThemes, function (e, i) {
              t._$tooltip.removeClass(i);
            }),
            e.each(t.__options.theme, function (e, i) {
              t._$tooltip.addClass(i);
            }),
            (t.__previousThemes = e.merge([], t.__options.theme)),
            t
          );
        },
        __scrollHandler: function (t) {
          var i = this;
          if (i.__options.triggerClose.scroll) i._close(t);
          else if (n(i._$origin) && n(i._$tooltip)) {
            var s = null;
            if (t.target === r.window.document)
              i.__Geometry.origin.fixedLineage ||
                (i.__options.repositionOnScroll && i.reposition(t));
            else {
              s = i.__geometry();
              var o = !1;
              if (
                ("fixed" != i._$origin.css("position") &&
                  i.__$originParents.each(function (t, i) {
                    var n = e(i),
                      r = n.css("overflow-x"),
                      a = n.css("overflow-y");
                    if ("visible" != r || "visible" != a) {
                      var l = i.getBoundingClientRect();
                      if (
                        "visible" != r &&
                        (s.origin.windowOffset.left < l.left ||
                          s.origin.windowOffset.right > l.right)
                      )
                        return (o = !0), !1;
                      if (
                        "visible" != a &&
                        (s.origin.windowOffset.top < l.top ||
                          s.origin.windowOffset.bottom > l.bottom)
                      )
                        return (o = !0), !1;
                    }
                    return "fixed" != n.css("position") && void 0;
                  }),
                o)
              )
                i._$tooltip.css("visibility", "hidden");
              else if (
                (i._$tooltip.css("visibility", "visible"),
                i.__options.repositionOnScroll)
              )
                i.reposition(t);
              else {
                var a = s.origin.offset.left - i.__Geometry.origin.offset.left,
                  l = s.origin.offset.top - i.__Geometry.origin.offset.top;
                i._$tooltip.css({
                  left: i.__lastPosition.coord.left + a,
                  top: i.__lastPosition.coord.top + l,
                });
              }
            }
            i._trigger({ type: "scroll", event: t, geo: s });
          }
          return i;
        },
        __stateSet: function (e) {
          return (
            (this.__state = e), this._trigger({ type: "state", state: e }), this
          );
        },
        __timeoutsClear: function () {
          return (
            clearTimeout(this.__timeouts.open),
            (this.__timeouts.open = null),
            e.each(this.__timeouts.close, function (e, t) {
              clearTimeout(t);
            }),
            (this.__timeouts.close = []),
            this
          );
        },
        __trackerStart: function () {
          var e = this,
            t = e._$tooltip.find(".tooltipster-content");
          return (
            e.__options.trackTooltip &&
              (e.__contentBcr = t[0].getBoundingClientRect()),
            (e.__tracker = setInterval(function () {
              if (n(e._$origin) && n(e._$tooltip)) {
                if (e.__options.trackOrigin) {
                  var s = e.__geometry(),
                    o = !1;
                  i(s.origin.size, e.__Geometry.origin.size) &&
                    (e.__Geometry.origin.fixedLineage
                      ? i(
                          s.origin.windowOffset,
                          e.__Geometry.origin.windowOffset
                        ) && (o = !0)
                      : i(s.origin.offset, e.__Geometry.origin.offset) &&
                        (o = !0)),
                    o ||
                      (e.__options.triggerClose.mouseleave
                        ? e._close()
                        : e.reposition());
                }
                if (e.__options.trackTooltip) {
                  var r = t[0].getBoundingClientRect();
                  (r.height === e.__contentBcr.height &&
                    r.width === e.__contentBcr.width) ||
                    (e.reposition(), (e.__contentBcr = r));
                }
              } else e._close();
            }, e.__options.trackerInterval)),
            e
          );
        },
        _close: function (t, i, n) {
          var s = this,
            o = !0;
          if (
            (s._trigger({
              type: "close",
              event: t,
              stop: function () {
                o = !1;
              },
            }),
            o || n)
          ) {
            i && s.__callbacks.close.push(i),
              (s.__callbacks.open = []),
              s.__timeoutsClear();
            var a = function () {
              e.each(s.__callbacks.close, function (e, i) {
                i.call(s, s, { event: t, origin: s._$origin[0] });
              }),
                (s.__callbacks.close = []);
            };
            if ("closed" != s.__state) {
              var l = !0,
                c = new Date().getTime() + s.__options.animationDuration[1];
              if (
                ("disappearing" == s.__state &&
                  c > s.__closingTime &&
                  s.__options.animationDuration[1] > 0 &&
                  (l = !1),
                l)
              ) {
                (s.__closingTime = c),
                  "disappearing" != s.__state && s.__stateSet("disappearing");
                var d = function () {
                  clearInterval(s.__tracker),
                    s._trigger({ type: "closing", event: t }),
                    s._$tooltip
                      .off("." + s.__namespace + "-triggerClose")
                      .removeClass("tooltipster-dying"),
                    e(r.window).off("." + s.__namespace + "-triggerClose"),
                    s.__$originParents.each(function (t, i) {
                      e(i).off("scroll." + s.__namespace + "-triggerClose");
                    }),
                    (s.__$originParents = null),
                    e(r.window.document.body).off(
                      "." + s.__namespace + "-triggerClose"
                    ),
                    s._$origin.off("." + s.__namespace + "-triggerClose"),
                    s._off("dismissable"),
                    s.__stateSet("closed"),
                    s._trigger({ type: "after", event: t }),
                    s.__options.functionAfter &&
                      s.__options.functionAfter.call(s, s, {
                        event: t,
                        origin: s._$origin[0],
                      }),
                    a();
                };
                r.hasTransitions
                  ? (s._$tooltip.css({
                      "-moz-animation-duration":
                        s.__options.animationDuration[1] + "ms",
                      "-ms-animation-duration":
                        s.__options.animationDuration[1] + "ms",
                      "-o-animation-duration":
                        s.__options.animationDuration[1] + "ms",
                      "-webkit-animation-duration":
                        s.__options.animationDuration[1] + "ms",
                      "animation-duration":
                        s.__options.animationDuration[1] + "ms",
                      "transition-duration":
                        s.__options.animationDuration[1] + "ms",
                    }),
                    s._$tooltip
                      .clearQueue()
                      .removeClass("tooltipster-show")
                      .addClass("tooltipster-dying"),
                    s.__options.animationDuration[1] > 0 &&
                      s._$tooltip.delay(s.__options.animationDuration[1]),
                    s._$tooltip.queue(d))
                  : s._$tooltip
                      .stop()
                      .fadeOut(s.__options.animationDuration[1], d);
              }
            } else a();
          }
          return s;
        },
        _off: function () {
          return (
            this.__$emitterPrivate.off.apply(
              this.__$emitterPrivate,
              Array.prototype.slice.apply(arguments)
            ),
            this
          );
        },
        _on: function () {
          return (
            this.__$emitterPrivate.on.apply(
              this.__$emitterPrivate,
              Array.prototype.slice.apply(arguments)
            ),
            this
          );
        },
        _one: function () {
          return (
            this.__$emitterPrivate.one.apply(
              this.__$emitterPrivate,
              Array.prototype.slice.apply(arguments)
            ),
            this
          );
        },
        _open: function (t, i) {
          var s = this;
          if (!s.__destroying && n(s._$origin) && s.__enabled) {
            var o = !0;
            if (
              ("closed" == s.__state &&
                (s._trigger({
                  type: "before",
                  event: t,
                  stop: function () {
                    o = !1;
                  },
                }),
                o &&
                  s.__options.functionBefore &&
                  (o = s.__options.functionBefore.call(s, s, {
                    event: t,
                    origin: s._$origin[0],
                  }))),
              !1 !== o && null !== s.__Content)
            ) {
              i && s.__callbacks.open.push(i),
                (s.__callbacks.close = []),
                s.__timeoutsClear();
              var a,
                l = function () {
                  "stable" != s.__state && s.__stateSet("stable"),
                    e.each(s.__callbacks.open, function (e, t) {
                      t.call(s, s, {
                        origin: s._$origin[0],
                        tooltip: s._$tooltip[0],
                      });
                    }),
                    (s.__callbacks.open = []);
                };
              if ("closed" !== s.__state)
                (a = 0),
                  "disappearing" === s.__state
                    ? (s.__stateSet("appearing"),
                      r.hasTransitions
                        ? (s._$tooltip
                            .clearQueue()
                            .removeClass("tooltipster-dying")
                            .addClass("tooltipster-show"),
                          s.__options.animationDuration[0] > 0 &&
                            s._$tooltip.delay(s.__options.animationDuration[0]),
                          s._$tooltip.queue(l))
                        : s._$tooltip.stop().fadeIn(l))
                    : "stable" == s.__state && l();
              else {
                if (
                  (s.__stateSet("appearing"),
                  (a = s.__options.animationDuration[0]),
                  s.__contentInsert(),
                  s.reposition(t, !0),
                  r.hasTransitions
                    ? (s._$tooltip
                        .addClass("tooltipster-" + s.__options.animation)
                        .addClass("tooltipster-initial")
                        .css({
                          "-moz-animation-duration":
                            s.__options.animationDuration[0] + "ms",
                          "-ms-animation-duration":
                            s.__options.animationDuration[0] + "ms",
                          "-o-animation-duration":
                            s.__options.animationDuration[0] + "ms",
                          "-webkit-animation-duration":
                            s.__options.animationDuration[0] + "ms",
                          "animation-duration":
                            s.__options.animationDuration[0] + "ms",
                          "transition-duration":
                            s.__options.animationDuration[0] + "ms",
                        }),
                      setTimeout(function () {
                        "closed" != s.__state &&
                          (s._$tooltip
                            .addClass("tooltipster-show")
                            .removeClass("tooltipster-initial"),
                          s.__options.animationDuration[0] > 0 &&
                            s._$tooltip.delay(s.__options.animationDuration[0]),
                          s._$tooltip.queue(l));
                      }, 0))
                    : s._$tooltip
                        .css("display", "none")
                        .fadeIn(s.__options.animationDuration[0], l),
                  s.__trackerStart(),
                  e(r.window)
                    .on(
                      "resize." + s.__namespace + "-triggerClose",
                      function (t) {
                        var i = e(document.activeElement);
                        ((i.is("input") || i.is("textarea")) &&
                          e.contains(s._$tooltip[0], i[0])) ||
                          s.reposition(t);
                      }
                    )
                    .on(
                      "scroll." + s.__namespace + "-triggerClose",
                      function (e) {
                        s.__scrollHandler(e);
                      }
                    ),
                  (s.__$originParents = s._$origin.parents()),
                  s.__$originParents.each(function (t, i) {
                    e(i).on(
                      "scroll." + s.__namespace + "-triggerClose",
                      function (e) {
                        s.__scrollHandler(e);
                      }
                    );
                  }),
                  s.__options.triggerClose.mouseleave ||
                    (s.__options.triggerClose.touchleave &&
                      r.hasTouchCapability))
                ) {
                  s._on("dismissable", function (e) {
                    e.dismissable
                      ? e.delay
                        ? ((p = setTimeout(function () {
                            s._close(e.event);
                          }, e.delay)),
                          s.__timeouts.close.push(p))
                        : s._close(e)
                      : clearTimeout(p);
                  });
                  var c = s._$origin,
                    d = "",
                    u = "",
                    p = null;
                  s.__options.interactive && (c = c.add(s._$tooltip)),
                    s.__options.triggerClose.mouseleave &&
                      ((d += "mouseenter." + s.__namespace + "-triggerClose "),
                      (u += "mouseleave." + s.__namespace + "-triggerClose ")),
                    s.__options.triggerClose.touchleave &&
                      r.hasTouchCapability &&
                      ((d += "touchstart." + s.__namespace + "-triggerClose"),
                      (u +=
                        "touchend." +
                        s.__namespace +
                        "-triggerClose touchcancel." +
                        s.__namespace +
                        "-triggerClose")),
                    c
                      .on(u, function (e) {
                        if (
                          s._touchIsTouchEvent(e) ||
                          !s._touchIsEmulatedEvent(e)
                        ) {
                          var t =
                            "mouseleave" == e.type
                              ? s.__options.delay
                              : s.__options.delayTouch;
                          s._trigger({
                            delay: t[1],
                            dismissable: !0,
                            event: e,
                            type: "dismissable",
                          });
                        }
                      })
                      .on(d, function (e) {
                        (!s._touchIsTouchEvent(e) &&
                          s._touchIsEmulatedEvent(e)) ||
                          s._trigger({
                            dismissable: !1,
                            event: e,
                            type: "dismissable",
                          });
                      });
                }
                s.__options.triggerClose.originClick &&
                  s._$origin.on(
                    "click." + s.__namespace + "-triggerClose",
                    function (e) {
                      s._touchIsTouchEvent(e) ||
                        s._touchIsEmulatedEvent(e) ||
                        s._close(e);
                    }
                  ),
                  (s.__options.triggerClose.click ||
                    (s.__options.triggerClose.tap && r.hasTouchCapability)) &&
                    setTimeout(function () {
                      if ("closed" != s.__state) {
                        var t = "",
                          i = e(r.window.document.body);
                        s.__options.triggerClose.click &&
                          (t += "click." + s.__namespace + "-triggerClose "),
                          s.__options.triggerClose.tap &&
                            r.hasTouchCapability &&
                            (t +=
                              "touchend." + s.__namespace + "-triggerClose"),
                          i.on(t, function (t) {
                            s._touchIsMeaningfulEvent(t) &&
                              (s._touchRecordEvent(t),
                              (s.__options.interactive &&
                                e.contains(s._$tooltip[0], t.target)) ||
                                s._close(t));
                          }),
                          s.__options.triggerClose.tap &&
                            r.hasTouchCapability &&
                            i.on(
                              "touchstart." + s.__namespace + "-triggerClose",
                              function (e) {
                                s._touchRecordEvent(e);
                              }
                            );
                      }
                    }, 0),
                  s._trigger("ready"),
                  s.__options.functionReady &&
                    s.__options.functionReady.call(s, s, {
                      origin: s._$origin[0],
                      tooltip: s._$tooltip[0],
                    });
              }
              if (s.__options.timer > 0) {
                p = setTimeout(function () {
                  s._close();
                }, s.__options.timer + a);
                s.__timeouts.close.push(p);
              }
            }
          }
          return s;
        },
        _openShortly: function (e) {
          var t = this,
            i = !0;
          if (
            "stable" != t.__state &&
            "appearing" != t.__state &&
            !t.__timeouts.open &&
            (t._trigger({
              type: "start",
              event: e,
              stop: function () {
                i = !1;
              },
            }),
            i)
          ) {
            var n =
              0 == e.type.indexOf("touch")
                ? t.__options.delayTouch
                : t.__options.delay;
            n[0]
              ? (t.__timeouts.open = setTimeout(function () {
                  (t.__timeouts.open = null),
                    t.__pointerIsOverOrigin && t._touchIsMeaningfulEvent(e)
                      ? (t._trigger("startend"), t._open(e))
                      : t._trigger("startcancel");
                }, n[0]))
              : (t._trigger("startend"), t._open(e));
          }
          return t;
        },
        _optionsExtract: function (t, i) {
          var n = this,
            s = e.extend(!0, {}, i),
            o = n.__options[t];
          return (
            o ||
              ((o = {}),
              e.each(i, function (e, t) {
                var i = n.__options[e];
                void 0 !== i && (o[e] = i);
              })),
            e.each(s, function (t, i) {
              void 0 !== o[t] &&
                ("object" != typeof i ||
                i instanceof Array ||
                null == i ||
                "object" != typeof o[t] ||
                o[t] instanceof Array ||
                null == o[t]
                  ? (s[t] = o[t])
                  : e.extend(s[t], o[t]));
            }),
            s
          );
        },
        _plug: function (t) {
          var i = e.tooltipster._plugin(t);
          if (!i) throw new Error('The "' + t + '" plugin is not defined');
          return (
            i.instance && e.tooltipster.__bridge(i.instance, this, i.name), this
          );
        },
        _touchIsEmulatedEvent: function (e) {
          for (
            var t = !1,
              i = new Date().getTime(),
              n = this.__touchEvents.length - 1;
            n >= 0;
            n--
          ) {
            var s = this.__touchEvents[n];
            if (!(i - s.time < 500)) break;
            s.target === e.target && (t = !0);
          }
          return t;
        },
        _touchIsMeaningfulEvent: function (e) {
          return (
            (this._touchIsTouchEvent(e) && !this._touchSwiped(e.target)) ||
            (!this._touchIsTouchEvent(e) && !this._touchIsEmulatedEvent(e))
          );
        },
        _touchIsTouchEvent: function (e) {
          return 0 == e.type.indexOf("touch");
        },
        _touchRecordEvent: function (e) {
          return (
            this._touchIsTouchEvent(e) &&
              ((e.time = new Date().getTime()), this.__touchEvents.push(e)),
            this
          );
        },
        _touchSwiped: function (e) {
          for (var t = !1, i = this.__touchEvents.length - 1; i >= 0; i--) {
            var n = this.__touchEvents[i];
            if ("touchmove" == n.type) {
              t = !0;
              break;
            }
            if ("touchstart" == n.type && e === n.target) break;
          }
          return t;
        },
        _trigger: function () {
          var t = Array.prototype.slice.apply(arguments);
          return (
            "string" == typeof t[0] && (t[0] = { type: t[0] }),
            (t[0].instance = this),
            (t[0].origin = this._$origin ? this._$origin[0] : null),
            (t[0].tooltip = this._$tooltip ? this._$tooltip[0] : null),
            this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, t),
            e.tooltipster._trigger.apply(e.tooltipster, t),
            this.__$emitterPublic.trigger.apply(this.__$emitterPublic, t),
            this
          );
        },
        _unplug: function (t) {
          var i = this;
          if (i[t]) {
            var n = e.tooltipster._plugin(t);
            n.instance &&
              e.each(n.instance, function (e, n) {
                i[e] && i[e].bridged === i[t] && delete i[e];
              }),
              i[t].__destroy && i[t].__destroy(),
              delete i[t];
          }
          return i;
        },
        close: function (e) {
          return (
            this.__destroyed ? this.__destroyError() : this._close(null, e),
            this
          );
        },
        content: function (e) {
          var t = this;
          if (void 0 === e) return t.__Content;
          if (t.__destroyed) t.__destroyError();
          else if ((t.__contentSet(e), null !== t.__Content)) {
            if (
              "closed" !== t.__state &&
              (t.__contentInsert(), t.reposition(), t.__options.updateAnimation)
            )
              if (r.hasTransitions) {
                var i = t.__options.updateAnimation;
                t._$tooltip.addClass("tooltipster-update-" + i),
                  setTimeout(function () {
                    "closed" != t.__state &&
                      t._$tooltip.removeClass("tooltipster-update-" + i);
                  }, 1e3);
              } else
                t._$tooltip.fadeTo(200, 0.5, function () {
                  "closed" != t.__state && t._$tooltip.fadeTo(200, 1);
                });
          } else t._close();
          return t;
        },
        destroy: function () {
          var t = this;
          if (t.__destroyed) t.__destroyError();
          else {
            "closed" != t.__state
              ? t.option("animationDuration", 0)._close(null, null, !0)
              : t.__timeoutsClear(),
              t._trigger("destroy"),
              (t.__destroyed = !0),
              t._$origin
                .removeData(t.__namespace)
                .off("." + t.__namespace + "-triggerOpen"),
              e(r.window.document.body).off(
                "." + t.__namespace + "-triggerOpen"
              );
            var i = t._$origin.data("tooltipster-ns");
            if (i)
              if (1 === i.length) {
                var n = null;
                "previous" == t.__options.restoration
                  ? (n = t._$origin.data("tooltipster-initialTitle"))
                  : "current" == t.__options.restoration &&
                    (n =
                      "string" == typeof t.__Content
                        ? t.__Content
                        : e("<div></div>").append(t.__Content).html()),
                  n && t._$origin.attr("title", n),
                  t._$origin.removeClass("tooltipstered"),
                  t._$origin
                    .removeData("tooltipster-ns")
                    .removeData("tooltipster-initialTitle");
              } else
                (i = e.grep(i, function (e, i) {
                  return e !== t.__namespace;
                })),
                  t._$origin.data("tooltipster-ns", i);
            t._trigger("destroyed"),
              t._off(),
              t.off(),
              (t.__Content = null),
              (t.__$emitterPrivate = null),
              (t.__$emitterPublic = null),
              (t.__options.parent = null),
              (t._$origin = null),
              (t._$tooltip = null),
              (e.tooltipster.__instancesLatestArr = e.grep(
                e.tooltipster.__instancesLatestArr,
                function (e, i) {
                  return t !== e;
                }
              )),
              clearInterval(t.__garbageCollector);
          }
          return t;
        },
        disable: function () {
          return this.__destroyed
            ? (this.__destroyError(), this)
            : (this._close(), (this.__enabled = !1), this);
        },
        elementOrigin: function () {
          return this.__destroyed
            ? void this.__destroyError()
            : this._$origin[0];
        },
        elementTooltip: function () {
          return this._$tooltip ? this._$tooltip[0] : null;
        },
        enable: function () {
          return (this.__enabled = !0), this;
        },
        hide: function (e) {
          return this.close(e);
        },
        instance: function () {
          return this;
        },
        off: function () {
          return (
            this.__destroyed ||
              this.__$emitterPublic.off.apply(
                this.__$emitterPublic,
                Array.prototype.slice.apply(arguments)
              ),
            this
          );
        },
        on: function () {
          return (
            this.__destroyed
              ? this.__destroyError()
              : this.__$emitterPublic.on.apply(
                  this.__$emitterPublic,
                  Array.prototype.slice.apply(arguments)
                ),
            this
          );
        },
        one: function () {
          return (
            this.__destroyed
              ? this.__destroyError()
              : this.__$emitterPublic.one.apply(
                  this.__$emitterPublic,
                  Array.prototype.slice.apply(arguments)
                ),
            this
          );
        },
        open: function (e) {
          return (
            this.__destroyed ? this.__destroyError() : this._open(null, e), this
          );
        },
        option: function (t, i) {
          return void 0 === i
            ? this.__options[t]
            : (this.__destroyed
                ? this.__destroyError()
                : ((this.__options[t] = i),
                  this.__optionsFormat(),
                  e.inArray(t, ["trigger", "triggerClose", "triggerOpen"]) >=
                    0 && this.__prepareOrigin(),
                  "selfDestruction" === t && this.__prepareGC()),
              this);
        },
        reposition: function (e, t) {
          var i = this;
          return (
            i.__destroyed
              ? i.__destroyError()
              : "closed" != i.__state &&
                n(i._$origin) &&
                (t || n(i._$tooltip)) &&
                (t || i._$tooltip.detach(),
                (i.__Geometry = i.__geometry()),
                i._trigger({
                  type: "reposition",
                  event: e,
                  helper: { geo: i.__Geometry },
                })),
            i
          );
        },
        show: function (e) {
          return this.open(e);
        },
        status: function () {
          return {
            destroyed: this.__destroyed,
            enabled: this.__enabled,
            open: "closed" !== this.__state,
            state: this.__state,
          };
        },
        triggerHandler: function () {
          return (
            this.__destroyed
              ? this.__destroyError()
              : this.__$emitterPublic.triggerHandler.apply(
                  this.__$emitterPublic,
                  Array.prototype.slice.apply(arguments)
                ),
            this
          );
        },
      }),
      (e.fn.tooltipster = function () {
        var t = Array.prototype.slice.apply(arguments);
        if (0 === this.length) return this;
        if ("string" == typeof t[0]) {
          var i = "#*$~&";
          return (
            this.each(function () {
              var n = e(this).data("tooltipster-ns"),
                s = n ? e(this).data(n[0]) : null;
              if (!s)
                throw new Error(
                  "You called Tooltipster's \"" +
                    t[0] +
                    '" method on an uninitialized element'
                );
              if ("function" != typeof s[t[0]])
                throw new Error('Unknown method "' + t[0] + '"');
              this.length > 1 &&
                "content" == t[0] &&
                (t[1] instanceof e ||
                  ("object" == typeof t[1] && null != t[1] && t[1].tagName)) &&
                !s.__options.contentCloning &&
                s.__options.debug;
              var o = s[t[0]](t[1], t[2]);
              return o !== s || "instance" === t[0] ? ((i = o), !1) : void 0;
            }),
            "#*$~&" !== i ? i : this
          );
        }
        e.tooltipster.__instancesLatestArr = [];
        var n = t[0] && void 0 !== t[0].multiple,
          o = (n && t[0].multiple) || (!n && s.multiple),
          r = t[0] && void 0 !== t[0].content,
          a = (r && t[0].content) || (!r && s.content),
          l = t[0] && void 0 !== t[0].contentCloning,
          c = (l && t[0].contentCloning, t[0] && void 0 !== t[0].debug);
        c && t[0].debug;
        return (
          this.length > 1 &&
            (a instanceof e ||
              ("object" == typeof a && null != a && a.tagName)),
          this.each(function () {
            var i = !1,
              n = e(this),
              s = n.data("tooltipster-ns"),
              r = null;
            s ? o && (i = !0) : (i = !0),
              i &&
                ((r = new e.Tooltipster(this, t[0])),
                s || (s = []),
                s.push(r.__namespace),
                n.data("tooltipster-ns", s),
                n.data(r.__namespace, r),
                r.__options.functionInit &&
                  r.__options.functionInit.call(r, r, { origin: this }),
                r._trigger("init")),
              e.tooltipster.__instancesLatestArr.push(r);
          }),
          this
        );
      }),
      (t.prototype = {
        __init: function (t) {
          (this.__$tooltip = t),
            this.__$tooltip
              .css({
                left: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0,
              })
              .find(".tooltipster-content")
              .css("overflow", "auto"),
            (this.$container = e('<div class="tooltipster-ruler"></div>')
              .append(this.__$tooltip)
              .appendTo(r.window.document.body));
        },
        __forceRedraw: function () {
          var e = this.__$tooltip.parent();
          this.__$tooltip.detach(), this.__$tooltip.appendTo(e);
        },
        constrain: function (e, t) {
          return (
            (this.constraints = { width: e, height: t }),
            this.__$tooltip.css({
              display: "block",
              height: "",
              overflow: "auto",
              width: e,
            }),
            this
          );
        },
        destroy: function () {
          this.__$tooltip
            .detach()
            .find(".tooltipster-content")
            .css({ display: "", overflow: "" }),
            this.$container.remove();
        },
        free: function () {
          return (
            (this.constraints = null),
            this.__$tooltip.css({
              display: "",
              height: "",
              overflow: "visible",
              width: "",
            }),
            this
          );
        },
        measure: function () {
          this.__forceRedraw();
          var e = this.__$tooltip[0].getBoundingClientRect(),
            t = {
              size: {
                height: e.height || e.bottom - e.top,
                width: e.width || e.right - e.left,
              },
            };
          if (this.constraints) {
            var i = this.__$tooltip.find(".tooltipster-content"),
              n = this.__$tooltip.outerHeight(),
              s = i[0].getBoundingClientRect(),
              o = {
                height: n <= this.constraints.height,
                width:
                  e.width <= this.constraints.width &&
                  s.width >= i[0].scrollWidth - 1,
              };
            t.fits = o.height && o.width;
          }
          return (
            r.IE &&
              r.IE <= 11 &&
              t.size.width !== r.window.document.documentElement.clientWidth &&
              (t.size.width = Math.ceil(t.size.width) + 1),
            t
          );
        },
      });
    var l = navigator.userAgent.toLowerCase();
    -1 != l.indexOf("msie")
      ? (r.IE = parseInt(l.split("msie")[1]))
      : -1 !== l.toLowerCase().indexOf("trident") && -1 !== l.indexOf(" rv:11")
      ? (r.IE = 11)
      : -1 != l.toLowerCase().indexOf("edge/") &&
        (r.IE = parseInt(l.toLowerCase().split("edge/")[1]));
    var c = "tooltipster.sideTip";
    return (
      e.tooltipster._plugin({
        name: c,
        instance: {
          __defaults: function () {
            return {
              arrow: !0,
              distance: 6,
              functionPosition: null,
              maxWidth: null,
              minIntersection: 16,
              minWidth: 0,
              position: null,
              side: "top",
              viewportAware: !0,
            };
          },
          __init: function (e) {
            var t = this;
            (t.__instance = e),
              (t.__namespace =
                "tooltipster-sideTip-" + Math.round(1e6 * Math.random())),
              (t.__previousState = "closed"),
              t.__options,
              t.__optionsFormat(),
              t.__instance._on("state." + t.__namespace, function (e) {
                "closed" == e.state
                  ? t.__close()
                  : "appearing" == e.state &&
                    "closed" == t.__previousState &&
                    t.__create(),
                  (t.__previousState = e.state);
              }),
              t.__instance._on("options." + t.__namespace, function () {
                t.__optionsFormat();
              }),
              t.__instance._on("reposition." + t.__namespace, function (e) {
                t.__reposition(e.event, e.helper);
              });
          },
          __close: function () {
            this.__instance.content() instanceof e &&
              this.__instance.content().detach(),
              this.__instance._$tooltip.remove(),
              (this.__instance._$tooltip = null);
          },
          __create: function () {
            var t = e(
              '<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>'
            );
            this.__options.arrow ||
              t
                .find(".tooltipster-box")
                .css("margin", 0)
                .end()
                .find(".tooltipster-arrow")
                .hide(),
              this.__options.minWidth &&
                t.css("min-width", this.__options.minWidth + "px"),
              this.__options.maxWidth &&
                t.css("max-width", this.__options.maxWidth + "px"),
              (this.__instance._$tooltip = t),
              this.__instance._trigger("created");
          },
          __destroy: function () {
            this.__instance._off("." + self.__namespace);
          },
          __optionsFormat: function () {
            var t = this;
            if (
              ((t.__options = t.__instance._optionsExtract(c, t.__defaults())),
              t.__options.position && (t.__options.side = t.__options.position),
              "object" != typeof t.__options.distance &&
                (t.__options.distance = [t.__options.distance]),
              t.__options.distance.length < 4 &&
                (void 0 === t.__options.distance[1] &&
                  (t.__options.distance[1] = t.__options.distance[0]),
                void 0 === t.__options.distance[2] &&
                  (t.__options.distance[2] = t.__options.distance[0]),
                void 0 === t.__options.distance[3] &&
                  (t.__options.distance[3] = t.__options.distance[1])),
              (t.__options.distance = {
                top: t.__options.distance[0],
                right: t.__options.distance[1],
                bottom: t.__options.distance[2],
                left: t.__options.distance[3],
              }),
              "string" == typeof t.__options.side)
            ) {
              (t.__options.side = [
                t.__options.side,
                { top: "bottom", right: "left", bottom: "top", left: "right" }[
                  t.__options.side
                ],
              ]),
                "left" == t.__options.side[0] || "right" == t.__options.side[0]
                  ? t.__options.side.push("top", "bottom")
                  : t.__options.side.push("right", "left");
            }
            6 === e.tooltipster._env.IE &&
              !0 !== t.__options.arrow &&
              (t.__options.arrow = !1);
          },
          __reposition: function (t, i) {
            var n,
              s = this,
              o = s.__targetFind(i),
              r = [];
            s.__instance._$tooltip.detach();
            var a = s.__instance._$tooltip.clone(),
              l = e.tooltipster._getRuler(a),
              c = !1,
              d = s.__instance.option("animation");
            switch (
              (d && a.removeClass("tooltipster-" + d),
              e.each(["window", "document"], function (n, d) {
                var u = null;
                if (
                  (s.__instance._trigger({
                    container: d,
                    helper: i,
                    satisfied: c,
                    takeTest: function (e) {
                      u = e;
                    },
                    results: r,
                    type: "positionTest",
                  }),
                  1 == u ||
                    (0 != u &&
                      0 == c &&
                      ("window" != d || s.__options.viewportAware)))
                )
                  for (n = 0; n < s.__options.side.length; n++) {
                    var p = { horizontal: 0, vertical: 0 },
                      h = s.__options.side[n];
                    "top" == h || "bottom" == h
                      ? (p.vertical = s.__options.distance[h])
                      : (p.horizontal = s.__options.distance[h]),
                      s.__sideChange(a, h),
                      e.each(["natural", "constrained"], function (e, n) {
                        if (
                          ((u = null),
                          s.__instance._trigger({
                            container: d,
                            event: t,
                            helper: i,
                            mode: n,
                            results: r,
                            satisfied: c,
                            side: h,
                            takeTest: function (e) {
                              u = e;
                            },
                            type: "positionTest",
                          }),
                          1 == u || (0 != u && 0 == c))
                        ) {
                          var a = {
                              container: d,
                              distance: p,
                              fits: null,
                              mode: n,
                              outerSize: null,
                              side: h,
                              size: null,
                              target: o[h],
                              whole: null,
                            },
                            f = (
                              "natural" == n
                                ? l.free()
                                : l.constrain(
                                    i.geo.available[d][h].width - p.horizontal,
                                    i.geo.available[d][h].height - p.vertical
                                  )
                            ).measure();
                          if (
                            ((a.size = f.size),
                            (a.outerSize = {
                              height: f.size.height + p.vertical,
                              width: f.size.width + p.horizontal,
                            }),
                            "natural" == n
                              ? i.geo.available[d][h].width >=
                                  a.outerSize.width &&
                                i.geo.available[d][h].height >=
                                  a.outerSize.height
                                ? (a.fits = !0)
                                : (a.fits = !1)
                              : (a.fits = f.fits),
                            "window" == d &&
                              (a.fits
                                ? (a.whole =
                                    "top" == h || "bottom" == h
                                      ? i.geo.origin.windowOffset.right >=
                                          s.__options.minIntersection &&
                                        i.geo.window.size.width -
                                          i.geo.origin.windowOffset.left >=
                                          s.__options.minIntersection
                                      : i.geo.origin.windowOffset.bottom >=
                                          s.__options.minIntersection &&
                                        i.geo.window.size.height -
                                          i.geo.origin.windowOffset.top >=
                                          s.__options.minIntersection)
                                : (a.whole = !1)),
                            r.push(a),
                            a.whole)
                          )
                            c = !0;
                          else if (
                            "natural" == a.mode &&
                            (a.fits ||
                              a.size.width <= i.geo.available[d][h].width)
                          )
                            return !1;
                        }
                      });
                  }
              }),
              s.__instance._trigger({
                edit: function (e) {
                  r = e;
                },
                event: t,
                helper: i,
                results: r,
                type: "positionTested",
              }),
              r.sort(function (e, t) {
                if (e.whole && !t.whole) return -1;
                if (!e.whole && t.whole) return 1;
                if (e.whole && t.whole) {
                  var i = s.__options.side.indexOf(e.side);
                  return (n = s.__options.side.indexOf(t.side)) > i
                    ? -1
                    : i > n
                    ? 1
                    : "natural" == e.mode
                    ? -1
                    : 1;
                }
                if (e.fits && !t.fits) return -1;
                if (!e.fits && t.fits) return 1;
                if (e.fits && t.fits) {
                  var n;
                  i = s.__options.side.indexOf(e.side);
                  return (n = s.__options.side.indexOf(t.side)) > i
                    ? -1
                    : i > n
                    ? 1
                    : "natural" == e.mode
                    ? -1
                    : 1;
                }
                return "document" == e.container &&
                  "bottom" == e.side &&
                  "natural" == e.mode
                  ? -1
                  : 1;
              }),
              ((n = r[0]).coord = {}),
              n.side)
            ) {
              case "left":
              case "right":
                n.coord.top = Math.floor(n.target - n.size.height / 2);
                break;
              case "bottom":
              case "top":
                n.coord.left = Math.floor(n.target - n.size.width / 2);
            }
            switch (n.side) {
              case "left":
                n.coord.left =
                  i.geo.origin.windowOffset.left - n.outerSize.width;
                break;
              case "right":
                n.coord.left =
                  i.geo.origin.windowOffset.right + n.distance.horizontal;
                break;
              case "top":
                n.coord.top =
                  i.geo.origin.windowOffset.top - n.outerSize.height;
                break;
              case "bottom":
                n.coord.top =
                  i.geo.origin.windowOffset.bottom + n.distance.vertical;
            }
            "window" == n.container
              ? "top" == n.side || "bottom" == n.side
                ? n.coord.left < 0
                  ? i.geo.origin.windowOffset.right -
                      this.__options.minIntersection >=
                    0
                    ? (n.coord.left = 0)
                    : (n.coord.left =
                        i.geo.origin.windowOffset.right -
                        this.__options.minIntersection -
                        1)
                  : n.coord.left > i.geo.window.size.width - n.size.width &&
                    (i.geo.origin.windowOffset.left +
                      this.__options.minIntersection <=
                    i.geo.window.size.width
                      ? (n.coord.left = i.geo.window.size.width - n.size.width)
                      : (n.coord.left =
                          i.geo.origin.windowOffset.left +
                          this.__options.minIntersection +
                          1 -
                          n.size.width))
                : n.coord.top < 0
                ? i.geo.origin.windowOffset.bottom -
                    this.__options.minIntersection >=
                  0
                  ? (n.coord.top = 0)
                  : (n.coord.top =
                      i.geo.origin.windowOffset.bottom -
                      this.__options.minIntersection -
                      1)
                : n.coord.top > i.geo.window.size.height - n.size.height &&
                  (i.geo.origin.windowOffset.top +
                    this.__options.minIntersection <=
                  i.geo.window.size.height
                    ? (n.coord.top = i.geo.window.size.height - n.size.height)
                    : (n.coord.top =
                        i.geo.origin.windowOffset.top +
                        this.__options.minIntersection +
                        1 -
                        n.size.height))
              : (n.coord.left > i.geo.window.size.width - n.size.width &&
                  (n.coord.left = i.geo.window.size.width - n.size.width),
                n.coord.left < 0 && (n.coord.left = 0)),
              s.__sideChange(a, n.side),
              (i.tooltipClone = a[0]),
              (i.tooltipParent = s.__instance.option("parent").parent[0]),
              (i.mode = n.mode),
              (i.whole = n.whole),
              (i.origin = s.__instance._$origin[0]),
              (i.tooltip = s.__instance._$tooltip[0]),
              delete n.container,
              delete n.fits,
              delete n.mode,
              delete n.outerSize,
              delete n.whole,
              (n.distance = n.distance.horizontal || n.distance.vertical);
            var u,
              p,
              h,
              f = e.extend(!0, {}, n);
            if (
              (s.__instance._trigger({
                edit: function (e) {
                  n = e;
                },
                event: t,
                helper: i,
                position: f,
                type: "position",
              }),
              s.__options.functionPosition)
            ) {
              var m = s.__options.functionPosition.call(s, s.__instance, i, f);
              m && (n = m);
            }
            l.destroy(),
              "top" == n.side || "bottom" == n.side
                ? ((u = { prop: "left", val: n.target - n.coord.left }),
                  (p = n.size.width - this.__options.minIntersection))
                : ((u = { prop: "top", val: n.target - n.coord.top }),
                  (p = n.size.height - this.__options.minIntersection)),
              u.val < this.__options.minIntersection
                ? (u.val = this.__options.minIntersection)
                : u.val > p && (u.val = p),
              (h = i.geo.origin.fixedLineage
                ? i.geo.origin.windowOffset
                : {
                    left:
                      i.geo.origin.windowOffset.left + i.geo.window.scroll.left,
                    top:
                      i.geo.origin.windowOffset.top + i.geo.window.scroll.top,
                  }),
              (n.coord = {
                left: h.left + (n.coord.left - i.geo.origin.windowOffset.left),
                top: h.top + (n.coord.top - i.geo.origin.windowOffset.top),
              }),
              s.__sideChange(s.__instance._$tooltip, n.side),
              i.geo.origin.fixedLineage
                ? s.__instance._$tooltip.css("position", "fixed")
                : s.__instance._$tooltip.css("position", ""),
              s.__instance._$tooltip
                .css({
                  left: n.coord.left,
                  top: n.coord.top,
                  height: n.size.height,
                  width: n.size.width,
                })
                .find(".tooltipster-arrow")
                .css({ left: "", top: "" })
                .css(u.prop, u.val),
              s.__instance._$tooltip.appendTo(s.__instance.option("parent")),
              s.__instance._trigger({
                type: "repositioned",
                event: t,
                position: n,
              });
          },
          __sideChange: function (e, t) {
            e.removeClass("tooltipster-bottom")
              .removeClass("tooltipster-left")
              .removeClass("tooltipster-right")
              .removeClass("tooltipster-top")
              .addClass("tooltipster-" + t);
          },
          __targetFind: function (e) {
            var t = {},
              i = this.__instance._$origin[0].getClientRects();
            i.length > 1 &&
              1 == this.__instance._$origin.css("opacity") &&
              (this.__instance._$origin.css("opacity", 0.99),
              (i = this.__instance._$origin[0].getClientRects()),
              this.__instance._$origin.css("opacity", 1));
            if (i.length < 2)
              (t.top = Math.floor(
                e.geo.origin.windowOffset.left + e.geo.origin.size.width / 2
              )),
                (t.bottom = t.top),
                (t.left = Math.floor(
                  e.geo.origin.windowOffset.top + e.geo.origin.size.height / 2
                )),
                (t.right = t.left);
            else {
              var n = i[0];
              (t.top = Math.floor(n.left + (n.right - n.left) / 2)),
                (n = i.length > 2 ? i[Math.ceil(i.length / 2) - 1] : i[0]),
                (t.right = Math.floor(n.top + (n.bottom - n.top) / 2)),
                (n = i[i.length - 1]),
                (t.bottom = Math.floor(n.left + (n.right - n.left) / 2)),
                (n =
                  i.length > 2
                    ? i[Math.ceil((i.length + 1) / 2) - 1]
                    : i[i.length - 1]),
                (t.left = Math.floor(n.top + (n.bottom - n.top) / 2));
            }
            return t;
          },
        },
      }),
      e
    );
  });
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

  e.magnificPopup.registerModule(E, {/*
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
  */}),
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
