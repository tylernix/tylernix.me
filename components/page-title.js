export default function PageTitle({ children }) {
    return (
        <h1 className="mt-16 mb-8 text-6xl md:text-7xl tracking-tighter leading-tight text-prussian-blue">
        {children} <span className="text-6xl md:text-7xl text-imperial-red" >.</span>
        </h1>
    )
}
  