import "../../styles/globals.css";

export const metadata = {
  title: "Gestão Simples",
  description: "Sistema de gestão para pequenos empresários"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-800 min-h-screen">{children}</body>
    </html>
  );
}
