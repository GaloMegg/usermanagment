import React from 'react'
import BeneficiariesRows from '../components/beneficiaries/BeneficiariesRow'
import { User } from '../types/userInfo'

const index = () => {
    const USER_INFO: User = {
        "userId": "1234",
        "permissions": {
            "programs": {
                "view": "everything",
                "create": false,
                "edit": "owned-only",
                "deleteData": "everything",
            },
            "beneficiary": {
                "view": "everything",
                "create": true,
                "edit": "owned-only",
                "deleteData": "everything",
            }
        }
    }
    return (
        <div>
            <BeneficiariesRows userInfo={USER_INFO} />
        </div>
    )
}

export default index