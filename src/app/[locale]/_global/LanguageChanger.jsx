"use client";

import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";

export default function LanguageChanger() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [langDisplay, setLangDisplay] = useState(false);

  const handleChange = (lang) => {
    router.push(pathname, { locale: lang });
    setLangDisplay(false);
  };

  const handlePopup = () => {
    setLangDisplay(!langDisplay);
  };

  return (
    <div className="lang-wrap">
      <button className="current-lang" onClick={() => handlePopup()}>
        <img src={`/images/${locale}.svg`} />
      </button>
      {langDisplay && (
        <div className="lang-switcher">
          <button
            onClick={() => handleChange("en")}
            className={locale === "en" ? "active" : ""}
          >
            <img src="/images/en.svg" />
            <span>English</span>
          </button>
          <button
            onClick={() => handleChange("de")}
            className={locale === "de" ? "active" : ""}
          >
            <img src="/images/de.svg" />
            <span>German</span>
          </button>
          <button
            onClick={() => handleChange("it")}
            className={locale === "it" ? "active" : ""}
          >
            <img src="/images/it.svg" />
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
