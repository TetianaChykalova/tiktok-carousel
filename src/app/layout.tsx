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
        <main style={{ marginTop: '20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
