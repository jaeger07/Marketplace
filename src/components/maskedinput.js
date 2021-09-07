import React from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
  prefix: 'R$  ',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2, 
  integerLimit: 7, 
  allowLeadingZeroes: true,
  requireDecimal:true,
  
}

const CurrencyInput = ({ maskOptions, ...inputProps }) => {
      const currencyMask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions,
      })

      return <MaskedInput 
      mask={currencyMask} 
      placeholder="R$" 
      {...inputProps} />
}

CurrencyInput.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {},
}


export default CurrencyInput
