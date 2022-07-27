import React from 'react'
import ProgramsRows from '../components/programs/ProgramsRow'
import { User } from '../types/userInfo'

const index = () => {
    // Mock de datos de un usuario obtenidos a partir de un login
    const USER_INFO: User = {
        "userId": "1234",
        "permissions": {
            "programs": {
                "view": "everything",
                "create": true,
                "edit": "none",
                "deleteData": "none",
            },
            "beneficiary": {
                "view": "everything",
                "create": true,
                "edit": "none",
                "deleteData": "none"
            }
        }
    }
    return (
        <section>
            <ProgramsRows userInfo={USER_INFO} />
        </section>
    )
}

export default index