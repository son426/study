const React = require("react");

const LottoNum = ({ num }) => {
  let background;

  if (num < 10) background = "tomato";
  else if (num < 20) background = "aqua";
  else if (num < 30) background = "yellow";
  else if (num < 40) background = "gray";
  else background = "orange";

  return (
    <div className="lottoNum" style={{ backgroundColor: background }}>
      {num}
    </div>
  );
};

module.exports = LottoNum;
