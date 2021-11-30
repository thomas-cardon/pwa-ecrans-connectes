import { useLocalStorage } from "../utils/localStorage";

const Schedule = () => {
    const [code, setCode] = useLocalStorage("schedule.adeCode", 8402);
    const [schedule, setSchedule] = useLocalStorage("schedule.data", []);

    return (
        <div className="flex justify-center my-1 text-xs sm:text-base">
        </div>
    )
}

export default Schedule