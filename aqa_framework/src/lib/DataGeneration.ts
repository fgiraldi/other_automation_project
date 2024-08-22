import * as Fake from 'faker';

export const generateFake = (
    kind:
        | 'email'
        | 'firstName'
        | 'lastName'
        | 'name'
        | 'number'
        | 'username'
        | 'phone'
        | 'sentence'
        | 'testdata'
        | 'editableTestName'
        | 'alphaNumeric'
        | 'durationInMinutes'
        | 'address'
        | string
): string => {
    const fke = {
        email: () =>
            (Fake.internet.userName() + '@fakeqatest.com').toLowerCase(),
        firstName: () => Fake.name.firstName(),
        lastName: () => Fake.name.lastName(),
        name: () => Fake.name.firstName() + ' ' + Fake.name.lastName(),
        number: (params?) =>
            Fake.random
                .number(
                    (p => {
                        let min = 0,
                            max = 1000;
                        if (p) {
                            [min, max] = p
                                .match(/[-+]?\d+/g)
                                .map(Number)
                                .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
                        }
                        return {
                            min,
                            max,
                        };
                    })(params)
                )
                .toString(),
        username: () => Fake.internet.userName(),
        phone: () => Fake.phone.phoneNumber('2##-###-####'),
        sentence: () => Fake.lorem.sentence(),
        testdata: () =>
            'Automated ' +
            Fake.lorem.words(3) +
            ' ' +
            Fake.random.alphaNumeric(9),
        editableTestName: () =>
            'Automated_Editable ' +
            Fake.lorem.word() +
            ' ' +
            Fake.random.alphaNumeric(9),
        randomTestName: () => 'AQAexam_ ' + Fake.random.alphaNumeric(9),
        alphaNumeric: () => Fake.random.alphaNumeric(16),
        durationInMinutes: () =>
            Fake.random.number({ min: 10, max: 99 }).toString(),
        password: () => 'Automation' + Fake.random.number(3) + '+',
        address: () => Fake.address.streetAddress(),
    };

    const options = RegExp(/([A-Za-z][^\s]+)*( \(.*\)|$)/g).exec(kind.trim());
    const cmd = options[1];
    const params = options[2];
    const result = !!fke[cmd] ? fke[cmd](params) : Fake.random.uuid();
    return result;
};
