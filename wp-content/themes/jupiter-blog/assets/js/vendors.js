/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function (b, c) {
    var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}),
        a;
    $.throttle = a = function (e, f, j, i) {
        var h,
            d = 0;
        if (typeof f !== "boolean") {
            i = j;
            j = f;
            f = c;
        }
        function g() {
            var o = this,
                m = +new Date() - d,
                n = arguments;
            function l() {
                d = +new Date();
                j.apply(o, n);
            }
            function k() {
                h = c;
            }
            if (i && !h) {
                l();
            }
            h && clearTimeout(h);
            if (i === c && m > e) {
                l();
            } else {
                if (f !== true) {
                    h = setTimeout(i ? k : l, i === c ? e - m : e);
                }
            }
        }
        if ($.guid) {
            g.guid = j.guid = j.guid || $.guid++;
        }
        return g;
    };
    $.debounce = function (d, e, f) {
        return f === c ? a(d, e, false) : a(d, f, e !== false);
    };
})(this);

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
!(function (t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if ((e[0] < 2 && e[1] < 9) || (1 == e[0] && 9 == e[1] && e[2] < 1) || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
})(),
    (function (n) {
        "use strict";
        (n.fn.emulateTransitionEnd = function (t) {
            var e = !1,
                i = this;
            n(this).one("bsTransitionEnd", function () {
                e = !0;
            });
            return (
                setTimeout(function () {
                    e || n(i).trigger(n.support.transition.end);
                }, t),
                this
            );
        }),
            n(function () {
                (n.support.transition = (function o() {
                    var t = document.createElement("bootstrap"),
                        e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                    for (var i in e) if (t.style[i] !== undefined) return { end: e[i] };
                    return !1;
                })()),
                    n.support.transition &&
                    (n.event.special.bsTransitionEnd = {
                        bindType: n.support.transition.end,
                        delegateType: n.support.transition.end,
                        handle: function (t) {
                            if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
                        },
                    });
            });
    })(jQuery),
    (function (s) {
        "use strict";
        var e = '[data-dismiss="alert"]',
            a = function (t) {
                s(t).on("click", e, this.close);
            };
        (a.VERSION = "3.4.1"),
            (a.TRANSITION_DURATION = 150),
            (a.prototype.close = function (t) {
                var e = s(this),
                    i = e.attr("data-target");
                i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), (i = "#" === i ? [] : i);
                var o = s(document).find(i);
                function n() {
                    o.detach().trigger("closed.bs.alert").remove();
                }
                t && t.preventDefault(),
                    o.length || (o = e.closest(".alert")),
                    o.trigger((t = s.Event("close.bs.alert"))),
                    t.isDefaultPrevented() || (o.removeClass("in"), s.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(a.TRANSITION_DURATION) : n());
            });
        var t = s.fn.alert;
        (s.fn.alert = function o(i) {
            return this.each(function () {
                var t = s(this),
                    e = t.data("bs.alert");
                e || t.data("bs.alert", (e = new a(this))), "string" == typeof i && e[i].call(t);
            });
        }),
            (s.fn.alert.Constructor = a),
            (s.fn.alert.noConflict = function () {
                return (s.fn.alert = t), this;
            }),
            s(document).on("click.bs.alert.data-api", e, a.prototype.close);
    })(jQuery),
    (function (s) {
        "use strict";
        var n = function (t, e) {
            (this.$element = s(t)), (this.options = s.extend({}, n.DEFAULTS, e)), (this.isLoading = !1);
        };
        function i(o) {
            return this.each(function () {
                var t = s(this),
                    e = t.data("bs.button"),
                    i = "object" == typeof o && o;
                e || t.data("bs.button", (e = new n(this, i))), "toggle" == o ? e.toggle() : o && e.setState(o);
            });
        }
        (n.VERSION = "3.4.1"),
            (n.DEFAULTS = { loadingText: "loading..." }),
            (n.prototype.setState = function (t) {
                var e = "disabled",
                    i = this.$element,
                    o = i.is("input") ? "val" : "html",
                    n = i.data();
                (t += "Text"),
                    null == n.resetText && i.data("resetText", i[o]()),
                    setTimeout(
                        s.proxy(function () {
                            i[o](null == n[t] ? this.options[t] : n[t]),
                                "loadingText" == t ? ((this.isLoading = !0), i.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && ((this.isLoading = !1), i.removeClass(e).removeAttr(e).prop(e, !1));
                        }, this),
                        0
                    );
            }),
            (n.prototype.toggle = function () {
                var t = !0,
                    e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var i = this.$element.find("input");
                    "radio" == i.prop("type")
                        ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active"))
                        : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")),
                        i.prop("checked", this.$element.hasClass("active")),
                        t && i.trigger("change");
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
            });
        var t = s.fn.button;
        (s.fn.button = i),
            (s.fn.button.Constructor = n),
            (s.fn.button.noConflict = function () {
                return (s.fn.button = t), this;
            }),
            s(document)
                .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
                    var e = s(t.target).closest(".btn");
                    i.call(e, "toggle"), s(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"));
                })
                .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
                    s(t.target)
                        .closest(".btn")
                        .toggleClass("focus", /^focus(in)?$/.test(t.type));
                });
    })(jQuery),
    (function (p) {
        "use strict";
        var c = function (t, e) {
            (this.$element = p(t)),
                (this.$indicators = this.$element.find(".carousel-indicators")),
                (this.options = e),
                (this.paused = null),
                (this.sliding = null),
                (this.interval = null),
                (this.$active = null),
                (this.$items = null),
                this.options.keyboard && this.$element.on("keydown.bs.carousel", p.proxy(this.keydown, this)),
                "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", p.proxy(this.pause, this)).on("mouseleave.bs.carousel", p.proxy(this.cycle, this));
        };
        function r(n) {
            return this.each(function () {
                var t = p(this),
                    e = t.data("bs.carousel"),
                    i = p.extend({}, c.DEFAULTS, t.data(), "object" == typeof n && n),
                    o = "string" == typeof n ? n : i.slide;
                e || t.data("bs.carousel", (e = new c(this, i))), "number" == typeof n ? e.to(n) : o ? e[o]() : i.interval && e.pause().cycle();
            });
        }
        (c.VERSION = "3.4.1"),
            (c.TRANSITION_DURATION = 600),
            (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
            (c.prototype.keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) {
                    switch (t.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return;
                    }
                    t.preventDefault();
                }
            }),
            (c.prototype.cycle = function (t) {
                return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(p.proxy(this.next, this), this.options.interval)), this;
            }),
            (c.prototype.getItemIndex = function (t) {
                return (this.$items = t.parent().children(".item")), this.$items.index(t || this.$active);
            }),
            (c.prototype.getItemForDirection = function (t, e) {
                var i = this.getItemIndex(e);
                if ((("prev" == t && 0 === i) || ("next" == t && i == this.$items.length - 1)) && !this.options.wrap) return e;
                var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
                return this.$items.eq(o);
            }),
            (c.prototype.to = function (t) {
                var e = this,
                    i = this.getItemIndex((this.$active = this.$element.find(".item.active")));
                if (!(t > this.$items.length - 1 || t < 0))
                    return this.sliding
                        ? this.$element.one("slid.bs.carousel", function () {
                            e.to(t);
                        })
                        : i == t
                            ? this.pause().cycle()
                            : this.slide(i < t ? "next" : "prev", this.$items.eq(t));
            }),
            (c.prototype.pause = function (t) {
                return t || (this.paused = !0), this.$element.find(".next, .prev").length && p.support.transition && (this.$element.trigger(p.support.transition.end), this.cycle(!0)), (this.interval = clearInterval(this.interval)), this;
            }),
            (c.prototype.next = function () {
                if (!this.sliding) return this.slide("next");
            }),
            (c.prototype.prev = function () {
                if (!this.sliding) return this.slide("prev");
            }),
            (c.prototype.slide = function (t, e) {
                var i = this.$element.find(".item.active"),
                    o = e || this.getItemForDirection(t, i),
                    n = this.interval,
                    s = "next" == t ? "left" : "right",
                    a = this;
                if (o.hasClass("active")) return (this.sliding = !1);
                var r = o[0],
                    l = p.Event("slide.bs.carousel", { relatedTarget: r, direction: s });
                if ((this.$element.trigger(l), !l.isDefaultPrevented())) {
                    if (((this.sliding = !0), n && this.pause(), this.$indicators.length)) {
                        this.$indicators.find(".active").removeClass("active");
                        var h = p(this.$indicators.children()[this.getItemIndex(o)]);
                        h && h.addClass("active");
                    }
                    var d = p.Event("slid.bs.carousel", { relatedTarget: r, direction: s });
                    return (
                        p.support.transition && this.$element.hasClass("slide")
                            ? (o.addClass(t),
                                "object" == typeof o && o.length && o[0].offsetWidth,
                                i.addClass(s),
                                o.addClass(s),
                                i
                                    .one("bsTransitionEnd", function () {
                                        o.removeClass([t, s].join(" ")).addClass("active"),
                                            i.removeClass(["active", s].join(" ")),
                                            (a.sliding = !1),
                                            setTimeout(function () {
                                                a.$element.trigger(d);
                                            }, 0);
                                    })
                                    .emulateTransitionEnd(c.TRANSITION_DURATION))
                            : (i.removeClass("active"), o.addClass("active"), (this.sliding = !1), this.$element.trigger(d)),
                        n && this.cycle(),
                        this
                    );
                }
            });
        var t = p.fn.carousel;
        (p.fn.carousel = r),
            (p.fn.carousel.Constructor = c),
            (p.fn.carousel.noConflict = function () {
                return (p.fn.carousel = t), this;
            });
        var e = function (t) {
            var e = p(this),
                i = e.attr("href");
            i && (i = i.replace(/.*(?=#[^\s]+$)/, ""));
            var o = e.attr("data-target") || i,
                n = p(document).find(o);
            if (n.hasClass("carousel")) {
                var s = p.extend({}, n.data(), e.data()),
                    a = e.attr("data-slide-to");
                a && (s.interval = !1), r.call(n, s), a && n.data("bs.carousel").to(a), t.preventDefault();
            }
        };
        p(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
            p(window).on("load", function () {
                p('[data-ride="carousel"]').each(function () {
                    var t = p(this);
                    r.call(t, t.data());
                });
            });
    })(jQuery),
    (function (a) {
        "use strict";
        var r = function (t, e) {
            (this.$element = a(t)),
                (this.options = a.extend({}, r.DEFAULTS, e)),
                (this.$trigger = a('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')),
                (this.transitioning = null),
                this.options.parent ? (this.$parent = this.getParent()) : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                this.options.toggle && this.toggle();
        };
        function n(t) {
            var e,
                i = t.attr("data-target") || ((e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
            return a(document).find(i);
        }
        function l(o) {
            return this.each(function () {
                var t = a(this),
                    e = t.data("bs.collapse"),
                    i = a.extend({}, r.DEFAULTS, t.data(), "object" == typeof o && o);
                !e && i.toggle && /show|hide/.test(o) && (i.toggle = !1), e || t.data("bs.collapse", (e = new r(this, i))), "string" == typeof o && e[o]();
            });
        }
        (r.VERSION = "3.4.1"),
            (r.TRANSITION_DURATION = 350),
            (r.DEFAULTS = { toggle: !0 }),
            (r.prototype.dimension = function () {
                return this.$element.hasClass("width") ? "width" : "height";
            }),
            (r.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var t,
                        e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
                        var i = a.Event("show.bs.collapse");
                        if ((this.$element.trigger(i), !i.isDefaultPrevented())) {
                            e && e.length && (l.call(e, "hide"), t || e.data("bs.collapse", null));
                            var o = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), (this.transitioning = 1);
                            var n = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[o](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                            };
                            if (!a.support.transition) return n.call(this);
                            var s = a.camelCase(["scroll", o].join("-"));
                            this.$element.one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s]);
                        }
                    }
                }
            }),
            (r.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var t = a.Event("hide.bs.collapse");
                    if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
                        var e = this.dimension();
                        this.$element[e](this.$element[e]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            (this.transitioning = 1);
                        var i = function () {
                            (this.transitioning = 0), this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                        };
                        if (!a.support.transition) return i.call(this);
                        this.$element[e](0).one("bsTransitionEnd", a.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION);
                    }
                }
            }),
            (r.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]();
            }),
            (r.prototype.getParent = function () {
                return a(document)
                    .find(this.options.parent)
                    .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
                    .each(
                        a.proxy(function (t, e) {
                            var i = a(e);
                            this.addAriaAndCollapsedClass(n(i), i);
                        }, this)
                    )
                    .end();
            }),
            (r.prototype.addAriaAndCollapsedClass = function (t, e) {
                var i = t.hasClass("in");
                t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
            });
        var t = a.fn.collapse;
        (a.fn.collapse = l),
            (a.fn.collapse.Constructor = r),
            (a.fn.collapse.noConflict = function () {
                return (a.fn.collapse = t), this;
            }),
            a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
                var e = a(this);
                e.attr("data-target") || t.preventDefault();
                var i = n(e),
                    o = i.data("bs.collapse") ? "toggle" : e.data();
                l.call(i, o);
            });
    })(jQuery),
    (function (a) {
        "use strict";
        var r = '[data-toggle="dropdown"]',
            o = function (t) {
                a(t).on("click.bs.dropdown", this.toggle);
            };
        function l(t) {
            var e = t.attr("data-target");
            e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
            var i = "#" !== e ? a(document).find(e) : null;
            return i && i.length ? i : t.parent();
        }
        function s(o) {
            (o && 3 === o.which) ||
                (a(".dropdown-backdrop").remove(),
                    a(r).each(function () {
                        var t = a(this),
                            e = l(t),
                            i = { relatedTarget: this };
                        e.hasClass("open") &&
                            ((o && "click" == o.type && /input|textarea/i.test(o.target.tagName) && a.contains(e[0], o.target)) ||
                                (e.trigger((o = a.Event("hide.bs.dropdown", i))), o.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", i)))));
                    }));
        }
        (o.VERSION = "3.4.1"),
            (o.prototype.toggle = function (t) {
                var e = a(this);
                if (!e.is(".disabled, :disabled")) {
                    var i = l(e),
                        o = i.hasClass("open");
                    if ((s(), !o)) {
                        "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", s);
                        var n = { relatedTarget: this };
                        if ((i.trigger((t = a.Event("show.bs.dropdown", n))), t.isDefaultPrevented())) return;
                        e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(a.Event("shown.bs.dropdown", n));
                    }
                    return !1;
                }
            }),
            (o.prototype.keydown = function (t) {
                if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
                    var e = a(this);
                    if ((t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
                        var i = l(e),
                            o = i.hasClass("open");
                        if ((!o && 27 != t.which) || (o && 27 == t.which)) return 27 == t.which && i.find(r).trigger("focus"), e.trigger("click");
                        var n = i.find(".dropdown-menu li:not(.disabled):visible a");
                        if (n.length) {
                            var s = n.index(t.target);
                            38 == t.which && 0 < s && s--, 40 == t.which && s < n.length - 1 && s++, ~s || (s = 0), n.eq(s).trigger("focus");
                        }
                    }
                }
            });
        var t = a.fn.dropdown;
        (a.fn.dropdown = function e(i) {
            return this.each(function () {
                var t = a(this),
                    e = t.data("bs.dropdown");
                e || t.data("bs.dropdown", (e = new o(this))), "string" == typeof i && e[i].call(t);
            });
        }),
            (a.fn.dropdown.Constructor = o),
            (a.fn.dropdown.noConflict = function () {
                return (a.fn.dropdown = t), this;
            }),
            a(document)
                .on("click.bs.dropdown.data-api", s)
                .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                    t.stopPropagation();
                })
                .on("click.bs.dropdown.data-api", r, o.prototype.toggle)
                .on("keydown.bs.dropdown.data-api", r, o.prototype.keydown)
                .on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown);
    })(jQuery),
    (function (a) {
        "use strict";
        var s = function (t, e) {
            (this.options = e),
                (this.$body = a(document.body)),
                (this.$element = a(t)),
                (this.$dialog = this.$element.find(".modal-dialog")),
                (this.$backdrop = null),
                (this.isShown = null),
                (this.originalBodyPad = null),
                (this.scrollbarWidth = 0),
                (this.ignoreBackdropClick = !1),
                (this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom"),
                this.options.remote &&
                this.$element.find(".modal-content").load(
                    this.options.remote,
                    a.proxy(function () {
                        this.$element.trigger("loaded.bs.modal");
                    }, this)
                );
        };
        function r(o, n) {
            return this.each(function () {
                var t = a(this),
                    e = t.data("bs.modal"),
                    i = a.extend({}, s.DEFAULTS, t.data(), "object" == typeof o && o);
                e || t.data("bs.modal", (e = new s(this, i))), "string" == typeof o ? e[o](n) : i.show && e.show(n);
            });
        }
        (s.VERSION = "3.4.1"),
            (s.TRANSITION_DURATION = 300),
            (s.BACKDROP_TRANSITION_DURATION = 150),
            (s.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
            (s.prototype.toggle = function (t) {
                return this.isShown ? this.hide() : this.show(t);
            }),
            (s.prototype.show = function (i) {
                var o = this,
                    t = a.Event("show.bs.modal", { relatedTarget: i });
                this.$element.trigger(t),
                    this.isShown ||
                    t.isDefaultPrevented() ||
                    ((this.isShown = !0),
                        this.checkScrollbar(),
                        this.setScrollbar(),
                        this.$body.addClass("modal-open"),
                        this.escape(),
                        this.resize(),
                        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
                        this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                            o.$element.one("mouseup.dismiss.bs.modal", function (t) {
                                a(t.target).is(o.$element) && (o.ignoreBackdropClick = !0);
                            });
                        }),
                        this.backdrop(function () {
                            var t = a.support.transition && o.$element.hasClass("fade");
                            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), t && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
                            var e = a.Event("shown.bs.modal", { relatedTarget: i });
                            t
                                ? o.$dialog
                                    .one("bsTransitionEnd", function () {
                                        o.$element.trigger("focus").trigger(e);
                                    })
                                    .emulateTransitionEnd(s.TRANSITION_DURATION)
                                : o.$element.trigger("focus").trigger(e);
                        }));
            }),
            (s.prototype.hide = function (t) {
                t && t.preventDefault(),
                    (t = a.Event("hide.bs.modal")),
                    this.$element.trigger(t),
                    this.isShown &&
                    !t.isDefaultPrevented() &&
                    ((this.isShown = !1),
                        this.escape(),
                        this.resize(),
                        a(document).off("focusin.bs.modal"),
                        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                        this.$dialog.off("mousedown.dismiss.bs.modal"),
                        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal());
            }),
            (s.prototype.enforceFocus = function () {
                a(document)
                    .off("focusin.bs.modal")
                    .on(
                        "focusin.bs.modal",
                        a.proxy(function (t) {
                            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
                        }, this)
                    );
            }),
            (s.prototype.escape = function () {
                this.isShown && this.options.keyboard
                    ? this.$element.on(
                        "keydown.dismiss.bs.modal",
                        a.proxy(function (t) {
                            27 == t.which && this.hide();
                        }, this)
                    )
                    : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
            }),
            (s.prototype.resize = function () {
                this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
            }),
            (s.prototype.hideModal = function () {
                var t = this;
                this.$element.hide(),
                    this.backdrop(function () {
                        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
                    });
            }),
            (s.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
            }),
            (s.prototype.backdrop = function (t) {
                var e = this,
                    i = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var o = a.support.transition && i;
                    if (
                        ((this.$backdrop = a(document.createElement("div"))
                            .addClass("modal-backdrop " + i)
                            .appendTo(this.$body)),
                            this.$element.on(
                                "click.dismiss.bs.modal",
                                a.proxy(function (t) {
                                    this.ignoreBackdropClick ? (this.ignoreBackdropClick = !1) : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide());
                                }, this)
                            ),
                            o && this.$backdrop[0].offsetWidth,
                            this.$backdrop.addClass("in"),
                            !t)
                    )
                        return;
                    o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : t();
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var n = function () {
                        e.removeBackdrop(), t && t();
                    };
                    a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : n();
                } else t && t();
            }),
            (s.prototype.handleUpdate = function () {
                this.adjustDialog();
            }),
            (s.prototype.adjustDialog = function () {
                var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" });
            }),
            (s.prototype.resetAdjustments = function () {
                this.$element.css({ paddingLeft: "", paddingRight: "" });
            }),
            (s.prototype.checkScrollbar = function () {
                var t = window.innerWidth;
                if (!t) {
                    var e = document.documentElement.getBoundingClientRect();
                    t = e.right - Math.abs(e.left);
                }
                (this.bodyIsOverflowing = document.body.clientWidth < t), (this.scrollbarWidth = this.measureScrollbar());
            }),
            (s.prototype.setScrollbar = function () {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "";
                var n = this.scrollbarWidth;
                this.bodyIsOverflowing &&
                    (this.$body.css("padding-right", t + n),
                        a(this.fixedContent).each(function (t, e) {
                            var i = e.style.paddingRight,
                                o = a(e).css("padding-right");
                            a(e)
                                .data("padding-right", i)
                                .css("padding-right", parseFloat(o) + n + "px");
                        }));
            }),
            (s.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad),
                    a(this.fixedContent).each(function (t, e) {
                        var i = a(e).data("padding-right");
                        a(e).removeData("padding-right"), (e.style.paddingRight = i || "");
                    });
            }),
            (s.prototype.measureScrollbar = function () {
                var t = document.createElement("div");
                (t.className = "modal-scrollbar-measure"), this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t), e;
            });
        var t = a.fn.modal;
        (a.fn.modal = r),
            (a.fn.modal.Constructor = s),
            (a.fn.modal.noConflict = function () {
                return (a.fn.modal = t), this;
            }),
            a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
                var e = a(this),
                    i = e.attr("href"),
                    o = e.attr("data-target") || (i && i.replace(/.*(?=#[^\s]+$)/, "")),
                    n = a(document).find(o),
                    s = n.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(i) && i }, n.data(), e.data());
                e.is("a") && t.preventDefault(),
                    n.one("show.bs.modal", function (t) {
                        t.isDefaultPrevented() ||
                            n.one("hidden.bs.modal", function () {
                                e.is(":visible") && e.trigger("focus");
                            });
                    }),
                    r.call(n, s, this);
            });
    })(jQuery),
    (function (g) {
        "use strict";
        var o = ["sanitize", "whiteList", "sanitizeFn"],
            a = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            t = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            r = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            l = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
        function u(t, e) {
            var i = t.nodeName.toLowerCase();
            if (-1 !== g.inArray(i, e)) return -1 === g.inArray(i, a) || Boolean(t.nodeValue.match(r) || t.nodeValue.match(l));
            for (
                var o = g(e).filter(function (t, e) {
                    return e instanceof RegExp;
                }),
                n = 0,
                s = o.length;
                n < s;
                n++
            )
                if (i.match(o[n])) return !0;
            return !1;
        }
        function n(t, e, i) {
            if (0 === t.length) return t;
            if (i && "function" == typeof i) return i(t);
            if (!document.implementation || !document.implementation.createHTMLDocument) return t;
            var o = document.implementation.createHTMLDocument("sanitization");
            o.body.innerHTML = t;
            for (
                var n = g.map(e, function (t, e) {
                    return e;
                }),
                s = g(o.body).find("*"),
                a = 0,
                r = s.length;
                a < r;
                a++
            ) {
                var l = s[a],
                    h = l.nodeName.toLowerCase();
                if (-1 !== g.inArray(h, n))
                    for (
                        var d = g.map(l.attributes, function (t) {
                            return t;
                        }),
                        p = [].concat(e["*"] || [], e[h] || []),
                        c = 0,
                        f = d.length;
                        c < f;
                        c++
                    )
                        u(d[c], p) || l.removeAttribute(d[c].nodeName);
                else l.parentNode.removeChild(l);
            }
            return o.body.innerHTML;
        }
        var m = function (t, e) {
            (this.type = null), (this.options = null), (this.enabled = null), (this.timeout = null), (this.hoverState = null), (this.$element = null), (this.inState = null), this.init("tooltip", t, e);
        };
        (m.VERSION = "3.4.1"),
            (m.TRANSITION_DURATION = 150),
            (m.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: { selector: "body", padding: 0 },
                sanitize: !0,
                sanitizeFn: null,
                whiteList: t,
            }),
            (m.prototype.init = function (t, e, i) {
                if (
                    ((this.enabled = !0),
                        (this.type = t),
                        (this.$element = g(e)),
                        (this.options = this.getOptions(i)),
                        (this.$viewport = this.options.viewport && g(document).find(g.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport)),
                        (this.inState = { click: !1, hover: !1, focus: !1 }),
                        this.$element[0] instanceof document.constructor && !this.options.selector)
                )
                    throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
                    var s = o[n];
                    if ("click" == s) this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this));
                    else if ("manual" != s) {
                        var a = "hover" == s ? "mouseenter" : "focusin",
                            r = "hover" == s ? "mouseleave" : "focusout";
                        this.$element.on(a + "." + this.type, this.options.selector, g.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, g.proxy(this.leave, this));
                    }
                }
                this.options.selector ? (this._options = g.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
            }),
            (m.prototype.getDefaults = function () {
                return m.DEFAULTS;
            }),
            (m.prototype.getOptions = function (t) {
                var e = this.$element.data();
                for (var i in e) e.hasOwnProperty(i) && -1 !== g.inArray(i, o) && delete e[i];
                return (t = g.extend({}, this.getDefaults(), e, t)).delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), t.sanitize && (t.template = n(t.template, t.whiteList, t.sanitizeFn)), t;
            }),
            (m.prototype.getDelegateOptions = function () {
                var i = {},
                    o = this.getDefaults();
                return (
                    this._options &&
                    g.each(this._options, function (t, e) {
                        o[t] != e && (i[t] = e);
                    }),
                    i
                );
            }),
            (m.prototype.enter = function (t) {
                var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
                if (
                    (e || ((e = new this.constructor(t.currentTarget, this.getDelegateOptions())), g(t.currentTarget).data("bs." + this.type, e)),
                        t instanceof g.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0),
                        e.tip().hasClass("in") || "in" == e.hoverState)
                )
                    e.hoverState = "in";
                else {
                    if ((clearTimeout(e.timeout), (e.hoverState = "in"), !e.options.delay || !e.options.delay.show)) return e.show();
                    e.timeout = setTimeout(function () {
                        "in" == e.hoverState && e.show();
                    }, e.options.delay.show);
                }
            }),
            (m.prototype.isInStateTrue = function () {
                for (var t in this.inState) if (this.inState[t]) return !0;
                return !1;
            }),
            (m.prototype.leave = function (t) {
                var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
                if (
                    (e || ((e = new this.constructor(t.currentTarget, this.getDelegateOptions())), g(t.currentTarget).data("bs." + this.type, e)),
                        t instanceof g.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1),
                        !e.isInStateTrue())
                ) {
                    if ((clearTimeout(e.timeout), (e.hoverState = "out"), !e.options.delay || !e.options.delay.hide)) return e.hide();
                    e.timeout = setTimeout(function () {
                        "out" == e.hoverState && e.hide();
                    }, e.options.delay.hide);
                }
            }),
            (m.prototype.show = function () {
                var t = g.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(t);
                    var e = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (t.isDefaultPrevented() || !e) return;
                    var i = this,
                        o = this.tip(),
                        n = this.getUID(this.type);
                    this.setContent(), o.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && o.addClass("fade");
                    var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                        a = /\s?auto?\s?/i,
                        r = a.test(s);
                    r && (s = s.replace(a, "") || "top"),
                        o
                            .detach()
                            .css({ top: 0, left: 0, display: "block" })
                            .addClass(s)
                            .data("bs." + this.type, this),
                        this.options.container ? o.appendTo(g(document).find(this.options.container)) : o.insertAfter(this.$element),
                        this.$element.trigger("inserted.bs." + this.type);
                    var l = this.getPosition(),
                        h = o[0].offsetWidth,
                        d = o[0].offsetHeight;
                    if (r) {
                        var p = s,
                            c = this.getPosition(this.$viewport);
                        (s = "bottom" == s && l.bottom + d > c.bottom ? "top" : "top" == s && l.top - d < c.top ? "bottom" : "right" == s && l.right + h > c.width ? "left" : "left" == s && l.left - h < c.left ? "right" : s),
                            o.removeClass(p).addClass(s);
                    }
                    var f = this.getCalculatedOffset(s, l, h, d);
                    this.applyPlacement(f, s);
                    var u = function () {
                        var t = i.hoverState;
                        i.$element.trigger("shown.bs." + i.type), (i.hoverState = null), "out" == t && i.leave(i);
                    };
                    g.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", u).emulateTransitionEnd(m.TRANSITION_DURATION) : u();
                }
            }),
            (m.prototype.applyPlacement = function (t, e) {
                var i = this.tip(),
                    o = i[0].offsetWidth,
                    n = i[0].offsetHeight,
                    s = parseInt(i.css("margin-top"), 10),
                    a = parseInt(i.css("margin-left"), 10);
                isNaN(s) && (s = 0),
                    isNaN(a) && (a = 0),
                    (t.top += s),
                    (t.left += a),
                    g.offset.setOffset(
                        i[0],
                        g.extend(
                            {
                                using: function (t) {
                                    i.css({ top: Math.round(t.top), left: Math.round(t.left) });
                                },
                            },
                            t
                        ),
                        0
                    ),
                    i.addClass("in");
                var r = i[0].offsetWidth,
                    l = i[0].offsetHeight;
                "top" == e && l != n && (t.top = t.top + n - l);
                var h = this.getViewportAdjustedDelta(e, t, r, l);
                h.left ? (t.left += h.left) : (t.top += h.top);
                var d = /top|bottom/.test(e),
                    p = d ? 2 * h.left - o + r : 2 * h.top - n + l,
                    c = d ? "offsetWidth" : "offsetHeight";
                i.offset(t), this.replaceArrow(p, i[0][c], d);
            }),
            (m.prototype.replaceArrow = function (t, e, i) {
                this.arrow()
                    .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
                    .css(i ? "top" : "left", "");
            }),
            (m.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle();
                this.options.html ? (this.options.sanitize && (e = n(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right");
            }),
            (m.prototype.hide = function (t) {
                var e = this,
                    i = g(this.$tip),
                    o = g.Event("hide.bs." + this.type);
                function n() {
                    "in" != e.hoverState && i.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), t && t();
                }
                if ((this.$element.trigger(o), !o.isDefaultPrevented()))
                    return i.removeClass("in"), g.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", n).emulateTransitionEnd(m.TRANSITION_DURATION) : n(), (this.hoverState = null), this;
            }),
            (m.prototype.fixTitle = function () {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
            }),
            (m.prototype.hasContent = function () {
                return this.getTitle();
            }),
            (m.prototype.getPosition = function (t) {
                var e = (t = t || this.$element)[0],
                    i = "BODY" == e.tagName,
                    o = e.getBoundingClientRect();
                null == o.width && (o = g.extend({}, o, { width: o.right - o.left, height: o.bottom - o.top }));
                var n = window.SVGElement && e instanceof window.SVGElement,
                    s = i ? { top: 0, left: 0 } : n ? null : t.offset(),
                    a = { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop() },
                    r = i ? { width: g(window).width(), height: g(window).height() } : null;
                return g.extend({}, o, a, r, s);
            }),
            (m.prototype.getCalculatedOffset = function (t, e, i, o) {
                return "bottom" == t
                    ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
                    : "top" == t
                        ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 }
                        : "left" == t
                            ? { top: e.top + e.height / 2 - o / 2, left: e.left - i }
                            : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width };
            }),
            (m.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
                var n = { top: 0, left: 0 };
                if (!this.$viewport) return n;
                var s = (this.options.viewport && this.options.viewport.padding) || 0,
                    a = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var r = e.top - s - a.scroll,
                        l = e.top + s - a.scroll + o;
                    r < a.top ? (n.top = a.top - r) : l > a.top + a.height && (n.top = a.top + a.height - l);
                } else {
                    var h = e.left - s,
                        d = e.left + s + i;
                    h < a.left ? (n.left = a.left - h) : d > a.right && (n.left = a.left + a.width - d);
                }
                return n;
            }),
            (m.prototype.getTitle = function () {
                var t = this.$element,
                    e = this.options;
                return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title);
            }),
            (m.prototype.getUID = function (t) {
                for (; (t += ~~(1e6 * Math.random())), document.getElementById(t););
                return t;
            }),
            (m.prototype.tip = function () {
                if (!this.$tip && ((this.$tip = g(this.options.template)), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip;
            }),
            (m.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
            }),
            (m.prototype.enable = function () {
                this.enabled = !0;
            }),
            (m.prototype.disable = function () {
                this.enabled = !1;
            }),
            (m.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled;
            }),
            (m.prototype.toggle = function (t) {
                var e = this;
                t && ((e = g(t.currentTarget).data("bs." + this.type)) || ((e = new this.constructor(t.currentTarget, this.getDelegateOptions())), g(t.currentTarget).data("bs." + this.type, e))),
                    t ? ((e.inState.click = !e.inState.click), e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e);
            }),
            (m.prototype.destroy = function () {
                var t = this;
                clearTimeout(this.timeout),
                    this.hide(function () {
                        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), (t.$tip = null), (t.$arrow = null), (t.$viewport = null), (t.$element = null);
                    });
            }),
            (m.prototype.sanitizeHtml = function (t) {
                return n(t, this.options.whiteList, this.options.sanitizeFn);
            });
        var e = g.fn.tooltip;
        (g.fn.tooltip = function i(o) {
            return this.each(function () {
                var t = g(this),
                    e = t.data("bs.tooltip"),
                    i = "object" == typeof o && o;
                (!e && /destroy|hide/.test(o)) || (e || t.data("bs.tooltip", (e = new m(this, i))), "string" == typeof o && e[o]());
            });
        }),
            (g.fn.tooltip.Constructor = m),
            (g.fn.tooltip.noConflict = function () {
                return (g.fn.tooltip = e), this;
            });
    })(jQuery),
    (function (n) {
        "use strict";
        var s = function (t, e) {
            this.init("popover", t, e);
        };
        if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
        (s.VERSION = "3.4.1"),
            (s.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
            })),
            (((s.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function () {
                return s.DEFAULTS;
            }),
            (s.prototype.setContent = function () {
                var t = this.tip(),
                    e = this.getTitle(),
                    i = this.getContent();
                if (this.options.html) {
                    var o = typeof i;
                    this.options.sanitize && ((e = this.sanitizeHtml(e)), "string" === o && (i = this.sanitizeHtml(i))),
                        t.find(".popover-title").html(e),
                        t.find(".popover-content").children().detach().end()["string" === o ? "html" : "append"](i);
                } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(i);
                t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
            }),
            (s.prototype.hasContent = function () {
                return this.getTitle() || this.getContent();
            }),
            (s.prototype.getContent = function () {
                var t = this.$element,
                    e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
            }),
            (s.prototype.arrow = function () {
                return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
            });
        var t = n.fn.popover;
        (n.fn.popover = function e(o) {
            return this.each(function () {
                var t = n(this),
                    e = t.data("bs.popover"),
                    i = "object" == typeof o && o;
                (!e && /destroy|hide/.test(o)) || (e || t.data("bs.popover", (e = new s(this, i))), "string" == typeof o && e[o]());
            });
        }),
            (n.fn.popover.Constructor = s),
            (n.fn.popover.noConflict = function () {
                return (n.fn.popover = t), this;
            });
    })(jQuery),
    (function (s) {
        "use strict";
        function n(t, e) {
            (this.$body = s(document.body)),
                (this.$scrollElement = s(t).is(document.body) ? s(window) : s(t)),
                (this.options = s.extend({}, n.DEFAULTS, e)),
                (this.selector = (this.options.target || "") + " .nav li > a"),
                (this.offsets = []),
                (this.targets = []),
                (this.activeTarget = null),
                (this.scrollHeight = 0),
                this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)),
                this.refresh(),
                this.process();
        }
        function e(o) {
            return this.each(function () {
                var t = s(this),
                    e = t.data("bs.scrollspy"),
                    i = "object" == typeof o && o;
                e || t.data("bs.scrollspy", (e = new n(this, i))), "string" == typeof o && e[o]();
            });
        }
        (n.VERSION = "3.4.1"),
            (n.DEFAULTS = { offset: 10 }),
            (n.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
            }),
            (n.prototype.refresh = function () {
                var t = this,
                    o = "offset",
                    n = 0;
                (this.offsets = []),
                    (this.targets = []),
                    (this.scrollHeight = this.getScrollHeight()),
                    s.isWindow(this.$scrollElement[0]) || ((o = "position"), (n = this.$scrollElement.scrollTop())),
                    this.$body
                        .find(this.selector)
                        .map(function () {
                            var t = s(this),
                                e = t.data("target") || t.attr("href"),
                                i = /^#./.test(e) && s(e);
                            return (i && i.length && i.is(":visible") && [[i[o]().top + n, e]]) || null;
                        })
                        .sort(function (t, e) {
                            return t[0] - e[0];
                        })
                        .each(function () {
                            t.offsets.push(this[0]), t.targets.push(this[1]);
                        });
            }),
            (n.prototype.process = function () {
                var t,
                    e = this.$scrollElement.scrollTop() + this.options.offset,
                    i = this.getScrollHeight(),
                    o = this.options.offset + i - this.$scrollElement.height(),
                    n = this.offsets,
                    s = this.targets,
                    a = this.activeTarget;
                if ((this.scrollHeight != i && this.refresh(), o <= e)) return a != (t = s[s.length - 1]) && this.activate(t);
                if (a && e < n[0]) return (this.activeTarget = null), this.clear();
                for (t = n.length; t--;) a != s[t] && e >= n[t] && (n[t + 1] === undefined || e < n[t + 1]) && this.activate(s[t]);
            }),
            (n.prototype.activate = function (t) {
                (this.activeTarget = t), this.clear();
                var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                    i = s(e).parents("li").addClass("active");
                i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy");
            }),
            (n.prototype.clear = function () {
                s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            });
        var t = s.fn.scrollspy;
        (s.fn.scrollspy = e),
            (s.fn.scrollspy.Constructor = n),
            (s.fn.scrollspy.noConflict = function () {
                return (s.fn.scrollspy = t), this;
            }),
            s(window).on("load.bs.scrollspy.data-api", function () {
                s('[data-spy="scroll"]').each(function () {
                    var t = s(this);
                    e.call(t, t.data());
                });
            });
    })(jQuery),
    (function (r) {
        "use strict";
        var a = function (t) {
            this.element = r(t);
        };
        function e(i) {
            return this.each(function () {
                var t = r(this),
                    e = t.data("bs.tab");
                e || t.data("bs.tab", (e = new a(this))), "string" == typeof i && e[i]();
            });
        }
        (a.VERSION = "3.4.1"),
            (a.TRANSITION_DURATION = 150),
            (a.prototype.show = function () {
                var t = this.element,
                    e = t.closest("ul:not(.dropdown-menu)"),
                    i = t.data("target");
                if ((i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active"))) {
                    var o = e.find(".active:last a"),
                        n = r.Event("hide.bs.tab", { relatedTarget: t[0] }),
                        s = r.Event("show.bs.tab", { relatedTarget: o[0] });
                    if ((o.trigger(n), t.trigger(s), !s.isDefaultPrevented() && !n.isDefaultPrevented())) {
                        var a = r(document).find(i);
                        this.activate(t.closest("li"), e),
                            this.activate(a, a.parent(), function () {
                                o.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }), t.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
                            });
                    }
                }
            }),
            (a.prototype.activate = function (t, e, i) {
                var o = e.find("> .active"),
                    n = i && r.support.transition && ((o.length && o.hasClass("fade")) || !!e.find("> .fade").length);
                function s() {
                    o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        n ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
                        t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        i && i();
                }
                o.length && n ? o.one("bsTransitionEnd", s).emulateTransitionEnd(a.TRANSITION_DURATION) : s(), o.removeClass("in");
            });
        var t = r.fn.tab;
        (r.fn.tab = e),
            (r.fn.tab.Constructor = a),
            (r.fn.tab.noConflict = function () {
                return (r.fn.tab = t), this;
            });
        var i = function (t) {
            t.preventDefault(), e.call(r(this), "show");
        };
        r(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i);
    })(jQuery),
    (function (l) {
        "use strict";
        var h = function (t, e) {
            this.options = l.extend({}, h.DEFAULTS, e);
            var i = this.options.target === h.DEFAULTS.target ? l(this.options.target) : l(document).find(this.options.target);
            (this.$target = i.on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this))),
                (this.$element = l(t)),
                (this.affixed = null),
                (this.unpin = null),
                (this.pinnedOffset = null),
                this.checkPosition();
        };
        function i(o) {
            return this.each(function () {
                var t = l(this),
                    e = t.data("bs.affix"),
                    i = "object" == typeof o && o;
                e || t.data("bs.affix", (e = new h(this, i))), "string" == typeof o && e[o]();
            });
        }
        (h.VERSION = "3.4.1"),
            (h.RESET = "affix affix-top affix-bottom"),
            (h.DEFAULTS = { offset: 0, target: window }),
            (h.prototype.getState = function (t, e, i, o) {
                var n = this.$target.scrollTop(),
                    s = this.$element.offset(),
                    a = this.$target.height();
                if (null != i && "top" == this.affixed) return n < i && "top";
                if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";
                var r = null == this.affixed,
                    l = r ? n : s.top;
                return null != i && n <= i ? "top" : null != o && t - o <= l + (r ? a : e) && "bottom";
            }),
            (h.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(h.RESET).addClass("affix");
                var t = this.$target.scrollTop(),
                    e = this.$element.offset();
                return (this.pinnedOffset = e.top - t);
            }),
            (h.prototype.checkPositionWithEventLoop = function () {
                setTimeout(l.proxy(this.checkPosition, this), 1);
            }),
            (h.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var t = this.$element.height(),
                        e = this.options.offset,
                        i = e.top,
                        o = e.bottom,
                        n = Math.max(l(document).height(), l(document.body).height());
                    "object" != typeof e && (o = i = e), "function" == typeof i && (i = e.top(this.$element)), "function" == typeof o && (o = e.bottom(this.$element));
                    var s = this.getState(n, t, i, o);
                    if (this.affixed != s) {
                        null != this.unpin && this.$element.css("top", "");
                        var a = "affix" + (s ? "-" + s : ""),
                            r = l.Event(a + ".bs.affix");
                        if ((this.$element.trigger(r), r.isDefaultPrevented())) return;
                        (this.affixed = s),
                            (this.unpin = "bottom" == s ? this.getPinnedOffset() : null),
                            this.$element
                                .removeClass(h.RESET)
                                .addClass(a)
                                .trigger(a.replace("affix", "affixed") + ".bs.affix");
                    }
                    "bottom" == s && this.$element.offset({ top: n - t - o });
                }
            });
        var t = l.fn.affix;
        (l.fn.affix = i),
            (l.fn.affix.Constructor = h),
            (l.fn.affix.noConflict = function () {
                return (l.fn.affix = t), this;
            }),
            l(window).on("load", function () {
                l('[data-spy="affix"]').each(function () {
                    var t = l(this),
                        e = t.data();
                    (e.offset = e.offset || {}), null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), i.call(t, e);
                });
            });
    })(jQuery);
/**
 * Owl Carousel v2.1.6
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
!(function (a, b, c, d) {
    function e(b, c) {
        (this.settings = null),
            (this.options = a.extend({}, e.Defaults, c)),
            (this.$element = a(b)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
            (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
            a.each(
                ["onResize", "onThrottledResize"],
                a.proxy(function (b, c) {
                    this._handlers[c] = a.proxy(this[c], this);
                }, this)
            ),
            a.each(
                e.Plugins,
                a.proxy(function (a, b) {
                    this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
                }, this)
            ),
            a.each(
                e.Workers,
                a.proxy(function (b, c) {
                    this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
                }, this)
            ),
            this.setup(),
            this.initialize();
    }
    (e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
    }),
        (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (e.Type = { Event: "event", State: "state" }),
        (e.Plugins = {}),
        (e.Workers = [
            {
                filter: ["width", "settings"],
                run: function () {
                    this._width = this.$element.width();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current = this._items && this._items[this.relative(this._current)];
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    this.$stage.children(".cloned").remove();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this.settings.margin || "",
                        c = !this.settings.autoWidth,
                        d = this.settings.rtl,
                        e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
                    !c && this.$stage.children().css(e), (a.css = e);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                        c = null,
                        d = this._items.length,
                        e = !this.settings.autoWidth,
                        f = [];
                    for (a.items = { merge: !1, width: b }; d--;)
                        (c = this._mergers[d]), (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c), (a.items.merge = c > 1 || a.items.merge), (f[d] = e ? b * c : this._items[d].width());
                    this._widths = f;
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var b = [],
                        c = this._items,
                        d = this.settings,
                        e = Math.max(2 * d.items, 4),
                        f = 2 * Math.ceil(c.length / 2),
                        g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                        h = "",
                        i = "";
                    for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), (h += c[b[b.length - 1]][0].outerHTML), b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), (i = c[b[b.length - 1]][0].outerHTML + i);
                    (this._clones = b), a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;)
                        (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
                    this._coordinates = f;
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var a = this.settings.stagePadding,
                        b = this._coordinates,
                        c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
                    this.$stage.css(c);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this._coordinates.length,
                        c = !this.settings.autoWidth,
                        d = this.$stage.children();
                    if (c && a.items.merge) for (; b--;) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
                    else c && ((a.css.width = a.items.width), d.css(a.css));
                },
            },
            {
                filter: ["items"],
                run: function () {
                    this._coordinates.length < 1 && this.$stage.removeAttr("style");
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    (a.current = a.current ? this.$stage.children().index(a.current) : 0), (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))), this.reset(a.current);
                },
            },
            {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current));
                },
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    var a,
                        b,
                        c,
                        d,
                        e = this.settings.rtl ? 1 : -1,
                        f = 2 * this.settings.stagePadding,
                        g = this.coordinates(this.current()) + f,
                        h = g + this.width() * e,
                        i = [];
                    for (c = 0, d = this._coordinates.length; d > c; c++)
                        (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
                    this.$stage.children(".active").removeClass("active"),
                        this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                        this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
                },
            },
        ]),
        (e.prototype.initialize = function () {
            if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
                var b, c, e;
                (b = this.$element.find("img")), (c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d), (e = this.$element.children(c).width()), b.length && 0 >= e && this.preloadAutoWidthImages(b);
            }
            this.$element.addClass(this.options.loadingClass),
                (this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
                this.$element.append(this.$stage.parent()),
                this.replace(this.$element.children().not(this.$stage.parent())),
                this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
                this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized");
        }),
        (e.prototype.setup = function () {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c
                ? (a.each(c, function (a) {
                    b >= a && a > d && (d = Number(a));
                }),
                    (e = a.extend({}, this.options, c[d])),
                    "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                    delete e.responsive,
                    e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d)))
                : (e = a.extend({}, this.options)),
                this.trigger("change", { property: { name: "settings", value: e } }),
                (this._breakpoint = d),
                (this.settings = e),
                this.invalidate("settings"),
                this.trigger("changed", { property: { name: "settings", value: this.settings } });
        }),
        (e.prototype.optionsLogic = function () {
            this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (e.prototype.prepare = function (b) {
            var c = this.trigger("prepare", { content: b });
            return (
                c.data ||
                (c.data = a("<" + this.settings.itemElement + "/>")
                    .addClass(this.options.itemClass)
                    .append(b)),
                this.trigger("prepared", { content: c.data }),
                c.data
            );
        }),
        (e.prototype.update = function () {
            for (
                var b = 0,
                c = this._pipe.length,
                d = a.proxy(function (a) {
                    return this[a];
                }, this._invalidated),
                e = {};
                c > b;

            )
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (e.prototype.width = function (a) {
            switch ((a = a || e.Width.Default)) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin;
            }
        }),
        (e.prototype.refresh = function () {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
        }),
        (e.prototype.onThrottledResize = function () {
            b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
        }),
        (e.prototype.onResize = function () {
            return this._items.length
                ? this._width === this.$element.width()
                    ? !1
                    : this.$element.is(":visible")
                        ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                        : !1
                : !1;
        }),
        (e.prototype.registerEventHandlers = function () {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
                this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag &&
                (this.$element.addClass(this.options.dragClass),
                    this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                    this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                        return !1;
                    })),
                this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
        }),
        (e.prototype.onDragStart = function (b) {
            var d = null;
            3 !== b.which &&
                (a.support.transform
                    ? ((d = this.$stage
                        .css("transform")
                        .replace(/.*\(|\)| /g, "")
                        .split(",")),
                        (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
                    : ((d = this.$stage.position()), (d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top })),
                    this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")),
                    this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
                    this.speed(0),
                    (this._drag.time = new Date().getTime()),
                    (this._drag.target = a(b.target)),
                    (this._drag.stage.start = d),
                    (this._drag.stage.current = d),
                    (this._drag.pointer = this.pointer(b)),
                    a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
                    a(c).one(
                        "mousemove.owl.core touchmove.owl.core",
                        a.proxy(function (b) {
                            var d = this.difference(this._drag.pointer, this.pointer(b));
                            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                        }, this)
                    ));
        }),
        (e.prototype.onDragMove = function (a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") &&
                (a.preventDefault(),
                    this.settings.loop
                        ? ((b = this.coordinates(this.minimum())), (c = this.coordinates(this.maximum() + 1) - b), (f.x = ((((f.x - b) % c) + c) % c) + b))
                        : ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                            (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                    (this._drag.stage.current = f),
                    this.animate(f.x));
        }),
        (e.prototype.onDragEnd = function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
                (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                    this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                    this.invalidate("position"),
                    this.update(),
                    (this._drag.direction = f),
                    (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                    this._drag.target.one("click.owl.core", function () {
                        return !1;
                    })),
                this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
        }),
        (e.prototype.closest = function (b, c) {
            var d = -1,
                e = 30,
                f = this.width(),
                g = this.coordinates();
            return (
                this.settings.freeDrag ||
                a.each(
                    g,
                    a.proxy(function (a, h) {
                        return (
                            "left" === c && b > h - e && h + e > b ? (d = a) : "right" === c && b > h - f - e && h - f + e > b ? (d = a + 1) : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a),
                            -1 === d
                        );
                    }, this)
                ),
                this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? (d = b = this.minimum()) : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
                d
            );
        }),
        (e.prototype.animate = function (b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
                c && (this.enter("animating"), this.trigger("translate")),
                a.support.transform3d && a.support.transition
                    ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" })
                    : c
                        ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this))
                        : this.$stage.css({ left: b + "px" });
        }),
        (e.prototype.is = function (a) {
            return this._states.current[a] && this._states.current[a] > 0;
        }),
        (e.prototype.current = function (a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (((a = this.normalize(a)), this._current !== a)) {
                var b = this.trigger("change", { property: { name: "position", value: a } });
                b.data !== d && (a = this.normalize(b.data)), (this._current = a), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
            }
            return this._current;
        }),
        (e.prototype.invalidate = function (b) {
            return (
                "string" === a.type(b) && ((this._invalidated[b] = !0), this.is("valid") && this.leave("valid")),
                a.map(this._invalidated, function (a, b) {
                    return b;
                })
            );
        }),
        (e.prototype.reset = function (a) {
            (a = this.normalize(a)), a !== d && ((this._speed = 0), (this._current = a), this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
        }),
        (e.prototype.normalize = function (a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || 1 > c ? (a = d) : (0 > a || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2), a;
        }),
        (e.prototype.relative = function (a) {
            return (a -= this._clones.length / 2), this.normalize(a, !0);
        }),
        (e.prototype.maximum = function (a) {
            var b,
                c,
                d,
                e = this.settings,
                f = this._coordinates.length;
            if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && ((c += this._items[b].width() + this.settings.margin), !(c > d)););
                f = b + 1;
            } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2), Math.max(f, 0);
        }),
        (e.prototype.minimum = function (a) {
            return a ? 0 : this._clones.length / 2;
        }),
        (e.prototype.items = function (a) {
            return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
        }),
        (e.prototype.mergers = function (a) {
            return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
        }),
        (e.prototype.clones = function (b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function (a) {
                    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
                };
            return b === d
                ? a.map(this._clones, function (a, b) {
                    return f(b);
                })
                : a.map(this._clones, function (a, c) {
                    return a === b ? f(c) : null;
                });
        }),
        (e.prototype.speed = function (a) {
            return a !== d && (this._speed = a), this._speed;
        }),
        (e.prototype.coordinates = function (b) {
            var c,
                e = 1,
                f = b - 1;
            return b === d
                ? a.map(
                    this._coordinates,
                    a.proxy(function (a, b) {
                        return this.coordinates(b);
                    }, this)
                )
                : (this.settings.center ? (this.settings.rtl && ((e = -1), (f = b + 1)), (c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e)) : (c = this._coordinates[f] || 0), (c = Math.ceil(c)));
        }),
        (e.prototype.duration = function (a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
        }),
        (e.prototype.to = function (a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (0 > e),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop
                ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), (a = c + e), (d = ((((a - h) % g) + g) % g) + h), d !== a && i >= d - e && d - e > 0 && ((c = d - e), (a = d), this.reset(c)))
                : this.settings.rewind
                    ? ((i += 1), (a = ((a % i) + i) % i))
                    : (a = Math.max(h, Math.min(i, a))),
                this.speed(this.duration(c, a, b)),
                this.current(a),
                this.$element.is(":visible") && this.update();
        }),
        (e.prototype.next = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) + 1, a);
        }),
        (e.prototype.prev = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) - 1, a);
        }),
        (e.prototype.onTransitionEnd = function (a) {
            return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"));
        }),
        (e.prototype.viewport = function () {
            var d;
            if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
            else if (b.innerWidth) d = b.innerWidth;
            else {
                if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
                d = c.documentElement.clientWidth;
            }
            return d;
        }),
        (e.prototype.replace = function (b) {
            this.$stage.empty(),
                (this._items = []),
                b && (b = b instanceof jQuery ? b : a(b)),
                this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
                b
                    .filter(function () {
                        return 1 === this.nodeType;
                    })
                    .each(
                        a.proxy(function (a, b) {
                            (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                        }, this)
                    ),
                this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
                this.invalidate("items");
        }),
        (e.prototype.add = function (b, c) {
            var e = this.relative(this._current);
            (c = c === d ? this._items.length : this.normalize(c, !0)),
                (b = b instanceof jQuery ? b : a(b)),
                this.trigger("add", { content: b, position: c }),
                (b = this.prepare(b)),
                0 === this._items.length || c === this._items.length
                    ? (0 === this._items.length && this.$stage.append(b),
                        0 !== this._items.length && this._items[c - 1].after(b),
                        this._items.push(b),
                        this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                    : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
                this._items[e] && this.reset(this._items[e].index()),
                this.invalidate("items"),
                this.trigger("added", { content: b, position: c });
        }),
        (e.prototype.remove = function (a) {
            (a = this.normalize(a, !0)),
                a !== d &&
                (this.trigger("remove", { content: this._items[a], position: a }),
                    this._items[a].remove(),
                    this._items.splice(a, 1),
                    this._mergers.splice(a, 1),
                    this.invalidate("items"),
                    this.trigger("removed", { content: null, position: a }));
        }),
        (e.prototype.preloadAutoWidthImages = function (b) {
            b.each(
                a.proxy(function (b, c) {
                    this.enter("pre-loading"),
                        (c = a(c)),
                        a(new Image())
                            .one(
                                "load",
                                a.proxy(function (a) {
                                    c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                                }, this)
                            )
                            .attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
                }, this)
            );
        }),
        (e.prototype.destroy = function () {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$element
                    .removeClass(this.options.refreshClass)
                    .removeClass(this.options.loadingClass)
                    .removeClass(this.options.loadedClass)
                    .removeClass(this.options.rtlClass)
                    .removeClass(this.options.dragClass)
                    .removeClass(this.options.grabClass)
                    .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                    .removeData("owl.carousel");
        }),
        (e.prototype.op = function (a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : c > a;
                case ">":
                    return d ? c > a : a > c;
                case ">=":
                    return d ? c >= a : a >= c;
                case "<=":
                    return d ? a >= c : c >= a;
            }
        }),
        (e.prototype.on = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
        }),
        (e.prototype.off = function (a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
        }),
        (e.prototype.trigger = function (b, c, d, f, g) {
            var h = { item: { count: this._items.length, index: this.current() } },
                i = a.camelCase(
                    a
                        .grep(["on", b, d], function (a) {
                            return a;
                        })
                        .join("-")
                        .toLowerCase()
                ),
                j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
            return (
                this._supress[b] ||
                (a.each(this._plugins, function (a, b) {
                    b.onTrigger && b.onTrigger(j);
                }),
                    this.register({ type: e.Type.Event, name: b }),
                    this.$element.trigger(j),
                    this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
                j
            );
        }),
        (e.prototype.enter = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
                }, this)
            );
        }),
        (e.prototype.leave = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b]--;
                }, this)
            );
        }),
        (e.prototype.register = function (b) {
            if (b.type === e.Type.Event) {
                if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
                    var c = a.event.special[b.name]._default;
                    (a.event.special[b.name]._default = function (a) {
                        return !c || !c.apply || (a.namespace && -1 !== a.namespace.indexOf("owl")) ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                    }),
                        (a.event.special[b.name].owl = !0);
                }
            } else
                b.type === e.Type.State &&
                    (this._states.tags[b.name] ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)) : (this._states.tags[b.name] = b.tags),
                        (this._states.tags[b.name] = a.grep(
                            this._states.tags[b.name],
                            a.proxy(function (c, d) {
                                return a.inArray(c, this._states.tags[b.name]) === d;
                            }, this)
                        )));
        }),
        (e.prototype.suppress = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    this._supress[b] = !0;
                }, this)
            );
        }),
        (e.prototype.release = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    delete this._supress[b];
                }, this)
            );
        }),
        (e.prototype.pointer = function (a) {
            var c = { x: null, y: null };
            return (
                (a = a.originalEvent || a || b.event),
                (a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a),
                a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
                c
            );
        }),
        (e.prototype.isNumeric = function (a) {
            return !isNaN(parseFloat(a));
        }),
        (e.prototype.difference = function (a, b) {
            return { x: a.x - b.x, y: a.y - b.y };
        }),
        (a.fn.owlCarousel = function (b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var d = a(this),
                    f = d.data("owl.carousel");
                f ||
                    ((f = new e(this, "object" == typeof b && b)),
                        d.data("owl.carousel", f),
                        a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                            f.register({ type: e.Type.Event, name: c }),
                                f.$element.on(
                                    c + ".owl.carousel.core",
                                    a.proxy(function (a) {
                                        a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                                    }, f)
                                );
                        })),
                    "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
            });
        }),
        (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoRefresh && this.watch();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (e.prototype.watch = function () {
                this._interval || ((this._visible = this._core.$element.is(":visible")), (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
            }),
            (e.prototype.refresh = function () {
                this._core.$element.is(":visible") !== this._visible &&
                    ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
            }),
            (e.prototype.destroy = function () {
                var a, c;
                b.clearInterval(this._interval);
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && "position" == b.property.name) || "initialized" == b.type))
                            for (
                                var c = this._core.settings,
                                e = (c.center && Math.ceil(c.items / 2)) || c.items,
                                f = (c.center && -1 * e) || 0,
                                g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                                h = this._core.clones().length,
                                i = a.proxy(function (a, b) {
                                    this.load(b);
                                }, this);
                                f++ < e;

                            )
                                this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { lazyLoad: !1 }),
            (e.prototype.load = function (c) {
                var d = this._core.$stage.children().eq(c),
                    e = d && d.find(".owl-lazy");
                !e ||
                    a.inArray(d.get(0), this._loaded) > -1 ||
                    (e.each(
                        a.proxy(function (c, d) {
                            var e,
                                f = a(d),
                                g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src");
                            this._core.trigger("load", { element: f, url: g }, "lazy"),
                                f.is("img")
                                    ? f
                                        .one(
                                            "load.owl.lazy",
                                            a.proxy(function () {
                                                f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                            }, this)
                                        )
                                        .attr("src", g)
                                    : ((e = new Image()),
                                        (e.onload = a.proxy(function () {
                                            f.css({ "background-image": "url(" + g + ")", opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                        }, this)),
                                        (e.src = g));
                        }, this)
                    ),
                        this._loaded.push(d.get(0)));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && this.update();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
                    }, this),
                    "loaded.owl.lazy": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (e.prototype.update = function () {
                var b = this._core._current,
                    c = b + this._core.settings.items,
                    d = this._core.$stage.children().toArray().slice(b, c),
                    e = [],
                    f = 0;
                a.each(d, function (b, c) {
                    e.push(a(c).height());
                }),
                    (f = Math.max.apply(null, e)),
                    this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                    }, this),
                    "resize.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" === a.property.name && this._playing && this.stop();
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find(".owl-video");
                            c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    a.proxy(function (a) {
                        this.play(a);
                    }, this)
                );
        };
        (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (e.prototype.fetch = function (a, b) {
                var c = (function () {
                    return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
                })(),
                    d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                    e = a.attr("data-width") || this._core.settings.videoWidth,
                    f = a.attr("data-height") || this._core.settings.videoHeight,
                    g = a.attr("href");
                if (!g) throw new Error("Missing video URL.");
                if (
                    ((d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/)),
                        d[3].indexOf("youtu") > -1)
                )
                    c = "youtube";
                else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
                else {
                    if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                    c = "vzaar";
                }
                (d = d[6]), (this._videos[g] = { type: c, id: d, width: e, height: f }), b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
            }),
            (e.prototype.thumbnail = function (b, c) {
                var d,
                    e,
                    f,
                    g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
                    h = b.find("img"),
                    i = "src",
                    j = "",
                    k = this._core.settings,
                    l = function (a) {
                        (e = '<div class="owl-video-play-icon"></div>'),
                            (d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>'),
                            b.after(d),
                            b.after(e);
                    };
                return (
                    b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
                    this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
                    h.length
                        ? (l(h.attr(i)), h.remove(), !1)
                        : void ("youtube" === c.type
                            ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
                            : "vimeo" === c.type
                                ? a.ajax({
                                    type: "GET",
                                    url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                                    jsonp: "callback",
                                    dataType: "jsonp",
                                    success: function (a) {
                                        (f = a[0].thumbnail_large), l(f);
                                    },
                                })
                                : "vzaar" === c.type &&
                                a.ajax({
                                    type: "GET",
                                    url: "//vzaar.com/api/videos/" + c.id + ".json",
                                    jsonp: "callback",
                                    dataType: "jsonp",
                                    success: function (a) {
                                        (f = a.framegrab_url), l(f);
                                    },
                                }))
                );
            }),
            (e.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (e.prototype.play = function (b) {
                var c,
                    d = a(b.target),
                    e = d.closest("." + this._core.settings.itemClass),
                    f = this._videos[e.attr("data-video")],
                    g = f.width || "100%",
                    h = f.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                        this._core.trigger("play", null, "video"),
                        (e = this._core.items(this._core.relative(e.index()))),
                        this._core.reset(e.index()),
                        "youtube" === f.type
                            ? (c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>')
                            : "vimeo" === f.type
                                ? (c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
                                : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'),
                        a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")),
                        (this._playing = e.addClass("owl-video-playing")));
            }),
            (e.prototype.isInFullScreen = function () {
                var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
                return b && a(b).parent().hasClass("owl-video-frame");
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Video = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this.core = b),
                (this.core.options = a.extend({}, e.Defaults, this.core.options)),
                (this.swapping = !0),
                (this.previous = d),
                (this.next = d),
                (this.handlers = {
                    "change.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                        a.namespace && (this.swapping = "translated" == a.type);
                    }, this),
                    "translate.owl.carousel": a.proxy(function (a) {
                        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (e.Defaults = { animateOut: !1, animateIn: !1 }),
            (e.prototype.swap = function () {
                if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                    this.core.speed(0);
                    var b,
                        c = a.proxy(this.clear, this),
                        d = this.core.$stage.children().eq(this.previous),
                        e = this.core.$stage.children().eq(this.next),
                        f = this.core.settings.animateIn,
                        g = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (g &&
                            ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                                d
                                    .one(a.support.animation.end, c)
                                    .css({ left: b + "px" })
                                    .addClass("animated owl-animated-out")
                                    .addClass(g)),
                            f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
                }
            }),
            (e.prototype.clear = function (b) {
                a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._timeout = null),
                (this._paused = !1),
                (this._handlers = {
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "settings" === a.property.name
                            ? this._core.settings.autoplay
                                ? this.play()
                                : this.stop()
                            : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.autoplay && this.play();
                    }, this),
                    "play.owl.autoplay": a.proxy(function (a, b, c) {
                        a.namespace && this.play(b, c);
                    }, this),
                    "stop.owl.autoplay": a.proxy(function (a) {
                        a.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                    }, this),
                    "touchstart.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                    }, this),
                    "touchend.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = a.extend({}, e.Defaults, this._core.options));
        };
        (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
            (e.prototype.play = function (a, b) {
                (this._paused = !1), this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
            }),
            (e.prototype._getNextTimeout = function (d, e) {
                return (
                    this._timeout && b.clearTimeout(this._timeout),
                    b.setTimeout(
                        a.proxy(function () {
                            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
                        }, this),
                        d || this._core.settings.autoplayTimeout
                    )
                );
            }),
            (e.prototype._setAutoPlayInterval = function () {
                this._timeout = this._getNextTimeout();
            }),
            (e.prototype.stop = function () {
                this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
            }),
            (e.prototype.pause = function () {
                this._core.is("rotating") && (this._paused = !0);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this.stop();
                for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (b) {
            (this._core = b),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
                (this._handlers = {
                    "prepared.owl.carousel": a.proxy(function (b) {
                        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                    }, this),
                    "added.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
                    }, this),
                    "remove.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "position" == a.property.name && this.draw();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            !this._initialized &&
                            (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers);
        };
        (e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (e.prototype.initialize = function () {
                var b,
                    c = this._core.settings;
                (this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                    (this._controls.$previous = a("<" + c.navElement + ">")
                        .addClass(c.navClass[0])
                        .html(c.navText[0])
                        .prependTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.prev(c.navSpeed);
                            }, this)
                        )),
                    (this._controls.$next = a("<" + c.navElement + ">")
                        .addClass(c.navClass[1])
                        .html(c.navText[1])
                        .appendTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.next(c.navSpeed);
                            }, this)
                        )),
                    c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                    (this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled")),
                    this._controls.$absolute.on(
                        "click",
                        "div",
                        a.proxy(function (b) {
                            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                            b.preventDefault(), this.to(d, c.dotsSpeed);
                        }, this)
                    );
                for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
            }),
            (e.prototype.destroy = function () {
                var a, b, c, d;
                for (a in this._handlers) this.$element.off(a, this._handlers[a]);
                for (b in this._controls) this._controls[b].remove();
                for (d in this.overides) this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
            }),
            (e.prototype.update = function () {
                var a,
                    b,
                    c,
                    d = this._core.clones().length / 2,
                    e = d + this._core.items().length,
                    f = this._core.maximum(!0),
                    g = this._core.settings,
                    h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
                if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
                    for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) {
                        if (b >= h || 0 === b) {
                            if ((this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f)) break;
                            (b = 0), ++c;
                        }
                        b += this._core.mergers(this._core.relative(a));
                    }
            }),
            (e.prototype.draw = function () {
                var b,
                    c = this._core.settings,
                    d = this._core.items().length <= c.items,
                    e = this._core.relative(this._core.current()),
                    f = c.loop || c.rewind;
                this._controls.$relative.toggleClass("disabled", !c.nav || d),
                    c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                    this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                    c.dots &&
                    ((b = this._pages.length - this._controls.$absolute.children().length),
                        c.dotsData && 0 !== b
                            ? this._controls.$absolute.html(this._templates.join(""))
                            : b > 0
                                ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
                                : 0 > b && this._controls.$absolute.children().slice(b).remove(),
                        this._controls.$absolute.find(".active").removeClass("active"),
                        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
            }),
            (e.prototype.onTrigger = function (b) {
                var c = this._core.settings;
                b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
            }),
            (e.prototype.current = function () {
                var b = this._core.relative(this._core.current());
                return a
                    .grep(
                        this._pages,
                        a.proxy(function (a, c) {
                            return a.start <= b && a.end >= b;
                        }, this)
                    )
                    .pop();
            }),
            (e.prototype.getPosition = function (b) {
                var c,
                    d,
                    e = this._core.settings;
                return (
                    "page" == e.slideBy
                        ? ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start))
                        : ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
                    c
                );
            }),
            (e.prototype.next = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
            }),
            (e.prototype.prev = function (b) {
                a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
            }),
            (e.prototype.to = function (b, c, d) {
                var e;
                !d && this._pages.length ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (c) {
            (this._core = c),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (c) {
                        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                            if (!c) return;
                            this._hashes[c] = b.content;
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function (c) {
                        if (c.namespace && "position" === c.property.name) {
                            var d = this._core.items(this._core.relative(this._core.current())),
                                e = a
                                    .map(this._hashes, function (a, b) {
                                        return a === d ? b : null;
                                    })
                                    .join();
                            if (!e || b.location.hash.slice(1) === e) return;
                            b.location.hash = e;
                        }
                    }, this),
                }),
                (this._core.options = a.extend({}, e.Defaults, this._core.options)),
                this.$element.on(this._handlers),
                a(b).on(
                    "hashchange.owl.navigation",
                    a.proxy(function (a) {
                        var c = b.location.hash.substring(1),
                            e = this._core.$stage.children(),
                            f = this._hashes[c] && e.index(this._hashes[c]);
                        f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
                    }, this)
                );
        };
        (e.Defaults = { URLhashListener: !1 }),
            (e.prototype.destroy = function () {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        function e(b, c) {
            var e = !1,
                f = b.charAt(0).toUpperCase() + b.slice(1);
            return (
                a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
                    return g[b] !== d ? ((e = c ? b : !0), !1) : void 0;
                }),
                e
            );
        }
        function f(a) {
            return e(a, !0);
        }
        var g = a("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            i = {
                transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
                animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
            },
            j = {
                csstransforms: function () {
                    return !!e("transform");
                },
                csstransforms3d: function () {
                    return !!e("perspective");
                },
                csstransitions: function () {
                    return !!e("transition");
                },
                cssanimations: function () {
                    return !!e("animation");
                },
            };
        j.csstransitions() && ((a.support.transition = new String(f("transition"))), (a.support.transition.end = i.transition.end[a.support.transition])),
            j.cssanimations() && ((a.support.animation = new String(f("animation"))), (a.support.animation.end = i.animation.end[a.support.animation])),
            j.csstransforms() && ((a.support.transform = new String(f("transform"))), (a.support.transform3d = j.csstransforms3d()));
    })(window.Zepto || window.jQuery, window, document);
