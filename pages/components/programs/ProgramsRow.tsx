import { FormEvent, useState } from "react";
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
    const [newProgram, setNewProgram] = useState({
        name: "",
        location: "",
        beneficiaries: 0,
        owner: userInfo.userId,
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    })
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
    const addProgram = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setProgramListState([...programListState, newProgram])
        e.currentTarget.reset()
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
            {programs.create &&
                <article className="form__article">
                    <h1>Create a new Program</h1>
                    <form action="" onSubmit={(e) => addProgram(e)}>
                        <input type='text' name='name' placeholder='Name' onChange={(e) => {
                            setNewProgram({
                                ...newProgram,
                                [e.target.name]: e.target.value
                            })
                        }} />
                        <input type='text' name='location' placeholder='Location' onChange={(e) => {
                            setNewProgram({
                                ...newProgram,
                                [e.target.name]: e.target.value
                            })
                        }} />
                        <input type='number' name='beneficiaries' placeholder='Beneficiaries' onChange={(e) => {
                            setNewProgram({
                                ...newProgram,
                                [e.target.name]: e.target.value
                            })
                        }} />
                        <input type="text" name="owner" defaultValue={userInfo.userId} onChange={(e) => {
                            setNewProgram({
                                ...newProgram,
                                [e.target.name]: e.target.value
                            })
                        }} />
                        <button type='submit' className="form__buttons--btn">Add</button>
                    </form>
                </article >
            }
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
                form{
                    width: 30%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                }
                .form__article{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            `}
            </style>
        </>
    )
}

export default ProgramsRows