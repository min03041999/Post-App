import React, { useEffect, useState } from "react";
import { Modal, Text, Button } from "@nextui-org/react";
import postApi from "../../api/PostApi";

const PostDetail = (props) => {
  const [post, setPost] = useState({});

  const postId = props.postId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (postId !== undefined) {
          const res = await postApi.getPost(postId);
          if (res.status === 200) {
            res.data && data(res.data.post);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId]);

  const data = (data) => {
    const newPost = {
      id: data._id,
      title: data.title,
      content: data.content,
      imageUrl: "http://localhost:8080/" + data.imageUrl,
      creator: data.creator.name,
      createdAt: data.createdAt,
      updatedAt: data.updateAt,
    };
    setPost(newPost);
  };

  const closeHandler = () => {
    props.setVisible(false);
  };

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={props.visible}
        onClose={closeHandler}
      >
        <Modal.Header justify="left">
          <Text b size={18}>
            Detail Post
          </Text>
        </Modal.Header>
        <>
          {Object.keys(post).length !== 0 && (
            <>
              <img src={post.imageUrl} alt={post.title} height="300" />
              <Modal.Body>
                <Text b size={25}>
                  {post.title}
                </Text>
                <Text size={15}>{post.content}</Text>
              </Modal.Body>
            </>
          )}
        </>
        <Modal.Footer>
          <Button auto color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostDetail;
