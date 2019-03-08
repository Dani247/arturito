export default theme => ({
  formContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    textAlign: 'center',
    '& > form': {
      display: 'flex',
      flexFlow: 'column wrap',
      '& > input': theme.niceInput,
      '& > button': theme.niceButton.primary
    }
  }
})
