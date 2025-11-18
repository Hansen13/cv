import MainHeader from "../helper/main-header";

export default function About() {
    return (
        <div className="flex flex-col gap-4">
            <MainHeader>Privat</MainHeader>
            <div>
                <h1 className="text-xl font-bold">Familie</h1>
                <p>Jeg er gift med Ida, hvor vi sammen har 3 børn fra henholdsvis oktober 2020, april 2022 og juni 2025</p>
            </div>
            <div>

                <h1 className="text-xl font-bold">Interesser</h1>
                <p>Mine interesser består i stratiske brætspil og computerspil med familie og venner.</p>
                <p>Derudover bruger jeg også min tid på programmering med diverse hjemmeprojekter</p>
                <p>Jeg bruger ofte min 3d printer, eller bygger på min home assistant</p>
            </div>
        </div>
    )
}