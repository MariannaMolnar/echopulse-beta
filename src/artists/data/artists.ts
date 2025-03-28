type LanguageSpecificString = {
  en: string;
  hu: string;
};

export interface Artist {
  id: string;
  name: string;
  locationCountry: LanguageSpecificString;
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
    locationCountry: { 
      en: "United Kingdom", 
      hu: "Egyesült Királyság" 
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
    image: "src/artists/images/01_artist-alter.jpg",
  },
  {
    id: "2",
    name: "Pulse Trio",
    locationCountry: { 
      en: "Germany", 
      hu: "Németország" 
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
    image: "src/artists/images/02_artist-dj-5.jpg",
  },
  {
    id: "3",
    name: "Aurora Beats",
    locationCountry: { 
      en: "Netherlands", 
      hu: "Hollandia" 
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
    image: "src/artists/images/03_artist-dj-trio.jpg",
  },
  {
    id: "4",
    name: "Bass Siren",
    locationCountry: { 
      en: "Canada", 
      hu: "Kanada" 
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
    image: "src/artists/images/04_artist-dnb.jpg",
  },
  {
    id: "5",
    name: "Echo & String",
    locationCountry: { 
      en: "France", 
      hu: "Franciaország" 
    },
    description: {
      en: "Echo & String is an acoustic duo known for their soul-stirring performances, blending heartfelt vocals with intricate guitar melodies.",
      hu: "Az Echo & String egy akusztikus duó, amely lélekmelengető előadásaival és bonyolult gitárdallamaival varázsolja el a közönséget.",
    },
    socialLinks: {
      youtube: "https://youtube.com/echostring",
      facebook: "https://facebook.com/echostring",
    },
    image: "src/artists/images/05_artist-duo.jpg",
  },
  {
    id: "6",
    name: "Wind Whisper",
    locationCountry: { 
      en: "Hungary", 
      hu: "Magyarország" 
    },
    description: {
      en: "Wind Whisper is a solo ethno musician whose flute compositions evoke the spirit of ancient traditions and nature’s harmony.",
      hu: "A Wind Whisper egy szóló etno zenész, akinek fuvolakompozíciói az ősi hagyományok és a természet harmóniáját idézik meg.",
    },
    socialLinks: {
      spotify: "https://spotify.com/windwhisper",
      facebook: "https://facebook.com/windwhisper",
    },
    image: "src/artists/images/06_artist-etno.jpg",
  },
  {
    id: "7",
    name: "Psyflow",
    locationCountry: { 
      en: "Israel", 
      hu: "Izrael" 
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
    image: "src/artists/images/07_artist-goa-dj.jpg",
  },
  {
    id: "8",
    name: "Steel Resonance",
    locationCountry: { 
      en: "Australia", 
      hu: "Ausztrália" 
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
    image: "src/artists/images/08_artist-hangdrum.jpg",
  },
  {
    id: "9",
    name: "Healing Rhythms",
    locationCountry: { 
      en: "Brazil", 
      hu: "Brazília" 
    },
    description: {
      en: "Healing Rhythms is a medicine band that fuses traditional indigenous sounds with modern spiritual music to create deeply transformative experiences.",
      hu: "A Healing Rhythms egy medicin banda, amely az ősi indián hangzásokat ötvözi a modern spirituális zenével, mélyen átalakító élményeket teremtve.",
    },
    socialLinks: {
      facebook: "https://facebook.com/healingrhythms",
      spotify: "https://spotify.com/healingrhythms",
    },
    image: "src/artists/images/09_artist-medicin-band.jpg",
  },
  {
    id: "10",
    name: "Roots Movement",
    locationCountry: { 
      en: "Jamaica", 
      hu: "Jamaica" 
    },
    description: {
      en: "Roots Movement is a reggae band bringing conscious lyrics and groovy rhythms to uplift the spirit and unite people.",
      hu: "A Roots Movement egy reggae zenekar, amely tudatos dalszövegekkel és groovy ritmusokkal emeli fel a lelket és egyesíti az embereket.",
    },
    socialLinks: {
      spotify: "https://spotify.com/rootsmovement",
      facebook: "https://facebook.com/rootsmovement",
    },
    image: "src/artists/images/10_artist-raggee.jpg",
  },
  {
    id: "11",
    name: "Afro Pulse",
    locationCountry: { 
      en: "South Africa", 
      hu: "Dél-afrikai Köztársaság" 
    },
    description: {
      en: "An Afro house DJ blending deep tribal beats with uplifting percussions.",
      hu: "Egy Afro house DJ, aki mély törzsi ütemeket és felemelő ütőhangszereket ötvöz.",
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/afropulse",
      facebook: "https://facebook.com/afropulse",
    },
    image: "src/artists/images/11_artist-portrait.jpg",
  },
  {
    id: "12",
    name: "Lunar Vibes",
    locationCountry: { 
      en: "Portugal", 
      hu: "Portugália" 
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
    image: "src/artists/images/12_artist-psy-trance-dj.jpg",
  },
  {
    id: "13",
    name: "PsyMirage",
    locationCountry: { 
      en: "Australia", 
      hu: "Ausztrália" 
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
    image: "src/artists/images/13_artist-psy-rock.jpg",
  },
  {
    id: "14",
    name: "CyberPulse",
    locationCountry: { 
      en: "Belgium", 
      hu: "Belgium" 
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
    image: "src/artists/images/14_artist-techno-dj.jpg",
  },
];
