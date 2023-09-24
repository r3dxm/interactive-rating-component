import React, { useState } from "react";
import styles from "./InteractiveRating.module.css";
import StarIcon from "../images/icon-star.svg";
import Illustration from "../images/illustration-thank-you.svg";

function InteractiveRating(props) {
	const [rating, setRating] = useState(true);
	const [selected, setSelected] = useState();
	const [previous, setPrevious] = useState();
	function changeState(value) {
		setPrevious(selected);
		setSelected(value);
	}

	function getClassName(value) {
		if (selected == value) {
			return styles.selected;
		} else if (previous == value) {
			return styles.previous;
		} else {
			return styles.ratingButton;
		}
	}

	return (
		<div className={styles.container}>
			{rating && (
				<div className={styles.ratingContainer}>
					<div className={styles.iconContainer}>
						<img src={StarIcon} alt="star-icon" />
					</div>
					<h1>How did we do?</h1>
					<p>
						Please let us know how we did with your support request. All
						feedback is appreciated to help us improve our offering!
					</p>
					<div className={styles.ratingButtons}>
						<button className={getClassName(1)} onClick={() => changeState(1)}>
							1
						</button>
						<button className={getClassName(2)} onClick={() => changeState(2)}>
							2
						</button>
						<button className={getClassName(3)} onClick={() => changeState(3)}>
							3
						</button>
						<button className={getClassName(4)} onClick={() => changeState(4)}>
							4
						</button>
						<button className={getClassName(5)} onClick={() => changeState(5)}>
							5
						</button>
					</div>
					<button
						onClick={() => {
							if (parseInt(selected)) setRating(false);
						}}
						className={styles.submitButton}>
						S U B M I T
					</button>
				</div>
			)}
			{!rating && (
				<div className={styles.thanksContainer}>
					<img src={Illustration} alt="thank-you-illustration" />
					<div className={styles.ratingDisplay}>
						<p>You selected {selected} out of 5</p>
					</div>
					<h1>Thank You!</h1>
					<p>
						We appreciate you taking your time to give a rating. If you ever
						need more support, don't hesitate to get in touch!
					</p>
				</div>
			)}
		</div>
	);
}

export default InteractiveRating;
