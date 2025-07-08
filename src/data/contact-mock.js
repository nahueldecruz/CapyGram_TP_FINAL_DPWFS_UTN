const mock_data = {
  contacts: [
    {
      id: 1,
      name: "Doctor Capy",
      phoneNumber: "11 2475-5655",
      info: "Hoy consultas de 10:00 a 17:00hs",
      lastTimeConnected: "online",
      img: "/assets/images/contacts/45c5390d-704c-4450-8540-d54a6ea0812e.png",
      messagesList: [
        { id: 1, sender: "OTHER", time: "08:25", text: "¿Vas a venir al turno hoy?", status: "seen" },
        { id: 2, sender: "USER", time: "08:28", text: "Sí, tipo 9 estoy allá.", status: "seen" },
        { id: 3, sender: "OTHER", time: "08:29", text: "Buenísimo", status: "seen" },
        { id: 4, sender: "USER", time: "09:33", text: "¿Querés que lleve algo?", status: "delivered" },
        { id: 5, sender: "OTHER", time: "09:34", text: "Solo tu libreta médica 🩺", status: "sent" },
        { id: 6, sender: "USER", time: "09:35", text: "Perfecto, la tengo en la mochila", status: "sent" },
        { id: 7, sender: "OTHER", time: "09:36", text: "Y vení con tiempo, que hoy hay varios capys esperando turno", status: "sent" },
        { id: 8, sender: "USER", time: "09:37", text: "Dale, salgo en 10. ¿Te dejo alguna hoja de menta?", status: "sent" },
        { id: 9, sender: "OTHER", time: "09:38", text: "Jajaja, sí, ¡esas me encantan!", status: "sent" }
      ],
    },
    {
      id: 6,
      phoneNumber: "11 7654-0099",
      info: "Especialista en hojas gourmet 🌿",
      lastTimeConnected: "09:55",
      img: undefined,
      messagesList: [
        { id: 1, sender: "USER", time: "09:20", text: "¿Tenés menú especial hoy?", status: "delivered" },
        { id: 2, sender: "OTHER", time: "09:22", text: "¡Sí! Ensalada tibia de pasto criollo con pétalos 🌼", status: "delivered" },
        { id: 3, sender: "USER", time: "09:24", text: "Guardame uno, voy en un rato", status: "delivered" },
      ],
    },
    {
      id: 2,
      name: "Mamá Capy",
      phoneNumber: "11 3443-2211",
      info: "Con amor, siempre 💚",
      lastTimeConnected: "07:15",
      img: "/assets/images/contacts/6f9d4e0e-ad22-40a3-9e0e-dba909bc42a9.png",
      messagesList: [
        { id: 1, sender: "OTHER", time: "06:55", text: "¿Comiste algo antes de salir?", status: "seen" },
        { id: 2, sender: "USER", time: "07:00", text: "Sí, ma. Me hice unas hojitas con pastito 🥗", status: "seen" },
        { id: 3, sender: "OTHER", time: "07:02", text: "¡Perfecto! Cuidate del sol, ¿sí?", status: "seen" },
        { id: 4, sender: "USER", time: "07:03", text: "Obvio, llevo sombrero", status: "seen" },
        { id: 5, sender: "OTHER", time: "07:05", text: "Y tomate agüita fresca, te puse una botella en la mochila", status: "seen" },
        { id: 6, sender: "USER", time: "07:06", text: "Gracias, má. Sos la mejor 🧡", status: "seen" },
        { id: 7, sender: "OTHER", time: "07:07", text: "No te olvides de saludar a tu tía si la ves por la laguna", status: "seen" },
        { id: 8, sender: "USER", time: "07:09", text: "Está bien, seguro me la cruzo", status: "seen" }
      ]
    },
    {
      id: 3,
      name: "CapyAbogado",
      phoneNumber: "11 6799-4433",
      info: "Estudios legales Capy & Asociados",
      lastTimeConnected: "online",
      img: "/assets/images/contacts/9fe05ef4-adab-4591-a458-18ef1689a55b.png",
      messagesList: [
        { id: 1, sender: "USER", time: "08:00", text: "Hola doctor, ¿cómo va?", status: "seen" },
        { id: 2, sender: "OTHER", time: "08:01", text: "Buen día. ¿Todo bien por allá?", status: "seen" },
        { id: 3, sender: "USER", time: "08:02", text: "Sí, por suerte. Quería preguntarte por lo del terreno", status: "seen" },
        { id: 4, sender: "OTHER", time: "08:03", text: "Sí, llegó la notificación. Está todo en regla 🧾", status: "seen" },
        { id: 5, sender: "USER", time: "08:04", text: "¿Y los papeles de posesión ya están firmados?", status: "seen" },
        { id: 6, sender: "OTHER", time: "08:06", text: "Falta solo tu firma. La del escribano ya está", status: "seen" },
        { id: 7, sender: "USER", time: "08:08", text: "Perfecto. ¿Puedo pasar hoy?", status: "seen" },
        { id: 8, sender: "OTHER", time: "08:10", text: "Sí, después de las 10:00 estoy en la oficina", status: "seen" },
        { id: 9, sender: "USER", time: "08:12", text: "Llevo fotocopia de mi DNI capybarense", status: "seen" },
        { id: 10, sender: "OTHER", time: "08:13", text: "¡Sí! Y si podés, también la libreta de pastizales 🌾", status: "seen" },
        { id: 11, sender: "USER", time: "08:15", text: "¿Eso para qué era?", status: "seen" },
        { id: 12, sender: "OTHER", time: "08:16", text: "Sirve como comprobante de residencia territorial", status: "seen" },
        { id: 13, sender: "USER", time: "08:17", text: "Ahhh, no sabía eso. Está en casa de mi mamá", status: "seen" },
        { id: 14, sender: "OTHER", time: "08:18", text: "Bueno, con el DNI alcanza para hoy", status: "seen" },
        { id: 15, sender: "USER", time: "08:19", text: "¿Y cuánto tarda en quedar todo legalizado?", status: "seen" },
        { id: 16, sender: "OTHER", time: "08:20", text: "Entre 3 y 5 días hábiles, dependiendo del registro", status: "seen" },
        { id: 17, sender: "USER", time: "08:21", text: "¿Lo puedo empezar a usar mientras tanto?", status: "seen" },
        { id: 18, sender: "OTHER", time: "08:22", text: "Técnicamente sí, pero no hagas construcciones todavía", status: "seen" },
        { id: 19, sender: "USER", time: "08:23", text: "¡Ni un quincho para tomar mate!?", status: "seen" },
        { id: 20, sender: "OTHER", time: "08:24", text: "Jajaja... mejor esperá unos días 😅", status: "seen" },
        { id: 21, sender: "USER", time: "08:25", text: "Listo. ¿Qué otros papeles tengo que firmar?", status: "seen" },
        { id: 22, sender: "OTHER", time: "08:26", text: "Un formulario de declaración jurada y el plano", status: "seen" },
        { id: 23, sender: "USER", time: "08:27", text: "¿Los tenés vos o los llevo?", status: "seen" },
        { id: 24, sender: "OTHER", time: "08:28", text: "Los tengo impresos. Vos solo vení con birome ✍️", status: "seen" },
        { id: 25, sender: "USER", time: "08:29", text: "¿Tiene que ser azul o negra?", status: "seen" },
        { id: 26, sender: "OTHER", time: "08:30", text: "Negra preferentemente", status: "seen" },
        { id: 27, sender: "USER", time: "08:31", text: "Perfecto. Voy con mi capymaletín también 🎒", status: "seen" },
        { id: 28, sender: "OTHER", time: "08:32", text: "Mejor, así llevás copia de todo", status: "seen" },
        { id: 29, sender: "USER", time: "08:33", text: "¿Hay que pagar algo hoy?", status: "seen" },
        { id: 30, sender: "OTHER", time: "08:34", text: "Sí, $3.500 capycréditos del sellado", status: "seen" },
        { id: 31, sender: "USER", time: "08:35", text: "¿Efectivo o transferencia?", status: "seen" },
        { id: 32, sender: "OTHER", time: "08:36", text: "Transferencia, preferentemente", status: "seen" },
        { id: 33, sender: "USER", time: "08:37", text: "Dale, te pido alias", status: "seen" },
        { id: 34, sender: "OTHER", time: "08:38", text: "capy.abogado.pasto 😄", status: "seen" },
        { id: 35, sender: "USER", time: "08:39", text: "Jajajajaja me muero", status: "seen" },
        { id: 36, sender: "OTHER", time: "08:40", text: "Legal pero divertido", status: "seen" },
        { id: 37, sender: "USER", time: "08:41", text: "Ya te hice la transferencia", status: "seen" },
        { id: 38, sender: "OTHER", time: "08:42", text: "Confirmado. ¡Todo listo para la firma!", status: "seen" },
        { id: 39, sender: "USER", time: "08:43", text: "Gracias, capo. Nos vemos en un rato 🧑‍⚖️", status: "seen" },
        { id: 40, sender: "OTHER", time: "08:44", text: "Dale, traé mate si podés 😁", status: "seen" }
      ]
    },
    {
      id: 4,
      name: "Hermanito CapyJuani",
      phoneNumber: "11 5438-9988",
      info: "😎 El pastito de ayer estaba épico",
      lastTimeConnected: "hace 3 dias",
      img: "/assets/images/contacts/37bc3e2f-b427-40ac-9626-66cb55a36533.png",
      messagesList: [
        { id: 1, sender: "USER", time: "09:40", text: "¿Hoy repetimos caminata por la laguna?", status: "seen" },
        { id: 2, sender: "OTHER", time: "09:42", text: "Sí, pero traé mate esta vez 😂", status: "seen" },
        { id: 3, sender: "USER", time: "09:43", text: "Dale, y unos brotes de alfalfa 🥬", status: "seen" },
      ],
    },
    {
      id: 5,
      name: "CapyJefe",
      phoneNumber: "11 4567-1234",
      info: "Oficina central - Supervisora de pastizales",
      lastTimeConnected: "11:03",
      img: "/assets/images/contacts/187de806-6de1-4ff3-9e17-6a425f7ea82a.png",
      messagesList: [
        { id: 1, sender: "OTHER", time: "10:35", text: "¿Terminaste el informe de territorios?", status: "seen" },
        { id: 2, sender: "USER", time: "10:36", text: "Casi. Me falta revisar la zona sur del pantano", status: "seen" },
        { id: 3, sender: "OTHER", time: "10:37", text: "Perfecto. Mandamelo antes del mediodía 🕛", status: "seen" },
      ],
    },
    {
      id: 7,
      name: undefined,
      phoneNumber: "11 3333-4444",
      info: "Capy que vende sombreros tejidos 🧶",
      lastTimeConnected: "12:44",
      img: undefined,
      messagesList: [
        { id: 1, sender: "USER", time: "12:30", text: "Hola, ¿tenés el sombrerito de orejas?", status: "seen" },
        { id: 2, sender: "OTHER", time: "12:31", text: "Sí, me quedan dos en beige 🧢", status: "seen" },
        { id: 3, sender: "USER", time: "12:32", text: "¡Buenísimo! Reservame uno", status: "seen" },
        { id: 4, sender: "OTHER", time: "12:33", text: "¿Lo querés con cinta o sin cinta?", status: "seen" },
        { id: 5, sender: "USER", time: "12:34", text: "Con cinta, así no se me vuela con el viento", status: "seen" },
        { id: 6, sender: "OTHER", time: "12:35", text: "Hecho. ¿Pasás hoy o te lo alcanzo a la laguna?", status: "seen" },
        { id: 7, sender: "USER", time: "12:36", text: "Paso yo. Te llevo unas hojitas de yuyo en agradecimiento 🌱", status: "seen" }
      ]
    },
    {
      id: 8,
      name: undefined,
      phoneNumber: "11 8888-0000",
      info: "Capy que recolecta hojas para trueque 🍃",
      lastTimeConnected: "11:20",
      img: undefined,
      messagesList: [
        { id: 1, sender: "OTHER", time: "11:00", text: "¿Tenés hojas de eucalipto?", status: "seen" },
        { id: 2, sender: "USER", time: "11:02", text: "No, pero conseguí unas de bambú frescas", status: "seen" },
        { id: 3, sender: "OTHER", time: "11:03", text: "Me sirve, ¿te cambio por dos raíces de loto?", status: "seen" },
        { id: 4, sender: "USER", time: "11:04", text: "Hecho. ¿Dónde nos vemos?", status: "seen" },
        { id: 5, sender: "OTHER", time: "11:06", text: "En la piedra grande al lado del sauce llorón 🌳", status: "seen" },
        { id: 6, sender: "USER", time: "11:07", text: "Perfecto, en 15 estoy ahí", status: "seen" }
      ]
    },
    {
      id: 9,
      name: undefined,
      phoneNumber: "11 7721-1999",
      info: "No tiene info...",
      lastTimeConnected: "hace una hora",
      img: undefined,
      messagesList: [
        { id: 1, sender: "USER", time: "09:45", text: "¿Quién sos?", status: "delivered" },
        { id: 2, sender: "OTHER", time: "09:48", text: "Perdón, me pasaron este número para el grupo de caminatas 🦙", status: "delivered" },
        { id: 3, sender: "USER", time: "09:49", text: "Ahhh, todo bien entonces", status: "delivered" },
        { id: 4, sender: "OTHER", time: "09:51", text: "¿Vos también vas los domingos al sendero del pantano?", status: "delivered" },
        { id: 5, sender: "USER", time: "09:53", text: "Sí, suelo ir con mi hermanito. ¿Vos vas con grupo?", status: "delivered" },
        { id: 6, sender: "OTHER", time: "09:54", text: "Sí, salimos a las 8. Te sumás cuando quieras", status: "delivered" }
      ]
    }
  ],
  user: {
    id: 1,
    name: "naudecruz.jsx",
    phoneNumber: "11 8923-1234",
    info: "Futuro desarrollador web!!! <3",
    lastTimeConnected: "online",
    img: "/assets/images/contacts/cd545439-721e-4ac8-90d8-083212e5dadd.png",
  }
};

export default mock_data;