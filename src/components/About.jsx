import React from 'react';
import Developers from './Developers';

const About = () => (
  <div className="about-container">
    <p className="about-intro">
      <section>
        Traveling the world enriches your life. But how to remember the memories
        you make?
      </section>{' '}
      <br />
      <p>
        Huginn is your pocket book for travel memories. It lets you store
        pictures, stories and places you never want to forget, in a world map
        that tracks your travels.
      </p>
    </p>
    <div className="a-map-of-memories">
      <h1>A map of memories</h1>
      <div className="center">
        <div className="style-seven"></div>
      </div>
      <p>
        Traveling enriches your life in ways that always surprise you. A
        conversation at a bus stop about a topic you never thought of, a flat
        tire in the middle of nowhere that results in a welcoming homemade
        dinner at a locals house, a theatre show that is so painfully bad that
        you’ll never forget the experience, or stuck at the airport sharing a
        coffee with a stranger at four AM talking about black holes and the ever
        expanding universe. The true traveler knows: the best memories are made
        in ordinary moments. But our brains are not known for their reliable
        memory-holding capacities. Huginn is the app that stores the travel
        encounters you don’t want to forget.
      </p>
      <p>
        You can save pictures, descriptions and notes about places you have
        visited on a world map, so you will always have a visible keepsake. A
        memory of that moment in time you were on the other side of the world
        (or 20 km from your hometown) living through something that was special
        enough to remember 20 years down the line. A picture you snap with your
        phone, a note about a conversation you want to remember, or the bus
        ticket you bought on the night you kissed that special someone.
      </p>
      <div className="center">
        <div className="style-seven"></div>
      </div>
      <blockquote>
        Discover the world, see new things, and remember them with Huginn.
        Travel will never be the same.
      </blockquote>
    </div>
    <Developers />
    <div className="dev-des">
      <div className="home-center">
        <div className="huginn-logo"> </div>
        <p className="quote">
          "He sends them out in the morning to fly around the whole world, and
          by breakfast they are back again."
        </p>
      </div>
      <div className="dev-des-title">
        {' '}
        Huginn is made by four avid travelers.
      </div>
      
      <h1>Patryk</h1>
      <div className="center">
        <div className="style-seven"></div>
      </div>
      <p>
        His first big trip was to the other side of the world: a Polish guy
        traveling all the way to New Zealand. His first time so far from home,
        flying down south below the equator with no return ticket in his pocket.
        After this adventure he traveled to Australia, Malaysia, Sri Lanka and
        the Maldives, ending up in rainy Holland where he is now finishing the{' '}
        <span>&lt;</span>
        <span>&#47;</span>salt<span>&gt;</span> bootcamp to pursue his developer
        dreams.
      </p>
      
      <h1>Aura</h1>
      <div className="center">
        <div className="style-seven"></div>
      </div>
      <p>
        This girl from Mexico left her family to fly to Europe, where she found
        love in Holland. She loves to visit places with lots of nature and
        quietness, and recently discovered the Swedish countryside. When she
        finishes her coding course and architectural degree, she will probably
        end up in a tiny house in the countryside - but traveling to Mexico when
        she can, to sing with her siblings.
      </p>
      
      <h1>Gabriel</h1>
      <div className="center">
        <div className="style-seven"></div>
      </div>
      <p>
        With his long hair and rugged appearance, you will not be surprised when
        you hear that this coder-to-be has worked as a Siberian husky sled
        driver for half a year, all the way up in the North of Sweden.
        Passionate about sustainability and reforestation, he will probably use
        his coding skills to use drones to drop off seeds all over our planet,
        or build a sustainable village in the mountains of his home country of
        Romania.
      </p>
      
      <h1>Marijn</h1>
      <div className="center">
        <div className="style-seven"></div>
      </div>
      <p>
        18 years old, fresh out off high school she flew to Milan to live and
        work there for six months. This is where a lifelong love for travel was
        born. Her dream journey so far was a train trip through the land of the
        rising sun, where she ate sushi with rainbow tales, slept in an artist
        house in the mountains and met the biggest spider she saw in her life.
        With coding she would love to explore more of her mind, and the world at
        the same time.
      </p>
    </div>
  </div>
);

export default About;
