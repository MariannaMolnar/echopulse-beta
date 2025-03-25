export interface Artist {
  id: string;
  name: string;
  locationCountry: string;
  description: {
    [key: string]: string; // Translation mapping (e.g., { en: "Bio in English" })
  };
  socialLinks: {
    soundCloud?: string;
    spotify?: string;
    youtube?: string;
    facebook?: string;
    website?: string;
  };
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "Shadow Echo",
    locationCountry: "United Kingdom",
    description: {
      en: "Shadow Echo is an alternative musician blending deep lyrical storytelling with ambient rock textures. His music takes inspiration from the echoes of personal experiences and the raw energy of post-rock.",
      hu: "Shadow Echo egy alternatív zenész, aki mély lírai történetmesélést ötvöz ambient rock hangzásokkal. Zenéje személyes tapasztalatok visszhangjából és a poszt-rock nyers energiájából merít inspirációt.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/shadowecho",
      website: "https://shadowecho.com",
    },
  },
  {
    id: "2",
    name: "Neon Pulse",
    locationCountry: "Germany",
    description: {
      en: "Neon Pulse is a dynamic DJ collective known for their high-energy electronic sets that blend house, techno, and progressive elements into an unforgettable experience.",
      hu: "A Neon Pulse egy dinamikus DJ kollektíva, amely nagy energiájú elektronikus szettjeiről ismert, ötvözve a house, techno és progresszív elemeket egy felejthetetlen élménybe.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/neonpulse",
      website: "https://neonpulse.de",
    },
  },
  {
    id: "3",
    name: "Aurora Beats",
    locationCountry: "Netherlands",
    description: {
      en: "Aurora Beats is an electrifying DJ trio that merges ethereal vocals with deep, pulsating basslines, creating an immersive dancefloor journey.",
      hu: "Az Aurora Beats egy lenyűgöző DJ trió, amely éteri vokálokat ötvöz mély, pulzáló basszusokkal, magával ragadó tánctéri utazást teremtve.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/aurorabeats",
      website: "https://aurorabeats.nl",
    },
  },
  {
    id: "4",
    name: "Bass Siren",
    locationCountry: "Canada",
    description: {
      en: "Bass Siren is a drum and bass DJ whose hypnotic beats and fierce energy have captivated audiences worldwide, bringing underground rhythms to the forefront.",
      hu: "A Bass Siren egy drum and bass DJ, akinek hipnotikus ütemei és energikus előadásai világszerte magukkal ragadják a közönséget, az underground ritmusokat előtérbe helyezve.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/basssiren",
    },
  },
  {
    id: "5",
    name: "Echo & String",
    locationCountry: "France",
    description: {
      en: "Echo & String is an acoustic duo known for their soul-stirring performances, blending heartfelt vocals with intricate guitar melodies.",
      hu: "Az Echo & String egy akusztikus duó, amely lélekmelengető előadásaival és bonyolult gitárdallamaival varázsolja el a közönséget.",
    },
    socialLinks: {
      youtube: "https://youtube.com/echostring",
    },
  },
  {
    id: "6",
    name: "Wind Whisper",
    locationCountry: "Hungary",
    description: {
      en: "Wind Whisper is a solo ethno musician whose flute compositions evoke the spirit of ancient traditions and nature’s harmony.",
      hu: "A Wind Whisper egy szóló etno zenész, akinek fuvolakompozíciói az ősi hagyományok és a természet harmóniáját idézik meg.",
    },
    socialLinks: {
      spotify: "https://spotify.com/windwhisper",
    },
  },
  {
    id: "7",
    name: "Psyflow",
    locationCountry: "Israel",
    description: {
      en: "Psyflow is a Goa DJ known for his hypnotic beats and euphoric soundscapes that transport listeners to another dimension.",
      hu: "A Psyflow egy Goa DJ, aki hipnotikus ütemeivel és eufórikus hangképeivel egy másik dimenzióba repíti hallgatóit.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/psyflow",
    },
  },
  {
    id: "8",
    name: "Steel Resonance",
    locationCountry: "Australia",
    description: {
      en: "Steel Resonance is a hang drum musician who crafts mesmerizing rhythms that soothe the soul and awaken the senses.",
      hu: "A Steel Resonance egy hangdrum zenész, aki lenyűgöző ritmusokat alkot, amelyek megnyugtatják a lelket és felébresztik az érzékeket.",
    },
    socialLinks: {
      youtube: "https://youtube.com/steelresonance",
    },
  },
  {
    id: "9",
    name: "Healing Rhythms",
    locationCountry: "Brazil",
    description: {
      en: "Healing Rhythms is a medicine band that fuses traditional indigenous sounds with modern spiritual music to create deeply transformative experiences.",
      hu: "A Healing Rhythms egy medicin banda, amely az ősi indián hangzásokat ötvözi a modern spirituális zenével, mélyen átalakító élményeket teremtve.",
    },
    socialLinks: {
      facebook: "https://facebook.com/healingrhythms",
    },
  },
  {
    id: "10",
    name: "Roots Movement",
    locationCountry: "Jamaica",
    description: {
      en: "Roots Movement is a reggae band bringing conscious lyrics and groovy rhythms to uplift the spirit and unite people.",
      hu: "A Roots Movement egy reggae zenekar, amely tudatos dalszövegekkel és groovy ritmusokkal emeli fel a lelket és egyesíti az embereket.",
    },
    socialLinks: {
      spotify: "https://spotify.com/rootsmovement",
    },
  },
  {
    id: "11",
    name: "Afro Pulse",
    locationCountry: "South Africa",
    description: {
      en: "An Afro house DJ blending deep tribal beats with uplifting percussions.",
      hu: "Egy Afro house DJ, aki mély törzsi ütemeket és felemelő ütőhangszereket ötvöz.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/afropulse",
    },
  },
  {
    id: "12",
    name: "Lunar Vibes",
    locationCountry: "Portugal",
    description: {
      en: "A psy-trance DJ with an atmospheric and energetic sound, taking audiences on a deep cosmic journey.",
      hu: "Egy psy-trance DJ atmoszférikus és energikus hangzással, amely mély kozmikus utazásra viszi a közönséget.",
    },
    socialLinks: {
      youtube: "https://youtube.com/lunarvibes",
    },
  },
  {
    id: "13",
    name: "Neon Mirage",
    locationCountry: "Australia",
    description: {
      en: "Neon Mirage is a psychedelic rock band known for their surreal soundscapes, intricate guitar riffs, and hypnotic rhythms. The four-member group blends vintage 70s influences with modern experimental rock, creating an immersive sonic experience.",
      hu: "A Neon Mirage egy pszichedelikus rockzenekar, amely szürreális hangzásvilágáról, összetett gitárriffjeiről és hipnotikus ritmusairól ismert. A négytagú együttes a 70-es évek vintage hatásait ötvözi a modern kísérleti rockkal, így teremtve magával ragadó zenei élményt.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/neonmirage",
      spotify: "https://spotify.com/neonmirage",
      website: "https://neonmirageband.com",
    },
  },
  {
    id: "14",
    name: "CyberPulse",
    locationCountry: "Belgium",
    description: {
      en: "CyberPulse is a techno DJ and producer crafting futuristic, high-energy beats infused with deep basslines and hypnotic synths. His sets are a fusion of underground warehouse vibes and cutting-edge electronic innovation.",
      hu: "CyberPulse egy techno DJ és producer, aki futurisztikus, pörgős ütemeket alkot mély basszusokkal és hipnotikus szintetizátorhangokkal. Szettjei az underground raktárpartik hangulatát ötvözik a legmodernebb elektronikus újításokkal.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/cyberpulse",
      youtube: "https://youtube.com/cyberpulse",
      website: "https://cyberpulsemusic.com",
    },
  },
];
