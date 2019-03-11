export default theme => ({
  formContainer: {
    height: '100%',
    width: '100%',
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
  },
  errorMsg: theme.errorMsg
})
