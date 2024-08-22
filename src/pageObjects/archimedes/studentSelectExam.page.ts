export const StudentSelectExamPage = {
    url: '/students/exams/select',
    'Institution Dropdown': '#institution-selection',
    'Term Dropdown': '//div[@data-value="termPlaceholder"]',
    'Exam Dropdown': '//div[@data-value="examPlaceholder"]',
    'Search Exams Input':
        'div.choices[data-type="select-one"] input.choices__input[placeholder="Search exams..."]',
    'Exams Options':
        'div.choices > div.choices__list.choices__list--dropdown div.choices__item',
    'Find Sessions Button': 'button[data-behavior="submit-exam-search"]',
    'Fall 2019 Option': '//div[contains(text(), "Fall 2019")]',
    'Regression PC 3 Option':
        '//div[contains(text(), "Regression PC 3 - 673 Dr QA Exam")]',
    'Change Exam Button': "//a[contains(text(),'Select a Different Exam')]",
    'Expanded Input Field': '//div[@aria-expanded="true"]//input',
};
