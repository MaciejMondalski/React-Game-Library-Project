//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${month}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
const lastYear = `${currentDay}-${currentMonth}-${currentYear - 1}`;
const nextYear = `${currentDay}-${currentMonth}-${currentYear + 1}`;

//Popular Games
const popular_games = `games?dates=${lastYear}, ${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => {
  `${base_url}${popular_games}`;
};

console.log(pop);
