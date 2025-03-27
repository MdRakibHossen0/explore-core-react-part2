export default function Friend({friend}) {
    console.log(friend)
    const { name, email, phone, website } = friend;
  return (
    <div className="card">
      <h4>name: {name}</h4>
      <h5>email: {email}</h5>
      <p>Phone: {phone}</p>
      <h6>website: {website}</h6>
    </div>
  );
}