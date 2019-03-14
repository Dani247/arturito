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
    flexFlow: 'column wrap'
  },
  infoContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center'
  },
  budgetSection: {
    border: '1px solid black',
    borderRadius: '10px',
    width: '90%',
    minHeight: '30%',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridTemplateRows: 'repeat(3, min-content)',
    gridAutoRows: '2em',
    justifyItems: 'start',
    padding: '1rem',
    marginBottom: '10px',
    '& > *': {
      margin: 'auto'
    }
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
  infoBudgetBar: {
    gridRow: '3/4',
    gridColumn: '1/3',
    width: '100%'
  },
  infoData: {
    gridRow: '1/3',
    gridColumn: '1/2',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoButton: {
    gridRow: '1/3',
    gridColumn: '2/3'
  },
  graphContainer: {
    width: '100%',
    textAlign: 'center'
  },
  niceInput: theme.niceInput,
  niceButton: {
    ...theme.colorsCombined.C,
    width: '50vw',
    padding: '2vmin',
    marginTop: '15px',
    cursor: 'pointer'
  }
})
