import React from 'react';
import './App.css';
import LayoutHeader from "./component/LayoutHeader";
import CardContainer from "./component/cardContainer";
import CostEstimater from "./component/CostEstimater";


const App = () => {
  return (
    <div className="App-container">
      <div className="vmc-header">
        <h1>HVC</h1>
      </div>
      <main className="vmc-layout-container">
        <article className="article-layout">
            <LayoutHeader></LayoutHeader>
            <CardsDisplay></CardsDisplay>
        </article>
        <aside className="asideLayout">
            <CostEstimater></CostEstimater>
        </aside>
        
      </main>
    </div>
  );
}

export default App;
