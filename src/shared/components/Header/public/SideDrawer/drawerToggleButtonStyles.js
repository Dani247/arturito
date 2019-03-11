const styles = ({
  toggleButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '24px',
    width: '30px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0',
    '&:focus': {
      outline: 'none',
    }
  },
  toggleButtonLine: {
    width: '30px',
    height: '2px',
    backgroundColor: 'white'
  }
})

export default styles