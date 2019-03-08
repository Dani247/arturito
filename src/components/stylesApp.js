const styles = ({
  appContainer: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateAreas: `'main'`,
    gridAutoRows: '100%',
    gridAutoColumns: '100%'
  },
  '@media (min-width: 500px)':{
    appContainer:{
      gridTemplateAreas: `
        'head    main    main'
        'head    main    main'
        'head    main    main' `,
      gridAutoRows: '3rem auto 3rem',
      gridAutoColumns: '6rem auto auto'
    }
  }
})
export default styles
