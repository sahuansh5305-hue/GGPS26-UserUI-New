import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as GlassEffect, r as GlassFilter, t as GlassButton } from "./liquid-glass-OpDglhgH.mjs";
import { a as ImagePlus, c as CircleCheck, d as ArrowRight, f as ArrowLeft, i as LoaderCircle, l as ChevronDown, r as Search, s as Flower2, t as Trash2, u as Check } from "../_libs/lucide-react.mjs";
import { t as ChatGPT_Image_Sep_16__2026__07_54_00_PM_default } from "./ChatGPT Image Sep 16_ 2026_ 07_54_00 PM-BL127_Tj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/registration-DL66CzCh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputBase = "h-14 w-full rounded-xl border border-primary/15 bg-background/70 px-4 text-primary outline-none transition placeholder:text-muted-foreground/75 focus:border-vermilion focus:ring-2 focus:ring-vermilion/15";
function FieldShell({ label, htmlFor, error, hint, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor,
				className: "mb-2 block text-sm font-bold text-primary",
				children: label
			}),
			children,
			hint && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-xs text-muted-foreground",
				children: hint
			}) : null,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "mt-1.5 text-xs font-semibold text-destructive",
				children: error
			}) : null
		]
	});
}
function TextField({ id, label, value, onChange, placeholder, error, hint, type = "text", inputMode, maxLength, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
		label,
		htmlFor: id,
		error,
		hint,
		className: className ?? "",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			type,
			value,
			inputMode,
			maxLength,
			placeholder,
			onChange: (event) => onChange(event.target.value),
			className: inputBase
		})
	});
}
function TextAreaField({ id, label, value, onChange, placeholder, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
		label,
		htmlFor: id,
		error,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			id,
			value,
			rows: 4,
			placeholder,
			onChange: (event) => onChange(event.target.value),
			className: "w-full rounded-xl border border-primary/15 bg-background/70 p-4 text-primary outline-none transition placeholder:text-muted-foreground/75 focus:border-vermilion focus:ring-2 focus:ring-vermilion/15"
		})
	});
}
function AmountField({ id, label, value, onChange, hidden, onHiddenChange, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldShell, {
		label,
		htmlFor: id,
		error,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-14 overflow-hidden rounded-xl border border-primary/15 bg-background/70 focus-within:border-vermilion focus-within:ring-2 focus-within:ring-vermilion/15",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid w-14 shrink-0 place-items-center border-r border-primary/10 text-lg font-semibold text-primary",
					children: "₹"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id,
					value: hidden ? "" : value,
					disabled: hidden,
					inputMode: "numeric",
					placeholder: "मासिक आय लिखें",
					onChange: (event) => onChange(event.target.value.replace(/\D/g, "")),
					className: "min-w-0 flex-1 bg-transparent px-4 text-primary outline-none placeholder:text-muted-foreground/75 disabled:opacity-50"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden shrink-0 items-center pr-4 text-sm text-muted-foreground sm:flex",
					children: "प्रति माह"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-2.5 inline-flex cursor-pointer items-center gap-2 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				checked: hidden,
				onChange: (event) => onHiddenChange(event.target.checked),
				className: "size-4 accent-[var(--vermilion)]"
			}), "बताना नहीं चाहते"]
		})]
	});
}
function ChoiceGroup({ label, options, value, onChange, error, columns = "grid-cols-2 sm:grid-cols-3" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
			className: "mb-2.5 text-sm font-bold text-primary",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `grid gap-3 ${columns}`,
			children: options.map((option) => {
				const selected = option === value;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassEffect, {
					onClick: () => onChange(option),
					className: `min-h-13 items-center justify-center !rounded-xl border px-3 py-3 text-center text-sm ${selected ? "border-vermilion bg-vermilion/15 text-primary" : "border-primary/10 bg-background/20 text-muted-foreground"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center justify-center gap-2",
						children: [selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-4 text-vermilion",
							strokeWidth: 3,
							"aria-hidden": "true"
						}) : null, option]
					})
				}, option);
			})
		}),
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "alert",
			className: "mt-2 text-xs font-semibold text-destructive",
			children: error
		}) : null
	] });
}
function SearchableSelect({ id, label, options, value, onChange, placeholder = "खोजें या चुनें", error }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const containerRef = (0, import_react.useRef)(null);
	const filtered = (0, import_react.useMemo)(() => query ? options.filter((option) => option.includes(query.trim())) : options, [options, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
		label,
		htmlFor: id,
		error,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: containerRef,
			className: "relative",
			onBlur: (event) => {
				if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				id,
				type: "button",
				onClick: () => setOpen((prev) => !prev),
				className: `flex ${inputBase} items-center justify-between text-left`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: value ? "text-primary" : "text-muted-foreground/75",
					children: value || placeholder
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: "size-5 shrink-0 text-muted-foreground",
					"aria-hidden": "true"
				})]
			}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-primary/15 bg-background shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-primary/10 px-3 py-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "size-4 text-muted-foreground",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "खोजिए",
						className: "min-w-0 flex-1 bg-transparent text-sm text-primary outline-none placeholder:text-muted-foreground/75"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "max-h-56 overflow-y-auto py-1",
					children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-4 py-3 text-sm text-muted-foreground",
						children: "कोई परिणाम नहीं मिला"
					}) : filtered.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							onChange(option);
							setQuery("");
							setOpen(false);
						},
						className: `flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-vermilion/10 ${option === value ? "font-bold text-vermilion" : "text-primary"}`,
						children: [option, option === value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-4",
							strokeWidth: 3,
							"aria-hidden": "true"
						}) : null]
					}) }, option))
				})]
			}) : null]
		})
	});
}
var indianStates = [
	"अंडमान और निकोबार द्वीपसमूह",
	"अरुणाचल प्रदेश",
	"असम",
	"आंध्र प्रदेश",
	"उत्तर प्रदेश",
	"उत्तराखण्ड",
	"ओडिशा",
	"कर्नाटक",
	"केरल",
	"गोवा",
	"गुजरात",
	"चंडीगढ़",
	"छत्तीसगढ़",
	"जम्मू और कश्मीर",
	"झारखण्ड",
	"तमिलनाडु",
	"तेलंगाना",
	"त्रिपुरा",
	"दादरा और नगर हवेली तथा दमन और दीव",
	"दिल्ली",
	"नागालैण्ड",
	"पंजाब",
	"पश्चिम बंगाल",
	"पुदुच्चेरी",
	"बिहार",
	"मणिपुर",
	"मध्य प्रदेश",
	"महाराष्ट्र",
	"मिज़ोरम",
	"मेघालय",
	"राजस्थान",
	"लक्षद्वीप",
	"लद्दाख",
	"सिक्किम",
	"हरियाणा",
	"हिमाचल प्रदेश"
];
var rashiList = [
	"मेष",
	"वृषभ",
	"मिथुन",
	"कर्क",
	"सिंह",
	"कन्या",
	"तुला",
	"वृश्चिक",
	"धनु",
	"मकर",
	"कुम्भ",
	"मीन"
];
var nakshatraList = [
	"अश्विनी",
	"भरणी",
	"कृत्तिका",
	"रोहिणी",
	"मृगशिरा",
	"आर्द्रा",
	"पुनर्वसु",
	"पुष्य",
	"अश्लेषा",
	"मघा",
	"पूर्वा फाल्गुनी",
	"उत्तरा फाल्गुनी",
	"हस्त",
	"चित्रा",
	"स्वाति",
	"विशाखा",
	"अनुराधा",
	"ज्येष्ठा",
	"मूल",
	"पूर्वाषाढ़ा",
	"उत्तराषाढ़ा",
	"श्रवण",
	"धनिष्ठा",
	"शतभिषा",
	"पूर्वा भाद्रपद",
	"उत्तरा भाद्रपद",
	"रेवती"
];
var specialSituations = [
	"कोई विशेष परिस्थिति नहीं",
	"विधुर",
	"विधवा",
	"दिव्यांग",
	"चालीस वर्ष से अधिक आयु",
	"तलाकशुदा"
];
var complexionOptions = [
	"गोरा",
	"गेहुँआ",
	"श्याम"
];
var naadiOptions = [
	"आदि",
	"मध्य",
	"अन्त्य"
];
var charanOptions = [
	"१",
	"२",
	"३",
	"४"
];
var heightFeetOptions = [
	"४",
	"५",
	"६",
	"७"
];
var heightInchOptions = [
	"०",
	"१",
	"२",
	"३",
	"४",
	"५",
	"६",
	"७",
	"८",
	"९",
	"१०",
	"११"
];
var stepTitles = [
	"व्यक्तिगत जानकारी",
	"जन्म विवरण",
	"शिक्षा एवं व्यवसाय",
	"परिवार की जानकारी",
	"जन्म कुंडली",
	"पता एवं संपर्क",
	"तस्वीर",
	"जानकारी की समीक्षा"
];
var initialState = {
	fullName: "",
	registeringAs: "",
	specialSituation: "कोई विशेष परिस्थिति नहीं",
	birthDate: "",
	heightFeet: "",
	heightInch: "",
	weight: "",
	complexion: "",
	birthTime: "",
	birthPlace: "",
	birthVillage: "",
	birthDistrict: "",
	birthState: "",
	education: "",
	occupation: "",
	income: "",
	incomeHidden: false,
	fatherName: "",
	fatherOccupation: "",
	fatherIncome: "",
	fatherIncomeHidden: false,
	motherName: "",
	kundliMatch: "",
	gotraSelf: "",
	gotraMaternal: "",
	rashi: "",
	nakshatra: "",
	charan: "",
	naadi: "",
	manglik: "",
	shani: "",
	address: "",
	city: "",
	district: "",
	state: "",
	pinCode: "",
	phone: "",
	mobileOne: "",
	mobileTwo: ""
};
var yesNo = ["हाँ", "नहीं"];
var notFilled = "नहीं भरा गया";
function validateStep(step, form) {
	const errors = {};
	if (step === 1) {
		if (!form.fullName.trim()) errors.fullName = "कृपया अपना पूरा नाम लिखें।";
		if (!form.registeringAs) errors.registeringAs = "कृपया चुनें कि आप किस रूप में पंजीकरण कर रहे हैं।";
		if (!form.birthDate) errors.birthDate = "कृपया जन्म दिनांक चुनें।";
		if (form.weight && Number(form.weight) <= 0) errors.weight = "कृपया सही वजन लिखें।";
	}
	if (step === 2) {
		if (!form.birthPlace.trim()) errors.birthPlace = "कृपया जन्म स्थान लिखें।";
		if (!form.birthState) errors.birthState = "कृपया राज्य चुनें।";
	}
	if (step === 3) {
		if (!form.education.trim()) errors.education = "कृपया अपनी शैक्षणिक योग्यता लिखें।";
		if (!form.occupation.trim()) errors.occupation = "कृपया अपना व्यवसाय लिखें।";
		if (!form.incomeHidden && !form.income.trim()) errors.income = "कृपया मासिक आय लिखें या “बताना नहीं चाहते” चुनें।";
	}
	if (step === 4) {
		if (!form.fatherName.trim()) errors.fatherName = "कृपया पिता या अभिभावक का नाम लिखें।";
		if (!form.motherName.trim()) errors.motherName = "कृपया माता का नाम लिखें।";
	}
	if (step === 6) {
		if (!form.address.trim()) errors.address = "कृपया अपना पूरा पता लिखें।";
		if (!form.city.trim()) errors.city = "कृपया शहर या गाँव का नाम लिखें।";
		if (!form.district.trim()) errors.district = "कृपया जिले का नाम लिखें।";
		if (!form.state) errors.state = "कृपया राज्य चुनें।";
		if (!/^\d{6}$/.test(form.pinCode)) errors.pinCode = "कृपया ६ अंकों का पिन कोड लिखें।";
		if (!/^\d{10}$/.test(form.mobileOne)) errors.mobileOne = "कृपया १० अंकों का मोबाइल नंबर लिखें।";
		if (form.mobileTwo && !/^\d{10}$/.test(form.mobileTwo)) errors.mobileTwo = "दूसरा मोबाइल नंबर १० अंकों का होना चाहिए।";
	}
	return errors;
}
function RegistrationPage() {
	const [step, setStep] = (0, import_react.useState)(1);
	const [form, setForm] = (0, import_react.useState)(initialState);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [photoPreview, setPhotoPreview] = (0, import_react.useState)(null);
	const [photoName, setPhotoName] = (0, import_react.useState)("");
	const [confirmed, setConfirmed] = (0, import_react.useState)(false);
	const [confirmError, setConfirmError] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const [showProfile, setShowProfile] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const set = (key, value) => {
		setForm((prev) => ({
			...prev,
			[key]: value
		}));
		setErrors((prev) => {
			if (!prev[key]) return prev;
			const next = { ...prev };
			delete next[key];
			return next;
		});
	};
	const goNext = () => {
		const stepErrors = validateStep(step, form);
		if (Object.keys(stepErrors).length > 0) {
			setErrors(stepErrors);
			return;
		}
		setErrors({});
		setStep((prev) => Math.min(prev + 1, 8));
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const goBack = () => {
		setErrors({});
		setStep((prev) => Math.max(prev - 1, 1));
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const jumpTo = (target) => {
		setErrors({});
		setStep(target);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handlePhoto = (file) => {
		if (!file) return;
		setPhotoName(file.name);
		setPhotoPreview(URL.createObjectURL(file));
	};
	const submit = () => {
		if (!confirmed) {
			setConfirmError("कृपया जानकारी की पुष्टि करें।");
			return;
		}
		if (submitting || done) return;
		for (let index = 1; index <= 7; index += 1) {
			const stepErrors = validateStep(index, form);
			if (Object.keys(stepErrors).length > 0) {
				setErrors(stepErrors);
				jumpTo(index);
				return;
			}
		}
		setSubmitting(true);
		window.setTimeout(() => {
			setSubmitting(false);
			setDone(true);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		}, 1400);
	};
	const heightText = form.heightFeet || form.heightInch ? `${form.heightFeet || "०"} फीट ${form.heightInch || "०"} इंच` : notFilled;
	const sections = (0, import_react.useMemo)(() => [
		{
			title: "व्यक्तिगत जानकारी",
			step: 1,
			rows: [
				["प्रत्याशी का पूरा नाम", form.fullName],
				["पंजीकरण का रूप", form.registeringAs],
				["विशेष परिस्थिति", form.specialSituation],
				["जन्म दिनांक", form.birthDate],
				["ऊँचाई", heightText],
				["वजन", form.weight ? `${form.weight} किलोग्राम` : ""],
				["रंग / वर्ण", form.complexion]
			]
		},
		{
			title: "जन्म विवरण",
			step: 2,
			rows: [
				["जन्म समय", form.birthTime],
				["जन्म स्थान", form.birthPlace],
				["गाँव / शहर", form.birthVillage],
				["जिला", form.birthDistrict],
				["राज्य", form.birthState]
			]
		},
		{
			title: "शिक्षा एवं व्यवसाय",
			step: 3,
			rows: [
				["शैक्षणिक योग्यता", form.education],
				["व्यवसाय", form.occupation],
				["मासिक आय", form.incomeHidden ? "बताना नहीं चाहते" : form.income ? `₹ ${form.income}` : ""]
			]
		},
		{
			title: "परिवार",
			step: 4,
			rows: [
				["पिता / अभिभावक का नाम", form.fatherName],
				["पिता / अभिभावक का व्यवसाय", form.fatherOccupation],
				["पिता / अभिभावक की मासिक आय", form.fatherIncomeHidden ? "बताना नहीं चाहते" : form.fatherIncome ? `₹ ${form.fatherIncome}` : ""],
				["माता का नाम", form.motherName]
			]
		},
		{
			title: "जन्म कुंडली",
			step: 5,
			rows: [
				["कुंडली मिलान", form.kundliMatch],
				["गोत्र — स्वयं", form.gotraSelf],
				["गोत्र — ननिहाल / मामा", form.gotraMaternal],
				["राशि", form.rashi],
				["नक्षत्र", form.nakshatra],
				["चरण", form.charan],
				["नाड़ी", form.naadi],
				["मांगलिक", form.manglik],
				["शनि", form.shani]
			]
		},
		{
			title: "पता एवं संपर्क",
			step: 6,
			rows: [
				["पूरा पता", form.address],
				["शहर / गाँव", form.city],
				["जिला", form.district],
				["राज्य", form.state],
				["पिन कोड", form.pinCode],
				["फोन नंबर", form.phone],
				["मोबाइल नंबर १", form.mobileOne],
				["मोबाइल नंबर २", form.mobileTwo]
			]
		},
		{
			title: "तस्वीर",
			step: 7,
			rows: [["तस्वीर", photoPreview ? photoName || "तस्वीर जोड़ी गई" : ""]]
		}
	], [
		form,
		heightText,
		photoName,
		photoPreview
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-x-hidden bg-signup-pattern px-5 py-6 sm:px-8 sm:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassFilter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-[-4rem] top-52 size-52 rounded-full border-[34px] border-vermilion/8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-[-5rem] right-[-3rem] text-marigold/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, {
					className: "size-64",
					strokeWidth: .7,
					"aria-hidden": "true"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "\r\n    relative\r\n    z-20\r\n    mx-auto\r\n    w-full\r\n    max-w-7xl\r\n    px-0\r\n    pt-0\r\n    sm:px-2\r\n  ",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-[150px] w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-0 top-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "\r\n          inline-flex\r\n          rounded-[24px]\r\n          border\r\n          border-primary/10\r\n          bg-background/40\r\n          p-1.5\r\n          shadow-xl\r\n          backdrop-blur-md\r\n        ",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ChatGPT_Image_Sep_16__2026__07_54_00_PM_default,
								alt: "श्री गुर्जर गौड़ ब्राह्मण नगर सभा, इन्दौर",
								className: "\r\n            h-24\r\n            w-24\r\n            rounded-[18px]\r\n            object-contain\r\n            sm:h-28\r\n            sm:w-28\r\n            lg:h-32\r\n            lg:w-32\r\n          "
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "\r\n        mx-auto\r\n        w-full\r\n        max-w-3xl\r\n        px-28\r\n        text-center\r\n        sm:px-36\r\n        lg:px-40\r\n      ",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "\r\n          font-display\r\n          text-sm\r\n          font-semibold\r\n          tracking-wide\r\n          text-vermilion\r\n          sm:text-base\r\n          lg:text-lg\r\n        ",
								children: "॥ ॐ तस्मै नमः गुरु गौतमायः ॥"
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
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative z-10 mx-auto flex max-w-4xl justify-center pb-14 pt-10 sm:pt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassEffect, {
					className: "w-full cursor-default !rounded-2xl border border-background/70 bg-background/35 p-5 text-primary shadow-soft sm:p-9 lg:p-11",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full",
						children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessScreen, {
							showProfile,
							onShowProfile: () => setShowProfile(true),
							name: form.fullName,
							registeringAs: form.registeringAs,
							sections,
							photoPreview
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-3 flex flex-wrap items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-bold text-vermilion",
										children: [
											"चरण ",
											toHindi(step),
											" / ८"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: stepTitles[step - 1]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-2 w-full overflow-hidden rounded-full bg-primary/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full rounded-full bg-vermilion transition-all duration-500",
										style: { width: `${step / 8 * 100}%` }
									})
								})]
							}),
							step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepShell, {
								heading: "अपने बारे में बताइए",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										id: "reg-name",
										label: "प्रत्याशी का पूरा नाम",
										value: form.fullName,
										onChange: (value) => set("fullName", value),
										placeholder: "अपना पूरा नाम लिखें",
										error: errors.fullName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceGroup, {
										label: "आप किस रूप में पंजीकरण कर रहे हैं?",
										options: ["वर", "वधू"],
										value: form.registeringAs,
										onChange: (value) => set("registeringAs", value),
										error: errors.registeringAs,
										columns: "grid-cols-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceGroup, {
										label: "विशेष परिस्थिति",
										options: specialSituations,
										value: form.specialSituation,
										onChange: (value) => set("specialSituation", value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-dob",
											label: "जन्म दिनांक",
											type: "date",
											value: form.birthDate,
											onChange: (value) => set("birthDate", value),
											error: errors.birthDate
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-weight",
											label: "वजन (किलोग्राम)",
											value: form.weight,
											inputMode: "numeric",
											onChange: (value) => set("weight", value.replace(/\D/g, "")),
											placeholder: "वजन किलोग्राम में लिखें",
											error: errors.weight
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchableSelect, {
											id: "reg-feet",
											label: "ऊँचाई (फीट)",
											options: heightFeetOptions,
											value: form.heightFeet,
											onChange: (value) => set("heightFeet", value),
											placeholder: "फीट चुनें"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchableSelect, {
											id: "reg-inch",
											label: "ऊँचाई (इंच)",
											options: heightInchOptions,
											value: form.heightInch,
											onChange: (value) => set("heightInch", value),
											placeholder: "इंच चुनें"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceGroup, {
										label: "रंग / वर्ण",
										options: complexionOptions,
										value: form.complexion,
										onChange: (value) => set("complexion", value),
										columns: "grid-cols-3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNav, { onNext: goNext })
								]
							}) : null,
							step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepShell, {
								heading: "जन्म से जुड़ी जानकारी",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-birth-time",
											label: "जन्म समय",
											type: "time",
											value: form.birthTime,
											onChange: (value) => set("birthTime", value)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-birth-place",
											label: "जन्म स्थान",
											value: form.birthPlace,
											onChange: (value) => set("birthPlace", value),
											placeholder: "जन्म स्थान लिखें",
											error: errors.birthPlace
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-birth-village",
											label: "गाँव / शहर",
											value: form.birthVillage,
											onChange: (value) => set("birthVillage", value),
											placeholder: "गाँव या शहर का नाम"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-birth-district",
											label: "जिला",
											value: form.birthDistrict,
											onChange: (value) => set("birthDistrict", value),
											placeholder: "जिले का नाम"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchableSelect, {
										id: "reg-birth-state",
										label: "राज्य",
										options: indianStates,
										value: form.birthState,
										onChange: (value) => set("birthState", value),
										placeholder: "राज्य खोजें या चुनें",
										error: errors.birthState
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNav, {
										onBack: goBack,
										onNext: goNext
									})
								]
							}) : null,
							step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepShell, {
								heading: "शिक्षा और व्यवसाय",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										id: "reg-education",
										label: "शैक्षणिक योग्यता",
										value: form.education,
										onChange: (value) => set("education", value),
										placeholder: "अपनी उच्चतम शैक्षणिक योग्यता लिखें",
										error: errors.education
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										id: "reg-occupation",
										label: "प्रत्याशी का व्यवसाय",
										value: form.occupation,
										onChange: (value) => set("occupation", value),
										placeholder: "अपना व्यवसाय लिखें",
										error: errors.occupation
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmountField, {
										id: "reg-income",
										label: "मासिक आय",
										value: form.income,
										onChange: (value) => set("income", value),
										hidden: form.incomeHidden,
										onHiddenChange: (value) => {
											set("incomeHidden", value);
											setErrors((prev) => {
												const next = { ...prev };
												delete next.income;
												return next;
											});
										},
										error: errors.income
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNav, {
										onBack: goBack,
										onNext: goNext
									})
								]
							}) : null,
							step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepShell, {
								heading: "परिवार के बारे में बताइए",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-father",
											label: "पिता / अभिभावक का नाम",
											value: form.fatherName,
											onChange: (value) => set("fatherName", value),
											placeholder: "पिता या अभिभावक का पूरा नाम",
											error: errors.fatherName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-father-work",
											label: "पिता / अभिभावक का व्यवसाय",
											value: form.fatherOccupation,
											onChange: (value) => set("fatherOccupation", value),
											placeholder: "व्यवसाय लिखें"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmountField, {
										id: "reg-father-income",
										label: "पिता / अभिभावक की मासिक आय",
										value: form.fatherIncome,
										onChange: (value) => set("fatherIncome", value),
										hidden: form.fatherIncomeHidden,
										onHiddenChange: (value) => set("fatherIncomeHidden", value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										id: "reg-mother",
										label: "माता का नाम",
										value: form.motherName,
										onChange: (value) => set("motherName", value),
										placeholder: "माता का पूरा नाम",
										error: errors.motherName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNav, {
										onBack: goBack,
										onNext: goNext
									})
								]
							}) : null,
							step === 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepShell, {
								heading: "जन्म कुंडली की जानकारी",
								support: "यदि यह जानकारी उपलब्ध है, तो यहाँ भरें।",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceGroup, {
										label: "कुंडली मिलान",
										options: yesNo,
										value: form.kundliMatch,
										onChange: (value) => set("kundliMatch", value),
										columns: "grid-cols-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-gotra-self",
											label: "गोत्र — स्वयं",
											value: form.gotraSelf,
											onChange: (value) => set("gotraSelf", value),
											placeholder: "अपना गोत्र लिखें"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-gotra-maternal",
											label: "गोत्र — ननिहाल / मामा",
											value: form.gotraMaternal,
											onChange: (value) => set("gotraMaternal", value),
											placeholder: "ननिहाल का गोत्र लिखें"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchableSelect, {
											id: "reg-rashi",
											label: "राशि",
											options: rashiList,
											value: form.rashi,
											onChange: (value) => set("rashi", value),
											placeholder: "राशि खोजें या चुनें"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchableSelect, {
											id: "reg-nakshatra",
											label: "नक्षत्र",
											options: nakshatraList,
											value: form.nakshatra,
											onChange: (value) => set("nakshatra", value),
											placeholder: "नक्षत्र खोजें या चुनें"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceGroup, {
										label: "चरण",
										options: charanOptions,
										value: form.charan,
										onChange: (value) => set("charan", value),
										columns: "grid-cols-4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceGroup, {
										label: "नाड़ी",
										options: naadiOptions,
										value: form.naadi,
										onChange: (value) => set("naadi", value),
										columns: "grid-cols-3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceGroup, {
											label: "मांगलिक",
											options: yesNo,
											value: form.manglik,
											onChange: (value) => set("manglik", value),
											columns: "grid-cols-2"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceGroup, {
											label: "शनि",
											options: yesNo,
											value: form.shani,
											onChange: (value) => set("shani", value),
											columns: "grid-cols-2"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNav, {
										onBack: goBack,
										onNext: goNext
									})
								]
							}) : null,
							step === 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepShell, {
								heading: "पता और संपर्क जानकारी",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
										id: "reg-address",
										label: "पूरा पता",
										value: form.address,
										onChange: (value) => set("address", value),
										placeholder: "अपना पूरा पता लिखें",
										error: errors.address
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-city",
											label: "शहर / गाँव",
											value: form.city,
											onChange: (value) => set("city", value),
											placeholder: "शहर या गाँव का नाम",
											error: errors.city
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-district",
											label: "जिला",
											value: form.district,
											onChange: (value) => set("district", value),
											placeholder: "जिले का नाम",
											error: errors.district
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchableSelect, {
											id: "reg-state",
											label: "राज्य",
											options: indianStates,
											value: form.state,
											onChange: (value) => set("state", value),
											placeholder: "राज्य खोजें या चुनें",
											error: errors.state
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-pin",
											label: "पिन कोड",
											value: form.pinCode,
											inputMode: "numeric",
											maxLength: 6,
											onChange: (value) => set("pinCode", value.replace(/\D/g, "")),
											placeholder: "६ अंकों का पिन कोड",
											error: errors.pinCode
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
										id: "reg-phone",
										label: "फोन नंबर",
										value: form.phone,
										inputMode: "tel",
										onChange: (value) => set("phone", value),
										placeholder: "एस.टी.डी. कोड सहित फोन नंबर"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-mobile-1",
											label: "मोबाइल नंबर १",
											value: form.mobileOne,
											inputMode: "numeric",
											maxLength: 10,
											onChange: (value) => set("mobileOne", value.replace(/\D/g, "")),
											placeholder: "अपना मोबाइल नंबर लिखें",
											error: errors.mobileOne
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
											id: "reg-mobile-2",
											label: "मोबाइल नंबर २",
											value: form.mobileTwo,
											inputMode: "numeric",
											maxLength: 10,
											onChange: (value) => set("mobileTwo", value.replace(/\D/g, "")),
											placeholder: "दूसरा मोबाइल नंबर (वैकल्पिक)",
											error: errors.mobileTwo
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNav, {
										onBack: goBack,
										onNext: goNext
									})
								]
							}) : null,
							step === 7 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepShell, {
								heading: "अपनी तस्वीर जोड़ें",
								support: "एक साफ़ और हाल की तस्वीर जोड़ें, जिसमें आपका चेहरा स्पष्ट दिखाई दे।",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: fileRef,
										type: "file",
										accept: "image/*",
										className: "hidden",
										onChange: (event) => handlePhoto(event.target.files?.[0])
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center gap-6 rounded-2xl border border-dashed border-vermilion/35 bg-background/40 p-6 sm:p-8",
										children: [
											photoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: photoPreview,
												alt: "आपकी चुनी हुई तस्वीर",
												className: "size-44 rounded-2xl object-cover shadow-soft"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid size-44 place-items-center rounded-2xl bg-vermilion/10 text-vermilion",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
													className: "size-14",
													strokeWidth: 1.3,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap justify-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => fileRef.current?.click(),
													className: "rounded-full bg-vermilion px-6 py-3 text-sm font-bold text-ivory transition-colors hover:bg-vermilion/90",
													children: photoPreview ? "तस्वीर बदलें" : "तस्वीर चुनें"
												}), photoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => {
														setPhotoPreview(null);
														setPhotoName("");
														if (fileRef.current) fileRef.current.value = "";
													},
													className: "inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
														className: "size-4",
														"aria-hidden": "true"
													}), " तस्वीर हटाएँ"]
												}) : null]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-center text-sm text-muted-foreground",
												children: "तस्वीर जोड़ना वैकल्पिक है, आप बिना तस्वीर भी आगे बढ़ सकते हैं।"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNav, {
										onBack: goBack,
										onNext: goNext
									})
								]
							}) : null,
							step === 8 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepShell, {
								heading: "अपनी जानकारी जाँचें",
								support: "पंजीकरण पूरा करने से पहले अपनी सभी जानकारी एक बार जाँच लें।",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-4",
										children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-primary/10 bg-background/55 p-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mb-3 flex items-center justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-xl font-semibold text-primary",
													children: section.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => jumpTo(section.step),
													className: "rounded-full border border-vermilion/40 px-4 py-1.5 text-sm font-bold text-vermilion transition-colors hover:bg-vermilion/10",
													children: "बदलें"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
												className: "grid gap-x-6 gap-y-2 sm:grid-cols-2",
												children: section.rows.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-baseline gap-2 text-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
														className: "text-muted-foreground",
														children: [label, ":"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
														className: value ? "font-semibold text-primary" : "text-muted-foreground/70",
														children: value || notFilled
													})]
												}, label))
											})]
										}, section.title))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex cursor-pointer items-start gap-3 rounded-2xl border border-primary/10 bg-background/55 p-4 text-sm text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: confirmed,
											onChange: (event) => {
												setConfirmed(event.target.checked);
												setConfirmError("");
											},
											className: "mt-0.5 size-4 accent-[var(--vermilion)]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "मैं पुष्टि करता / करती हूँ कि मेरे द्वारा दी गई जानकारी सही है।" })]
									}),
									confirmError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										role: "alert",
										className: "text-xs font-semibold text-destructive",
										children: confirmError
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: goBack,
											className: "inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-primary/5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
												className: "size-4",
												"aria-hidden": "true"
											}), " पीछे जाएँ"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: submit,
											disabled: !confirmed || submitting,
											className: "inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold text-ivory shadow-festive transition-opacity disabled:cursor-not-allowed disabled:opacity-50",
											children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
												className: "size-5 animate-spin",
												"aria-hidden": "true"
											}), " पंजीकरण हो रहा है…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["मेरा विवाह पंजीकरण पूरा करें ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
												className: "size-5",
												"aria-hidden": "true"
											})] })
										})]
									})
								]
							}) : null
						] })
					})
				})
			})
		]
	});
}
function toHindi(value) {
	const digits = [
		"०",
		"१",
		"२",
		"३",
		"४",
		"५",
		"६",
		"७",
		"८",
		"९"
	];
	return String(value).split("").map((digit) => digits[Number(digit)]).join("");
}
function StepShell({ heading, support, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold leading-tight text-primary sm:text-4xl",
				children: heading
			}),
			support ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl leading-7 text-muted-foreground",
				children: support
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-6",
				children
			})
		]
	});
}
function StepNav({ onBack, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between",
		children: [onBack ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onBack,
			className: "inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-primary/5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
				className: "size-4",
				"aria-hidden": "true"
			}), " पीछे जाएँ"]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassButton, {
			onClick: onNext,
			className: "justify-center !rounded-full !bg-primary !px-7 !py-4 text-ivory hover:!px-7 hover:!py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-3",
				children: ["आगे बढ़ें ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "size-5",
					"aria-hidden": "true"
				})]
			})
		})]
	});
}
function SuccessScreen({ showProfile, onShowProfile, name, registeringAs, sections, photoPreview }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "mx-auto size-16 text-vermilion",
					strokeWidth: 1.4,
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-3xl font-semibold text-primary sm:text-4xl",
					children: "आपका पंजीकरण पूरा हो गया है"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-7 text-muted-foreground",
					children: "आपकी वैवाहिक प्रोफ़ाइल सफलतापूर्वक तैयार हो गई है।"
				}),
				!showProfile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassButton, {
						onClick: onShowProfile,
						className: "justify-center !rounded-full !bg-vermilion !px-7 !py-4 text-ivory hover:!px-7 hover:!py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-3",
							children: ["मेरी प्रोफ़ाइल देखें ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-5",
								"aria-hidden": "true"
							})]
						})
					})
				}) : null
			]
		}), showProfile ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-9 space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassEffect, {
				className: "cursor-default !rounded-2xl border border-vermilion/25 bg-background/45 p-6 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full flex-col items-center gap-5 text-center sm:flex-row sm:text-left",
					children: [photoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photoPreview,
						alt: "आपकी तस्वीर",
						className: "size-24 shrink-0 rounded-2xl object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-24 shrink-0 place-items-center rounded-2xl bg-vermilion/10 text-vermilion",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, {
							className: "size-10",
							strokeWidth: 1.3,
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold",
							children: name || "आँगन सदस्य"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: registeringAs ? `${registeringAs} के रूप में पंजीकृत` : "पंजीकरण पूर्ण"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 inline-flex items-center gap-2 rounded-full bg-vermilion/12 px-4 py-1.5 text-xs font-bold text-vermilion",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-3.5",
								strokeWidth: 3,
								"aria-hidden": "true"
							}), " प्रोफ़ाइल तैयार"]
						})
					] })]
				})
			}), sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-primary/10 bg-background/55 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-xl font-semibold text-primary",
					children: section.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid gap-x-6 gap-y-2 sm:grid-cols-2",
					children: section.rows.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
							className: "text-muted-foreground",
							children: [label, ":"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: value ? "font-semibold text-primary" : "text-muted-foreground/70",
							children: value || notFilled
						})]
					}, label))
				})]
			}, section.title))]
		}) : null]
	});
}
//#endregion
export { RegistrationPage as component };
