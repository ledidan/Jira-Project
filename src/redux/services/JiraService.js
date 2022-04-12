import { Axios } from "axios";
import { DOMAIN_LOGIN_JIRA } from "../../util/DOMAIN/JiraDomain";

export const JiraService = {
  signInJira: (userLogin) => {
    return Axios({
      url: `${DOMAIN_LOGIN_JIRA}/api/Users/signin`,
      method: "POST",
      data: userLogin,
    });
  },
};
