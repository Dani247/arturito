const styles = theme => ({
  profileContainer: {
    height: '100%',
    display: 'grid',
    gridAutoRows: 'min-content',
    gridGap: '2em'
  },
  sectionContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center'
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
