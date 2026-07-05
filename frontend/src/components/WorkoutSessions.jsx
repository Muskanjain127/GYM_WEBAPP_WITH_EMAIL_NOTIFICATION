import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Push your limits with our expert-led training sessions designed to
          build strength, boost endurance, and help you reach peak
          performance faster.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          High-intensity group programs built to challenge every muscle group
          and keep you motivated with the energy of a team behind you.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              Build raw power and functional strength with progressive
              resistance training designed by certified coaches.
            </p>
          </div>
          <div>
            <h4>HIIT Fat Burn</h4>
            <p>
              Torch calories and improve cardiovascular health with fast-paced
              interval circuits that keep results coming.
            </p>
          </div>
          <div>
            <h4>CrossFit Bootcamp</h4>
            <p>
              Combine strength, agility, and endurance in dynamic workouts
              that push you past your previous limits.
            </p>
          </div>
          <div>
            <h4>Core & Flexibility</h4>
            <p>
              Strengthen your core and improve mobility with targeted
              routines that support every other workout you do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
