function HomeAgain() {
  const homeData = {
    title: 'Welcome to React',
    description: 'React is a JavaScript library for building user interfaces.',
    imageUrl:
      'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvctgguy9jig4h23gz481.gif',
  };

  return (
    <div>
      <h1>{homeData.title}</h1>
      <p>{homeData.description}</p>
      <img src={homeData.imageUrl} alt='react-gif' style={{ width: '50%' }} />
    </div>
  );
}

export default HomeAgain;
