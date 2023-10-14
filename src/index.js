require('elastic-apm-node').start({
    serverUrl: '<serverUrl from your Elastic Stack deployment>',
    secretToken: '<secretToken from your Elastic Stack deployment>',
    serviceName: '...', 
    environment: '...',
});
