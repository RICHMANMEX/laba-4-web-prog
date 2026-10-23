import stepFutureData from "../mockData/stepFutureData";

const StepFuture = () => {
  const {
    header,
    button: { title },
  } = stepFutureData;

  return (
    <>
      <h2 className="step_future_section_header">{header}</h2>
      <button className="step_future_section_btn btn">{title}</button>
    </>
  );
};

export default StepFuture;
