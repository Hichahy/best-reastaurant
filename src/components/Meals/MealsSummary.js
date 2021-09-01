import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Fairytale dishes!</h1>
      <p>
        We are pleased to welcome you in our best fairy-tale kitchen. You will
        surely find something for yourself here.
      </p>
      <p>
        Today, unfortunately, we ran out of magic cakes, the cook ate them all.
        We apologize for inconveniences
      </p>
    </section>
  );
};

export default MealsSummary;
