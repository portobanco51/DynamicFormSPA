import { render, fireEvent } from "@testing-library/react";
import { RootState } from "../types";
import { test, expect, it, vi } from "vitest";
import { useSelector, useDispatch, Provider } from "react-redux";
import { setFormData, initialState } from "../store/formSlice";
import ThankYou from "./ThankYou";

const mockState: RootState = {
  form: {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    address1: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "12345",
    phone: "123-456-7890",
    jobTitle: "Engineer",
    reason: "Testing",
  },
};

test("ThankYou component", () => {
  it("should render the component with the correct form data", () => {
    beforeEach(() => {
      (useSelector as jest.Mock).mockReturnValueOnce(mockState.form);
    });

    const { getByText } = render(
      <Provider store={mockState}>
        <ThankYou />
      </Provider>,
    );

    expect(getByText("johndoe@example.com")).toBeInTheDocument();
    expect(getByText("123-456-7890")).toBeInTheDocument();
    expect(getByText("123 Main St")).toBeInTheDocument();
    expect(getByText("New York")).toBeInTheDocument();
    expect(getByText("NY")).toBeInTheDocument();
    expect(getByText("Engineer")).toBeInTheDocument();
    expect(getByText("Testing")).toBeInTheDocument();
    expect(getByText("First Name: John")).toBeInTheDocument();
    expect(getByText("Last Name: Doe")).toBeInTheDocument();
  });
});

test("clears form data on button click", () => {
  it("should call dispatch with the expected parameters", async () => {
    const mockDispatch = jest.fn();
    const mockUseDispatch = vi.mock("react-redux", useDispatch);
    mockUseDispatch.mockReturnValueOnce(mockDispatch);

    const { getByText } = render(
      <Provider store={mockState}>
        <ThankYou />
      </Provider>,
    );

    fireEvent.click(getByText("Back"));

    expect(mockDispatch).toHaveBeenCalledWith(setFormData({ ...initialState }));
  });
});
