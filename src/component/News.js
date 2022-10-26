import React, { useEffect, useState } from "react";
import { Grid, Card, Image, Text, Pagination } from "@nextui-org/react";
import postApi from "../api/PostApi";

const News = () => {
  const [posts, setPosts] = useState([]);
  const [totalItem, setTotalItem] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await postApi.getPostList(page);
      try {
        if (res.status === 200) {
          const total = Math.ceil(res.data.totalItems / 6);
          setTotalItem(total);
          setPosts(res.data.posts);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [page]);

  const MockItem = (props) => {
    const item = props.item;
    return (
      <Card>
        <Image
          width={320}
          height={250}
          src={`http://localhost:8080/` + item.imageUrl}
          alt="Default Image"
          objectFit="cover"
        />
        <Card.Body>
          <Text
            h1
            size={20}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            {item.title}
          </Text>
          <Text h2 size={18} weight="bold">
            {item.content}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={4} style={{ display: "inline" }}>
          <Text
            h1
            size={50}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Welcome to
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold"
          >
            Animal Site
          </Text>
          <Text
            h1
            size={50}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            Post
          </Text>
        </Grid>
        <Grid xs={8}>
          <Grid.Container gap={2} justify="center">
            {posts.map((item, index) => (
              <Grid xs={4} key={index}>
                <MockItem item={item} />
              </Grid>
            ))}
            <Pagination
              total={totalItem}
              initialPage={1}
              style={{ marginTop: "20px" }}
              onChange={(page) => setPage(page)}
            />
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default News;
