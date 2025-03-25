export interface Artist {
    id: string;
    name: string;
    locationCountry: string;
    description: {
      [key: string]: string; // Translation mapping (e.g., { en: "Bio in English" })
    };
    socialLinks: {
        soundCloud?: string,
        spotify?: string,
        youtube?: string,
        facebook?: string,
        website?: string,
    };
  }