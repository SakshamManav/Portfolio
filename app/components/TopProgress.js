"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopProgress() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState("0%");
  const hideTimer = useRef();
  const fallbackTimer = useRef();
  const prevPath = useRef(pathname);
  const pendingPath = useRef(null);

  useEffect(() => {
    // Clear any outstanding timers on unmount
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      document.removeEventListener("click", handleDocClick, true);
    };
  }, []);

  // Start loader when internal links are clicked
  function handleDocClick(e) {
    try {
      const el = e.target.closest && e.target.closest("a");
      if (!el) return;
      const href = el.getAttribute("href");
      if (!href) return;
  // if link has download attribute, don't start loader
  if (el.hasAttribute && el.hasAttribute("download")) return;
      // don't start for links that open in a new tab
      if (el.target && el.target !== "_self") return;
  // resolve absolute URL and ensure it's same-origin
      const linkUrl = new URL(el.href, location.href);
      if (linkUrl.origin !== location.origin) return;
  // ignore links that point to static file assets (pdf, images, archives, docs)
  const pathLower = linkUrl.pathname.toLowerCase();
  if (pathLower.match(/\.(pdf|zip|rar|7z|png|jpe?g|gif|svg|docx?|xlsx?|csv)$/)) return;
      // ignore clicks that point to the same pathname (including hash-only anchors)
      if (linkUrl.pathname === location.pathname) {
        // if hash is same or different, it's an in-page navigation; ignore loader
        return;
      }
      // only start for internal navigations (same-origin and different pathname)
      if (linkUrl.pathname) {
        if (hideTimer.current) {
          clearTimeout(hideTimer.current);
          hideTimer.current = null;
        }
        if (fallbackTimer.current) {
          clearTimeout(fallbackTimer.current);
          fallbackTimer.current = null;
        }
        // remember the path we expect to navigate to
        pendingPath.current = linkUrl.pathname + linkUrl.search;
        setVisible(true);
        setWidth("10%");
        requestAnimationFrame(() => requestAnimationFrame(() => setWidth("70%")));
        // fallback: if navigation doesn't finish within 6s, hide the loader
        fallbackTimer.current = setTimeout(() => {
          setWidth("100%");
          // hide shortly after finishing
          hideTimer.current = setTimeout(() => {
            setVisible(false);
            setTimeout(() => setWidth("0%"), 200);
            pendingPath.current = null;
          }, 260);
          fallbackTimer.current = null;
        }, 6000);
      }
    } catch (err) {
      // ignore
    }
  }

  // attach click listener to document to catch link clicks
  useEffect(() => {
    document.addEventListener("click", handleDocClick, true);
    return () => document.removeEventListener("click", handleDocClick, true);
  }, []);

  // when pathname changes, consider navigation complete
  useEffect(() => {
    if (prevPath.current !== pathname) {
      // if loader wasn't visible, nothing to do
      if (!visible) {
        prevPath.current = pathname;
        pendingPath.current = null;
        return;
      }
      // clear any fallback timer
      if (fallbackTimer.current) {
        clearTimeout(fallbackTimer.current);
        fallbackTimer.current = null;
      }
      // complete the loader
      setWidth("100%");
      hideTimer.current = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setWidth("0%"), 200);
        pendingPath.current = null;
      }, 260);
      prevPath.current = pathname;
    }
  }, [pathname, visible]);

  if (!visible) return null;

  return (
    <div aria-hidden className="fixed left-0 top-0 w-full z-[9999] pointer-events-none">
      <div
        style={{
          width,
          height: 3,
          transition: "width 280ms linear, opacity 180ms linear",
          background: "linear-gradient(90deg,#06b6d4,#7c3aed)",
        }}
        className="origin-left"
      />
    </div>
  );
}
