import * as React from "react";
import {
  Body,
  Column,
  Container,
  Html,
  Preview,
  Img,
  Head,
  Row,
} from "@react-email/components";
import {
  SocialIcon,
  type SocialIconType,
  Button,
  P,
  Link,
  H3,
  H1,
} from "@mailingui/components";

type SubscriptionConfirmationProps = {
  subscriberName: string;
  confirmationUrl: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const SubscriptionConfirmation: React.FC<
  SubscriptionConfirmationProps
> = ({ subscriberName = "Jacob", confirmationUrl = "https://google.com" }) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - Confirm you email address</Preview>
      <Body style={main}>
        <Container style={container} width={600}>
          <Row style={row}>
            <Column width={46} height={34}>
              <Img src={`${baseUrl}/star.png`} alt="Star" />
            </Column>
            <Column>
              <H3 compact>MINIMAL</H3>
            </Column>
          </Row>
          <Row style={row}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={row}>
            <H1>Confirm your Email Address</H1>
            <P>Dear, {subscriberName}:</P>
            <P>
              Recently you requested to join our newsletter. We require that you
              verify your email address before we can add you to our list.
              Please click on the link below to confirm your email address:
            </P>
            <Button
              href={confirmationUrl}
              width={520}
              height={56}
              backgroundColor="#000000"
            >
              Confirm Email Address
            </Button>
            <P>
              If you did not initiate this request or believe it was made in
              error, please disregard this email. If you have any concerns or
              need further assistance, please contact our customer support team.
            </P>
            <P>
              Best regards,
              <br /> Minimal Team
            </P>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={row}>
            {(
              [
                "linkedin",
                "skype",
                "medium",
                "twitter",
                "facebook",
              ] as SocialIconType[]
            ).map((type, i) => (
              <div key={i}>
                <Column width={24} style={{ paddingRight: "20px" }}>
                  <SocialIcon
                    type={type}
                    style={{ margin: 0 }}
                    size={24}
                    href="https://google.com"
                  />
                </Column>
              </div>
            ))}
            <Column width={520 - 196}></Column>
          </Row>
          <Row style={row}>
            <P compact muted>
              © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois
              85486
            </P>
            <P compact muted>
              <Link muted href="#unsubscribe">
                Unsubscribe
              </Link>{" "}
              ·{" "}
              <Link muted href="#tos">
                Terms of Use
              </Link>{" "}
              ·{" "}
              <Link muted href="#pp">
                Privacy Policy
              </Link>
            </P>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default SubscriptionConfirmation;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  padding: "60px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "60px 40px 40px",
  width: "600px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const row = {
  margin: "0 0 24px",
};
