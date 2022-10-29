import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const toastifySuccess = (message) => {
  toast.success(message, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: "submit-feedback success",
    toastId: "notifyToast",
  });
};
const toastifyError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: "submit-feedback error",
    toastId: "notifyToast",
  });
};

export { toastifySuccess, toastifyError, ToastContainer };