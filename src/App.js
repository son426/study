import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function Header(props) {
  return (
    <header>
      <a
        href="/"
        onClick={(event) => {
          event.preventDefault();
          props.onChangeMode();
        }}
      >
        {props.title}
      </a>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }

  return <ol>{lis}</ol>;
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Create() {
  return (
    <article>
      <h2>Create</h2>
      <form>
        <p>
          <input type="text" name="title" placeholder="제목 입력"></input>
        </p>
        <p>
          <textarea name="body" placeholder="본문 입력"></textarea>
        </p>
        <p>
          <input type="submit" value="Create"></input>
        </p>
      </form>
    </article>
  );
}

function App() {
  // const _mode = useState("WELCOME");
  // const mode = _mode[0];
  // const setMode = _mode[1];

  const [mode, setMode] = useState("CREATE");
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: "html", body: "html is ~" },
    { id: 2, title: "css", body: "css is ~" },
    { id: 3, title: "js", body: "js is ~" },
  ];

  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === "READ") {
    let title = null;
    let body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === Number(id)) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  } else if (mode === "CREATE") {
    content = <Create></Create>;
  }

  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("READ");
          setId(id);
        }}
      ></Nav>
      {content}
      <a
        href="/create"
        onClick={(event) => {
          event.preventDefault();
          setMode("CREATE");
        }}
      ></a>
    </div>
  );
}

export default App;
