const styles = theme => ({
  incomesContainer: { 
    width: '100%',
    padding: '1em'
  },
  buttonAdd: {
    position: 'fixed',
    bottom: '0',
    right: '10px',
    transform: 'tranlateX(0)'
  },
  iconReturnButtom: {
    position: 'fixed',
    zIndex: '100',
    top: '10px',
    backgroundColor: theme.nicePallete.primary
  },
  titleIncomes: {
    textAlign: 'center',
    marginBottom: '10px',
    fontSize: '2rem',
    fontWeight: 'bolder'
  },
  dataContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    padding: '1em'
  },
  niceButton: {
    ...theme.colorsCombined.C,
    width: '50vw',
    padding: '2vmin',
    marginTop: '15px',
    cursor: 'pointer'
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    marginBottom: '15px',
    '& > input': {
      border: 'none',
      outline: 'none',
      borderBottom: '1px solid black',
      padding: '5px 5px 5px 5px'
    }
  },
  selectContainer: {
    marginBottom: '10px',
    border: '1px solid black',
    cursor: 'pointer'
  }
})

export default styles
