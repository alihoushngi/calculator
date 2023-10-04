import "./globals.css";

export const metadata = {
  title: "Calculator",
  description: "Ali Houshangi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
