import * as React from "react";
import {
  Body,
  Container,
  Html,
  Preview,
  Section,
  Head,
} from "@react-email/components";
import { Badge } from "@mailingui/components";

const MediumBadges = () => (
  <Html>
    <Head />
    <Preview>Medium Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Badge noBorder>Badge</Badge>
          <span style={{ padding: 10 }} />
          <Badge noBorder variant="brand">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge noBorder variant="subtle">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge noBorder variant="outline">
            Badge
          </Badge>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default MediumBadges;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const container = {
  padding: "40px 0",
};
