import React from "react";

import Button from "./components/Button";
import List from "./components/List";

function App() {
  const [items, setItems] = React.useState([
    {
      id: 1,
      value: "ITEM 1"
    },
    {
      id: 2,
      value: "ITEM 2"
    },
    {
      id: 3,
      value: "ITEM 3"
    }
  ]);

  const [selectedId, setSelectedId] = React.useState(null);

  const onClick = () => {
    alert("O botão foi clicado");
  };

  const toggleFn = itemId => {
    if (selectedId === itemId) {
      setSelectedId(null);
    } else {
      setSelectedId(itemId);
    }
  };

  const removeFn = itemId => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <div className="App">
      <section>
        <h2>BOTÕES</h2>
        <Button size="small" onClick={onClick}>
          BOTÃO PEQUENO
        </Button>
        <Button size="medium" onClick={onClick}>
          BOTÃO MÉDIO
        </Button>
        <Button size="large" onClick={onClick}>
          BOTÃO GRANDE
        </Button>
        <Button size="large" disabled>
          BOTÃO DESABILITADO
        </Button>
      </section>
      <section>
        <h2>LIST</h2>
        <List
          items={items}
          selectedId={selectedId}
          toggleFn={toggleFn}
          removeFn={removeFn}
        />
      </section>
    </div>
  );
}

export default App;
