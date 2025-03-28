import { GrStreetView } from "react-icons/gr";
import InputField from "../../../components/form/InputFields/InputFields";
import { FaCity, FaFlag, FaGlobeAmericas, FaMailBulk } from "react-icons/fa";
import Button from "../../../components/interactive/Button/Button";

const FormAddress = () => {
  return (
    <form className="w-full flex flex-col gap-5">
      <InputField
        name="street"
        placeholder="Enter your street"
        Icon="left"
        label="Street"
      >
        <InputField.Icon>
          <GrStreetView className="w-4 h-4" />
        </InputField.Icon>
      </InputField>

      <InputField
        name="city"
        placeholder="Enter your city"
        Icon="left"
        label="City"
      >
        <InputField.Icon>
          <FaCity className="w-4 h-4" />
        </InputField.Icon>
      </InputField>

      <InputField
        name="state"
        placeholder="Enter your state"
        Icon="left"
        label="State"
      >
        <InputField.Icon>
          <FaFlag className="w-4 h-4" />
        </InputField.Icon>
      </InputField>

      <InputField
        name="country"
        placeholder="Enter your country"
        Icon="left"
        label="Country"
      >
        <InputField.Icon>
          <FaGlobeAmericas className="w-4 h-4" />
        </InputField.Icon>
      </InputField>

      <InputField
        name="postal_code"
        placeholder="Enter your postal code"
        Icon="left"
        label="Postal Code"
      >
        <InputField.Icon>
          <FaMailBulk className="w-4 h-4" />
        </InputField.Icon>
      </InputField>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormAddress;
