import UserProvider from './UserProvider';

export const getUser = async ({
    userType,
    identifier,
}: {
    userType: string;
    identifier?: string;
}) => {
    const UP = new UserProvider();
    return await UP._init().then(
        async () => await UP.bookUser(userType.replace(' ', '_'), identifier)
    );
};

export const getUserById = async (id: string) => {
    const UP = new UserProvider();
    return await UP._init().then(async () => await UP.getUser(id));
};

export const freeUser = async (id: string) => {
    const UP = new UserProvider();
    return await UP._init().then(async () => await UP.free());
};
