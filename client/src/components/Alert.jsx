import { useAppContext } from '../context/appContext'

/**
 * Renders an alert component based on the alertType and alertText obtained from useAppContext.
 *
 * @returns {JSX.Element} The rendered alert component.
 */
const Alert = () => {
  const { alertType, alertText } = useAppContext()
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
}

export default Alert
