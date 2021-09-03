import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="custom order"
        rightBtnText="Existing inventory"
      ></Section>

      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      ></Section>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      ></Section>
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      ></Section>

      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      ></Section>
      <Section
        title="Solar for new roof"
        description="Produce Clean Energy
        From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"

      >

      </Section>
      <Section
        title="Accessories"
       
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      
      >

      </Section>
    </Container>
  );
}

export default Home;


const Container = styled.div`
height:100vh;
z-index:10;
`