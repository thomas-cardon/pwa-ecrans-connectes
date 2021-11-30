import { useLocalStorage } from "../utils/localStorage";
import { Paperclip } from 'react-feather'

function stringToColor(str = 'xxx') {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}

const Schedule = () => {
    const [code, setCode] = useLocalStorage("schedule.adeCode", 8402);
    const [schedule, setSchedule] = useLocalStorage("schedule.data", []);

    let date = new Date();

    const data = [
        {
            "label": "M3203 Droit des TIC TD G2",
            "description": "1605013683654\nGroupe 2 an2\nBERTHET Anne Charlotte\n\n(Modifié le:08/11/2021 16:46)",
            "location": "TD 1 - 2",
            "deb": "20211130T071500Z",
            "fin": "20211130T091500Z",
            "start": "6h15",
            "end": "8h15"
        },
        {
            "label": "M3204 Gestion des SI TD G2*",
            "description": "Groupe 2 an2\nMAKSSOUD Christine\n\n(Modifié le:16/11/2021 13:26)",
            "location": "E 002",
            "deb": "20211130T091500Z",
            "fin": "20211130T111500Z",
            "start": "8h15",
            "end": "10h15"
        },
        {
            "label": "M3206 Anglais TD G2",
            "description": "Groupe 2 an2\nSLEZAK Eileen\n\n(Modifié le:22/09/2021 12:41)",
            "location": "Laboratoire Multimédia langues 108",
            "deb": "20211130T123000Z",
            "fin": "20211130T143000Z",
            "start": "11h30",
            "end": "13h30"
        },
        {
            "label": "M3303 PPP TD G2",
            "description": "Groupe 2 an2\nTANTI Marc\n\n(Modifié le:22/09/2021 12:41)",
            "location": "TD 1 - 2",
            "deb": "20211130T143000Z",
            "fin": "20211130T163000Z",
            "start": "13h30",
            "end": "15h30"
        }
    ];

    return (<div>
            <div className="p-6 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100 sm:p-10">
                <p className="text-xl not-italic text-center text-yellow-800 sm:text-3xl">{date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            {data.map(course => (
                <div className="py-6" key={course.deb}>
                    <div className="p-4 shadow-xl sm:p-6 dark:bg-gray-800 rounded-xl">
                        <h2 className="mt-6 text-3xl font-bold text-gray-800 dark:text-white">{course.label}</h2>
                        <p className="text-gray-500 whitespace-pre-line text-md dark:text-gray-50">{course.description.replace(/\([^()]*\)/g, '').replace(/\([^()]*\)/g, '').replace(/[0-9]{10,}/, '').trim().replace('*', '')}</p>
                        <p className="text-gray-500 whitespace-pre-line text-md dark:text-gray-50">
                            <i>📍 {course.location}</i>
                        </p>

                        <div className="flex flex-col items-center justify-center">

                            <div className="relative w-full h-32 p-4 mt-4 bg-center bg-cover rounded-lg shadow-xl bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-gray-300 dark:to-gray-400">
                                <div className="absolute inset-0 bg-opacity-50 rounded-lg backdrop-filter backdrop-blur-md"></div>
                                <div className="relative flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-4">
                                    <div>
                                        <h3 className="text-lg text-center text-gray-700 dark:text-white">
                                            Ce cours est de:
                                        </h3>
                                        <h3 className="mt-2 text-3xl font-bold text-center text-gray-700 dark:text-white">
                                            {course.start} à {course.end}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Schedule