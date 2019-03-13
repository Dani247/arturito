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
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      width: '100%',
      border: '2px solid black',
      borderRadius: '12px',
    }
  },
  iconStyles: {
    margin: '0 10px'
  }
})

export default styles