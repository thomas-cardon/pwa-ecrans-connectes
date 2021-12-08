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

type SavedCourseProps = {
    summary: string,
    location: string,
    description: string,
    start: string,
    end: string
}

function process(course: any) {
    if (!course.dtstart) {
        if (course.start)
            course.start = new Date(course.start);
        if (course.end)
            course.end = new Date(course.end);

        return course;
    }
    
    let obj = {
        label: course.summary.replace(/[M|R](.*?) /, ''),
        module: new RegExp(/([M|R].*?) /, "g").exec(course.summary)?.[1],
        description: course.description,
        location: course.location,
        start: new Date(course.dtstart.replace(/(....)(..)(.....)(..)(.*)/, '$1-$2-$3:$4:$5')),
        end: new Date(course.dtend.replace(/(....)(..)(.....)(..)(.*)/, '$1-$2-$3:$4:$5')),
        ongoing: false
    };

    obj.ongoing = obj.start.getTime() < Date.now() && obj.end.getTime() > Date.now();
    
    return obj;
}

const Schedule = ({ data } : Props) => {
    Object.keys(data).forEach(key => data[key] = process(data[key]));
    data = data
            .filter((x: { end: Date }) => x.end?.getTime() > new Date().getTime())
            .sort((a: { start: Date }, b: { start: Date }) => a.start?.getTime() - b.start?.getTime())

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
            {courses.sort((a: { start: Date }, b: { start: Date }) => b.start?.getTime() - a.start?.getTime()).reverse().map((course, j) =>
                    <div className="py-6" key={i + '-' + j}>
                    <div className={`p-4 shadow-xl sm:p-6 dark:bg-purple-700 rounded-xl ${course.ongoing ? 'bg-green-200' : ''}`}>
                            <div className="flex flex-row justify-between align-center">
                                <div className="flex flex-col">
                                    <h2 className="text-3xl font-light text-gray-800 dark:text-white">{course.label.replace(/\*/g, '').replace('(INFO)', '').replace(/TD G.*/g, '').trim()}</h2>
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

                                <div className="relative w-full h-32 p-4 mt-4 bg-center bg-cover rounded-lg shadow-xl bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-gold-200 dark:to-gold-300">
                                    <div className="absolute inset-0 bg-opacity-50 rounded-lg backdrop-filter backdrop-blur-md"></div>
                                    <div className="relative flex items-center justify-center w-full h-full px-4 sm:px-6 lg:px-4">
                                        <div>
                                            <h3 className="text-lg text-center text-gray-700">
                                                Ce cours est de:
                                            </h3>
                                            <h3 className="mt-2 text-3xl font-bold text-center text-gray-700">
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