import GradPhoto from "./assets/grad-photo.jpeg"
import ClimbingPhoto from "./assets/climbing_4.jpg";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-73.98707, 40.72945],
      },
      properties: {
        title: "Mapbox",
        description: "La Cabra",
        location: "East Village",
        recs: ["hand brew", "cardamon buns"],
        vibes: "cozy, danish design", 
        text: "La Cabra, located in the heart of East Village, is not just a coffee shop — it's a sanctuary of coziness and Danish design. When you walk in, you'll smell the tantalizing aroma of freshly brewed coffee. They offer hand brews with various kinds of seasonal beans. Beside coffee, they also serve lots of stunning pastries. My favorite has to be the cardamon buns.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-73.98923, 40.73895],
      },
      properties: {
        title: "Mapbox",
        description: "Devoción",
        location: "Flatiron",
        recs: ["cold brew"],
        vibes: "chic, breezy, greenery", 
        text: "Devoción sits in one of the most historical location in Flatiron. Their coffee shop was onced an artist's studio in its original exposed bricks. Unlike months-old coffee you drink at most chain coffee shops, Devoción brings the freshest coffee cherries possible from Colombua and sends them directly to their roaster in Brooklyn.",
      },
    },
  ],
};

const infoPageContent = [
    {
        imgSrc: GradPhoto,
        subtitle: "CS and CS: Harmonizing Technologies and Thoughts",
        paragraphs: ["I graduated from UC Davis with a BS in Computer Science and Cognitive Science.", " Delving into the intricacies of the human mind while navigating the dynamic world of technology has enabled me to approach problems from multiple angles, blending analytical thinking with an understanding of human-centered design principles.", " Upon graduating from college, I recognized the transformative potential of machine learning decided to continue my academic journey at Columbia University.", " As a fullstack developer, I am driven to bridge the gap between technology and human needs. I believe that by embracing AI technologies and understanding user behavior and psychology, I can create innovative solutions that positively impact people's lives."]

    },
    {
        imgSrc: ClimbingPhoto,
        subtitle: " My Bouldering Journey: Resilience, Adaption, Versatility",
        paragraphs: ["Summer 2023, I fell in love with climbing. As a novice climber, I had little knowledge about climbing techniques and often locked myself in awkward body positions where it was impossible for me to generate the next move. I was scared of falling, which prevented me from trying with my full commitment. Yet, with each ascent, climbing became a teacher of resilience, pushing me to confront fears.", " In the climbing world, we read routes before we start. But rarely can one make perfect decisions based on incomplete information. A lot of times, I have to quickly adapt mid-route, learning to re-evaluate my plan and constantly making micro-corrections along my way.", "The art of climbing originates from the versatility of each climber’s body. We all have different levels of flexibility, heights, or wingspan, which allows for so much variation in everyone’s approach. When I’m off the wall resting, I like to observe how others send the climbs, reflect on other possibilities and refine my own techniques."]
    }

]


export {geojson, infoPageContent};