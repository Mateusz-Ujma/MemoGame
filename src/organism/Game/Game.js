import React, { useEffect, useState } from 'react';

import { Wrapper, MainText, Panel, Card, SecondText, CardBg } from './Game.styles';

const Game = ({ image, number }) => {
  let turn = true; //true === first click false === second click
  let panelElement = null;
  let firstCard = null;
  let firstCardElement = null;
  let secondCard = null;
  let secondCardElement = null;
  let isTheSame = false;
  let points = 0;
  const [winGame, setWinGame] = useState(false);

  const getId = (e) => e.target.id;

  useEffect(() => {
    panelElement = document.getElementById('panel');
    if (!winGame) {
      startGame(panelElement);
      setTimeout(() => visibleCard(panelElement), 5000);
    }
  }, []);

  const toggleClass = (e) => {
    e.target.parentElement.classList.toggle('avers');
    e.target.classList.toggle('avers');
    play(e);
    // console.log(getId(e), panelElement.children);
  };

  const startGame = (element) => {
    turn = true;
    const children = element.children;
    for (var i = 0; i < children.length; i++) {
      var child1 = children[i];
      // console.log(child);
      if (!winGame) {
        child1.classList.add('start');
        child1.classList.add('block');
      } else {
        child1.classList.toggle('avers');
      }
      for (var j = 0; j < child1.children.length; j++) {
        var child = child1.children[j];
        // console.log(child);
        if (!winGame) {
          child.classList.add('start');
          child.classList.add('block');
        } else {
          child.classList.toggle('avers');
        }
      }
    }
  };

  const visibleCard = (element) => {
    if (!winGame) {
      const children = element.children;
      for (var i = 0; i < children.length; i++) {
        var child1 = children[i];
        // console.log(child);
        child1.classList.remove('start');
        child1.classList.remove('block');
        for (var j = 0; j < child1.children.length; j++) {
          var child = child1.children[j];
          // console.log(child);
          child.classList.remove('start');
          child.classList.remove('block');
        }
      }
    }
  };

  const play = (e) => {
    // console.log(turn, 'turn');
    if (turn) {
      firstCard = getId(e);
      firstCardElement = e;
      e.target.classList.add('block');
      turn = !turn;
    } else {
      secondCard = getId(e);
      secondCardElement = e;
      // console.log(secondCard);
      e.target.classList.add('block');
      turn = !turn;
      isTheSame = firstCard == secondCard;
      firstCard = null;
      secondCard = null;
      setTimeout(() => win(isTheSame), 1500);
    }
  };
  const win = (same) => {
    if (isTheSame) {
      firstCardElement.target.classList.add('hidden');
      secondCardElement.target.classList.add('hidden');
      firstCardElement.target.parentElement.classList.add('hidden');
      secondCardElement.target.parentElement.classList.add('hidden');
      points++;
      if (points === number / 2) {
        setWinGame(true);
      }
      firstCardElement = null;
      secondCardElement = null;
    } else {
      firstCardElement.target.classList.toggle('avers');
      secondCardElement.target.classList.toggle('avers');
      firstCardElement.target.parentElement.classList.toggle('avers');
      secondCardElement.target.parentElement.classList.toggle('avers');
      firstCardElement.target.classList.remove('block');
      secondCardElement.target.classList.remove('block');
      firstCardElement = null;
      secondCardElement = null;
    }
  };

  return (
    <Wrapper>
      <MainText>Game</MainText>
      <Panel id="panel">
        {image.map(({ img, id, revers }) => {
          return (
            <Card key={id + Math.random() * 100}>
              <CardBg onClick={(e) => toggleClass(e)} img={img} revers={revers} id={id} className="card" />
            </Card>
          );
        })}
        {winGame ? <SecondText>WIN</SecondText> : null}
      </Panel>
    </Wrapper>
  );
};

export default Game;
