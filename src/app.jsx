import { useState } from "react";
import { Apartamentos } from "./components/apartamentos";
import { Banner } from "./components/banner";
import { Empreendimento } from "./components/empreendimentos";
import { Headder } from "./components/header";
import { Localização } from "./components/localização";
import { Contato } from "./components/contato";
import "./style.css"
import "./styleuw.css"
import "./stylemob.css"
import "./keyframes.css"

document.body.style.margin = "0";
document.body.style.overflowX = "hidden";

export const App = () => {

    return (
        <>
            <Headder />
            <Banner />
            <Empreendimento />
            <Apartamentos />
            <Localização />
            <Contato />
        </>
    )
}