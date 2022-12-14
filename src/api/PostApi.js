import api from "./axiosClient";

const postApi = {
  getPostList: (page) => {
    const url = `feed/postspage?page=${page}`;
    return api.get(url);
  },

  getPost: (id) => {
    const url = `feed/post/${id}`;
    return api.get(url);
  },

  postPost: (data) => {
    const url = "feed/post";
    return api.post(url, data);
  },

  editPost: (id, data) => {
    const url = `feed/post/${id}`;
    return api.put(url, data);
  },

  deletePost: (id) => {
    const url = `feed/post/${id}`;
    return api.delete(url);
  },
};

export default postApi;
