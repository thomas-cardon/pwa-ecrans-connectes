import { useRouter } from 'next/router'

type Props = {
    title: string,
    content: string,
    link: string,
    type: string
}

const NewsCard = ({ title, content, link, type }: Props) => {
    const router = useRouter()
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: `${process.env.title || 'PWA'} | ${title || '?'}`,
                text: 'Actualité IUT Aix Marseille, département info.',
                url: link,
            });
        }
    }

    return (
    <section>
            <div className="dark:bg-gray-800 bg-gray-200 bg-indigo-200 text-white w-full max-w-md flex flex-col rounded-xl shadow-lg p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="rounded-full w-4 h-4 border border-purple-500" />
                    <div className="text-md font-bold">{title || 'Actualité sans titre'}</div>
                </div>
                <div className="flex items-center space-x-4">
                    <div onClick={handleShare} role="button" className="text-gray-500 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </div>
                </div>
            </div>
            <div onClick={() => router.push(link)} role="button" className="cursor-pointer mt-4 text-gray-500 font-bold text-sm">
                {type === "text" ? <p>{content}</p>
                : <a href={link}>Cliquez ici pour voir les détails</a>}
            </div>
        </div>
    </section>)
}

export default NewsCard