import artistImg1 from "../images/01_artist-alter.jpg"
import artistImg2 from "../images/02_artist-dj-5.jpg"
import artistImg3 from "../images/03_artist-dj-trio.jpg"
import artistImg4 from "../images/04_artist-dnb.jpg"
import artistImg5 from "../images/05_artist-duo.jpg"
import artistImg6 from "../images/06_artist-etno.jpg"
import artistImg7 from "../images/07_artist-goa-dj.jpg"
import artistImg8 from "../images/08_artist-hangdrum.jpg"
import artistImg9 from "../images/09_artist-medicin-band.jpg"
import artistImg10 from "../images/10_artist-raggee.jpg"
import artistImg11 from "../images/11_artist-portrait.jpg"
import artistImg12 from "../images/12_artist-psy-trance-dj.jpg"
import artistImg13 from "../images/13_artist-psy-rock.jpg"
import artistImg14 from "../images/14_artist-techno-dj.jpg"


type LanguageSpecificString = {
  en: string;
  hu: string;
};

export interface Artist {
  id: string;
  name: string;
  country: {
    name: LanguageSpecificString;
    code: string;
  };
  description: LanguageSpecificString;
  socialLinks: {
    soundCloud?: string;
    spotify?: string;
    youtube?: string;
    facebook?: string;
    website?: string;
  };
  image: string;
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "Shadow Echo",
    country: {
      name: {
        en: "United Kingdom",
        hu: "Egyesült Királyság",
      },
      code: "GB",
    },
    description: {
      en: "Shadow Echo is an alternative musician blending deep lyrical storytelling with ambient rock textures. His music takes inspiration from the echoes of personal experiences and the raw energy of post-rock.",
      hu: "Shadow Echo egy alternatív zenész, aki mély lírai történetmesélést ötvöz ambient rock hangzásokkal. Zenéje személyes tapasztalatok visszhangjából és a poszt-rock nyers energiájából merít inspirációt.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/shadowecho",
      website: "https://shadowecho.com",
      facebook: "https://facebook.com/shadowecho",
      spotify: "https://spotify.com/shadowecho",
    },
    image: artistImg1,
  },
  {
    id: "2",
    name: "Pulse Trio",
    country: {
      name: {
        en: "Germany",
        hu: "Németország",
      },
      code: "DE",
    },
    description: {
      en: "Pulse Trio is a dynamic DJ collective known for their high-energy electronic sets that blend house, techno, and progressive elements into an unforgettable experience.",
      hu: "A Pulse Trio egy dinamikus DJ kollektíva, amely nagy energiájú elektronikus szettjeiről ismert, ötvözve a house, techno és progresszív elemeket egy felejthetetlen élménybe.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/pulsetrio",
      website: "https://pulsetrio.de",
      facebook: "https://facebook.com/pulsetrio",
    },
    image: artistImg2,
  },
  {
    id: "3",
    name: "Aurora Beats",
    country: {
      name: {
        en: "Netherlands",
        hu: "Hollandia",
      },
      code: "NL",
    },
    description: {
      en: "Aurora Beats is an electrifying DJ trio that merges ethereal vocals with deep, pulsating basslines, creating an immersive dancefloor journey.",
      hu: "Az Aurora Beats egy lenyűgöző DJ trió, amely éteri vokálokat ötvöz mély, pulzáló basszusokkal, magával ragadó tánctéri utazást teremtve.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/aurorabeats",
      website: "https://aurorabeats.nl",
      facebook: "https://facebook.com/aurorabeats",
      spotify: "https://spotify.com/aurorabeats",
    },
    image: artistImg3,
  },
  {
    id: "4",
    name: "Bass Siren",
    country: {
      name: {
        en: "Canada",
        hu: "Kanada",
      },
      code: "CA",
    },
    description: {
      en: "Bass Siren is a drum and bass DJ whose hypnotic beats and fierce energy have captivated audiences worldwide, bringing underground rhythms to the forefront.",
      hu: "A Bass Siren egy drum and bass DJ, akinek hipnotikus ütemei és energikus előadásai világszerte magukkal ragadják a közönséget, az underground ritmusokat előtérbe helyezve.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/basssiren",
      facebook: "https://facebook.com/basssiren",
      spotify: "https://spotify.com/basssiren",
    },
    image: artistImg4,
  },
  {
    id: "5",
    name: "Echo & String",
    country: {
      name: {
        en: "France",
        hu: "Franciaország",
      },
      code: "FR",
    },
    description: {
      en: "Echo & String is an acoustic duo known for their soul-stirring performances, blending heartfelt vocals with intricate guitar melodies.",
      hu: "Az Echo & String egy akusztikus duó, amely lélekmelengető előadásaival és bonyolult gitárdallamaival varázsolja el a közönséget.",
    },
    socialLinks: {
      youtube: "https://youtube.com/echostring",
      facebook: "https://facebook.com/echostring",
    },
    image: artistImg5,
  },
  {
    id: "6",
    name: "Wind Whisper",
    country: {
      name: {
        en: "Hungary",
        hu: "Magyarország",
      },
      code: "HU",
    },
    description: {
      en: "Wind Whisper is a solo ethno musician whose flute compositions evoke the spirit of ancient traditions and nature’s harmony.",
      hu: "A Wind Whisper egy szóló etno zenész, akinek fuvolakompozíciói az ősi hagyományok és a természet harmóniáját idézik meg.",
    },
    socialLinks: {
      spotify: "https://spotify.com/windwhisper",
      facebook: "https://facebook.com/windwhisper",
    },
    image: artistImg6,
  },
  {
    id: "7",
    name: "Psyflow",
    country: {
      name: {
        en: "Israel",
        hu: "Izrael",
      },
      code: "IL",
    },
    description: {
      en: "Psyflow is a Goa DJ known for his hypnotic beats and euphoric soundscapes that transport listeners to another dimension.",
      hu: "A Psyflow egy Goa DJ, aki hipnotikus ütemeivel és eufórikus hangképeivel egy másik dimenzióba repíti hallgatóit.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/psyflow",
      facebook: "https://facebook.com/psyflow",
      spotify: "https://spotify.com/psyflow",
    },
    image: artistImg7,
  },
  {
    id: "8",
    name: "Steel Resonance",
    country: {
      name: {
        en: "Australia",
        hu: "Ausztrália",
      },
      code: "AU",
    },
    description: {
      en: "Steel Resonance is a hang drum musician who crafts mesmerizing rhythms that soothe the soul and awaken the senses.",
      hu: "A Steel Resonance egy hangdrum zenész, aki lenyűgöző ritmusokat alkot, amelyek megnyugtatják a lelket és felébresztik az érzékeket.",
    },
    socialLinks: {
      youtube: "https://youtube.com/steelresonance",
      facebook: "https://facebook.com/steelresonance",
      spotify: "https://spotify.com/steelresonance",
    },
    image: artistImg8,
  },
  {
    id: "9",
    name: "Healing Rhythms",
    country: {
      name: {
        en: "Brazil",
        hu: "Brazília",
      },
      code: "BR",
    },
    description: {
      en: "Healing Rhythms is a medicine band that fuses traditional indigenous sounds with modern spiritual music to create deeply transformative experiences.",
      hu: "A Healing Rhythms egy medicin banda, amely az ősi indián hangzásokat ötvözi a modern spirituális zenével, mélyen átalakító élményeket teremtve.",
    },
    socialLinks: {
      facebook: "https://facebook.com/healingrhythms",
      spotify: "https://spotify.com/healingrhythms",
    },
    image: artistImg9,
  },
  {
    id: "10",
    name: "Roots Movement",
    country: {
      name: {
        en: "Jamaica",
        hu: "Jamaica",
      },
      code: "JM",
    },
    description: {
      en: "Roots Movement is a reggae band bringing conscious lyrics and groovy rhythms to uplift the spirit and unite people.",
      hu: "A Roots Movement egy reggae zenekar, amely tudatos dalszövegekkel és groovy ritmusokkal emeli fel a lelket és egyesíti az embereket.",
    },
    socialLinks: {
      spotify: "https://spotify.com/rootsmovement",
      facebook: "https://facebook.com/rootsmovement",
    },
    image: artistImg10,
  },
  {
    id: "11",
    name: "Afro Pulse",
    country: {
      name: {
        en: "South Africa",
        hu: "Dél-afrikai Köztársaság",
      },
      code: "ZA",
    },
    description: {
      en: "An Afro house DJ blending deep tribal beats with uplifting percussions.",
      hu: "Egy Afro house DJ, aki mély törzsi ütemeket és felemelő ütőhangszereket ötvöz.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/afropulse",
      facebook: "https://facebook.com/afropulse",
    },
    image: artistImg11,
  },
  {
    id: "12",
    name: "Lunar Vibes",
    country: {
      name: {
        en: "Portugal",
        hu: "Portugália",
      },
      code: "PT",
    },
    description: {
      en: "A psy-trance DJ with an atmospheric and energetic sound, taking audiences on a deep cosmic journey.",
      hu: "Egy psy-trance DJ atmoszférikus és energikus hangzással, amely mély kozmikus utazásra viszi a közönséget.",
    },
    socialLinks: {
      youtube: "https://youtube.com/lunarvibes",
      facebook: "https://facebook.com/lunarvibes",
      spotify: "https://spotify.com/lunarvibes",
    },
    image: artistImg12,
  },
  {
    id: "13",
    name: "PsyMirage",
    country: {
      name: {
        en: "Australia",
        hu: "Ausztrália",
      },
      code: "AU",
    },
    description: {
      en: "PsyMirage is a psychedelic rock band known for their surreal soundscapes, intricate guitar riffs, and hypnotic rhythms. The four-member group blends vintage 70s influences with modern experimental rock, creating an immersive sonic experience.",
      hu: "A PsyMirage egy pszichedelikus rockzenekar, amely szürreális hangzásvilágáról, összetett gitárriffjeiről és hipnotikus ritmusairól ismert. A négytagú együttes a 70-es évek vintage hatásait ötvözi a modern kísérleti rockkal, így teremtve magával ragadó zenei élményt.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/psymirage",
      spotify: "https://spotify.com/psymirage",
      website: "https://psynmirageband.com",
      youtube: "https://youtube.com/psymirage",
      facebook: "https://facebook.com/psymirage",
    },
    image: artistImg13,
  },
  {
    id: "14",
    name: "CyberPulse",
    country: {
      name: {
        en: "Belgium",
        hu: "Belgium",
      },
      code: "BE",
    },
    description: {
      en: "CyberPulse is a techno DJ and producer crafting futuristic, high-energy beats infused with deep basslines and hypnotic synths. His sets are a fusion of underground warehouse vibes and cutting-edge electronic innovation.",
      hu: "CyberPulse egy techno DJ és producer, aki futurisztikus, pörgős ütemeket alkot mély basszusokkal és hipnotikus szintetizátorhangokkal. Szettjei az underground raktárpartik hangulatát ötvözik a legmodernebb elektronikus újításokkal.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/cyberpulse",
      youtube: "https://youtube.com/cyberpulse",
      facebook: "https://facebook.com/cyberpulse",
      website: "https://cyberpulsemusic.com",
    },
    image: artistImg14,
  },
];
