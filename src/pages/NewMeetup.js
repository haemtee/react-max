import { useHistory } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetups = () => {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch("https://projectku-c1efa-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.replace("/"));
  }
  return (
    <section>
      <h1>New meet ups page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetups;
