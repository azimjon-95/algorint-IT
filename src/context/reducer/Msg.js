import { MsgOpen, MsgClose } from "../action/actionTypes";

const orderMsg = (state = false, action) => {
  switch (action.type) {
    case MsgOpen:
      return state = true;
    case MsgClose:
      return (state = false);
    default:
      return state;
  }
};

export default orderMsg;
