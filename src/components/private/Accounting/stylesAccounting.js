export default theme => ({
  accountingContainer: {
    width: '100%',
    minHeight: '100%',
    display: 'grid',
    gridAutoRows: 'min-content'
  },
  sectionAccounting: {
    display: 'flex',
    flexFlow: 'column wrap',
    padding: '.5em',
  },
  infoContainer: {
    display: 'flex'
  },
  infoSection: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    '& > p': {
      margin: '0'
    }
  }
})
