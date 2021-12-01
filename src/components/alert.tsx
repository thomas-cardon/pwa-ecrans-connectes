type Props = {
    category: string | JSX.Element,
    content: string,
    color: string
}

const Alert = ({ category, content, color }: Props) => <div className="pt-1 m-1 text-center">
    <div className="px-5">
        <div className={"inline-flex items-center p-2 text-sm leading-none bg-white rounded-lg shadow text-" + color}>
            <span className={"inline-flex items-center justify-center h-6 px-3 py-4 font-semibold text-white bg-" + color + "-400 rounded-full text-md sm:text-lg"}>{category}</span>
            <span className={"inline-flex px-2 text-xs text-black whitespace-pre-line sm:text-base"}>{content}</span>
        </div>
    </div>
</div>

export default Alert