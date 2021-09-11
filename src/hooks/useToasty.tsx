import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const notify = (msg: string) => toast.success(msg, {
  position: "bottom-center",
  autoClose: 3000,
  theme: 'colored',
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
});