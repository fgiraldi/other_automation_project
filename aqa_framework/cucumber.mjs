const getWorldParams = () => {
    const params = {
        foo: 'bar',
    };

    return params;
};

const config = {
    requireModule: ['ts-node/register'],
    require: ['src/**/*.ts'],
    loader: ['ts-node/esm'],
    import: ['src/**/*.ts'],
    format: [
        'json:reports/cucumber-report.json',
        ['./src/support/reporters/allure-reporter.ts', 'allure.txt'],
        "@cucumber/pretty-formatter"
      ],
    formatOptions: { snippetInterface: 'async-await' },
    worldParameters: getWorldParams(),
    forceExit: true,
};


export default config;
