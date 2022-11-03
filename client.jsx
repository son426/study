const React = require("react");
const ReactDOM = require("react-dom");

const WordRelay = require("./끝말잇기/WordRelay");
const NumberBaseball_class = require("./숫자야구/NumberBaseball-class");
const NumberBaseball_hooks = require("./숫자야구/NumberBaseball-hooks");
const ResponseCheck_class = require("./ResponseCheck-class");
const ResponseCheck_hooks = require("./ResponseCheck-hooks");

ReactDOM.render(<ResponseCheck_hooks />, document.querySelector("#root"));
