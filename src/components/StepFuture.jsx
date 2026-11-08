import stepFutureData from "../mockData/stepFutureData";

const StepFuture = () => {
  const { header, buttonTitle } = stepFutureData;

  return (
    <>
      <h2 className="step_future_section_header">
        {header.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h2>
      <button className="step_future_section_btn btn">{buttonTitle}</button>
    </>
  );
};

export default StepFuture;
