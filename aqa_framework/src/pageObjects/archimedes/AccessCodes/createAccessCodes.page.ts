export const CreateAccessCodesPage = {
    url: '/access-codes/new',
    'Total Counter':
        '#content > div.container > div:nth-child(2) > div:nth-child(1) > div > div > div > div:nth-child(1) > h1',
    'Used Counter':
        '#content > div.container > div:nth-child(2) > div:nth-child(1) > div > div > div > div:nth-child(2) > h1',
    'Unused Counter':
        '#content > div.container > div:nth-child(2) > div:nth-child(1) > div > div > div > div:nth-child(3) > h1',
    'Count Input': '#count',
    'Access Code Type': 'select#code_type',
    Duration: 'select#duration_amount',
    'Monetary Value Input': '#monetary_amount',
    'Batch Name Input': '#name',
    'Include Expiration Date Checkbox': '#expiration_',
    'Expiration Date Input': '#expiration',
    'Generate Access Codes Button':
        '#content > div.container > div:nth-child(2) > div:nth-child(2) > div > div > form > button',
};
