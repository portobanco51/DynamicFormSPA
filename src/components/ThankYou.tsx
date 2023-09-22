import { useSelector, useDispatch } from "react-redux";
import { setFormData, initialState } from "../store/formSlice";
import { RootState } from "../types";
import { Button, Link, Title, Div, Avatar } from "../utils/styledComponents";

const ThankYou: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form);
  const {
    firstName,
    lastName,
    email,
    address1,
    city,
    state,
    zip,
    phone,
    jobTitle,
    reason,
  } = formData;

  const dispatch = useDispatch();
  const handleClearState = () => {
    dispatch(setFormData({ ...initialState }));
  };

  return (
    <Div>
      <Avatar
        title={`${firstName}'s Avatar`}
        loading="lazy"
        src={`https://i.pravatar.cc/150?u=${firstName}${lastName}`}
        alt={`${firstName} avatar`}
      />
      <Title>
        <span style={{ textDecoration: "underline" }}>
          {firstName} {lastName}
        </span>
        , thank you for submitting the form!
      </Title>
      <h2>Here's your information:</h2>
      <Link
        rel="noreferrer noopener"
        target="_blank"
        href={`mailto:${email}`}>{`${email}`}</Link>
      <p>{`${phone}`}</p>
      {address1 && <p>{`${address1}`}</p>}
      {
        <p>
          {city && `${city}`}
          {city && state && `, `}
          {state && `${state}`}
          {zip && `, ${zip}`}
        </p>
      }
      {jobTitle && <p>{`${jobTitle}`}</p>}
      {reason && <p>{`${reason}`}</p>}
      <Button
        title="Back"
        color="#1a73e8"
        type="button"
        onClick={handleClearState}>
        Back
      </Button>
    </Div>
  );
};
export default ThankYou;
