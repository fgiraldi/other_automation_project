import { getSecretsStoreValues } from '../../config/env';
import * as PG from 'pg';
import { user } from '../../types/interface';
import { AES, enc } from 'crypto-js';
import { ApiActions } from '../lib/ApiHelper';

/**
 * Connects to the AQA User DB, manages encryption and decryption of stored values, and handles setting a user's "busy" status during test execution.
 * Provides methods to add, update, and list users stored in the AQA User DB
 */
class UserProvider {
    private static instance;
    public testDataAccess = {};
    private usersThisTest: Array<user>;
    private ApiCall: ApiActions;
    public userId;
    public userName;

    constructor() {
        if (!!UserProvider.instance) return UserProvider.instance;
        UserProvider.instance = this;
        this.ApiCall = new ApiActions();
        return this;
    }

    public async _init() {
        //console.log('Starting  get Secrets');
        return await getSecretsStoreValues().then((res) => {
            this.testDataAccess['secret'] = res.AQA_USER_DB_KEY;
        });
    }

    private encryptValue(value: string) {
        return AES.encrypt(value, this.testDataAccess['secret']).toString();
    }

    private decryptValue(value: string) {
        return AES.decrypt(value, this.testDataAccess['secret']).toString(
            enc.Utf8
        );
    }

    public encryptUserData(user) {
        user.email = this.encryptValue(user.email);
        user.password = this.encryptValue(user.password);
        return user;
    }

    public decryptUserData(user) {
        !!user.email ? (user.email = this.decryptValue(user.email)) : undefined;
        !!user.username
            ? (user.username = this.decryptValue(user.username))
            : undefined;
        user.password = this.decryptValue(user.password);

        return user;
    }

    public async listUsers() {
        const users = await this.ApiCall.getUsersAPI();
        return users;
    }

    /**
     * Retrieves the id, email, and password for a user stored in the AQA User DB *without marking the user as "busy"* and sets the user within the current test context
     * @param id The id of the user to retrieve
     * @returns User object
     */
    public async getUser(id: string): Promise<user> {
        let usr = await this.ApiCall.getUserByIdAPI(id);
        if (!!usr) {
            usr = this.decryptUserData(usr);
            this.userId = usr['id'];
            this.userName = usr['email'];
        }
        // console.log(`List User: ${this.decryptValue(this.userName)} listed.`);

        return usr;
    }

    /**
     * Retrieves the id, email, and password for a user stored in the AQA User DB *marking the user as "busy"* and sets the user within the current test context
     * @param role The role of the desired User
     * @param institution The instutution of the desired User
     * @returns User object
     */
    public async bookUser(role: string, institution?: string): Promise<user> {
        //console.log('ABOUT TO BOOK USER');

        let usr = await this.ApiCall.bookUserAPI(institution, role);

        if (!!usr) {
            usr = this.decryptUserData(usr);
            this.userId = usr.id;
            this.userName = usr.email;
            console.log(
                `bookUser - User ${this.userId}: ${this.userName} is now booked for use as ${role}.`
            );
            if (!this.usersThisTest) {
                this.usersThisTest = [];
            }
            if (!this.usersThisTest.includes(this.userId)) {
                this.usersThisTest.push(this.userId);
            }
            return usr;
        } else {
            throw `bookUser - Error! Cannot book user: All the ${role}s ${
                institution ? 'for ' + institution : ''
            } are booked!`;
        }
    }

    /**
     * Calls method to mark the current User as "free" if this.userId is currently set
     * @param scenarioName (Optional) The name of the currently running scenario
     */
    public async free(scenarioName?: string) {
        return !!this.userId
            ? await this.freeUser(this.userId)
            : console.log(
                  `free - No user was booked for test: "${
                      scenarioName || '-CurrentScenario-'
                  }"`
              );
    }

    /**
     * Marks the User with the provided id as "free"
     * @param id Id of the User to mark "free"
     */
    private async freeUser(id) {
        console.log(`freeUser - Freeing user ${id}...`);
        await this.ApiCall.freeUserAPI(id);
        console.log(`freeUser - User ${id} is no longer booked.`);
        this.userId = undefined;
        this.usersThisTest = this.usersThisTest.filter((uId) => uId != id);
    }

    /**
     * Frees all users marked as "busy" in the curerntly running scenario
     * @param scenarioName (Optional) The name of the currently runing scenario
     */
    public async freeAllUsersThisScenario(scenarioName?: string) {
        console.log(
            `freeAllUsersThisScenario -- Freeing users from test "${
                scenarioName || '-CurrentScenario-'
            }"`
        );
        return !!this.usersThisTest && this.usersThisTest.length > 0
            ? await this.usersThisTest
                  .concat([])
                  .reduce((seq, n) => {
                      return seq.then(() => this.freeUser(n));
                  }, Promise.resolve())
                  .then(
                      () => console.log(scenarioName, '\n', '-- done --'),
                      (e) => console.log(e)
                  )
            : console.log(
                  `freeAllUsersThisScenario - No users were booked for test: "${
                      scenarioName || '-CurrentScenario-'
                  }"`
              );
    }

    /**
     * Marks all Users currently marked as "busy" as "free"
     */
    public async freeAllUsers() {
        return await this.ApiCall.freeAllUsersAPI();
    }

    /**
     * Adds a User to the AQA User DB
     * @NOTE "id" must be unique to each user
     * @param id
     * @param username
     * @param password
     * @param role
     * @param availability
     * @param institution
     * @param department
     * @param lms
     * @returns
     */
    public async addUser(
        id: string,
        username: string,
        password: string,
        role: string,
        availability: string,
        institution: string,
        department: string,
        lms: string
    ) {
        // const client = new PG.Client(this.testDataAccess);
        // await client.connect().catch(console.log);
        console.log(`addUser - Adding user "${username}".`);
        let enc_password = `${this.encryptValue(password)}`;
        let enc_username = `${this.encryptValue(username)}`;

        await this.ApiCall.addUserAPI(
            id,
            enc_username,
            enc_password,
            role,
            availability,
            institution,
            department,
            lms
        );

        // //console.log(`addUser - Adding user "${username}".`);
        // await client.query(
        //     `INSERT INTO users (id, username, password, role, availability, institution, department, lms)
        //     VALUES (${id}, '${this.encryptValue(
        //         username
        //     )}', '${this.encryptValue(
        //         password
        //     )}', '${role}', '${availability}', '${institution}', '${department}', '${lms}');`
        // );
        console.log(`addUser - User ${this.decryptValue(username)} added.`);
        await this.ApiCall.getUsersAPI();
        //return
    }

    /**
     * Removes User with the provided "id" from the AQA User DB
     * @param id
     */
    public async removeUser(id: string) {
        await this.ApiCall.deleteUserAPI(id);
        // const client = new PG.Client(this.testDataAccess);
        // await client.connect().catch(console.log);
        // console.log(`removeUser - Removing User "${id}".`);
        // await client.query(
        //     `DELETE FROM users
        //     WHERE id = '${id}';`
        // );
        // console.log(`removeUser - User "${id}" removed.`);
        // await client.query(`SELECT * from users`);
        // return await client.end();
    }

    /**
     * Updates User with the provided values
     * @param id Unique Id of the User to update
     * @param values key: value pairs of the data to update
     */
    public async updateUser(id, ...values) {
        const client = new PG.Client(this.testDataAccess);
        await client.connect().catch(console.log);
        console.log(
            `updateUser - Updating User "${id}" with: ${JSON.stringify(
                values,
                undefined,
                2
            )}`
        );
        await values
            .reduce((seq, n: string) => {
                const att = n.substr(0, n.indexOf('='));
                const val = n.substr(n.indexOf('=') + 1);
                return seq.then(() => {
                    return client.query(`
                UPDATE users SET ${att} = '${
                    att == 'username' || att == 'password'
                        ? this.encryptValue(val)
                        : val
                }' WHERE id = '${id}'`);
                });
            }, Promise.resolve())
            .then(
                () => console.log('done'),
                (e) => console.log(e)
            );
        return await client.end();
    }
}

export default UserProvider;
