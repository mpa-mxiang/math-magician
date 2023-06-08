import React, { useEffect, useState } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: {
              'X-Api-Key': 'w8/NejPbZTsxEwElgouEjQ==KdFbINNY7YT2VwHc',
            },
          },
        );

        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        const randomQuote = data[0].quote;
        const randomAuthor = data[0].author;
        setQuote(randomQuote);
        setAuthor(randomAuthor);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="quote">
      Quote:
      {' '}
      {quote}
      {' -'}
      {author}
    </div>
  );
};

export default QuoteDisplay;
