(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [79],
  {
    6691: function (e, t) {
      "use strict";
      var r, n, o, i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ACTION_FAST_REFRESH: function () {
            return d;
          },
          ACTION_NAVIGATE: function () {
            return s;
          },
          ACTION_PREFETCH: function () {
            return c;
          },
          ACTION_REFRESH: function () {
            return a;
          },
          ACTION_RESTORE: function () {
            return l;
          },
          ACTION_SERVER_ACTION: function () {
            return f;
          },
          ACTION_SERVER_PATCH: function () {
            return u;
          },
          PrefetchCacheEntryStatus: function () {
            return n;
          },
          PrefetchKind: function () {
            return r;
          },
          isThenable: function () {
            return p;
          },
        });
      let a = "refresh",
        s = "navigate",
        l = "restore",
        u = "server-patch",
        c = "prefetch",
        d = "fast-refresh",
        f = "server-action";
      function p(e) {
        return (
          e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      ((o = r || (r = {})).AUTO = "auto"),
        (o.FULL = "full"),
        (o.TEMPORARY = "temporary"),
        ((i = n || (n = {})).fresh = "fresh"),
        (i.reusable = "reusable"),
        (i.expired = "expired"),
        (i.stale = "stale"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    4318: function (e, t, r) {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(8364),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9577: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = r(260),
        o = r(5893),
        i = n._(r(7294)),
        a = r(1401),
        s = r(2045),
        l = r(7420),
        u = r(7201),
        c = r(1443),
        d = r(9953),
        f = r(5320),
        p = r(2905),
        h = r(4318),
        m = r(953),
        v = r(6691),
        g = new Set();
      function b(e, t, r, n, o, i) {
        if (i || (0, s.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (g.has(o)) return;
            g.add(o);
          }
          (async () => (i ? e.prefetch(t, o) : e.prefetch(t, r, n)))().catch(
            (e) => {}
          );
        }
      }
      function y(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let w = i.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: l,
          as: g,
          children: w,
          prefetch: x = null,
          passHref: E,
          replace: T,
          shallow: P,
          scroll: C,
          locale: k,
          onClick: S,
          onMouseEnter: M,
          onTouchStart: A,
          legacyBehavior: j = !1,
          ...N
        } = e;
        (r = w),
          j &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let R = i.default.useContext(d.RouterContext),
          O = i.default.useContext(f.AppRouterContext),
          I = null != R ? R : O,
          L = !R,
          V = !1 !== x,
          F = null === x ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: D, as: z } = i.default.useMemo(() => {
            if (!R) {
              let e = y(l);
              return { href: e, as: g ? y(g) : e };
            }
            let [e, t] = (0, a.resolveHref)(R, l, !0);
            return { href: e, as: g ? (0, a.resolveHref)(R, g) : t || e };
          }, [R, l, g]),
          W = i.default.useRef(D),
          K = i.default.useRef(z);
        j && (n = i.default.Children.only(r));
        let B = j ? n && "object" == typeof n && n.ref : t,
          [G, H, $] = (0, p.useIntersection)({ rootMargin: "200px" }),
          U = i.default.useCallback(
            (e) => {
              (K.current !== z || W.current !== D) &&
                ($(), (K.current = z), (W.current = D)),
                G(e),
                B &&
                  ("function" == typeof B
                    ? B(e)
                    : "object" == typeof B && (B.current = e));
            },
            [z, B, D, $, G]
          );
        i.default.useEffect(() => {
          I && H && V && b(I, D, z, { locale: k }, { kind: F }, L);
        }, [z, D, H, k, V, null == R ? void 0 : R.locale, I, L, F]);
        let _ = {
          ref: U,
          onClick(e) {
            j || "function" != typeof S || S(e),
              j &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              I &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, a, l, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, s.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == l || l;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: a,
                          locale: u,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](n || r, { scroll: e });
                  };
                  c ? i.default.startTransition(f) : f();
                })(e, I, D, z, T, P, C, k, L);
          },
          onMouseEnter(e) {
            j || "function" != typeof M || M(e),
              j &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              I &&
                (V || !L) &&
                b(
                  I,
                  D,
                  z,
                  { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  L
                );
          },
          onTouchStart: function (e) {
            j || "function" != typeof A || A(e),
              j &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              I &&
                (V || !L) &&
                b(
                  I,
                  D,
                  z,
                  { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  L
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(z)) _.href = z;
        else if (!j || E || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== k ? k : null == R ? void 0 : R.locale,
            t =
              (null == R ? void 0 : R.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                z,
                e,
                null == R ? void 0 : R.locales,
                null == R ? void 0 : R.domainLocales
              );
          _.href =
            t ||
            (0, m.addBasePath)(
              (0, c.addLocale)(z, e, null == R ? void 0 : R.defaultLocale)
            );
        }
        return j
          ? i.default.cloneElement(n, _)
          : (0, o.jsx)("a", { ...N, ..._, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2905: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(7294),
        o = r(3815),
        i = "function" == typeof IntersectionObserver,
        a = new Map(),
        s = [];
      function l(e) {
        let { rootRef: t, rootMargin: r, disabled: l } = e,
          u = l || !i,
          [c, d] = (0, n.useState)(!1),
          f = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (i) {
              if (u || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = s.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = a.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      s.push(r),
                      a.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), a.delete(n);
                        let e = s.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && s.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [u, r, t, c, f.current]),
          [
            p,
            c,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1664: function (e, t, r) {
      e.exports = r(9577);
    },
    884: function (e, t, r) {
      "use strict";
      r.d(t, {
        f: function () {
          return o;
        },
      });
      var n = r(5893),
        o = () =>
          (0, n.jsxs)("svg", {
            "aria-hidden": "true",
            fill: "none",
            height: "80%",
            role: "presentation",
            viewBox: "0 0 24 24",
            width: "80%",
            children: [
              (0, n.jsx)("path", {
                d: "M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",
                fill: "currentColor",
              }),
              (0, n.jsx)("path", {
                d: "M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",
                fill: "currentColor",
              }),
            ],
          });
    },
    2345: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return S;
        },
      });
      var n = r(884),
        o = r(7294),
        [i, a] = (function (e = {}) {
          let {
              strict: t = !0,
              errorMessage:
                r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
              name: n,
            } = e,
            i = o.createContext(void 0);
          return (
            (i.displayName = n),
            [
              i.Provider,
              function e() {
                var n;
                let a = o.useContext(i);
                if (!a && t) {
                  let t = Error(r);
                  throw (
                    ((t.name = "ContextError"),
                    null == (n = Error.captureStackTrace) ||
                      n.call(Error, t, e),
                    t)
                  );
                }
                return a;
              },
              i,
            ]
          );
        })({ name: "AvatarGroupContext", strict: !1 }),
        s = r(7936),
        l = r(5512),
        u = (0, s.tv)({
          slots: {
            base: [
              "flex",
              "relative",
              "justify-center",
              "items-center",
              "box-border",
              "overflow-hidden",
              "align-middle",
              "text-white",
              "z-0",
              ...l.Dh,
            ],
            img: [
              "flex",
              "object-cover",
              "w-full",
              "h-full",
              "transition-opacity",
              "!duration-500",
              "opacity-0",
              "data-[loaded=true]:opacity-100",
            ],
            fallback: [...l.z6, "flex", "items-center", "justify-center"],
            name: [...l.z6, "font-normal", "text-center", "text-inherit"],
            icon: [
              ...l.z6,
              "flex",
              "items-center",
              "justify-center",
              "text-inherit",
              "w-full",
              "h-full",
            ],
          },
          variants: {
            size: {
              sm: { base: "w-8 h-8 text-tiny" },
              md: { base: "w-10 h-10 text-tiny" },
              lg: { base: "w-14 h-14 text-small" },
            },
            color: {
              default: { base: "bg-default text-default-foreground" },
              primary: { base: "bg-primary text-primary-foreground" },
              secondary: { base: "bg-secondary text-secondary-foreground" },
              success: { base: "bg-success text-success-foreground" },
              warning: { base: "bg-warning text-warning-foreground" },
              danger: { base: "bg-danger text-danger-foreground" },
            },
            radius: {
              none: { base: "rounded-none" },
              sm: { base: "rounded-small" },
              md: { base: "rounded-medium" },
              lg: { base: "rounded-large" },
              full: { base: "rounded-full" },
            },
            isBordered: {
              true: {
                base: "ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark",
              },
            },
            isDisabled: { true: { base: "opacity-disabled" } },
            isInGroup: {
              true: {
                base: [
                  "-ms-2 data-[hover=true]:-translate-x-3 rtl:data-[hover=true]:translate-x-3 transition-transform",
                  "data-[focus-visible=true]:-translate-x-3 rtl:data-[focus-visible=true]:translate-x-3",
                ],
              },
            },
            isInGridGroup: {
              true: { base: "m-0 data-[hover=true]:translate-x-0" },
            },
            disableAnimation: {
              true: { base: "transition-none", img: "transition-none" },
              false: {},
            },
          },
          defaultVariants: { size: "md", color: "default", radius: "full" },
          compoundVariants: [
            {
              color: "default",
              isBordered: !0,
              class: { base: "ring-default" },
            },
            {
              color: "primary",
              isBordered: !0,
              class: { base: "ring-primary" },
            },
            {
              color: "secondary",
              isBordered: !0,
              class: { base: "ring-secondary" },
            },
            {
              color: "success",
              isBordered: !0,
              class: { base: "ring-success" },
            },
            {
              color: "warning",
              isBordered: !0,
              class: { base: "ring-warning" },
            },
            { color: "danger", isBordered: !0, class: { base: "ring-danger" } },
          ],
        });
      (0, s.tv)({
        slots: {
          base: "flex items-center justify-center h-auto w-max",
          count: "hover:-translate-x-0",
        },
        variants: { isGrid: { true: "inline-grid grid-cols-4 gap-3" } },
      });
      var c = r(2031),
        d = r(2226);
      function f(e) {
        let t = (0, o.useRef)(null);
        return (0, o.useImperativeHandle)(e, () => t.current), t;
      }
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      var p = new Set([
          "id",
          "type",
          "style",
          "title",
          "role",
          "tabIndex",
          "htmlFor",
          "width",
          "height",
          "abbr",
          "accept",
          "acceptCharset",
          "accessKey",
          "action",
          "allowFullScreen",
          "allowTransparency",
          "alt",
          "async",
          "autoComplete",
          "autoFocus",
          "autoPlay",
          "cellPadding",
          "cellSpacing",
          "challenge",
          "charset",
          "checked",
          "cite",
          "class",
          "className",
          "cols",
          "colSpan",
          "command",
          "content",
          "contentEditable",
          "contextMenu",
          "controls",
          "coords",
          "crossOrigin",
          "data",
          "dateTime",
          "default",
          "defer",
          "dir",
          "disabled",
          "download",
          "draggable",
          "dropzone",
          "encType",
          "enterKeyHint",
          "for",
          "form",
          "formAction",
          "formEncType",
          "formMethod",
          "formNoValidate",
          "formTarget",
          "frameBorder",
          "headers",
          "hidden",
          "high",
          "href",
          "hrefLang",
          "httpEquiv",
          "icon",
          "inputMode",
          "isMap",
          "itemId",
          "itemProp",
          "itemRef",
          "itemScope",
          "itemType",
          "kind",
          "label",
          "lang",
          "list",
          "loop",
          "manifest",
          "max",
          "maxLength",
          "media",
          "mediaGroup",
          "method",
          "min",
          "minLength",
          "multiple",
          "muted",
          "name",
          "noValidate",
          "open",
          "optimum",
          "pattern",
          "ping",
          "placeholder",
          "poster",
          "preload",
          "radioGroup",
          "referrerPolicy",
          "readOnly",
          "rel",
          "required",
          "rows",
          "rowSpan",
          "sandbox",
          "scope",
          "scoped",
          "scrolling",
          "seamless",
          "selected",
          "shape",
          "size",
          "sizes",
          "slot",
          "sortable",
          "span",
          "spellCheck",
          "src",
          "srcDoc",
          "srcSet",
          "start",
          "step",
          "target",
          "translate",
          "typeMustMatch",
          "useMap",
          "value",
          "wmode",
          "wrap",
        ]),
        h = new Set([
          "onCopy",
          "onCut",
          "onPaste",
          "onLoad",
          "onError",
          "onWheel",
          "onScroll",
          "onCompositionEnd",
          "onCompositionStart",
          "onCompositionUpdate",
          "onKeyDown",
          "onKeyPress",
          "onKeyUp",
          "onFocus",
          "onBlur",
          "onChange",
          "onInput",
          "onSubmit",
          "onClick",
          "onContextMenu",
          "onDoubleClick",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragExit",
          "onDragLeave",
          "onDragOver",
          "onDragStart",
          "onDrop",
          "onMouseDown",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onPointerDown",
          "onPointerEnter",
          "onPointerLeave",
          "onPointerUp",
          "onSelect",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "onAnimationStart",
          "onAnimationEnd",
          "onAnimationIteration",
          "onTransitionEnd",
        ]),
        m = /^(data-.*)$/,
        v = /^(aria-.*)$/,
        g = /^(on[A-Z].*)$/,
        b = (e) =>
          (null == e ? void 0 : e.length) <= 4
            ? e
            : null == e
            ? void 0
            : e.slice(0, 3);
      function y(...e) {
        for (var t, r, n = 0, o = ""; n < e.length; )
          (t = e[n++]) &&
            (r = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(t)) &&
            (o && (o += " "), (o += r));
        return o;
      }
      var w = (e) => (e ? "true" : void 0),
        x = r(7243),
        E = r(2422),
        T = r(8419),
        P = r(5607),
        C = r(5893),
        k = (0, P.Gp)((e, t) => {
          let {
              Component: r,
              ImgComponent: i,
              src: s,
              icon: l = (0, C.jsx)(n.f, {}),
              alt: P,
              classNames: k,
              slots: S,
              name: M,
              showFallback: A,
              fallback: j,
              getInitials: N,
              getAvatarProps: R,
              getImageProps: O,
            } = (function (e = {}) {
              var t, r, n, i, s, l, P;
              let C = (0, c.w)(),
                k = a(),
                S = !!k,
                {
                  as: M,
                  ref: A,
                  src: j,
                  name: N,
                  icon: R,
                  classNames: O,
                  fallback: I,
                  alt: L = N || "avatar",
                  imgRef: V,
                  color: F = null != (t = null == k ? void 0 : k.color)
                    ? t
                    : "default",
                  radius: D = null != (r = null == k ? void 0 : k.radius)
                    ? r
                    : "full",
                  size: z = null != (n = null == k ? void 0 : k.size)
                    ? n
                    : "md",
                  isBordered: W = null !=
                    (i = null == k ? void 0 : k.isBordered) && i,
                  isDisabled: K = null !=
                    (s = null == k ? void 0 : k.isDisabled) && s,
                  isFocusable: B = !1,
                  getInitials: G = b,
                  ignoreFallback: H = !1,
                  showFallback: $ = !1,
                  ImgComponent: U = "img",
                  imgProps: _,
                  className: Z,
                  onError: q,
                  ...X
                } = e,
                Y = M || "span",
                J = f(A),
                Q = f(V),
                {
                  isFocusVisible: ee,
                  isFocused: et,
                  focusProps: er,
                } = (0, x.F)(),
                { isHovered: en, hoverProps: eo } = (0, T.X)({ isDisabled: K }),
                ei =
                  null !=
                    (P =
                      null != (l = e.disableAnimation)
                        ? l
                        : null == C
                        ? void 0
                        : C.disableAnimation) && P,
                ea =
                  "loaded" ===
                  (0, E.d)({ src: j, onError: q, ignoreFallback: H }),
                es = "string" == typeof U,
                el = (!j || !ea) && $,
                eu = (0, o.useMemo)(() => {
                  var e;
                  return u({
                    color: F,
                    radius: D,
                    size: z,
                    isBordered: W,
                    isDisabled: K,
                    isInGroup: S,
                    disableAnimation: ei,
                    isInGridGroup:
                      null != (e = null == k ? void 0 : k.isGrid) && e,
                  });
                }, [F, D, z, W, K, ei, S, null == k ? void 0 : k.isGrid]),
                ec = y(null == O ? void 0 : O.base, Z),
                ed = (0, o.useMemo)(() => B || "button" === M, [B, M]),
                ef = (0, o.useCallback)(
                  (e = {}) => ({
                    ref: J,
                    tabIndex: ed ? 0 : -1,
                    "data-hover": w(en),
                    "data-focus": w(et),
                    "data-focus-visible": w(ee),
                    className: eu.base({
                      class: y(ec, null == e ? void 0 : e.className),
                    }),
                    ...(0, d.d)(X, eo, ed ? er : {}),
                  }),
                  [ed, eu, ec, er, X]
                ),
                ep = (0, o.useCallback)(
                  (e = {}) => ({
                    ref: Q,
                    src: j,
                    "data-loaded": w(ea),
                    className: eu.img({ class: null == O ? void 0 : O.img }),
                    ...(0, d.d)(
                      _,
                      e,
                      (function (e, t = {}) {
                        let {
                            labelable: r = !0,
                            enabled: n = !0,
                            propNames: o,
                            omitPropNames: i,
                            omitEventNames: a,
                            omitDataProps: s,
                            omitEventProps: l,
                          } = t,
                          u = {};
                        if (!n) return e;
                        for (let t in e)
                          !(
                            (null == i ? void 0 : i.has(t)) ||
                            ((null == a ? void 0 : a.has(t)) && g.test(t)) ||
                            (g.test(t) && !h.has(t)) ||
                            (s && m.test(t)) ||
                            (l && g.test(t))
                          ) &&
                            ((Object.prototype.hasOwnProperty.call(e, t) &&
                              (p.has(t) ||
                                (r && v.test(t)) ||
                                (null == o ? void 0 : o.has(t)) ||
                                m.test(t))) ||
                              g.test(t)) &&
                            (u[t] = e[t]);
                        return u;
                      })({ disableAnimation: ei }, { enabled: es })
                    ),
                  }),
                  [eu, ea, _, ei, j, Q, es]
                );
              return {
                Component: Y,
                ImgComponent: U,
                src: j,
                alt: L,
                icon: R,
                name: N,
                imgRef: Q,
                slots: eu,
                classNames: O,
                fallback: I,
                isImgLoaded: ea,
                showFallback: el,
                ignoreFallback: H,
                getInitials: G,
                getAvatarProps: ef,
                getImageProps: ep,
              };
            })({ ...e, ref: t }),
            I = (0, o.useMemo)(
              () =>
                !A && s
                  ? null
                  : j
                  ? (0, C.jsx)("div", {
                      "aria-label": P,
                      className: S.fallback({
                        class: null == k ? void 0 : k.fallback,
                      }),
                      role: "img",
                      children: j,
                    })
                  : M
                  ? (0, C.jsx)("span", {
                      "aria-label": P,
                      className: S.name({ class: null == k ? void 0 : k.name }),
                      role: "img",
                      children: N(M),
                    })
                  : (0, C.jsx)("span", {
                      "aria-label": P,
                      className: S.icon({ class: null == k ? void 0 : k.icon }),
                      role: "img",
                      children: l,
                    }),
              [A, s, j, M, k]
            );
          return (0, C.jsxs)(r, {
            ...R(),
            children: [s && (0, C.jsx)(i, { ...O(), alt: P }), I],
          });
        });
      k.displayName = "NextUI.Avatar";
      var S = k;
    },
    8725: function (e, t, r) {
      "use strict";
      r.d(t, {
        w: function () {
          return j;
        },
      });
      var n = r(7294),
        [o, i] = (function (e = {}) {
          let {
              strict: t = !0,
              errorMessage:
                r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
              name: o,
            } = e,
            i = n.createContext(void 0);
          return (
            (i.displayName = o),
            [
              i.Provider,
              function e() {
                var o;
                let a = n.useContext(i);
                if (!a && t) {
                  let t = Error(r);
                  throw (
                    ((t.name = "ContextError"),
                    null == (o = Error.captureStackTrace) ||
                      o.call(Error, t, e),
                    t)
                  );
                }
                return a;
              },
              i,
            ]
          );
        })({
          name: "CardContext",
          strict: !0,
          errorMessage:
            "useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />",
        }),
        a = r(7936),
        s = r(5512),
        l = (0, a.tv)({
          slots: {
            base: [
              "flex",
              "flex-col",
              "relative",
              "overflow-hidden",
              "h-auto",
              "outline-none",
              "text-foreground",
              "box-border",
              "bg-content1",
              ...s.Dh,
            ],
            header: [
              "flex",
              "p-3",
              "z-10",
              "w-full",
              "justify-start",
              "items-center",
              "shrink-0",
              "overflow-inherit",
              "color-inherit",
              "subpixel-antialiased",
            ],
            body: [
              "relative",
              "flex",
              "flex-1",
              "w-full",
              "p-3",
              "flex-auto",
              "flex-col",
              "place-content-inherit",
              "align-items-inherit",
              "h-auto",
              "break-words",
              "text-left",
              "overflow-y-auto",
              "subpixel-antialiased",
            ],
            footer: [
              "p-3",
              "h-auto",
              "flex",
              "w-full",
              "items-center",
              "overflow-hidden",
              "color-inherit",
              "subpixel-antialiased",
            ],
          },
          variants: {
            shadow: {
              none: { base: "shadow-none" },
              sm: { base: "shadow-small" },
              md: { base: "shadow-medium" },
              lg: { base: "shadow-large" },
            },
            radius: {
              none: {
                base: "rounded-none",
                header: "rounded-none",
                footer: "rounded-none",
              },
              sm: {
                base: "rounded-small",
                header: "rounded-t-small",
                footer: "rounded-b-small",
              },
              md: {
                base: "rounded-medium",
                header: "rounded-t-medium",
                footer: "rounded-b-medium",
              },
              lg: {
                base: "rounded-large",
                header: "rounded-t-large",
                footer: "rounded-b-large",
              },
            },
            fullWidth: { true: { base: "w-full" } },
            isHoverable: {
              true: {
                base: "data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2",
              },
            },
            isPressable: { true: { base: "cursor-pointer" } },
            isBlurred: {
              true: {
                base: [
                  "bg-background/80",
                  "dark:bg-background/20",
                  "backdrop-blur-md",
                  "backdrop-saturate-150",
                ],
              },
            },
            isFooterBlurred: {
              true: {
                footer: [
                  "bg-background/10",
                  "backdrop-blur",
                  "backdrop-saturate-150",
                ],
              },
            },
            isDisabled: {
              true: { base: "opacity-disabled cursor-not-allowed" },
            },
            disableAnimation: {
              true: "",
              false: {
                base: "transition-transform-background motion-reduce:transition-none",
              },
            },
          },
          compoundVariants: [
            {
              isPressable: !0,
              class:
                "data-[pressed=true]:scale-[0.97] tap-highlight-transparent",
            },
          ],
          defaultVariants: {
            radius: "lg",
            shadow: "md",
            fullWidth: !1,
            isHoverable: !1,
            isPressable: !1,
            isDisabled: !1,
            isFooterBlurred: !1,
          },
        }),
        u = r(1086),
        c = r(2226),
        d = r(7243),
        f = r(8419),
        p = r(5528),
        h = r(2031),
        m = r(5607),
        v = (e) => (e ? "true" : void 0),
        g = new Set([
          "id",
          "type",
          "style",
          "title",
          "role",
          "tabIndex",
          "htmlFor",
          "width",
          "height",
          "abbr",
          "accept",
          "acceptCharset",
          "accessKey",
          "action",
          "allowFullScreen",
          "allowTransparency",
          "alt",
          "async",
          "autoComplete",
          "autoFocus",
          "autoPlay",
          "cellPadding",
          "cellSpacing",
          "challenge",
          "charset",
          "checked",
          "cite",
          "class",
          "className",
          "cols",
          "colSpan",
          "command",
          "content",
          "contentEditable",
          "contextMenu",
          "controls",
          "coords",
          "crossOrigin",
          "data",
          "dateTime",
          "default",
          "defer",
          "dir",
          "disabled",
          "download",
          "draggable",
          "dropzone",
          "encType",
          "enterKeyHint",
          "for",
          "form",
          "formAction",
          "formEncType",
          "formMethod",
          "formNoValidate",
          "formTarget",
          "frameBorder",
          "headers",
          "hidden",
          "high",
          "href",
          "hrefLang",
          "httpEquiv",
          "icon",
          "inputMode",
          "isMap",
          "itemId",
          "itemProp",
          "itemRef",
          "itemScope",
          "itemType",
          "kind",
          "label",
          "lang",
          "list",
          "loop",
          "manifest",
          "max",
          "maxLength",
          "media",
          "mediaGroup",
          "method",
          "min",
          "minLength",
          "multiple",
          "muted",
          "name",
          "noValidate",
          "open",
          "optimum",
          "pattern",
          "ping",
          "placeholder",
          "poster",
          "preload",
          "radioGroup",
          "referrerPolicy",
          "readOnly",
          "rel",
          "required",
          "rows",
          "rowSpan",
          "sandbox",
          "scope",
          "scoped",
          "scrolling",
          "seamless",
          "selected",
          "shape",
          "size",
          "sizes",
          "slot",
          "sortable",
          "span",
          "spellCheck",
          "src",
          "srcDoc",
          "srcSet",
          "start",
          "step",
          "target",
          "translate",
          "typeMustMatch",
          "useMap",
          "value",
          "wmode",
          "wrap",
        ]),
        b = new Set([
          "onCopy",
          "onCut",
          "onPaste",
          "onLoad",
          "onError",
          "onWheel",
          "onScroll",
          "onCompositionEnd",
          "onCompositionStart",
          "onCompositionUpdate",
          "onKeyDown",
          "onKeyPress",
          "onKeyUp",
          "onFocus",
          "onBlur",
          "onChange",
          "onInput",
          "onSubmit",
          "onClick",
          "onContextMenu",
          "onDoubleClick",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragExit",
          "onDragLeave",
          "onDragOver",
          "onDragStart",
          "onDrop",
          "onMouseDown",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onPointerDown",
          "onPointerEnter",
          "onPointerLeave",
          "onPointerUp",
          "onSelect",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "onAnimationStart",
          "onAnimationEnd",
          "onAnimationIteration",
          "onTransitionEnd",
        ]),
        y = /^(data-.*)$/,
        w = /^(aria-.*)$/,
        x = /^(on[A-Z].*)$/;
      function E(e, t = {}) {
        let {
            labelable: r = !0,
            enabled: n = !0,
            propNames: o,
            omitPropNames: i,
            omitEventNames: a,
            omitDataProps: s,
            omitEventProps: l,
          } = t,
          u = {};
        if (!n) return e;
        for (let t in e)
          !(
            (null == i ? void 0 : i.has(t)) ||
            ((null == a ? void 0 : a.has(t)) && x.test(t)) ||
            (x.test(t) && !b.has(t)) ||
            (s && y.test(t)) ||
            (l && x.test(t))
          ) &&
            ((Object.prototype.hasOwnProperty.call(e, t) &&
              (g.has(t) ||
                (r && w.test(t)) ||
                (null == o ? void 0 : o.has(t)) ||
                y.test(t))) ||
              x.test(t)) &&
            (u[t] = e[t]);
        return u;
      }
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      var T = r(8522),
        P = r(9664),
        C = r(1526),
        k = r(8897),
        S = r(5893),
        M = (e) => {
          let {
            ripples: t = [],
            motionProps: r,
            color: n = "currentColor",
            style: o,
            onClear: i,
          } = e;
          return (0, S.jsx)(S.Fragment, {
            children: t.map((e) => {
              let t = Math.min(
                Math.max(0.01 * e.size, 0.2),
                e.size > 100 ? 0.75 : 0.5
              );
              return (0, S.jsx)(
                T.X,
                {
                  features: P.H,
                  children: (0, S.jsx)(C.M, {
                    mode: "popLayout",
                    children: (0, S.jsx)(k.m.span, {
                      animate: { transform: "scale(2)", opacity: 0 },
                      className: "nextui-ripple",
                      exit: { opacity: 0 },
                      initial: { transform: "scale(0)", opacity: 0.35 },
                      style: {
                        position: "absolute",
                        backgroundColor: n,
                        borderRadius: "100%",
                        transformOrigin: "center",
                        pointerEvents: "none",
                        overflow: "hidden",
                        inset: 0,
                        zIndex: 0,
                        top: e.y,
                        left: e.x,
                        width: `${e.size}px`,
                        height: `${e.size}px`,
                        ...o,
                      },
                      transition: { duration: t },
                      onAnimationComplete: () => {
                        i(e.key);
                      },
                      ...r,
                    }),
                  }),
                },
                e.key
              );
            }),
          });
        };
      M.displayName = "NextUI.Ripple";
      var A = (0, m.Gp)((e, t) => {
        let {
          children: r,
          context: i,
          Component: a,
          isPressable: s,
          disableAnimation: g,
          disableRipple: b,
          getCardProps: y,
          getRippleProps: w,
        } = (function (e) {
          var t, r, o, i;
          let a = (0, h.w)(),
            [s, g] = (0, m.oe)(e, l.variantKeys),
            {
              ref: b,
              as: y,
              children: w,
              onClick: x,
              onPress: T,
              autoFocus: P,
              className: C,
              classNames: k,
              allowTextSelectionOnPress: S = !0,
              ...M
            } = s,
            A = (function (e) {
              let t = (0, n.useRef)(null);
              return (0, n.useImperativeHandle)(e, () => t.current), t;
            })(b),
            j = y || (e.isPressable ? "button" : "div"),
            N = "string" == typeof j,
            R =
              null !=
                (r =
                  null != (t = e.disableAnimation)
                    ? t
                    : null == a
                    ? void 0
                    : a.disableAnimation) && r,
            O =
              null !=
                (i =
                  null != (o = e.disableRipple)
                    ? o
                    : null == a
                    ? void 0
                    : a.disableRipple) && i,
            I = (function (...e) {
              for (var t, r, n = 0, o = ""; n < e.length; )
                (t = e[n++]) &&
                  (r = (function e(t) {
                    var r,
                      n,
                      o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                      if (Array.isArray(t))
                        for (r = 0; r < t.length; r++)
                          t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                      else for (r in t) t[r] && (o && (o += " "), (o += r));
                    }
                    return o;
                  })(t)) &&
                  (o && (o += " "), (o += r));
              return o;
            })(null == k ? void 0 : k.base, C),
            {
              onClick: L,
              onClear: V,
              ripples: F,
            } = (function (e = {}) {
              let [t, r] = (0, n.useState)([]);
              return {
                ripples: t,
                onClick: (0, n.useCallback)((e) => {
                  let t = e.currentTarget,
                    n = Math.max(t.clientWidth, t.clientHeight),
                    o = t.getBoundingClientRect();
                  r((t) => {
                    var r;
                    return [
                      ...t,
                      {
                        key:
                          ((r = t.length.toString()),
                          `${r}-${Math.floor(1e6 * Math.random())}`),
                        size: n,
                        x: e.clientX - o.left - n / 2,
                        y: e.clientY - o.top - n / 2,
                      },
                    ];
                  });
                }, []),
                onClear: (0, n.useCallback)((e) => {
                  r((t) => t.filter((t) => t.key !== e));
                }, []),
                ...e,
              };
            })(),
            D = (e) => {
              R || O || !A.current || L(e);
            },
            { buttonProps: z, isPressed: W } = (0, p.j)(
              {
                onPress: T,
                elementType: y,
                isDisabled: !e.isPressable,
                onClick: (0, u.t)(x, D),
                allowTextSelectionOnPress: S,
                ...M,
              },
              A
            ),
            { hoverProps: K, isHovered: B } = (0, f.X)({
              isDisabled: !e.isHoverable,
              ...M,
            }),
            {
              isFocusVisible: G,
              isFocused: H,
              focusProps: $,
            } = (0, d.F)({ autoFocus: P }),
            U = (0, n.useMemo)(
              () => l({ ...g, disableAnimation: R }),
              [
                (function (e) {
                  if (!e || "object" != typeof e) return "";
                  try {
                    return JSON.stringify(e);
                  } catch (e) {
                    return "";
                  }
                })(g),
                R,
              ]
            ),
            _ = (0, n.useMemo)(
              () => ({
                slots: U,
                classNames: k,
                disableAnimation: R,
                isDisabled: e.isDisabled,
                isFooterBlurred: e.isFooterBlurred,
                fullWidth: e.fullWidth,
              }),
              [U, k, e.isDisabled, e.isFooterBlurred, R, e.fullWidth]
            ),
            Z = (0, n.useCallback)(
              (t = {}) => ({
                ref: A,
                className: U.base({ class: I }),
                tabIndex: e.isPressable ? 0 : -1,
                "data-hover": v(B),
                "data-pressed": v(W),
                "data-focus": v(H),
                "data-focus-visible": v(G),
                "data-disabled": v(e.isDisabled),
                ...(0, c.d)(
                  e.isPressable ? { ...z, ...$, role: "button" } : {},
                  e.isHoverable ? K : {},
                  E(M, { enabled: N }),
                  E(t)
                ),
              }),
              [
                A,
                U,
                I,
                N,
                e.isPressable,
                e.isHoverable,
                e.isDisabled,
                B,
                W,
                G,
                z,
                $,
                K,
                M,
              ]
            ),
            q = (0, n.useCallback)(() => ({ ripples: F, onClear: V }), [F, V]);
          return {
            context: _,
            domRef: A,
            Component: j,
            classNames: k,
            children: w,
            isHovered: B,
            isPressed: W,
            disableAnimation: R,
            isPressable: e.isPressable,
            isHoverable: e.isHoverable,
            disableRipple: O,
            handleClick: D,
            isFocusVisible: G,
            getCardProps: Z,
            getRippleProps: q,
          };
        })({ ...e, ref: t });
        return (0, S.jsxs)(a, {
          ...y(),
          children: [
            (0, S.jsx)(o, { value: i, children: r }),
            s && !g && !b && (0, S.jsx)(M, { ...w() }),
          ],
        });
      });
      A.displayName = "NextUI.Card";
      var j = A;
    },
    3581: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return f;
        },
      });
      var n = r(7294),
        o = r(2031),
        i = r(5607),
        a = (0, r(7936).tv)({
          slots: {
            wrapper: "relative shadow-black/5",
            zoomedWrapper: "relative overflow-hidden rounded-inherit",
            img: "relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",
            blurredImg: [
              "absolute",
              "z-0",
              "inset-0",
              "w-full",
              "h-full",
              "object-cover",
              "filter",
              "blur-lg",
              "scale-105",
              "saturate-150",
              "opacity-30",
              "translate-y-1",
            ],
          },
          variants: {
            radius: { none: {}, sm: {}, md: {}, lg: {}, full: {} },
            shadow: {
              none: { wrapper: "shadow-none", img: "shadow-none" },
              sm: { wrapper: "shadow-small", img: "shadow-small" },
              md: { wrapper: "shadow-medium", img: "shadow-medium" },
              lg: { wrapper: "shadow-large", img: "shadow-large" },
            },
            isZoomed: {
              true: { img: ["object-cover", "transform", "hover:scale-125"] },
            },
            showSkeleton: {
              true: {
                wrapper: [
                  "group",
                  "relative",
                  "overflow-hidden",
                  "bg-content3 dark:bg-content2",
                ],
                img: "opacity-0",
              },
            },
            disableAnimation: {
              true: { img: "transition-none" },
              false: {
                img: "transition-transform-opacity motion-reduce:transition-none !duration-300",
              },
            },
          },
          defaultVariants: {
            radius: "lg",
            shadow: "none",
            isZoomed: !1,
            isBlurred: !1,
            showSkeleton: !1,
          },
          compoundVariants: [
            {
              showSkeleton: !0,
              disableAnimation: !1,
              class: {
                wrapper: [
                  "before:opacity-100",
                  "before:absolute",
                  "before:inset-0",
                  "before:-translate-x-full",
                  "before:animate-[shimmer_2s_infinite]",
                  "before:border-t",
                  "before:border-content4/30",
                  "before:bg-gradient-to-r",
                  "before:from-transparent",
                  "before:via-content4",
                  "dark:before:via-default-700/10",
                  "before:to-transparent",
                  "after:opacity-100",
                  "after:absolute",
                  "after:inset-0",
                  "after:-z-10",
                  "after:bg-content3",
                  "dark:after:bg-content2",
                ],
              },
            },
          ],
          compoundSlots: [
            {
              slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
              radius: "none",
              class: "rounded-none",
            },
            {
              slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
              radius: "full",
              class: "rounded-full",
            },
            {
              slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
              radius: "sm",
              class: "rounded-small",
            },
            {
              slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
              radius: "md",
              class: "rounded-md",
            },
            {
              slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
              radius: "lg",
              class: "rounded-large",
            },
          ],
        });
      function s(...e) {
        for (var t, r, n = 0, o = ""; n < e.length; )
          (t = e[n++]) &&
            (r = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(t)) &&
            (o && (o += " "), (o += r));
        return o;
      }
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      var l = (e) => (e ? "true" : void 0),
        u = r(2422),
        c = r(5893),
        d = (0, i.Gp)((e, t) => {
          let {
              Component: r,
              domRef: d,
              slots: f,
              classNames: p,
              isBlurred: h,
              isZoomed: m,
              fallbackSrc: v,
              removeWrapper: g,
              disableSkeleton: b,
              getImgProps: y,
              getWrapperProps: w,
              getBlurredImgProps: x,
            } = (function (e) {
              var t, r;
              let c = (0, o.w)(),
                [d, f] = (0, i.oe)(e, a.variantKeys),
                {
                  ref: p,
                  as: h,
                  src: m,
                  className: v,
                  classNames: g,
                  loading: b,
                  isBlurred: y,
                  fallbackSrc: w,
                  isLoading: x,
                  disableSkeleton: E = !!w,
                  removeWrapper: T = !1,
                  onError: P,
                  onLoad: C,
                  srcSet: k,
                  sizes: S,
                  crossOrigin: M,
                  ...A
                } = d,
                j = (0, u.d)({
                  src: m,
                  loading: b,
                  onError: P,
                  onLoad: C,
                  ignoreFallback: !1,
                  srcSet: k,
                  sizes: S,
                  crossOrigin: M,
                }),
                N =
                  null !=
                    (r =
                      null != (t = e.disableAnimation)
                        ? t
                        : null == c
                        ? void 0
                        : c.disableAnimation) && r,
                R = "loaded" === j && !x,
                O = "loading" === j || x,
                I = e.isZoomed,
                L = (function (e) {
                  let t = (0, n.useRef)(null);
                  return (0, n.useImperativeHandle)(e, () => t.current), t;
                })(p),
                { w: V, h: F } = (0, n.useMemo)(
                  () => ({
                    w: d.width
                      ? "number" == typeof d.width
                        ? `${d.width}px`
                        : d.width
                      : "fit-content",
                    h: d.height
                      ? "number" == typeof d.height
                        ? `${d.height}px`
                        : d.height
                      : "auto",
                  }),
                  [null == d ? void 0 : d.width, null == d ? void 0 : d.height]
                ),
                D = (!m || !R) && !!w,
                z = O && !E,
                W = (0, n.useMemo)(
                  () => a({ ...f, disableAnimation: N, showSkeleton: z }),
                  [
                    (function (e) {
                      if (!e || "object" != typeof e) return "";
                      try {
                        return JSON.stringify(e);
                      } catch (e) {
                        return "";
                      }
                    })(f),
                    N,
                    z,
                  ]
                ),
                K = s(v, null == g ? void 0 : g.img),
                B = (0, n.useCallback)(() => {
                  let e = D ? { backgroundImage: `url(${w})` } : {};
                  return {
                    className: W.wrapper({
                      class: null == g ? void 0 : g.wrapper,
                    }),
                    style: { ...e, maxWidth: V },
                  };
                }, [W, D, w, null == g ? void 0 : g.wrapper]),
                G = (0, n.useCallback)(
                  () => ({
                    src: m,
                    "aria-hidden": l(!0),
                    className: W.blurredImg({
                      class: null == g ? void 0 : g.blurredImg,
                    }),
                  }),
                  [W, m, null == g ? void 0 : g.blurredImg]
                );
              return {
                Component: h || "img",
                domRef: L,
                slots: W,
                classNames: g,
                isBlurred: y,
                disableSkeleton: E,
                fallbackSrc: w,
                removeWrapper: T,
                isZoomed: I,
                isLoading: O,
                getImgProps: (e = {}) => {
                  let t = s(K, null == e ? void 0 : e.className);
                  return {
                    src: m,
                    ref: L,
                    "data-loaded": l(R),
                    className: W.img({ class: t }),
                    loading: b,
                    srcSet: k,
                    sizes: S,
                    crossOrigin: M,
                    ...A,
                    style: {
                      ...((null == A ? void 0 : A.height) && { height: F }),
                      ...e.style,
                      ...A.style,
                    },
                  };
                },
                getWrapperProps: B,
                getBlurredImgProps: G,
              };
            })({ ...e, ref: t }),
            E = (0, c.jsx)(r, { ref: d, ...y() });
          if (g) return E;
          let T = (0, c.jsx)("div", {
            className: f.zoomedWrapper({
              class: null == p ? void 0 : p.zoomedWrapper,
            }),
            children: E,
          });
          return h
            ? (0, c.jsxs)("div", {
                ...w(),
                children: [m ? T : E, (0, n.cloneElement)(E, x())],
              })
            : m || !b || v
            ? (0, c.jsxs)("div", { ...w(), children: [" ", m ? T : E] })
            : E;
        });
      d.displayName = "NextUI.Image";
      var f = d;
    },
    6518: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return j;
        },
      });
      var [n, o] = (0, r(1120).k)({ name: "ButtonGroupContext", strict: !1 }),
        i = r(4486),
        a = r(8605),
        s = r(7294),
        l = r(7243),
        u = r(1086),
        c = r(2226),
        d = r(1237),
        f = r(9058),
        p = r(3610),
        h = r(3894),
        m = (0, p.tv)({
          base: [
            "z-0",
            "group",
            "relative",
            "inline-flex",
            "items-center",
            "justify-center",
            "box-border",
            "appearance-none",
            "outline-none",
            "select-none",
            "whitespace-nowrap",
            "min-w-max",
            "font-normal",
            "subpixel-antialiased",
            "overflow-hidden",
            "tap-highlight-transparent",
            "data-[pressed=true]:scale-[0.97]",
            ...h.Dh,
          ],
          variants: {
            variant: {
              solid: "",
              bordered: "border-medium bg-transparent",
              light: "bg-transparent",
              flat: "",
              faded: "border-medium",
              shadow: "",
              ghost: "border-medium bg-transparent",
            },
            size: {
              sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
              md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
              lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large",
            },
            color: {
              default: "",
              primary: "",
              secondary: "",
              success: "",
              warning: "",
              danger: "",
            },
            radius: {
              none: "rounded-none",
              sm: "rounded-small",
              md: "rounded-medium",
              lg: "rounded-large",
              full: "rounded-full",
            },
            fullWidth: { true: "w-full" },
            isDisabled: { true: "opacity-disabled pointer-events-none" },
            isInGroup: {
              true: "[&:not(:first-child):not(:last-child)]:rounded-none",
            },
            isIconOnly: {
              true: "px-0 !gap-0",
              false: "[&>svg]:max-w-[theme(spacing.8)]",
            },
            disableAnimation: {
              true: "!transition-none data-[pressed=true]:scale-100",
              false:
                "transition-transform-colors-opacity motion-reduce:transition-none",
            },
          },
          defaultVariants: {
            size: "md",
            variant: "solid",
            color: "default",
            fullWidth: !1,
            isDisabled: !1,
            isInGroup: !1,
          },
          compoundVariants: [
            {
              variant: "solid",
              color: "default",
              class: "bg-default text-default-foreground",
            },
            {
              variant: "solid",
              color: "primary",
              class: "bg-primary text-primary-foreground",
            },
            {
              variant: "solid",
              color: "secondary",
              class: "bg-secondary text-secondary-foreground",
            },
            {
              variant: "solid",
              color: "success",
              class: "bg-success text-success-foreground",
            },
            {
              variant: "solid",
              color: "warning",
              class: "bg-warning text-warning-foreground",
            },
            {
              variant: "solid",
              color: "danger",
              class: "bg-danger text-danger-foreground",
            },
            {
              variant: "shadow",
              color: "default",
              class:
                "shadow-lg shadow-default/50 bg-default text-default-foreground",
            },
            {
              variant: "shadow",
              color: "primary",
              class:
                "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
            },
            {
              variant: "shadow",
              color: "secondary",
              class:
                "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
            },
            {
              variant: "shadow",
              color: "success",
              class:
                "shadow-lg shadow-success/40 bg-success text-success-foreground",
            },
            {
              variant: "shadow",
              color: "warning",
              class:
                "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
            },
            {
              variant: "shadow",
              color: "danger",
              class:
                "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
            },
            {
              variant: "bordered",
              color: "default",
              class: "bg-transparent border-default text-foreground",
            },
            {
              variant: "bordered",
              color: "primary",
              class: "bg-transparent border-primary text-primary",
            },
            {
              variant: "bordered",
              color: "secondary",
              class: "bg-transparent border-secondary text-secondary",
            },
            {
              variant: "bordered",
              color: "success",
              class: "bg-transparent border-success text-success",
            },
            {
              variant: "bordered",
              color: "warning",
              class: "bg-transparent border-warning text-warning",
            },
            {
              variant: "bordered",
              color: "danger",
              class: "bg-transparent border-danger text-danger",
            },
            {
              variant: "flat",
              color: "default",
              class: "bg-default/40 text-default-700",
            },
            {
              variant: "flat",
              color: "primary",
              class: "bg-primary/20 text-primary-700",
            },
            {
              variant: "flat",
              color: "secondary",
              class: "bg-secondary/20 text-secondary-700",
            },
            {
              variant: "flat",
              color: "success",
              class: "bg-success/20 text-success-800 dark:text-success",
            },
            {
              variant: "flat",
              color: "warning",
              class: "bg-warning/20 text-warning-800 dark:text-warning",
            },
            {
              variant: "flat",
              color: "danger",
              class: "bg-danger/20 text-danger-800 dark:text-danger-500",
            },
            {
              variant: "faded",
              color: "default",
              class: "border-default bg-default-100 text-default-foreground",
            },
            {
              variant: "faded",
              color: "primary",
              class: "border-default bg-default-100 text-primary",
            },
            {
              variant: "faded",
              color: "secondary",
              class: "border-default bg-default-100 text-secondary",
            },
            {
              variant: "faded",
              color: "success",
              class: "border-default bg-default-100 text-success",
            },
            {
              variant: "faded",
              color: "warning",
              class: "border-default bg-default-100 text-warning",
            },
            {
              variant: "faded",
              color: "danger",
              class: "border-default bg-default-100 text-danger",
            },
            {
              variant: "light",
              color: "default",
              class: [
                "bg-transparent text-default-foreground",
                "data-[hover=true]:bg-default/40",
              ],
            },
            {
              variant: "light",
              color: "primary",
              class: [
                "bg-transparent text-primary",
                "data-[hover=true]:bg-primary/20",
              ],
            },
            {
              variant: "light",
              color: "secondary",
              class: [
                "bg-transparent text-secondary",
                "data-[hover=true]:bg-secondary/20",
              ],
            },
            {
              variant: "light",
              color: "success",
              class: [
                "bg-transparent text-success",
                "data-[hover=true]:bg-success/20",
              ],
            },
            {
              variant: "light",
              color: "warning",
              class: [
                "bg-transparent text-warning",
                "data-[hover=true]:bg-warning/20",
              ],
            },
            {
              variant: "light",
              color: "danger",
              class: [
                "bg-transparent text-danger",
                "data-[hover=true]:bg-danger/20",
              ],
            },
            {
              variant: "ghost",
              color: "default",
              class: [
                "border-default text-default-foreground",
                "data-[hover=true]:!bg-default",
              ],
            },
            {
              variant: "ghost",
              color: "primary",
              class: [
                "border-primary text-primary",
                "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "secondary",
              class: [
                "border-secondary text-secondary",
                "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "success",
              class: [
                "border-success text-success",
                "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "warning",
              class: [
                "border-warning text-warning",
                "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "danger",
              class: [
                "border-danger text-danger",
                "data-[hover=true]:!bg-danger !text-danger-foreground",
              ],
            },
            {
              isInGroup: !0,
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              size: "sm",
              class: "rounded-none first:rounded-s-small last:rounded-e-small",
            },
            {
              isInGroup: !0,
              size: "md",
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              size: "lg",
              class: "rounded-none first:rounded-s-large last:rounded-e-large",
            },
            {
              isInGroup: !0,
              isRounded: !0,
              class: "rounded-none first:rounded-s-full last:rounded-e-full",
            },
            {
              isInGroup: !0,
              radius: "none",
              class: "rounded-none first:rounded-s-none last:rounded-e-none",
            },
            {
              isInGroup: !0,
              radius: "sm",
              class: "rounded-none first:rounded-s-small last:rounded-e-small",
            },
            {
              isInGroup: !0,
              radius: "md",
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              radius: "lg",
              class: "rounded-none first:rounded-s-large last:rounded-e-large",
            },
            {
              isInGroup: !0,
              radius: "full",
              class: "rounded-none first:rounded-s-full last:rounded-e-full",
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "default",
              className: h.Zs.default,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "primary",
              className: h.Zs.primary,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "secondary",
              className: h.Zs.secondary,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "success",
              className: h.Zs.success,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "warning",
              className: h.Zs.warning,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "danger",
              className: h.Zs.danger,
            },
            { isIconOnly: !0, size: "sm", class: "min-w-8 w-8 h-8" },
            { isIconOnly: !0, size: "md", class: "min-w-10 w-10 h-10" },
            { isIconOnly: !0, size: "lg", class: "min-w-12 w-12 h-12" },
            {
              variant: ["solid", "faded", "flat", "bordered", "shadow"],
              class: "data-[hover=true]:opacity-hover",
            },
          ],
        });
      (0, p.tv)({
        base: "inline-flex items-center justify-center h-auto",
        variants: { fullWidth: { true: "w-full" } },
        defaultVariants: { fullWidth: !1 },
      });
      var v = r(5528),
        g = r(8419),
        b = r(5670),
        y = r(6493),
        w = (0, p.tv)({
          slots: {
            base: "relative inline-flex flex-col gap-2 items-center justify-center",
            wrapper: "relative flex",
            circle1: [
              "absolute",
              "w-full",
              "h-full",
              "rounded-full",
              "animate-spinner-ease-spin",
              "border-2",
              "border-solid",
              "border-t-transparent",
              "border-l-transparent",
              "border-r-transparent",
            ],
            circle2: [
              "absolute",
              "w-full",
              "h-full",
              "rounded-full",
              "opacity-75",
              "animate-spinner-linear-spin",
              "border-2",
              "border-dotted",
              "border-t-transparent",
              "border-l-transparent",
              "border-r-transparent",
            ],
            label: "text-foreground dark:text-foreground-dark font-regular",
          },
          variants: {
            size: {
              sm: {
                wrapper: "w-5 h-5",
                circle1: "border-2",
                circle2: "border-2",
                label: "text-small",
              },
              md: {
                wrapper: "w-8 h-8",
                circle1: "border-3",
                circle2: "border-3",
                label: "text-medium",
              },
              lg: {
                wrapper: "w-10 h-10",
                circle1: "border-3",
                circle2: "border-3",
                label: "text-large",
              },
            },
            color: {
              current: {
                circle1: "border-b-current",
                circle2: "border-b-current",
              },
              white: { circle1: "border-b-white", circle2: "border-b-white" },
              default: {
                circle1: "border-b-default",
                circle2: "border-b-default",
              },
              primary: {
                circle1: "border-b-primary",
                circle2: "border-b-primary",
              },
              secondary: {
                circle1: "border-b-secondary",
                circle2: "border-b-secondary",
              },
              success: {
                circle1: "border-b-success",
                circle2: "border-b-success",
              },
              warning: {
                circle1: "border-b-warning",
                circle2: "border-b-warning",
              },
              danger: {
                circle1: "border-b-danger",
                circle2: "border-b-danger",
              },
            },
            labelColor: {
              foreground: { label: "text-foreground" },
              primary: { label: "text-primary" },
              secondary: { label: "text-secondary" },
              success: { label: "text-success" },
              warning: { label: "text-warning" },
              danger: { label: "text-danger" },
            },
          },
          defaultVariants: {
            size: "md",
            color: "primary",
            labelColor: "foreground",
          },
        }),
        x = r(6972),
        E = r(5893),
        T = (0, y.Gp)((e, t) => {
          let {
            slots: r,
            classNames: n,
            label: o,
            getSpinnerProps: i,
          } = (function (e) {
            let [t, r] = (0, y.oe)(e, w.variantKeys),
              { children: n, className: o, classNames: i, label: a, ...l } = t,
              u = (0, s.useMemo)(() => w({ ...r }), [(0, b.Xx)(r)]),
              c = (0, x.W)(null == i ? void 0 : i.base, o),
              d = a || n,
              f = (0, s.useMemo)(
                () =>
                  d && "string" == typeof d
                    ? d
                    : l["aria-label"]
                    ? ""
                    : "Loading",
                [n, d, l["aria-label"]]
              ),
              p = (0, s.useCallback)(
                () => ({
                  "aria-label": f,
                  className: u.base({ class: c }),
                  ...l,
                }),
                [f, u, c, l]
              );
            return { label: d, slots: u, classNames: i, getSpinnerProps: p };
          })({ ...e });
          return (0, E.jsxs)("div", {
            ref: t,
            ...i(),
            children: [
              (0, E.jsxs)("div", {
                className: r.wrapper({ class: null == n ? void 0 : n.wrapper }),
                children: [
                  (0, E.jsx)("i", {
                    className: r.circle1({
                      class: null == n ? void 0 : n.circle1,
                    }),
                  }),
                  (0, E.jsx)("i", {
                    className: r.circle2({
                      class: null == n ? void 0 : n.circle2,
                    }),
                  }),
                ],
              }),
              o &&
                (0, E.jsx)("span", {
                  className: r.label({ class: null == n ? void 0 : n.label }),
                  children: o,
                }),
            ],
          });
        });
      T.displayName = "NextUI.Spinner";
      var P = r(8522),
        C = r(9664),
        k = r(1526),
        S = r(8897),
        M = (e) => {
          let {
            ripples: t = [],
            motionProps: r,
            color: n = "currentColor",
            style: o,
            onClear: i,
          } = e;
          return (0, E.jsx)(E.Fragment, {
            children: t.map((e) => {
              let t = Math.min(
                Math.max(0.01 * e.size, 0.2),
                e.size > 100 ? 0.75 : 0.5
              );
              return (0, E.jsx)(
                P.X,
                {
                  features: C.H,
                  children: (0, E.jsx)(k.M, {
                    mode: "popLayout",
                    children: (0, E.jsx)(S.m.span, {
                      animate: { transform: "scale(2)", opacity: 0 },
                      className: "nextui-ripple",
                      exit: { opacity: 0 },
                      initial: { transform: "scale(0)", opacity: 0.35 },
                      style: {
                        position: "absolute",
                        backgroundColor: n,
                        borderRadius: "100%",
                        transformOrigin: "center",
                        pointerEvents: "none",
                        overflow: "hidden",
                        inset: 0,
                        zIndex: 0,
                        top: e.y,
                        left: e.x,
                        width: `${e.size}px`,
                        height: `${e.size}px`,
                        ...o,
                      },
                      transition: { duration: t },
                      onAnimationComplete: () => {
                        i(e.key);
                      },
                      ...r,
                    }),
                  }),
                },
                e.key
              );
            }),
          });
        };
      M.displayName = "NextUI.Ripple";
      var A = (0, y.Gp)((e, t) => {
        let {
          Component: r,
          domRef: n,
          children: p,
          styles: h,
          spinnerSize: y,
          spinner: w = (0, E.jsx)(T, { color: "current", size: y }),
          spinnerPlacement: x,
          startContent: P,
          endContent: C,
          isLoading: k,
          disableRipple: S,
          getButtonProps: A,
          getRippleProps: j,
          isIconOnly: N,
        } = (function (e) {
          var t, r, n, p, h, y, w, x, E;
          let T = o(),
            P = (0, i.w)(),
            C = !!T,
            {
              ref: k,
              as: S,
              children: M,
              startContent: A,
              endContent: j,
              autoFocus: N,
              className: R,
              spinner: O,
              isLoading: I = !1,
              disableRipple: L = !1,
              fullWidth: V = null != (t = null == T ? void 0 : T.fullWidth) &&
                t,
              radius: F = null == T ? void 0 : T.radius,
              size: D = null != (r = null == T ? void 0 : T.size) ? r : "md",
              color: z = null != (n = null == T ? void 0 : T.color)
                ? n
                : "default",
              variant: W = null != (p = null == T ? void 0 : T.variant)
                ? p
                : "solid",
              disableAnimation: K = null !=
                (y =
                  null != (h = null == T ? void 0 : T.disableAnimation)
                    ? h
                    : null == P
                    ? void 0
                    : P.disableAnimation) && y,
              isDisabled: B = null != (w = null == T ? void 0 : T.isDisabled) &&
                w,
              isIconOnly: G = null != (x = null == T ? void 0 : T.isIconOnly) &&
                x,
              spinnerPlacement: H = "start",
              onPress: $,
              onClick: U,
              ..._
            } = e,
            Z = S || "button",
            q = "string" == typeof Z,
            X = (0, d.gy)(k),
            Y =
              null != (E = L || (null == P ? void 0 : P.disableRipple)) ? E : K,
            {
              isFocusVisible: J,
              isFocused: Q,
              focusProps: ee,
            } = (0, l.F)({ autoFocus: N }),
            et = B || I,
            er = (0, s.useMemo)(
              () =>
                m({
                  size: D,
                  color: z,
                  variant: W,
                  radius: F,
                  fullWidth: V,
                  isDisabled: et,
                  isInGroup: C,
                  disableAnimation: K,
                  isIconOnly: G,
                  className: R,
                }),
              [D, z, W, F, V, et, C, G, K, R]
            ),
            {
              onClick: en,
              onClear: eo,
              ripples: ei,
            } = (function (e = {}) {
              let [t, r] = (0, s.useState)([]);
              return {
                ripples: t,
                onClick: (0, s.useCallback)((e) => {
                  let t = e.currentTarget,
                    n = Math.max(t.clientWidth, t.clientHeight),
                    o = t.getBoundingClientRect();
                  r((t) => [
                    ...t,
                    {
                      key: (0, b.QI)(t.length.toString()),
                      size: n,
                      x: e.clientX - o.left - n / 2,
                      y: e.clientY - o.top - n / 2,
                    },
                  ]);
                }, []),
                onClear: (0, s.useCallback)((e) => {
                  r((t) => t.filter((t) => t.key !== e));
                }, []),
                ...e,
              };
            })(),
            ea = (0, s.useCallback)(
              (e) => {
                Y || et || K || !X.current || en(e);
              },
              [Y, et, K, X, en]
            ),
            { buttonProps: es, isPressed: el } = (0, v.j)(
              {
                elementType: S,
                isDisabled: et,
                onPress: $,
                onClick: (0, u.t)(U, ea),
                ..._,
              },
              X
            ),
            { isHovered: eu, hoverProps: ec } = (0, g.X)({ isDisabled: et }),
            ed = (0, s.useCallback)(
              (e = {}) => ({
                "data-disabled": (0, a.PB)(et),
                "data-focus": (0, a.PB)(Q),
                "data-pressed": (0, a.PB)(el),
                "data-focus-visible": (0, a.PB)(J),
                "data-hover": (0, a.PB)(eu),
                "data-loading": (0, a.PB)(I),
                ...(0, c.d)(
                  es,
                  ee,
                  ec,
                  (0, f.z)(_, { enabled: q }),
                  (0, f.z)(e)
                ),
              }),
              [I, et, Q, el, q, J, eu, es, ee, ec, _]
            ),
            ef = (e) =>
              (0, s.isValidElement)(e)
                ? (0, s.cloneElement)(e, {
                    "aria-hidden": !0,
                    focusable: !1,
                    tabIndex: -1,
                  })
                : null,
            ep = ef(A);
          return {
            Component: Z,
            children: M,
            domRef: X,
            spinner: O,
            styles: er,
            startContent: ep,
            endContent: ef(j),
            isLoading: I,
            spinnerPlacement: H,
            spinnerSize: (0, s.useMemo)(
              () => ({ sm: "sm", md: "sm", lg: "md" }[D]),
              [D]
            ),
            disableRipple: Y,
            getButtonProps: ed,
            getRippleProps: (0, s.useCallback)(
              () => ({ ripples: ei, onClear: eo }),
              [ei, eo]
            ),
            isIconOnly: G,
          };
        })({ ...e, ref: t });
        return (0, E.jsxs)(r, {
          ref: n,
          className: h,
          ...A(),
          children: [
            P,
            k && "start" === x && w,
            k && N ? null : p,
            k && "end" === x && w,
            C,
            !S && (0, E.jsx)(M, { ...j() }),
          ],
        });
      });
      A.displayName = "NextUI.Button";
      var j = A;
    },
    5260: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return u;
        },
      });
      var n = r(9058),
        o = (0, r(3610).tv)({
          base: "shrink-0 bg-divider border-none",
          variants: {
            orientation: {
              horizontal: "w-full h-divider",
              vertical: "h-full w-divider",
            },
          },
          defaultVariants: { orientation: "horizontal" },
        }),
        i = r(7294),
        a = r(6493),
        s = r(5893),
        l = (0, a.Gp)((e, t) => {
          let { Component: r, getDividerProps: a } = (function (e) {
            var t;
            let r, a;
            let { as: s, className: l, orientation: u, ...c } = e,
              d = s || "hr";
            "hr" === d && "vertical" === u && (d = "div");
            let { separatorProps: f } =
                ((t = {
                  elementType: "string" == typeof d ? d : "hr",
                  orientation: u,
                }),
                (a = (0, n.z)(t, {
                  enabled: "string" == typeof t.elementType,
                })),
                ("vertical" === t.orientation && (r = "vertical"),
                "hr" !== t.elementType)
                  ? {
                      separatorProps: {
                        ...a,
                        role: "separator",
                        "aria-orientation": r,
                      },
                    }
                  : { separatorProps: a }),
              p = (0, i.useMemo)(
                () => o({ orientation: u, className: l }),
                [u, l]
              );
            return {
              Component: d,
              getDividerProps: (0, i.useCallback)(
                (e = {}) => ({
                  className: p,
                  role: "separator",
                  "data-orientation": u,
                  ...f,
                  ...c,
                  ...e,
                }),
                [p, u, f, c]
              ),
            };
          })({ ...e });
          return (0, s.jsx)(r, { ref: t, ...a() });
        });
      l.displayName = "NextUI.Divider";
      var u = l;
    },
    9776: function (e, t, r) {
      "use strict";
      r.d(t, {
        L: function () {
          return g;
        },
      });
      var n = r(7170),
        o = r(1086),
        i = r(2226),
        a = r(5528),
        s = r(6493),
        l = r(1237),
        u = r(6972),
        c = r(8605),
        d = r(9373),
        f = r(7243),
        p = r(8419),
        h = r(7294),
        m = r(5893),
        v = (0, s.Gp)((e, t) => {
          var r;
          let {
              as: s,
              icon: v,
              className: g,
              onChange: b,
              autoFocus: y,
              srOnlyText: w,
              ...x
            } = e,
            E = (0, l.gy)(t),
            {
              slots: T,
              classNames: P,
              isMenuOpen: C,
              setIsMenuOpen: k,
            } = (0, n.q)(),
            S = (function (e = {}) {
              let { isReadOnly: t } = e,
                [r, n] = (0, d.z)(
                  e.isSelected,
                  e.defaultSelected || !1,
                  e.onChange
                );
              return {
                isSelected: r,
                setSelected: function (e) {
                  t || n(e);
                },
                toggle: function () {
                  t || n(!r);
                },
              };
            })({
              ...x,
              isSelected: C,
              onChange: (e) => {
                null == b || b(e), k(e);
              },
            }),
            { buttonProps: M, isPressed: A } = (function (e, t, r) {
              let { isSelected: n } = t,
                { isPressed: s, buttonProps: l } = (0, a.j)(
                  { ...e, onPress: (0, o.t)(t.toggle, e.onPress) },
                  r
                );
              return {
                isPressed: s,
                buttonProps: (0, i.d)(l, { "aria-pressed": n }),
              };
            })(e, S, E),
            { isFocusVisible: j, focusProps: N } = (0, f.F)({ autoFocus: y }),
            { isHovered: R, hoverProps: O } = (0, p.X)({}),
            I = (0, u.W)(null == P ? void 0 : P.toggle, g),
            L = (0, h.useMemo)(
              () =>
                "function" == typeof v
                  ? v(null != C && C)
                  : v ||
                    (0, m.jsx)("span", {
                      className: T.toggleIcon({
                        class: null == P ? void 0 : P.toggleIcon,
                      }),
                    }),
              [v, C, T.toggleIcon, null == P ? void 0 : P.toggleIcon]
            ),
            V = (0, h.useMemo)(
              () =>
                w ||
                (S.isSelected
                  ? "close navigation menu"
                  : "open navigation menu"),
              [w, C]
            );
          return (0, m.jsxs)(s || "button", {
            ref: E,
            className:
              null == (r = T.toggle) ? void 0 : r.call(T, { class: I }),
            "data-focus-visible": (0, c.PB)(j),
            "data-hover": (0, c.PB)(R),
            "data-open": (0, c.PB)(C),
            "data-pressed": (0, c.PB)(A),
            ...(0, i.d)(M, N, O, x),
            children: [
              (0, m.jsx)("span", { className: T.srOnly(), children: V }),
              L,
            ],
          });
        });
      v.displayName = "NextUI.NavbarMenuToggle";
      var g = v;
    },
    7170: function (e, t, r) {
      "use strict";
      r.d(t, {
        V: function () {
          return n;
        },
        q: function () {
          return o;
        },
      });
      var [n, o] = (0, r(1120).k)({
        name: "NavbarContext",
        strict: !0,
        errorMessage:
          "useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />",
      });
    },
    5975: function (e, t, r) {
      "use strict";
      r.d(t, {
        k: function () {
          return c;
        },
      });
      var n = r(7170),
        o = r(6493),
        i = r(1237),
        a = r(6972),
        s = r(8605),
        l = r(5893),
        u = (0, o.Gp)((e, t) => {
          var r;
          let { as: o, className: u, children: c, isActive: d, ...f } = e,
            p = (0, i.gy)(t),
            { slots: h, classNames: m } = (0, n.q)(),
            v = (0, a.W)(null == m ? void 0 : m.item, u);
          return (0, l.jsx)(o || "li", {
            ref: p,
            className: null == (r = h.item) ? void 0 : r.call(h, { class: v }),
            "data-active": (0, s.PB)(d),
            ...f,
            children: c,
          });
        });
      u.displayName = "NextUI.NavbarItem";
      var c = u;
    },
    8957: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return eZ;
        },
      });
      var n,
        o,
        i,
        a,
        s,
        l,
        u,
        c = r(7170),
        d = {
          enter: {
            height: "calc(100vh - var(--navbar-height))",
            transition: { duration: 0.3, easings: "easeOut" },
          },
          exit: {
            height: 0,
            transition: { duration: 0.25, easings: "easeIn" },
          },
        },
        f = r(6493),
        p = r(1237),
        h = r(6972),
        m = r(8605),
        v = r(1526),
        g = r(8522),
        b = r(9664),
        y = r(8897),
        w = r(2226),
        x = r(7294),
        E = function () {
          return (E =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function T(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, n = Object.getOwnPropertySymbols(e);
            o < n.length;
            o++
          )
            0 > t.indexOf(n[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
              (r[n[o]] = e[n[o]]);
        return r;
      }
      "function" == typeof SuppressedError && SuppressedError;
      var P = "right-scroll-bar-position",
        C = "width-before-scroll-bar";
      function k(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var S = "undefined" != typeof window ? x.useLayoutEffect : x.useEffect,
        M = new WeakMap(),
        A =
          (void 0 === n && (n = {}),
          ((void 0 === o &&
            (o = function (e) {
              return e;
            }),
          (i = []),
          (a = !1),
          (s = {
            read: function () {
              if (a)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return i.length ? i[i.length - 1] : null;
            },
            useMedium: function (e) {
              var t = o(e, a);
              return (
                i.push(t),
                function () {
                  i = i.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (a = !0; i.length; ) {
                var t = i;
                (i = []), t.forEach(e);
              }
              i = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return i;
                },
              };
            },
            assignMedium: function (e) {
              a = !0;
              var t = [];
              if (i.length) {
                var r = i;
                (i = []), r.forEach(e), (t = i);
              }
              var n = function () {
                  var r = t;
                  (t = []), r.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(n);
                };
              o(),
                (i = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), i;
                  },
                });
            },
          })).options = E({ async: !0, ssr: !1 }, n)),
          s),
        j = function () {},
        N = x.forwardRef(function (e, t) {
          var r,
            n,
            o,
            i,
            a = x.useRef(null),
            s = x.useState({
              onScrollCapture: j,
              onWheelCapture: j,
              onTouchMoveCapture: j,
            }),
            l = s[0],
            u = s[1],
            c = e.forwardProps,
            d = e.children,
            f = e.className,
            p = e.removeScrollBar,
            h = e.enabled,
            m = e.shards,
            v = e.sideCar,
            g = e.noIsolation,
            b = e.inert,
            y = e.allowPinchZoom,
            w = e.as,
            P = e.gapMode,
            C = T(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            N =
              ((r = [a, t]),
              (n = function (e) {
                return r.forEach(function (t) {
                  return k(t, e);
                });
              }),
              ((o = (0, x.useState)(function () {
                return {
                  value: null,
                  callback: n,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = n),
              (i = o.facade),
              S(
                function () {
                  var e = M.get(i);
                  if (e) {
                    var t = new Set(e),
                      n = new Set(r),
                      o = i.current;
                    t.forEach(function (e) {
                      n.has(e) || k(e, null);
                    }),
                      n.forEach(function (e) {
                        t.has(e) || k(e, o);
                      });
                  }
                  M.set(i, r);
                },
                [r]
              ),
              i),
            R = E(E({}, C), l);
          return x.createElement(
            x.Fragment,
            null,
            h &&
              x.createElement(v, {
                sideCar: A,
                removeScrollBar: p,
                shards: m,
                noIsolation: g,
                inert: b,
                setCallbacks: u,
                allowPinchZoom: !!y,
                lockRef: a,
                gapMode: P,
              }),
            c
              ? x.cloneElement(x.Children.only(d), E(E({}, R), { ref: N }))
              : x.createElement(
                  void 0 === w ? "div" : w,
                  E({}, R, { className: f, ref: N }),
                  d
                )
          );
        });
      (N.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (N.classNames = { fullWidth: C, zeroRight: P });
      var R = function (e) {
        var t = e.sideCar,
          r = T(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var n = t.read();
        if (!n) throw Error("Sidecar medium not found");
        return x.createElement(n, E({}, r));
      };
      R.isSideCarExport = !0;
      var O = function () {
          var e = 0,
            t = null;
          return {
            add: function (n) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = u || r.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var o, i;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = n)
                  : o.appendChild(document.createTextNode(n)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        I = function () {
          var e = O();
          return function (t, r) {
            x.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && r]
            );
          };
        },
        L = function () {
          var e = I();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        V = { left: 0, top: 0, right: 0, gap: 0 },
        F = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        D = function (e) {
          var t = window.getComputedStyle(document.body),
            r = t["padding" === e ? "paddingLeft" : "marginLeft"],
            n = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [F(r), F(n), F(o)];
        },
        z = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return V;
          var t = D(e),
            r = document.documentElement.clientWidth,
            n = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, n - r + t[2] - t[0]),
          };
        },
        W = L(),
        K = "data-scroll-locked",
        B = function (e, t, r, n) {
          var o = e.left,
            i = e.top,
            a = e.right,
            s = e.gap;
          return (
            void 0 === r && (r = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(n, ";\n   padding-right: ")
              .concat(s, "px ")
              .concat(n, ";\n  }\n  body[")
              .concat(K, "] {\n    overflow: hidden ")
              .concat(n, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(n, ";"),
                  "margin" === r &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(s, "px ")
                      .concat(n, ";\n    "),
                  "padding" === r &&
                    "padding-right: ".concat(s, "px ").concat(n, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(P, " {\n    right: ")
              .concat(s, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(C, " {\n    margin-right: ")
              .concat(s, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(P, " .")
              .concat(P, " {\n    right: 0 ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(C, " .")
              .concat(C, " {\n    margin-right: 0 ")
              .concat(n, ";\n  }\n  \n  body[")
              .concat(K, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(s, "px;\n  }\n")
          );
        },
        G = function () {
          var e = parseInt(document.body.getAttribute(K) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        H = function () {
          x.useEffect(function () {
            return (
              document.body.setAttribute(K, (G() + 1).toString()),
              function () {
                var e = G() - 1;
                e <= 0
                  ? document.body.removeAttribute(K)
                  : document.body.setAttribute(K, e.toString());
              }
            );
          }, []);
        },
        $ = function (e) {
          var t = e.noRelative,
            r = e.noImportant,
            n = e.gapMode,
            o = void 0 === n ? "margin" : n;
          H();
          var i = x.useMemo(
            function () {
              return z(o);
            },
            [o]
          );
          return x.createElement(W, {
            styles: B(i, !t, o, r ? "" : "!important"),
          });
        },
        U = !1;
      if ("undefined" != typeof window)
        try {
          var _ = Object.defineProperty({}, "passive", {
            get: function () {
              return (U = !0), !0;
            },
          });
          window.addEventListener("test", _, _),
            window.removeEventListener("test", _, _);
        } catch (e) {
          U = !1;
        }
      var Z = !!U && { passive: !1 },
        q = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var r = window.getComputedStyle(e);
          return (
            "hidden" !== r[t] &&
            !(
              r.overflowY === r.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === r[t]
            )
          );
        },
        X = function (e, t) {
          var r = t.ownerDocument,
            n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              Y(e, n))
            ) {
              var o = J(e, n);
              if (o[1] > o[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== r.body);
          return !1;
        },
        Y = function (e, t) {
          return "v" === e ? q(t, "overflowY") : q(t, "overflowX");
        },
        J = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        Q = function (e, t, r, n, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            s = a * n,
            l = r.target,
            u = t.contains(l),
            c = !1,
            d = s > 0,
            f = 0,
            p = 0;
          do {
            var h = J(e, l),
              m = h[0],
              v = h[1] - h[2] - a * m;
            (m || v) && Y(e, l) && ((f += v), (p += m)),
              l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
          } while (
            (!u && l !== document.body) ||
            (u && (t.contains(l) || t === l))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && s > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -s > p)) && (c = !0),
            c
          );
        },
        ee = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        et = function (e) {
          return [e.deltaX, e.deltaY];
        },
        er = function (e) {
          return e && "current" in e ? e.current : e;
        },
        en = 0,
        eo = [],
        ei =
          ((l = function (e) {
            var t = x.useRef([]),
              r = x.useRef([0, 0]),
              n = x.useRef(),
              o = x.useState(en++)[0],
              i = x.useState(L)[0],
              a = x.useRef(e);
            x.useEffect(
              function () {
                a.current = e;
              },
              [e]
            ),
              x.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o)
                    );
                    var t = (function (e, t, r) {
                      if (r || 2 == arguments.length)
                        for (var n, o = 0, i = t.length; o < i; o++)
                          (!n && o in t) ||
                            (n || (n = Array.prototype.slice.call(t, 0, o)),
                            (n[o] = t[o]));
                      return e.concat(n || Array.prototype.slice.call(t));
                    })(
                      [e.lockRef.current],
                      (e.shards || []).map(er),
                      !0
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var s = x.useCallback(function (e, t) {
                if (
                  ("touches" in e && 2 === e.touches.length) ||
                  ("wheel" === e.type && e.ctrlKey)
                )
                  return !a.current.allowPinchZoom;
                var o,
                  i = ee(e),
                  s = r.current,
                  l = "deltaX" in e ? e.deltaX : s[0] - i[0],
                  u = "deltaY" in e ? e.deltaY : s[1] - i[1],
                  c = e.target,
                  d = Math.abs(l) > Math.abs(u) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === c.type)
                  return !1;
                var f = X(d, c);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = X(d, c))),
                  !f)
                )
                  return !1;
                if (
                  (!n.current &&
                    "changedTouches" in e &&
                    (l || u) &&
                    (n.current = o),
                  !o)
                )
                  return !0;
                var p = n.current || o;
                return Q(p, t, e, "h" === p ? l : u, !0);
              }, []),
              l = x.useCallback(function (e) {
                if (eo.length && eo[eo.length - 1] === i) {
                  var r = "deltaY" in e ? et(e) : ee(e),
                    n = t.current.filter(function (t) {
                      var n;
                      return (
                        t.name === e.type &&
                        (t.target === e.target ||
                          e.target === t.shadowParent) &&
                        (n = t.delta)[0] === r[0] &&
                        n[1] === r[1]
                      );
                    })[0];
                  if (n && n.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!n) {
                    var o = (a.current.shards || [])
                      .map(er)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? s(e, o[0]) : !a.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              u = x.useCallback(function (e, r, n, o) {
                var i = {
                  name: e,
                  delta: r,
                  target: n,
                  should: o,
                  shadowParent: (function (e) {
                    for (var t = null; null !== e; )
                      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                        (e = e.parentNode);
                    return t;
                  })(n),
                };
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              c = x.useCallback(function (e) {
                (r.current = ee(e)), (n.current = void 0);
              }, []),
              d = x.useCallback(function (t) {
                u(t.type, et(t), t.target, s(t, e.lockRef.current));
              }, []),
              f = x.useCallback(function (t) {
                u(t.type, ee(t), t.target, s(t, e.lockRef.current));
              }, []);
            x.useEffect(function () {
              return (
                eo.push(i),
                e.setCallbacks({
                  onScrollCapture: d,
                  onWheelCapture: d,
                  onTouchMoveCapture: f,
                }),
                document.addEventListener("wheel", l, Z),
                document.addEventListener("touchmove", l, Z),
                document.addEventListener("touchstart", c, Z),
                function () {
                  (eo = eo.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener("wheel", l, Z),
                    document.removeEventListener("touchmove", l, Z),
                    document.removeEventListener("touchstart", c, Z);
                }
              );
            }, []);
            var p = e.removeScrollBar,
              h = e.inert;
            return x.createElement(
              x.Fragment,
              null,
              h
                ? x.createElement(i, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              p ? x.createElement($, { gapMode: e.gapMode }) : null
            );
          }),
          A.useMedium(l),
          R),
        ea = x.forwardRef(function (e, t) {
          return x.createElement(N, E({}, e, { ref: t, sideCar: ei }));
        });
      ea.classNames = N.classNames;
      let es = (0, x.createContext)({});
      var el = r(4942);
      function eu({ children: e }) {
        let t = (0, x.useMemo)(() => ({ register: () => {} }), []);
        return x.createElement(el.O.Provider, { value: t }, e);
      }
      var ec = r(6590),
        ed = r(8837),
        ef = r(9786);
      let ep = x.createContext(null),
        eh = null;
      function em(e) {
        let t,
          r,
          { children: n, contain: o, restoreFocus: i, autoFocus: a } = e,
          s = (0, x.useRef)(null),
          l = (0, x.useRef)(null),
          u = (0, x.useRef)([]),
          { parentNode: c } = (0, x.useContext)(ep) || {},
          d = (0, x.useMemo)(() => new eM({ scopeRef: u }), [u]);
        (0, ef.b)(() => {
          let e = c || eA.root;
          if (eA.getTreeNode(e.scopeRef) && eh && !eT(eh, e.scopeRef)) {
            let t = eA.getTreeNode(eh);
            t && (e = t);
          }
          e.addChild(d), eA.addNode(d);
        }, [d, c]),
          (0, ef.b)(() => {
            let e = eA.getTreeNode(u);
            e && (e.contain = !!o);
          }, [o]),
          (0, ef.b)(() => {
            var e;
            let t =
                null === (e = s.current) || void 0 === e
                  ? void 0
                  : e.nextSibling,
              r = [];
            for (; t && t !== l.current; ) r.push(t), (t = t.nextSibling);
            u.current = r;
          }, [n]),
          (0, ef.b)(() => {
            if (i || o) return;
            let e = u.current,
              t = (0, ed.r)(e ? e[0] : void 0),
              r = (e) => {
                let t = e.target;
                ex(t, u.current) ? (eh = u) : eE(t) || (eh = null);
              };
            return (
              t.addEventListener("focusin", r, !1),
              null == e ||
                e.forEach((e) => e.addEventListener("focusin", r, !1)),
              () => {
                t.removeEventListener("focusin", r, !1),
                  null == e ||
                    e.forEach((e) => e.removeEventListener("focusin", r, !1));
              }
            );
          }, [u, i, o]),
          (t = (0, x.useRef)()),
          (r = (0, x.useRef)()),
          (0, ef.b)(() => {
            let e = u.current;
            if (!o) {
              r.current &&
                (cancelAnimationFrame(r.current), (r.current = void 0));
              return;
            }
            let n = (0, ed.r)(e ? e[0] : void 0),
              i = (e) => {
                if (
                  "Tab" !== e.key ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  !ew(u) ||
                  e.isComposing
                )
                  return;
                let t = n.activeElement,
                  r = u.current;
                if (!r || !ex(t, r)) return;
                let o = ek(ey(r), { tabbable: !0 }, r);
                if (!t) return;
                o.currentNode = t;
                let i = e.shiftKey ? o.previousNode() : o.nextNode();
                i ||
                  ((o.currentNode = e.shiftKey
                    ? r[r.length - 1].nextElementSibling
                    : r[0].previousElementSibling),
                  (i = e.shiftKey ? o.previousNode() : o.nextNode())),
                  e.preventDefault(),
                  i && eP(i, !0);
              },
              a = (e) => {
                (!eh || eT(eh, u)) && ex(e.target, u.current)
                  ? ((eh = u), (t.current = e.target))
                  : ew(u) && !eE(e.target, u)
                  ? t.current
                    ? t.current.focus()
                    : eh && eh.current && eC(eh.current)
                  : ew(u) && (t.current = e.target);
              },
              s = (e) => {
                r.current && cancelAnimationFrame(r.current),
                  (r.current = requestAnimationFrame(() => {
                    if (n.activeElement && ew(u) && !eE(n.activeElement, u)) {
                      if (((eh = u), n.body.contains(e.target))) {
                        var r;
                        (t.current = e.target),
                          null === (r = t.current) || void 0 === r || r.focus();
                      } else eh.current && eC(eh.current);
                    }
                  }));
              };
            return (
              n.addEventListener("keydown", i, !1),
              n.addEventListener("focusin", a, !1),
              null == e ||
                e.forEach((e) => e.addEventListener("focusin", a, !1)),
              null == e ||
                e.forEach((e) => e.addEventListener("focusout", s, !1)),
              () => {
                n.removeEventListener("keydown", i, !1),
                  n.removeEventListener("focusin", a, !1),
                  null == e ||
                    e.forEach((e) => e.removeEventListener("focusin", a, !1)),
                  null == e ||
                    e.forEach((e) => e.removeEventListener("focusout", s, !1));
              }
            );
          }, [u, o]),
          (0, ef.b)(
            () => () => {
              r.current && cancelAnimationFrame(r.current);
            },
            [r]
          ),
          (function (e, t, r) {
            let n = (0, x.useRef)(
              "undefined" != typeof document
                ? (0, ed.r)(e.current ? e.current[0] : void 0).activeElement
                : null
            );
            (0, ef.b)(() => {
              let n = e.current,
                o = (0, ed.r)(n ? n[0] : void 0);
              if (!t || r) return;
              let i = () => {
                (!eh || eT(eh, e)) &&
                  ex(o.activeElement, e.current) &&
                  (eh = e);
              };
              return (
                o.addEventListener("focusin", i, !1),
                null == n ||
                  n.forEach((e) => e.addEventListener("focusin", i, !1)),
                () => {
                  o.removeEventListener("focusin", i, !1),
                    null == n ||
                      n.forEach((e) => e.removeEventListener("focusin", i, !1));
                }
              );
            }, [e, r]),
              (0, ef.b)(() => {
                let n = (0, ed.r)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let o = (t) => {
                  if (
                    "Tab" !== t.key ||
                    t.altKey ||
                    t.ctrlKey ||
                    t.metaKey ||
                    !ew(e) ||
                    t.isComposing
                  )
                    return;
                  let r = n.activeElement;
                  if (!ex(r, e.current)) return;
                  let o = eA.getTreeNode(e);
                  if (!o) return;
                  let i = o.nodeToRestore,
                    a = ek(n.body, { tabbable: !0 });
                  a.currentNode = r;
                  let s = t.shiftKey ? a.previousNode() : a.nextNode();
                  if (
                    ((i && n.body.contains(i) && i !== n.body) ||
                      ((i = void 0), (o.nodeToRestore = void 0)),
                    (!s || !ex(s, e.current)) && i)
                  ) {
                    a.currentNode = i;
                    do s = t.shiftKey ? a.previousNode() : a.nextNode();
                    while (ex(s, e.current));
                    (t.preventDefault(), t.stopPropagation(), s)
                      ? eP(s, !0)
                      : eE(i)
                      ? eP(i, !0)
                      : r.blur();
                  }
                };
                return (
                  r || n.addEventListener("keydown", o, !0),
                  () => {
                    r || n.removeEventListener("keydown", o, !0);
                  }
                );
              }, [e, t, r]),
              (0, ef.b)(() => {
                var r;
                let o = (0, ed.r)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let i = eA.getTreeNode(e);
                if (i)
                  return (
                    (i.nodeToRestore =
                      null !== (r = n.current) && void 0 !== r ? r : void 0),
                    () => {
                      let r = eA.getTreeNode(e);
                      if (!r) return;
                      let n = r.nodeToRestore;
                      if (
                        t &&
                        n &&
                        (ex(o.activeElement, e.current) ||
                          (o.activeElement === o.body &&
                            (function (e) {
                              let t = eA.getTreeNode(eh);
                              for (; t && t.scopeRef !== e; ) {
                                if (t.nodeToRestore) return !1;
                                t = t.parent;
                              }
                              return (null == t ? void 0 : t.scopeRef) === e;
                            })(e)))
                      ) {
                        let t = eA.clone();
                        requestAnimationFrame(() => {
                          if (o.activeElement === o.body) {
                            let r = t.getTreeNode(e);
                            for (; r; ) {
                              if (
                                r.nodeToRestore &&
                                r.nodeToRestore.isConnected
                              ) {
                                eP(r.nodeToRestore);
                                return;
                              }
                              r = r.parent;
                            }
                            for (r = t.getTreeNode(e); r; ) {
                              if (
                                r.scopeRef &&
                                r.scopeRef.current &&
                                eA.getTreeNode(r.scopeRef)
                              ) {
                                eC(r.scopeRef.current, !0);
                                return;
                              }
                              r = r.parent;
                            }
                          }
                        });
                      }
                    }
                  );
              }, [e, t]);
          })(u, i, o),
          (function (e, t) {
            let r = x.useRef(t);
            (0, x.useEffect)(() => {
              r.current &&
                ((eh = e),
                !ex(
                  (0, ed.r)(e.current ? e.current[0] : void 0).activeElement,
                  eh.current
                ) &&
                  e.current &&
                  eC(e.current)),
                (r.current = !1);
            }, [e]);
          })(u, a),
          (0, x.useEffect)(() => {
            let e = (0, ed.r)(u.current ? u.current[0] : void 0).activeElement,
              t = null;
            if (ex(e, u.current)) {
              for (let r of eA.traverse())
                r.scopeRef && ex(e, r.scopeRef.current) && (t = r);
              t === eA.getTreeNode(u) && (eh = t.scopeRef);
            }
          }, [u]),
          (0, ef.b)(
            () => () => {
              var e, t, r;
              let n =
                null !==
                  (r =
                    null === (t = eA.getTreeNode(u)) || void 0 === t
                      ? void 0
                      : null === (e = t.parent) || void 0 === e
                      ? void 0
                      : e.scopeRef) && void 0 !== r
                  ? r
                  : null;
              (u === eh || eT(u, eh)) && (!n || eA.getTreeNode(n)) && (eh = n),
                eA.removeTreeNode(u);
            },
            [u]
          );
        let f = (0, x.useMemo)(
            () => ({
              focusNext(e = {}) {
                let t = u.current,
                  { from: r, tabbable: n, wrap: o, accept: i } = e,
                  a = r || (0, ed.r)(t[0]).activeElement,
                  s = t[0].previousElementSibling,
                  l = ek(ey(t), { tabbable: n, accept: i }, t);
                l.currentNode = ex(a, t) ? a : s;
                let c = l.nextNode();
                return (
                  !c && o && ((l.currentNode = s), (c = l.nextNode())),
                  c && eP(c, !0),
                  c
                );
              },
              focusPrevious(e = {}) {
                let t = u.current,
                  { from: r, tabbable: n, wrap: o, accept: i } = e,
                  a = r || (0, ed.r)(t[0]).activeElement,
                  s = t[t.length - 1].nextElementSibling,
                  l = ek(ey(t), { tabbable: n, accept: i }, t);
                l.currentNode = ex(a, t) ? a : s;
                let c = l.previousNode();
                return (
                  !c && o && ((l.currentNode = s), (c = l.previousNode())),
                  c && eP(c, !0),
                  c
                );
              },
              focusFirst(e = {}) {
                let t = u.current,
                  { tabbable: r, accept: n } = e,
                  o = ek(ey(t), { tabbable: r, accept: n }, t);
                o.currentNode = t[0].previousElementSibling;
                let i = o.nextNode();
                return i && eP(i, !0), i;
              },
              focusLast(e = {}) {
                let t = u.current,
                  { tabbable: r, accept: n } = e,
                  o = ek(ey(t), { tabbable: r, accept: n }, t);
                o.currentNode = t[t.length - 1].nextElementSibling;
                let i = o.previousNode();
                return i && eP(i, !0), i;
              },
            }),
            []
          ),
          p = (0, x.useMemo)(
            () => ({ focusManager: f, parentNode: d }),
            [d, f]
          );
        return x.createElement(
          ep.Provider,
          { value: p },
          x.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: s,
          }),
          n,
          x.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: l,
          })
        );
      }
      let ev = [
          "input:not([disabled]):not([type=hidden])",
          "select:not([disabled])",
          "textarea:not([disabled])",
          "button:not([disabled])",
          "a[href]",
          "area[href]",
          "summary",
          "iframe",
          "object",
          "embed",
          "audio[controls]",
          "video[controls]",
          "[contenteditable]",
        ],
        eg =
          ev.join(":not([hidden]),") +
          ",[tabindex]:not([disabled]):not([hidden])";
      ev.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      let eb = ev.join(':not([hidden]):not([tabindex="-1"]),');
      function ey(e) {
        return e[0].parentElement;
      }
      function ew(e) {
        let t = eA.getTreeNode(eh);
        for (; t && t.scopeRef !== e; ) {
          if (t.contain) return !1;
          t = t.parent;
        }
        return !0;
      }
      function ex(e, t) {
        return !!e && !!t && t.some((t) => t.contains(e));
      }
      function eE(e, t = null) {
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
          return !0;
        for (let { scopeRef: r } of eA.traverse(eA.getTreeNode(t)))
          if (r && ex(e, r.current)) return !0;
        return !1;
      }
      function eT(e, t) {
        var r;
        let n =
          null === (r = eA.getTreeNode(t)) || void 0 === r ? void 0 : r.parent;
        for (; n; ) {
          if (n.scopeRef === e) return !0;
          n = n.parent;
        }
        return !1;
      }
      function eP(e, t = !1) {
        if (null == e || t) {
          if (null != e)
            try {
              e.focus();
            } catch (e) {}
        } else
          try {
            (0, ec.e)(e);
          } catch (e) {}
      }
      function eC(e, t = !0) {
        let r = e[0].previousElementSibling,
          n = ey(e),
          o = ek(n, { tabbable: t }, e);
        o.currentNode = r;
        let i = o.nextNode();
        t &&
          !i &&
          (((o = ek((n = ey(e)), { tabbable: !1 }, e)).currentNode = r),
          (i = o.nextNode())),
          eP(i);
      }
      function ek(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? eb : eg,
          o = (0, ed.r)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (
                null == t
                  ? void 0
                  : null === (o = t.from) || void 0 === o
                  ? void 0
                  : o.contains(e)
              )
                ? NodeFilter.FILTER_REJECT
                : e.matches(n) &&
                  (function e(t, r) {
                    return (
                      "#comment" !== t.nodeName &&
                      (function (e) {
                        let t = (0, ed.k)(e);
                        if (
                          !(e instanceof t.HTMLElement) &&
                          !(e instanceof t.SVGElement)
                        )
                          return !1;
                        let { display: r, visibility: n } = e.style,
                          o =
                            "none" !== r && "hidden" !== n && "collapse" !== n;
                        if (o) {
                          let { getComputedStyle: t } =
                              e.ownerDocument.defaultView,
                            { display: r, visibility: n } = t(e);
                          o =
                            "none" !== r && "hidden" !== n && "collapse" !== n;
                        }
                        return o;
                      })(t) &&
                      !t.hasAttribute("hidden") &&
                      !t.hasAttribute("data-react-aria-prevent-focus") &&
                      ("DETAILS" !== t.nodeName ||
                        !r ||
                        "SUMMARY" === r.nodeName ||
                        t.hasAttribute("open")) &&
                      (!t.parentElement || e(t.parentElement, t))
                    );
                  })(e) &&
                  (!r || ex(e, r)) &&
                  (!(null == t ? void 0 : t.accept) || t.accept(e))
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        return (null == t ? void 0 : t.from) && (o.currentNode = t.from), o;
      }
      class eS {
        get size() {
          return this.fastMap.size;
        }
        getTreeNode(e) {
          return this.fastMap.get(e);
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new eM({ scopeRef: e });
          n.addChild(o),
            (o.parent = n),
            this.fastMap.set(e, o),
            r && (o.nodeToRestore = r);
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e);
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let r = t.parent;
          for (let e of this.traverse())
            e !== t &&
              t.nodeToRestore &&
              e.nodeToRestore &&
              t.scopeRef &&
              t.scopeRef.current &&
              ex(e.nodeToRestore, t.scopeRef.current) &&
              (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r &&
            (r.removeChild(t),
            n.size > 0 && n.forEach((e) => r && r.addChild(e))),
            this.fastMap.delete(t.scopeRef);
        }
        *traverse(e = this.root) {
          if ((null != e.scopeRef && (yield e), e.children.size > 0))
            for (let t of e.children) yield* this.traverse(t);
        }
        clone() {
          var e, t;
          let r = new eS();
          for (let n of this.traverse())
            r.addTreeNode(
              n.scopeRef,
              null !==
                (t =
                  null === (e = n.parent) || void 0 === e
                    ? void 0
                    : e.scopeRef) && void 0 !== t
                ? t
                : null,
              n.nodeToRestore
            );
          return r;
        }
        constructor() {
          (this.fastMap = new Map()),
            (this.root = new eM({ scopeRef: null })),
            this.fastMap.set(null, this.root);
        }
      }
      class eM {
        addChild(e) {
          this.children.add(e), (e.parent = this);
        }
        removeChild(e) {
          this.children.delete(e), (e.parent = void 0);
        }
        constructor(e) {
          (this.children = new Set()),
            (this.contain = !1),
            (this.scopeRef = e.scopeRef);
        }
      }
      let eA = new eS();
      var ej = r(3935),
        eN = r(7385);
      let eR = x.createContext(null);
      function eO(e) {
        var t;
        let r = (0, eN.Av)(),
          { portalContainer: n = r ? null : document.body, isExiting: o } = e,
          [i, a] = (0, x.useState)(!1),
          s = (0, x.useMemo)(() => ({ contain: i, setContain: a }), [i, a]),
          { getContainer: l } =
            null !== (t = (0, x.useContext)(es)) && void 0 !== t ? t : {};
        if ((!e.portalContainer && l && (n = l()), !n)) return null;
        let u = e.children;
        return (
          e.disableFocusManagement ||
            (u = x.createElement(
              em,
              { restoreFocus: !0, contain: i && !o },
              u
            )),
          (u = x.createElement(
            eR.Provider,
            { value: s },
            x.createElement(eu, null, u)
          )),
          ej.createPortal(u, n)
        );
      }
      var eI = r(5893),
        eL = (0, f.Gp)((e, t) => {
          var r, n;
          let {
              className: o,
              children: i,
              portalContainer: a,
              motionProps: s,
              style: l,
              ...u
            } = e,
            f = (0, p.gy)(t),
            {
              slots: E,
              isMenuOpen: T,
              height: P,
              disableAnimation: C,
              classNames: k,
            } = (0, c.q)(),
            S = (0, h.W)(null == k ? void 0 : k.menu, o),
            M = (0, x.useCallback)(
              ({ children: e }) =>
                (0, eI.jsx)(ea, {
                  forwardProps: !0,
                  enabled: T,
                  removeScrollBar: !1,
                  children: e,
                }),
              [T]
            ),
            A = C
              ? (0, eI.jsx)(M, {
                  children: (0, eI.jsx)("ul", {
                    ref: f,
                    className:
                      null == (r = E.menu) ? void 0 : r.call(E, { class: S }),
                    "data-open": (0, m.PB)(T),
                    style: {
                      "--navbar-height": "number" == typeof P ? `${P}px` : P,
                    },
                    ...u,
                    children: i,
                  }),
                })
              : (0, eI.jsx)(v.M, {
                  mode: "wait",
                  children: T
                    ? (0, eI.jsx)(g.X, {
                        features: b.H,
                        children: (0, eI.jsx)(M, {
                          children: (0, eI.jsx)(y.m.ul, {
                            ref: f,
                            layoutScroll: !0,
                            animate: "enter",
                            className:
                              null == (n = E.menu)
                                ? void 0
                                : n.call(E, { class: S }),
                            "data-open": (0, m.PB)(T),
                            exit: "exit",
                            initial: "exit",
                            style: {
                              "--navbar-height":
                                "number" == typeof P ? `${P}px` : P,
                              ...l,
                            },
                            variants: d,
                            ...(0, w.d)(s, u),
                            children: i,
                          }),
                        }),
                      })
                    : null,
                });
          return (0, eI.jsx)(eO, { portalContainer: a, children: A });
        });
      eL.displayName = "NextUI.NavbarMenu";
      var eV = {
          visible: { y: 0, transition: { ease: [0, 0, 0.2, 1] } },
          hidden: { y: "-100%", transition: { ease: [0.4, 0, 1, 1] } },
        },
        eF = r(4486),
        eD = r(3610),
        ez = r(3894),
        eW = (0, eD.tv)({
          slots: {
            base: [
              "flex",
              "z-40",
              "w-full",
              "h-auto",
              "items-center",
              "justify-center",
              "data-[menu-open=true]:border-none",
            ],
            wrapper: [
              "z-40",
              "flex",
              "px-6",
              "gap-4",
              "w-full",
              "flex-row",
              "relative",
              "flex-nowrap",
              "items-center",
              "justify-between",
              "h-[var(--navbar-height)]",
            ],
            toggle: [
              "group",
              "flex",
              "items-center",
              "justify-center",
              "w-6",
              "h-full",
              "outline-none",
              "rounded-small",
              "tap-highlight-transparent",
              ...ez.Dh,
            ],
            srOnly: ["sr-only"],
            toggleIcon: [
              "w-full",
              "h-full",
              "pointer-events-none",
              "flex",
              "flex-col",
              "items-center",
              "justify-center",
              "text-inherit",
              "group-data-[pressed=true]:opacity-70",
              "transition-opacity",
              "before:content-['']",
              "before:block",
              "before:h-px",
              "before:w-6",
              "before:bg-current",
              "before:transition-transform",
              "before:duration-150",
              "before:-translate-y-1",
              "before:rotate-0",
              "group-data-[open=true]:before:translate-y-px",
              "group-data-[open=true]:before:rotate-45",
              "after:content-['']",
              "after:block",
              "after:h-px",
              "after:w-6",
              "after:bg-current",
              "after:transition-transform",
              "after:duration-150",
              "after:translate-y-1",
              "after:rotate-0",
              "group-data-[open=true]:after:translate-y-0",
              "group-data-[open=true]:after:-rotate-45",
            ],
            brand: [
              "flex",
              "basis-0",
              "flex-row",
              "flex-grow",
              "flex-nowrap",
              "justify-start",
              "bg-transparent",
              "items-center",
              "no-underline",
              "text-medium",
              "whitespace-nowrap",
              "box-border",
            ],
            content: [
              "flex",
              "gap-4",
              "h-full",
              "flex-row",
              "flex-nowrap",
              "items-center",
              "data-[justify=start]:justify-start",
              "data-[justify=start]:flex-grow",
              "data-[justify=start]:basis-0",
              "data-[justify=center]:justify-center",
              "data-[justify=end]:justify-end",
              "data-[justify=end]:flex-grow",
              "data-[justify=end]:basis-0",
            ],
            item: [
              "text-medium",
              "whitespace-nowrap",
              "box-border",
              "list-none",
              "data-[active=true]:font-semibold",
            ],
            menu: [
              "z-30",
              "px-6",
              "pt-2",
              "fixed",
              "flex",
              "max-w-full",
              "top-[var(--navbar-height)]",
              "inset-x-0",
              "bottom-0",
              "w-screen",
              "flex-col",
              "gap-2",
              "overflow-y-auto",
            ],
            menuItem: ["text-large", "data-[active=true]:font-semibold"],
          },
          variants: {
            position: {
              static: { base: "static" },
              sticky: { base: "sticky top-0 inset-x-0" },
            },
            maxWidth: {
              sm: { wrapper: "max-w-[640px]" },
              md: { wrapper: "max-w-[768px]" },
              lg: { wrapper: "max-w-[1024px]" },
              xl: { wrapper: "max-w-[1280px]" },
              "2xl": { wrapper: "max-w-[1536px]" },
              full: { wrapper: "max-w-full" },
            },
            hideOnScroll: { true: { base: ["sticky", "top-0", "inset-x-0"] } },
            isBordered: { true: { base: ["border-b", "border-divider"] } },
            isBlurred: {
              false: { base: "bg-background", menu: "bg-background" },
              true: {
                base: [
                  "backdrop-blur-lg",
                  "data-[menu-open=true]:backdrop-blur-xl",
                  "backdrop-saturate-150",
                  "bg-background/70",
                ],
                menu: [
                  "backdrop-blur-xl",
                  "backdrop-saturate-150",
                  "bg-background/70",
                ],
              },
            },
            disableAnimation: {
              true: {
                menu: [
                  "hidden",
                  "h-[calc(100dvh_-_var(--navbar-height))]",
                  "data-[open=true]:flex",
                ],
              },
            },
          },
          defaultVariants: {
            maxWidth: "lg",
            position: "sticky",
            isBlurred: !0,
          },
        }),
        eK = r(5670),
        eB = "undefined" != typeof window;
      function eG(e) {
        return eB
          ? e
            ? { x: e.scrollLeft, y: e.scrollTop }
            : { x: window.scrollX, y: window.scrollY }
          : { x: 0, y: 0 };
      }
      var eH = (e) => {
          let { elementRef: t, delay: r = 30, callback: n, isEnabled: o } = e,
            i = (0, x.useRef)(
              o ? eG(null == t ? void 0 : t.current) : { x: 0, y: 0 }
            ),
            a = (0, x.useRef)(null),
            s = (0, x.useCallback)(() => {
              let e = eG(null == t ? void 0 : t.current);
              "function" == typeof n && n({ prevPos: i.current, currPos: e }),
                (i.current = e),
                (a.current = null);
            }, [n, t]);
          return (
            (0, x.useEffect)(() => {
              if (!o) return;
              let e = () => {
                  r
                    ? (a.current && clearTimeout(a.current),
                      (a.current = setTimeout(s, r)))
                    : s();
                },
                n = (null == t ? void 0 : t.current) || window;
              return (
                n.addEventListener("scroll", e),
                () => {
                  n.removeEventListener("scroll", e),
                    a.current && (clearTimeout(a.current), (a.current = null));
                }
              );
            }, [null == t ? void 0 : t.current, r, s, o]),
            i.current
          );
        },
        e$ = r(9373),
        eU = (e, t) => {
          var r;
          let n = [];
          return [
            null ==
            (r = x.Children.map(e, (e) =>
              (0, x.isValidElement)(e) && e.type === t ? (n.push(e), null) : e
            ))
              ? void 0
              : r.filter(Boolean),
            n.length >= 0 ? n : void 0,
          ];
        },
        e_ = (0, f.Gp)((e, t) => {
          let { children: r, ...n } = e,
            o = (function (e) {
              var t, r;
              let n = (0, eF.w)(),
                [o, i] = (0, f.oe)(e, eW.variantKeys),
                {
                  ref: a,
                  as: s,
                  parentRef: l,
                  height: u = "4rem",
                  shouldHideOnScroll: c = !1,
                  disableScrollHandler: d = !1,
                  onScrollPositionChange: v,
                  isMenuOpen: g,
                  isMenuDefaultOpen: b,
                  onMenuOpenChange: y = () => {},
                  motionProps: E,
                  className: T,
                  classNames: P,
                  ...C
                } = o,
                k =
                  null !=
                    (r =
                      null != (t = e.disableAnimation)
                        ? t
                        : null == n
                        ? void 0
                        : n.disableAnimation) && r,
                S = (0, p.gy)(a),
                M = (0, x.useRef)(0),
                A = (0, x.useRef)(0),
                [j, N] = (0, x.useState)(!1),
                R = (0, x.useCallback)(
                  (e) => {
                    y(e || !1);
                  },
                  [y]
                ),
                [O, I] = (0, e$.z)(g, null != b && b, R),
                L = () => {
                  if (S.current) {
                    let e = S.current.offsetWidth;
                    e !== M.current && (M.current = e);
                  }
                };
              !(function (e) {
                let { ref: t, onResize: r } = e;
                (0, x.useEffect)(() => {
                  let e = null == t ? void 0 : t.current;
                  if (e) {
                    if (!(void 0 !== window.ResizeObserver))
                      return (
                        window.addEventListener("resize", r, !1),
                        () => {
                          window.removeEventListener("resize", r, !1);
                        }
                      );
                    {
                      let t = new window.ResizeObserver((e) => {
                        e.length && r();
                      });
                      return (
                        t.observe(e),
                        () => {
                          e && t.unobserve(e);
                        }
                      );
                    }
                  }
                }, [r, t]);
              })({
                ref: S,
                onResize: () => {
                  var e;
                  (null == (e = S.current) ? void 0 : e.offsetWidth) !==
                    M.current && (L(), I(!1));
                },
              }),
                (0, x.useEffect)(() => {
                  var e;
                  L(),
                    (A.current =
                      (null == (e = S.current) ? void 0 : e.offsetHeight) || 0);
                }, []);
              let V = (0, x.useMemo)(
                  () => eW({ ...i, disableAnimation: k, hideOnScroll: c }),
                  [(0, eK.Xx)(i), k, c]
                ),
                F = (0, h.W)(null == P ? void 0 : P.base, T);
              return (
                eH({
                  elementRef: l,
                  isEnabled: c || !d,
                  callback: ({ prevPos: e, currPos: t }) => {
                    null == v || v(t.y),
                      c &&
                        N((r) => {
                          let n = t.y > e.y && t.y > A.current;
                          return n !== r ? n : r;
                        });
                  },
                }),
                {
                  Component: s || "nav",
                  slots: V,
                  domRef: S,
                  height: u,
                  isHidden: j,
                  disableAnimation: k,
                  shouldHideOnScroll: c,
                  isMenuOpen: O,
                  classNames: P,
                  setIsMenuOpen: I,
                  motionProps: E,
                  getBaseProps: (e = {}) => ({
                    ...(0, w.d)(C, e),
                    "data-hidden": (0, m.PB)(j),
                    "data-menu-open": (0, m.PB)(O),
                    ref: S,
                    className: V.base({
                      class: (0, h.W)(F, null == e ? void 0 : e.className),
                    }),
                    style: {
                      "--navbar-height": "number" == typeof u ? `${u}px` : u,
                      ...(null == C ? void 0 : C.style),
                      ...(null == e ? void 0 : e.style),
                    },
                  }),
                  getWrapperProps: (e = {}) => ({
                    ...e,
                    "data-menu-open": (0, m.PB)(O),
                    className: V.wrapper({
                      class: (0, h.W)(
                        null == P ? void 0 : P.wrapper,
                        null == e ? void 0 : e.className
                      ),
                    }),
                  }),
                }
              );
            })({ ...n, ref: t }),
            i = o.Component,
            [a, s] = eU(r, eL),
            l = (0, eI.jsxs)(eI.Fragment, {
              children: [
                (0, eI.jsx)("header", { ...o.getWrapperProps(), children: a }),
                s,
              ],
            });
          return (0, eI.jsx)(c.V, {
            value: o,
            children: o.shouldHideOnScroll
              ? (0, eI.jsx)(g.X, {
                  features: b.H,
                  children: (0, eI.jsx)(y.m.nav, {
                    animate: o.isHidden ? "hidden" : "visible",
                    initial: !1,
                    variants: eV,
                    ...(0, w.d)(o.getBaseProps(), o.motionProps),
                    children: l,
                  }),
                })
              : (0, eI.jsx)(i, { ...o.getBaseProps(), children: l }),
          });
        });
      e_.displayName = "NextUI.Navbar";
      var eZ = e_;
    },
    5725: function (e, t, r) {
      "use strict";
      r.d(t, {
        U: function () {
          return u;
        },
      });
      var n = r(7170),
        o = r(6493),
        i = r(1237),
        a = r(6972),
        s = r(5893),
        l = (0, o.Gp)((e, t) => {
          var r;
          let {
              as: o,
              className: l,
              children: u,
              justify: c = "start",
              ...d
            } = e,
            f = (0, i.gy)(t),
            { slots: p, classNames: h } = (0, n.q)(),
            m = (0, a.W)(null == h ? void 0 : h.content, l);
          return (0, s.jsx)(o || "ul", {
            ref: f,
            className:
              null == (r = p.content) ? void 0 : r.call(p, { class: m }),
            "data-justify": c,
            ...d,
            children: u,
          });
        });
      l.displayName = "NextUI.NavbarContent";
      var u = l;
    },
    1774: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return u;
        },
      });
      var n = r(7170),
        o = r(6493),
        i = r(1237),
        a = r(6972),
        s = r(5893),
        l = (0, o.Gp)((e, t) => {
          var r;
          let { as: o, className: l, children: u, ...c } = e,
            d = (0, i.gy)(t),
            { slots: f, classNames: p } = (0, n.q)(),
            h = (0, a.W)(null == p ? void 0 : p.brand, l);
          return (0, s.jsx)(o || "div", {
            ref: d,
            className: null == (r = f.brand) ? void 0 : r.call(f, { class: h }),
            ...c,
            children: u,
          });
        });
      l.displayName = "NextUI.NavbarBrand";
      var u = l;
    },
    9058: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return l;
        },
      });
      var n = new Set([
          "id",
          "type",
          "style",
          "title",
          "role",
          "tabIndex",
          "htmlFor",
          "width",
          "height",
          "abbr",
          "accept",
          "acceptCharset",
          "accessKey",
          "action",
          "allowFullScreen",
          "allowTransparency",
          "alt",
          "async",
          "autoComplete",
          "autoFocus",
          "autoPlay",
          "cellPadding",
          "cellSpacing",
          "challenge",
          "charset",
          "checked",
          "cite",
          "class",
          "className",
          "cols",
          "colSpan",
          "command",
          "content",
          "contentEditable",
          "contextMenu",
          "controls",
          "coords",
          "crossOrigin",
          "data",
          "dateTime",
          "default",
          "defer",
          "dir",
          "disabled",
          "download",
          "draggable",
          "dropzone",
          "encType",
          "enterKeyHint",
          "for",
          "form",
          "formAction",
          "formEncType",
          "formMethod",
          "formNoValidate",
          "formTarget",
          "frameBorder",
          "headers",
          "hidden",
          "high",
          "href",
          "hrefLang",
          "httpEquiv",
          "icon",
          "inputMode",
          "isMap",
          "itemId",
          "itemProp",
          "itemRef",
          "itemScope",
          "itemType",
          "kind",
          "label",
          "lang",
          "list",
          "loop",
          "manifest",
          "max",
          "maxLength",
          "media",
          "mediaGroup",
          "method",
          "min",
          "minLength",
          "multiple",
          "muted",
          "name",
          "noValidate",
          "open",
          "optimum",
          "pattern",
          "ping",
          "placeholder",
          "poster",
          "preload",
          "radioGroup",
          "referrerPolicy",
          "readOnly",
          "rel",
          "required",
          "rows",
          "rowSpan",
          "sandbox",
          "scope",
          "scoped",
          "scrolling",
          "seamless",
          "selected",
          "shape",
          "size",
          "sizes",
          "slot",
          "sortable",
          "span",
          "spellCheck",
          "src",
          "srcDoc",
          "srcSet",
          "start",
          "step",
          "target",
          "translate",
          "typeMustMatch",
          "useMap",
          "value",
          "wmode",
          "wrap",
        ]),
        o = new Set([
          "onCopy",
          "onCut",
          "onPaste",
          "onLoad",
          "onError",
          "onWheel",
          "onScroll",
          "onCompositionEnd",
          "onCompositionStart",
          "onCompositionUpdate",
          "onKeyDown",
          "onKeyPress",
          "onKeyUp",
          "onFocus",
          "onBlur",
          "onChange",
          "onInput",
          "onSubmit",
          "onClick",
          "onContextMenu",
          "onDoubleClick",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragExit",
          "onDragLeave",
          "onDragOver",
          "onDragStart",
          "onDrop",
          "onMouseDown",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onPointerDown",
          "onPointerEnter",
          "onPointerLeave",
          "onPointerUp",
          "onSelect",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "onAnimationStart",
          "onAnimationEnd",
          "onAnimationIteration",
          "onTransitionEnd",
        ]),
        i = /^(data-.*)$/,
        a = /^(aria-.*)$/,
        s = /^(on[A-Z].*)$/;
      function l(e, t = {}) {
        let {
            labelable: r = !0,
            enabled: l = !0,
            propNames: u,
            omitPropNames: c,
            omitEventNames: d,
            omitDataProps: f,
            omitEventProps: p,
          } = t,
          h = {};
        if (!l) return e;
        for (let t in e)
          !(
            (null == c ? void 0 : c.has(t)) ||
            ((null == d ? void 0 : d.has(t)) && s.test(t)) ||
            (s.test(t) && !o.has(t)) ||
            (f && i.test(t)) ||
            (p && s.test(t))
          ) &&
            ((Object.prototype.hasOwnProperty.call(e, t) &&
              (n.has(t) ||
                (r && a.test(t)) ||
                (null == u ? void 0 : u.has(t)) ||
                i.test(t))) ||
              s.test(t)) &&
            (h[t] = e[t]);
        return h;
      }
    },
    1120: function (e, t, r) {
      "use strict";
      r.d(t, {
        k: function () {
          return o;
        },
      });
      var n = r(7294);
      function o(e = {}) {
        let {
            strict: t = !0,
            errorMessage:
              r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
            name: o,
          } = e,
          i = n.createContext(void 0);
        return (
          (i.displayName = o),
          [
            i.Provider,
            function e() {
              var o;
              let a = n.useContext(i);
              if (!a && t) {
                let t = Error(r);
                throw (
                  ((t.name = "ContextError"),
                  null == (o = Error.captureStackTrace) || o.call(Error, t, e),
                  t)
                );
              }
              return a;
            },
            i,
          ]
        );
      }
    },
    1237: function (e, t, r) {
      "use strict";
      r.d(t, {
        gy: function () {
          return o;
        },
      });
      var n = r(7294);
      function o(e) {
        let t = (0, n.useRef)(null);
        return (0, n.useImperativeHandle)(e, () => t.current), t;
      }
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
    },
    6972: function (e, t, r) {
      "use strict";
      function n(...e) {
        for (var t, r, o = 0, i = ""; o < e.length; )
          (t = e[o++]) &&
            (r = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(t)) &&
            (i && (i += " "), (i += r));
        return i;
      }
      r.d(t, {
        W: function () {
          return n;
        },
      });
    },
    8605: function (e, t, r) {
      "use strict";
      r.d(t, {
        PB: function () {
          return n;
        },
      });
      var n = (e) => (e ? "true" : void 0);
    },
    5670: function (e, t, r) {
      "use strict";
      function n(e) {
        return `${e}-${Math.floor(1e6 * Math.random())}`;
      }
      function o(e) {
        if (!e || "object" != typeof e) return "";
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "";
        }
      }
      r.d(t, {
        QI: function () {
          return n;
        },
        Xx: function () {
          return o;
        },
      });
    },
    6493: function (e, t, r) {
      "use strict";
      r.d(t, {
        Gp: function () {
          return o;
        },
        oe: function () {
          return i;
        },
      });
      var n = r(7294);
      function o(e) {
        return (0, n.forwardRef)(e);
      }
      var i = (e, t, r = !0) => {
        if (!t) return [e, {}];
        let n = t.reduce((t, r) => (r in e ? { ...t, [r]: e[r] } : t), {});
        return r
          ? [
              Object.keys(e)
                .filter((e) => !t.includes(e))
                .reduce((t, r) => ({ ...t, [r]: e[r] }), {}),
              n,
            ]
          : [e, n];
      };
    },
    4486: function (e, t, r) {
      "use strict";
      r.d(t, {
        w: function () {
          return o;
        },
      });
      var [n, o] = (0, r(1120).k)({ name: "ProviderContext", strict: !1 });
    },
    3610: function (e, t, r) {
      "use strict";
      r.d(t, {
        tv: function () {
          return a;
        },
      });
      var n = ["small", "medium", "large"],
        o = {
          theme: {
            opacity: ["disabled"],
            spacing: ["divider"],
            borderWidth: n,
            borderRadius: n,
          },
          classGroups: {
            shadow: [{ shadow: n }],
            "font-size": [{ text: ["tiny", ...n] }],
            "bg-image": ["bg-stripe-gradient"],
          },
        },
        i = r(5825),
        a = (e, t) => {
          var r, n, a;
          return (0, i.tv)(e, {
            ...t,
            twMerge: null == (r = null == t ? void 0 : t.twMerge) || r,
            twMergeConfig: {
              ...(null == t ? void 0 : t.twMergeConfig),
              theme: {
                ...(null == (n = null == t ? void 0 : t.twMergeConfig)
                  ? void 0
                  : n.theme),
                ...o.theme,
              },
              classGroups: {
                ...(null == (a = null == t ? void 0 : t.twMergeConfig)
                  ? void 0
                  : a.classGroups),
                ...o.classGroups,
              },
            },
          });
        };
    },
    3894: function (e, t, r) {
      "use strict";
      r.d(t, {
        Dh: function () {
          return n;
        },
        Zs: function () {
          return o;
        },
      });
      var n = [
          "outline-none",
          "data-[focus-visible=true]:z-10",
          "data-[focus-visible=true]:outline-2",
          "data-[focus-visible=true]:outline-focus",
          "data-[focus-visible=true]:outline-offset-2",
        ],
        o = {
          default: [
            "[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]",
          ],
          primary: [
            "[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]",
          ],
          secondary: [
            "[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]",
          ],
          success: [
            "[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]",
          ],
          warning: [
            "[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]",
          ],
          danger: [
            "[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]",
          ],
        };
    },
    5607: function (e, t, r) {
      "use strict";
      r.d(t, {
        Gp: function () {
          return o;
        },
        oe: function () {
          return i;
        },
      });
      var n = r(7294);
      function o(e) {
        return (0, n.forwardRef)(e);
      }
      var i = (e, t, r = !0) => {
        if (!t) return [e, {}];
        let n = t.reduce((t, r) => (r in e ? { ...t, [r]: e[r] } : t), {});
        return r
          ? [
              Object.keys(e)
                .filter((e) => !t.includes(e))
                .reduce((t, r) => ({ ...t, [r]: e[r] }), {}),
              n,
            ]
          : [e, n];
      };
    },
    7936: function (e, t, r) {
      "use strict";
      r.d(t, {
        tv: function () {
          return a;
        },
      });
      var n = ["small", "medium", "large"],
        o = {
          theme: {
            opacity: ["disabled"],
            spacing: ["divider"],
            borderWidth: n,
            borderRadius: n,
          },
          classGroups: {
            shadow: [{ shadow: n }],
            "font-size": [{ text: ["tiny", ...n] }],
            "bg-image": ["bg-stripe-gradient"],
          },
        },
        i = r(5825),
        a = (e, t) => {
          var r, n, a;
          return (0, i.tv)(e, {
            ...t,
            twMerge: null == (r = null == t ? void 0 : t.twMerge) || r,
            twMergeConfig: {
              ...(null == t ? void 0 : t.twMergeConfig),
              theme: {
                ...(null == (n = null == t ? void 0 : t.twMergeConfig)
                  ? void 0
                  : n.theme),
                ...o.theme,
              },
              classGroups: {
                ...(null == (a = null == t ? void 0 : t.twMergeConfig)
                  ? void 0
                  : a.classGroups),
                ...o.classGroups,
              },
            },
          });
        };
    },
    5512: function (e, t, r) {
      "use strict";
      r.d(t, {
        Dh: function () {
          return n;
        },
        z6: function () {
          return o;
        },
      });
      var n = [
          "outline-none",
          "data-[focus-visible=true]:z-10",
          "data-[focus-visible=true]:outline-2",
          "data-[focus-visible=true]:outline-focus",
          "data-[focus-visible=true]:outline-offset-2",
        ],
        o = [
          "absolute",
          "top-1/2",
          "left-1/2",
          "-translate-x-1/2",
          "-translate-y-1/2",
        ];
    },
    5528: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return G;
        },
      });
      var n = r(2226);
      let o = new Set(["id"]),
        i = new Set([
          "aria-label",
          "aria-labelledby",
          "aria-describedby",
          "aria-details",
        ]),
        a = new Set([
          "href",
          "hrefLang",
          "target",
          "rel",
          "download",
          "ping",
          "referrerPolicy",
        ]),
        s = /^(data-.*)$/;
      var l = r(6590),
        u = r(9786);
      function c(e, t) {
        (0, u.b)(() => {
          if (e && e.ref && t)
            return (
              (e.ref.current = t.current),
              () => {
                e.ref && (e.ref.current = null);
              }
            );
        });
      }
      var d = r(7294),
        f = r(7234);
      function p(e) {
        if (!e) return;
        let t = !0;
        return (r) => {
          e({
            ...r,
            preventDefault() {
              r.preventDefault();
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              console.error(
                "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."
              );
            },
            continuePropagation() {
              t = !1;
            },
          }),
            t && r.stopPropagation();
        };
      }
      let h = d.createContext(null);
      var m = r(8806),
        v = r(8837),
        g = r(5007);
      let b = "default",
        y = "",
        w = new WeakMap();
      function x(e) {
        if ((0, m.gn)()) {
          if ("default" === b) {
            let t = (0, v.r)(e);
            (y = t.documentElement.style.webkitUserSelect),
              (t.documentElement.style.webkitUserSelect = "none");
          }
          b = "disabled";
        } else
          (e instanceof HTMLElement || e instanceof SVGElement) &&
            (w.set(e, e.style.userSelect), (e.style.userSelect = "none"));
      }
      function E(e) {
        if ((0, m.gn)())
          "disabled" === b &&
            ((b = "restoring"),
            setTimeout(() => {
              (0, g.Q)(() => {
                if ("restoring" === b) {
                  let t = (0, v.r)(e);
                  "none" === t.documentElement.style.webkitUserSelect &&
                    (t.documentElement.style.webkitUserSelect = y || ""),
                    (y = ""),
                    (b = "default");
                }
              });
            }, 300));
        else if (
          (e instanceof HTMLElement || e instanceof SVGElement) &&
          e &&
          w.has(e)
        ) {
          let t = w.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            w.delete(e);
        }
      }
      var T = r(4942);
      function P(e, t, r) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + r + " private field on non-instance"
          );
        return t.get(e);
      }
      function C(e, t, r) {
        var n = P(e, t, "set");
        return (
          !(function (e, t, r) {
            if (t.set) t.set.call(e, r);
            else {
              if (!t.writable)
                throw TypeError("attempted to set read only private field");
              t.value = r;
            }
          })(e, n, r),
          r
        );
      }
      var k = r(1718),
        S = r(1086),
        M = r(2433),
        A = r(6301),
        j = r(7604),
        N = new WeakMap();
      class R {
        continuePropagation() {
          C(this, N, !1);
        }
        get shouldStopPropagation() {
          var e;
          return (e = P(this, N, "get")).get ? e.get.call(this) : e.value;
        }
        constructor(e, t, r) {
          var n;
          (n = { writable: !0, value: void 0 }),
            (function (e, t) {
              if (t.has(e))
                throw TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(this, N),
            N.set(this, n),
            C(this, N, !0),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey);
        }
      }
      let O = Symbol("linkClicked");
      function I(e) {
        return "A" === e.tagName && e.hasAttribute("href");
      }
      function L(e, t) {
        let { key: r, code: n } = e,
          o = t.getAttribute("role");
        return (
          ("Enter" === r || " " === r || "Spacebar" === r || "Space" === n) &&
          !(
            (t instanceof (0, v.k)(t).HTMLInputElement && !B(t, r)) ||
            t instanceof (0, v.k)(t).HTMLTextAreaElement ||
            t.isContentEditable
          ) &&
          !(("link" === o || (!o && I(t))) && "Enter" !== r)
        );
      }
      function V(e, t) {
        let r = e.changedTouches;
        for (let e = 0; e < r.length; e++) {
          let n = r[e];
          if (n.identifier === t) return n;
        }
        return null;
      }
      function F(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
        };
      }
      function D(e, t) {
        let r,
          n,
          o = t.getBoundingClientRect(),
          i =
            ((r = 0),
            (n = 0),
            void 0 !== e.width
              ? (r = e.width / 2)
              : void 0 !== e.radiusX && (r = e.radiusX),
            void 0 !== e.height
              ? (n = e.height / 2)
              : void 0 !== e.radiusY && (n = e.radiusY),
            {
              top: e.clientY - n,
              right: e.clientX + r,
              bottom: e.clientY + n,
              left: e.clientX - r,
            });
        return (
          !(o.left > i.right) &&
          !(i.left > o.right) &&
          !(o.top > i.bottom) &&
          !(i.top > o.bottom)
        );
      }
      function z(e) {
        return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
      }
      function W(e, t) {
        return e instanceof HTMLInputElement
          ? !B(e, t)
          : e instanceof HTMLButtonElement
          ? "submit" !== e.type && "reset" !== e.type
          : !I(e);
      }
      let K = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      function B(e, t) {
        return "checkbox" === e.type || "radio" === e.type
          ? " " === t
          : K.has(e.type);
      }
      function G(e, t) {
        let r,
          {
            elementType: u = "button",
            isDisabled: g,
            onPress: b,
            onPressStart: y,
            onPressEnd: w,
            onPressChange: P,
            preventFocusOnPress: C,
            allowFocusWhenDisabled: N,
            onClick: K,
            href: B,
            target: G,
            rel: H,
            type: $ = "button",
            allowTextSelectionOnPress: U,
          } = e;
        r =
          "button" === u
            ? { type: $, disabled: g }
            : {
                role: "button",
                tabIndex: g ? void 0 : 0,
                href: "a" === u && g ? void 0 : B,
                target: "a" === u ? G : void 0,
                type: "input" === u ? $ : void 0,
                disabled: "input" === u ? g : void 0,
                "aria-disabled": g && "input" !== u ? g : void 0,
                rel: "a" === u ? H : void 0,
              };
        let { pressProps: _, isPressed: Z } = (function (e) {
            let t,
              r,
              o,
              i,
              {
                onPress: a,
                onPressChange: s,
                onPressStart: l,
                onPressEnd: u,
                onPressUp: f,
                isDisabled: p,
                isPressed: h,
                preventFocusOnPress: g,
                shouldCancelOnPointerExit: b,
                allowTextSelectionOnPress: y,
                ref: w,
                ...P
              } = (function (e) {
                let t = (0, d.useContext)(T.O);
                if (t) {
                  let { register: r, ...o } = t;
                  (e = (0, n.d)(o, e)), r();
                }
                return c(t, e.ref), e;
              })(e),
              [C, N] = (0, d.useState)(!1),
              K = (0, d.useRef)({
                isPressed: !1,
                ignoreEmulatedMouseEvents: !1,
                ignoreClickAfterPress: !1,
                didFirePressStart: !1,
                isTriggeringEvent: !1,
                activePointerId: null,
                target: null,
                isOverTarget: !1,
                pointerType: null,
              }),
              { addGlobalListener: B, removeAllGlobalListeners: G } =
                ((t = (0, d.useRef)(new Map())),
                (r = (0, d.useCallback)((e, r, n, o) => {
                  let i = (null == o ? void 0 : o.once)
                    ? (...e) => {
                        t.current.delete(n), n(...e);
                      }
                    : n;
                  t.current.set(n, {
                    type: r,
                    eventTarget: e,
                    fn: i,
                    options: o,
                  }),
                    e.addEventListener(r, n, o);
                }, [])),
                (o = (0, d.useCallback)((e, r, n, o) => {
                  var i;
                  let a =
                    (null === (i = t.current.get(n)) || void 0 === i
                      ? void 0
                      : i.fn) || n;
                  e.removeEventListener(r, a, o), t.current.delete(n);
                }, [])),
                (i = (0, d.useCallback)(() => {
                  t.current.forEach((e, t) => {
                    o(e.eventTarget, e.type, t, e.options);
                  });
                }, [o])),
                (0, d.useEffect)(() => i, [i]),
                {
                  addGlobalListener: r,
                  removeGlobalListener: o,
                  removeAllGlobalListeners: i,
                }),
              H = (0, k.i)((e, t) => {
                let r = K.current;
                if (p || r.didFirePressStart) return !1;
                let n = !0;
                if (((r.isTriggeringEvent = !0), l)) {
                  let r = new R("pressstart", t, e);
                  l(r), (n = r.shouldStopPropagation);
                }
                return (
                  s && s(!0),
                  (r.isTriggeringEvent = !1),
                  (r.didFirePressStart = !0),
                  N(!0),
                  n
                );
              }),
              $ = (0, k.i)((e, t, r = !0) => {
                let n = K.current;
                if (!n.didFirePressStart) return !1;
                (n.ignoreClickAfterPress = !0),
                  (n.didFirePressStart = !1),
                  (n.isTriggeringEvent = !0);
                let o = !0;
                if (u) {
                  let r = new R("pressend", t, e);
                  u(r), (o = r.shouldStopPropagation);
                }
                if ((s && s(!1), N(!1), a && r && !p)) {
                  let r = new R("press", t, e);
                  a(r), o && (o = r.shouldStopPropagation);
                }
                return (n.isTriggeringEvent = !1), o;
              }),
              U = (0, k.i)((e, t) => {
                let r = K.current;
                if (p) return !1;
                if (f) {
                  r.isTriggeringEvent = !0;
                  let n = new R("pressup", t, e);
                  return (
                    f(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation
                  );
                }
                return !0;
              }),
              _ = (0, k.i)((e) => {
                let t = K.current;
                t.isPressed &&
                  t.target &&
                  (t.isOverTarget &&
                    null != t.pointerType &&
                    $(F(t.target, e), t.pointerType, !1),
                  (t.isPressed = !1),
                  (t.isOverTarget = !1),
                  (t.activePointerId = null),
                  (t.pointerType = null),
                  G(),
                  y || E(t.target));
              }),
              Z = (0, k.i)((e) => {
                b && _(e);
              }),
              q = (0, d.useMemo)(() => {
                let e = K.current,
                  t = {
                    onKeyDown(t) {
                      if (
                        L(t.nativeEvent, t.currentTarget) &&
                        t.currentTarget.contains(t.target)
                      ) {
                        var n;
                        W(t.target, t.key) && t.preventDefault();
                        let o = !0;
                        if (!e.isPressed && !t.repeat) {
                          (e.target = t.currentTarget),
                            (e.isPressed = !0),
                            (o = H(t, "keyboard"));
                          let n = t.currentTarget;
                          B(
                            (0, v.r)(t.currentTarget),
                            "keyup",
                            (0, S.t)((t) => {
                              L(t, n) &&
                                !t.repeat &&
                                n.contains(t.target) &&
                                e.target &&
                                U(F(e.target, t), "keyboard");
                            }, r),
                            !0
                          );
                        }
                        o && t.stopPropagation(),
                          t.metaKey &&
                            (0, m.V5)() &&
                            (null === (n = e.metaKeyEvents) ||
                              void 0 === n ||
                              n.set(t.key, t.nativeEvent));
                      } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                      if (
                        (!t || t.currentTarget.contains(t.target)) &&
                        t &&
                        0 === t.button &&
                        !e.isTriggeringEvent &&
                        !M.nG.isOpening
                      ) {
                        let r = !0;
                        if (
                          (p && t.preventDefault(),
                          !e.ignoreClickAfterPress &&
                            !e.ignoreEmulatedMouseEvents &&
                            !e.isPressed &&
                            ("virtual" === e.pointerType ||
                              (0, A.Z)(t.nativeEvent)))
                        ) {
                          p || g || (0, j.A)(t.currentTarget);
                          let e = H(t, "virtual"),
                            n = U(t, "virtual"),
                            o = $(t, "virtual");
                          r = e && n && o;
                        }
                        (e.ignoreEmulatedMouseEvents = !1),
                          (e.ignoreClickAfterPress = !1),
                          r && t.stopPropagation();
                      }
                    },
                  },
                  r = (t) => {
                    var r, n, o;
                    if (e.isPressed && e.target && L(t, e.target)) {
                      W(t.target, t.key) && t.preventDefault();
                      let r = t.target;
                      $(F(e.target, t), "keyboard", e.target.contains(r)),
                        G(),
                        "Enter" !== t.key &&
                          I(e.target) &&
                          e.target.contains(r) &&
                          !t[O] &&
                          ((t[O] = !0), (0, M.nG)(e.target, t, !1)),
                        (e.isPressed = !1),
                        null === (n = e.metaKeyEvents) ||
                          void 0 === n ||
                          n.delete(t.key);
                    } else if (
                      "Meta" === t.key &&
                      (null === (r = e.metaKeyEvents) || void 0 === r
                        ? void 0
                        : r.size)
                    ) {
                      let t = e.metaKeyEvents;
                      for (let r of ((e.metaKeyEvents = void 0), t.values()))
                        null === (o = e.target) ||
                          void 0 === o ||
                          o.dispatchEvent(new KeyboardEvent("keyup", r));
                    }
                  };
                if ("undefined" != typeof PointerEvent) {
                  (t.onPointerDown = (t) => {
                    if (0 !== t.button || !t.currentTarget.contains(t.target))
                      return;
                    if ((0, A.c)(t.nativeEvent)) {
                      e.pointerType = "virtual";
                      return;
                    }
                    z(t.currentTarget) && t.preventDefault(),
                      (e.pointerType = t.pointerType);
                    let i = !0;
                    e.isPressed ||
                      ((e.isPressed = !0),
                      (e.isOverTarget = !0),
                      (e.activePointerId = t.pointerId),
                      (e.target = t.currentTarget),
                      p || g || (0, j.A)(t.currentTarget),
                      y || x(e.target),
                      (i = H(t, e.pointerType)),
                      B((0, v.r)(t.currentTarget), "pointermove", r, !1),
                      B((0, v.r)(t.currentTarget), "pointerup", n, !1),
                      B((0, v.r)(t.currentTarget), "pointercancel", o, !1)),
                      i && t.stopPropagation();
                  }),
                    (t.onMouseDown = (e) => {
                      e.currentTarget.contains(e.target) &&
                        0 === e.button &&
                        (z(e.currentTarget) && e.preventDefault(),
                        e.stopPropagation());
                    }),
                    (t.onPointerUp = (t) => {
                      t.currentTarget.contains(t.target) &&
                        "virtual" !== e.pointerType &&
                        0 === t.button &&
                        D(t, t.currentTarget) &&
                        U(t, e.pointerType || t.pointerType);
                    });
                  let r = (t) => {
                      t.pointerId === e.activePointerId &&
                        (e.target && D(t, e.target)
                          ? e.isOverTarget ||
                            null == e.pointerType ||
                            ((e.isOverTarget = !0),
                            H(F(e.target, t), e.pointerType))
                          : e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1),
                            $(F(e.target, t), e.pointerType, !1),
                            Z(t)));
                    },
                    n = (t) => {
                      t.pointerId === e.activePointerId &&
                        e.isPressed &&
                        0 === t.button &&
                        e.target &&
                        (D(t, e.target) && null != e.pointerType
                          ? $(F(e.target, t), e.pointerType)
                          : e.isOverTarget &&
                            null != e.pointerType &&
                            $(F(e.target, t), e.pointerType, !1),
                        (e.isPressed = !1),
                        (e.isOverTarget = !1),
                        (e.activePointerId = null),
                        (e.pointerType = null),
                        G(),
                        y || E(e.target));
                    },
                    o = (e) => {
                      _(e);
                    };
                  t.onDragStart = (e) => {
                    e.currentTarget.contains(e.target) && _(e);
                  };
                } else {
                  (t.onMouseDown = (t) => {
                    if (0 === t.button && t.currentTarget.contains(t.target)) {
                      if (
                        (z(t.currentTarget) && t.preventDefault(),
                        e.ignoreEmulatedMouseEvents)
                      ) {
                        t.stopPropagation();
                        return;
                      }
                      (e.isPressed = !0),
                        (e.isOverTarget = !0),
                        (e.target = t.currentTarget),
                        (e.pointerType = (0, A.Z)(t.nativeEvent)
                          ? "virtual"
                          : "mouse"),
                        p || g || (0, j.A)(t.currentTarget),
                        H(t, e.pointerType) && t.stopPropagation(),
                        B((0, v.r)(t.currentTarget), "mouseup", r, !1);
                    }
                  }),
                    (t.onMouseEnter = (t) => {
                      if (!t.currentTarget.contains(t.target)) return;
                      let r = !0;
                      e.isPressed &&
                        !e.ignoreEmulatedMouseEvents &&
                        null != e.pointerType &&
                        ((e.isOverTarget = !0), (r = H(t, e.pointerType))),
                        r && t.stopPropagation();
                    }),
                    (t.onMouseLeave = (t) => {
                      if (!t.currentTarget.contains(t.target)) return;
                      let r = !0;
                      e.isPressed &&
                        !e.ignoreEmulatedMouseEvents &&
                        null != e.pointerType &&
                        ((e.isOverTarget = !1),
                        (r = $(t, e.pointerType, !1)),
                        Z(t)),
                        r && t.stopPropagation();
                    }),
                    (t.onMouseUp = (t) => {
                      t.currentTarget.contains(t.target) &&
                        !e.ignoreEmulatedMouseEvents &&
                        0 === t.button &&
                        U(t, e.pointerType || "mouse");
                    });
                  let r = (t) => {
                    if (0 === t.button) {
                      if (
                        ((e.isPressed = !1), G(), e.ignoreEmulatedMouseEvents)
                      ) {
                        e.ignoreEmulatedMouseEvents = !1;
                        return;
                      }
                      e.target && D(t, e.target) && null != e.pointerType
                        ? $(F(e.target, t), e.pointerType)
                        : e.target &&
                          e.isOverTarget &&
                          null != e.pointerType &&
                          $(F(e.target, t), e.pointerType, !1),
                        (e.isOverTarget = !1);
                    }
                  };
                  (t.onTouchStart = (t) => {
                    if (!t.currentTarget.contains(t.target)) return;
                    let r = (function (e) {
                      let { targetTouches: t } = e;
                      return t.length > 0 ? t[0] : null;
                    })(t.nativeEvent);
                    r &&
                      ((e.activePointerId = r.identifier),
                      (e.ignoreEmulatedMouseEvents = !0),
                      (e.isOverTarget = !0),
                      (e.isPressed = !0),
                      (e.target = t.currentTarget),
                      (e.pointerType = "touch"),
                      p || g || (0, j.A)(t.currentTarget),
                      y || x(e.target),
                      H(t, e.pointerType) && t.stopPropagation(),
                      B((0, v.k)(t.currentTarget), "scroll", n, !0));
                  }),
                    (t.onTouchMove = (t) => {
                      if (!t.currentTarget.contains(t.target)) return;
                      if (!e.isPressed) {
                        t.stopPropagation();
                        return;
                      }
                      let r = V(t.nativeEvent, e.activePointerId),
                        n = !0;
                      r && D(r, t.currentTarget)
                        ? e.isOverTarget ||
                          null == e.pointerType ||
                          ((e.isOverTarget = !0), (n = H(t, e.pointerType)))
                        : e.isOverTarget &&
                          null != e.pointerType &&
                          ((e.isOverTarget = !1),
                          (n = $(t, e.pointerType, !1)),
                          Z(t)),
                        n && t.stopPropagation();
                    }),
                    (t.onTouchEnd = (t) => {
                      if (!t.currentTarget.contains(t.target)) return;
                      if (!e.isPressed) {
                        t.stopPropagation();
                        return;
                      }
                      let r = V(t.nativeEvent, e.activePointerId),
                        n = !0;
                      r && D(r, t.currentTarget) && null != e.pointerType
                        ? (U(t, e.pointerType), (n = $(t, e.pointerType)))
                        : e.isOverTarget &&
                          null != e.pointerType &&
                          (n = $(t, e.pointerType, !1)),
                        n && t.stopPropagation(),
                        (e.isPressed = !1),
                        (e.activePointerId = null),
                        (e.isOverTarget = !1),
                        (e.ignoreEmulatedMouseEvents = !0),
                        e.target && !y && E(e.target),
                        G();
                    }),
                    (t.onTouchCancel = (t) => {
                      t.currentTarget.contains(t.target) &&
                        (t.stopPropagation(), e.isPressed && _(t));
                    });
                  let n = (t) => {
                    e.isPressed &&
                      t.target.contains(e.target) &&
                      _({
                        currentTarget: e.target,
                        shiftKey: !1,
                        ctrlKey: !1,
                        metaKey: !1,
                        altKey: !1,
                      });
                  };
                  t.onDragStart = (e) => {
                    e.currentTarget.contains(e.target) && _(e);
                  };
                }
                return t;
              }, [B, p, g, G, y, _, Z, $, H, U]);
            return (
              (0, d.useEffect)(
                () => () => {
                  var e;
                  y ||
                    E(
                      null !== (e = K.current.target) && void 0 !== e
                        ? e
                        : void 0
                    );
                },
                [y]
              ),
              { isPressed: h || C, pressProps: (0, n.d)(P, q) }
            );
          })({
            onPressStart: y,
            onPressEnd: w,
            onPressChange: P,
            onPress: b,
            isDisabled: g,
            preventFocusOnPress: C,
            allowTextSelectionOnPress: U,
            ref: t,
          }),
          { focusableProps: q } = (function (e, t) {
            let { focusProps: r } = (0, f.K)(e),
              { keyboardProps: o } = {
                keyboardProps: e.isDisabled
                  ? {}
                  : { onKeyDown: p(e.onKeyDown), onKeyUp: p(e.onKeyUp) },
              },
              i = (0, n.d)(r, o),
              a = (function (e) {
                let t = (0, d.useContext)(h) || {};
                c(t, e);
                let { ref: r, ...n } = t;
                return n;
              })(t),
              s = e.isDisabled ? {} : a,
              u = (0, d.useRef)(e.autoFocus);
            return (
              (0, d.useEffect)(() => {
                u.current && t.current && (0, l.e)(t.current), (u.current = !1);
              }, [t]),
              {
                focusableProps: (0, n.d)(
                  {
                    ...i,
                    tabIndex:
                      e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
                  },
                  s
                ),
              }
            );
          })(e, t);
        N && (q.tabIndex = g ? -1 : q.tabIndex);
        let X = (0, n.d)(
          q,
          _,
          (function (e, t = {}) {
            let { labelable: r, isLink: n, propNames: l } = t,
              u = {};
            for (let t in e)
              Object.prototype.hasOwnProperty.call(e, t) &&
                (o.has(t) ||
                  (r && i.has(t)) ||
                  (n && a.has(t)) ||
                  (null == l ? void 0 : l.has(t)) ||
                  s.test(t)) &&
                (u[t] = e[t]);
            return u;
          })(e, { labelable: !0 })
        );
        return {
          isPressed: Z,
          buttonProps: (0, n.d)(r, X, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            onClick: (e) => {
              null == K || K(e);
            },
          }),
        };
      }
    },
    2422: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return i;
        },
      });
      var n = r(7294),
        o = (null == globalThis ? void 0 : globalThis.document)
          ? n.useLayoutEffect
          : n.useEffect;
      function i(e = {}) {
        let {
            loading: t,
            src: r,
            srcSet: i,
            onLoad: a,
            onError: s,
            crossOrigin: l,
            sizes: u,
            ignoreFallback: c,
          } = e,
          [d, f] = (0, n.useState)("pending");
        (0, n.useEffect)(() => {
          f(r ? "loading" : "pending");
        }, [r]);
        let p = (0, n.useRef)(),
          h = (0, n.useCallback)(() => {
            if (!r) return;
            m();
            let e = new Image();
            (e.src = r),
              l && (e.crossOrigin = l),
              i && (e.srcset = i),
              u && (e.sizes = u),
              t && (e.loading = t),
              (e.onload = (e) => {
                m(), f("loaded"), null == a || a(e);
              }),
              (e.onerror = (e) => {
                m(), f("failed"), null == s || s(e);
              }),
              (p.current = e);
          }, [r, l, i, u, a, s, t]),
          m = () => {
            p.current &&
              ((p.current.onload = null),
              (p.current.onerror = null),
              (p.current = null));
          };
        return (
          o(() => {
            if (!c)
              return (
                "loading" === d && h(),
                () => {
                  m();
                }
              );
          }, [d, h, c]),
          c ? "loaded" : d
        );
      }
    },
    6590: function (e, t, r) {
      "use strict";
      r.d(t, {
        e: function () {
          return s;
        },
      });
      var n = r(8837),
        o = r(5007),
        i = r(7604),
        a = r(9975);
      function s(e) {
        let t = (0, n.r)(e);
        if ("virtual" === (0, a.Jz)()) {
          let r = t.activeElement;
          (0, o.Q)(() => {
            t.activeElement === r && e.isConnected && (0, i.A)(e);
          });
        } else (0, i.A)(e);
      }
    },
    7243: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return s;
        },
      });
      var n = r(9975),
        o = r(7234),
        i = r(4247),
        a = r(7294);
      function s(e = {}) {
        let { autoFocus: t = !1, isTextInput: r, within: s } = e,
          l = (0, a.useRef)({ isFocused: !1, isFocusVisible: t || (0, n.E)() }),
          [u, c] = (0, a.useState)(!1),
          [d, f] = (0, a.useState)(
            () => l.current.isFocused && l.current.isFocusVisible
          ),
          p = (0, a.useCallback)(
            () => f(l.current.isFocused && l.current.isFocusVisible),
            []
          ),
          h = (0, a.useCallback)(
            (e) => {
              (l.current.isFocused = e), c(e), p();
            },
            [p]
          );
        (0, n.mG)(
          (e) => {
            (l.current.isFocusVisible = e), p();
          },
          [],
          { isTextInput: r }
        );
        let { focusProps: m } = (0, o.K)({ isDisabled: s, onFocusChange: h }),
          { focusWithinProps: v } = (function (e) {
            let {
                isDisabled: t,
                onBlurWithin: r,
                onFocusWithin: n,
                onFocusWithinChange: o,
              } = e,
              s = (0, a.useRef)({ isFocusWithin: !1 }),
              l = (0, a.useCallback)(
                (e) => {
                  s.current.isFocusWithin &&
                    !e.currentTarget.contains(e.relatedTarget) &&
                    ((s.current.isFocusWithin = !1), r && r(e), o && o(!1));
                },
                [r, o, s]
              ),
              u = (0, i.d)(l),
              c = (0, a.useCallback)(
                (e) => {
                  s.current.isFocusWithin ||
                    document.activeElement !== e.target ||
                    (n && n(e),
                    o && o(!0),
                    (s.current.isFocusWithin = !0),
                    u(e));
                },
                [n, o, u]
              );
            return t
              ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
              : { focusWithinProps: { onFocus: c, onBlur: l } };
          })({ isDisabled: !s, onFocusWithinChange: h });
        return { isFocused: u, isFocusVisible: d, focusProps: s ? v : m };
      }
    },
    4942: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return n;
        },
      });
      let n = r(7294).createContext({ register: () => {} });
      n.displayName = "PressResponderContext";
    },
    7234: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return a;
        },
      });
      var n = r(4247),
        o = r(7294),
        i = r(8837);
      function a(e) {
        let { isDisabled: t, onFocus: r, onBlur: a, onFocusChange: s } = e,
          l = (0, o.useCallback)(
            (e) => {
              if (e.target === e.currentTarget)
                return a && a(e), s && s(!1), !0;
            },
            [a, s]
          ),
          u = (0, n.d)(l),
          c = (0, o.useCallback)(
            (e) => {
              let t = (0, i.r)(e.target);
              e.target === e.currentTarget &&
                t.activeElement === e.target &&
                (r && r(e), s && s(!0), u(e));
            },
            [s, r, u]
          );
        return {
          focusProps: {
            onFocus: !t && (r || s || a) ? c : void 0,
            onBlur: !t && (a || s) ? l : void 0,
          },
        };
      }
    },
    9975: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return x;
        },
        Jz: function () {
          return E;
        },
        mG: function () {
          return P;
        },
      });
      var n = r(8806),
        o = r(6301),
        i = r(8837),
        a = r(7294);
      let s = null,
        l = new Set(),
        u = new Map(),
        c = !1,
        d = !1,
        f = { Tab: !0, Escape: !0 };
      function p(e, t) {
        for (let r of l) r(e, t);
      }
      function h(e) {
        (c = !0),
          e.metaKey ||
            (!(0, n.V5)() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((s = "keyboard"), p("keyboard", e));
      }
      function m(e) {
        (s = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((c = !0), p("pointer", e));
      }
      function v(e) {
        (0, o.Z)(e) && ((c = !0), (s = "virtual"));
      }
      function g(e) {
        e.target !== window &&
          e.target !== document &&
          (c || d || ((s = "virtual"), p("virtual", e)), (c = !1), (d = !1));
      }
      function b() {
        (c = !1), (d = !0);
      }
      function y(e) {
        if ("undefined" == typeof window || u.get((0, i.k)(e))) return;
        let t = (0, i.k)(e),
          r = (0, i.r)(e),
          n = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (c = !0), n.apply(this, arguments);
        }),
          r.addEventListener("keydown", h, !0),
          r.addEventListener("keyup", h, !0),
          r.addEventListener("click", v, !0),
          t.addEventListener("focus", g, !0),
          t.addEventListener("blur", b, !1),
          "undefined" != typeof PointerEvent
            ? (r.addEventListener("pointerdown", m, !0),
              r.addEventListener("pointermove", m, !0),
              r.addEventListener("pointerup", m, !0))
            : (r.addEventListener("mousedown", m, !0),
              r.addEventListener("mousemove", m, !0),
              r.addEventListener("mouseup", m, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              w(e);
            },
            { once: !0 }
          ),
          u.set(t, { focus: n });
      }
      let w = (e, t) => {
        let r = (0, i.k)(e),
          n = (0, i.r)(e);
        t && n.removeEventListener("DOMContentLoaded", t),
          u.has(r) &&
            ((r.HTMLElement.prototype.focus = u.get(r).focus),
            n.removeEventListener("keydown", h, !0),
            n.removeEventListener("keyup", h, !0),
            n.removeEventListener("click", v, !0),
            r.removeEventListener("focus", g, !0),
            r.removeEventListener("blur", b, !1),
            "undefined" != typeof PointerEvent
              ? (n.removeEventListener("pointerdown", m, !0),
                n.removeEventListener("pointermove", m, !0),
                n.removeEventListener("pointerup", m, !0))
              : (n.removeEventListener("mousedown", m, !0),
                n.removeEventListener("mousemove", m, !0),
                n.removeEventListener("mouseup", m, !0)),
            u.delete(r));
      };
      function x() {
        return "pointer" !== s;
      }
      function E() {
        return s;
      }
      "undefined" != typeof document &&
        (function (e) {
          let t;
          let r = (0, i.r)(void 0);
          "loading" !== r.readyState
            ? y(void 0)
            : ((t = () => {
                y(void 0);
              }),
              r.addEventListener("DOMContentLoaded", t)),
            () => w(e, t);
        })();
      let T = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      function P(e, t, r) {
        y(),
          (0, a.useEffect)(() => {
            let t = (t, n) => {
              (function (e, t, r) {
                var n;
                let o =
                    "undefined" != typeof window
                      ? (0, i.k)(null == r ? void 0 : r.target).HTMLInputElement
                      : HTMLInputElement,
                  a =
                    "undefined" != typeof window
                      ? (0, i.k)(null == r ? void 0 : r.target)
                          .HTMLTextAreaElement
                      : HTMLTextAreaElement,
                  s =
                    "undefined" != typeof window
                      ? (0, i.k)(null == r ? void 0 : r.target).HTMLElement
                      : HTMLElement,
                  l =
                    "undefined" != typeof window
                      ? (0, i.k)(null == r ? void 0 : r.target).KeyboardEvent
                      : KeyboardEvent;
                return !(
                  (e =
                    e ||
                    ((null == r ? void 0 : r.target) instanceof o &&
                      !T.has(
                        null == r
                          ? void 0
                          : null === (n = r.target) || void 0 === n
                          ? void 0
                          : n.type
                      )) ||
                    (null == r ? void 0 : r.target) instanceof a ||
                    ((null == r ? void 0 : r.target) instanceof s &&
                      (null == r ? void 0 : r.target.isContentEditable))) &&
                  "keyboard" === t &&
                  r instanceof l &&
                  !f[r.key]
                );
              })(!!(null == r ? void 0 : r.isTextInput), t, n) && e(x());
            };
            return (
              l.add(t),
              () => {
                l.delete(t);
              }
            );
          }, t);
      }
    },
    8419: function (e, t, r) {
      "use strict";
      r.d(t, {
        X: function () {
          return u;
        },
      });
      var n = r(7294);
      let o = !1,
        i = 0;
      function a() {
        (o = !0),
          setTimeout(() => {
            o = !1;
          }, 50);
      }
      function s(e) {
        "touch" === e.pointerType && a();
      }
      function l() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent
              ? document.addEventListener("pointerup", s)
              : document.addEventListener("touchend", a),
            i++,
            () => {
              --i > 0 ||
                ("undefined" != typeof PointerEvent
                  ? document.removeEventListener("pointerup", s)
                  : document.removeEventListener("touchend", a));
            }
          );
      }
      function u(e) {
        let {
            onHoverStart: t,
            onHoverChange: r,
            onHoverEnd: i,
            isDisabled: a,
          } = e,
          [s, u] = (0, n.useState)(!1),
          c = (0, n.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
          }).current;
        (0, n.useEffect)(l, []);
        let { hoverProps: d, triggerHoverEnd: f } = (0, n.useMemo)(() => {
          let e = (e, n) => {
              if (
                ((c.pointerType = n),
                a ||
                  "touch" === n ||
                  c.isHovered ||
                  !e.currentTarget.contains(e.target))
              )
                return;
              c.isHovered = !0;
              let o = e.currentTarget;
              (c.target = o),
                t && t({ type: "hoverstart", target: o, pointerType: n }),
                r && r(!0),
                u(!0);
            },
            n = (e, t) => {
              if (
                ((c.pointerType = ""),
                (c.target = null),
                "touch" === t || !c.isHovered)
              )
                return;
              c.isHovered = !1;
              let n = e.currentTarget;
              i && i({ type: "hoverend", target: n, pointerType: t }),
                r && r(!1),
                u(!1);
            },
            s = {};
          return (
            "undefined" != typeof PointerEvent
              ? ((s.onPointerEnter = (t) => {
                  (o && "mouse" === t.pointerType) || e(t, t.pointerType);
                }),
                (s.onPointerLeave = (e) => {
                  !a &&
                    e.currentTarget.contains(e.target) &&
                    n(e, e.pointerType);
                }))
              : ((s.onTouchStart = () => {
                  c.ignoreEmulatedMouseEvents = !0;
                }),
                (s.onMouseEnter = (t) => {
                  c.ignoreEmulatedMouseEvents || o || e(t, "mouse"),
                    (c.ignoreEmulatedMouseEvents = !1);
                }),
                (s.onMouseLeave = (e) => {
                  !a && e.currentTarget.contains(e.target) && n(e, "mouse");
                })),
            { hoverProps: s, triggerHoverEnd: n }
          );
        }, [t, r, i, a, c]);
        return (
          (0, n.useEffect)(() => {
            a && f({ currentTarget: c.target }, c.pointerType);
          }, [a]),
          { hoverProps: d, isHovered: s }
        );
      }
    },
    4247: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return s;
        },
      });
      var n = r(7294),
        o = r(9786),
        i = r(1718);
      class a {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
        }
        preventDefault() {
          (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(),
            (this.isPropagationStopped = () => !0);
        }
        isPropagationStopped() {
          return !1;
        }
        persist() {}
        constructor(e, t) {
          (this.nativeEvent = t),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.bubbles = t.bubbles),
            (this.cancelable = t.cancelable),
            (this.defaultPrevented = t.defaultPrevented),
            (this.eventPhase = t.eventPhase),
            (this.isTrusted = t.isTrusted),
            (this.timeStamp = t.timeStamp),
            (this.type = e);
        }
      }
      function s(e) {
        let t = (0, n.useRef)({ isFocused: !1, observer: null });
        (0, o.b)(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let r = (0, i.i)((t) => {
          null == e || e(t);
        });
        return (0, n.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let n = e.target;
              n.addEventListener(
                "focusout",
                (e) => {
                  (t.current.isFocused = !1),
                    n.disabled && r(new a("blur", e)),
                    t.current.observer &&
                      (t.current.observer.disconnect(),
                      (t.current.observer = null));
                },
                { once: !0 }
              ),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && n.disabled) {
                    var e;
                    null === (e = t.current.observer) ||
                      void 0 === e ||
                      e.disconnect();
                    let r =
                      n === document.activeElement
                        ? null
                        : document.activeElement;
                    n.dispatchEvent(
                      new FocusEvent("blur", { relatedTarget: r })
                    ),
                      n.dispatchEvent(
                        new FocusEvent("focusout", {
                          bubbles: !0,
                          relatedTarget: r,
                        })
                      );
                  }
                })),
                t.current.observer.observe(n, {
                  attributes: !0,
                  attributeFilter: ["disabled"],
                });
            }
          },
          [r]
        );
      }
    },
    1086: function (e, t, r) {
      "use strict";
      function n(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t);
        };
      }
      r.d(t, {
        t: function () {
          return n;
        },
      });
    },
    8837: function (e, t, r) {
      "use strict";
      r.d(t, {
        k: function () {
          return o;
        },
        r: function () {
          return n;
        },
      });
      let n = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        o = (e) =>
          e && "window" in e && e.window === e ? e : n(e).defaultView || window;
    },
    6301: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
        c: function () {
          return i;
        },
      });
      var n = r(8806);
      function o(e) {
        return (
          (0 === e.mozInputSource && !!e.isTrusted) ||
          ((0, n.Dt)() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function i(e) {
        return (
          (!(0, n.Dt)() && 0 === e.width && 0 === e.height) ||
          (1 === e.width &&
            1 === e.height &&
            0 === e.pressure &&
            0 === e.detail &&
            "mouse" === e.pointerType)
        );
      }
    },
    2226: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return a;
        },
      });
      var n = r(1086);
      r(7294),
        "undefined" != typeof window &&
          window.document &&
          window.document.createElement;
      let o = new Map();
      var i = function () {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (r = 0; r < i; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                } else for (n in t) t[n] && (o && (o += " "), (o += n));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      };
      function a(...e) {
        let t = { ...e[0] };
        for (let r = 1; r < e.length; r++) {
          let a = e[r];
          for (let e in a) {
            let r = t[e],
              s = a[e];
            "function" == typeof r &&
            "function" == typeof s &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = (0, n.t)(r, s))
              : ("className" === e || "UNSAFE_className" === e) &&
                "string" == typeof r &&
                "string" == typeof s
              ? (t[e] = i(r, s))
              : "id" === e && r && s
              ? (t.id = (function (e, t) {
                  if (e === t) return e;
                  let r = o.get(e);
                  if (r) return r(t), t;
                  let n = o.get(t);
                  return n ? (n(e), e) : t;
                })(r, s))
              : (t[e] = void 0 !== s ? s : r);
          }
        }
        return t;
      }
    },
    5007: function (e, t, r) {
      "use strict";
      r.d(t, {
        Q: function () {
          return a;
        },
      });
      let n = new Map(),
        o = new Set();
      function i() {
        if ("undefined" == typeof window) return;
        function e(e) {
          return "propertyName" in e;
        }
        let t = (r) => {
          if (!e(r) || !r.target) return;
          let i = n.get(r.target);
          if (
            i &&
            (i.delete(r.propertyName),
            0 === i.size &&
              (r.target.removeEventListener("transitioncancel", t),
              n.delete(r.target)),
            0 === n.size)
          ) {
            for (let e of o) e();
            o.clear();
          }
        };
        document.body.addEventListener("transitionrun", (r) => {
          if (!e(r) || !r.target) return;
          let o = n.get(r.target);
          o ||
            ((o = new Set()),
            n.set(r.target, o),
            r.target.addEventListener("transitioncancel", t, { once: !0 })),
            o.add(r.propertyName);
        }),
          document.body.addEventListener("transitionend", t);
      }
      function a(e) {
        requestAnimationFrame(() => {
          0 === n.size ? e() : o.add(e);
        });
      }
      "undefined" != typeof document &&
        ("loading" !== document.readyState
          ? i()
          : document.addEventListener("DOMContentLoaded", i));
    },
    1718: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return i;
        },
      });
      var n = r(9786),
        o = r(7294);
      function i(e) {
        let t = (0, o.useRef)(null);
        return (
          (0, n.b)(() => {
            t.current = e;
          }, [e]),
          (0, o.useCallback)((...e) => {
            let r = t.current;
            return null == r ? void 0 : r(...e);
          }, [])
        );
      }
    },
    9786: function (e, t, r) {
      "use strict";
      r.d(t, {
        b: function () {
          return o;
        },
      });
      var n = r(7294);
      let o = "undefined" != typeof document ? n.useLayoutEffect : () => {};
    },
    9373: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return o;
        },
      });
      var n = r(7294);
      function o(e, t, r) {
        let [o, i] = (0, n.useState)(e || t),
          a = (0, n.useRef)(void 0 !== e),
          s = void 0 !== e;
        (0, n.useEffect)(() => {
          let e = a.current;
          e !== s &&
            console.warn(
              `WARN: A component changed from ${
                e ? "controlled" : "uncontrolled"
              } to ${s ? "controlled" : "uncontrolled"}.`
            ),
            (a.current = s);
        }, [s]);
        let l = s ? e : o,
          u = (0, n.useCallback)(
            (e, ...t) => {
              let n = (e, ...t) => {
                r && !Object.is(l, e) && r(e, ...t), s || (l = e);
              };
              "function" == typeof e
                ? (console.warn(
                    "We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"
                  ),
                  i((r, ...o) => {
                    let i = e(s ? l : r, ...o);
                    return (n(i, ...t), s) ? r : i;
                  }))
                : (s || i(e), n(e, ...t));
            },
            [s, l, r]
          );
        return [l, u];
      }
    },
    8588: function (e, t, r) {
      "use strict";
      r.d(t, {
        M: function () {
          return n;
        },
      });
      let n = "data-" + (0, r(3193).D)("framerAppearId");
    },
    2445: function (e, t, r) {
      "use strict";
      function n(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      r.d(t, {
        H: function () {
          return n;
        },
      });
    },
    8488: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return n;
        },
      });
      let n = (e) => Array.isArray(e);
    },
    1526: function (e, t, r) {
      "use strict";
      r.d(t, {
        M: function () {
          return b;
        },
      });
      var n = r(5893),
        o = r(7294),
        i = r(8868);
      function a() {
        let e = (0, o.useRef)(!1);
        return (
          (0, i.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var s = r(6166),
        l = r(240),
        u = r(6681),
        c = r(6014);
      class d extends o.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function f({ children: e, isPresent: t }) {
        let r = (0, o.useId)(),
          i = (0, o.useRef)(null),
          a = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: s } = (0, o.useContext)(c._);
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: e, height: n, top: o, left: l } = a.current;
            if (t || !i.current || !e || !n) return;
            i.current.dataset.motionPopId = r;
            let u = document.createElement("style");
            return (
              s && (u.nonce = s),
              document.head.appendChild(u),
              u.sheet &&
                u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${o}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(u);
              }
            );
          }, [t]),
          (0, n.jsx)(d, {
            isPresent: t,
            childRef: i,
            sizeRef: a,
            children: o.cloneElement(e, { ref: i }),
          })
        );
      }
      let p = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: i,
        custom: a,
        presenceAffectsLayout: s,
        mode: c,
      }) => {
        let d = (0, u.h)(h),
          p = (0, o.useId)(),
          m = (0, o.useMemo)(
            () => ({
              id: p,
              initial: t,
              isPresent: r,
              custom: a,
              onExitComplete: (e) => {
                for (let t of (d.set(e, !0), d.values())) if (!t) return;
                i && i();
              },
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }),
            s ? [Math.random()] : [r]
          );
        return (
          (0, o.useMemo)(() => {
            d.forEach((e, t) => d.set(t, !1));
          }, [r]),
          o.useEffect(() => {
            r || d.size || !i || i();
          }, [r]),
          "popLayout" === c &&
            (e = (0, n.jsx)(f, { isPresent: r, children: e })),
          (0, n.jsx)(l.O.Provider, { value: m, children: e })
        );
      };
      function h() {
        return new Map();
      }
      var m = r(5364),
        v = r(5487);
      let g = (e) => e.key || "",
        b = ({
          children: e,
          custom: t,
          initial: r = !0,
          onExitComplete: l,
          exitBeforeEnter: u,
          presenceAffectsLayout: c = !0,
          mode: d = "sync",
        }) => {
          var f;
          (0, v.k)(!u, "Replace exitBeforeEnter with mode='wait'");
          let h =
              (0, o.useContext)(m.p).forceRender ||
              (function () {
                let e = a(),
                  [t, r] = (0, o.useState)(0),
                  n = (0, o.useCallback)(() => {
                    e.current && r(t + 1);
                  }, [t]);
                return [(0, o.useCallback)(() => s.Wi.postRender(n), [n]), t];
              })()[0],
            b = a(),
            y = (function (e) {
              let t = [];
              return (
                o.Children.forEach(e, (e) => {
                  (0, o.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            w = y,
            x = (0, o.useRef)(new Map()).current,
            E = (0, o.useRef)(w),
            T = (0, o.useRef)(new Map()).current,
            P = (0, o.useRef)(!0);
          if (
            ((0, i.L)(() => {
              (P.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let r = g(e);
                    t.set(r, e);
                  });
                })(y, T),
                (E.current = w);
            }),
            (f = () => {
              (P.current = !0), T.clear(), x.clear();
            }),
            (0, o.useEffect)(() => () => f(), []),
            P.current)
          )
            return (0, n.jsx)(n.Fragment, {
              children: w.map((e) =>
                (0, n.jsx)(
                  p,
                  {
                    isPresent: !0,
                    initial: !!r && void 0,
                    presenceAffectsLayout: c,
                    mode: d,
                    children: e,
                  },
                  g(e)
                )
              ),
            });
          w = [...w];
          let C = E.current.map(g),
            k = y.map(g),
            S = C.length;
          for (let e = 0; e < S; e++) {
            let t = C[e];
            -1 !== k.indexOf(t) || x.has(t) || x.set(t, void 0);
          }
          return (
            "wait" === d && x.size && (w = []),
            x.forEach((e, r) => {
              if (-1 !== k.indexOf(r)) return;
              let o = T.get(r);
              if (!o) return;
              let i = C.indexOf(r),
                a = e;
              a ||
                ((a = (0, n.jsx)(
                  p,
                  {
                    isPresent: !1,
                    onExitComplete: () => {
                      x.delete(r);
                      let e = Array.from(T.keys()).filter(
                        (e) => !k.includes(e)
                      );
                      if (
                        (e.forEach((e) => T.delete(e)),
                        (E.current = y.filter((t) => {
                          let n = g(t);
                          return n === r || e.includes(n);
                        })),
                        !x.size)
                      ) {
                        if (!1 === b.current) return;
                        h(), l && l();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: c,
                    mode: d,
                    children: o,
                  },
                  g(o)
                )),
                x.set(r, a)),
                w.splice(i, 0, a);
            }),
            (w = w.map((e) => {
              let t = e.key;
              return x.has(t)
                ? e
                : (0, n.jsx)(
                    p,
                    {
                      isPresent: !0,
                      presenceAffectsLayout: c,
                      mode: d,
                      children: e,
                    },
                    g(e)
                  );
            })),
            (0, n.jsx)(n.Fragment, {
              children: x.size ? w : w.map((e) => (0, o.cloneElement)(e)),
            })
          );
        };
    },
    8522: function (e, t, r) {
      "use strict";
      r.d(t, {
        X: function () {
          return s;
        },
      });
      var n = r(5893),
        o = r(7294),
        i = r(398),
        a = r(1879);
      function s({ children: e, features: t, strict: r = !1 }) {
        let [, s] = (0, o.useState)(!l(t)),
          u = (0, o.useRef)(void 0);
        if (!l(t)) {
          let { renderer: e, ...r } = t;
          (u.current = e), (0, a.K)(r);
        }
        return (
          (0, o.useEffect)(() => {
            l(t) &&
              t().then(({ renderer: e, ...t }) => {
                (0, a.K)(t), (u.current = e), s(!0);
              });
          }, []),
          (0, n.jsx)(i.u.Provider, {
            value: { renderer: u.current, strict: r },
            children: e,
          })
        );
      }
      function l(e) {
        return "function" == typeof e;
      }
    },
    5364: function (e, t, r) {
      "use strict";
      r.d(t, {
        p: function () {
          return n;
        },
      });
      let n = (0, r(7294).createContext)({});
    },
    398: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return n;
        },
      });
      let n = (0, r(7294).createContext)({ strict: !1 });
    },
    6014: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return n;
        },
      });
      let n = (0, r(7294).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    240: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return n;
        },
      });
      let n = (0, r(7294).createContext)(null);
    },
    9727: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(2081);
      class o {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(e) {
          if (!this.scheduled.has(e))
            return this.scheduled.add(e), this.order.push(e), !0;
        }
        remove(e) {
          let t = this.order.indexOf(e);
          -1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let i = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function a(e, t) {
        let r = !1,
          a = !0,
          s = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = i.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new o(),
                  r = new o(),
                  n = 0,
                  i = !1,
                  a = !1,
                  s = new WeakSet(),
                  l = {
                    schedule: (e, o = !1, a = !1) => {
                      let l = a && i,
                        u = l ? t : r;
                      return (
                        o && s.add(e),
                        u.add(e) && l && i && (n = t.order.length),
                        e
                      );
                    },
                    cancel: (e) => {
                      r.remove(e), s.delete(e);
                    },
                    process: (o) => {
                      if (i) {
                        a = !0;
                        return;
                      }
                      if (
                        ((i = !0),
                        ([t, r] = [r, t]),
                        r.clear(),
                        (n = t.order.length))
                      )
                        for (let r = 0; r < n; r++) {
                          let n = t.order[r];
                          s.has(n) && (l.schedule(n), e()), n(o);
                        }
                      (i = !1), a && ((a = !1), l.process(o));
                    },
                  };
                return l;
              })(() => (r = !0))),
              e
            ),
            {}
          ),
          u = (e) => {
            l[e].process(s);
          },
          c = () => {
            let o = n.c.useManualTiming ? s.timestamp : performance.now();
            (r = !1),
              (s.delta = a
                ? 1e3 / 60
                : Math.max(Math.min(o - s.timestamp, 40), 1)),
              (s.timestamp = o),
              (s.isProcessing = !0),
              i.forEach(u),
              (s.isProcessing = !1),
              r && t && ((a = !1), e(c));
          },
          d = () => {
            (r = !0), (a = !0), s.isProcessing || e(c);
          };
        return {
          schedule: i.reduce((e, t) => {
            let n = l[t];
            return (
              (e[t] = (e, t = !1, o = !1) => (r || d(), n.schedule(e, t, o))), e
            );
          }, {}),
          cancel: (e) => i.forEach((t) => l[t].cancel(e)),
          state: s,
          steps: l,
        };
      }
    },
    6166: function (e, t, r) {
      "use strict";
      r.d(t, {
        Pn: function () {
          return i;
        },
        Wi: function () {
          return o;
        },
        w0: function () {
          return a;
        },
      });
      var n = r(1662);
      let {
        schedule: o,
        cancel: i,
        state: a,
        steps: s,
      } = (0, r(9727).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    9442: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return o;
        },
      });
      let n = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        o = {};
      for (let e in n) o[e] = { isEnabled: (t) => n[e].some((e) => !!t[e]) };
    },
    1879: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return o;
        },
      });
      var n = r(9442);
      function o(e) {
        for (let t in e) n.A[t] = { ...n.A[t], ...e[t] };
      }
    },
    6728: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return i;
        },
      });
      let n = {};
      var o = r(4714);
      function i(e, { layout: t, layoutId: r }) {
        return (
          o.G.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!n[e] || "opacity" === e))
        );
      }
    },
    9664: function (e, t, r) {
      "use strict";
      let n, o;
      r.d(t, {
        H: function () {
          return rT;
        },
      });
      var i,
        a = r(2445),
        s = r(8488);
      function l(e, t) {
        if (!Array.isArray(t)) return !1;
        let r = t.length;
        if (r !== e.length) return !1;
        for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      var u = r(7732),
        c = r(9432);
      function d(e, t, r) {
        let n = e.getProps();
        return (0, c.o)(
          n,
          t,
          void 0 !== r ? r : n.custom,
          (function (e) {
            let t = {};
            return e.values.forEach((e, r) => (t[r] = e.get())), t;
          })(e),
          (function (e) {
            let t = {};
            return e.values.forEach((e, r) => (t[r] = e.getVelocity())), t;
          })(e)
        );
      }
      var f = r(2963),
        p = r(4714),
        h = r(8588);
      let m = (e) => 1e3 * e,
        v = (e) => e / 1e3,
        g = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        b = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        y = { type: "keyframes", duration: 0.8 },
        w = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        x = (e, { keyframes: t }) =>
          t.length > 2
            ? y
            : p.G.has(e)
            ? e.startsWith("scale")
              ? b(t[1])
              : g
            : w;
      function E(e, t) {
        return e[t] || e.default || e;
      }
      var T = r(2081);
      let P = { current: !1 },
        C = (e) => null !== e;
      function k(e, { repeat: t, repeatType: r = "loop" }, n) {
        let o = e.filter(C),
          i = t && "loop" !== r && t % 2 == 1 ? 0 : o.length - 1;
        return i && void 0 !== n ? n : o[i];
      }
      var S = r(6166);
      function M() {
        n = void 0;
      }
      let A = {
          now: () => (
            void 0 === n &&
              A.set(
                S.w0.isProcessing || T.c.useManualTiming
                  ? S.w0.timestamp
                  : performance.now()
              ),
            n
          ),
          set: (e) => {
            (n = e), queueMicrotask(M);
          },
        },
        j = (e) => /^0[^.\s]+$/u.test(e);
      var N = r(5487);
      let R = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
      var O = r(7630);
      let I = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var L = r(1649),
        V = r(6190);
      let F = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        D = (e) => e === L.Rx || e === V.px,
        z = (e, t) => parseFloat(e.split(", ")[t]),
        W =
          (e, t) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let o = n.match(/^matrix3d\((.+)\)$/u);
            if (o) return z(o[1], t);
            {
              let t = n.match(/^matrix\((.+)\)$/u);
              return t ? z(t[1], e) : 0;
            }
          },
        K = new Set(["x", "y", "z"]),
        B = p._.filter((e) => !K.has(e)),
        G = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: W(4, 13),
          y: W(5, 14),
        };
      (G.translateX = G.x), (G.translateY = G.y);
      let H = (e) => (t) => t.test(e),
        $ = [
          L.Rx,
          V.px,
          V.aQ,
          V.RW,
          V.vw,
          V.vh,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        U = (e) => $.find(H(e)),
        _ = new Set(),
        Z = !1,
        q = !1;
      function X() {
        if (q) {
          let e = Array.from(_).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            r = new Map();
          t.forEach((e) => {
            let t = (function (e) {
              let t = [];
              return (
                B.forEach((r) => {
                  let n = e.getValue(r);
                  void 0 !== n &&
                    (t.push([r, n.get()]),
                    n.set(r.startsWith("scale") ? 1 : 0));
                }),
                t
              );
            })(e);
            t.length && (r.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = r.get(e);
              t &&
                t.forEach(([t, r]) => {
                  var n;
                  null === (n = e.getValue(t)) || void 0 === n || n.set(r);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (q = !1), (Z = !1), _.forEach((e) => e.complete()), _.clear();
      }
      function Y() {
        _.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (q = !0);
        });
      }
      class J {
        constructor(e, t, r, n, o, i = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = r),
            (this.motionValue = n),
            (this.element = o),
            (this.isAsync = i);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (_.add(this),
                Z || ((Z = !0), S.Wi.read(Y), S.Wi.resolveKeyframes(X)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: r,
            motionValue: n,
          } = this;
          for (let o = 0; o < e.length; o++)
            if (null === e[o]) {
              if (0 === o) {
                let o = null == n ? void 0 : n.get(),
                  i = e[e.length - 1];
                if (void 0 !== o) e[0] = o;
                else if (r && t) {
                  let n = r.readValue(t, i);
                  null != n && (e[0] = n);
                }
                void 0 === e[0] && (e[0] = i), n && void 0 === o && n.set(e[0]);
              } else e[o] = e[o - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            _.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), _.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      var Q = r(6430),
        ee = r(4169);
      let et = (e, t) => (r) =>
          !!(
            ((0, Q.HD)(r) && Q.mj.test(r) && r.startsWith(e)) ||
            (t && Object.prototype.hasOwnProperty.call(r, t))
          ),
        er = (e, t, r) => (n) => {
          if (!(0, Q.HD)(n)) return n;
          let [o, i, a, s] = n.match(Q.KP);
          return {
            [e]: parseFloat(o),
            [t]: parseFloat(i),
            [r]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        en = (e) => (0, ee.u)(0, 255, e),
        eo = { ...L.Rx, transform: (e) => Math.round(en(e)) },
        ei = {
          test: et("rgb", "red"),
          parse: er("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            eo.transform(e) +
            ", " +
            eo.transform(t) +
            ", " +
            eo.transform(r) +
            ", " +
            (0, Q.Nw)(L.Fq.transform(n)) +
            ")",
        },
        ea = {
          test: et("#"),
          parse: function (e) {
            let t = "",
              r = "",
              n = "",
              o = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (r = e.substring(3, 5)),
                  (n = e.substring(5, 7)),
                  (o = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (r = e.substring(2, 3)),
                  (n = e.substring(3, 4)),
                  (o = e.substring(4, 5)),
                  (t += t),
                  (r += r),
                  (n += n),
                  (o += o)),
              {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(n, 16),
                alpha: o ? parseInt(o, 16) / 255 : 1,
              }
            );
          },
          transform: ei.transform,
        },
        es = {
          test: et("hsl", "hue"),
          parse: er("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            V.aQ.transform((0, Q.Nw)(t)) +
            ", " +
            V.aQ.transform((0, Q.Nw)(r)) +
            ", " +
            (0, Q.Nw)(L.Fq.transform(n)) +
            ")",
        },
        el = {
          test: (e) => ei.test(e) || ea.test(e) || es.test(e),
          parse: (e) =>
            ei.test(e) ? ei.parse(e) : es.test(e) ? es.parse(e) : ea.parse(e),
          transform: (e) =>
            (0, Q.HD)(e)
              ? e
              : e.hasOwnProperty("red")
              ? ei.transform(e)
              : es.transform(e),
        },
        eu = "number",
        ec = "color",
        ed =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function ef(e) {
        let t = e.toString(),
          r = [],
          n = { color: [], number: [], var: [] },
          o = [],
          i = 0,
          a = t
            .replace(
              ed,
              (e) => (
                el.test(e)
                  ? (n.color.push(i), o.push(ec), r.push(el.parse(e)))
                  : e.startsWith("var(")
                  ? (n.var.push(i), o.push("var"), r.push(e))
                  : (n.number.push(i), o.push(eu), r.push(parseFloat(e))),
                ++i,
                "${}"
              )
            )
            .split("${}");
        return { values: r, split: a, indexes: n, types: o };
      }
      function ep(e) {
        return ef(e).values;
      }
      function eh(e) {
        let { split: t, types: r } = ef(e),
          n = t.length;
        return (e) => {
          let o = "";
          for (let i = 0; i < n; i++)
            if (((o += t[i]), void 0 !== e[i])) {
              let t = r[i];
              t === eu
                ? (o += (0, Q.Nw)(e[i]))
                : t === ec
                ? (o += el.transform(e[i]))
                : (o += e[i]);
            }
          return o;
        };
      }
      let em = (e) => ("number" == typeof e ? 0 : e),
        ev = {
          test: function (e) {
            var t, r;
            return (
              isNaN(e) &&
              (0, Q.HD)(e) &&
              ((null === (t = e.match(Q.KP)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (r = e.match(Q.dA)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: ep,
          createTransformer: eh,
          getAnimatableNone: function (e) {
            let t = ep(e);
            return eh(e)(t.map(em));
          },
        },
        eg = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function eb(e) {
        let [t, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [n] = r.match(Q.KP) || [];
        if (!n) return e;
        let o = r.replace(n, ""),
          i = eg.has(t) ? 1 : 0;
        return n !== r && (i *= 100), t + "(" + i + o + ")";
      }
      let ey = /\b([a-z-]*)\(.*?\)/gu,
        ew = {
          ...ev,
          getAnimatableNone: (e) => {
            let t = e.match(ey);
            return t ? t.map(eb).join(" ") : e;
          },
        },
        ex = {
          ...r(6173).j,
          color: el,
          backgroundColor: el,
          outlineColor: el,
          fill: el,
          stroke: el,
          borderColor: el,
          borderTopColor: el,
          borderRightColor: el,
          borderBottomColor: el,
          borderLeftColor: el,
          filter: ew,
          WebkitFilter: ew,
        },
        eE = (e) => ex[e];
      function eT(e, t) {
        let r = eE(e);
        return (
          r !== ew && (r = ev),
          r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        );
      }
      let eP = new Set(["auto", "none", "0"]);
      class eC extends J {
        constructor(e, t, r, n) {
          super(e, t, r, n, null == n ? void 0 : n.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: r } = this;
          if (!t.current) return;
          super.readKeyframes();
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            if ("string" == typeof n && (0, O.t)(n)) {
              let o = (function e(t, r, n = 1) {
                (0, N.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [o, i] = (function (e) {
                  let t = I.exec(e);
                  if (!t) return [,];
                  let [, r, n, o] = t;
                  return [`--${null != r ? r : n}`, o];
                })(t);
                if (!o) return;
                let a = window.getComputedStyle(r).getPropertyValue(o);
                if (a) {
                  let e = a.trim();
                  return R(e) ? parseFloat(e) : e;
                }
                return (0, O.t)(i) ? e(i, r, n + 1) : i;
              })(n, t.current);
              void 0 !== o && (e[r] = o),
                r === e.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !F.has(r) || 2 !== e.length))
            return;
          let [n, o] = e,
            i = U(n),
            a = U(o);
          if (i !== a) {
            if (D(i) && D(a))
              for (let t = 0; t < e.length; t++) {
                let r = e[t];
                "string" == typeof r && (e[t] = parseFloat(r));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            r = [];
          for (let t = 0; t < e.length; t++) {
            var n;
            ("number" == typeof (n = e[t])
              ? 0 === n
              : null === n || "none" === n || "0" === n || j(n)) && r.push(t);
          }
          r.length &&
            (function (e, t, r) {
              let n,
                o = 0;
              for (; o < e.length && !n; ) {
                let t = e[o];
                "string" != typeof t || eP.has(t) || (n = e[o]), o++;
              }
              if (n && r) for (let o of t) e[o] = eT(r, n);
            })(e, r, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: r } = this;
          if (!e.current) return;
          "height" === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = G[r](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let n = t[t.length - 1];
          void 0 !== n && e.getValue(r, n).jump(n, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: r, unresolvedKeyframes: n } = this;
          if (!t.current) return;
          let o = t.getValue(r);
          o && o.jump(this.measuredOrigin, !1);
          let i = n.length - 1,
            a = n[i];
          (n[i] = G[r](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, r]) => {
                t.getValue(e).set(r);
              }),
            this.resolveNoneKeyframes();
        }
      }
      var ek = r(1662);
      let eS = (e, t) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (ev.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      class eM {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: r = "keyframes",
          repeat: n = 0,
          repeatDelay: o = 0,
          repeatType: i = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: e,
              delay: t,
              type: r,
              repeat: n,
              repeatDelay: o,
              repeatType: i,
              ...a,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (Y(), X()),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          this.hasAttemptedResolve = !0;
          let {
            name: r,
            type: n,
            velocity: o,
            delay: i,
            onComplete: a,
            onUpdate: s,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (e, t, r, n) {
              let o = e[0];
              if (null === o) return !1;
              let i = e[e.length - 1],
                a = eS(o, t),
                s = eS(i, t);
              return (
                (0, N.K)(
                  a === s,
                  `You are trying to animate ${t} from "${o}" to "${i}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${i} via the \`style\` property.`
                ),
                !!a &&
                  !!s &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let r = 0; r < e.length; r++)
                      if (e[r] !== t) return !0;
                  })(e) ||
                    ("spring" === r && n))
              );
            })(e, r, n, o)
          ) {
            if (P.current || !i) {
              null == s || s(k(e, this.options, t)),
                null == a || a(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      function eA(e, t, r) {
        var n, o;
        let i = Math.max(t - 5, 0);
        return (n = r - e(i)), (o = t - i) ? (1e3 / o) * n : 0;
      }
      function ej(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let eN = ["duration", "bounce"],
        eR = ["stiffness", "damping", "mass"];
      function eO(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function eI({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
        let o;
        let i = e[0],
          a = e[e.length - 1],
          s = { done: !1, value: i },
          {
            stiffness: l,
            damping: u,
            mass: c,
            duration: d,
            velocity: f,
            isResolvedFromDuration: p,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!eO(e, eR) && eO(e, eN)) {
              let r = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: r = 0,
                mass: n = 1,
              }) {
                let o, i;
                (0, N.K)(
                  e <= m(10),
                  "Spring duration must be 10 seconds or less"
                );
                let a = 1 - t;
                (a = (0, ee.u)(0.05, 1, a)),
                  (e = (0, ee.u)(0.01, 10, v(e))),
                  a < 1
                    ? ((o = (t) => {
                        let n = t * a,
                          o = n * e;
                        return 0.001 - ((n - r) / ej(t, a)) * Math.exp(-o);
                      }),
                      (i = (t) => {
                        let n = t * a * e,
                          i = Math.pow(a, 2) * Math.pow(t, 2) * e,
                          s = ej(Math.pow(t, 2), a);
                        return (
                          ((n * r + r - i) *
                            Math.exp(-n) *
                            (-o(t) + 0.001 > 0 ? -1 : 1)) /
                          s
                        );
                      }))
                    : ((o = (t) =>
                        -0.001 + Math.exp(-t * e) * ((t - r) * e + 1)),
                      (i = (t) => e * e * (r - t) * Math.exp(-t * e)));
                let s = (function (e, t, r) {
                  let n = r;
                  for (let r = 1; r < 12; r++) n -= e(n) / t(n);
                  return n;
                })(o, i, 5 / e);
                if (((e = m(e)), isNaN(s)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(s, 2) * n;
                  return {
                    stiffness: t,
                    damping: 2 * a * Math.sqrt(n * t),
                    duration: e,
                  };
                }
              })(e);
              (t = { ...t, ...r, mass: 1 }).isResolvedFromDuration = !0;
            }
            return t;
          })({ ...n, velocity: -v(n.velocity || 0) }),
          h = f || 0,
          g = u / (2 * Math.sqrt(l * c)),
          b = a - i,
          y = v(Math.sqrt(l / c)),
          w = 5 > Math.abs(b);
        if ((r || (r = w ? 0.01 : 2), t || (t = w ? 0.005 : 0.5), g < 1)) {
          let e = ej(y, g);
          o = (t) =>
            a -
            Math.exp(-g * y * t) *
              (((h + g * y * b) / e) * Math.sin(e * t) + b * Math.cos(e * t));
        } else if (1 === g)
          o = (e) => a - Math.exp(-y * e) * (b + (h + y * b) * e);
        else {
          let e = y * Math.sqrt(g * g - 1);
          o = (t) => {
            let r = Math.exp(-g * y * t),
              n = Math.min(e * t, 300);
            return (
              a -
              (r * ((h + g * y * b) * Math.sinh(n) + e * b * Math.cosh(n))) / e
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (e) => {
            let n = o(e);
            if (p) s.done = e >= d;
            else {
              let i = h;
              0 !== e && (i = g < 1 ? eA(o, e, n) : 0);
              let l = Math.abs(i) <= r,
                u = Math.abs(a - n) <= t;
              s.done = l && u;
            }
            return (s.value = s.done ? a : n), s;
          },
        };
      }
      function eL({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: o = 10,
        bounceStiffness: i = 500,
        modifyTarget: a,
        min: s,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, f;
        let p = e[0],
          h = { done: !1, value: p },
          m = (e) => (void 0 !== s && e < s) || (void 0 !== l && e > l),
          v = (e) =>
            void 0 === s
              ? l
              : void 0 === l
              ? s
              : Math.abs(s - e) < Math.abs(l - e)
              ? s
              : l,
          g = r * t,
          b = p + g,
          y = void 0 === a ? b : a(b);
        y !== b && (g = y - p);
        let w = (e) => -g * Math.exp(-e / n),
          x = (e) => y + w(e),
          E = (e) => {
            let t = w(e),
              r = x(e);
            (h.done = Math.abs(t) <= u), (h.value = h.done ? y : r);
          },
          T = (e) => {
            m(h.value) &&
              ((d = e),
              (f = eI({
                keyframes: [h.value, v(h.value)],
                velocity: eA(x, e, h.value),
                damping: o,
                stiffness: i,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (f || void 0 !== d || ((t = !0), E(e), T(e)),
              void 0 !== d && e >= d)
                ? f.next(e - d)
                : (t || E(e), h);
            },
          }
        );
      }
      let eV = (e, t, r) =>
        (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
      function eF(e, t, r, n) {
        if (e === t && r === n) return ek.Z;
        let o = (t) =>
          (function (e, t, r, n, o) {
            let i, a;
            let s = 0;
            do
              (i = eV((a = t + (r - t) / 2), n, o) - e) > 0 ? (r = a) : (t = a);
            while (Math.abs(i) > 1e-7 && ++s < 12);
            return a;
          })(t, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : eV(o(e), t, n));
      }
      let eD = eF(0.42, 0, 1, 1),
        ez = eF(0, 0, 0.58, 1),
        eW = eF(0.42, 0, 0.58, 1),
        eK = (e) => Array.isArray(e) && "number" != typeof e[0],
        eB = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        eG = (e) => (t) => 1 - e(1 - t),
        eH = (e) => 1 - Math.sin(Math.acos(e)),
        e$ = eG(eH),
        eU = eB(eH),
        e_ = eF(0.33, 1.53, 0.69, 0.99),
        eZ = eG(e_),
        eq = eB(eZ),
        eX = {
          linear: ek.Z,
          easeIn: eD,
          easeInOut: eW,
          easeOut: ez,
          circIn: eH,
          circInOut: eU,
          circOut: e$,
          backIn: eZ,
          backInOut: eq,
          backOut: e_,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * eZ(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        eY = (e) => {
          if (Array.isArray(e)) {
            (0, N.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, r, n, o] = e;
            return eF(t, r, n, o);
          }
          return "string" == typeof e
            ? ((0, N.k)(void 0 !== eX[e], `Invalid easing type '${e}'`), eX[e])
            : e;
        },
        eJ = (e, t) => (r) => t(e(r)),
        eQ = (...e) => e.reduce(eJ),
        e0 = (e, t, r) => {
          let n = t - e;
          return 0 === n ? 1 : (r - e) / n;
        },
        e1 = (e, t, r) => e + (t - e) * r;
      function e2(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
          ? t
          : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e;
      }
      let e4 = (e, t, r) => {
          let n = e * e,
            o = r * (t * t - n) + n;
          return o < 0 ? 0 : Math.sqrt(o);
        },
        e9 = [ea, ei, es],
        e8 = (e) => e9.find((t) => t.test(e));
      function e5(e) {
        let t = e8(e);
        (0, N.k)(
          !!t,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`
        );
        let r = t.parse(e);
        return (
          t === es &&
            (r = (function ({ hue: e, saturation: t, lightness: r, alpha: n }) {
              (e /= 360), (r /= 100);
              let o = 0,
                i = 0,
                a = 0;
              if ((t /= 100)) {
                let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  s = 2 * r - n;
                (o = e2(s, n, e + 1 / 3)),
                  (i = e2(s, n, e)),
                  (a = e2(s, n, e - 1 / 3));
              } else o = i = a = r;
              return {
                red: Math.round(255 * o),
                green: Math.round(255 * i),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let e7 = (e, t) => {
        let r = e5(e),
          n = e5(t),
          o = { ...r };
        return (e) => (
          (o.red = e4(r.red, n.red, e)),
          (o.green = e4(r.green, n.green, e)),
          (o.blue = e4(r.blue, n.blue, e)),
          (o.alpha = e1(r.alpha, n.alpha, e)),
          ei.transform(o)
        );
      };
      function e6(e, t) {
        return (r) => (r > 0 ? t : e);
      }
      function e3(e, t) {
        return (r) => e1(e, t, r);
      }
      function te(e) {
        return "number" == typeof e
          ? e3
          : "string" == typeof e
          ? (0, O.t)(e)
            ? e6
            : el.test(e)
            ? e7
            : tn
          : Array.isArray(e)
          ? tt
          : "object" == typeof e
          ? el.test(e)
            ? e7
            : tr
          : e6;
      }
      function tt(e, t) {
        let r = [...e],
          n = r.length,
          o = e.map((e, r) => te(e)(e, t[r]));
        return (e) => {
          for (let t = 0; t < n; t++) r[t] = o[t](e);
          return r;
        };
      }
      function tr(e, t) {
        let r = { ...e, ...t },
          n = {};
        for (let o in r)
          void 0 !== e[o] && void 0 !== t[o] && (n[o] = te(e[o])(e[o], t[o]));
        return (e) => {
          for (let t in n) r[t] = n[t](e);
          return r;
        };
      }
      let tn = (e, t) => {
        let r = ev.createTransformer(t),
          n = ef(e),
          o = ef(t);
        return n.indexes.var.length === o.indexes.var.length &&
          n.indexes.color.length === o.indexes.color.length &&
          n.indexes.number.length >= o.indexes.number.length
          ? eQ(
              tt(
                (function (e, t) {
                  var r;
                  let n = [],
                    o = { color: 0, var: 0, number: 0 };
                  for (let i = 0; i < t.values.length; i++) {
                    let a = t.types[i],
                      s = e.indexes[a][o[a]],
                      l = null !== (r = e.values[s]) && void 0 !== r ? r : 0;
                    (n[i] = l), o[a]++;
                  }
                  return n;
                })(n, o),
                o.values
              ),
              r
            )
          : ((0, N.K)(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            e6(e, t));
      };
      function to(e, t, r) {
        return "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof r
          ? e1(e, t, r)
          : te(e)(e, t);
      }
      function ti({
        duration: e = 300,
        keyframes: t,
        times: r,
        ease: n = "easeInOut",
      }) {
        let o = eK(n) ? n.map(eY) : eY(n),
          i = { done: !1, value: t[0] },
          a = (function (e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
            let i = e.length;
            if (
              ((0, N.k)(
                i === t.length,
                "Both input and output ranges must be the same length"
              ),
              1 === i)
            )
              return () => t[0];
            if (2 === i && e[0] === e[1]) return () => t[1];
            e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
            let a = (function (e, t, r) {
                let n = [],
                  o = r || to,
                  i = e.length - 1;
                for (let r = 0; r < i; r++) {
                  let i = o(e[r], e[r + 1]);
                  t && (i = eQ(Array.isArray(t) ? t[r] || ek.Z : t, i)),
                    n.push(i);
                }
                return n;
              })(t, n, o),
              s = a.length,
              l = (t) => {
                let r = 0;
                if (s > 1) for (; r < e.length - 2 && !(t < e[r + 1]); r++);
                let n = e0(e[r], e[r + 1], t);
                return a[r](n);
              };
            return r ? (t) => l((0, ee.u)(e[0], e[i - 1], t)) : l;
          })(
            (r && r.length === t.length
              ? r
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let r = e[e.length - 1];
                      for (let n = 1; n <= t; n++) {
                        let o = e0(0, t, n);
                        e.push(e1(r, 1, o));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
            ).map((t) => t * e),
            t,
            {
              ease: Array.isArray(o)
                ? o
                : t.map(() => o || eW).splice(0, t.length - 1),
            }
          );
        return {
          calculatedDuration: e,
          next: (t) => ((i.value = a(t)), (i.done = t >= e), i),
        };
      }
      let ta = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => S.Wi.update(t, !0),
            stop: () => (0, S.Pn)(t),
            now: () => (S.w0.isProcessing ? S.w0.timestamp : A.now()),
          };
        },
        ts = { decay: eL, inertia: eL, tween: ti, keyframes: ti, spring: eI },
        tl = (e) => e / 100;
      class tu extends eM {
        constructor({ KeyframeResolver: e = J, ...t }) {
          super(t),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let { name: r, motionValue: n, keyframes: o } = this.options,
            i = (e, t) => this.onKeyframesResolved(e, t);
          r && n && n.owner
            ? (this.resolver = n.owner.resolveKeyframes(o, i, r, n))
            : (this.resolver = new e(o, i, r, n)),
            this.resolver.scheduleResolve();
        }
        initPlayback(e) {
          let t, r;
          let {
              type: n = "keyframes",
              repeat: o = 0,
              repeatDelay: i = 0,
              repeatType: a,
              velocity: s = 0,
            } = this.options,
            l = ts[n] || ti;
          l !== ti &&
            "number" != typeof e[0] &&
            ((t = eQ(tl, to(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          "mirror" === a &&
            (r = l({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -s,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (e) {
                let t = 0,
                  r = e.next(t);
                for (; !r.done && t < 2e4; ) (t += 50), (r = e.next(t));
                return t >= 2e4 ? 1 / 0 : t;
              })(u));
          let { calculatedDuration: c } = u,
            d = c + i;
          return {
            generator: u,
            mirroredGenerator: r,
            mapPercentToKeyframes: t,
            calculatedDuration: c,
            resolvedDuration: d,
            totalDuration: d * (o + 1) - i,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: r } = this;
          if (!r) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: o,
            mirroredGenerator: i,
            mapPercentToKeyframes: a,
            keyframes: s,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c,
          } = r;
          if (null === this.startTime) return o.next(0);
          let {
            delay: d,
            repeat: f,
            repeatType: p,
            repeatDelay: h,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(e - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let b = this.currentTime,
            y = o;
          if (f) {
            let e = Math.min(this.currentTime, u) / c,
              t = Math.floor(e),
              r = e % 1;
            !r && e >= 1 && (r = 1),
              1 === r && t--,
              (t = Math.min(t, f + 1)) % 2 &&
                ("reverse" === p
                  ? ((r = 1 - r), h && (r -= h / c))
                  : "mirror" === p && (y = i)),
              (b = (0, ee.u)(0, 1, r) * c);
          }
          let w = g ? { done: !1, value: s[0] } : y.next(b);
          a && (w.value = a(w.value));
          let { done: x } = w;
          g ||
            null === l ||
            (x =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let E =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && x));
          return (
            E && void 0 !== n && (w.value = k(s, this.options, n)),
            m && m(w.value),
            E && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? v(e.calculatedDuration) : 0;
        }
        get time() {
          return v(this.currentTime);
        }
        set time(e) {
          (e = m(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e), t && (this.time = v(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: e = ta, onPlay: t } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = r),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      let tc = (e) => Array.isArray(e) && "number" == typeof e[0],
        td = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
        tf = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: td([0, 0.65, 0.55, 1]),
          circOut: td([0.55, 0, 1, 0.45]),
          backIn: td([0.31, 0.01, 0.66, -0.59]),
          backOut: td([0.33, 1.53, 0.69, 0.99]),
        };
      function tp(e) {
        return th(e) || tf.easeOut;
      }
      function th(e) {
        if (e) return tc(e) ? td(e) : Array.isArray(e) ? e.map(tp) : tf[e];
      }
      let tm =
          ((i = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === o && (o = i()), o)),
        tv = new Set(["opacity", "clipPath", "filter", "transform"]);
      class tg extends eM {
        constructor(e) {
          super(e);
          let { name: t, motionValue: r, keyframes: n } = this.options;
          (this.resolver = new eC(
            n,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var r, n;
          let {
            duration: o = 300,
            times: i,
            ease: a,
            type: s,
            motionValue: l,
            name: u,
          } = this.options;
          if (!(null === (r = l.owner) || void 0 === r ? void 0 : r.current))
            return !1;
          if (
            "spring" === (n = this.options).type ||
            "backgroundColor" === n.name ||
            !(function e(t) {
              return !!(
                !t ||
                ("string" == typeof t && t in tf) ||
                tc(t) ||
                (Array.isArray(t) && t.every(e))
              );
            })(n.ease)
          ) {
            let {
                onComplete: t,
                onUpdate: r,
                motionValue: n,
                ...l
              } = this.options,
              u = (function (e, t) {
                let r = new tu({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: e[0] },
                  o = [],
                  i = 0;
                for (; !n.done && i < 2e4; )
                  o.push((n = r.sample(i)).value), (i += 10);
                return {
                  times: void 0,
                  keyframes: o,
                  duration: i - 10,
                  ease: "linear",
                };
              })(e, l);
            1 === (e = u.keyframes).length && (e[1] = e[0]),
              (o = u.duration),
              (i = u.times),
              (a = u.ease),
              (s = "keyframes");
          }
          let c = (function (
            e,
            t,
            r,
            {
              delay: n = 0,
              duration: o = 300,
              repeat: i = 0,
              repeatType: a = "loop",
              ease: s,
              times: l,
            } = {}
          ) {
            let u = { [t]: r };
            l && (u.offset = l);
            let c = th(s);
            return (
              Array.isArray(c) && (u.easing = c),
              e.animate(u, {
                delay: n,
                duration: o,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: i + 1,
                direction: "reverse" === a ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, e, {
            ...this.options,
            duration: o,
            times: i,
            ease: a,
          });
          return (
            (c.startTime = A.now()),
            this.pendingTimeline
              ? ((c.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: r } = this.options;
                  l.set(k(e, this.options, t)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: o,
              times: i,
              type: s,
              ease: a,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return v(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return v(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.currentTime = m(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return ek.Z;
            let { animation: r } = t;
            (r.timeline = e), (r.onfinish = null);
          } else this.pendingTimeline = e;
          return ek.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: r,
            duration: n,
            type: o,
            ease: i,
            times: a,
          } = e;
          if ("idle" !== t.playState && "finished" !== t.playState) {
            if (this.time) {
              let {
                  motionValue: e,
                  onUpdate: t,
                  onComplete: s,
                  ...l
                } = this.options,
                u = new tu({
                  ...l,
                  keyframes: r,
                  duration: n,
                  type: o,
                  ease: i,
                  times: a,
                  isGenerator: !0,
                }),
                c = m(this.time);
              e.setWithVelocity(u.sample(c - 10).value, u.sample(c).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: r,
            repeatDelay: n,
            repeatType: o,
            damping: i,
            type: a,
          } = e;
          return (
            tm() &&
            r &&
            tv.has(r) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== o &&
            0 !== i &&
            "inertia" !== a
          );
        }
      }
      let tb =
        (e, t, r, n = {}, o, i) =>
        (a) => {
          let s = E(n, e) || {},
            l = s.delay || n.delay || 0,
            { elapsed: u = 0 } = n;
          u -= m(l);
          let c = {
            keyframes: Array.isArray(r) ? r : [null, r],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...s,
            delay: -u,
            onUpdate: (e) => {
              t.set(e), s.onUpdate && s.onUpdate(e);
            },
            onComplete: () => {
              a(), s.onComplete && s.onComplete();
            },
            name: e,
            motionValue: t,
            element: i ? void 0 : o,
          };
          !(function ({
            when: e,
            delay: t,
            delayChildren: r,
            staggerChildren: n,
            staggerDirection: o,
            repeat: i,
            repeatType: a,
            repeatDelay: s,
            from: l,
            elapsed: u,
            ...c
          }) {
            return !!Object.keys(c).length;
          })(s) && (c = { ...c, ...x(e, c) }),
            c.duration && (c.duration = m(c.duration)),
            c.repeatDelay && (c.repeatDelay = m(c.repeatDelay)),
            void 0 !== c.from && (c.keyframes[0] = c.from);
          let d = !1;
          if (
            ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
              ((c.duration = 0), 0 !== c.delay || (d = !0)),
            (P.current || T.c.skipAnimations) &&
              ((d = !0), (c.duration = 0), (c.delay = 0)),
            d && !i && void 0 !== t.get())
          ) {
            let e = k(c.keyframes, s);
            if (void 0 !== e) {
              S.Wi.update(() => {
                c.onUpdate(e), c.onComplete();
              });
              return;
            }
          }
          return !i && tg.supports(c) ? new tg(c) : new tu(c);
        };
      var ty = r(406);
      function tw(e) {
        return !!((0, ty.i)(e) && e.add);
      }
      var tx = r(8715);
      class tE {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          var t;
          return (
            -1 === (t = this.subscriptions).indexOf(e) && t.push(e),
            () =>
              (function (e, t) {
                let r = e.indexOf(t);
                r > -1 && e.splice(r, 1);
              })(this.subscriptions, e)
          );
        }
        notify(e, t, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](e, t, r);
            else
              for (let o = 0; o < n; o++) {
                let n = this.subscriptions[o];
                n && n(e, t, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let tT = (e) => !isNaN(parseFloat(e)),
        tP = { current: void 0 };
      class tC {
        constructor(e, t = {}) {
          (this.version = "11.1.9"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let r = A.now();
              this.updatedAt !== r && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.canTrackVelocity = tT(this.current)),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e), (this.updatedAt = A.now());
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new tE());
          let r = this.events[e].add(t);
          return "change" === e
            ? () => {
                r(),
                  S.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, r) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - r);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return tP.current && tP.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var e;
          let t = A.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (e = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            r ? (1e3 / r) * e : 0
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function tk(e, t) {
        return new tC(e, t);
      }
      function tS(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
        var i;
        let {
            transition: a = e.getDefaultTransition(),
            transitionEnd: s,
            ...l
          } = t,
          u = e.getValue("willChange");
        n && (a = n);
        let c = [],
          f = o && e.animationState && e.animationState.getState()[o];
        for (let t in l) {
          let n = e.getValue(
              t,
              null !== (i = e.latestValues[t]) && void 0 !== i ? i : null
            ),
            o = l[t];
          if (
            void 0 === o ||
            (f &&
              (function ({ protectedKeys: e, needsAnimating: t }, r) {
                let n = e.hasOwnProperty(r) && !0 !== t[r];
                return (t[r] = !1), n;
              })(f, t))
          )
            continue;
          let s = { delay: r, elapsed: 0, ...E(a || {}, t) },
            d = !1;
          if (window.HandoffAppearAnimations) {
            let r = e.getProps()[h.M];
            if (r) {
              let e = window.HandoffAppearAnimations(r, t);
              null !== e && ((s.elapsed = e), (d = !0));
            }
          }
          n.start(
            tb(
              t,
              n,
              o,
              e.shouldReduceMotion && p.G.has(t) ? { type: !1 } : s,
              e,
              d
            )
          );
          let m = n.animation;
          m && (tw(u) && (u.add(t), m.then(() => u.remove(t))), c.push(m));
        }
        return (
          s &&
            Promise.all(c).then(() => {
              S.Wi.update(() => {
                s &&
                  (function (e, t) {
                    let {
                      transitionEnd: r = {},
                      transition: n = {},
                      ...o
                    } = d(e, t) || {};
                    for (let t in (o = { ...o, ...r })) {
                      let r = (0, tx.Y)(o[t]);
                      e.hasValue(t)
                        ? e.getValue(t).set(r)
                        : e.addValue(t, tk(r));
                    }
                  })(e, s);
              });
            }),
          c
        );
      }
      function tM(e, t, r = {}) {
        var n;
        let o = d(
            e,
            t,
            "exit" === r.type
              ? null === (n = e.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: i = e.getDefaultTransition() || {} } = o || {};
        r.transitionOverride && (i = r.transitionOverride);
        let a = o ? () => Promise.all(tS(e, o, r)) : () => Promise.resolve(),
          s =
            e.variantChildren && e.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: o = 0,
                    staggerChildren: a,
                    staggerDirection: s,
                  } = i;
                  return (function (e, t, r = 0, n = 0, o = 1, i) {
                    let a = [],
                      s = (e.variantChildren.size - 1) * n,
                      l = 1 === o ? (e = 0) => e * n : (e = 0) => s - e * n;
                    return (
                      Array.from(e.variantChildren)
                        .sort(tA)
                        .forEach((e, n) => {
                          e.notify("AnimationStart", t),
                            a.push(
                              tM(e, t, { ...i, delay: r + l(n) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(e, t, o + n, a, s, r);
                }
              : () => Promise.resolve(),
          { when: l } = i;
        if (!l) return Promise.all([a(), s(r.delay)]);
        {
          let [e, t] = "beforeChildren" === l ? [a, s] : [s, a];
          return e().then(() => t());
        }
      }
      function tA(e, t) {
        return e.sortNodePosition(t);
      }
      let tj = [...f.e].reverse(),
        tN = f.e.length;
      function tR(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class tO {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      class tI extends tO {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: r }) =>
                        (function (e, t, r = {}) {
                          let n;
                          if ((e.notify("AnimationStart", t), Array.isArray(t)))
                            n = Promise.all(t.map((t) => tM(e, t, r)));
                          else if ("string" == typeof t) n = tM(e, t, r);
                          else {
                            let o =
                              "function" == typeof t ? d(e, t, r.custom) : t;
                            n = Promise.all(tS(e, o, r));
                          }
                          return n.then(() => {
                            S.Wi.postRender(() => {
                              e.notify("AnimationComplete", t);
                            });
                          });
                        })(e, t, r)
                      )
                    ),
                  r = {
                    animate: tR(!0),
                    whileInView: tR(),
                    whileHover: tR(),
                    whileTap: tR(),
                    whileDrag: tR(),
                    whileFocus: tR(),
                    exit: tR(),
                  },
                  n = !0,
                  o = (t) => (r, n) => {
                    var o;
                    let i = d(
                      e,
                      n,
                      "exit" === t
                        ? null === (o = e.presenceContext) || void 0 === o
                          ? void 0
                          : o.custom
                        : void 0
                    );
                    if (i) {
                      let { transition: e, transitionEnd: t, ...n } = i;
                      r = { ...r, ...n, ...t };
                    }
                    return r;
                  };
                function i(i) {
                  let c = e.getProps(),
                    d = e.getVariantContext(!0) || {},
                    f = [],
                    p = new Set(),
                    h = {},
                    m = 1 / 0;
                  for (let t = 0; t < tN; t++) {
                    var v;
                    let g = tj[t],
                      b = r[g],
                      y = void 0 !== c[g] ? c[g] : d[g],
                      w = (0, u.$)(y),
                      x = g === i ? b.isActive : null;
                    !1 === x && (m = t);
                    let E = y === d[g] && y !== c[g] && w;
                    if (
                      (E && n && e.manuallyAnimateOnMount && (E = !1),
                      (b.protectedKeys = { ...h }),
                      (!b.isActive && null === x) ||
                        (!y && !b.prevProp) ||
                        (0, a.H)(y) ||
                        "boolean" == typeof y)
                    )
                      continue;
                    let T =
                        ((v = b.prevProp),
                        ("string" == typeof y
                          ? y !== v
                          : !!Array.isArray(y) && !l(y, v)) ||
                          (g === i && b.isActive && !E && w) ||
                          (t > m && w)),
                      P = !1,
                      C = Array.isArray(y) ? y : [y],
                      k = C.reduce(o(g), {});
                    !1 === x && (k = {});
                    let { prevResolvedValues: S = {} } = b,
                      M = { ...S, ...k },
                      A = (t) => {
                        (T = !0),
                          p.has(t) && ((P = !0), p.delete(t)),
                          (b.needsAnimating[t] = !0);
                        let r = e.getValue(t);
                        r && (r.liveStyle = !1);
                      };
                    for (let e in M) {
                      let t = k[e],
                        r = S[e];
                      if (!h.hasOwnProperty(e))
                        ((0, s.C)(t) && (0, s.C)(r) ? l(t, r) : t === r)
                          ? void 0 !== t && p.has(e)
                            ? A(e)
                            : (b.protectedKeys[e] = !0)
                          : null != t
                          ? A(e)
                          : p.add(e);
                    }
                    (b.prevProp = y),
                      (b.prevResolvedValues = k),
                      b.isActive && (h = { ...h, ...k }),
                      n && e.blockInitialAnimation && (T = !1),
                      T &&
                        (!E || P) &&
                        f.push(
                          ...C.map((e) => ({
                            animation: e,
                            options: { type: g },
                          }))
                        );
                  }
                  if (p.size) {
                    let t = {};
                    p.forEach((r) => {
                      let n = e.getBaseTarget(r),
                        o = e.getValue(r);
                      o && (o.liveStyle = !0), (t[r] = null != n ? n : null);
                    }),
                      f.push({ animation: t });
                  }
                  let g = !!f.length;
                  return (
                    n &&
                      (!1 === c.initial || c.initial === c.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (g = !1),
                    (n = !1),
                    g ? t(f) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: i,
                  setActive: function (t, n) {
                    var o;
                    if (r[t].isActive === n) return Promise.resolve();
                    null === (o = e.variantChildren) ||
                      void 0 === o ||
                      o.forEach((e) => {
                        var r;
                        return null === (r = e.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(t, n);
                      }),
                      (r[t].isActive = n);
                    let a = i(t);
                    for (let e in r) r[e].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (r) {
                    t = r(e);
                  },
                  getState: () => r,
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          this.unmount(),
            (0, a.H)(e) && (this.unmount = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let tL = 0;
      class tV extends tO {
        constructor() {
          super(...arguments), (this.id = tL++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === r) return;
          let n = this.node.animationState.setActive("exit", !e);
          t && !e && n.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      function tF(e, t, r, n = { passive: !0 }) {
        return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
      }
      let tD = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function tz(e, t = "page") {
        return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
      }
      let tW = (e) => (t) => tD(t) && e(t, tz(t));
      function tK(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let tB = tK("dragHorizontal"),
        tG = tK("dragVertical");
      function tH() {
        let e = (function (e) {
          let t = !1;
          if ("y" === e) t = tG();
          else if ("x" === e) t = tB();
          else {
            let e = tB(),
              r = tG();
            e && r
              ? (t = () => {
                  e(), r();
                })
              : (e && e(), r && r());
          }
          return t;
        })(!0);
        return !e || (e(), !1);
      }
      function t$(e, t) {
        var r, n, o;
        let i = t ? "pointerenter" : "pointerleave",
          a = t ? "onHoverStart" : "onHoverEnd";
        return (
          (r = e.current),
          (n = (r, n) => {
            if ("touch" === r.pointerType || tH()) return;
            let o = e.getProps();
            e.animationState &&
              o.whileHover &&
              e.animationState.setActive("whileHover", t);
            let i = o[a];
            i && S.Wi.postRender(() => i(r, n));
          }),
          (o = { passive: !e.getProps()[a] }),
          tF(r, i, tW(n), o)
        );
      }
      class tU extends tO {
        mount() {
          this.unmount = eQ(t$(this.node, !0), t$(this.node, !1));
        }
        unmount() {}
      }
      class t_ extends tO {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = eQ(
            tF(this.node.current, "focus", () => this.onFocus()),
            tF(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let tZ = (e, t) => !!t && (e === t || tZ(e, t.parentElement));
      function tq(e, t) {
        if (!t) return;
        let r = new PointerEvent("pointer" + e);
        t(r, tz(r));
      }
      class tX extends tO {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = ek.Z),
            (this.removeEndListeners = ek.Z),
            (this.removeAccessibleListeners = ek.Z),
            (this.startPointerPress = (e, t) => {
              var r, n, o, i, a, s, l, u;
              if (this.isPressing) return;
              this.removeEndListeners();
              let c = this.node.getProps(),
                d =
                  ((r = window),
                  (n = "pointerup"),
                  (o = (e, t) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: r,
                        onTapCancel: n,
                        globalTapTarget: o,
                      } = this.node.getProps(),
                      i = o || tZ(this.node.current, e.target) ? r : n;
                    i && S.Wi.update(() => i(e, t));
                  }),
                  (i = { passive: !(c.onTap || c.onPointerUp) }),
                  tF(r, n, tW(o), i)),
                f =
                  ((a = window),
                  (s = "pointercancel"),
                  (l = (e, t) => this.cancelPress(e, t)),
                  (u = { passive: !(c.onTapCancel || c.onPointerCancel) }),
                  tF(a, s, tW(l), u));
              (this.removeEndListeners = eQ(d, f)), this.startPress(e, t);
            }),
            (this.startAccessiblePress = () => {
              let e = tF(this.node.current, "keydown", (e) => {
                  "Enter" !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tF(
                      this.node.current,
                      "keyup",
                      (e) => {
                        "Enter" === e.key &&
                          this.checkPressEnd() &&
                          tq("up", (e, t) => {
                            let { onTap: r } = this.node.getProps();
                            r && S.Wi.postRender(() => r(e, t));
                          });
                      }
                    )),
                    tq("down", (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = tF(this.node.current, "blur", () => {
                  this.isPressing &&
                    tq("cancel", (e, t) => this.cancelPress(e, t));
                });
              this.removeAccessibleListeners = eQ(e, t);
            });
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: r, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            r && S.Wi.postRender(() => r(e, t));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tH()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: r } = this.node.getProps();
          r && S.Wi.postRender(() => r(e, t));
        }
        mount() {
          var e, t, r, n;
          let o = this.node.getProps(),
            i =
              ((e = o.globalTapTarget ? window : this.node.current),
              (t = "pointerdown"),
              (r = this.startPointerPress),
              (n = { passive: !(o.onTapStart || o.onPointerStart) }),
              tF(e, t, tW(r), n)),
            a = tF(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = eQ(i, a);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let tY = new WeakMap(),
        tJ = new WeakMap(),
        tQ = (e) => {
          let t = tY.get(e.target);
          t && t(e);
        },
        t0 = (e) => {
          e.forEach(tQ);
        },
        t1 = { some: 0, all: 1 };
      class t2 extends tO {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: r, amount: n = "some", once: o } = e,
            i = {
              root: t ? t.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof n ? n : t1[n],
            };
          return (function (e, t, r) {
            let n = (function ({ root: e, ...t }) {
              let r = e || document;
              tJ.has(r) || tJ.set(r, {});
              let n = tJ.get(r),
                o = JSON.stringify(t);
              return (
                n[o] ||
                  (n[o] = new IntersectionObserver(t0, { root: e, ...t })),
                n[o]
              );
            })(t);
            return (
              tY.set(e, r),
              n.observe(e),
              () => {
                tY.delete(e), n.unobserve(e);
              }
            );
          })(this.node.current, i, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), o && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: r, onViewportLeave: n } =
                this.node.getProps(),
              i = t ? r : n;
            i && i(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (r) => e[r] !== t[r];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var t4 = r(7294),
        t9 = r(8057),
        t8 = r(189),
        t5 = r(4242);
      let t7 = () => ({ min: 0, max: 0 }),
        t6 = () => ({ x: t7(), y: t7() });
      var t3 = r(1804),
        re = r(1741);
      let rt = { current: null },
        rr = { current: !1 };
      var rn = r(7504),
        ro = r(9442);
      let ri = new WeakMap(),
        ra = [...$, el, ev],
        rs = (e) => ra.find(H(e)),
        rl = Object.keys(ro.A),
        ru = rl.length,
        rc = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        rd = f.V.length;
      class rf {
        scrapeMotionValuesFromProps(e, t, r) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: r,
            reducedMotionConfig: n,
            blockInitialAnimation: o,
            visualState: i,
          },
          a = {}
        ) {
          (this.resolveKeyframes = (e, t, r, n) =>
            new this.KeyframeResolver(e, t, r, n, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = J),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => S.Wi.render(this.render, !1, !0));
          let { latestValues: s, renderState: l } = i;
          (this.latestValues = s),
            (this.baseTarget = { ...s }),
            (this.initialValues = t.initial ? { ...s } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = a),
            (this.blockInitialAnimation = !!o),
            (this.isControllingVariants = (0, rn.G)(t)),
            (this.isVariantNode = (0, rn.M)(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: u, ...c } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this
          );
          for (let e in c) {
            let t = c[e];
            void 0 !== s[e] &&
              (0, ty.i)(t) &&
              (t.set(s[e], !1), tw(u) && u.add(e));
          }
        }
        mount(e) {
          (this.current = e),
            ri.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            rr.current ||
              (function () {
                if (((rr.current = !0), re.j)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (rt.current = e.matches);
                    e.addListener(t), t();
                  } else rt.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rt.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          var e;
          for (let e in (ri.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, S.Pn)(this.notifyUpdate),
          (0, S.Pn)(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let t in this.features)
            null === (e = this.features[t]) || void 0 === e || e.unmount();
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let r = p.G.has(e),
            n = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && S.Wi.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            o = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            n(), o(), t.owner && t.stop();
          });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...t }, r, n, o) {
          let i, a;
          for (let e = 0; e < ru; e++) {
            let r = rl[e],
              {
                isEnabled: n,
                Feature: o,
                ProjectionNode: s,
                MeasureLayout: l,
              } = ro.A[r];
            s && (i = s),
              n(t) &&
                (!this.features[r] && o && (this.features[r] = new o(this)),
                l && (a = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            i
          ) {
            this.projection = new i(
              this.latestValues,
              (function e(t) {
                if (t)
                  return !1 !== t.options.allowProjection
                    ? t.projection
                    : e(t.parent);
              })(this.parent)
            );
            let {
              layoutId: e,
              layout: r,
              drag: n,
              dragConstraints: a,
              layoutScroll: s,
              layoutRoot: l,
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: r,
              alwaysMeasureLayout: !!n || (a && (0, t3.I)(a)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: o,
              layoutScroll: s,
              layoutRoot: l,
            });
          }
          return a;
        }
        updateFeatures() {
          for (let e in this.features) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : t6();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < rc.length; t++) {
            let r = rc[t];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let n = e["on" + r];
            n && (this.propEventSubscriptions[r] = this.on(r, n));
          }
          (this.prevMotionValues = (function (e, t, r) {
            let { willChange: n } = t;
            for (let o in t) {
              let i = t[o],
                a = r[o];
              if ((0, ty.i)(i)) e.addValue(o, i), tw(n) && n.add(o);
              else if ((0, ty.i)(a))
                e.addValue(o, tk(i, { owner: e })), tw(n) && n.remove(o);
              else if (a !== i) {
                if (e.hasValue(o)) {
                  let t = e.getValue(o);
                  !0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i);
                } else {
                  let t = e.getStaticValue(o);
                  e.addValue(o, tk(void 0 !== t ? t : i, { owner: e }));
                }
              }
            }
            for (let n in r) void 0 === t[n] && e.removeValue(n);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let t = {};
          for (let e = 0; e < rd; e++) {
            let r = f.V[e],
              n = this.props[r];
            ((0, u.$)(n) || !1 === n) && (t[r] = n);
          }
          return t;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let r = this.values.get(e);
          t !== r &&
            (r && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let r = this.values.get(e);
          return (
            void 0 === r &&
              void 0 !== t &&
              ((r = tk(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, r)),
            r
          );
        }
        readValue(e, t) {
          var r;
          let n =
            void 0 === this.latestValues[e] && this.current
              ? null !== (r = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== r
                ? r
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != n &&
              ("string" == typeof n && (R(n) || j(n))
                ? (n = parseFloat(n))
                : !rs(n) && ev.test(t) && (n = eT(e, t)),
              this.setBaseTarget(e, (0, ty.i)(n) ? n.get() : n)),
            (0, ty.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let r;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let o = (0, c.o)(
              this.props,
              n,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom
            );
            o && (r = o[e]);
          }
          if (n && void 0 !== r) return r;
          let o = this.getBaseTargetFromProps(this.props, e);
          return void 0 === o || (0, ty.i)(o)
            ? void 0 !== this.initialValues[e] && void 0 === r
              ? void 0
              : this.baseTarget[e]
            : o;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new tE()), this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class rp extends rf {
        constructor() {
          super(...arguments), (this.KeyframeResolver = eC);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: r }) {
          delete t[e], delete r[e];
        }
      }
      class rh extends rp {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(e, t) {
          if (p.G.has(t)) {
            let e = eE(t);
            return (e && e.default) || 0;
          }
          {
            let r = window.getComputedStyle(e),
              n = ((0, O.f)(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return (function ({ top: e, left: t, right: r, bottom: n }) {
            return { x: { min: t, max: r }, y: { min: e, max: n } };
          })(
            (function (e, t) {
              if (!t) return e;
              let r = t({ x: e.left, y: e.top }),
                n = t({ x: e.right, y: e.bottom });
              return { top: r.y, left: r.x, bottom: n.y, right: n.x };
            })(e.getBoundingClientRect(), t)
          );
        }
        build(e, t, r, n) {
          (0, t9.r)(e, t, r, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return (0, t8.U)(e, t, r);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          (0, ty.i)(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, t, r, n) {
          (0, t5.N)(e, t, r, n);
        }
      }
      var rm = r(6832),
        rv = r(5415),
        rg = r(3193),
        rb = r(7302),
        ry = r(8504),
        rw = r(9854);
      class rx extends rp {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (p.G.has(t)) {
            let e = eE(t);
            return (e && e.default) || 0;
          }
          return (t = rb.s.has(t) ? t : (0, rg.D)(t)), e.getAttribute(t);
        }
        measureInstanceViewportBox() {
          return t6();
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return (0, rm.U)(e, t, r);
        }
        build(e, t, r, n) {
          (0, rv.i)(e, t, r, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(e, t, r, n) {
          (0, ry.K)(e, t, r, n);
        }
        mount(e) {
          (this.isSVGTag = (0, rw.a)(e.tagName)), super.mount(e);
        }
      }
      var rE = r(2627);
      let rT = {
        renderer: (e, t) =>
          (0, rE.q)(e)
            ? new rx(t, { enableHardwareAcceleration: !1 })
            : new rh(t, {
                allowProjection: e !== t4.Fragment,
                enableHardwareAcceleration: !0,
              }),
        animation: { Feature: tI },
        exit: { Feature: tV },
        inView: { Feature: t2 },
        tap: { Feature: tX },
        focus: { Feature: t_ },
        hover: { Feature: tU },
      };
    },
    8897: function (e, t, r) {
      "use strict";
      r.d(t, {
        m: function () {
          return $;
        },
      });
      var n,
        o = r(5893),
        i = r(7294),
        a = r(6014);
      let s = (0, i.createContext)({});
      var l = r(240),
        u = r(8868),
        c = r(398),
        d = r(8588);
      let { schedule: f, cancel: p } = (0, r(9727).Z)(queueMicrotask, !1);
      var h = r(1804),
        m = r(7732),
        v = r(7504);
      function g(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var b = r(1879),
        y = r(1741),
        w = r(5364);
      let x = (0, i.createContext)({}),
        E = Symbol.for("motionComponentSymbol");
      var T = r(2627),
        P = r(6728),
        C = r(406),
        k = r(8057);
      let S = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function M(e, t, r) {
        for (let n in t) (0, C.i)(t[n]) || (0, P.j)(n, r) || (e[n] = t[n]);
      }
      let A = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function j(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          A.has(e)
        );
      }
      let N = (e) => !j(e);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (N = (e) => (e.startsWith("on") ? !j(e) : n(e)));
      } catch (e) {}
      var R = r(5415);
      let O = () => ({ ...S(), attrs: {} });
      var I = r(9854),
        L = r(8504),
        V = r(6832),
        F = r(2445),
        D = r(9432),
        z = r(6681),
        W = r(8715);
      let K = (e) => (t, r) => {
        let n = (0, i.useContext)(s),
          o = (0, i.useContext)(l.O),
          a = () =>
            (function (
              {
                scrapeMotionValuesFromProps: e,
                createRenderState: t,
                onMount: r,
              },
              n,
              o,
              i
            ) {
              let a = {
                latestValues: (function (e, t, r, n) {
                  let o = {},
                    i = n(e, {});
                  for (let e in i)
                    o[e] = (function (e) {
                      let t = (0, C.i)(e) ? e.get() : e;
                      return (0, W.p)(t) ? t.toValue() : t;
                    })(i[e]);
                  let { initial: a, animate: s } = e,
                    l = (0, v.G)(e),
                    u = (0, v.M)(e);
                  t &&
                    u &&
                    !l &&
                    !1 !== e.inherit &&
                    (void 0 === a && (a = t.initial),
                    void 0 === s && (s = t.animate));
                  let c = !!r && !1 === r.initial,
                    d = (c = c || !1 === a) ? s : a;
                  return (
                    d &&
                      "boolean" != typeof d &&
                      !(0, F.H)(d) &&
                      (Array.isArray(d) ? d : [d]).forEach((t) => {
                        let r = (0, D.o)(e, t);
                        if (!r) return;
                        let { transitionEnd: n, transition: i, ...a } = r;
                        for (let e in a) {
                          let t = a[e];
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (o[e] = t);
                        }
                        for (let e in n) o[e] = n[e];
                      }),
                    o
                  );
                })(n, o, i, e),
                renderState: t(),
              };
              return r && (a.mount = (e) => r(n, e, a)), a;
            })(e, t, n, o);
        return r ? a() : (0, z.h)(a);
      };
      var B = r(6166);
      let G = {
          useVisualState: K({
            scrapeMotionValuesFromProps: V.U,
            createRenderState: O,
            onMount: (e, t, { renderState: r, latestValues: n }) => {
              B.Wi.read(() => {
                try {
                  r.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                B.Wi.render(() => {
                  (0, R.i)(
                    r,
                    n,
                    { enableHardwareAcceleration: !1 },
                    (0, I.a)(t.tagName),
                    e.transformTemplate
                  ),
                    (0, L.K)(t, r);
                });
            },
          }),
        },
        H = {
          useVisualState: K({
            scrapeMotionValuesFromProps: r(189).U,
            createRenderState: S,
          }),
        },
        $ = (function (e) {
          function t(t, r = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: r,
              useVisualState: n,
              Component: p,
            }) {
              e && (0, b.K)(e);
              let T = (0, i.forwardRef)(function (b, E) {
                var T;
                let P;
                let C = {
                    ...(0, i.useContext)(a._),
                    ...b,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, i.useContext)(w.p).id;
                      return t && void 0 !== e ? t + "-" + e : e;
                    })(b),
                  },
                  { isStatic: k } = C,
                  S = (function (e) {
                    let { initial: t, animate: r } = (function (e, t) {
                      if ((0, v.G)(e)) {
                        let { initial: t, animate: r } = e;
                        return {
                          initial: !1 === t || (0, m.$)(t) ? t : void 0,
                          animate: (0, m.$)(r) ? r : void 0,
                        };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, i.useContext)(s));
                    return (0, i.useMemo)(
                      () => ({ initial: t, animate: r }),
                      [g(t), g(r)]
                    );
                  })(b),
                  M = n(b, k);
                if (!k && y.j) {
                  S.visualElement = (function (e, t, r, n) {
                    let { visualElement: o } = (0, i.useContext)(s),
                      p = (0, i.useContext)(c.u),
                      h = (0, i.useContext)(l.O),
                      m = (0, i.useContext)(a._).reducedMotion,
                      v = (0, i.useRef)();
                    (n = n || p.renderer),
                      !v.current &&
                        n &&
                        (v.current = n(e, {
                          visualState: t,
                          parent: o,
                          props: r,
                          presenceContext: h,
                          blockInitialAnimation: !!h && !1 === h.initial,
                          reducedMotionConfig: m,
                        }));
                    let g = v.current;
                    (0, i.useInsertionEffect)(() => {
                      g && g.update(r, h);
                    });
                    let b = (0, i.useRef)(
                      !!(r[d.M] && !window.HandoffComplete)
                    );
                    return (
                      (0, u.L)(() => {
                        g &&
                          (f.postRender(g.render),
                          b.current &&
                            g.animationState &&
                            g.animationState.animateChanges());
                      }),
                      (0, i.useEffect)(() => {
                        g &&
                          (g.updateFeatures(),
                          !b.current &&
                            g.animationState &&
                            g.animationState.animateChanges(),
                          b.current &&
                            ((b.current = !1), (window.HandoffComplete = !0)));
                      }),
                      g
                    );
                  })(p, M, C, t);
                  let r = (0, i.useContext)(x),
                    n = (0, i.useContext)(c.u).strict;
                  S.visualElement &&
                    (P = S.visualElement.loadFeatures(C, n, e, r));
                }
                return (0, o.jsxs)(s.Provider, {
                  value: S,
                  children: [
                    P && S.visualElement
                      ? (0, o.jsx)(P, { visualElement: S.visualElement, ...C })
                      : null,
                    r(
                      p,
                      b,
                      ((T = S.visualElement),
                      (0, i.useCallback)(
                        (e) => {
                          e && M.mount && M.mount(e),
                            T && (e ? T.mount(e) : T.unmount()),
                            E &&
                              ("function" == typeof E
                                ? E(e)
                                : (0, h.I)(E) && (E.current = e));
                        },
                        [T]
                      )),
                      M,
                      k,
                      S.visualElement
                    ),
                  ],
                });
              });
              return (T[E] = p), T;
            })(e(t, r));
          }
          if ("undefined" == typeof Proxy) return t;
          let r = new Map();
          return new Proxy(t, {
            get: (e, n) => (r.has(n) || r.set(n, t(n)), r.get(n)),
          });
        })(function (e, { forwardMotionProps: t = !1 }, r, n) {
          return {
            ...((0, T.q)(e) ? G : H),
            preloadedFeatures: r,
            useRender: (function (e = !1) {
              return (t, r, n, { latestValues: o }, a) => {
                let s = (
                    (0, T.q)(t)
                      ? function (e, t, r, n) {
                          let o = (0, i.useMemo)(() => {
                            let r = O();
                            return (
                              (0, R.i)(
                                r,
                                t,
                                { enableHardwareAcceleration: !1 },
                                (0, I.a)(n),
                                e.transformTemplate
                              ),
                              { ...r.attrs, style: { ...r.style } }
                            );
                          }, [t]);
                          if (e.style) {
                            let t = {};
                            M(t, e.style, e), (o.style = { ...t, ...o.style });
                          }
                          return o;
                        }
                      : function (e, t, r) {
                          let n = {},
                            o = (function (e, t, r) {
                              let n = e.style || {},
                                o = {};
                              return (
                                M(o, n, e),
                                Object.assign(
                                  o,
                                  (function ({ transformTemplate: e }, t, r) {
                                    return (0, i.useMemo)(() => {
                                      let n = S();
                                      return (
                                        (0, k.r)(
                                          n,
                                          t,
                                          { enableHardwareAcceleration: !r },
                                          e
                                        ),
                                        Object.assign({}, n.vars, n.style)
                                      );
                                    }, [t]);
                                  })(e, t, r)
                                ),
                                o
                              );
                            })(e, t, r);
                          return (
                            e.drag &&
                              !1 !== e.dragListener &&
                              ((n.draggable = !1),
                              (o.userSelect =
                                o.WebkitUserSelect =
                                o.WebkitTouchCallout =
                                  "none"),
                              (o.touchAction =
                                !0 === e.drag
                                  ? "none"
                                  : `pan-${"x" === e.drag ? "y" : "x"}`)),
                            void 0 === e.tabIndex &&
                              (e.onTap || e.onTapStart || e.whileTap) &&
                              (n.tabIndex = 0),
                            (n.style = o),
                            n
                          );
                        }
                  )(r, o, a, t),
                  l = (function (e, t, r) {
                    let n = {};
                    for (let o in e)
                      ("values" !== o || "object" != typeof e.values) &&
                        (N(o) ||
                          (!0 === r && j(o)) ||
                          (!t && !j(o)) ||
                          (e.draggable && o.startsWith("onDrag"))) &&
                        (n[o] = e[o]);
                    return n;
                  })(r, "string" == typeof t, e),
                  u = t !== i.Fragment ? { ...l, ...s, ref: n } : {},
                  { children: c } = r,
                  d = (0, i.useMemo)(() => ((0, C.i)(c) ? c.get() : c), [c]);
                return (0, i.createElement)(t, { ...u, children: d });
              };
            })(t),
            createVisualElement: n,
            Component: e,
          };
        });
    },
    3193: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return n;
        },
      });
      let n = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    7630: function (e, t, r) {
      "use strict";
      r.d(t, {
        f: function () {
          return o;
        },
        t: function () {
          return a;
        },
      });
      let n = (e) => (t) => "string" == typeof t && t.startsWith(e),
        o = n("--"),
        i = n("var(--"),
        a = (e) => !!i(e) && s.test(e.split("/*")[0].trim()),
        s =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    2627: function (e, t, r) {
      "use strict";
      r.d(t, {
        q: function () {
          return o;
        },
      });
      let n = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function o(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (n.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
    },
    6173: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return a;
        },
      });
      var n = r(1649),
        o = r(6190);
      let i = { ...n.Rx, transform: Math.round },
        a = {
          borderWidth: o.px,
          borderTopWidth: o.px,
          borderRightWidth: o.px,
          borderBottomWidth: o.px,
          borderLeftWidth: o.px,
          borderRadius: o.px,
          radius: o.px,
          borderTopLeftRadius: o.px,
          borderTopRightRadius: o.px,
          borderBottomRightRadius: o.px,
          borderBottomLeftRadius: o.px,
          width: o.px,
          maxWidth: o.px,
          height: o.px,
          maxHeight: o.px,
          size: o.px,
          top: o.px,
          right: o.px,
          bottom: o.px,
          left: o.px,
          padding: o.px,
          paddingTop: o.px,
          paddingRight: o.px,
          paddingBottom: o.px,
          paddingLeft: o.px,
          margin: o.px,
          marginTop: o.px,
          marginRight: o.px,
          marginBottom: o.px,
          marginLeft: o.px,
          rotate: o.RW,
          rotateX: o.RW,
          rotateY: o.RW,
          rotateZ: o.RW,
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
          skew: o.RW,
          skewX: o.RW,
          skewY: o.RW,
          distance: o.px,
          translateX: o.px,
          translateY: o.px,
          translateZ: o.px,
          x: o.px,
          y: o.px,
          z: o.px,
          perspective: o.px,
          transformPerspective: o.px,
          opacity: n.Fq,
          originX: o.$C,
          originY: o.$C,
          originZ: o.px,
          zIndex: i,
          backgroundPositionX: o.px,
          backgroundPositionY: o.px,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: i,
        };
    },
    8057: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return u;
        },
      });
      var n = r(4714);
      let o = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        i = n._.length;
      var a = r(7630);
      let s = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
      var l = r(6173);
      function u(e, t, r, u) {
        let { style: c, vars: d, transform: f, transformOrigin: p } = e,
          h = !1,
          m = !1,
          v = !0;
        for (let e in t) {
          let r = t[e];
          if ((0, a.f)(e)) {
            d[e] = r;
            continue;
          }
          let o = l.j[e],
            i = s(r, o);
          if (n.G.has(e)) {
            if (((h = !0), (f[e] = i), !v)) continue;
            r !== (o.default || 0) && (v = !1);
          } else e.startsWith("origin") ? ((m = !0), (p[e] = i)) : (c[e] = i);
        }
        if (
          (!t.transform &&
            (h || u
              ? (c.transform = (function (
                  e,
                  {
                    enableHardwareAcceleration: t = !0,
                    allowTransformNone: r = !0,
                  },
                  a,
                  s
                ) {
                  let l = "";
                  for (let t = 0; t < i; t++) {
                    let r = n._[t];
                    if (void 0 !== e[r]) {
                      let t = o[r] || r;
                      l += `${t}(${e[r]}) `;
                    }
                  }
                  return (
                    t && !e.z && (l += "translateZ(0)"),
                    (l = l.trim()),
                    s ? (l = s(e, a ? "" : l)) : r && a && (l = "none"),
                    l
                  );
                })(e.transform, r, v, u))
              : c.transform && (c.transform = "none")),
          m)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = p;
          c.transformOrigin = `${e} ${t} ${r}`;
        }
      }
    },
    4242: function (e, t, r) {
      "use strict";
      function n(e, { style: t, vars: r }, n, o) {
        for (let i in (Object.assign(e.style, t, o && o.getProjectionStyles(n)),
        r))
          e.style.setProperty(i, r[i]);
      }
      r.d(t, {
        N: function () {
          return n;
        },
      });
    },
    189: function (e, t, r) {
      "use strict";
      r.d(t, {
        U: function () {
          return i;
        },
      });
      var n = r(6728),
        o = r(406);
      function i(e, t, r) {
        var i;
        let { style: a } = e,
          s = {};
        for (let l in a)
          ((0, o.i)(a[l]) ||
            (t.style && (0, o.i)(t.style[l])) ||
            (0, n.j)(l, e) ||
            (null === (i = null == r ? void 0 : r.getValue(l)) || void 0 === i
              ? void 0
              : i.liveStyle) !== void 0) &&
            (s[l] = a[l]);
        return s;
      }
    },
    4714: function (e, t, r) {
      "use strict";
      r.d(t, {
        G: function () {
          return o;
        },
        _: function () {
          return n;
        },
      });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        o = new Set(n);
    },
    5415: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return l;
        },
      });
      var n = r(8057),
        o = r(6190);
      function i(e, t, r) {
        return "string" == typeof e ? e : o.px.transform(t + r * e);
      }
      let a = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        s = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: l,
          originX: u,
          originY: c,
          pathLength: d,
          pathSpacing: f = 1,
          pathOffset: p = 0,
          ...h
        },
        m,
        v,
        g
      ) {
        if (((0, n.r)(e, h, m, g), v)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: b, style: y, dimensions: w } = e;
        b.transform && (w && (y.transform = b.transform), delete b.transform),
          w &&
            (void 0 !== u || void 0 !== c || y.transform) &&
            (y.transformOrigin = (function (e, t, r) {
              let n = i(t, e.x, e.width),
                o = i(r, e.y, e.height);
              return `${n} ${o}`;
            })(w, void 0 !== u ? u : 0.5, void 0 !== c ? c : 0.5)),
          void 0 !== t && (b.x = t),
          void 0 !== r && (b.y = r),
          void 0 !== l && (b.scale = l),
          void 0 !== d &&
            (function (e, t, r = 1, n = 0, i = !0) {
              e.pathLength = 1;
              let l = i ? a : s;
              e[l.offset] = o.px.transform(-n);
              let u = o.px.transform(t),
                c = o.px.transform(r);
              e[l.array] = `${u} ${c}`;
            })(b, d, f, p, !1);
      }
    },
    7302: function (e, t, r) {
      "use strict";
      r.d(t, {
        s: function () {
          return n;
        },
      });
      let n = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    9854: function (e, t, r) {
      "use strict";
      r.d(t, {
        a: function () {
          return n;
        },
      });
      let n = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    },
    8504: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return a;
        },
      });
      var n = r(3193),
        o = r(4242),
        i = r(7302);
      function a(e, t, r, a) {
        for (let r in ((0, o.N)(e, t, void 0, a), t.attrs))
          e.setAttribute(i.s.has(r) ? r : (0, n.D)(r), t.attrs[r]);
      }
    },
    6832: function (e, t, r) {
      "use strict";
      r.d(t, {
        U: function () {
          return a;
        },
      });
      var n = r(406),
        o = r(189),
        i = r(4714);
      function a(e, t, r) {
        let a = (0, o.U)(e, t, r);
        for (let r in e)
          ((0, n.i)(e[r]) || (0, n.i)(t[r])) &&
            (a[
              -1 !== i._.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r]);
        return a;
      }
    },
    7504: function (e, t, r) {
      "use strict";
      r.d(t, {
        G: function () {
          return a;
        },
        M: function () {
          return s;
        },
      });
      var n = r(2445),
        o = r(7732),
        i = r(2963);
      function a(e) {
        return (0, n.H)(e.animate) || i.V.some((t) => (0, o.$)(e[t]));
      }
      function s(e) {
        return !!(a(e) || e.variants);
      }
    },
    7732: function (e, t, r) {
      "use strict";
      function n(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      r.d(t, {
        $: function () {
          return n;
        },
      });
    },
    9432: function (e, t, r) {
      "use strict";
      function n(e, t, r, n = {}, o = {}) {
        return (
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, o)),
          "string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, o)),
          t
        );
      }
      r.d(t, {
        o: function () {
          return n;
        },
      });
    },
    2963: function (e, t, r) {
      "use strict";
      r.d(t, {
        V: function () {
          return o;
        },
        e: function () {
          return n;
        },
      });
      let n = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        o = ["initial", ...n];
    },
    4169: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return n;
        },
      });
      let n = (e, t, r) => (r > t ? t : r < e ? e : r);
    },
    5487: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return o;
        },
        k: function () {
          return i;
        },
      });
      var n = r(1662);
      let o = n.Z,
        i = n.Z;
    },
    1741: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    1804: function (e, t, r) {
      "use strict";
      function n(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      r.d(t, {
        I: function () {
          return n;
        },
      });
    },
    1662: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (e) => e;
    },
    8715: function (e, t, r) {
      "use strict";
      r.d(t, {
        Y: function () {
          return i;
        },
        p: function () {
          return o;
        },
      });
      var n = r(8488);
      let o = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        i = (e) => ((0, n.C)(e) ? e[e.length - 1] || 0 : e);
    },
    6681: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return o;
        },
      });
      var n = r(7294);
      function o(e) {
        let t = (0, n.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    8868: function (e, t, r) {
      "use strict";
      r.d(t, {
        L: function () {
          return o;
        },
      });
      var n = r(7294);
      let o = r(1741).j ? n.useLayoutEffect : n.useEffect;
    },
    1649: function (e, t, r) {
      "use strict";
      r.d(t, {
        Fq: function () {
          return i;
        },
        Rx: function () {
          return o;
        },
        bA: function () {
          return a;
        },
      });
      var n = r(4169);
      let o = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        i = { ...o, transform: (e) => (0, n.u)(0, 1, e) },
        a = { ...o, default: 1 };
    },
    6190: function (e, t, r) {
      "use strict";
      r.d(t, {
        $C: function () {
          return c;
        },
        RW: function () {
          return i;
        },
        aQ: function () {
          return a;
        },
        px: function () {
          return s;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = r(6430);
      let o = (e) => ({
          test: (t) =>
            (0, n.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        i = o("deg"),
        a = o("%"),
        s = o("px"),
        l = o("vh"),
        u = o("vw"),
        c = {
          ...a,
          parse: (e) => a.parse(e) / 100,
          transform: (e) => a.transform(100 * e),
        };
    },
    6430: function (e, t, r) {
      "use strict";
      r.d(t, {
        HD: function () {
          return s;
        },
        KP: function () {
          return o;
        },
        Nw: function () {
          return n;
        },
        dA: function () {
          return i;
        },
        mj: function () {
          return a;
        },
      });
      let n = (e) => Math.round(1e5 * e) / 1e5,
        o = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        i =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        a =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function s(e) {
        return "string" == typeof e;
      }
    },
    406: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return n;
        },
      });
      let n = (e) => !!(e && e.getVelocity);
    },
    5955: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return c;
        },
      });
      var n = r(7294),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        i = n.createContext && n.createContext(o),
        a = ["attr", "size", "title"];
      function s() {
        return (s = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                var n, o;
                (n = t),
                  (o = r[t]),
                  (n = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function c(e) {
        return (t) =>
          n.createElement(
            d,
            s({ attr: u({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, u({ key: r }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function d(e) {
        var t = (t) => {
          var r,
            { attr: o, size: i, title: l } = e,
            c = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]);
              }
              return o;
            })(e, a),
            d = i || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              s(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                c,
                {
                  className: r,
                  style: u(u({ color: e.color || t.color }, t.style), e.style),
                  height: d,
                  width: d,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && n.createElement("title", null, l),
              e.children
            )
          );
        };
        return void 0 !== i
          ? n.createElement(i.Consumer, null, (e) => t(e))
          : t(o);
      }
    },
    5825: function (e, t, r) {
      "use strict";
      r.d(t, {
        tv: function () {
          return Q;
        },
      });
      var n = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        o = (e) => !e || "object" != typeof e || 0 === Object.keys(e).length,
        i = (e, t) => JSON.stringify(e) === JSON.stringify(t);
      function a(e) {
        let t = [];
        return (
          (function e(t, r) {
            t.forEach(function (t) {
              Array.isArray(t) ? e(t, r) : r.push(t);
            });
          })(e, t),
          t
        );
      }
      var s = (...e) => a(e).filter(Boolean),
        l = (e, t) => {
          let r = {},
            n = Object.keys(e),
            o = Object.keys(t);
          for (let i of n)
            if (o.includes(i)) {
              let n = e[i],
                o = t[i];
              "object" == typeof n && "object" == typeof o
                ? (r[i] = l(n, o))
                : Array.isArray(n) || Array.isArray(o)
                ? (r[i] = s(o, n))
                : (r[i] = o + " " + n);
            } else r[i] = e[i];
          for (let e of o) n.includes(e) || (r[e] = t[e]);
          return r;
        },
        u = (e) =>
          e && "string" == typeof e ? e.replace(/\s+/g, " ").trim() : e,
        c = /^\[(.+)\]$/;
      function d(e, t) {
        var r = e;
        return (
          t.split("-").forEach(function (e) {
            r.nextPart.has(e) ||
              r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e));
          }),
          r
        );
      }
      var f = /\s+/;
      function p() {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              if ("string" == typeof t) return t;
              for (var r, n = "", o = 0; o < t.length; o++)
                t[o] && (r = e(t[o])) && (n && (n += " "), (n += r));
              return n;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      function h() {
        for (var e, t, r, n = arguments.length, o = Array(n), i = 0; i < n; i++)
          o[i] = arguments[i];
        var a = function (n) {
          var i = o[0];
          return (
            (t = (e = (function (e) {
              var t, r, n, o, i, a, s, l, u, f, p;
              return {
                cache: (function (e) {
                  if (e < 1)
                    return { get: function () {}, set: function () {} };
                  var t = 0,
                    r = new Map(),
                    n = new Map();
                  function o(o, i) {
                    r.set(o, i), ++t > e && ((t = 0), (n = r), (r = new Map()));
                  }
                  return {
                    get: function (e) {
                      var t = r.get(e);
                      return void 0 !== t
                        ? t
                        : void 0 !== (t = n.get(e))
                        ? (o(e, t), t)
                        : void 0;
                    },
                    set: function (e, t) {
                      r.has(e) ? r.set(e, t) : o(e, t);
                    },
                  };
                })(e.cacheSize),
                splitModifiers:
                  ((r = 1 === (t = e.separator || ":").length),
                  (n = t[0]),
                  (o = t.length),
                  function (e) {
                    for (
                      var i, a = [], s = 0, l = 0, u = 0;
                      u < e.length;
                      u++
                    ) {
                      var c = e[u];
                      if (0 === s) {
                        if (c === n && (r || e.slice(u, u + o) === t)) {
                          a.push(e.slice(l, u)), (l = u + o);
                          continue;
                        }
                        if ("/" === c) {
                          i = u;
                          continue;
                        }
                      }
                      "[" === c ? s++ : "]" === c && s--;
                    }
                    var d = 0 === a.length ? e : e.substring(l),
                      f = d.startsWith("!"),
                      p = f ? d.substring(1) : d;
                    return {
                      modifiers: a,
                      hasImportantModifier: f,
                      baseClassName: p,
                      maybePostfixModifierPosition: i && i > l ? i - l : void 0,
                    };
                  }),
                ...((l = e.theme),
                (u = e.prefix),
                (f = { nextPart: new Map(), validators: [] }),
                ((p = Object.entries(e.classGroups)),
                u
                  ? p.map(function (e) {
                      return [
                        e[0],
                        e[1].map(function (e) {
                          return "string" == typeof e
                            ? u + e
                            : "object" == typeof e
                            ? Object.fromEntries(
                                Object.entries(e).map(function (e) {
                                  return [u + e[0], e[1]];
                                })
                              )
                            : e;
                        }),
                      ];
                    })
                  : p).forEach(function (e) {
                  var t = e[0];
                  (function e(t, r, n, o) {
                    t.forEach(function (t) {
                      if ("string" == typeof t) {
                        ("" === t ? r : d(r, t)).classGroupId = n;
                        return;
                      }
                      if ("function" == typeof t) {
                        if (t.isThemeGetter) {
                          e(t(o), r, n, o);
                          return;
                        }
                        r.validators.push({ validator: t, classGroupId: n });
                        return;
                      }
                      Object.entries(t).forEach(function (t) {
                        var i = t[0];
                        e(t[1], d(r, i), n, o);
                      });
                    });
                  })(e[1], f, t, l);
                }),
                (i = e.conflictingClassGroups),
                (s =
                  void 0 === (a = e.conflictingClassGroupModifiers) ? {} : a),
                {
                  getClassGroupId: function (e) {
                    var t = e.split("-");
                    return (
                      "" === t[0] && 1 !== t.length && t.shift(),
                      (function e(t, r) {
                        if (0 === t.length) return r.classGroupId;
                        var n = t[0],
                          o = r.nextPart.get(n),
                          i = o ? e(t.slice(1), o) : void 0;
                        if (i) return i;
                        if (0 !== r.validators.length) {
                          var a = t.join("-");
                          return r.validators.find(function (e) {
                            return (0, e.validator)(a);
                          })?.classGroupId;
                        }
                      })(t, f) ||
                        (function (e) {
                          if (c.test(e)) {
                            var t = c.exec(e)[1],
                              r = t?.substring(0, t.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    var r = i[e] || [];
                    return t && s[e] ? [].concat(r, s[e]) : r;
                  },
                }),
              };
            })(
              o.slice(1).reduce(function (e, t) {
                return t(e);
              }, i())
            )).cache.get),
            (r = e.cache.set),
            (a = s),
            s(n)
          );
        };
        function s(n) {
          var o,
            i,
            a,
            s,
            l,
            u = t(n);
          if (u) return u;
          var c =
            ((i = (o = e).splitModifiers),
            (a = o.getClassGroupId),
            (s = o.getConflictingClassGroupIds),
            (l = new Set()),
            n
              .trim()
              .split(f)
              .map(function (e) {
                var t = i(e),
                  r = t.modifiers,
                  n = t.hasImportantModifier,
                  o = t.baseClassName,
                  s = t.maybePostfixModifierPosition,
                  l = a(s ? o.substring(0, s) : o),
                  u = !!s;
                if (!l) {
                  if (!s || !(l = a(o)))
                    return { isTailwindClass: !1, originalClassName: e };
                  u = !1;
                }
                var c = (function (e) {
                  if (e.length <= 1) return e;
                  var t = [],
                    r = [];
                  return (
                    e.forEach(function (e) {
                      "[" === e[0]
                        ? (t.push.apply(t, r.sort().concat([e])), (r = []))
                        : r.push(e);
                    }),
                    t.push.apply(t, r.sort()),
                    t
                  );
                })(r).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: n ? c + "!" : c,
                  classGroupId: l,
                  originalClassName: e,
                  hasPostfixModifier: u,
                };
              })
              .reverse()
              .filter(function (e) {
                if (!e.isTailwindClass) return !0;
                var t = e.modifierId,
                  r = e.classGroupId,
                  n = e.hasPostfixModifier,
                  o = t + r;
                return (
                  !l.has(o) &&
                  (l.add(o),
                  s(r, n).forEach(function (e) {
                    return l.add(t + e);
                  }),
                  !0)
                );
              })
              .reverse()
              .map(function (e) {
                return e.originalClassName;
              })
              .join(" "));
          return r(n, c), c;
        }
        return function () {
          return a(p.apply(null, arguments));
        };
      }
      function m(e) {
        var t = function (t) {
          return t[e] || [];
        };
        return (t.isThemeGetter = !0), t;
      }
      var v = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        g = /^\d+\/\d+$/,
        b = new Set(["px", "full", "screen"]),
        y = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        w =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        x = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      function E(e) {
        return M(e) || b.has(e) || g.test(e) || T(e);
      }
      function T(e) {
        return L(e, "length", V);
      }
      function P(e) {
        return L(e, "size", F);
      }
      function C(e) {
        return L(e, "position", F);
      }
      function k(e) {
        return L(e, "url", D);
      }
      function S(e) {
        return L(e, "number", M);
      }
      function M(e) {
        return !Number.isNaN(Number(e));
      }
      function A(e) {
        return e.endsWith("%") && M(e.slice(0, -1));
      }
      function j(e) {
        return z(e) || L(e, "number", z);
      }
      function N(e) {
        return v.test(e);
      }
      function R() {
        return !0;
      }
      function O(e) {
        return y.test(e);
      }
      function I(e) {
        return L(e, "", W);
      }
      function L(e, t, r) {
        var n = v.exec(e);
        return !!n && (n[1] ? n[1] === t : r(n[2]));
      }
      function V(e) {
        return w.test(e);
      }
      function F() {
        return !1;
      }
      function D(e) {
        return e.startsWith("url(");
      }
      function z(e) {
        return Number.isInteger(Number(e));
      }
      function W(e) {
        return x.test(e);
      }
      function K() {
        var e = m("colors"),
          t = m("spacing"),
          r = m("blur"),
          n = m("brightness"),
          o = m("borderColor"),
          i = m("borderRadius"),
          a = m("borderSpacing"),
          s = m("borderWidth"),
          l = m("contrast"),
          u = m("grayscale"),
          c = m("hueRotate"),
          d = m("invert"),
          f = m("gap"),
          p = m("gradientColorStops"),
          h = m("gradientColorStopPositions"),
          v = m("inset"),
          g = m("margin"),
          b = m("opacity"),
          y = m("padding"),
          w = m("saturate"),
          x = m("scale"),
          L = m("sepia"),
          V = m("skew"),
          F = m("space"),
          D = m("translate"),
          z = function () {
            return ["auto", "contain", "none"];
          },
          W = function () {
            return ["auto", "hidden", "clip", "visible", "scroll"];
          },
          K = function () {
            return ["auto", N, t];
          },
          B = function () {
            return [N, t];
          },
          G = function () {
            return ["", E];
          },
          H = function () {
            return ["auto", M, N];
          },
          $ = function () {
            return [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ];
          },
          U = function () {
            return ["solid", "dashed", "dotted", "double", "none"];
          },
          _ = function () {
            return [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
              "plus-lighter",
            ];
          },
          Z = function () {
            return [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ];
          },
          q = function () {
            return ["", "0", N];
          },
          X = function () {
            return [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ];
          },
          Y = function () {
            return [M, S];
          },
          J = function () {
            return [M, N];
          };
        return {
          cacheSize: 500,
          theme: {
            colors: [R],
            spacing: [E],
            blur: ["none", "", O, N],
            brightness: Y(),
            borderColor: [e],
            borderRadius: ["none", "", "full", O, N],
            borderSpacing: B(),
            borderWidth: G(),
            contrast: Y(),
            grayscale: q(),
            hueRotate: J(),
            invert: q(),
            gap: B(),
            gradientColorStops: [e],
            gradientColorStopPositions: [A, T],
            inset: K(),
            margin: K(),
            opacity: Y(),
            padding: B(),
            saturate: Y(),
            scale: Y(),
            sepia: q(),
            skew: J(),
            space: B(),
            translate: B(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", N] }],
            container: ["container"],
            columns: [{ columns: [O] }],
            "break-after": [{ "break-after": X() }],
            "break-before": [{ "break-before": X() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none"] }],
            clear: [{ clear: ["left", "right", "both", "none"] }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [].concat($(), [N]) }],
            overflow: [{ overflow: W() }],
            "overflow-x": [{ "overflow-x": W() }],
            "overflow-y": [{ "overflow-y": W() }],
            overscroll: [{ overscroll: z() }],
            "overscroll-x": [{ "overscroll-x": z() }],
            "overscroll-y": [{ "overscroll-y": z() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [v] }],
            "inset-x": [{ "inset-x": [v] }],
            "inset-y": [{ "inset-y": [v] }],
            start: [{ start: [v] }],
            end: [{ end: [v] }],
            top: [{ top: [v] }],
            right: [{ right: [v] }],
            bottom: [{ bottom: [v] }],
            left: [{ left: [v] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", j] }],
            basis: [{ basis: K() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", N] }],
            grow: [{ grow: q() }],
            shrink: [{ shrink: q() }],
            order: [{ order: ["first", "last", "none", j] }],
            "grid-cols": [{ "grid-cols": [R] }],
            "col-start-end": [{ col: ["auto", { span: ["full", j] }, N] }],
            "col-start": [{ "col-start": H() }],
            "col-end": [{ "col-end": H() }],
            "grid-rows": [{ "grid-rows": [R] }],
            "row-start-end": [{ row: ["auto", { span: [j] }, N] }],
            "row-start": [{ "row-start": H() }],
            "row-end": [{ "row-end": H() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", N] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", N] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal"].concat(Z()) }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [
              { content: ["normal"].concat(Z(), ["baseline"]) },
            ],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [
              { "place-content": [].concat(Z(), ["baseline"]) },
            ],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [y] }],
            px: [{ px: [y] }],
            py: [{ py: [y] }],
            ps: [{ ps: [y] }],
            pe: [{ pe: [y] }],
            pt: [{ pt: [y] }],
            pr: [{ pr: [y] }],
            pb: [{ pb: [y] }],
            pl: [{ pl: [y] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            "space-x": [{ "space-x": [F] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [F] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{ w: ["auto", "min", "max", "fit", N, t] }],
            "min-w": [{ "min-w": ["min", "max", "fit", N, E] }],
            "max-w": [
              {
                "max-w": [
                  "0",
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [O] },
                  O,
                  N,
                ],
              },
            ],
            h: [{ h: [N, t, "auto", "min", "max", "fit"] }],
            "min-h": [{ "min-h": ["min", "max", "fit", N, E] }],
            "max-h": [{ "max-h": [N, t, "min", "max", "fit"] }],
            "font-size": [{ text: ["base", O, T] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  S,
                ],
              },
            ],
            "font-family": [{ font: [R] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  N,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", M, S] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  N,
                  E,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", N] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", N] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [b] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [b] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [].concat(U(), ["wavy"]) }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", E] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", N, E] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{ indent: B() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  N,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", N] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [b] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [].concat($(), [C]) }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", P] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  k,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [h] }],
            "gradient-via-pos": [{ via: [h] }],
            "gradient-to-pos": [{ to: [h] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [s] }],
            "border-w-x": [{ "border-x": [s] }],
            "border-w-y": [{ "border-y": [s] }],
            "border-w-s": [{ "border-s": [s] }],
            "border-w-e": [{ "border-e": [s] }],
            "border-w-t": [{ "border-t": [s] }],
            "border-w-r": [{ "border-r": [s] }],
            "border-w-b": [{ "border-b": [s] }],
            "border-w-l": [{ "border-l": [s] }],
            "border-opacity": [{ "border-opacity": [b] }],
            "border-style": [{ border: [].concat(U(), ["hidden"]) }],
            "divide-x": [{ "divide-x": [s] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [s] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [b] }],
            "divide-style": [{ divide: U() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: [""].concat(U()) }],
            "outline-offset": [{ "outline-offset": [N, E] }],
            "outline-w": [{ outline: [E] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: G() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [b] }],
            "ring-offset-w": [{ "ring-offset": [E] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", O, I] }],
            "shadow-color": [{ shadow: [R] }],
            opacity: [{ opacity: [b] }],
            "mix-blend": [{ "mix-blend": _() }],
            "bg-blend": [{ "bg-blend": _() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [l] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", O, N] }],
            grayscale: [{ grayscale: [u] }],
            "hue-rotate": [{ "hue-rotate": [c] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [w] }],
            sepia: [{ sepia: [L] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [l] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [b] }],
            "backdrop-saturate": [{ "backdrop-saturate": [w] }],
            "backdrop-sepia": [{ "backdrop-sepia": [L] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [a] }],
            "border-spacing-x": [{ "border-spacing-x": [a] }],
            "border-spacing-y": [{ "border-spacing-y": [a] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  N,
                ],
              },
            ],
            duration: [{ duration: J() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", N] }],
            delay: [{ delay: J() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", N] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [x] }],
            "scale-x": [{ "scale-x": [x] }],
            "scale-y": [{ "scale-y": [x] }],
            rotate: [{ rotate: [j, N] }],
            "translate-x": [{ "translate-x": [D] }],
            "translate-y": [{ "translate-y": [D] }],
            "skew-x": [{ "skew-x": [V] }],
            "skew-y": [{ "skew-y": [V] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  N,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: ["appearance-none"],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  N,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": B() }],
            "scroll-mx": [{ "scroll-mx": B() }],
            "scroll-my": [{ "scroll-my": B() }],
            "scroll-ms": [{ "scroll-ms": B() }],
            "scroll-me": [{ "scroll-me": B() }],
            "scroll-mt": [{ "scroll-mt": B() }],
            "scroll-mr": [{ "scroll-mr": B() }],
            "scroll-mb": [{ "scroll-mb": B() }],
            "scroll-ml": [{ "scroll-ml": B() }],
            "scroll-p": [{ "scroll-p": B() }],
            "scroll-px": [{ "scroll-px": B() }],
            "scroll-py": [{ "scroll-py": B() }],
            "scroll-ps": [{ "scroll-ps": B() }],
            "scroll-pe": [{ "scroll-pe": B() }],
            "scroll-pt": [{ "scroll-pt": B() }],
            "scroll-pr": [{ "scroll-pr": B() }],
            "scroll-pb": [{ "scroll-pb": B() }],
            "scroll-pl": [{ "scroll-pl": B() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [
              {
                touch: [
                  "auto",
                  "none",
                  "pinch-zoom",
                  "manipulation",
                  { pan: ["x", "left", "right", "y", "up", "down"] },
                ],
              },
            ],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", N] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [E, S] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      }
      var B = h(K),
        G = Object.prototype.hasOwnProperty,
        H = new Set(["string", "number", "boolean"]),
        $ = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
        U = (e) => e || void 0,
        _ = (...e) => U(a(e).filter(Boolean).join(" ")),
        Z = null,
        q = {},
        X = !1,
        Y =
          (...e) =>
          (t) =>
            t.twMerge
              ? ((!Z || X) &&
                  ((X = !1),
                  (Z = o(q)
                    ? B
                    : (function (e) {
                        for (
                          var t = arguments.length,
                            r = Array(t > 1 ? t - 1 : 0),
                            n = 1;
                          n < t;
                          n++
                        )
                          r[n - 1] = arguments[n];
                        return "function" == typeof e
                          ? h.apply(void 0, [K, e].concat(r))
                          : h.apply(
                              void 0,
                              [
                                function () {
                                  return (function (e, t) {
                                    for (var r in t)
                                      (function e(t, r, n) {
                                        if (
                                          !G.call(t, r) ||
                                          H.has(typeof n) ||
                                          null === n
                                        ) {
                                          t[r] = n;
                                          return;
                                        }
                                        if (
                                          Array.isArray(n) &&
                                          Array.isArray(t[r])
                                        ) {
                                          t[r] = t[r].concat(n);
                                          return;
                                        }
                                        if (
                                          "object" == typeof n &&
                                          "object" == typeof t[r]
                                        ) {
                                          if (null === t[r]) {
                                            t[r] = n;
                                            return;
                                          }
                                          for (var o in n) e(t[r], o, n[o]);
                                        }
                                      })(e, r, t[r]);
                                    return e;
                                  })(K(), e);
                                },
                              ].concat(r)
                            );
                      })(q))),
                U(Z(_(e))))
              : _(e),
        J = (e, t) => {
          for (let r in t)
            e.hasOwnProperty(r) ? (e[r] = _(e[r], t[r])) : (e[r] = t[r]);
          return e;
        },
        Q = (e, t) => {
          let {
              extend: r = null,
              slots: a = {},
              variants: c = {},
              compoundVariants: d = [],
              compoundSlots: f = [],
              defaultVariants: p = {},
            } = e,
            h = { ...$, ...t },
            m =
              null != r && r.base
                ? _(r.base, null == e ? void 0 : e.base)
                : null == e
                ? void 0
                : e.base,
            v =
              null != r && r.variants && !o(r.variants) ? l(c, r.variants) : c,
            g =
              null != r && r.defaultVariants && !o(r.defaultVariants)
                ? { ...r.defaultVariants, ...p }
                : p;
          o(h.twMergeConfig) ||
            i(h.twMergeConfig, q) ||
            ((X = !0), (q = h.twMergeConfig));
          let b = o(null == r ? void 0 : r.slots),
            y = o(a)
              ? {}
              : {
                  base: _(
                    null == e ? void 0 : e.base,
                    b && (null == r ? void 0 : r.base)
                  ),
                  ...a,
                },
            w = b
              ? y
              : J(
                  { ...(null == r ? void 0 : r.slots) },
                  o(y) ? { base: null == e ? void 0 : e.base } : y
                ),
            x = (e) => {
              if (o(v) && o(a) && b)
                return Y(
                  m,
                  null == e ? void 0 : e.class,
                  null == e ? void 0 : e.className
                )(h);
              if (d && !Array.isArray(d))
                throw TypeError(
                  `The "compoundVariants" prop must be an array. Received: ${typeof d}`
                );
              if (f && !Array.isArray(f))
                throw TypeError(
                  `The "compoundSlots" prop must be an array. Received: ${typeof f}`
                );
              let t = (e, t, r = [], n) => {
                  let o = r;
                  if ("string" == typeof t)
                    o = o.concat(
                      u(t)
                        .split(" ")
                        .map((t) => `${e}:${t}`)
                    );
                  else if (Array.isArray(t))
                    o = o.concat(t.reduce((t, r) => t.concat(`${e}:${r}`), []));
                  else if ("object" == typeof t && "string" == typeof n) {
                    for (let r in t)
                      if (t.hasOwnProperty(r) && r === n) {
                        let i = t[r];
                        if (i && "string" == typeof i) {
                          let t = u(i);
                          o[n]
                            ? (o[n] = o[n].concat(
                                t.split(" ").map((t) => `${e}:${t}`)
                              ))
                            : (o[n] = t.split(" ").map((t) => `${e}:${t}`));
                        } else
                          Array.isArray(i) &&
                            i.length > 0 &&
                            (o[n] = i.reduce(
                              (t, r) => t.concat(`${e}:${r}`),
                              []
                            ));
                      }
                  }
                  return o;
                },
                i = (r, i = v, a = null, s = null) => {
                  var l;
                  let u = i[r];
                  if (!u || o(u)) return null;
                  let c =
                    null != (l = null == s ? void 0 : s[r])
                      ? l
                      : null == e
                      ? void 0
                      : e[r];
                  if (null === c) return null;
                  let d = n(c),
                    f =
                      (Array.isArray(h.responsiveVariants) &&
                        h.responsiveVariants.length > 0) ||
                      !0 === h.responsiveVariants,
                    p = null == g ? void 0 : g[r],
                    m = [];
                  if ("object" == typeof d && f)
                    for (let [e, r] of Object.entries(d)) {
                      let n = u[r];
                      if ("initial" === e) {
                        p = r;
                        continue;
                      }
                      (Array.isArray(h.responsiveVariants) &&
                        !h.responsiveVariants.includes(e)) ||
                        (m = t(e, n, m, a));
                    }
                  let b = u[d] || u[n(p)];
                  return "object" == typeof m && "string" == typeof a && m[a]
                    ? J(m, b)
                    : m.length > 0
                    ? (m.push(b), m)
                    : b;
                },
                l = (e, t) => {
                  if (!v || "object" != typeof v) return null;
                  let r = [];
                  for (let n in v) {
                    let o = i(n, v, e, t),
                      a = "base" === e && "string" == typeof o ? o : o && o[e];
                    a && (r[r.length] = a);
                  }
                  return r;
                },
                c = {};
              for (let t in e) void 0 !== e[t] && (c[t] = e[t]);
              let p = (t, r) => {
                  var n;
                  let o =
                    "object" == typeof (null == e ? void 0 : e[t])
                      ? { [t]: null == (n = e[t]) ? void 0 : n.initial }
                      : {};
                  return { ...g, ...c, ...o, ...r };
                },
                y = (e = [], t) => {
                  let r = [];
                  for (let { class: n, className: o, ...i } of e) {
                    let e = !0;
                    for (let [r, n] of Object.entries(i)) {
                      let o = p(r, t);
                      if (Array.isArray(n)) {
                        if (!n.includes(o[r])) {
                          e = !1;
                          break;
                        }
                      } else if (o[r] !== n) {
                        e = !1;
                        break;
                      }
                    }
                    e && (n && r.push(n), o && r.push(o));
                  }
                  return r;
                },
                x = (e) => {
                  let t = y(d, e);
                  return s(y(null == r ? void 0 : r.compoundVariants, e), t);
                },
                E = (e) => {
                  let t = x(e);
                  if (!Array.isArray(t)) return t;
                  let r = {};
                  for (let e of t)
                    if (
                      ("string" == typeof e && (r.base = Y(r.base, e)(h)),
                      "object" == typeof e)
                    )
                      for (let [t, n] of Object.entries(e))
                        r[t] = Y(r[t], n)(h);
                  return r;
                },
                T = (e) => {
                  if (f.length < 1) return null;
                  let t = {};
                  for (let {
                    slots: r = [],
                    class: n,
                    className: i,
                    ...a
                  } of f) {
                    if (!o(a)) {
                      let t = !0;
                      for (let r of Object.keys(a)) {
                        let n = p(r, e)[r];
                        if (
                          void 0 === n ||
                          (Array.isArray(a[r]) ? !a[r].includes(n) : a[r] !== n)
                        ) {
                          t = !1;
                          break;
                        }
                      }
                      if (!t) continue;
                    }
                    for (let e of r) (t[e] = t[e] || []), t[e].push([n, i]);
                  }
                  return t;
                };
              if (!o(a) || !b) {
                let e = {};
                if ("object" == typeof w && !o(w))
                  for (let t of Object.keys(w))
                    e[t] = (e) => {
                      var r, n;
                      return Y(
                        w[t],
                        l(t, e),
                        (null != (r = E(e)) ? r : [])[t],
                        (null != (n = T(e)) ? n : [])[t],
                        null == e ? void 0 : e.class,
                        null == e ? void 0 : e.className
                      )(h);
                    };
                return e;
              }
              return Y(
                m,
                v ? Object.keys(v).map((e) => i(e, v)) : null,
                x(),
                null == e ? void 0 : e.class,
                null == e ? void 0 : e.className
              )(h);
            };
          return (
            (x.variantKeys = (() => {
              if (!(!v || "object" != typeof v)) return Object.keys(v);
            })()),
            (x.extend = r),
            (x.base = m),
            (x.slots = w),
            (x.variants = v),
            (x.defaultVariants = g),
            (x.compoundSlots = f),
            (x.compoundVariants = d),
            x
          );
        };
    },
  },
]);
