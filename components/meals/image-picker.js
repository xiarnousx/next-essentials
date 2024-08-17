"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [image, setImage] = useState();
  const ref = useRef();

  function handlePicker(event) {
    ref.current.click();
  }

  function handleImage(event) {
    const file = event.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!image && <span>No Image</span>}
          {image && <Image src={image} fill alt="Picked up Image" />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={ref}
          onChange={handleImage}
          required
        />
        <button className={classes.button} type="button" onClick={handlePicker}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
