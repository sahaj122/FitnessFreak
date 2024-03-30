import { atom } from "recoil";

const foodState = atom({
  key: "foodState",
  default: "",
});

export default foodState;
