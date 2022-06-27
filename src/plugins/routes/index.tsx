import Booking from "../../view/booking";
import BookingInfo from "../../view/bookingInfo";
import Home from "../../view/home";
import Payment from "../../view/payment";
import Summary from "../../view/summary";

type Route = {
  path: string;
  component: any;
};

const Routes: Route[] = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/booking",
    component: <Booking />,
  },
  {
    path: "/summary",
    component: <Summary />,
  },
  {
    path: "/payment",
    component: <Payment />,
  },
  {
    path: "/booking-info",
    component: <BookingInfo />,
  },
];

export default Routes;
