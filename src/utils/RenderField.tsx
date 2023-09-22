import { setFormData } from "../store/formSlice";
import { useDispatch } from "react-redux";
import { FormState, FieldObject } from "../types";
import { Input, Select, Div } from "../utils/styledComponents";

//we define a helper functional component RenderField that takes a FieldObject and renders the corresponding JSX for that field.
const RenderField: React.FC<{
  field: FieldObject;
  index: number;
  formState: FormState;
}> = ({ field, index, formState }) => {
  const dispatch = useDispatch();

  switch (field.type) {
    case "select":
      return (
        <Div key={index}>
          <Select
            title={field.id}
            name={field.id}
            onChange={(e) => {
              const selectedValue = e.target.value.toLowerCase();
              dispatch(
                setFormData({ ...formState, [field.id]: selectedValue }),
              );
            }}>
            <option hidden value="">
              {field.placeholder}
            </option>
            {field.options?.map((item: string, index: number) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Div>
      );
    case "email":
      return (
        <Div key={index}>
          <Input
            title={field.id || field.placeholder}
            id={field.id}
            name={field.id}
            placeholder={
              field.placeholder ||
              field.id.replace(/^./, field.id[0].toUpperCase())
            }
            required={field.required}
            type={field.type}
            onChange={(e) => {
              const emailValue = e.target.value;
              const updatedFormState = { ...formState, email: emailValue };
              dispatch(setFormData(updatedFormState));
            }}
          />
        </Div>
      );
    default:
      return (
        <Div key={index}>
          <Input
            title={field.id}
            name={field.id}
            placeholder={
              field.placeholder ||
              field.id.replace(/^./, field.id[0].toUpperCase())
            }
            required={field.required}
            type={field.type}
          />
        </Div>
      );
  }
};

export default RenderField;
