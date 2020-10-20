import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default {
  error: (message) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  },
};
