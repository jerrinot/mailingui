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
  H3,
  H1,
  P,
  Link,
} from "@mailingui/components";

type EventConfirmationProps = {
  guestName: string;
  eventName: string;
  eventDate: string;
  eventVenue: string;
  eventTime: string;
  reservationUrl: string;
};

const baseUrl = `${
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mailingui.com"
}/static/minimal-theme`;

export const EventConfirmation: React.FC<EventConfirmationProps> = ({
  guestName = "Jacob",
  eventName = "Minimal",
  eventDate = "September 5, 2023",
  eventVenue = "Minimal HQ — Moravské nám. 1007/14",
  eventTime = "4PM - 9PM",
  reservationUrl = "#",
}) => (
  <Html>
    <Head />
    <Preview>Minimal - we&apos;ve confirmed your participation</Preview>
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
          <H1>Get Ready! You&apos;re in for {eventName}!</H1>
          <P>Dear, {guestName}:</P>
          <P>
            We are thrilled to inform you that your registration for {eventName}{" "}
            has been successfully confirmed! Get ready for an unforgettable
            experience on{" "}
            <b>
              {eventDate} at {eventVenue}
            </b>
            . We can&apos;t wait to have you join us for this exciting event.
          </P>
          <Img width={520} src={`${baseUrl}/divider.png`} />
        </Row>
        <Row style={row}>
          <P compact>
            <b>When:</b> {eventDate}
          </P>
          <P compact>
            <b>What Time:</b> {eventTime}
          </P>
          <P compact>
            <b>Where:</b> {eventVenue}
          </P>
        </Row>
        <Row style={row}>
          <Button
            href={reservationUrl}
            width={520}
            height={56}
            backgroundColor="#000000"
          >
            Save on Calendar
          </Button>
        </Row>
        <Row style={row}>
          <P>
            Feel free to reach out to us if you have any questions or need
            further assistance. We&apos;re here to make sure you have a seamless
            and enjoyable experience.
          </P>
          <P>
            Once again, congratulations on securing your spot at {eventName}! We
            look forward to seeing you.
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
            © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois 85486
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

export default EventConfirmation;

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
