import React,{ useState } from 'react';
import './App.css';
import {LayoutHeader} from "./component/LayoutHeader";
import {CostEstimater} from "./component/CostEstimater";
import {Card} from "./component/CardContainer/card"
interface btn{                                    /*button structure to contain its details */
  id:number;
  text:string;
  disabled:boolean;
}
let btnList:btn[]=[                                   /*button detail*/
  {id:1, text:'Choose Image',disabled:false},
  {id:2, text:'Choose Instance Type',disabled:true},
  {id:3 , text:'Choose Storage and Network',disabled:true},
  {id:4, text:'Configure Security',disabled:true},
  {id:5 , text:'Review & launch',disabled:true}
]
interface cardDataInterfce{                                    /*Image card structure to contain its details */
  heading:string;
  description:string;
  config?:number;
  selected?:boolean;
}
let cardData:cardDataInterfce[]= [                    
  {
    heading: "Linux 2 image",
    description: "Linux 2 comes with 5 years of support",
    config:1,
    selected:false
  },
  {
    heading: "UbUntu sERVER 18.04 LTS",
    description: "Linux 2 comes with 5 years of support",
    config:1,
    selected:false
  },
  {
    heading: "Red Hat Enterprise Linux 8",
    description: "Linux 2 comes with 5 years of support",
    config:1,
    selected:false
  },
  {
    heading: "MIcrofot Windows Server 2019 Base",
    description: "Linux 2 comes with 5 years of support",
    config:1,
    selected:false
  },
  {
    heading: "SUSE Linux Enterprise Server",
    description: "Linux 2 comes with 5 years of support",
    config:1,
    selected:false,
  }
]
interface CostEstimater{
  description:String;
  price:Number;
}
const App = () => {
  const [setCardIndex,updateIndexCard]=useState(0);
  const cardIndexUpdater= ()=>{
        updateIndexCard(setCardIndex);
  }
  return (
    <div className="App-container">
      <div className="vmc-header">
        <h1>HVC</h1>
      </div>
      <main className="vmc-layout-container">
        <article className="article-layout">
            <LayoutHeader btnList={btnList}  />
            {cardData.map(element => (
                      <Card value={element}/>
                  ))
                }
            
        </article>
        <aside className="asideLayout">
            <CostEstimater></CostEstimater>
        </aside>
      </main>
    </div>
  );
}

export default App;
