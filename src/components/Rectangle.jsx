export default function Rectangle({ isFilled,isSelected}) {
    const borderStyle = isSelected ? "border-double border-white" : "border-solid border-icon";
    const rectStyle = "w-12 h-3 border-4 rounded-lg md:w-15 md:h-5"
    return (
        <div
            className={
                isFilled
                    ? `${rectStyle} ${borderStyle} bg-icon `
                    : `${rectStyle} ${borderStyle}`
            }
        />
    )
}