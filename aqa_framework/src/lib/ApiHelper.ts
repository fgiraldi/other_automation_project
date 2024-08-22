import { getSecretsStoreValues } from '../../config/env';

export class ApiActions {
    public async getApiKey() {
        return await getSecretsStoreValues().then(res => {
            //console.log('bookUserAPI Key ' + res.AUTOQA_API_KEY);
            return res.AUTOQA_API_KEY;
        });
    }
    public async getApiUrl() {
        return await getSecretsStoreValues().then(res => {
            //console.log('getAPI URL ' + res.AUTOQA_API_HOME);
            return 'http://' + res.AUTOQA_API_HOME;
        });
    }

    public bookUserAPI = async (institution: string, role: string) => {
        console.log('bookUserAPI has been called');
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({});
        var config = {
            method: 'put',
            url:
                (await this.getApiUrl()) +
                '/bookuser/institution/' +
                institution +
                '/role/' +
                role,
            headers: {
                Authorization: await this.getApiKey(),
            },
            data: data,
        };
        // console.log('bookUserAPI URL ' + JSON.stringify(config));

        async function axiosTest() {
            const response = await axios(config);
            return response.data;
        }
        return axiosTest();
    };

    public freeUserAPI = async (id: string) => {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({});
        var config = {
            method: 'put',
            url: (await this.getApiUrl()) + '/freeuser/' + id,
            headers: {
                Authorization: await this.getApiKey(),
            },
            data: data,
        };

        //  console.log('bookUserAPI URL ' + JSON.stringify(config));

        async function axiosTest() {
            const response = await axios(config);
            return response.data;
        }
        return axiosTest();
    };

    public freeAllUsersAPI = async () => {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({});
        var config = {
            method: 'put',
            url: (await this.getApiUrl()) + '/freeallusers',
            headers: {
                Authorization: await this.getApiKey(),
            },
            data: data,
        };

        // console.log('bookUserAPI URL ' + JSON.stringify(config));

        async function axiosTest() {
            const response = await axios(config);
            return response.data;
        }
        return axiosTest();
    };

    public getUserByIdAPI = async (id: string) => {
        //  console.log('getUserAPI has been called:' + id);
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({});
        var config = {
            method: 'get',
            url: (await this.getApiUrl()) + '/user/' + id,
            headers: {
                Authorization: await this.getApiKey(),
            },
            data: data,
        };

        // console.log('bookUserAPI URL ' + JSON.stringify(config));

        async function axiosTest() {
            const response = await axios(config);
            return response.data;
        }
        return axiosTest();
    };

    public getUsersAPI = async () => {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({});
        var config = {
            method: 'get',
            url: (await this.getApiUrl()) + '/users',
            headers: {
                Authorization: await this.getApiKey(),
            },
            data: data,
        };

        //  console.log('bookUserAPI URL ' + JSON.stringify(config));

        async function axiosTest() {
            const response = await axios(config);
            return response.data;
        }
        return axiosTest();
    };

    public deleteUserAPI = async (id: string) => {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({});
        var config = {
            method: 'delete',
            url: (await this.getApiUrl()) + '/user/' + id,
            headers: {
                Authorization: await this.getApiKey(),
            },
            data: data,
        };
        //   console.log('bookUserAPI URL ' + JSON.stringify(config));

        async function axiosTest() {
            const response = await axios(config);
            return response.data;
        }
        return axiosTest();
    };

    public addUserAPI = async (
        id: string,
        username: string,
        password: string,
        role: string,
        availability: string,
        institution: string,
        department: string,
        lms: string
    ) => {
        var axios = require('axios');
        var qs = require('qs');
        // var data = qs.stringify({

        // });
        var config = {
            method: 'post',
            url: (await this.getApiUrl()) + '/user',
            headers: {
                Authorization: await this.getApiKey(),
            },
            data: {
                id: id,
                username: username,
                password: password,
                role: role,
                availability: availability,
                institution: institution,
                department: department,
                lms: lms, // This is the body part
            },
        };
        //   console.log('bookUserAPI URL ' + JSON.stringify(config));

        async function axiosTest() {
            const response = await axios(config);
            return response.data;
        }
        return axiosTest();
    };
}
