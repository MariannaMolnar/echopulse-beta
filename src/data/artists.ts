import artistImg1 from "../images/artists/01_artist-alter.jpg";
import artistImg2 from "../images/artists/02_artist-dj-5.jpg";
import artistImg3 from "../images/artists/03_artist-dj-trio.jpg";
import artistImg4 from "../images/artists/04_artist-dnb.jpg";
import artistImg5 from "../images/artists/05_artist-duo.jpg";
import artistImg6 from "../images/artists/06_artist-etno.jpg";
import artistImg7 from "../images/artists/07_artist-goa-dj.jpg";
import artistImg8 from "../images/artists/08_artist-hangdrum.jpg";
import artistImg9 from "../images/artists/09_artist-medicin-band.jpg";
import artistImg10 from "../images/artists/10_artist-raggee.jpg";
import artistImg11 from "../images/artists/11_artist-portrait.jpg";
import artistImg12 from "../images/artists/12_artist-psy-trance-dj.jpg";
import artistImg13 from "../images/artists/13_artist-psy-rock.jpg";
import artistImg14 from "../images/artists/14_artist-techno-dj.jpg";

const fillingText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi asperiores tenetur quae maiores voluptate doloribus, veritatis impedit, aliquam repudiandae natus iure at reiciendis labore animi laborum ad, explicabo ut beatae.";

export type LanguageSpecificString = {
  en: string;
  hu: string;
};

type SocialLinks = {
  soundCloud?: string;
  spotify?: string;
  youtube?: string;
  facebook?: string;
  website?: string;
  instagram?: string;
  tiktok?: string;
};

export interface Artist {
  id: string;
  name: string;
  country: {
    name: LanguageSpecificString;
    code: string;
  };
  description: LanguageSpecificString;
  socialLinks: SocialLinks;
  image: string;
  embedding: {
    soundcloud?: string;
    spotify?: string;
  };
}

const meoCulpaLinks = {
  singleTrack: {
    soundcloud: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2052324496&color=%230a1920&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/meoculpa" title="MΣO CULPA" target="_blank" style="color: #cccccc; text-decoration: none;">MΣO CULPA</a> · <a href="https://soundcloud.com/meoculpa/tilos-cokxpon-mix-eklektik" title="Meo Culpa aka. morphēo ● Cökxpôn Ambient Radio Show | TILOS RADIO" target="_blank" style="color: #cccccc; text-decoration: none;">Meo Culpa aka. morphēo ● Cökxpôn Ambient Radio Show | TILOS RADIO</a></div>`,
    spotify: ``,
  },
  playlist: {
    soundcloud: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1974840528&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/meoculpa" title="MΣO CULPA" target="_blank" style="color: #cccccc; text-decoration: none;">MΣO CULPA</a> · <a href="https://soundcloud.com/meoculpa/sets/meo-culpa-baladi-ethnotech" title="Meo Culpa &amp; Baladi PLAYLIST @ Ethnotech-Kassa hajó" target="_blank" style="color: #cccccc; text-decoration: none;">Meo Culpa &amp; Baladi PLAYLIST @ Ethnotech-Kassa hajó</a></div>`,
    spotify: ``,
  },
};

const medicinaLinks = {
  singleTrack: {
    soundcloud: ``,
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4iHq3KGAs0FSTbpzyNgXvE?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  playlist: {
    soundcloud: ``,
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4eLsyhKi6u20mrDwMxJRD3?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
};

const medicinaLinksCompact = {
  singleTrack: {
    soundcloud: ``,
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4iHq3KGAs0FSTbpzyNgXvE?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
  playlist: {
    soundcloud: ``,
    spotify: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4eLsyhKi6u20mrDwMxJRD3?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },
};

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
      en: `Shadow Echo is an alternative musician blending deep lyrical storytelling with ambient rock textures. His music takes inspiration from the echoes of personal experiences and the raw energy of post-rock.\n
        ${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
      hu: `Shadow Echo egy alternatív zenész, aki mély lírai történetmesélést ötvöz ambient rock hangzásokkal. Zenéje személyes tapasztalatok visszhangjából és a poszt-rock nyers energiájából merít inspirációt.\n
        ${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/shadowecho",
      website: "https://shadowecho.com",
      facebook: "https://facebook.com/shadowecho",
      spotify: "https://spotify.com/shadowecho",
    },
    image: artistImg1,
    embedding: {
      soundcloud: meoCulpaLinks.singleTrack.soundcloud,
    },
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
      en: `Pulse Trio is a dynamic DJ collective known for their high-energy electronic sets that blend house, techno, and progressive elements into an unforgettable experience.\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
      hu: `A Pulse Trio egy dinamikus DJ kollektíva, amely nagy energiájú elektronikus szettjeiről ismert, ötvözve a house, techno és progresszív elemeket egy felejthetetlen élménybe.\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/pulsetrio",
      website: "https://pulsetrio.de",
      facebook: "https://facebook.com/pulsetrio",
    },
    image: artistImg2,
    embedding: {
      soundcloud: meoCulpaLinks.singleTrack.soundcloud,
    },
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
      en: `Aurora Beats is an electrifying DJ trio that merges ethereal vocals with deep, pulsating basslines, creating an immersive dancefloor journey.\n
        ${fillingText}\n
        ${fillingText}`,
      hu: `Az Aurora Beats egy lenyűgöző DJ trió, amely éteri vokálokat ötvöz mély, pulzáló basszusokkal, magával ragadó tánctéri utazást teremtve.\n
        ${fillingText}\n
        ${fillingText}`,
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/aurorabeats",
      website: "https://aurorabeats.nl",
      facebook: "https://facebook.com/aurorabeats",
      spotify: "https://spotify.com/aurorabeats",
    },
    image: artistImg3,
    embedding: {
      soundcloud: meoCulpaLinks.playlist.soundcloud,
    },
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
      en: `Bass Siren is a drum and bass DJ whose hypnotic beats and fierce energy have captivated audiences worldwide, bringing underground rhythms to the forefront.\n
        ${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}${fillingText}`,
      hu: `A Bass Siren egy drum and bass DJ, akinek hipnotikus ütemei és energikus előadásai világszerte magukkal ragadják a közönséget, az underground ritmusokat előtérbe helyezve.\n
        ${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}${fillingText}`,
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/basssiren",
      facebook: "https://facebook.com/basssiren",
      spotify: "https://spotify.com/basssiren",
    },
    image: artistImg4,
    embedding: {
      soundcloud: meoCulpaLinks.playlist.soundcloud,
    },
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
      en: `Echo & String is an acoustic duo known for their soul-stirring performances, blending heartfelt vocals with intricate guitar melodies.\n
        ${fillingText}${fillingText}${fillingText}\n
        ${fillingText}${fillingText}`,
      hu: `Az Echo & String egy akusztikus duó, amely lélekmelengető előadásaival és bonyolult gitárdallamaival varázsolja el a közönséget.\n
        ${fillingText}${fillingText}${fillingText}\n
        ${fillingText}${fillingText}`,
    },
    socialLinks: {
      youtube: "https://youtube.com/echostring",
      facebook: "https://facebook.com/echostring",
    },
    image: artistImg5,
    embedding: {
      spotify: medicinaLinks.singleTrack.spotify,
    },
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
      en: `Wind Whisper is a solo ethno musician whose flute compositions evoke the spirit of ancient traditions and nature’s harmony.\n
        ${fillingText}\n
        ${fillingText}\n
        ${fillingText}${fillingText}`,
      hu: `"A Wind Whisper egy szóló etno zenész, akinek fuvolakompozíciói az ősi hagyományok és a természet harmóniáját idézik meg.\n
        ${fillingText}\n
        ${fillingText}\n
        ${fillingText}${fillingText}`,
    },
    socialLinks: {
      spotify: "https://spotify.com/windwhisper",
      facebook: "https://facebook.com/windwhisper",
    },
    image: artistImg6,
    embedding: {
      spotify: medicinaLinks.playlist.spotify,
    },
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
      en: `Psyflow is a Goa DJ known for his hypnotic beats and euphoric soundscapes that transport listeners to another dimension.\n
        ${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}${fillingText}`,
      hu: `A Psyflow egy Goa DJ, aki hipnotikus ütemeivel és eufórikus hangképeivel egy másik dimenzióba repíti hallgatóit.\n
        ${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}${fillingText}`,
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/psyflow",
      facebook: "https://facebook.com/psyflow",
      spotify: "https://spotify.com/psyflow",
    },
    image: artistImg7,
    embedding: {
      soundcloud: meoCulpaLinks.playlist.soundcloud,
    },
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
      en: `Steel Resonance is a hang drum musician who crafts mesmerizing rhythms that soothe the soul and awaken the senses.\n
        ${fillingText}\n
        ${fillingText}\n
        ${fillingText}`,
      hu: `A Steel Resonance egy hangdrum zenész, aki lenyűgöző ritmusokat alkot, amelyek megnyugtatják a lelket és felébresztik az érzékeket.\n
        ${fillingText}\n
        ${fillingText}\n
        ${fillingText}`,
    },
    socialLinks: {
      youtube: "https://youtube.com/steelresonance",
      facebook: "https://facebook.com/steelresonance",
      spotify: "https://spotify.com/steelresonance",
    },
    image: artistImg8,
    embedding: {
      spotify: medicinaLinksCompact.singleTrack.spotify,
    },
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
      en: `Healing Rhythms is a medicine band that fuses traditional indigenous sounds with modern spiritual music to create deeply transformative experiences.\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
      hu: `A Healing Rhythms egy medicin banda, amely az ősi indián hangzásokat ötvözi a modern spirituális zenével, mélyen átalakító élményeket teremtve.\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
    },
    socialLinks: {
      facebook: "https://facebook.com/healingrhythms",
      spotify: "https://spotify.com/healingrhythms",
    },
    image: artistImg9,
    embedding: {
      spotify: medicinaLinksCompact.playlist.spotify,
    },
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
      en: `Roots Movement is a reggae band bringing conscious lyrics and groovy rhythms to uplift the spirit and unite people.\n
        ${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
      hu: `A Roots Movement egy reggae zenekar, amely tudatos dalszövegekkel és groovy ritmusokkal emeli fel a lelket és egyesíti az embereket.\n
        ${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
    },
    socialLinks: {
      spotify: "https://spotify.com/rootsmovement",
      facebook: "https://facebook.com/rootsmovement",
    },
    image: artistImg10,
    embedding: {
      soundcloud: meoCulpaLinks.playlist.soundcloud,
    },
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
      en: `An Afro house DJ blending deep tribal beats with uplifting percussions.\n
        ${fillingText}${fillingText}\n
        ${fillingText}${fillingText}${fillingText}\n
        ${fillingText}${fillingText}`,
      hu: `Egy Afro house DJ, aki mély törzsi ütemeket és felemelő ütőhangszereket ötvöz.\n
        ${fillingText}${fillingText}\n
        ${fillingText}${fillingText}${fillingText}\n
        ${fillingText}${fillingText}`,
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/afropulse",
      facebook: "https://facebook.com/afropulse",
    },
    image: artistImg11,
    embedding: {
      soundcloud: meoCulpaLinks.singleTrack.soundcloud,
    },
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
      en: `A psy-trance DJ with an atmospheric and energetic sound, taking audiences on a deep cosmic journey.\n
        ${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
      hu: `Egy psy-trance DJ atmoszférikus és energikus hangzással, amely mély kozmikus utazásra viszi a közönséget.\n
        ${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
    },
    socialLinks: {
      youtube: "https://youtube.com/lunarvibes",
      facebook: "https://facebook.com/lunarvibes",
      spotify: "https://spotify.com/lunarvibes",
    },
    image: artistImg12,
    embedding: {
      soundcloud: meoCulpaLinks.singleTrack.soundcloud,
    },
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
      en: `PsyMirage is a psychedelic rock band known for their surreal soundscapes, intricate guitar riffs, and hypnotic rhythms. The four-member group blends vintage 70s influences with modern experimental rock, creating an immersive sonic experience.\n
        ${fillingText}${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
      hu: `A PsyMirage egy pszichedelikus rockzenekar, amely szürreális hangzásvilágáról, összetett gitárriffjeiről és hipnotikus ritmusairól ismert. A négytagú együttes a 70-es évek vintage hatásait ötvözi a modern kísérleti rockkal, így teremtve magával ragadó zenei élményt.\n
        ${fillingText}${fillingText}\n
        ${fillingText}${fillingText}\n
        ${fillingText}`,
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/psymirage",
      spotify: "https://spotify.com/psymirage",
      website: "https://psynmirageband.com",
      youtube: "https://youtube.com/psymirage",
      facebook: "https://facebook.com/psymirage",
      instagram: "https://instagram.com/psymirage",
      tiktok: "https://tiktok.com/@psymirage.official",
    },
    image: artistImg13,
    embedding: {
      soundcloud: meoCulpaLinks.playlist.soundcloud,
    },
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
      en: `CyberPulse is a techno DJ and producer crafting futuristic, high-energy beats infused with deep basslines and hypnotic synths. His sets are a fusion of underground warehouse vibes and cutting-edge electronic innovation.\n
        ${fillingText}\n
        ${fillingText}`,
      hu: `CyberPulse egy techno DJ és producer, aki futurisztikus, pörgős ütemeket alkot mély basszusokkal és hipnotikus szintetizátorhangokkal. Szettjei az underground raktárpartik hangulatát ötvözik a legmodernebb elektronikus újításokkal.\n
        ${fillingText}\n
        ${fillingText}`,
    },
    socialLinks: {
      soundCloud: "https://soundcloud.com/cyberpulse",
      youtube: "https://youtube.com/cyberpulse",
      facebook: "https://facebook.com/cyberpulse",
      website: "https://cyberpulsemusic.com",
    },
    image: artistImg14,
    embedding: {
      soundcloud: meoCulpaLinks.singleTrack.soundcloud,
    },
  },
];
