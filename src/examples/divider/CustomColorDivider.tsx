import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Divider, P } from "@mailingui/components";

const CustomColorDivider = () => {
  return (
    <Html>
      <Head />
      <Preview>Custom Color Divider</Preview>
      <Body style={main}>
        <Container style={container}>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </P>
          <Divider dividerColor="#eeeeee" />
          <P>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </P>
        </Container>
      </Body>
    </Html>
  );
};

export default CustomColorDivider;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const container = {
  padding: "55px 0",
  textAlign: "center" as const,
  maxWidth: 580,
};
