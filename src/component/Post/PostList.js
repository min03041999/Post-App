import React, { useEffect, useState } from "react";
import Card from "../Card";
import ContentBar from "../Contentbar";
import IconButton from "../IconButton";

import { Table, Row, Col, Text, Grid, Button } from "@nextui-org/react";

import { AiOutlineEye, AiFillEdit, AiFillDelete } from "react-icons/ai";

import postApi from "../../api/PostApi";
import PostDetail from "./PostDetail";

const PostList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await postApi.getPostList();
        if (res.status === 200) {
          res.data && mapData(res.data.posts);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const mapData = (data) => {
    const newData = data.map((item, index) => ({
      id: item._id,
      title: item.title,
      content: item.content,
      imageUrl: "http://localhost:8080/" + item.imageUrl,
      creator: item.creator.name,
      createdAt: item.createdAt,
      updatedAt: item.updateAt,
    }));
    setItems(newData);
  };

  const columns = [
    { name: "TITLE", uid: "title" },
    {
      name: "IMAGE",
      uid: "imageUrl",
    },
    {
      name: "CONTENT",
      uid: "content",
    },
    {
      name: "CREATOR",
      uid: "creator",
    },
    { name: "ACTIONS", uid: "actions" },
  ];

  const renderCell = (post, columnKey) => {
    const cellValue = post[columnKey];
    switch (columnKey) {
      case "title":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
      case "imageUrl":
        return (
          <Col>
            <Row>
              <img width={75} height={75} src={cellValue} alt={post.title} />
            </Row>
          </Col>
        );
      case "content":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
      case "creator":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <IconButton onClick={() => handlerDetailPost(post.id)}>
                <AiOutlineEye size={20} fill="#13a452" />
              </IconButton>
            </Col>
            <Col css={{ d: "flex" }}>
              <IconButton onClick={() => console.log("View user", post.id)}>
                <AiFillEdit size={20} fill="#f5a524" />
              </IconButton>
            </Col>
            <Col css={{ d: "flex" }}>
              <IconButton onClick={() => console.log("View user", post.id)}>
                <AiFillDelete size={20} fill="#f31260" />
              </IconButton>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  // console.log(items);

  //Modal
  const [postId, setPostId] = useState();
  const [check, setCheck] = useState();
  const [visible, setVisible] = useState(false);

  //Detail
  const handlerDetailPost = (id) => {
    setPostId(id);
    setCheck("PostDetail");
    setVisible(true);
  };

  return (
    <>
      <ContentBar title="System > Post List">
        <Card>
          <h2>Post List</h2>
          <Grid.Container gap={2}>
            <Grid>
              <Button color="primary" size="sm" auto>
                Add Post
              </Button>
            </Grid>
          </Grid.Container>
          <Table
            aria-label="Example table with custom cells"
            css={{
              height: "auto",
              minWidth: "100%",
            }}
            selectionMode="none"
          >
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column
                  key={column.uid}
                  hideHeader={column.uid === "actions"}
                  align={column.uid === "actions" ? "center" : "start"}
                >
                  {column.name}
                </Table.Column>
              )}
            </Table.Header>
            <Table.Body items={items}>
              {(item) => (
                <Table.Row>
                  {(columnKey) => (
                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                  )}
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </Card>
      </ContentBar>

      {/* Detail */}
      {check === "PostDetail" && (
        <PostDetail postId={postId} visible={visible} setVisible={setVisible} />
      )}
    </>
  );
};

export default PostList;
