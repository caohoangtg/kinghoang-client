import React, { useState } from 'react'
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'
import Collapse from '@mui/material/Collapse'
import ModifierItem from './ModifierItem'

const Modifier = () => {
    const [checked, setChecked] = useState(true)

    const handleChangeCollapse = () => {
        setChecked(!checked)
    }

    return (
        <div className="modifier">
            <div className="modifier__title">
                <span className="modifier__name">Choice of Crab Weight</span>
                <button
                    className="modifier_btn-collapse"
                    onClick={handleChangeCollapse}
                >
                    {checked ? (
                        <BsCaretUpFill size={30} />
                    ) : (
                        <BsCaretDownFill size={30} />
                    )}
                </button>
            </div>
            <Collapse in={checked}>
                <div className="modifier__box">
                    <div className="modifier__error-message">
                        Please select 1
                    </div>
                    <div className="modifier__content">
                        <ModifierItem />
                        <ModifierItem />
                        <ModifierItem />
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default Modifier
