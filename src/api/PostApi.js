import api from "./axiosClient";

const postApi = {
  getPostList: () => {
    const url = "feed/posts";
    return api.get(url);
  },
};

export default postApi;
