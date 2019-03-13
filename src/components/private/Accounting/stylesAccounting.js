export default theme => ({
  accountingContainer: {
    width: '100%',
    minHeight: '100%',
    display: 'grid',
    gridAutoRows: 'min-content',
    gridColumns: '1fr 1fr',
    gridRows: '1fr 1fr'
  },
  sectionAccounting: {
    display: 'flex',
    flexFlow: 'column wrap',
    padding: '.5em',
  },
  infoContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    marginTop: '1em'
  },
  infoSection: {
    border: '1px solid black',
    borderRadius: '10px',
    width: '90%',
    minHeight: '30%',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridTemplateRows: 'repeat(2, min-content)',
    gridAutoRows: '2em',
    justifyItems: 'start',
    padding: '1rem',
    marginBottom: '10px',
    '& > *': {
      margin: 'auto'
    }
  },
  infoData: {
    gridRow: '1/3',
    gridColumn: '1/2',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  infoButton: {
    gridRow: '1/3',
    gridColumn: '2/3'
  }
})
