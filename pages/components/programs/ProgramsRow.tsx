import { useState } from "react";
import { Programs } from "../../types/programs";
import { User } from "../../types/userInfo";
import ProgramsItem from "./ProgramsItem";


// Mock de datos sobre beneficiarios de un usuario
let programList: Programs[] = [
    {
        "id": "HASH-01",
        "owner": "1234",
        "name": "Envio de alimentos a niños en America Latina",
        "location": "Argentina",
        "beneficiaries": 100,
    },
    {
        "id": "HASH-02",
        "owner": "5678",
        "name": "Envio de vacunas a Africa",
        "location": "Argentina",
        "beneficiaries": 20,
    },

]


const ProgramsRows = ({ userInfo }: { userInfo: User }) => {
    const [programListState, setProgramListState] = useState(programList)
    const { programs } = userInfo.permissions

    const removeOneProgram = (id: string) => {
        setProgramListState(programListState.filter(program => program.id != id))
    }
    const updateProgramData = (id: string, name: string, location: string, beneficiaries: number) => {
        setProgramListState(programListState.map(program => {
            if (program.id == id) {
                program.name = program.name == name ? program.name : name
                program.location = program.location == location ? program.location : location
                program.beneficiaries = program.beneficiaries == beneficiaries ? program.beneficiaries : beneficiaries
            }
            return program
        }))
    }

    if (programs.view == "none") {
        return <h6>You are not allowed to see programs</h6>
    }
    return (
        <>
            <article>
                <p>Name</p>
                <p>Location</p>
                <p>N° of beneficiaries</p>
            </article>
            {programListState.map(b => {
                return programs.view == "owned-only"
                    ? b.owner == userInfo.userId ? <ProgramsItem key={b.id} userInfo={userInfo} {...b} updateProgramData={updateProgramData} removeOneProgram={removeOneProgram} /> : null
                    : <ProgramsItem key={b.id} {...b} userInfo={userInfo} updateProgramData={updateProgramData} removeOneProgram={removeOneProgram} />
            })}
            <style jsx>
                {`
                article {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }   
                p{
                    width: 30%;
                    margin: 1%;
                }

            `}
            </style>
        </>
    )
}

export default ProgramsRows