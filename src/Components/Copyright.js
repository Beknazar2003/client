import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Все права защищены © '}
      <Link color="inherit" href="https://edu.gov.kg/ru/">
        МОН КР
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
export default Copyright
