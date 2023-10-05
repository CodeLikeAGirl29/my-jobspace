/**
 * Renders a loading component.
 *
 * @param {boolean} center - Whether to center the loading component.
 * @return {JSX.Element} The loading component.
 */
const Loading = ({ center }) => (
  <div className={`loading ${center ? 'loading-center' : ''}`}></div>
);

export default Loading
