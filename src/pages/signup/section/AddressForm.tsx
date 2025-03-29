import { GrStreetView } from "react-icons/gr";
import InputField from "../../../components/form/InputFields/InputFields";
import { FaCity, FaFlag, FaGlobeAmericas, FaMailBulk } from "react-icons/fa";
import Button from "../../../components/interactive/Button/Button";
import useSignup from "./useSignup";

export default function AddressForm() {
  const { formData, handleChange, loading, handleSubmit } = useSignup();
  return (
    <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
      <InputField
        name="street"
        placeholder="Enter your street"
        Icon="left"
        label="Street"
        value={formData.street}
        onChange={handleChange}
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
        value={formData.city}
        onChange={handleChange}
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
        value={formData.state}
        onChange={handleChange}
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
        value={formData.country}
        onChange={handleChange}
      >
        <InputField.Icon>
          <FaGlobeAmericas className="w-4 h-4" />
        </InputField.Icon>
      </InputField>

      <InputField
        name="postalCode"
        placeholder="Enter your postal code"
        Icon="left"
        label="Postal Code"
        value={formData.postalCode}
        onChange={handleChange}
      >
        <InputField.Icon>
          <FaMailBulk className="w-4 h-4" />
        </InputField.Icon>
      </InputField>

      <Button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}
