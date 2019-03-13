const styles = theme =>({
  cardContainer: {
    ...theme.colorsCombined.P,
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    maxHeight: '300px',
    padding: '5vmin',
    transform: 'translateX(0)',
    borderRadius: '12px',
    marginTop: '0.2em',
    '& > *': {
      margin: '.5em 0'
    }
  },
  iconStyles: {
    margin: '0 10px'
  },
  niceInput: theme.niceInput
})

export default styles