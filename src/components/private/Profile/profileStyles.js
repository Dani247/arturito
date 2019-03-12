const styles = ({
  profileContainer: {
    height: '100%',
    display: 'grid'
  },
  sectionContainer:{
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center'
  },
  dataContainer: {
    heightMin: '300px',
    backgroundColor: 'black',
    color: '#fff'
  },
  inputContainer:{
    display: 'flex',
    alignItems: 'center',
    '& > input':{
      height: '20px'
    }
  }
})

export default styles