import MainHeader from "../helper/main-header";
import WorkComponent from "../helper/work.comp";

export default function Education() {
    const datamatiker = ["C#, Golang, Typescript", "ASP.NET, Blazor", "Javascript, nestjs", "Flutter, Riverpod", "MS SQL, MongoDB", "Rest, GraphQL, gRPC", "Git, Github, Gitlab", "Scrum, Kanban", "Docker", "System udvikling" ]
    const brandmand = ["Brandmand, Redningsspecialist", "Teknisk Arbejdsleder", "Udvidet Førstehjælp", "C Kørekort"]
    const htx = ["Matematik A", "Fysik A", "Dansk A", "Engelsk A", "El-Teknik A"]
    return (
        <div className="flex flex-col gap-4">
            <MainHeader>Uddannelse</MainHeader>
            <WorkComponent
                header="Datamatiker"
                date="2020-2023"
                location="University College Lillebælt, Odense"
                listItems={datamatiker}
            />

            <WorkComponent
                header="Beredskabsstyrelsen"
                date="2019"
                location="Bornholm"
                listItems={brandmand}
            />

            <WorkComponent
                header="HTX"
                date="2015-2017"
                location="Odense Tekniske Gymnasium"
                listItems={htx}
            />
        </div>
    )
}