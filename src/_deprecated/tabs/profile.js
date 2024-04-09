import React from "react";
import Minion from "../../minion-self.png";
function ProfileTab() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="profile-cont">
      ProfileTab
      <img
        onClick={() => setOpen(!open)}
        src={Minion}
        className="profile-pic"
        alt="minion"
      />
      <div className="profile-cap">Minion Steinberg</div>
      {open && (
        <div className="profile-info">
          <div>
            {" "}
            <span className="profile-cap">Warning!</span> Do not click on the
            profile image.
          </div>
          <div className="profile-info-close" onClick={() => setOpen(!open)}>
            ❌
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileTab;
