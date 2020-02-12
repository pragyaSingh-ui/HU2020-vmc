import React from "react";
import {Card} from "./card";


interface cardData{                                    /*Image card structure to contain its details */
  heading:string;
  description:string;
  config?:number;
  selected?:boolean;
}
type cardProps={
  cardDataItems:cardData[];
}
export const CardContainer=({cardDataItems}:cardProps)=>{
return(
  <React.Fragment>
      {cardDataItems.map(element => (
                      <Card heading={element.heading} description={element.description} config={element.config } selected={element.selected}/>
                  ))
                }
  </React.Fragment>
  
);
}

// export default class CardContainer extends Component {
//   constructor(props:any) {
//     super(props);
//     this.state = {
//       cardData: [
//         {
//           heading: "Linux 2 image",
//           description: "Linux 2 comes with 5 years of support"
//         },
//         {
//           heading: "Ubuntu Server",
//           description: "Linux 2 comes with 5 years of support"
//         }
//       ]
//     };
//   }

//   showCards = (cardData: any[]) => {
//     console.log("inside showCards");
//     let result = [];
//     result.push(
//       cardData.map(card => {
//         return <Card heading={card.heading} description={card.description} />;
//       })
//     );
//     return result;
//   };

//   render() {
//     return (
//       <React.Fragment>{this.showCards(this.state.cardData)}</React.Fragment>
//     );
//   }
// }
