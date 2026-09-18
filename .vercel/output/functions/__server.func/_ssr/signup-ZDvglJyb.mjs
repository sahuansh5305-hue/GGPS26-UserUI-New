import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as GlassEffect, r as GlassFilter, t as GlassButton } from "./liquid-glass-OpDglhgH.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowRight, s as Flower2, u as Check } from "../_libs/lucide-react.mjs";
import { t as ChatGPT_Image_Sep_16__2026__07_54_00_PM_default } from "./ChatGPT Image Sep 16_ 2026_ 07_54_00 PM-BL127_Tj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-ZDvglJyb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var relationChoices = [
	"मेरे लिए",
	"बेटे के लिए",
	"बेटी के लिए",
	"भाई के लिए",
	"बहन के लिए",
	"किसी और के लिए"
];
function SignupPage() {
	const navigate = useNavigate();
	const [selected, setSelected] = (0, import_react.useState)("मेरे लिए");
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const handleSubmit = (event) => {
		event?.preventDefault();
		const nextErrors = {};
		if (!name.trim()) nextErrors.name = "कृपया अपना पूरा नाम लिखें।";
		if (!/^\d{10}$/.test(phone)) nextErrors.phone = "कृपया १० अंकों का मोबाइल नंबर लिखें।";
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) return;
		navigate({ to: "/registration" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-hidden bg-signup-pattern px-5 py-6 sm:px-8 sm:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassFilter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-[-4rem] top-40 size-52 rounded-full border-[34px] border-vermilion/8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-[-5rem] right-[-3rem] text-marigold/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, {
					className: "size-64",
					strokeWidth: .7
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "\r\n    relative\r\n    z-20\r\n    mx-auto\r\n    w-full\r\n    max-w-7xl\r\n    px-0\r\n    pt-0\r\n    sm:px-2\r\n  ",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-[150px] w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-0 top-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\r\n          inline-flex\r\n          rounded-[24px]\r\n          border\r\n          border-primary/10\r\n          bg-background/40\r\n          p-1.5\r\n          shadow-xl\r\n          backdrop-blur-md\r\n        ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ChatGPT_Image_Sep_16__2026__07_54_00_PM_default,
									alt: "श्री गुर्जर गौड़ ब्राह्मण नगर सभा, इन्दौर",
									className: "\r\n            h-24\r\n            w-24\r\n            rounded-[18px]\r\n            object-contain\r\n            sm:h-28\r\n            sm:w-28\r\n            lg:h-32\r\n            lg:w-32\r\n          "
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\r\n        mx-auto\r\n        w-full\r\n        max-w-3xl\r\n        px-28\r\n        text-center\r\n        sm:px-36\r\n        lg:px-40\r\n      ",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "\r\n          font-display\r\n          text-sm\r\n          font-semibold\r\n          tracking-wide\r\n          text-vermilion\r\n          sm:text-base\r\n          lg:text-lg\r\n        ",
									children: "॥ ॐ तस्मै नमः गुरुगौतमायः ॥"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "\r\n          mt-2\r\n          font-display\r\n          text-lg\r\n          font-bold\r\n          leading-tight\r\n          text-primary\r\n          sm:text-xl\r\n          lg:text-2xl\r\n        ",
									children: "श्री गुर्जर गौड़ ब्राह्मण नगर सभा (रजि.), इन्दौर"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "\r\n          mt-2\r\n          font-display\r\n          text-base\r\n          font-semibold\r\n          leading-tight\r\n          text-primary\r\n          sm:text-lg\r\n          lg:text-xl\r\n        ",
									children: "विवाह योग्य युवक-युवती परिचय सम्मेलन - 2026"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "मुख्य नेविगेशन",
							className: "\r\n        absolute\r\n        right-0\r\n        top-0\r\n        flex\r\n        items-center\r\n        gap-1\r\n        text-sm\r\n        font-semibold\r\n        sm:gap-2\r\n      ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "\r\n          rounded-full\r\n          px-3\r\n          py-2\r\n          text-primary\r\n          transition\r\n          hover:bg-primary/5\r\n          sm:px-4\r\n          sm:py-2.5\r\n        ",
								children: "प्रवेश"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/signup",
								className: "\r\n          rounded-full\r\n          border\r\n          border-primary/20\r\n          bg-background/40\r\n          px-4\r\n          py-2\r\n          text-primary\r\n          shadow-lg\r\n          backdrop-blur-md\r\n          transition\r\n          hover:bg-background/60\r\n          sm:px-5\r\n          sm:py-2.5\r\n        ",
								children: "नया खाता"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 mx-auto flex max-w-6xl justify-center pb-10 pt-12 sm:pt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassEffect, {
					className: "w-full max-w-3xl cursor-default !rounded-2xl border border-background/70 bg-background/35 p-5 text-primary shadow-soft sm:p-9 lg:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-7 flex items-center gap-3 text-sm font-bold text-vermilion",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-8 place-items-center rounded-full bg-vermilion text-ivory",
										children: "१"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "आपकी शुरुआत" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-primary/10" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl",
								children: "चलिए, एक नई शुरुआत करते हैं"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-2xl leading-7 text-muted-foreground",
								children: "आँगन से जुड़िए और अपने लिए एक खूबसूरत रिश्ते की शुरुआत कीजिए।"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-9 space-y-6",
								onSubmit: handleSubmit,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "signup-name",
												className: "mb-2 block text-sm font-bold",
												children: "नाम"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "signup-name",
												value: name,
												onChange: (event) => setName(event.target.value),
												autoComplete: "name",
												placeholder: "अपना पूरा नाम लिखें",
												className: "h-14 w-full rounded-xl border border-primary/15 bg-background/70 px-4 outline-none transition focus:border-vermilion focus:ring-2 focus:ring-vermilion/15"
											}),
											errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												role: "alert",
												className: "mt-1.5 text-xs font-semibold text-destructive",
												children: errors.name
											}) : null
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "signup-phone",
												className: "mb-2 block text-sm font-bold",
												children: "मोबाइल नंबर"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex h-14 overflow-hidden rounded-xl border border-primary/15 bg-background/70 focus-within:border-vermilion focus-within:ring-2 focus-within:ring-vermilion/15",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid w-16 shrink-0 place-items-center border-r border-primary/10 font-semibold",
													children: "+९१"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: "signup-phone",
													value: phone,
													onChange: (event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10)),
													inputMode: "numeric",
													autoComplete: "tel",
													placeholder: "अपना मोबाइल नंबर लिखें",
													className: "min-w-0 flex-1 bg-transparent px-4 outline-none placeholder:text-muted-foreground/75"
												})]
											}),
											errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												role: "alert",
												className: "mt-1.5 text-xs font-semibold text-destructive",
												children: errors.phone
											}) : null
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "mb-3 text-sm font-bold",
										children: "रिश्ता किसके लिए है?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
										children: relationChoices.map((choice) => {
											const isSelected = choice === selected;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassEffect, {
												onClick: () => setSelected(choice),
												className: `min-h-14 items-center justify-center !rounded-xl border px-3 py-3 text-center text-sm ${isSelected ? "border-vermilion bg-vermilion/15 text-primary" : "border-primary/10 bg-background/20 text-muted-foreground"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center justify-center gap-2",
													children: [isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
														className: "size-4 text-vermilion",
														strokeWidth: 3,
														"aria-hidden": "true"
													}), choice]
												})
											}, choice);
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassButton, {
										onClick: () => handleSubmit(),
										className: "w-full justify-center !rounded-full !bg-primary !px-7 !py-4 text-ivory hover:!px-7 hover:!py-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-3",
											children: ["आगे बढ़ें ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												className: "size-5",
												"aria-hidden": "true"
											})]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-7 text-center text-sm text-muted-foreground",
								children: [
									"पहले से खाता है?",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/login",
										className: "font-bold text-vermilion underline decoration-vermilion/30 underline-offset-4 hover:decoration-vermilion",
										children: "प्रवेश करें"
									})
								]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { SignupPage as component };
