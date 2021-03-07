import { useRef } from "react";
import Card from "../ui/Card";
import style from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const meetupData = {
      title,
      image,
      address,
      description,
    };
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={style.form} onSubmit={submitHandler}>
        <div className={style.control}>
          <label htmlFor="title"> Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="image"> Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="address"> Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="description"> Meetup Description</label>
          <textarea
            row="5"
            required
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div className={style.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
