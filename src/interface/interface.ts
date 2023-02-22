export interface Profession {
  film_id: number;
  person_id: number;
  profession_id: string;
}

export interface Person {
  id: number;
  name_english: string;
  name_russian: string;
  sex: string;
  kinopoisk_id: number;
  birthday: string;
  created_at: string;
  updated_at?: any;
  profession: Profession;
}

export interface Genre {
  id: number;
  name_ru: string;
}

export interface Country {
  id: number;
  name_ru: string;
}

export interface Datum {
  id: number;
  kinopoisk_id: number;
  imdb_id: string;
  popular_weight?: number;
  name_original: string;
  name_russian: string;
  year: string;
  year_start: string;
  year_end: string;
  rating_kp: number;
  rating_kp_count: number;
  rating_imdb: number;
  rating_imdb_count: number;
  time: string;
  age_restriction: string;
  description: string;
  slogan: string;
  budget: string;
  trailer: string;
  country_ru: string;
  type: string;
  premiere_ru: string;
  premiere_world: string;
  premiere_dvd: string;
  created_at: Date;
  updated_at: Date;
  time_minutes: number;
  player: string;
  small_poster: string;
  big_poster: string;
  persons: Person[];
  genres: Genre[];
  countries: Country[];
}

export interface IFilms {
  current_page: number;
  data: Datum[];
  first_page_url: string;
  from: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url?: any;
  to: number;
}
