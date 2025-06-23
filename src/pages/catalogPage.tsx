import Products from "../components/Products"

const catalogPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl sm:text-3xl font-bold  mb-4 text-center pt-10">Наші товари</h1>
      <Products />
    </div>
  )
}

export default catalogPage
