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


type Props = {
    data: Array<any>
}

type CourseProps = {
    summary: string,
    location: string,
    description: string,
    dtstart: string,
    dtend: string
}

function process(course: CourseProps) {
    if (!course.dtstart) return course;
    
    let obj = {
        label: course.summary.replace(/[M|R](.*?) /, ''),
        module: new RegExp(/([M|R].*?) /, "g").exec(course.summary)?.[1],
        description: course.description,
        location: course.location,
        start: new Date(course.dtstart.replace(/(....)(..)(.....)(..)(.*)/, '$1-$2-$3:$4:$5')),
        end: new Date(course.dtend.replace(/(....)(..)(.....)(..)(.*)/, '$1-$2-$3:$4:$5')),
    };
    
    return obj;
}

const Schedule = ({ data } : Props) => {
    const [code, setCode] = useLocalStorage("schedule.adeCode", 8402);
    const [schedule, setSchedule] = useLocalStorage("schedule.data", []);

    let date = new Date();

    Object.keys(data).forEach(key => data[key] = process(data[key]));

    let dataSortedByDate = {};
    data.forEach(course => {
        let date = course.start.toLocaleDateString(navigator.language, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        if (!dataSortedByDate[date]) {
            dataSortedByDate[date] = [];
        }
        dataSortedByDate[date].push(course);
    });
    
    return <>
        {Object.entries(dataSortedByDate).map(([date, courses]: [string, Array<any>], i) => (<div key={i}>
                <div className="p-6 overflow-hidden rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100 sm:p-10">
                    <p className="text-xl not-italic text-center text-yellow-800 sm:text-3xl">{date}</p>
                </div>
                {courses.map((course, j) =>
                    <div className="py-6" key={i + '-' + j}>
                        <div className="p-4 shadow-xl sm:p-6 dark:bg-gray-800 rounded-xl">
                            <div className="flex flex-row justify-between align-center">
                                <div className="flex flex-col">
                                    <h2 className="text-3xl font-light text-gray-800 dark:text-white">{course.label.replace(/\*/g, '').replace(/TD G.*/g, '')}</h2>
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="font-mono text-3xl text-gray-800 dark:text-white">{course.module}</h2>
                                </div>
                            </div>
                            <p className="text-gray-500 whitespace-pre-line text-md dark:text-gray-50">{course.description.replace(/\([^()]*\)/g, '').replace(/\([^()]*\)/g, '').replace(/[0-9]{10,}/, '').trim()}</p>
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
                                                {course.start.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })} à {course.end.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>))}
        </>
    }

export default Schedule