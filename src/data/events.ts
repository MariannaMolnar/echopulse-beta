import { Artist, LanguageSpecificString, artists } from "./artists";
import { eventImages } from "./eventImages";

type Address = {
  city: LanguageSpecificString;
  country: {
    name: LanguageSpecificString;
    code: string;
  };
};

export interface Event {
  id: string;
  name: string;
  date: Date;
  ticketsLink: string;
  facebookEventLink: string;
  image: string;
  address: Address;
  artists: Artist[];
}

function sortEvents(events: Event[], sortType: "asc" | "desc") {
  if (sortType === "asc") {
    return [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
  }
  return [...events].sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function isFutureDate(eventDate: Date): boolean {
  const currentDate = new Date();
  return eventDate >= currentDate;
}

export function splitEventsByDate(sortedEvents: Event[]) {
  const future: Event[] = [];
  const past: Event[] = [];

  sortedEvents.forEach((event) => {
    const isFuture = isFutureDate(event.date);
    if (isFuture) {
      future.push(event);
    } else {
      past.push(event);
    }
  });

  const futureAsc = sortEvents(future, "asc");
  const pastDesc = sortEvents(past, "desc");

  return { futureAsc, pastDesc };
}

export const events: Event[] = [
  {
    id: "1",
    name: "Psyhic Party",
    date: new Date("2025-05-15T20:00:00Z"),
    ticketsLink: "https://tickets.example.com/psyhic-party",
    facebookEventLink: "https://facebook.com/events/psyhic-party",
    image: eventImages[0],
    address: {
      city: {
        en: "Berlin",
        hu: "Berlin",
      },
      country: {
        name: {
          en: "Germany",
          hu: "Németország",
        },
        code: "DE",
      },
    },
    artists: [artists[11], artists[12]], // Lunar Vibes (Psy-trance DJ) & Psychedelic Rock Band
  },
  {
    id: "2",
    name: "Ethereal Beats Festival",
    date: new Date("2025-06-10T18:00:00Z"),
    ticketsLink: "https://tickets.example.com/ethereal-beats",
    facebookEventLink: "https://facebook.com/events/ethereal-beats",
    image: eventImages[1],
    address: {
      city: { en: "Amsterdam", hu: "Amszterdam" },
      country: { name: { en: "Netherlands", hu: "Hollandia" }, code: "NL" },
    },
    artists: [artists[2], artists[6]], // Trinity Groove (DJ trio) & Astral Traveler (Goa DJ)
  },
  {
    id: "3",
    name: "Mystic Sound Journey",
    date: new Date("2025-07-05T21:00:00Z"),
    ticketsLink: "https://tickets.example.com/mystic-sound",
    facebookEventLink: "https://facebook.com/events/mystic-sound",
    image: eventImages[2],
    address: {
      city: { en: "Budapest", hu: "Budapest" },
      country: { name: { en: "Hungary", hu: "Magyarország" }, code: "HU" },
    },
    artists: [artists[5], artists[7], artists[8]], // Elara Winds (Flutist), Echo Drums (Hangdrum), Healing Spirits (Medicine Band)
  },
  {
    id: "4",
    name: "Reggae Vibes Open Air",
    date: new Date("2025-07-20T17:00:00Z"),
    ticketsLink: "https://tickets.example.com/reggae-vibes",
    facebookEventLink: "https://facebook.com/events/reggae-vibes",
    image: eventImages[3],
    address: {
      city: { en: "Kingston", hu: "Kingston" },
      country: { name: { en: "Jamaica", hu: "Jamaika" }, code: "JM" },
    },
    artists: [artists[9]], // Roots Connection (Reggae Band)
  },
  {
    id: "5",
    name: "Underground Techno Nights",
    date: new Date("2025-08-08T23:00:00Z"),
    ticketsLink: "https://tickets.example.com/underground-techno",
    facebookEventLink: "https://facebook.com/events/underground-techno",
    image: eventImages[4],
    address: {
      city: { en: "Berlin", hu: "Berlin" },
      country: { name: { en: "Germany", hu: "Németország" }, code: "DE" },
    },
    artists: [artists[13]], // Techno DJ
  },
  {
    id: "6",
    name: "Tribal Elements Gathering",
    date: new Date("2025-09-12T19:00:00Z"),
    ticketsLink: "https://tickets.example.com/tribal-elements",
    facebookEventLink: "https://facebook.com/events/tribal-elements",
    image: eventImages[5],
    address: {
      city: { en: "Cape Town", hu: "Fokváros" },
      country: { name: { en: "South Africa", hu: "Dél-Afrika" }, code: "ZA" },
    },
    artists: [artists[10], artists[8]], // Afro Pulse (Afro DJ) & Healing Spirits (Medicine Band)
  },
  {
    id: "7",
    name: "Acoustic Serenity Night",
    date: new Date("2025-10-15T18:30:00Z"),
    ticketsLink: "https://tickets.example.com/acoustic-serenity",
    facebookEventLink: "https://facebook.com/events/acoustic-serenity",
    image: eventImages[6],
    address: {
      city: { en: "Paris", hu: "Párizs" },
      country: { name: { en: "France", hu: "Franciaország" }, code: "FR" },
    },
    artists: [artists[4]], // Harmony Strings (Acoustic Duo)
  },
  {
    id: "8",
    name: "Future Bass Explosion",
    date: new Date("2025-11-05T22:00:00Z"),
    ticketsLink: "https://tickets.example.com/future-bass",
    facebookEventLink: "https://facebook.com/events/future-bass",
    image: eventImages[7],
    address: {
      city: { en: "New York", hu: "New York" },
      country: {
        name: { en: "United States", hu: "Amerikai Egyesült Államok" },
        code: "US",
      },
    },
    artists: [artists[0], artists[3]], // Ethan Void (Alternative) & Bass Catalyst (DNB DJ)
  },
  {
    id: "9",
    name: "Electronic Fusion Night",
    date: new Date("2025-12-20T20:00:00Z"),
    ticketsLink: "https://tickets.example.com/electronic-fusion",
    facebookEventLink: "https://facebook.com/events/electronic-fusion",
    image: eventImages[8],
    address: {
      city: { en: "Barcelona", hu: "Barcelona" },
      country: { name: { en: "Spain", hu: "Spanyolország" }, code: "ES" },
    },
    artists: [artists[1], artists[2]], // Beat Syndicate (DJ collab) & Trinity Groove (DJ trio)
  },
  {
    id: "10",
    name: "Sunset Chill Sessions",
    date: new Date("2026-01-10T17:30:00Z"),
    ticketsLink: "https://tickets.example.com/sunset-chill",
    facebookEventLink: "https://facebook.com/events/sunset-chill",
    image: eventImages[9],
    address: {
      city: { en: "Lisbon", hu: "Lisszabon" },
      country: { name: { en: "Portugal", hu: "Portugália" }, code: "PT" },
    },
    artists: [artists[7], artists[5]], // Echo Drums (Hangdrum) & Elara Winds (Flutist)
  },
  {
    id: "11",
    name: "Synthwave Dreams",
    date: new Date("2025-05-18T21:00:00Z"),
    ticketsLink: "https://tickets.example.com/synthwave-dreams",
    facebookEventLink: "https://facebook.com/events/synthwave-dreams",
    image: eventImages[10],
    address: {
      city: { en: "Los Angeles", hu: "Los Angeles" },
      country: {
        name: { en: "United States", hu: "Amerikai Egyesült Államok" },
        code: "US",
      },
    },
    artists: [artists[10], artists[3]], // Neon Pulse (Synthwave DJ) & Bass Catalyst (DNB DJ)
  },
  {
    id: "12",
    name: "Deep House Sundown",
    date: new Date("2025-06-22T19:00:00Z"),
    ticketsLink: "https://tickets.example.com/deep-house-sundown",
    facebookEventLink: "https://facebook.com/events/deep-house-sundown",
    image: eventImages[11],
    address: {
      city: { en: "Ibiza", hu: "Ibiza" },
      country: { name: { en: "Spain", hu: "Spanyolország" }, code: "ES" },
    },
    artists: [artists[9]], // Sunset Frequencies (Deep House DJ)
  },
  {
    id: "13",
    name: "Celtic Echoes Festival",
    date: new Date("2025-07-12T16:00:00Z"),
    ticketsLink: "https://tickets.example.com/celtic-echoes",
    facebookEventLink: "https://facebook.com/events/celtic-echoes",
    image: eventImages[12],
    address: {
      city: { en: "Dublin", hu: "Dublin" },
      country: { name: { en: "Ireland", hu: "Írország" }, code: "IE" },
    },
    artists: [artists[12], artists[5]], // Emerald Spirits (Celtic Band) & Elara Winds (Flutist)
  },
  {
    id: "14",
    name: "Bass Invasion",
    date: new Date("2025-08-05T22:00:00Z"),
    ticketsLink: "https://tickets.example.com/bass-invasion",
    facebookEventLink: "https://facebook.com/events/bass-invasion",
    image: eventImages[13],
    address: {
      city: { en: "London", hu: "London" },
      country: {
        name: { en: "United Kingdom", hu: "Egyesült Királyság" },
        code: "GB",
      },
    },
    artists: [artists[3], artists[6]], // Bass Catalyst (DNB DJ) & Wobble King (Dubstep DJ)
  },
  {
    id: "15",
    name: "Guitar Legends Night",
    date: new Date("2025-09-10T20:30:00Z"),
    ticketsLink: "https://tickets.example.com/guitar-legends",
    facebookEventLink: "https://facebook.com/events/guitar-legends",
    image: eventImages[14],
    address: {
      city: { en: "Nashville", hu: "Nashville" },
      country: {
        name: { en: "United States", hu: "Amerikai Egyesült Államok" },
        code: "US",
      },
    },
    artists: [artists[7]], // Six String Heroes (Rock Guitarists)
  },
  {
    id: "16",
    name: "Trance Ascension",
    date: new Date("2024-10-03T23:00:00Z"),
    ticketsLink: "https://tickets.example.com/trance-ascension",
    facebookEventLink: "https://facebook.com/events/trance-ascension",
    image: eventImages[15],
    address: {
      city: { en: "Bangkok", hu: "Bangkok" },
      country: { name: { en: "Thailand", hu: "Thaiföld" }, code: "TH" },
    },
    artists: [artists[6], artists[8]], // Astral Traveler (Goa DJ) & Celestial Rave (Trance DJ)
  },
  {
    id: "17",
    name: "Electronic Symphony",
    date: new Date("2024-11-18T19:30:00Z"),
    ticketsLink: "https://tickets.example.com/electronic-symphony",
    facebookEventLink: "https://facebook.com/events/electronic-symphony",
    image: eventImages[16],
    address: {
      city: { en: "Vienna", hu: "Bécs" },
      country: { name: { en: "Austria", hu: "Ausztria" }, code: "AT" },
    },
    artists: [artists[2]], // Digital Orchestra (Electronic Classical Fusion)
  },
  {
    id: "18",
    name: "Lo-Fi Winter Chill",
    date: new Date("2024-12-15T18:00:00Z"),
    ticketsLink: "https://tickets.example.com/lofi-winter-chill",
    facebookEventLink: "https://facebook.com/events/lofi-winter-chill",
    image: eventImages[17],
    address: {
      city: { en: "Tokyo", hu: "Tokió" },
      country: { name: { en: "Japan", hu: "Japán" }, code: "JP" },
    },
    artists: [artists[1]], // Lo-Fi Cat (Lo-Fi Producer)
  },
  {
    id: "19",
    name: "Neo-Soul Serenade",
    date: new Date("2025-04-08T20:00:00Z"),
    ticketsLink: "https://tickets.example.com/neo-soul-serenade",
    facebookEventLink: "https://facebook.com/events/neo-soul-serenade",
    image: eventImages[18],
    address: {
      city: { en: "Chicago", hu: "Chicago" },
      country: {
        name: { en: "United States", hu: "Amerikai Egyesült Államok" },
        code: "US",
      },
    },
    artists: [artists[4]], // Velvet Harmony (Neo-Soul Band)
  },
  {
    id: "20",
    name: "Global Beats Carnival",
    date: new Date("2026-02-22T22:00:00Z"),
    ticketsLink: "https://tickets.example.com/global-beats",
    facebookEventLink: "https://facebook.com/events/global-beats",
    image: eventImages[19],
    address: {
      city: { en: "Rio de Janeiro", hu: "Rio de Janeiro" },
      country: { name: { en: "Brazil", hu: "Brazília" }, code: "BR" },
    },
    artists: [artists[3], artists[10]], // Samba Fusion (Latin Band) & Afro Pulse (Afro DJ)
  },
  {
    id: "21",
    name: "Future Groove Festival",
    date: new Date("2025-05-25T18:00:00Z"),
    ticketsLink: "https://tickets.example.com/future-groove",
    facebookEventLink: "https://facebook.com/events/future-groove",
    image: eventImages[20],
    address: {
      city: { en: "Berlin", hu: "Berlin" },
      country: { name: { en: "Germany", hu: "Németország" }, code: "DE" },
    },
    artists: [artists[7], artists[12]], // TechPulse (Techno DJ) & Sunset Frequencies (Deep House DJ)
  },
  {
    id: "22",
    name: "Folk Harmony Night",
    date: new Date("2025-04-10T19:30:00Z"),
    ticketsLink: "https://tickets.example.com/folk-harmony-night",
    facebookEventLink: "https://facebook.com/events/folk-harmony-night",
    image: eventImages[21],
    address: {
      city: { en: "Oslo", hu: "Oslo" },
      country: { name: { en: "Norway", hu: "Norvégia" }, code: "NO" },
    },
    artists: [artists[7], artists[12], artists[9], artists[10], artists[5], artists[3]], // Nordic Echo (Folk Band) & Emerald Spirits (Celtic Band)
  },
];
