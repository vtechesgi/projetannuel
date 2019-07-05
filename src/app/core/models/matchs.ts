export interface Matchs {
  head2head?: {};
  id?: number;
  season?: {};
  utcDate?: string;
  date?: string;
  hour?: string;
  status?: string;
  matchday?: number;
  stage?: string;
  group?: string;
  lastUpdated?: string;

  competition?: {
    id?: number;
    name?: string;
  };
  homeTeam?: {
    id?: number;
    name?: number;
  };
  awayTeam?: {
    id?: number;
    name?: number;
  };
  score?: {
    fullTime?: {
      homeTeam?: number;
      awayTeam?: number;
    };
  };
}
