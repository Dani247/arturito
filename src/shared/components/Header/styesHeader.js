const styles = theme => ({
  headerContainer: {
    width: '100%',
    gridArea: 'head',
    backgroundColor: theme.colors.primary.backgroundColor,
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    '& > a': {
      textAlign: 'center',
      textDecoration: 'none',
      color: '#FFE873',
      '&:hover': {
        backgroundColor: theme.colors.secondary.backgroundColor
      }
    }
  }
})

export default styles
