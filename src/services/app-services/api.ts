import { mainUrl } from "../../constants/mainUrl";
import httpclient from "../../plugins/http-client";

const urls = {
  get: {
    attachment: `${mainUrl.booking}travel-attachment-message`,
    message: `${mainUrl.booking}travel-message`,
  },
};

class AppManager {
  public static attachmentMessage = async ({
    type,
    message,
  }: {
    type: string;
    message: string;
  }) => {
    const response: any = await httpclient.fetch({
      method: "GET",
      path: `${urls.get.attachment}?to=${localStorage.getItem(
        "user_email"
      )}&type=${type}&message=${message}`,
    });
    return response.data;
  };
  public static travelMessage = async (message: string) => {
    const response: any = await httpclient.fetch({
      method: "GET",
      path: `${urls.get.message}?to=${localStorage.getItem(
        "user_email"
      )}&message=${encodeURIComponent(message)}`,
    });
    return response.data;
  };
}

export default AppManager;
