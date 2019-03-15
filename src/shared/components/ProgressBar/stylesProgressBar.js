export default theme => ({
  progressContainer: {
    width: '100%',
    height: '25px',
    backgroundColor: '#b6cad8',
    borderRadius: '15px'
  },
  filler: {
    textAlign: 'center',
    top: '-20px',
    height: '25px',
    width: '100%',
    backgroundColor: theme.nicePallete.secondary,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '15px',
    position: 'relative',
    zIndex: '1'
  },
  ammount: {
    display: 'flex',
    alignItems: 'center',
    zIndex: '100',
    position: 'relative',
    left: '18%'
  },
  anotherContainer: {
    width: '100%',
    textAlign: 'center'
  }
})
