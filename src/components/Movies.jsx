function Movies() {
  const movieData = [
    {
      id: 1,
      title: 'Inception',
      description:
        "Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced it with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.[7] The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page,[a] Tom Hardy, Cillian Murphy, Tom Berenger, Dileep Rao, and Michael Caine.",
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg?20170322172828',
      releaseYear: 2010,
    },
    {
      id: 2,
      title: 'Minions',
      description:
        'Minions is a 2015 American animated comedy film produced by Illumination Entertainment and distributed by Universal Pictures. The film is a prequel to Despicable Me (2010) and the third installment overall in the film series of the same name. Directed by Pierre Coffin and Kyle Balda, produced by Chris Meledandri and Janet Healy, and written by Brian Lynch, Minions stars the voices of Coffin as the Minions (including Kevin, Stuart, and Bob), Sandra Bullock, Jon Hamm, Michael Keaton, Allison Janney, Steve Coogan, Jennifer Saunders, and Geoffrey Rush as the narrator. In the film, the Minions search for their replaceable evil master after accidentally killing all of those in history.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/1/19/Minions_%282015_film%29.jpg',
      releaseYear: 2015,
    },
    {
      id: 3,
      title: 'Moana',
      description:
        'Moana (also known as Vaiana[4] or Oceania[5] in some markets), is a 2016 American animated musical fantasy adventure film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. The film was directed by John Musker and Ron Clements, co-directed by Chris Williams and Don Hall, and produced by Osnat Shurer, from a screenplay written by Jared Bush, and based on a story conceived by Clements, Musker, Williams, Hall, Pamela Ribon, and the writing team of Aaron Kandell and Jordan Kandell.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg',
      releaseYear: 2016,
    },
  ];

  return (
    <div>
      <h2>Movies</h2>
      {movieData.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Release: {movie.releaseYear}</p>
          <img src={movie.imageUrl} alt={movie.title} />
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
