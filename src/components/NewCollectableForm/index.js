import styled from "styled-components";

function NewCollectableForm() {
  return (
    <form>
      <div>
        <label htmlFor="photo">Upload Photo</label>
        <input type="text" id="photo" />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
      </div>
      <div>
        <label htmlFor="collection">Collection</label>
        <input type="text" id="collection" />
      </div>
      <button>Add New Collectable</button>
    </form>
  );
}

export default NewCollectableForm;
