import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const AllMeetups = () => {
  const [dataMeetups, setDataMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://projectku-c1efa-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setDataMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p> Loading ... </p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={dataMeetups} />
    </section>
  );
};

export default AllMeetups;
