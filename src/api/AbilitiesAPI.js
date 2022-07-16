import axios from "axios"

export const getAbilities = (url_abilities) => {
  return axios.get(url_abilities)
    .then(res => {
      const { data } = res;
      return data;
    });
}