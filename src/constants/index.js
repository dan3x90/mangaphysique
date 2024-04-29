import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    // benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    // roadmap1,
    sangoku,
    vegeta,
    bakii,
    superalloydarkshine,
    broly,
    // roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    whatsappBlack,
    yourlogo,
    yujirohanma,
    bc1,
    bc2,
    bc3,
    bc4,
    bc5,
    bc6,
    bc7,
    shenron,
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "Documentation",
        url: "#documentation",
    },
    {
        id: "1",
        title: "Coaching",
        url: "#coaching",
    },
    {
        id: "2",
        title: "Abonnement",
        url: "#abonnement",
    },
    {
        id: "3",
        title: "Manga",
        url: "#manga",
    },
    {
        id: "4",
        title: "Créer un compte",
        url: "#signup",
        onlyMobile: true,
    },
    {
        id: "5",
        title: "Se connecter",
        url: "#login",
        onlyMobile: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const mpServices = [
    "À la salle",
    "À la maison",
    "Poids de corps",
];

export const mpServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];

export const roadmap = [
    {
        id: "0",
        title: "Sangoku",
        text: "Légendaire super saiyan de l'anime Dragon Ball. Choisi Sangoku comme objectif Manga Physique.",
        date: "Dragon Ball Z",
        status: "done",
        imageUrl: sangoku,
        colorful: true,
    },
    {
        id: "1",
        title: "Vegeta",
        text: "Le plus orgueillieux des super sayians. Choisi Vegeta comme objectif Manga Physique.",
        date: "Dragon Ball Z",
        status: "progress",
        imageUrl: vegeta,
    },
    {
        id: "2",
        title: "Baki",
        text: "Un des physiques les plus impressionants de l'univers Manga. Choisi Baki comme objectif Manga Physique.",
        date: "Baki Hanma",
        status: "done",
        imageUrl: bakii,
    },
    {
        id: "3",
        title: "Superalloy Darkshine",
        text: "Le colosse aux muscles brillants. Choisi Superalloy Darkshine comme objectif Manga Physique.",
        date: "One-Punch Man",
        status: "progress",
        imageUrl: superalloydarkshine,
        colorful: true,
    },
    {
        id: "4",
        title: "Yujiro Hanma",
        text: "Maître ultime des arts martiaux, une force de la nature. Choisi Yujiro Hanma comme objectif Manga Physique.",
        date: "Baki",
        status: "done",
        imageUrl: yujirohanma,
    },
    {
        id: "5",
        title: "Broly",
        text: "Doté d'une force absolument redoutable et de caractéristiques physiques hors norme. Choisi Broly comme objectif Manga Physique.",
        date: "Dragon Ball Z",
        status: "progress",
        imageUrl: broly,
    },
];

export const collabText =
    "Défini tes objectifs fitness et devient un personnage de manga avec ton coach Manga Physique";

export const collabContent = [
    {
        id: "0",
        title: "Coaching personnel 24/24",
        text: "Ton coach t'accompagne chaque jour 24h/24 afin de suivre tes performances et accélérer la réussite vers ton objectif Manga Physique.",
    },
    {
        id: "1",
        title: "Programme fitness",
    },
    {
        id: "2",
        title: "Diète sur mesure",
    },
];

export const collabApps = [
    {
        id: "0",
        title: "BC1",
        icon: bc1,
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "BC2",
        icon: bc2,
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "BC3",
        icon: bc3,
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "BC4",
        icon: bc4,
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "BC5",
        icon: bc5,
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "BC6",
        icon: bc6,
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "BC7",
        icon: bc7,
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Shenron",
        icon: shenron,
        width: 38,
        height: 32,
    },
];

export const pricing = [
    {
        id: "0",
        title: "Essai gratuit",
        description: "14 jours gratuits puis 86€/mois",
        price: "0",
        white: true,
        features: [
            "Coaching personnel avec suivi 24/24 par message direct",
            "Programme fitness personnalisé selon tes souhaits, à la salle / maison",
            "Diète sur mesure adaptée à tes goûts et tes objectifs Manga Physique",
        ],
    },
    {
        id: "1",
        title: "Annuel",
        description: "Paiement annuel, économisez 20%",
        price: "826",
        white: true,
        features: [
            "Coaching personnel avec suivi 24/24 par message direct",
            "Programme fitness personnalisé selon tes souhaits, à la salle / maison",
            "Diète sur mesure adaptée à tes goûts et tes objectifs Manga Physique",
        ],
    },
    {
        id: "2",
        title: "Entreprise",
        description: "Discutons ensemble de vos besoins",
        price: "/",
        white: false,
        features: [
            "Coaching personnel avec suivi 24/24 par message direct",
            "Programme fitness personnalisé selon tes souhaits, à la salle / maison",
            "Diète sur mesure adaptée à tes goûts et tes objectifs Manga Physique",
        ],
    },
];

export const benefits = [
    {
        id: "0",
        title: "Manga Physique",
        text: "Découvre la méthode Manga Physique et comment atteindre le physique de ton personnage de manga préféré.",
        backgroundUrl: "src/assets/benefits/card-1.svg",
        iconUrl: benefitIcon1,
        imageUrl: sangoku,
        url: "/methode"
    },
    {
        id: "1",
        title: "Coaching personnel",
        text: "Ton coach Manga Physique t'accompagne pour définir le plan qui te permettra d'atteindre tes objectifs rapidement et intelligemment.",
        backgroundUrl: "src/assets/benefits/card-2.svg",
        iconUrl: benefitIcon2,
        imageUrl: bakii,
        light: true,
        url: "/coaching"
    },
    {
        id: "2",
        title: "Suivi 24/24",
        text: "Un échange permanent avec ton coach qui te suit 24h/24 par message direct pour que chaque jour soit une réussite.",
        backgroundUrl: "src/assets/benefits/card-3.svg",
        iconUrl: benefitIcon3,
        imageUrl: superalloydarkshine,
        url: "/suivi"
    },
    {
        id: "3",
        title: "Programme fitness",
        text: "Un programme d'entraînement intensif adapté à tes envies et tes contraites, à la salle, à la maison et / ou poids de corps.",
        backgroundUrl: "src/assets/benefits/card-4.svg",
        iconUrl: benefitIcon4,
        imageUrl: vegeta,
        light: true,
        url: "/programme-fitness"
    },
    {
        id: "4",
        title: "Diet sur mesure",
        text: "Une transformation réussie passe par une diète digne d'un super sayian, tu seras accompagné ta diète qui sera définie selon tes goûts et objectifs.",
        backgroundUrl: "src/assets/benefits/card-5.svg",
        iconUrl: benefitIcon1,
        imageUrl: yujirohanma,
        url: "/diet"
    },
    {
        id: "5",
        title: "Création & Évolution",
        text: "L'objectif de Manga Physique est de te forger un mental et une éducation sans pareil pour que tu devienne autonome et riche de connaissances.",
        backgroundUrl: "src/assets/benefits/card-6.svg",
        iconUrl: benefitIcon2,
        imageUrl: broly,
        url: "creation-evolution"
    },
];

export const socials = [
    {
        id: "0",
        title: "WhatsApp",
        iconUrl: whatsappBlack,
        url: "#",
    },
    {
        id: "1",
        title: "X",
        iconUrl: twitter,
        url: "#",
    },
    {
        id: "2",
        title: "Instagram",
        iconUrl: instagram,
        url: "#",
    },
    {
        id: "3",
        title: "Telegram",
        iconUrl: telegram,
        url: "#",
    },
    {
        id: "4",
        title: "Facebook",
        iconUrl: facebook,
        url: "#",
    },
];