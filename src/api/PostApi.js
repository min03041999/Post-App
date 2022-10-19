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
};

export default postApi;
