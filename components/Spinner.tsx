export const Spinner = () => {
  return (
    <div className='fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-900 bg-opacity-75'>
      <div className='h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-green-500'></div>
    </div>
  )
}
