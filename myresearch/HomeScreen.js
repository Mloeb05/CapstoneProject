
const API_URL = 'http://localhost:8080/api/Home';

const HomeScreen = () => {
  // Mock reviews data
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "Great Product!",
      content: "Really enjoyed using this product. Highly recommend!"
    },
    {
      id: 2,
      title: "Not bad",
      content: "The product is decent but could use some improvements."
    },
    {
      id: 3,
      title: "Awesome Beer!",
      content: "Customer service was fantastic at this brewery and they have the drinks to make you want to come back."
    }
  ]);

  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    if (activeTab === 'MyReviews') {
      return (
        <div>
          <h2>My Reviews</h2>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <h3>{review.title}</h3>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      );
    }

    return (
      <div>
        <h2>Welcome to the Home Screen!</h2>
        <p>Select the MyReviews tab to view your reviews.</p>
      </div>
    );
  };

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab('Home')}>Home</button>
        <button onClick={() => setActiveTab('MyReviews')}>MyReviews</button>
      </nav>
      <div>{renderContent()}</div>
    </div>
  );
};

export default HomeScreen;