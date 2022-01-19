"use strict";
let numberOfFilms=+prompt("Сколько фильмов вы просмотрели ?");
const personalMovieDB={
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
let name=prompt("Один из просмотренных фильмов?"),
    mark=+prompt("На сколько оценете его?");
    personalMovieDB.movies[name]=mark;
  
console.log(personalMovieDB);