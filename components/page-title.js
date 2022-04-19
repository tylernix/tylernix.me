export default function PageTitle({ children }) {
    return (
        <h1 className="font-electronix mt-16 mb-8 text-6xl md:text-7xl text-prussian-blue">
        {children} <span className="-ml-2 lg:-ml-4 text-6xl md:text-7xl text-imperial-red" >.</span>
        </h1>
    )
}
  