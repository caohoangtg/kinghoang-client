import React, { useState } from 'react'
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'
import Collapse from '@mui/material/Collapse'
import { IoIosRemoveCircle, IoIosAddCircle } from 'react-icons/io'
import IconButton from '@mui/material/IconButton'

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
                        <div className="modifier__item">
                            <div>500g</div>
                            <div>+S$15.00</div>
                            <div className="modifier__quality">
                                <IconButton
                                    className="color-icon"
                                    aria-label="remove from cart"
                                >
                                    <IoIosRemoveCircle size={40} />
                                </IconButton>
                                <span>1</span>
                                <IconButton
                                    className="color-icon"
                                    aria-label="add to cart"
                                >
                                    <IoIosAddCircle size={40} />
                                </IconButton>
                            </div>
                        </div>
                        <div className="modifier__item">
                            <div>500g</div>
                            <div>+S$15.00</div>
                            <div className="modifier__quality">
                                <IconButton
                                    className="color-icon"
                                    aria-label="remove from cart"
                                >
                                    <IoIosRemoveCircle size={40} />
                                </IconButton>
                                <span>1</span>
                                <IconButton
                                    className="color-icon"
                                    aria-label="add to cart"
                                >
                                    <IoIosAddCircle size={40} />
                                </IconButton>
                            </div>
                        </div>
                        <div className="modifier__item">
                            <div>500g</div>
                            <div>+S$15.00</div>
                            <div className="modifier__quality">
                                <IconButton
                                    className="color-icon"
                                    aria-label="remove from cart"
                                >
                                    <IoIosRemoveCircle size={40} />
                                </IconButton>
                                <span>1</span>
                                <IconButton
                                    className="color-icon"
                                    aria-label="add to cart"
                                >
                                    <IoIosAddCircle size={40} />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default Modifier
