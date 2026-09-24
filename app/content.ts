export const channels = {
  institutionalEmail: "milenamilena2715@gmail.com",
  portaria: {
    phone: "(41) 3527-2969",
    intercom: "99",
    whatsapp: "https://wa.me/message/AZW5H3KUNVXOC1?src=qr",
  },
  syndico: {
    phone: "(41) 98898-1955",
    whatsapp:
      "https://wa.me/5541988981955?text=Ol%C3%A1%2C%20preciso%20comunicar%20uma%20emerg%C3%AAncia%20no%20Edif%C3%ADcio%20Milena.",
  },
  announcements:
    "https://chat.whatsapp.com/GEUx1Y6QNMKDUWcoKPFGFN?s=qt&p=a&ilr=1",
  ios: "https://apps.apple.com/br/app/brcondos/id984072385",
  android:
    "https://play.google.com/store/apps/details?id=com.brcondos.cliente&hl=pt_BR",
};

export const routineTopics = [
  "Chamados e ocorrências",
  "Reservas de áreas comuns",
  "Mudanças e obras",
  "Boletos e cobranças",
  "Encomendas",
  "Assembleia virtual",
  "Relatórios",
  "Solicitações de tags",
  "Cadastro facial",
  "Documentos e prestação de contas",
  "Cadastros e atualizações",
];

export const rules = [
  {
    title: "Mudanças",
    text: "Solicite pelo BRCondos com pelo menos 48 horas de antecedência. Aguarde a confirmação, use o elevador de serviço e peça a proteção da cabine. O morador responde por danos causados durante a movimentação.",
  },
  {
    title: "Reservas",
    text: "Faça a reserva das áreas comuns no BRCondos com pelo menos 48 horas de antecedência e confira as orientações do espaço. O responsável pela unidade deve acompanhar o uso e a entrega do local.",
  },
  {
    title: "Visitantes e entregas",
    text: "Avise a portaria e autorize o acesso. Visitantes e prestadores devem se identificar. Combine a retirada de entregas sem bloquear a entrada ou as áreas comuns.",
  },
  {
    title: "Obras e reformas",
    text: "Comunique a administração pelo BRCondos e aguarde a autorização do síndico antes de iniciar qualquer obra ou reforma. Dependendo do serviço, podem ser exigidos documentos e responsabilidade técnica. Preserve elevadores, corredores e horários permitidos.",
  },
  {
    title: "Silêncio",
    text: "Evite ruídos que perturbem os vizinhos, especialmente antes das 8h e depois das 21h. Em qualquer horário, reduza som, impacto e arraste de móveis.",
  },
  {
    title: "Lixo e descarte",
    text: "Separe os resíduos orgânicos, recicláveis e vidros. Deposite os vidros no térreo e, se estiverem quebrados, embale-os com segurança. Baterias e resíduos especiais não podem ser colocados nas lixeiras; consulte a administração sobre a destinação correta.",
  },
  {
    title: "Garagem",
    text: "Respeite o limite de 10 km/h. Evite buzina e não use a garagem para lavagem, manutenção, brincadeiras ou armazenamento de objetos.",
  },
  {
    title: "Animais",
    text: "Conduza o animal com segurança nas áreas comuns, recolha os dejetos e evite ruído ou situações que incomodem ou coloquem outras pessoas em risco.",
  },
  {
    title: "Fumo e janelas",
    text: "Não fume nas áreas comuns. Dentro da unidade, evite que a fumaça alcance os vizinhos. Nunca lance bitucas, cinzas ou qualquer objeto pelas janelas.",
  },
];

export const emergencies = [
  ["Bombeiros / SIATE", "193", "Incêndio, resgate, acidente ou trauma"],
  ["SAMU", "192", "Emergência clínica, mal súbito, AVC ou dor no peito"],
  ["Polícia Militar", "190", "Crime, violência ou risco imediato"],
  ["Defesa Civil", "199 ou 153", "Alagamento, desabamento ou risco estrutural"],
  ["Consigaz 24h", "0800 770 4922", "Cheiro ou vazamento de gás"],
  ["Copel 24h", "0800 51 00 116", "Falta de energia ou risco elétrico"],
  ["Sanepar 24h", "0800 200 0115", "Falta d’água ou problema na rede"],
] as const;
