import Header from "@/components/Header";
import "@/styles/globals.css";
import vazirFont from "constants/localFont";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ"
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fs" dir="rtl">
      <body className={`min-h-screen  ${vazirFont.variable} font-sans `}>
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
