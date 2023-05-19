const shopsArr=[
    {
      title: 'Amazon',
      url:
        'https://www.amazon.com/',
        img: {
          regular: new URL('../images/modal/amazon.png', import.meta.url),
          retina: new URL('../images/modal/amazon@2x.png', import.meta.url),
        },
    },
    {
      title: 'Book',
      url: 'https://www.apple.com/apple-books/',
      img: {
        regular: new URL('../images/modal/book.png', import.meta.url),
        retina: new URL('../images/modal/book@2x.png', import.meta.url),
      },
    },
    {
      title: 'Books',
      url: '',
      img: {
        regular: new URL('../images/modal/books.png', import.meta.url),
        retina: new URL('../images/modal/books@2x.png', import.meta.url),
      },
    }
]
  
export { shopsArr };
