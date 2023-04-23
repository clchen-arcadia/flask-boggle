"use strict";

const $playedWords = $("#words");
const $form = $("#newWordForm");
const $wordInput = $("#wordInput");
const $message = $(".msg");
const $table = $("table");

let gameId;


/** Start */

async function start() {
  let response = await axios.post("/api/new-game");
  gameId = response.data.gameId;
  let board = response.data.board;

  displayBoard(board);
}

/** Display board */

function displayBoard(board) {
  $table.empty();
  for (let row of board) {
    let $tr = $("<tr>");
    for (let letter of row) {
      $tr.append(`<td>${letter}</td>`);
    }
    $table.append($tr);
  }
}

// await axios.post("/api/score-word")

const BASE_URL = 'http://localhost:5001'
const testWord = "ALBUMS"
const testGameId = 'testtesttesttestestHI'

async function testScoreWord() {
  const response = await axios({
    url: `/api/score-word`,
    method: "POST",
    data: {
      'word': testWord,
      'game_id': testGameId
    },
  });
  return response;
}


start();
