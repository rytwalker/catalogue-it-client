import ProfileHeader from "../components/ProfileHeader";
import CollectionsNav from "../components/CollectionsNav";
import ProfileCollectables from "../containers/ProfileCollectables";

function Profile() {
  return (
    <div>
      <ProfileHeader />
      <CollectionsNav />
      <ProfileCollectables />
    </div>
  );
}

export default Profile;
