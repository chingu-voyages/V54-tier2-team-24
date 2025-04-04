export default function Rectangle({ isFilled,isSelected}) {
    const borderStyle = isSelected ? "border-double border-blue-800" : "border-solid border-icon";
    const rectStyle = "w-15 h-5 border-4 rounded-lg"
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