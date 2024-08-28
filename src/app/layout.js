import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid place-items-center h-screen bg-lime-200 p-4">
        {children}
      </body>
    </html>
  );
}
