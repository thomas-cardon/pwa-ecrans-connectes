
type Props = {
    currentValue: any,
    onValueChange: Function,
    data: Array<any>
}

const Pills = ({ currentValue, onValueChange, data }: Props) => {
    return <div className="flex flex-col bg-opacity-50 sm:space-x-2 sm:p-2 sm:flex-row dark:bg-purple-700 bg-gray-50 rounded-xl" role="tablist" aria-orientation="horizontal">
        {data.map(({ value, label }, i) => {
            if (value === currentValue)
                return (
                    <button key={i} className="w-full py-2.5 text-sm leading-5 font-bold text-blue-500 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 bg-white shadow" role="tab" type="button" aria-selected="true">
                        {label}
                    </button>
                );
                
            return (
                <button key={i} onClick={() => onValueChange(value)} className="w-full py-2.5 text-sm leading-5 font-bold text-black dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60" role="tab" type="button" aria-selected="false">
                    {label}
                </button>
                )
            })}
    </div>
}

export default Pills