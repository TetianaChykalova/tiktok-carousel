import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Header />
        <main style={{ margin: '20px auto 0', maxWidth: '95%' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
