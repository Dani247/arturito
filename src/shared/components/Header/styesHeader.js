const styles = theme => ({
  headerContainer: {
    width: '100%',
    gridArea: 'head',
    backgroundColor: theme.colors.primary.backgroundColor,
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    transform: 'translateX(0)',
    '& > a': {
      width: '100%',
      padding: '1em 0',
      textAlign: 'center',
      textDecoration: 'none',
      color: '#FFE873',
      '&:hover': {
        backgroundColor: theme.colors.secondary.backgroundColor
      }
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '5rem',
      bottom: '0',
      backgroundColor: `linearGradient(45deg, ${theme.colors.primary.backgroundColor} 45%, #aaa 50%)`
    }
  }
})

export default styles
