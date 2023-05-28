import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const billAmountHandler = (cart) =>
  cart.reduce((acc, curr) => acc + curr.qty * Number(curr.price), 0);

const toastStyles = {
  position: "bottom-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};
const toastNotification = (type, msg) => {
  switch (type) {
    case "success":
      toast.success(msg, toastStyles);
      break;
    case "error":
      toast.error(msg, toastStyles);
      break;
    case "warning":
      toast.warning(msg, toastStyles);
      break;
    default:
      toast.info(msg, toastStyles);
      break;
  }
};

export { billAmountHandler, toastNotification };
