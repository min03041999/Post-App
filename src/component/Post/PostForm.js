import React, { useState, useRef, useEffect } from "react";
import { Modal, Text, Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";

import postApi from "../../api/PostApi";

const PostForm = (props) => {
  // Close Modal
  const closeHandler = () => {
    props.setVisible(false);
  };

  //Image
  const imgRef = useRef();
  const handleInputImgChange = () => {
    const file = imgRef.current.files[0];
    // console.log(file.name);
    file.preview = URL.createObjectURL(file);
    setImgProduct(file);
  };

  const [imgProduct, setImgProduct] = useState();
  //Form
  const id = props.postId;
  if (id) {
    useEffect(() => {
      const fetchPost = async () => {
        try {
          const res = await postApi.getPost(id);
          if (res.status === 200) {
            res.data.post && reset(res.data.post);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchPost();
    }, [id]);
  }

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append(
      "image",
      imgRef.current.files[0] ? imgRef.current.files[0] : imgProduct
    );

    if (id) {
      await postApi
        .editPost(id, formData)
        .then((res) => {
          if (res.status !== 200 && res.status !== 201) {
            throw new Error("Editing a post failed!");
          }
          closeHandler();
          setImgProduct(null);
          props.setRefreshKey((oldKey) => oldKey + 1);
          return res.data.post;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await postApi
        .postPost(formData)
        .then((res) => {
          if (res.status !== 200 && res.status !== 201) {
            throw new Error("Creating a post failed!");
          }
          closeHandler();
          reset({ title: "", content: "" });
          setImgProduct(null);
          props.setRefreshKey((oldKey) => oldKey + 1);
          return res.data.post;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={props.visible}
        onClose={closeHandler}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header justify="left">
            <Text b size={18}>
              {props.postId ? "Edit Post" : "Add Post"}
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              {...register("title")}
              label="Title"
              placeholder="Enter your title."
            />
            <Textarea
              {...register("content")}
              label="Content"
              placeholder="Enter your content."
            />
            <input
              ref={imgRef}
              type="file"
              id="imageUrl"
              name="imageUrl"
              accept="image/*"
              style={{
                cursor: "pointer",
                marginBottom: "10px",
              }}
              onChange={handleInputImgChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button auto color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button auto type="submit">
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default PostForm;
