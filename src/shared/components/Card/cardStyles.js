const styles = theme =>({
  cardContainer: {
    color: 'white',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    maxHeight: '300px',
    paddingTop: '2rem',
    transform: 'translateX(0)',
    borderRadius: '12px',
    marginTop: '0.8em',
    backgroundColor: theme.nicePallete.secondary
  },
  iconStyles: {
    margin: '0 10px'
  },
  niceInput: theme.niceInput,
  titleCard: {
    textAlign: 'center',
    fontSize: '1.5rem',
    margin: '10px 0 5px 0',
  },
  iconsCard: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'center'
  },
  infoCard: {
    marginBottom: '20px',
    textAlign: 'center'
  }
})

export default styles