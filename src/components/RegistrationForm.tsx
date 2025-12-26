import Cropper from "react-easy-crop";
import { useState, useEffect, FormEvent, useRef, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormField from "./FormField";
import { toast } from "@/hooks/use-toast";
import {
  User,
  Users,
  Heart,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Send,
  Ruler,
  Palette,
  Weight,
  GraduationCap,
  Briefcase,
  IndianRupee,
  Home,
  Phone,
  Plus,
  X,
  Star,
} from "lucide-react";

// Dropdown options
const NAKSHATRAS = [
  "अश्विनी",
  "भरणी",
  "कृत्तिका",
  "रोहिणी",
  "मृगशिरा",
  "आर्द्रा",
  "पुनर्वसु",
  "पुष्य",
  "आश्लेषा",
  "मघा",
  "पूर्वा फाल्गुनी",
  "उत्तर फाल्गुनी",
  "हस्त",
  "चित्रा",
  "स्वाती",
  "विशाखा",
  "अनुराधा",
  "ज्येष्ठा",
  "मूल",
  "पूर्वाषाढ़ा",
  "उत्तराषाढ़ा",
  "श्रवण",
  "धनिष्ठा",
  "शतभिषा",
  "पूर्वाभाद्रपद",
  "उत्तराभाद्रपद",
  "रेवती",
];

const CHARANS = ["प्रथम", "द्वितीय", "तृतीय", "चतुर्थ"];

const RASHIS = [
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
  "कुंभ",
  "मीन",
];

const NADIS = ["आदि", "मध्य", "अंत्य"];

const PARICHAY_OPTIONS = [
  { value: "युवक", label: "युवक" },
  { value: "युवती", label: "युवती" },
  { value: "विधवा", label: "विधवा" },
  { value: "विधुर", label: "विधुर" },
  { value: "परित्यक्ता", label: "परित्यक्ता" },
  { value: "विकलांग", label: "विकलांग" },
];

interface FormData {
  candidateName: string;
  fatherName: string;
  motherName: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  otherDetails: string;
  parichay: string;
  nakshatra: string;
  charan: string;
  rashi: string;
  nadi: string;
  manglik: string;
  patrikaRequired: string;
  height: string;
  complexion: string;
  weight: string;
  gotra: string;
  nanihal: string;
  education: string;
  occupation: string;
  monthlyIncome: string;
  fatherOccupation: string;
  fatherIncome: string;
  fullAddress: string;
  tehsil: string;
  district: string;
  candidateMobile: string;
  guardianMobileNumbers: string[];
  photo: File | null;
}

interface FormErrors {
  [key: string]: string | undefined;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    candidateName: "",
    fatherName: "",
    motherName: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    otherDetails: "",
    parichay: "",
    nakshatra: "",
    charan: "",
    rashi: "",
    nadi: "",
    manglik: "",
    patrikaRequired: "",
    height: "",
    complexion: "",
    weight: "",
    gotra: "",
    nanihal: "",
    education: "",
    occupation: "",
    monthlyIncome: "",
    fatherOccupation: "",
    fatherIncome: "",
    fullAddress: "",
    tehsil: "",
    district: "",
    candidateMobile: "",
    guardianMobileNumbers: [""],
    photo: null,
  });

  // Add these two lines for temporary UI state
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInch, setHeightInch] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [pincode, setPincode] = useState("");
  const [isFetchingPin, setIsFetchingPin] = useState(false);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [showCropModal, setShowCropModal] = useState(false);

  const [hindiSuggestions, setHindiSuggestions] = useState<string[]>([]);
  const [activeField, setActiveField] = useState<string | null>(null);

  const [isOtherOccupation, setIsOtherOccupation] = useState(false);
  const [isOtherFatherOccupation, setIsOtherFatherOccupation] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if text contains English characters
  const containsEnglish = (text: string): boolean => {
    return /[a-zA-Z]/.test(text);
  };

  // Check if text contains only Hindi/Devanagari characters (and spaces/punctuation)
  const isValidHindi = (text: string): boolean => {
    if (!text.trim()) return true;
    return /^[\u0900-\u097F\s\.\,\-\(\)०१२३४५६७८९]+$/.test(text);
  };

  // Check if valid mobile number
  const isValidMobile = (number: string): boolean => {
    if (!number.trim()) return true;
    return /^[0-9]{10}$/.test(number.trim());
  };

  const validateField = (
    name: string,
    value: string | string[]
  ): string | undefined => {
    // Handle guardian mobile numbers array
    if (name === "guardianMobileNumbers") {
      const numbers = value as string[];
      const hasValidNumber = numbers.some((n) => n.trim() !== "");
      if (!hasValidNumber) {
        return "कम से कम एक अभिभावक मोबाइल नंबर अनिवार्य है";
      }
      const invalidNumber = numbers.find((n) => n.trim() && !isValidMobile(n));
      if (invalidNumber) {
        return "कृपया मान्य मोबाइल नंबर दर्ज करें (10 अंक)";
      }
      return undefined;
    }

    // Handle candidate mobile (optional)
    if (name === "candidateMobile") {
      const strValue = value as string;
      if (strValue.trim() && !isValidMobile(strValue)) {
        return "कृपया मान्य मोबाइल नंबर दर्ज करें (10 अंक)";
      }
      return undefined;
    }

    const strValue = value as string;

    // Required check
    if (!strValue.trim()) {
      return "यह जानकारी अनिवार्य है";
    }

    // Fields that allow numbers
    const numericFields = [
      "birthDate",
      "birthTime",
      "monthlyIncome",
      "fatherIncome",
      "height",
      "weight",
    ];

    if (!numericFields.includes(name)) {
      // if (containsEnglish(strValue)) {
      //   return "कृपया केवल हिंदी में जानकारी भरें";
      // }
      // if (!isValidHindi(strValue)) {
      //   return "कृपया केवल हिंदी भाषा का प्रयोग करें";
      // }
    }

    return undefined;
  };

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setActiveField(name);

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));

    if (HINDI_TEXT_FIELDS.includes(name)) {
      const suggestions = await fetchHindiSuggestions(value);
      setHindiSuggestions(suggestions);
    } else {
      setHindiSuggestions([]);
    }
  };

  const HINDI_TEXT_FIELDS = [
    "candidateName",
    "fatherName",
    "motherName",
    "birthPlace",
    "otherDetails",
    "gotra",
    "nanihal",
    "education",
    "occupation",
    "fatherOccupation",
    "fullAddress",
    "tehsil",
    "district",
  ];

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleCandidateMobileChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, candidateMobile: numericValue }));
    const error = validateField("candidateMobile", numericValue);
    setErrors((prev) => ({ ...prev, candidateMobile: error }));
  };

  const handleGuardianMobileChange = (index: number, value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    const newNumbers = [...formData.guardianMobileNumbers];
    newNumbers[index] = numericValue;
    setFormData((prev) => ({ ...prev, guardianMobileNumbers: newNumbers }));

    const error = validateField("guardianMobileNumbers", newNumbers);
    setErrors((prev) => ({ ...prev, guardianMobileNumbers: error }));
  };

  const addGuardianMobileNumber = () => {
    if (formData.guardianMobileNumbers.length < 2) {
      setFormData((prev) => ({
        ...prev,
        guardianMobileNumbers: [...prev.guardianMobileNumbers, ""],
      }));
    }
  };

  const removeGuardianMobileNumber = (index: number) => {
    if (formData.guardianMobileNumbers.length > 1) {
      const newNumbers = formData.guardianMobileNumbers.filter(
        (_, i) => i !== index
      );
      setFormData((prev) => ({ ...prev, guardianMobileNumbers: newNumbers }));
    }
  };

  // When either field changes
  const handleHeightChange = (field: "feet" | "inch", value: string) => {
    // Update local state for display
    if (field === "feet") {
      setHeightFeet(value);
      // Combine and update formData
      const combined =
        value && heightInch
          ? `${value}'${heightInch}"`
          : value
          ? `${value}'`
          : heightInch
          ? `0'${heightInch}"`
          : "";
      setFormData((prev) => ({ ...prev, height: combined }));
    } else {
      setHeightInch(value);
      // Combine and update formData
      const combined =
        heightFeet && value
          ? `${heightFeet}'${value}"`
          : heightFeet
          ? `${heightFeet}'`
          : value
          ? `0'${value}"`
          : "";
      setFormData((prev) => ({ ...prev, height: combined }));
    }

    // Clear error when user types
    setErrors((prev) => ({ ...prev, height: undefined }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const requiredFields = [
      "candidateName",
      "fatherName",
      "birthDate",
      "birthTime",
      "birthPlace",
      "parichay",
      "rashi",
      "manglik",
      "patrikaRequired",
      "height",
      "complexion",
      "weight",
      "gotra",
      "nanihal",
      "education",
      "occupation",
      "monthlyIncome",
      "fullAddress",
      "guardianMobileNumbers",
    ];

    requiredFields.forEach((key) => {
      const error = validateField(
        key,
        formData[key as keyof FormData] as string
      );
      if (error) {
        newErrors[key] = error;
      }
    });

    console.log("Validating photo:", formData.photo);
    const photoError = validateImage(formData.photo);
    console.log("Photo error:", photoError);

    if (photoError) {
      newErrors.photo = photoError;
    }
    console.log("All errors:", newErrors); // ✅ ADD THIS LINE TOO

    // Validate guardian mobile numbers
    const guardianMobileError = validateField(
      "guardianMobileNumbers",
      formData.guardianMobileNumbers
    );
    if (guardianMobileError) {
      newErrors.guardianMobileNumbers = guardianMobileError;
    }

    // Validate candidate mobile (optional, but check format if provided)
    const candidateMobileError = validateField(
      "candidateMobile",
      formData.candidateMobile
    );
    if (candidateMobileError) {
      newErrors.candidateMobile = candidateMobileError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateImage = (file: File | null): string | undefined => {
    if (!file) return "प्रत्याशी की फोटो अनिवार्य है";

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      return "केवल JPG या PNG फोटो अपलोड करें";
    }

    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
      return "फोटो का आकार 2MB से कम होना चाहिए";
    }

    return undefined;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (key === "guardianMobileNumbers") {
          payload.append(key, JSON.stringify(value));
        } else if (key === "photo" && value instanceof File) {
          payload.append("photo", value);
        } else if (typeof value === "string") {
          payload.append(key, value);
        }
      });

      payload.append("height_feet", heightFeet);
      payload.append("height_inch", heightInch);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/matrimonial`,{
      // const res = await fetch(`http://localhost:3000/api/matrimonial`, {
        method: "POST",
        body: payload,
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Server response invalid");
      }

      if (!res.ok) {
        throw new Error(data?.message || "Submission failed");
      }

      // ✅ SUCCESS → RESET FORM
      setFormData({
        candidateName: "",
        fatherName: "",
        motherName: "",
        birthDate: "",
        birthTime: "",
        birthPlace: "",
        otherDetails: "",
        parichay: "",
        nakshatra: "",
        charan: "",
        rashi: "",
        nadi: "",
        manglik: "",
        patrikaRequired: "",
        height: "",
        complexion: "",
        weight: "",
        gotra: "",
        nanihal: "",
        education: "",
        occupation: "",
        monthlyIncome: "",
        fatherOccupation: "",
        fatherIncome: "",
        fullAddress: "",
        tehsil: "",
        district: "",
        candidateMobile: "",
        guardianMobileNumbers: [""],
        photo: null,
      });

      setHeightFeet("");
      setHeightInch("");
      setErrors({});

      // ✅ ADD THESE LINES - Reset all image-related states
      setImageSrc(null);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedAreaPixels(null);
      setShowCropModal(false);

      // ✅ RESET FILE INPUT
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 5000);

      // toast({
      //   title: "सफल",
      //   description: "आपकी प्रविष्टि सफलता पूर्वक प्राप्त हो गई है धन्यवाद!",
      // });
    } catch (err: any) {
      toast({
        title: "त्रुटि",
        description: err.message || "डेटा सेव नहीं हुआ",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // const fetchAddressFromPincode = async (pin: string) => {
  //   if (pin.length !== 6) return;

  //   try {
  //     setIsFetchingPin(true);

  //     const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
  //     const data = await res.json();

  //     if (data[0]?.Status === "Success") {
  //       const postOffice = data[0].PostOffice[0];

  //       setFormData((prev) => ({
  //         ...prev,
  //         district: postOffice.District || "",
  //         tehsil: postOffice.Block || "",
  //       }));

  //       // ✅ Clear errors when auto-filled
  //       setErrors((prev) => ({
  //         ...prev,
  //         district: undefined,
  //         tehsil: undefined,
  //       }));
  //     }
  //   } catch (err) {
  //     console.error("Pincode fetch failed", err);
  //   } finally {
  //     setIsFetchingPin(false);
  //   }
  // };

  useEffect(() => {
    console.log("Photo state changed:", formData.photo);
  }, [formData.photo]);

  const getCroppedImg = async (imageSrc: string, crop: any): Promise<File> => {
    const image = new Image();
    image.src = imageSrc;

    await new Promise((resolve) => {
      image.onload = resolve;
    });

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(new File([blob!], "profile.jpg", { type: "image/jpeg" }));
      }, "image/jpeg");
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result as string);
      setShowCropModal(true);

      // ✅ Clear error when user selects an image
      setErrors((prev) => ({ ...prev, photo: undefined }));
    };
    reader.readAsDataURL(file);
  };
  const onCropComplete = (_: any, croppedPixels: any) => {
    setCroppedAreaPixels(croppedPixels);
  };

  const saveCroppedImage = async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    const croppedFile = await getCroppedImg(imageSrc, croppedAreaPixels);

    console.log("Cropped file:", croppedFile);
    console.log("File type:", croppedFile.type);
    console.log("File size:", croppedFile.size);

    // ✅ Use callback form to ensure we're working with latest state
    setFormData((prev) => {
      console.log("Previous photo:", prev.photo);
      const newData = { ...prev, photo: croppedFile };
      console.log("New photo:", newData.photo);
      return newData;
    });

    setErrors((prev) => ({ ...prev, photo: undefined }));
    setShowCropModal(false);
    setImageSrc(null); // ✅ Clear the image source too
  };

  // 🔤 Google Hindi Transliteration Helper
  // 🔤 Google Hindi Transliteration Helper
  // 🔤 Google Hindi Transliteration Helper
  // 🔤 Google Hindi Transliteration Helper (for suggestions as user types)
  const fetchHindiSuggestions = async (text: string): Promise<string[]> => {
    if (!text.trim()) return [];

    try {
      // Split by comma to handle multiple parts
      const parts = text
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean);

      if (parts.length === 0) return [];

      // If only one part (no comma), use simple transliteration
      if (parts.length === 1) {
        const res = await fetch(
          `https://inputtools.google.com/request?itc=hi-t-i0-und&num=5&text=${encodeURIComponent(
            text
          )}`
        );
        const data = await res.json();

        if (data[0] === "SUCCESS") {
          return data[1][0][1];
        }
      } else {
        // Multiple parts - transliterate each part separately
        const transliteratedParts: string[][] = [];

        for (const part of parts) {
          const res = await fetch(
            `https://inputtools.google.com/request?itc=hi-t-i0-und&num=5&text=${encodeURIComponent(
              part
            )}`
          );
          const data = await res.json();

          if (data[0] === "SUCCESS") {
            transliteratedParts.push(data[1][0][1]);
          } else {
            transliteratedParts.push([part]); // Keep original if transliteration fails
          }
        }

        // Combine all parts with commas
        const combined: string[] = [];
        const maxSuggestions = Math.max(
          ...transliteratedParts.map((p) => p.length)
        );

        for (let i = 0; i < Math.min(maxSuggestions, 5); i++) {
          const suggestion = transliteratedParts
            .map((partSuggestions) => partSuggestions[i] || partSuggestions[0])
            .join(", ");
          combined.push(suggestion);
        }

        return combined;
      }
    } catch (err) {
      console.error("Hindi transliteration error", err);
    }

    return [];
  };

  // Helper function to transliterate English text to Hindi (for pincode auto-fill)
  const transliterateToHindi = async (text: string): Promise<string> => {
    if (!text.trim()) return "";

    try {
      const res = await fetch(
        `https://inputtools.google.com/request?itc=hi-t-i0-und&num=1&text=${encodeURIComponent(
          text
        )}`
      );
      const data = await res.json();

      if (data[0] === "SUCCESS" && data[1]?.[0]?.[1]?.[0]) {
        return data[1][0][1][0]; // Return first suggestion
      }
    } catch (err) {
      console.error("Transliteration error", err);
    }

    return text; // Return original if transliteration fails
  };

  const fetchAddressFromPincode = async (pin: string) => {
    if (pin.length !== 6) return;

    try {
      setIsFetchingPin(true);

      const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
      const data = await res.json();

      if (data[0]?.Status === "Success") {
        const postOffice = data[0].PostOffice[0];
        const districtEnglish = postOffice.District || "";
        const tehsilEnglish = postOffice.Block || "";

        // Transliterate to Hindi
        const districtHindi = await transliterateToHindi(districtEnglish);
        const tehsilHindi = await transliterateToHindi(tehsilEnglish);

        setFormData((prev) => ({
          ...prev,
          district: districtHindi || districtEnglish,
          tehsil: tehsilHindi || tehsilEnglish,
        }));

        // Clear errors when auto-filled
        setErrors((prev) => ({
          ...prev,
          district: undefined,
          tehsil: undefined,
        }));
      }
    } catch (err) {
      console.error("Pincode fetch failed", err);
    } finally {
      setIsFetchingPin(false);
    }
  };

  const HindiSuggestionBox = ({ field }: { field: string }) => {
    if (activeField !== field || hindiSuggestions.length === 0) return null;

    return (
      <ul className="absolute z-50 w-full bg-white border rounded shadow mt-1 max-h-40 overflow-auto">
        {hindiSuggestions.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setFormData((prev) => ({ ...prev, [field]: item }));
              setHindiSuggestions([]);
            }}
            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="space-y-8 animate-fade-in animation-delay-200 animate-fade-in animation-delay-200"
      >
        {/* Form title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
            प्रत्याशी पंजीकरण फॉर्म
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Section: परिचय */}
          <div className="lg:col-span-8 space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20">
            {/* <h4 className="text-lg font-semibold text-maroon flex items-center gap-2">
            <Star className="w-5 h-5" />
            परिचय
          </h4> */}

            <FormField label="परिचय" error={errors.parichay} required user>
              <RadioGroup
                value={formData.parichay}
                onValueChange={(value) => handleSelectChange("parichay", value)}
                className="grid md:grid-cols-2 sm:grid-cols-3 gap-y-10"
              >
                {PARICHAY_OPTIONS.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="border-maroon text-maroon"
                    />
                    <Label
                      htmlFor={option.value}
                      className="text-foreground cursor-pointer"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormField>
          </div>

          {/* Section: प्रत्याशी की फोटो */}
          <div className="lg:col-span-4 space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20 flex flex-col items-center">
            <FormField
              label="प्रत्याशी की फोटो"
              error={errors.photo}
              required
              user
            >
              <label
                className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48
         flex items-center justify-center rounded-xl
         border-2 border-dashed border-maroon cursor-pointer"
              >
                <Input
                  ref={fileInputRef} // ✅ ADD THIS REF
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />

                {!formData.photo ? (
                  <User className="w-12 h-12 text-maroon/50" />
                ) : (
                  <img
                    src={URL.createObjectURL(formData.photo)}
                    className="w-full h-full rounded-xl object-cover"
                  />
                )}
              </label>
            </FormField>
            <div className="flex">
              <h4 className="text-lg font-semibold text-maroon flex items-center gap-2">
                फोटो अपलोड करें
              </h4>
              <span className="text-destructive ml-1">*</span>
            </div>
          </div>
        </div>

        {/* Section: व्यक्तिगत विवरण */}
        <div className="space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20">
          <h4 className="text-lg font-semibold text-maroon flex items-center gap-2">
            <User className="w-5 h-5" />
            व्यक्तिगत विवरण
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label="प्रत्याशी का नाम"
              error={errors.candidateName}
              required
            >
              <div className="relative">
                <Input
                  name="candidateName"
                  value={formData.candidateName}
                  onChange={handleChange}
                  placeholder="सुमित शर्मा"
                />
                <HindiSuggestionBox field="candidateName" />
              </div>
            </FormField>

            <FormField label="पिता का नाम" error={errors.fatherName} required>
              <div className="relative">
                <Input
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="महेश शर्मा"
                />
                <HindiSuggestionBox field="fatherName" />
              </div>
            </FormField>

            <FormField label="माता का नाम" error={errors.motherName}>
              <div className="relative">
                <Input
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  placeholder="सुनीता शर्मा"
                />
                <HindiSuggestionBox field="motherName" />
              </div>
            </FormField>
          </div>
        </div>

        {/* Success Modal - Add this before the last closing </div> */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl animate-in zoom-in duration-300">
              <div className="text-center space-y-4">
                {/* Success Icon */}
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-green-600">सफल</h3>

                {/* Description */}
                <p className="text-lg text-gray-700">
                  आपकी प्रविष्टि सफलता पूर्वक प्राप्त हो गई है धन्यवाद!
                </p>

                {/* Optional: Close Button */}
                <Button
                  onClick={() => setShowSuccessModal(false)}
                  className="mt-4"
                  variant="outline"
                >
                  बंद करें
                </Button>
              </div>
            </div>
          </div>
        )}

        {showCropModal && (
          <div className="fixed inset-0 z-50 items-start bg-black/70 flex justify-center">
            <div className="bg-white rounded-xl w-[90vw] max-w-md p-4 space-y-4">
              <h4 className="text-lg font-semibold text-center">
                फोटो क्रॉप करें
              </h4>

              <div className="relative w-full h-64 bg-black">
                <Cropper
                  image={imageSrc!}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>

              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(+e.target.value)}
              />

              <div className="flex justify-between">
                <Button
                  type="button" // ✅ Add this
                  variant="outline"
                  onClick={() => setShowCropModal(false)}
                >
                  रद्द करें
                </Button>
                <Button
                  type="button" // ✅ Add this
                  onClick={saveCroppedImage}
                >
                  सेव करें
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Section: जन्म विवरण */}
        <div className="space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20">
          <h4 className="text-lg font-semibold text-maroon flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            जन्म विवरण
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FormField label="जन्म दिनांक" error={errors.birthDate} required>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10" />
                <Input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="pl-11"
                />
              </div>
            </FormField>

            <FormField label="जन्म समय" error={errors.birthTime} required>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10" />
                <Input
                  type="time"
                  name="birthTime"
                  value={formData.birthTime}
                  onChange={handleChange}
                  className="pl-11"
                />
              </div>
            </FormField>

            <FormField label="जन्म स्थान" error={errors.birthPlace} required>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <div className="relative">
                  <Input
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleChange}
                    placeholder="देवास, मध्य प्रदेश"
                  />
                  <HindiSuggestionBox field="birthPlace" />
                </div>
              </div>
            </FormField>
          </div>
        </div>

        {/* Section: कुंडली विवरण */}
        <div className="space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20">
          <h4 className="text-lg font-semibold text-maroon flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            कुंडली विवरण
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FormField label="नक्षत्र" error={errors.nakshatra}>
              <Select
                value={formData.nakshatra}
                onValueChange={(value) =>
                  handleSelectChange("nakshatra", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="नक्षत्र चुनें" />
                </SelectTrigger>
                <SelectContent>
                  {NAKSHATRAS.map((nakshatra) => (
                    <SelectItem key={nakshatra} value={nakshatra}>
                      {nakshatra}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="चरण" error={errors.charan}>
              <Select
                value={formData.charan}
                onValueChange={(value) => handleSelectChange("charan", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="चरण चुनें" />
                </SelectTrigger>
                <SelectContent>
                  {CHARANS.map((charan) => (
                    <SelectItem key={charan} value={charan}>
                      {charan}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="राशि" error={errors.rashi} required>
              <Select
                value={formData.rashi}
                onValueChange={(value) => handleSelectChange("rashi", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="राशि चुनें" />
                </SelectTrigger>
                <SelectContent>
                  {RASHIS.map((rashi) => (
                    <SelectItem key={rashi} value={rashi}>
                      {rashi}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="नाड़ी" error={errors.nadi}>
              <Select
                value={formData.nadi}
                onValueChange={(value) => handleSelectChange("nadi", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="नाड़ी चुनें" />
                </SelectTrigger>
                <SelectContent>
                  {NADIS.map((nadi) => (
                    <SelectItem key={nadi} value={nadi}>
                      {nadi}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="मांगलिक" error={errors.manglik} required>
              <RadioGroup
                value={formData.manglik}
                onValueChange={(value) => handleSelectChange("manglik", value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="हाँ"
                    id="manglik-yes"
                    className="border-maroon text-maroon"
                  />
                  <Label htmlFor="manglik-yes" className="cursor-pointer">
                    हाँ
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="नहीं"
                    id="manglik-no"
                    className="border-maroon text-maroon"
                  />
                  <Label htmlFor="manglik-no" className="cursor-pointer">
                    नहीं
                  </Label>
                </div>
              </RadioGroup>
            </FormField>

            <FormField
              label="पत्रिका मिलान आवश्यक है?"
              error={errors.patrikaRequired}
              required
            >
              <RadioGroup
                value={formData.patrikaRequired}
                onValueChange={(value) =>
                  handleSelectChange("patrikaRequired", value)
                }
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="हाँ"
                    id="patrika-yes"
                    className="border-maroon text-maroon"
                  />
                  <Label htmlFor="patrika-yes" className="cursor-pointer">
                    हाँ
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="नहीं"
                    id="patrika-no"
                    className="border-maroon text-maroon"
                  />
                  <Label htmlFor="patrika-no" className="cursor-pointer">
                    नहीं
                  </Label>
                </div>
              </RadioGroup>
            </FormField>
          </div>
        </div>

        {/* Section: गोत्र एवं ननिहाल */}
        <div className="space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20">
          <h4 className="text-lg font-semibold text-maroon flex items-center gap-2">
            <Users className="w-5 h-5" />
            गोत्र(स्वयं एवं ननिहाल)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="स्वयं" error={errors.gotra} required>
              <div className="relative">
                <Input
                  name="gotra"
                  value={formData.gotra}
                  onChange={handleChange}
                  placeholder="कश्यप"
                />
                <HindiSuggestionBox field="gotra" />
              </div>
            </FormField>

            <FormField label="ननिहाल" error={errors.nanihal} required>
              <div className="relative">
                <Input
                  name="nanihal"
                  value={formData.nanihal}
                  onChange={handleChange}
                  placeholder="भारद्वाज"
                />
                <HindiSuggestionBox field="nanihal" />
              </div>
            </FormField>
          </div>
        </div>

        {/* Section: शारीरिक विवरण */}
        <div className="space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20">
          <h4 className="text-lg font-semibold text-maroon flex items-center gap-2">
            <Ruler className="w-5 h-5" />
            शारीरिक विवरण
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField label="ऊँचाई" error={errors.height} required>
              <div className="grid grid-cols-2 gap-4">
                {/* Feet */}
                <div className="relative">
                  <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="number"
                    name="heightFeet"
                    min={1}
                    max={8}
                    value={heightFeet}
                    onChange={(e) => handleHeightChange("feet", e.target.value)}
                    placeholder="फीट"
                    className="pl-11"
                  />
                </div>

                {/* Inch */}
                <div className="relative">
                  <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="number"
                    name="heightInch"
                    min={0}
                    max={11}
                    value={heightInch}
                    onChange={(e) => handleHeightChange("inch", e.target.value)}
                    placeholder="इंच"
                    className="pl-11"
                  />
                </div>
              </div>
            </FormField>
            <FormField label="रंग" error={errors.complexion} required>
              <div className="relative">
                <Palette className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground z-10" />

                <Select
                  value={formData.complexion}
                  onValueChange={(value) => {
                    setFormData({ ...formData, complexion: value });
                    setErrors((prev) => ({ ...prev, complexion: undefined }));
                  }}
                >
                  <SelectTrigger className="pl-11">
                    <SelectValue placeholder="चयन करें" />
                  </SelectTrigger>

                  {/* dropdown ALWAYS opens below */}
                  <SelectContent side="bottom" align="start">
                    <SelectItem value="गोरा">गौर</SelectItem>
                    <SelectItem value="गेहुआ">गेहुआ</SelectItem>
                    <SelectItem value="सांवला">सांवला</SelectItem>
                    <SelectItem value="श्याम">श्याम</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </FormField>

            <FormField label="वजन (किलोग्राम)" error={errors.weight} required>
              <div className="relative">
                <Weight className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                <Input
                  name="weight"
                  type="number"
                  min={0} // 🔒 arrow se minus nahi jayega
                  step={1}
                  value={formData.weight}
                  placeholder="65"
                  className="pl-11"
                  onChange={(e) => {
                    const val = e.target.value;

                    // 🔒 manual typing / paste se bhi minus block
                    if (val === "" || Number(val) >= 0) {
                      handleChange(e);
                    }
                  }}
                  onKeyDown={(e) => {
                    // 🔒 "-" key completely disable
                    if (e.key === "-" || e.key === "e") {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
            </FormField>
          </div>
        </div>

        {/* Section: शिक्षा एवं व्यवसाय */}
        <div className="space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20">
          <h4 className="text-lg font-semibold text-maroon flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            शैक्षणिक योग्यता एवं व्यवसाय
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              label="शैक्षणिक योग्यता"
              error={errors.education}
              required
            >
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <div className="relative">
                  <Input
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    placeholder="स्नातक"
                  />
                  <HindiSuggestionBox field="education" />
                </div>
              </div>
            </FormField>

            <FormField label="व्यवसाय" error={errors.occupation} required>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground z-10" />

                {isOtherOccupation ? (
                  /* ✏️ SAME FIELD – USER TYPES HERE */
                  <div className="relative">
                    <Input
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="अपना व्यवसाय लिखें"
                      className="pl-11 text-black"
                      autoFocus
                    />
                    <HindiSuggestionBox field="occupation" />

                    <button
                      type="button"
                      onClick={() => {
                        setIsOtherOccupation(false);
                        setFormData({ ...formData, occupation: "" });
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-maroon hover:underline"
                    >
                      बदलें
                    </button>
                  </div>
                ) : (
                  /* 🔽 DROPDOWN MODE */
                  <Select
                    value={formData.occupation}
                    onValueChange={(value) => {
                      if (value === "अन्य") {
                        // 🔥 CORE REQUIREMENT
                        setIsOtherOccupation(true);
                        setFormData({ ...formData, occupation: "" });
                      } else {
                        setFormData({ ...formData, occupation: value });
                      }
                      setErrors((prev) => ({ ...prev, occupation: undefined }));
                    }}
                  >
                    <SelectTrigger className="pl-11">
                      <SelectValue placeholder="चयन करें" />
                    </SelectTrigger>

                    <SelectContent side="bottom" align="start">
                      <SelectItem value="नौकरी">नौकरी (प्राइवेट)</SelectItem>
                      <SelectItem value="सरकारी नौकरी">सरकारी नौकरी</SelectItem>
                      <SelectItem value="व्यवसाय">व्यवसाय</SelectItem>
                      <SelectItem value="छात्र">अध्ययनरत</SelectItem>
                      <SelectItem value="स्वरोज़गार">स्वरोज़गार</SelectItem>
                      <SelectItem value="कृषि">कृषि / किसान</SelectItem>
                      <SelectItem value="पशुपालन">पशुपालन</SelectItem>
                      <SelectItem value="दुकान">दुकान / व्यापार</SelectItem>
                      <SelectItem value="उद्योग">उद्योग</SelectItem>
                      <SelectItem value="ठेका कार्य">ठेका कार्य</SelectItem>
                      <SelectItem value="शिक्षक">शिक्षक</SelectItem>
                      <SelectItem value="प्रोफेसर">प्रोफेसर</SelectItem>
                      <SelectItem value="इंजीनियर">इंजीनियर</SelectItem>
                      <SelectItem value="डॉक्टर">डॉक्टर</SelectItem>
                      <SelectItem value="पंडिताई">पंडिताई</SelectItem>
                      <SelectItem value="नर्स">नर्स</SelectItem>
                      <SelectItem value="आईटी प्रोफेशनल">
                        आईटी प्रोफेशनल
                      </SelectItem>
                      <SelectItem value="फ्रीलांसर">फ्रीलांसर</SelectItem>
                      <SelectItem value="कंसल्टेंट">कंसल्टेंट</SelectItem>
                      <SelectItem value="अन्य">अन्य</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </FormField>
            <FormField label="मासिक आय" error={errors.monthlyIncome}>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                <Input
                  name="monthlyIncome"
                  type="text" // ✅ number → text
                  inputMode="numeric" // ✅ mobile numeric keypad
                  pattern="[0-9]*" // ✅ digits only
                  value={formData.monthlyIncome}
                  placeholder="40000"
                  className="pl-11"
                  onChange={(e) => {
                    const value = e.target.value;

                    // ✅ allow only digits (no minus, no dot, no e)
                    if (/^\d*$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  onKeyDown={(e) => {
                    // ✅ hard block minus, e, dot
                    if (["-", "e", ".", "+"].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
            </FormField>
          </div>
        </div>

        {/* Section: अभिभावक / पिता का विवरण */}
        <div className="space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20">
          <h4 className="text-lg font-semibold text-maroon flex items-center gap-2">
            <Users className="w-5 h-5" />
            अभिभावक / पिता का विवरण
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="व्यवसाय" error={errors.fatherOccupation}>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground z-10" />

                {isOtherFatherOccupation ? (
                  /* ✏️ SAME FIELD – INPUT MODE */
                  <div className="relative">
                    <Input
                      name="fatherOccupation"
                      value={formData.fatherOccupation}
                      onChange={handleChange}
                      placeholder="पिता का व्यवसाय लिखें"
                      className="pl-11 text-black"
                      autoFocus
                    />

                    {/* ✅ Hindi Suggestions */}
                    <HindiSuggestionBox field="fatherOccupation" />

                    <button
                      type="button"
                      onClick={() => {
                        setIsOtherFatherOccupation(false);
                        setFormData({ ...formData, fatherOccupation: "" });
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-maroon hover:underline"
                    >
                      बदलें
                    </button>
                  </div>
                ) : (
                  /* 🔽 SELECT MODE */
                  <Select
                    value={formData.fatherOccupation}
                    onValueChange={(value) => {
                      if (value === "अन्य") {
                        // 🔥 REQUIRED BEHAVIOR
                        setIsOtherFatherOccupation(true);
                        setFormData({ ...formData, fatherOccupation: "" });
                      } else {
                        setFormData({ ...formData, fatherOccupation: value });
                      }

                      setErrors((prev) => ({
                        ...prev,
                        fatherOccupation: undefined,
                      }));
                    }}
                  >
                    <SelectTrigger className="pl-11">
                      <SelectValue placeholder="चयन करें" />
                    </SelectTrigger>

                    <SelectContent side="bottom" align="start">
                      <SelectItem value="नौकरी">नौकरी (प्राइवेट)</SelectItem>
                      <SelectItem value="सरकारी नौकरी">सरकारी नौकरी</SelectItem>
                      <SelectItem value="सेवानिवृत्त">सेवानिवृत्त</SelectItem>
                      <SelectItem value="व्यवसाय">व्यवसाय</SelectItem>
                      <SelectItem value="स्वरोज़गार">स्वरोज़गार</SelectItem>
                      <SelectItem value="कृषि">कृषि / किसान</SelectItem>
                      <SelectItem value="पशुपालन">पशुपालन</SelectItem>
                      <SelectItem value="दुकान">दुकान / व्यापार</SelectItem>
                      <SelectItem value="उद्योग">उद्योग</SelectItem>
                      <SelectItem value="ठेका कार्य">ठेका कार्य</SelectItem>
                      <SelectItem value="शिक्षक">शिक्षक</SelectItem>
                      <SelectItem value="प्रोफेसर">प्रोफेसर</SelectItem>
                      <SelectItem value="इंजीनियर">इंजीनियर</SelectItem>
                      <SelectItem value="डॉक्टर">डॉक्टर</SelectItem>
                      <SelectItem value="पंडिताई">पंडिताई</SelectItem>
                      <SelectItem value="नर्स">नर्स</SelectItem>
                      <SelectItem value="आईटी प्रोफेशनल">
                        आईटी प्रोफेशनल
                      </SelectItem>
                      <SelectItem value="फ्रीलांसर">फ्रीलांसर</SelectItem>
                      <SelectItem value="अन्य">अन्य</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </FormField>

            <FormField label="मासिक आय" error={errors.fatherIncome}>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  name="fatherIncome"
                  inputMode="numeric" // ✅ mobile numeric keypad
                  pattern="[0-9]*" // ✅ digits only
                  value={formData.fatherIncome}
                  placeholder="40000"
                  className="pl-11"
                  onChange={(e) => {
                    const value = e.target.value;

                    // ✅ allow only digits (no minus, no dot, no e)
                    if (/^\d*$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  onKeyDown={(e) => {
                    // ✅ hard block minus, e, dot
                    if (["-", "e", ".", "+"].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
            </FormField>
          </div>
        </div>

        {/* Section: पता विवरण */}
        <div className="space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20">
          <h4 className="text-lg font-semibold text-maroon flex items-center gap-2">
            <Home className="w-5 h-5" />
            पता विवरण
          </h4>

          {/* Full Address */}
          <FormField label="पूर्ण पता" error={errors.fullAddress} required>
            <div className="relative">
              <Textarea
                name="fullAddress"
                value={formData.fullAddress}
                rows={1}
                placeholder="मकान नंबर 123, गली नंबर 5, सेक्टर 4"
                onChange={(e) => {
                  const value = e.target.value;

                  // split by spaces & filter empty
                  const words = value.trim().split(/\s+/).filter(Boolean);

                  if (words.length <= 50) {
                    handleChange(e);
                  }
                }}
              />
              <HindiSuggestionBox field="fullAddress" />
            </div>

            {/* optional helper text */}
            <p className="text-xs text-muted-foreground mt-1">
              अधिकतम 100 शब्द
            </p>
          </FormField>

          {/* PIN CODE */}
          <FormField label="पिन कोड">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={pincode}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                  setPincode(val);
                  if (val.length === 6) {
                    fetchAddressFromPincode(val);
                  }
                }}
                placeholder="455001"
                className="pl-11"
              />
              {isFetchingPin && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                  खोजा जा रहा है...
                </span>
              )}
            </div>
          </FormField>

          {/* District + Tehsil */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="जिला" error={errors.district}>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  name="district" // ✅ Make sure name is set
                  value={formData.district}
                  onChange={handleChange} // ✅ Use handleChange which clears errors
                  className="pl-11"
                  placeholder="देवास"
                />
                <HindiSuggestionBox field="district" />
              </div>
            </FormField>

            <FormField label="तहसील" error={errors.tehsil}>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  name="tehsil" // ✅ Make sure name is set
                  value={formData.tehsil}
                  onChange={handleChange} // ✅ Use handleChange which clears errors
                  className="pl-11"
                  placeholder="देवास"
                />
                <HindiSuggestionBox field="tehsil" />
              </div>
            </FormField>
          </div>
        </div>

        {/* Section: मोबाइल नंबर */}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Section: प्रत्याशी का मोबाइल नंबर */}
          <div className="flex-1 space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20">
            <FormField
              label="प्रत्याशी का मोबाइल नंबर (वैकल्पिक)"
              error={errors.candidateMobile}
              required={false}
              phone
            >
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  value={formData.candidateMobile}
                  onChange={(e) => handleCandidateMobileChange(e.target.value)}
                  placeholder="9876543210"
                  className="pl-11"
                  maxLength={10}
                />
              </div>
            </FormField>
          </div>
          <div className=" flex-1 space-y-4 p-6 bg-cream/30 rounded-xl border border-gold/20">
            {/* <h4 className="text-lg font-semibold text-maroon flex items-center gap-2">
          <Phone className="w-5 h-5" />
          अभिभावक मोबाइल नंबर
        </h4> */}
            <FormField
              label="अभिभावक मोबाइल नंबर"
              error={errors.guardianMobileNumbers}
              phone
              required
            >
              <div className="space-y-3">
                {formData.guardianMobileNumbers.map((number, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="relative flex-1">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        value={number}
                        onChange={(e) =>
                          handleGuardianMobileChange(index, e.target.value)
                        }
                        placeholder="9876543210"
                        className="pl-11"
                        maxLength={10}
                      />
                    </div>
                    {formData.guardianMobileNumbers.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeGuardianMobileNumber(index)}
                        className="shrink-0 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                {formData.guardianMobileNumbers.length < 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addGuardianMobileNumber}
                    className="w-full border-dashed border-maroon text-maroon hover:bg-maroon/10"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    मोबाइल नंबर जोड़ें
                  </Button>
                )}
              </div>
            </FormField>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="saffron"
            size="lg"
            className="w-full text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                कृपया प्रतीक्षा करें...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                पंजीकरण करें
              </>
            )}
          </Button>
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground">
          <span className="text-destructive">*</span> चिह्नित सभी जानकारी
          अनिवार्य है
        </p>
      </form>
      {/* DISABLED OVERLAY */}
      {/* <div className="absolute inset-0 z-50 bg-black/70 flex items-center justify-center rounded-xl">
        <div className="text-center absolute top-56">
          <h2 className="text-3xl font-bold text-white">Coming Soon</h2>
          <p className="text-white/80 mt-2">यह फॉर्म जल्द ही उपलब्ध होगा</p>
        </div>
      </div> */}
    </div>
  );
};

export default RegistrationForm;
