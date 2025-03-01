export const closeAlert = (arg) => {
    setTimeout(() => {
        arg({isVisible: false})
    }, 1500);
};
export const fixedtheBody = () => {
    document.body.style.overflow = "hidden";
}