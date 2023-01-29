import { useState } from "react";
import {
  InputText,
  InputTextArea,
  Heading1,
  InputCheckbox,
} from "../components";
export const Delivery = () => {
  const [dropshipper, setDropshipper] = useState<boolean>(false);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropshipper(e.target.checked);
  };

  return (
    <div className={"page page--delivery"}>
      <div className={"header flex justify-between items-center"}>
        <Heading1>Delivery details</Heading1>
        <div>
          <label className="label-checkbox">
            <InputCheckbox onChange={handleCheckboxChange} className={"mr-1"} />
            Send as dropshipper
            <div className={"input-checkbox"}>
              <span className={"material-symbols-rounded"}>done</span>
            </div>
          </label>
        </div>
      </div>
      <div className={"page--delivery-wrapper"}>
        <div className={"page--delivery-info w-full"}>
          <div className={"input-group"}>
            <InputText placeholder="Name" />
            <label>Name</label>
          </div>
          <div className={"input-group"}>
            <InputText placeholder="Phone Number" />
            <label>Phone Number</label>
          </div>
          <div className={"input-group"}>
            <InputTextArea placeholder="Delivery Address" cols={3} rows={8} />
            <label>Delivery Address</label>
          </div>
              </div>
              {dropshipper && (
        <div className={"page--delivery-dopshipper"}>
         
           
              <div className={"input-group"}>
                <InputText placeholder="Dropshipper Name" />
                <label>Dropshipper Name</label>
              </div>

              <div className={"input-group"}>
                <InputText placeholder="Dropshipper phone number" />
                <label>Dropshipper phone number</label>
              </div>
      
         
                  </div>
                   )}
      </div>
    </div>
  );
};

export default Delivery;
