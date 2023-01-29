import { Outlet } from "react-router-dom";
import { Summary } from "../features";
import { Tabs } from "../features";
export const CheckoutLayout = () => {
  return (
    <div className={"container"}>
      <div className={"layout layout--checkout"}>
      <Tabs />
        <Outlet />
        <Summary />
      </div>
    </div>
  );
};

export default CheckoutLayout;
