
import { useState } from 'react';

export const useConstants = () => {
    const [API_BASE_URL] = useState('http://localhost:8083');
    const [USER_ROLES] = useState({
        USER: 'ROLE_USER',
        ADMIN: 'ROLE_ADMIN',
    });


    const [INITIAL_STATE_USERS] = useState([]);
    const [INITIAL_STATE_SINGLE_USER] = useState('');
    const [INITIAL_STATE_ACCOUNTS] = useState([]);
    const [INITIAL_STATE_ACCOUNTS_LIST] = useState('');
    const [INITIAL_STATE_TO_DELETE] = useState([]);
    const [INITIAL_STATE_ITEMS] = useState([]);
    const [INITIAL_STATE_ID_TO_DELETE] = useState('');
    const [INITIAL_STATE_ORDERS] = useState([]);
    const [INITIAL_STATE_ORDERS_LIST] = useState([]);
    const [INITIAL_STATE_SUBSCRIPTIONS] = useState([]);
    const [INITIAL_STATE_SUBSCRIPTIONS_LIST] = useState([]);
    const [INITIAL_STATE_EXPIRATION_DATE] = useState('');
    const [INITIAL_STATE_TYPE_SUBSCRIPTION] = useState('');
    const [INITIAL_STATE_PATCH_THIS_SUBSCRIPTION] = useState(false);
    const [INITIAL_STATE_SUBSCRIPTION_ID_TO_PATCH] = useState('');

    return {
        API_BASE_URL,
        USER_ROLES,
        INITIAL_STATE_USERS,
        INITIAL_STATE_SINGLE_USER,
        INITIAL_STATE_ACCOUNTS,
        INITIAL_STATE_ACCOUNTS_LIST,
        INITIAL_STATE_TO_DELETE,
        INITIAL_STATE_ITEMS,
        INITIAL_STATE_ID_TO_DELETE,
        INITIAL_STATE_ORDERS,
        INITIAL_STATE_ORDERS_LIST,
        INITIAL_STATE_SUBSCRIPTIONS,
        INITIAL_STATE_SUBSCRIPTIONS_LIST,
        INITIAL_STATE_EXPIRATION_DATE,
        INITIAL_STATE_TYPE_SUBSCRIPTION,
        INITIAL_STATE_PATCH_THIS_SUBSCRIPTION,
        INITIAL_STATE_SUBSCRIPTION_ID_TO_PATCH
    };
};
