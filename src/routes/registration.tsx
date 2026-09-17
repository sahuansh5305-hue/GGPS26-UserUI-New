import { useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, CircleCheck, Flower2, ImagePlus, Link, Loader2, Trash2 } from "lucide-react";
import { AanganBrand } from "@/components/aangan-brand";
import { GlassButton, GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import gurjarGaudLogo from "@/assets/ChatGPT Image Sep 16, 2026, 07_54_00 PM.png";

import {
  AmountField,
  ChoiceGroup,
  SearchableSelect,
  TextAreaField,
  TextField,
} from "@/components/registration/fields";
import {
  charanOptions,
  complexionOptions,
  heightFeetOptions,
  heightInchOptions,
  indianStates,
  naadiOptions,
  nakshatraList,
  rashiList,
  specialSituations,
  stepTitles,
} from "@/lib/registration-data";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "विवाह पंजीकरण — आँगन" },
      {
        name: "description",
        content: "आँगन पर अपनी वैवाहिक जानकारी चरण दर चरण भरकर अपना विवाह पंजीकरण पूरा कीजिए।",
      },
      { property: "og:title", content: "विवाह पंजीकरण — आँगन" },
      {
        property: "og:description",
        content: "व्यक्तिगत जानकारी, जन्म विवरण, परिवार, कुंडली और संपर्क — सब एक ही सरल पंजीकरण में।",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegistrationPage,
});

type FormState = {
  fullName: string;
  registeringAs: string;
  specialSituation: string;
  birthDate: string;
  heightFeet: string;
  heightInch: string;
  weight: string;
  complexion: string;

  birthTime: string;
  birthPlace: string;
  birthVillage: string;
  birthDistrict: string;
  birthState: string;

  education: string;
  occupation: string;
  income: string;
  incomeHidden: boolean;

  fatherName: string;
  fatherOccupation: string;
  fatherIncome: string;
  fatherIncomeHidden: boolean;
  motherName: string;

  kundliMatch: string;
  gotraSelf: string;
  gotraMaternal: string;
  rashi: string;
  nakshatra: string;
  charan: string;
  naadi: string;
  manglik: string;
  shani: string;

  address: string;
  city: string;
  district: string;
  state: string;
  pinCode: string;
  phone: string;
  mobileOne: string;
  mobileTwo: string;
};

const initialState: FormState = {
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
  mobileTwo: "",
};

const yesNo = ["हाँ", "नहीं"];
const notFilled = "नहीं भरा गया";

function validateStep(step: number, form: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};

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
    if (form.mobileTwo && !/^\d{10}$/.test(form.mobileTwo))
      errors.mobileTwo = "दूसरा मोबाइल नंबर १० अंकों का होना चाहिए।";
  }

  return errors;
}

function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string>("");
  const [confirmed, setConfirmed] = useState(false);
  const [confirmError, setConfirmError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jumpTo = (target: number) => {
    setErrors({});
    setStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePhoto = (file: File | undefined) => {
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1400);
  };

  const heightText =
    form.heightFeet || form.heightInch
      ? `${form.heightFeet || "०"} फीट ${form.heightInch || "०"} इंच`
      : notFilled;

  const sections = useMemo(
    () => [
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
          ["रंग / वर्ण", form.complexion],
        ] as const,
      },
      {
        title: "जन्म विवरण",
        step: 2,
        rows: [
          ["जन्म समय", form.birthTime],
          ["जन्म स्थान", form.birthPlace],
          ["गाँव / शहर", form.birthVillage],
          ["जिला", form.birthDistrict],
          ["राज्य", form.birthState],
        ] as const,
      },
      {
        title: "शिक्षा एवं व्यवसाय",
        step: 3,
        rows: [
          ["शैक्षणिक योग्यता", form.education],
          ["व्यवसाय", form.occupation],
          ["मासिक आय", form.incomeHidden ? "बताना नहीं चाहते" : form.income ? `₹ ${form.income}` : ""],
        ] as const,
      },
      {
        title: "परिवार",
        step: 4,
        rows: [
          ["पिता / अभिभावक का नाम", form.fatherName],
          ["पिता / अभिभावक का व्यवसाय", form.fatherOccupation],
          [
            "पिता / अभिभावक की मासिक आय",
            form.fatherIncomeHidden ? "बताना नहीं चाहते" : form.fatherIncome ? `₹ ${form.fatherIncome}` : "",
          ],
          ["माता का नाम", form.motherName],
        ] as const,
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
          ["शनि", form.shani],
        ] as const,
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
          ["मोबाइल नंबर २", form.mobileTwo],
        ] as const,
      },
      {
        title: "तस्वीर",
        step: 7,
        rows: [["तस्वीर", photoPreview ? photoName || "तस्वीर जोड़ी गई" : ""]] as const,
      },
    ],
    [form, heightText, photoName, photoPreview],
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-signup-pattern px-5 py-6 sm:px-8 sm:py-8">
      <GlassFilter />
      <div className="pointer-events-none absolute left-[-4rem] top-52 size-52 rounded-full border-[34px] border-vermilion/8" />
      <div className="pointer-events-none absolute bottom-[-5rem] right-[-3rem] text-marigold/15">
        <Flower2 className="size-64" strokeWidth={0.7} aria-hidden="true" />
      </div>

     <header
  className="
    relative
    z-20
    mx-auto
    w-full
    max-w-7xl
    px-0
    pt-0
    sm:px-2
  "
>
  <div className="relative min-h-[150px] w-full">

    {/* Logo - Top Left */}
    <div className="absolute left-0 top-0">
      <div
        className="
          inline-flex
          rounded-[24px]
          border
          border-primary/10
          bg-background/40
          p-1.5
          shadow-xl
          backdrop-blur-md
        "
      >
        <img
          src={gurjarGaudLogo}
          alt="श्री गुर्जर गौड़ ब्राह्मण नगर सभा, इन्दौर"
          className="
            h-24
            w-24
            rounded-[18px]
            object-contain
            sm:h-28
            sm:w-28
            lg:h-32
            lg:w-32
          "
        />
      </div>
    </div>

    {/* Center Header Content */}
    <div
      className="
        mx-auto
        w-full
        max-w-3xl
        px-28
        text-center
        sm:px-36
        lg:px-40
      "
    >
      {/* Mantra */}
      <p
        className="
          font-display
          text-sm
          font-semibold
          tracking-wide
          text-vermilion
          sm:text-base
          lg:text-lg
        "
      >
        ॥ ॐ तस्मै नमः गुरु गौतमायः ॥
      </p>

      {/* Organization */}
      <h1
        className="
          mt-2
          font-display
          text-lg
          font-bold
          leading-tight
          text-primary
          sm:text-xl
          lg:text-2xl
        "
      >
        श्री गुर्जर गौड़ ब्राह्मण नगर सभा (रजि.), इन्दौर
      </h1>

      {/* Event */}
      <p
        className="
          mt-2
          font-display
          text-base
          font-semibold
          leading-tight
          text-primary
          sm:text-lg
          lg:text-xl
        "
      >
        विवाह योग्य युवक-युवती परिचय सम्मेलन - 2026
      </p>
    </div>

    {/* Navigation - Top Right */}
    {/* <nav
      aria-label="मुख्य नेविगेशन"
      className="
        absolute
        right-0
        top-0
        flex
        items-center
        gap-1
        text-sm
        font-semibold
        sm:gap-2
      "
    >
      <Link
        to="/login"
        className="
          rounded-full
          px-3
          py-2
          text-primary
          transition
          hover:bg-primary/5
          sm:px-4
          sm:py-2.5
        "
      >
        प्रवेश
      </Link>

      <Link
        to="/signup"
        className="
          rounded-full
          border
          border-primary/20
          bg-background/40
          px-4
          py-2
          text-primary
          shadow-lg
          backdrop-blur-md
          transition
          hover:bg-background/60
          sm:px-5
          sm:py-2.5
        "
      >
        नया खाता
      </Link>
    </nav> */}

  </div>
</header>

      <section className="relative z-10 mx-auto flex max-w-4xl justify-center pb-14 pt-10 sm:pt-14">
        <GlassEffect className="w-full cursor-default !rounded-2xl border border-background/70 bg-background/35 p-5 text-primary shadow-soft sm:p-9 lg:p-11">
          <div className="w-full">
            {done ? (
              <SuccessScreen
                showProfile={showProfile}
                onShowProfile={() => setShowProfile(true)}
                name={form.fullName}
                registeringAs={form.registeringAs}
                sections={sections}
                photoPreview={photoPreview}
              />
            ) : (
              <>
                <div className="mb-8">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold text-vermilion">चरण {toHindi(step)} / ८</span>
                    <span className="text-sm text-muted-foreground">{stepTitles[step - 1]}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-primary/10">
                    <div
                      className="h-full rounded-full bg-vermilion transition-all duration-500"
                      style={{ width: `${(step / 8) * 100}%` }}
                    />
                  </div>
                </div>

                {step === 1 ? (
                  <StepShell heading="अपने बारे में बताइए">
                    <TextField
                      id="reg-name"
                      label="प्रत्याशी का पूरा नाम"
                      value={form.fullName}
                      onChange={(value) => set("fullName", value)}
                      placeholder="अपना पूरा नाम लिखें"
                      error={errors.fullName}
                    />
                    <ChoiceGroup
                      label="आप किस रूप में पंजीकरण कर रहे हैं?"
                      options={["वर", "वधू"]}
                      value={form.registeringAs}
                      onChange={(value) => set("registeringAs", value)}
                      error={errors.registeringAs}
                      columns="grid-cols-2"
                    />
                    <ChoiceGroup
                      label="विशेष परिस्थिति"
                      options={specialSituations}
                      value={form.specialSituation}
                      onChange={(value) => set("specialSituation", value)}
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <TextField
                        id="reg-dob"
                        label="जन्म दिनांक"
                        type="date"
                        value={form.birthDate}
                        onChange={(value) => set("birthDate", value)}
                        error={errors.birthDate}
                      />
                      <TextField
                        id="reg-weight"
                        label="वजन (किलोग्राम)"
                        value={form.weight}
                        inputMode="numeric"
                        onChange={(value) => set("weight", value.replace(/\D/g, ""))}
                        placeholder="वजन किलोग्राम में लिखें"
                        error={errors.weight}
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <SearchableSelect
                        id="reg-feet"
                        label="ऊँचाई (फीट)"
                        options={heightFeetOptions}
                        value={form.heightFeet}
                        onChange={(value) => set("heightFeet", value)}
                        placeholder="फीट चुनें"
                      />
                      <SearchableSelect
                        id="reg-inch"
                        label="ऊँचाई (इंच)"
                        options={heightInchOptions}
                        value={form.heightInch}
                        onChange={(value) => set("heightInch", value)}
                        placeholder="इंच चुनें"
                      />
                    </div>
                    <ChoiceGroup
                      label="रंग / वर्ण"
                      options={complexionOptions}
                      value={form.complexion}
                      onChange={(value) => set("complexion", value)}
                      columns="grid-cols-3"
                    />
                    <StepNav onNext={goNext} />
                  </StepShell>
                ) : null}

                {step === 2 ? (
                  <StepShell heading="जन्म से जुड़ी जानकारी">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <TextField
                        id="reg-birth-time"
                        label="जन्म समय"
                        type="time"
                        value={form.birthTime}
                        onChange={(value) => set("birthTime", value)}
                      />
                      <TextField
                        id="reg-birth-place"
                        label="जन्म स्थान"
                        value={form.birthPlace}
                        onChange={(value) => set("birthPlace", value)}
                        placeholder="जन्म स्थान लिखें"
                        error={errors.birthPlace}
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <TextField
                        id="reg-birth-village"
                        label="गाँव / शहर"
                        value={form.birthVillage}
                        onChange={(value) => set("birthVillage", value)}
                        placeholder="गाँव या शहर का नाम"
                      />
                      <TextField
                        id="reg-birth-district"
                        label="जिला"
                        value={form.birthDistrict}
                        onChange={(value) => set("birthDistrict", value)}
                        placeholder="जिले का नाम"
                      />
                    </div>
                    <SearchableSelect
                      id="reg-birth-state"
                      label="राज्य"
                      options={indianStates}
                      value={form.birthState}
                      onChange={(value) => set("birthState", value)}
                      placeholder="राज्य खोजें या चुनें"
                      error={errors.birthState}
                    />
                    <StepNav onBack={goBack} onNext={goNext} />
                  </StepShell>
                ) : null}

                {step === 3 ? (
                  <StepShell heading="शिक्षा और व्यवसाय">
                    <TextField
                      id="reg-education"
                      label="शैक्षणिक योग्यता"
                      value={form.education}
                      onChange={(value) => set("education", value)}
                      placeholder="अपनी उच्चतम शैक्षणिक योग्यता लिखें"
                      error={errors.education}
                    />
                    <TextField
                      id="reg-occupation"
                      label="प्रत्याशी का व्यवसाय"
                      value={form.occupation}
                      onChange={(value) => set("occupation", value)}
                      placeholder="अपना व्यवसाय लिखें"
                      error={errors.occupation}
                    />
                    <AmountField
                      id="reg-income"
                      label="मासिक आय"
                      value={form.income}
                      onChange={(value) => set("income", value)}
                      hidden={form.incomeHidden}
                      onHiddenChange={(value) => {
                        set("incomeHidden", value);
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next.income;
                          return next;
                        });
                      }}
                      error={errors.income}
                    />
                    <StepNav onBack={goBack} onNext={goNext} />
                  </StepShell>
                ) : null}

                {step === 4 ? (
                  <StepShell heading="परिवार के बारे में बताइए">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <TextField
                        id="reg-father"
                        label="पिता / अभिभावक का नाम"
                        value={form.fatherName}
                        onChange={(value) => set("fatherName", value)}
                        placeholder="पिता या अभिभावक का पूरा नाम"
                        error={errors.fatherName}
                      />
                      <TextField
                        id="reg-father-work"
                        label="पिता / अभिभावक का व्यवसाय"
                        value={form.fatherOccupation}
                        onChange={(value) => set("fatherOccupation", value)}
                        placeholder="व्यवसाय लिखें"
                      />
                    </div>
                    <AmountField
                      id="reg-father-income"
                      label="पिता / अभिभावक की मासिक आय"
                      value={form.fatherIncome}
                      onChange={(value) => set("fatherIncome", value)}
                      hidden={form.fatherIncomeHidden}
                      onHiddenChange={(value) => set("fatherIncomeHidden", value)}
                    />
                    <TextField
                      id="reg-mother"
                      label="माता का नाम"
                      value={form.motherName}
                      onChange={(value) => set("motherName", value)}
                      placeholder="माता का पूरा नाम"
                      error={errors.motherName}
                    />
                    <StepNav onBack={goBack} onNext={goNext} />
                  </StepShell>
                ) : null}

                {step === 5 ? (
                  <StepShell
                    heading="जन्म कुंडली की जानकारी"
                    support="यदि यह जानकारी उपलब्ध है, तो यहाँ भरें।"
                  >
                    <ChoiceGroup
                      label="कुंडली मिलान"
                      options={yesNo}
                      value={form.kundliMatch}
                      onChange={(value) => set("kundliMatch", value)}
                      columns="grid-cols-2"
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <TextField
                        id="reg-gotra-self"
                        label="गोत्र — स्वयं"
                        value={form.gotraSelf}
                        onChange={(value) => set("gotraSelf", value)}
                        placeholder="अपना गोत्र लिखें"
                      />
                      <TextField
                        id="reg-gotra-maternal"
                        label="गोत्र — ननिहाल / मामा"
                        value={form.gotraMaternal}
                        onChange={(value) => set("gotraMaternal", value)}
                        placeholder="ननिहाल का गोत्र लिखें"
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <SearchableSelect
                        id="reg-rashi"
                        label="राशि"
                        options={rashiList}
                        value={form.rashi}
                        onChange={(value) => set("rashi", value)}
                        placeholder="राशि खोजें या चुनें"
                      />
                      <SearchableSelect
                        id="reg-nakshatra"
                        label="नक्षत्र"
                        options={nakshatraList}
                        value={form.nakshatra}
                        onChange={(value) => set("nakshatra", value)}
                        placeholder="नक्षत्र खोजें या चुनें"
                      />
                    </div>
                    <ChoiceGroup
                      label="चरण"
                      options={charanOptions}
                      value={form.charan}
                      onChange={(value) => set("charan", value)}
                      columns="grid-cols-4"
                    />
                    <ChoiceGroup
                      label="नाड़ी"
                      options={naadiOptions}
                      value={form.naadi}
                      onChange={(value) => set("naadi", value)}
                      columns="grid-cols-3"
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <ChoiceGroup
                        label="मांगलिक"
                        options={yesNo}
                        value={form.manglik}
                        onChange={(value) => set("manglik", value)}
                        columns="grid-cols-2"
                      />
                      <ChoiceGroup
                        label="शनि"
                        options={yesNo}
                        value={form.shani}
                        onChange={(value) => set("shani", value)}
                        columns="grid-cols-2"
                      />
                    </div>
                    <StepNav onBack={goBack} onNext={goNext} />
                  </StepShell>
                ) : null}

                {step === 6 ? (
                  <StepShell heading="पता और संपर्क जानकारी">
                    <TextAreaField
                      id="reg-address"
                      label="पूरा पता"
                      value={form.address}
                      onChange={(value) => set("address", value)}
                      placeholder="अपना पूरा पता लिखें"
                      error={errors.address}
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <TextField
                        id="reg-city"
                        label="शहर / गाँव"
                        value={form.city}
                        onChange={(value) => set("city", value)}
                        placeholder="शहर या गाँव का नाम"
                        error={errors.city}
                      />
                      <TextField
                        id="reg-district"
                        label="जिला"
                        value={form.district}
                        onChange={(value) => set("district", value)}
                        placeholder="जिले का नाम"
                        error={errors.district}
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <SearchableSelect
                        id="reg-state"
                        label="राज्य"
                        options={indianStates}
                        value={form.state}
                        onChange={(value) => set("state", value)}
                        placeholder="राज्य खोजें या चुनें"
                        error={errors.state}
                      />
                      <TextField
                        id="reg-pin"
                        label="पिन कोड"
                        value={form.pinCode}
                        inputMode="numeric"
                        maxLength={6}
                        onChange={(value) => set("pinCode", value.replace(/\D/g, ""))}
                        placeholder="६ अंकों का पिन कोड"
                        error={errors.pinCode}
                      />
                    </div>
                    <TextField
                      id="reg-phone"
                      label="फोन नंबर"
                      value={form.phone}
                      inputMode="tel"
                      onChange={(value) => set("phone", value)}
                      placeholder="एस.टी.डी. कोड सहित फोन नंबर"
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <TextField
                        id="reg-mobile-1"
                        label="मोबाइल नंबर १"
                        value={form.mobileOne}
                        inputMode="numeric"
                        maxLength={10}
                        onChange={(value) => set("mobileOne", value.replace(/\D/g, ""))}
                        placeholder="अपना मोबाइल नंबर लिखें"
                        error={errors.mobileOne}
                      />
                      <TextField
                        id="reg-mobile-2"
                        label="मोबाइल नंबर २"
                        value={form.mobileTwo}
                        inputMode="numeric"
                        maxLength={10}
                        onChange={(value) => set("mobileTwo", value.replace(/\D/g, ""))}
                        placeholder="दूसरा मोबाइल नंबर (वैकल्पिक)"
                        error={errors.mobileTwo}
                      />
                    </div>
                    <StepNav onBack={goBack} onNext={goNext} />
                  </StepShell>
                ) : null}

                {step === 7 ? (
                  <StepShell
                    heading="अपनी तस्वीर जोड़ें"
                    support="एक साफ़ और हाल की तस्वीर जोड़ें, जिसमें आपका चेहरा स्पष्ट दिखाई दे।"
                  >
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(event) => handlePhoto(event.target.files?.[0])}
                    />
                    <div className="flex flex-col items-center gap-6 rounded-2xl border border-dashed border-vermilion/35 bg-background/40 p-6 sm:p-8">
                      {photoPreview ? (
                        <img
                          src={photoPreview}
                          alt="आपकी चुनी हुई तस्वीर"
                          className="size-44 rounded-2xl object-cover shadow-soft"
                        />
                      ) : (
                        <div className="grid size-44 place-items-center rounded-2xl bg-vermilion/10 text-vermilion">
                          <ImagePlus className="size-14" strokeWidth={1.3} aria-hidden="true" />
                        </div>
                      )}
                      <div className="flex flex-wrap justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => fileRef.current?.click()}
                          className="rounded-full bg-vermilion px-6 py-3 text-sm font-bold text-ivory transition-colors hover:bg-vermilion/90"
                        >
                          {photoPreview ? "तस्वीर बदलें" : "तस्वीर चुनें"}
                        </button>
                        {photoPreview ? (
                          <button
                            type="button"
                            onClick={() => {
                              setPhotoPreview(null);
                              setPhotoName("");
                              if (fileRef.current) fileRef.current.value = "";
                            }}
                            className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/5"
                          >
                            <Trash2 className="size-4" aria-hidden="true" /> तस्वीर हटाएँ
                          </button>
                        ) : null}
                      </div>
                      <p className="text-center text-sm text-muted-foreground">
                        तस्वीर जोड़ना वैकल्पिक है, आप बिना तस्वीर भी आगे बढ़ सकते हैं।
                      </p>
                    </div>
                    <StepNav onBack={goBack} onNext={goNext} />
                  </StepShell>
                ) : null}

                {step === 8 ? (
                  <StepShell
                    heading="अपनी जानकारी जाँचें"
                    support="पंजीकरण पूरा करने से पहले अपनी सभी जानकारी एक बार जाँच लें।"
                  >
                    <div className="space-y-4">
                      {sections.map((section) => (
                        <div
                          key={section.title}
                          className="rounded-2xl border border-primary/10 bg-background/55 p-5"
                        >
                          <div className="mb-3 flex items-center justify-between gap-3">
                            <h3 className="font-display text-xl font-semibold text-primary">{section.title}</h3>
                            <button
                              type="button"
                              onClick={() => jumpTo(section.step)}
                              className="rounded-full border border-vermilion/40 px-4 py-1.5 text-sm font-bold text-vermilion transition-colors hover:bg-vermilion/10"
                            >
                              बदलें
                            </button>
                          </div>
                          <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                            {section.rows.map(([label, value]) => (
                              <div key={label} className="flex flex-wrap items-baseline gap-2 text-sm">
                                <dt className="text-muted-foreground">{label}:</dt>
                                <dd className={value ? "font-semibold text-primary" : "text-muted-foreground/70"}>
                                  {value || notFilled}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      ))}
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-primary/10 bg-background/55 p-4 text-sm text-primary">
                      <input
                        type="checkbox"
                        checked={confirmed}
                        onChange={(event) => {
                          setConfirmed(event.target.checked);
                          setConfirmError("");
                        }}
                        className="mt-0.5 size-4 accent-[var(--vermilion)]"
                      />
                      <span>मैं पुष्टि करता / करती हूँ कि मेरे द्वारा दी गई जानकारी सही है।</span>
                    </label>
                    {confirmError ? (
                      <p role="alert" className="text-xs font-semibold text-destructive">
                        {confirmError}
                      </p>
                    ) : null}

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        onClick={goBack}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-primary/5"
                      >
                        <ArrowLeft className="size-4" aria-hidden="true" /> पीछे जाएँ
                      </button>
                      <button
                        type="button"
                        onClick={submit}
                        disabled={!confirmed || submitting}
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold text-ivory shadow-festive transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="size-5 animate-spin" aria-hidden="true" /> पंजीकरण हो रहा है…
                          </>
                        ) : (
                          <>
                            मेरा विवाह पंजीकरण पूरा करें <ArrowRight className="size-5" aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </div>
                  </StepShell>
                ) : null}
              </>
            )}
          </div>
        </GlassEffect>
      </section>
    </main>
  );
}

function toHindi(value: number) {
  const digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  return String(value)
    .split("")
    .map((digit) => digits[Number(digit)])
    .join("");
}

function StepShell({
  heading,
  support,
  children,
}: {
  heading: string;
  support?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-fade-in">
      <h1 className="font-display text-3xl font-semibold leading-tight text-primary sm:text-4xl">{heading}</h1>
      {support ? <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{support}</p> : null}
      <div className="mt-8 space-y-6">{children}</div>
    </div>
  );
}

function StepNav({ onBack, onNext }: { onBack?: () => void; onNext: () => void }) {
  return (
    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-primary/5"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> पीछे जाएँ
        </button>
      ) : (
        <span className="hidden sm:block" />
      )}
      <GlassButton
        onClick={onNext}
        className="justify-center !rounded-full !bg-primary !px-7 !py-4 text-ivory hover:!px-7 hover:!py-4"
      >
        <span className="flex items-center gap-3">
          आगे बढ़ें <ArrowRight className="size-5" aria-hidden="true" />
        </span>
      </GlassButton>
    </div>
  );
}

function SuccessScreen({
  showProfile,
  onShowProfile,
  name,
  registeringAs,
  sections,
  photoPreview,
}: {
  showProfile: boolean;
  onShowProfile: () => void;
  name: string;
  registeringAs: string;
  sections: ReadonlyArray<{ title: string; step: number; rows: ReadonlyArray<readonly [string, string]> }>;
  photoPreview: string | null;
}) {
  return (
    <div className="animate-fade-in">
      <div className="text-center">
        <CircleCheck className="mx-auto size-16 text-vermilion" strokeWidth={1.4} aria-hidden="true" />
        <h1 className="mt-5 font-display text-3xl font-semibold text-primary sm:text-4xl">
          आपका पंजीकरण पूरा हो गया है
        </h1>
        <p className="mt-3 leading-7 text-muted-foreground">
          आपकी वैवाहिक प्रोफ़ाइल सफलतापूर्वक तैयार हो गई है।
        </p>
        {!showProfile ? (
          <div className="mt-8 flex justify-center">
            <GlassButton
              onClick={onShowProfile}
              className="justify-center !rounded-full !bg-vermilion !px-7 !py-4 text-ivory hover:!px-7 hover:!py-4"
            >
              <span className="flex items-center gap-3">
                मेरी प्रोफ़ाइल देखें <ArrowRight className="size-5" aria-hidden="true" />
              </span>
            </GlassButton>
          </div>
        ) : null}
      </div>

      {showProfile ? (
        <div className="mt-9 space-y-4">
          <GlassEffect className="cursor-default !rounded-2xl border border-vermilion/25 bg-background/45 p-6 text-primary">
            <div className="flex w-full flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
              {photoPreview ? (
                <img
                  src={photoPreview}
                  alt="आपकी तस्वीर"
                  className="size-24 shrink-0 rounded-2xl object-cover"
                />
              ) : (
                <span className="grid size-24 shrink-0 place-items-center rounded-2xl bg-vermilion/10 text-vermilion">
                  <Flower2 className="size-10" strokeWidth={1.3} aria-hidden="true" />
                </span>
              )}
              <div>
                <p className="font-display text-2xl font-semibold">{name || "आँगन सदस्य"}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {registeringAs ? `${registeringAs} के रूप में पंजीकृत` : "पंजीकरण पूर्ण"}
                </p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-vermilion/12 px-4 py-1.5 text-xs font-bold text-vermilion">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" /> प्रोफ़ाइल तैयार
                </p>
              </div>
            </div>
          </GlassEffect>

          {sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-primary/10 bg-background/55 p-5">
              <h2 className="mb-3 font-display text-xl font-semibold text-primary">{section.title}</h2>
              <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {section.rows.map(([label, value]) => (
                  <div key={label} className="flex flex-wrap items-baseline gap-2 text-sm">
                    <dt className="text-muted-foreground">{label}:</dt>
                    <dd className={value ? "font-semibold text-primary" : "text-muted-foreground/70"}>
                      {value || notFilled}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
