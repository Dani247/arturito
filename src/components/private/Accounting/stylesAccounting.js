export default theme => ({
  accountingContainer: {
    width: '100%',
    minHeight: '100%',
    display: 'grid',
    backgroundImage: theme.colorsCombined.gradientBackground.backgroundColor,
    color: theme.colorsCombined.gradientBackground.color
  },
  sectionAccounting: {
    display: 'flex',
    flexFlow: 'column wrap'
  }
})
