const {Link} = ReactRouterDOM;
function BottomNav() {
  return (

    <div class="fixed z-40 w-full h-14 max-w-lg -translate-x-1/2 bg-gray-900 bottom-0 left-1/2">
          <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
            <button type="button" class="flex items-center justify-center">
              <i class="bx bx-menu text-2xl text-gray-500"></i>
            </button>
            <button type="button" class=" flex items-center justify-center">
              <i class='bx bx-search text-2xl text-gray-500'></i>
            </button>
            <button type="button" class="flex items-center justify-center">
              <Link to='/'> <i class='bx bxs-home text-2xl text-gray-500'></i></Link>
            </button>
            <button type="button" class="flex items-center justify-center">
              <Link to='/products'> <i class='bx bxs-cart text-2xl text-gray-500'></i></Link>
            </button>
            <button type="button" class="flex items-center justify-center">
              <a href='/profile'> <i class='bx bxs-user text-2xl text-gray-500'></i></a>
            </button>
          </div>
        </div>

  );
    }
