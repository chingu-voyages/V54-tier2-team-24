export default function Rectangle({ isFilled, isSelected }) {
  const borderStyle = isSelected
    ? "border-double border-white"
    : "border-solid border-icon";
  const rectStyle = "w-5 h-5 border-4 rounded-full md:w-7 md:h-7 lg:w-8 lg:h-8";
  return (
    <div
      className={
        isFilled
          ? `${rectStyle} ${borderStyle} bg-icon `
          : `${rectStyle} ${borderStyle}`
      }
    />
  );
}
