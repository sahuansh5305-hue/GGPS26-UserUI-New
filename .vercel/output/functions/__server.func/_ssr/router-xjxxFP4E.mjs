import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-xjxxFP4E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DDhjHVtE.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "परिचय सेतु" },
			{
				name: "description",
				content: "सच्चे रिश्तों की खूबसूरत शुरुआत।"
			},
			{
				name: "author",
				content: "परिचय सेतु"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "border-t border-primary/20 bg-primary py-5 text-center text-ivory",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "px-4 text-xs text-ivory/85",
				children: [
					"Developement Partner —",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-marigold",
						children: "KodeCrown Technologies Pvt Ltd"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center justify-center gap-2 px-4 text-xs text-ivory/85",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.kodecrown.com",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "transition-colors hover:text-marigold",
						children: "www.kodecrown.com"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://wa.me/919753309166",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1.5 transition-colors hover:text-marigold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 24 24",
							className: "h-4 w-4",
							fill: "currentColor",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.34-1.66a11.85 11.85 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.24-6.17-3.45-8.41ZM12.09 21.77h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.67-.23-.38a9.86 9.86 0 0 1-1.51-5.23C2.19 6.45 6.62 2.02 12.08 2.02c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.46-4.43 9.9-9.88 9.9Zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "(+91) 97533 09166" })]
					})
				]
			})]
		})]
	});
}
var $$splitComponentImporter$3 = () => import("./routes-BmZMO3fi.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "विवाह योग्य युवक-युवती परिचय सम्मेलन 2026 | श्री गुर्जर गौड़ ब्राह्मण नगर सभा, इन्दौर" },
		{
			name: "description",
			content: "श्री गुर्जर गौड़ ब्राह्मण नगर सभा, इन्दौर द्वारा आयोजित विवाह योग्य युवक-युवती परिचय सम्मेलन 2026।"
		},
		{
			property: "og:title",
			content: "विवाह योग्य युवक-युवती परिचय सम्मेलन 2026"
		},
		{
			property: "og:description",
			content: "श्री गुर्जर गौड़ ब्राह्मण नगर सभा, इन्दौर"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./login-BquUBD1r.mjs");
var Route$2 = createFileRoute("/login")({
	head: () => ({ meta: [
		{ title: "प्रवेश — परिचय सेतु" },
		{
			name: "description",
			content: "परिचय सेतु में अपने मोबाइल नंबर के साथ सहज प्रवेश करें।"
		},
		{
			property: "og:title",
			content: "प्रवेश — परिचय सेतु"
		},
		{
			property: "og:description",
			content: "अपने रिश्तों की नई शुरुआत वहीं से आगे बढ़ाइए।"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./registration-DL66CzCh.mjs");
var Route$1 = createFileRoute("/registration")({
	head: () => ({ meta: [
		{ title: "विवाह पंजीकरण — आँगन" },
		{
			name: "description",
			content: "आँगन पर अपनी वैवाहिक जानकारी चरण दर चरण भरकर अपना विवाह पंजीकरण पूरा कीजिए।"
		},
		{
			property: "og:title",
			content: "विवाह पंजीकरण — आँगन"
		},
		{
			property: "og:description",
			content: "व्यक्तिगत जानकारी, जन्म विवरण, परिवार, कुंडली और संपर्क — सब एक ही सरल पंजीकरण में।"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./signup-ZDvglJyb.mjs");
var Route = createFileRoute("/signup")({
	head: () => ({ meta: [
		{ title: "नया खाता — आँगन" },
		{
			name: "description",
			content: "आँगन से जुड़कर अपने लिए एक खूबसूरत रिश्ते की शुरुआत कीजिए।"
		},
		{
			property: "og:title",
			content: "नया खाता — आँगन"
		},
		{
			property: "og:description",
			content: "आँगन से जुड़कर अपने लिए एक खूबसूरत रिश्ते की शुरुआत कीजिए।"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	LoginRoute: Route$2.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$4
	}),
	RegistrationRoute: Route$1.update({
		id: "/registration",
		path: "/registration",
		getParentRoute: () => Route$4
	}),
	SignupRoute: Route.update({
		id: "/signup",
		path: "/signup",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
