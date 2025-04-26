export default function Rectangle({ isFilled,isSelected}) {
    const borderStyle = isSelected ? "border-double border-white" : "border-solid border-icon";
    const rectStyle = "w-3 h-3 border-4 rounded-full md:w-8 md:h-8"
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