import React from 'react'
import {Container, Box, Paper, Typography} from '@material-ui/core'
import {green} from '@material-ui/core/colors'

const App = () => {
  return (
    <Container maxWidth="lg">
      <Box p={3}>
      <Paper elevation={5}>
        <Typography variant="h2" style={{color: green.A700, backgroundColor: 'yellow'}}>Hi, This is React JS</Typography>
        <Typography variant="subtitle1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
      </Paper>
      </Box>
    </Container>
  )
}

export default App
