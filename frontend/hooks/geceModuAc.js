import { useState, useEffect } from "react";
import localStorageKullan from "./localStorageKullan";

export default function useGeceModu (){
    const [gm,setGm]=useState("off");
    const [setls,getls] = localStorageKullan();

    useEffect( () => {
        if(getls("geceModu")){
            setGm(getls("geceModu"));
        }
    }, []);

    const toggleGm = () => {
        const yeni = gm ==="on" ? "off" : "on";
        setls("geceModu",yeni);
        setGm(getls("geceModu"));
    }
    return [gm,toggleGm];
}