import React from 'react'
import Radio from '@mui/material/Radio'

interface Props {
    controlProps: any | null
}

const VariantItem = ({ controlProps }: Props) => {
    return (
        <div className="variant-item">
            <span>500g</span>
            <span>+S$15.00</span>
            <div>
                <Radio
                    className="variant-item__radio"
                    {...controlProps}
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
        </div>
    )
}

export default VariantItem
