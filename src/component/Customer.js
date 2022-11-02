import React from "react";
import { Container, Text, Grid } from "@nextui-org/react";

const Customer = () => {
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
        Customer of
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
      <Text h5 color="#313437">
        A template made by Animal Post for photographers.
      </Text>
      <Grid.Container gap={2} justify="center" style={{ marginTop: "20px" }}>
        <Grid xs={12} md={4}>
          <Grid.Container style={{ rowGap: "30px" }} justify="center">
            <Grid xs={12} md={12}>
              <img
                className="cus-image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8aMEJobBQay3A9qLbhqEAAHaE8%26pid%3DApi&f=1&ipt=6b132b5ffa08a3737bc06a1f14ccaad049ba4b55415196ba498241a811450821&ipo=images"
                alt=""
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <img
                className="cus-image"
                src=" https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.A9gzR8-0CCmTKAOR0tKy4AHaEO%26pid%3DApi&f=1&ipt=d6e1770cf6e078885afa186f5ec9532f71ab025c2f23e4f68e09d6068e1603f6&ipo=images"
                alt=""
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </Grid>
          </Grid.Container>
        </Grid>
        <Grid xs={12} md={4}>
          <img
            className="cus-image"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.msijc6mIX4cfZGtAuKivEgHaLH%26pid%3DApi&f=1&ipt=4bf8796dbf916d6ab074aba1668975b77d56f97b383303f0476907c643f03d7d&ipo=images"
            alt=""
            style={{ width: "100%", maxHeight: "630px", objectFit: "cover" }}
          />
        </Grid>
        <Grid xs={12} md={4}>
          <Grid.Container style={{ rowGap: "30px" }} justify="center">
            <Grid xs={12} md={12}>
              <img
                className="cus-image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.2dp7CQL7CEzH4t5tEfbMHAHaE8%26pid%3DApi&f=1&ipt=d387fd3201844ed9323e03f8ad7738f8387b6919429778e7269e0c9e36d0e9b6&ipo=images"
                alt=""
                style={{
                  width: "100%",
                  height: "190px",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <img
                className="cus-image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gJNL3Q86NKUC6F0hH2u6ZwHaHa%26pid%3DApi&f=1&ipt=6f3c358e821123fbe6a9d06c07c8c028497652a6e29963a664d9d975f9a2652f&ipo=images"
                alt=""
                style={{
                  width: "100%",
                  height: "190px",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <img
                className="cus-image"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.G0HJWVklretEVTYbdZGZoAHaI7%26pid%3DApi&f=1&ipt=943675c8ab7978dcf1c353ce7fd988a3b0aad65527928b6ad34a02c2144e5be0&ipo=images"
                alt=""
                style={{
                  width: "100%",
                  height: "190px",
                  objectFit: "cover",
                }}
              />
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Customer;
