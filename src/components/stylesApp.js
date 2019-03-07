const styles = ({
  appContainer: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateAreas: `
    'head    head    head'
    'main    main   main'
    'foot    foot    foot' `,
    gridAutoRows: '3rem auto 3rem',
  }
})
export default styles