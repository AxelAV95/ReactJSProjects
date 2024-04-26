import './App.css'

function App() {

  return (
    <>


      <div class="relative overflow-x-auto m-3 mt-5">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="hidden lg:table-cell px-6 py-3">
                Color
              </th>
              <th scope="col" class="hidden sm:table-cell px-6 py-3">
                Category
              </th>
              <th scope="col" class="hidden sm:table-cell px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
                <dl className='lg:hidden'>
                  <dt className='sr-only '>Color</dt>
                  <dd className='sm-hidden'>Silver</dd>
                  <dt className='sr-only sm:hidden'>Category</dt>
                  <dd className='sm:hidden'>Laptop</dd>
                  <dt className='sr-only sm:hidden'>Price</dt>
                  <dd className='sm:hidden'>$2999</dd>
                  {/* <dt className='sr-only'>Price</dt>
                  <dd>$2999</dd> */}
                </dl>
              </th>
              <td class="hidden lg:table-cell px-6 py-4">
                Silver
              </td>
              <td class="hidden sm:table-cell px-6 py-4">
                Laptop
              </td>
              <td class="hidden sm:table-cell px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                <div className='flex'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3'>Edit</button>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
                </div>

              </td>
            </tr>
            {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td class="hidden sm:table-cell px-6 py-4">
                White
              </td>
              <td class="hidden sm:table-cell px-6 py-4">
                Laptop PC
              </td>
              <td class="px-6 py-4">
                $1999
              </td>
              <td class="px-6 py-4">
                <div className='flex'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3'>Edit</button>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
                </div>

              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td class="hidden sm:table-cell px-6 py-4">
                Black
              </td>
              <td class="hidden sm:table-cell px-6 py-4">
                Accessories
              </td>
              <td class="px-6 py-4">
                $99
              </td>
              <td class="px-6 py-4">
                <div className='flex'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3'>Edit</button>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
                </div>

              </td>
            </tr> */}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
