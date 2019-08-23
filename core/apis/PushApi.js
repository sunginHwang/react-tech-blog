import apiCall from '../lib/apiCall';
import {BLOG_API} from '../lib/constants';

export const pushSubscription = (subscription) => {
    apiCall.post(`${BLOG_API}/push/subscription`, {
        auth: subscription.keys.auth,
        key: subscription.keys.p256dh,
        endPoint: subscription.endpoint
    });
};
