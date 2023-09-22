import fieldSet from "../utils/field-set";
import { FormState, RootState, FieldObject, Field } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../store/formSlice";
import { useRef } from "react";
import { clearForm, clearState } from "../utils/helpers";
import { Title, LineDiv, Button } from "../utils/styledComponents";
import RenderField from "../utils/RenderField";

const formFields: Field[] = fieldSet;

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);

  const formRef = useRef<HTMLFormElement>(null);

  const handleClear = () => {
    clearState(dispatch);
  };

  const handleClearForm = () => {
    clearForm(formRef);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const plainFormData: FormState = {
      ...formState,
      ...Object.fromEntries(formData.entries()),
      submitted: true,
    };

    dispatch(setFormData(plainFormData));
    handleClearForm();
  };

  return (
    //map function to iterate through the formFields array. If item is an array, we map through it and call renderField() for each nested object. If item is a standalone object, we directly call renderField()
    <>
      <Title>Employee Data Form</Title>

      <form ref={formRef} onSubmit={handleSubmit}>
        {formFields.map((item: FieldObject | FieldObject[], index: number) => {
          if (Array.isArray(item)) {
            return (
              <LineDiv key={index}>
                {item.map((nestedItem: FieldObject, nestedIndex: number) => (
                  <RenderField
                    key={nestedIndex}
                    field={nestedItem}
                    formState={formState}
                    index={nestedIndex}
                  />
                ))}
              </LineDiv>
            );
          } else {
            return (
              <RenderField
                key={index}
                field={item}
                formState={formState}
                index={index}
              />
            );
          }
        })}

        <LineDiv>
          <Button title="Submit form" color="#1a73e8" type="submit">
            Submit
          </Button>
          <Button
            title="Clear form"
            color="red"
            onClick={() => {
              handleClear();
              handleClearForm();
            }}
            type="button">
            Clear
          </Button>
        </LineDiv>
      </form>
    </>
  );
};

export default Form;
