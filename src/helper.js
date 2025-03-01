export const closeAlert = (arg) => {
    setTimeout(() => {
        arg({isVisible: false})
    }, 1500);
};