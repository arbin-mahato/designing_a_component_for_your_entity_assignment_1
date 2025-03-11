// write the component code here
const Usercard = () => {
  const profilePhoto =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMf14sCTmNnto5p2zhtiNgdeQhHhVIjYQ9A&s";
  const name = "Tom Cruise";
  const email = "tomcruise@unitedstates.com";
  const phone = "+1 234 567 890";
  const address = "123 Main St, Anytown, USA";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" />
      <h2>{name}</h2>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>Phone: </strong>
        {phone}
      </p>
      <p>
        <strong>Address: </strong>
        {address}
      </p>
    </div>
  );
};

export default Usercard;
