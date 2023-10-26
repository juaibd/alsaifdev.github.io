const { useState, useEffect } = React

function Product() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const id = window.location.pathname.split('/')[2];

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
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
          product && <img src={product.thumbnail} />
        }
        </div>
    )
  }
}
