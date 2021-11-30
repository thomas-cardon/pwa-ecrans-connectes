
type Props = {
    currentValue: any,
    onValueChange: Function,
    data: Array<any>
}

const Pills = ({ currentValue, onValueChange, data }: Props) => {
    return <div className="flex p-2 space-x-2 bg-gray-50 rounded-xl" role="tablist" aria-orientation="horizontal">
        {data.map(({ value, label }, i) => {
            if (value === currentValue)
                return (
                    <button key={i} className="w-full py-2.5 text-sm leading-5 font-semibold text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 bg-white shadow" id="headlessui-tabs-tab-1" role="tab" type="button" aria-selected="true" tabIndex={0} aria-controls="headlessui-tabs-panel-4">
                        {label}
                    </button>
                );
                
            return (
                <button key={i} onClick={() => onValueChange(value)} className="w-full py-2.5 text-sm leading-5 font-semibold text-black rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60" id="headlessui-tabs-tab-1" role="tab" type="button" aria-selected="true" tabIndex={0} aria-controls="headlessui-tabs-panel-4">
                    {label}
                </button>
                )
            })}
    </div>
}

export default Pills