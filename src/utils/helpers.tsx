import { Dispatch } from "@reduxjs/toolkit";
import { setFormData, initialState } from "../store/formSlice";
import { FormState, FieldObject } from "../types";
import { useDispatch } from "react-redux";

export const clearState = (dispatch: Dispatch) => {
  dispatch(setFormData({ ...initialState }));
};

export const clearForm = (formRef: React.RefObject<HTMLFormElement>) => {
  if (formRef.current) {
    const formElements = formRef.current.elements;
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i] as HTMLInputElement;
      if (element.type !== "submit") {
        element.value = "";
      }
    }
  }
};

export const formSubmit = (
  dispatch: Dispatch,
  formState: FormState,
  clearForm: () => void,
) => {
  const plainFormData: FormState = {
    ...formState,
    submitted: true,
  };

  dispatch(setFormData(plainFormData));
  clearForm();
};

export const useRenderField = (
  field: FieldObject,
  index: number,
  formState: FormState,
) => {
  const dispatch = useDispatch();
  return field.type === "select" ? (
    <div key={index}>
      <select
        name={field.id}
        onChange={(e) => {
          const selectedValue = e.target.value.toLowerCase();
          dispatch(setFormData({ ...formState, [field.id]: selectedValue }));
        }}>
        <option hidden value="">
          {field.placeholder}
        </option>
        {field.options?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  ) : field.type === "email" ? (
    <div key={index}>
      <input
        id={field.id}
        name={field.id}
        placeholder={
          field.placeholder || field.id.replace(/^./, field.id[0].toUpperCase())
        }
        required={field.required}
        type={field.type}
        onChange={(e) => {
          const emailValue = e.target.value;
          const updatedFormState = { ...formState, email: emailValue };
          dispatch(setFormData(updatedFormState));
        }}
      />
    </div>
  ) : (
    <div key={index}>
      <input
        name={field.id}
        placeholder={
          field.placeholder || field.id.replace(/^./, field.id[0].toUpperCase())
        }
        required={field.required}
        type={field.type}
      />
    </div>
  );
};
export default useRenderField;
