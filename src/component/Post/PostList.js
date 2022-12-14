import React, { useEffect, useState } from "react";
import Card from "../Card";
import ContentBar from "../Contentbar";
import IconButton from "../IconButton";

import {
  Table,
  Row,
  Col,
  Text,
  Grid,
  Button,
  Pagination,
  Input,
} from "@nextui-org/react";

import { AiOutlineEye, AiFillEdit, AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

import postApi from "../../api/PostApi";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";

const PostList = () => {
  const [items, setItems] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [totalItem, setTotalItem] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await postApi.getPostList(page);
        if (res.status === 200) {
          const page = Math.ceil(res.data.totalItems / 6);
          setTotalItem(page);
          res.data && mapData(res.data.posts);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [page, refreshKey]);

  const mapData = (data) => {
    const newData = data.map((item, index) => ({
      id: item._id,
      title: item.title,
      content: item.content,
      imageUrl: "https://animal-post.herokuapp.com/" + item.imageUrl,
      creator: item.creator,
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
              <Text
                b
                size={14}
                css={{ tt: "capitalize", whiteSpace: "pre-wrap" }}
              >
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
              <IconButton onClick={() => handlerPostDetail(post.id)}>
                <AiOutlineEye size={20} fill="#13a452" />
              </IconButton>
            </Col>
            <Col css={{ d: "flex" }}>
              <IconButton onClick={() => handlerPostEdit(post.id)}>
                <AiFillEdit size={20} fill="#f5a524" />
              </IconButton>
            </Col>
            <Col css={{ d: "flex" }}>
              <IconButton onClick={() => handlerPostDelete(post.id)}>
                <AiFillDelete size={20} fill="#f31260" />
              </IconButton>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  //Modal
  const [postId, setPostId] = useState();
  const [check, setCheck] = useState();
  const [visible, setVisible] = useState(false);

  //Detail
  const handlerPostDetail = (id) => {
    setPostId(id);
    setCheck("PostDetail");
    setVisible(true);
  };

  const handlerPostAdd = () => {
    setCheck("PostAdd");
    setVisible(true);
  };

  const handlerPostEdit = (id) => {
    setPostId(id);
    setCheck("PostEdit");
    setVisible(true);
  };

  const handlerPostDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#0072f5",
      cancelButtonColor: "#d33",
      icon: "warning",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          const res = await postApi.deletePost(id);
          if (res.status === 200) {
            Swal.fire("Deleting is successfully!", "", "success");
            setRefreshKey((oldKey) => oldKey + 1);
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <>
      <ContentBar title="System > Post List">
        <Card>
          <h2>Post List</h2>
          <Grid.Container gap={2} alignItems="center" justify="space-between">
            <Grid>
              <Button
                color="primary"
                size="sm"
                auto
                onClick={() => handlerPostAdd()}
              >
                Add Post
              </Button>
            </Grid>
            <Grid
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <Input placeholder="Search title..." width="230px" />
              <Button color="primary" size="sm" auto>
                Search
              </Button>
            </Grid>
          </Grid.Container>
          <Table
            bordered
            shadow={false}
            color="secondary"
            css={{
              height: "auto",
              minWidth: "100%",
            }}
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

          <Pagination
            total={totalItem}
            initialPage={1}
            style={{ marginTop: "10px" }}
            onChange={(page) => setPage(page)}
          />
        </Card>
      </ContentBar>

      {/* Detail */}
      {check === "PostDetail" && (
        <PostDetail postId={postId} visible={visible} setVisible={setVisible} />
      )}
      {check === "PostAdd" && (
        <PostForm
          visible={visible}
          setVisible={setVisible}
          setRefreshKey={setRefreshKey}
        />
      )}
      {check === "PostEdit" && (
        <PostForm
          postId={postId}
          visible={visible}
          setVisible={setVisible}
          setRefreshKey={setRefreshKey}
        />
      )}
    </>
  );
};

export default PostList;
