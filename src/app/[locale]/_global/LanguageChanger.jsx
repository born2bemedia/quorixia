"use client";

import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";

export default function LanguageChanger() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [langDisplay, setLangDisplay] = useState(false);
  const [langName, setLangName] = useState("");

  const handleChange = (lang) => {
    router.push(pathname, { locale: lang });
    setLangDisplay(false);
  };

  const handlePopup = () => {
    setLangDisplay(!langDisplay);
  };

  useEffect(() => {
    const langNameNew =
    locale === "en"
          ? "EN"
          : locale === "de"
        ? "DE"
        : locale === "it"
        ? "IT"
        : "EL";
    setLangName(langNameNew);
  }, [locale]);

  return (
    <div className="lang-wrap">
      <button className="current-lang" onClick={() => handlePopup()}>
        <img src={`/images/${langName}_Lang.svg`} />
      </button>
      {langDisplay && (
        <div className="lang-switcher">
          <button
            onClick={() => handleChange("en")}
            className={locale === "en" ? "active" : ""}
          >
            <img src="/images/EN_Lang.svg" />
            <span>English</span>
          </button>
          <button
            onClick={() => handleChange("de")}
            className={locale === "de" ? "active" : ""}
          >
            <img src="/images/DE_Lang.svg" />
            <span>German</span>
          </button>
          <button
            onClick={() => handleChange("el")}
            className={locale === "el" ? "active" : ""}
          >
            <GreekIcon />
            <span>Greek</span>
          </button>
          <button
            onClick={() => handleChange("it")}
            className={locale === "it" ? "active" : ""}
          >
            <img src="/images/IT_Lang.svg" />
            <span>Italian</span>
          </button>

          <style jsx>{`
            button {
              margin-right: 10px;
              padding: 0;
              border: none;
              cursor: pointer;
              background-color: transparent;
              border-radius: 0;
              color: #000;
              font-size: 14px;
              display: flex;
            }
            button.active {
              color: #a225ee;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}

const GreekIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
<g clipPath="url(#clip0)">
  <rect width="24" height="17" fill="#0D5EAF"/>
  <rect y="2.125" width="24" height="2.125" fill="white"/>
  <rect y="6.375" width="24" height="2.125" fill="white"/>
  <rect y="10.625" width="24" height="2.125" fill="white"/>
  <rect y="14.875" width="24" height="2.125" fill="white"/>
  <rect width="9.5" height="9.5" fill="#0D5EAF"/>
  <rect x="3.8" width="1.9" height="9.5" fill="white"/>
  <rect y="3.8" width="9.5" height="1.9" fill="white"/>
</g>
<defs>
  <clipPath id="clip0">
    <rect width="24" height="17" fill="white"/>
  </clipPath>
</defs>
</svg>
