import React, { Component } from "react";
import Card from "./card";

export default class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          heading: "Linux 2 image",
          description: "Linux 2 comes with 5 years of support"
        },
        {
          heading: "Ubuntu Server",
          description: "Linux 2 comes with 5 years of support"
        }
      ]
    };
  }

  showCards = cardData => {
    console.log("inside showCards");
    let result = [];
    result.push(
      cardData.map(card => {
        return <Card heading={card.heading} description={card.description} />;
      })
    );
    return result;
  };

  render() {
    return (
      <React.Fragment>{this.showCards(this.state.cardData)}</React.Fragment>
    );
  }
}
