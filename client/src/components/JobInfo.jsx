import Wrapper from '../assets/wrappers/JobInfo'

/**
 * Renders a job information component.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.icon - The icon for the job information.
 * @param {string} props.text - The text for the job information.
 * @return {JSX.Element} The job information component.
 */
const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </Wrapper>
  )
}

export default JobInfo
