import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Column,
} from "@react-email/components";
import { Emoji, P } from "@mailingui/components";

export default function EmojisAsLink() {
  return (
    <Html>
      <Head />
      <Preview>Emojis As Link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row>
            <Column>
              <P style={{ textAlign: "center" }}>
                How would you rate your stay with us?
              </P>
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="confounded-face" href="#rate-1" bg />
            </Column>
            <Column>
              <Emoji type="sad-face" href="#rate-2" bg />
            </Column>
            <Column>
              <Emoji type="neutral-face" href="#rate-3" bg />
            </Column>
            <Column>
              <Emoji type="smiling-face" href="#rate-4" bg />
            </Column>
            <Column>
              <Emoji type="heart-eyes-face" href="#rate-5" bg />
            </Column>
          </Row>
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
  padding: "70px 0",
  textAlign: "center" as const,
  maxWidth: 400,
};
