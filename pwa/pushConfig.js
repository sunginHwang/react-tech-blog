import {pushSubscription} from '../core/apis/PushApi';

const applicationServerPublicKey = 'BBUmILImgSCb6wcUMIDPKj1B-kxu_x4VtHeQYVkLIRAlFCtTTFblcRsANxQCBfBYR8jOSx4OsvoFjObsyWc5p9Y';

const urlB64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export const subscribeUser = (swRegistration) => {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
        .then((subscription) => {
            console.log('User is subscribed');
            pushSubscription(JSON.parse(JSON.stringify(subscription)));
        })
        .catch((err) => {
            console.log('Failed to subscribe the user: ', err);
        });
}
