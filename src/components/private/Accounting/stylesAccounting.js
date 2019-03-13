export default theme => ({
  accountingContainer: {
    width: '100%',
    minHeight: '100%',
    display: 'grid',
    gridAutoRows: 'min-content',
  },
  sectionAccounting: {
    display: 'flex',
    flexFlow: 'column wrap',
    padding: '.5em',
  },
  infoContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
    marginTop: '1em'
  },
  infoSection: {
    width: '100%',
    minHeight: '30%',
    display: 'grid',
    gridAutoRows: '2em',
    justifyItems: 'start',
    gridTemplateColumns: 'repeat(2, 1fr)',
    '& > *': {
      margin: 'auto'
    }
  }
})
