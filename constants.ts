import { Language, TranslationData } from './types';

export const CONTENT: Record<Language, TranslationData> = {
  [Language.AR]: {
    title: "نادي أصدقاء البيئة والصحة",
    institution: "المؤسسة: ثانوية عبد الله العروي التأهيلية",
    supervision: "الإشراف: أساتذة علوم الحياة والأرض والمشرف على المختبرات",
    definition: {
      title: "التعريف بالنادي",
      content: "نادي الصحة والبيئة فضاء تربوي علمي تواصلي، يسعى إلى ترسيخ قيم المواطنة البيئية والسلوك الصحي السليم في الوسط المدرسي، من خلال أنشطة تعليمية، تفاعلية وميدانية تدمج بين الجانب العلمي والتربوي والاجتماعي."
    },
    objectives: {
      title: "الأهداف العامة",
      content: [
        "نشر الوعي الصحي والبيئي في صفوف المتعلمين وتشجيع السلوك المسؤول تجاه الذات والمحيط.",
        "تعزيز روح المواطنة البيئية والمشاركة الفعالة في حماية البيئة.",
        "إشراك التلاميذ في مشاريع وأنشطة تطبيقية تساهم في التنمية المستدامة.",
        "ربط التعلمات النظرية بالممارسات الميدانية لتقوية الحس العلمي والبحثي.",
        "تطوير المهارات الناعمة (Soft Skills) لدى التلاميذ لإعدادهم للمرحلة ما بعد البكالوريا وسوق الشغل."
      ]
    },
    motivations: {
      title: "الدوافع",
      content: "يهدف النادي إلى المساهمة في تنمية الوعي الصحي والبيئي، ومواكبة التوجهات الوطنية نحو التنمية المستدامة، وتنمية الكفاءات الحياتية لدى المتعلمين، مع جعل المؤسسة فضاءً نظيفًا وصحيًا يحتضن الإبداع والمبادرة."
    },
    softSkills: {
      title: "تطوير المهارات الناعمة",
      content: [
        "مهارات التواصل الفعّال",
        "العمل الجماعي والتعاون",
        "حل المشكلات واتخاذ القرار",
        "القيادة والمبادرة",
        "إدارة الوقت والالتزام",
        "الذكاء العاطفي"
      ]
    },
    activities: {
      title: "طبيعة الأنشطة",
      content: "أنشطة علمية، توعوية، فنية وميدانية تشمل تجارب مخبرية، بحوث ميدانية، حملات نظافة، غرس الأشجار، عروض توعوية وشراكات مع مؤسسات محلية."
    },
    vision: {
      title: "الرؤية المستقبلية",
      content: "أن يصبح النادي فضاءً تربويًا مبتكرًا لتكوين جيل واعٍ ومبادر في مجالات الصحة والبيئة، مؤهل أكاديميًا ومهنيًا للمساهمة في تحقيق التنمية المستدامة."
    },
    register: {
      title: "تسجيل العضوية",
      name: "الاسم الكامل",
      class: "القسم",
      age: "العمر",
      level: "المستوى الدراسي",
      submit: "تسجيل",
      success: "سيتم فتح تطبيق البريد الإلكتروني لإرسال معلوماتك.",
      emailSubject: "تسجيل عضوية جديد - نادي البيئة والصحة",
      emailBodyIntro: "أرغب في الانضمام إلى النادي. هذه معلوماتي:"
    },
    aiChat: {
      title: "المساعد الذكي للنادي",
      placeholder: "اسألني عن النادي...",
      send: "إرسال",
      thinking: "يفكر...",
      welcome: "مرحباً! أنا مساعد الذكاء الاصطناعي الخاص بالنادي. كيف يمكنني مساعدتك اليوم؟"
    },
    footer: "جميع الحقوق محفوظة © 2024 - ثانوية عبد الله العروي التأهيلية"
  },
  [Language.FR]: {
    title: "Club des Amis de l'Environnement et de la Santé",
    institution: "Institution: Lycée Qualifiant Abdallah Laroui",
    supervision: "Supervision: Professeurs de SVT et responsable des laboratoires",
    definition: {
      title: "Présentation du Club",
      content: "Le Club Santé et Environnement est un espace éducatif, scientifique et communicatif qui vise à consolider les valeurs de la citoyenneté environnementale et les comportements sains en milieu scolaire, à travers des activités éducatives, interactives et de terrain intégrant les aspects scientifiques, éducatifs et sociaux."
    },
    objectives: {
      title: "Objectifs Généraux",
      content: [
        "Diffuser la conscience sanitaire et environnementale parmi les élèves et encourager un comportement responsable.",
        "Renforcer l'esprit de citoyenneté environnementale et la participation active à la protection de l'environnement.",
        "Impliquer les élèves dans des projets et activités pratiques contribuant au développement durable.",
        "Lier les apprentissages théoriques aux pratiques de terrain pour renforcer le sens scientifique.",
        "Développer les compétences douces (Soft Skills) pour préparer les élèves à l'après-baccalauréat."
      ]
    },
    motivations: {
      title: "Motivations",
      content: "Le club vise à contribuer au développement de la conscience sanitaire et environnementale, à accompagner les orientations nationales vers le développement durable et à développer les compétences de vie des apprenants, tout en faisant de l'établissement un espace propre et sain."
    },
    softSkills: {
      title: "Développement des Soft Skills",
      content: [
        "Communication efficace",
        "Travail d'équipe et collaboration",
        "Résolution de problèmes et prise de décision",
        "Leadership et initiative",
        "Gestion du temps et engagement",
        "Intelligence émotionnelle"
      ]
    },
    activities: {
      title: "Nature des Activités",
      content: "Activités scientifiques, de sensibilisation, artistiques et de terrain comprenant des expériences de laboratoire, des recherches sur le terrain, des campagnes de nettoyage, la plantation d'arbres et des partenariats locaux."
    },
    vision: {
      title: "Vision Future",
      content: "Faire du club un espace éducatif innovant pour former une génération consciente et proactive dans les domaines de la santé et de l'environnement, qualifiée académiquement et professionnellement."
    },
    register: {
      title: "Inscription des Membres",
      name: "Nom Complet",
      class: "Classe",
      age: "Âge",
      level: "Niveau Scolaire",
      submit: "S'inscrire",
      success: "Votre client de messagerie s'ouvrira pour envoyer vos informations.",
      emailSubject: "Nouvelle Inscription - Club Environnement et Santé",
      emailBodyIntro: "Je souhaite rejoindre le club. Voici mes informations :"
    },
    aiChat: {
      title: "Assistant IA du Club",
      placeholder: "Posez-moi une question sur le club...",
      send: "Envoyer",
      thinking: "Réflexion...",
      welcome: "Bonjour! Je suis l'assistant IA du club. Comment puis-je vous aider ?"
    },
    footer: "Tous droits réservés © 2024 - Lycée Abdallah Laroui"
  },
  [Language.ES]: {
    title: "Club de Amigos del Medio Ambiente y la Salud",
    institution: "Institución: Escuela Secundaria Abdallah Laroui",
    supervision: "Supervisión: Profesores de Ciencias de la Vida y la Tierra y supervisor de laboratorio",
    definition: {
      title: "Introducción al Club",
      content: "El Club de Salud y Medio Ambiente es un espacio educativo, científico y comunicativo que busca consolidar los valores de la ciudadanía ambiental y el comportamiento saludable en el entorno escolar, a través de actividades educativas, interactivas y de campo."
    },
    objectives: {
      title: "Objetivos Generales",
      content: [
        "Difundir la conciencia sanitaria y ambiental entre los estudiantes.",
        "Fomentar el espíritu de ciudadanía ambiental y la participación activa.",
        "Involucrar a los estudiantes en proyectos prácticos de desarrollo sostenible.",
        "Vincular el aprendizaje teórico con prácticas de campo.",
        "Desarrollar habilidades blandas (Soft Skills) para la vida post-bachillerato."
      ]
    },
    motivations: {
      title: "Motivaciones",
      content: "El club tiene como objetivo contribuir al desarrollo de la conciencia sanitaria, acompañar las orientaciones nacionales hacia el desarrollo sostenible y desarrollar las competencias vitales de los estudiantes."
    },
    softSkills: {
      title: "Habilidades Blandas (Soft Skills)",
      content: [
        "Comunicación efectiva",
        "Trabajo en equipo y colaboración",
        "Resolución de problemas y toma de decisiones",
        "Liderazgo e iniciativa",
        "Gestión del tiempo y compromiso",
        "Inteligencia emocional"
      ]
    },
    activities: {
      title: "Naturaleza de las Actividades",
      content: "Actividades científicas, de concienciación, artísticas y de campo, incluyendo experimentos de laboratorio, investigaciones, campañas de limpieza, plantación de árboles y asociaciones locales."
    },
    vision: {
      title: "Visión Futura",
      content: "Convertir el club en un espacio educativo innovador para formar una generación consciente y proactiva en los campos de la salud y el medio ambiente."
    },
    register: {
      title: "Registro de Miembros",
      name: "Nombre Completo",
      class: "Clase",
      age: "Edad",
      level: "Nivel Educativo",
      submit: "Registrarse",
      success: "Su cliente de correo se abrirá para enviar su información.",
      emailSubject: "Nuevo Registro - Club de Medio Ambiente y Salud",
      emailBodyIntro: "Deseo unirme al club. Aquí está mi información:"
    },
    aiChat: {
      title: "Asistente IA del Club",
      placeholder: "Pregúntame sobre el club...",
      send: "Enviar",
      thinking: "Pensando...",
      welcome: "¡Hola! Soy el asistente IA del club. ¿Cómo puedo ayudarte hoy?"
    },
    footer: "Todos los derechos reservados © 2024 - Escuela Secundaria Abdallah Laroui"
  }
};