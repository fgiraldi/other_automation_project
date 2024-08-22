import { config } from '../src/support/config';
import { sendGetConcurrently } from "./apiFunctions";

const url_getScheduleInfoAvailableTimesList = `${config.BASE_URL}/api/getScheduleInfoAvailableTimesList/`;

export async function getScheduleInfoAvailableTimesList(token: string, data) {
    let listOfUrls: string[] = [];
	var currentDate = (new Date()).toISOString().split('T')[0];

    data.forEach(element => {
		listOfUrls.push(`${url_getScheduleInfoAvailableTimesList}?time_sent=${currentDate}&time_zone_id=${element.time_zone_id}&isadhoc=${element.isadhoc}&start_date=${element.start_date}&takeitnow=${element.takeitnow}&duration=${element.duration}`)
	});

    return await sendGetConcurrently(token, listOfUrls);
}