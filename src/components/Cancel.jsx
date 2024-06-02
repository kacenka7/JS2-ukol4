
export const Cancel = (props) => {
    const {title, photo, adress, rating, room, rezervation, service, cancel} = props.data;
    return (


        <div className="summary__cancel">
          <h3>Storno podmínky</h3>
          <div className="summary__cancel-text">
            <p> {cancel.note1}</p>
            <p>{cancel.note2}</p>
          </div>
        </div>

    );
  };