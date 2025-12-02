"use client";

import { useEffect } from "react";

export function ScrollToHash() {
  useEffect(() => {
    let mounted = true;

    const getHeaderOffset = () => {
      const header = document.querySelector("header");
      return header ? header.getBoundingClientRect().height : 0;
    };

    const tryScrollToHash = (maxRetries = 10, delay = 150) => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.replace("#", "");

      let attempts = 0;
      const run = () => {
        if (!mounted) return;
        const element = document.getElementById(id);
        if (element) {
          const offset = getHeaderOffset() + 8;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        } else if (attempts < maxRetries) {
          attempts += 1;
          setTimeout(run, delay);
        }
      };

      run();
    };

    // Initial attempt on mount
    tryScrollToHash();

    // React to hash changes
    const onHashChange = () => tryScrollToHash();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      mounted = false;
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return null;
}
