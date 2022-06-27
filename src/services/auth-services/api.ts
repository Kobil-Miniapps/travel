import { CALLBACK_URL } from "../../constants/configuration";
import { mainUrl } from "../../constants/mainUrl";
import httpclient from "../../plugins/http-client";

const urls = {
  post: {
    create: `${mainUrl.auth}create-url`,
    login: `${mainUrl.auth}login`,
  },
};

class AuthManager {
  public static postCreate = async () => {
    const response: any = await httpclient.fetch({
      method: "POST",
      path: urls.post.create,
      body: { redirectUrl: CALLBACK_URL },
    });
    window.location.replace(response.data.url);
    return;
  };

  public static login = async ({ code }: { code: string }) => {
    const response: any = await httpclient.fetch({
      method: "POST",
      path: urls.post.login,
      body: { redirectUrl: CALLBACK_URL, code },
    });

    localStorage.setItem("user_email", response.data.email);
    localStorage.setItem("user_name", response.data.name);
    return response;
  };
}

export default AuthManager;
