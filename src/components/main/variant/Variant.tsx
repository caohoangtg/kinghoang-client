import React, { useState } from 'react'
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'
import Collapse from '@mui/material/Collapse'
import VariantItem from './VariantItem'

const Variant = () => {
    const [selectedValue, setSelectedValue] = useState('0')

    const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value)
    }

    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChangeRadio,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    })

    const [checked, setChecked] = useState(true)

    const handleChangeCollapse = () => {
        console.log(checked)
        setChecked(!checked)
        //setChecked((prev) => !prev)
    }

    return (
        <div className="variant">
            <div className="variant__title">
                <span className="variant__name">Choice of Crab Weight</span>
                <button
                    className="variant_btn-collapse"
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
                <div className="variant__box">
                    <div className="variant__content">
                        <VariantItem controlProps={controlProps('0')} />
                        <VariantItem controlProps={controlProps('1')} />
                        <VariantItem controlProps={controlProps('2')} />
                        <VariantItem controlProps={controlProps('3')} />

                        {/* <div className="variant-item">
                            <span>500g</span>
                            <span>+S$15.00</span>
                            <div>
                                <Radio
                                    className="variant-item__radio"
                                    {...controlProps('2')}
                                    sx={{
                                        color: 'var(--color-main)',
                                        '&.Mui-checked': {
                                            color: 'var(--color-main)',
                                        },
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 36,
                                        },
                                    }}
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </Collapse>
        </div>
    )
}

export default Variant
