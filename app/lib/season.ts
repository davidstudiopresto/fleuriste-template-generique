export function getCurrentSeason(date = new Date()): { season: string; year: number; volume: string } {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const year = date.getFullYear();

  let season: string;
  let volume: string;
  if ((m === 3 && d >= 20) || m === 4 || m === 5 || (m === 6 && d < 21)) {
    season = "Printemps";
    volume = "I";
  } else if ((m === 6 && d >= 21) || m === 7 || m === 8 || (m === 9 && d < 23)) {
    season = "Été";
    volume = "II";
  } else if ((m === 9 && d >= 23) || m === 10 || m === 11 || (m === 12 && d < 21)) {
    season = "Automne";
    volume = "III";
  } else {
    season = "Hiver";
    volume = "IV";
  }
  return { season, year, volume };
}
