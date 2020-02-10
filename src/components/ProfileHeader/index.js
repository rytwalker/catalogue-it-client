import styled from "styled-components";

function ProfileHeader() {
  return (
    <StyledProfileHeader>
      <ProfileImgContainer>
        <div></div>
      </ProfileImgContainer>
      <div>
        <Username>RyanWalker</Username>
        <FollowCount>404 Followers | 400 Following</FollowCount>
        <ProfileBlurb>
          <ProfileBlurbLabel>About: </ProfileBlurbLabel>Hi I collect things.
        </ProfileBlurb>
        <ProfileBlurb>
          <ProfileBlurbLabel>Biggest Collections: </ProfileBlurbLabel>Vinyl -
          Beer - Pokemon Cards
        </ProfileBlurb>
        <ProfileBlurb>
          <ProfileBlurbLabel>Biggest Fear: </ProfileBlurbLabel>Hi I collect
          things.
        </ProfileBlurb>
      </div>
    </StyledProfileHeader>
  );
}

const StyledProfileHeader = styled.div`
  display: flex;
  margin-bottom: 10rem;
`;

const ProfileImgContainer = styled.div`
  height: 200px;
  width: 200px;
  background: #c4c4c4;
  border-radius: 50%;
  margin-right: 6rem;
`;

const Username = styled.h1`
  font-size: 3.6rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const FollowCount = styled.div`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const ProfileBlurb = styled.div`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const ProfileBlurbLabel = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export default ProfileHeader;
