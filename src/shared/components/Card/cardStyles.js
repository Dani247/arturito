const styles = theme =>({
  cardContainer: {
    ...theme.colorsCombined.F,
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    maxHeight: '300px',
    paddingTop: '2rem',
    transform: 'translateX(0)',
    borderRadius: '12px',
    marginTop: '0.2em',
  },
  iconStyles: {
    margin: '0 10px'
  },
  titleCard: {
    fontSize: '1.5rem',
    margin: '10px 0 5px 0'
  },
  iconsCard:{
    margin: '10px 0',
  },
  infoCard: {
    marginBottom: '10px'
  }
})

export default styles