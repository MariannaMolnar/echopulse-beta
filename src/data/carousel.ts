import { Artist, artists, LanguageSpecificString } from "./artists";
import blackMoss from "../images/backdrops/blackMoss.jpg";

import redMelt from "../images/backdrops/redMelt.jpg";
import wood from "../assets/wood.jpg";


export interface BaseSlide {
  id: string;
  imageUrl: string;
  linkUrl?: string;
  altText?: string; // Optional alt text
}

export interface ImageSlide extends BaseSlide {
  type: "image";
}

interface EventSlideData {
  date: Date;
  title: LanguageSpecificString;
  venueName: string;
}

interface ReleaseSlideData {
  releaseType: "album" | "track";
  title: LanguageSpecificString;
  artist: Artist;
  releaseTitle: string;
}

export interface EventSlide extends BaseSlide {
  type: "event";
  data: EventSlideData;
}

export interface ReleaseSlide extends BaseSlide {
  type: "release";
  data: ReleaseSlideData;
}

export type CarouselSlide = ImageSlide | EventSlide | ReleaseSlide;

export const carousel: CarouselSlide[] = [
  {
    id: "1",
    type: "image",
    imageUrl: wood, //logo backdrop
  },
  {
    id: "2",
    imageUrl: redMelt,
    altText: "Let it flow - Vödör bár",
    type: "event",
    data: {
      date: new Date("2025-05-05"),
      title: {
        hu: "Hadd fojjon",
        en: "Let it flow",
      },
      venueName: "Vödör bár",
    },
  },
  {
    id: "3",
    imageUrl: blackMoss,
    altText: "Shadow Echo new release",
    type: "release",
    data: {
      releaseType: "track",
      title: {
        hu: "Új megjelenés",
        en: "New release",
      },
      artist: artists[0],
      releaseTitle: "Shadow Echo\nConfessions of the moss",
    },
  },
];
