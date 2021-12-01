type Props = {
    category: string,
    content: string
}

const Alert = ({ category, content }: Props) => <div className="pt-4 m-1 text-center">
    <div className="p-2">
        <div className="inline-flex items-center p-2 text-sm leading-none bg-white rounded-lg shadow text-yellow">
            <span className="inline-flex items-center justify-center h-6 px-3 font-semibold text-white bg-yellow-400 rounded-full text-md sm:text-lg">{category}</span>
            <span className="inline-flex px-2 text-xs text-black break-all sm:text-base">{content}</span>
        </div>
    </div>
</div>

export default Alert