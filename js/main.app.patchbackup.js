(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        0: function(e, t, o) {
            e.exports = o("kpGR")
        },
        "3UD+": function(e) {
            e.exports = function(e) {
                if (!e.webpackPolyfill) {
                    var t = Object.create(e);
                    t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return t.l
                        }
                    }), Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function() {
                            return t.i
                        }
                    }), Object.defineProperty(t, "exports", {
                        enumerable: !0
                    }), t.webpackPolyfill = 1
                }
                return t
            }
        },
        "9odl": function(e) {
            e.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform float time;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nuniform sampler2D texture;\nuniform float opacity;\nuniform vec3 gradientColor;\nuniform float progress;\n\nvoid main() {\n\n\tvec2 uv = vUv;\n\t// vec4 color = texture2D( texture, vUv );\n\n\tvec4 origColor = texture2D(texture, vUv);\n    float grayscaleValue = dot(origColor.rgb, vec3(0.299, 0.587, 0.114));\n\n\t// remove green\n\t// if ( origColor.r < 0.4 && origColor.b < 0.4 && origColor.g > 0.4 ) {\n\t// \torigColor.a = 0.;\n\t// }\n\n\t// if ( origColor.r < 0.9 && origColor.b < 0.9 && origColor.g > 0.9 ) {\n\t// \torigColor.a = 0.;\n\t// }\n\n\tvec4 gradientImage = mix(vec4( gradientColor, 1.0), vec4(1.0, 1.0, 1.0, 1.0), grayscaleValue);\n\n\t// if ( gradientImage.b < 0.9 ) discard;\n\n\t// gl_FragColor = origColor * opacity;\n\tgl_FragColor = mix( vec4( gradientImage.rgb, 0. ), mix( gradientImage, origColor, progress ), opacity );\n\n\t#ifdef USE_FOG\n\t\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t\t#else\n\t\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t\t#endif\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\t#endif\n\n}"
        },
        Li5z: function(e) {
            e.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform float time;\n\nvoid main () {\n\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1 );\n\n}"
        },
        P3Nu: function(e, t) {
            var o, i, n = Math.abs,
                a = function(e) {
                    var t = {
                        addEvent: function(e, t, o, i) {
                            e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent && (e["e" + t + o] = o, e[t + o] = function() {
                                e["e" + t + o](window.event, i)
                            }, e.attachEvent("on" + t, e[t + o]))
                        },
                        removeEvent: function(e, t, o) {
                            e.removeEventListener ? e.removeEventListener(t, o) : e.attachEvent && e.detachEvent(t)
                        },
                        input: "",
                        pattern: "38384040373937396665",
                        keydownHandler: function(o, e) {
                            if (e && (t = e), t.input += o ? o.keyCode : event.keyCode, t.input.length > t.pattern.length && (t.input = t.input.substr(t.input.length - t.pattern.length)), t.input === t.pattern) return t.code(t._currentLink), t.input = "", o.preventDefault(), !1
                        },
                        load: function(e) {
                            this._currentLink = e, this.addEvent(document, "keydown", this.keydownHandler, this), this.iphone.load(e)
                        },
                        unload: function() {
                            this.removeEvent(document, "keydown", this.keydownHandler), this.iphone.unload()
                        },
                        code: function(e) {
                            window.location = e
                        },
                        iphone: {
                            start_x: 0,
                            start_y: 0,
                            stop_x: 0,
                            stop_y: 0,
                            tap: !1,
                            capture: !1,
                            orig_keys: "",
                            keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
                            input: [],
                            code: function(e) {
                                t.code(e)
                            },
                            touchmoveHandler: function(o) {
                                if (1 === o.touches.length && !0 === t.iphone.capture) {
                                    var e = o.touches[0];
                                    t.iphone.stop_x = e.pageX, t.iphone.stop_y = e.pageY, t.iphone.tap = !1, t.iphone.capture = !1, t.iphone.check_direction()
                                }
                            },
                            touchendHandler: function() {
                                if (t.iphone.input.push(t.iphone.check_direction()), t.iphone.input.length > t.iphone.keys.length && t.iphone.input.shift(), t.iphone.input.length === t.iphone.keys.length) {
                                    for (var e = !0, o = 0; o < t.iphone.keys.length; o++) t.iphone.input[o] !== t.iphone.keys[o] && (e = !1);
                                    e && t.iphone.code(t._currentLink)
                                }
                            },
                            touchstartHandler: function(o) {
                                t.iphone.start_x = o.changedTouches[0].pageX, t.iphone.start_y = o.changedTouches[0].pageY, t.iphone.tap = !0, t.iphone.capture = !0
                            },
                            load: function() {
                                this.orig_keys = this.keys, t.addEvent(document, "touchmove", this.touchmoveHandler), t.addEvent(document, "touchend", this.touchendHandler, !1), t.addEvent(document, "touchstart", this.touchstartHandler)
                            },
                            unload: function() {
                                t.removeEvent(document, "touchmove", this.touchmoveHandler), t.removeEvent(document, "touchend", this.touchendHandler), t.removeEvent(document, "touchstart", this.touchstartHandler)
                            },
                            check_direction: function() {
                                return x_magnitude = n(this.start_x - this.stop_x), y_magnitude = n(this.start_y - this.stop_y), x = 0 > this.start_x - this.stop_x ? "RIGHT" : "LEFT", y = 0 > this.start_y - this.stop_y ? "DOWN" : "UP", result = x_magnitude > y_magnitude ? x : y, result = !0 === this.tap ? "TAP" : result, result
                            }
                        }
                    };
                    return "string" == typeof e && t.load(e), "function" == typeof e && (t.code = e, t.load()), t
                };
            "undefined" == typeof e.exports ? (o = [], i = function() {
                return a
            }.apply(t, o), !(void 0 !== i && (e.exports = i))) : e.exports = a
        },
        WQPq: function() {},
        kpGR: function(e, t, o) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function n(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }

            function a(e, t, o) {
                return t && n(e.prototype, t), o && n(e, o), e
            }

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }

            function c(e, t, o) {
                return t && l(e.prototype, t), o && l(e, o), e
            }

            function p(e, t) {
                return t && ("object" === r(t) || "function" == typeof t) ? t : g(e)
            }

            function m(e) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, m(e)
            }

            function d(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && u(e, t)
            }

            function u(e, t) {
                return u = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, u(e, t)
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, h(e)
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function b(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }

            function v(e, t, o) {
                return t && b(e.prototype, t), o && b(e, o), e
            }

            function k(e, t) {
                return t && ("object" === h(t) || "function" == typeof t) ? t : _(e)
            }

            function w(e) {
                return w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, w(e)
            }

            function C(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
            }

            function E(e, t) {
                return E = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, E(e, t)
            }

            function _(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function T(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }

            function M(e, t, o) {
                return t && T(e.prototype, t), o && T(e, o), e
            }
            var P = Math.PI,
                z = Math.floor,
                O = Math.max,
                j = Math.abs;
            o.r(t);
            var L = o("WQPq"),
                I = o("IT9u"),
                D = o("E3/K"),
                W = o("cuij"),
                F = o("BR65"),
                A = o("+8Os"),
                B = o("D10d"),
                H = o("LxkE"),
                U = o("3+m9"),
                Y = o("TnI4"),
                G = o("qdxW"),
                X = o("AIox"),
                R = o("/V9W"),
                N = o("brnI"),
                V = o("Ncdj"),
                q = o("XPv6"),
                J = o("z/o8");
            class K {
                constructor(e, t) {
                    t = Object.assign({}, K.defaults, t), this.element = e, this.opts = t, this.touchStartX = null, this.touchStartY = null, this.touchEndX = null, this.touchEndY = null, this.velocityX = null, this.velocityY = null, this.longPressTimer = null, this.doubleTapWaiting = !1, this.handlers = {
                        panstart: [],
                        panmove: [],
                        panend: [],
                        swipeleft: [],
                        swiperight: [],
                        swipeup: [],
                        swipedown: [],
                        tap: [],
                        doubletap: [],
                        longpress: []
                    }, this._onTouchStart = this.onTouchStart.bind(this), this._onTouchMove = this.onTouchMove.bind(this), this._onTouchEnd = this.onTouchEnd.bind(this), this.element.addEventListener("touchstart", this._onTouchStart, Q), this.element.addEventListener("touchmove", this._onTouchMove, Q), this.element.addEventListener("touchend", this._onTouchEnd, Q), this.opts.mouseSupport && !("ontouchstart" in window) && (this.element.addEventListener("mousedown", this._onTouchStart, Q), document.addEventListener("mousemove", this._onTouchMove, Q), document.addEventListener("mouseup", this._onTouchEnd, Q))
                }
                destroy() {
                    this.element.removeEventListener("touchstart", this._onTouchStart), this.element.removeEventListener("touchmove", this._onTouchMove), this.element.removeEventListener("touchend", this._onTouchEnd), this.element.removeEventListener("mousedown", this._onTouchStart), document.removeEventListener("mousemove", this._onTouchMove), document.removeEventListener("mouseup", this._onTouchEnd), clearTimeout(this.longPressTimer), clearTimeout(this.doubleTapTimer)
                }
                on(e, t) {
                    if (this.handlers[e]) return this.handlers[e].push(t), {
                        type: e,
                        fn: t,
                        cancel: () => this.off(e, t)
                    }
                }
                off(e, t) {
                    if (this.handlers[e]) {
                        const o = this.handlers[e].indexOf(t); - 1 !== o && this.handlers[e].splice(o, 1)
                    }
                }
                fire(e, t) {
                    for (let o = 0; o < this.handlers[e].length; o++) this.handlers[e][o](t)
                }
                onTouchStart(e) {
                    this.thresholdX = this.opts.threshold("x", this), this.thresholdY = this.opts.threshold("y", this), this.disregardVelocityThresholdX = this.opts.disregardVelocityThreshold("x", this), this.disregardVelocityThresholdY = this.opts.disregardVelocityThreshold("y", this), this.touchStartX = "mousedown" === e.type ? e.clientX : e.changedTouches[0].clientX, this.touchStartY = "mousedown" === e.type ? e.clientY : e.changedTouches[0].clientY, this.touchMoveX = null, this.touchMoveY = null, this.touchEndX = null, this.touchEndY = null, this.longPressTimer = setTimeout(() => this.fire("longpress", e), this.opts.longPressTime), this.fire("panstart", e)
                }
                onTouchMove(e) {
                    if ("mousemove" !== e.type || this.touchStartX && null === this.touchEndX) {
                        const t = ("mousemove" === e.type ? e.clientX : e.changedTouches[0].clientX) - this.touchStartX;
                        this.velocityX = t - this.touchMoveX, this.touchMoveX = t;
                        const o = ("mousemove" === e.type ? e.clientY : e.changedTouches[0].clientY) - this.touchStartY;
                        this.velocityY = o - this.touchMoveY, this.touchMoveY = o;
                        const i = j(this.touchMoveX),
                            n = j(this.touchMoveY);
                        this.swipingHorizontal = i > this.thresholdX, this.swipingVertical = n > this.thresholdY, this.swipingDirection = i > n ? this.swipingHorizontal ? "horizontal" : "pre-horizontal" : this.swipingVertical ? "vertical" : "pre-vertical", O(i, n) > this.opts.pressThreshold && clearTimeout(this.longPressTimer), e.cancelable && e.preventDefault(), this.fire("panmove", e)
                    }
                }
                onTouchEnd(e) {
                    if ("mouseup" !== e.type || this.touchStartX && null === this.touchEndX) {
                        this.touchEndX = "mouseup" === e.type ? e.clientX : e.changedTouches[0].clientX, this.touchEndY = "mouseup" === e.type ? e.clientY : e.changedTouches[0].clientY, this.fire("panend", e), clearTimeout(this.longPressTimer);
                        const t = this.touchEndX - this.touchStartX,
                            o = j(t),
                            i = this.touchEndY - this.touchStartY,
                            n = j(i);
                        o > this.thresholdX || n > this.thresholdY ? (this.swipedHorizontal = this.opts.diagonalSwipes ? j(t / i) <= this.opts.diagonalLimit : o >= n && o > this.thresholdX, this.swipedVertical = this.opts.diagonalSwipes ? j(i / t) <= this.opts.diagonalLimit : n > o && n > this.thresholdY, this.swipedHorizontal && (0 > t ? (this.velocityX < -this.opts.velocityThreshold || t < -this.disregardVelocityThresholdX) && this.fire("swipeleft", e) : (this.velocityX > this.opts.velocityThreshold || t > this.disregardVelocityThresholdX) && this.fire("swiperight", e)), this.swipedVertical && (0 > i ? (this.velocityY < -this.opts.velocityThreshold || i < -this.disregardVelocityThresholdY) && this.fire("swipeup", e) : (this.velocityY > this.opts.velocityThreshold || i > this.disregardVelocityThresholdY) && this.fire("swipedown", e))) : o < this.opts.pressThreshold && n < this.opts.pressThreshold && (this.doubleTapWaiting ? (this.doubleTapWaiting = !1, clearTimeout(this.doubleTapTimer), this.fire("doubletap", e)) : (this.doubleTapWaiting = !0, this.doubleTapTimer = setTimeout(() => this.doubleTapWaiting = !1, this.opts.doubleTapTime), this.fire("tap", e)))
                    }
                }
            }
            K.defaults = {
                threshold: (e) => O(25, z(.15 * ("x" === e ? window.innerWidth || document.body.clientWidth : window.innerHeight || document.body.clientHeight))),
                velocityThreshold: 5,
                disregardVelocityThreshold: (e, t) => z(.5 * ("x" === e ? t.element.clientWidth : t.element.clientHeight)),
                pressThreshold: 5,
                diagonalSwipes: !1,
                diagonalLimit: Math.tan(45 * 1.5 / 180 * P),
                longPressTime: 400,
                doubleTapTime: 250,
                mouseSupport: !0
            };
            let Q = { passive: false };
            var Z = o("xC2a"),
                $ = o("EpSA"),
                ee = o("e/Nn"),
                te = o("6deg"),
                oe = function(e, t) {
                    var o = e.length,
                        i = 0;
                    return Promise.all(e.map(function(e) {
                        return e.then(function() {
                            i++, t(i, o)
                        }).catch(function(e) {
                            console.log(e)
                        }), e
                    }))
                },
                ie = function() {
                    function e(t) {
                        i(this, e), this.isMobile = t, this.assets = {
                            textures: {},
                            fonts: {}
                        }, this.assetList = {}, this.renderer = null, this.progressEl = document.querySelector(".progress-percent"), this.progressBar = document.querySelector(".progress-circle .line"), this.videosToLoad = 0
                    }
                    return a(e, [{
                        key: "load",
                        value: function(e, t) {
                            var o = this;
                            this.assetList = e, this.renderer = t;
                            var n = [],
                                a = new Z.a;
                            a.crossOrigin = "";
                            var r = !0,
                                s = function(e) {
                                    o.assetList[e].forEach(function(t) {
                                        if (~t.indexOf(".mp4")) {
                                            var i = document.createElement("video");
                                            i.style = "position:absolute;height:0", i.muted = !0, i.autoplay = !1, i.loop = !0, i.crossOrigin = "anonymous", i.setAttribute("muted", !0), i.setAttribute("webkit-playsinline", !0), i.setAttribute("playsinline", !0), i.preload = "metadata", i.src = "assets/".concat(e, "/").concat(t);
                                            document.body.appendChild(i);
                                            // keep pending mobile videos so we can attempt playback on first user gesture
                                            try {
                                                window._beyonPendingVideos = window._beyonPendingVideos || [];
                                                window._beyonPendingVideos.push(i);
                                            } catch (err) {}
                                            i.load(), n.push(new Promise(function(n) {
                                                o.videoPromise(i, e, t, n)
                                            }))
                                        } else n.push(new Promise(function(i) {
                                            a.load("assets/".concat(e, "/").concat(t), function(n) {
                                                return o.createImageTexture(n, e, t, i)
                                            }, undefined, function(err) {
                                                console.warn('Image load error:', e + '/' + t, err);
                                                // fallback to a tiny transparent image so the pipeline can continue
                                                var dataUrl = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
                                                a.load(dataUrl, function(dummy) {
                                                    o.createImageTexture(dummy, e, t, i);
                                                });
                                            })
                                        }))
                                    })
                                };
                            for (var l in this.assetList) s(l);
                            for (var c = new $.a, p = ["fonts/schnyder.json", "fonts/schnyder-outline.json", "fonts/suisse.json", "fonts/futura.json", "fonts/gemola.json", "fonts/Oooh Baby_Regular.json","fonts/Geom_Regular.json","fonts/Geom Medium_Regular.json","fonts/Geom Light_Regular.json"], m = function(e) {
                                    n.push(new Promise(function(t) {
                                        return c.load(p[e], function(e) {
                                            o.assets.fonts[e.data.familyName] = e, t()
                                        }, undefined, function(err) {
                                            console.warn('Font load error:', p[e], err);
                                            // continue even if the font fails to load
                                            t();
                                        })
                                    }))
                                }, d = 0; d < p.length; d++) m(d);
                            return new Promise(function(e) {
                                oe(n, o.update.bind(o)).then(function() {
                                    o.assets.fonts["Schnyder L"] = o.assets.fonts["Schnyder L"] || o.assets.fonts["Gemola"] || o.assets.fonts["Futura"];
                                    o.assets.fonts["SuisseIntl-Bold"] = o.assets.fonts["SuisseIntl-Bold"] || o.assets.fonts["Futura"] || o.assets.fonts["Gemola"];
                                    if (o.assets && o.assets.fonts) {
                                        o.assets.fonts["Geom Light_Regular"] = o.assets.fonts["Geom Light"] || o.assets.fonts["Geom Light_Regular"];
                                        o.assets.fonts["Geom Medium_Regular"] = o.assets.fonts["Geom Medium"] || o.assets.fonts["Geom Medium_Regular"];
                                        o.assets.fonts["Geom_Regular"] = o.assets.fonts["Geom"] || o.assets.fonts["Geom_Regular"] || o.assets.fonts["Geom Regular"];
                                    }
                                    e(o.assets)
                                })
                            })
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var o = Math.round(100 * (e / t));
                            this.progressEl.innerHTML = o + "%", this.progressBar.style.strokeDashoffset = 252.363 - 252.363 * (e / t)
                        }
                    }, {
                        key: "videoPromise",
                        value: function(e, t, o, i, n) {
                            var a = this;
                            n && e.load(), this.isMobile ? (e.onloadeddata = function() {
                                e.onerror = null, a.createVideoTexture(e, t, o, i)
                            }, e.onerror = function() {
                                console.warn("Video load error:", t + "/" + o), e.onloadeddata = null, e.onerror = null, a.createVideoTexture(e, t, o, i)
                            }) : (e.oncanplaythrough = function() {
                                return a.createVideoTexture(e, t, o, i)
                            }, e.onerror = function() {
                                console.warn("Video load error:", t + "/" + o), e.oncanplaythrough = null, e.onerror = null, a.createVideoTexture(e, t, o, i)
                            })
                        }
                    }, {
                        key: "createImageTexture",
                        value: function(e, t, o, i) {
                            var n = this;
                            if (i) e.size = new Y.a(e.image.width / 2, e.image.height / 2), e.needsUpdate = !0, this.renderer.setTexture2D(e, 0), e.name = "".concat(t, "/").concat(o), e.mediaType = "image", e.anisotropy = this.renderer.capabilities.getMaxAnisotropy(), this.assets.textures[t] || (this.assets.textures[t] = {}), this.assets.textures[t][o] = e, i(e);
                            else {
                                var a = new Z.a().load("assets/".concat(t, "/").concat(o), function(e) {
                                    e.size = new Y.a(e.image.width / 2, e.image.height / 2), e.needsUpdate = !0, n.renderer.setTexture2D(e, 0)
                                });
                                a.size = new Y.a(10, 10), a.name = "".concat(t, "/").concat(o), a.mediaType = "image", a.anisotropy = this.renderer.capabilities.getMaxAnisotropy(), this.assets.textures[t] || (this.assets.textures[t] = {}), this.assets.textures[t][o] = a
                            }
                        }
                    }, {
                        key: "createVideoTexture",
                        value: function(e, t, o, i) {
                            var n = new ee.a(e);
                            n.minFilter = n.magFilter = te.M, n.name = "".concat(t, "/").concat(o), n.mediaType = "video", n.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
                            if (i) {
                                n.size = new Y.a(n.image.videoWidth / 2, n.image.videoHeight / 2);
                                this.renderer.setTexture2D(n, 0);
                                // Keep the video `src` intact on mobile so we can start playback on a user gesture.
                                // Clearing `src` here prevented pending mobile videos from ever playing.
                                if (!this.isMobile) {
                                    e.oncanplaythrough = null;
                                } else {
                                    // On mobile leave handlers as-is; the touch handler will call play when appropriate.
                                }
                                i(n);
                            } else {
                                n.size = new Y.a(1, 1);
                                e.oncanplaythrough = function() {
                                    n.size = new Y.a(n.image.videoWidth / 2, n.image.videoHeight / 2);
                                    n.needsUpdate = !0;
                                    e.oncanplaythrough = null;
                                };
                            }

                            // Configure video element to autoplay in-place where possible
                            try {
                                if (e) {
                                    try { e.loop = true; } catch (err) {}
                                    try { e.muted = true; } catch (err) {}
                                    try { e.playsInline = true; } catch (err) {}
                                    try { e.setAttribute && e.setAttribute('playsinline', ''); } catch (err) {}
                                    try { e.preload = 'auto'; } catch (err) {}
                                    try {
                                        var playPromise = e.play && e.play();
                                        if (playPromise && playPromise.then) playPromise.catch(function() {});
                                    } catch (err) {}
                                }
                            } catch (err) {}

                            this.assets.textures[t] || (this.assets.textures[t] = {}), this.assets.textures[t][o] = n
                        }
                    }]), e
                }(),
                ne = o("dt5g"),
                ae = o("9odl"),
                re = o.n(ae),
                se = o("Li5z"),
                le = o.n(se),
                ce = function(e) {
                    function t() {
                        var e, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                            timeline: timeline,
                            texture: texture,
                            data: data,
                            month: month,
                            itemIndex: itemIndex,
                            itemIndexTotal: itemIndexTotal
                        };
                        return s(this, t), e = p(this, m(t).call(this)), Object.assign(g(g(e)), o), e.create(), e
                    }
                    return d(t, e), c(t, [{
                        key: "create",
                        value: function() {
                            var e = this;
                            this.uniforms = {
                                time: {
                                    type: "f",
                                    value: 1
                                },
                                fogColor: {
                                    type: "c",
                                    value: this.timeline.scene.fog.color
                                },
                                fogNear: {
                                    type: "f",
                                    value: this.timeline.scene.fog.near
                                },
                                fogFar: {
                                    type: "f",
                                    value: this.timeline.scene.fog.far
                                },
                                texture: {
                                    type: "t",
                                    value: this.texture
                                },
                                opacity: {
                                    type: "f",
                                    value: 1
                                },
                                progress: {
                                    type: "f",
                                    value: 0
                                },
                                gradientColor: {
                                    type: "vec3",
                                    value: new W.a(1786584)
                                }
                            }, this.geometry = new q.b(1, 1);
                            // Use plain MeshBasicMaterial for all assets to remove green/gray shader effects
                            if (this.texture && this.texture.name) {
                                this.material = new X.a({
                                    map: this.texture,
                                    transparent: !0,
                                    opacity: 1
                                });
                            } else {
                                this.material = new ne.a({
                                    uniforms: this.uniforms,
                                    fragmentShader: re.a,
                                    vertexShader: le.a,
                                    fog: !0,
                                    transparent: !0
                                });
                            }
                            this.mesh = new V.a(this.geometry, this.material);
                            var scaleFactor = 1;
                            if (this.texture && this.texture.name) {
                                if (-1 !== this.texture.name.indexOf("first.jpg")) {
                                    scaleFactor = 0.5;
                                }
                                if (-1 !== this.texture.name.indexOf("y-defn.png")) {
                                    scaleFactor = 0.9;
                                }
                                // reduce beyondiamond sizes so they sit comfortably in the layout
                                if (-1 !== this.texture.name.indexOf("beyondiamond.gif")) {
                                    scaleFactor = 1.0;
                                }
                                if (-1 !== this.texture.name.indexOf("beyondiamond2.jpg")) {
                                    scaleFactor = 0.6;
                                }
                                if (-1 !== this.texture.name.indexOf("beyondiamond1.jpg")) {
                                    scaleFactor = 0.6;
                                }
                                // downscale any bangels images (ring.jpg..bangels5.webp or momkidsqaure.mp4)
                                if (-1 !== this.texture.name.indexOf("bangels")) {
                                    scaleFactor = 0.5;
                                }
                            }
                            this.mesh.scale.set(this.texture.size.x * scaleFactor, this.texture.size.y * scaleFactor, 1);
                            this.texture.onUpdate = function() {
                                e.mesh.scale.x !== e.texture.size.x * scaleFactor && e.mesh.scale.y !== e.texture.size.y * scaleFactor && (e.mesh.scale.set(e.texture.size.x * scaleFactor, e.texture.size.y * scaleFactor, 1), e.texture.onUpdate = null)
                            };
                            var t = this.itemIndexTotal % 4,
                                o = new Y.a;
                            0 == t && o.set(-350, 350), 1 == t && o.set(350, 350), 2 == t && o.set(350, -350), 3 == t && o.set(-350, -350);
                            this.align = t;
                            var zPos = -450 * this.itemIndex - 200;
                            // deeper spacing for FEB/MAR (stronger parallax / deep scroll)
                            if ("feb" === this.month) {
                                // base deep spacing for FEB
                                zPos = -1000 * this.itemIndex - 600;
                                if (this.texture && this.texture.name) {
                                    if (-1 !== this.texture.name.indexOf("party.mp4")) {
                                        zPos = -1000 * this.itemIndex - 600;
                                        o.x -= 750;
                                    }
                                    if (-1 !== this.texture.name.indexOf("first.jpg")) {
                                        // push 'first.jpg' further back to increase spacing
                                        zPos = -1100 * this.itemIndex - 800;
                                    }
                                }
                            } else if ("apr" === this.month) {
                                zPos = -1000 * this.itemIndex - 800;
                            } else if ("jun" === this.month) {
                                zPos = -1200 * this.itemIndex - 800;
                            }
                            if ("feb" === this.month && this.texture && this.texture.name) {
                                if (-1 !== this.texture.name.indexOf("momkidsqaure.mp4")) {
                                    zPos -= 600;
                                }
                                if (-1 !== this.texture.name.indexOf("momkidsqaure.mp4") || -1 !== this.texture.name.indexOf("ring.jpg") || -1 !== this.texture.name.indexOf("ear.jpg") || -1 !== this.texture.name.indexOf("neckwear.jpg") || -1 !== this.texture.name.indexOf("bracelet.jpg") || -1 !== this.texture.name.indexOf("bangels5.webp") || -1 !== this.texture.name.indexOf("bangels")) {
                                    o.x = o.x;
                                }
                                if (-1 !== this.texture.name.indexOf("first.jpg")) {
                                    o.x = 550;
                                }
                                if (-1 !== this.texture.name.indexOf("oldcouple.mp4")) {
                                    zPos -= 800;
                                    o.y -= 150;
                                }
                                if (-1 !== this.texture.name.indexOf("party.mp4")) {
                                    zPos -= 1000;
                                    
                                }
                                if (-1 !== this.texture.name.indexOf("MOMENT.png")) {
                                    zPos -= 1000;
                                }
                                if (-1 !== this.texture.name.indexOf("y.png")) {
                                    zPos -= 600;
                                    // center y.png on screen and mark static so it behaves like a hero item
                                    o.x = 0;
                                    o.y = 0;
                                    this._isStatic = true;
                                    this.timeline.yDefnItem = this;
                                }
                                
                                if (-1 !== this.texture.name.indexOf("y-defn.png") || -1 !== this.texture.name.indexOf("MOMENT.png")) {
                                    o.x = 0;
                                    o.y = 0;

                                    this._isStatic = true;
                                    this.timeline.yDefnItem = this;
                                }
                            }

                            // jun-specific overrides (position some items relative to the JUN heading)
                            if ("jun" === this.month && this.texture && this.texture.name) {
                                if (-1 !== this.texture.name.indexOf("beyondiamond1.jpg")) {
                                    // place beyondiamond1 at the top-right of the JUN heading
                                    o.x = 350;  // right
                                    o.y = 250;  // top
                                    // removed zPos override to keep original spacing
                                }
                                if (-1 !== this.texture.name.indexOf("beyondiamond.gif")) {
                                    // place beyondiamond at the top-left of the JUN heading
                                    o.x = 650; // left
                                    o.y = 350;  // top
                                    // nudge this item slightly forward (closer to camera)
                                    zPos += 600;
                                }
                                if (-1 !== this.texture.name.indexOf("beyondiamond2.jpg")) {
                                    // place beyondiamond2 at the bottom-left of the JUN heading
                                    o.x = -550; // left
                                    o.y = -450; // bottom
                                    // removed zPos override to keep original spacing
                                }
                            }
                            // special-case: place beyoncuts.png below the MAY section title
                            if ("may" === this.month && this.texture && this.texture.name && -1 !== this.texture.name.indexOf("beyoncuts.png")) {
                                o.x = 0;
                                o.y = -220;
                                // removed zPos override to keep original spacing
                            }
                            // apr-specific: nudge bangels1 slightly downward for better layout
                            if ("apr" === this.month && this.texture && this.texture.name && -1 !== this.texture.name.indexOf("ring.jpg")) {
                                o.y -= 140;
                            }
                            this.position.set(o.x, o.y, zPos);
                            this.origPos = new Y.a(o.x, o.y);
                            this.add(this.mesh);
                            this.addCaption();
                            this.timeline.itemMeshes.push(this.mesh);
                            // If this texture is a GIF, mark it so we can force updates each frame
                            if (this.texture && this.texture.name && -1 !== this.texture.name.indexOf('.gif')) {
                                this.texture.isGif = true;
                                this.timeline.gifItems = this.timeline.gifItems || [];
                                this.timeline.gifItems.push(this.texture);
                            }
                            "video" === this.texture.mediaType && this.timeline.videoItems.push(this.mesh);

                            // Add small view.png at bottom of specific assets
                            var assetsWithViewIcon = [
                                "momkidsqaure.mp4", "oldcouple.mp4", "party.mp4", "first.jpg", "y.png",
                                "ring.jpg", "ear.jpg", "neckwear.jpg", "bracelet.jpg", "pendants.jpg", "all.jpg",
                                "beyondiamond1.jpg", "beyondiamond2.jpg", "beyondiamond.gif"
                            ];

                            if (this.texture && this.texture.name) {
                                for (var i = 0; i < assetsWithViewIcon.length; i++) {
                                    if (-1 !== this.texture.name.indexOf(assetsWithViewIcon[i])) {
                                        var viewTexture = new Z.a().load("images/view.png");
                                        viewTexture.minFilter = viewTexture.magFilter = te.M;
                                        var viewMat = new X.a({
                                            map: viewTexture,
                                            transparent: !0,
                                            opacity: 1,
                                            // discard near-transparent pixels to avoid visible borders on PNGs
                                            alphaTest: 0.1,
                                            premultipliedAlpha: true,
                                            depthWrite: false
                                        });
                                        var viewGeo = new q.b(1, 1);
                                        var viewMesh = new V.a(viewGeo, viewMat);
                                        viewMesh.scale.set(70, 50, 1); // Smaller width
                                        viewMesh.position.set(0, -this.mesh.scale.y / 2 + 30, 1); // Position on bottom of surface
                                        viewMesh.isViewIcon = true; // Mark as view icon
                                        this.add(viewMesh);
                                        break; // Only add once per item
                                    }
                                }
                            }
                        }
                    }, {
                        key: "addCaption",
                        value: function() {
                            if (("" !== this.data.caption || "" !== this.data.link) && "" !== this.data.caption) {
                                var fontName = "Geom Medium_Regular";
                                // adapt caption sizing for small screens
                                var capSize = (this.timeline && this.timeline.c && this.timeline.c.size && this.timeline.c.size.w <= 768) ? 16 : 18;
                                var capLineHeight = capSize === 16 ? 22 : 25;
                                
                                if (this.data.caption.includes('\n')) {
                                    this.caption = new G.a;
                                    var lines = this.data.caption.split('\n');
                                    var totalHeight = lines.length * capLineHeight;
                                    
                                    // choose caption material: prefer y.png hero color, then feb color, then default
                                    var captionMat = this.timeline.captionTextMat;
                                    if (this.texture && this.texture.name && -1 !== this.texture.name.indexOf('y.png')) {
                                        this.timeline.yCaptionTextMat = this.timeline.yCaptionTextMat || new X.a({ color: 0xEFEAE2, transparent: !0, opacity: 1, visible: !0 });
                                        captionMat = this.timeline.yCaptionTextMat;
                                    } else if (this.month === 'feb') {
                                        this.timeline.febCaptionTextMat = this.timeline.febCaptionTextMat || new X.a({ color: 0xD30B39, transparent: !0, opacity: 1, visible: !0 });
                                        captionMat = this.timeline.febCaptionTextMat;
                                    }
                                    for (var i = 0; i < lines.length; i++) {
                                            var lineGeo = new N.a(lines[i].trim(), {
                                                font: this.timeline.assets.fonts[fontName],
                                                size: capSize,
                                                height: 0,
                                                curveSegments: 4
                                            }).center();
                                            var lineMesh = new V.a(lineGeo, captionMat);
                                            lineMesh.position.set(0, -i * capLineHeight + totalHeight / 2, 0);
                                            this.caption.add(lineMesh);
                                        }
                                    
                                    if (this.texture && this.texture.name.includes("y-defn.png")) {
                                        // Position caption to the right side for hero-style images
                                        this.caption.position.set(this.mesh.scale.x + 150, 0, 0);
                                    } else {
                                        // Default captions stay below; smaller offset on mobile
                                        var captionOffset = (this.timeline && this.timeline.c && this.timeline.c.size && this.timeline.c.size.w <= 768) ? -this.mesh.scale.y / 2 - 30 : -this.mesh.scale.y / 2 - 50;
                                        this.caption.position.set(0, captionOffset, 0);
                                    }

                                    this.caption.visible = !0;
                                    this.add(this.caption);
                                } else {
                                    var e = new N.a(this.data.caption, {
                                        font: this.timeline.assets.fonts[fontName],
                                        size: capSize,
                                        height: 0,
                                        curveSegments: 4
                                    }).center();
                                    var singleCaptionMat = this.timeline.captionTextMat;
                                    if (this.texture && this.texture.name && -1 !== this.texture.name.indexOf('y.png')) {
                                        this.timeline.yCaptionTextMat = this.timeline.yCaptionTextMat || new X.a({ color: 0xEFEAE2, transparent: !0, opacity: 1, visible: !0 });
                                        singleCaptionMat = this.timeline.yCaptionTextMat;
                                    } else if (this.month === 'feb') {
                                        this.timeline.febCaptionTextMat = this.timeline.febCaptionTextMat || new X.a({ color: 0xD30B39, transparent: !0, opacity: 1, visible: !0 });
                                        singleCaptionMat = this.timeline.febCaptionTextMat;
                                    }
                                    var singleCaptionOffset = (this.timeline && this.timeline.c && this.timeline.c.size && this.timeline.c.size.w <= 768) ? -this.mesh.scale.y / 2 - 30 : -this.mesh.scale.y / 2 - 50;
                                    this.caption = new V.a(e, singleCaptionMat), this.caption.position.set(0, singleCaptionOffset, 0), this.caption.visible = !0, this.add(this.caption)
                                }
                            }
                        }
                    }]), t
                }(G.a),
                pe = o("x3HC"),
                me = o.n(pe),
                de = function(e) {
                    function t() {
                        var e, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                            timeline: timeline,
                            section: section
                        };
                        return f(this, t), e = k(this, w(t).call(this)), Object.assign(_(_(e)), o), "intro" === e.section ? e.createIntroSection() : "end" === e.section ? e.createEndSection() : "contact" === e.section ? e.createContactSection() : e.create(), e
                    }
                    return C(t, e), v(t, [{
                        key: "create",
                        value: function() {
                            if (this.section === "jan") {
                                this.addBottomCTA();
                            } else {
                                var fontKey = "Schnyder L";
                                if ("feb" === this.section || "apr" === this.section || "may" === this.section || "jun" === this.section) fontKey = "Oooh Baby";
                                if ("feb" === this.section) fontKey = "Oooh Baby";

                                var _loader = new Z.a();
                                // If a heading image is provided for this month, use it
                                if (this.timeline.months[this.section].headingImage) {
                                    var headingGeoImg = new q.b(1, 1);
                                    var headingMatImg = new X.a({ transparent: !0, opacity: 1 });
                                    var headingMeshImg = new V.a(headingGeoImg, headingMatImg);
                                    // reasonable placeholder size until image loads
                                    headingMeshImg.scale.set(800, 200, 1);
                                    // scale factor (can be overridden per-month via headingScaleFactor)
                                    var headingScaleFactor = this.timeline.months[this.section].headingScaleFactor || 0.5;
                                    // place the heading image further back so items open in front of it
                                    var headingZImg = "apr" === this.section ? -100 : -900;
                                    headingMeshImg.position.set(this.timeline.months[this.section].offset || 0, 0, headingZImg);
                                    this.add(headingMeshImg);
                                    // keep a reference on the section so timeline can toggle visibility
                                    this.headingMesh = headingMeshImg;

                                    _loader.load(this.timeline.months[this.section].headingImage, function(tex) {
                                        try {
                                            tex.magFilter = tex.minFilter = te.M;
                                            headingMeshImg.material.map = tex;
                                            headingMeshImg.material.needsUpdate = !0;
                                            // Use the image's natural dimensions (original pixel size)
                                            var w = (tex.image && (tex.image.naturalWidth || tex.image.width)) || 800;
                                            var h = (tex.image && (tex.image.naturalHeight || tex.image.height)) || 200;
                                            // apply the reduction factor so the image is smaller than original
                                            var finalW = Math.round(w * headingScaleFactor);
                                            var finalH = Math.round(h * headingScaleFactor);
                                            headingMeshImg.scale.set(finalW, finalH, 1);
                                        } catch (err) {}
                                    });
                                } else if (this.section === "feb") {
                                    // For FEB, fallback to the existing image behavior
                                    var headingGeoImg = new q.b(1, 1);
                                    var headingMatImg = new X.a({ transparent: !0, opacity: 1 });
                                    var headingMeshImg = new V.a(headingGeoImg, headingMatImg);
                                    headingMeshImg.scale.set(800, 200, 1);
                                    var headingScaleFactor = 0.5;
                                    var headingZImg = -900;
                                    headingMeshImg.position.set(this.timeline.months[this.section].offset || 0, 0, headingZImg);
                                    this.add(headingMeshImg);
                                    this.headingMesh = headingMeshImg;

                                    _loader.load("assets/feb/Our_Belief.png", function(tex) {
                                        try {
                                            tex.magFilter = tex.minFilter = te.M;
                                            headingMeshImg.material.map = tex;
                                            headingMeshImg.material.needsUpdate = !0;
                                            var w = (tex.image && (tex.image.naturalWidth || tex.image.width)) || 800;
                                            var h = (tex.image && (tex.image.naturalHeight || tex.image.height)) || 200;
                                            var finalW = Math.round(w * headingScaleFactor);
                                            var finalH = Math.round(h * headingScaleFactor);
                                            headingMeshImg.scale.set(finalW, finalH, 1);
                                        } catch (err) {}
                                    });
                                } else {
                                    var e = new N.a(this.timeline.months[this.section].name, {
                                            font: this.timeline.assets.fonts[fontKey],
                                            size: 200,
                                            height: 0,
                                            curveSegments: 10
                                        }).center(),
                                        t = new V.a(e, this.timeline.textMat);
                                    // default heading depth
                                    var headingZ = -900;
                                    var monthName = (this.timeline.months[this.section].name || "").trim();
                                    if (monthName !== "") headingZ = -100;
                                    t.position.set(this.timeline.months[this.section].offset || 0, 0, headingZ);
                                    this.add(t);
                                }

                                // Add descriptive paragraph for June below the heading
                                if ("jun" === this.section) {
                                    var para1 = new N.a("Lab diamonds are created by replicating the same heat and pressure found deep within the Earth.", {
                                        font: this.timeline.assets.fonts["Geom Light_Regular"],
                                        size: 28,
                                        height: 0,
                                        curveSegments: 6
                                    }).center();
                                    var paraMesh1 = new V.a(para1, this.timeline.contactTextMat);
                                    paraMesh1.position.set(this.timeline.months[this.section].offset || 0, -220, -600);
                                    this.add(paraMesh1);

                                    var para2 = new N.a("Advanced technology grows pure carbon crystals layer by layer into real diamonds.", {
                                        font: this.timeline.assets.fonts["Geom Light_Regular"],
                                        size: 28,
                                        height: 0,
                                        curveSegments: 6
                                    }).center();
                                    var paraMesh2 = new V.a(para2, this.timeline.contactTextMat);
                                    paraMesh2.position.set(this.timeline.months[this.section].offset || 0, -260, -600);
                                    this.add(paraMesh2);
                                }
                            }
                        }
                    }, {
                        key: "addBottomCTA",
                        value: function() {
                            this.ctaBadge = new G.a;
                            var t = new X.a({ color: 16777215, transparent: !0, opacity: 0 }),
                                p = new q.b(1, 1);
                            this.ctaCircle = new V.a(p, t);
                            this.ctaCircle.scale.set(180, 180, 1);
                            this.ctaBadge.add(this.ctaCircle);
                            
                            var d = new N.a("", {
                                font: this.timeline.assets.fonts["Gemola"],
                                size: 16,
                                height: 0,
                                curveSegments: 6
                            });
                            d.center();
                            var u = new V.a(d, this.timeline.darkTextMat);
                            u.position.set(0, 0, 1);
                            this.ctaBadge.add(u);
                            this.ctaBadge.position.set(0, 0, 50);
                            this.ctaBadge.position.y = 600 > this.timeline.c.size.w ? -this.timeline.c.size.h + 90 : -this.timeline.c.size.h / 2 + 90;
                            600 > this.timeline.c.size.w && this.ctaBadge.scale.set(1.5, 1.5, 1);
                            
                            var ctaBox = new V.a(new q.a(200, 60), new X.a({
                                alphaTest: 0,
                                visible: !1
                            }));
                            ctaBox.position.set(0, 0, 2);
                            ctaBox.onClick = function() {
                                window.location.href = "/about";
                            };
                            this.ctaBadge.add(ctaBox);
                            this.timeline.itemMeshes.push(ctaBox);
                            
                            this.add(this.ctaBadge);
                        }
                    }, {
                        key: "createIntroSection",
                        value: function() {
                            var textGeometry = new q.b(1, 1),
                                textMesh, textImg;

                            var _loader = new Z.a();
                            var placeholderTex = _loader.load("assets/intro/its_time_to_go.png", function(loadedTex) {
                                try {
                                    loadedTex.magFilter = loadedTex.minFilter = te.M;
                                    var iw = loadedTex.image && loadedTex.image.width ? loadedTex.image.width : 900;
                                    var ih = loadedTex.image && loadedTex.image.height ? loadedTex.image.height : 125;
                                    var desiredW = iw;
                                    var desiredH = ih;
                                    if (textMesh) textMesh.scale.set(desiredW, desiredH, 1);
                                    if (textImg) { textImg.map = loadedTex; textImg.needsUpdate = true; }
                                } catch (err) {
                                    if (textMesh) textMesh.scale.set(900, 125, 1);
                                }
                            });

                            // set filters on the placeholder as well
                            placeholderTex.magFilter = placeholderTex.minFilter = te.M;

                            textImg = new X.a({ map: placeholderTex, transparent: !0 });
                            textMesh = new V.a(textGeometry, textImg);
                            // reasonable initial size until the real image loads (use placeholder image size if available)
                            if (placeholderTex && placeholderTex.image && placeholderTex.image.width && placeholderTex.image.height) {
                                textMesh.scale.set(placeholderTex.image.width, placeholderTex.image.height, 1);
                            } else {
                                textMesh.scale.set(900, 125, 1);
                            }
                            textMesh.position.set(0, 0, -250);
                            this.add(textMesh)
                        }
                    }, {
                        key: "addIntroBadge",
                        value: function() {
                            this.badge = new G.a;
                            var t = new X.a({ color: 16777215, transparent: !0, opacity: 0 }),
                                o = new q.b(1, 1);
                            this.circle = new V.a(o, t), this.circle.scale.set(200, 200, 1), this.badge.add(this.circle), this.badge.position.set(0, 0, 50), this.badge.position.y = 600 > this.timeline.c.size.w ? -this.timeline.c.size.h + 90 : -this.timeline.c.size.h / 2 + 90, 600 > this.timeline.c.size.w && this.badge.scale.set(1.5, 1.5, 1), this.add(this.badge)
                        }
                    }, {
                        key: "createEndSection",
                        value: function() {
                            var endTexture = new Z.a().load("assets/end/end.png");
                            endTexture.magFilter = endTexture.minFilter = te.M;
                            var endMat = new X.a({ map: endTexture, transparent: !0 });
                            var endGeo = new q.b(1, 1);
                            var endMesh = new V.a(endGeo, endMat);
                            endMesh.scale.set(625, 400, 1);
                            endMesh.position.set(0, 150, -300);
                            this.add(endMesh);

                        }
                    }, {
                        key: "createContactSection",
                        value: function() {}
                    }]), t
                }(G.a),
                ue = o("P3Nu"),
                ge = o.n(ue),
                he = {
                    intro: {
                        textColor: 12522019,
                        outlineTextColor: 12522019,
                        bgColor: 15723235,
                        tintColor: 1786584
                    },
                    feb: {
                        bgColor: 15723235,
                        tintColor: 4360324,
                    },
                    apr: {
                        headingImage: "assets/apr/beyonlimits.png",
                        bgColor: 12520995,
                        tintColor: 75060,
                        offset: -80
                    },
                    may: {
                        headingImage: "assets/may/beyoncut.png",
                        headingScaleFactor: 0.3,
                        bgColor: 2894892,
                        tintColor: 3561373
                    },
                    jun: {
                        headingImage: "assets/jun/beyondiamonds.png",
                        headingScaleFactor: 0.3,
                        bgColor: 12520995,
                        tintColor: 3694933
                    },
                    end: {
                        textColor: 15566236,
                        outlineTextColor: 12170472,
                        bgColor: 15723235,
                        tintColor: 12170472
                    }
                },
                fe = {
                    intro: [ "its_time_to_go.png"],
                    feb: [ "momkidsqaure.mp4", "oldcouple.mp4", "party.mp4", "MOMENT.png", "first.jpg", "y.png"],
                    apr: [ "ring.jpg", "ear.jpg", "neckwear.jpg", "bracelet.jpg", "pendants.jpg", "all.jpg"],
                    may: [],
                    jun: ["beyondiamond1.jpg", "beyondiamond2.jpg", "beyondiamond.gif"],
              },
                be = {
                    jan: {
                    },
                    feb: {
                        "momkidsqaure.mp4": {
                            caption: "Concept work for the Get The Picture project for IAT",
                            link: "https://www.getthepicture.tours/"
                        },
                        "oldcouple.mp4": {
                            caption: "Entries for the Spaced competition",
                            link: ""
                        },
                        "party.mp4": {
                            caption: "Image hover effect experimentation",
                            link: "https://dribbble.com/shots/4228572-Photo-Gallery-Hover-Idea"
                        },
                        "first.jpg": {
                            caption: "",
                            link: ""
                        },
                        "MOMENT.png": {
                            caption: "",
                            link: ""
                        },
                        "y.png": {
                            caption: "YOUR HANDS RISE\n TO THE SHAPE OF YOUR FREEDOM",
                            link: ""
                        }
                        
                    },
                    apr: {
                        "ring.jpg": {
                            caption: "RINGS",
                            link: ""
                        },
                        "ear.jpg": {
                            caption: "EARRINGS",
                            link: "https://dribbble.com/shots/4486525-Wandr-Beaches-Header-Transition"
                        },
                        "neckwear.jpg": {
                            caption: "NECKWEARS",
                            link: "https://dribbble.com/shots/4477353-Etina-Web-Concept"
                        },
                        "bracelet.jpg": {
                            caption: "BANGLES & BRACELETS",
                            link: "https://dribbble.com/shots/4465601-RayBan-Never-Hide-concept"
                        },
                        "pendants.jpg": {
                            caption: "PENDANTS",
                            link: "https://codepen.io/ashthornton/full/KRQbMO/"
                        },
                        "all.jpg": {
                            caption: "ALL",
                            link: "https://dribbble.com/shots/4533476-Eureka-Moment"
                        }
                    },
                    may: {
                    },
                    jun: {
                        "beyondiamond1.jpg": {
                            caption: "Jack Harvatt joined our design team",
                            link: ""
                        },
                        "beyondiamond2.jpg": {
                            caption: "Jake came on board as a back-end developer",
                            link: ""
                        },
                        "beyondiamond.gif": {
                            caption: "Close up of the Jekka bottle for 6 O'Clock Gin",
                            link: ""
                        }
                    }
                },
                ve = function() {
                    function e() {
                        S(this, e), this.setConfig(), this.init(), window.assets ? (console.log("cached assets"), this.assets = window.assets, this.createTimeline()) : (this.loadAssets(), console.log("reload assets"))
                    }
                    var t = Math.atan;
                    return M(e, [{
                        key: "setConfig",
                        value: function() {
                            this.dom = {
                                cursor: document.querySelector(".cursor"),
                                compass: document.querySelector(".compass"),
                                compassSvg: document.querySelector(".compass svg"),
                                mainSvgs: document.querySelectorAll("main :not(.compass) svg"),
                                cursorSvgs: document.querySelectorAll(".cursor svg")
                            }, this.c = {
                                dpr: 2 <= window.devicePixelRatio ? 2 : 1,
                                startTime: Date.now(),
                                size: {
                                    w: window.innerWidth,
                                    h: window.innerHeight
                                },
                                scrollPos: 0,
                                scrolling: !1,
                                allowScrolling: !0,
                                autoMoveSpeed: 0,
                                isMobile: this.isMobile(),
                                holdingMouseDown: !1,
                                touchEnabled: "ontouchstart" in window
                            }, this.c.globalScale = Math.min(1, this.c.size.w / 1400), this.c.touchEnabled ? document.documentElement.classList.add("touch-enabled") : document.documentElement.classList.add("enable-cursor"), this.assetList = fe, this.assetList.intro = fe.intro || ["BEYONLOGO.png", "its_time_to_go.png"], this.assetList.end = fe.end || ["wave.mp4"], this.assetData = be, this.timelineEntered = !1, this.activeMonth = "intro", this.months = he, this.monthPositions = {}, this.remainingMonths = [], this.enableLoader = !0, this.gyroEnabled = !1, this.orientation = {
                                gamma: 0,
                                beta: 0
                            }, this.easterEgg = this.easterEgg.bind(this), new ge.a(this.easterEgg), this.easterEggEnabled = !1, this.enableLoader || (document.querySelector(".loading").style.display = "none")
                        
                            // On mobile, try to play any pending videos on first user gesture
                            try {
                                var _tryPlayPendingVideos = function() {
                                    try {
                                        window._beyonPendingVideos = window._beyonPendingVideos || [];
                                        for (var _i = 0; _i < window._beyonPendingVideos.length; _i++) {
                                            var v = window._beyonPendingVideos[_i];
                                            try {
                                                v.muted = true;
                                                v.playsInline = true;
                                                v.setAttribute && v.setAttribute('playsinline', '');
                                                var p = v.play && v.play();
                                                if (p && p.then) p.catch(function() {});
                                            } catch (err) {}
                                        }
                                    } catch (err) {}
                                    window.removeEventListener('touchstart', _tryPlayPendingVideos);
                                    window.removeEventListener('touchend', _tryPlayPendingVideos);
                                };
                                if (this.c && this.c.isMobile) {
                                    window.addEventListener('touchstart', _tryPlayPendingVideos, { passive: true });
                                    window.addEventListener('touchend', _tryPlayPendingVideos, { passive: true });
                                }
                            } catch (err) {}
                        }
                    }, {
                        key: "isMobile",
                        value: function() {
                            var e = navigator.userAgent || navigator.vendor || window.opera;
                            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
                        }
                    }, {
                        key: "loadAssets",
                        value: function() {
                            var e = this,
                                t = new ie(this.c.isMobile);
                            this.enableLoader ? setTimeout(function() {
                                t.load(e.assetList, e.renderer).then(function(t) {
                                    e.assets = t, console.log("ASSETS LOADED"), e.createTimeline()
                                })
                            }, 2e3) : t.load(this.assetList, this.renderer).then(function(t) {
                                e.assets = t, console.log("ASSETS LOADED"), e.createTimeline()
                            })
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var e = this;
                            this.renderer = new I.a({
                                antialias: !0,
                                alpha: !0
                            }), this.renderer.setPixelRatio(this.c.dpr), this.renderer.setSize(this.c.size.w, this.c.size.h), document.body.appendChild(this.renderer.domElement), this.preventPullToRefresh(), this.scene = new D.a,
                            // On mobile: avoid visible fog/tint by using a neutral (white) color and effectively-disabling fog
                            // via very large near/far values. Keep `scene.background`/`scene.fog` objects so animations won't throw.
                            this.c.isMobile ? (this.scene.background = new W.a(16777215), this.scene.fog = new F.a(16777215, 1e9, 1e9), this.renderer.setClearColor(0, 0)) : (this.scene.background = new W.a(15722211), this.scene.fog = new F.a(15722211, 1400, 2e3)),
                            this.scene.scale.set(this.c.globalScale, this.c.globalScale, 1);
                            var o = 800,
                                i = 180 * (2 * t(this.c.size.h / 2 / o)) / P;
                            this.camera = new A.a(i, this.c.size.w / this.c.size.h, 1, 2e3), this.camera.position.set(0, this.enableLoader ? 2e3 : 0, o), this.raycaster = new B.a, this.raycaster.near = this.camera.near, this.raycaster.far = this.camera.far, this.intersects = [], this.linkIntersect = [], this.whooshIntersects = [], this.frustum = new H.a, this.cameraViewProjectionMatrix = new U.a, this.mouse = new Y.a, this.mousePerspective = new Y.a, window.addEventListener("devicemotion", function(t) {
                                (t.rotationRate.alpha || t.rotationRate.beta || t.rotationRate.gamma) && (e.gyroEnabled = !0)
                            })
                        }
                    }, {
                        key: "createTimeline",
                        value: function() {
                            var e = this;
                            this.timeline = new G.a, this.scene.add(this.timeline), this.textMat = new X.a({
                                color: 1786584,
                                transparent: !0
                            }),
                            // show captions by default: visible material with full opacity
                            this.captionTextMat = new X.a({
                                color: 1786584,
                                transparent: !0,
                                opacity: 1,
                                visible: !0
                            }), this.linkUnderlineMat = new X.a({
                                color: 1786584,
                                transparent: !0,
                                opacity: 0,
                                visible: !1
                            }), this.textOutlineMat = new X.a({
                                color: 12522019,
                                transparent: !0
                            }), this.contactTextMat = new X.a({
                                color: 16777215
                            }), this.redTextMat = new X.a({
                                color: 12521763,
                                transparent: !0
                            }), this.darkTextMat = new X.a({
                                color: 2895660,
                                transparent: !0
                            }), this.sections = {}, this.items = {}, this.itemMeshes = [], this.videoItems = [];
                            var t = 0,
                                o = 0,
                                i = function(i) {
                                    if (e.sections[i] = new de({
                                            timeline: timeline,
                                            section: i
                                        }), "intro" !== i && "end" !== i) {
                                        var n, a = 0;
                                        e.assetList[i].forEach(function(o) {
                                            n = "".concat(i, "/").concat(o), e.items[n] = new ce({
                                                timeline: e,
                                                texture: e.assets.textures[i][o],
                                                data: e.assetData[i][o],
                                                month: i,
                                                itemIndex: a,
                                                itemIndexTotal: t
                                            }), e.sections[i].add(e.items[n]), a++, t++
                                        })
                                    }
                                    var r = new R.a().setFromObject(e.sections[i]);
                                    e.sections[i].position.z = o;
                                    // default month position offset for scroll targeting
                                    // extend FEB and APR so they occupy more timeline depth
                                    if (i === "feb") {
                                        e.monthPositions[i] = o + 5600;
                                    } else if (i === "apr") {
                                        e.monthPositions[i] = o + 2500;
                                    } else {
                                        e.monthPositions[i] = o + 1100;
                                    }
                                    var s = 800;
                                    if ("intro" === i) s = 700;
                                    if ("dec" === i) s = 1800;
                                    // increase FEB spacing so the section is longer/deeper
                                    if ("feb" === i) s += 1200;
                                    // keep APR gap tuned
                                    if ("apr" === i) s += 0;
                                    if ("may" === i) s += 800;
                                    o += r.min.z - s;
                                    e.timeline.add(e.sections[i]);
                                    "end" === i && (e.stopScrollPos = e.sections[i].position.z)
                                };
                            for (var n in this.months) i(n);
                            // DEBUG: log computed monthPositions for verification
                            try { console.log('monthPositions', e.monthPositions, 'apr->', e.monthPositions.apr); } catch (err) {}
                            try {
                                var febDefnKey = "feb/y-defn.png";
                                var yDefnItem = this.items[febDefnKey] || this.items["feb/MOMENT.png"];
                                if (yDefnItem) {
                                    if (J && J.a && typeof J.a.timeline === 'function') {
                                        var t3 = J.a.timeline({ delay: 1 });
                                        if (yDefnItem.mesh && yDefnItem.mesh.material) {
                                            var mat2 = yDefnItem.mesh.material;
                                            if (mat2.uniforms) {
                                                mat2.uniforms.opacity.value = 0;
                                                t3.to(mat2.uniforms.opacity, {
                                                    value: 1,
                                                    duration: 1.6,
                                                    ease: "power2.out"
                                                }, 0).from(yDefnItem.mesh.position, {
                                                    y: yDefnItem.mesh.position.y - 0.9,
                                                    duration: 1.6,
                                                    ease: "power2.out"
                                                }, 0);
                                            } else {
                                                t3.to(yDefnItem.material, {
                                                    opacity: 1,
                                                    duration: 1.6,
                                                    ease: "power2.out"
                                                }, 0).from(yDefnItem.mesh.position, {
                                                    y: yDefnItem.mesh.position.y - 0.9,
                                                    duration: 1.6,
                                                    ease: "power2.out"
                                                }, 0);
                                            }
                                        }
                                    } else {
                                        // GSAP timeline not available — fallback to simple tweens
                                        if (yDefnItem.mesh && yDefnItem.mesh.material) {
                                            var mat2 = yDefnItem.mesh.material;
                                            try {
                                                if (mat2.uniforms) {
                                                    mat2.uniforms.opacity.value = 0;
                                                    J.a.to(mat2.uniforms.opacity, {
                                                        value: 1,
                                                        duration: 1.6,
                                                        ease: "power2.out",
                                                        delay: 0
                                                    });
                                                    J.a.to(yDefnItem.mesh.position, {
                                                        y: yDefnItem.mesh.position.y - 0.9,
                                                        duration: 1.6,
                                                        ease: "power2.out",
                                                        delay: 0
                                                    });
                                                } else {
                                                    J.a.to(yDefnItem.material, {
                                                        opacity: 1,
                                                        duration: 1.6,
                                                        ease: "power2.out",
                                                        delay: 0
                                                    });
                                                    J.a.to(yDefnItem.mesh.position, {
                                                        y: yDefnItem.mesh.position.y - 0.9,
                                                        duration: 1.6,
                                                        ease: "power2.out",
                                                        delay: 0
                                                    });
                                                }
                                            } catch (err) {
                                                // if J.a.to is unavailable, apply final state immediately
                                                if (mat2.uniforms) mat2.uniforms.opacity.value = 1; else yDefnItem.material.opacity = 1;
                                            }
                                        }
                                    }
                                }
                            } catch (err) {
                                console.warn('Feb hero animation setup failed', err);
                            }
                            this.videoCount = this.videoItems.length, this.contactSection = new de({
                                timeline: timeline,
                                section: "contact"
                            }), this.contactSection.visible = !1, this.scene.add(this.contactSection), this.linkGroup = new G.a;
                            var a = new N.a("SEE MORE", {
                                font: this.assets.fonts["SuisseIntl-Bold"],
                                size: 6,
                                height: 0,
                                curveSegments: 4
                            }).center();
                            this.link = new V.a(a, this.captionTextMat), this.linkUnderline = new V.a(new q.a(45, 1), this.linkUnderlineMat), this.linkUnderline.position.set(0, -10, 0), this.linkBox = new V.a(new q.a(70, 20), new X.a({
                                alphaTest: 0,
                                visible: !1
                            })), this.linkGroup.visible = !1, this.linkGroup.add(this.link), this.linkGroup.add(this.linkUnderline), this.linkGroup.add(this.linkBox), this.scene.add(this.linkGroup), console.log("RENDER"), this.animate(), this.initCursorListeners(), this.initListeners(), document.body.classList.add("ready")
                        }
                    }, {
                        key: "moveToStart",
                        value: function() {
                            var e = this;
                            J.a.to(this.camera.position, 2, {
                                y: 0,
                                ease: "Expo.easeInOut"
                            }), J.a.to(".loading", 2, {
                                y: "-100%",
                                ease: "Expo.easeInOut",
                                onComplete: function() {
                                    document.querySelector(".loading").style.display = "none", e.timelineEntered = !0
                                }
                            }), J.a.to([".logo", ".social"], 2, {
                                y: 0,
                                delay: 1,
                                ease: "Expo.easeInOut"
                            }), J.a.to([".left", ".right"], 2, {
                                x: 0,
                                delay: 1,
                                ease: "Expo.easeInOut"
                            }), this.gyroEnabled && J.a.to(this.dom.compass, 2, {
                                y: 0,
                                delay: 1,
                                ease: "Expo.easeInOut"
                            })
                        }
                    }, {
                        key: "openItem",
                        value: function(e) {
                            var t = this;
                            try {
                                if (e && e.texture && e.texture.name && -1 !== e.texture.name.indexOf("y-defn.png")) {
                                    var targetX = e._movedLeft ? 0 : -350;
                                    e._isStatic = !e._movedLeft; // Set static when moving left
                                    this.yDefnItem = e; // Store reference for animate loop
                                    this.itemAnimating = !0;
                                    
                                    if (e._movedLeft) {
                                        try {
                                            var closeEvt = new CustomEvent('ydefn:toggled', { detail: { visible: false } });
                                            document.dispatchEvent(closeEvt);
                                        } catch (evtErr) {}
                                    }
                                    
                                    J.a.to(e.position, 1.2, {
                                        x: targetX,
                                        ease: "Expo.easeInOut",
                                        onComplete: function() {
                                            e._movedLeft = !e._movedLeft;
                                            t.itemAnimating = !1;
                                            e.origPos.x = targetX;
                                            t.dom.cursor.dataset.cursor = "pointer";
                                            try {
                                                // show/hide explanatory text to the right when moved left
                                                // We no longer render the hero text inside the 3D scene to avoid duplicate text.
                                                // The page-level DOM panel will present the same content. Ensure any existing
                                                // 3D hero text (from previous versions) is hidden.
                                                try {
                                                    if (e._heroText) {
                                                        try { e.remove(e._heroText); } catch (remErr) {}
                                                        e._heroText = null;
                                                    }
                                                } catch (hideErr) {}
                                            } catch (ex) {
                                                console.warn('hero text failed', ex);
                                            }
                                                    try {
                                                        // Dispatch DOM event so page UI can react (show/hide explanatory panel)
                                                        var detail = { visible: !!e._movedLeft };
                                                        try {
                                                            if (t && t.camera && t.renderer && e && e.mesh) {
                                                                // get world position and project to screen
                                                                try {
                                                                    var wp = new e.mesh.position.constructor();
                                                                    if (e.mesh.getWorldPosition) e.mesh.getWorldPosition(wp); else wp.copy(e.mesh.position || new e.mesh.position.constructor());
                                                                    wp.project(t.camera);
                                                                    var sx = (wp.x * .5 + .5) * (t.c && t.c.size && t.c.size.w ? t.c.size.w : window.innerWidth);
                                                                    var sy = (-wp.y * .5 + .5) * (t.c && t.c.size && t.c.size.h ? t.c.size.h : window.innerHeight);
                                                                    detail.x = Math.round(sx);
                                                                    detail.y = Math.round(sy);
                                                                } catch (projErr) {}
                                                            }
                                                        } catch (innerErr) {}
                                                        var ev = new CustomEvent('ydefn:toggled', { detail: detail });
                                                        document.dispatchEvent(ev);
                                                    } catch (evtErr) {}
                                        }
                                    });
                                    return;
                                }
                            } catch (err) {
                                console.warn('y-defn toggle failed', err);
                            }

                            if (this.itemAnimating = !0, this.itemOpen = e, this.origTimelinePos = this.timeline.position.z, this.c.allowScrolling = !1, this.c.isMobile) {
                                var o = e.mesh.material.uniforms.texture.value;
                                "video" === o.mediaType && (o.image.src = "assets/" + o.name, o.image.play())
                            }
                            // Hide view icon when opening item
                            if (e.children) {
                                for (var vi = 0; vi < e.children.length; vi++) {
                                    if (e.children[vi].isViewIcon) {
                                        e.children[vi].visible = false;
                                        break;
                                    }
                                }
                            }
                            // hide the section heading (e.g., FEB big image) so opened item appears in front
                            try {
                                var _section = this.sections[e.month];
                                if (_section && _section.headingMesh) _section.headingMesh.visible = false;
                            } catch (hideErr) {}
                            var i = this.sections[this.activeMonth].position.z;
                            e.month !== this.activeMonth && (i = this.sections[this.remainingMonths[this.remainingMonths.length - 2]].position.z), J.a.to(e.position, 1.5, {
                                x: 0,
                                y: 0,
                                ease: "Expo.easeInOut",
                                onComplete: function() {
                                    t.itemAnimating = !1, t.dom.cursor.dataset.cursor = "cross"
                                }
                            }), J.a.to(e.uniforms.progress, 1.5, {
                                value: 1,
                                ease: "Expo.easeInOut"
                            }), J.a.to(this.timeline.position, 1.5, {
                                z: -(i - -e.position.z) + (.5 > this.c.globalScale ? 450 : 300),
                                ease: "Expo.easeInOut"
                            }), J.a.to(this.textMat, 1, {
                                opacity: 0,
                                ease: "Expo.easeInOut",
                                onComplete: function() {
                                    t.textMat.visible = !1
                                }
                            }), J.a.to(this.captionTextMat, 2, {
                                opacity: 1,
                                ease: "Expo.easeInOut",
                                delay: .3,
                                onStart: function() {
                                    t.captionTextMat.visible = !0
                                }
                            }), J.a.to(this.linkUnderlineMat, 2, {
                                opacity: .4,
                                ease: "Expo.easeInOut",
                                delay: .3,
                                onStart: function() {
                                    t.linkUnderlineMat.visible = !0
                                }
                            }), e.caption && J.a.fromTo(e.caption.position, 2, {
                                z: -100
                            }, {
                                z: 0,
                                delay: .2,
                                ease: "Expo.easeInOut",
                                onStart: function() {
                                    e.caption.visible = !0
                                }
                            });

                            // Only assign the clickable link box when the opened item has a link
                            // and is NOT the MOMENT.png hero image (we want MOMENT.png non-clickable)
                            if (e.data.link && !(e.texture && e.texture.name && e.texture.name.indexOf("MOMENT.png") !== -1)) {
                                this.linkBox.onClick = function() {
                                    window.open(e.data.link, "_blank")
                                };
                                this.linkGroup.position.y = e.caption ? e.caption.position.y - 40 : -e.mesh.scale.y / 2 - 50;
                                J.a.fromTo(this.linkGroup.position, 2, {
                                    z: 0
                                }, {
                                    z: .5 > this.c.globalScale ? 450 : 300,
                                    delay: .3,
                                    ease: "Expo.easeInOut",
                                    onStart: function() {
                                        t.linkGroup.visible = !0
                                    }
                                });
                            }
                            var n = new Y.a;
                            for (var a in this.items) 0 === this.items[a].align && n.set(-700, 700), 1 === this.items[a].align && n.set(700, 700), 2 === this.items[a].align && n.set(700, -700), 3 === this.items[a].align && n.set(-700, -700), this.items[a] === e || (J.a.to(this.items[a].material.uniforms.opacity, 1.3, {
                                value: 0,
                                ease: "Expo.easeInOut"
                            }), J.a.to(this.items[a].position, 1.3, {
                                x: n.x,
                                y: n.y,
                                ease: "Expo.easeInOut"
                            }))
                        }
                    }, {
                        key: "closeItem",
                        value: function() {
                            var e = this;
                            if (!this.itemAnimating && this.itemOpen) {
                                // remember the opened item's month so we can restore heading visibility
                                var _openedMonth = this.itemOpen.month;
                                if (this.itemAnimating = !0, this.dom.cursor.dataset.cursor = "pointer", this.c.isMobile) {
                                    var t = this.itemOpen.mesh.material.uniforms.texture.value;
                                    "video" === t.mediaType && (t.image.pause(), t.image.src = "", t.image.load())
                                }
                                for (var o in J.a.to(this.itemOpen.position, 1.5, {
                                        x: this.itemOpen.origPos.x,
                                        y: this.itemOpen.origPos.y,
                                        ease: "Expo.easeInOut"
                                    }), J.a.to(this.timeline.position, 1.5, {
                                        z: this.origTimelinePos,
                                        ease: "Expo.easeInOut",
                                        onComplete: function() {
                                            try {
                                                if (e.sections[_openedMonth] && e.sections[_openedMonth].headingMesh) e.sections[_openedMonth].headingMesh.visible = true;
                                            } catch (restoreErr) {}
                                            e.c.allowScrolling = !0, e.itemOpen = !1, e.itemAnimating = !1
                                        }
                                    }), J.a.to(this.itemOpen.uniforms.progress, 1.5, {
                                        value: 0,
                                        ease: "Expo.easeInOut"
                                    }), J.a.to(this.textMat, 1.5, {
                                        opacity: 1,
                                        ease: "Expo.easeInOut",
                                        onStart: function() {
                                            e.textMat.visible = !0
                                        }
                                    }), J.a.to([this.captionTextMat, this.linkUnderlineMat], .4, {
                                        opacity: 0,
                                        ease: "Expo.easeInOut",
                                        onComplete: function() {
                                            e.captionTextMat.visible = !1, e.linkUnderlineMat.visible = !1, e.itemOpen.caption && (e.itemOpen.caption.visible = !1), e.linkGroup.visible = !1
                                        }
                                    }), this.items) this.items[o].active || (J.a.to(this.items[o].material.uniforms.opacity, 1.5, {
                                    value: 1,
                                    ease: "Expo.easeInOut"
                                }), J.a.to(this.items[o].position, 1.5, {
                                    x: this.items[o].origPos.x,
                                    y: this.items[o].origPos.y,
                                    ease: "Expo.easeInOut"
                                }))
                            }
                        }
                    }, {
                        key: "openContact",
                        value: function(t) {
                            var e = this;
                            return t.preventDefault(), this.contactSection.isOpen ? this.closeContact() : void(this.dom.cursor.dataset.cursor = "cross", this.contactSection.visible = !0, this.contactSection.isOpen = !0, this.c.allowScrolling = !1, this.linkUnderlineMat.visible = !0, this.linkUnderlineMat.opacity = .3, J.a.to(this.camera.position, 2, {
                                y: this.contactSection.position.y * this.scene.scale.y,
                                ease: "Expo.easeInOut",
                                onComplete: function() {
                                    e.timeline.visible = !1
                                }
                            }))
                        }
                    }, {
                        key: "closeContact",
                        value: function() {
                            var e = this;
                            this.timeline.visible = !0, this.contactSection.isOpen = !1, J.a.to(this.camera.position, 2, {
                                y: 0,
                                ease: "Expo.easeInOut",
                                onComplete: function() {
                                    e.contactSection.visible = !1, e.c.allowScrolling = !0, e.linkUnderlineMat.visible = !1, e.linkUnderlineMat.opacity = 0
                                }
                            })
                        }
                    }, {
                        key: "scroll",
                        value: function(t) {
                            var e = function(t) {
                                return t.detail && t.wheelDelta ? t.wheelDelta / t.detail / 40 * (0 < t.detail ? 1 : -1) : t.deltaY ? -t.deltaY / 40 : t.wheelDelta / 120
                            }(t);
                            // update scroll position
                            this.c.scrollPos += 40 * -e;
                            this.c.scrolling = !0;
                            // record last scroll time to avoid starting video playback during active scrolling
                            try {
                                this._lastScrollTime = performance && performance.now ? performance.now() : Date.now();
                            } catch (err) {
                                this._lastScrollTime = Date.now();
                            }
                            // Debug: if at end, print helpful diagnostics to console
                            try {
                                if (this.activeMonth === 'end') {
                                    console.log('SCROLL (end): delta=', e, 'c.scrollPos=', this.c.scrollPos, 'timeline.z=', this.timeline && this.timeline.position ? this.timeline.position.z : null, 'stopScrollPos=', this.stopScrollPos);
                                }
                            } catch (err) {}
                        }
                    }, {
                        key: "mouseDown",
                        value: function(t) {
                            var e = this;
                            t.preventDefault();
                            t.stopPropagation();
                            if (this.easterEggEnabled) return;
                            this.c.holdingMouseDown = !0;

                            if (this.contactSection.isOpen) {
                                if (this.linkIntersect.length > 0 && this.linkIntersect[0].object.onClick) {
                                    this.linkIntersect[0].object.onClick();
                                } else {
                                    this.closeContact();
                                }
                                return;
                            }

                            if (this.itemOpen) {
                                if (this.linkIntersect.length > 0 && this.linkIntersect[0].object.onClick) {
                                    this.linkIntersect[0].object.onClick();
                                } else {
                                    this.closeItem();
                                }
                                return;
                            }

                            if (this.intersects.length > 0) {
                                var hitParent = this.intersects[0].object.parent;
                                // Prevent opening MOMENT.png via click
                                if (!(hitParent && hitParent.texture && hitParent.texture.name && hitParent.texture.name.indexOf("MOMENT.png") !== -1)) {
                                    this.openItem(hitParent);
                                    this.dom.cursor.dataset.cursor = "cross";
                                    return;
                                } else {
                                    // If it's MOMENT.png, do nothing on click
                                    return;
                                }
                            }

                            if (this.hoveringWhoosh) {
                                this.c.scrolling = !0;
                                J.a.to(this.c, 4, {
                                    scrollPos: 0,
                                    ease: "Expo.easeInOut",
                                    onUpdate: function() {
                                        e.c.scrolling = !0;
                                    }
                                });
                            } else {
                                this.dom.cursor.dataset.cursor = "move";
                                J.a.to(this.c, .5, {
                                    delay: .7,
                                    autoMoveSpeed: 20
                                });
                            }
                        }
                    }, {
                        key: "mouseUp",
                        value: function() {
                            this.itemOpen || (this.dom.cursor.dataset.cursor = "pointer"), this.c.holdingMouseDown = !1, J.a.killTweensOf(this.c, {
                                autoMoveSpeed: !0
                            }), this.c.autoMoveSpeed = 0
                        }
                    }, {
                        key: "mouseMove",
                        value: function(t) {
                            this.mousePerspective.x = t.clientX / window.innerWidth - .5, this.mousePerspective.y = t.clientY / window.innerHeight - .5, this.updatingPerspective = !0, this.c.touchEnabled || J.a.to(".cursor", 1.5, {
                                x: t.clientX,
                                y: t.clientY,
                                ease: "Power4.easeOut"
                            }), !this.renderer || t.target !== this.renderer.domElement || this.easterEggEnabled || (this.mouse.x = 2 * (t.clientX / this.renderer.domElement.clientWidth) - 1, this.mouse.y = 2 * -(t.clientY / this.renderer.domElement.clientHeight) + 1, this.raycaster.setFromCamera(this.mouse, this.camera), !this.contactSection.isOpen && !this.itemOpen && !this.c.holdingMouseDown && ("end" === this.activeMonth ? (this.intersects = [], this.whooshIntersects = this.raycaster.intersectObjects(this.sections.end.whoosh.children), 0 < this.whooshIntersects.length ? (this.dom.cursor.dataset.cursor = "none", this.hoveringWhoosh = !0, this.sections.end.arrowTween.timeScale(2)) : this.hoveringWhoosh && (this.dom.cursor.dataset.cursor = "pointer", this.hoveringWhoosh = !1, this.sections.end.arrowTween.timeScale(1))) : (this.intersects = this.raycaster.intersectObjects(this.itemMeshes), 0 < this.intersects.length ? this.dom.cursor.dataset.cursor = "eye" : "pointer" !== this.dom.cursor.dataset.cursor && (this.dom.cursor.dataset.cursor = "pointer"))), !this.contactSection.isOpen && this.itemOpen && this.itemOpen.data.link && (this.linkIntersect = this.raycaster.intersectObject(this.linkBox), 0 < this.linkIntersect.length ? this.dom.cursor.dataset.cursor = "eye" : "cross" !== this.dom.cursor.dataset.cursor && (this.dom.cursor.dataset.cursor = "cross")), this.contactSection.isOpen && (this.linkIntersect = this.raycaster.intersectObject(this.contactSection.linkBox), 0 < this.linkIntersect.length ? this.dom.cursor.dataset.cursor = "eye" : "cross" !== this.dom.cursor.dataset.cursor && (this.dom.cursor.dataset.cursor = "cross")))
                        }
                    }, {
                        key: "updatePerspective",
                        value: function() {
                            if (this.camera && this.camera.rotation) {
                                J.a.to(this.camera.rotation, 4, {
                                    x: .5 * -this.mousePerspective.y,
                                    y: .5 * -this.mousePerspective.x,
                                    ease: "Power4.easeOut"
                                });
                            }
                            if ("end" === this.activeMonth && this.sections && this.sections.end && this.sections.end.arrow && this.sections.end.arrow.rotation) {
                                J.a.to(this.sections.end.arrow.rotation, 4, {
                                    x: -1.5 + .2 * this.mousePerspective.y,
                                    y: .8 * this.mousePerspective.x,
                                    ease: "Power4.easeOut"
                                });
                            }
                            this.updatingPerspective = !1
                        }
                    }, {
                        key: "updateOrientation",
                        value: function(t) {
                            this.orientation.gamma = t.gamma ? t.gamma : 0, this.orientation.beta = t.beta ? t.beta : 0, this.initialOrientation || (this.initialOrientation = {
                                gamma: this.orientation.gamma,
                                beta: this.orientation.beta
                            });
                            if (this.camera && this.camera.rotation) {
                                J.a.to(this.camera.rotation, 2, {
                                    x: this.orientation.beta ? (this.orientation.beta - this.initialOrientation.beta) * (P / 300) : 0,
                                    y: this.orientation.gamma ? (this.orientation.gamma - this.initialOrientation.gamma) * (P / 300) : 0,
                                    ease: "Power4.easeOut"
                                });
                            }
                        }
                    }, {
                        key: "resetOrientation",
                        value: function() {
                            this.initialOrientation = {
                                gamma: this.orientation.gamma,
                                beta: this.orientation.beta
                            }
                        }
                    }, {
                        key: "changeColours",
                        value: function() {
                            var e = this,
                                t = !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0];
                            if (this.remainingMonths = Object.keys(this.monthPositions).filter(function(t) {
                                    return e.timeline.position.z > -e.monthPositions[t]
                                }), t || this.remainingMonths[this.remainingMonths.length - 1] && this.activeMonth !== this.remainingMonths[this.remainingMonths.length - 1]) {
                                this.activeMonth = t ? t : this.remainingMonths[this.remainingMonths.length - 1];
                                if (typeof document !== "undefined") {
                                    var __prevActive = this._prevActiveMonth || null;
                                    if (__prevActive !== this.activeMonth) {
                                        try {
                                            document.dispatchEvent(new CustomEvent("timeline:activeMonthChanged", {
                                                detail: {
                                                    activeMonth: this.activeMonth,
                                                    previous: __prevActive
                                                }
                                            }));
                                        } catch (err) {
                                            // older browsers fallback
                                            var ev = document.createEvent('CustomEvent');
                                            ev.initCustomEvent('timeline:activeMonthChanged', true, true, {
                                                activeMonth: this.activeMonth,
                                                previous: __prevActive
                                            });
                                            document.dispatchEvent(ev);
                                        }
                                        this._prevActiveMonth = this.activeMonth;
                                    }
                                }
                                var o, i = new W.a(this.months[this.activeMonth].bgColor),
                                    n = new W.a(this.months[this.activeMonth].textColor),
                                    a = new W.a(this.months[this.activeMonth].tintColor);
                                for (var r in J.a.to([this.scene.fog.color, this.scene.background], 1, {
                                        r: i.r,
                                        g: i.g,
                                        b: i.b,
                                        ease: "Power4.easeOut"
                                    }), J.a.to(this.textMat.color, 1, {
                                        r: n.r,
                                        g: n.g,
                                        b: n.b,
                                        ease: "Power4.easeOut"
                                    }), J.a.set([this.captionTextMat.color, this.linkUnderlineMat.color], {
                                        r: n.r,
                                        g: n.g,
                                        b: n.b
                                    }), this.items) J.a.to(this.items[r].uniforms.gradientColor.value, 1, {
                                    r: a.r,
                                    g: a.g,
                                    b: a.b,
                                    ease: "Power4.easeOut"
                                });
                                if (this.months[this.activeMonth].outlineTextColor) {
                                    var s = new W.a(this.months[this.activeMonth].outlineTextColor);
                                    o = s.getHexString(), J.a.to([this.textOutlineMat.color], 1, {
                                        r: s.r,
                                        g: s.g,
                                        b: s.b,
                                        ease: "Power4.easeOut"
                                    })
                                } else o = n.getHexString();
                                this.months[this.activeMonth].contactColor ? this.contactTextMat.color.set(this.months[this.activeMonth].contactColor) : this.contactTextMat.color.set(16777215), J.a.to(this.dom.mainSvgs, 1, {
                                    fill: "#".concat(o),
                                    ease: "Power4.easeOut"
                                }), J.a.to([this.dom.cursorSvgs, this.dom.compassSvg], 1, {
                                    stroke: "#".concat(o),
                                    ease: "Power4.easeOut"
                                });
                                var _metaTheme = document.querySelector("meta[name=theme-color]");
                                _metaTheme && _metaTheme.setAttribute("content", "#" + i.getHexString());
                                "end" !== this.activeMonth || this.sections.end.arrowTween ? this.sections.end.arrowTween && (this.sections.end.arrowTween = !1) : this.sections.end.arrowTween = J.a.to(this.sections.end.arrow.position, 1, {
                                    z: 0,
                                    repeat: -1,
                                    yoyo: !0,
                                    ease: "Power2.easeInOut"
                                })
                            }
                        }
                    }, {
                        key: "handleVideos",
                        value: function() {
                            this.camera.updateMatrixWorld(), this.camera.matrixWorldInverse.getInverse(this.camera.matrixWorld), this.cameraViewProjectionMatrix.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse), this.frustum.setFromMatrix(this.cameraViewProjectionMatrix);
                            for (var e = 0; e < this.videoCount; e++) {
                                var vidEl = this.videoItems[e] && this.videoItems[e].material && this.videoItems[e].material.uniforms && this.videoItems[e].material.uniforms.texture && this.videoItems[e].material.uniforms.texture.value && this.videoItems[e].material.uniforms.texture.value.image;
                                if (!vidEl) continue;
                                // don't start playback immediately after active scrolling to avoid decode jank
                                var now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
                                var timeSinceScroll = now - (this._lastScrollTime || 0);
                                if (this.frustum.intersectsObject(this.videoItems[e]) && vidEl.paused) {
                                    if (timeSinceScroll > 300) {
                                        try { vidEl.play(); } catch (err) {}
                                    }
                                    continue;
                                }
                                this.frustum.intersectsObject(this.videoItems[e]) || vidEl.paused || (function(v) { try { v.pause(); } catch(err) {} })(vidEl)
                            }
                        }
                    }, {
                        key: "animate",
                        value: function() {
                            if (this.animationId = requestAnimationFrame(this.animate.bind(this)), !this.c.touchEnabled && this.updatingPerspective && (this.updatePerspective(), this.updatingPerspective = !1), 0 < this.c.autoMoveSpeed && (this.c.scrolling = !0, this.c.scrollPos += this.c.autoMoveSpeed), this.c.allowScrolling && this.c.scrolling) {
                                // clamp scrollPos within valid range [0, maxScroll]
                                var maxScroll = this.stopScrollPos ? -this.stopScrollPos : 0;
                                if (this.c.scrollPos < 0) this.c.scrollPos = 0;
                                if (this.c.scrollPos > maxScroll) this.c.scrollPos = maxScroll;
                                var e = (this.c.scrollPos - this.timeline.position.z) / 16;
                                this.timeline.position.z += e, !this.c.isMobile && 8 > j(e) && this.handleVideos(), this.easterEggEnabled || this.changeColours(), this.c.scrolling = !!(.1 < j(e))
                            }
                            this.hoveringWhoosh && (this.sections.end.circle.rotation.z += .005);
                            
                            if (this.yDefnItem && this.yDefnItem.mesh) {
                                var yMesh = this.yDefnItem.mesh;
                                if (this.yDefnItem._isStatic) {
                                    if (this.camera && this.camera.rotation) {
                                        yMesh.rotation.x = this.camera.rotation.x;
                                        yMesh.rotation.y = this.camera.rotation.y;
                                    }
                                } else {
                                    yMesh.rotation.x = 0;
                                    yMesh.rotation.y = 0;
                                }
                            }
                            
                            // Force-update GIF textures so animated GIFs advance frames when used as textures
                            try {
                                if (this.timeline && this.timeline.gifItems && this.timeline.gifItems.length) {
                                    for (var gi = 0; gi < this.timeline.gifItems.length; gi++) {
                                        try {
                                            this.timeline.gifItems[gi].needsUpdate = true;
                                        } catch (err) {}
                                    }
                                }
                            } catch (err) {}

                            if (IS_ANDROID && Math.abs(this.androidScroll.velocity) > 0.1) {
                                this.androidScroll.velocity *= 0.92;
                                this.c.scrollPos += this.androidScroll.velocity;
                                this.c.scrolling = true;
                            }

                            this.renderer.render(this.scene, this.camera)
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.c.size = {
                                w: window.innerWidth,
                                h: window.innerHeight
                            }, this.camera.fov = 180 * (2 * t(this.c.size.h / 2 / this.camera.position.z)) / P, this.camera.aspect = this.c.size.w / this.c.size.h, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.c.size.w, this.c.size.h)
                        }
                    }, {
                        key: "eyeCursorElEnter",
                        value: function() {
                            this.dom.cursor.dataset.cursor = "eye"
                        }
                    }, {
                        key: "eyeCursorElLeave",
                        value: function() {
                            this.dom.cursor.dataset.cursor = "pointer"
                        }
                    }, {
                        key: "initListeners",
                        value: function() {
                            var e = this;
                            this.resize = this.resize.bind(this), this.scroll = this.scroll.bind(this), this.mouseDown = this.mouseDown.bind(this), this.mouseUp = this.mouseUp.bind(this), this.openContact = this.openContact.bind(this), this.moveToStart = this.moveToStart.bind(this), window.addEventListener("resize", this.resize, !1), this.renderer.domElement.addEventListener("mousedown", this.mouseDown, !1), this.renderer.domElement.addEventListener("mouseup", this.mouseUp, !1), this.renderer.domElement.addEventListener("wheel", this.scroll, !1), this.gyroEnabled && (this.updateOrientation = this.updateOrientation.bind(this), this.resetOrientation = this.resetOrientation.bind(this), window.addEventListener("deviceorientation", this.updateOrientation), this.dom.compass.addEventListener("click", this.resetOrientation, !1)), this.enableLoader && document.querySelector(".enter").addEventListener("click", this.moveToStart, !1), this.gesture = new K(this.renderer.domElement, {
                                mouseSupport: !1
                            }), this.gesture.on("panmove", function() {
                                e.c.scrollPos += 6 * -e.gesture.velocityY, e.c.scrolling = !0
                            }), this.gesture.on("panend", function() {
                                return e.c.autoMoveSpeed = 0
                            }), this.gesture.on("longpress", function() {
                                return e.c.autoMoveSpeed = 10
                            }), this.c.touchEnabled || (this.dom.cursor.dataset.cursor = "pointer")
                        }
                    }, {
                        key: "initCursorListeners",
                        value: function() {
                            this.eyeCursorElEnter = this.eyeCursorElEnter.bind(this);
                            this.eyeCursorElLeave = this.eyeCursorElLeave.bind(this);
                            this.mouseMove = this.mouseMove.bind(this);
                            window.addEventListener("mousemove", this.mouseMove, !1);

                            for (var e = document.querySelectorAll(".cursor-eye"), t = 0; t < e.length; t++) {
                                e[t].addEventListener("mouseenter", this.eyeCursorElEnter, !1);
                                e[t].addEventListener("mouseleave", this.eyeCursorElLeave, !1);
                            }

                            // If touch is enabled, add touch handlers so the visual cursor follows finger input
                            if (this.c && this.c.touchEnabled) {
                                var self = this;
                                // ensure cursor element is visible on touch
                                var showCursor = function() {
                                    if (self.dom && self.dom.cursor) {
                                        self.dom.cursor.style.opacity = 1;
                                        self.dom.cursor.style.display = 'block';
                                    }
                                };

                                var hideCursor = function() {
                                    if (self.dom && self.dom.cursor) {
                                        // fade out a little after touch ends
                                        try { J.a.to(self.dom.cursor, 0.4, { opacity: 0 }); } catch (e) { self.dom.cursor.style.opacity = 0; }
                                        setTimeout(function() { if (self.dom && self.dom.cursor) self.dom.cursor.style.display = 'none'; }, 450);
                                    }
                                };

                                var touchMoveHandler = function(ev) {
                                    if (!ev || !ev.touches || ev.touches.length === 0) return;
                                    var t = ev.touches[0];
                                    var x = t.clientX;
                                    var y = t.clientY;
                                    // animate cursor position for smoothness
                                    try { J.a.to(".cursor", 0.2, { x: x, y: y, ease: "Power4.easeOut" }); } catch (err) {
                                        if (self.dom && self.dom.cursor) self.dom.cursor.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
                                    }
                                };

                                var touchStartHandler = function(ev) {
                                    showCursor();
                                    touchMoveHandler(ev);
                                };

                                var touchEndHandler = function(ev) {
                                    hideCursor();
                                };

                                window.addEventListener('touchstart', touchStartHandler, { passive: true });
                                window.addEventListener('touchmove', touchMoveHandler, { passive: true });
                                window.addEventListener('touchend', touchEndHandler, { passive: true });
                            }
                        }
                    }, {
                        key: "preventPullToRefresh",
                        value: function() {
                            var t = !1;
                            this.renderer.domElement.addEventListener("touchstart", function(o) {
                                if (1 === o.touches.length) {
                                    var e = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
                                    t = 0 === e
                                }
                            }), this.renderer.domElement.addEventListener("touchmove", function(o) {
                                t && (t = !1, o.preventDefault())
                            })
                        }
                    }, {
                        key: "easterEgg",
                        value: function() {
                            if (this.timelineEntered) {
                                console.log("CHEATER!"), this.easterEggEnabled = !0, J.a.to(this.timeline.rotation, 2, {
                                    z: 360 * P / 180,
                                    ease: "Power4.easeInOut"
                                }), this.discoColours();
                                for (var e = 0; e < this.itemMeshes.length - 1; e++) J.a.to(this.itemMeshes[e].rotation, 2, {
                                    z: 360 * P / 180,
                                    ease: "Linear.easeNone",
                                    repeat: -1
                                });
                                for (var t in J.a.to(this.sections.intro.children[2].rotation, 2, {
                                        z: 360 * P / 180,
                                        ease: "Linear.easeNone",
                                        repeat: -1
                                    }), this.sections) J.a.to(this.sections[t].children[0].position, 1, {
                                    z: 150,
                                    repeat: -1,
                                    yoyo: !0,
                                    ease: "Linear.easeNone"
                                })
                            }
                        }
                    }, {
                        key: "discoColours",
                        value: function() {
                            var e = this,
                                t = function(t) {
                                    J.a.to(e.items[t].uniforms.gradientColor.value, 1, {
                                        r: .9882352941,
                                        g: .2941176471,
                                        b: .05882352941,
                                        ease: "Power4.easeOut",
                                        onComplete: function() {
                                            J.a.to(e.items[t].uniforms.gradientColor.value, 1, {
                                                r: .9882352941,
                                                g: .05882352941,
                                                b: .7529411765,
                                                ease: "Power4.easeOut",
                                                onComplete: function() {
                                                    J.a.to(e.items[t].uniforms.gradientColor.value, 1, {
                                                        r: .05882352941,
                                                        g: .7529411765,
                                                        b: .9882352941,
                                                        ease: "Power4.easeOut",
                                                        onComplete: function() {
                                                            J.a.to(e.items[t].uniforms.gradientColor.value, 1, {
                                                                r: .05882352941,
                                                                g: .9882352941,
                                                                b: .2941176471,
                                                                ease: "Power4.easeOut"
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                };
                            for (var o in this.items) t(o);
                            J.a.to(this.textMat.color, 1, {
                                r: .9882352941,
                                g: .2941176471,
                                b: .05882352941,
                                ease: "Power4.easeOut",
                                onComplete: function() {
                                    J.a.to(e.textMat.color, 1, {
                                        r: .9882352941,
                                        g: .05882352941,
                                        b: .7529411765,
                                        ease: "Power4.easeOut",
                                        onComplete: function() {
                                            J.a.to(e.textMat.color, 1, {
                                                r: .05882352941,
                                                g: .7529411765,
                                                b: .9882352941,
                                                ease: "Power4.easeOut",
                                                onComplete: function() {
                                                    J.a.to(e.textMat.color, 1, {
                                                        r: .05882352941,
                                                        g: .9882352941,
                                                        b: .2941176471,
                                                        ease: "Power4.easeOut"
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            }), J.a.to([this.scene.fog.color, this.scene.background], 1, {
                                r: .05882352941,
                                g: .9882352941,
                                b: .2941176471,
                                ease: "Power4.easeOut",
                                onComplete: function() {
                                    J.a.to([e.scene.fog.color, e.scene.background], 1, {
                                        r: .05882352941,
                                        g: .7529411765,
                                        b: .9882352941,
                                        ease: "Power4.easeOut",
                                        onComplete: function() {
                                            J.a.to([e.scene.fog.color, e.scene.background], 1, {
                                                r: .9882352941,
                                                g: .05882352941,
                                                b: .7529411765,
                                                ease: "Power4.easeOut",
                                                onComplete: function() {
                                                    J.a.to([e.scene.fog.color, e.scene.background], 1, {
                                                        r: .9882352941,
                                                        g: .2941176471,
                                                        b: .05882352941,
                                                        ease: "Power4.easeOut",
                                                        onComplete: function() {
                                                            e.discoColours()
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    }]), e
                }();
            e.hot.accept(), e.hot.dispose(function() {
                window.assets = ye.assets, ye.renderer.domElement.removeEventListener("wheel", ye.scroll), removeEventListener("resize", ye.resize), ye.renderer.domElement.removeEventListener("mousedown", ye.mouseDown), ye.renderer.domElement.removeEventListener("mouseup", ye.mouseUp), removeEventListener("mousemove", ye.mouseMove), document.querySelector("canvas").remove(), ye.renderer.forceContextLoss(), ye.renderer.context = null, ye.renderer.domElement = null, ye.renderer = null, cancelAnimationFrame(ye.animationId), ye.gesture.destroy()
            });
            var ye = new ve;
            window.timeline = ye
        },
        x3HC: function(e) {
            e.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform float time;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nuniform sampler2D texture;\n\nvoid main() {\n\n\tvec2 uv = vUv;\n\t// vec4 color = texture2D( texture, vUv );\n\n\tvec4 origColor = texture2D(texture, vUv);\n\n\t// remove green\n\tif ( origColor.r < 0.4 && origColor.b < 0.4 && origColor.g > 0.4 ) {\n\t\torigColor.a = 0.;\n\t}\n\n\tif ( origColor.r < 0.9 && origColor.b < 0.9 && origColor.g > 0.9 ) {\n\t\torigColor.a = 0.;\n\t}\n\n\t// vec4 gradientImage = mix(vec4( gradientColor, 1.0), vec4(1.0, 1.0, 1.0, 1.0), grayscaleValue);\n\n\t// if ( gradientImage.b < 0.9 ) discard;\n\n\t// gl_FragColor = origColor * opacity;\n\tgl_FragColor = origColor;\n\n\t#ifdef USE_FOG\n\t\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t\t#else\n\t\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t\t#endif\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\t#endif\n\n}"
        },
        yLpj: function(e) {
            var t = function() {
                return this
            }();
            try {
                t = t || new Function("return this")()
            } catch (o) {
                "object" == typeof window && (t = window)
            }
            e.exports = t
        }
    },
    [
        [0, 3, 2, 1]
    ]
]);
