import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Column,
} from "@react-email/components";
import { SocialIcon, P } from "@mailingui/components";

export default function AllSocialIcons() {
  return (
    <Html>
      <Head />
      <Preview>All Social Icons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row>
            <P>
              Register an account with us using the following providers:
            </P>
          </Row>
          <Row>
            <Column>
              <Row>
                <Column width={44}>
                  <SocialIcon type="github" href="#link" size={32} />
                </Column>
                <Column>GitHub</Column>
              </Row>
            </Column>
            <Column>
              <Row>
                <Column width={44}>
                  <SocialIcon type="twitter" href="#link" size={32} />
                </Column>
                <Column>Twitter</Column>
              </Row>
            </Column>
            <Column>
              <Row>
                <Column width={44}>
                  <SocialIcon type="google drive" href="#link" size={32} />
                </Column>
                <Column>Google</Column>
              </Row>
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
  padding: "100px 0",
  maxWidth: 480,
};
