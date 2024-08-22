import test, {
    expect
} from '@playwright/test';
import institutionData from "../data/institutionData.json"
import { getScheduleInfoAvailableTimesList } from "../apiHelper";

test('Validate all schedule times are equal', async () => {
	var date_now = new Date();
	date_now.setDate(date_now.getDate() + 1);
	var start_date = date_now.toISOString().split('T')[0];

	const data = institutionData.students.map(obj => ({
		...obj,
		start_date: start_date
	}));

	const result = await getScheduleInfoAvailableTimesList(institutionData.token, data);

	result.forEach(element => {
		expect(element["response_code"], {message: "Endpoint response is not OK."}).toEqual(1);
		expect(element["data"].length, "Endpoint returned no data.").toBeGreaterThan(0);
	});

	var firstData = result[0]["data"];
	var resultsData: Object[] = [];
	result.forEach((element) => resultsData.push(element["data"]));

	expect(resultsData, {message: "Results didn't match."}).toContainEqual(firstData);
});