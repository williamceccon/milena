import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guia do Morador | Edifício Milena",
  description:
    "Canais oficiais, orientações de convivência e contatos de emergência do Condomínio Edifício Milena.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
