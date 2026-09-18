import "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var GlassEffect = ({ children, className = "", style = {}, href, target = "_blank", onClick }) => {
	const glassStyle = {
		boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
		transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
		...style
	};
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onClick,
		className: `relative flex font-semibold overflow-hidden text-black cursor-pointer transition-all duration-700 ${className}`,
		style: glassStyle,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-0 overflow-hidden rounded-inherit rounded-3xl",
				style: {
					backdropFilter: "blur(3px)",
					filter: "url(#glass-distortion)",
					isolation: "isolate"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-10 rounded-inherit",
				style: { background: "rgba(255, 255, 255, 0.25)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-20 rounded-inherit rounded-3xl overflow-hidden",
				style: { boxShadow: "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-30",
				children
			})
		]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target,
		rel: "noopener noreferrer",
		className: "block",
		children: content
	}) : content;
};
var GlassButton = ({ children, href, onClick, className = "" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassEffect, {
	href,
	onClick,
	className: `rounded-3xl px-10 py-6 hover:px-11 hover:py-7 hover:rounded-4xl overflow-hidden ${className}`,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "transition-all duration-700 hover:scale-95",
		style: { transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)" },
		children
	})
});
var GlassFilter = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	style: { display: "none" },
	"aria-hidden": "true",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
		id: "glass-distortion",
		x: "0%",
		y: "0%",
		width: "100%",
		height: "100%",
		filterUnits: "objectBoundingBox",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feTurbulence", {
				type: "fractalNoise",
				baseFrequency: "0.001 0.005",
				numOctaves: "1",
				seed: "17",
				result: "turbulence"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feComponentTransfer", {
				in: "turbulence",
				result: "mapped",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFuncR", {
						type: "gamma",
						amplitude: "1",
						exponent: "10",
						offset: "0.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFuncG", {
						type: "gamma",
						amplitude: "0",
						exponent: "1",
						offset: "0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFuncB", {
						type: "gamma",
						amplitude: "0",
						exponent: "1",
						offset: "0.5"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
				in: "turbulence",
				stdDeviation: "3",
				result: "softMap"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feSpecularLighting", {
				in: "softMap",
				surfaceScale: "5",
				specularConstant: "1",
				specularExponent: "100",
				lightingColor: "white",
				result: "specLight",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("fePointLight", {
					x: "-200",
					y: "-200",
					z: "300"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", {
				in: "specLight",
				operator: "arithmetic",
				k1: "0",
				k2: "1",
				k3: "1",
				k4: "0",
				result: "litImage"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDisplacementMap", {
				in: "SourceGraphic",
				in2: "softMap",
				scale: "200",
				xChannelSelector: "R",
				yChannelSelector: "G"
			})
		]
	})
});
//#endregion
export { GlassEffect as n, GlassFilter as r, GlassButton as t };
