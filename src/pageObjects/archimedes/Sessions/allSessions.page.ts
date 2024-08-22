export const AllSessionsPage = {
    url: '/reservations',
    'Search Box': '#search',
    'Exam Dropdown': 'input[id="exam"]',
    'Search Textbox': 'input[id="search"]',
    'Status Dropdown': 'select[id="status"]',
    Running: '#status > option:nth-child(6)',
    'Sessions Table':
        '#content > div.container > form > div.row > div > div > div > table > tbody > tr',
    'First Result Link':
        '.table.table-semibordered.table-hover.table-default tbody td a',
    'First Result View Button': '.table.table-semibordered.table-hover.table-default tbody td a.btn',
    'Session ID Link': 'td > a[href*="/reservations/"]',
    'Search Button': 'input[type="submit"][value="Search"]',
    'Table Elements Status': '//tbody//tr/td[7]',
};
