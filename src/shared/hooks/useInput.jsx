import { useState } from 'react'

export default (initVal) => {
  const [ value, setValue ] = useState(initVal)

  const onChangeHandle = e => {
    setValue(e)
  }

  const clear = () => {
    setValue('')
  }

  return {
    props: {
      value,
      onChange: onChangeHandle
    },
    clear
  }
}
