const { useState, useEffect } = React

function Posts() {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setPosts(data.products)
        setLoading(false)
      });
  }, [])
  if (loading) {
    return (
     <div className='w-full h-screen flex justify-center items-center'>
       <div className='animate-spin h-20 w-20 border-4 border-orange-200'></div>
     </div>
    )
  } else {
    return (
      <div className='p-2'>
        {
          posts && posts.map(post => <Post post={post} /> )
        }
        </div>
    )
  }
}
