import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { channels, emergencies, routineTopics, rules } from "../app/content";

describe("public resident guide", () => {
  it("publishes every approved official channel", () => {
    expect(channels.portaria.phone).toBe("(41) 3527-2969");
    expect(channels.portaria.intercom).toBe("99");
    expect(channels.syndico.phone).toBe("(41) 98898-1955");
    expect(channels.institutionalEmail).toBe("milenamilena2715@gmail.com");
    expect(channels.announcements).toContain("chat.whatsapp.com");
    expect(channels.ios).toContain("apps.apple.com");
    expect(channels.android).toContain("play.google.com");
  });

  it("contains the expected routine and coexistence guidance", () => {
    expect(routineTopics).toHaveLength(11);
    expect(rules).toHaveLength(16);
    expect(rules.map((rule) => rule.title)).toEqual(
      expect.arrayContaining([
        "Mudanças",
        "Prestadores de serviço",
        "Encomendas",
        "Elevadores",
        "Tags e acesso facial",
        "Áreas comuns",
        "Segurança",
        "Emergências internas",
      ]),
    );
    expect(rules.find((rule) => rule.title === "Reservas")?.text).toContain("48 horas");
    expect(rules.find((rule) => rule.title === "Reservas")?.text).toContain(
      "taxa de indisponibilidade",
    );
    expect(rules.find((rule) => rule.title === "Obras e reformas")?.text).toContain(
      "autorização do síndico",
    );
    expect(rules.find((rule) => rule.title === "Lixo e descarte")?.text).toContain(
      "Baterias e resíduos especiais",
    );
    expect(rules.find((rule) => rule.title === "Garagem")?.text).toContain(
      "moradores com tag e veículos identificados",
    );
    expect(rules.find((rule) => rule.title === "Animais")?.text).toContain(
      "elevador de serviço",
    );
  });

  it("makes BRCondos support callable from a phone", async () => {
    const testDirectory = dirname(fileURLToPath(import.meta.url));
    const page = await readFile(join(testDirectory, "../app/page.tsx"), "utf8");
    expect(page).toContain('href="tel:08006030023"');
  });

  it("contains public emergency numbers", () => {
    expect(emergencies.map((entry) => entry[1])).toEqual(
      expect.arrayContaining(["193", "192", "190", "0800 770 4922"]),
    );
  });

  it("does not expose internal council or provider contacts", async () => {
    const testDirectory = dirname(fileURLToPath(import.meta.url));
    const source = await Promise.all([
      readFile(join(testDirectory, "../app/page.tsx"), "utf8"),
      readFile(join(testDirectory, "../app/content.ts"), "utf8"),
    ]).then((files) => files.join("\n"));
    for (const privateValue of [
      "98815-8893",
      "99955-1905",
      "99802-7771",
      "99708-3312",
      "99870-5100",
      "99194-5114",
      "98837-5000",
      "99593-3154",
      "99113-5398",
      "conselhomilena2715",
    ]) {
      expect(source).not.toContain(privateValue);
    }
  });
});
