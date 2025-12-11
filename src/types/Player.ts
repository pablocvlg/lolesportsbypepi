export interface Player {
  id: string;
  name: string;
  role: string;
  team: string;
  initial_rating: number;
  performances: any[];
  form_iframe: string;
}