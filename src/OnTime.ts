import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";


dayjs.extend(timezone);
dayjs.extend(utc);


dayjs.tz.setDefault("Asia/Tokyo");
const currentTokyoTime = dayjs().tz().format("YYYY-MM-DD-HH-mm"); 

export default function OnTime() {
    return(
        currentTokyoTime
    )


}