const {Link} = ReactRouterDOM;
function Post({ post }) {
  return (
    <div className='border rounded-lg p-2.5 mb-2'>
     <Link to={`/products/${post.id}`} >
      <img src={post.thumbnail} className='rounded-lg'/>
      <h1> {post.title}</h1>
      <p> {post.description}</p>
     </Link>
      <div className='flex items-center justify-between'>
        <p> ${post.price}</p>
        <button className='bg-gray-200 rounded text-gray-500 flex items-center px-2'>
          <i class='bx bxs-cart text-2xl text-gray-500'></i>
          <span>add to cart</span>
        </button>
      </div>
      
    </div>
  )
  }
