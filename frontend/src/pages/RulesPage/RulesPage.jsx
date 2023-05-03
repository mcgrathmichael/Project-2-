import React from "react";
import "./RulesPage.scss";

function RulesPage() {
  return (
    <div className="rules-container">
      <h2 className="rules-title">The Rules</h2>
      <p className="rules_list">
        The aim of the game is to select all the duplicate cards till there are
        no more! <br />
        Each round you will choose two cards and every time you click a card it
        will be counted. <br />
        Choosing two of the same cards in a round will get you closer to the
        end! <br />
        When there is no time left, you losed the game, you need to finish it
        before the timer ends!
      </p>
    </div>
  );
}
export default RulesPage;
