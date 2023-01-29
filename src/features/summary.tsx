import { Heading2, ButtonOrange } from "../components";

export const Summary = () => {
  return (
    <div className={"layout--summary"}>
      <Heading2 className={"mb-2"}>Summary</Heading2>

      <p className={"text-grey mb-2"}>10 item purchased</p>

      <div className={"mb-2"}>
        <p className={"mb-1"}>Delivery estimation</p>
        <p className={"text-success font-semibold"}>today by GO-SEND</p>
      </div>

      <div className={"mb-2 w-full"}>
        <p className={"text-black flex justify-between mb-1"}>
          <span className={"text-grey"}>Cost of goods</span> 500,000
        </p>
        <p className={"text-black flex justify-between mb-1"}>
          <span className={"text-grey"}>Dropshipping Fee</span> 5,900
        </p>
        <p className={"text-black flex justify-between mb-1"}>
          <span className={"text-grey"}>GO-SEND shipment</span> 15,000
        </p>
      </div>

      <Heading2 className={"w-full flex justify-between "}>
        Total <span>505,900</span>
          </Heading2>
          
          <ButtonOrange className={'mt-4'}>Pay with e-Wallet</ButtonOrange>
    </div>
  );
};
export default Summary;
