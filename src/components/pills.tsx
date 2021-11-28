
type Props = {
    currentValue: any,
    onValueChange: Function,
    data: Array<any>
}

const Pills = ({ currentValue, onValueChange, data }: Props) => {
    return (
        <div className="flex justify-center my-1 text-xs sm:text-base">
            {data.map(({ value, label }, i) => {
                if (value === currentValue)
                    return (
                        <button type="button" className={`${i === 0 ? "rounded-l " : data.length - 1 === i ? "rounded - r " : ""} px-4 py-1 border border-blue-400 focus:outline-none bg-blue-400 text-white`}>
                            {label}
                        </button>
                    );
                
                return (
                    <button type="button" onClick={() => onValueChange(value)} className={`${i === 0 ? "rounded-l " : data.length - 1 === i ? "rounded-r " : ""}px-4 py-1 border border-blue-400 focus:outline-none`}>
                        {label}
                    </button>
                )
            })}
        </div>
    )
}

export default Pills