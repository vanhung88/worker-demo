import withAuth from '../../HOC/withAuth';

const Profile = ({ name, ...props }) => {
  console.log('PROFILE', props);
  return <div>PROFILE of {name}</div>;
};

export default withAuth(Profile);
