import React from "react";
import FormBiblioteca from "../components/FormBiblioteca";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


function Biblioteca() {
    return(
        <div>
            <Header/>
            <Navbar/>
            <FormBiblioteca/>
        </div>
    )
    
}

export default Biblioteca