"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

function Drawer({ open, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  // این هوک فقط در سمت کلاینت اجرا می‌شود
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // اگر در سمت سرور هستیم یا هنوز مونت نشده، چیزی رندر نکن
  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={`backdrop-blur-sm fixed inset-0 w-full h-screen bg-secondary-800 bg-opacity-30 z-40 transition-opacity ${
          open ? "block opacity-100" : "pointer-events-none hidden opacity-0"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 w-[250px] h-full z-50 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="bg-secondary-0 h-full overflow-y-auto shadow-lg">
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};

export default Drawer;