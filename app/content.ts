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
    text: "Faça a reserva das áreas comuns no BRCondos com pelo menos 48 horas de antecedência e confira as orientações do espaço. Cancelamentos feitos com menos de 72 horas de antecedência estão sujeitos à cobrança da taxa de indisponibilidade. O responsável pela unidade deve acompanhar o uso e a entrega do local.",
  },
  {
    title: "Visitantes e entregas",
    text: "Avise a portaria e autorize o acesso. Visitantes e prestadores devem se identificar. Combine a retirada de entregas sem bloquear a entrada ou as áreas comuns.",
  },
  {
    title: "Prestadores de serviço",
    text: "Autorize previamente o acesso e informe à portaria a unidade, o nome do prestador, a empresa e o serviço. O profissional deve se identificar e respeitar os horários e as regras do condomínio.",
  },
  {
    title: "Encomendas",
    text: "Acompanhe os avisos no BRCondos e retire as encomendas assim que possível. Combine diretamente o recebimento de itens volumosos ou perecíveis e não deixe volumes bloqueando as áreas comuns.",
  },
  {
    title: "Obras e reformas",
    text: "Comunique a administração pelo BRCondos e aguarde a autorização do síndico antes de iniciar. Apresente ART, RRT ou outros documentos quando exigidos, respeite os horários informados e providencie a retirada correta de entulho e resíduos.",
  },
  {
    title: "Elevadores",
    text: "Use o elevador de serviço para mudanças, obras, volumes e animais, solicitando a proteção da cabine quando necessário. Se houver pessoa retida, não force as portas: use o alarme e avise a portaria.",
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
    text: "O acesso à garagem é permitido somente a moradores com tag e veículos identificados. Respeite o limite de 10 km/h. Evite buzina e não use a garagem para lavagem, manutenção, brincadeiras ou armazenamento de objetos.",
  },
  {
    title: "Animais",
    text: "Use o elevador de serviço para transportar animais. Conduza-os com segurança nas áreas comuns, limpe e recolha imediatamente os dejetos e evite ruído ou situações que incomodem ou coloquem outras pessoas em risco.",
  },
  {
    title: "Áreas comuns",
    text: "Respeite a finalidade e as orientações de cada espaço. O morador responde por seus convidados, pela limpeza, por eventuais danos e pela devolução do local nas condições recebidas.",
  },
  {
    title: "Tags e acesso facial",
    text: "Solicite tags e atualizações do cadastro facial pelo BRCondos. Não empreste credenciais. Em caso de perda, comunique imediatamente para solicitar o bloqueio e a substituição.",
  },
  {
    title: "Segurança",
    text: "Mantenha portas e portões fechados, não permita a entrada de desconhecidos por aproximação e comunique movimentações suspeitas à portaria. Nunca compartilhe senhas ou credenciais de acesso.",
  },
  {
    title: "Fumo e janelas",
    text: "Não fume nas áreas comuns. Dentro da unidade, evite que a fumaça alcance os vizinhos. Nunca lance bitucas, cinzas ou qualquer objeto pelas janelas.",
  },
  {
    title: "Emergências internas",
    text: "Em vazamento de água, feche o registro se isso puder ser feito com segurança e avise a portaria. Em suspeita de vazamento de gás ou incêndio, afaste-se, não use os elevadores e acione os contatos de emergência.",
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
