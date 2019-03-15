export default theme => ({
  formContainer: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    textAlign: 'center',
    '& > form': {
      display: 'flex',
      flexFlow: 'column wrap',
      '& > input': theme.niceInput,
      '& > button': theme.niceButton.S
    }
  },
  errorMsg: theme.errorMsg
})
