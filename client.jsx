const React = require("react");
const ReactDOM = require("react-dom");

const WordRelay = require("./끝말잇기/WordRelay");
const NumberBaseball_class = require("./숫자야구/NumberBaseball-class");
const NumberBaseball_hooks = require("./숫자야구/NumberBaseball-hooks");
const ResponseCheck_class = require("./반응속도 체크/ResponseCheck-class");
const ResponseCheck_hooks = require("./반응속도 체크/ResponseCheck-hooks");
const RSP_class = require("./가위바위보/RSP-class");
const RSP_hooks = require("./가위바위보/RSP-hooks");
const Lotto_hooks = require("./로또/Lotto-hooks");
const Lotto_class = require("./로또/Lotto-class");

ReactDOM.render(<Lotto_hooks />, document.querySelector("#root"));
