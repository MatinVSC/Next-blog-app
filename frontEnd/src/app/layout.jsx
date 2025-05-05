import Header from "@/components/Header";
import AuthProvider from "@/context/AuthContext";
import "@/styles/globals.css";
import vazirFont from "constants/localFont";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ"
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`min-h-screen  ${vazirFont.variable} font-sans `}>
        <AuthProvider>
          <Toaster />
          <Header />
          <div className="container xl:max-w-screen-xl">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
