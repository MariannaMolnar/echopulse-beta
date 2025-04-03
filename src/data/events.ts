import { Artist, LanguageSpecificString } from "./artists";

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

