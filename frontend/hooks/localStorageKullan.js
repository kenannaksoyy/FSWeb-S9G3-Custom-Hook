export default function localStorageKullan () {
    const setls = (item,yeni) => {
        localStorage.setItem(item,yeni);
    }
    const getls = (item) => {
        return localStorage.getItem(item);
    }
    return [setls,getls];
}