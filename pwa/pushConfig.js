const applicationServerPublicKey = 'BB6dRyJUjlJrY6GVBkF14G-RmLmsxW2apfauEjdyLDIfdqCPKHpDA9MZwpIgG-B6HdkbSPEegTeY2eyQHeH_gBc';

const urlB64ToUint8Array =(base64String) => {
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

export const subscribeUser = (swReg) => {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);

    swReg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
        .then((subscription) => {
            console.log('User is subscribed');
            console.log(JSON.stringify(subscription));
        })
        .catch(function (err) {
            console.log('Failed to subscribe the user: ', err);
        });
}
