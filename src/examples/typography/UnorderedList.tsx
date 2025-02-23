import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { UL, LI } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <UL>
            <LI>Laughter is the best medicine for any gloomy day.</LI>
            <LI>Spreading smiles can brighten even the darkest of times.</LI>
            <LI>Humor unites people, regardless of their backgrounds.</LI>
          </UL>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const container = {
  padding: "110px 0",
  maxWidth: 580,
};
