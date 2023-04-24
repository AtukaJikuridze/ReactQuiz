import { IoMdCheckboxOutline, IoMdCloseCircle } from "react-icons/io";

export const analizeStatistic = (correctAnswers: number) => {
  if (correctAnswers >= 7) {
    return (
      <>
        <IoMdCheckboxOutline style={{ color: "#4bb543" }} />
        <h2 style={{ color: "#4bb543" }}>Congratulations</h2>
      </>
    );
  } else if (correctAnswers > 3) {
    return (
      <>
        <IoMdCheckboxOutline style={{ color: "#C5D063" }} />
        <h2 style={{ color: "#C5D063" }}>Nice Try.. good job</h2>
      </>
    );
  }
  if (correctAnswers <= 3) {
    console.log(true);
    return (
      <>
        <IoMdCloseCircle style={{ color: "#FF0000" }} />
        <h2 style={{ color: "#FF0000" }}>Quiz Failed...</h2>
      </>
    );
  }
};
