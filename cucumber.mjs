const config = {
    requireModule: ['ts-node/register'],
    loader: ['ts-node/esm'],
    format: [
        "@cucumber/pretty-formatter"
      ],
    formatOptions: { snippetInterface: 'async-await' },
    forceExit: true,
};


export default config;
