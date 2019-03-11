export default theme => ({
  preloaderContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  loader: {
    display: 'inline-block',
    width: 30,
    height: 30,
    position: 'relative',
    border: '4px solid ' + theme.colors.primary.backgroundColor,
    top: '50%',
    animation: 'loader 2s infinite ease'
  },
  loaderInner: {
    verticalAlign: 'top',
    display: 'inline-block',
    width: '100%',
    backgroundColor: theme.colors.primary.backgroundColor,
    animation: 'loader-inner 2s infinite ease-in'
  },
  '@keyframes loader': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '25%': {
      transform: 'rotate(180deg)'
    },
    '50%': {
      transform: 'rotate(180deg)'
    },
    '75%': {
      transform: 'rotate(360deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  '@keyframes loader-inner': {
    '0%': {
      height: '0%'
    },
    '25%': {
      height: '0%'
    },
    '50%': {
      height: '100%'
    },
    '75%': {
      height: '100%'
    },
    '100%': {
      height: '0%'
    }
  }
})
