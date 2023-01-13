import React, { useState } from "react";
import { useEffect } from "react";
import pluginConfig from "./CookieConfig";
import "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
const config = {};

// export default function CookieConsent() {
//   useEffect(() => {
//     const cc = window.initCookieConsent();
//     cc.run(config);
//   }, []);

//   return null;
// }https://www.npmjs.com/package/vanilla-cookieconsent

const CookieConsent = () => {
  useEffect(() => {
    if (!document.getElementById("cc--main")) {
      window.CookieConsentApi = window.initCookieConsent();
      window.CookieConsentApi.run(pluginConfig);
    }
  }, []);

  return null;
};

export default CookieConsent;
