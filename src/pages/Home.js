import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))
const Home = () => {
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Форма заполнения
        </Typography>
        <form
          action="api/docs"
          method="POST"
          className={classes.form}
          noValidate
          encType="multipart/form-data"
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Введите Полное имя"
            name="name"
            autoFocus
          />
          <TextField
            type="file"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            name="document"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Отправить
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Home
