export const ActivityStatsReportPage = {
    url: '/reports/activity-stats',
    'Previous Button': 'a[href="/reports/activity-stats?month=-1"]',
    'Next Button': 'a[href="/reports/activity-stats?month=1"]',
    'New Sessions Table':
        '#content > div.container > div:nth-child(5) > div.table-responsive > table',
    'New Surcharges Table':
        '#content > div.container > div:nth-child(6) > div.table-responsive > table',
    'New Users Table':
        '#content > div.container > div:nth-child(7) > div.table-responsive > table',
    'New Institutions Table':
        '#content > div.container > div:nth-child(8) > div.table-responsive > table',
    'Exams Completed Table':
        '#content > div.container > div:nth-child(9) > div.table-responsive > table',
};
