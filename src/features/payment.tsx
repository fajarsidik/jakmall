import { ReactEventHandler, useState } from "react";
import {
  Heading1,
  InputRadioBox,
} from "../components";
export const Payment = () => {
  const [dropshipper, setDropshipper] = useState<boolean>(false);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropshipper(e.target.checked);
  };

  return (
    <div className={"page page--payment"}>
      <div className={"header flex justify-between items-center"}>
        <Heading1>Shipment</Heading1>
      </div>
      <div className={"page--shipment-info w-full mt-4 flex justify-start"}>
        <label className="label-checkbox-large ">
          <InputRadioBox
            name={"shipment"}
            onChange={handleCheckboxChange}
            className={"mr-1"}
          />

          <div className={"input-checkbox"}>
            <p>Go Send</p>
            <p className={"mt-1"}>15,000</p>
            <span className={"material-symbols-rounded"}>done</span>
          </div>
        </label>

        <label className="label-checkbox-large ">
          <InputRadioBox
            name={"shipment"}
            onChange={handleCheckboxChange}
            className={"mr-1"}
          />

          <div className={"input-checkbox"}>
            <p>JNE</p>
            <p className={"mt-1"}>9,000</p>
            <span className={"material-symbols-rounded"}>done</span>
          </div>
        </label>

        <label className="label-checkbox-large ">
          <InputRadioBox
            name={"shipment"}
            onChange={handleCheckboxChange}
            className={"mr-1"}
          />

          <div className={"input-checkbox"}>
            <p>Personal Courier</p>
            <p className={"mt-1"}>29,000</p>
            <span className={"material-symbols-rounded"}>done</span>
          </div>
        </label>
      </div>

      <div className={"header flex justify-between items-center mt-4"}>
        <Heading1>Payment</Heading1>
      </div>
      <div className={"page--payment-info w-full mt-4 flex justify-start"}>
        <label className="label-checkbox-large ">
          <InputRadioBox
            name={"payment"}
            onChange={handleCheckboxChange}
            className={"mr-1"}
          />

          <div className={"input-checkbox"}>
            <p>e-Wallet</p>
            <p className={"mt-1"}>
              1,500,000 left
            </p>
            <span className={"material-symbols-rounded"}>done</span>
          </div>
        </label>

        <label className="label-checkbox-large ">
          <InputRadioBox
            name={"payment"}
            onChange={handleCheckboxChange}
            className={"mr-1"}
          />

          <div className={"input-checkbox"}>
            <p>Bank Transfer</p>

            <span className={"material-symbols-rounded"}>done</span>
          </div>
        </label>
        <label className="label-checkbox-large ">
          <InputRadioBox
            name={"payment"}
            onChange={handleCheckboxChange}
            className={"mr-1"}
          />

          <div className={"input-checkbox"}>
            <p>Virtual Account</p>

            <span className={"material-symbols-rounded"}>done</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Payment;
