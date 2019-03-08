export default theme => ({
  preloaderContainer: {
    height: '100%'
  },
  planet: {
    animation: 'opacitychange 1s ease-in-out 0.5s infinite'
  },
  preloader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    '&>span': {
      display: 'inline-block',
      width: 20,
      height: 20,
      borderRadius: '100%',
      backgroundColor: '#3498db',
      margin: '35px 5px',
      opacity: 0,
      '&:nth-child(1)': {
        animation: 'opacitychange 1s ease-in-out infinite'
      },
      '&:nth-child(2)': {
        animation: 'opacitychange 1s ease-in-out 0.33s infinite'
      },
      '&:nth-child(3)': {
        animation: 'opacitychange 1s ease-in-out 0.66s infinite'
      }
    }
  },
  '@keyframes opacitychange': {
    '0%, 100%': {
      opacity: 0
    },
    '60%': {
      opacity: 1
    }
  }
})
