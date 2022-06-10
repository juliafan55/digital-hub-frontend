import React from 'react'

export default function ProfilePicInfo({profile}) {
    return (
        <div className="profile-img-wrap">
            <div className="profile-w-left">
                <div className="profile-w-img">
                <div
            className="profile-w-bg"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${profile.picture})`,
            }}
          ></div>
                <div className="profile-circle">
            <i className="camera_filled_icon"></i>
          </div>
        </div>
        <div className="profile-w-col">
          <div className="profile-name">
            {profile.first_name} {profile.last_name}
          </div>
          <div className="profile-friend-count"></div>
          <div className="profile-friend-imgs"></div>
        </div>
      </div>
      <div className="profile-w-right">
        <div className="blue_btn">
          <i className="edit_icon"></i>
          <span>Edit profile</span>
        </div>
      </div>
    </div>
  );
}