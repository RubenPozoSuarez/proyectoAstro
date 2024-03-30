// Interfaces para estructurar la respuesta de la API
interface Fairings {
    reused: boolean | null;
    recovery_attempt: boolean | null;
    recovered: boolean | null;
    ships: string[];
  }
  
  interface Patch {
    small: string;
    large: string;
  }
  
  interface Reddit {
    campaign: string | null;
    launch: string | null;
    media: string | null;
    recovery: string | null;
  }
  
  interface Flickr {
    small: string[];
    original: string[];
  }
  
  interface Links {
    patch: Patch;
    reddit: Reddit;
    flickr: Flickr;
    presskit: string | null;
    webcast: string;
    youtube_id: string;
    article: string | null;
    wikipedia: string | null;
  }
  
  interface Failure {
    time: number;
    altitude: number | null;
    reason: string;
  }
  
  interface Core {
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success: boolean | null;
    landing_type: string | null;
    landpad: string | null;
  }
  
  interface Doc {
    fairings: Fairings | null;
    links: Links;
    static_fire_date_utc: string | null;
    static_fire_date_unix: number | null;
    net: boolean;
    window: number;
    rocket: string;
    success: boolean;
    failures: Failure[];
    details: string | null;
    crew: string[];
    ships: string[];
    capsules: string[];
    payloads: string[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    cores: Core[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: string | null;
    id: string;
  }
  
  // Tipo principal que representa la respuesta completa de la API de SpaceX
  type APISpaceXResponse = {
    docs: Doc[];
    totalDocs: number;
    offset: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: null | number;
    nextPage: null | number;
  };

  export type { Doc, APISpaceXResponse };
  