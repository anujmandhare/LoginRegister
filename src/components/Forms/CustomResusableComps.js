import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div id="inputcomponent">
      <label htmlFor={props.id || props.name}>{label}</label>
      <div>
        <input className="inputfield" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

const ButtonComponent = () => {
  return (
    <div id="buttondiv">
      <button type="submit" className="btn-primary">
        Submit
      </button>
      <button type="reset" className="btn-secondary">
        Reset
      </button>
    </div>
  );
};

export { MyTextInput, ButtonComponent };
