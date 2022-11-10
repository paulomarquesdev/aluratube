import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header bg={config.bg} user={config}/>
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} favoritos={config.favorites} />
            </div>
        </>
    );
}

export default HomePage
