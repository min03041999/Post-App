import React from "react";
import {
  Container,
  Text,
  Grid,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";

const Contact = () => {
  return (
    <Container fluid>
      <Text
        h1
        size={35}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Contact of
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        Animal Post
      </Text>
      <Grid.Container gap={2}>
        <Grid xs={6}>
          <Input
            clearable
            label="Name"
            placeholder="Enter your name"
            css={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={6}>
          <Input
            clearable
            label="Name"
            placeholder="Enter your name"
            css={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={6}>
          <Input
            clearable
            label="Name"
            placeholder="Enter your name"
            css={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={6}>
          <Input
            clearable
            label="Name"
            placeholder="Enter your name"
            css={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={12}>
          <Textarea
            label="Description"
            placeholder="Enter your description"
            fullWidth
            rows={8}
          />
        </Grid>
        <Grid xs={12} css={{ justifyContent: "center" }}>
          <Button auto size="lg">
            Send
          </Button>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Contact;
